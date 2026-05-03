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
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ensuring-system-security?u=76281980&t=0)** - [Lisa] An operating system provides integration of devices, manages files and folders, and is the interface between the user applications and the network. However, the operating system is where many attacks are launched and targeted. In this course, I'll begin by reviewing methods to secure [[Windows]], Mac and [[Linux]] operating system. I'll introduce ways to provide user authentication and then cover methods to protect and secure the operating system such as using a firewall. We'll then briefly discuss best practices for securing email, along with some basics of encryption. At the end of this course you'll have a better understanding of what's involved when securing an operating system. Hello, my name is Lisa Bock and I'm a security ambassador. Are you ready to lock down your system to minimize the potential for attack? Then let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[Linux]] (1)
> **Analogies:** such as (1)
> **Speakers:** - [lisa] (1)

#### [Resources](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/resources?u=76281980&t=0)** - [Instructor] This course is a beginner course designed to introduce you to Operating System Security. I cover a lot of information, but I have provided a file with the links to the resources found on the exercise file, on the welcome screen. So that you can follow along, select that, and that will take you to all the links I reference in the course.

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
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=0)** - [Instructor] Today, desktop and laptop computers are used in industry for data entry, research and general duties. In the corporate world, [[Microsoft]] [[Windows]] is the most commonly used operating system, which makes Windows an optimal target for malicious actors. The good news is that there many things that you can do to secure your system. Depending on the version, it only takes a few simple steps to lock down your system and minimize the effects of an attack. [[Windows 10]] Home version is a popular operating system used by remote workers, students, and [[Microsoft Office|office]] personnel. Even though it's a basic version, there are still several features that will add another layer of security. Enforcing a login is the first line of defense. With Windows, you'll have several options. Windows 10 Home will default at using your Windows account when setting up your system. Although this is convenient, a more secure option is to create a local login. You might also want to set up additional users. It's a good idea to create a login for each family member or team member in the office. Use the administrator account sparingly. Use this account for when performing duties that need elevated permissions, such as installing new software or updates. Keep in mind, you should only use the administrator account for those specific reasons, then once done, revert back to your regular account. You could also utilize Windows Hello.
>
> **[1:37](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=97)** With Windows Hello, you can use either a pen, facial recognition, or fingerprint to gain access to the system. This will provide a faster, more secure way to log in. Now keep in mind, if you do want to use facial recognition or your fingerprint, you will need to have a compatible device, such as a camera or fingerprint reader to use this option. Windows [[Microsoft Defender|Defender]] comes with the operating system and constantly monitors your system for threats. It will activate immediately and begin monitoring your system. Although you may choose to use a third party anti-malware solution, Windows Defender provides robust antivirus protection and has a built in firewall as well to block any unwanted intrusions. Just as you would any other operating system, keeping Windows updated is an essential first line of defense. Update provide the necessary security patches that minimize your exposure to malicious activity. And back up your data. In case of data loss or a system crash, backing up your data will allow you to recover quickly. You could use a trusted cloud provider, along with local storage for critical files and sensitive data. Another good practice is to use system restore and capture restore points prior to making major changes to the operating system, such as installing new software. This will then give you the ability to roll back
>
> **[3:10](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/securing-the-windows-os?u=76281980&t=190)** and restore if the upgrade causes an unstable system or the upgrade is not compatible with any production software, such as accounting software. If you or your organization have Windows 10 Pro or Windows 10 Enterprise, you can take advantage of BitLocker, a method used to encrypt your data. Now this is a powerful feature, as when used, the only way that you can access the data is if you have the key. Now I have some other resources here that you can take a look at on ways to protect your Windows operating system. In addition, you can take a look at the article by Forbes on how to secure Microsoft Windows. But the bottom line is when working with the Windows operating system, it only takes a few simple steps to lock down your system and minimize the effects of an attack.

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
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=0)** - Today, desktop and laptop computers are used in industry for data entry, research, and general duties. In the corporate world, [[Microsoft]] [[Windows]] is the most commonly used operating system as it represents approximately 75% of the global market. Because of the large market share, it's important to understand the Windows architecture as this represents another attack factor. So let's talk about the [[Hardware]] abstraction layer and then compare user and kernel mode. On a Windows machine, a CPU operates in user mode and kernel mode. In this figure, on the top is the user mode. Installed applications run in this mode, and that includes user mode drivers and the Windows application programming interface. On the bottom is the kernel mode. Within that the operating system runs in this mode and includes other kernel mode drivers, the operating system kernel and file system drivers. Below that we see the hardware abstraction layer followed by the hardware. The kernel is the core of the operating system and it has control over the entire computer. The kernel is like a translator and it handles all of the input and output requests, memory and all the peripherals connected to the computer. The hardware abstraction layer is the software
>
> **[1:33](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=93)** that handles all the communication between the kernel and the hardware. So now let's compare user mode and kernel mode. Code executing in user mode will include user applications and are isolated as they have no direct access to the hardware or memory location. When user mode code runs, it's granted its own restricted address space by the kernel along with a process created specifically for the application. Any request must go through the operating system to access hardware resources. Because of this isolation, crashes in user mode are restricted to the application only. And this helps prevent the operating system and other applications from crashing if that application crashes. Code executing and kernel mode has unrestricted access to the underlying hardware and it's capable of executing any CPU instruction and can reference any memory address directly. Now understanding the windows architecture is important, as when dealing with malicious code, you may encounter a rootkit. Now, a rootkit is a set of tools that enables an unauthorized user to gain access to a computer system undetected. Rootkits are almost always designed to run with super user privileges that are normally reserved for the CIS admin or root user. A good rootkit will sniff passwords,
>
> **[3:10](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/visualizing-the-windows-architecture?u=76281980&t=190)** create hidden directories and be able to avoid any security measures as it communicates with the network. A malicious actor can develop a rootkit in user mode or kernel mode. A common rootkit is a user mode rootkit with administrative privileges. A user mode rootkit changes the applications at a user level as well as providing backdoor access and it can disable system and security services, hide processes, files and even conceal network interfaces. However, a user mode rootkit does have a greater chance of being detected by anti-[[Malware Detection]]. A kernel mode rootkit is a more advanced rootkit as it places the rootkit at the same level as the operating system and anti-malware protection software. Although a kernel mode rootkit is more advanced. It's difficult to remain truly undetected mainly because a kernel mode rootkit is unstable and tends to cause various system crashes. And once this instability is recognized, this generally leads to someone discovering the root kit. So when dealing with the Windows architecture, it's important to understand user mode and kernel mode and the hardware abstraction layer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (9), [[Windows]] (6), [[Microsoft]] (1), [[Malware Detection]] (1)
> **Env Vars:** cpu (2), cis (1)
> **Definitions:** is a  (3)
> **Speakers:** - today (1)

