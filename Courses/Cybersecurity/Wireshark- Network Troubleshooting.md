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
  - '[Wireshark- Network Traffic Analysis](../../Paths/Cybersecurity/Learning%20Paths/Wireshark-%20Network%20Traffic%20Analysis.md)'
prev_courses:
  - '[Wireshark- Functionality](Wireshark-%20Functionality.md)'
next_courses:
  - '[Wireshark- Malware and Forensics](Wireshark-%20Malware%20and%20Forensics.md)'
path_nav: '[{"path":"Wireshark- Network Traffic Analysis","position":3,"total":5,"prev":"Wireshark- Functionality","next":"Wireshark- Malware and Forensics"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/network-troubleshooting
  - skill/wireshark
status: not-started
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/analyze-network-problems-23827196?u=76281980&t=0)** - [Lisa] [Wireshark](../../Skills/Cybersecurity/Wireshark.md) is a free open source tool that opens the gateway to troubleshooting and dissecting multiple networking issues. But here's the secret. By diving into the depths of network data, you'll gain insights on what is happening so you can help save the day. In this course, I'll help you master the art of Wireshark, uncover its hidden treasures, and equip you with the skills to evaluate networks like a pro. Get ready to explore time-based metrics, unlock the power of graphs, and even uncover the mysteries of transmission errors and attack signatures. Hello, I'm Lisa Bock, and I'm a security ambassador. If you're ready to take a closer look into some of Wireshark's tools and techniques to better analyze network problems, then let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (3)
> **Definitions:** is a  (1)
> **Speakers:** - [lisa] (1)

