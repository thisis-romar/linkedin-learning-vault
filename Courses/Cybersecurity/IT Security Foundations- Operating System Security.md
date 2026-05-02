---
type: course
cssclasses:
  - lle-course
slug: it-security-foundations-operating-system-security-14816522
url: "https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522"
duration_minutes: 124
duration: 2h 4m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFhRSWoiaaqLQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1651076841233?e=2147483647&amp;v=beta&amp;t=ak7CeNBtS2PMTyNCOYd3o28Egi0fXKu7vW5xBEpq3nI"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Become an IT Security Specialist]]'
  - '[[Cybersecurity Fundamentals]]'
prev_courses:
  - '[[Cybersecurity Foundations]]'
  - '[[Security Frameworks Fundamentals]]'
next_courses:
  - '[[IT Security Foundations- Network Security]]'
  - '[[IT Security Foundations- Network Security]]'
path_nav: '[{"path":"Become an IT Security Specialist","position":3,"total":12,"prev":"Cybersecurity Foundations","next":"IT Security Foundations- Network Security"},{"path":"Cybersecurity Fundamentals","position":7,"total":12,"prev":"Security Frameworks Fundamentals","next":"IT Security Foundations- Network Security"}]'
path_count: 2
tags:
  - course
  - topic/security
  - topic/cloud-computing
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/IT%20Security%20Foundations-%20Operating%20System%20Security.md)