#### [Dissecting the NTFS](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=0)** - [Presenter] The file system itself can provide an additional level of security. All [[Windows]] operating systems use the New Technology File System, or NTFS. Prior to that, the File Allocation Table, or FAT, was used. FAT is as simple Windows file system and is the table that exists at the very top of the volume. FAT has serious limitations in providing security. It only supports read-only, hidden, system and archive file attributes, and not the wide variety of permissions that are available in NTFS. However, FAT is still supported. NTFS is what is used in today's Windows operating systems. NTFS has advanced ability to secure the file system by granting or denying various permissions. This allows control over which users and groups can gain access to the files and folders stored on the NTFS volume. With NTFS, user-defined attributes can be added to a file. And for [[Accountability]], NTFS adds a timestamp indicating when the file was last accessed. Permissions define the type of access granted, such as full control, modify, list folder contents, read and write, and can be applied to folders and files and [[Active Directory]] objects.
>
> **[1:35](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=95)** Only drives formatted as New Technology File System will have the permissions tab. The ability to assign permissions is powerful. However, it can be difficult to sort out a permission problem, so you should become familiar with the various permissions and how they're enforced. If a drive is formatted with NTFS, permissions can be set on shared drives and folders. One concept is that of inheritance. Inheritance means that permissions will propagate from the parent to the child. Inheritance is used in the file system and active directory permissions. However, it does not apply to shared permissions. The different types of permissions in NTFS are explicit permission. This is applied directly to the file or folder. Inherited, permissions that are granted to a folder will extend into child objects, such as sub folders or files within the parent folder. And effective permissions consist of explicit and any inherited permissions. File and folder permissions are based on the permissions granted to each individual user at the Windows login, regardless if they're on the local machine or accessing the resource over the network via a shared folder. A driver folder can be shared, and clients can have access to the files on the network
>
> **[3:09](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=189)** by using the Universal Naming convention. New Technology File System permissions are full control, modify, read and execute, list folder contents, read, write and special permissions. Share permissions are full control, change, read and no access. Permissions are used according to how the resource is accessed. Share permissions are effective if a resource is accessed through the network. But New Technology File System permissions are effective all the time and are in effect whether the user is logged in locally or across a network. If both share and New Technology File System permissions are applied to the same resource, the most restrictive permission will be enforced, meaning if no access is set on a New Technology File System folder, and full control is set on the share, an access level of no access will result. In a [[Microsoft]] operating system, there are several hidden administrative shares that are automatically created and indicated by a dollar sign at the end of the share name. Permissions on hidden administrative shares cannot be modified. As you can see, the file system itself can provide an additional level of security, and the New Technology File System has extensive
>
> **[4:44](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/dissecting-the-ntfs?u=76281980&t=284)** and granular permissions to restrict or allow access to files and folders.

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
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ntfs-demo?u=76281980&t=0)** - [Announcer] Now we've taken a look at the new technology file system permission behavior. Now, let's take a look at a folder, and look at the permissions. I'm in Server 2016, and I created a folder Admin. I'll right click and go to Properties and here's where you can see the permissions; Go to Security and here we see group or user names, and then down below the permissions. Here's a user called Sherlock and then down below, you can see what permissions there are for Sherlock. If you want to change the permissions, we'll go to Edit go to Sherlock and then make some modifications here. Sometimes you might want to see special permissions or advanced settings. We'll click Advanced to see those. Once you go in, you can see the permission entries. For example, we see Sherlock and in this case we can go to Edit and it allows us to see some of the basic permissions that are on this folder. We can also show advanced permissions if we go here. And as you can see, some of the advanced permissions that have been selected and we'll say, OK. What happens when there's share permissions? Like share folder permissions, new technology file system permissions are a combination of group permissions assigned
>
> **[1:35](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ntfs-demo?u=76281980&t=95)** and any additional permission attributes that are assigned to that user. In some cases, you're really not sure why someone doesn't have permission to do something. You need to go to Effective Access. This tab allows us to view the effective permissions for a user group or device account. Now, if I go to select user, you would go in and type Sherlock. Now, we'll say Check Names and we'll say, OK. and now I can say view effective access. And here we see exactly what has happened and what effectively Sherlock has permission to do. As you see anything with a red X means that Sherlock is not allowed to do these things and then we'll say, OK. Now, permissions can get complicated, but as you can see, there's a way that you can go in and and view the permissions for that object.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (7)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [announcer] (1)