#### [What you need to know](https://www.linkedin.com/learning/wireshark-network-troubleshooting/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/what-you-need-to-know?u=76281980&t=0)** - [Narrator] [Wireshark](../../Skills/Cybersecurity/Wireshark.md) is a popular tool for packet analysis. This course is appropriate for anyone who would like to learn more on how to troubleshoot your network with Wireshark, including network administrators, teachers, security analysts, and students. Participants should have viewed [Wireshark Essential Training](Wireshark%20Essential%20Training.md) and have a good grasp of TCP/IP and the OSI model along with basic networking concepts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (3)
> **Env Vars:** tcp (1), osi (1)
> **Definitions:** is a  (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [narrator] (1)


### Traffic Capture and Analysis

[↑ Back to Table of Contents](#table-of-contents)

#### [Getting the most out of Wireshark](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=1)** - [Instructor] [Wireshark](../../Skills/Cybersecurity/Wireshark.md) provides the necessary tools to gather, analyze and study network data. In this segment, we'll review how to install Wireshark on a PC, or a Mac, cover choices you'll have during installation and learn why you should update Wireshark when prompted. We'll start here at [wireshark.org](https://wireshark.org), which is the Wireshark homepage. On the top of the page, you'll see information about SharkFest, which is Wireshark's annual conference, along with other menu choices such as learning opportunities and getting help. Here on the left, you'll see a link to download Wireshark. I'll click on that where you'll see three segments. First, I'll select Documentation. And then I'll select Online Multiple Pages and open in a new tab. This is the Wireshark Users Guide where you can find out a lot of the answers to questions that you might have while using Wireshark. Now we'll go back and now we'll take a look at Old Stable Release. Now you might select one of these because for whatever reason, you need to roll back to an Old Stable Release because a newer version has caused some problems. Now we'll take a look at Stable Release. Now, this is what most of us will use. The Stable Release lists newer versions of Wireshark.
>
> **[1:36](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=96)** Now first you'll see the following, this is the standard download for Wireshark 64 bit Operating Systems. Next is the [Windows](../../Glossary/Service/Windows.md) Arm Installer. Arm means Advanced Risk Machine. Now, this is a processor that is used on devices such as tablets. Windows PortableApps lets you run the app from portable media, such as flash drives and cloud drive services. Here we see the macOS Arm Disk Image for Mac that use either an M1 or Arm processor. The macOS Intel Disk Image provides an installation for a mac Operating System. To install it on a Mac, you download and unpack the mountable disk image and then simply run the install. In some cases, you may have to complete additional configuration options in order to resolve any errors, but that's rare. If you click on Source Code, you'll get an archive of the source code where you can study the various files. But if you're serious about development, you should obtain and update your code from Wireshark's get repository. Now, I've selected the 64 bit Windows download, and I'm going to install this. This will be a standard installation, so I'll click Next, and this gives you your license agreement.
>
> **[3:10](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=190)** I'll say Noted and select Next. Here we can select some of the components, and I generally leave it at the default. Here, you can select additional tasks such as creating a shortcut and associated file extensions. And you can take a look at all those file extensions that will allow you to work with other software [products](../../Skills/Software%20Development/Microsoft%20Products.md) that can capture packets. I'll leave that as the default and select Next. Here's where we want to install Wireshark, and then we'll go to this page here where it talks about Packet Capture. Now, up at the top, it says, "Currently installed NPcap version." Now when installing Wireshark, and especially for the first time, you're going to see an option to install NPcap. Now, you'll need to install this if you want to capture packets. NPcap comes from the [Nmap](../../Glossary/Tool/Nmap.md) project and it's the packet sniffing library for Windows. Windows will prompt you to update if you have an older version of NPcap. Now, if it's the first time you install NPcap, you'll see the licensing agreement, which you'll need to accept. In addition, you'll need to select some other options. And here it talks about NPcap, and I'm going to scroll down here, and here we can see some of the options. For example, restrict NPcap's driver's access
>
> **[4:49](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=289)** to administrators only. Along with this one, support raw 802.11 traffic, which is [Wi-Fi](../../Glossary/Standard/Wi-Fi.md).
>
> **[5:05](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-the-most-out-of-wireshark-23826188?u=76281980&t=305)** Now I'll select Next. Now something else you can choose is USB Capture. Now, that's something that you might want to use if you're going to do some troubleshooting and you want to see what's happening on your USB interface. And we'll leave it as it is and I'll select Install. It's completed and I'll select Next. And now I'll say Finish. Once everything's installed, you're ready to start using Wireshark. Now, every once in a while, you'll see a popup that a new version of Wireshark is available. It will let you know the version you already have and what's new. Now, if you're curious about what's new, you can view the release notes by going to Help, Release Notes, and it will open a local file in your browser. Now, once here we can read more about bug fixes, new or updated features, along with any updated protocol support. So in most cases, you should update your software, so that you're getting the very best out of Wireshark.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (17), [Windows](../../Glossary/Service/Windows.md) (5), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1), [Nmap](../../Glossary/Tool/Nmap.md) (1), [Wi-Fi](../../Glossary/Standard/Wi-Fi.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=0)** - [Instructor] When you first launch [Wireshark](../../Skills/Cybersecurity/Wireshark.md), you may think that there isn't much going on on the welcome screen. Well, while it's a streamlined interface, you'll find that there's everything you need to begin capturing packets and analyzing traffic. Up along the top, you'll find the menu choices, and you can also see the icons. If you don't have a capture file loaded, you'll see that the menu choices and icons are all there, but they're going to be dimmed. The icons will become active once you have a packet capture opened or are actively capturing packets. Now, let's take a look at a couple of things here. We see Capture and using this filter. And in this case, you could put a capture filter, but I generally don't. And then down below, you'll see some of your interfaces. And then you'll see maybe a squiggly line after that. That's called a sparkline, and that means I can begin capturing on that interface. Down below, you'll see information on how you can learn more about Wireshark. Now, let's get you a packet capture, so you can follow along. I'm at this website, Tcpreplay. What I'd like you to do is select smallFlows.pcap. Download and open it in Wireshark. Now, smallFlows.pcap is a pretty decent-size packet capture, and it's going to give us a lot to work with. Now, once you download it, open it in Wireshark. When you're troubleshooting issues,
>
> **[1:34](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=94)** you're going to probably go through most of those menu choices. But for this segment, let's just start at File. What I'd like to do is create a smaller file. So what I'm going to do is I'm going to show you a couple things. Up here, we have the coloring rules turned on, and Wireshark does try to help us to see if there's anything out of line. Now, we know that down below, we see the expert information, and we can see errors, warnings, notes, and chats. But over here, on the right-hand side, this is an intelligent scroll bar. The intelligent scroll bar will help us to [Zoom](../../Skills/Software%20Development/Zoom.md) in on problems very easily. So here's some black, and I'll select that. And we see that there were some problems in this capture. Now, I'm on packet 376. So go to packet 376. You'll right-click, and then say Follow the TCP Stream. We can close this window. But what I want you to make sure that up above in the display filter, it says tcp.stream equals two. All right, now let's take a look at the File menu choice. Now, we'll open up the File menu choice, and we can see a couple of things. First of all, I want you to take notice of a light gray line. This is separating like menu choices. So up at the top, we see things like Open, Open Recent, Merge, and Close. Down below, you see Save or Save As.
>
> **[3:09](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=189)** Here, we see File Set. Now, if I'm working with a large number of files, say, for example, I'm baselining, we can go to the next file or the file beforehand. I'll show you this device, say List File. This'll just give me the single file that I'm working with. Now, down below that, we see all information about exporting, exporting specified packets, packet dissections, objects, packet bytes. Let's take a look at Export Objects. We'll select that and go to HTTP. Now, this is a large capture, but these are all the objects that it collected while going through all the HTTP objects. And you can save them all if you want to, or sometimes you maybe just save a single file, for example, something of interest. For example, if you were doing malware analysis, you might look for a text file. What I do want to do is export specified packets. We'll select this. And when we open this up, you can see that it's already assuming that I want to just export the 306 captured packets that I filtered, and that's what I do want. But you can see that it gives us a chance to put a file name. And I'll put Stream 2, and we'll save it in the default here, .pcap. And I'll say Save. Now, I'm going to close this.
>
> **[4:41](https://www.linkedin.com/learning/wireshark-network-troubleshooting/navigating-the-wireshark-interface?u=76281980&t=281)** I'm going to say Quit. And then I'll open up the smaller file. So now I have something smaller in which I can work with. So with the File menu, the last two things, aside from Quit, as you can see, is we can quit, which is what we just did, and then also print. And this gives us different options in how we can export or print different parts of this packet capture, something that you might use if you're creating a report. So as you can see, there's a lot going on just with the File menu and the welcome screen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (5), [Zoom](../../Skills/Software%20Development/Zoom.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=0)** - [Instructor] When you're troubleshooting, you might want to edit the capture. We'll do this by going to the Edit menu choice. Now drop this down. And here you can see your like grouping starting with, Find, Find Packet, Find Next, Find Previous. And in this case, we could just select Find, and this allows you to put a filter. Now say you're looking for a string value, something specific, you would put that in there. I'll drop this down, and then we'll see the next grouping. This all goes into marking packets. Now, why would I want to mark packets? I'll just go in and I'll take a look and say I found something of interest in packet number three. I'll right click and I'll say Mark Packet. You should probably be able to see that it's a black background with white print. If for example, it's an already black background, you might not be able to see it as well. I'll take the coloring rules off. And there you can easily see your marked packet. Let's go down to packet number eight. And we can mark this as well. Now when I have marked packets, it's because I maybe thought something was interesting in that packet. Well, you're probably going to forget what it is that you found. So you might want to put a comment. Right click, and then say Packet Comment. Here's where I could put a comment. Now, it says Packet Eight Comment,
>
> **[1:34](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=94)** and I'll say this looks interesting.
>
> **[1:43](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=103)** Maybe something else more specific like check the port number.
>
> **[1:56](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=116)** Now once you put a comment, I want you to take a look at the top at the title. There's an asterisk. And that asterisk is telling me that I have a comment and I want to make sure I save that. So now what if I want to navigate through my capture and I want to go to the next marked packet. Now, as you can see, I have marked it. But when I want to navigate, I'll go to Edit, and then I'll go to the next mark. Now that'll jump down to number eight, and we know that I just put some packet comment. So, it nicely highlights it. And as you can see, it will say this looks interesting, check the port number. So that can help me. Now I can unmark those by simply right clicking and say Mark/Unmark and that will take it away. Now I'll turn the coloring rules back on. We'll go back to Edit. And then this next section, we're going to say Ignoring/Unignore. Every once in a while you get a packet capture and you might find a couple of management packets that really don't want to take a look at as far as time reference or anything else. So, I can say ignore that packet. Here you can see Set a Time Reference. Now, why would I use that? We (indistinct) have a small segment of your capture. Now in this case, it's a pretty small capture 306 packets, but if there were 3000, or 13,000, that's a larger capture. And I want to set a time reference just on a small segment. So I'd right click and set time reference. And as you can see, it'll begin on number three,
>
> **[3:30](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=210)** and then I'll go to eight. And then I'll say Set Time Reference. That will allow me to see some time lag in that small section. Now I'll right click and uncheck that. We'll go to the next section and that's time shift. And that's used for merging files and we need to shift so that the time is synchronous. And then here you can see packet comment, which is something we just did and if I don't want this to be in there, I can say delete all packet comments. That takes it away. Are you sure you want to do that? And I could take those away. Down below here, you can say Configuration Profiles. And we know that we can create custom ones. And then this is a menu choice that really has a lot in it and its preferences. We'll open this up. This is where I can truly put the preferences as to the way I want [Wireshark](../../Skills/Cybersecurity/Wireshark.md) to look. As you can see, we talk about the appearance, the columns, font and color, layout. And then here are all the protocols, we may have to do some modification. For example, if we know that there's a gaming port that is associated specifically with some of those specific protocols in there. I maybe would modify that. In this case, you can see here's just an example. Babel [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) Protocol and if we change that to another port, then that would reflect it so that I would know that that is using the Babel protocol.
>
> **[5:04](https://www.linkedin.com/learning/wireshark-network-troubleshooting/investigating-the-edit-menu-choice?u=76281980&t=304)** So, as you can see, while we're working with the capture, the Edit menu choice has a lot of options.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (1), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **CLI Commands:** find (6), make (1)
> **UI Navigation:** go to (5)
> **Analogies:** for example (2)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Exploring the View Menu choice](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=0)** - [Instructor] I've reopened Stream 2.pcap. This time let's take a look at the View menu choice. We'll drop this down. And here we can see all things that could influence the way we view our packet capture, and our screen. So again, we can see that they're segmented. And in our first one we can see by toolbars and Status Bar. Let's see what that's all about. Now if you take a look here. And you can see these icons that are sitting up here. Well that's your main toolbar. If we go in and uncheck that as you can see it goes away. But it's pretty helpful so we'll bring it back. The other thing is the display filter. Now the display filter is something that I use quite a bit. I want to keep that, but again if it's too busy, or you don't want that. Take that off. The next thing I want to show you is down below. This is the status bar. You might not have seen that before, maybe you haven't looked at it. But there's a lot of helpful information. For example, right here it says Stream 2.pcap. Now if I were to select on frame four. And down below I'll select the IP header. And right there it tells us a little bit about the IP header. That it's version four, and it's 20 bytes. If I were to select TCP, it tells us about the TCP header. Over here you can see a little bit more in the status bar. For example how many packets, and how many are displayed. Now if we were to put a filter,
>
> **[1:34](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=94)** it would tell us how many are displayed when I put the filter. And here we have the default profile. That's the status bar and again all three of those are very helpful to me. Now we can also do something called Full Screen. Now we'll just bring this open. And that expands the screen so we can see all the elements. And this is really nice because we can bring that up and then we have a little more landscape. And that's another really helpful thing. Now we can go to View and down below the Full Screen here we can see how we want those panels displayed. I generally always have the Packet List, which shows me the packets. The Packet Details which is right below that. And I don't normally use Packet Bytes. And I'll show you why. We'll select Packet Bytes. Packet bytes is what normally you would maybe call a hex dump. This information in in hexadecimal. And it really doesn't help me. I'd rather have the landscape so I take that off, and I just want to see the list and the details. So we have the packet list. And then if I were to select on frame four this just gives me the single packet details for that frame four. Now down below that we see the Time Display Format, and we will talk about that in more detail later. But also Name Resolution. Now Name Resolution is something that by default we want to keep the physical address. That doesn't hurt anything.
>
> **[3:08](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=188)** Name resolution for a physical address would be the organizationally unique identifier of the MAC address. As you see is says Resolve Physical Address. And then if I drop down. This ethernet two frame pattern. It tells me the vendor's name. For the destination and source MAC address. If I go to View, Name Resolution, transport address. But your transport address has to do with the port number. And that will logically associate us with an application. So that doesn't hurt anything. What I don't generally do is Name Resolution, Resolve Network Address. And if I were to do that, that would hit the DNS server quite a bit and would cause more traffic. So I don't want to do that. Now [Zoom](../../Skills/Software%20Development/Zoom.md) is a helpful feature. Now I'll tell you why I would use that. As you can see the packet capture looks fairly decent. But what if I want to zoom it in and I'm doing a presentation? I do enlarge it and in certain cases I'll show you that zoom is a helpful feature. We can zoom back out and here's where we can reset that. We can also take a look at the subtrees and expand the subtrees or collapse. Well now the subtrees are when we take a look at a single capture. Let me just show you. I'll bring this up here and then we'll explore this. Now as you see in frame four, and each of these headers.
>
> **[4:40](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=280)** Of course frame four is just the [Metadata](../../Skills/Web%20Development/Metadata.md) about frame four. But each of these headers, there's a little caret on the left-hand side. So if I go to View and say expand the subtrees. Then that opens it all up so that it can take a closer look at all of those frame headers. So place my cursor on that and then I go to View, and expand the subtree. And that will just expand it. Down below you can see that is you colorization rules. And whether I want to colorize the packet list. Again you can do this right here by unchecking that. And that takes the color away. But the problem with that is you can't see that intelligent scroll bar. So I do like to keep that on. But in some cases I take it off 'cause it may be too busy. If I want to resize my layouts or the columns I can do that there. And Internals, there's a little bit more information for example if you're developer. Now every once in a while you might want to modify or you've modified the capture. And then you might want to reload. So why would I do that? Well I'll go to frame four. I'll right click and for example if that frame four was a management packet, I didn't want to see it as part of this capture. I could say ignore the packet. Now watch, It'll go away.
>
> **[6:14](https://www.linkedin.com/learning/wireshark-network-troubleshooting/exploring-the-view-menu-choice?u=76281980&t=374)** Now it's there but it's ignored. But I want it back. So I can right click and then we can bring it back out. Every once in a while if you're working with a capture, you've made some modifications, you added comments. You set time references. You really messed up the capture. You want to bring it back and reload it. You just go to View and Reload. And that'll bring it back to the way it originally started. So as you can see there's a lot of information, and a lot of ways we can modify our view.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Zoom](../../Skills/Software%20Development/Zoom.md) (4), [Metadata](../../Skills/Web%20Development/Metadata.md) (1), cursor (1)
> **UI Navigation:** go to (6), select the (1)
> **Env Vars:** tcp (2), mac (2), dns (1)
> **Analogies:** for example (4)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Getting ready to capture](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=0)** - [Instructor] In this segment, we'll take a look at some capture options. You'll see how you can select a specific interface and how you can capture to a permanent file or a temporary file using a ring buffer as well as some of the various capture methods. So we're going to go to the menu choice capture, and we'll drop this down, and as you can see, there are options, start, capture filters or refresh interfaces. We'll select options, and once you open the options, there's a lot of information here. First of all, we see a list of interfaces that are available. You can go to manage interfaces and you can find a little bit more information, and as you can see, I'll just pull this over here and you have some VMware adapters, Bluetooth, local area connection, and I can just uncheck those, 'cause really, I just want the [wifi](../../Glossary/Standard/Wi-Fi.md) and I'll say okay, and then, you can also see that it automatically, since I narrowed that just to the wifi, it just gave me the wifi interface. Down below here, it says, enable promiscuous mode on all interfaces, and of course, we want that because we want to capture all the traffic including any management, traffic, broadcasts or multicasts. Now if you were to select this, you can simply say start, or in some cases, you might want to put a capture filter. I'm going to go to output.
>
> **[1:32](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=92)** When you're capturing, sometimes you just grab a quick capture and you're not going to output it to anything. You just start it, and then, when you're done, you stop it. But here's where you can actually capture to a permanent file and you can force it to go to a specific location, and in this case, you can select browse, which will bring me to my folder on my desktop and we can call it whatever you like. Now for this one, I'll just say ring because I'm going to do something with this, and then, I'm also going to call it .pcap. I'm going to force it to save it in a .pcap format, and we'll say save. Now, here again, it will say what kind of output, but I've forced it to output it in a pcap format. One of the things that you can do and understand that when you're doing some troubleshooting, you might be running a capture and you might leave it run for a while. Well the problem is with that is it's going into a temporary file and it's going to consume all the resources on your laptop. Sometimes you just want to let this run and then observe for traffic that's out of the ordinary. So you can use what's called a ring buffer. Now I can do this by outputting it, as you see, to bring .pcap, and then I'm going to say create a new file automatically after, and in this case, we'll make it really small because it'll go fairly quickly, 30 packets, and here, we can say use a ring buffer with two files and we're going to keep this really small, but what will happen is [Wireshark](../../Skills/Cybersecurity/Wireshark.md) will simply overwrite the ring buffer.
>
> **[3:07](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=187)** In some cases, we then can go to options, and if we go to options, you can see here, stop capture automatically after, and what I can say is stop it after a certain number of packets or in certain number of files, and in this case, I'm going to say after four files. So it'll run through the ring buffer twice, then overwrite it and it will stop at four files. Up here into the options, you can see update list of packets in real time, and I do like that, and automatically scroll during live capture, and you can also check that or show capture information during live capture. There's another location here where you can see name resolution, and we'll again, we'll make sure that we're on wifi and we're going to say start. Now once I start this, you're going to see the capture will occur. It'll blank, meaning it'll stop because it's writing to a ring buffer, and then it will continue, and then it will automatically stop after four files. So now I'm going to say start. We'll turn on the coloring rules so we can take a better look at this capture. Now I know it stopped because, as you can see, the blue fin is available for me to start the capture again, but where are the files? I'm just going to drop this down and I'll go into Wireshark captures, and there, you can see the two ring buffers. Now again, this will go through and it'll overwrite it and I can have it keep writing over and over again if I want to,
>
> **[4:39](https://www.linkedin.com/learning/wireshark-network-troubleshooting/getting-ready-to-capture?u=76281980&t=279)** and a ring buffer is just a temporary buffer that you can use it to do some troubleshooting. So as you can see, there are various capture options when troubleshooting with Wireshark.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wifi](../../Glossary/Standard/Wi-Fi.md) (4), [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (3)
> **UI Navigation:** go to (6), open the (1)
> **CLI Commands:** make (2), find (1)
> **Speakers:** - [instructor] (1)

#### [Examining a capture](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=0)** - Troubleshooting an unstable and sluggish network involves assessing trouble spots to determine the root cause. Now this can include device malfunction, misconfiguration, or even malware. When users perceive the network is slow, there are most likely errors in the transmission of data or network congestion. When assessing network performance, the three main metrics are latency, throughput, and packet loss. Latency is how long it takes to transmit a packet. And we can measure this by using roundtrip time. Throughput is how much data is sent and received at any given time. When latency is high, throughput goes down and that's because with high latency, the sender doesn't send any packets, which reduces the throughput. Packet loss is when data doesn't make it to the final destination. Keep in mind, the applications and end points will work to manage the delays and congestion. You'll see evidence of this in [Wireshark](../../Skills/Cybersecurity/Wireshark.md) with indicators, such as keep-alives, duplicate acknowledgments, and retransmissions. The server keeps track of the client acknowledging the data. However, if the server doesn't receive an acknowledgement in a timely manner, the server will assume the packet is lost and this triggers a retransmission of the data. Let's take a look.
>
> **[1:32](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=92)** Let's go back to our capture, SmallFlows.pcap. Now, first we want to filter on TCP stream 68. So we'll right click and I'll say follow the TCP stream. But instead of 16, I'll put a 68. Now I want to follow the stream. And I want to show you something. Right here, it says, 1682 bytes are missing in the capture file. So a large chunk of data didn't get through. We'll close this. And now we'll open the expert system. Go to the lower left hand corner and open the expert information. Now, what I want to do is limit it to the display filter by selecting right here. And then I want to show you the retransmissions. Now, they're under notes. And what I want to just show you is there's a spurious retransmission that's listed. That isn't bad, that basically is a retransmission that's not necessary. Somehow it got crossed in the bytes and flight and it's resending the same data, but these other retransmissions are indicative of some problems. So in this case, you see, and I'll bring this back up, that there are six retransmissions.
>
> **[3:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-a-capture?u=76281980&t=180)** - Now what I want to do is I want to show you how you can apply a filter on the fly from the expert information. I'll go into that retransmission and I'll right click. And then I'll say, prepare as a filter. Now, if I say apply as a filter, it will put it up in the display filter and it will run the filter, but I just want to prepare a filter. And now I want to say and selected because I want it to be stream 68 and retransmissions. Now I'll close this. And as you can see, it's up there waiting for me to press enter. Now I can modify it if I want to, but I'm just going to press enter. Now you can see your retransmissions. Now go to packet 10288. And what I'll do is I just want to show you here, the source port 80. So that's coming from the server. It's a retransmission. One other thing I want to show you, we'll go to TCP analysis .retransmission, and I'll take that out. Instead, I want to put lost segment, L O S T underscore segment, and then press enter. And here we can see a number of lost segments. So now that we see indications of congestion, our next step is to follow through and locate the trouble spots on our network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (1)
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
> **[0:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-examining-evidence-of-congestion?u=76281980&t=6)** - [Instructor] In this challenge we'll use the capture smallFlows.pcap. I want you to filter on TCP stream 16 and then open the expert system, limit to display filter and then answer these two questions. How many retransmissions are listed? And then the other question is, who is sending the retransmissions? The client or the server? This challenge should take about five minutes. Good luck.

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
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-examining-evidence-of-congestion?u=76281980&t=0)** - [Instructor] So, how did you do? We'll let's review. I've opened up smallflows.pcap And the first thing we're to do is filter on TCP stream 16. Now there are a number of different ways we can do this, but the easiest way is select any TCP stream, right click, and say follow the TCP stream. And I'll close this window. And then all I need to do is modify the display filter to say TCP stream equals 16. And then press enter. The next one is open the expert system. So I go to the lower left hand corner, select once, and then I want to limit to display filter. So I go down below, limit to display filter. The next question is how many retransmissions are listed? So we can take a look up here. And this frame is the suspected retransmission. And we can see on the far right that there are seven retransmissions. Another thing we want to do is see who is sending the retransmissions, the client or the server? So we can do a filter from the expert information by right clicking and this time I'm going to say prepare as a filter and selected so that will add another variable to the filter. And then I'll close this
>
> **[1:34](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-examining-evidence-of-congestion?u=76281980&t=94)** and now it's up there in the display filter, and then I'll press enter. So now we'll go to packet 8841. And then what I want to do is just go to the source port 80, and that is coming from the web server. So the server is sending the retransmissions.

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
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=0)** - [Instructor] The concept of accurate time on a network is very important. CIS Log audits and logs events which you can use to track problems and troubleshoot issues. In addition, some protocols such as curb rows require synchronized time on the network. Periodically I check my wall clock with a more official source. I'm here at this website, [time.gov](https://time.gov). And we can take a look over here and it says your clock is off by 1.017 seconds. So now I'm in [Wireshark](../../Skills/Cybersecurity/Wireshark.md) and let's take a look at how we can view time. We'll go to View and a significant sub-menu choice deals with the time display. And I'll go here and we'll just expand this, the time display format. Now in the first couple you can put it in any number of different ways. Date and time of day, year, day of year, and time of day, time of day, and here's one I probably would never use, seconds since January 1st, 1970. Most commonly you'll probably use one of these three. When we're doing an analysis in how would you like the time displayed, seconds since beginning of capture will show you how many seconds that have passed since the capture was started. Now that can be helpful, but in most cases it really won't be able to show you large gaps. Seconds since previously captured packet will show you how many seconds that have passed since the previously captured packet.
>
> **[1:35](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=95)** Now that can help but what generally happens is we do put a filter. And that's why we most likely would use this one, seconds since previously displayed packet. Now this is going to be used when you apply a display filter as it will show many seconds that have passed since the previously displayed packet and will more accurately show gaps in time. Now down below here, this is all precision, and when selecting a format this is going to be how many decimals places will be displayed. In most cases it's just really best to use automatic and this is the default because that will give the best precision the operating system can provide. So now that we know that, we can see the time up here, it is set for seconds since previously displayed packet. So what we can do is I'm going to right click and I'll say follow the TCP stream. And then I want to go to stream 68. The 68 we know has some issues and we can see over here in the intelligence scroll bar we do see some issues and that indicates here the black. Well now where is the trouble happening? Well let's just take a look. If I go to any of these where we see the source 66.220 what I want to do is I want to apply a filter. So I really just want to see the traffic coming from 66.220.
>
> **[3:11](https://www.linkedin.com/learning/wireshark-network-troubleshooting/displaying-time?u=76281980&t=191)** So now I already have a filter up there but what I want to do is prepare as a filter and then say and selected. And then I'll press Enter. Now we can actually see the gaps in time. And here is one really big gap in time, 32 seconds. Here's another one, 14 seconds. Now that's indicative of some issues, and as you can see then there's retransmissions and there's been a gap in the transmission. In some way something has happened. So we'll do one more thing and I'll shown you this. I'll go to [Statistics](../../Skills/Data%20Science/Statistics.md) and then I'll go to TCP Stream Graphs and we'll do a time sequence graph. And here what it is really going to show you is confirming that nothing is happening for gaps of time. And here you can see that we get a little data transmission and then there's a wait period. Another little data transmission and then wait. And again here. So the whole concept of time is important and it can help you with troubleshooting issues on the network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=0)** - [Teacher] Part of effective packet analysis is knowing how to use the tools within [Wireshark](../../Skills/Cybersecurity/Wireshark.md). Let me show you a couple of things that I refer to, just to help keep track of what's happening. The one thing is when you go to [Statistics](../../Skills/Data%20Science/Statistics.md), and you can see that there are a lot of choices in Statistics, I want to go to Capture File Properties. Now, when you open this, you can see a lot of the [Metadata](../../Skills/Web%20Development/Metadata.md) about this capture. And down below, it tells you the time of when it was taken, how long it had taken to run, and if it knows the [Hardware](../../Topics/Hardware.md) it will put that in as well. This also tells us a little bit about statistics as far as average bytes per second, average bits per second, and any interface information. You can also put a comment so that you can refer to this information at a later date. So for this place, I would just put a file comment, "Many duplicate ACK's must investigate."
>
> **[1:11](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=71)** And then I'll say, Save Comments, and then I'll close it. I know that there are a lot of duplicate acknowledgments, but let's take a look at the expert information, and we can see a lot more was to what Wireshark perceives as problems that we might want to investigate. Over in the lower-left hand corner is the expert system. Now, if we take a look at that, I've laid my cursor on it. It says, error is the highest expert information level. I click on it one time and it opens the Expert Information panel. Now within it, you can see that there are column headers on there, and it lists it by the following. Here it talks about the severity, the summary of that information, group, protocol and count. So the severity is of the severity of the error that is listed. Now, in this case, you can see that it is listed and it's grouped as well. Now, if you see that there's a carrot on the left hand side, that means that there's more information. So I'll drop that down. And then it gives you details as to what it is identified. Now, within each summary, there are several common groupings. And you can just take a look here. Some of those groupings would include, checksum, sequence, protocol, and then also in this case, malformed. Over on the far-right-hand side, you see a count. And that tells us how many packets had that particular error. And I'll just drop this down.
>
> **[2:44](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=164)** So now you can see all 34 of the errors that exist. Now, when we look at the severity, some of which are worse than others. And again, this is only a guide. It's for you to go further and do some more investigating. When you look at that's red, this shows some possible serious issues, such as malformed packet, as you see, or a new fragment overlapping old data. The yellow is warning. This indicates a warning that there may be problems you want to take a look at and investigate further. For example, this DNS query retransmission. And you can see that there are a couple of warnings in this case. A note is down below here. And in this case, it just tells us that general notes of interest, many times they're part of a connection. And that would be something like a TCP Keepalive packet, or in this case, as you see, duplicate acknowledgement, now the chat is going to really just list a typical workflow and state change. And that is not really going to be anything bad, but again, here you see connection finished, and we have our FIN and FINACK. Now over in the lower-left-hand corner, I'm going to drop this down here. Now you can see that it's going to allow us to put things such as error, warning, chat or note, and if there are comments on the packets comments. For example, if I really didn't want to see the chats, I can uncheck that, in the notes, I can uncheck that. So now I'm only going to see errors and warnings. I'll bring those back in
>
> **[4:18](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-details-and-expert-information?u=76281980&t=258)** and then I'll show you a few more things. So we can take a look at this information here, and on the bottom, I can search for specific information. W-P-A-D. Now I can drop this down. And I know that there was a query, A-W-P-A-D, and I can go right to that packet. So you can search as well. And then one more thing is I can right click, and I can actually filter, find, colorize, look up, expand all or collapse all. In this case, I'll apply as a filter and it'll just say selected, and it will run that filter. And then I'll close this. So as you can see, the statistics tells us a little summary on that packet capture, and the expert system helps identify possible problems that we should further investigate.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (4), [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (2), [Metadata](../../Skills/Web%20Development/Metadata.md) (1), [Hardware](../../Topics/Hardware.md) (1), cursor (1)
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
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=0)** - [Instructor] Another tool that we can use while troubleshooting is TCP stream graphs. Now this is a way that we can visualize TCP data stream and we get to those by going to [Statistics](../../Skills/Data%20Science/Statistics.md) and then TCP stream graphs. But first, let's force it to follow one of the streams. We're going to go to TCP stream 16. I'll right-click and I'll say follow the TCP stream, and then I want to make sure it says 16. If it doesn't, then make sure that it says TCP stream equals 16. Now we know that there's a lot of issues with this stream and I'm going to just scroll down and take a look at the time gaps. We also want to make sure that the time display format is set at seconds since previously displayed packet, and it is. So now let's take a look at the stream graphs. Go to statistics and then TCP stream graphs. Now once I'm here, you can see that there are five choices, but I'll select any of those and it will bring me up a single window. We'll go to window scaling. Now up at the top, it'll tell you [Windows](../../Glossary/Service/Windows.md) scaling for these two IP addresses. Now it will give you the window received or the bytes out and the window scaling is a factor that helps us to assess really how much I can send, and in this case, I'm going to uncheck bytes out and you can see that'll go away, and the receive window is the one up at the top. That'll go away as well. When I go over here to type, I can drop this down and I can also take a look at round trip time.
>
> **[1:34](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=94)** Now round trip time measures the time it takes to travel from client to server and then back, and this can also give you an indication if you're seeing like longer and longer round trip times that you might have some delays or congestion. Over here in the right-hand side, you can see that I can switch direction very easily. So this is going from 72.14 to 192.168 and I can switch directions. Another graph that's within this is throughput and throughput is the data that's getting through, but it's not always something I want. It's including management traffic. Up at the top here, you see there's two dots. We're going to uncheck that and you'll see that the segment link goes away, but I can add that. Now the throughput is checked, but I might also want to see what is goodput and goodput is the good information that's coming through. What I also can show you is that if I drop this down, you can see that there are two times sequence graphs. The TCP trace will help visualize TCP metrics and it's similar to the TCP trace utility. What it allows us to do is see when any selective acknowledgments. Selective acknowledgements or SAC is done by TCP that says keep sending the data, it doesn't have to be in order, I'll let you know when I need any. In this case, I don't see any selective acknowledgements. But the one I do like to use is the TCP time sequence or the Stevens Graph. So when you have this open, as you can see, this shows us,
>
> **[3:07](https://www.linkedin.com/learning/wireshark-network-troubleshooting/graphing-the-tcp-streams?u=76281980&t=187)** and you could place your cursor here and pull this up. You can take a look behind the scenes here at the packet list, and when I place my cursor here, you can see that nothing happened for about 90 seconds, and then, as you can see, that was that delay. I'll pull this down here. I'm going to switch directions, and then I'm going to also show you how we can do a [Zoom](../../Skills/Software%20Development/Zoom.md). As you can see, I can move this around or I can put my finger on control and then roll it in and that can zoom it in. We also can do a zoom, and right here, I'm kind of wondering what's happening and you just do a little lasso and it will continue to zoom in. Okay. So you can see there a little interruption here and then go back to drags. Then you can actually click on the packet itself. In case you were working with it for awhile, you may have wanted it to be back to the way it was, you can simply say reset and that brings it back to the original window, and the last thing we can do is if we wanted to share this with someone or save it, we can select save as, and as you can see, we can put it in either a PDF, bitmap, PNG, or JPEG. So as you can see, there is a number of stream graphs that helps us to visualize TCP data streams while we're doing our troubleshooting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Zoom](../../Skills/Software%20Development/Zoom.md) (4), [Statistics](../../Skills/Data%20Science/Statistics.md) (2), cursor (2), [Windows](../../Glossary/Service/Windows.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-using-time-to-view-gaps-in-transmission?u=76281980&t=0)** - [Instructor] Using the capture streamto.pcap, you'll want to make sure that the time display format is set to seconds since previously displayed packet. Then I want you to create a filter that only shows the traffic from 72.14.213.147. Take a look at the capture now with the filter and what are some of the significant time gaps? And then finally, run a TCP time sequence Stevens Graph. This challenge should take you about five minutes. Good luck.

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
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=0)** - [Instructor] Okay, now let's take a look. I'm in stream2.pcap and I have the instructions over here in the right hand side. Now, the first thing is we need to make sure the time display format is set to seconds since previously displayed packet. So we're going to go over here and to view, and then time display format. Now the default is seconds since beginning of capture, but we want it to be seconds since previous displayed packet. So next we'll want to create a filter that only shows the traffic from 72.14.213.147. So right here, we can just grab any of those where the source IP address is seven 72.14. Then we'll drop this down so that we can get to the source IP address. Now, once we're there just right click. And remember, if we say apply as a filter and then say selected, it will run it. Or we could say prepare as a filter and selected. And as you can see, we prepared it as a filter. Didn't run it, but that's just to make sure if I need to modify that filter in any way. And I'll just press enter. Now we have this so you can sort of see the time gaps and I'll just scroll down here and you can see one here with 13 seconds. There's a significant one.
>
> **[1:32](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=92)** And then there's another significant one, 91 seconds. Or you can actually sort. Now we know that we have columns here, so we can sort the columns by clicking one time and that'll put the lowest number first. And I can select that again. And that puts your highest one up front. And you can see that 91 seconds, 23 seconds. So there's some pretty significant time gaps in there. The last thing is run a TCP Time Sequence Stevens Graph. Now Stevens Graphs are available by going to [Statistics](../../Skills/Data%20Science/Statistics.md), dropping statistics, and then down at the bottom where it says TCP stream graphs. Now understand that all of these graphs are within the one frame so I can select any of those. And we'll do that. We'll just say time sequence. And okay, now I'm just going to close this and so we can get a better look at this and there you see those large gaps. Now, once I'm in this graph and this is just letting me drag it over, if I want to [Zoom](../../Skills/Software%20Development/Zoom.md) in on any of those areas, I could, you select right here and then you lasso it and then it zooms it in. Then I can go back to drag and then pull this over so you get a better look at it. And we can bring it back down. But the other nice thing about this, once I'm in this graph, if I just simply select any of those points there, that'll get me right to that specific packet and we can take a better look at it.
>
> **[3:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-time-to-view-gaps-in-transmission?u=76281980&t=186)** Okay. So that's it for your challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (2), [Zoom](../../Skills/Software%20Development/Zoom.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=0)** - [Narrator] In [Wireshark](../../Skills/Cybersecurity/Wireshark.md), you can view conversations and endpoints in a capture to provide valuable insight on how devices communicate with one another to help assess network efficiency and security. In this segment, we'll outline how to examine endpoints, which represents one side of a conversation, along with conversations or communication between two endpoints. To see the conversations that are taking place on a [Windows](../../Glossary/Service/Windows.md) operating system, you can go to the command-line interface and run the command netstat. netstat is a handy utility that shows network connections, [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) tables, and interface [Statistics](../../Skills/Data%20Science/Statistics.md). In this case, I'll use the switch -n, which forces netstat to display numeric values instead of a domain name for the IP address. Now, once you run the command, it'll take a second to run and it will show you the active connections. All right, now I'll select one of those conversations, right here, and here we see the endpoints in a TCP conversation. Now over here in the left, we see the local address. That's my IP address, and that's the port. Another endpoint is the foreign address, and here we see the IP address and the port, and those two are in a conversation and it is established. So now let's see how we can use conversations
>
> **[1:39](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=99)** and endpoints to do some troubleshooting. Imagine it's a normal Tuesday afternoon and your phone buzzes with an urgent email notification. You open the message to find a request from the payroll manager, Sarah, telling you that something's not quite right and to please call when you can. You call Sarah and she really can't verbalize what isn't right. She explains that all applications seem to be slower and the whole department is complaining. Now the exercise begins. To demonstrate this, we'll grab a capture here on CloudShark, and I'll download this packet capture and open it in Wireshark. So go to Export, Download File, and Download the original file. Now I've saved it locally as ZeroAccess.pcapng. Now once in here, I've taken off the coloring rules as they can be distracting. We'll first go to Statistics and we'll take a look. Here we see both endpoints and conversations. So let's take a look at the endpoints. Now in this case, remember this is just one side of the conversation. Now when we look at this, we see the different tabs, IPv4, IPv6, TCP, UDP. Well, you can add more if you like. Over here on the left hand side, you can see that there are plenty of other protocols that we could add. I'll just select Ethernet, and that could be another one
>
> **[3:13](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=193)** we might want to take a look at. But I'm going to close this, and now I'm going to go to Statistics and Conversations. Now this provides a lot of the same information, but remember, this is both sides of the conversation. These are both endpoints. Now again, when you're looking at this, you want to see possibly something that's out of line. Now we know that we can spoof an IP address or change it and we can spoof a Mac address or change it. But the one thing we can't change is the port. So I generally take a look at the port usage. So go to TCP, and here we see the ports, ports A and ports B, and we can sort them. Let's go to UDP. In this case, I'm going to go to port A and I'll go to port B. Now I do see that there's a lot of 1104. Now port 1104, I'm not really sure what's going on here, but we also see a lot of IP addresses that seem to be coming from all over. So let's see what we can learn about port 1104. I did a search on port 1104, and here we can see some details. Now we find that's indicative of a Trojan and Trojan behavior, so that's something I might want to look at a little further.
>
> **[4:46](https://www.linkedin.com/learning/wireshark-network-troubleshooting/viewing-conversations-and-endpoints-23824198?u=76281980&t=286)** Now again, this is something when doing your investigation, sometimes it's not a clear indication of one thing or another, so you'll have to dig deeper. Now going back to the packet capture, I'm just going to take a look at the capture as a whole. And in this case, I'll go to Statistics and Protocol Hierarchy, and I see Real Time Transport Protocol. I'm just going to close that and look at that and see. Here we see RTP. All right, well, let's take a look at Telephony and RTP, RTP Streams. All right, now that's odd. Now when you take a look at the duration in this case, there's no duration. And this is odd because normally we would see the streams showing some duration, and there's nothing going on. All right, we also want to take a look at the port. Here is port 1104, but on the Source Port we see port 16464. Well, let's take a look at what port 16464 can tell us. And I did a search, and here we see that it is related to the ZeroAccess trojan. So the next step would be to do a little bit more research on your end to find out what has happened and to prevent any further damage. So in troubleshooting the network, we can use conversations and endpoints during our investigation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (4), [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (2), [Windows](../../Glossary/Service/Windows.md) (1), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=0)** - [Instructor] While doing troubleshooting, there are a couple other tools within the [Statistics](../../Skills/Data%20Science/Statistics.md), one being a flow graph. Now, a flow graph helps us take a look at the exchange of data. We can visualize normal traffic along with possible issues with a connection. But within the Statistics, there's also protocol-specific statistics that we can run as well. Let's take a look. I'm in smallFlows, and there's a lot going on on this. So, this will give us something to look at, but with dropdown Statistics, we'll start with [DHCP](../../Glossary/Standard/DHCP.md). And, as you can see, BOOTP statistics, which is the way it was referred to. It's now just DHCP if you're doing a filter. Now, open this up, and here you can see the different message types that are within this. And this gives you the number of the packets in the count. For example, if you're having clients complain that they're not getting an IP address, you might want to run this quickly just to see if, possibly, there are 700 discovers that are going out with no acknowledgements, then you know that they're not getting an IP address. It could be that the DHCP pool is exhausted, but it will allow you at least to get a snapshot as to what's happening with the statistics at DHCP. Another protocol that you can take a look at is DNS. And I'll just open this up. Now, DNS will give you some trouble every once in awhile, and this just, again, gives you a quick look at the total packets, the different types of query. As you can see here, type A address, which is an IP version four address,
>
> **[1:35](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=95)** and then the Service Stats. And in this case, you see here the response time in seconds. This is a really good thing for you when you do some baselining is to compare over time. Is the response time getting slower? They might complain they're not able to get onto the internet, or it's taking a long time. It's possibly because the response time of DNS has slowed so much that it does seem like it's forever. So that's, again, another quick snapshot that we can take a look at. Another of the statistics is HTTP, and we can just take a look at. There's a couple things. I'll take a look at the Request Sequences and the Packet Counter. First, we'll take a look here at the Request Sequences. And here, you can see all of where the different requests went out, and that gives you a lot of information. And you can filter if you want there, but also let's take a look at the HTTP Packet Counter. This is a nice, quick view. As you can see, the different types of status that you can get, 400 Client Error, 300 Redirection, and, of course, most of them should be a 200 Success. So, that's a nice snapshot, again, if you are doing some troubleshooting, and you just want to see what's happening with HTTP. Now, we'll take a look at the flow graph. But first, let's zero in on a specific stream. I'll just right-click and say, Follow the Stream, and I do want stream 16. Alright, TCP stream 16.
>
> **[3:14](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=194)** As you see, we have a lot of issues on that stream. And, certainly, we can visualize with the Intelligent Scrollbar over here, along with a huge number of black entries, but let's just take a look at the statistics. And I'll drop this down, and what we want to do is go to Flow Graph. All right, now, when you look at the flow graph, and I'll just pull this up here. In the Time, there isn't a timestamp on here, but once I limit it to the display filter, you will see a timestamp, and so I'll select this. Now, as you can see, you can tell a lot about what has happened during this capture, and now I'm going to limit to display filter, and that will just narrow our scope. Now, when you take a look over here, you can see the time of transmission as it's evolved, and then also across the top, you'll see the IP address of the two end points. Now, when we just walked through this, and if you see that this is a normal request, the client going to the server asking to start a connection with the SYN packet. The server responding back with a SYN ACK, and then the client with the final acknowledgement, the begin the connection. And then, after that, you see the exchange of data. And over here, you can see the comments as to what has transpired. But then, you see there might have been some issues in the transmission. And, in this case, we see there is some issues. Now, if you click on it, and you see in the background that it is lighting up because it's going to refer to that packet when I click on it.
>
> **[4:46](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=286)** Now, in addition to us taking a visual of this, we can do another thing. We can save this. So if, for example, you wanted to just grab this as a screenshot to send as a report, I can say, Save As, and you can save it in a number of different things. As you can see, a PNG, bitmap, JPEG. I am going to just save it as a PNG. And I'll just say, Issue in Stream 16.
>
> **[5:19](https://www.linkedin.com/learning/wireshark-network-troubleshooting/creating-a-flow-graph?u=76281980&t=319)** And we'll save that. So, that is actually going to be an image, but it will only be this specific image and no more. But if you want more, you would save it as a text file. So, drop this down and save it as a text file, and then that will grab the whole stream. So, we could say Save, and then you can send it off for analysis. So, as you can see, within Statistics, there are a number of other different tools, including protocol-specific statistics, and also we can run a flow graph.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (10), [DHCP](../../Glossary/Standard/DHCP.md) (4)
> **Env Vars:** dhcp (4), dns (3), http (3), syn (2), png (2)
> **UI Navigation:** click on (2), dropdown (1), right-click (1), go to (1)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** for example (2)
> **Code Identifiers:** smallflows (1)
> **Speakers:** - [instructor] (1)

#### [Plotting an IO graph](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=0)** - [Narrator] Another tool that we can use is an IO graph. And this'll help us to compare characteristics in a capture file. Now I've opened up this packet capture and within it, there are several things that are going on. I'll go through and show you how to do an IO graph. And then I'll have you do one in the form of a challenge. So when taking a look at this, I'll scroll up and down and we can see the intelligent scroll bar is telling us there are multiple issues. So we'll click on this dark area here and we can see out of order, duplicate acknowledgement and fast retransmissions. So now let's take a look at the IO graph. We'll go to [Statistics](../../Skills/Data%20Science/Statistics.md) and IO Graph. And when we open it, you'll see that there are All Packets and generally that's there as default. And what that is is all the packets in the capture. Now, when you take a look at the column headers, enabled means whether you want this to show or not. If it's unchecked, it won't show. The graph name, All Packets, but we can change that by just double-clicking that. The same goes with the display filter. And again, you can change that. The color is what color you want that line to show up. And I can change that to a dark blue. This is the style. Now just drop this down. It's a line right now, but perhaps I'd like to make it a bar. Or I can actually do something, in addition, we can make it a square and I'd have to go back. We'll change it back to the line.
>
> **[1:33](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=93)** Now, the Y Axis, Y Field and Simple Moving Average, those are for advanced calculations. And I'm going to just leave those at the default. Down below here, you can see drags and zooms. Drag is me just allowing me to move throughout this. [Zoom](../../Skills/Software%20Development/Zoom.md) is when I want to zoom in, you select that and then lasso a certain area, and we'll pull this back to drag so that you can move this up and around. Now, I'm going to just close this and we're going to find a filter. We'll go down to the expert system. And here we see a lot of different things that are happening. Let's take a look at this one, suspected retransmission. Now we know that there are 85 of these, but why don't we just do a filter on retransmissions? Right-click and say Apply as a Filter, Selected. And I'll close that. Now, as you can see, it's up there in the display filter, which I can copy it, but I'll show you what happens when I go to the IO graphs. Drop down Statistics and select IO Graphs. And here you can see that it automatically populated that with the TCP data analysis retransmission. Now the graph name, you can just rename it, "Retransmission."
>
> **[3:02](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=182)** And it is selected. Again, you might want to change it to an impulse or something in order for it to stand out and change the color. Let's close this and add one more. I'll take that off and we'll go back to the expert system. And in this case, let's take a look at the keep-alives. The TCP keep-alive segment, there are 59 of those. I'll right-click and Apply as a Filter. Now again, this is already up there, so it should populate the IO graph. We'll go to Statistics and IO Graph. And as you can see, it has already populated that. So we'll rename that, "Keep Alive." And then we'll just change the color to this purple. But so we want those two to just show, you can see how and where they are in relation to all of the other packets. And we'll uncheck that. And then we'll zoom in a little bit more,
>
> **[4:22](https://www.linkedin.com/learning/wireshark-network-troubleshooting/plot-an-i-o-graph?u=76281980&t=262)** so you can see the keep-alives that have occurred over time. And again, if you're really not being able to see that that well, you can change that, so it's going to be a bar and then change the color so it's red and then say Okay. And that will show up a little bit better. So you can change those at any way possible. But using an IO graph will help us to show overall traffic patterns and also to show where there's problems and issues that we can zero in and see in relationship to the other traffic and see what we need to look into.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (3), [Zoom](../../Skills/Software%20Development/Zoom.md) (3)
> **UI Navigation:** go to (3), right-click (2), scroll up (1), click on (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** tcp (2)
> **Cross-References:** go back to (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)

#### [Challenge: Using a Flow Graph](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-using-a-flow-graph?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-using-a-flow-graph?u=76281980&t=0)** - [Instructor] In this challenge, you'll create an I/O graph on smallFlows.pcap. You'll want to create two I/O graphs, one that shows duplicate acknowledgments and one that shows retransmissions. You'll also want to make the graph stand out, add a different color and style, and then [Zoom](../../Skills/Software%20Development/Zoom.md) in on an interesting area. This challenge should take you about five minutes. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Zoom](../../Skills/Software%20Development/Zoom.md) (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** smallflows (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Response: Using a Flow Graph](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-a-flow-graph?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-a-flow-graph?u=76281980&t=0)** - Okay. Let's take a look. You were to create two IO graphs, one showing duplicate acknowledgments, and one showing retransmissions. Then you were to make the graph stand out by adding a different color and style, and then [Zoom](../../Skills/Software%20Development/Zoom.md) in on an interesting area. Well, first we're going to go into IO graphs and take a look. We'll uncheck that, and now we'll want to just show all packets. So we'll close that. And then we'll go to the expert information and then I'll look for duplicate acknowledgments, duplicate acts, and we see that there are 143 of those. So that's a good number. I'll say, apply as a filter selected and then I'll close that. Well, we won't need to copy it because it will already be available in the IO graph, but let's take a look. We'll go to the IO graph and here it says filtered packets. We'll give it a little bit more room and then we'll call it duplicate acts.
>
> **[1:22](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-a-flow-graph?u=76281980&t=82)** And then, we'll give it a nice color And then we'll make it a bar. And then I'll close that, we'll clear the filter. And then we'll look for retransmissions. Again, go to expert system and we'll go into this frame as the suspected retransmission. And as you see, there are 119 of these and I'll say selected We'll again go into the IO graph. And instead of the filtered packets, what it says, I'm going to type retransmissions,
>
> **[2:09](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-using-a-flow-graph?u=76281980&t=129)** We'll add a different color. And we'll keep it at line. So we can see those two. I'm going to uncheck all packets and then I'll drag it over and then we'll zoom it in. There's an interesting area here, select zoom. And now we've zoomed in on an interesting area.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Zoom](../../Skills/Software%20Development/Zoom.md) (3)
> **UI Navigation:** go to (3)
> **CLI Commands:** make (2)
> **Speakers:** - okay (1)
> **Non-Speech:** (upbeat music) (1)


### Recognizing Abnormal or Malicious Traffic

[↑ Back to Table of Contents](#table-of-contents)

#### [Troubleshooting the Network](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=0)** - [Instructor] When troubleshooting the network, there are several steps that you should take in order to solve the problem. We'll talk about that, then we'll talk about some best practices to prepare for failure, and then we'll talk about baselining your network. I'm at this website, [cisco.com](https://cisco.com). If you'd like to follow along, you can reference this document. When troubleshooting the network, one of the first things that you'll want to do is describe the issue. What exactly happened? Try to get input from whomever is closest to the problem and narrow the scope. Gather the information on as to what has happened, where it happened. Try to isolate the problems in a smaller sense. Then you'll want to consider what possibly could have caused the problem. Sometimes it's very evident and sometimes it's not, and you'll also want to involve your team. Outline a plan as to how you're going to solve a problem. Be careful. Don't make any configuration changes without fully documenting the network before you make the change 'cause you might have to roll back. Go ahead and implement the plan, but then test the implementation. Did it work? Afterwards, document the results, and if it wasn't resolved, repeat the steps. No one wants to have a failure, but you should prepare for failure by doing the following. You should have a physical and logical map of the network handy so that you can refer to it. You'll also want to have a list of all protocols that are used on the network. Know how the traffic is switched and routed, and then you'll want to make sure you describe
>
> **[1:33](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=93)** all points of contact from the internal to external network. A lot of that will be in your logical map, and then you want to have an established baseline. You can't really tell if your network is sick unless you know what it looks like when it was healthy. For a baseline, you'll go through the following. You'll want to plan how you're going to do the baseline. Then you're going to capture, and we'll talk about, well, how many packets do you want to capture? You'll take a quick look and do an analysis and then you'll save it so you can reference it later. So, as I said, the first step is to plan. How are we going to go about this? Now networks today are complicated and you could literally have hundreds of sub networks. It's a long exercise, but it's well worth it, if you have something to fall back on to compare. For example, by sub network, by building and time of day, and you want to document that and have a plan so you can go through this exercise consistently. Then you'll want to capture the traffic. Now when you're capturing, I generally make a limit of 1000 packets. You can do more, but 1000 packets, maybe 2000 packets, will give you a nice baseline. It'll be consistent and you can then run through and do a number of those within a day. So I've just selected the [wifi](../../Glossary/Standard/Wi-Fi.md), and then I begin the capture. There's no filter, then I watch the number. Now you could also set that in your capture variables to stop capture after 1000 packets. When you're done with the capture
>
> **[3:06](https://www.linkedin.com/learning/wireshark-network-troubleshooting/troubleshooting-the-network?u=76281980&t=186)** and you've gotten enough packets, you'll want to do a quick analysis. Now what I do is generally go up to [Statistics](../../Skills/Data%20Science/Statistics.md) and then I look at the protocol hierarchy. You can do a quick look to see if there's any protocols out of line or that shouldn't be on that sub network, and then once you're done with that, you could just simply close it. One more thing I do is go to statistics in capture file properties. Once you're in there, you'll see the [Metadata](../../Skills/Web%20Development/Metadata.md) of that capture is evident as far as the time it started, how long it lasted and a little bit about the interface [Hardware](../../Topics/Hardware.md) and operating system. But down below, you could put capture file comments, and maybe we'll put sub network 20. You might want to put some more information as to what you saw, but of course, the time is already on there. Now I also want to say save the comments and then close, and then we'll save this capture. File, save as, but one more thing I'll need to do, because I put comments, I can't save it in a pcap format. I have to save it in pcapng, and that way, I'll be able to preserve the comments, and now I've saved those comments and my baseline. So I can refer back to that baseline while troubleshooting.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Statistics](../../Skills/Data%20Science/Statistics.md) (2), [Wifi](../../Glossary/Standard/Wi-Fi.md) (1), [Metadata](../../Skills/Web%20Development/Metadata.md) (1), [Hardware](../../Topics/Hardware.md) (1)
> **CLI Commands:** make (4)
> **URLs:** [cisco.com](https://cisco.com) (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Spotting an ARP Storm](https://www.linkedin.com/learning/wireshark-network-troubleshooting/spotting-an-arp-storm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/spotting-an-arp-storm?u=76281980&t=0)** - [Instructor] In this segment, we'll take a look at the signature of an ARP storm. I'm here at CloudShark, and I'm going to download this packet capture. We'll go to export, download file, and you can either export a new pcapng with CloudSharp comments and annotations if there are any, or I'm just going to download the original file. And I'll open it in [Wireshark](../../Skills/Cybersecurity/Wireshark.md). Once in Wireshark, we'll put a filter for ARP. And as you can see, these are all ARP broadcasts. I'll also create an IO graph. Go to [Statistics](../../Skills/Data%20Science/Statistics.md) and IO graph. It already assumes I'd like to filter on ARP. We'll change the graph name to ARP. And I'll change the color to something bright. We'll also now change the interval to 100 milliseconds. And as you can see, there's a lot of traffic. An ARP storm, or ARP flood can degrade the network. You really should investigate further. Now, how can this happen? Well, it could be the result of a [Hardware](../../Topics/Hardware.md) misconfiguration, that's one way, but it can also be an attack that once launched will keep generating ARP broadcast packets. There's one more thing. ARP flooding could be the result of malware. And I'm at this website,
>
> **[1:36](https://www.linkedin.com/learning/wireshark-network-troubleshooting/spotting-an-arp-storm?u=76281980&t=96)** where you can read more on an ARP flood attack. In an ARP flood attack, This will only affect a single sub network as an ARP broadcast doesn't travel pass the router. However, an ARP storm or ARP flood will degrade the network and you really should investigate to stop this type of activity.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (2), [Statistics](../../Skills/Data%20Science/Statistics.md) (1), [Hardware](../../Topics/Hardware.md) (1)
> **Env Vars:** arp (14)
> **UI Navigation:** go to (2)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)

#### [Identifying bursty traffic](https://www.linkedin.com/learning/wireshark-network-troubleshooting/identifying-bursty-traffic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/identifying-bursty-traffic?u=76281980&t=0)** - [Instructor] Multicast traffic is either a one-to-many or many-to-many data transmission. The range for multicast is between 224.0.0.0 to 239.255.255.255. You'll see multicast traffic on your network, as it's used in a wide range of applications. Multicast traffic doesn't always behave, and it may become bursty. Bursty traffic can disrupt the flow of traffic. What happens is, when traffic reaches a device, such as a switch or router, the buffers may be full or overwhelmed by the burst and can result in an output drop. Common methods to deal with this are by policing or shaping the traffic. While policing flattens the burst, as you see in this graphic, a better way to manage traffic is by shaping, which smooths the output, as we see in this graphic. However, if the traffic is not properly policed or shaped, you will see bursty traffic. Let's take a look. I'm at this website, and we can download an example file by going here to click download, and then you'll want to extract it and open it in [Wireshark](../../Skills/Cybersecurity/Wireshark.md). Now, as you can see, this is multicast traffic. What we can do in Wireshark is go to [Statistics](../../Skills/Data%20Science/Statistics.md) and UDP multicast streams, and within this, we see a lot of buffer alarms. Now, we can go to any of these and then create a filter.
>
> **[1:37](https://www.linkedin.com/learning/wireshark-network-troubleshooting/identifying-bursty-traffic?u=76281980&t=97)** I'll just select this one, 'cause there are a lot of buffer alarms that were set, and I'll right click and say apply as a filter. Now I'll close that. Now I want to run an I/O graph. We'll go to statistics and then I/O graph. Wireshark already assumed I wanted to use this filter, but I'll rename the graph bursty traffic.
>
> **[2:14](https://www.linkedin.com/learning/wireshark-network-troubleshooting/identifying-bursty-traffic?u=76281980&t=134)** Then I'll change the color to something bright, and then I'll modify the interval to 100 milliseconds. Now you can see that the traffic was going along, and then there was an output drop, as evidenced right here. So even small bursts can temporarily disrupt the flow, for example, while you're gaming. so as a result, you need to take steps to prevent bursty traffic in order to keep the traffic moving.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (3), [Statistics](../../Skills/Data%20Science/Statistics.md) (2)
> **UI Navigation:** go to (3)
> **Versions:** 224.0.0 (1), 239.255.255 (1)
> **Analogies:** such as (1), for example (1)
> **Env Vars:** udp (1)
> **Speakers:** - [instructor] (1)

#### [Protecting from packet sniffing](https://www.linkedin.com/learning/wireshark-network-troubleshooting/protecting-from-packet-sniffing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/protecting-from-packet-sniffing?u=76281980&t=0)** - [Instructor] Part of keeping your network up and operational is keeping it secure. The one thing we don't want to allow is packet sniffing on the network. And packet sniffing should only be done by authorized individuals. And the reason is it can expose sensitive information. I'm going to take you to a browser and behind the scenes, when we look at [Privacy](../../Skills/Data%20Science/Privacy.md) and security. One of the things that our browsers do, as long as we keep them updated, they try to protect us. As you can see here in privacy and security, it tries to do things such as block social media trackers, or cross-site tracking cookies. In addition, when you go to log into a site, it will warn you if the connection is not secure. For example, I'm on [Facebook](../../Glossary/Service/Facebook.md) and I were to click this and it says connection secure. Now I know it's secure because the lock is there. And I know that when I put my username and password, it will be encrypted by using transport layer security. Now, what I'm going to do is go into an insecure site and I'll start a packet capture and I'll log in, and then we'll be able to see the username and password. So I'll simply begin the capture. Now, when I go to log in, it says this connection is not secure.
>
> **[1:31](https://www.linkedin.com/learning/wireshark-network-troubleshooting/protecting-from-packet-sniffing?u=76281980&t=91)** Then I'll put the password. And again, it warns me it's not secure.
>
> **[1:43](https://www.linkedin.com/learning/wireshark-network-troubleshooting/protecting-from-packet-sniffing?u=76281980&t=103)** Now I'll stop the capture. I'll put in the display filter HTTP, and on the information I'll look for POST. Here I see it and I'll follow the stream. And right here, we can see the username and the password. So again, protect your information by using encryption and don't go to insecure sites and don't allow packet sniffing on your network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Privacy](../../Skills/Data%20Science/Privacy.md) (2), [Facebook](../../Glossary/Service/Facebook.md) (1)
> **UI Navigation:** go to (3)
> **Env Vars:** http (1), post (1)
> **Analogies:** such as (1), for example (1)
> **Speakers:** - [instructor] (1)

#### [Examining Macof attacks](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=0)** - [Instructor] A Macof attack floods the MAC address table and overwhelms the switch with thousands of bogus entries. In this segment, we'll talk about how a Macof attack works, examine the signature, and then discuss how to prevent this type of attack. First, let's talk about what normally happens on a switch. On a switch, there's what's called a switching or MAC address table. You might also hear it called a CAM or content addressable memory table. The table holds the pairings of MAC addresses and their associated switch ports, so it knows where to deliver the data. This table can contain thousands of these pairings. A Macof or MAC overflow attack will flood this table and overwhelm the switch with thousands of bogus entries. At that point, the switch will simply act like a hub and allow all the traffic to flow out all the ports. Next, let's take a look at launching a Macof attack in [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md). I'm in Kali Linux now to demonstrate a Macof attack, first I'll open [Wireshark](../../Skills/Cybersecurity/Wireshark.md) as I want to do a quick capture so that you can see what happens on the backend during a Macof attack. We'll go to Applications, Sniffing & Spoofing, wireshark. And I'll move this over, and we'll select any,
>
> **[1:37](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=97)** and I'll refresh the interfaces. Now, once I launch the attack, pay attention up above because it will start to consume a huge amount of bandwidth. I'll open a terminal. Now I need to enter the password for root, and over here, I'll start the capture, and then I'll go back and begin the attack.
>
> **[2:09](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=129)** Now I'll stop by hitting Control + C, and take a look at the bandwidth up at the top. We'll move this over. So on the Wireshark side, we can see the Wireshark capture, and then within it, we see a bunch of bogus IP and MAC addresses that were sent out in order to spoof the switch and be confused. Now that you understand how a Macof attack works, let's take a look at the signature. For this example, we'll go to CloudShark, and I'm going to download the original file, and I'll open it in Wireshark. So to download, go to Export, Download File, and then download the original file. Now once we the file in Wireshark, we can see in the status bar that there are over 13,000 packets. Now I'll take off the coloring rules so we can examine the capture. Now, once in the file, we'll quickly scroll through. And you can see that there are a number of different IP addresses. To see all of the IP addresses, I ran a report. I went to [Statistics](../../Skills/Data%20Science/Statistics.md), and then IP Version 4 Statistics, and then All Addresses. Now, this took a while to load as there are a lot of packets, but here is the report. Once in the report, you see that there are a number
>
> **[3:44](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=224)** of different IP addresses. Some of which aren't legal to use, such as multicast and private IP addresses, and many simply don't make sense. So I'll close that. In addition, you might also want to take a look at the expert information by clicking the yellow dot in the lower left-hand corner. Now, once we get in here, we'll see chat, and I'll drop this down, and you can take a look here to see all of those chats that are the same. This chat says Connection established request, and that means that SYN packets are sent and there are all those with those SYN packets sent out onto the network, but there are no connections. So let's just confirm this. I'll close this report, and then I'll go into frame 21 right there. And I'm going to drop down the TCP header. And we'll scroll up here. Drop this down. Now we're going to the flags, and we'll drop that down. And here we see the SYN flag Set. So let's apply a filter. So Apply as Filter, Selected. And we see that it's ran, and 100% of those packets are all SYN packets. Now, we know that a SYN packet will occur
>
> **[5:18](https://www.linkedin.com/learning/wireshark-network-troubleshooting/examining-macof-attacks-23827197?u=76281980&t=318)** in the first two packets of a three-way handshake, but are there any acknowledgements? Well, let's take a look. We're going to modify this filter. I'll go into Acknowledgement, Not set, and what we'll do is Prepare as a Filter, Selected, and I'll change it to True. And then we'll run this. And as you can see, there are none, no connections were made. So that's the signature of a Macof attack. Now, a Macof attack will disrupt traffic. However, the attack must continue to bombard the switch with those bogus entries in order to be successful, because once it stops, the timers will be reset and the switch will resort back to being a normal switch. However, even a small disruption can bring the network down. So you'll want to make sure you secure your switches by using port security to prevent this type of attack.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (6), [Kali Linux](../../Skills/Cybersecurity/Kali%20Linux.md) (2), [Statistics](../../Skills/Data%20Science/Statistics.md) (2)
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
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-identify-a-scanning-signature?u=76281980&t=0)** - [Instructor] Let's do a challenge. In this challenge, we'll evaluate a scanning signature using [Wireshark](../../Skills/Cybersecurity/Wireshark.md). First, let's talk about why we don't want to allow any scanning to take place on our network. While scanning a network is often considered a precursor to an attack as it involves probing a network to gather information about the devices, services, and vulnerabilities. Attackers then use the results to identify potential entry points and weaknesses that they can exploit to launch further attacks. So now let's set the scene. It's 10 o'clock on a Saturday night, and the glow of monitors illuminates the network operation center. The new night shift network administrator, Alex, works through completing his maintenance activities. Suddenly a series of alarms cuts through the quiet atmosphere indicating potential intrusion activity. Alex's heart races, as he quickly navigates through the [Network Monitoring Tools](../../Skills/Network%20and%20System%20Administration/Network%20Monitoring%20Tools.md) to investigate further. Now, here's your challenge. Using your favorite [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) tool, you'll enter the following prompts and read through the information. What are signs that someone is scanning the network? How can you use Wireshark
>
> **[1:32](https://www.linkedin.com/learning/wireshark-network-troubleshooting/challenge-identify-a-scanning-signature?u=76281980&t=92)** to see if someone is scanning the network? Next, you'll go to the exercise folder and obtain the Wireshark [Network Troubleshooting](../../Skills/Network%20and%20System%20Administration/Network%20Troubleshooting.md) challenges and links document along with the file Nmap_Scan.pcapng, and then you'll answer the following. You'll look for TCP SYN or TCP connect packets to various ports on multiple hosts. Use column headers in Wireshark that would help identify scanning activity. Look for multiple ARP requests and use the time display format to identify the timing patterns of network packets. Now once you're sure there's a scan a play, you'll go back to the generative AI tool and prompt the following. List ways to defend against scanning attacks. This challenge should take you about 20 minutes. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (4), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (2), [Network Monitoring Tools](../../Skills/Network%20and%20System%20Administration/Network%20Monitoring%20Tools.md) (1), [Network Troubleshooting](../../Skills/Network%20and%20System%20Administration/Network%20Troubleshooting.md) (1)
> **Env Vars:** tcp (2), syn (1), arp (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Identify a scanning signature](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=0)** - [Presenter] Okay, now let's check our work. First you are to use your favorite [gen AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) tool and enter the following prompts. What are signs that someone is scanning the network and how can you use [Wireshark](../../Skills/Cybersecurity/Wireshark.md) to see if someone is scanning the network? And then you were to read through the information to get a feel as to what you should do next. Next, you were to open Nmap_Scan.pcapng. Now the first thing I wanted you to do is go to [Statistics](../../Skills/Data%20Science/Statistics.md) Protocol Hierarchy. Now this is a nice first step because you can take a look at what protocols are out there, maybe to see if there's something that's unusual. Now, within the protocol list, you see two SIP packets and I'll scroll right down here. Now that's session initiation protocol. Now this is unusual as the subnet you're on doesn't have any VoIP phones. And I had you read an article to learn that SIP is a popular scanning target. Now we'll close that. Next, we learned that scanning tools often scan a range of ports sequentially or in a specific pattern. Now, many times the scanner is just trying to connect with the host, but it doesn't complete the handshake. So next, I wanted you to look for TCP SYN packets
>
> **[1:35](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=95)** to various ports on multiple hosts. And I wanted you to apply this filter, which I copied and pasted into the display filter. And what that's going to show us is the TCP SYN flags are set and the TCP ACT flags are set. And those are going to be all those attempted connections. It's trying to connect to hosts to see who's out there and who would like to talk with me. Now I'm going to close this. And the next thing I wanted to do is show you how you can use column headers in Wireshark to help identify scanning activity. So you were to go to frame 609. So we go to 609 and go to packet. And here, I'm at frame 609 and I'll drop down the TCP header and I'll pull this up. And then you can see that we want to go Destination Port and we want to Apply as Column. And this is nice because what you can do is you can actually sort this. So I can sort to either high to low, low to high. And you can actually see the ports it's trying to reach on the different hosts. It's a single port and it's going out to all these different ports attempting to make a connection to see if there are any listening services. Now we want to remove this, so we want to do something else.
>
> **[3:10](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=190)** So I'll right-click, take off Destination Port. The next thing was that we learned how scanners might also use address resolution protocol to discover host on the network. So what we're going to look for is ARP multiple requests. So we'll use the following filter, ARP, A-R-P, and Enter. Now we can sort these if we wanted just to see how many there are out there, and these are broadcast across the network. And the next thing I want to do is to go to frame four. And then I'm going to drop down the ARP header. We'll just drop this down and I'll scroll up here. And in this case, I want to use that Target IP address and apply as column. So I right-click, Apply as Column, and I'll scroll down here. And it is already sorted, but what you can see is it's just going through sequentially and trying to see who has that IP address so it can identify the hosts on the network. And I'll remove that by right-clicking and remove Target IP address. All right, I'm going to clear the filter here. And the last thing I want to do is scanning takes place on a network. It's generally really fast, and unless you want to be stealthy
>
> **[4:42](https://www.linkedin.com/learning/wireshark-network-troubleshooting/solution-identify-a-scanning-signature?u=76281980&t=282)** and then you would slow down the scans. But in general, sometimes you just do a quick scan and I want to show you how we can use time to see how fast the scan is taking place. Now in this case, you see the time, we really don't see just zeros because there's not enough precision. I'm going to drop down View, Time Display Format. And then down here, you see that it's set at Hundredths of a second. So we'll go down a little bit farther down to Hundredths of a microsecond, right down here. And then I'm going to just move over that column header so you can see how fast the scanning took place. Now we'll go back and we're going to change that time display format back. And we're going to go to Automatic. And that's generally a good rule of thumb because it'll give you the best precision it can. And if you wanted a more landscape, you can go to View, Time Display Format, and then just go down to Hundredths of a second and that will just, again, move that in a little bit further. So now you're sure there is a scan at play. And the last thing was to go back to your favorite gen AI tool and list ways to defend against scanning attacks and read through the information. I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gen ai](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (2), [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (2), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/wireshark-network-troubleshooting/what-s-next?u=76281980&t=0)** - [Instructor] Thank you for watching. In this course, we took a look at ways to evaluate the network for issues and how to get the most out of [Wireshark](../../Skills/Cybersecurity/Wireshark.md). We saw how we can use time as a metric to see gaps in transmission and ways we can recognize abnormal or malicious traffic. If you're interested in learning more, please check out the library where new courses are added all the time. You might want to check out my Cisco [Network Security](../../Skills/Cybersecurity/Network%20Security.md) series. And if you're interested in learning more about security basics, check out my Foundations of IT Security series. And any course in the [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) series will be well worth your time. For a complete list of courses, visit my author page. Keep learning, and I hope to see you again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wireshark](../../Skills/Cybersecurity/Wireshark.md) (1), [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (1), [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Lisa Bock](../../Instructors/Cybersecurity/Lisa%20Bock.md)

## Resources

- Exercise files available

## Skills Covered

- Network Troubleshooting
- Wireshark

## Path Context

### In [Wireshark- Network Traffic Analysis](../../Paths/Cybersecurity/Learning%20Paths/Wireshark-%20Network%20Traffic%20Analysis.md)
← [Wireshark- Functionality](Wireshark-%20Functionality.md) | **3 of 5** | [Wireshark- Malware and Forensics](Wireshark-%20Malware%20and%20Forensics.md) →

## Appears In

- [Wireshark- Network Traffic Analysis](../../Paths/Cybersecurity/Learning%20Paths/Wireshark-%20Network%20Traffic%20Analysis.md)

## Related Courses

_Courses sharing skills:_

- [Wireshark- Functionality](Wireshark-%20Functionality.md) — Wireshark
- [Wireshark Essential Training](Wireshark%20Essential%20Training.md) — Wireshark
- [Wireshark- Malware and Forensics](Wireshark-%20Malware%20and%20Forensics.md) — Wireshark
- [Learning Network Troubleshooting- Practical Network Diagnostics and Solutions](Learning%20Network%20Troubleshooting-%20Practical%20Network%20Diagnostics%20and%20Solutions.md) — Network Troubleshooting

---

[↑ Back to top](#)