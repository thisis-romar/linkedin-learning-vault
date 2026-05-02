---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: wireshark-network-troubleshooting
url: "https://www.linkedin.com/learning/wireshark-network-troubleshooting"
duration_minutes: 102
duration: 1h 42m
level: Intermediate
updated: 4/26/2024
learners: 49380
skills:
  - Network Troubleshooting
  - Wireshark
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHOR_YqDUNv3w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1595605820777?e=2147483647&amp;v=beta&amp;t=t_wFkmsN9XhOUegnKwTmLT8QbJMTpQ6b8aLKwBiP5CI"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Wireshark- Network Traffic Analysis]]'
prev_courses:
  - '[[Wireshark- Functionality]]'
next_courses:
  - '[[Wireshark- Malware and Forensics]]'
path_nav: '[{"path":"Wireshark- Network Traffic Analysis","position":3,"total":5,"prev":"Wireshark- Functionality","next":"Wireshark- Malware and Forensics"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/network-troubleshooting
  - skill/wireshark
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Wireshark-%20Network%20Troubleshooting.md)

![Wireshark: Network Troubleshooting](https://media.licdn.com/dms/image/v2/C4E0DAQHOR_YqDUNv3w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1595605820777?e=2147483647&amp;v=beta&amp;t=t_wFkmsN9XhOUegnKwTmLT8QbJMTpQ6b8aLKwBiP5CI)

# Wireshark: Network Troubleshooting

> Learn how to analyze network problems with Wireshark, a free, open-source packet analysis tool used by network administrators around the world. In this course, Lisa Bock demonstrates how to get the most out of Wireshark, so that you can better evaluate your network and keep traffic moving. You can discover how to use time as a metric for visualizing delays. In addition, you can get an introduction

> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-network-troubleshooting) | 1h 42m | Intermediate | 49K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Analyze network problems](#analyze-network-problems)
  - [What you need to know](#what-you-need-to-know)
- [**Traffic Capture and Analysis**](#traffic-capture-and-analysis) (8 videos)
  - [Getting the most out of Wireshark](#getting-the-most-out-of-wireshark)
  - [Navigating the Wireshark interface](#navigating-the-wireshark-interface)
  - [Investigating the Edit Menu choice](#investigating-the-edit-menu-choice)
  - [Exploring the View Menu choice](#exploring-the-view-menu-choice)
  - [Getting ready to capture](#getting-ready-to-capture)
  - [Examining a capture](#examining-a-capture)
  - [Challenge: Examining evidence of congestion](#challenge-examining-evidence-of-congestion)
  - [Response: Examining evidence of congestion](#response-examining-evidence-of-congestion)
- [**Using Time as a Metric**](#using-time-as-a-metric) (5 videos)
  - [Displaying time](#displaying-time)
  - [Viewing Details and Expert Info](#viewing-details-and-expert-info)
  - [Graphing the TCP Streams](#graphing-the-tcp-streams)
  - [Challenge: Using time to view gaps in transmission](#challenge-using-time-to-view-gaps-in-transmission)
  - [Response: Using time to view gaps in transmission](#response-using-time-to-view-gaps-in-transmission)
- [**Wireshark Tools**](#wireshark-tools) (5 videos)
  - [Viewing conversations and endpoints](#viewing-conversations-and-endpoints)
  - [Creating a flow graph](#creating-a-flow-graph)
  - [Plotting an IO graph](#plotting-an-io-graph)
  - [Challenge: Using a Flow Graph](#challenge-using-a-flow-graph)
  - [Response: Using a Flow Graph](#response-using-a-flow-graph)
- [**Recognizing Abnormal or Malicious Traffic**](#recognizing-abnormal-or-malicious-traffic) (7 videos)
  - [Troubleshooting the Network](#troubleshooting-the-network)
  - [Spotting an ARP Storm](#spotting-an-arp-storm)
  - [Identifying bursty traffic](#identifying-bursty-traffic)
  - [Protecting from packet sniffing](#protecting-from-packet-sniffing)
  - [Examining Macof attacks](#examining-macof-attacks)
  - [Challenge: Identify a scanning signature](#challenge-identify-a-scanning-signature)
  - [Solution: Identify a scanning signature](#solution-identify-a-scanning-signature)
- [**Conclusion**](#conclusion) (1 videos)
  - [What's next?](#whats-next)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Analyze network problems](https://www.linkedin.com/learning/wireshark-network-troubleshooting/analyze-network-problems-23827196?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/analyze-network-problems-23827196?u=76281980&t=0)** - [Lisa] [[Wireshark]] is a free open source tool that opens the gateway to troubleshooting and dissecting multiple networking issues.
>
> **[0:09](https://www.linkedin.com/learning/wireshark-network-troubleshooting/analyze-network-problems-23827196?u=76281980&t=9)** But here's the secret.
>
> **[0:11](https://www.linkedin.com/learning/wireshark-network-troubleshooting/analyze-network-problems-23827196?u=76281980&t=11)** By diving into the depths of network data, you'll gain insights on what is happening so you can help save the day.
>
> **[0:19](https://www.linkedin.com/learning/wireshark-network-troubleshooting/analyze-network-problems-23827196?u=76281980&t=19)** In this course, I'll help you master the art of Wireshark, uncover its hidden treasures, and equip you with the skills to evaluate networks like a pro.
>
> **[0:30](https://www.linkedin.com/learning/wireshark-network-troubleshooting/analyze-network-problems-23827196?u=76281980&t=30)** Get ready to explore time-based metrics, unlock the power of graphs, and even uncover the mysteries of transmission errors and attack signatures.
>
> **[0:41](https://www.linkedin.com/learning/wireshark-network-troubleshooting/analyze-network-problems-23827196?u=76281980&t=41)** Hello, I'm Lisa Bock, and I'm a security ambassador.
>
> **[0:45](https://www.linkedin.com/learning/wireshark-network-troubleshooting/analyze-network-problems-23827196?u=76281980&t=45)** If you're ready to take a closer look into some of Wireshark's tools and techniques to better analyze network problems, then let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (3)
> **Definitions:** is a  (1)
> **Speakers:** - [lisa] (1)

#### [What you need to know](https://www.linkedin.com/learning/wireshark-network-troubleshooting/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/what-you-need-to-know?u=76281980&t=0)** - [Narrator] [[Wireshark]] is a popular tool for packet analysis.
>
> **[0:04](https://www.linkedin.com/learning/wireshark-network-troubleshooting/what-you-need-to-know?u=76281980&t=4)** This course is appropriate for anyone who would like to learn more on how to troubleshoot your network with Wireshark, including network administrators, teachers, security analysts, and students.
>
> **[0:17](https://www.linkedin.com/learning/wireshark-network-troubleshooting/what-you-need-to-know?u=76281980&t=17)** Participants should have viewed [[Wireshark Essential Training]] and have a good grasp of TCP/IP and the OSI model along with basic networking concepts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (3)
> **Env Vars:** tcp (1), osi (1)
> **Definitions:** is a  (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [narrator] (1)


### Traffic Capture and Analysis

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting the most out of Wireshark](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=1)** - [Instructor] [[Wireshark]] provides the necessary tools to gather, analyze and study network data.
>
> **[0:08](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=8)** In this segment, we'll review how to install Wireshark on a PC, or a Mac, cover choices you'll have during installation and learn why you should update Wireshark when prompted.
>
> **[0:21](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=21)** We'll start here at [wireshark.org](https://wireshark.org), which is the Wireshark homepage.
>
> **[0:26](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=26)** On the top of the page, you'll see information about SharkFest, which is Wireshark's annual conference, along with other menu choices such as learning opportunities and getting help.
>
> **[0:40](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=40)** Here on the left, you'll see a link to download Wireshark.
>
> **[0:45](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=45)** I'll click on that where you'll see three segments.
>
> **[0:49](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=49)** First, I'll select Documentation.
>
> **[0:52](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=52)** And then I'll select Online Multiple Pages and open in a new tab.
>
> **[0:59](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=59)** This is the Wireshark Users Guide where you can find out a lot of the answers to questions that you might have while using Wireshark.
>
> **[1:09](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=69)** Now we'll go back and now we'll take a look at Old Stable Release.
>
> **[1:14](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=74)** Now you might select one of these because for whatever reason, you need to roll back to an Old Stable Release because a newer version has caused some problems.
>
> **[1:25](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=85)** Now we'll take a look at Stable Release.
>
> **[1:29](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=89)** Now, this is what most of us will use.
>
> **[1:32](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=92)** The Stable Release lists newer versions of Wireshark.
>
> **[1:36](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=96)** Now first you'll see the following, this is the standard download for Wireshark 64 bit Operating Systems.
>
> **[1:45](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=105)** Next is the [[Windows]] Arm Installer.
>
> **[1:48](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=108)** Arm means Advanced Risk Machine.
>
> **[1:51](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=111)** Now, this is a processor that is used on devices such as tablets.
>
> **[1:57](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=117)** Windows PortableApps lets you run the app from portable media, such as flash drives and cloud drive services.
>
> **[2:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=126)** Here we see the macOS Arm Disk Image for Mac that use either an M1 or Arm processor.
>
> **[2:14](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=134)** The macOS Intel Disk Image provides an installation for a mac Operating System.
>
> **[2:21](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=141)** To install it on a Mac, you download and unpack the mountable disk image and then simply run the install.
>
> **[2:29](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=149)** In some cases, you may have to complete additional configuration options in order to resolve any errors, but that's rare.
>
> **[2:38](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=158)** If you click on Source Code, you'll get an archive of the source code where you can study the various files.
>
> **[2:45](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=165)** But if you're serious about development, you should obtain and update your code from Wireshark's get repository.
>
> **[2:54](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=174)** Now, I've selected the 64 bit Windows download, and I'm going to install this.
>
> **[3:03](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=183)** This will be a standard installation, so I'll click Next, and this gives you your license agreement.
>
> **[3:10](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=190)** I'll say Noted and select Next.
>
> **[3:13](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=193)** Here we can select some of the components, and I generally leave it at the default.
>
> **[3:20](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=200)** Here, you can select additional tasks such as creating a shortcut and associated file extensions.
>
> **[3:27](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=207)** And you can take a look at all those file extensions that will allow you to work with other software [[Microsoft Products|products]] that can capture packets.
>
> **[3:37](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=217)** I'll leave that as the default and select Next.
>
> **[3:41](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=221)** Here's where we want to install Wireshark, and then we'll go to this page here where it talks about Packet Capture.
>
> **[3:51](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=231)** Now, up at the top, it says, "Currently installed NPcap version."
>
> **[3:56](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=236)** Now when installing Wireshark, and especially for the first time, you're going to see an option to install NPcap.
>
> **[4:05](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=245)** Now, you'll need to install this if you want to capture packets.
>
> **[4:09](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=249)** NPcap comes from the [[Nmap]] project and it's the packet sniffing library for Windows.
>
> **[4:16](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=256)** Windows will prompt you to update if you have an older version of NPcap.
>
> **[4:23](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=263)** Now, if it's the first time you install NPcap, you'll see the licensing agreement, which you'll need to accept.
>
> **[4:30](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=270)** In addition, you'll need to select some other options.
>
> **[4:34](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=274)** And here it talks about NPcap, and I'm going to scroll down here, and here we can see some of the options.
>
> **[4:45](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=285)** For example, restrict NPcap's driver's access to administrators only.
>
> **[4:55](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=295)** Along with this one, support raw 802.11 traffic, which is [[Wi-Fi]].
>
> **[5:05](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=305)** Now I'll select Next.
>
> **[5:07](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=307)** Now something else you can choose is USB Capture.
>
> **[5:11](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=311)** Now, that's something that you might want to use if you're going to do some troubleshooting and you want to see what's happening on your USB interface.
>
> **[5:20](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=320)** And we'll leave it as it is and I'll select Install.
>
> **[5:25](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=325)** It's completed and I'll select Next.
>
> **[5:28](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=328)** And now I'll say Finish.
>
> **[5:30](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=330)** Once everything's installed, you're ready to start using Wireshark.
>
> **[5:35](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=335)** Now, every once in a while, you'll see a popup that a new version of Wireshark is available.
>
> **[5:41](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=341)** It will let you know the version you already have and what's new.
>
> **[5:45](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=345)** Now, if you're curious about what's new, you can view the release notes by going to Help, Release Notes, and it will open a local file in your browser.
>
> **[5:57](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=357)** Now, once here we can read more about bug fixes, new or updated features, along with any updated protocol support.
>
> **[6:07](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=367)** So in most cases, you should update your software, so that you're getting the very best out of Wireshark.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (17), [[Windows]] (5), [[Microsoft Products|Products]] (1), [[Nmap]] (1), [[Wi-Fi]] (1)
> **Prerequisites:** install (9), you'll need (3)
> **Analogies:** such as (4), for example (1)
> **UI Navigation:** click on (2), go to (1), scroll down (1)
> **Code Identifiers:** macos (2)
> **Env Vars:** usb (2)
> **Exercise Files:** source code (2)
> **CLI Commands:** find (1)

#### [Navigating the Wireshark interface](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=0)** - [Instructor] When you first launch [[Wireshark]], you may think that there isn't much going on on the welcome screen.
>
> **[0:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=6)** Well, while it's a streamlined interface, you'll find that there's everything you need to begin capturing packets and analyzing traffic.
>
> **[0:14](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=14)** Up along the top, you'll find the menu choices, and you can also see the icons.
>
> **[0:21](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=21)** If you don't have a capture file loaded, you'll see that the menu choices and icons are all there, but they're going to be dimmed.
>
> **[0:29](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=29)** The icons will become active once you have a packet capture opened or are actively capturing packets.
>
> **[0:36](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=36)** Now, let's take a look at a couple of things here.
>
> **[0:39](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=39)** We see Capture and using this filter.
>
> **[0:42](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=42)** And in this case, you could put a capture filter, but I generally don't.
>
> **[0:47](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=47)** And then down below, you'll see some of your interfaces.
>
> **[0:50](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=50)** And then you'll see maybe a squiggly line after that.
>
> **[0:53](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=53)** That's called a sparkline, and that means I can begin capturing on that interface.
>
> **[0:59](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=59)** Down below, you'll see information on how you can learn more about Wireshark.
>
> **[1:04](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=64)** Now, let's get you a packet capture, so you can follow along.
>
> **[1:09](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=69)** I'm at this website, Tcpreplay.
>
> **[1:13](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=73)** What I'd like you to do is select smallFlows.pcap.
>
> **[1:17](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=77)** Download and open it in Wireshark.
>
> **[1:20](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=80)** Now, smallFlows.pcap is a pretty decent-size packet capture, and it's going to give us a lot to work with.
>
> **[1:28](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=88)** Now, once you download it, open it in Wireshark.
>
> **[1:32](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=92)** When you're troubleshooting issues, you're going to probably go through most of those menu choices.
>
> **[1:38](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=98)** But for this segment, let's just start at File.
>
> **[1:41](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=101)** What I'd like to do is create a smaller file.
>
> **[1:44](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=104)** So what I'm going to do is I'm going to show you a couple things.
>
> **[1:48](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=108)** Up here, we have the coloring rules turned on, and Wireshark does try to help us to see if there's anything out of line.
>
> **[1:56](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=116)** Now, we know that down below, we see the expert information, and we can see errors, warnings, notes, and chats.
>
> **[2:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=126)** But over here, on the right-hand side, this is an intelligent scroll bar.
>
> **[2:10](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=130)** The intelligent scroll bar will help us to [[Zoom]] in on problems very easily.
>
> **[2:15](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=135)** So here's some black, and I'll select that.
>
> **[2:19](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=139)** And we see that there were some problems in this capture.
>
> **[2:22](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=142)** Now, I'm on packet 376.
>
> **[2:25](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=145)** So go to packet 376.
>
> **[2:26](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=146)** You'll right-click, and then say Follow the TCP Stream.
>
> **[2:33](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=153)** We can close this window.
>
> **[2:35](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=155)** But what I want you to make sure that up above in the display filter, it says tcp.stream equals two.
>
> **[2:42](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=162)** All right, now let's take a look at the File menu choice.
>
> **[2:47](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=167)** Now, we'll open up the File menu choice, and we can see a couple of things.
>
> **[2:51](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=171)** First of all, I want you to take notice of a light gray line.
>
> **[2:56](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=176)** This is separating like menu choices.
>
> **[3:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=180)** So up at the top, we see things like Open, Open Recent, Merge, and Close.
>
> **[3:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=186)** Down below, you see Save or Save As.
>
> **[3:09](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=189)** Here, we see File Set.
>
> **[3:11](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=191)** Now, if I'm working with a large number of files, say, for example, I'm baselining, we can go to the next file or the file beforehand.
>
> **[3:19](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=199)** I'll show you this device, say List File.
>
> **[3:21](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=201)** This'll just give me the single file that I'm working with.
>
> **[3:26](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=206)** Now, down below that, we see all information about exporting, exporting specified packets, packet dissections, objects, packet bytes.
>
> **[3:37](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=217)** Let's take a look at Export Objects.
>
> **[3:40](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=220)** We'll select that and go to HTTP.
>
> **[3:43](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=223)** Now, this is a large capture, but these are all the objects that it collected while going through all the HTTP objects.
>
> **[3:51](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=231)** And you can save them all if you want to, or sometimes you maybe just save a single file, for example, something of interest.
>
> **[3:59](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=239)** For example, if you were doing malware analysis, you might look for a text file.
>
> **[4:05](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=245)** What I do want to do is export specified packets.
>
> **[4:09](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=249)** We'll select this.
>
> **[4:10](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=250)** And when we open this up, you can see that it's already assuming that I want to just export the 306 captured packets that I filtered, and that's what I do want.
>
> **[4:22](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=262)** But you can see that it gives us a chance to put a file name.
>
> **[4:27](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=267)** And I'll put Stream 2, and we'll save it in the default here, .pcap.
>
> **[4:36](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=276)** And I'll say Save.
>
> **[4:40](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=280)** Now, I'm going to close this.
>
> **[4:41](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=281)** I'm going to say Quit.
>
> **[4:47](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=287)** And then I'll open up the smaller file.
>
> **[4:50](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=290)** So now I have something smaller in which I can work with.
>
> **[4:54](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=294)** So with the File menu, the last two things, aside from Quit, as you can see, is we can quit, which is what we just did, and then also print.
>
> **[5:03](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=303)** And this gives us different options in how we can export or print different parts of this packet capture, something that you might use if you're creating a report.
>
> **[5:13](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=313)** So as you can see, there's a lot going on just with the File menu and the welcome screen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (5), [[Zoom]] (1)
> **UI Navigation:** go to (3), right-click (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** http (2), tcp (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** for example (3)
> **Code Identifiers:** smallflows (2)
> **Speakers:** - [instructor] (1)

#### [Investigating the Edit Menu choice](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=0)** - [Instructor] When you're troubleshooting, you might want to edit the capture.
>
> **[0:04](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=4)** We'll do this by going to the Edit menu choice.
>
> **[0:07](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=7)** Now drop this down.
>
> **[0:09](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=9)** And here you can see your like grouping starting with, Find, Find Packet, Find Next, Find Previous.
>
> **[0:17](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=17)** And in this case, we could just select Find, and this allows you to put a filter.
>
> **[0:22](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=22)** Now say you're looking for a string value, something specific, you would put that in there.
>
> **[0:29](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=29)** I'll drop this down, and then we'll see the next grouping.
>
> **[0:32](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=32)** This all goes into marking packets.
>
> **[0:35](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=35)** Now, why would I want to mark packets?
>
> **[0:38](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=38)** I'll just go in and I'll take a look and say I found something of interest in packet number three.
>
> **[0:44](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=44)** I'll right click and I'll say Mark Packet.
>
> **[0:48](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=48)** You should probably be able to see that it's a black background with white print.
>
> **[0:53](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=53)** If for example, it's an already black background, you might not be able to see it as well.
>
> **[0:59](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=59)** I'll take the coloring rules off.
>
> **[1:01](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=61)** And there you can easily see your marked packet.
>
> **[1:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=66)** Let's go down to packet number eight.
>
> **[1:09](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=69)** And we can mark this as well.
>
> **[1:12](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=72)** Now when I have marked packets, it's because I maybe thought something was interesting in that packet.
>
> **[1:18](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=78)** Well, you're probably going to forget what it is that you found.
>
> **[1:21](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=81)** So you might want to put a comment.
>
> **[1:23](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=83)** Right click, and then say Packet Comment.
>
> **[1:30](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=90)** Here's where I could put a comment.
>
> **[1:32](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=92)** Now, it says Packet Eight Comment, and I'll say this looks interesting.
>
> **[1:43](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=103)** Maybe something else more specific like check the port number.
>
> **[1:56](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=116)** Now once you put a comment, I want you to take a look at the top at the title.
>
> **[2:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=120)** There's an asterisk.
>
> **[2:01](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=121)** And that asterisk is telling me that I have a comment and I want to make sure I save that.
>
> **[2:07](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=127)** So now what if I want to navigate through my capture and I want to go to the next marked packet.
>
> **[2:13](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=133)** Now, as you can see, I have marked it.
>
> **[2:16](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=136)** But when I want to navigate, I'll go to Edit, and then I'll go to the next mark.
>
> **[2:22](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=142)** Now that'll jump down to number eight, and we know that I just put some packet comment.
>
> **[2:27](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=147)** So, it nicely highlights it.
>
> **[2:28](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=148)** And as you can see, it will say this looks interesting, check the port number.
>
> **[2:34](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=154)** So that can help me.
>
> **[2:36](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=156)** Now I can unmark those by simply right clicking and say Mark/Unmark and that will take it away.
>
> **[2:43](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=163)** Now I'll turn the coloring rules back on.
>
> **[2:46](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=166)** We'll go back to Edit.
>
> **[2:48](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=168)** And then this next section, we're going to say Ignoring/Unignore.
>
> **[2:52](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=172)** Every once in a while you get a packet capture and you might find a couple of management packets that really don't want to take a look at as far as time reference or anything else.
>
> **[3:02](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=182)** So, I can say ignore that packet.
>
> **[3:05](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=185)** Here you can see Set a Time Reference.
>
> **[3:07](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=187)** Now, why would I use that?
>
> **[3:10](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=190)** We (indistinct) have a small segment of your capture.
>
> **[3:12](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=192)** Now in this case, it's a pretty small capture 306 packets, but if there were 3000, or 13,000, that's a larger capture.
>
> **[3:21](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=201)** And I want to set a time reference just on a small segment.
>
> **[3:25](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=205)** So I'd right click and set time reference.
>
> **[3:28](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=208)** And as you can see, it'll begin on number three, and then I'll go to eight.
>
> **[3:31](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=211)** And then I'll say Set Time Reference.
>
> **[3:34](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=214)** That will allow me to see some time lag in that small section.
>
> **[3:39](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=219)** Now I'll right click and uncheck that.
>
> **[3:45](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=225)** We'll go to the next section and that's time shift.
>
> **[3:48](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=228)** And that's used for merging files and we need to shift so that the time is synchronous.
>
> **[3:54](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=234)** And then here you can see packet comment, which is something we just did and if I don't want this to be in there, I can say delete all packet comments.
>
> **[4:03](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=243)** That takes it away.
>
> **[4:04](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=244)** Are you sure you want to do that?
>
> **[4:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=246)** And I could take those away.
>
> **[4:10](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=250)** Down below here, you can say Configuration Profiles.
>
> **[4:14](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=254)** And we know that we can create custom ones.
>
> **[4:17](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=257)** And then this is a menu choice that really has a lot in it and its preferences.
>
> **[4:22](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=262)** We'll open this up.
>
> **[4:24](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=264)** This is where I can truly put the preferences as to the way I want [[Wireshark]] to look.
>
> **[4:30](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=270)** As you can see, we talk about the appearance, the columns, font and color, layout.
>
> **[4:36](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=276)** And then here are all the protocols, we may have to do some modification.
>
> **[4:41](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=281)** For example, if we know that there's a gaming port that is associated specifically with some of those specific protocols in there.
>
> **[4:50](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=290)** I maybe would modify that.
>
> **[4:52](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=292)** In this case, you can see here's just an example.
>
> **[4:55](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=295)** Babel [[Routing]] Protocol and if we change that to another port, then that would reflect it so that I would know that that is using the Babel protocol.
>
> **[5:04](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=304)** So, as you can see, while we're working with the capture, the Edit menu choice has a lot of options.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (1), [[Routing]] (1)
> **CLI Commands:** find (6), make (1)
> **UI Navigation:** go to (5)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Exploring the View Menu choice](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=0)** - [Instructor] I've reopened Stream 2.pcap.
>
> **[0:03](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=3)** This time let's take a look at the View menu choice.
>
> **[0:07](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=7)** We'll drop this down.
>
> **[0:09](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=9)** And here we can see all things that could influence the way we view our packet capture, and our screen.
>
> **[0:16](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=16)** So again, we can see that they're segmented.
>
> **[0:19](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=19)** And in our first one we can see by toolbars and Status Bar.
>
> **[0:23](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=23)** Let's see what that's all about.
>
> **[0:25](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=25)** Now if you take a look here.
>
> **[0:26](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=26)** And you can see these icons that are sitting up here.
>
> **[0:30](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=30)** Well that's your main toolbar.
>
> **[0:32](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=32)** If we go in and uncheck that as you can see it goes away.
>
> **[0:35](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=35)** But it's pretty helpful so we'll bring it back.
>
> **[0:38](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=38)** The other thing is the display filter.
>
> **[0:41](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=41)** Now the display filter is something that I use quite a bit.
>
> **[0:44](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=44)** I want to keep that, but again if it's too busy, or you don't want that.
>
> **[0:48](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=48)** Take that off.
>
> **[0:51](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=51)** The next thing I want to show you is down below.
>
> **[0:54](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=54)** This is the status bar.
>
> **[0:56](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=56)** You might not have seen that before, maybe you haven't looked at it.
>
> **[1:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=60)** But there's a lot of helpful information.
>
> **[1:02](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=62)** For example, right here it says Stream 2.pcap.
>
> **[1:05](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=65)** Now if I were to select on frame four.
>
> **[1:09](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=69)** And down below I'll select the IP header.
>
> **[1:13](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=73)** And right there it tells us a little bit about the IP header.
>
> **[1:16](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=76)** That it's version four, and it's 20 bytes.
>
> **[1:20](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=80)** If I were to select TCP, it tells us about the TCP header.
>
> **[1:25](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=85)** Over here you can see a little bit more in the status bar.
>
> **[1:28](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=88)** For example how many packets, and how many are displayed.
>
> **[1:32](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=92)** Now if we were to put a filter, it would tell us how many are displayed when I put the filter.
>
> **[1:38](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=98)** And here we have the default profile.
>
> **[1:41](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=101)** That's the status bar and again all three of those are very helpful to me.
>
> **[1:46](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=106)** Now we can also do something called Full Screen.
>
> **[1:50](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=110)** Now we'll just bring this open.
>
> **[1:51](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=111)** And that expands the screen so we can see all the elements.
>
> **[1:56](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=116)** And this is really nice because we can bring that up and then we have a little more landscape.
>
> **[2:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=120)** And that's another really helpful thing.
>
> **[2:04](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=124)** Now we can go to View and down below the Full Screen here we can see how we want those panels displayed.
>
> **[2:11](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=131)** I generally always have the Packet List, which shows me the packets.
>
> **[2:16](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=136)** The Packet Details which is right below that.
>
> **[2:19](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=139)** And I don't normally use Packet Bytes.
>
> **[2:22](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=142)** And I'll show you why.
>
> **[2:23](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=143)** We'll select Packet Bytes.
>
> **[2:26](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=146)** Packet bytes is what normally you would maybe call a hex dump.
>
> **[2:30](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=150)** This information in in hexadecimal.
>
> **[2:33](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=153)** And it really doesn't help me.
>
> **[2:35](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=155)** I'd rather have the landscape so I take that off, and I just want to see the list and the details.
>
> **[2:41](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=161)** So we have the packet list.
>
> **[2:43](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=163)** And then if I were to select on frame four this just gives me the single packet details for that frame four.
>
> **[2:53](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=173)** Now down below that we see the Time Display Format, and we will talk about that in more detail later.
>
> **[2:59](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=179)** But also Name Resolution.
>
> **[3:01](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=181)** Now Name Resolution is something that by default we want to keep the physical address.
>
> **[3:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=186)** That doesn't hurt anything.
>
> **[3:08](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=188)** Name resolution for a physical address would be the organizationally unique identifier of the MAC address.
>
> **[3:15](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=195)** As you see is says Resolve Physical Address.
>
> **[3:19](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=199)** And then if I drop down.
>
> **[3:20](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=200)** This ethernet two frame pattern.
>
> **[3:23](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=203)** It tells me the vendor's name.
>
> **[3:25](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=205)** For the destination and source MAC address.
>
> **[3:29](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=209)** If I go to View, Name Resolution, transport address.
>
> **[3:35](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=215)** But your transport address has to do with the port number.
>
> **[3:38](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=218)** And that will logically associate us with an application.
>
> **[3:42](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=222)** So that doesn't hurt anything.
>
> **[3:44](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=224)** What I don't generally do is Name Resolution, Resolve Network Address.
>
> **[3:49](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=229)** And if I were to do that, that would hit the DNS server quite a bit and would cause more traffic.
>
> **[3:55](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=235)** So I don't want to do that.
>
> **[3:58](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=238)** Now [[Zoom]] is a helpful feature.
>
> **[4:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=240)** Now I'll tell you why I would use that.
>
> **[4:03](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=243)** As you can see the packet capture looks fairly decent.
>
> **[4:07](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=247)** But what if I want to zoom it in and I'm doing a presentation?
>
> **[4:10](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=250)** I do enlarge it and in certain cases I'll show you that zoom is a helpful feature.
>
> **[4:16](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=256)** We can zoom back out and here's where we can reset that.
>
> **[4:21](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=261)** We can also take a look at the subtrees and expand the subtrees or collapse.
>
> **[4:27](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=267)** Well now the subtrees are when we take a look at a single capture.
>
> **[4:31](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=271)** Let me just show you.
>
> **[4:33](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=273)** I'll bring this up here and then we'll explore this.
>
> **[4:37](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=277)** Now as you see in frame four, and each of these headers.
>
> **[4:40](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=280)** Of course frame four is just the [[Metadata]] about frame four.
>
> **[4:44](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=284)** But each of these headers, there's a little caret on the left-hand side.
>
> **[4:49](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=289)** So if I go to View and say expand the subtrees.
>
> **[4:53](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=293)** Then that opens it all up so that it can take a closer look at all of those frame headers.
>
> **[5:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=300)** So place my cursor on that and then I go to View, and expand the subtree.
>
> **[5:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=306)** And that will just expand it.
>
> **[5:14](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=314)** Down below you can see that is you colorization rules.
>
> **[5:18](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=318)** And whether I want to colorize the packet list.
>
> **[5:22](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=322)** Again you can do this right here by unchecking that.
>
> **[5:25](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=325)** And that takes the color away.
>
> **[5:26](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=326)** But the problem with that is you can't see that intelligent scroll bar.
>
> **[5:30](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=330)** So I do like to keep that on.
>
> **[5:33](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=333)** But in some cases I take it off 'cause it may be too busy.
>
> **[5:39](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=339)** If I want to resize my layouts or the columns I can do that there.
>
> **[5:44](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=344)** And Internals, there's a little bit more information for example if you're developer.
>
> **[5:49](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=349)** Now every once in a while you might want to modify or you've modified the capture.
>
> **[5:54](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=354)** And then you might want to reload.
>
> **[5:56](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=356)** So why would I do that?
>
> **[5:58](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=358)** Well I'll go to frame four.
>
> **[6:01](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=361)** I'll right click and for example if that frame four was a management packet, I didn't want to see it as part of this capture.
>
> **[6:09](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=369)** I could say ignore the packet.
>
> **[6:12](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=372)** Now watch, It'll go away.
>
> **[6:14](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=374)** Now it's there but it's ignored.
>
> **[6:17](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=377)** But I want it back.
>
> **[6:19](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=379)** So I can right click and then we can bring it back out.
>
> **[6:23](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=383)** Every once in a while if you're working with a capture, you've made some modifications, you added comments.
>
> **[6:29](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=389)** You set time references.
>
> **[6:31](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=391)** You really messed up the capture.
>
> **[6:33](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=393)** You want to bring it back and reload it.
>
> **[6:35](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=395)** You just go to View and Reload.
>
> **[6:37](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=397)** And that'll bring it back to the way it originally started.
>
> **[6:41](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=401)** So as you can see there's a lot of information, and a lot of ways we can modify our view.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (4), [[Metadata]] (1)
> **UI Navigation:** go to (6), select the (1)
> **Env Vars:** tcp (2), mac (2), dns (1)
> **Analogies:** for example (4)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Getting ready to capture](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=0)** - [Instructor] In this segment, we'll take a look at some capture options.
>
> **[0:03](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=3)** You'll see how you can select a specific interface and how you can capture to a permanent file or a temporary file using a ring buffer as well as some of the various capture methods.
>
> **[0:15](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=15)** So we're going to go to the menu choice capture, and we'll drop this down, and as you can see, there are options, start, capture filters or refresh interfaces.
>
> **[0:26](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=26)** We'll select options, and once you open the options, there's a lot of information here.
>
> **[0:33](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=33)** First of all, we see a list of interfaces that are available.
>
> **[0:38](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=38)** You can go to manage interfaces and you can find a little bit more information, and as you can see, I'll just pull this over here and you have some VMware adapters, Bluetooth, local area connection, and I can just uncheck those, 'cause really, I just want the [[Wi-Fi|wifi]] and I'll say okay, and then, you can also see that it automatically, since I narrowed that just to the wifi, it just gave me the wifi interface.
>
> **[1:10](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=70)** Down below here, it says, enable promiscuous mode on all interfaces, and of course, we want that because we want to capture all the traffic including any management, traffic, broadcasts or multicasts.
>
> **[1:23](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=83)** Now if you were to select this, you can simply say start, or in some cases, you might want to put a capture filter.
>
> **[1:30](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=90)** I'm going to go to output.
>
> **[1:32](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=92)** When you're capturing, sometimes you just grab a quick capture and you're not going to output it to anything.
>
> **[1:38](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=98)** You just start it, and then, when you're done, you stop it.
>
> **[1:41](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=101)** But here's where you can actually capture to a permanent file and you can force it to go to a specific location, and in this case, you can select browse, which will bring me to my folder on my desktop and we can call it whatever you like.
>
> **[1:56](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=116)** Now for this one, I'll just say ring because I'm going to do something with this, and then, I'm also going to call it .pcap.
>
> **[2:05](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=125)** I'm going to force it to save it in a .pcap format, and we'll say save.
>
> **[2:10](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=130)** Now, here again, it will say what kind of output, but I've forced it to output it in a pcap format.
>
> **[2:16](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=136)** One of the things that you can do and understand that when you're doing some troubleshooting, you might be running a capture and you might leave it run for a while.
>
> **[2:25](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=145)** Well the problem is with that is it's going into a temporary file and it's going to consume all the resources on your laptop.
>
> **[2:32](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=152)** Sometimes you just want to let this run and then observe for traffic that's out of the ordinary.
>
> **[2:38](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=158)** So you can use what's called a ring buffer.
>
> **[2:41](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=161)** Now I can do this by outputting it, as you see, to bring .pcap, and then I'm going to say create a new file automatically after, and in this case, we'll make it really small because it'll go fairly quickly, 30 packets, and here, we can say use a ring buffer with two files and we're going to keep this really small, but what will happen is [[Wireshark]] will simply overwrite the ring buffer.
>
> **[3:07](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=187)** In some cases, we then can go to options, and if we go to options, you can see here, stop capture automatically after, and what I can say is stop it after a certain number of packets or in certain number of files, and in this case, I'm going to say after four files.
>
> **[3:26](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=206)** So it'll run through the ring buffer twice, then overwrite it and it will stop at four files.
>
> **[3:32](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=212)** Up here into the options, you can see update list of packets in real time, and I do like that, and automatically scroll during live capture, and you can also check that or show capture information during live capture.
>
> **[3:45](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=225)** There's another location here where you can see name resolution, and we'll again, we'll make sure that we're on wifi and we're going to say start.
>
> **[3:54](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=234)** Now once I start this, you're going to see the capture will occur.
>
> **[3:58](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=238)** It'll blank, meaning it'll stop because it's writing to a ring buffer, and then it will continue, and then it will automatically stop after four files.
>
> **[4:07](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=247)** So now I'm going to say start.
>
> **[4:14](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=254)** We'll turn on the coloring rules so we can take a better look at this capture.
>
> **[4:18](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=258)** Now I know it stopped because, as you can see, the blue fin is available for me to start the capture again, but where are the files?
>
> **[4:26](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=266)** I'm just going to drop this down and I'll go into Wireshark captures, and there, you can see the two ring buffers.
>
> **[4:31](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=271)** Now again, this will go through and it'll overwrite it and I can have it keep writing over and over again if I want to, and a ring buffer is just a temporary buffer that you can use it to do some troubleshooting.
>
> **[4:45](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=285)** So as you can see, there are various capture options when troubleshooting with Wireshark.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi|Wifi]] (4), [[Wireshark]] (3)
> **UI Navigation:** go to (6), open the (1)
> **CLI Commands:** make (2), find (1)
> **Speakers:** - [instructor] (1)

#### [Examining a capture](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=0)** - Troubleshooting an unstable and sluggish network involves assessing trouble spots to determine the root cause.
>
> **[0:07](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=7)** Now this can include device malfunction, misconfiguration, or even malware.
>
> **[0:14](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=14)** When users perceive the network is slow, there are most likely errors in the transmission of data or network congestion.
>
> **[0:23](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=23)** When assessing network performance, the three main metrics are latency, throughput, and packet loss.
>
> **[0:31](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=31)** Latency is how long it takes to transmit a packet.
>
> **[0:34](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=34)** And we can measure this by using roundtrip time.
>
> **[0:38](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=38)** Throughput is how much data is sent and received at any given time.
>
> **[0:43](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=43)** When latency is high, throughput goes down and that's because with high latency, the sender doesn't send any packets, which reduces the throughput.
>
> **[0:54](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=54)** Packet loss is when data doesn't make it to the final destination.
>
> **[0:58](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=58)** Keep in mind, the applications and end points will work to manage the delays and congestion.
>
> **[1:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=66)** You'll see evidence of this in [[Wireshark]] with indicators, such as keep-alives, duplicate acknowledgments, and retransmissions.
>
> **[1:15](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=75)** The server keeps track of the client acknowledging the data.
>
> **[1:19](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=79)** However, if the server doesn't receive an acknowledgement in a timely manner, the server will assume the packet is lost and this triggers a retransmission of the data.
>
> **[1:30](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=90)** Let's take a look.
>
> **[1:32](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=92)** Let's go back to our capture, SmallFlows.pcap.
>
> **[1:36](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=96)** Now, first we want to filter on TCP stream 68.
>
> **[1:40](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=100)** So we'll right click and I'll say follow the TCP stream.
>
> **[1:46](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=106)** But instead of 16, I'll put a 68.
>
> **[1:52](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=112)** Now I want to follow the stream.
>
> **[1:54](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=114)** And I want to show you something.
>
> **[2:02](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=122)** Right here, it says, 1682 bytes are missing in the capture file.
>
> **[2:10](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=130)** So a large chunk of data didn't get through.
>
> **[2:13](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=133)** We'll close this. And now we'll open the expert system.
>
> **[2:17](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=137)** Go to the lower left hand corner and open the expert information.
>
> **[2:22](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=142)** Now, what I want to do is limit it to the display filter by selecting right here.
>
> **[2:27](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=147)** And then I want to show you the retransmissions.
>
> **[2:31](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=151)** Now, they're under notes.
>
> **[2:32](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=152)** And what I want to just show you is there's a spurious retransmission that's listed.
>
> **[2:37](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=157)** That isn't bad, that basically is a retransmission that's not necessary.
>
> **[2:42](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=162)** Somehow it got crossed in the bytes and flight and it's resending the same data, but these other retransmissions are indicative of some problems.
>
> **[2:51](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=171)** So in this case, you see, and I'll bring this back up, that there are six retransmissions.
>
> **[3:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=180)** - Now what I want to do is I want to show you how you can apply a filter on the fly from the expert information.
>
> **[3:07](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=187)** I'll go into that retransmission and I'll right click.
>
> **[3:09](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=189)** And then I'll say, prepare as a filter.
>
> **[3:13](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=193)** Now, if I say apply as a filter, it will put it up in the display filter and it will run the filter, but I just want to prepare a filter.
>
> **[3:20](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=200)** And now I want to say and selected because I want it to be stream 68 and retransmissions.
>
> **[3:26](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=206)** Now I'll close this.
>
> **[3:28](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=208)** And as you can see, it's up there waiting for me to press enter.
>
> **[3:32](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=212)** Now I can modify it if I want to, but I'm just going to press enter.
>
> **[3:36](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=216)** Now you can see your retransmissions.
>
> **[3:38](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=218)** Now go to packet 10288.
>
> **[3:43](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=223)** And what I'll do is I just want to show you here, the source port 80.
>
> **[3:48](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=228)** So that's coming from the server. It's a retransmission.
>
> **[3:51](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=231)** One other thing I want to show you, we'll go to TCP analysis .retransmission, and I'll take that out.
>
> **[3:59](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=239)** Instead, I want to put lost segment, L O S T underscore segment, and then press enter.
>
> **[4:09](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=249)** And here we can see a number of lost segments.
>
> **[4:13](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=253)** So now that we see indications of congestion, our next step is to follow through and locate the trouble spots on our network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (1)
> **UI Navigation:** go to (3), open the (2)
> **Env Vars:** tcp (3)
> **Speakers:** - troubleshooting (1), - now (1)
> **CLI Commands:** make (1)
> **Ports:** port 80 (1)
> **Cross-References:** go back to (1)
> **Analogies:** such as (1)

#### [Challenge: Examining evidence of congestion](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-examining-evidence-of-congestion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-examining-evidence-of-congestion?u=76281980&t=0)** (electronic music)
>
> **[0:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-examining-evidence-of-congestion?u=76281980&t=6)** - [Instructor] In this challenge we'll use the capture smallFlows.pcap.
>
> **[0:10](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-examining-evidence-of-congestion?u=76281980&t=10)** I want you to filter on TCP stream 16 and then open the expert system, limit to display filter and then answer these two questions.
>
> **[0:21](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-examining-evidence-of-congestion?u=76281980&t=21)** How many retransmissions are listed?
>
> **[0:24](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-examining-evidence-of-congestion?u=76281980&t=24)** And then the other question is, who is sending the retransmissions?
>
> **[0:29](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-examining-evidence-of-congestion?u=76281980&t=29)** The client or the server?
>
> **[0:32](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-examining-evidence-of-congestion?u=76281980&t=32)** This challenge should take about five minutes.
>
> **[0:35](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-examining-evidence-of-congestion?u=76281980&t=35)** Good luck.

> [!info]- Semantic Content
>
> **Code Identifiers:** smallflows (1)
> **Env Vars:** tcp (1)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (electronic music) (1)

#### [Response: Examining evidence of congestion](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-examining-evidence-of-congestion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-examining-evidence-of-congestion?u=76281980&t=0)** - [Instructor] So, how did you do?
>
> **[0:07](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-examining-evidence-of-congestion?u=76281980&t=7)** We'll let's review.
>
> **[0:09](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-examining-evidence-of-congestion?u=76281980&t=9)** I've opened up smallflows.pcap And the first thing we're to do is filter on TCP stream 16.
>
> **[0:17](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-examining-evidence-of-congestion?u=76281980&t=17)** Now there are a number of different ways we can do this, but the easiest way is select any TCP stream, right click, and say follow the TCP stream.
>
> **[0:29](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-examining-evidence-of-congestion?u=76281980&t=29)** And I'll close this window.
>
> **[0:31](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-examining-evidence-of-congestion?u=76281980&t=31)** And then all I need to do is modify the display filter to say TCP stream equals 16.
>
> **[0:41](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-examining-evidence-of-congestion?u=76281980&t=41)** And then press enter.
>
> **[0:43](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-examining-evidence-of-congestion?u=76281980&t=43)** The next one is open the expert system.
>
> **[0:46](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-examining-evidence-of-congestion?u=76281980&t=46)** So I go to the lower left hand corner, select once, and then I want to limit to display filter.
>
> **[0:53](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-examining-evidence-of-congestion?u=76281980&t=53)** So I go down below, limit to display filter.
>
> **[0:56](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-examining-evidence-of-congestion?u=76281980&t=56)** The next question is how many retransmissions are listed?
>
> **[1:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-examining-evidence-of-congestion?u=76281980&t=60)** So we can take a look up here.
>
> **[1:03](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-examining-evidence-of-congestion?u=76281980&t=63)** And this frame is the suspected retransmission.
>
> **[1:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-examining-evidence-of-congestion?u=76281980&t=66)** And we can see on the far right that there are seven retransmissions.
>
> **[1:13](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-examining-evidence-of-congestion?u=76281980&t=73)** Another thing we want to do is see who is sending the retransmissions, the client or the server?
>
> **[1:19](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-examining-evidence-of-congestion?u=76281980&t=79)** So we can do a filter from the expert information by right clicking and this time I'm going to say prepare as a filter and selected so that will add another variable to the filter.
>
> **[1:32](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-examining-evidence-of-congestion?u=76281980&t=92)** And then I'll close this and now it's up there in the display filter, and then I'll press enter.
>
> **[1:39](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-examining-evidence-of-congestion?u=76281980&t=99)** So now we'll go to packet 8841.
>
> **[1:45](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-examining-evidence-of-congestion?u=76281980&t=105)** And then what I want to do is just go to the source port 80, and that is coming from the web server.
>
> **[1:51](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-examining-evidence-of-congestion?u=76281980&t=111)** So the server is sending the retransmissions.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (4)
> **UI Navigation:** go to (3), open the (1)
> **Ports:** port 80 (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Using Time as a Metric

[↑ Back to Table of Contents](#table-of-contents)

#### [Displaying time](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=0)** - [Instructor] The concept of accurate time on a network is very important.
>
> **[0:04](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=4)** CIS Log audits and logs events which you can use to track problems and troubleshoot issues.
>
> **[0:11](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=11)** In addition, some protocols such as curb rows require synchronized time on the network.
>
> **[0:17](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=17)** Periodically I check my wall clock with a more official source.
>
> **[0:21](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=21)** I'm here at this website, [time.gov](https://time.gov).
>
> **[0:24](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=24)** And we can take a look over here and it says your clock is off by 1.017 seconds.
>
> **[0:33](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=33)** So now I'm in [[Wireshark]] and let's take a look at how we can view time.
>
> **[0:38](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=38)** We'll go to View and a significant sub-menu choice deals with the time display.
>
> **[0:44](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=44)** And I'll go here and we'll just expand this, the time display format.
>
> **[0:49](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=49)** Now in the first couple you can put it in any number of different ways.
>
> **[0:53](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=53)** Date and time of day, year, day of year, and time of day, time of day, and here's one I probably would never use, seconds since January 1st, 1970.
>
> **[1:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=66)** Most commonly you'll probably use one of these three.
>
> **[1:10](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=70)** When we're doing an analysis in how would you like the time displayed, seconds since beginning of capture will show you how many seconds that have passed since the capture was started.
>
> **[1:22](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=82)** Now that can be helpful, but in most cases it really won't be able to show you large gaps.
>
> **[1:27](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=87)** Seconds since previously captured packet will show you how many seconds that have passed since the previously captured packet.
>
> **[1:35](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=95)** Now that can help but what generally happens is we do put a filter.
>
> **[1:39](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=99)** And that's why we most likely would use this one, seconds since previously displayed packet.
>
> **[1:46](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=106)** Now this is going to be used when you apply a display filter as it will show many seconds that have passed since the previously displayed packet and will more accurately show gaps in time.
>
> **[1:59](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=119)** Now down below here, this is all precision, and when selecting a format this is going to be how many decimals places will be displayed.
>
> **[2:08](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=128)** In most cases it's just really best to use automatic and this is the default because that will give the best precision the operating system can provide.
>
> **[2:19](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=139)** So now that we know that, we can see the time up here, it is set for seconds since previously displayed packet.
>
> **[2:28](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=148)** So what we can do is I'm going to right click and I'll say follow the TCP stream.
>
> **[2:37](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=157)** And then I want to go to stream 68.
>
> **[2:42](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=162)** The 68 we know has some issues and we can see over here in the intelligence scroll bar we do see some issues and that indicates here the black.
>
> **[2:53](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=173)** Well now where is the trouble happening?
>
> **[2:56](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=176)** Well let's just take a look.
>
> **[2:57](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=177)** If I go to any of these where we see the source 66.220 what I want to do is I want to apply a filter.
>
> **[3:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=186)** So I really just want to see the traffic coming from 66.220.
>
> **[3:11](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=191)** So now I already have a filter up there but what I want to do is prepare as a filter and then say and selected.
>
> **[3:19](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=199)** And then I'll press Enter.
>
> **[3:21](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=201)** Now we can actually see the gaps in time.
>
> **[3:24](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=204)** And here is one really big gap in time, 32 seconds.
>
> **[3:29](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=209)** Here's another one, 14 seconds.
>
> **[3:33](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=213)** Now that's indicative of some issues, and as you can see then there's retransmissions and there's been a gap in the transmission.
>
> **[3:40](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=220)** In some way something has happened.
>
> **[3:43](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=223)** So we'll do one more thing and I'll shown you this.
>
> **[3:45](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=225)** I'll go to [[Statistics]] and then I'll go to TCP Stream Graphs and we'll do a time sequence graph.
>
> **[3:54](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=234)** And here what it is really going to show you is confirming that nothing is happening for gaps of time.
>
> **[4:01](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=241)** And here you can see that we get a little data transmission and then there's a wait period.
>
> **[4:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=246)** Another little data transmission and then wait.
>
> **[4:10](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=250)** And again here.
>
> **[4:11](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=251)** So the whole concept of time is important and it can help you with troubleshooting issues on the network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (1), [[Statistics]] (1)
> **UI Navigation:** go to (5)
> **Env Vars:** tcp (2), cis (1)
> **Versions:** 66.220 (2), 1.017 (1)
> **URLs:** [time.gov](https://time.gov) (1)
> **Analogies:** such as (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### [Viewing Details and Expert Info](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=0)** - [Teacher] Part of effective packet analysis is knowing how to use the tools within [[Wireshark]].
>
> **[0:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=6)** Let me show you a couple of things that I refer to, just to help keep track of what's happening.
>
> **[0:11](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=11)** The one thing is when you go to [[Statistics]], and you can see that there are a lot of choices in Statistics, I want to go to Capture File Properties.
>
> **[0:21](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=21)** Now, when you open this, you can see a lot of the [[Metadata]] about this capture.
>
> **[0:26](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=26)** And down below, it tells you the time of when it was taken, how long it had taken to run, and if it knows the [[Hardware]] it will put that in as well.
>
> **[0:37](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=37)** This also tells us a little bit about statistics as far as average bytes per second, average bits per second, and any interface information.
>
> **[0:48](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=48)** You can also put a comment so that you can refer to this information at a later date.
>
> **[0:54](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=54)** So for this place, I would just put a file comment, "Many duplicate ACK's must investigate."
>
> **[1:11](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=71)** And then I'll say, Save Comments, and then I'll close it.
>
> **[1:15](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=75)** I know that there are a lot of duplicate acknowledgments, but let's take a look at the expert information, and we can see a lot more was to what Wireshark perceives as problems that we might want to investigate.
>
> **[1:27](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=87)** Over in the lower-left hand corner is the expert system.
>
> **[1:31](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=91)** Now, if we take a look at that, I've laid my cursor on it.
>
> **[1:34](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=94)** It says, error is the highest expert information level.
>
> **[1:38](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=98)** I click on it one time and it opens the Expert Information panel.
>
> **[1:42](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=102)** Now within it, you can see that there are column headers on there, and it lists it by the following.
>
> **[1:48](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=108)** Here it talks about the severity, the summary of that information, group, protocol and count.
>
> **[1:58](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=118)** So the severity is of the severity of the error that is listed.
>
> **[2:02](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=122)** Now, in this case, you can see that it is listed and it's grouped as well.
>
> **[2:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=126)** Now, if you see that there's a carrot on the left hand side, that means that there's more information.
>
> **[2:12](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=132)** So I'll drop that down.
>
> **[2:13](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=133)** And then it gives you details as to what it is identified.
>
> **[2:18](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=138)** Now, within each summary, there are several common groupings.
>
> **[2:22](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=142)** And you can just take a look here.
>
> **[2:24](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=144)** Some of those groupings would include, checksum, sequence, protocol, and then also in this case, malformed.
>
> **[2:34](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=154)** Over on the far-right-hand side, you see a count.
>
> **[2:38](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=158)** And that tells us how many packets had that particular error.
>
> **[2:42](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=162)** And I'll just drop this down.
>
> **[2:44](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=164)** So now you can see all 34 of the errors that exist.
>
> **[2:49](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=169)** Now, when we look at the severity, some of which are worse than others.
>
> **[2:52](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=172)** And again, this is only a guide.
>
> **[2:54](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=174)** It's for you to go further and do some more investigating.
>
> **[2:58](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=178)** When you look at that's red, this shows some possible serious issues, such as malformed packet, as you see, or a new fragment overlapping old data.
>
> **[3:08](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=188)** The yellow is warning.
>
> **[3:09](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=189)** This indicates a warning that there may be problems you want to take a look at and investigate further.
>
> **[3:16](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=196)** For example, this DNS query retransmission.
>
> **[3:19](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=199)** And you can see that there are a couple of warnings in this case.
>
> **[3:24](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=204)** A note is down below here.
>
> **[3:26](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=206)** And in this case, it just tells us that general notes of interest, many times they're part of a connection.
>
> **[3:32](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=212)** And that would be something like a TCP Keepalive packet, or in this case, as you see, duplicate acknowledgement, now the chat is going to really just list a typical workflow and state change.
>
> **[3:44](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=224)** And that is not really going to be anything bad, but again, here you see connection finished, and we have our FIN and FINACK.
>
> **[3:52](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=232)** Now over in the lower-left-hand corner, I'm going to drop this down here.
>
> **[3:56](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=236)** Now you can see that it's going to allow us to put things such as error, warning, chat or note, and if there are comments on the packets comments.
>
> **[4:05](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=245)** For example, if I really didn't want to see the chats, I can uncheck that, in the notes, I can uncheck that.
>
> **[4:12](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=252)** So now I'm only going to see errors and warnings.
>
> **[4:17](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=257)** I'll bring those back in and then I'll show you a few more things.
>
> **[4:20](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=260)** So we can take a look at this information here, and on the bottom, I can search for specific information.
>
> **[4:27](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=267)** W-P-A-D.
>
> **[4:29](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=269)** Now I can drop this down.
>
> **[4:32](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=272)** And I know that there was a query, A-W-P-A-D, and I can go right to that packet.
>
> **[4:39](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=279)** So you can search as well.
>
> **[4:41](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=281)** And then one more thing is I can right click, and I can actually filter, find, colorize, look up, expand all or collapse all.
>
> **[4:51](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=291)** In this case, I'll apply as a filter and it'll just say selected, and it will run that filter.
>
> **[4:58](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=298)** And then I'll close this.
>
> **[5:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=300)** So as you can see, the statistics tells us a little summary on that packet capture, and the expert system helps identify possible problems that we should further investigate.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (4), [[Wireshark]] (2), [[Metadata]] (1), [[Hardware]] (1)
> **Env Vars:** ack (1), dns (1), tcp (1), fin (1), finack (1)
> **Analogies:** such as (2), for example (2)
> **UI Navigation:** go to (2), click on (1)
> **Warnings:** warning (3)
> **CLI Commands:** find (1)
> **Definitions:** means that (1)
> **Speakers:** - [teacher] (1)

#### [Graphing the TCP Streams](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=0)** - [Instructor] Another tool that we can use while troubleshooting is TCP stream graphs.
>
> **[0:05](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=5)** Now this is a way that we can visualize TCP data stream and we get to those by going to [[Statistics]] and then TCP stream graphs.
>
> **[0:13](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=13)** But first, let's force it to follow one of the streams.
>
> **[0:17](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=17)** We're going to go to TCP stream 16.
>
> **[0:20](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=20)** I'll right-click and I'll say follow the TCP stream, and then I want to make sure it says 16.
>
> **[0:27](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=27)** If it doesn't, then make sure that it says TCP stream equals 16.
>
> **[0:32](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=32)** Now we know that there's a lot of issues with this stream and I'm going to just scroll down and take a look at the time gaps.
>
> **[0:39](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=39)** We also want to make sure that the time display format is set at seconds since previously displayed packet, and it is.
>
> **[0:47](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=47)** So now let's take a look at the stream graphs.
>
> **[0:49](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=49)** Go to statistics and then TCP stream graphs.
>
> **[0:53](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=53)** Now once I'm here, you can see that there are five choices, but I'll select any of those and it will bring me up a single window.
>
> **[1:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=60)** We'll go to window scaling.
>
> **[1:04](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=64)** Now up at the top, it'll tell you [[Windows]] scaling for these two IP addresses.
>
> **[1:09](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=69)** Now it will give you the window received or the bytes out and the window scaling is a factor that helps us to assess really how much I can send, and in this case, I'm going to uncheck bytes out and you can see that'll go away, and the receive window is the one up at the top.
>
> **[1:25](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=85)** That'll go away as well.
>
> **[1:28](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=88)** When I go over here to type, I can drop this down and I can also take a look at round trip time.
>
> **[1:34](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=94)** Now round trip time measures the time it takes to travel from client to server and then back, and this can also give you an indication if you're seeing like longer and longer round trip times that you might have some delays or congestion.
>
> **[1:48](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=108)** Over here in the right-hand side, you can see that I can switch direction very easily.
>
> **[1:52](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=112)** So this is going from 72.14 to 192.168 and I can switch directions.
>
> **[2:02](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=122)** Another graph that's within this is throughput and throughput is the data that's getting through, but it's not always something I want.
>
> **[2:09](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=129)** It's including management traffic.
>
> **[2:11](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=131)** Up at the top here, you see there's two dots.
>
> **[2:15](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=135)** We're going to uncheck that and you'll see that the segment link goes away, but I can add that.
>
> **[2:19](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=139)** Now the throughput is checked, but I might also want to see what is goodput and goodput is the good information that's coming through.
>
> **[2:27](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=147)** What I also can show you is that if I drop this down, you can see that there are two times sequence graphs.
>
> **[2:33](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=153)** The TCP trace will help visualize TCP metrics and it's similar to the TCP trace utility.
>
> **[2:39](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=159)** What it allows us to do is see when any selective acknowledgments.
>
> **[2:43](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=163)** Selective acknowledgements or SAC is done by TCP that says keep sending the data, it doesn't have to be in order, I'll let you know when I need any.
>
> **[2:53](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=173)** In this case, I don't see any selective acknowledgements.
>
> **[2:57](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=177)** But the one I do like to use is the TCP time sequence or the Stevens Graph.
>
> **[3:03](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=183)** So when you have this open, as you can see, this shows us, and you could place your cursor here and pull this up.
>
> **[3:11](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=191)** You can take a look behind the scenes here at the packet list, and when I place my cursor here, you can see that nothing happened for about 90 seconds, and then, as you can see, that was that delay.
>
> **[3:25](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=205)** I'll pull this down here.
>
> **[3:27](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=207)** I'm going to switch directions, and then I'm going to also show you how we can do a [[Zoom]].
>
> **[3:33](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=213)** As you can see, I can move this around or I can put my finger on control and then roll it in and that can zoom it in.
>
> **[3:41](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=221)** We also can do a zoom, and right here, I'm kind of wondering what's happening and you just do a little lasso and it will continue to zoom in.
>
> **[3:52](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=232)** Okay.
>
> **[3:53](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=233)** So you can see there a little interruption here and then go back to drags.
>
> **[3:56](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=236)** Then you can actually click on the packet itself.
>
> **[4:01](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=241)** In case you were working with it for awhile, you may have wanted it to be back to the way it was, you can simply say reset and that brings it back to the original window, and the last thing we can do is if we wanted to share this with someone or save it, we can select save as, and as you can see, we can put it in either a PDF, bitmap, PNG, or JPEG.
>
> **[4:24](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=264)** So as you can see, there is a number of stream graphs that helps us to visualize TCP data streams while we're doing our troubleshooting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (4), [[Statistics]] (2), [[Windows]] (1)
> **Env Vars:** tcp (13), sac (1), pdf (1), png (1), jpeg (1)
> **UI Navigation:** go to (3), right-click (1), scroll down (1), click on (1)
> **CLI Commands:** make (3)
> **Definitions:** is a  (3)
> **Versions:** 72.14 (1), 192.168 (1)
> **Cross-References:** go back to (1)
> **Analogies:** similar to (1)

#### [Challenge: Using time to view gaps in transmission](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-using-time-to-view-gaps-in-transmission?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-using-time-to-view-gaps-in-transmission?u=76281980&t=0)** - [Instructor] Using the capture streamto.pcap, you'll want to make sure that the time display format is set to seconds since previously displayed packet.
>
> **[0:16](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-using-time-to-view-gaps-in-transmission?u=76281980&t=16)** Then I want you to create a filter that only shows the traffic from 72.14.213.147.
>
> **[0:25](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-using-time-to-view-gaps-in-transmission?u=76281980&t=25)** Take a look at the capture now with the filter and what are some of the significant time gaps?
>
> **[0:31](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-using-time-to-view-gaps-in-transmission?u=76281980&t=31)** And then finally, run a TCP time sequence Stevens Graph.
>
> **[0:37](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-using-time-to-view-gaps-in-transmission?u=76281980&t=37)** This challenge should take you about five minutes.
>
> **[0:40](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-using-time-to-view-gaps-in-transmission?u=76281980&t=40)** Good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Env Vars:** tcp (1)
> **Versions:** 72.14.213 (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Response: Using time to view gaps in transmission](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=0)** - [Instructor] Okay, now let's take a look.
>
> **[0:08](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=8)** I'm in stream2.pcap and I have the instructions over here in the right hand side.
>
> **[0:13](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=13)** Now, the first thing is we need to make sure the time display format is set to seconds since previously displayed packet.
>
> **[0:21](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=21)** So we're going to go over here and to view, and then time display format.
>
> **[0:27](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=27)** Now the default is seconds since beginning of capture, but we want it to be seconds since previous displayed packet.
>
> **[0:34](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=34)** So next we'll want to create a filter that only shows the traffic from 72.14.213.147.
>
> **[0:43](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=43)** So right here, we can just grab any of those where the source IP address is seven 72.14.
>
> **[0:49](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=49)** Then we'll drop this down so that we can get to the source IP address.
>
> **[0:55](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=55)** Now, once we're there just right click.
>
> **[0:58](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=58)** And remember, if we say apply as a filter and then say selected, it will run it.
>
> **[1:04](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=64)** Or we could say prepare as a filter and selected.
>
> **[1:08](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=68)** And as you can see, we prepared it as a filter.
>
> **[1:11](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=71)** Didn't run it, but that's just to make sure if I need to modify that filter in any way.
>
> **[1:16](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=76)** And I'll just press enter.
>
> **[1:19](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=79)** Now we have this so you can sort of see the time gaps and I'll just scroll down here and you can see one here with 13 seconds.
>
> **[1:30](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=90)** There's a significant one.
>
> **[1:32](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=92)** And then there's another significant one, 91 seconds.
>
> **[1:36](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=96)** Or you can actually sort.
>
> **[1:39](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=99)** Now we know that we have columns here, so we can sort the columns by clicking one time and that'll put the lowest number first.
>
> **[1:49](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=109)** And I can select that again.
>
> **[1:51](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=111)** And that puts your highest one up front.
>
> **[1:53](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=113)** And you can see that 91 seconds, 23 seconds.
>
> **[1:57](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=117)** So there's some pretty significant time gaps in there.
>
> **[2:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=120)** The last thing is run a TCP Time Sequence Stevens Graph.
>
> **[2:05](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=125)** Now Stevens Graphs are available by going to [[Statistics]], dropping statistics, and then down at the bottom where it says TCP stream graphs.
>
> **[2:14](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=134)** Now understand that all of these graphs are within the one frame so I can select any of those.
>
> **[2:20](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=140)** And we'll do that.
>
> **[2:20](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=140)** We'll just say time sequence.
>
> **[2:22](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=142)** And okay, now I'm just going to close this and so we can get a better look at this and there you see those large gaps.
>
> **[2:32](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=152)** Now, once I'm in this graph and this is just letting me drag it over, if I want to [[Zoom]] in on any of those areas, I could, you select right here and then you lasso it and then it zooms it in.
>
> **[2:46](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=166)** Then I can go back to drag and then pull this over so you get a better look at it.
>
> **[2:53](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=173)** And we can bring it back down.
>
> **[2:54](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=174)** But the other nice thing about this, once I'm in this graph, if I just simply select any of those points there, that'll get me right to that specific packet and we can take a better look at it.
>
> **[3:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=186)** Okay.
>
> **[3:07](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=187)** So that's it for your challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (2), [[Zoom]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** tcp (2)
> **Versions:** 72.14.213 (1), 72.14 (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### Wireshark Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [Viewing conversations and endpoints](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=0)** - [Narrator] In [[Wireshark]], you can view conversations and endpoints in a capture to provide valuable insight on how devices communicate with one another to help assess network efficiency and security.
>
> **[0:15](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=15)** In this segment, we'll outline how to examine endpoints, which represents one side of a conversation, along with conversations or communication between two endpoints.
>
> **[0:29](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=29)** To see the conversations that are taking place on a [[Windows]] operating system, you can go to the command-line interface and run the command netstat.
>
> **[0:40](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=40)** netstat is a handy utility that shows network connections, [[Routing]] tables, and interface [[Statistics]].
>
> **[0:48](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=48)** In this case, I'll use the switch -n, which forces netstat to display numeric values instead of a domain name for the IP address.
>
> **[0:59](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=59)** Now, once you run the command, it'll take a second to run and it will show you the active connections.
>
> **[1:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=66)** All right, now I'll select one of those conversations, right here, and here we see the endpoints in a TCP conversation.
>
> **[1:17](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=77)** Now over here in the left, we see the local address.
>
> **[1:20](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=80)** That's my IP address, and that's the port.
>
> **[1:24](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=84)** Another endpoint is the foreign address, and here we see the IP address and the port, and those two are in a conversation and it is established.
>
> **[1:36](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=96)** So now let's see how we can use conversations and endpoints to do some troubleshooting.
>
> **[1:42](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=102)** Imagine it's a normal Tuesday afternoon and your phone buzzes with an urgent email notification.
>
> **[1:50](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=110)** You open the message to find a request from the payroll manager, Sarah, telling you that something's not quite right and to please call when you can.
>
> **[2:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=120)** You call Sarah and she really can't verbalize what isn't right.
>
> **[2:04](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=124)** She explains that all applications seem to be slower and the whole department is complaining.
>
> **[2:11](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=131)** Now the exercise begins.
>
> **[2:14](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=134)** To demonstrate this, we'll grab a capture here on CloudShark, and I'll download this packet capture and open it in Wireshark.
>
> **[2:22](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=142)** So go to Export, Download File, and Download the original file.
>
> **[2:29](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=149)** Now I've saved it locally as ZeroAccess.pcapng.
>
> **[2:33](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=153)** Now once in here, I've taken off the coloring rules as they can be distracting.
>
> **[2:38](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=158)** We'll first go to Statistics and we'll take a look.
>
> **[2:42](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=162)** Here we see both endpoints and conversations.
>
> **[2:46](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=166)** So let's take a look at the endpoints.
>
> **[2:49](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=169)** Now in this case, remember this is just one side of the conversation.
>
> **[2:54](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=174)** Now when we look at this, we see the different tabs, IPv4, IPv6, TCP, UDP.
>
> **[3:02](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=182)** Well, you can add more if you like.
>
> **[3:04](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=184)** Over here on the left hand side, you can see that there are plenty of other protocols that we could add.
>
> **[3:10](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=190)** I'll just select Ethernet, and that could be another one we might want to take a look at.
>
> **[3:15](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=195)** But I'm going to close this, and now I'm going to go to Statistics and Conversations.
>
> **[3:21](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=201)** Now this provides a lot of the same information, but remember, this is both sides of the conversation.
>
> **[3:28](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=208)** These are both endpoints.
>
> **[3:30](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=210)** Now again, when you're looking at this, you want to see possibly something that's out of line.
>
> **[3:38](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=218)** Now we know that we can spoof an IP address or change it and we can spoof a Mac address or change it.
>
> **[3:44](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=224)** But the one thing we can't change is the port.
>
> **[3:47](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=227)** So I generally take a look at the port usage.
>
> **[3:50](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=230)** So go to TCP, and here we see the ports, ports A and ports B, and we can sort them.
>
> **[3:58](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=238)** Let's go to UDP.
>
> **[4:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=240)** In this case, I'm going to go to port A and I'll go to port B.
>
> **[4:07](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=247)** Now I do see that there's a lot of 1104.
>
> **[4:11](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=251)** Now port 1104, I'm not really sure what's going on here, but we also see a lot of IP addresses that seem to be coming from all over.
>
> **[4:26](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=266)** So let's see what we can learn about port 1104.
>
> **[4:31](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=271)** I did a search on port 1104, and here we can see some details.
>
> **[4:37](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=277)** Now we find that's indicative of a Trojan and Trojan behavior, so that's something I might want to look at a little further.
>
> **[4:46](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=286)** Now again, this is something when doing your investigation, sometimes it's not a clear indication of one thing or another, so you'll have to dig deeper.
>
> **[4:55](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=295)** Now going back to the packet capture, I'm just going to take a look at the capture as a whole.
>
> **[5:02](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=302)** And in this case, I'll go to Statistics and Protocol Hierarchy, and I see Real Time Transport Protocol.
>
> **[5:10](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=310)** I'm just going to close that and look at that and see.
>
> **[5:14](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=314)** Here we see RTP.
>
> **[5:15](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=315)** All right, well, let's take a look at Telephony and RTP, RTP Streams.
>
> **[5:24](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=324)** All right, now that's odd.
>
> **[5:26](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=326)** Now when you take a look at the duration in this case, there's no duration.
>
> **[5:33](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=333)** And this is odd because normally we would see the streams showing some duration, and there's nothing going on.
>
> **[5:40](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=340)** All right, we also want to take a look at the port.
>
> **[5:42](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=342)** Here is port 1104, but on the Source Port we see port 16464.
>
> **[5:50](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=350)** Well, let's take a look at what port 16464 can tell us.
>
> **[5:55](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=355)** And I did a search, and here we see that it is related to the ZeroAccess trojan.
>
> **[6:02](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=362)** So the next step would be to do a little bit more research on your end to find out what has happened and to prevent any further damage.
>
> **[6:12](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=372)** So in troubleshooting the network, we can use conversations and endpoints during our investigation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (4), [[Wireshark]] (2), [[Windows]] (1), [[Routing]] (1)
> **UI Navigation:** go to (9), open the (1)
> **Env Vars:** tcp (3), rtp (3), udp (2)
> **Ports:** port 1104 (4), port 16464 (2)
> **CLI Commands:** find (3)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)

#### [Creating a flow graph](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=0)** - [Instructor] While doing troubleshooting, there are a couple other tools within the [[Statistics]], one being a flow graph.
>
> **[0:07](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=7)** Now, a flow graph helps us take a look at the exchange of data.
>
> **[0:10](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=10)** We can visualize normal traffic along with possible issues with a connection.
>
> **[0:15](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=15)** But within the Statistics, there's also protocol-specific statistics that we can run as well.
>
> **[0:21](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=21)** Let's take a look.
>
> **[0:23](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=23)** I'm in smallFlows, and there's a lot going on on this.
>
> **[0:26](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=26)** So, this will give us something to look at, but with dropdown Statistics, we'll start with [[DHCP]].
>
> **[0:32](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=32)** And, as you can see, BOOTP statistics, which is the way it was referred to.
>
> **[0:36](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=36)** It's now just DHCP if you're doing a filter.
>
> **[0:39](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=39)** Now, open this up, and here you can see the different message types that are within this.
>
> **[0:45](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=45)** And this gives you the number of the packets in the count.
>
> **[0:48](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=48)** For example, if you're having clients complain that they're not getting an IP address, you might want to run this quickly just to see if, possibly, there are 700 discovers that are going out with no acknowledgements, then you know that they're not getting an IP address.
>
> **[1:04](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=64)** It could be that the DHCP pool is exhausted, but it will allow you at least to get a snapshot as to what's happening with the statistics at DHCP.
>
> **[1:15](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=75)** Another protocol that you can take a look at is DNS.
>
> **[1:19](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=79)** And I'll just open this up.
>
> **[1:21](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=81)** Now, DNS will give you some trouble every once in awhile, and this just, again, gives you a quick look at the total packets, the different types of query.
>
> **[1:30](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=90)** As you can see here, type A address, which is an IP version four address, and then the Service Stats.
>
> **[1:37](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=97)** And in this case, you see here the response time in seconds.
>
> **[1:40](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=100)** This is a really good thing for you when you do some baselining is to compare over time.
>
> **[1:46](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=106)** Is the response time getting slower?
>
> **[1:49](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=109)** They might complain they're not able to get onto the internet, or it's taking a long time.
>
> **[1:53](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=113)** It's possibly because the response time of DNS has slowed so much that it does seem like it's forever.
>
> **[2:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=120)** So that's, again, another quick snapshot that we can take a look at.
>
> **[2:04](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=124)** Another of the statistics is HTTP, and we can just take a look at.
>
> **[2:08](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=128)** There's a couple things.
>
> **[2:10](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=130)** I'll take a look at the Request Sequences and the Packet Counter.
>
> **[2:14](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=134)** First, we'll take a look here at the Request Sequences.
>
> **[2:17](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=137)** And here, you can see all of where the different requests went out, and that gives you a lot of information.
>
> **[2:26](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=146)** And you can filter if you want there, but also let's take a look at the HTTP Packet Counter.
>
> **[2:33](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=153)** This is a nice, quick view.
>
> **[2:35](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=155)** As you can see, the different types of status that you can get, 400 Client Error, 300 Redirection, and, of course, most of them should be a 200 Success.
>
> **[2:47](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=167)** So, that's a nice snapshot, again, if you are doing some troubleshooting, and you just want to see what's happening with HTTP.
>
> **[2:55](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=175)** Now, we'll take a look at the flow graph.
>
> **[2:57](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=177)** But first, let's zero in on a specific stream.
>
> **[3:01](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=181)** I'll just right-click and say, Follow the Stream, and I do want stream 16.
>
> **[3:11](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=191)** Alright, TCP stream 16.
>
> **[3:14](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=194)** As you see, we have a lot of issues on that stream.
>
> **[3:16](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=196)** And, certainly, we can visualize with the Intelligent Scrollbar over here, along with a huge number of black entries, but let's just take a look at the statistics.
>
> **[3:26](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=206)** And I'll drop this down, and what we want to do is go to Flow Graph.
>
> **[3:32](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=212)** All right, now, when you look at the flow graph, and I'll just pull this up here.
>
> **[3:37](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=217)** In the Time, there isn't a timestamp on here, but once I limit it to the display filter, you will see a timestamp, and so I'll select this.
>
> **[3:45](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=225)** Now, as you can see, you can tell a lot about what has happened during this capture, and now I'm going to limit to display filter, and that will just narrow our scope.
>
> **[3:57](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=237)** Now, when you take a look over here, you can see the time of transmission as it's evolved, and then also across the top, you'll see the IP address of the two end points.
>
> **[4:08](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=248)** Now, when we just walked through this, and if you see that this is a normal request, the client going to the server asking to start a connection with the SYN packet.
>
> **[4:18](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=258)** The server responding back with a SYN ACK, and then the client with the final acknowledgement, the begin the connection.
>
> **[4:25](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=265)** And then, after that, you see the exchange of data.
>
> **[4:27](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=267)** And over here, you can see the comments as to what has transpired.
>
> **[4:31](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=271)** But then, you see there might have been some issues in the transmission.
>
> **[4:35](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=275)** And, in this case, we see there is some issues.
>
> **[4:39](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=279)** Now, if you click on it, and you see in the background that it is lighting up because it's going to refer to that packet when I click on it.
>
> **[4:46](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=286)** Now, in addition to us taking a visual of this, we can do another thing.
>
> **[4:51](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=291)** We can save this.
>
> **[4:52](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=292)** So if, for example, you wanted to just grab this as a screenshot to send as a report, I can say, Save As, and you can save it in a number of different things.
>
> **[5:03](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=303)** As you can see, a PNG, bitmap, JPEG.
>
> **[5:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=306)** I am going to just save it as a PNG.
>
> **[5:10](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=310)** And I'll just say, Issue in Stream 16.
>
> **[5:19](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=319)** And we'll save that.
>
> **[5:20](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=320)** So, that is actually going to be an image, but it will only be this specific image and no more.
>
> **[5:26](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=326)** But if you want more, you would save it as a text file.
>
> **[5:30](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=330)** So, drop this down and save it as a text file, and then that will grab the whole stream.
>
> **[5:35](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=335)** So, we could say Save, and then you can send it off for analysis.
>
> **[5:40](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=340)** So, as you can see, within Statistics, there are a number of other different tools, including protocol-specific statistics, and also we can run a flow graph.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (10), [[DHCP]] (4)
> **Env Vars:** dhcp (4), dns (3), http (3), syn (2), png (2)
> **UI Navigation:** click on (2), dropdown (1), right-click (1), go to (1)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** for example (2)
> **Code Identifiers:** smallflows (1)
> **Speakers:** - [instructor] (1)

#### [Plotting an IO graph](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=0)** - [Narrator] Another tool that we can use is an IO graph.
>
> **[0:03](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=3)** And this'll help us to compare characteristics in a capture file.
>
> **[0:07](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=7)** Now I've opened up this packet capture and within it, there are several things that are going on.
>
> **[0:12](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=12)** I'll go through and show you how to do an IO graph.
>
> **[0:15](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=15)** And then I'll have you do one in the form of a challenge.
>
> **[0:18](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=18)** So when taking a look at this, I'll scroll up and down and we can see the intelligent scroll bar is telling us there are multiple issues.
>
> **[0:27](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=27)** So we'll click on this dark area here and we can see out of order, duplicate acknowledgement and fast retransmissions.
>
> **[0:35](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=35)** So now let's take a look at the IO graph.
>
> **[0:37](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=37)** We'll go to [[Statistics]] and IO Graph.
>
> **[0:41](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=41)** And when we open it, you'll see that there are All Packets and generally that's there as default.
>
> **[0:47](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=47)** And what that is is all the packets in the capture.
>
> **[0:51](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=51)** Now, when you take a look at the column headers, enabled means whether you want this to show or not.
>
> **[0:57](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=57)** If it's unchecked, it won't show.
>
> **[0:58](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=58)** The graph name, All Packets, but we can change that by just double-clicking that.
>
> **[1:03](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=63)** The same goes with the display filter.
>
> **[1:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=66)** And again, you can change that.
>
> **[1:07](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=67)** The color is what color you want that line to show up.
>
> **[1:11](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=71)** And I can change that to a dark blue.
>
> **[1:15](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=75)** This is the style.
>
> **[1:16](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=76)** Now just drop this down.
>
> **[1:18](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=78)** It's a line right now, but perhaps I'd like to make it a bar.
>
> **[1:24](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=84)** Or I can actually do something, in addition, we can make it a square and I'd have to go back.
>
> **[1:31](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=91)** We'll change it back to the line.
>
> **[1:33](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=93)** Now, the Y Axis, Y Field and Simple Moving Average, those are for advanced calculations.
>
> **[1:40](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=100)** And I'm going to just leave those at the default.
>
> **[1:44](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=104)** Down below here, you can see drags and zooms.
>
> **[1:47](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=107)** Drag is me just allowing me to move throughout this.
>
> **[1:51](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=111)** [[Zoom]] is when I want to zoom in, you select that and then lasso a certain area, and we'll pull this back to drag so that you can move this up and around.
>
> **[2:01](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=121)** Now, I'm going to just close this and we're going to find a filter.
>
> **[2:05](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=125)** We'll go down to the expert system.
>
> **[2:07](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=127)** And here we see a lot of different things that are happening.
>
> **[2:11](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=131)** Let's take a look at this one, suspected retransmission.
>
> **[2:15](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=135)** Now we know that there are 85 of these, but why don't we just do a filter on retransmissions?
>
> **[2:22](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=142)** Right-click and say Apply as a Filter, Selected.
>
> **[2:27](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=147)** And I'll close that.
>
> **[2:28](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=148)** Now, as you can see, it's up there in the display filter, which I can copy it, but I'll show you what happens when I go to the IO graphs.
>
> **[2:35](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=155)** Drop down Statistics and select IO Graphs.
>
> **[2:40](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=160)** And here you can see that it automatically populated that with the TCP data analysis retransmission.
>
> **[2:49](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=169)** Now the graph name, you can just rename it, "Retransmission."
>
> **[3:02](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=182)** And it is selected.
>
> **[3:03](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=183)** Again, you might want to change it to an impulse or something in order for it to stand out and change the color.
>
> **[3:13](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=193)** Let's close this and add one more.
>
> **[3:16](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=196)** I'll take that off and we'll go back to the expert system.
>
> **[3:20](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=200)** And in this case, let's take a look at the keep-alives.
>
> **[3:23](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=203)** The TCP keep-alive segment, there are 59 of those.
>
> **[3:27](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=207)** I'll right-click and Apply as a Filter.
>
> **[3:32](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=212)** Now again, this is already up there, so it should populate the IO graph.
>
> **[3:36](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=216)** We'll go to Statistics and IO Graph.
>
> **[3:41](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=221)** And as you can see, it has already populated that.
>
> **[3:47](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=227)** So we'll rename that, "Keep Alive."
>
> **[3:55](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=235)** And then we'll just change the color to this purple.
>
> **[4:01](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=241)** But so we want those two to just show, you can see how and where they are in relation to all of the other packets.
>
> **[4:08](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=248)** And we'll uncheck that.
>
> **[4:10](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=250)** And then we'll zoom in a little bit more,
>
> **[4:22](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=262)** so you can see the keep-alives that have occurred over time.
>
> **[4:26](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=266)** And again, if you're really not being able to see that that well, you can change that, so it's going to be a bar and then change the color so it's red and then say Okay.
>
> **[4:38](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=278)** And that will show up a little bit better.
>
> **[4:40](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=280)** So you can change those at any way possible.
>
> **[4:43](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=283)** But using an IO graph will help us to show overall traffic patterns and also to show where there's problems and issues that we can zero in and see in relationship to the other traffic and see what we need to look into.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (3), [[Zoom]] (3)
> **UI Navigation:** go to (3), right-click (2), scroll up (1), click on (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** tcp (2)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)

#### [Challenge: Using a Flow Graph](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-using-a-flow-graph?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-using-a-flow-graph?u=76281980&t=0)** - [Instructor] In this challenge, you'll create an I/O graph on smallFlows.pcap.
>
> **[0:11](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-using-a-flow-graph?u=76281980&t=11)** You'll want to create two I/O graphs, one that shows duplicate acknowledgments and one that shows retransmissions.
>
> **[0:19](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-using-a-flow-graph?u=76281980&t=19)** You'll also want to make the graph stand out, add a different color and style, and then [[Zoom]] in on an interesting area.
>
> **[0:29](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-using-a-flow-graph?u=76281980&t=29)** This challenge should take you about five minutes.
>
> **[0:31](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-using-a-flow-graph?u=76281980&t=31)** Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** smallflows (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Response: Using a Flow Graph](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-a-flow-graph?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-a-flow-graph?u=76281980&t=0)** - Okay. Let's take a look.
>
> **[0:08](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-a-flow-graph?u=76281980&t=8)** You were to create two IO graphs, one showing duplicate acknowledgments, and one showing retransmissions.
>
> **[0:16](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-a-flow-graph?u=76281980&t=16)** Then you were to make the graph stand out by adding a different color and style, and then [[Zoom]] in on an interesting area.
>
> **[0:23](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-a-flow-graph?u=76281980&t=23)** Well, first we're going to go into IO graphs and take a look.
>
> **[0:29](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-a-flow-graph?u=76281980&t=29)** We'll uncheck that, and now we'll want to just show all packets.
>
> **[0:34](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-a-flow-graph?u=76281980&t=34)** So we'll close that.
>
> **[0:35](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-a-flow-graph?u=76281980&t=35)** And then we'll go to the expert information and then I'll look for duplicate acknowledgments, duplicate acts, and we see that there are 143 of those.
>
> **[0:46](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-a-flow-graph?u=76281980&t=46)** So that's a good number.
>
> **[0:48](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-a-flow-graph?u=76281980&t=48)** I'll say, apply as a filter selected and then I'll close that.
>
> **[0:53](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-a-flow-graph?u=76281980&t=53)** Well, we won't need to copy it because it will already be available in the IO graph, but let's take a look.
>
> **[1:01](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-a-flow-graph?u=76281980&t=61)** We'll go to the IO graph and here it says filtered packets.
>
> **[1:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-a-flow-graph?u=76281980&t=66)** We'll give it a little bit more room and then we'll call it duplicate acts.
>
> **[1:22](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-a-flow-graph?u=76281980&t=82)** And then, we'll give it a nice color And then we'll make it a bar.
>
> **[1:29](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-a-flow-graph?u=76281980&t=89)** And then I'll close that, we'll clear the filter.
>
> **[1:34](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-a-flow-graph?u=76281980&t=94)** And then we'll look for retransmissions.
>
> **[1:36](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-a-flow-graph?u=76281980&t=96)** Again, go to expert system and we'll go into this frame as the suspected retransmission.
>
> **[1:44](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-a-flow-graph?u=76281980&t=104)** And as you see, there are 119 of these and I'll say selected We'll again go into the IO graph.
>
> **[1:56](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-a-flow-graph?u=76281980&t=116)** And instead of the filtered packets, what it says, I'm going to type retransmissions,
>
> **[2:09](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-a-flow-graph?u=76281980&t=129)** We'll add a different color.
>
> **[2:15](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-a-flow-graph?u=76281980&t=135)** And we'll keep it at line.
>
> **[2:17](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-a-flow-graph?u=76281980&t=137)** So we can see those two.
>
> **[2:19](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-a-flow-graph?u=76281980&t=139)** I'm going to uncheck all packets and then I'll drag it over and then we'll zoom it in.
>
> **[2:27](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-a-flow-graph?u=76281980&t=147)** There's an interesting area here, select zoom.
>
> **[2:33](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-a-flow-graph?u=76281980&t=153)** And now we've zoomed in on an interesting area.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Zoom]] (3)
> **UI Navigation:** go to (3)
> **CLI Commands:** make (2)
> **Speakers:** - okay (1)
> **Non-Speech:** (upbeat music) (1)


### Recognizing Abnormal or Malicious Traffic

[↑ Back to Table of Contents](#table-of-contents)

#### [Troubleshooting the Network](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=0)** - [Instructor] When troubleshooting the network, there are several steps that you should take in order to solve the problem.
>
> **[0:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=6)** We'll talk about that, then we'll talk about some best practices to prepare for failure, and then we'll talk about baselining your network.
>
> **[0:14](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=14)** I'm at this website, [cisco.com](https://cisco.com).
>
> **[0:16](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=16)** If you'd like to follow along, you can reference this document.
>
> **[0:21](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=21)** When troubleshooting the network, one of the first things that you'll want to do is describe the issue.
>
> **[0:26](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=26)** What exactly happened?
>
> **[0:28](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=28)** Try to get input from whomever is closest to the problem and narrow the scope.
>
> **[0:33](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=33)** Gather the information on as to what has happened, where it happened.
>
> **[0:37](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=37)** Try to isolate the problems in a smaller sense.
>
> **[0:40](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=40)** Then you'll want to consider what possibly could have caused the problem.
>
> **[0:44](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=44)** Sometimes it's very evident and sometimes it's not, and you'll also want to involve your team.
>
> **[0:50](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=50)** Outline a plan as to how you're going to solve a problem.
>
> **[0:54](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=54)** Be careful.
>
> **[0:55](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=55)** Don't make any configuration changes without fully documenting the network before you make the change 'cause you might have to roll back.
>
> **[1:02](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=62)** Go ahead and implement the plan, but then test the implementation.
>
> **[1:05](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=65)** Did it work?
>
> **[1:07](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=67)** Afterwards, document the results, and if it wasn't resolved, repeat the steps.
>
> **[1:14](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=74)** No one wants to have a failure, but you should prepare for failure by doing the following.
>
> **[1:19](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=79)** You should have a physical and logical map of the network handy so that you can refer to it.
>
> **[1:24](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=84)** You'll also want to have a list of all protocols that are used on the network.
>
> **[1:28](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=88)** Know how the traffic is switched and routed, and then you'll want to make sure you describe all points of contact from the internal to external network.
>
> **[1:37](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=97)** A lot of that will be in your logical map, and then you want to have an established baseline.
>
> **[1:42](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=102)** You can't really tell if your network is sick unless you know what it looks like when it was healthy.
>
> **[1:48](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=108)** For a baseline, you'll go through the following.
>
> **[1:51](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=111)** You'll want to plan how you're going to do the baseline.
>
> **[1:54](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=114)** Then you're going to capture, and we'll talk about, well, how many packets do you want to capture?
>
> **[1:59](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=119)** You'll take a quick look and do an analysis and then you'll save it so you can reference it later.
>
> **[2:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=126)** So, as I said, the first step is to plan.
>
> **[2:09](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=129)** How are we going to go about this?
>
> **[2:10](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=130)** Now networks today are complicated and you could literally have hundreds of sub networks.
>
> **[2:16](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=136)** It's a long exercise, but it's well worth it, if you have something to fall back on to compare.
>
> **[2:21](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=141)** For example, by sub network, by building and time of day, and you want to document that and have a plan so you can go through this exercise consistently.
>
> **[2:31](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=151)** Then you'll want to capture the traffic.
>
> **[2:33](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=153)** Now when you're capturing, I generally make a limit of 1000 packets.
>
> **[2:38](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=158)** You can do more, but 1000 packets, maybe 2000 packets, will give you a nice baseline.
>
> **[2:44](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=164)** It'll be consistent and you can then run through and do a number of those within a day.
>
> **[2:50](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=170)** So I've just selected the [[Wi-Fi|wifi]], and then I begin the capture.
>
> **[2:54](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=174)** There's no filter, then I watch the number.
>
> **[2:57](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=177)** Now you could also set that in your capture variables to stop capture after 1000 packets.
>
> **[3:04](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=184)** When you're done with the capture and you've gotten enough packets, you'll want to do a quick analysis.
>
> **[3:10](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=190)** Now what I do is generally go up to [[Statistics]] and then I look at the protocol hierarchy.
>
> **[3:15](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=195)** You can do a quick look to see if there's any protocols out of line or that shouldn't be on that sub network, and then once you're done with that, you could just simply close it.
>
> **[3:25](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=205)** One more thing I do is go to statistics in capture file properties.
>
> **[3:30](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=210)** Once you're in there, you'll see the [[Metadata]] of that capture is evident as far as the time it started, how long it lasted and a little bit about the interface [[Hardware]] and operating system.
>
> **[3:42](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=222)** But down below, you could put capture file comments, and maybe we'll put sub network 20.
>
> **[3:52](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=232)** You might want to put some more information as to what you saw, but of course, the time is already on there.
>
> **[3:57](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=237)** Now I also want to say save the comments and then close, and then we'll save this capture.
>
> **[4:04](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=244)** File, save as, but one more thing I'll need to do, because I put comments, I can't save it in a pcap format.
>
> **[4:13](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=253)** I have to save it in pcapng, and that way, I'll be able to preserve the comments, and now I've saved those comments and my baseline.
>
> **[4:24](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=264)** So I can refer back to that baseline while troubleshooting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (2), [[Wi-Fi|Wifi]] (1), [[Metadata]] (1), [[Hardware]] (1)
> **CLI Commands:** make (4)
> **URLs:** [cisco.com](https://cisco.com) (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Spotting an ARP Storm](https://www.linkedin.com/learning/wireshark-network-troubleshooting/spotting-an-arp-storm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/spotting-an-arp-storm?u=76281980&t=0)** - [Instructor] In this segment, we'll take a look at the signature of an ARP storm.
>
> **[0:04](https://www.linkedin.com/learning/wireshark-network-troubleshooting/spotting-an-arp-storm?u=76281980&t=4)** I'm here at CloudShark, and I'm going to download this packet capture.
>
> **[0:09](https://www.linkedin.com/learning/wireshark-network-troubleshooting/spotting-an-arp-storm?u=76281980&t=9)** We'll go to export, download file, and you can either export a new pcapng with CloudSharp comments and annotations if there are any, or I'm just going to download the original file.
>
> **[0:23](https://www.linkedin.com/learning/wireshark-network-troubleshooting/spotting-an-arp-storm?u=76281980&t=23)** And I'll open it in [[Wireshark]].
>
> **[0:26](https://www.linkedin.com/learning/wireshark-network-troubleshooting/spotting-an-arp-storm?u=76281980&t=26)** Once in Wireshark, we'll put a filter for ARP.
>
> **[0:33](https://www.linkedin.com/learning/wireshark-network-troubleshooting/spotting-an-arp-storm?u=76281980&t=33)** And as you can see, these are all ARP broadcasts.
>
> **[0:38](https://www.linkedin.com/learning/wireshark-network-troubleshooting/spotting-an-arp-storm?u=76281980&t=38)** I'll also create an IO graph.
>
> **[0:40](https://www.linkedin.com/learning/wireshark-network-troubleshooting/spotting-an-arp-storm?u=76281980&t=40)** Go to [[Statistics]] and IO graph.
>
> **[0:44](https://www.linkedin.com/learning/wireshark-network-troubleshooting/spotting-an-arp-storm?u=76281980&t=44)** It already assumes I'd like to filter on ARP.
>
> **[0:48](https://www.linkedin.com/learning/wireshark-network-troubleshooting/spotting-an-arp-storm?u=76281980&t=48)** We'll change the graph name to ARP.
>
> **[0:55](https://www.linkedin.com/learning/wireshark-network-troubleshooting/spotting-an-arp-storm?u=76281980&t=55)** And I'll change the color to something bright.
>
> **[0:59](https://www.linkedin.com/learning/wireshark-network-troubleshooting/spotting-an-arp-storm?u=76281980&t=59)** We'll also now change the interval to 100 milliseconds.
>
> **[1:03](https://www.linkedin.com/learning/wireshark-network-troubleshooting/spotting-an-arp-storm?u=76281980&t=63)** And as you can see, there's a lot of traffic.
>
> **[1:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/spotting-an-arp-storm?u=76281980&t=66)** An ARP storm, or ARP flood can degrade the network.
>
> **[1:10](https://www.linkedin.com/learning/wireshark-network-troubleshooting/spotting-an-arp-storm?u=76281980&t=70)** You really should investigate further.
>
> **[1:12](https://www.linkedin.com/learning/wireshark-network-troubleshooting/spotting-an-arp-storm?u=76281980&t=72)** Now, how can this happen?
>
> **[1:13](https://www.linkedin.com/learning/wireshark-network-troubleshooting/spotting-an-arp-storm?u=76281980&t=73)** Well, it could be the result of a [[Hardware]] misconfiguration, that's one way, but it can also be an attack that once launched will keep generating ARP broadcast packets.
>
> **[1:27](https://www.linkedin.com/learning/wireshark-network-troubleshooting/spotting-an-arp-storm?u=76281980&t=87)** There's one more thing.
>
> **[1:28](https://www.linkedin.com/learning/wireshark-network-troubleshooting/spotting-an-arp-storm?u=76281980&t=88)** ARP flooding could be the result of malware.
>
> **[1:35](https://www.linkedin.com/learning/wireshark-network-troubleshooting/spotting-an-arp-storm?u=76281980&t=95)** And I'm at this website, where you can read more on an ARP flood attack.
>
> **[1:39](https://www.linkedin.com/learning/wireshark-network-troubleshooting/spotting-an-arp-storm?u=76281980&t=99)** In an ARP flood attack, This will only affect a single sub network as an ARP broadcast doesn't travel pass the router.
>
> **[1:46](https://www.linkedin.com/learning/wireshark-network-troubleshooting/spotting-an-arp-storm?u=76281980&t=106)** However, an ARP storm or ARP flood will degrade the network and you really should investigate to stop this type of activity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (2), [[Statistics]] (1), [[Hardware]] (1)
> **Env Vars:** arp (14)
> **UI Navigation:** go to (2)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [Identifying bursty traffic](https://www.linkedin.com/learning/wireshark-network-troubleshooting/identifying-bursty-traffic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/identifying-bursty-traffic?u=76281980&t=0)** - [Instructor] Multicast traffic is either a one-to-many or many-to-many data transmission.
>
> **[0:07](https://www.linkedin.com/learning/wireshark-network-troubleshooting/identifying-bursty-traffic?u=76281980&t=7)** The range for multicast is between 224.0.0.0 to 239.255.255.255.
>
> **[0:17](https://www.linkedin.com/learning/wireshark-network-troubleshooting/identifying-bursty-traffic?u=76281980&t=17)** You'll see multicast traffic on your network, as it's used in a wide range of applications.
>
> **[0:24](https://www.linkedin.com/learning/wireshark-network-troubleshooting/identifying-bursty-traffic?u=76281980&t=24)** Multicast traffic doesn't always behave, and it may become bursty.
>
> **[0:28](https://www.linkedin.com/learning/wireshark-network-troubleshooting/identifying-bursty-traffic?u=76281980&t=28)** Bursty traffic can disrupt the flow of traffic.
>
> **[0:32](https://www.linkedin.com/learning/wireshark-network-troubleshooting/identifying-bursty-traffic?u=76281980&t=32)** What happens is, when traffic reaches a device, such as a switch or router, the buffers may be full or overwhelmed by the burst and can result in an output drop.
>
> **[0:44](https://www.linkedin.com/learning/wireshark-network-troubleshooting/identifying-bursty-traffic?u=76281980&t=44)** Common methods to deal with this are by policing or shaping the traffic.
>
> **[0:49](https://www.linkedin.com/learning/wireshark-network-troubleshooting/identifying-bursty-traffic?u=76281980&t=49)** While policing flattens the burst, as you see in this graphic, a better way to manage traffic is by shaping, which smooths the output, as we see in this graphic.
>
> **[1:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/identifying-bursty-traffic?u=76281980&t=60)** However, if the traffic is not properly policed or shaped, you will see bursty traffic.
>
> **[1:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/identifying-bursty-traffic?u=76281980&t=66)** Let's take a look.
>
> **[1:08](https://www.linkedin.com/learning/wireshark-network-troubleshooting/identifying-bursty-traffic?u=76281980&t=68)** I'm at this website, and we can download an example file by going here to click download, and then you'll want to extract it and open it in [[Wireshark]].
>
> **[1:19](https://www.linkedin.com/learning/wireshark-network-troubleshooting/identifying-bursty-traffic?u=76281980&t=79)** Now, as you can see, this is multicast traffic.
>
> **[1:23](https://www.linkedin.com/learning/wireshark-network-troubleshooting/identifying-bursty-traffic?u=76281980&t=83)** What we can do in Wireshark is go to [[Statistics]] and UDP multicast streams, and within this, we see a lot of buffer alarms.
>
> **[1:33](https://www.linkedin.com/learning/wireshark-network-troubleshooting/identifying-bursty-traffic?u=76281980&t=93)** Now, we can go to any of these and then create a filter.
>
> **[1:37](https://www.linkedin.com/learning/wireshark-network-troubleshooting/identifying-bursty-traffic?u=76281980&t=97)** I'll just select this one, 'cause there are a lot of buffer alarms that were set, and I'll right click and say apply as a filter.
>
> **[1:46](https://www.linkedin.com/learning/wireshark-network-troubleshooting/identifying-bursty-traffic?u=76281980&t=106)** Now I'll close that. Now I want to run an I/O graph.
>
> **[1:51](https://www.linkedin.com/learning/wireshark-network-troubleshooting/identifying-bursty-traffic?u=76281980&t=111)** We'll go to statistics and then I/O graph.
>
> **[1:56](https://www.linkedin.com/learning/wireshark-network-troubleshooting/identifying-bursty-traffic?u=76281980&t=116)** Wireshark already assumed I wanted to use this filter, but I'll rename the graph bursty traffic.
>
> **[2:14](https://www.linkedin.com/learning/wireshark-network-troubleshooting/identifying-bursty-traffic?u=76281980&t=134)** Then I'll change the color to something bright, and then I'll modify the interval to 100 milliseconds.
>
> **[2:22](https://www.linkedin.com/learning/wireshark-network-troubleshooting/identifying-bursty-traffic?u=76281980&t=142)** Now you can see that the traffic was going along, and then there was an output drop, as evidenced right here.
>
> **[2:29](https://www.linkedin.com/learning/wireshark-network-troubleshooting/identifying-bursty-traffic?u=76281980&t=149)** So even small bursts can temporarily disrupt the flow, for example, while you're gaming. so as a result, you need to take steps to prevent bursty traffic in order to keep the traffic moving.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (3), [[Statistics]] (2)
> **UI Navigation:** go to (3)
> **Versions:** 224.0.0 (1), 239.255.255 (1)
> **Analogies:** such as (1), for example (1)
> **Env Vars:** udp (1)
> **Speakers:** - [instructor] (1)

#### [Protecting from packet sniffing](https://www.linkedin.com/learning/wireshark-network-troubleshooting/protecting-from-packet-sniffing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/protecting-from-packet-sniffing?u=76281980&t=0)** - [Instructor] Part of keeping your network up and operational is keeping it secure.
>
> **[0:05](https://www.linkedin.com/learning/wireshark-network-troubleshooting/protecting-from-packet-sniffing?u=76281980&t=5)** The one thing we don't want to allow is packet sniffing on the network.
>
> **[0:09](https://www.linkedin.com/learning/wireshark-network-troubleshooting/protecting-from-packet-sniffing?u=76281980&t=9)** And packet sniffing should only be done by authorized individuals.
>
> **[0:14](https://www.linkedin.com/learning/wireshark-network-troubleshooting/protecting-from-packet-sniffing?u=76281980&t=14)** And the reason is it can expose sensitive information.
>
> **[0:18](https://www.linkedin.com/learning/wireshark-network-troubleshooting/protecting-from-packet-sniffing?u=76281980&t=18)** I'm going to take you to a browser and behind the scenes, when we look at [[Privacy]] and security.
>
> **[0:23](https://www.linkedin.com/learning/wireshark-network-troubleshooting/protecting-from-packet-sniffing?u=76281980&t=23)** One of the things that our browsers do, as long as we keep them updated, they try to protect us.
>
> **[0:29](https://www.linkedin.com/learning/wireshark-network-troubleshooting/protecting-from-packet-sniffing?u=76281980&t=29)** As you can see here in privacy and security, it tries to do things such as block social media trackers, or cross-site tracking cookies.
>
> **[0:39](https://www.linkedin.com/learning/wireshark-network-troubleshooting/protecting-from-packet-sniffing?u=76281980&t=39)** In addition, when you go to log into a site, it will warn you if the connection is not secure.
>
> **[0:45](https://www.linkedin.com/learning/wireshark-network-troubleshooting/protecting-from-packet-sniffing?u=76281980&t=45)** For example, I'm on [[Facebook]] and I were to click this and it says connection secure.
>
> **[0:50](https://www.linkedin.com/learning/wireshark-network-troubleshooting/protecting-from-packet-sniffing?u=76281980&t=50)** Now I know it's secure because the lock is there.
>
> **[0:53](https://www.linkedin.com/learning/wireshark-network-troubleshooting/protecting-from-packet-sniffing?u=76281980&t=53)** And I know that when I put my username and password, it will be encrypted by using transport layer security.
>
> **[1:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/protecting-from-packet-sniffing?u=76281980&t=60)** Now, what I'm going to do is go into an insecure site and I'll start a packet capture and I'll log in, and then we'll be able to see the username and password.
>
> **[1:10](https://www.linkedin.com/learning/wireshark-network-troubleshooting/protecting-from-packet-sniffing?u=76281980&t=70)** So I'll simply begin the capture.
>
> **[1:17](https://www.linkedin.com/learning/wireshark-network-troubleshooting/protecting-from-packet-sniffing?u=76281980&t=77)** Now, when I go to log in, it says this connection is not secure.
>
> **[1:31](https://www.linkedin.com/learning/wireshark-network-troubleshooting/protecting-from-packet-sniffing?u=76281980&t=91)** Then I'll put the password.
>
> **[1:32](https://www.linkedin.com/learning/wireshark-network-troubleshooting/protecting-from-packet-sniffing?u=76281980&t=92)** And again, it warns me it's not secure.
>
> **[1:43](https://www.linkedin.com/learning/wireshark-network-troubleshooting/protecting-from-packet-sniffing?u=76281980&t=103)** Now I'll stop the capture.
>
> **[1:46](https://www.linkedin.com/learning/wireshark-network-troubleshooting/protecting-from-packet-sniffing?u=76281980&t=106)** I'll put in the display filter HTTP, and on the information I'll look for POST.
>
> **[1:55](https://www.linkedin.com/learning/wireshark-network-troubleshooting/protecting-from-packet-sniffing?u=76281980&t=115)** Here I see it and I'll follow the stream.
>
> **[2:01](https://www.linkedin.com/learning/wireshark-network-troubleshooting/protecting-from-packet-sniffing?u=76281980&t=121)** And right here, we can see the username and the password.
>
> **[2:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/protecting-from-packet-sniffing?u=76281980&t=126)** So again, protect your information by using encryption and don't go to insecure sites and don't allow packet sniffing on your network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Privacy]] (2), [[Facebook]] (1)
> **UI Navigation:** go to (3)
> **Env Vars:** http (1), post (1)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [Examining Macof attacks](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=0)** - [Instructor] A Macof attack floods the MAC address table and overwhelms the switch with thousands of bogus entries.
>
> **[0:09](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=9)** In this segment, we'll talk about how a Macof attack works, examine the signature, and then discuss how to prevent this type of attack.
>
> **[0:19](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=19)** First, let's talk about what normally happens on a switch.
>
> **[0:24](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=24)** On a switch, there's what's called a switching or MAC address table.
>
> **[0:29](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=29)** You might also hear it called a CAM or content addressable memory table.
>
> **[0:34](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=34)** The table holds the pairings of MAC addresses and their associated switch ports, so it knows where to deliver the data.
>
> **[0:43](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=43)** This table can contain thousands of these pairings.
>
> **[0:47](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=47)** A Macof or MAC overflow attack will flood this table and overwhelm the switch with thousands of bogus entries.
>
> **[0:57](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=57)** At that point, the switch will simply act like a hub and allow all the traffic to flow out all the ports.
>
> **[1:05](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=65)** Next, let's take a look at launching a Macof attack in [[Kali Linux]].
>
> **[1:12](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=72)** I'm in Kali Linux now to demonstrate a Macof attack, first I'll open [[Wireshark]] as I want to do a quick capture so that you can see what happens on the backend during a Macof attack.
>
> **[1:26](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=86)** We'll go to Applications, Sniffing & Spoofing, wireshark.
>
> **[1:33](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=93)** And I'll move this over, and we'll select any, and I'll refresh the interfaces.
>
> **[1:39](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=99)** Now, once I launch the attack, pay attention up above because it will start to consume a huge amount of bandwidth.
>
> **[1:48](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=108)** I'll open a terminal.
>
> **[1:54](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=114)** Now I need to enter the password for root, and over here, I'll start the capture, and then I'll go back and begin the attack.
>
> **[2:09](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=129)** Now I'll stop by hitting Control + C, and take a look at the bandwidth up at the top.
>
> **[2:17](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=137)** We'll move this over.
>
> **[2:18](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=138)** So on the Wireshark side, we can see the Wireshark capture, and then within it, we see a bunch of bogus IP and MAC addresses that were sent out in order to spoof the switch and be confused.
>
> **[2:36](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=156)** Now that you understand how a Macof attack works, let's take a look at the signature.
>
> **[2:42](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=162)** For this example, we'll go to CloudShark, and I'm going to download the original file, and I'll open it in Wireshark.
>
> **[2:51](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=171)** So to download, go to Export, Download File, and then download the original file.
>
> **[2:58](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=178)** Now once we the file in Wireshark, we can see in the status bar that there are over 13,000 packets.
>
> **[3:08](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=188)** Now I'll take off the coloring rules so we can examine the capture.
>
> **[3:13](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=193)** Now, once in the file, we'll quickly scroll through.
>
> **[3:16](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=196)** And you can see that there are a number of different IP addresses.
>
> **[3:22](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=202)** To see all of the IP addresses, I ran a report.
>
> **[3:27](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=207)** I went to [[Statistics]], and then IP Version 4 Statistics, and then All Addresses.
>
> **[3:35](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=215)** Now, this took a while to load as there are a lot of packets, but here is the report.
>
> **[3:41](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=221)** Once in the report, you see that there are a number of different IP addresses.
>
> **[3:47](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=227)** Some of which aren't legal to use, such as multicast and private IP addresses, and many simply don't make sense.
>
> **[3:56](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=236)** So I'll close that.
>
> **[4:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=240)** In addition, you might also want to take a look at the expert information by clicking the yellow dot in the lower left-hand corner.
>
> **[4:11](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=251)** Now, once we get in here, we'll see chat, and I'll drop this down, and you can take a look here to see all of those chats that are the same.
>
> **[4:27](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=267)** This chat says Connection established request, and that means that SYN packets are sent and there are all those with those SYN packets sent out onto the network, but there are no connections.
>
> **[4:41](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=281)** So let's just confirm this.
>
> **[4:43](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=283)** I'll close this report, and then I'll go into frame 21 right there.
>
> **[4:49](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=289)** And I'm going to drop down the TCP header.
>
> **[4:52](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=292)** And we'll scroll up here.
>
> **[4:54](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=294)** Drop this down.
>
> **[4:55](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=295)** Now we're going to the flags, and we'll drop that down.
>
> **[4:58](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=298)** And here we see the SYN flag Set.
>
> **[5:01](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=301)** So let's apply a filter.
>
> **[5:03](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=303)** So Apply as Filter, Selected.
>
> **[5:08](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=308)** And we see that it's ran, and 100% of those packets are all SYN packets.
>
> **[5:15](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=315)** Now, we know that a SYN packet will occur in the first two packets of a three-way handshake, but are there any acknowledgements?
>
> **[5:24](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=324)** Well, let's take a look.
>
> **[5:25](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=325)** We're going to modify this filter.
>
> **[5:28](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=328)** I'll go into Acknowledgement, Not set, and what we'll do is Prepare as a Filter, Selected, and I'll change it to True.
>
> **[5:40](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=340)** And then we'll run this.
>
> **[5:45](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=345)** And as you can see, there are none, no connections were made.
>
> **[5:52](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=352)** So that's the signature of a Macof attack.
>
> **[5:57](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=357)** Now, a Macof attack will disrupt traffic.
>
> **[6:01](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=361)** However, the attack must continue to bombard the switch with those bogus entries in order to be successful, because once it stops, the timers will be reset and the switch will resort back to being a normal switch.
>
> **[6:15](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=375)** However, even a small disruption can bring the network down.
>
> **[6:20](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=380)** So you'll want to make sure you secure your switches by using port security to prevent this type of attack.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (6), [[Kali Linux]] (2), [[Statistics]] (2)
> **Env Vars:** mac (5), syn (5), cam (1), tcp (1)
> **UI Navigation:** go to (3), scroll up (1)
> **CLI Commands:** make (2)
> **Exercise Files:** download the (2)
> **Versions:** version 4 (1)
> **Tools:** terminal (1)
> **Definitions:** means that (1)

#### [Challenge: Identify a scanning signature](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-identify-a-scanning-signature?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-identify-a-scanning-signature?u=76281980&t=0)** - [Instructor] Let's do a challenge.
>
> **[0:07](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-identify-a-scanning-signature?u=76281980&t=7)** In this challenge, we'll evaluate a scanning signature using [[Wireshark]].
>
> **[0:13](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-identify-a-scanning-signature?u=76281980&t=13)** First, let's talk about why we don't want to allow any scanning to take place on our network.
>
> **[0:20](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-identify-a-scanning-signature?u=76281980&t=20)** While scanning a network is often considered a precursor to an attack as it involves probing a network to gather information about the devices, services, and vulnerabilities.
>
> **[0:33](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-identify-a-scanning-signature?u=76281980&t=33)** Attackers then use the results to identify potential entry points and weaknesses that they can exploit to launch further attacks.
>
> **[0:43](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-identify-a-scanning-signature?u=76281980&t=43)** So now let's set the scene.
>
> **[0:46](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-identify-a-scanning-signature?u=76281980&t=46)** It's 10 o'clock on a Saturday night, and the glow of monitors illuminates the network operation center.
>
> **[0:53](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-identify-a-scanning-signature?u=76281980&t=53)** The new night shift network administrator, Alex, works through completing his maintenance activities.
>
> **[1:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-identify-a-scanning-signature?u=76281980&t=60)** Suddenly a series of alarms cuts through the quiet atmosphere indicating potential intrusion activity.
>
> **[1:08](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-identify-a-scanning-signature?u=76281980&t=68)** Alex's heart races, as he quickly navigates through the [[Network Monitoring Tools]] to investigate further.
>
> **[1:16](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-identify-a-scanning-signature?u=76281980&t=76)** Now, here's your challenge.
>
> **[1:18](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-identify-a-scanning-signature?u=76281980&t=78)** Using your favorite [[Generative AI]] tool, you'll enter the following prompts and read through the information.
>
> **[1:26](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-identify-a-scanning-signature?u=76281980&t=86)** What are signs that someone is scanning the network?
>
> **[1:30](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-identify-a-scanning-signature?u=76281980&t=90)** How can you use Wireshark to see if someone is scanning the network?
>
> **[1:35](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-identify-a-scanning-signature?u=76281980&t=95)** Next, you'll go to the exercise folder and obtain the Wireshark [[Network Troubleshooting]] challenges and links document along with the file Nmap_Scan.pcapng, and then you'll answer the following.
>
> **[1:51](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-identify-a-scanning-signature?u=76281980&t=111)** You'll look for TCP SYN or TCP connect packets to various ports on multiple hosts.
>
> **[1:58](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-identify-a-scanning-signature?u=76281980&t=118)** Use column headers in Wireshark that would help identify scanning activity.
>
> **[2:04](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-identify-a-scanning-signature?u=76281980&t=124)** Look for multiple ARP requests and use the time display format to identify the timing patterns of network packets.
>
> **[2:14](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-identify-a-scanning-signature?u=76281980&t=134)** Now once you're sure there's a scan a play, you'll go back to the generative AI tool and prompt the following.
>
> **[2:21](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-identify-a-scanning-signature?u=76281980&t=141)** List ways to defend against scanning attacks.
>
> **[2:26](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-identify-a-scanning-signature?u=76281980&t=146)** This challenge should take you about 20 minutes. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (4), [[Generative AI]] (2), [[Network Monitoring Tools]] (1), [[Network Troubleshooting]] (1)
> **Env Vars:** tcp (2), syn (1), arp (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Identify a scanning signature](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=0)** - [Presenter] Okay, now let's check our work.
>
> **[0:08](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=8)** First you are to use your favorite gen AI tool and enter the following prompts.
>
> **[0:14](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=14)** What are signs that someone is scanning the network and how can you use [[Wireshark]] to see if someone is scanning the network?
>
> **[0:23](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=23)** And then you were to read through the information to get a feel as to what you should do next.
>
> **[0:29](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=29)** Next, you were to open Nmap_Scan.pcapng.
>
> **[0:34](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=34)** Now the first thing I wanted you to do is go to [[Statistics]] Protocol Hierarchy.
>
> **[0:41](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=41)** Now this is a nice first step because you can take a look at what protocols are out there, maybe to see if there's something that's unusual.
>
> **[0:50](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=50)** Now, within the protocol list, you see two SIP packets and I'll scroll right down here.
>
> **[0:56](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=56)** Now that's session initiation protocol.
>
> **[1:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=60)** Now this is unusual as the subnet you're on doesn't have any VoIP phones.
>
> **[1:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=66)** And I had you read an article to learn that SIP is a popular scanning target.
>
> **[1:12](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=72)** Now we'll close that.
>
> **[1:16](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=76)** Next, we learned that scanning tools often scan a range of ports sequentially or in a specific pattern.
>
> **[1:24](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=84)** Now, many times the scanner is just trying to connect with the host, but it doesn't complete the handshake.
>
> **[1:31](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=91)** So next, I wanted you to look for TCP SYN packets to various ports on multiple hosts.
>
> **[1:38](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=98)** And I wanted you to apply this filter, which I copied and pasted into the display filter.
>
> **[1:45](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=105)** And what that's going to show us is the TCP SYN flags are set and the TCP ACT flags are set.
>
> **[1:53](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=113)** And those are going to be all those attempted connections.
>
> **[1:58](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=118)** It's trying to connect to hosts to see who's out there and who would like to talk with me.
>
> **[2:04](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=124)** Now I'm going to close this.
>
> **[2:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=126)** And the next thing I wanted to do is show you how you can use column headers in Wireshark to help identify scanning activity.
>
> **[2:17](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=137)** So you were to go to frame 609.
>
> **[2:19](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=139)** So we go to 609 and go to packet.
>
> **[2:26](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=146)** And here, I'm at frame 609 and I'll drop down the TCP header and I'll pull this up.
>
> **[2:34](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=154)** And then you can see that we want to go Destination Port and we want to Apply as Column.
>
> **[2:41](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=161)** And this is nice because what you can do is you can actually sort this.
>
> **[2:46](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=166)** So I can sort to either high to low, low to high.
>
> **[2:51](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=171)** And you can actually see the ports it's trying to reach on the different hosts.
>
> **[2:57](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=177)** It's a single port and it's going out to all these different ports attempting to make a connection to see if there are any listening services.
>
> **[3:07](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=187)** Now we want to remove this, so we want to do something else.
>
> **[3:10](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=190)** So I'll right-click, take off Destination Port.
>
> **[3:14](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=194)** The next thing was that we learned how scanners might also use address resolution protocol to discover host on the network.
>
> **[3:24](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=204)** So what we're going to look for is ARP multiple requests.
>
> **[3:28](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=208)** So we'll use the following filter, ARP, A-R-P, and Enter.
>
> **[3:36](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=216)** Now we can sort these if we wanted just to see how many there are out there, and these are broadcast across the network.
>
> **[3:45](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=225)** And the next thing I want to do is to go to frame four.
>
> **[3:51](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=231)** And then I'm going to drop down the ARP header.
>
> **[3:54](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=234)** We'll just drop this down and I'll scroll up here.
>
> **[3:59](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=239)** And in this case, I want to use that Target IP address and apply as column.
>
> **[4:05](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=245)** So I right-click, Apply as Column, and I'll scroll down here.
>
> **[4:11](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=251)** And it is already sorted, but what you can see is it's just going through sequentially and trying to see who has that IP address so it can identify the hosts on the network.
>
> **[4:25](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=265)** And I'll remove that by right-clicking and remove Target IP address.
>
> **[4:31](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=271)** All right, I'm going to clear the filter here.
>
> **[4:33](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=273)** And the last thing I want to do is scanning takes place on a network.
>
> **[4:37](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=277)** It's generally really fast, and unless you want to be stealthy and then you would slow down the scans.
>
> **[4:44](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=284)** But in general, sometimes you just do a quick scan and I want to show you how we can use time to see how fast the scan is taking place.
>
> **[4:54](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=294)** Now in this case, you see the time, we really don't see just zeros because there's not enough precision.
>
> **[5:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=300)** I'm going to drop down View, Time Display Format.
>
> **[5:04](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=304)** And then down here, you see that it's set at Hundredths of a second.
>
> **[5:09](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=309)** So we'll go down a little bit farther down to Hundredths of a microsecond, right down here.
>
> **[5:16](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=316)** And then I'm going to just move over that column header so you can see how fast the scanning took place.
>
> **[5:26](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=326)** Now we'll go back and we're going to change that time display format back.
>
> **[5:30](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=330)** And we're going to go to Automatic.
>
> **[5:33](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=333)** And that's generally a good rule of thumb because it'll give you the best precision it can.
>
> **[5:38](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=338)** And if you wanted a more landscape, you can go to View, Time Display Format, and then just go down to Hundredths of a second and that will just, again, move that in a little bit further.
>
> **[5:49](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=349)** So now you're sure there is a scan at play.
>
> **[5:52](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=352)** And the last thing was to go back to your favorite gen AI tool and list ways to defend against scanning attacks and read through the information.
>
> **[6:08](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=368)** I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (2), [[Statistics]] (1)
> **Env Vars:** tcp (4), arp (3), sip (2), syn (2), act (1)
> **UI Navigation:** go to (7), right-click (2), scroll up (1), scroll down (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Best Practices:** rule of thumb (1)
> **Speakers:** - [presenter] (1)
> **Non-Speech:** (upbeat music) (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [What's next?](https://www.linkedin.com/learning/wireshark-network-troubleshooting/what-s-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/what-s-next?u=76281980&t=0)** - [Instructor] Thank you for watching.
>
> **[0:03](https://www.linkedin.com/learning/wireshark-network-troubleshooting/what-s-next?u=76281980&t=3)** In this course, we took a look at ways to evaluate the network for issues and how to get the most out of [[Wireshark]].
>
> **[0:11](https://www.linkedin.com/learning/wireshark-network-troubleshooting/what-s-next?u=76281980&t=11)** We saw how we can use time as a metric to see gaps in transmission and ways we can recognize abnormal or malicious traffic.
>
> **[0:21](https://www.linkedin.com/learning/wireshark-network-troubleshooting/what-s-next?u=76281980&t=21)** If you're interested in learning more, please check out the library where new courses are added all the time.
>
> **[0:28](https://www.linkedin.com/learning/wireshark-network-troubleshooting/what-s-next?u=76281980&t=28)** You might want to check out my Cisco [[Network Security]] series.
>
> **[0:32](https://www.linkedin.com/learning/wireshark-network-troubleshooting/what-s-next?u=76281980&t=32)** And if you're interested in learning more about security basics, check out my Foundations of IT Security series.
>
> **[0:40](https://www.linkedin.com/learning/wireshark-network-troubleshooting/what-s-next?u=76281980&t=40)** And any course in the [[Ethical Hacking]] series will be well worth your time.
>
> **[0:45](https://www.linkedin.com/learning/wireshark-network-troubleshooting/what-s-next?u=76281980&t=45)** For a complete list of courses, visit my author page.
>
> **[0:49](https://www.linkedin.com/learning/wireshark-network-troubleshooting/what-s-next?u=76281980&t=49)** Keep learning, and I hope to see you again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (1), [[Network Security]] (1), [[Ethical Hacking]] (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Lisa Bock]]

## Resources

- Exercise files available

## Skills Covered

- Network Troubleshooting
- Wireshark

## Path Context

### In [[Wireshark- Network Traffic Analysis]]
← [[Wireshark- Functionality]] | **3 of 5** | [[Wireshark- Malware and Forensics]] →

## Appears In

- [[Wireshark- Network Traffic Analysis]]

## Related Courses

_Courses sharing skills:_

- [[Wireshark- Functionality]] — Wireshark
- [[Wireshark Essential Training]] — Wireshark
- [[Wireshark- Malware and Forensics]] — Wireshark
- [[Learning Network Troubleshooting- Practical Network Diagnostics and Solutions]] — Network Troubleshooting

---

[↑ Back to top](#)