![IT Security Foundations: Operating System Security](https://media.licdn.com/dms/image/v2/C560DAQFhRSWoiaaqLQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1651076841233?e=2147483647&amp;v=beta&amp;t=ak7CeNBtS2PMTyNCOYd3o28Egi0fXKu7vW5xBEpq3nI)

# IT Security Foundations: Operating System Security

> Many attacks target the operating system, which makes OS-level security just as important to your organization as network security. In this course, instructor Lisa Bock details what’s actually involved in securing an operating system, whether you’re using Windows, macOS, or Linux. Lisa reviews user authentication, the structure of Active Directory, and how to assign permissions and create audit po

> [LinkedIn Learning](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522) | 2h 4m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Ensuring system security](#ensuring-system-security)
  - [Resources](#resources)
- [**1. Working with a Window OS**](#1-working-with-a-window-os) (7 videos)
  - [Securing the Windows OS](#securing-the-windows-os)
  - [Visualizing the Windows architecture](#visualizing-the-windows-architecture)
  - [Dissecting the NTFS](#dissecting-the-ntfs)
  - [NTFS demo](#ntfs-demo)
  - [Controlling folder access](#controlling-folder-access)
  - [Using runas](#using-runas)
  - [Exploring User Account Control (UAC)](#exploring-user-account-control-uac)
- [**2. Locking Down Linux and macOS**](#2-locking-down-linux-and-macos) (4 videos)
  - [Protecting your macOS](#protecting-your-macos)
  - [Interacting with a Linux OS](#interacting-with-a-linux-os)
  - [Using the Linux file system](#using-the-linux-file-system)
  - [Avoiding malware on a Linux host](#avoiding-malware-on-a-linux-host)
- [**3. Understand User Authentication**](#3-understand-user-authentication) (5 videos)
  - [Identify and authenticate](#identify-and-authenticate)
  - [Passwords and complexity](#passwords-and-complexity)
  - [Smart cards and tokens](#smart-cards-and-tokens)
  - [Biometric identification](#biometric-identification)
  - [Multi-factor authentication](#multi-factor-authentication)
- [**4. Protecting and Monitoring the OS**](#4-protecting-and-monitoring-the-os) (4 videos)
  - [Using a firewall](#using-a-firewall)
  - [Locking down the browser](#locking-down-the-browser)
  - [Hardening the OS](#hardening-the-os)
  - [Protocol good practices](#protocol-good-practices)
- [**5. Providing Email Protection**](#5-providing-email-protection) (3 videos)
  - [Email clients and servers](#email-clients-and-servers)
  - [Email and SPAM](#email-and-spam)
  - [PTR records](#ptr-records)
- [**6. Understanding Encryption**](#6-understanding-encryption) (5 videos)
  - [Cryptographic techniques](#cryptographic-techniques)
  - [Symmetric encryption](#symmetric-encryption)
  - [Asymmetric encryption](#asymmetric-encryption)
  - [Diving into hash algorithms](#diving-into-hash-algorithms)
  - [Public Key Infrastructure](#public-key-infrastructure)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Ensuring system security](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ensuring-system-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ensuring-system-security?u=76281980&t=0)** - [Lisa] An operating system provides integration of devices, manages files and folders, and is the interface between the user applications and the network.
>
> **[0:12](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ensuring-system-security?u=76281980&t=12)** However, the operating system is where many attacks are launched and targeted.
>
> **[0:18](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ensuring-system-security?u=76281980&t=18)** In this course, I'll begin by reviewing methods to secure [[Windows]], Mac and [[Linux]] operating system.
>
> **[0:25](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ensuring-system-security?u=76281980&t=25)** I'll introduce ways to provide user authentication and then cover methods to protect and secure the operating system such as using a firewall.
>
> **[0:35](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ensuring-system-security?u=76281980&t=35)** We'll then briefly discuss best practices for securing email, along with some basics of encryption.
>
> **[0:40](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ensuring-system-security?u=76281980&t=40)** At the end of this course you'll have a better understanding of what's involved when securing an operating system.
>
> **[0:48](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ensuring-system-security?u=76281980&t=48)** Hello, my name is Lisa Bock and I'm a security ambassador.
>
> **[0:52](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ensuring-system-security?u=76281980&t=52)** Are you ready to lock down your system to minimize the potential for attack?
>
> **[0:57](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ensuring-system-security?u=76281980&t=57)** Then let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[Linux]] (1)
> **Analogies:** such as (1)
> **Speakers:** - [lisa] (1)

#### [Resources](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/resources?u=76281980&t=0)** - [Instructor] This course is a beginner course designed to introduce you to Operating System Security.
>
> **[0:06](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/resources?u=76281980&t=6)** I cover a lot of information, but I have provided a file with the links to the resources found on the exercise file, on the welcome screen.
>
> **[0:16](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/resources?u=76281980&t=16)** So that you can follow along, select that, and that will take you to all the links I reference in the course.

> [!info]- Semantic Content
>
> **Exercise Files:** exercise file (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Working with a Window OS

[↑ Back to Table of Contents](#table-of-contents)

#### [Securing the Windows OS](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=0)** - [Instructor] Today, desktop and laptop computers are used in industry for data entry, research and general duties.
>
> **[0:09](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=9)** In the corporate world, [[Microsoft]] [[Windows]] is the most commonly used operating system, which makes Windows an optimal target for malicious actors.
>
> **[0:20](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=20)** The good news is that there many things that you can do to secure your system.
>
> **[0:24](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=24)** Depending on the version, it only takes a few simple steps to lock down your system and minimize the effects of an attack.
>
> **[0:32](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=32)** [[Windows 10]] Home version is a popular operating system used by remote workers, students, and [[Microsoft Office|office]] personnel.
>
> **[0:41](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=41)** Even though it's a basic version, there are still several features that will add another layer of security.
>
> **[0:47](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=47)** Enforcing a login is the first line of defense.
>
> **[0:51](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=51)** With Windows, you'll have several options.
>
> **[0:53](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=53)** Windows 10 Home will default at using your Windows account when setting up your system.
>
> **[0:59](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=59)** Although this is convenient, a more secure option is to create a local login.
>
> **[1:04](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=64)** You might also want to set up additional users.
>
> **[1:08](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=68)** It's a good idea to create a login for each family member or team member in the office.
>
> **[1:14](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=74)** Use the administrator account sparingly.
>
> **[1:16](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=76)** Use this account for when performing duties that need elevated permissions, such as installing new software or updates.
>
> **[1:24](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=84)** Keep in mind, you should only use the administrator account for those specific reasons, then once done, revert back to your regular account.
>
> **[1:34](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=94)** You could also utilize Windows Hello.
>
> **[1:37](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=97)** With Windows Hello, you can use either a pen, facial recognition, or fingerprint to gain access to the system.
>
> **[1:44](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=104)** This will provide a faster, more secure way to log in.
>
> **[1:48](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=108)** Now keep in mind, if you do want to use facial recognition or your fingerprint, you will need to have a compatible device, such as a camera or fingerprint reader to use this option.
>
> **[2:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=120)** Windows [[Microsoft Defender|Defender]] comes with the operating system and constantly monitors your system for threats.
>
> **[2:06](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=126)** It will activate immediately and begin monitoring your system.
>
> **[2:10](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=130)** Although you may choose to use a third party anti-malware solution, Windows Defender provides robust antivirus protection and has a built in firewall as well to block any unwanted intrusions.
>
> **[2:25](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=145)** Just as you would any other operating system, keeping Windows updated is an essential first line of defense.
>
> **[2:33](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=153)** Update provide the necessary security patches that minimize your exposure to malicious activity.
>
> **[2:40](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=160)** And back up your data.
>
> **[2:42](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=162)** In case of data loss or a system crash, backing up your data will allow you to recover quickly.
>
> **[2:49](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=169)** You could use a trusted cloud provider, along with local storage for critical files and sensitive data.
>
> **[2:56](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=176)** Another good practice is to use system restore and capture restore points prior to making major changes to the operating system, such as installing new software.
>
> **[3:07](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=187)** This will then give you the ability to roll back and restore if the upgrade causes an unstable system or the upgrade is not compatible with any production software, such as accounting software.
>
> **[3:20](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=200)** If you or your organization have Windows 10 Pro or Windows 10 Enterprise, you can take advantage of BitLocker, a method used to encrypt your data.
>
> **[3:31](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=211)** Now this is a powerful feature, as when used, the only way that you can access the data is if you have the key.
>
> **[3:39](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=219)** Now I have some other resources here that you can take a look at on ways to protect your Windows operating system.
>
> **[3:46](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=226)** In addition, you can take a look at the article by Forbes on how to secure Microsoft Windows.
>
> **[3:52](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=232)** But the bottom line is when working with the Windows operating system, it only takes a few simple steps to lock down your system and minimize the effects of an attack.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (12), [[Windows 10]] (4), [[Microsoft]] (2), [[Microsoft Office|Office]] (2), [[Microsoft Defender|Defender]] (2)
> **Analogies:** such as (4)
> **Definitions:** is a  (2), is an  (1)
> **Warnings:** keep in mind (2)
> **Best Practices:** good practice (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Visualizing the Windows architecture](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=0)** - Today, desktop and laptop computers are used in industry for data entry, research, and general duties.
>
> **[0:08](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=8)** In the corporate world, [[Microsoft]] [[Windows]] is the most commonly used operating system as it represents approximately 75% of the global market.
>
> **[0:19](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=19)** Because of the large market share, it's important to understand the Windows architecture as this represents another attack factor.
>
> **[0:28](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=28)** So let's talk about the [[Hardware]] abstraction layer and then compare user and kernel mode.
>
> **[0:35](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=35)** On a Windows machine, a CPU operates in user mode and kernel mode.
>
> **[0:41](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=41)** In this figure, on the top is the user mode.
>
> **[0:44](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=44)** Installed applications run in this mode, and that includes user mode drivers and the Windows application programming interface.
>
> **[0:53](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=53)** On the bottom is the kernel mode.
>
> **[0:55](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=55)** Within that the operating system runs in this mode and includes other kernel mode drivers, the operating system kernel and file system drivers.
>
> **[1:07](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=67)** Below that we see the hardware abstraction layer followed by the hardware.
>
> **[1:12](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=72)** The kernel is the core of the operating system and it has control over the entire computer.
>
> **[1:19](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=79)** The kernel is like a translator and it handles all of the input and output requests, memory and all the peripherals connected to the computer.
>
> **[1:30](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=90)** The hardware abstraction layer is the software that handles all the communication between the kernel and the hardware.
>
> **[1:38](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=98)** So now let's compare user mode and kernel mode.
>
> **[1:42](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=102)** Code executing in user mode will include user applications and are isolated as they have no direct access to the hardware or memory location.
>
> **[1:54](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=114)** When user mode code runs, it's granted its own restricted address space by the kernel along with a process created specifically for the application.
>
> **[2:04](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=124)** Any request must go through the operating system to access hardware resources.
>
> **[2:10](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=130)** Because of this isolation, crashes in user mode are restricted to the application only.
>
> **[2:16](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=136)** And this helps prevent the operating system and other applications from crashing if that application crashes.
>
> **[2:25](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=145)** Code executing and kernel mode has unrestricted access to the underlying hardware and it's capable of executing any CPU instruction and can reference any memory address directly.
>
> **[2:39](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=159)** Now understanding the windows architecture is important, as when dealing with malicious code, you may encounter a rootkit.
>
> **[2:48](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=168)** Now, a rootkit is a set of tools that enables an unauthorized user to gain access to a computer system undetected.
>
> **[2:57](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=177)** Rootkits are almost always designed to run with super user privileges that are normally reserved for the CIS admin or root user.
>
> **[3:07](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=187)** A good rootkit will sniff passwords, create hidden directories and be able to avoid any security measures as it communicates with the network.
>
> **[3:18](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=198)** A malicious actor can develop a rootkit in user mode or kernel mode.
>
> **[3:24](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=204)** A common rootkit is a user mode rootkit with administrative privileges.
>
> **[3:30](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=210)** A user mode rootkit changes the applications at a user level as well as providing backdoor access and it can disable system and security services, hide processes, files and even conceal network interfaces.
>
> **[3:46](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=226)** However, a user mode rootkit does have a greater chance of being detected by anti-[[Malware Detection]].
>
> **[3:54](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=234)** A kernel mode rootkit is a more advanced rootkit as it places the rootkit at the same level as the operating system and anti-malware protection software.
>
> **[4:06](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=246)** Although a kernel mode rootkit is more advanced.
>
> **[4:09](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=249)** It's difficult to remain truly undetected mainly because a kernel mode rootkit is unstable and tends to cause various system crashes.
>
> **[4:19](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=259)** And once this instability is recognized, this generally leads to someone discovering the root kit.
>
> **[4:27](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=267)** So when dealing with the Windows architecture, it's important to understand user mode and kernel mode and the hardware abstraction layer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (9), [[Windows]] (6), [[Microsoft]] (1), [[Malware Detection]] (1)
> **Env Vars:** cpu (2), cis (1)
> **Definitions:** is a  (3)
> **Speakers:** - today (1)

#### [Dissecting the NTFS](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=0)** - [Presenter] The file system itself can provide an additional level of security.
>
> **[0:05](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=5)** All [[Windows]] operating systems use the New Technology File System, or NTFS.
>
> **[0:12](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=12)** Prior to that, the File Allocation Table, or FAT, was used.
>
> **[0:17](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=17)** FAT is as simple Windows file system and is the table that exists at the very top of the volume.
>
> **[0:24](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=24)** FAT has serious limitations in providing security.
>
> **[0:28](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=28)** It only supports read-only, hidden, system and archive file attributes, and not the wide variety of permissions that are available in NTFS.
>
> **[0:40](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=40)** However, FAT is still supported.
>
> **[0:43](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=43)** NTFS is what is used in today's Windows operating systems.
>
> **[0:49](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=49)** NTFS has advanced ability to secure the file system by granting or denying various permissions.
>
> **[0:56](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=56)** This allows control over which users and groups can gain access to the files and folders stored on the NTFS volume.
>
> **[1:05](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=65)** With NTFS, user-defined attributes can be added to a file.
>
> **[1:11](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=71)** And for [[Accountability]], NTFS adds a timestamp indicating when the file was last accessed.
>
> **[1:19](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=79)** Permissions define the type of access granted, such as full control, modify, list folder contents, read and write, and can be applied to folders and files and [[Active Directory]] objects.
>
> **[1:35](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=95)** Only drives formatted as New Technology File System will have the permissions tab.
>
> **[1:42](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=102)** The ability to assign permissions is powerful.
>
> **[1:46](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=106)** However, it can be difficult to sort out a permission problem, so you should become familiar with the various permissions and how they're enforced.
>
> **[1:55](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=115)** If a drive is formatted with NTFS, permissions can be set on shared drives and folders.
>
> **[2:02](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=122)** One concept is that of inheritance.
>
> **[2:06](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=126)** Inheritance means that permissions will propagate from the parent to the child.
>
> **[2:11](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=131)** Inheritance is used in the file system and active directory permissions.
>
> **[2:16](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=136)** However, it does not apply to shared permissions.
>
> **[2:20](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=140)** The different types of permissions in NTFS are explicit permission.
>
> **[2:27](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=147)** This is applied directly to the file or folder.
>
> **[2:31](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=151)** Inherited, permissions that are granted to a folder will extend into child objects, such as sub folders or files within the parent folder.
>
> **[2:42](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=162)** And effective permissions consist of explicit and any inherited permissions.
>
> **[2:49](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=169)** File and folder permissions are based on the permissions granted to each individual user at the Windows login, regardless if they're on the local machine or accessing the resource over the network via a shared folder.
>
> **[3:04](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=184)** A driver folder can be shared, and clients can have access to the files on the network by using the Universal Naming convention.
>
> **[3:13](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=193)** New Technology File System permissions are full control, modify, read and execute, list folder contents, read, write and special permissions.
>
> **[3:26](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=206)** Share permissions are full control, change, read and no access.
>
> **[3:33](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=213)** Permissions are used according to how the resource is accessed.
>
> **[3:38](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=218)** Share permissions are effective if a resource is accessed through the network.
>
> **[3:43](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=223)** But New Technology File System permissions are effective all the time and are in effect whether the user is logged in locally or across a network.
>
> **[3:54](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=234)** If both share and New Technology File System permissions are applied to the same resource, the most restrictive permission will be enforced, meaning if no access is set on a New Technology File System folder, and full control is set on the share, an access level of no access will result.
>
> **[4:17](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=257)** In a [[Microsoft]] operating system, there are several hidden administrative shares that are automatically created and indicated by a dollar sign at the end of the share name.
>
> **[4:29](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=269)** Permissions on hidden administrative shares cannot be modified.
>
> **[4:35](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=275)** As you can see, the file system itself can provide an additional level of security, and the New Technology File System has extensive and granular permissions to restrict or allow access to files and folders.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (4), [[Active Directory]] (2), [[Accountability]] (1), [[Microsoft]] (1)
> **Env Vars:** ntfs (9), fat (4)
> **Analogies:** such as (2)
> **Definitions:** means that (1)
> **Speakers:** - [presenter] (1)

#### [NTFS demo](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ntfs-demo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ntfs-demo?u=76281980&t=0)** - [Announcer] Now we've taken a look at the new technology file system permission behavior.
>
> **[0:05](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ntfs-demo?u=76281980&t=5)** Now, let's take a look at a folder, and look at the permissions.
>
> **[0:09](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ntfs-demo?u=76281980&t=9)** I'm in Server 2016, and I created a folder Admin.
>
> **[0:15](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ntfs-demo?u=76281980&t=15)** I'll right click and go to Properties and here's where you can see the permissions; Go to Security and here we see group or user names, and then down below the permissions.
>
> **[0:29](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ntfs-demo?u=76281980&t=29)** Here's a user called Sherlock and then down below, you can see what permissions there are for Sherlock.
>
> **[0:37](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ntfs-demo?u=76281980&t=37)** If you want to change the permissions, we'll go to Edit go to Sherlock and then make some modifications here.
>
> **[0:47](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ntfs-demo?u=76281980&t=47)** Sometimes you might want to see special permissions or advanced settings.
>
> **[0:52](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ntfs-demo?u=76281980&t=52)** We'll click Advanced to see those.
>
> **[0:56](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ntfs-demo?u=76281980&t=56)** Once you go in, you can see the permission entries.
>
> **[1:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ntfs-demo?u=76281980&t=60)** For example, we see Sherlock and in this case we can go to Edit and it allows us to see some of the basic permissions that are on this folder.
>
> **[1:13](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ntfs-demo?u=76281980&t=73)** We can also show advanced permissions if we go here.
>
> **[1:18](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ntfs-demo?u=76281980&t=78)** And as you can see, some of the advanced permissions that have been selected and we'll say, OK.
>
> **[1:25](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ntfs-demo?u=76281980&t=85)** What happens when there's share permissions?
>
> **[1:27](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ntfs-demo?u=76281980&t=87)** Like share folder permissions, new technology file system permissions are a combination of group permissions assigned and any additional permission attributes that are assigned to that user.
>
> **[1:40](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ntfs-demo?u=76281980&t=100)** In some cases, you're really not sure why someone doesn't have permission to do something.
>
> **[1:45](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ntfs-demo?u=76281980&t=105)** You need to go to Effective Access.
>
> **[1:49](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ntfs-demo?u=76281980&t=109)** This tab allows us to view the effective permissions for a user group or device account.
>
> **[1:57](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ntfs-demo?u=76281980&t=117)** Now, if I go to select user, you would go in and type Sherlock.
>
> **[2:05](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ntfs-demo?u=76281980&t=125)** Now, we'll say Check Names and we'll say, OK.
>
> **[2:08](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ntfs-demo?u=76281980&t=128)** and now I can say view effective access.
>
> **[2:12](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ntfs-demo?u=76281980&t=132)** And here we see exactly what has happened and what effectively Sherlock has permission to do.
>
> **[2:20](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ntfs-demo?u=76281980&t=140)** As you see anything with a red X means that Sherlock is not allowed to do these things and then we'll say, OK.
>
> **[2:29](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ntfs-demo?u=76281980&t=149)** Now, permissions can get complicated, but as you can see, there's a way that you can go in and and view the permissions for that object.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (7)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [announcer] (1)

#### [Controlling folder access](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980&t=0)** - [Instructor] One of the most predominant threats today is ransomware.
>
> **[0:05](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980&t=5)** Now you can get a ransomware attack in a number of different ways.
>
> **[0:09](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980&t=9)** You could visit a malicious website.
>
> **[0:11](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980&t=11)** You can get ransomware from opening file attachments or by clicking on a malicious link.
>
> **[0:19](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980&t=19)** One way to defend against a ransomware attack is by using a feature called controlled folder access.
>
> **[0:26](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980&t=26)** Now, this feature is available in all versions of [[Windows 10]] and above.
>
> **[0:32](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980&t=32)** Now I found some resources that might help your understanding a little bit better.
>
> **[0:37](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980&t=37)** First, we can see this article protect your PC from ransomware.
>
> **[0:41](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980&t=41)** If we scroll down, you can see some best practice suggestions on how you can keep your PC secure.
>
> **[0:48](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980&t=48)** Now, these are standard.
>
> **[0:49](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980&t=49)** Things such as make sure your PC is up-to-date with the latest version of [[Windows]], and has the latest patches.
>
> **[0:56](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980&t=56)** Make sure Windows Security is turned on to help protect you from viruses and malware.
>
> **[1:01](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980&t=61)** And in Windows 10 or 11, turn on control folder access.
>
> **[1:06](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980&t=66)** And this will help protect important local folders from unauthorized programs, such as ransomware or other malware.
>
> **[1:14](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980&t=74)** Now this article is from [[Microsoft]], and it steps through the process but I did find one that gave us some visuals.
>
> **[1:22](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980&t=82)** Here at Bleeping Computer, I found an article that outlines how to step through the process of activating controlled folder access.
>
> **[1:32](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980&t=92)** So you want to go in, and open Windows [[Microsoft Defender|Defender]] Security Center, and that's the first stop.
>
> **[1:38](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980&t=98)** Once there, you want to select virus and threat protection, and there you'll see controlled folder access.
>
> **[1:46](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980&t=106)** Toggle it on, and then you'll be able to select what folders you want protected.
>
> **[1:51](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980&t=111)** Now once there, you'll see that the operating system has selected some folders to be protected but if one was missed or you want something outside of the range of what the operating system selected, you can add a protected folder.
>
> **[2:06](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980&t=126)** Now understanding that once the folders are protected, you'll have to white list any applications that you want to access to edit, create or remove files from the protected folders.
>
> **[2:18](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980&t=138)** Now, this could be cumbersome of course because you have to go through every time.
>
> **[2:22](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980&t=142)** 'Cuz it will tell you that you won't be allowed to modify it without selecting an allowing an app through the controlled folder access.
>
> **[2:30](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980&t=150)** But once it's secure, you can [[Representational State Transfer (REST)|rest]] assure, it won't let any unauthorized application access the folder.
>
> **[2:37](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980&t=157)** And then it goes through 'cuz there's some other ways to enable controlled folder access.
>
> **[2:42](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980&t=162)** So understand, ransomware is a real threat.
>
> **[2:45](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980&t=165)** So protect yourself by using controlled folder access, a feature available in all versions of Windows 10 and above.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (3), [[Windows]] (3), [[Microsoft]] (1), [[Microsoft Defender|Defender]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** scroll down (1), toggle (1)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [Using runas](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-runas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-runas?u=76281980&t=0)** - To ensure system security, you should separate roles and privileges and enforce granular control that includes people and processes.
>
> **[0:11](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-runas?u=76281980&t=11)** For example, the role of email administrator should be separate from the role of system administrator even if they're the same person.
>
> **[0:21](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-runas?u=76281980&t=21)** That includes separate login and role-based permissions.
>
> **[0:25](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-runas?u=76281980&t=25)** We have separate accounts for separate roles so that any tasks are performed using the rule of least privilege.
>
> **[0:33](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-runas?u=76281980&t=33)** Using the role of administrator should be used only when acting as an administrator.
>
> **[0:41](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-runas?u=76281980&t=41)** The reasoning behind this is simple.
>
> **[0:44](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-runas?u=76281980&t=44)** While in the role of administrator, you can do anything to the system.
>
> **[0:49](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-runas?u=76281980&t=49)** While any administrative tasks are done to improve the system or change the settings for better functionality, there are times that you might do something accidentally such as delete folders or files or change the system integrity in a negative way.
>
> **[1:06](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-runas?u=76281980&t=66)** For example, while surfing the net you might get a drive by malware attack.
>
> **[1:12](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-runas?u=76281980&t=72)** If you are logged in as an administrator, the malware will affect the system with all the rights and privileges of the administrator.
>
> **[1:21](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-runas?u=76281980&t=81)** And once that happens, this will change the system integrity.
>
> **[1:27](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-runas?u=76281980&t=87)** Because of that, it's best to log in as a normal user and do most of your day to day activities to keep your system more secure.
>
> **[1:37](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-runas?u=76281980&t=97)** Now, I'm in server 2016 as a user called Sherlock.
>
> **[1:38](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-runas?u=76281980&t=98)** Now, I'm in server 2016 as a user called Sherlock.
>
> **[1:42](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-runas?u=76281980&t=102)** But I want to go into [[Powershell]] as the administrator.
>
> **[1:52](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-runas?u=76281980&t=112)** I go into [[Windows]] PowerShell but now I right click and say, run as administrator.
>
> **[1:59](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-runas?u=76281980&t=119)** It will then prompt me for a password.
>
> **[2:05](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-runas?u=76281980&t=125)** Now, once in, I'll act as administrator and I can do whatever is necessary for the system.
>
> **[2:13](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-runas?u=76281980&t=133)** Sometimes while you're working in a system, you might forget who you are.
>
> **[2:18](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-runas?u=76281980&t=138)** A handy command to use is who am I.
>
> **[2:22](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-runas?u=76281980&t=142)** And this will tell you if you are logged in as the administrator.
>
> **[2:26](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-runas?u=76281980&t=146)** Now we'll simply exit.
>
> **[2:30](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-runas?u=76281980&t=150)** And once you've completed any necessary tasks, you close the program and this will disable the run as feature and return you to your normal account.
>
> **[2:41](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-runas?u=76281980&t=161)** So, good practice includes using run as only when performing administrative tasks as this can help prevent malicious software from being installed or make any changes to your computer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (2), [[Windows]] (1)
> **Analogies:** for example (2), such as (1)
> **Tools:** powershell (2)
> **Best Practices:** it's best to (1), good practice (1)
> **CLI Commands:** make (1)
> **Speakers:** - to (1)

#### [Exploring User Account Control (UAC)](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=0)** - [Narrator] User Account Control is a feature in [[Windows]] that protects the security of the operating system.
>
> **[0:07](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=7)** When a program wants to make a change, a dialogue box will open and prompt you to select whether or not you want the app to make changes.
>
> **[0:16](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=16)** Prompting the user makes you take a second and think about what you're doing and maybe will stop you from installing something that isn't safe.
>
> **[0:25](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=25)** This can help prevent the installation of malicious software.
>
> **[0:30](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=30)** Let's take a look at the four User Account Control settings.
>
> **[0:34](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=34)** I went to search and I started typing User Account Control.
>
> **[0:40](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=40)** Now I've opened the dialogue box.
>
> **[0:42](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=42)** Let's take a look at the settings.
>
> **[0:44](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=44)** As you can see, you can move the slider up and down, and it tells you a little bit about each level.
>
> **[0:50](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=50)** Let's take a look first at the most restrictive, always notify.
>
> **[0:55](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=55)** If I say always notify me, you'll be notified before any apps make changes to the PC that require any administrator permissions.
>
> **[1:05](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=65)** When this happens, your screen will dim.
>
> **[1:08](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=68)** At this point, you must either approve or deny the request in that dialogue box before you can do anything else on your PC.
>
> **[1:17](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=77)** As you can imagine, this is the most secure setting.
>
> **[1:21](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=81)** When the prompt appears, you should really look at the contents of the dialogue box before allowing any changes made to the PC.
>
> **[1:30](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=90)** The next level states, "Notify me only when apps try to make changes to my computer."
>
> **[1:37](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=97)** Now, this is the default level.
>
> **[1:40](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=100)** You'll be notified before any apps make changes to the PC that require administrator permissions and also if an app tries to make changes to Windows settings; however, you won't be notified if you tried to make changes to Windows settings that require administrator permissions.
>
> **[1:59](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=119)** At this point, it's usually safe to make changes to Windows settings without you being notified.
>
> **[2:05](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=125)** However, malicious might take advantage of this by using these apps to install files or change settings on your PC, so you really should be careful about which apps you want to allow on your PC.
>
> **[2:20](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=140)** Notify me only when programs or apps try to make changes to my computer.
>
> **[2:26](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=146)** Now, in this case, you won't see your desktop dim at all.
>
> **[2:31](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=151)** Using this level increases the [[Security Risk]], so be careful, especially since malware might try to take advantage of this setting.
>
> **[2:40](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=160)** However, if you're using strong antimalware protection, this shouldn't pose a serious risk.
>
> **[2:47](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=167)** In first three cases, if you're signed in with a standard user account, any changes that require administrator permissions will automatically be denied.
>
> **[2:58](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=178)** The last setting is never notify.
>
> **[3:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=180)** This is the least secure setting because when you say don't notify me, you're pretty much turning off any User Account Controls.
>
> **[3:09](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=189)** It's not recommended.
>
> **[3:11](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=191)** This opens your computer to a lot of security risks, so you should always be careful about what you run because they'll have the same access as you do.
>
> **[3:22](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=202)** That includes a potential for the software to gain access and make changes to any of the areas that are protected: any personal data, saved files, or anything else that's stored on your PC.
>
> **[3:37](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=217)** Again, this is one you really shouldn't use as it's not recommended.
>
> **[3:41](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=221)** So let's take a look.
>
> **[3:43](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=223)** We'll most likely set this back up at the default and keep it there to notify me only when apps try to make changes to my computer.
>
> **[3:55](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=235)** As you can see, it said, "Do you want to allow this app to make changes to your device?"
>
> **[4:01](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=241)** And I'm going to say yes.
>
> **[4:04](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=244)** When working with User Account Control, you might see a slightly different appearance, depending on the version of Windows that you're using.
>
> **[4:12](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=252)** For more information, you can visit this page which talks about User Account Control.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (5), [[Security Risk]] (1)
> **CLI Commands:** make (12)
> **Best Practices:** recommended (2), you should always (1)
> **Warnings:** be careful (3)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)


### 2. Locking Down Linux and macOS

[↑ Back to Table of Contents](#table-of-contents)

#### [Protecting your macOS](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=0)** - [Instructor] For many years, the Mac operating system has had a reputation of being more secure.
>
> **[0:06](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=6)** However, Apple laptops and desktops have gained popularity in the last two decades.
>
> **[0:13](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=13)** Along with the increase in popularity comes the threat of a cyber attack.
>
> **[0:18](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=18)** In this segment, we'll review steps that you can take to secure your Mac.
>
> **[0:23](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=23)** Similar to most operating systems, the macOS is constantly evolving.
>
> **[0:29](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=29)** Apple incorporates security into their system.
>
> **[0:32](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=32)** I'm here at this website where you can learn more about what they do to incorporate security.
>
> **[0:38](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=38)** Some of the features include chip-level security to protect your login password and automatically encrypt your data.
>
> **[0:45](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=45)** It constantly updates with the latest security patches and there's also the ability to locate your Mac in case it's lost or stolen.
>
> **[0:55](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=55)** Of course, there are other common best practice guidelines that users can do to improve the security of their system.
>
> **[1:02](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=62)** You'll want to set up your Mac to log out whenever your machine has been idle for any length of time.
>
> **[1:09](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=69)** By default, the administrator is the person who initially sets up the Mac.
>
> **[1:13](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=73)** Over time, you may need to add someone else as an administrator.
>
> **[1:18](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=78)** However, it's recommended that you limit the number of administrative users.
>
> **[1:23](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=83)** This will provide an additional layer of security.
>
> **[1:27](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=87)** You'll also want to force users to log into the system.
>
> **[1:30](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=90)** This will prevent unauthorized entities from accessing the system.
>
> **[1:35](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=95)** Along the same concept, you'll also want to create a unique ID for each user that accesses the system.
>
> **[1:42](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=102)** Once set up, this will restrict access to personal files and settings.
>
> **[1:48](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=108)** Setting up users, guests, and groups on a Mac is easy.
>
> **[1:52](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=112)** And I'm here at this webpage where it steps you through the process of setting up users on your Mac.
>
> **[1:59](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=119)** Now, when setting up a user, you'll want to select a password that is strong and resists easily being guessed.
>
> **[2:05](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=125)** Here we can find some tips for creating a secure password.
>
> **[2:10](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=130)** As you can see, the password assistant will display how secure the password is as you enter it.
>
> **[2:17](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=137)** And one of the best methods to secure your data from prying eyes is to use encryption.
>
> **[2:23](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=143)** The Mac operating system has an option called FileVault, which encrypts your data and prevents it from being seen or modified.
>
> **[2:31](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=151)** And here it gives you a little bit more details on encrypting your data with FileVault.
>
> **[2:37](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=157)** Now, when using FileVault, you want to make sure that you protect your key as this is the only way that you'll be able to access your data.
>
> **[2:46](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=166)** A Mac operating system can be just as vulnerable as any other operating system if not protected.
>
> **[2:54](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=174)** Take steps to protect your Mac and minimize the threat of an attack.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Best Practices:** best practice (1), recommended (1)
> **Prerequisites:** set up (2)
> **Code Identifiers:** macos (1)
> **Cross-References:** in the last (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Interacting with a Linux OS](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/interacting-with-a-linux-os?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/interacting-with-a-linux-os?u=76281980&t=0)** - [Instructor] When working in [[Linux]], you can either use a graphical user interface or a shell.
>
> **[0:05](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/interacting-with-a-linux-os?u=76281980&t=5)** In this segment, we'll compare the two along with some basic Linux commands that you might use while in the shell.
>
> **[0:13](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/interacting-with-a-linux-os?u=76281980&t=13)** When you first log in to Linux, you'll most likely be greeted with a graphical user interface.
>
> **[0:19](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/interacting-with-a-linux-os?u=76281980&t=19)** While an operating system doesn't require a GUI to function, they're considered more user friendly than the command-line interface.
>
> **[0:28](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/interacting-with-a-linux-os?u=76281980&t=28)** Depending on the Linux distribution that you're using, you'll see a different interface.
>
> **[0:33](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/interacting-with-a-linux-os?u=76281980&t=33)** Two common options are GNOME and K Desktop Environment, or KDE.
>
> **[0:40](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/interacting-with-a-linux-os?u=76281980&t=40)** I'm here at this website, where we can see KDE.
>
> **[0:45](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/interacting-with-a-linux-os?u=76281980&t=45)** We'll also go to this website, where you can see GNOME.
>
> **[0:48](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/interacting-with-a-linux-os?u=76281980&t=48)** This also has a pleasant interface.
>
> **[0:52](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/interacting-with-a-linux-os?u=76281980&t=52)** Both have plenty of built-in apps that help you to be more productive.
>
> **[0:58](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/interacting-with-a-linux-os?u=76281980&t=58)** For the average user, the graphical user interface works well.
>
> **[1:02](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/interacting-with-a-linux-os?u=76281980&t=62)** However, many times it's more efficient to work in the Linux shell to perform certain tasks.
>
> **[1:08](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/interacting-with-a-linux-os?u=76281980&t=68)** The shell is also known as the command-line interface, terminal, console, or command prompt.
>
> **[1:16](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/interacting-with-a-linux-os?u=76281980&t=76)** One way to access the command-line interface from the graphical user interface is through a terminal emulator application.
>
> **[1:24](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/interacting-with-a-linux-os?u=76281980&t=84)** Popular options include Terminator, xterm, Konsole, and gnome-terminal.
>
> **[1:31](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/interacting-with-a-linux-os?u=76281980&t=91)** We'll take a look at two options.
>
> **[1:33](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/interacting-with-a-linux-os?u=76281980&t=93)** Here I'm at this webpage where we can see Konsole.
>
> **[1:38](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/interacting-with-a-linux-os?u=76281980&t=98)** And here we can see GNOME.
>
> **[1:45](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/interacting-with-a-linux-os?u=76281980&t=105)** Once in the command-line interface, you issue commands to perform duties such as create or move files, check network settings, or shut down the system.
>
> **[1:57](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/interacting-with-a-linux-os?u=76281980&t=117)** Of course, there are a lot more commands.
>
> **[2:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/interacting-with-a-linux-os?u=76281980&t=120)** If you'd like to refresh your memory on the command-line interface, you can go to this webpage where you'll learn more about working with the command-line interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (5)
> **Env Vars:** gnome (3), kde (2), gui (1)
> **Tools:** terminal (3), command prompt (1)
> **UI Navigation:** go to (2)
> **Definitions:** known as (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Using the Linux file system](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=0)** - [Narrator] A file system controls how data is stored and retrieved.
>
> **[0:05](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=5)** In this segment, we'll take a look at how the [[Linux]] file system can help manage files and their permissions.
>
> **[0:12](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=12)** On a Linux operating system, everything is a file.
>
> **[0:16](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=16)** If it's not a file, it's a process.
>
> **[0:19](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=19)** Now most files are regular files that contain normal data, such as text files, executables, or programs.
>
> **[0:27](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=27)** Common file systems are based off of the extended file system that was developed for Minix.
>
> **[0:34](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=34)** ext2 is commonly used for flash-based storage media because it minimizes the number of writes.
>
> **[0:42](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=42)** ext3 is an improvement, as it added a journal or log, which is used to minimize the risk of a file system corruption in the event of a sudden power loss.
>
> **[0:54](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=54)** ext4 offers performance improvement, as it allows for faster file system checks and repair times.
>
> **[1:02](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=62)** Now within the file system, there are directories and sub directories.
>
> **[1:07](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=67)** For example, here are some common subdirectories.
>
> **[1:10](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=70)** The bin subdirectory includes common programs that are shared by the system, the system administrator and the users.
>
> **[1:18](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=78)** The home subdirectory is the home directories of the common users.
>
> **[1:23](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=83)** The proc subdirectory contains information about system resources and the var subdirectory stores variables and temporary files that are created by the users.
>
> **[1:36](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=96)** Now each file and directory has three user based permission groups.
>
> **[1:41](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=101)** The owner, and with this, the permissions apply only to the owner of the file or directory.
>
> **[1:48](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=108)** And the group.
>
> **[1:49](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=109)** With a group, permissions apply only to the group that has been assigned to the file or directory and no other users.
>
> **[1:57](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=117)** An other or the world, well these are permissions that apply to all other users on the system.
>
> **[2:05](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=125)** Now each file or directory has three basic permission types, read, which is the ability to read the contents of the file.
>
> **[2:14](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=134)** Write, this is the ability to write or modify a file or directory.
>
> **[2:19](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=139)** And execute, this is the ability to execute a file or view the contents of a directory.
>
> **[2:27](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=147)** The permissions field of a file is divided in the following way.
>
> **[2:31](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=151)** 1, 3, 3, 3.
>
> **[2:33](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=153)** Now these places allow you to set different permissions for different users.
>
> **[2:39](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=159)** That first place is reserved for file types such as D for directory or a dash for regular files.
>
> **[2:46](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=166)** For example, if we were to enter the following command and we see this output what would the group file permissions be in this case?
>
> **[2:56](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=176)** Well, the group file permissions assigned to the analyst.txt is read, write.
>
> **[3:03](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=183)** Now to brush up on your skills on file permissions in Linux, you can visit this webpage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (3)
> **Analogies:** such as (2), for example (2)
> **Definitions:** is a  (1), is an  (1)
> **File Paths:** analyst.txt (1)
> **Speakers:** - [narrator] (1)

#### [Avoiding malware on a Linux host](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/avoiding-malware-on-a-linux-host?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/avoiding-malware-on-a-linux-host?u=76281980&t=0)** - [Instructor] Malware can get onto a [[Linux]] host and cause a great deal of damage.
>
> **[0:05](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/avoiding-malware-on-a-linux-host?u=76281980&t=5)** In this segment, we'll review some of the tools you can use to scan the Linux operating system for malware and rootkits.
>
> **[0:13](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/avoiding-malware-on-a-linux-host?u=76281980&t=13)** Now, there are a lot of things that you can do to secure your system, include using anti malware protection, scanning your system, employing security appliances, such as firewalls and [[Intrusion Detection]] systems and updating the system.
>
> **[0:30](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/avoiding-malware-on-a-linux-host?u=76281980&t=30)** In addition to using good security practices, you'll also want to make sure that you do not either have malware or a rootkit.
>
> **[0:39](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/avoiding-malware-on-a-linux-host?u=76281980&t=39)** Of course, there are proprietary [[Microsoft Products|products]] that you can use, but there are also some open-source applications you can use to secure your system as well.
>
> **[0:50](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/avoiding-malware-on-a-linux-host?u=76281980&t=50)** I found a few that can help keep your system secure.
>
> **[0:54](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/avoiding-malware-on-a-linux-host?u=76281980&t=54)** I'm here at this webpage where we can learn more about ClamAV.
>
> **[0:59](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/avoiding-malware-on-a-linux-host?u=76281980&t=59)** Now this is a popular choice as it's a versatile cross-platform, open-source antivirus engine, and you can read more on how you download it and also here there's more documentation.
>
> **[1:14](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/avoiding-malware-on-a-linux-host?u=76281980&t=74)** Another open-source option is Linux Malware Detect.
>
> **[1:17](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/avoiding-malware-on-a-linux-host?u=76281980&t=77)** This is used to detect threats on Linux systems.
>
> **[1:21](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/avoiding-malware-on-a-linux-host?u=76281980&t=81)** Now you can use Linux Malware Detect with ClamAV for better performance.
>
> **[1:28](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/avoiding-malware-on-a-linux-host?u=76281980&t=88)** Lynis is another malware scanning and vulnerability detecting tool that scans system for security information and issues such as file integrity, configuration errors, firewall auditing and also checks installed software and file and directory permissions.
>
> **[1:47](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/avoiding-malware-on-a-linux-host?u=76281980&t=107)** And here we can see that it also can do compliance testing.
>
> **[1:52](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/avoiding-malware-on-a-linux-host?u=76281980&t=112)** In addition to malware, it's also important to check your system for rootkits.
>
> **[1:57](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/avoiding-malware-on-a-linux-host?u=76281980&t=117)** Here are a few options.
>
> **[1:59](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/avoiding-malware-on-a-linux-host?u=76281980&t=119)** The Rootkit Hunter is powerful, simple to use and a well known tool for scanning back doors, rootkits and local exploits.
>
> **[2:08](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/avoiding-malware-on-a-linux-host?u=76281980&t=128)** And you can read more here and see how you can download this.
>
> **[2:12](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/avoiding-malware-on-a-linux-host?u=76281980&t=132)** And, finally, chkrootkit is a shell script that checks system binaries for rootkit modification and a number of programs that check various security issues so malware and rootkits can't affect the Linux host.
>
> **[2:27](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/avoiding-malware-on-a-linux-host?u=76281980&t=147)** Take steps to secure your system by running anti-malware protection and scanning your system for rootkits.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (6), [[Intrusion Detection]] (1), [[Microsoft Products|Products]] (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 3. Understand User Authentication

[↑ Back to Table of Contents](#table-of-contents)

#### [Identify and authenticate](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/identify-and-authenticate?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/identify-and-authenticate?u=76281980&t=0)** - [Instructor] In today's complex digital world, it's essential to provide different methods to identify and authenticate into a system.
>
> **[0:09](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/identify-and-authenticate?u=76281980&t=9)** In this segment, we'll review the process, starting with enrollment, the importance of ensuring uniqueness and then later, how we must provide authentication or proof of identity to access a system.
>
> **[0:22](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/identify-and-authenticate?u=76281980&t=22)** Now prior to using a system, the applicant must enroll by creating a credential record to be stored in the system.
>
> **[0:31](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/identify-and-authenticate?u=76281980&t=31)** When the applicant wants to enroll into a system, they will first need to provide some form of identification.
>
> **[0:39](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/identify-and-authenticate?u=76281980&t=39)** For example, if a student is enrolling into the school system to access resources, they might present a school ID.
>
> **[0:46](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/identify-and-authenticate?u=76281980&t=46)** Another example is if accessing a financial institution, the customer might have to use a Social Security number or other method to provide a way to identify the individual.
>
> **[0:58](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/identify-and-authenticate?u=76281980&t=58)** However, in some cases, a newly enrolled individual might create a unique username.
>
> **[1:04](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/identify-and-authenticate?u=76281980&t=64)** Now when creating the identity, the identifier, whatever it might be, must have the following attributes.
>
> **[1:11](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/identify-and-authenticate?u=76281980&t=71)** The identifier must be unique, meaning one identifier per person, or role, and the identifier can't be reassigned or shared.
>
> **[1:22](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/identify-and-authenticate?u=76281980&t=82)** Now once the applicant establishes their identity, they must link it to a method to provide authentication.
>
> **[1:30](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/identify-and-authenticate?u=76281980&t=90)** Authentication is proving your identity, and this can be achieved in one of several ways.
>
> **[1:36](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/identify-and-authenticate?u=76281980&t=96)** What you know in the form of a password, passphrase or PIN.
>
> **[1:41](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/identify-and-authenticate?u=76281980&t=101)** What you have such as a smart card or token, what you are such as a fingerprint or iris pattern.
>
> **[1:48](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/identify-and-authenticate?u=76281980&t=108)** Or where you are using geolocation and geofencing, or location based authentication, which detects a user's presence at a specific location, or what you do such as a swipe or a gesture.
>
> **[2:04](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/identify-and-authenticate?u=76281980&t=124)** Then once accepted, the credentials are then stored in the system database.
>
> **[2:09](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/identify-and-authenticate?u=76281980&t=129)** And then the applicant then becomes a subscriber.
>
> **[2:14](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/identify-and-authenticate?u=76281980&t=134)** Any subsequent attempts to gain access to the system will require the subject or applicant to identify by some means.
>
> **[2:22](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/identify-and-authenticate?u=76281980&t=142)** Now this represents, who are you?
>
> **[2:25](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/identify-and-authenticate?u=76281980&t=145)** They must then authenticate, which provides the proof and represents who do you claim to be?
>
> **[2:33](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/identify-and-authenticate?u=76281980&t=153)** Once complete, they are then able to access the system.
>
> **[2:38](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/identify-and-authenticate?u=76281980&t=158)** So whenever you need to gain access to a computer system, building or mobile device, we must first identify and then authenticate into the system.

> [!info]- Semantic Content
>
> **Analogies:** such as (3), for example (1)
> **Env Vars:** pin (1)
> **Speakers:** - [instructor] (1)

#### [Passwords and complexity](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=0)** - [Educator] Authentication is proving your identity.
>
> **[0:03](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=3)** Today, there are several ways to provide authentication.
>
> **[0:07](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=7)** What you know is in the form of a password or pin.
>
> **[0:13](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=13)** Of the three, the password is simple and inexpensive, and even with all the technologies will most likely be used in some form.
>
> **[0:24](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=24)** When logging into a system, you present a username and your password.
>
> **[0:30](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=30)** This basically states who I am and the password verifies that you are who you say you are.
>
> **[0:37](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=37)** Since a password is simply a sequence of characters, it's the weakest security method so we take steps to ensure a strong password.
>
> **[0:48](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=48)** In 2017, [[NIST]] published password guidelines and the guidelines have changed.
>
> **[0:55](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=55)** Now, some of the key changes include: you no longer have to have frequent password changes, requiring frequent changes to passwords have been proven to be counterproductive, and complex rules are no longer needed such as upper and lowercase letters, numbers, punctuation marks, and symbols, this is also demonstrated to be ineffective.
>
> **[1:24](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=84)** But on the client side, these are the things that we want to adhere to: complexity.
>
> **[1:31](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=91)** Eight characters long, at least, and this is the same.
>
> **[1:35](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=95)** Instead of a password, we are suggesting using a passphrase which is a sequence of characters that is longer than a password and can be more secure as it's more complex.
>
> **[1:50](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=110)** For example, let's go to the ballpark.
>
> **[1:53](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=113)** What you want to avoid is the following: avoid breached passwords, those that have been obtained from previous breach episodes, repetitive or sequential characters such as a series of A's or 4567, those are sequences.
>
> **[2:13](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=133)** And dictionary words, standard plain dictionary words, such as truck, dragon, or stadium.
>
> **[2:20](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=140)** And stay away from context-specific, such as lunchroom Abby, perhaps Abby's in charge of the lunchroom, we wouldn't want to use that.
>
> **[2:32](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=152)** We also can make changes on the server side.
>
> **[2:35](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=155)** I'm in the Server Manager, we'll go to Tools, and Local Security Policy.
>
> **[2:42](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=162)** And here's where the administrator can make changes to enforce the rules that you've provided.
>
> **[2:50](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=170)** We'll drop down Account Policies, and here we can see Password Policy, and all these can be changed such as enforcing a history, maximum and minimum password age, minimum password length, and passwords must meet complexity requirements.
>
> **[3:09](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=189)** As you see there, it's enabled.
>
> **[3:11](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=191)** So maybe I take that and disable that.
>
> **[3:15](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=195)** And then Account Lockout Policies can be set as well as you can see, the lockout duration, how long, possibly 20 minutes, the threshold, after zero or three, invalid login attempts, or you can reset account lockout counter after so many minutes.
>
> **[3:34](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=214)** And I'll cancel that.
>
> **[3:36](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=216)** So as you can see on the server side, the network administrator can make some changes and enforce the password policy.
>
> **[3:44](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=224)** Now, when you're making a password, one of the suggestions is that you use a passphrase.
>
> **[3:50](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=230)** So I'm here at this site How Secure Is My Password?
>
> **[3:54](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=234)** And what I did was put in a passphrase, tiger kittens for sale.
>
> **[3:59](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=239)** And as you can see, even though it's a passphrase that's easy to remember, it would take about 600 million years to crack your password.
>
> **[4:09](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=249)** So here you can see some tips and this is from NIST, so you want to look at passwords and make sure that you provide good passwords, don't just rely on password protection, you might want to consider [[Multi-factor Authentication]] whenever possible.
>
> **[4:27](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=267)** Use a phrase with multiple words as we see that's very strong.
>
> **[4:32](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=272)** And also protect all of your accounts and especially [[Banking]] and email accounts by giving each one a unique passphrase.
>
> **[4:42](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=282)** So passwords are one of the most widely used [[Forms]] of authentication but take steps to provide a secure password.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NIST]] (2), [[Multi-factor Authentication]] (1), [[Banking]] (1), [[Forms]] (1)
> **Analogies:** such as (5), for example (1)
> **CLI Commands:** make (4)
> **Env Vars:** nist (2)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (1)
> **Speakers:** - [educator] (1)

#### [Smart cards and tokens](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/smart-cards-and-tokens?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/smart-cards-and-tokens?u=76281980&t=0)** - We know that there are several ways to authenticate into a system.
>
> **[0:05](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/smart-cards-and-tokens?u=76281980&t=5)** One is what you have in the form of a smart card or a token.
>
> **[0:10](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/smart-cards-and-tokens?u=76281980&t=10)** A smart card is a credit card-sized card that contains information on an embedded chip about the user such as credit and buying preferences, loyalty program data, and even medical information.
>
> **[0:25](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/smart-cards-and-tokens?u=76281980&t=25)** Smart cards can store several [[Forms]] of identification, such as a fingerprint and a password.
>
> **[0:32](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/smart-cards-and-tokens?u=76281980&t=32)** Smart cards are available in several form factors, such as cards, key fobs, and USB [[Tokens]].
>
> **[0:39](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/smart-cards-and-tokens?u=76281980&t=39)** Smart cards have several uses, including access control for employee access cards or ID badges and membership cards for nightclubs, VIP access cards, or preferred door entry cards.
>
> **[0:55](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/smart-cards-and-tokens?u=76281980&t=55)** They can be used as [[Banking]] cards, such as credit or electronic purse used to store currency for purchases.
>
> **[1:03](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/smart-cards-and-tokens?u=76281980&t=63)** And for healthcare, this can store patients' history and medical information.
>
> **[1:09](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/smart-cards-and-tokens?u=76281980&t=69)** And the cards can be used as single sign-on to log onto computers.
>
> **[1:15](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/smart-cards-and-tokens?u=76281980&t=75)** Smart cards can be contact or contactless.
>
> **[1:19](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/smart-cards-and-tokens?u=76281980&t=79)** Contact cards must have contact with the device.
>
> **[1:23](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/smart-cards-and-tokens?u=76281980&t=83)** However, contactless are radio-read smart cards, which allows for free movement of people through systems.
>
> **[1:31](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/smart-cards-and-tokens?u=76281980&t=91)** Smart cards can provide access control.
>
> **[1:34](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/smart-cards-and-tokens?u=76281980&t=94)** They can be used as a security token.
>
> **[1:37](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/smart-cards-and-tokens?u=76281980&t=97)** For higher security needs, they can store information such as a user's picture or fingerprints.
>
> **[1:44](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/smart-cards-and-tokens?u=76281980&t=104)** They can hold encryption key for disk encryption systems, such as [[Microsoft]]'s BitLocker, and they can be used as a software dongle where only licensed users can access the software.
>
> **[1:57](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/smart-cards-and-tokens?u=76281980&t=117)** Smart cards and memory cards are both considered tokens.
>
> **[2:01](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/smart-cards-and-tokens?u=76281980&t=121)** Memory cards can hold but cannot process information but smart cards can hold and can process information.
>
> **[2:12](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/smart-cards-and-tokens?u=76281980&t=132)** Before implementing smart cards, there's some issues to consider.
>
> **[2:17](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/smart-cards-and-tokens?u=76281980&t=137)** You'll need to make sure that it's compatible with the system that's in use.
>
> **[2:22](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/smart-cards-and-tokens?u=76281980&t=142)** You'll also have to think of management of the cards within the organization.
>
> **[2:27](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/smart-cards-and-tokens?u=76281980&t=147)** The cards are generally user-friendly and portable but they can get lost and forgotten.
>
> **[2:33](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/smart-cards-and-tokens?u=76281980&t=153)** Don't mark them as a special key or card.
>
> **[2:37](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/smart-cards-and-tokens?u=76281980&t=157)** And company logo should be kept on other marketing materials, not on tokens.
>
> **[2:43](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/smart-cards-and-tokens?u=76281980&t=163)** And consider possible future use, such as adding encryption or even biometric data.
>
> **[2:50](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/smart-cards-and-tokens?u=76281980&t=170)** Smart cards can be used on their own or, as we'll most likely see in the future, as part of a multifactor authentication system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (3), [[Forms]] (1), [[Banking]] (1), [[Microsoft]] (1)
> **Analogies:** such as (7), picture (1)
> **Env Vars:** usb (1), vip (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - we (1)

#### [Biometric identification](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=0)** - [Instructor] Biometrics authenticate by using an individual's unique attributes or behavior, and includes fingerprint, retina iris pattern and voice recognition.
>
> **[0:13](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=13)** Biometrics recognizes an individual by matching the captured biometric with a stored biometric template in the system.
>
> **[0:22](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=22)** It's a one-to-one comparison.
>
> **[0:25](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=25)** Biometrics are used for access control to gain access to cell phones, laptops, networks, buildings and border control.
>
> **[0:37](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=37)** It's also being used in a multifactor authentication system.
>
> **[0:42](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=42)** Biometrics are divided into two sides.
>
> **[0:46](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=46)** Here, we see the behavioral side.
>
> **[0:49](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=49)** This is based on a person's actions, such as how you walk, talk, or sign your name.
>
> **[0:56](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=56)** The physiological biometrics are based on measurements or parts of the human body.
>
> **[1:03](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=63)** On the behavioral side, we see gait recognition.
>
> **[1:07](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=67)** This is a newer biometric and it's simply the way someone walks.
>
> **[1:12](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=72)** It's a nice biometric as it's non-invasive, and is used in large venues for threat management, such as in stadiums.
>
> **[1:22](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=82)** Signature verification is the way someone signs their name.
>
> **[1:27](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=87)** It takes into account, the pressure of the stroke, the curves or other unique characteristics of your signature.
>
> **[1:36](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=96)** Voice and voice recognition recognizes who is speaking.
>
> **[1:42](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=102)** It's the way that they speak, their inflection, and their patterns.
>
> **[1:47](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=107)** Now this is different than [[Speech Recognition]], which is recognizing what is being said.
>
> **[1:54](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=114)** Now on the physiological side, we have hand geometry.
>
> **[1:59](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=119)** With hand geometry, the hand is placed in a device.
>
> **[2:04](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=124)** The device then measures each finger and the hand as a whole.
>
> **[2:08](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=128)** Facial recognition is when a camera scans a person's face and takes measurements.
>
> **[2:14](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=134)** The nose width, the eyes facing, forehead and chin.
>
> **[2:19](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=139)** One example is when going into a new country, you place your passport in a device and stare at a camera, and then it does a mini facial recognition.
>
> **[2:31](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=151)** Another physiological biometric is iris recognition.
>
> **[2:35](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=155)** The iris is the color part of the eye.
>
> **[2:39](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=159)** And each of our irises are very unique.
>
> **[2:43](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=163)** Irises are a nice noninvasive biometric in that the image is captured with a camera and then it is converted to computer code.
>
> **[2:52](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=172)** The fingerprint biometric was one of the very first biometrics used.
>
> **[2:58](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=178)** The fingerprint is very unique and it stays the same throughout most of your life.
>
> **[3:04](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=184)** When using fingerprint analysis, we're identifying the minutia which is the tiny details of the fingerprint that you see here.
>
> **[3:14](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=194)** Islands are tiny dots, bifurcations are where you see its splitting off, the ridges are the raised portions of the fingerprint, and the valleys are the white portion.
>
> **[3:27](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=207)** Now there are many other types of minutia within a fingerprint, but again, it's looking at the tiny details of each fingerprint.
>
> **[3:37](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=217)** Now how is this information obtained?
>
> **[3:40](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=220)** Well, we'll step through the process.
>
> **[3:42](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=222)** You place your finger on a sensor device, the feature or minutia are extracted, and then they're converted to a computer code and then they're stored on a template.
>
> **[3:54](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=234)** Biometrics are being used more and more.
>
> **[3:57](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=237)** However, there are some concerns over [[Privacy]].
>
> **[4:01](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=241)** Many states maintain fingerprints of all licensed drivers, convicted felons also have prints on file, and biometrics are now in place at border control.
>
> **[4:14](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=254)** Biometrics do have some disadvantages.
>
> **[4:17](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=257)** One is that it's more expensive than a password, and some of the of [[Microsoft Products|products]] don't work as expected and have high failure rates, and there's no common API or other standard, and there is some hesitancy for user acceptance.
>
> **[4:36](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=276)** However, we're still seeing more advantages including: biometrics can't be lost like a key, smart card, or token; they can't be forgotten like a password; and biometrics essentially last for a lifetime.
>
> **[4:52](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=292)** Biometrics simplifies access control on devices and networks, and most likely we'll be seeing more and more biometrics in the future.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Speech Recognition]] (1), [[Privacy]] (1), [[Microsoft Products|Products]] (1)
> **Exercise Files:** template (2)
> **Analogies:** such as (2)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Multi-factor authentication](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/multi-factor-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/multi-factor-authentication?u=76281980&t=0)** - [Instructor] When providing authentication, we could use one of several different methods.
>
> **[0:06](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/multi-factor-authentication?u=76281980&t=6)** Of all the ways to provide authentication, the password is the least expensive and is widely used.
>
> **[0:13](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/multi-factor-authentication?u=76281980&t=13)** However, over the years, there have been many damaging data breaches, with a huge loss in passwords and other sensitive information.
>
> **[0:23](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/multi-factor-authentication?u=76281980&t=23)** I'm at this website, World's Biggest Data Breaches and Hacks.
>
> **[0:27](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/multi-factor-authentication?u=76281980&t=27)** Now we can take a look at this where you can see the names of many well-known companies that have been breached in some way, possibly taking your password.
>
> **[0:38](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/multi-factor-authentication?u=76281980&t=38)** If you're not sure if you were hacked, you can go to haveibeenpwned, and here you can enter your email address and check if you have an account that's been compromised in a data breach.
>
> **[0:50](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/multi-factor-authentication?u=76281980&t=50)** And then I'll scroll down where we can find a little bit more information about some of the largest breaches and some recently added breaches.
>
> **[0:58](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/multi-factor-authentication?u=76281980&t=58)** Security systems are becoming more robust in ways to provide identity.
>
> **[1:03](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/multi-factor-authentication?u=76281980&t=63)** multifactor authentication requires two or more ways to authenticate, such as a pin and a fingerprint or a password and a smart card.
>
> **[1:15](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/multi-factor-authentication?u=76281980&t=75)** Many times, a system will use a password, but then require a second authenticator.
>
> **[1:22](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/multi-factor-authentication?u=76281980&t=82)** Now there are several different types of authenticators, one being security questions.
>
> **[1:29](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/multi-factor-authentication?u=76281980&t=89)** Now this is something the user knows.
>
> **[1:32](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/multi-factor-authentication?u=76281980&t=92)** For example, what is your youngest brother's birthday month and year?
>
> **[1:37](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/multi-factor-authentication?u=76281980&t=97)** What is your maternal grandmother's maiden name?
>
> **[1:41](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/multi-factor-authentication?u=76281980&t=101)** In what city or town was your first job?
>
> **[1:44](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/multi-factor-authentication?u=76281980&t=104)** We could also use mobile push notifications.
>
> **[1:48](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/multi-factor-authentication?u=76281980&t=108)** This is a commonly used method for a second form of authentication.
>
> **[1:52](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/multi-factor-authentication?u=76281980&t=112)** The application pushes out a message that the user selects to accept.
>
> **[1:58](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/multi-factor-authentication?u=76281980&t=118)** We can use [[Tokens]], which provide a one-time password to authenticate the user.
>
> **[2:03](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/multi-factor-authentication?u=76281980&t=123)** A token is sent to the user via phone or email that the user must enter to authenticate.
>
> **[2:11](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/multi-factor-authentication?u=76281980&t=131)** The use of [[Blockchain]] technology is in its infancy stages.
>
> **[2:15](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/multi-factor-authentication?u=76281980&t=135)** However, there is a strong possibility that security systems are looking to incorporate blockchain technology as part of an authentication system.
>
> **[2:25](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/multi-factor-authentication?u=76281980&t=145)** Here, we can see Sony Files Patent for Blockchain-based [[Multi-factor Authentication]] System, which we'll most likely see more of as companies seek to find robust authentication methods.
>
> **[2:39](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/multi-factor-authentication?u=76281980&t=159)** So to provide assurance in providing authentication, we're going to see multifactor authentication, which requires two or more ways to authenticate.
>
> **[2:49](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/multi-factor-authentication?u=76281980&t=169)** You'd enter your username and password and then present a second factor, which once authenticated, will allow you to log into the system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Blockchain]] (3), [[Tokens]] (1), [[Multi-factor Authentication]] (1)
> **CLI Commands:** find (2)
> **UI Navigation:** go to (1), scroll down (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)


### 4. Protecting and Monitoring the OS

[↑ Back to Table of Contents](#table-of-contents)

#### [Using a firewall](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=0)** - [Instructor] A firewall is a [[Hardware]] or software-based method to control incoming and outgoing traffic.
>
> **[0:07](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=7)** It's based on a set of rules that either permit or deny traffic on a network or a host.
>
> **[0:14](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=14)** Today, there are many different types of firewalls from software-based to dedicated appliances that defend an enterprise network.
>
> **[0:24](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=24)** On a network, firewalls give the administrator greater control over the types of traffic originating from inside and outside of the protected network.
>
> **[0:34](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=34)** Firewalls ensure access control between networks by using access control lists.
>
> **[0:40](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=40)** The access control lists filter traffic and monitor established traffic patterns based on a set of rules.
>
> **[0:48](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=48)** Rules can be set on each interface for ingress and egress filtering.
>
> **[0:53](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=53)** Ingress filtering prevents attack packets from entering the protected network.
>
> **[0:58](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=58)** Egress filtering is just as important as it prevents certain packets from leaving the network, such as malware that tries to connect to a command-and-control server.
>
> **[1:11](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=71)** Personal or software-based firewalls generally reside on a host, such as a laptop or a desktop computer.
>
> **[1:18](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=78)** Most support packet filtering, stateful packet inspection, and some offer network address translation.
>
> **[1:25](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=85)** Application-specific rules can be set to allow specific applications to pass through.
>
> **[1:32](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=92)** The software-based firewalls work in the background on the device to protect the integrity of the system from malicious activity by controlling connections to and from a user's computer.
>
> **[1:44](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=104)** The firewall filters inbound and outbound traffic and alerts the user to attempted intrusions.
>
> **[1:53](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=113)** Most operating systems have choices when selecting a firewall.
>
> **[1:57](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=117)** One example is the [[Windows]] [[Microsoft Defender|Defender]] Firewall.
>
> **[2:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=120)** Now, the Windows Defender Firewall with Advanced Security protects your system right out of the box.
>
> **[2:06](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=126)** It continuously monitors for threats.
>
> **[2:09](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=129)** Now, even if you do have a third-party solution, Windows Defender will wait.
>
> **[2:14](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=134)** And if for whatever reason that third-party solution deactivates, it will jump in to protect your system.
>
> **[2:22](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=142)** The Mac operating system has an application firewall that protects the entire system.
>
> **[2:27](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=147)** Now, it's always on and constantly monitors and protects your device.
>
> **[2:31](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=151)** However, there's a secondary firewall in the Mac OS called Firewall.
>
> **[2:36](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=156)** And here's an article about that and whether or not you need it.
>
> **[2:40](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=160)** It's just a discussion on that secondary firewall.
>
> **[2:43](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=163)** This firewall is called Firewall, and it is the Berkeley Software Distribution or BSD PF Firewall.
>
> **[2:51](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=171)** You could turn it on, but in most cases, it isn't necessary to activate this firewall as the application firewall provides robust protection from most threats.
>
> **[3:02](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=182)** A [[Linux]] machine also has several options that can be used to monitor the system, and here's an article on top firewall solutions.
>
> **[3:11](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=191)** Some examples include Endian Firewall Community, and this firewall's turnkey, ready-to-use security solution which is built on Linux.
>
> **[3:21](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=201)** And another one is the Uncomplicated Firewall.
>
> **[3:25](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=205)** Now, this is a pre-built firewall solution that comes with all [[Ubuntu]] distributions of Linux.
>
> **[3:33](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=213)** So do your research and make sure that the firewall is robust and resistant to attacks.
>
> **[3:39](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=219)** But firewalls should be used in every network and every system as they monitor for many of today's threats.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), [[Microsoft Defender|Defender]] (3), [[Linux]] (3), [[Hardware]] (1), [[Ubuntu]] (1)
> **Definitions:** is a  (2), is called (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Env Vars:** bsd (1)
> **Speakers:** - [instructor] (1)

#### [Locking down the browser](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/locking-down-the-browser?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/locking-down-the-browser?u=76281980&t=0)** - [Instructor] A web browser is the portal to the outside world where we obtain information in a wide variety of formats, from viewing content on a webpage, to emailing, watching video, chatting and playing games.
>
> **[0:15](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/locking-down-the-browser?u=76281980&t=15)** Because of our always on connectivity, it's essential to lock down your browser.
>
> **[0:21](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/locking-down-the-browser?u=76281980&t=21)** I'm at this webpage where we can see what happens on the internet in one minute, as you can see, there's a lot of things that happen, because we use our browsers for everything from entertainment, to completing sensitive tasks like [[Banking]] transaction, and checking medical records.
>
> **[0:40](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/locking-down-the-browser?u=76281980&t=40)** Malicious actors are constantly seeking ways to steal sensitive data or to install malware.
>
> **[0:47](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/locking-down-the-browser?u=76281980&t=47)** Now today, browsers are complex and often change in their functionality.
>
> **[0:53](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/locking-down-the-browser?u=76281980&t=53)** For example, the Chrome browser has over 25 million lines of code.
>
> **[0:59](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/locking-down-the-browser?u=76281980&t=59)** Because of this complexity, we need to recognize that its impossible for any browser to be free of vulnerabilities, and this makes them an attractive target for attacks.
>
> **[1:11](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/locking-down-the-browser?u=76281980&t=71)** So how do we defend ourselves?
>
> **[1:13](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/locking-down-the-browser?u=76281980&t=73)** Well, most browsers have the ability to add another layer of security, such as deciding if you want to allow cookies, how and when sites can use your location information, and the ability to block unwanted popups.
>
> **[1:27](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/locking-down-the-browser?u=76281980&t=87)** So let's talk about ways to secure your browser.
>
> **[1:31](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/locking-down-the-browser?u=76281980&t=91)** One thing you can use is filters.
>
> **[1:34](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/locking-down-the-browser?u=76281980&t=94)** Now, I'm at this webpage where you can see on the Chrome store, a web filter for Chrome.
>
> **[1:39](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/locking-down-the-browser?u=76281980&t=99)** Filters act like a firewall to analyze webpages for suspicious behavior.
>
> **[1:44](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/locking-down-the-browser?u=76281980&t=104)** It will the reputation along with examining any files you download.
>
> **[1:50](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/locking-down-the-browser?u=76281980&t=110)** The filters will help prevent [[Phishing]], and block risky content.
>
> **[1:55](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/locking-down-the-browser?u=76281980&t=115)** Another thing you can use is enhanced protection, and I'm at this webpage where you can learn more about safe browsing in Chrome.
>
> **[2:03](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/locking-down-the-browser?u=76281980&t=123)** And I'll scroll down here, where it talks about enhanced protection.
>
> **[2:08](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/locking-down-the-browser?u=76281980&t=128)** This feature protects data even if an attack takes advantage of a vulnerability in the browser, or an add-on.
>
> **[2:15](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/locking-down-the-browser?u=76281980&t=135)** Enhanced protection uses the principle of least privilege, in that it locks down part of your system that your browser doesn't need to access, such as system settings or the documents folder.
>
> **[2:28](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/locking-down-the-browser?u=76281980&t=148)** Of course, there are other browsers and there's ways to secure them as well.
>
> **[2:32](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/locking-down-the-browser?u=76281980&t=152)** This reference provides links to secure most browsers and I'll scroll down here, and it talks about some of the things you can do, but then it also lists the most secure web browsers that are available today.
>
> **[2:46](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/locking-down-the-browser?u=76281980&t=166)** And one simple thing that you can do is to update your browser, as each browser continually provides security enhancements that protect against attacks that exploit your browser, or operating system.
>
> **[3:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/locking-down-the-browser?u=76281980&t=180)** So here you can see, that I'm using the latest version of Firefox.
>
> **[3:05](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/locking-down-the-browser?u=76281980&t=185)** So a web browser is the portal to the outside world, protect yourself and use the browser's built in security features, to defend against threats.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Banking]] (1), [[Phishing]] (1)
> **Analogies:** such as (2), for example (1)
> **UI Navigation:** scroll down (2)
> **Tools:** firefox (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Hardening the OS](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/hardening-the-os?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/hardening-the-os?u=76281980&t=0)** - [Instructor] Threats are all around us and come from a number of different sources, hackers, [[Phishing]], malware, an administrator that doesn't monitor the systems for signs of intrusion, or even a disgruntled employee.
>
> **[0:15](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/hardening-the-os?u=76281980&t=15)** Hardening an operating system minimizes exposure to threats and involves several steps, along with some good practice techniques.
>
> **[0:25](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/hardening-the-os?u=76281980&t=25)** Let's talk about a few good practice techniques.
>
> **[0:28](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/hardening-the-os?u=76281980&t=28)** You'll want to use antivirus and antispyware protection and schedule daily automatic definition updates and scans, use a firewall to provide a first line of defense, use strong passwords or passphrases for all user accounts, and lock the computer when you step away.
>
> **[0:48](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/hardening-the-os?u=76281980&t=48)** Email is the number one way to gain access to a system.
>
> **[0:52](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/hardening-the-os?u=76281980&t=52)** To diminish this threat, do not open suspicious email attachments or respond to requests from unknown senders.
>
> **[1:01](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/hardening-the-os?u=76281980&t=61)** New vulnerabilities are discovered every day.
>
> **[1:05](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/hardening-the-os?u=76281980&t=65)** In fact, many malicious actors actively seek ways to exploit weaknesses.
>
> **[1:10](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/hardening-the-os?u=76281980&t=70)** In response, developers continuously work to update the operating system to minimize vulnerabilities.
>
> **[1:19](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/hardening-the-os?u=76281980&t=79)** The fact is an up-to-date system is less likely to be compromised.
>
> **[1:25](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/hardening-the-os?u=76281980&t=85)** So reduce the attack surface.
>
> **[1:28](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/hardening-the-os?u=76281980&t=88)** Download and install the latest updates that are available.
>
> **[1:31](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/hardening-the-os?u=76281980&t=91)** And if possible, schedule automatic updates.
>
> **[1:35](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/hardening-the-os?u=76281980&t=95)** In addition, depending on the operating system, many services are enabled by default.
>
> **[1:41](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/hardening-the-os?u=76281980&t=101)** Go through, check them, and disable or uninstall unnecessary applications or non-essential services.
>
> **[1:49](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/hardening-the-os?u=76281980&t=109)** In addition, you'll also want to disable any unneeded user accounts.
>
> **[1:54](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/hardening-the-os?u=76281980&t=114)** This will then reduce the potential for attack.
>
> **[1:59](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/hardening-the-os?u=76281980&t=119)** There are many resources out there to help you with understanding how to harden your operating system.
>
> **[2:05](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/hardening-the-os?u=76281980&t=125)** I'm at this webpage where I found an article, "What Is Operating System Hardening?"
>
> **[2:10](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/hardening-the-os?u=76281980&t=130)** And then if you scroll down, you'll see the Operating System Hardening Checklist, which you could go through and maybe pick up a few more techniques.
>
> **[2:19](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/hardening-the-os?u=76281980&t=139)** An operating system can be vulnerable if not sufficiently protected.
>
> **[2:24](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/hardening-the-os?u=76281980&t=144)** Take steps to harden the operating system to reduce overall risk.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Phishing]] (1)
> **Best Practices:** good practice (2)
> **UI Navigation:** scroll down (1)
> **Definitions:** is an  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Protocol good practices](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=0)** - [Instructor] In general, when talking about protocol good practices, it's best to use protocols that can provide encryption and authentication.
>
> **[0:10](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=10)** Now, let's take a look at some of the protocols that will make your network more secure.
>
> **[0:16](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=16)** HTTPS is HTTP over secure socket layer or Transport Layer Security, which effectively creates a VPN between the server and the client encrypting all data.
>
> **[0:31](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=31)** Secure Shell is used to log in for remote administration.
>
> **[0:36](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=36)** For example, if you need to do a file transfer on your web hosting site or a even remote administration from your [[Windows]] machine to a Unix environment.
>
> **[0:48](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=48)** We can see here is where you can download Putty, and I've downloaded and extracted it, and now I'm running it.
>
> **[0:56](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=56)** And here you can take a look at it.
>
> **[0:58](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=58)** Go to help and introduction to Putty where you can get a little bit more familiar, where it says Putty is a free SSH, Telnet, and remote login client for Windows systems.
>
> **[1:11](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=71)** Network Time protocol is used to provide automated time synchronization.
>
> **[1:17](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=77)** Now Network Time Protocol is a great protocol to use because some protocols such as curb rows require synchronized time on the network.
>
> **[1:27](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=87)** File Transfer Protocol or FTP by default isn't encrypted.
>
> **[1:33](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=93)** Now we can use file transfer protocol on a browser, but you really should use some type of software in order to do an effective, and secure file transfer protocol.
>
> **[1:44](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=104)** I'm in a browser and have an FTP site that I'd like to show you.
>
> **[1:49](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=109)** And here we can see all the files in this FTP site.
>
> **[1:54](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=114)** Now you'll see a list of documents, and FTP is not like a website but when you want to access the documents, you simply click on the document, and then it would download the document.
>
> **[2:06](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=126)** But it's a all in plain text.
>
> **[2:08](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=128)** It's not secure and it's not encrypted.
>
> **[2:12](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=132)** A better choice is to use an application such as Core FTP.
>
> **[2:18](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=138)** Download and install Core FTP so that you can securely send, and receive files from your FTP server.
>
> **[2:27](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=147)** At any given in time, there are a number of different types of attacks.
>
> **[2:34](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=154)** I'm here at this website Threat Cloud, and here we can see attacking in [[Real-Time]] across the world.
>
> **[2:43](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=163)** What happens is attackers are seeking vulnerable systems.
>
> **[2:48](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=168)** And one common protocol is Telnet.
>
> **[2:52](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=172)** Now Telenet has been deprecated in the Windows operating system for some time.
>
> **[2:58](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=178)** However, you'll want to make sure that Telnet is not active on your system.
>
> **[3:04](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=184)** Let's take a look.
>
> **[3:07](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=187)** I've gone to the control panel, and then I've opened programs and features.
>
> **[3:11](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=191)** And here we can see turn windows features on or off.
>
> **[3:17](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=197)** Now let's scroll down, and we'll open up internet information services, and here it says FTP server.
>
> **[3:26](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=206)** I want to uncheck that.
>
> **[3:28](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=208)** We don't want that active on our system.
>
> **[3:31](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=211)** And here we see Telnet client.
>
> **[3:33](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=213)** I'll uncheck that as well or any unnecessary services are active on your system.
>
> **[3:41](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=221)** So as you, there are several things you can do to ensure good protocol practices on your system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (4), [[Real-Time]] (1)
> **Env Vars:** ftp (8), https (1), http (1), vpn (1), ssh (1)
> **CLI Commands:** make (2), ssh (1)
> **UI Navigation:** go to (1), click on (1), scroll down (1)
> **Analogies:** such as (2), for example (1)
> **Definitions:** is a  (2)
> **Exercise Files:** download the (1)
> **Best Practices:** it's best to (1)


### 5. Providing Email Protection

[↑ Back to Table of Contents](#table-of-contents)

#### [Email clients and servers](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=0)** - [Instructor] When it comes to email protection, both the client and server needs protection.
>
> **[0:06](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=6)** There are several best practices, including anti-spam and defense against spoofing, [[Phishing]] and pharming.
>
> **[0:14](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=14)** In most cases, malware protection for email is used to catch malware variants before they even reach the inbox.
>
> **[0:22](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=22)** However, the reality is that cybercriminals are constantly improving their methods to gain access into an organization.
>
> **[0:30](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=30)** Social engineering is the root of many cyberattacks, which includes phishing, pharming, pop-ups, and fake websites.
>
> **[0:39](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=39)** Phishing and pharming are techniques that are used to trick computer users into revealing personal or financial information.
>
> **[0:47](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=47)** These techniques send out massive emails that bait victims to click to claim a prize, sign up for a special program, or sign in to check account information.
>
> **[0:58](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=58)** The message appears urgent and one out of every 10 individual will respond.
>
> **[1:05](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=65)** Many offices send and receive multiple packages every week.
>
> **[1:09](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=69)** Imagine a busy administrative assistant going about the day when an email comes in as follows.
>
> **[1:17](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=77)** This email looks official.
>
> **[1:19](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=79)** However, once the victim clicks on the link, which, in this case, activates the payload.
>
> **[1:26](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=86)** Email communication is vital for business.
>
> **[1:29](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=89)** However, a large percentage of email that comes into an organization is abusive and includes junk mail, spam, and malware.
>
> **[1:39](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=99)** Nearly all abusive email has a fake sender address, which is done to conceal the sender's true address so they can get into an organization via phishing attacks.
>
> **[1:50](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=110)** Reputation is a method of assuring appropriate email traffic and preventing abusive email., With a reputation-based solution, you see that this email wants to be delivered to an organization.
>
> **[2:03](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=123)** The organization goes to the cloud to check the reputation of the IP address.
>
> **[2:09](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=129)** By reputation, it assures that the website is okay and that the mail can be delivered.
>
> **[2:16](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=136)** There are several reputation-based systems.
>
> **[2:19](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=139)** I'm at one called Spamhaus.
>
> **[2:21](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=141)** This monitors, blacklists IP addresses, and notifies those of the ones that have a bad reputation.
>
> **[2:30](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=150)** This is a strong method of assuring appropriate email traffic and preventing abusive emails, such as spam and junk mail.
>
> **[2:38](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=158)** So how does this work?
>
> **[2:39](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=159)** Well, here is just one line of behind-the-scenes look of an email header.
>
> **[2:44](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=164)** Here you see what's called the an antispam report.
>
> **[2:48](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=168)** Now it goes through several metrics to assure that the email is clean, including the IP address, the country from where it came from, and other metrics, including language.
>
> **[3:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=180)** And we see here that this message was marked as non-spam and was sent to the intended recipients.
>
> **[3:08](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=188)** Simple Mail Transport Protocol transfers outgoing email from one server to another.
>
> **[3:14](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=194)** An email has at least two types of sender addresses.
>
> **[3:18](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=198)** One is in the envelope and one is in the letterhead.
>
> **[3:23](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=203)** The envelope starts with an H-E-L-O, or hello, which is sent to the SMTP server to say, I'm whomever, mail from, as you can see, and then let's initiate the email conversation.
>
> **[3:38](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=218)** The email address in the send line will be where a bounce or delivery errors, sometimes called the return path, will go if undeliverable.
>
> **[3:48](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=228)** Receipt two, well, this is the receiver's address.
>
> **[3:52](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=232)** The header is slightly different in that it contains a from identity, which is the address of the author.
>
> **[3:59](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=239)** To is the recipient.
>
> **[4:01](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=241)** When delivering a message, a mail server doesn't care about the header sender address.
>
> **[4:08](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=248)** The bottom line is that the envelope address cannot be spoofed, as it's used to deliver email.
>
> **[4:14](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=254)** The letterhead address, however, can be spoofed.
>
> **[4:19](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=259)** Threat management monitors for malware.
>
> **[4:23](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=263)** If you're using [[Cloud Services]] such as [[Microsoft Office|Office]] 365 Online, this automatically protects email messages against spam and malware.
>
> **[4:33](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=273)** In addition, provide user education and train everyone to think before opening links or email attachments.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Phishing]] (4), [[Cloud Services]] (1), [[Microsoft Office|Office]] (1)
> **Analogies:** such as (2), imagine (1)
> **Definitions:** is a  (2)
> **Env Vars:** smtp (1)
> **Speakers:** - [instructor] (1)

#### [Email and SPAM](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=0)** - [Instructor] Spam and malware go hand in hand as email provides a convenient way to reach victims on a global scale.
>
> **[0:08](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=8)** Attackers send millions of spam messages laced with malware with the hope that multiple victims will go for the bait.
>
> **[0:16](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=16)** Here we see on this website the average daily spam volume worldwide over a year period from October, 2020 to September, 2021.
>
> **[0:27](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=27)** Now when we take a look at the chart, the numbers go up and down but let's take a closer look.
>
> **[0:33](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=33)** Here we see the number of emails and that's in billions and here we see the number of spam emails.
>
> **[0:41](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=41)** The reality is that approximately 80% of all emails sent worldwide is spam.
>
> **[0:48](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=48)** Spam is dangerous.
>
> **[0:50](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=50)** We see here at [barracuda.com](https://barracuda.com) that 91% of cyberattacks start with an email.
>
> **[0:56](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=56)** Over on the right-hand side, you also see some other [[Statistics]] related to malicious email.
>
> **[1:04](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=64)** Network administrators enable strong spam filters to prevent spam and [[Phishing]] emails from reaching the end users but there are other tools in the arsenal that help prevent spam, phishing and forgery by allowing administrators to validate inbound email.
>
> **[1:22](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=82)** Those include sender policy framework, DomainKeys identified mail and domain message authentication reporting and conformance.
>
> **[1:33](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=93)** Nearly all abusive email has a fake sender address.
>
> **[1:38](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=98)** Forging a sender's address is done to conceal the sender's true address.
>
> **[1:43](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=103)** Being anonymous is key to effectively impersonating either a well-known or trusted identity in order to obtain passwords or personal information.
>
> **[1:54](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=114)** A sender policy framework record is an extension of the SMTP protocol that prevents spammers from forging the front fields in an email message by verifying that the IP address and the SMTP received header is authorized to send mail for the sender's domain.
>
> **[2:16](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=136)** Sender policy framework helps prevent forgery by allowing administrators to validate email by assessing a reputation and then place an entry in a DNS SPF record.
>
> **[2:30](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=150)** This will then allow email to be delivered.
>
> **[2:33](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=153)** It's like white listing an email address.
>
> **[2:37](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=157)** Sender policy framework authenticates by comparing records in the appropriate DNS record and helps prevent phishing emails and forgery.
>
> **[2:47](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=167)** You can see the sender policy framework report in the message header.
>
> **[2:52](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=172)** Now a message header is information behind the scenes that tells the story of the journey it takes to be delivered from sender to recipient.
>
> **[3:02](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=182)** It includes all stops and validation checks.
>
> **[3:06](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=186)** Here we see that sender policy framework passed.
>
> **[3:11](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=191)** Sender policy framework was the first protocol.
>
> **[3:14](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=194)** However there are other protocols to help improve the effectiveness of providing email authentication: DKIM and DMARC.
>
> **[3:25](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=205)** DomainKeys identified mail is where the sender sign the email with a digital signature to ensure authenticity and receivers then verify.
>
> **[3:36](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=216)** Domain message authentication reporting and conformance is an email authentication policy that uses sender policy framework and or DKIM to establish the sender's identity.
>
> **[3:50](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=230)** It then checks the address on the envelope and letterhead address.
>
> **[3:55](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=235)** Just because an email fails a DMARC test as you see here, it doesn't mean it's spoofed mail but it's a pretty good indication.
>
> **[4:05](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=245)** If there's an error, the administrator can adjust the DMARC settings.
>
> **[4:10](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=250)** DMARC relies on either sender policy framework or DKIM to ensure authentication.
>
> **[4:17](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=257)** However, sender policy framework and DKIM can be used as stand-alone methods.
>
> **[4:24](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=264)** Used together, they help prevent phishing emails and forgery by allowing administrators to validate inbound email.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Phishing]] (4), [[Statistics]] (1)
> **Env Vars:** dkim (4), dmarc (4), smtp (2), dns (2), spf (1)
> **Definitions:** is an  (2)
> **URLs:** [barracuda.com](https://barracuda.com) (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### [PTR records](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ptr-records?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ptr-records?u=76281980&t=0)** - [Instructor] [[Domain Name System (DNS)|Domain Name System]] maps a host name to an IP address.
>
> **[0:05](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ptr-records?u=76281980&t=5)** It's essential on any network.
>
> **[0:08](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ptr-records?u=76281980&t=8)** DNS records are also important for email delivery and spam protection.
>
> **[0:14](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ptr-records?u=76281980&t=14)** In order to properly send and receive email, it's important for proper DNS configuration.
>
> **[0:21](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ptr-records?u=76281980&t=21)** So that other mail servers can send mail to your users and other mail servers will trust you to receive your mail.
>
> **[0:29](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ptr-records?u=76281980&t=29)** DNS has several records.
>
> **[0:32](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ptr-records?u=76281980&t=32)** When dealing with email, here are a few.
>
> **[0:35](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ptr-records?u=76281980&t=35)** An A record maps a name to an IPv4 address.
>
> **[0:40](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ptr-records?u=76281980&t=40)** A quad A record maps a name to an IPv6 address.
>
> **[0:46](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ptr-records?u=76281980&t=46)** An MX record is the mail exchange record for the server that accepts email messages for a domain.
>
> **[0:54](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ptr-records?u=76281980&t=54)** And a PTR record is a reverse lookup which maps the IP address to the name.
>
> **[1:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ptr-records?u=76281980&t=60)** PTR records are important for email delivery and are another tool for spam filters.
>
> **[1:07](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ptr-records?u=76281980&t=67)** Some mail servers will not allow an email to come from a server unless they can perform a reverse DNS lookup.
>
> **[1:15](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ptr-records?u=76281980&t=75)** The reason is that spammers will most likely use a bogus domain name and will not likely have a legitimate PTR record.
>
> **[1:25](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ptr-records?u=76281980&t=85)** Periodically a legitimate business might be flagged because their PTR record is coming up as generic or invalid and it may classify your email as spam or junk mail.
>
> **[1:38](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ptr-records?u=76281980&t=98)** With a legitimate business, this can be a serious problem.
>
> **[1:43](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ptr-records?u=76281980&t=103)** In addition, organization should be careful to never let their email server be used as a spam relay which might result in the organization being blocked.
>
> **[1:55](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ptr-records?u=76281980&t=115)** And it only takes one blocked email to harm an organization.
>
> **[2:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ptr-records?u=76281980&t=120)** I'm at this website here, mxtoolbox, and here you can see if your organization is on the blacklist.
>
> **[2:08](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ptr-records?u=76281980&t=128)** If your mail server has been blacklisted some email you send may not be delivered.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Domain Name System (DNS)|Domain name system]] (1)
> **Env Vars:** dns (4), ptr (4)
> **Cross-References:** coming up (1)
> **Definitions:** is a  (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)


### 6. Understanding Encryption

[↑ Back to Table of Contents](#table-of-contents)

#### [Cryptographic techniques](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=0)** - [Instructor] Cyber attacks propagate the news on a daily basis.
>
> **[0:05](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=5)** Report surface on attacker stealing terabytes of sensitive information, personal data and compromised emails.
>
> **[0:13](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=13)** Stealing company information and trade secrets is a well-known challenge that businesses strive to protect against.
>
> **[0:21](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=21)** However, it can go undetected.
>
> **[0:23](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=23)** As many times companies don't notice any abnormal network activity.
>
> **[0:30](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=30)** We use cryptographic techniques to ensure confidentiality, integrity, and authentication of data whether in motion or at [[Representational State Transfer (REST)|rest]].
>
> **[0:40](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=40)** Data is in motion while traveling through the network moving from place-to-place.
>
> **[0:46](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=46)** Data is at rest while on a drive, [[Cloud Storage]] or removable media.
>
> **[0:52](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=52)** Today, encryption is the most effective way to secure digital data.
>
> **[0:57](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=57)** Encryption uses a mathematical algorithm, and a key to convert data into a scrambled format, which is meaningless unless you have a key.
>
> **[1:08](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=68)** As we discuss [[Cryptography]], you'll hear many terms such as symmetric, asymmetric and hashing.
>
> **[1:15](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=75)** Now there are two main types of encryption.
>
> **[1:18](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=78)** Asymmetric encryption, which is also called public key encryption.
>
> **[1:23](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=83)** It has two key, a public and a private key.
>
> **[1:28](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=88)** And symmetric encryption.
>
> **[1:29](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=89)** It's also called conventional encryption, and uses one key, which is the shared secret.
>
> **[1:37](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=97)** Most of the time though, we'll use a hybrid crypto system that employs both methods.
>
> **[1:43](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=103)** To protect data we also use hash [[Algorithms]].
>
> **[1:48](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=108)** A hash algorithm is a one-way function that takes a variable length input, and returns a fixed length output.
>
> **[1:56](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=116)** We use hash functions in password management, digital signatures and message digest.
>
> **[2:04](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=124)** Encryption and cryptographic techniques can ensure the following.
>
> **[2:08](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=128)** Confidentiality, which protects data against unauthorized disclosure.
>
> **[2:14](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=134)** Cryptographic techniques can also provide integrity.
>
> **[2:18](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=138)** With that we use a hash function.
>
> **[2:21](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=141)** [[Accountability]] is being able to positively identify an entity in a system such as signing an electronic contract.
>
> **[2:29](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=149)** Here we use a digital signature.
>
> **[2:33](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=153)** Authentication confirms the identity of a system object.
>
> **[2:38](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=158)** And here we use a message authentication code.
>
> **[2:42](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=162)** There are other cryptographic concepts, and terms that will include key exchange, Digital signatures.
>
> **[2:50](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=170)** Certificates.
>
> **[2:52](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=172)** Trusted third-party.
>
> **[2:54](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=174)** And public key infrastructure.
>
> **[2:56](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=176)** All data, whether at rest or in motion, such as data and cloud storage or traveling across the network should use some form of cryptographic technique to ensure [[Privacy]], [[Data Integrity]] and authentication.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (3), [[Cloud Storage]] (2), [[Cryptography]] (1), [[Algorithms]] (1), [[Accountability]] (1)
> **Analogies:** such as (3)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Symmetric encryption](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980&t=0)** - [Instructor] Symmetric encryption is also called conventional encryption and uses a single shared secret key.
>
> **[0:09](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980&t=9)** Symmetric encryption has five ingredients: the plaintext, the encryption algorithm, a shared secret key, ciphertext, and the decryption algorithm, which is simply the encryption algorithm run in reverse.
>
> **[0:27](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980&t=27)** To give you an idea of what it looks like when text is encrypted, I'm at this website.
>
> **[0:34](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980&t=34)** And here I'll put my plaintext.
>
> **[0:37](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980&t=37)** And then the key of the encryption, we'll keep simple.
>
> **[0:40](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980&t=40)** I'll put Roxy.
>
> **[0:43](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980&t=43)** And here we can choose 128, 192 or 256-bit encryption.
>
> **[0:50](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980&t=50)** We'll stay with 128 and say Encrypt.
>
> **[0:54](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980&t=54)** And down below is what you can see when text is encrypted.
>
> **[0:59](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980&t=59)** Symmetric [[Algorithms]] include Data Encryption Standard, Triple DES, IDEA, and Advanced Encryption Standard to provide fast, efficient encryption with low overhead.
>
> **[1:15](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980&t=75)** We use symmetric encryption to provide confidential, online communications, such as an SSL/TLS transaction or Secure Multipurpose Internet Mail Extensions to encrypt messages for confidential mail.
>
> **[1:31](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980&t=91)** Symmetric encryption algorithms are one of two types, either a block cipher, such as DES or AES, or a stream cipher, such as RC4, or SEAL.
>
> **[1:46](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980&t=106)** A block cipher processes plaintext in fixed size, either 64 or 128-bit blocks.
>
> **[1:55](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980&t=115)** And produces a block of ciphertext in the same size.
>
> **[2:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980&t=120)** If we add memory to a block cipher, this results in a stream cipher.
>
> **[2:06](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980&t=126)** Stream ciphers are fast and use less code.
>
> **[2:10](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980&t=130)** They operate on a stream of data, encrypting one bit or one byte at a time.
>
> **[2:16](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980&t=136)** Stream ciphers are used to secure wireless communications.
>
> **[2:21](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980&t=141)** A stream cipher takes plaintext and an exclusive OR with a pseudorandom key stream, which is a sequence that appears random and therefore is not predictable.
>
> **[2:35](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980&t=155)** We have several cipher modes of operations.
>
> **[2:38](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980&t=158)** A chaining mode defines the way that the plaintext, the key and the ciphertext generate the stream of ciphertext that is transmitted to the recipient.
>
> **[2:50](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980&t=170)** Electronic codebook is the simplest mode in that there is not feedback.
>
> **[2:55](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980&t=175)** Each 64-bit block is encoded independently but uses the same key, which means that the same plaintext will always result in the same ciphertext.
>
> **[3:08](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980&t=188)** The following modes, cipher blockchaining, cipher feedback and output feedback will add randomness to the message to provide extra security.
>
> **[3:21](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980&t=201)** A more secure mode is cipher blockchaining, which takes a block of plaintext and then does an exclusive OR operation with the previous block before it is encrypted.
>
> **[3:35](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980&t=215)** Because each ciphertext block depends on all plaintext blocks processed up to that point, we need an initialization vector, which is an encrypted block of random data used as the first 64-bit block to begin the chaining process.
>
> **[3:53](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980&t=233)** Symmetric encryption uses a single shared secret key to provide fast, efficient encryption with low overhead.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (2)
> **Env Vars:** des (2), idea (1), ssl (1), tls (1), aes (1)
> **Definitions:** is a  (1), means that (1), is an  (1)
> **Analogies:** such as (3)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### [Asymmetric encryption](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=0)** - [Instructor] Symmetric encryption provides fast, efficient encryption.
>
> **[0:05](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=5)** However, it requires that both sender and receiver have the same shared key, which can be a problem in a complex networked environment.
>
> **[0:15](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=15)** Asymmetric encryption, also called public key encryption, is a fundamental to provide security as it uses two keys, a public key and a private key, which are mathematically related.
>
> **[0:31](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=31)** Asymmetric encryption was developed in the 1970s.
>
> **[0:36](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=36)** There are many uses for asymmetric encryption that include: securely exchanging a secret key, confidentiality using encryption, authentication, and creating digital signatures.
>
> **[0:51](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=51)** With public key encryption, two keys are generated, a public key and a private key.
>
> **[0:58](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=58)** The private key is kept private and never shared with anyone.
>
> **[1:03](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=63)** The public key is shared and available to everyone.
>
> **[1:08](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=68)** Here, we see two entities, Alice and Bob.
>
> **[1:12](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=72)** Alice has generated a key pair, a public and a private key.
>
> **[1:17](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=77)** Bob also generates a key pair, a public key and a private key.
>
> **[1:23](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=83)** Alice sends her public key to the key server and Bob then also sends his public key to the key server.
>
> **[1:31](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=91)** Now a key server can be on a corporate environment.
>
> **[1:34](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=94)** It could be on the cloud or anywhere you want access so that people can get the public keys.
>
> **[1:42](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=102)** Now let's step through a transaction.
>
> **[1:45](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=105)** We see here that Alice wants to communicate with Bob, so she obtains Bob's public key.
>
> **[1:52](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=112)** She takes Bob's public key and the plaintext and creates the ciphertext and then sends it to Bob.
>
> **[2:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=120)** Bob then uses his private key to decrypt it and he is then able to read the message.
>
> **[2:07](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=127)** An important concept we must address while communicating with entities on the internet and dealing with public keys is the issue of trust.
>
> **[2:18](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=138)** So we see that Alice and Bob want to communicate with one another.
>
> **[2:23](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=143)** Alice needs to obtain Bob's public key, but can she trust Bob's public key?
>
> **[2:30](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=150)** Was it generated and made from Bob?
>
> **[2:34](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=154)** In the 1970s, Phil Zimmermann introduced what we call the web of trust after developing an asymmetric algorithm called Pretty Good [[Privacy]].
>
> **[2:46](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=166)** The method is this.
>
> **[2:48](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=168)** Instead of trusting a trusted third party such Verisign to decide whether or not a public key can be trusted, we look to a trusted introducer.
>
> **[3:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=180)** For example, in an [[Microsoft Office|office]], you generate your public and private keys.
>
> **[3:06](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=186)** Everyone in the office sends it to the manager.
>
> **[3:10](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=190)** The manager then assigns trust.
>
> **[3:13](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=193)** The web of trust works in signing public keys in an intimate environment, such as our example.
>
> **[3:20](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=200)** But on a larger untrusted environment, we need another option.
>
> **[3:25](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=205)** A better way is to use Public Key Infrastructure with certificates.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (2), [[Privacy]] (1)
> **Analogies:** for example (1), such as (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Diving into hash algorithms](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=0)** - [Educator] A hash function is a cryptographic technique that protects [[Data Integrity]].
>
> **[0:07](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=7)** Now, what's the difference between a hash versus encryption?
>
> **[0:11](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=11)** Well, encryption uses a key or pair of keys.
>
> **[0:16](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=16)** When we encrypt a message, we can decrypt the message as long as we have a key.
>
> **[0:22](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=22)** However, a hash is one way, meaning you cannot generate the original message from the hash.
>
> **[0:31](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=31)** Now, there are a number of different applications for a hash function.
>
> **[0:35](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=35)** One is providing message authentication.
>
> **[0:39](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=39)** Another is monitoring data integrity.
>
> **[0:43](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=43)** We use hash functions to store passwords, and hash functions are used in [[Blockchain]] technology.
>
> **[0:53](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=53)** In order to be a good hash, there are a number of different cryptographic requirements.
>
> **[0:59](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=59)** One is that it can be applied to a block of data of any size.
>
> **[1:05](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=65)** Another is that it needs to create a fixed-sized output.
>
> **[1:11](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=71)** It also has to be easy to compute and not cumbersome, and it needs to have what's called strong collision resistance, meaning that you cannot generate the same hash from another block of data.
>
> **[1:26](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=86)** Now, you'll hear of some other hash [[Algorithms]], but the Secure Hash Algorithm, also known as SHA, has been in existence for many years.
>
> **[1:37](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=97)** SHA-1 was designed by the National Security Agency, it's still in use but there are improved algorithms, so more likely, you'll be seeing SHA-2 and SHA-3.
>
> **[1:49](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=109)** SHA-2 has a number of different variations and SHA-3 is based on Keccak.
>
> **[1:58](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=118)** Now, a hash function takes a variable-length input and generates a fixed-length output.
>
> **[2:04](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=124)** The output will depend on the algorithm and the compression function that is used.
>
> **[2:09](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=129)** So let's step through the process.
>
> **[2:12](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=132)** So what we see here on the left is the message.
>
> **[2:15](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=135)** The H represents the hash algorithm which outputs a fixed length output, which is called a message digest.
>
> **[2:24](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=144)** Now, the message digest is like a fingerprint.
>
> **[2:28](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=148)** This fingerprint of the message is then attached to the message and the sender then sends it to the recipient.
>
> **[2:37](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=157)** The receiver then goes through the process of verifying that the message has not been modified in transit.
>
> **[2:44](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=164)** So what happens is that the receiver will generate a new hash value from the message.
>
> **[2:52](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=172)** So what we have here is a message sent by the sender and we're going to use a message digest in order to ensure integrity as it travels across an insecure network.
>
> **[3:05](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=185)** And then taking that message digest or fingerprint and the hash value that was just generated, and then the two are compared.
>
> **[3:14](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=194)** If they are the same, then we know that there has been no modification of the data in transit.
>
> **[3:22](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=202)** Now, I'll take you out to [[[NIST]].gov](https://nist.gov) which will tell you a little bit about some of the hash algorithms and what is considered approved algorithms today.
>
> **[3:32](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=212)** Now, as you can see that we have SHA-1 and SHA-2, but there's also a lot more research going on into SHA-3, which as you can see permutation based functions based on Keccak.
>
> **[3:46](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=226)** So there's another family of algorithms called SHA-3 which you'll most likely be seeing more of.
>
> **[3:53](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=233)** In addition, you will find a lot of information on NIST and here's a little bit of blockchain technology and finding out about blockchain technology and the use of hash algorithms.
>
> **[4:05](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=245)** So NIST provides a lot of information about cryptographic techniques.
>
> **[4:10](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=250)** But let's take a look at the hash algorithm in your browser in the certificate.
>
> **[4:15](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=255)** So we'll go up to the browser and take a look at that lock, and it says connection is secure.
>
> **[4:21](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=261)** And then, let's take a look at more information.
>
> **[4:24](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=264)** And in this case, I want to take a look at the certificate and here we see the certificate for [nist.gov](https://nist.gov) and I'll scroll down and here we see the fingerprints and it is using both SHA-256 and SHA-1.
>
> **[4:41](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=281)** So a hash algorithm takes a variable length input and outputs a fixed-length output depending on the algorithm and is used to provide assurance of data integrity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (6), [[NIST]] (4), [[Data Integrity]] (3), [[Blockchain]] (3)
> **Env Vars:** sha (12), nist (2)
> **Definitions:** is a  (2), known as (1), is called (1)
> **URLs:** [nist.gov](https://nist.gov) (2)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [educator] (1)

#### [Public Key Infrastructure](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/public-key-infrastructure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/public-key-infrastructure?u=76281980&t=0)** - [Instructor] Public key encryption uses two keys, a public key and a private key.
>
> **[0:06](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/public-key-infrastructure?u=76281980&t=6)** A public key is public, and anyone can share the public key and claim ownership.
>
> **[0:13](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/public-key-infrastructure?u=76281980&t=13)** While this seems like a great concept, we must be able to trust that the public key belongs to the entity that shared the public key.
>
> **[0:23](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/public-key-infrastructure?u=76281980&t=23)** Public key infrastructure is not a protocol but a framework that is used to provide trust.
>
> **[0:30](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/public-key-infrastructure?u=76281980&t=30)** Public key infrastructure uses a trusted third-party or a certificate authority to authenticate entities by using a digital signature for each entity.
>
> **[0:43](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/public-key-infrastructure?u=76281980&t=43)** A certificate authority is responsible for issuing, revoking and distributing certificates and includes Verisign, GoDaddy and Thawte, but companies can create their own certificates that generally use the format X.509.
>
> **[1:02](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/public-key-infrastructure?u=76281980&t=62)** Let's take a look at how this works.
>
> **[1:05](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/public-key-infrastructure?u=76281980&t=65)** Up at the top, we see the certificate authority, which is what we consider the trusted third-party.
>
> **[1:13](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/public-key-infrastructure?u=76281980&t=73)** We then see Alice, and we see Bob.
>
> **[1:17](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/public-key-infrastructure?u=76281980&t=77)** All three entities have generated a public and a private key.
>
> **[1:23](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/public-key-infrastructure?u=76281980&t=83)** Alice and Bob both send up their public key, and now the certificate authority is going to verify them.
>
> **[1:31](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/public-key-infrastructure?u=76281980&t=91)** First, the certificate authority takes the unsigned certificate containing the user's ID and user's public key and generates a hash of that certificate.
>
> **[1:44](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/public-key-infrastructure?u=76281980&t=104)** Now, this is a small stump of data that is going to be encrypted using the certifying authority's private key to form a digital signature.
>
> **[1:54](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/public-key-infrastructure?u=76281980&t=114)** The small stump of data that has been encrypted is now attached to the certificate and then distributed to those who ask for it.
>
> **[2:04](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/public-key-infrastructure?u=76281980&t=124)** As you can see now, Alice has obtained Bob's public key from the certificate authority.
>
> **[2:11](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/public-key-infrastructure?u=76281980&t=131)** Now, what happens is Alice takes out that signed certificate and generates a hash of the certificate.
>
> **[2:20](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/public-key-infrastructure?u=76281980&t=140)** On the bottom, that small stump of data is pulled off for comparison, but first it has to be decrypted with the certifying authority's public key.
>
> **[2:31](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/public-key-infrastructure?u=76281980&t=151)** The two are then compared, and if they're equal, we know then that Bob's public key can be trusted.
>
> **[2:38](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/public-key-infrastructure?u=76281980&t=158)** So now Bob has Alice's public key.
>
> **[2:41](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/public-key-infrastructure?u=76281980&t=161)** Alice has Bob's public key, and the two then can communicate securely.
>
> **[2:47](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/public-key-infrastructure?u=76281980&t=167)** Now, let's take a look how it looks if you were to go in a browser.
>
> **[2:52](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/public-key-infrastructure?u=76281980&t=172)** I'm in Mozilla at [[[Google]].com](https://google.com).
>
> **[2:56](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/public-key-infrastructure?u=76281980&t=176)** I can see the HTTPS, which represents [google.com](https://google.com) and a secure connection.
>
> **[3:02](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/public-key-infrastructure?u=76281980&t=182)** We also see a green lock, and we're just going to drop this down, and we see the secure connection and then down below, we'll say More Information.
>
> **[3:14](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/public-key-infrastructure?u=76281980&t=194)** This gives information about the security, and I'll say View Certificate, and here we can see all the information about the certificate, and if you want to, you can look at the details.
>
> **[3:28](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/public-key-infrastructure?u=76281980&t=208)** So public key infrastructure is a framework used to ensure trust using certificates.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2)
> **URLs:** [google.com](https://google.com) (2)
> **Definitions:** is a  (2)
> **Env Vars:** https (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/next-steps?u=76281980&t=0)** - [Lisa] Thank you for watching IT Security Foundations: Operating Systems Security.
>
> **[0:07](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/next-steps?u=76281980&t=7)** In this course we discussed methods to secure a [[Windows]] operating system followed by an overview of best practices to secure a Mac OS and a [[Linux]] machine.
>
> **[0:18](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/next-steps?u=76281980&t=18)** We then reviewed ways to provide user authentication using passwords, biometrics, and multifactor authentication.
>
> **[0:27](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/next-steps?u=76281980&t=27)** We also described methods to protect and secure the operating system such as using a firewall and the importance of hardening the operating system.
>
> **[0:36](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/next-steps?u=76281980&t=36)** We then briefly touched on best practices for securing email, along with some basic self encryption.
>
> **[0:44](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/next-steps?u=76281980&t=44)** If you're interested in learning more, please check out the library.
>
> **[0:48](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/next-steps?u=76281980&t=48)** New courses are added all the time.
>
> **[0:50](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/next-steps?u=76281980&t=50)** If you're interested in learning about core security concepts, such as social engineering, malware, and spyware, please check out my course, [[IT Security Foundations- Core Concepts]].
>
> **[1:03](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/next-steps?u=76281980&t=63)** If you want to learn more about the billions of devices designed to improve the quality of life in homes and businesses, please check out my course, Securing the [[IoT]]: Introduction.
>
> **[1:14](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/next-steps?u=76281980&t=74)** For a complete list of courses, visit my author page.
>
> **[1:19](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/next-steps?u=76281980&t=79)** Keep learning and I hope to see you again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[Linux]] (1), [[IoT]] (1)
> **Analogies:** such as (2)
> **Cross-References:** we discussed (1)
> **Speakers:** - [lisa] (1)


## Instructor

- [[Lisa Bock]]

## Path Context

### In [[Become an IT Security Specialist]]
← [[Cybersecurity Foundations]] | **3 of 12** | [[IT Security Foundations- Network Security]] →

### In [[Cybersecurity Fundamentals]]
← [[Security Frameworks Fundamentals]] | **7 of 12** | [[IT Security Foundations- Network Security]] →

## Appears In

- [[Become an IT Security Specialist]]
- [[Cybersecurity Fundamentals]]

---

[↑ Back to top](#)