#### [Controlling folder access](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980&t=0)** - [Instructor] One of the most predominant threats today is ransomware. Now you can get a ransomware attack in a number of different ways. You could visit a malicious website. You can get ransomware from opening file attachments or by clicking on a malicious link. One way to defend against a ransomware attack is by using a feature called controlled folder access. Now, this feature is available in all versions of [[Windows 10]] and above. Now I found some resources that might help your understanding a little bit better. First, we can see this article protect your PC from ransomware. If we scroll down, you can see some best practice suggestions on how you can keep your PC secure. Now, these are standard. Things such as make sure your PC is up-to-date with the latest version of [[Windows]], and has the latest patches. Make sure Windows Security is turned on to help protect you from viruses and malware. And in Windows 10 or 11, turn on control folder access. And this will help protect important local folders from unauthorized programs, such as ransomware or other malware. Now this article is from [[Microsoft]], and it steps through the process but I did find one that gave us some visuals. Here at Bleeping Computer, I found an article that outlines how to step through the process of activating controlled folder access. So you want to go in,
>
> **[1:33](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/controlling-folder-access?u=76281980&t=93)** and open Windows [[Microsoft Defender|Defender]] Security Center, and that's the first stop. Once there, you want to select virus and threat protection, and there you'll see controlled folder access. Toggle it on, and then you'll be able to select what folders you want protected. Now once there, you'll see that the operating system has selected some folders to be protected but if one was missed or you want something outside of the range of what the operating system selected, you can add a protected folder. Now understanding that once the folders are protected, you'll have to white list any applications that you want to access to edit, create or remove files from the protected folders. Now, this could be cumbersome of course because you have to go through every time. 'Cuz it will tell you that you won't be allowed to modify it without selecting an allowing an app through the controlled folder access. But once it's secure, you can [[Representational State Transfer (REST)|rest]] assure, it won't let any unauthorized application access the folder. And then it goes through 'cuz there's some other ways to enable controlled folder access. So understand, ransomware is a real threat. So protect yourself by using controlled folder access, a feature available in all versions of Windows 10 and above.

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
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-runas?u=76281980&t=0)** - To ensure system security, you should separate roles and privileges and enforce granular control that includes people and processes. For example, the role of email administrator should be separate from the role of system administrator even if they're the same person. That includes separate login and role-based permissions. We have separate accounts for separate roles so that any tasks are performed using the rule of least privilege. Using the role of administrator should be used only when acting as an administrator. The reasoning behind this is simple. While in the role of administrator, you can do anything to the system. While any administrative tasks are done to improve the system or change the settings for better functionality, there are times that you might do something accidentally such as delete folders or files or change the system integrity in a negative way. For example, while surfing the net you might get a drive by malware attack. If you are logged in as an administrator, the malware will affect the system with all the rights and privileges of the administrator. And once that happens, this will change the system integrity. Because of that, it's best to log in as a normal user and do most of your day to day activities
>
> **[1:34](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-runas?u=76281980&t=94)** to keep your system more secure. Now, I'm in server 2016 as a user called Sherlock. Now, I'm in server 2016 as a user called Sherlock. But I want to go into [[Powershell]] as the administrator.
>
> **[1:52](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-runas?u=76281980&t=112)** I go into [[Windows]] PowerShell but now I right click and say, run as administrator. It will then prompt me for a password. Now, once in, I'll act as administrator and I can do whatever is necessary for the system. Sometimes while you're working in a system, you might forget who you are. A handy command to use is who am I. And this will tell you if you are logged in as the administrator. Now we'll simply exit. And once you've completed any necessary tasks, you close the program and this will disable the run as feature and return you to your normal account. So, good practice includes using run as only when performing administrative tasks as this can help prevent malicious software from being installed or make any changes to your computer.

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
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=0)** - [Narrator] User Account Control is a feature in [[Windows]] that protects the security of the operating system. When a program wants to make a change, a dialogue box will open and prompt you to select whether or not you want the app to make changes. Prompting the user makes you take a second and think about what you're doing and maybe will stop you from installing something that isn't safe. This can help prevent the installation of malicious software. Let's take a look at the four User Account Control settings. I went to search and I started typing User Account Control. Now I've opened the dialogue box. Let's take a look at the settings. As you can see, you can move the slider up and down, and it tells you a little bit about each level. Let's take a look first at the most restrictive, always notify. If I say always notify me, you'll be notified before any apps make changes to the PC that require any administrator permissions. When this happens, your screen will dim. At this point, you must either approve or deny the request in that dialogue box before you can do anything else on your PC. As you can imagine, this is the most secure setting. When the prompt appears, you should really look at the contents of the dialogue box before allowing any changes made to the PC. The next level states,
>
> **[1:32](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=92)** "Notify me only when apps try to make changes to my computer." Now, this is the default level. You'll be notified before any apps make changes to the PC that require administrator permissions and also if an app tries to make changes to Windows settings; however, you won't be notified if you tried to make changes to Windows settings that require administrator permissions. At this point, it's usually safe to make changes to Windows settings without you being notified. However, malicious might take advantage of this by using these apps to install files or change settings on your PC, so you really should be careful about which apps you want to allow on your PC. Notify me only when programs or apps try to make changes to my computer. Now, in this case, you won't see your desktop dim at all. Using this level increases the [[Security Risk]], so be careful, especially since malware might try to take advantage of this setting. However, if you're using strong antimalware protection, this shouldn't pose a serious risk. In first three cases, if you're signed in with a standard user account, any changes that require administrator permissions will automatically be denied. The last setting is never notify. This is the least secure setting because when you say don't notify me,
>
> **[3:05](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/exploring-user-account-control-uac?u=76281980&t=185)** you're pretty much turning off any User Account Controls. It's not recommended. This opens your computer to a lot of security risks, so you should always be careful about what you run because they'll have the same access as you do. That includes a potential for the software to gain access and make changes to any of the areas that are protected: any personal data, saved files, or anything else that's stored on your PC. Again, this is one you really shouldn't use as it's not recommended. So let's take a look. We'll most likely set this back up at the default and keep it there to notify me only when apps try to make changes to my computer. As you can see, it said, "Do you want to allow this app to make changes to your device?" And I'm going to say yes. When working with User Account Control, you might see a slightly different appearance, depending on the version of Windows that you're using. For more information, you can visit this page which talks about User Account Control.

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
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=0)** - [Instructor] For many years, the Mac operating system has had a reputation of being more secure. However, Apple laptops and desktops have gained popularity in the last two decades. Along with the increase in popularity comes the threat of a cyber attack. In this segment, we'll review steps that you can take to secure your Mac. Similar to most operating systems, the macOS is constantly evolving. Apple incorporates security into their system. I'm here at this website where you can learn more about what they do to incorporate security. Some of the features include chip-level security to protect your login password and automatically encrypt your data. It constantly updates with the latest security patches and there's also the ability to locate your Mac in case it's lost or stolen. Of course, there are other common best practice guidelines that users can do to improve the security of their system. You'll want to set up your Mac to log out whenever your machine has been idle for any length of time. By default, the administrator is the person who initially sets up the Mac. Over time, you may need to add someone else as an administrator. However, it's recommended that you limit the number of administrative users. This will provide an additional layer of security. You'll also want to force users to log into the system. This will prevent unauthorized entities
>
> **[1:33](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protecting-your-macos?u=76281980&t=93)** from accessing the system. Along the same concept, you'll also want to create a unique ID for each user that accesses the system. Once set up, this will restrict access to personal files and settings. Setting up users, guests, and groups on a Mac is easy. And I'm here at this webpage where it steps you through the process of setting up users on your Mac. Now, when setting up a user, you'll want to select a password that is strong and resists easily being guessed. Here we can find some tips for creating a secure password. As you can see, the password assistant will display how secure the password is as you enter it. And one of the best methods to secure your data from prying eyes is to use encryption. The Mac operating system has an option called FileVault, which encrypts your data and prevents it from being seen or modified. And here it gives you a little bit more details on encrypting your data with FileVault. Now, when using FileVault, you want to make sure that you protect your key as this is the only way that you'll be able to access your data. A Mac operating system can be just as vulnerable as any other operating system if not protected. Take steps to protect your Mac and minimize the threat of an attack.

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
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/interacting-with-a-linux-os?u=76281980&t=0)** - [Instructor] When working in [[Linux]], you can either use a graphical user interface or a shell. In this segment, we'll compare the two along with some basic Linux commands that you might use while in the shell. When you first log in to Linux, you'll most likely be greeted with a graphical user interface. While an operating system doesn't require a GUI to function, they're considered more user friendly than the command-line interface. Depending on the Linux distribution that you're using, you'll see a different interface. Two common options are GNOME and K Desktop Environment, or KDE. I'm here at this website, where we can see KDE. We'll also go to this website, where you can see GNOME. This also has a pleasant interface. Both have plenty of built-in apps that help you to be more productive. For the average user, the graphical user interface works well. However, many times it's more efficient to work in the Linux shell to perform certain tasks. The shell is also known as the command-line interface, terminal, console, or command prompt. One way to access the command-line interface from the graphical user interface is through a terminal emulator application. Popular options include Terminator, xterm, Konsole, and gnome-terminal. We'll take a look at two options.
>
> **[1:33](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/interacting-with-a-linux-os?u=76281980&t=93)** Here I'm at this webpage where we can see Konsole. And here we can see GNOME. Once in the command-line interface, you issue commands to perform duties such as create or move files, check network settings, or shut down the system. Of course, there are a lot more commands. If you'd like to refresh your memory on the command-line interface, you can go to this webpage where you'll learn more about working with the command-line interface.

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
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=0)** - [Narrator] A file system controls how data is stored and retrieved. In this segment, we'll take a look at how the [[Linux]] file system can help manage files and their permissions. On a Linux operating system, everything is a file. If it's not a file, it's a process. Now most files are regular files that contain normal data, such as text files, executables, or programs. Common file systems are based off of the extended file system that was developed for Minix. ext2 is commonly used for flash-based storage media because it minimizes the number of writes. ext3 is an improvement, as it added a journal or log, which is used to minimize the risk of a file system corruption in the event of a sudden power loss. ext4 offers performance improvement, as it allows for faster file system checks and repair times. Now within the file system, there are directories and sub directories. For example, here are some common subdirectories. The bin subdirectory includes common programs that are shared by the system, the system administrator and the users. The home subdirectory is the home directories of the common users. The proc subdirectory contains information about system resources and the var subdirectory stores variables and temporary files that are created by the users.
>
> **[1:36](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-the-linux-file-system?u=76281980&t=96)** Now each file and directory has three user based permission groups. The owner, and with this, the permissions apply only to the owner of the file or directory. And the group. With a group, permissions apply only to the group that has been assigned to the file or directory and no other users. An other or the world, well these are permissions that apply to all other users on the system. Now each file or directory has three basic permission types, read, which is the ability to read the contents of the file. Write, this is the ability to write or modify a file or directory. And execute, this is the ability to execute a file or view the contents of a directory. The permissions field of a file is divided in the following way. 1, 3, 3, 3. Now these places allow you to set different permissions for different users. That first place is reserved for file types such as D for directory or a dash for regular files. For example, if we were to enter the following command and we see this output what would the group file permissions be in this case? Well, the group file permissions assigned to the analyst.txt is read, write. Now to brush up on your skills on file permissions in Linux, you can visit this webpage.

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
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/avoiding-malware-on-a-linux-host?u=76281980&t=0)** - [Instructor] Malware can get onto a [[Linux]] host and cause a great deal of damage. In this segment, we'll review some of the tools you can use to scan the Linux operating system for malware and rootkits. Now, there are a lot of things that you can do to secure your system, include using anti malware protection, scanning your system, employing security appliances, such as firewalls and [[Intrusion Detection]] systems and updating the system. In addition to using good security practices, you'll also want to make sure that you do not either have malware or a rootkit. Of course, there are proprietary [[Microsoft Products|products]] that you can use, but there are also some open-source applications you can use to secure your system as well. I found a few that can help keep your system secure. I'm here at this webpage where we can learn more about ClamAV. Now this is a popular choice as it's a versatile cross-platform, open-source antivirus engine, and you can read more on how you download it and also here there's more documentation. Another open-source option is Linux Malware Detect. This is used to detect threats on Linux systems. Now you can use Linux Malware Detect with ClamAV for better performance. Lynis is another malware scanning and vulnerability detecting tool that scans system
>
> **[1:34](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/avoiding-malware-on-a-linux-host?u=76281980&t=94)** for security information and issues such as file integrity, configuration errors, firewall auditing and also checks installed software and file and directory permissions. And here we can see that it also can do compliance testing. In addition to malware, it's also important to check your system for rootkits. Here are a few options. The Rootkit Hunter is powerful, simple to use and a well known tool for scanning back doors, rootkits and local exploits. And you can read more here and see how you can download this. And, finally, chkrootkit is a shell script that checks system binaries for rootkit modification and a number of programs that check various security issues so malware and rootkits can't affect the Linux host. Take steps to secure your system by running anti-malware protection and scanning your system for rootkits.

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
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/identify-and-authenticate?u=76281980&t=0)** - [Instructor] In today's complex digital world, it's essential to provide different methods to identify and authenticate into a system. In this segment, we'll review the process, starting with enrollment, the importance of ensuring uniqueness and then later, how we must provide authentication or proof of identity to access a system. Now prior to using a system, the applicant must enroll by creating a credential record to be stored in the system. When the applicant wants to enroll into a system, they will first need to provide some form of identification. For example, if a student is enrolling into the school system to access resources, they might present a school ID. Another example is if accessing a financial institution, the customer might have to use a Social Security number or other method to provide a way to identify the individual. However, in some cases, a newly enrolled individual might create a unique username. Now when creating the identity, the identifier, whatever it might be, must have the following attributes. The identifier must be unique, meaning one identifier per person, or role, and the identifier can't be reassigned or shared. Now once the applicant establishes their identity, they must link it to a method to provide authentication. Authentication is proving your identity, and this can be achieved in one of several ways.
>
> **[1:36](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/identify-and-authenticate?u=76281980&t=96)** What you know in the form of a password, passphrase or PIN. What you have such as a smart card or token, what you are such as a fingerprint or iris pattern. Or where you are using geolocation and geofencing, or location based authentication, which detects a user's presence at a specific location, or what you do such as a swipe or a gesture. Then once accepted, the credentials are then stored in the system database. And then the applicant then becomes a subscriber. Any subsequent attempts to gain access to the system will require the subject or applicant to identify by some means. Now this represents, who are you? They must then authenticate, which provides the proof and represents who do you claim to be? Once complete, they are then able to access the system. So whenever you need to gain access to a computer system, building or mobile device, we must first identify and then authenticate into the system.

