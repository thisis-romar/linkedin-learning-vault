---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: wireshark-essential-training
url: "https://www.linkedin.com/learning/wireshark-essential-training"
level: Intermediate
updated: 4/1/2025
learners: 28073
skills:
  - Wireshark
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQEJgVrQbGIxTQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1641577091047?e=2147483647&amp;v=beta&amp;t=H4XW_a_MTjke5u2uwFG_JbCVn5aaJfJeSbXybtFf3i0"
linkedin_topic: Cybersecurity
learning_paths:
  - '[Wireshark- Network Traffic Analysis](../../Paths/Cybersecurity/Learning%20Paths/Wireshark-%20Network%20Traffic%20Analysis.md)'
next_courses:
  - '[Wireshark- Functionality](Wireshark-%20Functionality.md)'
path_nav: '[{"path":"Wireshark- Network Traffic Analysis","position":1,"total":5,"prev":null,"next":"Wireshark- Functionality"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/wireshark
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Wireshark%20Essential%20Training.md)

![Wireshark Essential Training](https://media.licdn.com/dms/image/v2/C4D0DAQEJgVrQbGIxTQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1641577091047?e=2147483647&amp;v=beta&amp;t=H4XW_a_MTjke5u2uwFG_JbCVn5aaJfJeSbXybtFf3i0)

# Wireshark Essential Training

> Are you interested in learning about packet analysis, or understanding and identifying the traffic on your network? This course gives you a solid overview of deep packet inspection via Wireshark Next Generation. Instructor Lisa Bock helps you navigate the many features of Wireshark. Lisa begins with the benefits of traffic analysis and discusses how to tap into the data stream effectively. She sho

> [LinkedIn Learning](https://www.linkedin.com/learning/wireshark-essential-training) | Intermediate | 28K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Appreciating traffic analysis](#appreciating-traffic-analysis)
  - [What you need to know](#what-you-need-to-know)
  - [Challenges](#challenges)
  - [Disclaimer](#disclaimer)
- [**1. Traffic Capture Overview**](#1-traffic-capture-overview) (5 videos)
  - [Benefits of traffic analysis](#benefits-of-traffic-analysis)
  - [Installing Wireshark](#installing-wireshark)
  - [Explore the Wireshark interface](#explore-the-wireshark-interface)
  - [Getting help](#getting-help)
  - [Tap into the data stream](#tap-into-the-data-stream)
- [**2. Getting Started with Wireshark**](#2-getting-started-with-wireshark) (6 videos)
  - [Using display and capture filters](#using-display-and-capture-filters)
  - [Discovering shortcuts](#discovering-shortcuts)
  - [Grasping the OSI model](#grasping-the-osi-model)
  - [Generating a frame](#generating-a-frame)
  - [Challenge: Recognize the Wireshark interface](#challenge-recognize-the-wireshark-interface)
  - [Solution: Recognize the Wireshark interface](#solution-recognize-the-wireshark-interface)
- [**3. Examining the Internet Suite**](#3-examining-the-internet-suite) (11 videos)
  - [Understanding the TCP-IP suite](#understanding-the-tcp-ip-suite)
  - [Explaining Transmission Control Protocol](#explaining-transmission-control-protocol)
  - [Recognizing the TCP connection process](#recognizing-the-tcp-connection-process)
  - [Viewing the TCP handshake and teardown](#viewing-the-tcp-handshake-and-teardown)
  - [Breaking down User Datagram Protocol](#breaking-down-user-datagram-protocol)
  - [Outlining IPv4](#outlining-ipv4)
  - [Dissecting IPv6](#dissecting-ipv6)
  - [Comprehending ICMP](#comprehending-icmp)
  - [Discovering ICMPv6](#discovering-icmpv6)
  - [Challenge: Evaluating a pcap](#challenge-evaluating-a-pcap)
  - [Solution: Evaluating a pcap](#solution-evaluating-a-pcap)
- [**4. Deep Packet Analysis of Common Protocols**](#4-deep-packet-analysis-of-common-protocols) (7 videos)
  - [Dissecting DNS](#dissecting-dns)
  - [Exploring DHCP](#exploring-dhcp)
  - [Following an FTP transaction](#following-an-ftp-transaction)
  - [Using HTTP](#using-http)
  - [Understand ARP](#understand-arp)
  - [Challenge: Examining a packet capture](#challenge-examining-a-packet-capture)
  - [Solution: Examining a packet capture](#solution-examining-a-packet-capture)
- [**5. Working with Packet Captures**](#5-working-with-packet-captures) (4 videos)
  - [The Wireshark expert system](#the-wireshark-expert-system)
  - [Network latency issues](#network-latency-issues)
  - [Subset, save, and export](#subset-save-and-export)
  - [Using Cloudshark](#using-cloudshark)
- [**Conclusion**](#conclusion) (1 videos)
  - [What's next?](#whats-next)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Appreciating traffic analysis](https://www.linkedin.com/learning/wireshark-essential-training/appreciating-traffic-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/wireshark-essential-training/appreciating-traffic-analysis?u=76281980&t=1)** - [Lisa] Did you know that being able to understand what's on the network is considered a superpower? It's true. Packet analysis helps you to understand the traffic on your network so you can identify latency issues and actively monitor the network for attacks. In this course, I'll provide an overview and benefits of traffic capture. I'll cover how to download and install on a PC or a Mac. Then we'll explore the [Wireshark](../../Skills/Cybersecurity/Wireshark.md) interface. I'll cover how to tap into the data stream and use display and capture filters. I'll review the OSI model and encapsulation. Then we'll do a deep packet analysis of common protocols, such as TCP, IP and DNS. I'll finish with working with the expert system and how to troubleshoot network latency issues. Hello, my name is Lisa Bock and I'm a security ambassador. I'm super excited to bring you this course on Wireshark so that you can improve your skills in packet analysis. Are you ready? Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (2)
> **Env Vars:** osi (1), tcp (1), dns (1)
> **Analogies:** such as (1)
> **Warnings:** troubleshoot (1)
> **Prerequisites:** install (1)
> **Speakers:** - [lisa] (1)

#### [What you need to know](https://www.linkedin.com/learning/wireshark-essential-training/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/what-you-need-to-know?u=76281980&t=0)** - [Instructor] [Wireshark](../../Skills/Cybersecurity/Wireshark.md) Essential Training is an intermediate-level course for network administrators, students, teachers, and anyone with an interest in learning about packet analysis and the importance of understanding and identifying the traffic on your network to troubleshoot, identify latency issues, and actively identify network attacks. We'll use Wireshark, a free protocol analysis tool, and we'll use precaptured files from online repositories. I'll be walking you through the basics, so no previous experience with Wireshark is necessary. We'll examine packet captures and understand the field values of the protocol as to what is considered normal behavior. A high-level knowledge of networking technology will clarify some of the concepts discussed in this course. However, if you have a basic understanding of networking terms and concepts, and an interest in the subject, you should be able to easily follow along with the lessons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (3)
> **Definitions:** is an  (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### [Challenges](https://www.linkedin.com/learning/wireshark-essential-training/challenges-13887381?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/challenges-13887381?u=76281980&t=0)** - [Narrator] Throughout the course, you're going to run into a few movies labeled "Challenges." Challenges are hands on opportunity for you to practice and master what you've learned throughout this course. At the beginning of each challenge, I'll give you a clear set of objectives. If there are any sample files, I'll show you where to find those. And I'll give you a rough estimate of how long each challenge took me to complete as well. Once you complete the challenge, come back and watch the solutions video. In the solution video, I'll show you how I completed the challenge, and I'll give you some insight on my thought process along the way. Challenges are opportunities for you to practice what you're learning as we progress through this course, but there's also a chance for you to have some fun as well. So be sure to try them out. So that you can follow along, be sure to grab the file that contains all the links to this course. You'll find that in other files, in the exercise files on the overview page of this course.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [narrator] (1)

#### [Disclaimer](https://www.linkedin.com/learning/wireshark-essential-training/disclaimer?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/disclaimer?u=76281980&t=0)** - [Narrator] [Wireshark](../../Skills/Cybersecurity/Wireshark.md) is a network analysis tool. Any active capture should only be used in an environment that you have full control, or on a network that you have written permission that specifically allows you to capture and analyze traffic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 1. Traffic Capture Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [Benefits of traffic analysis](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=0)** - [Lecturer] On today's networks there are many reasons for traffic analysis that include troubleshooting network problems, [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) and forensics, and to gain a better understanding of protocols. [Wireshark](../../Skills/Cybersecurity/Wireshark.md) is a powerful packet analysis tool where you can capture, display and filter traffic live from a network interface. Network administrators, developers, security analysts, students, and building automation control specialists can all benefit from using Wireshark. Network administrators have long used Wireshark to monitor network traffic. To resolve bottleneck issues and it can help to build you firewall rules. A new player with Wireshark are developers. Developers can benefit from understanding protocol and application behavior. They can see how the routines behave and see if the application works the was they anticipated. They can also determine if it's the application or the network that causing slow response times. Security professionals find that Wireshark is a valuable resource. For example, if they suspect malicious activity they can look at the conversations and see if there's a strange port number. They can then do a [Google](../../Glossary/Service/Google.md) search and determine what program uses that port and determine whether it's malicious or not. Using Wireshark can help students to better understand
>
> **[1:36](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=96)** many of the common protocols used on a network today. They can then study the behavior of the protocol. We'll all familiar with the four packet exchange in the [DHCP](../../Glossary/Standard/DHCP.md) process, but if we drop it into Wireshark we can actually see the exchange of the discover, offer, request and acknowledge. And then we can drill down in each individual packet to see what is happening. With the proliferation and expansion of smart buildings, control technicians will find packet analysis invaluable as they can monitor traffic used for building automation using BACnet or LonWorks. For example, we see here BACnet stack services and in this exchange the control technician might bring up a flow graph, and here we can make sure that we are communicating with the correct host. The technician can then possibly follow either a UDP or TCP stream to see if the correct commands are at play. Wireshark is a free protocol analysis tool. It's rich in features, and it's used to examine traffic either live from a wired or wireless connection or by using pre-captured packets. We can analyze network problems, detect network misuse, perform [Regulatory Compliance](../../Skills/Artificial%20Intelligence%20(AI)/Regulatory%20Compliance.md) through content monitoring the perimeter and end-point traffic.
>
> **[3:09](https://www.linkedin.com/learning/wireshark-essential-training/benefits-of-traffic-analysis?u=76281980&t=189)** We can monitor bandwidth usage per application and process. And we can verify [Endpoint Security](../../Skills/Network%20and%20System%20Administration/Endpoint%20Security.md) status to see if there are any unwanted protocols such as SSDP traffic and multicast DNS. And we can gather and report network [Statistics](../../Skills/Data%20Science/Statistics.md). In 2004 a colleague introduced me to Ethereal, now called Wireshark. I looked at the interface as it captured traffic and thought, I don't know what this is but I want to. I then spent years immersing myself in packet capture. Now let me help you learn Wireshark.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (10), [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (1), [Google](../../Glossary/Service/Google.md) (1), [DHCP](../../Glossary/Standard/DHCP.md) (1), [Regulatory Compliance](../../Skills/Artificial%20Intelligence%20(AI)/Regulatory%20Compliance.md) (1)
> **Env Vars:** dhcp (1), udp (1), tcp (1), ssdp (1), dns (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (2), such as (1)
> **Speakers:** - [lecturer] (1)

#### [Installing Wireshark](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=0)** - [Instructor] [Wireshark](../../Skills/Cybersecurity/Wireshark.md) is a powerful network protocol analyzer that allows users to capture and inspect network traffic in real time. In this segment, we'll cover how to choose the best option for your operating system, along with key choices you may encounter during a standard installation. When you're ready to download and install Wireshark, head on over to [wireshark.org](https://wireshark.org), where you'll see this screen, and then you'll select Download, which takes us to this section. Now first we see the Stable Release, which I have already selected and have already downloaded. Now, within this section, you'll see the [Windows](../../Glossary/Service/Windows.md) installer for 64-bit, but there's also one for Mac Operating System and others. Now what's important is that you should use the most recent release on your machine. Now why is that? Well, people submit bugs to the developers all the time, and then they do their best to fix as many issues as possible. So when you get an update, you'll get a release with certain functions that have been enhanced and also bugs that have been fixed. Now you can also select Old Stable Release, which, of course, is an older version, and then there's the Development Release. Scroll down where we can see the following,
>
> **[1:38](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=98)** More downloads and documentation can be found on the downloads page. I'll select that and open it in a new tab. Now once here, I'll scroll down. Now what's really great is that Wireshark can be installed on a number of different platforms, including Arch [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), Novell, Red Hat, and a lot of others. And why? Well, a lot of vendors are incorporating Wireshark right into their devices. We'll go back to the Home page, and on the bottom, you'll see the news about Stratoshark. Let's go there. I'm here at the Home page for Stratoshark. Now this is Wireshark for the cloud, and this is a powerful option as many companies are using cloud-based applications. Next, let's step through an installation. I have Wireshark ready to install, and you can follow along. Once you've given the appropriate permissions. It'll present you with this screen. We'll say Next. Now, this is the License Agreement. Now you can read it if you want, but I'll just say Noted. We'll go Next. Now, on this page, it tells you to choose the components, and what I do is generally accept the default
>
> **[3:12](https://www.linkedin.com/learning/wireshark-essential-training/installing-wireshark?u=76281980&t=192)** because it also includes TShark as well as Wireshark. Now, TShark is a lightweight command line interface program, where if you need to do a large capture, this might be the best choice. With TShark, you can do your capture and then bring it into Wireshark for analysis. And we'll go to Next. And here is where you can select your shortcuts if you like. And in some cases, you may be prompted to reboot. I'll go to the next page, and it tells us what directory to install Wireshark. And then we also want to make sure that we have Npcap installed. Now if you don't have Npcap, it will prompt you to install it. Otherwise, you won't be able to capture packets. And in addition, you may want to use the USBPcap. Now if you haven't already used this option, this is nice if you want to do some troubleshooting with your USB. Now, I'll say Next. I'm going to skip USB capture and then say Install. We'll say Next, and then I'll say Finish. Now, once you're done, you can bring up Wireshark, and then you'll see the spark lines, and then you can begin capturing traffic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (11), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **Prerequisites:** install (5)
> **UI Navigation:** scroll down (2), go to (2)
> **Definitions:** is a  (3), is an  (1)
> **Env Vars:** usb (2)
> **CLI Commands:** make (1)
> **URLs:** [wireshark.org](https://wireshark.org) (1)
> **Cross-References:** go back to (1)

#### [Explore the Wireshark interface](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=0)** - [Instructor] So now let's take a look at the [Wireshark](../../Skills/Cybersecurity/Wireshark.md) interface. Now, when you look at this next generation, you look at it, and it seems as if there's not as much going on. And yes, it is a streamlined interface, but there's pretty much everything you need in order to start capturing traffic. Now, up at the top, you still can see some of the different things as far as menu choices, and some of the icons are available. If they're dimmed out, it's simply because there's no packets to work with those icons, so they're not available. Here, you can put in a display filter in which, again, you can do, once the capture begins or with a pre-capture packet. And then down below, it says Open. Now, once you open a packet capture or save it, it will remain on that Open, and then you can take a look and quickly reference it. If you're like me, and you have maybe a dozen or so captures on there, and you want to refresh that, we can go up to File, and where it says Open Recent, you can clear the menu, and that will take it all off, and it will just be a blank area above. I like to keep it there, just as I said, to reference commonly-accessed packet captures. Now, down below is where you see the capture and some of the options. Now, what these are called are sparklines, and that lets us know that we have an active connection, and it's exchanging data. Below Capture, it says use this filter.
>
> **[1:35](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=95)** Now, you could put a capture filter in there. I usually don't because it limits you to only what you're filtering, and you miss everything else, but you could if you wanted to put a filter there. Now, what this says, All interfaces shown, if I wanted to perhaps take off External Capture, that'll take off the USBPcap, and I'll put that back on. Now, with the ethernet, we don't have anything going on. Of course, it is a wireless connection. But let's take a look at this USBPcap. Now, this is where you can see some of the devices. And I'll just go into USB Input Device, and here I'll select the mouse, and let's just start it. This might be good if you're doing some troubleshooting to see what exactly has happened during the connection. I'll stop that, and I'll close, and then we'll go back to our interface. Down below at the bottom is where you can learn about Wireshark, go to the wiki, and get some questions and answers. But just because it's on this doesn't mean you can't go into capture options like we have before. If you wanted to do a little bit more, go up to Capture and then Options. Now, once I'm in capture options, you see there are three tabs, Input, Output, and Options. Down below, we see Enable promiscuous mode on all interfaces, and of course, we want that selected. And here we can, again, use a capture filter.
>
> **[3:11](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=191)** But let's take a look at Output. Now, here, we can capture to a permanent file, and we ask, how would you like this? And the PCAP Next Generation is generally what I leave it as. But remember that Wireshark's only going to be putting it in a temporary file until you save it. Now, if you want to capture for any length of time, one thing you probably should do is drop it into a ring buffer. And this would occur right here, use a ring buffer after how many files. For example, if you're letting a capture run, and you put a specific coloring rule in order to look for something on the network, you could just keep dropping it into a ring buffer, and it will overwrite those files over and over again. Then we go to Options, and here we can see some of the display options and update list of packets in [Real-Time](../../Skills/Database%20Management/Real-Time.md), and I generally select that, and automatically scroll during life capture. Now, the name resolution, this is where it's going to do a resolution of one of the three things. Resolve the MAC address, it doesn't hurt to do that. That would give us the manufacturer's name. And that just simply comes from a file. Resolve transport names, I do that too because then it will tell us what application it thinks it's associated with. The resolve network names, I generally don't select that, and that's really because if I did select it, it would be hitting the DNS servers a lot, and it would cause a lot more traffic. And then down below, stop capture automatically
>
> **[4:45](https://www.linkedin.com/learning/wireshark-essential-training/explore-the-wireshark-interface-13892054?u=76281980&t=285)** after how much, you would say maybe after so many packets or how much of a capture you want, and you can then begin your capture. So the Wireshark interface looks a little different, but as we see, it does the same thing as Legacy and provides us everything we need in order to begin capturing packets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (4), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1)
> **Env Vars:** usb (1), pcap (1), mac (1), dns (1)
> **UI Navigation:** go to (2), select the (1)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Getting help](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=0)** - [Instructor] When using [Wireshark](../../Skills/Cybersecurity/Wireshark.md), you can access built-in help resources and official documentation to better understand all the features, filters, and network analysis tools. In this segment, we'll review the many ways to get help in Wireshark. That includes the Help menu, User Guide, and Questions and Answers. Let's start with the Wireshark interface, and from there we'll select the menu choice help. Now, if you select the user guide, this will bring up the user guide that is stored on your machine. Then we have the Manual pages or Man pages, and there are many choices. If you select any of these choices, that will bring up the user guide on your machine and go directly to the Man page on your selection. Now, there are other choices as well. For example, you might want to select Check for Updates to make sure you have the latest version of Wireshark, and About Wireshark, and that tells you all the behind the scenes information on Wireshark. Now, there's also Sample Captures. Let's go to this page. Here we see a capture repository. Now, this is where you can grab a capture on several different types of protocols. Next, let's take a look at what's available below.
>
> **[1:38](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=98)** Now, here under Learn, you can see some of the same information we saw in the Help menu Choice. Now all the choices are hyperlinks. Let's go to each of those and we'll start with the User Guide. Let's start with the User Guide, which takes us to the online User Guide. In addition, we can select Wiki. Now, this has valuable information about Wireshark, however, it isn't always updated. Now, if you go to Questions and Answers, here are users just like yourself that have questions. You can post a question to the community and people will respond. To interact with this page, you'll need to create an account. Here you can see the Mailing List and information about Wireshark. And here you can see a ton of information. Some of this is legacy information about Wireshark. You might also want to check out SharkFest, which is a Wireshark developer end user conference that has tons of information and the latest tools and techniques available for Wireshark. Wireshark also has a Discord page. And if you're able to, you might consider donating to the Wireshark Foundation. So when working in Wireshark, there are many ways
>
> **[3:12](https://www.linkedin.com/learning/wireshark-essential-training/getting-help-24575301?u=76281980&t=192)** to get help, including the Help menu, User Guide, and Questions and Answers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (14)
> **UI Navigation:** go to (3), select the (2)
> **Analogies:** for example (1), just like (1)
> **Prerequisites:** make sure you have (1), you'll need (1)
> **CLI Commands:** make (1)
> **Documentation:** man page (1)
> **Tools:** discord (1)
> **Definitions:** is a  (1)

#### [Tap into the data stream](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=0)** - [Instructor] Effective packet analysis begins with tapping into the network at the proper location to gather traffic for analysis. Tapping into the data stream and what you will see will depend on the network. In today's networks, there are two types of ethernet environments, shared or hub-based or on a switch. If you're on a wireless network, you'll go through an access point, which is acting like a hub where we can see all the traffic. If tapping into a wired network, you'll most likely go through a switch, and then you'll see only your own traffic. If you want to see all the traffic, we have choices. We can use port mirroring or SPAN, which is switched port analysis. We can also monitor directly on the device, as a lot of vendors are putting [Wireshark](../../Skills/Cybersecurity/Wireshark.md) right within their device so you can monitor the traffic in real time. You can also use a full-duplex tap in line with traffic, and you'll most likely need a special adapter. When you launch Wireshark, a welcome screen displays the list of available network connections on your current device. After you choose an interface and begin the capture, the interface gathers up network traffic. All packet analysis tools work in the same way. They gather the traffic, they decode it or break it down, and then display it in human-readable format. The first step is to gather the traffic.
>
> **[1:35](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=95)** And before you do this, you'll need the correct capture engine. For example, if you're using [Windows](../../Glossary/Service/Windows.md), you'll be prompted to use Npcap, and in [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), we use libpcap. If you don't have the correct capture engine, you won't be able to capture the traffic. Keep in mind that traffic enters the [network interface card](../../Glossary/Concept/NIC.md) one frame at a time. Packet analysis software converts those bits into readable form for analysis. The heart of this is where the decoding takes place. Wireshark was Ethereal before 2006, but the main core is still the same. The Ethereal packet analyzer or EPAN is the packet analyzing engine for Wireshark. Within EPAN, we see that it goes through various stages. The protocol tree, dissectors, any necessary dissector plugins, and any display filters. Wireshark and many other packet analysis tools provide options to enhance your graphical experience and will display the traffic in a readable format. I'm here with this packet capture, and let's take a look at the interface. When you see a capture, we see that it defaults with the three panels. The first panel is the packet list. The packet list pane is at the top of the window and it shows all the packets found in the active capture file.
>
> **[3:09](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=189)** Up at the top, we see columns, which we can modify. We can make them larger or make them smaller, and I can also add to those very easily by right clicking, and for example, if I would like to see Version. Now, keep in mind that everyone will have slightly different column headers and choices for column headers. It really depends on how you customize those headers. I could take that off by going back in and unchecking that. But I can also add a column value by going directly into a field value, and for example, I want to add total length, and it says Apply as a Column. And I'll take that off. Up here in the packet list, over on the right-hand side is called the intelligent scroll bar. Now, using the coloring roles, I can easily and quickly go to trouble spots. For example, I see this black area, and I'll just click on it and it will take me to the trouble spots. In the center are what's called the packet details, and this is where you can see all the protocols and the field values of those protocols as they're dissected. We can do the same thing, if we want to, and pop it out in a single window. Let's do this. I'll go up at the top and I'll double click frame 73. Now, if we take a look at this, this is helpful,
>
> **[4:43](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=283)** for example, if I wanted to display this up on a screen and in a training and we can go through each of those field values. Now, down below is the packet byte, and this is actually what we call the hex dump, and this is the raw data. It's in hexadecimal, but I could make it in bits. I can right click and say, Show as Bits. But there's a lot of information. So I'll go back in and Show bytes as hexadecimal. And when you're in here, if you click on a field value, you'll see that it's mirrored down below in the packet byte. Now, what you see is the default configuration and how it's presented to you. We can change that. We'll go to Edit and Preferences, and then to Layout. And here, we can see the default layout. But there's other choices. For example, I might want to check this one, and let's take a look at that. And as I said, we can easily go back and modify that to what the default is. And we'll say Okay. The last thing I generally do is I go in and I take off the packet byte. So go to View and Packet Byte. And this gives me a little bit more landscape when I'm doing the analysis. Effective packet analysis goes through several phases. First, we need to tap in at the correct location. Wireshark then gathers the traffic, but you'll need the correct capture engine in order to do this. Wireshark then decodes the packets
>
> **[6:17](https://www.linkedin.com/learning/wireshark-essential-training/tap-into-the-data-stream-13886505?u=76281980&t=377)** using Ethereal packet analysis, which is the core engine for Wireshark. It then displays the capture in a readable format for analysis.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (8), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1), [Network interface card](../../Glossary/Concept/NIC.md) (1)
> **Analogies:** for example (6)
> **UI Navigation:** go to (3), click on (2)
> **CLI Commands:** make (3)
> **Env Vars:** epan (2), span (1)
> **Warnings:** keep in mind (2)
> **Prerequisites:** you'll need (2)
> **Definitions:** is called (1)


### 2. Getting Started with Wireshark

[↑ Back to Table of Contents](#table-of-contents)

#### [Using display and capture filters](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=0)** - [Instructor] While you're working with [Wireshark](../../Skills/Cybersecurity/Wireshark.md), you can use capture and display filters. A capture filter is applied prior to capture and will only capture what you filter, nothing else. A display filter is used during an active capture or even on a precaptured packet. One important thing to know is that they are different. And also when you're working with display filters, there are shortcuts for those display filters where you can simply right click, and I'll do that during demonstrations and show you how to easily get and apply a filter. So let's take a look at the interface here. And I want to just show you one important thing, and why they're different is because this comes from the capture engine and the display filter is within the Wireshark and the dissectors and the decodes. So if I go up to the display filter, and well, say, for example, I want to just display ftp traffic. Now, I'll just type ftp, and it does come up with some choices, but if it just is ftp, I'll leave it at that. Now, while I was typing that, I think you notice something, it's red. Now, what happens in Wireshark is it's trying to help you. If it's red, it means it won't work. Green means it's good, and yellow means go ahead and try it. It might work, it might not work. The other thing is when I start typing,
>
> **[1:33](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=93)** if I were to type a capital FTP, it won't work. It never has, and it may work at some point, but at this point, a capital letter on the left-hand side won't work. Now I can type ftp and just select that, and I would be able to capture ftp data. But while I'm using it in a display filter, I'll also capture other types of traffic. All right, so I'll take that off, and I want to just show you something down below here. We'll say, for example, if I'm only interested in capturing ftp traffic, nothing else. All right, and let's just type ftp. Hmm, doesn't work. Well again, that's because they're different. Now, on this little green mark right here, let's just click on here. I just want to show you that there are some samples in here that you can use in order for you to create a capture filter. Now, if we look at the way it's structured, you can see that there are different protocols, different ports. What I'm going to show you is I'm going to type TCP. Still doesn't like it, so let's type tcp port 21.
>
> **[2:57](https://www.linkedin.com/learning/wireshark-essential-training/using-display-and-capture-filters-13888349?u=76281980&t=177)** Now, that's an ftp port. All right, so as you can see, I simply put port 21, which is associated with ftp. And now I'll go to an open ftp site just so we can see what we get when we capture that traffic. And I'll double click on my [wifi](../../Glossary/Standard/Wi-Fi.md) and begin capturing, and I'll select one of the captures. And in here, this is a huge capture filter, and then I'll stop that. All right, and so now you see, all I have is ftp traffic. The traffic is no longer coming in, and now we take a look. There's nothing else. So if I need to do some troubleshooting, let's see. I'll go to [Statistics](../../Skills/Data%20Science/Statistics.md) and a Flow Graph. There's the ftp traffic, nothing else. All right, now I'm going to close this, continue without saving, and I'm going to take that off so you really don't want to keep that capture filter on there because it's not going to do us any good because it will limit anything else I try to capture. Once you have cleared out the capture filter, you might also want to reboot just to get out any remaining filters in your interface so that that doesn't disrupt what you're going to do moving forward.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (3), [Wifi](../../Glossary/Standard/Wi-Fi.md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **UI Navigation:** click on (2), go to (2)
> **Ports:** port 21 (2)
> **Env Vars:** ftp (1), tcp (1)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Discovering shortcuts](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=1)** - [Instructor] So I want to open up a TCP example. And once I open this up, we'll just do a couple of things with the display filter. And this is where, again, you'll take a look at Apply the Display Filter. Now there's a lot of things that we can do as far as providing a display, and I'll just type TCP. And again, it's turning green, so that means it's okay. And we'll see a lot of traffic in there. But within [Wireshark](../../Skills/Cybersecurity/Wireshark.md), there's a lot of really nice shortcuts that I can do in order for me to create a filter. I'll go to this frame 17, which is ICMP, destination unreachable, port unreachable. Now, if you scroll up here and you drop this down, we see that it's the Type 3 destination unreachable, Code 3 port unreachable. Now, if I right click, I can do a shortcut, Prepares a Filter, Selected. When I say Prepares a Filter, that puts it up there. It doesn't run it, so I'll just put that up there. And as you see, ICMP code equals 3, and then press Enter. And there we can see a number of ICMP Code 3 here. And that's a nice little shortcut. Now I'll just close this, and it'll do the exact same thing, but this way, I'm going to right click. And this time, I'll say Apply as a Filter and say Selected. And that will actually just run it. Now I'll close out that and clear out the filter. And then you can do some other things as far as expressions,
>
> **[1:36](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=96)** and I'll just drop this down. So for example, if I wanted to just see if there are any other IP headers that are using this identification field at 24028, I'll right click and I'll apply as a filter. And we see one, well, okay. That really wouldn't be enough for me to take a look at. But what if I also want to say, take that IP header and also give me everything that's got Version 4, or IP Version 4. I'll right click, and here I say, Prepares a Filter, and here you have your Boolean operators, and Selected. I have that identification, which is 24028, and I also want any of those frames that are IP Version 4, and now, I press Enter. And so that is going to, again, give me that single packet there. So there's a lot of different shortcuts that you can use. And in addition, you can create an expression by going to Analyze, Display Filter Expression. You can build an expression, which again, you'd really know what it is you need to do. Now for any additional information on display or capture filters, I have a more comprehensive example if you go onto my [Wireshark- Malware and Forensics](Wireshark-%20Malware%20and%20Forensics.md). And there I go into a little bit more detail on display filters and capture filters. But I've given you just the highlights to show you that we can filter on many, many different field values
>
> **[3:12](https://www.linkedin.com/learning/wireshark-essential-training/discovering-shortcuts?u=76281980&t=192)** either by using a capture filter, which only limits us to whatever I filtered on, or better yet, use the display filter, allow the capture to occur, and display only the traffic you want to see.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (2)
> **Env Vars:** icmp (3), tcp (2)
> **Versions:** version 4 (3)
> **UI Navigation:** go to (1), scroll up (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Grasping the OSI model](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=0)** - [Instructor] In addition to understanding what the protocols do, a solid understanding of the OSI model and the encapsulation process is important to do effective packet analysis. The seven-layer OSI model standardizes the functions of [Data Transformation](../../Skills/Software%20Development/Data%20Transformation.md) by breaking it down into layers. And it outlines how that [network interface card](../../Glossary/Concept/NIC.md) encapsulates the data as it's prepared for transit on the network. I'll take a look at the OSI model at a high level. I'll review each layer, and I'll describe the main function. We'll talk about some common protocols in that layer and state the protocol data unit, which defines the shape of the data that it's in, in that layer. And we'll talk about any addresses that are needed, such as MAC address or IP address. Let's start with the Application Layer. Application Layer is Layer 7, and this is all about initiating contact with the network. Usually, a user who would initiate, perhaps getting a webpage. The protocols that are used are HTTP, FTP, or SMTP. The protocol data unit at this layer is simply data. Nothing magical has happened, it's just simply data. And there's no addresses that are needed. The Presentation Layer will take the next step. It will format the data.
>
> **[1:33](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=93)** It provides optional compression and encryption. And the protocol data unit at this point is simply data. Layer 5 is the Session Layer. This is all about initiating, maintaining, and tearing down a session. Again, the protocol data unit at this point is simply data. Now, when we go to the Transport Layer, this is where we start the encapsulation process. The Transport Layer is responsible for transporting data. Depending on how you need it transported, you might choose a connection-oriented protocol such as TCP or connectionless protocol such as UDP. The protocol data unit at this point is a segment. And at this point, we need a port address. We need the source and destination port address, which will logically associate with an appropriate application. Layer 3 is the Network Layer. This is all about the network. We provide addressing and [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md). And when we talk about the different protocols that are in this layer, we know, of course, there is IP; and, of course, we also need ICMP; but let's take a look at that protocol that I put right in between Layer 3 and Layer 2, which is Address Resolution Protocol. Now, Address Resolution Protocol is a unique protocol and that there is no IP header.
>
> **[3:07](https://www.linkedin.com/learning/wireshark-essential-training/grasping-the-osi-model?u=76281980&t=187)** And that's because it's where it needs to be. There's no routing involved, it's simply resolving an IP address to a MAC address. The protocol data unit at this point is a packet, and the address is an IP address. Layer 2 or the Data Link Layer is all about proper frame formation. The protocol is Ethernet II, which is the most widely used protocol on the [local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md). And the protocol data unit at this point is a frame. And the address is a MAC address. Now, it's all ready and packaged up, it's encapsulated with proper frame formation, and it has all the necessary addresses. It, then, is broken down into a stream of bits. So it's able to be transmitted on whatever media you need it to be transmitted on. There are no addresses and no protocols involved. Again, it's just sending it off on a stream of bits. So if you aren't already familiar with the OSI model, get a better understanding of each of the layers of the OSI model, what it does, the protocol data units, and the addressing. All in all, these skills will help you to analyze traffic better.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (2), [Data Transformation](../../Skills/Software%20Development/Data%20Transformation.md) (1), [Network interface card](../../Glossary/Concept/NIC.md) (1), [Local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md) (1)
> **Env Vars:** osi (5), mac (3), http (1), ftp (1), smtp (1)
> **Definitions:** is a  (5), is an  (1)
> **Analogies:** such as (3)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Generating a frame](https://www.linkedin.com/learning/wireshark-essential-training/generating-a-frame?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/generating-a-frame?u=76281980&t=0)** - [Instructor] Now that you understand the different layers, let's build out a frame. Now when frame formation occurs and the encapsulation process takes place, we start out with a stump of data. Well, the data might be a web request. The next thing that happens is we create a segment and that would either be your TCP or UDP header. And within that segment, we have the source and destination port address. The next part of encapsulation is adding the IP header. Now at the network layer, it's called a packet. And within that, we have a source and destination IP address. The last part of this frame formation is the frame header. And within that, of course, we have the MAC address. And with a frame, not only is there a header, we also have a trailer. That is the frame check sequence. This is to provide error detection on a network by creating a cyclic redundancy check value that the network will check as it's traveling along on its way. Now, if we look at that frame formation and the encapsulation process, we can relate it to how it's presented to us in [Wireshark](../../Skills/Cybersecurity/Wireshark.md). So take a look at this encapsulation and all the way at the top is, of course, your frame header. Frame is ethernet two and you see the source and destination MAC addresses within that frame header.
>
> **[1:33](https://www.linkedin.com/learning/wireshark-essential-training/generating-a-frame?u=76281980&t=93)** The next represents the network layer in the form of a packet. And there you see the IP header and of course, within that would be your source and destination IP address. Then we move to the transport layer where you see a segment and in this case, it's transmission control protocol. And there you have the source and destination ports. Tucked within that frame is the data. And here we see HTTP and it might be a web request. Keep in mind, not all frames have data this is an example of a fully encapsulated frame, just to show you how it relates in Wireshark to the OSI model. So it's important to understand the OSI model because the encapsulation process is evident in Wireshark and understanding each of the layers, the protocol data unit, and the addressing, will help you to analyze traffic better.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (3)
> **Env Vars:** mac (2), osi (2), tcp (1), udp (1), http (1)
> **Definitions:** is an  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Recognize the Wireshark interface](https://www.linkedin.com/learning/wireshark-essential-training/challenge-recognize-the-wireshark-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/challenge-recognize-the-wireshark-interface?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:06](https://www.linkedin.com/learning/wireshark-essential-training/challenge-recognize-the-wireshark-interface?u=76281980&t=6)** - [Instructor] Let's do a visual challenge so that you can follow along. The questions are in the exercise file that have all the links to the course. Question one. By default, [Wireshark](../../Skills/Cybersecurity/Wireshark.md) saves packets to a temporary file. To save files using a ring buffer, select A, edit, B, go, C, capture or D, tools. Question two. In frame 714, what represents the transport layer header? A, B or C? And question three. In frame 714, what represents the frame header? A, B or C? Check back to see the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### [Solution: Recognize the Wireshark interface](https://www.linkedin.com/learning/wireshark-essential-training/solution-recognize-the-wireshark-interface?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/solution-recognize-the-wireshark-interface?u=76281980&t=0)** (bouncy music)
>
> **[0:06](https://www.linkedin.com/learning/wireshark-essential-training/solution-recognize-the-wireshark-interface?u=76281980&t=6)** - [Narrator] All right, now let's check our work. For question number one, by default, [Wireshark](../../Skills/Cybersecurity/Wireshark.md) saves packets to a temporary file. To save files using a ring buffer, select C, capture. Question number two. In frame 714, what represents the transport layer header? B represents the transport layer header, where we can see TCP. Question number three. In 714, what represents the frame header? In frame 714, A represents the frame header. B is not the frame header, but [Metadata](../../Skills/Web%20Development/Metadata.md) about frame 714. Good job! I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (1), [Metadata](../../Skills/Web%20Development/Metadata.md) (1)
> **Env Vars:** tcp (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (bouncy music) (1)


### 3. Examining the Internet Suite

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding the TCP-IP suite](https://www.linkedin.com/learning/wireshark-essential-training/understanding-the-tcp-ip-suite-13887394?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/understanding-the-tcp-ip-suite-13887394?u=76281980&t=0)** - [Instructor] The TCP/IP suite or internet suite is a set of protocols that allows us to communicate and exchange data on the network. The suite defines how data is packetized, addressed, transmitted, and routed. The key protocols are TCP, UDP, IP, and ICMP. We see the TCP/IP suite residing here at the network and transport layer. At the network layer, the main players are IP and ICMP. IP or the Internet Protocol is the network layer protocol used for [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) the data from the source to the destination. IP is responsible for addressing and does not have any error reporting functions. For that, we use ICMP. This is used in addition to the Internet Protocol to carry error, routing and control messages, however, it does not exchange any data between systems. The transport layer provides data transport by using either TCP, which is a connection-oriented protocol or UDP, which is connectionless. You will hear that other protocols ride on top of the TCP/IP suite, and those would be protocols such as those in the application layer, HTTP, FTP, or SMTP. And we need to set, in our bindings,
>
> **[1:33](https://www.linkedin.com/learning/wireshark-essential-training/understanding-the-tcp-ip-suite-13887394?u=76281980&t=93)** the ability to use TCP/IP, as pictured here in this graphic. The TCP/IP suite or internet suite is a set of protocols that allows us to communicate and exchange data on the network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (2)
> **Env Vars:** tcp (7), icmp (3), udp (2), http (1), ftp (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Explaining Transmission Control Protocol](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=0)** - [Instructor] Transmission control protocol resides at layer four or the transport layer of the OSI model. Transmission control protocol provides connection oriented transport. TCP begins with a three-way handshake and data is sequenced and acknowledged. TCP supports windowing and flow control so as not to overwhelm the host. Here's the TCP header. And now we'll go into [Wireshark](../../Skills/Cybersecurity/Wireshark.md) and take a look at those field values. If you'd like to follow along, we'll go to cloudshark. I downloaded HTTP.cap and you can go to export and download file and bring it up in Wireshark. Now, once in Wireshark, what I did was I'll show you here, it starts out with the three panels. I go to view and take off packet bites. I want a little more landscape. Now we'll bring this up and go to Frame 4. Let's just take a look at our encapsulation. Frame 4 is simply [Metadata](../../Skills/Web%20Development/Metadata.md) about that frame. Here's the frame header, ethernet two, the network layer header IP, the transport layer header, TCP, and then the data HTTP. We're going to open up TCP. Now we can take a look, I'll float this on top, so you can refer to the TCP header. All right, first we see the source and destination port. The source port is 57678.
>
> **[1:34](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=94)** Now sent from the client, that's simply saying when you come back, send the data to 57678. The destination port is 80, which is associated with HTTP. Here, we see stream index zero. There are no field value stream index, that's a value calculated by Wireshark. This helps you to keep track of the many different streams in Wireshark and if we were to look at conversations, we could go to stream index zero or stream 14 or whatever you'd like. Here, we see TCP segment length 134. Now, where did that value come from? Well, I'll scroll down here and I'll place my cursor on the HTTP header and here you see 134 bytes. Again, that's just a number calculated in Wireshark. Now here we see the sequence number one, and it's a relative sequence number. What that means it's in relationship to this stream, sequence number one, it's not the actual value. If it were, it's a large number, let's take a look. I'll right click. And I'll go to protocol preferences. Now here we can uncheck relative sequence numbers. And as you see, it's a large number. It's really hard to calculate values with that large number so we'll go back to relative sequence number by going to protocol preferences,
>
> **[3:08](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=188)** and then we'll put relative sequence number back. For example, here it says next sequence number 135. Well, that's 134 plus one, and that's, what's calculated as what's coming next. Here, you see the acknowledgement number one and again, it's a relative acknowledgement number. And now here is the header length, 32 bytes. Normally a TCP header will be about 20 bytes. Now when we add options, that adds to the length. So let's take a look, I'll place my cursor up here at the TCP header and then down below, we see that the TCP header is 32 bytes.
>
> **[3:54](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=234)** And we'll scroll up here and let's take a look at the flag section. Now, there's a lot going on with the flags. When you're ready to go a little more advanced, you can find out about all the flags and why we keep track of those is certainly your devices are monitoring what's happening during the conversation. The flags tell the story about what's going on at that point in time. Now some common ones that you'll see of course, is the syn flag and that's going to synchronize the sequence numbers. We see acknowledgement and that's of course acknowledging the data push. And the fin flag is when the conversation is over we exchange fin packets. And reset is when it set, it means I don't want to talk to you and the conversation has reset or closed. So a lot goes on with flags and it would be good to get familiar with those as you advance, because it tells a lot about the story and it is used for a number of different reasons. Right now we'll go to window size. Now window size, it says 46, but then there's a value here in brackets, it says calculated window size, that's a larger number. Well that's because the actual value is pretty small. And in the eighties, the window size of 46 would maybe be normal. But as you see, there's a scaling factor of 128, which gives us the true value of 5888. That's so the server knows about how much data I can send to the host without overwhelming the host. It will update if the value goes up or down, for example,
>
> **[5:28](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=328)** if the host buffer were to get too full, the number would shrink. And as it processes the data, the number would then expand. Now we'll look at the check sum. It says unverified. Well, in a lot of cases, you'll find that we're not going to try to validate that check sum and here's why. Now take a look down below, there's a blue dot, cyan dot, and that's the expert system. Now, what is it saying is that it's just chats. Okay, so if this were to be calculated, this might be incorrect and I'll show you why. We'll go to protocol preferences. And here it says validate TCP checksum if possible, now I'll select that. And now you see it says it's incorrect and it should be this number. And as you see, there's a little note that says, TCP checksum offload, what happens is it offloads to the [NIC](../../Glossary/Concept/NIC.md) card and it comes up in correct. Down below, you see the red dot and the expert system and that's saying that there's possibly something wrong with this stream, but there isn't. So we'll go back and check that and replace that with validate the TCP checksum if possible, and that'll correct that. But if checksum is important to use because it's going from source to destination. Many things could happen. The checksum in the TCP header, monitors for error detection, not correction. Now we see the urgent pointer and then down below, then what follows as you see over here, is options and data. Well now here you see the options
>
> **[7:05](https://www.linkedin.com/learning/wireshark-essential-training/explaining-transmission-control-protocol?u=76281980&t=425)** and in this case, that options is 12 bytes. Now we know that it needs to be a multiple of four, so let's drop this down and see what's inside. Well, you see there's the timestamp option and that's 10 bites, but it has to be 12. So you see no ops, which are kind of placeholders so that it comes up to 12 bites. And then following that then, you see HTTP, which is the data. So that's the TCP header in Wireshark, and we've gone over all of the field values and hopefully you've got a little better understanding of TCP.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (7), cursor (2), [Metadata](../../Skills/Web%20Development/Metadata.md) (1), [NIC](../../Glossary/Concept/NIC.md) (1)
> **Env Vars:** tcp (16), http (5), osi (1), nic (1)
> **UI Navigation:** go to (8), scroll down (1), scroll up (1)
> **CLI Commands:** find (2)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Recognizing the TCP connection process](https://www.linkedin.com/learning/wireshark-essential-training/recognizing-the-tcp-connection-process?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/recognizing-the-tcp-connection-process?u=76281980&t=0)** - [Instructor] Transmission Control Protocol is a connection-oriented protocol. It begins with a three-way handshake and ends by terminating the session. A three-way handshake begins by the client sending a SYN packet to the server. That SYN packet synchronizes the sequence numbers. If the server accepts, it responds by a synchronization acknowledgement. The client then sends a final acknowledgement and then we have a connection. A socket is created and we can begin to exchange data. Periodically, services will be refused, and then you'll see a reset. No response may indicate a firewall. You may receive an ICMP destination unreachable packet, and a code might indicate the network was unreachable or the host was unreachable, but most likely the target port was firewalled. The host might try again with another SYN packet. The connection can be terminated in one of several ways. The connection can time out and will be closed or no password was sent, so the connection was reset, or we'll see an exchange of FIN packets and this indicates a normal termination. For a normal termination, we simply see an exchange of FIN and FIN-ACK packets from the client to the server and the server back to the client, and this will close the connection.

> [!info]- Semantic Content
>
> **Env Vars:** syn (3), fin (3), icmp (1), ack (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Viewing the TCP handshake and teardown](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=1)** - [Instructor] So let's step through, the handshake and termination. I'm here on CloudShark, and you can either follow along in CloudShark, or you can go to Export and download the file, and open it in [Wireshark](../../Skills/Cybersecurity/Wireshark.md). I've opened this capture in Wireshark, and it's almost a perfect example of a complete conversation. I'll scroll up so you can see that it's really a small capture. But let's take a look at the flow graph. We'll go to [Statistics](../../Skills/Data%20Science/Statistics.md). And we'll go to the Flow Graph. And there's no need to filter it because its entire conversation is simply with the client to the server. Now let's take a look at the top three packets. There's where you see your three-way handshake. And then down below we see an exchange of data, and then somewhere in the middle, you see quit and closing connection. So we now know it's time to terminate the session. And the last four packets are where we close the conversation. I'll close that. And now let's take a look at the three-way handshake. I'll scroll up here and give us a little more room where we can take a look at frame one. Let's just first start with frame one. Now when we look at frame one, we have a frame header, we have the IP header, and the TCP header. As you notice there's no data. There won't be any because it's just a handshake. No data is exchanged.
>
> **[1:34](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=94)** You can also see then, up here in the upper right-hand corner, length equals zero. So let's take a look at the TCP header. This indicates what's going on if we take a look at the flags, and I'll drop this down, and here you see the SYN flag set. Again, that's from the client to the server, trying to initiate a conversation. Now with that first packet, going from the client to the server, comes with it some options. If I place my cursor on the TCP header and then look down below the TCP header is 40 bytes. The TCP header is 20 bytes at least, but with options it's more, now at this point it's 40 bytes. But let's take a look at the options. Here's your options. And we'll drop this down and you can see, what it is, is the client communicating to the server what options would I like to agree upon. And so you understand, for example, the following. Client is seeing that the maximum segment size is 1,460 bytes. Also SACK is permitted and SACK is selective acknowledgment. Meaning keep sending the data, even if it's not in order, I'll put it in the correct order. Here we see timestamps and [Windows](../../Glossary/Service/Windows.md) scaling. Now keep in mind. It has to be a multiple of four. Now with each of these, and if you look down below, you can see the size of each of those options, window scaling is three bytes.
>
> **[3:07](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=187)** So we have to add a no op, which is essentially a placeholder, to bring that total up to 20 bytes. And then that with the TCP header gives us our 40 bytes. The server then responds with a SYN-ACK. And I'll scroll down here, and here you can see the acknowledgement flag and the SYN flag. Now keep in mind that SYN flag is set only on the first two packets of the three-way handshake. After that, you won't see it again in that conversation. Now we'll bring this up and take a look at the TCP header. And again, it's 40 bytes because the server is sending the server options. And as you can see, those are the following options the server sends to the client. Then we go to frame three and that's our final step in this. And let's take a look at the flags. Now we see that the acknowledgement flag is set, and that means the conversation is ready to begin. After this we can start to exchange data. And in this point, you can see the TCP header is dropped to 32 bytes because there are a few less options as you can see down below. Now we'll bring this back up, and now we'll take a look at the end of the conversation. Down below, we'll go to frame 12. And here's where you see the exchange of data
>
> **[4:41](https://www.linkedin.com/learning/wireshark-essential-training/viewing-the-tcp-handshake-and-teardown?u=76281980&t=281)** from the client to the server. Now here it's seeing an acknowledgement. And that acknowledgement is probably at the end of the conversation where the client is saying that it's acknowledging that it's received whatever data it's received from the server. The server responds with a FIN ACK saying, I'm pretty much done with everything. We can close this connection. Then the client then responds again with a FIN ACK, and then we see our final acknowledgement, and that will then close the connection and terminate the session. So as you can see, TCP is a connection oriented protocol where you will see a three-way handshake and a tear down of the session.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (2), [Statistics](../../Skills/Data%20Science/Statistics.md) (1), cursor (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **Env Vars:** tcp (9), syn (4), ack (3), sack (2), fin (2)
> **UI Navigation:** go to (5), scroll up (2), scroll down (1)
> **Warnings:** keep in mind (2)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Breaking down User Datagram Protocol](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=0)** - [Instructor] User Datagram Protocol is a connectionless protocol for data transfer. We see here in the OSI Model, UDP is in the transport layer. UDP is a lightweight protocol. It provides connectionless transport layer service, and there's no handshake or connection process. UDP doesn't have any ordering or reliability services, and there's no teardown. UDP is a lightweight protocol that's great for time-sensitive applications such as DNS, Voice over IP, [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) information protocol, or trivial file transfer protocol. Here we see the UDP Header. It's always eight bytes long, and it includes the Source Port, Destination Port, Length, and Checksum. Now, that Checksum is used for error detection, not correction. The UDP Checksum is optional with IP version four. However, it is mandatory with IP version six primarily because IP version six doesn't have a checksum. Now let's take a look at a UDP header. I'm at CloudShark, and if you'd like to follow along, you can download this file. I've opened it up in [Wireshark](../../Skills/Cybersecurity/Wireshark.md), and what I'll do up here is go to the Display filter and I'll type udp. So there are my DNS packets, and what we'll do is just take a look at the User Datagram Protocol.
>
> **[1:33](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=93)** I'll double-click and pop out this frame. And, again, this lightweight protocol only has four fields: the Source Port, the Destination Port, the Length, and the Checksum. Now, that's pretty much it for UDP. So while I'm in here, let's take a look at some other things in Wireshark. Let's go to [Statistics](../../Skills/Data%20Science/Statistics.md). If we go to Statistics, you can see there are a lot of choices, and for more advanced training, we will get into those. But for something really simple, let's just take a look at Capture File Properties. Now, when you open this, this tells us a summary about this file. Now, you can see the capture and what it knows about the [Hardware](../../Topics/Hardware.md), the operating system. Again, what it knows, it will put in there. Here you can see when this packet was captured, 2011, and some more information about the statistics. Now, down below here, in the next generation, we are able to put comments in the file. Now, this would be handy if we were to share this information with coworkers. So, for example, I might want to say, "Take a look at frame 29." And I'll just say Save Comments, and then we'll close it. Now, if you take a look up here, there is an asterisk that is right by the title. That is because it knows that there's a comment,
>
> **[3:09](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=189)** and you will want to save that so someone can reference it when they open it up. Well, we'll go back into Statistics again. I'll drop this down. And another handy tool is a Protocol Hierarchy. Now, this is helpful if you are taking a look at protocols that are traveling on your network and you might want to see if there's anything that shouldn't be on your network. So this is a simple capture, nothing's really standing out, but, again, it's a nice handy tool. I'll close that. Another thing is we talked about coloring rules. Now, they're there and in some cases, I do take them off because they're distracting. If you go up here under Telephony and just hit that one time, it takes the coloring rules off, and that is something that's reflective of the older versions of Wireshark and Ethereal, and sometimes I take it off 'cause it's somewhat distracting, but I'll put it back on. Now, there's another thing in Statistics that's interesting, and we've talked about some of the things with conversations and endpoints. We'll take a look at endpoints. Now, remember the endpoints are the two sides of the conversation. These are the endpoints. If we go into the Conversation, here you can see details about the conversations, and in this case we have minimal information. It's a very short capture. But if we go into the one conversation, and we have a little bit more detail here, I can right-click and I can say Apply as a Filter, and Selected,
>
> **[4:45](https://www.linkedin.com/learning/wireshark-essential-training/breaking-down-user-datagram-protocol?u=76281980&t=285)** and here you have choices, whether you want A to B, B to A, or both ways, and I'll say Close. And that puts that conversation filter right up there and it runs it for you so that you can see the whole stream. So, really, that's all there is about UDP, and, again, I wanted to share with you some other things found in Wireshark. So UDP is a connectionless protocol for data transfer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (5), [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (4), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1), [Hardware](../../Topics/Hardware.md) (1)
> **Env Vars:** udp (10), dns (2), osi (1)
> **Definitions:** is a  (6), is an  (1)
> **UI Navigation:** go to (3), double-click (1), right-click (1)
> **Cross-References:** in the next (1), we talked about (1)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [Outlining IPv4](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=0)** - [Instructor] The internet protocol resides at the network layer of the OSI model. For this segment, we'll focus on IP version four. The internet protocol is responsible for addressing and [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md). It's connectionless, meaning it's best effort. For example, if you were to send a letter general delivery, it will get there, but there's no guarantee. But we can provide quality of service to push the data along a little faster. Here's your IP version four header. And as you can see, we have several fields, and at the bottom, options and data. Let's take a look at an IP header. I'm in [Wireshark](../../Skills/Cybersecurity/Wireshark.md) and I've expanded one of the frames, and we'll take a look at that header. And on the right-hand side, you could follow along. All right, the first field is simply version. And in this case, it is version four. Not much there to show. This tells us the header length, and it is 20 bytes. And I can confirm if we go and place my cursor up on the top, and then look down below, that it is 20 bytes. This field value here is called differentiated services. That relates to what's called the type of service. Now keep in mind, zero is best effort. It's not prioritized, but in certain cases, we want the data to be prioritized and moved along a little faster. The total length is the header and any data that follows. And here we see 1340.
>
> **[1:36](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=96)** Now the next three fields relate to fragmentation. Those are identification, flags, and fragment offset. The specification stated that IP was responsible for addressing and fragmentation. Now that was a long time ago, but things have changed. We don't see fragmentation so much anymore. So those three fields you see, the first one is identification. So in the case of a fragmented packet, you see a number of different fragments. You'll need to identify them to put 'em all back together. Then there's the flags, and I'll drop this down. Now you see the first one is the reserved bit and that's not ever used. And the second one is don't fragment. And sometimes that's zero, but a lot of times it simply says, don't fragment me, don't break me apart. Now, if we were to fragment, in some cases you will, for example, if you're in a virtual environment, and you use jumbo frames. Well then, you go back out to the regular network and it's a lot smaller and you have to fragment. So in this case, you'd see more fragments and that bit would be set. And the last field value in that row is a fragment offset. And that identifier would help you to put back the fragments in the correct order, in the correct place. The next field is the time to live value. And that's essentially how many hops it takes around before it goes to the zero. And if it does go to zero, then it's no longer going to exist. The time to live value is in order to prevent the packets
>
> **[3:12](https://www.linkedin.com/learning/wireshark-essential-training/outlining-ipv4?u=76281980&t=192)** from going around and around and never getting to their final destination. Now this, you see the protocol TCP. That protocol field is what follows the IP header. And down below here, you see TCP. So that's what it identifies. And then you see the header checksum. And in this case, you see the validation is disabled, and we do disable the validation because sometimes it's offloaded and the checksum's incorrect. So it tells you what it is, but it is not checked. And then down below here, this is where you see your source and destination IP address. Then after that, you see any data that would follow. So that's the internet protocol version four. And when we take a look at IP version six, you'll see significant differences. And although the headers are significantly different, they both do the same thing. They provide addressing and routing on the network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (2), [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (1), cursor (1)
> **Env Vars:** tcp (2), osi (1)
> **Definitions:** is called (1), is a  (1)
> **Analogies:** for example (2)
> **Documentation:** specification (1)
> **UI Navigation:** go to (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** you'll need (1)

#### [Dissecting IPv6](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=0)** - [Instructor] Internet Protocol Version 6 has a larger address space, a streamlined header, and eliminates the need for IGMP and ARP. In this segment, we'll review the field values of the IPv6 header in [Wireshark](../../Skills/Cybersecurity/Wireshark.md). IPv6, like IPv4, resides at the Network Layer of the OSI model. First, let's talk about the features of IPv6. We'll start with the expanded address space. IPv4 has a 32-bit address space and is represented by a dotted decimal notation. IPv6 uses 128 bits in the address space, and it's represented using hexadecimal notation. In addition to the expanded address space, IPv6 supports both stateful and stateless autoconfiguration. With IPv6, there's no broadcast. Instead, it uses multicast to communicate with multiple hosts. In addition, there are optional extension headers that you can use with IPv6, including fragmentation or IP security. IPv6 is still a connectionless, best-effort protocol that requires the use of ICMPv6. The main enhancement, as you see in this illustration,
>
> **[1:36](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=96)** is that in contrast to IPv4, IGMP and ARP are not necessary with IPv6. Now let's talk about the streamlined IPv6 header and compare IPv6 with IPv4.
>
> **[1:57](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=117)** You'll see that there are a lot fewer fields in IPv6. First, the internet header length doesn't exist in an IPv6 header. The next three fields in an IPv4 header include Identification, Flags, and Fragment Offset, and those had to do with fragmentation. In contrast, IPv6 seeks not to fragment, so there are no fields that deal with fragmentation. You can fragment, but you'll need to use an extension header. The Time to Live value still exists in an IPv6 header. However it's called Hop Limit, and there is no Header Checksum in an IPv6 header, I've opened this packet capture, IPv6.pcapng. If you'd like to follow along, I've included it in the Exercise folder. Let's start with the field values of the IPv6 header in Frame 1. Now I'll just go to Frame 1, which, it's highlighted, and I'll just move this up so that we can see a little more of the header. Then I'll drop down the caret so we can see all the field values. The first field is the Version, which is Version 6. Not much to see there 'cause we know what the version is.
>
> **[3:32](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-ipv6-24579234?u=76281980&t=212)** But the next field value is called Traffic Class. Now, this has to do with quality of service. The default is zero, meaning best effort. But then we see the Flow Label, which is used by routers to prioritize packets containing delay-sensitive data, such as voice, video, and multimedia. Now, it's not uncommon to see a zero value as it's not always being used, but in this case, we see a value. Next, we'll look at the payload length, which is 144. Now, the payload length is any header or data that follows the IP header. So let's take a look. Now, down below, we see the ICMPv6 header, and I'll place my cursor here and then down below on the status bar, we see that it's 144 bytes. It says the Next Header is ICMPv6, which we know, and the Hop Limit is 255. And the last two field values are the Source and Destination Address, and that summarizes the IPv6 header fields.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (1), cursor (1)
> **Env Vars:** igmp (2), arp (2), osi (1)
> **Versions:** version 6 (2)
> **UI Navigation:** go to (1)
> **Definitions:** is called (1)
> **Analogies:** such as (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Comprehending ICMP](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=0)** - [Instructor] ICMP or Internet Control Message Protocol resides at the network layer of the OSI model. ICMP is an integral part of the internet protocol and must be implemented by every IP module, as it's part of the original RFC. The fact is the internet protocol would be nothing without ICMP. It's a very important protocol. With ICMP, there is no data exchanged. It's simply error reporting. And it's also used by the utility ping for echo request, echo reply messages. As we see here in this graphic, we can split the ICMP messages in two categories, error reporting and queries. For error reporting, you could have things such as destination unreachable, source quench, or time exceeded. For the query, you'd see echo request reply, timestamp, or address mask. ICMP messages are transmitted within an IP datagram. So here we see an illustration of the IP header followed by the ICMP message. within that ICMP message, you'll see some commonalities, such as the type, the code, and the checksum. The contents will really depend on the type and whatever possible code that you might see. IP is unreliable and doesn't guarantee delivery. So it's important to notify the sender when something goes wrong.
>
> **[1:33](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=93)** ICMP is used to give feedback about network problems that are preventing packet delivery. When an ICMP error message is sent, the message is always going to have the IP header, and then the first eight bytes of the original datagram that caused the error. As we see here is an example, destination unreachable, the type, the code, checksum, and then the internet header and the first 64 bits of the original datagram. I'm at this webpage IANA, and here you can see all of the different types of ICMP messages. There are quite a few, but I want you to pay attention here. As you can see, there are several that have been deprecated for one reason or another, and you should avoid using them. The one that you will use and is important to use is the Type 3 destination unreachable. Within that, you see the different code, such as the network is unreachable, the host is unreachable, or the protocol is unreachable. So let's take a look at a couple of different examples. I'm at PacketLife, and I'm going to take two of these packet captures, icmp.fragmented, and then here, this traceroute_MPLS. The first one I've opened is icmp.fragmented, and in this case, what we can see is this is an echo reply. So we see that it tests for reachability and is able to reach the host,
>
> **[3:05](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=185)** and we're able to reply, yes, I did reach the host. So we see the IP header, and then within the ICMP header, we see the type, the code, and the checksum, and then data, which is essentially nothing. So nothing bad happened. It's just a test for reachability. Now, in this example, this is a traceroute. We know with traceroute, it purposely times out, so it's going to report back that I was able to get to this hop and then report how long it took. It comes up black because it thinks it's an error, but I'll take that coloring off. But what might be fun is let's go to the [Statistics](../../Skills/Data%20Science/Statistics.md) and do a flow graph just to show you how it made its journey. And you can see all of those as it's going from one hop to another, and then reporting back. Now because it's coming up as an error, we can see exactly what happens as we know that if there's an error message, the message is always going to contain the IP header and then the first eight bytes of the original datagram that caused the error to be generated. So in this case, you see, there is your time to live exceeded, so there's your IP header, and then we'll blow out the ICMP header. And as you see, the type, the code and the checksum, and then in that, you see the IP header and the first eight bytes of the original datagram. So those are two examples of ICMP. ICMP is a powerful protocol, but we have to understand that it's also used in malicious ways.
>
> **[4:38](https://www.linkedin.com/learning/wireshark-essential-training/comprehending-icmp?u=76281980&t=278)** For example, ICMP is used in reconnaissance by [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md). It could be used to do reconnaissance, to do a ping sweep, or to evade firewall rules. So the question is, what type of ICMP packets are are you going to allow? The only really essential ICMP traffic is Type 3, that's your destination unreachable, and then the codes that fall within that. The others are optional, the types 0, 8, and 11. Those would be optional dependent on whether you would like to allow those on your network or not. So Internet Control Message Protocol or ICMP is used by routers, intermediary devices, or hosts to communicate updates or error information. ICMP is essentially a scout for the internet protocol, making sure the route is clear and communicating any errors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (1), [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md) (1)
> **Env Vars:** icmp (20), osi (1), rfc (1), iana (1)
> **Definitions:** is an  (3), is a  (2)
> **Analogies:** such as (3), for example (1)
> **Cross-References:** coming up (1)
> **Documentation:** rfc (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Discovering ICMPv6](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=0)** - [Instructor] IMP version six, like ICNP version four, resides at the network layer of the OSI model. ICMP version six is a very important protocol. It must be implemented by every IP module. Now we've said this before, but now let's take a look, we'll go to the source. I'm at RFC 4443. And then right here, it states ICMP version six is an integral part of IP version six, and the base protocol must be fully implemented by every IP version six node. Now just like ICMP version four, node data is exchanged. It's used to communicate updates or error messages, and it's also used by the ping utility echo request/echo reply. Now here we see the IP datagram where we see the IP version six header followed by the ICMP version six message. Now that ICMP message is just like IP version four, where you see the type, the code, the checksum, and then the contents will depend on the type and the code. But unlike ICMP version four, ICMP version six has a lot bigger role. Keep in mind, IP version six does not have any AARP or IGMP. As a result ICMP version six assumes those two roles.
>
> **[1:36](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=96)** The messages include error messages, informational messages, neighbor discovery messages, including the neighbor discovery protocol and group membership messages. That includes multicast listener discovery messages. We also of course, have error messages that include destination unreachable, packet too big, time exceeded and parameter problems. The informational messages include, echo request and echo reply. IMET packet captures on packet life, and you can follow along if you like. We'll take two simple examples. ICMP version six, echos and IP version six ndp.cap. Now I've opened up the echos and that's just a test for reachability. And as you can see, we have our ping request, ping reply, pretty simple. And down below you can take a look, you have your IP header and then your ICMP version six header, and then the information within it. Well, now sometimes you might want to just follow what is happening there with ICMP and if you right click and we say follow, well, we can't because there's no transport layer protocol. This is an NSSL stream or an HTTP stream, but we can do this. Let's go to [Statistics](../../Skills/Data%20Science/Statistics.md) in flow graph. You can open the flow graph
>
> **[3:12](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=192)** and there you can see the test for reachability with the request and the replies. And then you see the neighbor discovery protocol, and there's a lot of activity going on within this. We see the multicast listener report, neighbor solicitation, and neighbor advertisement. Again, I'll take a look in statistics in the flow graph. And here you can see the flow as the traffic is going back and forth, communicating to other devices on the network. And if we did take a look at the neighbor advertisement and we'll blow out here, ICMP version six, it has some options and it's telling a little bit about what's happening. Here you see the link layer address. Here we see a router advertisement, and there are some options there as well. And we'll drop this down and scroll down. And with this, you see the link layer or MAC address and MTU that's 1500 and then prefix information.
>
> **[4:17](https://www.linkedin.com/learning/wireshark-essential-training/discovering-icmpv6?u=76281980&t=257)** So ICMP version six, like ICMP version four, is a very important protocol. But unlike ICMP version four, it assumes a couple of different roles. And that is because IP version six doesn't use AARP or IGMP, and that is taken care of by ICMP version six.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (2)
> **Env Vars:** icmp (16), aarp (2), igmp (2), imp (1), icnp (1)
> **UI Navigation:** go to (2), open the (1), scroll down (1)
> **Definitions:** is a  (2), is an  (2)
> **CLI Commands:** node (2)
> **Analogies:** just like (2)
> **Documentation:** rfc (1)
> **Warnings:** keep in mind (1)

#### [Challenge: Evaluating a pcap](https://www.linkedin.com/learning/wireshark-essential-training/challenge-evaluating-a-pcap?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/wireshark-essential-training/challenge-evaluating-a-pcap?u=76281980&t=6)** - [Instructor] Let's do a challenge. First, you'll need to go to PacketLife and download and open a packet capture in [Wireshark](../../Skills/Cybersecurity/Wireshark.md). You'll select this one, ipv4-smtp. Select Download, and open it in Wireshark. Then go through and answer the questions. Then come back and see how I achieved the challenge. This challenge should take you about 10 minutes. Okay, let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (2)
> **UI Navigation:** go to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Evaluating a pcap](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=0)** (bouncy music)
>
> **[0:06](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=6)** - [Narrator] Okay, how'd you do? You'll want to have the instructions handy so that you can follow along. Now I have the packet capture open and the first question is click on [Statistics](../../Skills/Data%20Science/Statistics.md) and protocol hierarchy. Now we go to statistics and there's a lot of things that we can choose from, but what we want is protocol hierarchy. And we'll select that. And this tells us about the protocols that are within this packet capture. And it wants to know how many simple mail transfer protocol packets there are. And here we can see there are five. Now we'll close the window. Now the next thing is we want to take a look at the conversations. Click on statistics and then conversations. But before I go there, I want to show you the next line is endpoints. Conversations is communication between two endpoints. So let's throw our focus on that. Now once you open it, and as you can see that the tabs are set up so we can look at ethernet, IP version four, IP version six, TCP, or UDP. So we wanted to take a look at the ethernet conversation and then down below it says, name resolution. Check and uncheck the name resolution box and what are the results? So we'll check it and then we'll uncheck it. Now, when I check it, we see some writing. Now that represents the first six bytes of the Mac address. In the frame header,
>
> **[1:42](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=102)** the addressing we use is the Mac address. And the first six bytes represents the organizational unique identifier. And as you see, we see Hewlett Packard and VMware. Now using this name resolution won't hurt anything because it comes from a file. Now we'll close that. Now we want to find the first TCP handshake. And what I want to do is we take a look at this. And as we see in the right hand side, the intelligence scroll bar, but for this exercise, I want to take off the coloring roles and we'll just select right here. All right. So now we see that frame one, two, and three, or packets one, two, and three are the three-way handshake. Now the three-way handshake is what's going to establish that conversation. So the question is, number four, what is the IP address of the host that started the handshake? All right, so we'll go down below and you can see here, it's up above, under source, but I'll take a look at it down below. And here we see the source is 192.168.20.70. I'll pull this up. And we'll place my cursor on that TCP header. And I want you to take a look down below. That shows us the size of the TCP header on frame one. Now the destination port will indicate what application the host wants to use on the serving host. So let's take a look here
>
> **[3:16](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=196)** and we'll drop down the TCP header. And here we see what is the client's port. And this is that temporary port that just throws it out there and says, when you return the data, return it to port 54557. So that's the client's port, 54557. Now the question is, what application does the host want to use on the server? While the destination port is 25, which is related to SMTP, which is an email server. All right, we'll pull this back up. And the next thing is, number seven, go to frame five and expand the IP header. We'll go to frame five and then we'll expand the IP header. And the question is, what is the time to live value? And I'll place my cursor there. Time to live for this frame is 64. I'll pull that up. Number eight says, in the lower left corner is the expert system. What color is the circle? And if you take a look down in the lower left-hand corner, we see it's blue. And what does that color indicate? Well, let's just open it up and we see that it indicates chat. Now chat provides information about typical workflow, such as TCP window update or connection finish. Nothing really bad, just information about what's happening. All right, I'll close this.
>
> **[4:49](https://www.linkedin.com/learning/wireshark-essential-training/solution-evaluating-a-pcap?u=76281980&t=289)** Now, one other thing is, in order for the host not to be overwhelmed, we have the windowing feature. So as you can take a look down below, and I'll going to expand that TCP header and make sure I'm on frame five. And I want you to take a look at the window size value. It's 229. But there is scaling, as you can see. The scaling factor. So there is the calculated window size, and that means that's kind of the true value of the window size. So the server can send up to that amount of data before it overwhelms the host. Now I'll right click and we can say apply as a column. And as you can see here, and I'll pull this down so you can see, now we have the calculated window size added to a column value. Now I want to take it off by going right click. And I'll just uncheck that and take off calculated window size and we've removed that column. Okay, so that's the end of our challenge and I hope you had fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (3), cursor (2)
> **Env Vars:** tcp (7), udp (1), smtp (1)
> **UI Navigation:** go to (3), click on (2)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is an  (1), means that (1)
> **Ports:** port 54557 (1)
> **Versions:** 192.168.20 (1)
> **Analogies:** such as (1)


### 4. Deep Packet Analysis of Common Protocols

[↑ Back to Table of Contents](#table-of-contents)

#### [Dissecting DNS](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=0)** - [Instructor] [Domain Name System](../../Skills/Network%20and%20System%20Administration/Domain%20Name%20System%20(DNS).md) or DNS resides at the Application Layer of the OSI Model. DNS is an important protocol, as it maps a host name to an IP address. It uses UDP port 53 for requests and uses TCP port 53 for zone transfer. With DNS, a client will send a query to a DNS server for an IP address. The server will respond with the information. The server can ask other DNS servers for the information. With DNS, there's a number of types of records. Some commonly seen records are a type A record, that's for an IP version 4 address. You might also see a mail exchange record. This will redirect mail to a mail server. And a quad A. This shows the IP version 6 address. Now, why is it called quad A? Well, IP version 4 is a 32-bit address. IP version 6 has 128 bits, it's four times as large as an IP version 4 address, and that's why it's called a quad A. Within the DNS header, you'll see questions, answers, authority resource records, and any additional resource records. Now, the question from the client is slightly different from the answer from the server, and we'll take a look at that in just a second.
>
> **[1:34](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=94)** I first want to direct you to this website and where you can find out a lot more information about DNS. Now within this, you'll see that there are a ton of RFCs that deal with different issues on DNS, such as here, DNS Zone Transfer Protocol, DNS blacklists and whitelists, and DNS security, and a lot more. So there's a lot more to DNS, but let's just take a look at a simple example. I'm at this packet capture and there is a lot of packet. I might just want to filter by DNS and I'll go to the display filter and type DNS. Now down below, you'll see that there are 12 displayed, but let's take a look at just one single transaction. I'll go here to the standard query and I'll pull this up. And when we drop this down, you see the transaction ID. Now it says down below, response in 80. And it knows that because it matches that transaction ID. I'll right-click and we'll say, apply as a filter, and it will run that. Now we have them together. Well, now, let's take a look at the query first from the client. So using UDP, you see that it offers a high number port, and then it goes to the server on port 53 for a query. Now, we'll drop this down
>
> **[3:07](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=187)** and here we see the query. And first we see the transaction ID. And then we drop this down and these are the flags that are set. Now, first we see that the first one is a zero, that means that message is a query. Now, this flag means recursion desired, do query recursively. Now, there are two types of queries, an iterative or recursive. An iterative query would be a server is unable to provide an answer, so the client has to go back out and retrieve the answer. What I would like you to do is recursive query, and that means the server will look on behalf of the client. As you can see, recursion is desired. Then down below you see I'm asking one question and please give me the IP address for this site. Now let's take a look at the response. Again, using UDP source port 53, and then return to a high number destination port. And then we'll take a look at DNS, the response. So again, we see the transaction ID, so we kept those together. And then you look at your flags and there you see your response. The message is a response and we know that. But then down below, the server answers. So as it says here, recursion desired, do query recursively. And the server response, yeah, recursion is available. The server can do that recursive query, and that's a good thing.
>
> **[4:43](https://www.linkedin.com/learning/wireshark-essential-training/dissecting-dns?u=76281980&t=283)** Now, as you can see, there is one question and two answers, and let's take a look at those. Here's the question to find that IP address to that website. And then let's go and look at the answers and I'll pull this down, and as you can see here, the information on both of those answers. You see that there are two answers. Within that, you can see the time to live value is 1489. Now, what does that mean in a DNS header? Well, when we have a record that's returned and you have an IP address and you have your answer down below here, what it's saying is that that record that's going to be held in the cache on any server or even at the host, is how many seconds it can live in the cache before it goes away. So the time to live value means after 1,489 seconds it goes away and you'll have to re request that information and it will most likely be sent back to you. So there you see a standard query and a standard response. And as we understand, DNS is a very important protocol that provides a host to IP address translation so that data can transact on the network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Domain name system](../../Skills/Network%20and%20System%20Administration/Domain%20Name%20System%20(DNS).md) (1)
> **Env Vars:** dns (18), udp (3), osi (1), tcp (1)
> **Definitions:** is a  (6), is an  (1), means that (1)
> **Versions:** version 4 (3), version 6 (2)
> **Ports:** port 53 (4)
> **CLI Commands:** find (2)
> **UI Navigation:** go to (1), right-click (1)
> **Analogies:** such as (1)

#### [Exploring DHCP](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=0)** - [Narrator] [Dynamic host configuration protocol](../../Glossary/Standard/DHCP.md) works at the application layer of the OSI model. [DHCP](../../Glossary/Standard/DHCP.md) dynamically assigns IP addresses on a [local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md). DHCP uses UDP for transport, and the client will use port 68, and the server will use port 67. DHCP uses what we call the DORA process, discover, offer, request, and acknowledge. Let's take a look at the DORA process in [Wireshark](../../Skills/Cybersecurity/Wireshark.md). I captured this traffic after first going into my command line and I issued an IP config release, and then I went back in and issued IP config renew. So I got rid of my IP address, and then I got a new one. So when we go up here to the display filter, we're looking for DHCP. But the actual filter is bootp. Okay, so now let's take a look at the first one. As you can see that's DHCP release. And that means I'm giving up my IP address. And you're seeing that what we gave up was the .129, and now my client address is 0.0.0.0. All right, I've gotten rid of it. But then the next step is to go through the DORA process. Now, take a look at that transaction ID.
>
> **[1:34](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=94)** Now, we know that I don't have an IP address. So the server keeps track of who I am by that transaction ID and my MAC address. So the first step is to go through the DORA process by saying a discover packet will be sent out as a broadcast. Now, this packet is essentially saying, I need an IP address. Anybody? Does anybody have an IP address? Now, this goes out as a broadcast in hopes that a server will hear and respond. So as you can see that the message type is the boot request. I'll pull this up and I will tell you that there are a lot of different options with DHCP. But the one I want to show you with that discover packet is requested IP address. What I'm essentially saying in that original discover packet is I like the same IP address is what I had before, that .129. Now we see the offer. The DHCP offer comes from a server. Now, understand, on an enterprise network, you most likely will see two offers responding. So, it'll come from two different servers. Now the offer is saying, I have an IP address and you probably will like it. Why don't you try it, .129? It knows I want the same one. And it says, you know, no one's using it. Go ahead. Why don't you try it? The next step is for the client then to go back out and say, you know, yeah, I think I do want that one.
>
> **[3:10](https://www.linkedin.com/learning/wireshark-essential-training/exploring-dhcp?u=76281980&t=190)** And let's go to it. So I'm going to request it. And again, I want the requested IP address, and I would like that IP address. Could I have it? Well, sure. So the server responds with the final step in the DORA process by sending an acknowledgement. And now I'm sending my reply. And again, the same transaction ID. And here we say, your client IP address is .129. Now, if we go down, it of course gives the MAC address and then the options. But what happens is, remember, when I get a dynamically assigned IP address, and it's not static, I'm only borrowing it. So down below in these options, this gives what we know as the lease time. And in this case, you see it's seven days. And that's pretty standard. It's either seven or eight days. Now, what happens is after 50% of the time, or three days and 12 hours, I have to go and issue a renewal. And then you see after 87.5% of the time I go into rebinding. And I then make sure that I'm able to keep that IP address. So dynamic host configuration protocol is dynamically assigning IP addresses to hosts on a local area network. DHCP uses the DORA process, discover, offer, request, and acknowledge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (8), [Dynamic host configuration protocol](../../Glossary/Standard/DHCP.md) (2), [Local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md) (2), [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (1)
> **Env Vars:** dhcp (8), dora (6), mac (2), osi (1), udp (1)
> **Ports:** port 68 (1), port 67 (1)
> **Versions:** 0.0.0 (1), 87.5 (1)
> **CLI Commands:** make (1)
> **Tools:** command line (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [narrator] (1)

#### [Following an FTP transaction](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=0)** - [Instructor] File transfer protocol resides at the application layer of the OSI model. FTP transfers files using TCP ports 20 and 21. Port 21 is the command channel on the FTP server and port 20 is the secondary port used to transfer data. Once you get into the server, you're going to see a series of reply codes and this will tell us the state of the data transfer. Classic FTP uses what's called an active request, meaning the client initiates that data transfer and the FTP server maintains state information such as current directory and any user authentication. However, most likely you're going to see a passive request. And this is preferred for clients that are behind a firewall as it's more secure, because the client, not the server, initiates the transfer. Basically the client says to the server, you sit back, I'll do the driving. It first asks the server to accept a data connection over a new TCP port and the server normally accepts with a code 227, and then the server will provide a port in which to make the connection. I have this packet capture here, which is FTP example, and this is a standard FTP exchange of data. Now, first of all, I will tell you that it's in plain text and there are very, very few open FTP servers out there. In most cases,
>
> **[1:35](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=95)** it's using some type of secure connection or encryption, but we'll be able to see everything 'cause it is in plain text. So the first thing you see is the initiation of the contact from the client to the server and there you see a three-way handshake. Now I'll go into packet five and I'll right click, and I'll say, follow the TCP stream. And we'll open this up. And this is very classic. What you see is something on there is a banner which you would read and it would give some warnings about what the site's about and what you should or shouldn't do. It will provide an anonymous login and it says, send your complete email address as your password. Then once you get in, the anonymous access is granted, however restrictions will apply. Now, down below here, we can see that that is asking for a passive. So the client says, could we go into passive mode? Then you see the response from the server 227 saying, yes, we'll do that. We'll enter passive mode. And then it replies with a set of numbers. We'll go into that in just a second. Then you'll see the complete exchange and then at the end where it says the transfer's complete and that kind of ends it. But let's go into that passive. So I'm on frame 50, and we'll open this up. I'm going to go down to the passive mode. So the request command passive.
>
> **[3:07](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=187)** So that saying from the client to the server, can we go into passive mode? The next packet is 51 where it accepts that passive request. And we'll go into the FTP header where it says entering passive mode. And when you see that series of numbers, you may be wondering what that is. Well what it is is the IP address and then the port number. All right, so how does that work? Well, each of those represents one of the octet in an IP version four address. So down below here, you can see 170.225.15.40, but what about these other two numbers? And it's coming up with a really large number. Well, it is a formula and it has to do with those two numbers. So the formula is that first number multiplied by 256 plus the second number. So let's do that. 232 times 256 equals, plus 57, and that gives us 59,449, which is, as you see, the passive port. And then the data transfer continues and then it eventually gets what it needs and then you would most likely close out the connection. FTP is a way to transfer files to an FTP server and update the information. Although active was the original way to use FTP,
>
> **[4:43](https://www.linkedin.com/learning/wireshark-essential-training/following-an-ftp-transaction?u=76281980&t=283)** more likely you'll use a passive connection where the client will initiate the data transfer.

> [!info]- Semantic Content
>
> **Env Vars:** ftp (11), tcp (3), osi (1)
> **Definitions:** is a  (4)
> **Ports:** port 21 (1), port 20 (1)
> **CLI Commands:** make (1)
> **Versions:** 170.225.15 (1)
> **Cross-References:** coming up (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Using HTTP](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=0)** - [Instructor] Hypertext Transfer Protocol is an application layer protocol for browsing the web. HTTP has been in use on the web since the early 1990s. It's a client server model that uses TCP port 80 by default, but can use other ports as well. With a typical transaction, the client will send an HTTP request and indicate what the client wants. The server then will respond with a status code and server information, and then any requested data. Now there are several status codes within HTTP, but most of the time, we're going to get a 200 or success, meaning everything's okay and the data will follow. Most application layer protocols have a typical format where you have the frame header, the network layer header, and the transport layer header followed by the data. Now the frame header, the network layer and the transport layer header remained pretty much the same. The data in the application layer header changes according to what's happening in the conversation, and whether it's from the client or from the server. So with HTTP, you could possibly get the HTTP header information that includes the general header, request and response header or the entity header, and then within that, you'd have the HTTP body which holds the [HTML](../../Skills/Web%20Development/HTML.md) code or the webpage
>
> **[1:35](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=95)** so that it can rebuild that in your browser. I've opened up this packet capture and we can take a look at some HTTP traffic. There's a lot of packets here, and one thing we can do is take a look at the conversations by going to [Statistics](../../Skills/Data%20Science/Statistics.md), and then conversations. Now once you open this, there's a lot of column headers. And what you could do, and in this case, we're going to sort by bytes so that we get the top talker. Now as you can see now, that highlighted area, we can do something with that, for example, I can apply a filter. I can do this, I can either select the entire conversation from A to B, that would be from the client to the server, from just the client to the server, or from just the server to the client. I'll select all of that and then that will run that filter, and then we'll close that. Before beginning anything, we start with a three-way handshake. Now as you can see, there's no data exchanged, it's just a handshake. And then once that handshaker connection is complete, then it goes into our first HTTP request from the client. And we'll pull this up, and as you can see, the client is saying, "I would like that picture of the blue goat." The host is [goatrodeocheese.com](https://goatrodeocheese.com). And then a little bit of information about that client, for example, what's the operating system and what their browser is,
>
> **[3:08](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=188)** and also other information, including language, and then in this case, we want it to be in English. Then down below, we now see the response from the server, and it's saying it's a 200 status code, which means it's okay. Everything is good and now I can start to give you what you need. It's using HTTP version 1.1 which is the most commonly used version, and the server is openresty, which is the third largest web server in use today behind a patchy and NGN IX. It says, well, what the content is, and it's an image or JPEG. Another information about the server. Now, what I can do is right click, and I can say, follow the TCP stream. Now, in this case, this shows all of the connections that are happening within that single stream, and there's more than one. And in fact, when you're retrieving data and objects off of a web page, you'll have more than one stream most of the time because you want to be able to retrieve those objects quickly and rebuild the web page in your browser quickly. Now as you can see, the red is from the client and the blue is from the server. And I'm going to scroll down and you'll see that there's a number of requests and responses, here's another one, get, and then the HTTP status report and the HTTP status code, and then the response. And there are a few of those within this single stream.
>
> **[4:45](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=285)** All right, now close that, and then just one more thing we'll take a look at. When you're getting this data from the web server, which is very common, you see a number of areas that are black. And if this is going to happen consistently, you might want to look into it. One thing we can do is go to statistics and then run a stream graph, all use the TCP stream graph time sequence or Stevens graph, and we'll open this up. Now as we see, that's the server to the client and we can switch directions just so you can see, but we want it to be from the server to the client. All right, so when we follow this, this is showing this line's going up, it's all good, we're getting the data, and then, we're not. So, this is showing nothing's happening here. As you see, that's a ten second delay. And I'll move this down, and as you can see, it's a keep alive. Nothing's happening, it's just still waiting. And we go here, and there's a seven second delay. Then we have the data is coming in, it's good, oh, a little hiccup here and up, and now, we have a nine second delay, then a 10 second delay, 10 second delay, and more ten second delays. Well, really nothing's happening. So I'll close this and you can take a look at this and see that it's pretty much stalled. But at some point at the end of the conversation here,
>
> **[6:21](https://www.linkedin.com/learning/wireshark-essential-training/using-http?u=76281980&t=381)** you see that the client and the server both agree they both have what they need, and then you see the exchange of the FIN and the ACK packets from the client to the server and the server to the client, and that effectively closes the conversation. So HTTP is an application layer protocol for browsing the web that's been in use since the early 1990s. It uses a client server model using TCP port 80, but can use other ports as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (2), [HTML](../../Skills/Web%20Development/HTML.md) (1)
> **Env Vars:** http (12), tcp (4), html (1), ngn (1), jpeg (1)
> **UI Navigation:** select the (1), scroll down (1), go to (1)
> **Analogies:** for example (2), picture (1)
> **Ports:** port 80 (2)
> **Definitions:** is an  (2)
> **URLs:** [goatrodeocheese.com](https://goatrodeocheese.com) (1)
> **Versions:** version 1 (1)

#### [Understand ARP](https://www.linkedin.com/learning/wireshark-essential-training/understand-arp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/understand-arp?u=76281980&t=0)** - [Instructor] On a [local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md), the data link layer uses the MAC address of the destination machine rather than the IP address. Address Resolution Protocol resolves an IP address to a MAC address on a local area network. Let's take a look at where ARP resides in the OSI model. It resides in between layer three and layer two. And that's because when we take a look at it, it doesn't have a network layer header, it doesn't have a transport layer header, it's simply doing a resolution. In addition to the ARP request, ARP replies, you might also see a gratuitous ARP, which is a test for duplicate IP addresses on a local area network. If you'd like to follow along, go to [packetlife.net](https://packetlife.net) and I selected ARP and this last one here ICMP across dot1Q.cap. I've opened it up in [Wireshark](../../Skills/Cybersecurity/Wireshark.md) and there really aren't a lot of packets in this capture, but we'll just take a look at ARP. We'll put a display filter in and you see there are a couple of types. One is the gratuitous ARP. And as we talked about that is simply a test for duplicate IP addresses on a local area network. But then down below here, we see the ARP request and ARP reply. Now, let's take a look at the request
>
> **[1:34](https://www.linkedin.com/learning/wireshark-essential-training/understand-arp?u=76281980&t=94)** and then we'll drop this down. And the [Hardware](../../Topics/Hardware.md) type is the type of data link type in use. And here we can see it's ethernet and we see the protocol type IP and the hardware size which is six bytes and that is the length of the hardware address and the protocol size is the length of the protocol address. Here, we see the opcode and it is a request. Now it's from the sender here which you can see, this is the sender's MAC address, and this is the sender's IP address. The target MAC address is a broadcast and remember it doesn't know the MAC address, so it goes out to everyone on the network, everyone on the network hears it, but only one should respond. And then down below here, you see this is the IP address. So looking up here in packet three it says, who has this IP address? Could you tell me who has this IP address? Then we see a reply and it has the same fields except it does provide the answer. Now we see the opcode is a reply and the sender MAC address is words coming from, and there's the IP address and then it's responding to the one that sent the ARP request. So, Address Resolution Protocol sits in between the network layer and the data link layer to resolve an IP address to a MAC address on a local area network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md) (5), [Hardware](../../Topics/Hardware.md) (3), [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (1)
> **Env Vars:** arp (10), mac (7), osi (1), icmp (1)
> **Definitions:** is a  (4)
> **Code Identifiers:** dot1q (1)
> **URLs:** [packetlife.net](https://packetlife.net) (1)
> **Cross-References:** we talked about (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Examining a packet capture](https://www.linkedin.com/learning/wireshark-essential-training/challenge-examining-a-packet-capture-24579236?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/challenge-examining-a-packet-capture-24579236?u=76281980&t=0)** (buoyant music)
>
> **[0:06](https://www.linkedin.com/learning/wireshark-essential-training/challenge-examining-a-packet-capture-24579236?u=76281980&t=6)** - [Presenter] Let's do a challenge. First, you'll need to obtain the, "[Wireshark](../../Skills/Cybersecurity/Wireshark.md) Essential Training Challenges and Links Document," and scroll down where you will see detailed instructions, which will look like this. Now, in this challenge, you'll need to obtain two packet captures, and I provided you with the links. Now complete the challenge and then once you're done, check back to see the solution. This challenge should take you about 10 minutes. Good luck and have fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (1)
> **Prerequisites:** you'll need (2)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [presenter] (1)
> **Non-Speech:** (buoyant music) (1)

#### [Solution: Examining a packet capture](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=0)** - [Instructor] Okay, let's go through this challenge together. You might want to have the document handy so that you can follow along. First, you are to go to [cloudshark.org](https://cloudshark.org) and examine this packet capture. Now once in, you were to go to analysis tools and select GeoIP World Map. And the question is, what are the endpoints? Well, the endpoints are either side of the conversation. So let's take a look. We'll go to analysis tools and GeoIP World Map and we'll let it run. Now, the GeoIP World Map is a handy little feature that's built right into Cloud Shark. Now here we can see the endpoints. One is in France and one is in America. And we'll close that. Next, you are to open the file in [Wireshark](../../Skills/Cybersecurity/Wireshark.md). Well, you'll need to download it. So go to export, download file, and I always select, download the original file. Now you've opened it in Wireshark. So let's go to the next step. In DNS a time to live value specifies how long a resolver is supposed to cache the DNS query before the query expires. So the question is, in frame two, what is the IP address of ocsp.[verisign.net](https://verisign.net),
>
> **[1:38](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=98)** and what is the time to live for each DNS response? Alright, so first we want to just make sure we understand what that time to live value is. Now you're all familiar with the IP header and the time to live value here, but it's not the same. So we want to make sure that we're on frame two and then we're going to expand the DNS header. And I'm just going to drop this down here, pull this up. And what we want to do is take a look at the answers. We have both of those answers here. All right, so first we see the time to live is 381 for the first answer. And the second one, the time to live is one. So when we take a look at that 381, that means that after 381 seconds, the entry will go away and you'll have to issue a query again. All right, we'll pull that up. Now the next question is in frame two, what is the source port? All right, we're going to drop this down, and here we can take a look at the user datagram protocol. And the source port is 53, which is associated with DNS. Now the next question is a user agent and an HTTP header indicates the browser. So go to frame seven, right click and follow the stream.
>
> **[3:14](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=194)** All right, we'll go to frame seven, right click and follow the stream. All right, so here we can see the user agent, which is Mozilla. Now there are resources online so you can further define exactly what version that is on Mozilla. All right, we'll close that. Next, using the link in the document, you are to obtain a file and open it in Wireshark. Now this capture is the [DHCP](../../Glossary/Standard/DHCP.md) DORA process where we can see the four-step process, discover, offer, request, and acknowledge. And we'll just pull this up so we can examine just all of these in general. And the question is, are DHCP messages sent via UDP or TCP? Well, DHCP messages are sent via UDP, which is a lightweight connectionless protocol, because you need the IP address quickly. The next one is expand the DHCP header in frame one. So I'll go to frame one and I'll expand the DHCP header. The question is, what is the client IP address? And we'll scroll down here and it says the client IP address is 0.0.0.0. And that's because the client doesn't have an IP address.
>
> **[4:53](https://www.linkedin.com/learning/wireshark-essential-training/solution-examining-a-packet-capture-24580246?u=76281980&t=293)** The next question is look at the parameter request list and it'll scroll down here and expand the parameter request list. And the requests are what the client is asking. And those include the subnet mask, router, domain name server, and network time protocol servers. Alright, we'll pull that up. And the last question is, what is the value of the transaction ID in all four packets? Well, it's right here. So we can see that the first two end in 1D and 1D, and the last two end with 1E and 1E. Now the last step has us going back to Cloud Shark to examine a packet capture. Now once here, we are to go to analysis tools and follow the stream. So we'll drop this down and follow the stream. And I'll scroll up here and we can examine the entire contents of the stream. So the question is, did the FTP server require a password? Well, here we can see in plain text anonymous login okay. Send your complete email address as your password. So no password needed, just a complete email address. All right, so that's your challenge. I hope you had fun.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (5), [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (3)
> **Env Vars:** dns (5), dhcp (5), udp (2), http (1), dora (1)
> **UI Navigation:** go to (9), scroll down (2), open the (1), scroll up (1)
> **Definitions:** is a  (3), means that (1)
> **CLI Commands:** make (2)
> **URLs:** [cloudshark.org](https://cloudshark.org) (1), [verisign.net](https://verisign.net) (1)
> **Versions:** 0.0.0 (1)
> **Exercise Files:** download the (1)


### 5. Working with Packet Captures

[↑ Back to Table of Contents](#table-of-contents)

#### [The Wireshark expert system](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=0)** - [Instructor] Built within [Wireshark](../../Skills/Cybersecurity/Wireshark.md) is the expert system. The expert system helps to alert the network administrator on possible issues once a capture's been made. Keep in mind, it's only a guide. Sometimes it really isn't a problem, such as a checksum incorrectly calculated. When we go into the Expert Info Console, you'll see four categories. I say expert info because that's how you might see it referenced if you go into the Wireshark wiki. Now they're in order of severity. The first one is errors. You'll see a red circle that indicates serious problems. Yellow indicates warning. That means there's possible problems, you'll probably want to look into them. Cyan are notes of interest, and the blue are chats, which is typical workflow and state change. I've opened up this packet capture because it's a pretty good example, as it lists all four categories. Now if we take a look in the lower left-hand corner, the red circle indicates the highest level of threat, that there's possible serious problems. So let's' go in and select that. Now when we go in and you can see the severity, and it is grouped by summary, and then you can uncheck that and it would group it in a different way. But I like to keep it grouped together. If you remember in legacy, it had tabs. This way it's just on one page, and you can see all of what's going on. Now the first thing that shows up is an error, bad checksum. And I'll blow this out.
>
> **[1:35](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=95)** Now as it says, the ethernet frame checksum is incorrect. Well that might not be a problem. Let's exit out of here, and then we'll go back over to the ethernet frame, any one, and right click. Go to protocol preferences, and here I say, validate the ethernet checksum if possible, I'll uncheck that. And now you see it won't be an error. And again, that's a common thing, it's not always an error, it's just incorrectly calculated. Now let's go into the expert infos again. Alright, now when we take a look at any of those categories, you can blow it out and see those packets that it affected. Now here you see the cipher link must not exceed this certain length, and then there's malformed packets, and there's 160 of those. So those are ones you probably really wanna look as to what is happening. Now then, the next category you see, there's some warnings. This one DNS query retransmission, connection reset, and in this there's 25 connection resets. You'd wanna know why were so many out there resetting. This frame is a suspected out-of-order segment. Then down below, you see notes. Now again, this is things that aren't always critical, but again, you might wanna look into those. There's keep alive segment, duplicate acknowledgement, and there's a lot of those. And that occurs,
>
> **[3:06](https://www.linkedin.com/learning/wireshark-essential-training/the-wireshark-expert-system?u=76281980&t=186)** remember the acknowledgement is expectational, meaning it's saying, "I've got this much data, and I'm ready for more. "Please send it." Now with the duplicate acknowledgement, it keeps duplicating and sending it until it times out. Just simply waiting for the data. The last category's in blue, and those are chats. Remember, those are just some things that occur that aren't critical, certain things such as workflow, updates, or possibly state changes. Here you can see the state change connection finished, and we can see the passing of the FIN and the ACK flags throughout that. And there's quite a few of those. And here we see connection established using the SYN and ACK, and there's a number of those as well. So the expert system provides insight on possible issues in the packet capture. Wireshark groups are reporting by level of severity, and that includes errors, warnings, notes, and chats.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (3)
> **Env Vars:** ack (2), dns (1), fin (1), syn (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** such as (2)
> **Warnings:** keep in mind (1), warning (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Network latency issues](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=0)** - [Instructor] [Wireshark](../../Skills/Cybersecurity/Wireshark.md) has many built-in tools to help the network administrator identify and troubleshoot network latency issues. Tools that include the Expert system, Coloring rules, the Intelligent Scrollbar and the time values that are built into Wireshark to identify gaps in transmission. Within the Expert Information there are several things that are cause for concern. That includes Zero window. That means that the client is unable to receive any more data because the buffer is full. Now on the client side that might not be a big problem, but if it's a server this could cause major bottlenecks. Keep-alives that are saying keep this session alive and Duplicate Acknowledgements where the client is re-requesting the data over and over again until it receives it. Retransmissions or fast retransmissions, or what we call spurious retransmissions. A spurious retransmission is data that is sent again, even though it's already been acknowledged and that is because the server somehow didn't get that acknowledgement and it sends the data again. High latency can be caused by any number of things, such as processing delays, distance itself, and something called bufferbloat. This is a queuing delay in that the router's buffers get full and the packets are simply dropped and there's gaps in the delivery of the data.
>
> **[1:36](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=96)** I've opened up this packet capture and there are a lot of things going on with this packet capture and I'll take a look. If I go over to the Expert Information, and here you can see a number of things in the Summary and the Severity that I might want to take a closer look at. Over in the right hand side, we can just quickly look down here and see a lot of black areas that we indicate that there are some problems. For example, let's take a look here where it says Duplicate Acknowledgement, number 17, number 18, number 19. What that is doing is saying that I received this much data and I'm ready for more, please send it. And it sends another one and another one. It's very patiently trying to get its data. What I'll do is follow the stream and what I want to go to, is there's two streams. We'll do 61 and let's take a look at that. And one of the graphs that is easy to identify gaps in transmission is the Stevens graph. Go to Stastistics, then we'll go to TCP Stream Graphs and the Stevens graph. Now this one is going back to the server and that's just your acknowledgement, so we'll switch directions. And here's where you can see these gaps in transmission. So we're getting the data, and then as you see, we've stopped.
>
> **[3:10](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=190)** And now we're getting a little bit more, and now we're stopped. Okay, so you're seeing some gaps and delays in transmission, and again, that's gonna be adding to your latency issues. What we'll do is one more, we'll go to Stream 45. And we'll switch directions and... this one's another one that shows you, now we're getting the data and then it just stops and then we're getting a little bit more then there's some stops and then we're getting some. It should be a nice, slow incremental graph but it's really rare today to get that because there's so much congestion on the network. In addition to the Stevens graph, we can also use the time values to identify gaps in transmission. I'll have to find that Conversation. We'll first go to [Statistics](../../Skills/Data%20Science/Statistics.md) and then Conversations and then I'll have to filter down to that Conversation. As you see here, 208 is the IP address. When I right click, I Apply as a Filter but I want it to go from the server to the client and that would be B to A. Then I'll close that. And now what you wanna look at are the large gaps in between transmission, and when we first go in here we're gonna go to View, Time Display Format, and you wanna make sure
>
> **[4:43](https://www.linkedin.com/learning/wireshark-essential-training/network-latency-issues?u=76281980&t=283)** that it's set correctly. In this case, it says Seconds Since Previously Displayed Packet and that's what I want because now you can see that streaming in from the one source to the destination. And here you can see that first gap right here in between this packet and this one is three seconds, and we did see that one. And then we'll go down below and this is the Stream 45 and there's another one. That's a one second. And here's one that's two seconds. So in addition to the Stevens graph, we can use the time values to identify gaps in transmission. So, Wireshark can help the network administrator identify and troubleshoot network latency issues but the next step is to be proactive and identify where the bottleneck is occurring so that you can keep the data flowing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (3), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **UI Navigation:** go to (6)
> **CLI Commands:** find (1), make (1)
> **Definitions:** means that (1), is a  (1)
> **Analogies:** such as (1), for example (1)
> **Warnings:** troubleshoot (2)
> **Env Vars:** tcp (1)
> **Speakers:** - [instructor] (1)

#### [Subset, save, and export](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=1)** - [Narrator] Sometimes when working with packet captures you get a really large file, and need to break it down to a smaller subset and send it off for analysis or keep it for later discovery. Now this packet capture, down below, you see that there's 54,102 packets. Well I just want to make it a little smaller. And we'll pretend in this case that the [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) system set on alert, that someone was going to a website, and they downloaded something that somehow looks suspicious. So you pull off the file and you bring it into [Wireshark](../../Skills/Cybersecurity/Wireshark.md), and since it was HTTP let's just go through and do a filter. We do would display filter by typing HTTP.
>
> **[0:51](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=51)** Now the next thing is, I don't want the online certificate status protocol, so, I right click and prepares a filter, and then say, and not selected. Now remember when I say prepares a filter, it simply puts it up there for me to run. To make sure it's what I want. Now I do want this, so will go up and press enter. And then again, that will narrow it down, just to those requests. Now one of the things we can do is export objects. Now within that, I'm suspecting that there was something that was brought in. And I want to go to see what that is. I'll go to file, and export objects. And since we were at a website will go to HTTP, and here you can see that there are a lot of objects and these are all the objects that were within the capture. And this one, will take a look at this one. And, we're not sure what it is, it says bluegoat, dot, jpg. Now say save. And, I'll put it in this Wireshark folder. And then we'll close that. Now we have this smaller file, now the next thing is, we're going to save it. But first I want to put a comment on there. So that I remember what it is I wanted to do. I go to [Statistics](../../Skills/Data%20Science/Statistics.md) and then the capture file properties. And this just gives you a summary of this file. Well down below, I can put, capture file comments. And I'll put in there,
>
> **[2:23](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=143)** not sure what's going on but this traffic caused an alert. I'll say save the comments, and then we'll close it. Now, if you do notice that the file name has a little Asterix, once I save that, that will preserve the comments. But again, that was just something I did so that we could keep our reference, for future, when we go back into this file again. Now and the next thing is, I'll go to file, and I could say, save as, the save as, is just as we've done before, where you can go in and save the file. And we'll just put, HTTP traffic. And, that is actually going to save the entire file. It's gonna be with everything in it. And I'll say okay. And, this case I just want that subset so what I'm gonna do is go to file, and export specified packets. Then will go to export specified packets, And, what we'll do is take a look at this. Well, first of all, I want you to see, save file as type. And, there's a lot of choices. What's really great about Wireshark, is it's able to be imported into other applications so you can see all these different extensions. And of course we can bring them in from other applications as well. So we'll call this, IDS Alert. Now down below, you can see the choices here is we can compress the file, and then down below is really
>
> **[3:57](https://www.linkedin.com/learning/wireshark-essential-training/subset-save-and-export?u=76281980&t=237)** what is, what is it you want to save. And, I could say, all packets. And that would be captured and I don't want that. This is why we did this so we say displayed. Or you can do, selected packet and that is actually the packet that we're on, right at the time, which happens to be 25067. Sometimes I mark the packets and that's not what I want. And I can actually do a range, so in this case I'll say, all packets and displayed. And we'll save that in that Wireshark folder. And now we can close that and then we'll go back in, and we'll look at the recent one we had just gotten into. And will clear the filter off and you can see the entire stream. As you see, we've got all the HTTP traffic. So the last thing we'll do is, we'll take a look actually as to, what is it I did export? And remember you can export those objects. And we'll just open up, bluegoat. Oh, well, doesn't seem like there's anything bad there, but it's always good to investigate. So with Wireshark, we can take a huge file and we can subset that, we can add a comment, and then export only those selected packets.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (5), [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **UI Navigation:** go to (7)
> **Env Vars:** http (5), ids (1)
> **CLI Commands:** make (2)
> **Speakers:** - [narrator] (1)

#### [Using Cloudshark](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=0)** - [Instructor] CloudShark is an online packet analysis tool that provides an interface similar to [Wireshark](../../Skills/Cybersecurity/Wireshark.md). In this segment, we'll evaluate CloudShark's built-in analysis tools, and discover ways the file can be evaluated online or downloaded and analyzed with Wireshark. I'm here at QA Cafe, and I'll select Analysis tools, Personal [Software as a Service](../../Glossary/Concept/SaaS.md). Now, once here, you can log into your account, or if you'd like to try CloudShark, scroll down, and you can sign up for a 30-day trial by completing this form. I have a basic account. Once in, as you can see, I've uploaded several packet captures. I'm going to open Interesting Object, which brings us to the CloudShark interface. Now, once here, we can check out some of the analysis tools, and I'll go over here and drop this down. Now, once we drop down the menu choice, we see a lot of options. For example, let's try Follow the Stream. Now, this is similar to Wireshark, where we can see the entire conversation, and I'll close that. In addition, there are a few graphs. Now, one of the more powerful analysis tools is Threat Assessment. Let's talk about how you can use this feature.
>
> **[1:35](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=95)** For example, you're at the [office](../../Skills/Web%20Development/Microsoft%20Office.md), and clients are complaining about slow response times, so you grab a capture and then upload the file, which I have here. Now, once you upload it, you can make it public, and then you can share it with your team, and then you can all examine the file together. We'll open the file. Now, once I'm here, I'm going to check out a couple of things. Because there was a lot of traffic on the network, I'm going to look at GeoIP World Map, and I'll select that right there. Now, this tells us where the endpoints are located, and you can see that there seems to be a lot of different countries where there's endpoints. Now, if I want to see the total bytes exchanged, we'll scroll down here to see the [Statistics](../../Skills/Data%20Science/Statistics.md), and here, we can see a number of different countries, and a lot of packets that have been exchanged changed. Now I'll close that. Now, another analysis tool I like to use is Threat Assessment. We'll drop this down and go to Threat Assessment. Now, this shows several levels of severity. Now, once here, we can click View Advanced Threat Analysis and I'll open it in a new tab, and once in, you can examine the results. In this case, we see Possible Dridex, which will prompt me to do additional research
>
> **[3:10](https://www.linkedin.com/learning/wireshark-essential-training/using-cloudshark-24577301?u=76281980&t=190)** to learn more about Dridex malware and how we can mitigate this threat. So, now, let's go back to Interesting Objects. Of course, we can do our analysis here, but we can also export the file and open it in Wireshark, and I generally download the original file, download it and open it in Wireshark. Now, once in the file, I want to see what interesting object there is within this file. I'll go to File, Export Objects, and HTTP. Ah, there we see an image, so I'll say Preview, and there's the interesting object. So, CloudShark has several built-in analysis tools, so you can evaluate the file online, or download and analyze with Wireshark.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (6), [Software as a service](../../Glossary/Concept/SaaS.md) (1), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
> **UI Navigation:** scroll down (2), go to (2), open the (1)
> **Analogies:** similar to (2), for example (2)
> **CLI Commands:** make (1)
> **Env Vars:** http (1)
> **Cross-References:** go back to (1)
> **Exercise Files:** download the (1)
> **Definitions:** is an  (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [What's next?](https://www.linkedin.com/learning/wireshark-essential-training/what-s-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-essential-training/what-s-next?u=76281980&t=0)** - [Lisa] Thank you for watching. In this course, I begin with a review of traffic capture and the benefits of traffic analysis. I compared [Wireshark](../../Skills/Cybersecurity/Wireshark.md) Legacy with Wireshark Next Generation and how to install it on either a PC or a Mac. I then moved into deep packet analysis of common protocols, such as TCP, UDP, IP, and FTP, and then summarized with working with packet captures, including Wireshark's expert system, detecting network latency issues, how to subset traffic, save and export, along with sharing captures using Cloudshark. If you're interested in learning more, please check out the IT and Security segment of the library, where we add new courses all the time. It's well worth your time to check out any course in the [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) series and take a look at my CCNA Security series. If you want to learn more about packet analysis, check out my courses on Wireshark and visit my homepage for a complete list of all courses. Keep learning. I hope to see you again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (4), [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) (1)
> **Env Vars:** tcp (1), udp (1), ftp (1), ccna (1)
> **Analogies:** such as (1)
> **Prerequisites:** install (1)
> **Speakers:** - [lisa] (1)


## Resources

- Exercise files available

## Skills Covered

- Wireshark

## Path Context

### In [Wireshark- Network Traffic Analysis](../../Paths/Cybersecurity/Learning%20Paths/Wireshark-%20Network%20Traffic%20Analysis.md)
**1 of 5** | [Wireshark- Functionality](Wireshark-%20Functionality.md) →

## Appears In

- [Wireshark- Network Traffic Analysis](../../Paths/Cybersecurity/Learning%20Paths/Wireshark-%20Network%20Traffic%20Analysis.md)

## Related Courses

_Courses sharing skills:_

- [Wireshark- Network Troubleshooting](Wireshark-%20Network%20Troubleshooting.md) — Wireshark
- [Wireshark- Functionality](Wireshark-%20Functionality.md) — Wireshark
- [Wireshark- Malware and Forensics](Wireshark-%20Malware%20and%20Forensics.md) — Wireshark

---

[↑ Back to top](#)