> [!info]- Semantic Content
>
> **Analogies:** such as (3), for example (1)
> **Env Vars:** pin (1)
> **Speakers:** - [instructor] (1)

#### [Passwords and complexity](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=0)** - [Educator] Authentication is proving your identity. Today, there are several ways to provide authentication. What you know is in the form of a password or pin. Of the three, the password is simple and inexpensive, and even with all the technologies will most likely be used in some form. When logging into a system, you present a username and your password. This basically states who I am and the password verifies that you are who you say you are. Since a password is simply a sequence of characters, it's the weakest security method so we take steps to ensure a strong password. In 2017, [[NIST]] published password guidelines and the guidelines have changed. Now, some of the key changes include: you no longer have to have frequent password changes, requiring frequent changes to passwords have been proven to be counterproductive, and complex rules are no longer needed such as upper and lowercase letters, numbers, punctuation marks, and symbols, this is also demonstrated to be ineffective. But on the client side, these are the things that we want to adhere to: complexity. Eight characters long, at least,
>
> **[1:33](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=93)** and this is the same. Instead of a password, we are suggesting using a passphrase which is a sequence of characters that is longer than a password and can be more secure as it's more complex. For example, let's go to the ballpark. What you want to avoid is the following: avoid breached passwords, those that have been obtained from previous breach episodes, repetitive or sequential characters such as a series of A's or 4567, those are sequences. And dictionary words, standard plain dictionary words, such as truck, dragon, or stadium. And stay away from context-specific, such as lunchroom Abby, perhaps Abby's in charge of the lunchroom, we wouldn't want to use that. We also can make changes on the server side. I'm in the Server Manager, we'll go to Tools, and Local Security Policy. And here's where the administrator can make changes to enforce the rules that you've provided. We'll drop down Account Policies, and here we can see Password Policy, and all these can be changed such as enforcing a history, maximum and minimum password age, minimum password length,
>
> **[3:05](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/passwords-and-complexity?u=76281980&t=185)** and passwords must meet complexity requirements. As you see there, it's enabled. So maybe I take that and disable that. And then Account Lockout Policies can be set as well as you can see, the lockout duration, how long, possibly 20 minutes, the threshold, after zero or three, invalid login attempts, or you can reset account lockout counter after so many minutes. And I'll cancel that. So as you can see on the server side, the network administrator can make some changes and enforce the password policy. Now, when you're making a password, one of the suggestions is that you use a passphrase. So I'm here at this site How Secure Is My Password? And what I did was put in a passphrase, tiger kittens for sale. And as you can see, even though it's a passphrase that's easy to remember, it would take about 600 million years to crack your password. So here you can see some tips and this is from NIST, so you want to look at passwords and make sure that you provide good passwords, don't just rely on password protection, you might want to consider [[Multi-factor Authentication]] whenever possible. Use a phrase with multiple words as we see that's very strong. And also protect all of your accounts and especially [[Banking]] and email accounts by giving each one a unique passphrase.
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
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/smart-cards-and-tokens?u=76281980&t=0)** - We know that there are several ways to authenticate into a system. One is what you have in the form of a smart card or a token. A smart card is a credit card-sized card that contains information on an embedded chip about the user such as credit and buying preferences, loyalty program data, and even medical information. Smart cards can store several [[Forms]] of identification, such as a fingerprint and a password. Smart cards are available in several form factors, such as cards, key fobs, and USB [[Tokens]]. Smart cards have several uses, including access control for employee access cards or ID badges and membership cards for nightclubs, VIP access cards, or preferred door entry cards. They can be used as [[Banking]] cards, such as credit or electronic purse used to store currency for purchases. And for healthcare, this can store patients' history and medical information. And the cards can be used as single sign-on to log onto computers. Smart cards can be contact or contactless. Contact cards must have contact with the device. However, contactless are radio-read smart cards, which allows for free movement of people through systems. Smart cards can provide access control.
>
> **[1:34](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/smart-cards-and-tokens?u=76281980&t=94)** They can be used as a security token. For higher security needs, they can store information such as a user's picture or fingerprints. They can hold encryption key for disk encryption systems, such as [[Microsoft]]'s BitLocker, and they can be used as a software dongle where only licensed users can access the software. Smart cards and memory cards are both considered tokens. Memory cards can hold but cannot process information but smart cards can hold and can process information. Before implementing smart cards, there's some issues to consider. You'll need to make sure that it's compatible with the system that's in use. You'll also have to think of management of the cards within the organization. The cards are generally user-friendly and portable but they can get lost and forgotten. Don't mark them as a special key or card. And company logo should be kept on other marketing materials, not on tokens. And consider possible future use, such as adding encryption or even biometric data. Smart cards can be used on their own or, as we'll most likely see in the future, as part of a multifactor authentication system.

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
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=0)** - [Instructor] Biometrics authenticate by using an individual's unique attributes or behavior, and includes fingerprint, retina iris pattern and voice recognition. Biometrics recognizes an individual by matching the captured biometric with a stored biometric template in the system. It's a one-to-one comparison. Biometrics are used for access control to gain access to cell phones, laptops, networks, buildings and border control. It's also being used in a multifactor authentication system. Biometrics are divided into two sides. Here, we see the behavioral side. This is based on a person's actions, such as how you walk, talk, or sign your name. The physiological biometrics are based on measurements or parts of the human body. On the behavioral side, we see gait recognition. This is a newer biometric and it's simply the way someone walks. It's a nice biometric as it's non-invasive, and is used in large venues for threat management, such as in stadiums. Signature verification is the way someone signs their name. It takes into account, the pressure of the stroke, the curves or other unique characteristics
>
> **[1:34](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=94)** of your signature. Voice and voice recognition recognizes who is speaking. It's the way that they speak, their inflection, and their patterns. Now this is different than [[Speech Recognition]], which is recognizing what is being said. Now on the physiological side, we have hand geometry. With hand geometry, the hand is placed in a device. The device then measures each finger and the hand as a whole. Facial recognition is when a camera scans a person's face and takes measurements. The nose width, the eyes facing, forehead and chin. One example is when going into a new country, you place your passport in a device and stare at a camera, and then it does a mini facial recognition. Another physiological biometric is iris recognition. The iris is the color part of the eye. And each of our irises are very unique. Irises are a nice noninvasive biometric in that the image is captured with a camera and then it is converted to computer code. The fingerprint biometric was one of the very first biometrics used. The fingerprint is very unique and it stays the same throughout most of your life. When using fingerprint analysis,
>
> **[3:06](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=186)** we're identifying the minutia which is the tiny details of the fingerprint that you see here. Islands are tiny dots, bifurcations are where you see its splitting off, the ridges are the raised portions of the fingerprint, and the valleys are the white portion. Now there are many other types of minutia within a fingerprint, but again, it's looking at the tiny details of each fingerprint. Now how is this information obtained? Well, we'll step through the process. You place your finger on a sensor device, the feature or minutia are extracted, and then they're converted to a computer code and then they're stored on a template. Biometrics are being used more and more. However, there are some concerns over [[Privacy]]. Many states maintain fingerprints of all licensed drivers, convicted felons also have prints on file, and biometrics are now in place at border control. Biometrics do have some disadvantages. One is that it's more expensive than a password, and some of the of [[Microsoft Products|products]] don't work as expected and have high failure rates, and there's no common API or other standard, and there is some hesitancy for user acceptance. However, we're still seeing more advantages including: biometrics can't be lost like a key,
>
> **[4:42](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/biometric-identification?u=76281980&t=282)** smart card, or token; they can't be forgotten like a password; and biometrics essentially last for a lifetime. Biometrics simplifies access control on devices and networks, and most likely we'll be seeing more and more biometrics in the future.

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
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/multi-factor-authentication?u=76281980&t=0)** - [Instructor] When providing authentication, we could use one of several different methods. Of all the ways to provide authentication, the password is the least expensive and is widely used. However, over the years, there have been many damaging data breaches, with a huge loss in passwords and other sensitive information. I'm at this website, World's Biggest Data Breaches and Hacks. Now we can take a look at this where you can see the names of many well-known companies that have been breached in some way, possibly taking your password. If you're not sure if you were hacked, you can go to haveibeenpwned, and here you can enter your email address and check if you have an account that's been compromised in a data breach. And then I'll scroll down where we can find a little bit more information about some of the largest breaches and some recently added breaches. Security systems are becoming more robust in ways to provide identity. multifactor authentication requires two or more ways to authenticate, such as a pin and a fingerprint or a password and a smart card. Many times, a system will use a password, but then require a second authenticator. Now there are several different types of authenticators, one being security questions. Now this is something the user knows. For example, what is your youngest brother's birthday
>
> **[1:35](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/multi-factor-authentication?u=76281980&t=95)** month and year? What is your maternal grandmother's maiden name? In what city or town was your first job? We could also use mobile push notifications. This is a commonly used method for a second form of authentication. The application pushes out a message that the user selects to accept. We can use [[Tokens]], which provide a one-time password to authenticate the user. A token is sent to the user via phone or email that the user must enter to authenticate. The use of [[Blockchain]] technology is in its infancy stages. However, there is a strong possibility that security systems are looking to incorporate blockchain technology as part of an authentication system. Here, we can see Sony Files Patent for Blockchain-based [[Multi-factor Authentication]] System, which we'll most likely see more of as companies seek to find robust authentication methods. So to provide assurance in providing authentication, we're going to see multifactor authentication, which requires two or more ways to authenticate. You'd enter your username and password and then present a second factor, which once authenticated, will allow you to log into the system.

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
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=0)** - [Instructor] A firewall is a [[Hardware]] or software-based method to control incoming and outgoing traffic. It's based on a set of rules that either permit or deny traffic on a network or a host. Today, there are many different types of firewalls from software-based to dedicated appliances that defend an enterprise network. On a network, firewalls give the administrator greater control over the types of traffic originating from inside and outside of the protected network. Firewalls ensure access control between networks by using access control lists. The access control lists filter traffic and monitor established traffic patterns based on a set of rules. Rules can be set on each interface for ingress and egress filtering. Ingress filtering prevents attack packets from entering the protected network. Egress filtering is just as important as it prevents certain packets from leaving the network, such as malware that tries to connect to a command-and-control server. Personal or software-based firewalls generally reside on a host, such as a laptop or a desktop computer. Most support packet filtering, stateful packet inspection, and some offer network address translation. Application-specific rules can be set to allow specific applications to pass through. The software-based firewalls work in the background
>
> **[1:35](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=95)** on the device to protect the integrity of the system from malicious activity by controlling connections to and from a user's computer. The firewall filters inbound and outbound traffic and alerts the user to attempted intrusions. Most operating systems have choices when selecting a firewall. One example is the [[Windows]] [[Microsoft Defender|Defender]] Firewall. Now, the Windows Defender Firewall with Advanced Security protects your system right out of the box. It continuously monitors for threats. Now, even if you do have a third-party solution, Windows Defender will wait. And if for whatever reason that third-party solution deactivates, it will jump in to protect your system. The Mac operating system has an application firewall that protects the entire system. Now, it's always on and constantly monitors and protects your device. However, there's a secondary firewall in the Mac OS called Firewall. And here's an article about that and whether or not you need it. It's just a discussion on that secondary firewall. This firewall is called Firewall, and it is the Berkeley Software Distribution or BSD PF Firewall. You could turn it on, but in most cases, it isn't necessary to activate this firewall as the application firewall provides robust protection from most threats. A [[Linux]] machine also has several options that can be used to monitor the system, and here's an article on top firewall solutions.
>
> **[3:11](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/using-a-firewall?u=76281980&t=191)** Some examples include Endian Firewall Community, and this firewall's turnkey, ready-to-use security solution which is built on Linux. And another one is the Uncomplicated Firewall. Now, this is a pre-built firewall solution that comes with all [[Ubuntu]] distributions of Linux. So do your research and make sure that the firewall is robust and resistant to attacks. But firewalls should be used in every network and every system as they monitor for many of today's threats.

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
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/locking-down-the-browser?u=76281980&t=0)** - [Instructor] A web browser is the portal to the outside world where we obtain information in a wide variety of formats, from viewing content on a webpage, to emailing, watching video, chatting and playing games. Because of our always on connectivity, it's essential to lock down your browser. I'm at this webpage where we can see what happens on the internet in one minute, as you can see, there's a lot of things that happen, because we use our browsers for everything from entertainment, to completing sensitive tasks like [[Banking]] transaction, and checking medical records. Malicious actors are constantly seeking ways to steal sensitive data or to install malware. Now today, browsers are complex and often change in their functionality. For example, the Chrome browser has over 25 million lines of code. Because of this complexity, we need to recognize that its impossible for any browser to be free of vulnerabilities, and this makes them an attractive target for attacks. So how do we defend ourselves? Well, most browsers have the ability to add another layer of security, such as deciding if you want to allow cookies, how and when sites can use your location information, and the ability to block unwanted popups. So let's talk about ways to secure your browser. One thing you can use is filters.
>
> **[1:34](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/locking-down-the-browser?u=76281980&t=94)** Now, I'm at this webpage where you can see on the Chrome store, a web filter for Chrome. Filters act like a firewall to analyze webpages for suspicious behavior. It will the reputation along with examining any files you download. The filters will help prevent [[Phishing]], and block risky content. Another thing you can use is enhanced protection, and I'm at this webpage where you can learn more about safe browsing in Chrome. And I'll scroll down here, where it talks about enhanced protection. This feature protects data even if an attack takes advantage of a vulnerability in the browser, or an add-on. Enhanced protection uses the principle of least privilege, in that it locks down part of your system that your browser doesn't need to access, such as system settings or the documents folder. Of course, there are other browsers and there's ways to secure them as well. This reference provides links to secure most browsers and I'll scroll down here, and it talks about some of the things you can do, but then it also lists the most secure web browsers that are available today. And one simple thing that you can do is to update your browser, as each browser continually provides security enhancements that protect against attacks that exploit your browser, or operating system. So here you can see, that I'm using the latest version of Firefox. So a web browser is the portal to the outside world,
>
> **[3:08](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/locking-down-the-browser?u=76281980&t=188)** protect yourself and use the browser's built in security features, to defend against threats.

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
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/hardening-the-os?u=76281980&t=0)** - [Instructor] Threats are all around us and come from a number of different sources, hackers, [[Phishing]], malware, an administrator that doesn't monitor the systems for signs of intrusion, or even a disgruntled employee. Hardening an operating system minimizes exposure to threats and involves several steps, along with some good practice techniques. Let's talk about a few good practice techniques. You'll want to use antivirus and antispyware protection and schedule daily automatic definition updates and scans, use a firewall to provide a first line of defense, use strong passwords or passphrases for all user accounts, and lock the computer when you step away. Email is the number one way to gain access to a system. To diminish this threat, do not open suspicious email attachments or respond to requests from unknown senders. New vulnerabilities are discovered every day. In fact, many malicious actors actively seek ways to exploit weaknesses. In response, developers continuously work to update the operating system to minimize vulnerabilities. The fact is an up-to-date system is less likely to be compromised. So reduce the attack surface. Download and install the latest updates that are available. And if possible, schedule automatic updates.
>
> **[1:35](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/hardening-the-os?u=76281980&t=95)** In addition, depending on the operating system, many services are enabled by default. Go through, check them, and disable or uninstall unnecessary applications or non-essential services. In addition, you'll also want to disable any unneeded user accounts. This will then reduce the potential for attack. There are many resources out there to help you with understanding how to harden your operating system. I'm at this webpage where I found an article, "What Is Operating System Hardening?" And then if you scroll down, you'll see the Operating System Hardening Checklist, which you could go through and maybe pick up a few more techniques. An operating system can be vulnerable if not sufficiently protected. Take steps to harden the operating system to reduce overall risk.

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
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=0)** - [Instructor] In general, when talking about protocol good practices, it's best to use protocols that can provide encryption and authentication. Now, let's take a look at some of the protocols that will make your network more secure. HTTPS is HTTP over secure socket layer or Transport Layer Security, which effectively creates a VPN between the server and the client encrypting all data. Secure Shell is used to log in for remote administration. For example, if you need to do a file transfer on your web hosting site or a even remote administration from your [[Windows]] machine to a Unix environment. We can see here is where you can download Putty, and I've downloaded and extracted it, and now I'm running it. And here you can take a look at it. Go to help and introduction to Putty where you can get a little bit more familiar, where it says Putty is a free SSH, Telnet, and remote login client for Windows systems. Network Time protocol is used to provide automated time synchronization. Now Network Time Protocol is a great protocol to use because some protocols such as curb rows require synchronized time on the network. File Transfer Protocol or FTP by default isn't encrypted. Now we can use file transfer protocol
>
> **[1:36](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=96)** on a browser, but you really should use some type of software in order to do an effective, and secure file transfer protocol. I'm in a browser and have an FTP site that I'd like to show you. And here we can see all the files in this FTP site. Now you'll see a list of documents, and FTP is not like a website but when you want to access the documents, you simply click on the document, and then it would download the document. But it's a all in plain text. It's not secure and it's not encrypted. A better choice is to use an application such as Core FTP. Download and install Core FTP so that you can securely send, and receive files from your FTP server. At any given in time, there are a number of different types of attacks. I'm here at this website Threat Cloud, and here we can see attacking in [[Real-Time]] across the world. What happens is attackers are seeking vulnerable systems. And one common protocol is Telnet. Now Telenet has been deprecated in the Windows operating system for some time. However, you'll want to make sure that Telnet is not active on your system. Let's take a look. I've gone to the control panel,
>
> **[3:08](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/protocol-good-practices?u=76281980&t=188)** and then I've opened programs and features. And here we can see turn windows features on or off. Now let's scroll down, and we'll open up internet information services, and here it says FTP server. I want to uncheck that. We don't want that active on our system. And here we see Telnet client. I'll uncheck that as well or any unnecessary services are active on your system. So as you, there are several things you can do to ensure good protocol practices on your system.

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
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=0)** - [Instructor] When it comes to email protection, both the client and server needs protection. There are several best practices, including anti-spam and defense against spoofing, [[Phishing]] and pharming. In most cases, malware protection for email is used to catch malware variants before they even reach the inbox. However, the reality is that cybercriminals are constantly improving their methods to gain access into an organization. Social engineering is the root of many cyberattacks, which includes phishing, pharming, pop-ups, and fake websites. Phishing and pharming are techniques that are used to trick computer users into revealing personal or financial information. These techniques send out massive emails that bait victims to click to claim a prize, sign up for a special program, or sign in to check account information. The message appears urgent and one out of every 10 individual will respond. Many offices send and receive multiple packages every week. Imagine a busy administrative assistant going about the day when an email comes in as follows. This email looks official. However, once the victim clicks on the link, which, in this case, activates the payload. Email communication is vital for business. However, a large percentage of email that comes into an organization is abusive
>
> **[1:35](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=95)** and includes junk mail, spam, and malware. Nearly all abusive email has a fake sender address, which is done to conceal the sender's true address so they can get into an organization via phishing attacks. Reputation is a method of assuring appropriate email traffic and preventing abusive email., With a reputation-based solution, you see that this email wants to be delivered to an organization. The organization goes to the cloud to check the reputation of the IP address. By reputation, it assures that the website is okay and that the mail can be delivered. There are several reputation-based systems. I'm at one called Spamhaus. This monitors, blacklists IP addresses, and notifies those of the ones that have a bad reputation. This is a strong method of assuring appropriate email traffic and preventing abusive emails, such as spam and junk mail. So how does this work? Well, here is just one line of behind-the-scenes look of an email header. Here you see what's called the an antispam report. Now it goes through several metrics to assure that the email is clean, including the IP address, the country from where it came from, and other metrics, including language. And we see here that this message was marked as non-spam and was sent to the intended recipients. Simple Mail Transport Protocol
>
> **[3:10](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-clients-and-servers?u=76281980&t=190)** transfers outgoing email from one server to another. An email has at least two types of sender addresses. One is in the envelope and one is in the letterhead. The envelope starts with an H-E-L-O, or hello, which is sent to the SMTP server to say, I'm whomever, mail from, as you can see, and then let's initiate the email conversation. The email address in the send line will be where a bounce or delivery errors, sometimes called the return path, will go if undeliverable. Receipt two, well, this is the receiver's address. The header is slightly different in that it contains a from identity, which is the address of the author. To is the recipient. When delivering a message, a mail server doesn't care about the header sender address. The bottom line is that the envelope address cannot be spoofed, as it's used to deliver email. The letterhead address, however, can be spoofed. Threat management monitors for malware. If you're using [[Cloud Services]] such as [[Microsoft Office|Office]] 365 Online, this automatically protects email messages against spam and malware. In addition, provide user education and train everyone to think before opening links or email attachments.

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
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=0)** - [Instructor] Spam and malware go hand in hand as email provides a convenient way to reach victims on a global scale. Attackers send millions of spam messages laced with malware with the hope that multiple victims will go for the bait. Here we see on this website the average daily spam volume worldwide over a year period from October, 2020 to September, 2021. Now when we take a look at the chart, the numbers go up and down but let's take a closer look. Here we see the number of emails and that's in billions and here we see the number of spam emails. The reality is that approximately 80% of all emails sent worldwide is spam. Spam is dangerous. We see here at [barracuda.com](https://barracuda.com) that 91% of cyberattacks start with an email. Over on the right-hand side, you also see some other [[Statistics]] related to malicious email. Network administrators enable strong spam filters to prevent spam and [[Phishing]] emails from reaching the end users but there are other tools in the arsenal that help prevent spam, phishing and forgery by allowing administrators to validate inbound email. Those include sender policy framework, DomainKeys identified mail and domain message authentication reporting and conformance.
>
> **[1:33](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=93)** Nearly all abusive email has a fake sender address. Forging a sender's address is done to conceal the sender's true address. Being anonymous is key to effectively impersonating either a well-known or trusted identity in order to obtain passwords or personal information. A sender policy framework record is an extension of the SMTP protocol that prevents spammers from forging the front fields in an email message by verifying that the IP address and the SMTP received header is authorized to send mail for the sender's domain. Sender policy framework helps prevent forgery by allowing administrators to validate email by assessing a reputation and then place an entry in a DNS SPF record. This will then allow email to be delivered. It's like white listing an email address. Sender policy framework authenticates by comparing records in the appropriate DNS record and helps prevent phishing emails and forgery. You can see the sender policy framework report in the message header. Now a message header is information behind the scenes that tells the story of the journey it takes to be delivered from sender to recipient. It includes all stops and validation checks. Here we see that sender policy framework passed.
>
> **[3:11](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/email-and-spam?u=76281980&t=191)** Sender policy framework was the first protocol. However there are other protocols to help improve the effectiveness of providing email authentication: DKIM and DMARC. DomainKeys identified mail is where the sender sign the email with a digital signature to ensure authenticity and receivers then verify. Domain message authentication reporting and conformance is an email authentication policy that uses sender policy framework and or DKIM to establish the sender's identity. It then checks the address on the envelope and letterhead address. Just because an email fails a DMARC test as you see here, it doesn't mean it's spoofed mail but it's a pretty good indication. If there's an error, the administrator can adjust the DMARC settings. DMARC relies on either sender policy framework or DKIM to ensure authentication. However, sender policy framework and DKIM can be used as stand-alone methods. Used together, they help prevent phishing emails and forgery by allowing administrators to validate inbound email.

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
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ptr-records?u=76281980&t=0)** - [Instructor] [[Domain Name System (DNS)|Domain Name System]] maps a host name to an IP address. It's essential on any network. DNS records are also important for email delivery and spam protection. In order to properly send and receive email, it's important for proper DNS configuration. So that other mail servers can send mail to your users and other mail servers will trust you to receive your mail. DNS has several records. When dealing with email, here are a few. An A record maps a name to an IPv4 address. A quad A record maps a name to an IPv6 address. An MX record is the mail exchange record for the server that accepts email messages for a domain. And a PTR record is a reverse lookup which maps the IP address to the name. PTR records are important for email delivery and are another tool for spam filters. Some mail servers will not allow an email to come from a server unless they can perform a reverse DNS lookup. The reason is that spammers will most likely use a bogus domain name and will not likely have a legitimate PTR record. Periodically a legitimate business might be flagged because their PTR record is coming up as generic or invalid and it may classify your email as spam or junk mail.
>
> **[1:38](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/ptr-records?u=76281980&t=98)** With a legitimate business, this can be a serious problem. In addition, organization should be careful to never let their email server be used as a spam relay which might result in the organization being blocked. And it only takes one blocked email to harm an organization. I'm at this website here, mxtoolbox, and here you can see if your organization is on the blacklist. If your mail server has been blacklisted some email you send may not be delivered.

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
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=0)** - [Instructor] Cyber attacks propagate the news on a daily basis. Report surface on attacker stealing terabytes of sensitive information, personal data and compromised emails. Stealing company information and trade secrets is a well-known challenge that businesses strive to protect against. However, it can go undetected. As many times companies don't notice any abnormal network activity. We use cryptographic techniques to ensure confidentiality, integrity, and authentication of data whether in motion or at [[Representational State Transfer (REST)|rest]]. Data is in motion while traveling through the network moving from place-to-place. Data is at rest while on a drive, [[Cloud Storage]] or removable media. Today, encryption is the most effective way to secure digital data. Encryption uses a mathematical algorithm, and a key to convert data into a scrambled format, which is meaningless unless you have a key. As we discuss [[Cryptography]], you'll hear many terms such as symmetric, asymmetric and hashing. Now there are two main types of encryption. Asymmetric encryption, which is also called public key encryption. It has two key, a public and a private key. And symmetric encryption. It's also called conventional encryption, and uses one key,
>
> **[1:34](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=94)** which is the shared secret. Most of the time though, we'll use a hybrid crypto system that employs both methods. To protect data we also use hash [[Algorithms]]. A hash algorithm is a one-way function that takes a variable length input, and returns a fixed length output. We use hash functions in password management, digital signatures and message digest. Encryption and cryptographic techniques can ensure the following. Confidentiality, which protects data against unauthorized disclosure. Cryptographic techniques can also provide integrity. With that we use a hash function. [[Accountability]] is being able to positively identify an entity in a system such as signing an electronic contract. Here we use a digital signature. Authentication confirms the identity of a system object. And here we use a message authentication code. There are other cryptographic concepts, and terms that will include key exchange, Digital signatures. Certificates. Trusted third-party. And public key infrastructure. All data, whether at rest or in motion, such as data and cloud storage or traveling across the network should use some form of cryptographic technique
>
> **[3:08](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/cryptographic-techniques?u=76281980&t=188)** to ensure [[Privacy]], [[Data Integrity]] and authentication.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (3), [[Cloud Storage]] (2), [[Cryptography]] (1), [[Algorithms]] (1), [[Accountability]] (1)
> **Analogies:** such as (3)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Symmetric encryption](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980&t=0)** - [Instructor] Symmetric encryption is also called conventional encryption and uses a single shared secret key. Symmetric encryption has five ingredients: the plaintext, the encryption algorithm, a shared secret key, ciphertext, and the decryption algorithm, which is simply the encryption algorithm run in reverse. To give you an idea of what it looks like when text is encrypted, I'm at this website. And here I'll put my plaintext. And then the key of the encryption, we'll keep simple. I'll put Roxy. And here we can choose 128, 192 or 256-bit encryption. We'll stay with 128 and say Encrypt. And down below is what you can see when text is encrypted. Symmetric [[Algorithms]] include Data Encryption Standard, Triple DES, IDEA, and Advanced Encryption Standard to provide fast, efficient encryption with low overhead. We use symmetric encryption to provide confidential, online communications, such as an SSL/TLS transaction or Secure Multipurpose Internet Mail Extensions to encrypt messages for confidential mail. Symmetric encryption algorithms are one of two types,
>
> **[1:36](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980&t=96)** either a block cipher, such as DES or AES, or a stream cipher, such as RC4, or SEAL. A block cipher processes plaintext in fixed size, either 64 or 128-bit blocks. And produces a block of ciphertext in the same size. If we add memory to a block cipher, this results in a stream cipher. Stream ciphers are fast and use less code. They operate on a stream of data, encrypting one bit or one byte at a time. Stream ciphers are used to secure wireless communications. A stream cipher takes plaintext and an exclusive OR with a pseudorandom key stream, which is a sequence that appears random and therefore is not predictable. We have several cipher modes of operations. A chaining mode defines the way that the plaintext, the key and the ciphertext generate the stream of ciphertext that is transmitted to the recipient. Electronic codebook is the simplest mode in that there is not feedback. Each 64-bit block is encoded independently but uses the same key, which means that the same plaintext will always result in the same ciphertext. The following modes, cipher blockchaining,
>
> **[3:12](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/symmetric-encryption?u=76281980&t=192)** cipher feedback and output feedback will add randomness to the message to provide extra security. A more secure mode is cipher blockchaining, which takes a block of plaintext and then does an exclusive OR operation with the previous block before it is encrypted. Because each ciphertext block depends on all plaintext blocks processed up to that point, we need an initialization vector, which is an encrypted block of random data used as the first 64-bit block to begin the chaining process. Symmetric encryption uses a single shared secret key to provide fast, efficient encryption with low overhead.

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
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=0)** - [Instructor] Symmetric encryption provides fast, efficient encryption. However, it requires that both sender and receiver have the same shared key, which can be a problem in a complex networked environment. Asymmetric encryption, also called public key encryption, is a fundamental to provide security as it uses two keys, a public key and a private key, which are mathematically related. Asymmetric encryption was developed in the 1970s. There are many uses for asymmetric encryption that include: securely exchanging a secret key, confidentiality using encryption, authentication, and creating digital signatures. With public key encryption, two keys are generated, a public key and a private key. The private key is kept private and never shared with anyone. The public key is shared and available to everyone. Here, we see two entities, Alice and Bob. Alice has generated a key pair, a public and a private key. Bob also generates a key pair, a public key and a private key. Alice sends her public key to the key server and Bob then also sends his public key to the key server. Now a key server can be on a corporate environment.
>
> **[1:34](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=94)** It could be on the cloud or anywhere you want access so that people can get the public keys. Now let's step through a transaction. We see here that Alice wants to communicate with Bob, so she obtains Bob's public key. She takes Bob's public key and the plaintext and creates the ciphertext and then sends it to Bob. Bob then uses his private key to decrypt it and he is then able to read the message. An important concept we must address while communicating with entities on the internet and dealing with public keys is the issue of trust. So we see that Alice and Bob want to communicate with one another. Alice needs to obtain Bob's public key, but can she trust Bob's public key? Was it generated and made from Bob? In the 1970s, Phil Zimmermann introduced what we call the web of trust after developing an asymmetric algorithm called Pretty Good [[Privacy]]. The method is this. Instead of trusting a trusted third party such Verisign to decide whether or not a public key can be trusted, we look to a trusted introducer. For example, in an [[Microsoft Office|office]], you generate your public and private keys. Everyone in the office sends it to the manager.
>
> **[3:10](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/asymmetric-encryption?u=76281980&t=190)** The manager then assigns trust. The web of trust works in signing public keys in an intimate environment, such as our example. But on a larger untrusted environment, we need another option. A better way is to use Public Key Infrastructure with certificates.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (2), [[Privacy]] (1)
> **Analogies:** for example (1), such as (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Diving into hash algorithms](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=0)** - [Educator] A hash function is a cryptographic technique that protects [[Data Integrity]]. Now, what's the difference between a hash versus encryption? Well, encryption uses a key or pair of keys. When we encrypt a message, we can decrypt the message as long as we have a key. However, a hash is one way, meaning you cannot generate the original message from the hash. Now, there are a number of different applications for a hash function. One is providing message authentication. Another is monitoring data integrity. We use hash functions to store passwords, and hash functions are used in [[Blockchain]] technology. In order to be a good hash, there are a number of different cryptographic requirements. One is that it can be applied to a block of data of any size. Another is that it needs to create a fixed-sized output. It also has to be easy to compute and not cumbersome, and it needs to have what's called strong collision resistance, meaning that you cannot generate the same hash from another block of data. Now, you'll hear of some other hash [[Algorithms]], but the Secure Hash Algorithm, also known as SHA,
>
> **[1:33](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=93)** has been in existence for many years. SHA-1 was designed by the National Security Agency, it's still in use but there are improved algorithms, so more likely, you'll be seeing SHA-2 and SHA-3. SHA-2 has a number of different variations and SHA-3 is based on Keccak. Now, a hash function takes a variable-length input and generates a fixed-length output. The output will depend on the algorithm and the compression function that is used. So let's step through the process. So what we see here on the left is the message. The H represents the hash algorithm which outputs a fixed length output, which is called a message digest. Now, the message digest is like a fingerprint. This fingerprint of the message is then attached to the message and the sender then sends it to the recipient. The receiver then goes through the process of verifying that the message has not been modified in transit. So what happens is that the receiver will generate a new hash value from the message. So what we have here is a message sent by the sender and we're going to use a message digest in order to ensure integrity as it travels across an insecure network. And then taking that message digest or fingerprint
>
> **[3:08](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=188)** and the hash value that was just generated, and then the two are compared. If they are the same, then we know that there has been no modification of the data in transit. Now, I'll take you out to [nist.gov](https://nist.gov) which will tell you a little bit about some of the hash algorithms and what is considered approved algorithms today. Now, as you can see that we have SHA-1 and SHA-2, but there's also a lot more research going on into SHA-3, which as you can see permutation based functions based on Keccak. So there's another family of algorithms called SHA-3 which you'll most likely be seeing more of. In addition, you will find a lot of information on [[NIST]] and here's a little bit of blockchain technology and finding out about blockchain technology and the use of hash algorithms. So NIST provides a lot of information about cryptographic techniques. But let's take a look at the hash algorithm in your browser in the certificate. So we'll go up to the browser and take a look at that lock, and it says connection is secure. And then, let's take a look at more information. And in this case, I want to take a look at the certificate and here we see the certificate for [nist.gov](https://nist.gov) and I'll scroll down and here we see the fingerprints and it is using both SHA-256 and SHA-1. So a hash algorithm takes a variable length input
>
> **[4:45](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/diving-into-hash-algorithms?u=76281980&t=285)** and outputs a fixed-length output depending on the algorithm and is used to provide assurance of data integrity.

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
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/public-key-infrastructure?u=76281980&t=0)** - [Instructor] Public key encryption uses two keys, a public key and a private key. A public key is public, and anyone can share the public key and claim ownership. While this seems like a great concept, we must be able to trust that the public key belongs to the entity that shared the public key. Public key infrastructure is not a protocol but a framework that is used to provide trust. Public key infrastructure uses a trusted third-party or a certificate authority to authenticate entities by using a digital signature for each entity. A certificate authority is responsible for issuing, revoking and distributing certificates and includes Verisign, GoDaddy and Thawte, but companies can create their own certificates that generally use the format X.509. Let's take a look at how this works. Up at the top, we see the certificate authority, which is what we consider the trusted third-party. We then see Alice, and we see Bob. All three entities have generated a public and a private key. Alice and Bob both send up their public key, and now the certificate authority is going to verify them. First, the certificate authority takes
>
> **[1:34](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/public-key-infrastructure?u=76281980&t=94)** the unsigned certificate containing the user's ID and user's public key and generates a hash of that certificate. Now, this is a small stump of data that is going to be encrypted using the certifying authority's private key to form a digital signature. The small stump of data that has been encrypted is now attached to the certificate and then distributed to those who ask for it. As you can see now, Alice has obtained Bob's public key from the certificate authority. Now, what happens is Alice takes out that signed certificate and generates a hash of the certificate. On the bottom, that small stump of data is pulled off for comparison, but first it has to be decrypted with the certifying authority's public key. The two are then compared, and if they're equal, we know then that Bob's public key can be trusted. So now Bob has Alice's public key. Alice has Bob's public key, and the two then can communicate securely. Now, let's take a look how it looks if you were to go in a browser. I'm in Mozilla at [google.com](https://google.com). I can see the HTTPS, which represents [google.com](https://google.com) and a secure connection. We also see a green lock, and we're just going to drop this down, and we see the secure connection
>
> **[3:09](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/public-key-infrastructure?u=76281980&t=189)** and then down below, we'll say More Information. This gives information about the security, and I'll say View Certificate, and here we can see all the information about the certificate, and if you want to, you can look at the details. So public key infrastructure is a framework used to ensure trust using certificates.

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
> **[0:00](https://www.linkedin.com/learning/it-security-foundations-operating-system-security-14816522/next-steps?u=76281980&t=0)** - [Lisa] Thank you for watching IT Security Foundations: Operating Systems Security. In this course we discussed methods to secure a [[Windows]] operating system followed by an overview of best practices to secure a Mac OS and a [[Linux]] machine. We then reviewed ways to provide user authentication using passwords, biometrics, and multifactor authentication. We also described methods to protect and secure the operating system such as using a firewall and the importance of hardening the operating system. We then briefly touched on best practices for securing email, along with some basic self encryption. If you're interested in learning more, please check out the library. New courses are added all the time. If you're interested in learning about core security concepts, such as social engineering, malware, and spyware, please check out my course, [[IT Security Foundations- Core Concepts]]. If you want to learn more about the billions of devices designed to improve the quality of life in homes and businesses, please check out my course, Securing the [[IoT]]: Introduction. For a complete list of courses, visit my author page. Keep learning and I hope to see you again soon.

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