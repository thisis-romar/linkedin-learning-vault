---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: ethical-hacking-sniffers-18940733
url: "https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733"
duration_minutes: 130
duration: 2h 10m
level: Intermediate
updated: 10/17/2025
learners: 28073
skills:
  - Ethical Hacking
  - Network Traffic Analysis
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQEEMLLSm2QEAA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1682017851753?e=2147483647&amp;v=beta&amp;t=FGT0JjzwlAgFFURuYYsXzqnsq46-k8GVCWWalH2MYpc"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Become an Ethical Hacker]]'
prev_courses:
  - '[[Ethical Hacking- The Complete Malware Analysis Process]]'
next_courses:
  - '[[Ethical Hacking- Social Engineering]]'
path_nav: '[{"path":"Become an Ethical Hacker","position":8,"total":19,"prev":"Ethical Hacking- The Complete Malware Analysis Process","next":"Ethical Hacking- Social Engineering"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/ethical-hacking
  - skill/network-traffic-analysis
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Ethical%20Hacking-%20Sniffers.md)

![Ethical Hacking: Sniffers](https://media.licdn.com/dms/image/v2/D4D0DAQEEMLLSm2QEAA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1682017851753?e=2147483647&amp;v=beta&amp;t=FGT0JjzwlAgFFURuYYsXzqnsq46-k8GVCWWalH2MYpc)

# Ethical Hacking: Sniffers

> Ethical hacking involves testing to see if an organization's network is vulnerable to outside attacks. It's one of the most desired stills for any IT security professional. In this course—which maps to the Certified Ethical Hacker v12 certification—Lisa Bock provides an overview of what a sniffer is, and how hackers use it to intercept network traffic. Lisa gives a demonstration of what a MAC atta

> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733) | 2h 10m | Intermediate | 28K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (3 videos)
- **[[#1. Sniffing Overview]]** (6 videos)
- **[[#2. Spoofing Attacks]]** (6 videos)
- **[[#3. Dissecting DHCP]]** (6 videos)
- **[[#4. Reviewing ARP]]** (4 videos)
- **[[#5. Attacking DNS]]** (6 videos)
- **[[#6. Sniffing Tools and Techniques]]** (6 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Visualizing network traffic
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/visualizing-network-traffic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/visualizing-network-traffic?u=76281980&t=0)** - [Lisa] Did you know that being able to visualize what's on a network is a powerful skill in the ethical hackers arsenal?
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/visualizing-network-traffic?u=76281980&t=8)** Sniffing network traffic can provide valuable insights on the structure, security vulnerabilities, and potential attack paths.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/visualizing-network-traffic?u=76281980&t=18)** In this course, I'll cover concepts such as spoofing attacks, along with learning what we can glean from protocols such as ARP, DNS and DHCP.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/visualizing-network-traffic?u=76281980&t=30)** All outline how we can use Wireshark, Cloudshark and Omnipeek to gather and analyze traffic.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/visualizing-network-traffic?u=76281980&t=37)** Hello, my name is Lisa Bock and I'm a security ambassador.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/visualizing-network-traffic?u=76281980&t=42)** Are you ready to see what's on your network?
>
> **[0:45](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/visualizing-network-traffic?u=76281980&t=45)** Then let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** arp (1), dns (1), dhcp (1)
> **Analogies:** such as (2)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [lisa] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/what-you-should-know?u=76281980&t=0)** - [Instructor] This course is a basic to intermediate course intended for security professionals, network administrators, managers, students, teachers, or anyone with an interest in learning more about the sniffing phase of ethical hacking.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/what-you-should-know?u=76281980&t=18)** I'll cover a lot of information, but I have provided some files for you.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/what-you-should-know?u=76281980&t=23)** Go to the Exercise File on the welcome screen where you will find files relevant to this course.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/what-you-should-know?u=76281980&t=30)** One is a challenge and links document.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/what-you-should-know?u=76281980&t=34)** Now, during each segment, I'll identify a challenge using the following icon along with a question from the video.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/what-you-should-know?u=76281980&t=42)** Use the document to write out responses to challenges that I cover throughout the course.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/what-you-should-know?u=76281980&t=50)** And so that you can follow along, I've also included the links to the internet resources that I reference.
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/what-you-should-know?u=76281980&t=58)** I am super excited to bring you this course, so sharpen your pencil, and let's start learning.

> [!info]- Semantic Content
>
> **Code Keywords:** super (1), let (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### Hacking ethically
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/hacking-ethically?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/hacking-ethically?u=76281980&t=0)** - [Instructor] The goal of the Ethical Hacking series is to help system administrators understand how to better protect the assets they manage.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/hacking-ethically?u=76281980&t=10)** I'll focus on the concepts of ethical hacking in order to explain why it's essential in any organization's overall security framework.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/hacking-ethically?u=76281980&t=21)** The tests and procedures I explore should only be executed on your own system or a system that you are charged with protecting.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/hacking-ethically?u=76281980&t=31)** If ownership and responsibility lie with another party, be sure to get clear written instructions with explicit permission to conduct ethical hacking activities.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/hacking-ethically?u=76281980&t=44)** Do not investigate individuals, websites, servers, or conduct any illegal activities on any system you do not have permission to analyze.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)


### 1. Sniffing Overview

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Sniffing network traffic
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=0)** - [Instructor] Sniffing the network or packet analysis is a valuable skill for the ethical hacker and should be part of every network administrator's skillset.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=11)** Instead of scanning an individual system, we now look at traffic that is flowing across the network.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=18)** Devices such as intrusion detection and prevention systems monitor the traffic for threats and allowable protocols.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=26)** However, network administrators should spend a few minutes every day and monitor the traffic.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=33)** This will give us a great deal of information on the status of the network.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=39)** Sniffing traffic can gather network statistics and monitor protocol use.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=44)** Sniffing can help detect network misuse.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=47)** For example, are there any protocols that should not be on your network, such as BitTorrent or unauthorized instant messaging?
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=56)** Packet analysis can run in real time or you can capture traffic for later analysis such as baselining traffic at various points in the network.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=67)** So that you understand the process, Let's talk about the phases of packet analysis.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=73)** Gather, decode, display, and analyze.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=77)** Let's go through each phase, starting with gather.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=81)** After you choose an interface to listen on and place it in promiscuous mode, the interface scoops up network traffic.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=89)** Now keep in mind that traffic enters the network interface card in binary form, one frame at a time.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=97)** Now decode is the next phase, and this is where the packet analysis software will convert the bits into readable form for analysis.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=107)** Now let's take a look at the heart of where the decoding takes place.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=111)** It's called EPAN.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=113)** Wireshark was Ethereal before 2006, but the main core is still the same.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=120)** In this illustration, we see the Ethereal Packet Analyzer or EPAN.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=126)** This is the packet analyzing engine for Wireshark.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=131)** Within EPAN, there are several components.
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=134)** The protocol tree, dissectors, dissector plugins, along with the display filters.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=142)** We then move to display.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=144)** Now in Wireshark and many other packet analysis tools, there are many options to enhance your graphical experience by displaying the traffic in readable form.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=155)** Once displayed, we then do the analysis.
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=158)** When we look at it, we're asking ourselves, is this traffic normal?
>
> **[2:44](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=164)** Do we see any unusual TCP flags or excessive duplicate acknowledgements?
>
> **[2:50](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=170)** You might want to examine for malware signatures or traffic in clear text, or router advertisements that could pose a threat.
>
> **[2:59](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=179)** Now let's test your knowledge.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=182)** Sniffing and analyzing traffic on a network will reveal a great deal of information for the ethical hacker.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=189)** Describe the phases of packet analysis.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=192)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), interface (3)
> **Env Vars:** epan (3), tcp (1)
> **Analogies:** such as (3), for example (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Using other sniffing tools
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-other-sniffing-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-other-sniffing-tools?u=76281980&t=0)** - [Instructor] Wireshark is a popular sniffing tool, but there are others.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-other-sniffing-tools?u=76281980&t=4)** In this segment, we'll discuss some options, along with the implications of sniffing network traffic.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-other-sniffing-tools?u=76281980&t=12)** Linux has a couple of commonly available sniffers.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-other-sniffing-tools?u=76281980&t=15)** Let's talk about a few of these.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-other-sniffing-tools?u=76281980&t=18)** I'm at the homepage of TCPDUMP, a powerful command line packet analyzer which ships by default on many Linux distributions.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-other-sniffing-tools?u=76281980&t=30)** Another tool that you might run into is Ettercap, a multipurpose sniffer that is specifically designed for switched LANs.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-other-sniffing-tools?u=76281980&t=39)** And Dsniff can sniff a variety of objects on a network as the package contains several tools.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-other-sniffing-tools?u=76281980&t=48)** Now there are also hardware protocol analyzers that are specialized devices used to monitor and analyze communication protocols at the hardware level.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-other-sniffing-tools?u=76281980&t=60)** They typically connect to a computer or network using a full duplex tap, and capture data as it passes through the network.
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-other-sniffing-tools?u=76281980&t=69)** Now it's no secret that today there are several ways to sniff network traffic.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-other-sniffing-tools?u=76281980&t=74)** However you need to recognize the potential implications.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-other-sniffing-tools?u=76281980&t=79)** One implication is the potential for a security breach.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-other-sniffing-tools?u=76281980&t=83)** If an unauthorized individual gains access to a network and begins sniffing network traffic, they can potentially capture sensitive information.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-other-sniffing-tools?u=76281980&t=93)** Another implication of sniffing network traffic is the potential for legal issues.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-other-sniffing-tools?u=76281980&t=99)** Many countries have laws in place that prohibit unauthorized access to a computer system or network.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-other-sniffing-tools?u=76281980&t=106)** And sniffing network traffic without permission could potentially be considered a violation of these laws.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-other-sniffing-tools?u=76281980&t=115)** Now two concepts you'll want to be familiar with is lawful interception versus wiretapping.
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-other-sniffing-tools?u=76281980&t=123)** Lawful interception is the legal process of intercepting and collecting communications to gather evidence for criminal investigations or national security purposes.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-other-sniffing-tools?u=76281980&t=137)** Wiretapping is intercepting and listening to private communications, commonly without the knowledge or consent of the parties involved.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-other-sniffing-tools?u=76281980&t=146)** It's commonly used to gather evidence in a criminal investigation, but it can be used in an illegal manner as well, such as a precursor to an attack.
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-other-sniffing-tools?u=76281980&t=158)** So prior to sniffing network traffic, make sure that you have the proper authorization and are following any applicable laws and regulations.
>
> **[2:49](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-other-sniffing-tools?u=76281980&t=169)** Now let's test your knowledge.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-other-sniffing-tools?u=76281980&t=172)** Discuss hardware protocol analyzers and other tools, along with the implications of sniffing network traffic.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-other-sniffing-tools?u=76281980&t=181)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), private (1)
> **CLI Commands:** make (1)
> **Env Vars:** tcpdump (1)
> **Tools:** command line (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Dissecting the OSI model
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=0)** - [Instructor] Sniffing or packet analysis requires a solid understanding of encapsulation along with protocols such as TCP, IP, and DNS.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=13)** The seven-layer OSI model standardizes the function of data transformation by breaking it down into layers, and in particular, outlines how the network interface card encapsulates the data as it's prepared for transport on the network.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=32)** In this segment, I'll review each layer and describe the main function.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=37)** I'll outline some common protocols in that layer, and state the protocol data unit, which defines what shape the data is in in that particular layer.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=48)** We'll start at layer seven, which is the application layer.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=53)** Now, this is where we initiate contact with the network.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=57)** Within this layer, we see the various protocols such as HTTP, FTP, or SMTP.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=65)** The Protocol Data unit at this layer is simply data.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=70)** Layer six is the presentation layer, which has a couple of jobs.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=75)** One is formatting.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=77)** Data has to be in the proper format to be presented to the application.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=82)** For example, if you get a jpeg, that's an image, and the presentation layer is responsible for formatting it correctly so that your browser can render it as an image.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=94)** In addition, there's also optional encryption and compression.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=100)** At this layer, we see that the protocol data unit is still simply data.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=106)** Layer five is the session layer, which is responsible for setting up, maintaining, and tearing down a session.
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=114)** Now, in order for a session to take place, though, I have to have the correct IP address, so DNS or domain name system works in this layer.
>
> **[2:05](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=125)** The protocol data unit at this layer is still data.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=131)** Layer four is the transport layer, which is where the encapsulation process begins.
>
> **[2:18](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=138)** The transport layer is responsible for transportation of data by using either a connection-oriented protocol such TCP, or a connectionless protocol such as UDP.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=152)** At this layer, the protocol data unit is a segment, and at this layer, we add a port address, which is associated with a specific application.
>
> **[2:43](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=163)** For example, hypertext transport protocol or HTTP uses port 80.
>
> **[2:51](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=171)** Layer three is the network layer, which is responsible for addressing and routing.
>
> **[2:57](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=177)** Now, there are three main protocols in this layer, the internet protocol, address resolution protocol, and internet control message protocol.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=188)** But here we see ARP that is right underneath layer three.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=193)** ARP does not have an IP header, but it does a resolution of an IP address to a MAC address, and that's why I've placed it in between layer three and layer two.
>
> **[3:26](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=206)** At this layer, the protocol data unit is a packet and the address at this layer is the IP address.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=214)** In this layer, the header holds a source and destination IP address.
>
> **[3:41](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=221)** Layer two is the data link layer, which is primarily concerned with proper frame formation.
>
> **[3:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=228)** The protocol data unit at this layer is a frame.
>
> **[3:52](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=232)** At this point, the header includes the source and destination MAC or physical address.
>
> **[4:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=240)** Layer one is the physical layer.
>
> **[4:02](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=242)** This is where binary transmission takes place.
>
> **[4:06](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=246)** Now, transmission is dependent on the medium.
>
> **[4:09](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=249)** If it's over copper, it's a pulse of electricity, if it's over fiber, it's a pulse of light, and if it's over wireless, it's a radio wave.
>
> **[4:21](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=261)** The protocol data unit at this layer is simply bits.
>
> **[4:26](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=266)** Next, let's build out a frame.
>
> **[4:29](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=269)** Now, we're going to start with the data, such as a webpage request.
>
> **[4:34](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=274)** Now, next you have your TCP or UDP header, and this is your transport layer header, which is a segment, and this will include a port address.
>
> **[4:46](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=286)** Next, we need an IP header.
>
> **[4:49](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=289)** Now, this is a packet, and it includes an IP address.
>
> **[4:54](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=294)** Frame formation completes by adding a frame header.
>
> **[4:58](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=298)** Now, this is called a frame, and it includes a MAC address.
>
> **[5:03](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=303)** At the end of the frame is a trailer and that includes the frame check sequence.
>
> **[5:09](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=309)** Now here we can see the OSI model in Wireshark, and this roughly translates to the OSI model, and here we can see the protocol data units, frame, packet, segment, and data.
>
> **[5:24](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=324)** Now let's test your knowledge.
>
> **[5:26](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=326)** It's important to understand the OSI model because the encapsulation process is evident in Wireshark, and understanding each of the layers, the protocol data unit, and the addressing will help you to analyze traffic better.
>
> **[5:43](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=343)** For your challenge, complete the table on the OSI model.
>
> **[5:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=348)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** osi (5), tcp (3), mac (3), dns (2), http (2)
> **Definitions:** is a  (6), is called (1)
> **Analogies:** such as (4), for example (2)
> **Code Keywords:** function (2), let (2), interface (1)
> **Ports:** port 80 (1)
> **Speakers:** - [instructor] (1)

#### Comparing passive and active attacks
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=0)** - [Instructor] On any network, a malicious actor can launch a passive or an active attack.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=6)** In this segment, we'll compare the difference between the two and then list ways to monitor and defend against attacks.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=15)** An attack can be against any of the security services.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=19)** Those include confidentiality, which is protecting data against unauthorized disclosure.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=27)** For example, in a medical facility, we ensure confidentiality by preventing unauthorized individuals from looking at patient information.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=37)** Integrity is protecting data from unauthorized modification.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=42)** For example, someone could change his or her salary from $12 an hour to $20 an hour.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=50)** This would be a violation of integrity.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=54)** Availability is ensuring data and services are available to authorized users.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=60)** A denial of service attack locks out legitimate users and is an attack against availability.
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=69)** Authentication is assurance that the communicating entity is who they say they are.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=75)** By verifying the identity of a user or a device.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=79)** For example, on a network we want to be able to provide authentication amongst routers when updating the routing tables.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=88)** Now, let's compare active and passive attacks.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=93)** An active attack is when the attacker tries to break into a secured system and possibly alter the integrity of the system by stealing or modifying information or introduce malicious code such as viruses, worms or a Trojan horse.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=111)** Active attacks include denial of service, buffer overflow and password attacks.
>
> **[1:59](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=119)** Passive attacks include something that you wouldn't think is dangerous, such as eavesdropping, traffic analysis or sniffing, and this is hard to detect.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=131)** Someone may be monitoring transmissions and possibly capturing authentication information such as usernames and passwords or router advertisements.
>
> **[2:23](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=143)** This can result in the disclosure of information to an attacker without the consent or knowledge of the user.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=151)** Passive attacks also include a more aggressive form of an attack called a reconnaissance exercise.
>
> **[2:40](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=160)** In this case, the attacker is seeking to find out information about the network by using a ping scan or a port scan.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=168)** Let's talk about the difference between these two scans.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=173)** A ping scan pings a range of IP addresses to see which hosts will respond and are alive.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=181)** After the attacker determines which ones are alive in responding, the attacker will then do a port scan, which is used to discover the services that are running on the target machine.
>
> **[3:15](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=195)** The malicious actor can then plan an attack on any vulnerable services that they find.
>
> **[3:22](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=202)** We know that there are many potential attacks, but there are methods of defense.
>
> **[3:28](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=208)** We can use encryption.
>
> **[3:31](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=211)** Now by using encryption, if someone were to capture the data they couldn't read it unless they had the key.
>
> **[3:38](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=218)** We use policies such as acceptable use and password policies.
>
> **[3:44](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=224)** Physical controls are the most overlooked form of security but here the controls include things such as locks and smart cards.
>
> **[3:54](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=234)** And device security, for example, use intrusion detection systems to monitor for ping sweeps and port scans along with firewalls to block malicious traffic.
>
> **[4:06](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=246)** Now let's test your knowledge.
>
> **[4:08](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=248)** On any network a malicious actor can launch a passive and or active attack.
>
> **[4:14](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=254)** Compare the difference between the two and list ways to monitor and defend against attacks.
>
> **[4:22](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=262)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Analogies:** for example (4), such as (3)
> **Code Keywords:** let (3), case, (1)
> **CLI Commands:** find (2)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Using Wireshark
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=0)** - [Instructor] Wireshark is an open source tool with a rich graphical user interface and many built-in features.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=7)** In this segment, we'll review key menu choices along with comparing the difference between capture and display filters.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=16)** Now I'm in Wireshark and I've opened up a capture.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=19)** If you'd like to follow along I found bigFlows.pcap at this website.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=26)** Now I've opened it up in Wireshark and it is a large capture, but what's great about it is it has a variety of different protocols in use.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=36)** So what I just want to show you is I'm going to explore some common menu choices and then we'll take a look at filtering traffic.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=44)** So let's take a look here.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=46)** We'll start with file.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=47)** Now file allows file related tasks such as open, save, and print.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=54)** Edit is where you can edit the capture file and filter packets along with add comments.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=61)** View allows you to control the appearance of the packet list and other parts of the interface.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=68)** And statistics, well, this menu provides access to the various statistics about the capture file.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=75)** Now, you should get familiar with those menu choices 'cause that's holding all of the great features of Wireshark.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=83)** But now when you are working with Wireshark you can use capture and display filters.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=88)** Now one important thing to know is that they are different.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=92)** Let's compare the two.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=96)** A display filter is used during an active capture or even on a pre-captured packet.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=102)** Now when you're working with display filters we can put a display filter up here or we could use the shortcut.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=109)** So let's use a shortcut.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=111)** I'm working with a packet capture and here on my frame 194 and we see that destination port and the source port.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=122)** Well, what if I just wanted to filter on the source port?
>
> **[2:05](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=125)** I'll right click and here we can see apply as a filter.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=130)** Now if I say selected it will put it up there and it will run it.
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=135)** If I say not selected it will mean don't select any of those packets.
>
> **[2:20](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=140)** Now prepare as a filter is selected, but it won't run it.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=144)** It'll just pop it up there and then you have to run it.
>
> **[2:28](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=148)** Now I'm going to clear that.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=151)** Now what happens when I clear the filter, it will reset and it is a large capture, so it'll take a few seconds.
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=158)** But what if I want to go to a specific protocol?
>
> **[2:41](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=161)** Now once I'm at the display filter this is the bookmarks and it's a blue flag.
>
> **[2:46](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=166)** I'll just drop that down.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=168)** And here we can see some built-in display filters.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=173)** Well, I'll just type in DNS because what I want to do is just look for DNS traffic.
>
> **[2:59](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=179)** I'll type DNS, D N S, and what happens is Wireshark tries to help you meaning if it's red, it means that it won't work.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=189)** Green means it's good, and yellow means go ahead and try it.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=193)** It might work, it might not work.
>
> **[3:15](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=195)** So when I started to type, you will see that it tries to help you by offering other suggestions.
>
> **[3:23](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=203)** Now, I typed DNS with a lowercase DNS but what if I used an uppercase DNS?
>
> **[3:29](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=209)** Let's try it.
>
> **[3:30](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=210)** D N S.
>
> **[3:32](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=212)** Well the background is red and that means it won't work.
>
> **[3:37](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=217)** Meaning every display filter has to start with a lowercase.
>
> **[3:41](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=221)** So we'll do DNS again and then we'll press enter and that will run the filter.
>
> **[3:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=228)** Now while I'm capturing traffic I'll be able to see all the traffic that's happening, but if I filter, it just will filter on that specific filter.
>
> **[3:58](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=238)** But I have the rest of the capture with me and that's the power of using a display filter.
>
> **[4:04](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=244)** Now I'm going to close this but I want to also show you a capture filter.
>
> **[4:09](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=249)** Now a capture filter is going to be different and that it's going to be applied prior to capture and it's only going to capture what you filter and nothing else.
>
> **[4:20](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=260)** All right, so we go to capture and look at our options here.
>
> **[4:24](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=264)** And here I see my interface WiFi.
>
> **[4:27](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=267)** Now down below this is your capture filter and we'll see that there's some choices when I go to the bookmarks.
>
> **[4:35](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=275)** And here we can see some of the options that I have.
>
> **[4:39](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=279)** But if I want to type DNS again, I'll type DNS, D N S.
>
> **[4:45](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=285)** Oh hmm, it's turned red.
>
> **[4:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=288)** Well, it's again, because the display filter is different than the capture filter.
>
> **[4:55](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=295)** The capture engine uses Berkeley Packet Filters.
>
> **[4:59](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=299)** So we need to change this.
>
> **[5:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=300)** I'll back this off here and in this case what we need to do and you can take a look at the bookmarks 'cause sometimes it helps you.
>
> **[5:08](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=308)** So for example, there's DNS, not DNS, not Port 53.
>
> **[5:14](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=314)** Let's take off not.
>
> **[5:17](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=317)** Port 53.
>
> **[5:19](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=319)** Now I'm going to start the capture, and once I start that I need to go generate some traffic.
>
> **[5:27](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=327)** So a good site to do that is ESPN and lots of traffic, lots of websites on ESPN.
>
> **[5:38](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=338)** And give it a minute and then I'll go back.
>
> **[5:42](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=342)** And here we see my traffic from ESPN and I can stop that.
>
> **[5:49](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=349)** Now, you can only imagine that I probably captured a little bit more data but now I just have DNS traffic, nothing else.
>
> **[5:58](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=358)** And what happens is if there are other indicators, there's other indications of problem in that capture I wouldn't know because I've simply filtered on DNS So why I would usually suggest unless you are trying to save resources is just to use a display filter.
>
> **[6:18](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=378)** But again, it will really depend on what you're trying to do.
>
> **[6:21](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=381)** But another thing is once you're done go back to capture and then to options.
>
> **[6:26](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=386)** And then clear that filter.
>
> **[6:28](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=388)** And I'll start it again.
>
> **[6:30](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=390)** Don't save it.
>
> **[6:31](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=391)** But you want to remove that filter because it will stay in there until you remove it and it will interfere with capturing traffic.
>
> **[6:40](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=400)** Now let's test your knowledge.
>
> **[6:43](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=403)** When sniffing network traffic it's common to use Wireshark.
>
> **[6:47](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=407)** Review key menu choices in the Wireshark interface and compare the difference between capture and display filters.
>
> **[6:56](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=416)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** dns (13), espn (3)
> **Code Keywords:** let (6), interface (4), else. (2), type, (1), this. (1)
> **Definitions:** is a  (2), is an  (1), means that (1)
> **UI Navigation:** go to (3)
> **Analogies:** such as (1), for example (1), imagine (1)
> **Ports:** port 53 (2)
> **Code Identifiers:** bigflows (1)
> **Cross-References:** go back to (1)

#### Tapping into the data stream
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=0)** - [Instructor] When sniffing traffic, there are various devices and methods to tap into the data stream.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=6)** In this video, we'll compare methods administrators use to sniff traffic, along with attacks that can allow a malicious actor to see all traffic on a switched network.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=18)** Tapping into the data stream and what you will see will depend on the network architecture.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=24)** As we see in this complex graphic, we can tap into many areas of the network.
>
> **[0:31](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=31)** When tapping into the network, you should be aware of a few things.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=36)** A wireless access point will act like a hub, which will allow you to see all of the traffic.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=43)** If you're tapping into a wired network, you will most likely tap into a switch, and you will see only your own traffic.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=52)** In order to see traffic destined to a specific device, network administrators use port mirroring or SPAN, which is Switch Port Analysis.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=63)** For example, you can mirror the traffic going to a server and back to your laptop for analysis.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=71)** Another option is that you could use a full-duplex tap in line with the traffic.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=77)** However, you will most likely need a special adapter.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=82)** When conducting penetration testing, an ethical hacker can use various attacks to visualize traffic on a switched network more effectively.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=91)** Let's talk about a couple of these.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=94)** One attack is ARP spoofing, which poisons the ARP cache.
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=100)** Now, the first thing we need to understand is that ARP is stateless.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=105)** An ARP reply can be sent even if there's no request, and it will be accepted.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=111)** So when sniffing traffic if you spoof the gateway's MAC address you poison the cache, and all traffic is sent to the spoof machine instead of the gateway.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=122)** ARP spoofing can be accomplished using arpspoof, a tool that comes with dsniff.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=129)** Using the following commands will help you achieve this.
>
> **[2:13](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=133)** Here we enable IP forwarding on your host so that traffic goes through your device.
>
> **[2:20](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=140)** Here we'll tell the victim's host that my MAC address is the one that belongs to the gateway.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=146)** And here we say spoof the gateway to believe that we are the victim.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=152)** Another attack that allows us to visualize traffic on a switched network is a macof attack.
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=158)** Now, how does this work?
>
> **[2:40](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=160)** Well, a switch's content-addressable memory, or CAM table, as we see on the right, maps the MAC address of a device to the physical switch port.
>
> **[2:51](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=171)** The CAM table helps data move more efficiently on the LAN by sending data only to the proper destination and nowhere else.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=181)** A macof attack floods the CAM table so that the switch really has no way of knowing where to send the data.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=189)** At that point, sniffing is easily accomplished, as the switch will enter a fail-open mode and start acting like a hub and send traffic out to all ports.
>
> **[3:20](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=200)** Now let's test your knowledge.
>
> **[3:23](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=203)** There are various methods administrators use to visualize network traffic.
>
> **[3:28](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=208)** Discuss two attacks that allow a malicious actor to see all traffic on a switched network.
>
> **[3:35](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=215)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** arp (5), mac (3), cam (3), span (1), lan (1)
> **Code Keywords:** switch (6), let (2), this. (1), else. (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)


### 2. Spoofing Attacks

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Launching a macof attack
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=0)** - [Instructor] One type of attack that can allow a malicious actor to visualize traffic on a switch network is called a macof attack.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=9)** In this segment, we'll see how easy it is to launch a macof attack using Kali Linux.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=16)** First, let's talk about how a switch manages traffic.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=21)** On a switch, the Content Addressable Memory or CAM table maps the MAC address of the device to the physical switch port.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=30)** The CAM table helps data move more efficiently on the LAN by sending data out only to the proper destination, and nowhere else.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=40)** With the CAM table or switching table, these pairings can be voluminous.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=46)** Well, now that we understand how the CAM table works, let's talk about how a macof attack can spoof the switch by filling the CAM table with bogus entries.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=57)** A macof attack, or a MAC overflow attack, floods the CAM table so that the switch really has no way of knowing where to send the data.
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=69)** At that point, the switch will enter a fail-open mode and start acting like a hub and send traffic out all ports.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=77)** The hacker can then easily sniff the traffic.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=81)** I'm in Kali Linux now to demonstrate a macof attack.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=85)** First I'll open Wireshark as I want to do a quick capture so that you can see what happens on the backend during a macof attack.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=95)** We'll go to applications, sniffing and spoofing, Wireshark.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=102)** And I'll move this over and we'll select any and I'll refresh the interfaces.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=108)** Now once I launch the attack, pay attention up above because it will start to consume a huge amount of bandwidth.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=117)** I'll open a terminal.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=120)** Now I'll issue the command macof, but I'll need to execute as root.
>
> **[2:07](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=127)** Now I need to enter the password for root.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=130)** And over here I'll start the capture, and then I'll go back and begin the attack.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=137)** Now I'll stop by hitting Control + C, and take a look at the bandwidth up at the top.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=144)** We'll move this over.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=146)** So on the Wireshark side, we can see the Wireshark capture, and then within it we see a bunch of bogus IP and MAC addresses that were sent out in order to spoof the switch and be confused.
>
> **[2:42](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=162)** So in order for this attack to be successful, the macof attack must continue to bombard the switch with these bogus entries.
>
> **[2:51](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=171)** Once stopped, the timers will be reset, and then the switch will resort back to being a switch.
>
> **[2:59](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=179)** Now this can be a great tool for ethical hacking, but the results will depend on the switch.
>
> **[3:04](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=184)** It might simply behave like a hub like we'd want it to, or it might do nothing because it has protection enabled, or it might crash and reboot.
>
> **[3:17](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=197)** So now let's test your knowledge.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=199)** Explain how a macof attack works.
>
> **[3:23](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=203)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (12), let (3), else. (1), continue (1)
> **Env Vars:** cam (6), mac (3), lan (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Exploiting Layer 2 protocols
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=0)** - [Instructor] By design, Layer 2 can be a target for attacks.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=4)** In this segment, we'll cover vulnerable Layer 2 protocols, along with potential attacks against Spanning Tree Protocol and Cisco Discovery Protocol.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=15)** Intrusion detection and firewall protection that defend and protect the network, typically work at the network layer and higher.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=24)** Layer 2 protocols are within the confines of a LAN, under the physical control of an organization.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=32)** An attack can take place because the network administrators don't generally monitor the LAN unless there are problems.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=40)** However, there are several Layer 2 protocols that can be vulnerable, and many are associated with Cisco devices.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=48)** So let's talk about a couple of Layer 2 protocols that can be attacked.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=54)** One is the Spanning Tree Protocol, which is used on a local area network because switches have redundant links for fault tolerance.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=64)** Spanning Tree will change the pathways to fit the condition and maintain the state of the network to keep it operational.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=72)** Spanning Tree helps to keep a loop-free network by pruning redundant links.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=78)** Spanning Tree uses what's called Bridge Protocol Data Units, or BPDUs, that hold information about ports, switches, port priority, and addresses.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=91)** Now a few attacks that can stress the Spanning Tree Protocol include a denial of service attack using a BPDU flood, take over the root bridge, or possibly claim another role.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=106)** Another protocol that we can attack is called Cisco Discovery Protocol.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=112)** This shares information with other Cisco devices.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=116)** Attacks include sending bogus Cisco Discovery Protocol packets to other devices, or flood Cisco Discovery packet's neighbor table and cause a denial of service.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=130)** In addition, if an attacker can get access to the LAN, they can use the Cisco Discovery Protocol to discover the entire topology of the network.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=141)** In addition, they can learn the router and switch model types, the operating systems in use, and network addressing, in order to launch an attack.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=151)** One tool that can take advantage of the vulnerabilities and some of the protocols found in the data link layer is Yersinia.
>
> **[2:40](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=160)** Let's take a look.
>
> **[2:43](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=163)** I'm in Kali Linux and I'll open a terminal.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=167)** I need to execute as root, so I'll type yersinia and then we'll go into the graphical user interface.
>
> **[2:54](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=174)** The switch is capital G.
>
> **[2:56](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=176)** And then we'll need to enter the root password.
>
> **[3:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=180)** Now it says it's the Alpha version, which is fine.
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=183)** I'll just say, OK.
>
> **[3:04](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=184)** But over on the right-hand side we see Launch attack.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=188)** And here we can see a number of different Layer 2 protocols.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=193)** For example, here we see Cisco Discovery Protocol, flooding the CDP table, attacks for DHCP, VLAN Trunking Protocol, and there are a number of attacks we can launch against Spanning Tree Protocol.
>
> **[3:33](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=213)** So by design, the data link layer can be a target for attacks.
>
> **[3:38](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=218)** Outline some of the vulnerable Layer 2 protocols.
>
> **[3:43](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=223)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** lan (3), bpdu (1), cdp (1), dhcp (1), vlan (1)
> **Code Keywords:** let (2), switch (2), interface (1)
> **Tools:** terminal (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Spoofing a MAC address
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=0)** - [Narrator] Malicious actors spoof their MAC address for various reasons, such as concealing their identity or evading an access control list.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=9)** But in most cases, it's part of a planned attack.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=13)** In this segment, we'll discuss a few ways that you can change your MAC address.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=19)** On a local area network, a host is identified by its Mac address.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=25)** If an attacker spoofs the Mac address to be the same as the victim, the attacker can then sniff all the traffic that was designed to go to the victim.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=35)** And in most cases, the victim generally is unaware that anything has taken place.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=42)** But how do we spoof a Mac address?
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=44)** Well, there are a couple of ways to change the MAC address.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=48)** Let's talk about a few.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=51)** One way is to use a Mac address spoofing tool, to change the MAC address of your network interface to the target MAC address.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=60)** Now, there are many tools available for different operating systems, such as Macchanger for Linux as we see here at this website or Technitium for Windows.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=73)** And you can learn more here.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=76)** Now, in some cases, you can physically change the MAC address.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=81)** Let's walk through an example.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=83)** I went to the control panel, network and sharing, and change adapter settings, which brought this window up and I found this adapter and I'll right click and go to properties and we'll bring this up.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=98)** And now we'll go to configure and I'll select the Advanced tab.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=104)** Now we're looking for the network address.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=108)** Now a network address has a number of different alternate naming conventions and it could go by network address, adapter address, MAC address, physical address, ethernet address, or even hardware address.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=124)** They're all the same thing.
>
> **[2:07](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=127)** So, I'm going to scroll down and in this case, it's network address.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=132)** Alright, so now we see that it ends with a 4F.
>
> **[2:18](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=138)** Now I went to the command line interface and I ran IP config.
>
> **[2:22](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=142)** So, I scrolled down to see the ethernet adapter and we see the physical is right here and we see it ends with a 4F.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=151)** So, what I'll do is change the network address.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=155)** Instead of 4F, I'll change it to 44 Then I'll say OK and it will take a couple of seconds so that it registers.
>
> **[2:46](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=166)** I'll go back in and run IP config all and then we'll locate the interface that we just changed.
>
> **[2:56](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=176)** And here, we see that the physical address has now changed.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=182)** So, that's one way to physically change your MAC address.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=185)** A more extreme way to change the MAC address if you can't do it any other way is to go in and modify the registry settings.
>
> **[3:15](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=195)** So, now let's test your knowledge.
>
> **[3:18](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=198)** On a land, a device is identified by its MAC or physical address.
>
> **[3:24](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=204)** Changing the MAC address will allow an attacker to intercept traffic.
>
> **[3:29](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=209)** Discuss ways that you can change a MAC address on a network interface card.
>
> **[3:35](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=215)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** mac (12)
> **Code Keywords:** interface (4), let (3), case, (1)
> **UI Navigation:** go to (3), select the (1), scroll down (1)
> **Analogies:** such as (2)
> **Tools:** command line (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [narrator] (1)

#### Defending against MAC attacks
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=0)** - [Instructor] Layer two, or the datalink layer, can fall victim to a number of different types of attacks.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=6)** Those include a macof attack, MAC spoofing, along with attacks against Cisco Discovery Protocol or Spanning Tree Protocol.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=16)** Layer two can be a very weak link, and if attacked, any higher layers will most likely be affected.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=24)** And that will include your users.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=27)** Best practice is to take steps to protect against these types of attacks.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=33)** Let's start with protecting against a macof attack.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=38)** On a switch, to protect against a macof attack, the network administrator should use switchport port security.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=46)** This limits the number of MAC addresses connecting to a single port on a switch.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=53)** On a Cisco switch, this is very easy to configure.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=57)** Now, here are the commands.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=59)** We would first say switchport mode access, and that would set the interface mode as an access port.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=67)** Then we would assign port security, and then we would say enable sticky mac.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=74)** Now a sticky mac allows only MAC addresses that are dynamically assigned or administratively added to stick to the port.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=84)** And this tells us what would happen if there's a violation.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=89)** And Cisco suggests that you shut down the port.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=92)** MAC spoofing is used in a man-in-the-middle attack.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=97)** To defend against MAC spoofing, use Source Guard on a Cisco device.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=102)** What this does is filter on trusted IP and MAC address bindings.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=108)** In order for a hacker to circumvent Source Guard, the attacker would have to spoof both the IP and MAC address, which can be a little more difficult.
>
> **[1:59](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=119)** When we think about Cisco Discovery Protocol, this is a passive attack, because Cisco Discovery Protocol is used to discover other Cisco devices.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=131)** To defend against this, consider disabling it or be selective where it is used.
>
> **[2:18](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=138)** Additionally, consider using secure encrypted protocols such as SSH or HTTPS to protect against eavesdropping, and also protect against a Spanning Tree Protocol.
>
> **[2:33](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=153)** Well, we wouldn't want to deactivate Spanning Tree, or else we might get a looping effect.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=159)** So if we do have Spanning Tree enacted, we would use PortFast, and then configure BPDU guard, which disables the port from receiving BPDUs, or Bridge Protocol Data Units.
>
> **[2:54](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=174)** Now, this is the command, spanning-tree portfast bpduguard.
>
> **[2:59](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=179)** We'll also want to enable root guard, and this is the command, spanning-tree guard root.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=188)** The bottom line is that layer two can be a very weak link, and we want to make sure that we implement security measures to avoid these types of attacks.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=199)** Now let's test your knowledge.
>
> **[3:22](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=202)** Discuss ways to defend against the following, macof attack, MAC spoofing, Cisco Discovery attack, and Spanning Tree attack.
>
> **[3:32](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=212)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** mac (8), ssh (1), https (1), bpdu (1)
> **Code Keywords:** switch (3), let (2), interface (1), this, (1)
> **CLI Commands:** ssh (1), make (1)
> **Prerequisites:** configure (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### VLAN hopping attack
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/vlan-hopping-attack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/vlan-hopping-attack?u=76281980&t=0)** - [Instructor] Malicious actors use a VLAN hopping attack to gain access to other VLANs on the network.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/vlan-hopping-attack?u=76281980&t=7)** In this segment, we'll outline how a VLAN hopping attack works, along with ways to defend against an attack.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/vlan-hopping-attack?u=76281980&t=16)** But first, let's talk about VLANs.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/vlan-hopping-attack?u=76281980&t=20)** A VLAN, or virtual local area network, removes the physical barrier and treats the host as if they were all part of the same subnet while logically separating networks within networks.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/vlan-hopping-attack?u=76281980&t=34)** VLANs offer several advantages over traditional LANs.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/vlan-hopping-attack?u=76281980&t=38)** One is performance, creating smaller broadcast domains and using switches instead of routers improves efficiency.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/vlan-hopping-attack?u=76281980&t=48)** VLANs also improves security as VLANs can be used to restrict access and create virtual work groups in isolation.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/vlan-hopping-attack?u=76281980&t=57)** VLANs also help provide user mobility.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/vlan-hopping-attack?u=76281980&t=61)** We can implement wireless constraints by ensuring a user assigned to a specific VLAN will always connect to that VLAN regardless of their location.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/vlan-hopping-attack?u=76281980&t=72)** One attack against a VLAN is a VLAN hopping attack, which allows an attacker to gain access to traffic on other VLANs not normally accessible.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/vlan-hopping-attack?u=76281980&t=84)** A VLAN hopping attack occurs when a malicious actor spoofs a switch by making an end device act as a trunk port.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/vlan-hopping-attack?u=76281980&t=94)** Now this can happen because many times the switch is set in auto trunking, or is using the dynamic trunking protocol, which is the default configuration.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/vlan-hopping-attack?u=76281980&t=105)** When the port senses that it's attached to a trunk line, it will change the mode to trunk.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/vlan-hopping-attack?u=76281980&t=112)** This will then allow the attacker to see all traffic across all VLANs.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/vlan-hopping-attack?u=76281980&t=117)** The malicious actor can then steal passwords or other sensitive information or inject malware into the network.
>
> **[2:05](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/vlan-hopping-attack?u=76281980&t=125)** To avoid a VLAN hopping attack, it's important to disable the auto trunking or dynamic trunking protocol.
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/vlan-hopping-attack?u=76281980&t=134)** You'll want to type the following command: switchport nonegotiate.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/vlan-hopping-attack?u=76281980&t=139)** Now this disables dynamic trunking protocol negotiation and configures the port as an access port.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/vlan-hopping-attack?u=76281980&t=147)** But then you'll want to verify the configuration for the specified interface by using the command: show interface interface-id switchport.
>
> **[2:38](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/vlan-hopping-attack?u=76281980&t=158)** Now, let's test your knowledge.
>
> **[2:41](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/vlan-hopping-attack?u=76281980&t=161)** Malicious actors use a VLAN hopping attack to gain access to other VLANs on the network.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/vlan-hopping-attack?u=76281980&t=168)** Outline how a VLAN hopping attack works, along with ways to defend against an attack.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/vlan-hopping-attack?u=76281980&t=175)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** vlan (11)
> **Code Keywords:** interface (3), let (2), switch (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Spoofing IRDP
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-irdp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-irdp?u=76281980&t=0)** - [Instructor] ICMP router discovery protocol, or IRDP is used on a network to allow hosts to discover routers on their network.
>
> **[0:10](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-irdp?u=76281980&t=10)** In this segment, we'll step through how an IRDP spoofing attack works.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-irdp?u=76281980&t=16)** The IRDP protocol is used by routers to discover information about other routers.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-irdp?u=76281980&t=23)** IRDP allows routers to dynamically learn the IP address of other routers on the network and exchange network configuration information.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-irdp?u=76281980&t=35)** IRDP spoofing is when a malicious actor sends false IRDP packets to a target router.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-irdp?u=76281980&t=43)** This then poisons the routing table with incorrect information.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-irdp?u=76281980&t=48)** The traffic is then redirected to the malicious actor's device which allows the attacker to intercept, read, and even modify the traffic.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-irdp?u=76281980&t=59)** This type of attack can disrupt communications and help the malicious actor to launch a more serious attack.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-irdp?u=76281980&t=68)** To prevent IRDP spoofing, you can do the following.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-irdp?u=76281980&t=72)** Configure routers to only accept IRDP packets from trusted sources by using authentication.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-irdp?u=76281980&t=80)** Secure communications between routers by using encrypted protocols.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-irdp?u=76281980&t=86)** And if you have a small network with a few routers that are configured statically, you might want to consider disabling router discovery.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-irdp?u=76281980&t=96)** And of course, keep the router software and firmware up-to-date to protect against vulnerabilities.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-irdp?u=76281980&t=104)** Now, let's test your knowledge.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-irdp?u=76281980&t=107)** IRDP is used on a network to allow hosts to discover routers on their network.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-irdp?u=76281980&t=113)** Step through how an IRDP spoofing attack works.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-irdp?u=76281980&t=118)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** irdp (10), icmp (1)
> **Code Keywords:** let (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### 3. Dissecting DHCP

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Investigating DHCP
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=0)** - [Instructor] DHCP, or dynamic host configuration protocol, dynamically assigns an IP address.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=8)** In this video, we'll use Wireshark to review the four step DHCP process; discover, offer, request, and acknowledge.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=18)** Dynamic host configuration protocol automatically assigns an IP address on a local area network.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=27)** Because we want our IP address fast, it uses UDP for transport.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=32)** The client will use UDP Port 68 and the server will use UDP Port 67.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=40)** To activate DHCP, we want to make sure that our interface is set to automatically obtain an IP address.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=50)** I'm in the control panel, network and internet, network and sharing center, and then I select my interface.
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=58)** I'll select properties.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=61)** And then in my bindings, I'm going to select TCP IP version four and look at the properties.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=70)** And here we see obtain an IP address automatically.
>
> **[1:15](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=75)** Now, we don't assign a static IP address unless it's on a machine that we don't want the IP address to change.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=82)** And that would include something like a server or a printer.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=87)** When a host joins a network or wakes up, it doesn't have an IP address.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=92)** It broadcasts by beginning the DHCP process by sending a Discover packet.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=99)** The DHCP process has four steps; discover, offer, request, and acknowledgement.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=107)** It's also called the DORA process.
>
> **[1:51](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=111)** Let's see how this works.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=112)** I'll begin by doing a capture in Wireshark.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=116)** Now I'll go to the command line interface and I want to release my IP address from the wifi interface.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=124)** So I'll type IP config, release wifi, and press enter.
>
> **[2:10](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=130)** Now I want my IP address back, so now I need to type IP config, renew wifi, and press enter.
>
> **[2:20](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=140)** Now keep in mind it will take a few seconds because it's a four step process.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=146)** Now I have an IP address and we can stop the capture.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=149)** And now we'll take a look.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=151)** If you'd like to follow along, I put a copy in the exercise folder.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=157)** So we brought this up and we first see that we have a DHCP release.
>
> **[2:42](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=162)** Now, that means that I've given up my IP address, but I want you to look at the transaction ID.
>
> **[2:49](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=169)** Now here we see it ends with a 2e, but then the next four all end in a 4-7, and that's because they all belong together.
>
> **[2:59](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=179)** So let's start with the discover packet.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=181)** Now I'll just pull this up.
>
> **[3:04](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=184)** And when we get down here, you can see that it's a discover packet from the host, and that would be my machine, and I'll drop this down.
>
> **[3:14](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=194)** Now we'll see that this packet is a broadcast which is sent to all devices on that network.
>
> **[3:21](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=201)** And then down below we see I don't have an IP address.
>
> **[3:26](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=206)** So the second step is where the server responds with an offer, and we'll go to that frame, frame three, and then we'll drop this down.
>
> **[3:35](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=215)** And what it does is it says I have an IP address and maybe you'd like it.
>
> **[3:42](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=222)** Now it's up to me whether or not I want that IP address.
>
> **[3:46](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=226)** And I decided I do want that.
>
> **[3:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=228)** So now I'm going to formally request that IP address and that is sent to the server.
>
> **[3:55](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=235)** And then the server responds with a formal acknowledgement.
>
> **[3:59](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=239)** Now if we take a look at that acknowledgement down below, we see the client IP address and then down below there's other parameters.
>
> **[4:09](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=249)** There's the MAC address and then you'll see the message type and then how long I can keep it along with other parameters sent from the DHCP server.
>
> **[4:19](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=259)** So there's a lot of information in a DHCP transaction.
>
> **[4:24](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=264)** So when we complete that transaction, I have an IP address and now I'm able to connect to the network.
>
> **[4:33](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=273)** So now let's test your knowledge.
>
> **[4:36](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=276)** DHCP dynamically assigns an IP address.
>
> **[4:40](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=280)** Discuss the four step DHCP process; discover, offer, request, and acknowledgement.
>
> **[4:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=288)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (10), udp (3), tcp (1), dora (1), mac (1)
> **Code Keywords:** interface (4), let (3), static (1)
> **Ports:** port 68 (1), port 67 (1)
> **UI Navigation:** go to (2)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** make (1)
> **Tools:** command line (1)
> **Warnings:** keep in mind (1)

#### Depleting the DHCP pool
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=0)** - [Instructor] A malicious actor can launch a denial-of-service attack using a DHCP starvation attack.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=9)** In this segment, we'll discuss how an attacker can use Yersinia, a tool built into Kali Linux to send hundreds of DISCOVER packets and exhaust the IP address pool.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=24)** Setting up a DHCP server on a router is pretty straightforward.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=29)** Next, let me step you through some of the commands.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=34)** This enables the DHCP server and relay features on your router.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=40)** This specifies which IP addresses should be excluded, and that would include printers, servers, or other devices that have a static IP address.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=52)** This will create a name for a DHCP server address pool.
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=57)** And this will configure a subnet network and mask of the DHCP address pool.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=64)** This will specify the IP address of a DNS server that is available to any DHCP client.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=73)** And this will give the IP address of the default router for the DHCP client.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=81)** And this will specify the duration of the lease.
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=85)** The default is generally one day.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=88)** DHCP depletion can happen on a network and it can happen for a number of different reasons.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=96)** Many are due to misconfiguration issues, and let's talk about a few.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=102)** The settings might have included only one lease per client, the server has too many reserved leases, the server scopes have uneven lease times, the server scope has uneven sizes, or there is an influx of new users on the network.
>
> **[2:05](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=125)** While misconfiguration issues happen when setting up a DHCP server, another way to deplete the DHCP pool is by using a DHCP starvation attack, which exhausts all usable IP addresses on a subnet.
>
> **[2:25](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=145)** The attack will prevent anyone from using the network, which is essentially a denial-of-service attack.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=154)** To launch a DHCP starvation attack, a malicious actor can use Yersinia, which is a network tool used to test and discover vulnerabilities in various networking protocols.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=167)** Now I'm here at this website where we can see a screenshot of Yersinia.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=173)** Now, one of the attacks that can be performed using Yersinia is a DHCP starvation attack.
>
> **[3:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=180)** In this type of attack, the attacker will flood a DHCP server with a large number of bogus DHCP requests.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=189)** And here in this graphic, we can see that it is running an attack and you can see the message type, which is a DISCOVER packet and there's many, many DISCOVER packets.
>
> **[3:22](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=202)** Now, multiple DISCOVER packets are going out onto the network.
>
> **[3:26](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=206)** Now the server will try to respond with DHCPPOFFERs to nonexistent MAC addresses.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=214)** This will then deplete the IP address pool, causing it to run out of available IP addresses to assign to new clients.
>
> **[3:44](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=224)** Now let's test your knowledge.
>
> **[3:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=228)** Outline how an attacker can use Yersinia to launch a DHCP starvation attack and exhaust the IP address pool.
>
> **[3:58](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=238)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (16), discover (4), dns (1), mac (1)
> **Code Keywords:** let (3), static (1), type, (1)
> **Definitions:** is a  (3), is an  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Deploying a rogue DHCP server
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=0)** - [Instructor] Dynamic host configuration protocol dynamically assigns IP addresses along with other information, such as the default gateway and the DNS servers.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=12)** In this segment, we'll see how a malicious actor can launch a rogue DHCP server and supply clients with bogus information.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=23)** When setting up a DHCP server, you include information on the address pool and the exclusions, lease time, along with the IP address of the DNS server and default gateway.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=37)** When a client joins the network and requests an IP address, the DHCP server then supplies the information to the client.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=48)** When an unauthorized or rogue server is on your network, it can start supplying clients with bogus information that will point the victim to the wrong default gateway and DNS server, which can be the same IP address as the attacker's machine.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=65)** The victim may be unaware that they have the wrong information.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=70)** When the client has the wrong default gateway, the attacker is essentially a man in the middle and can capture and sniff any traffic destined to the gateway, such as usernames and passwords.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=83)** In addition, an attacker can create a rogue DNS server, and then design a phishing website, and direct the client to the bogus site in order to obtain confidential information, such as credit cards and passwords.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=99)** One tool that we can use to launch an attack against DHCP is Yersinia.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=105)** I'm in Kali Linux, and I'll open a terminal.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=109)** I need to execute as root, so I'll type Yersinia and then we'll go into the graphical user interface.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=113)** The switch is capital G and then we'll need to enter the root password.
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=123)** It says it's an alpha version, and I'm fine with that, so I'll say, "OK".
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=129)** Now we'll go up to Launch attack and select the tab DHCP.
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=135)** Here you can select creating DHCP rogue server, right here, and then say, "OK".
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=144)** Now this will launch the attack panel.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=147)** You set the parameters to create your rogue DHCP server.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=151)** Press Enter and begin capturing traffic.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=156)** Now, we don't want a rogue DHCP server on our network but I'll show you in Wireshark evidence of a possible rogue DHCP server.
>
> **[2:46](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=166)** Now, I've opened the packet capture and it only has DHCP traffic but here we see two sets of DORA transactions.
>
> **[2:57](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=177)** Here we see the first set, and here we see the second set, but along with that, you see two sets of transaction IDs.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=188)** Now, this would be common as we most likely would see different transaction IDs for different transactions.
>
> **[3:15](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=195)** However, if we take a look at the offers, we see one clear distinction.
>
> **[3:20](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=200)** Here we see an offer from a server that ends with a .1, and here we see an offer from a server that ends with a .4.
>
> **[3:32](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=212)** So there there are two separate offers from two separate IP addresses.
>
> **[3:38](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=218)** The second IP address could be a valid DHCP server or it could be a rogue DHCP server.
>
> **[3:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=228)** Now let's test your knowledge.
>
> **[3:50](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=230)** Explain how an attacker can launch a rogue DHCP server, and discuss some possible results.
>
> **[3:58](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=238)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (13), dns (4), dora (1)
> **Code Keywords:** interface (1), switch (1), let (1)
> **Analogies:** such as (3)
> **Tools:** terminal (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### Defending against DHCP attacks
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-dhcp-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-dhcp-attacks?u=76281980&t=0)** - [Instructor] DHCP is an important protocol.
>
> **[0:03](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-dhcp-attacks?u=76281980&t=3)** In this segment, we'll see how to defend against a DHCP attack.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-dhcp-attacks?u=76281980&t=11)** Dynamic Host Configuration Protocol doesn't have a native authentication process.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-dhcp-attacks?u=76281980&t=18)** When a client requests an IP address from a DHCP server the client really has no reassurance that the server is legitimate.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-dhcp-attacks?u=76281980&t=30)** In addition, the server really has no way of knowing that the client that's requesting the address is a legitimate client on the network or a malicious actor.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-dhcp-attacks?u=76281980&t=42)** Rogue clients and servers on the network can cause serious problems.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-dhcp-attacks?u=76281980&t=47)** Network administrators can reduce risk by configuring devices to monitor for trusted hosts.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-dhcp-attacks?u=76281980&t=55)** To prevent DHCP attacks, there are a few best practices.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-dhcp-attacks?u=76281980&t=61)** One is that you can implement VLAN Access Control List.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-dhcp-attacks?u=76281980&t=66)** Now, keep in mind that a regular access control list will reside on a router's interface and is used only for routed packets.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-dhcp-attacks?u=76281980&t=76)** A VLAN Access Control List provides access control on a switch.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-dhcp-attacks?u=76281980&t=83)** In a Windows environment, Active Directory authorizes DHCP servers before they can start leasing address to clients.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-dhcp-attacks?u=76281980&t=94)** And you can also use Dynamic ARP Inspection.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-dhcp-attacks?u=76281980&t=98)** Now, this will reject invalid and malicious ARP packets.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-dhcp-attacks?u=76281980&t=104)** DHCP snooping on a switch works with IP Source Guard and Dynamic ARP Inspection and works on a concept of trusted ports and untrusted ports.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-dhcp-attacks?u=76281980&t=116)** Trusted ports are interfaces that connect to authorized DHCP servers and switch uplinks.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-dhcp-attacks?u=76281980&t=124)** Untrusted ports are user access ports.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-dhcp-attacks?u=76281980&t=129)** DHCP snooping begins by creating a snooping database containing the information learned per port, like the IP address assigned, MAC address, and VLAN.
>
> **[2:23](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-dhcp-attacks?u=76281980&t=143)** Now, let's test your knowledge.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-dhcp-attacks?u=76281980&t=146)** DHCP is an important protocol.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-dhcp-attacks?u=76281980&t=149)** Discuss some of the ways to defend against a DHCP attack.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-dhcp-attacks?u=76281980&t=156)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (10), vlan (3), arp (3), mac (1)
> **Code Keywords:** switch (3), interface (1), let (1)
> **Definitions:** is an  (2), is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Identifying key elements in a capture
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-identifying-key-elements-in-a-capture-26999128?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-identifying-key-elements-in-a-capture-26999128?u=76281980&t=0)** - [Instructor] Let's do a challenge.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-identifying-key-elements-in-a-capture-26999128?u=76281980&t=7)** But first, let's have a little background information.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-identifying-key-elements-in-a-capture-26999128?u=76281980&t=12)** While sniffing traffic, you may need to examine the packets to try to piece together an event.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-identifying-key-elements-in-a-capture-26999128?u=76281980&t=19)** In this challenge, we'll examine a PCAP and identify several key elements that could be evidence of an indication of compromise.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-identifying-key-elements-in-a-capture-26999128?u=76281980&t=30)** Although there's a lot going on, we'll evaluate five things using Wireshark, Brim, CloudShark, and VirusTotal.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-identifying-key-elements-in-a-capture-26999128?u=76281980&t=39)** The goal of this challenge is to get an idea of what you might see when there is possible malicious activity on your network.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-identifying-key-elements-in-a-capture-26999128?u=76281980&t=48)** Now, there's detailed instructions on the challenge worksheet, but the first thing is that you'll need to get the packet capture, and it's here at this website, and you'll download the zip file and you'll need the password, which is here on this website.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-identifying-key-elements-in-a-capture-26999128?u=76281980&t=67)** So pause the video, complete the challenge, and then come back and see what my thoughts were.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-identifying-key-elements-in-a-capture-26999128?u=76281980&t=74)** This challenge should take you about 30 minutes.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-identifying-key-elements-in-a-capture-26999128?u=76281980&t=77)** Good luck.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Exercise Files:** download the (1), zip file (1)
> **Prerequisites:** you'll need (2)
> **Env Vars:** pcap (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Identifying key elements in a capture
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=0)** - [Instructor] Okay, now let's check our work.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=8)** First, we were to go to this site, [malware-traffic-analysis.net](https://malware-traffic-analysis.net), and download and extract this file.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=18)** You'll need a password, which is found on this page.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=22)** Next, you'll download and install a copy of Brim.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=27)** Now, Brim is a tool that helps us dissect a packet capture during analysis.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=34)** Now I've opened the file Forensic-Challenge.pcap, and now there's a lot going on, but let's take a look at a couple of things just to get you a taste of what you might see during a forensic investigation.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=49)** Over on the left hand side, we'll take a look at the Queries section, and we'll select Queries, HTTP Requests.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=59)** There are two entries, and what we want to do is take a look at this host.
>
> **[1:04](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=64)** Now we're going to investigate a little further and take it into Cisco Talos.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=70)** We'll right-click and copy.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=74)** And now I'm at Cisco Talos.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=76)** Now Cisco Talos provides threat intelligence on sites that could possibly have a risky reputation.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=84)** I've entered the host name and will run the search, and this tells us that this site has an untrusted reputation.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=94)** Now we're back in Brim and we'll select all the packets.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=99)** And next we'll take a look at the Suricata alerts.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=102)** Now, Suricata is an open source intrusion detection and prevention system.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=108)** So here we see Suricata alerts by category, by source and destination IP address, or by subnet.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=117)** Now there are a number of different alerts.
>
> **[2:01](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=121)** So if you see a number of Suricata results, this may indicate that the system has detected potential security threats, and you should investigate and take action if appropriate.
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=135)** Now we'll go back to all the packets, and we're going to use this filter, 139.59.6.175, and run the filter.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=149)** Now you'll select the packet marked Files right here, and now we're going to see how we can dig even deeper in Brim.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=157)** And I'll scroll over to the right and now on this hash value, right-click.
>
> **[2:42](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=162)** And now we can go and see VirusTotal Lookup.
>
> **[2:46](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=166)** And when we select this, it will take us to VirusTotal.
>
> **[2:51](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=171)** What it does is it immediately investigates that file, and here we see that 56 security vendors and three sandboxes flagged this file as malicious.
>
> **[3:04](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=184)** Now we'll go into Wireshark and open the capture if you haven't already.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=189)** In Wireshark, we'll do something a little bit different.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=192)** First, we're going to export some objects, and I do this so I can see if I could piece together what possibly happened, what files could be found within the capture.
>
> **[3:23](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=203)** So we go to File, Export Objects, HTTP.
>
> **[3:28](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=208)** Now we want all of these, so we'll say Save As in a folder, Forensic.
>
> **[3:35](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=215)** Now open the folder, and you want to take a look at this file, and I'll right-click, and open it with a browser.
>
> **[3:44](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=224)** And what we can see is that somehow someone reached a site that was a suspected phishing site, and in some cases, they may have gone further, gone to the site and downloaded some malware, which it could have been a drive-by download.
>
> **[3:59](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=239)** You'd have to look a little further to see.
>
> **[4:01](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=241)** But that's part of that capture, and it's piecing together all the events of that incident.
>
> **[4:09](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=249)** We'll also take a look at the emails in this capture.
>
> **[4:12](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=252)** So go to File, Export Objects, IMF, and we want all of those.
>
> **[4:19](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=259)** So we'll say Save All in a folder called email.
>
> **[4:27](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=267)** Now, once you get into that folder, just select the first email, and you can open it with your application.
>
> **[4:37](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=277)** And here we see a phishing email, which is a classic phishing email.
>
> **[4:42](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=282)** There's an attachment and even a password, which might prompt someone to open it, and then release the malware.
>
> **[4:50](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=290)** And in the last section, I take you out to CloudShark.
>
> **[4:54](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=294)** Now, CloudShark is a cloud-based analysis tool, which is really great for teams.
>
> **[4:59](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=299)** Now we can't capture in CloudShark, but we can share our analysis with our team as we'll do right now.
>
> **[5:06](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=306)** So once here, we'll go to Analysis Tools and Threat Assessment.
>
> **[5:13](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=313)** Now, this is only a portion of the capture, but here we can see there's a lot going on.
>
> **[5:18](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=318)** We see one with high severity and a number of them with low severity.
>
> **[5:24](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=324)** But we want to also then open Advanced Analysis, which will take us to this page.
>
> **[5:30](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=330)** And now I want you to just select right here, this file download, and now we can really investigate and dig into the file to see what possibly has happened.
>
> **[5:42](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=342)** So when you're examining a packet capture after an intrusion, you can find several key elements that help you to piece together either an attack or evidence of an advanced persistent threat.
>
> **[5:57](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=357)** I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (4), right-click (3), select the (2), open the (2)
> **Definitions:** is a  (3), is an  (1)
> **Code Keywords:** let (2), this, (1)
> **Env Vars:** http (2), imf (1)
> **Cross-References:** go back to (1), in the last (1)
> **Prerequisites:** you'll need (1), install (1)
> **CLI Commands:** find (1)
> **URLs:** [malware-traffic-analysis.net](https://malware-traffic-analysis.net) (1)


### 4. Reviewing ARP

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Describing ARP
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=0)** - [Instructor] Address Resolution Protocol resolves an IP address to a MAC address.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=6)** In this segment, we'll review the purpose of ARP, discuss how it's not routable, and examine a normal ARP request and reply.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=16)** On a Local Area Network, a host is identified by its MAC address rather than the IP address.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=25)** When a frame is sent out onto the LAN and the MAC address is unknown, an ARP broadcast is sent out.
>
> **[0:32](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=32)** All hosts on the network will hear it.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=35)** An ARP request simply says, "Who has this IP address?
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=40)** "Tell me."
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=41)** It will ask over and over until it gets a resolution.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=46)** So that you can see the process, we'll examine a normal ARP request and reply in Wireshark.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=53)** To get a copy of an ARP packet capture so that you can follow along, we'll go to Cloudshark, a cloud-based analysis tool where you can analyze captures from your own device and then you can share it with your team.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=67)** But I am going to download the file and open it in Wireshark.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=71)** So we'll go to Export, Download File, and download the original file.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=79)** And here we have the ARP capture.
>
> **[1:21](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=81)** Now, there are a couple of other packets in here.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=84)** We see ICMP.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=86)** But I'll put in the display filter ARP and then press Enter.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=91)** All right, now move this up so I have a little bit more landscape.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=96)** We'll start at frame one.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=99)** Now, when we take a look at frame one, I just want to show you something here.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=104)** I'll drop this down. There's a lot of information in here.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=107)** Well, there is no header called frame whatever.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=110)** That's done by Wireshark and Cloudshark to let you know the metadata about that single frame.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=117)** Now, after that, that's where the encapsulation begins.
>
> **[2:01](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=121)** Right here.
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=123)** There you see the Ethernet II frame header.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=126)** And then you see ARP.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=129)** Now, understand there is no IP header.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=132)** ARP sits in between layer three and layer two.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=136)** There's no IP header because it's already in the network it needs to be.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=141)** So now we'll drop down the header. And this is the request.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=146)** Now, when we take a look, here we see the sender MAC address, the sender IP address, the target MAC address, and the target IP address.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=157)** Now, here we see zeros where the MAC address should be because it doesn't know the MAC address.
>
> **[2:44](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=164)** So we'll pull that back up and then go to frame two.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=167)** Now, this is coming from the host with the MAC address.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=172)** So now take a look. It's done the resolution.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=175)** Here we see the sender MAC address, the sender IP address, the target MAC address, and the target IP address.
>
> **[3:06](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=186)** Now we'll pull that up.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=188)** Now, keep in mind, in order to analyze ARP traffic, you really have to be sniffing on the same broadcast domain as the device sending the ARP traffic.
>
> **[3:20](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=200)** So now let's test your knowledge.
>
> **[3:22](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=202)** Review the purpose of ARP and some of the characteristics of an ARP request and reply.
>
> **[3:29](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=209)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** arp (14), mac (10), lan (1), icmp (1)
> **Code Keywords:** let (2), export, (1)
> **UI Navigation:** go to (3)
> **Exercise Files:** download the (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Exploring ARP spoofing tools
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=0)** - [Instructor] To effectively launch an ARP spoofing attack, you'll need to use a tool.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=5)** In this segment, we'll investigate tools such as Ettercap, Habu and KickThemOut.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=13)** In addition to being able to launch a man-in-the-middle attack, the tools share several key features.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=20)** They're capable of network sniffing as they capture and analyze traffic in real time.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=26)** Much of this is done before the attack but the tool will continue to monitor the network while the attack is in progress.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=35)** They're able to do packet manipulation by modifying or injecting specially crafted packets into a network and they have built-in protocol analysis.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=48)** So let's talk about a few of these tools.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=52)** Ettercap is built into Kali Linux and you can use Ettercap for a man-in-the-middle attack including ARP spoofing.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=61)** Habu is an open source Python network attack framework and I'm at the GitHub page and I'll scroll down.
>
> **[1:10](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=70)** Habu includes tools for launching a variety of attacks such as ARP spoofing and DHCP starvation attacks as shown in this list.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=82)** Another tool that can perform an ARP spoofing attack is called KickThemOut.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=88)** I'm here at the GitHub page where you can learn a little more about the app.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=94)** KickThemOut is a Python tool that can launch an ARP spoof against devices in a local area network.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=102)** The attack will prevent those devices from accessing the internet.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=107)** Now this attack could be detrimental if there were mission critical IoT devices such as medical appliances or industrial automation systems.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=118)** So what I want to do is walk through some of the steps that you would take to launch an attack.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=124)** I'm in Kali Linux.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=126)** I've installed the app from GitHub so I'll open a terminal.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=132)** We'll go to KickThemOut and I need to execute as root and I'll need to enter the password for root.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=146)** So now I'll need to enter the default gateway.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=149)** So I'll open another terminal and obtain that IP address.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=156)** IP route grip default and there we have the IP address and we'll put it over here.
>
> **[2:49](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=169)** All right, at this point, you would select a target and launch the attack.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=173)** I'll select two and it will take a second and then it will offer some choices.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=181)** Now I'm not going to launch the attack but you can see that this is achieved fairly easily.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=189)** So now let's test your knowledge.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=192)** To effectively launch an ARP spoofing attack, you'll need to use a tool.
>
> **[3:18](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=198)** Discuss some common features of Ettercap, Habu and KickThemOut used when launching an attack.
>
> **[3:26](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=206)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** arp (6), dhcp (1)
> **Tools:** github (3), terminal (2)
> **Code Keywords:** let (2), continue (1)
> **Definitions:** is an  (1), is called (1), is a  (1)
> **Analogies:** such as (3)
> **CLI Commands:** python (2)
> **UI Navigation:** scroll down (1), go to (1)
> **Prerequisites:** you'll need (2)

#### Detecting ARP spoofing
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=0)** - [Instructor] An ARP spoof or cache poison is used in a man-in-the-middle attack.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=5)** In this segment, we'll demonstrate in Wireshark how you can identify an ARP spoofing attack.
>
> **[0:13](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=13)** Address Resolution Protocol is used to resolve an IP address to a MAC address.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=20)** Now, ARP can have some problems.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=23)** They're rare, but mainly they're due to configuration errors in that someone may have assigned an incorrect IP address or there may be an incorrect subnet mask.
>
> **[0:35](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=35)** However, we know that there are attacks against ARP one being an ARP spoof or ARP cache poison attack.
>
> **[0:43](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=43)** ARP spoofing is used in a man-in-the-middle attack.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=48)** To launch an attack, the attackers send spoofed ARP messages.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=53)** Now, you ask yourself, how does this happen?
>
> **[0:57](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=57)** ARP spoofing can take place because ARP is stateless, meaning it doesn't retain any prior information on packets that were sent in the past.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=67)** An ARP reply can be sent even if there has been no request and it will be accepted.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=73)** This then poisons the cache.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=77)** So I'd like to show you in Wireshark what this looks like.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=80)** If you'd like to follow along I'm at this website, [securitysite.com](https://securitysite.com).
>
> **[1:25](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=85)** I'm here at this page where we can see that it's loaded with PCAPs that you can use in order to study a little bit more about the protocols.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=94)** The one I'm going to look at is ARP Spoof.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=98)** On the right-hand side, it says Go and View.
>
> **[1:41](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=101)** I selected Go and that downloaded a ZIP file, which I unzipped, and then I brought it into Wireshark.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=109)** I'm in Wireshark and I loaded the packet capture.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=113)** Now, there are a lot of packets.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=115)** As we see down below, 324.
>
> **[1:59](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=119)** Now, I only want the ARP packets, so I'll put ARP in the display filter and then press Enter.
>
> **[2:08](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=128)** Now more specifically, what I want is an ARP reply and that's an opcode two.
>
> **[2:15](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=135)** So we go down right here to the reply and we see opcode two, and what we'll do is right click and then we'll say Apply As Filter, and then we'll say Selected and that will run the filter.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=151)** I'll pull that up.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=152)** Now, when we're in Wireshark, Wireshark will try to help you by notifying you that something might be going on.
>
> **[2:41](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=161)** In the lower left-hand corner, we see a yellow dot and I'll select that and that's the expert information.
>
> **[2:49](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=169)** And what we see here is a duplicate IP address configured and there are a lot of them.
>
> **[2:57](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=177)** So now let's take a look at that and I'll just close this.
>
> **[3:01](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=181)** And here we see the destination b1, b1, b1.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=185)** Now, what it's doing is it's throwing out information here that this IP address is at this address, is at this address and it's trying to spoof the cache by sending out a lot of bogus ARP replies.
>
> **[3:22](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=202)** So we know that Address Resolution Protocol is a great protocol but there are methods to detect ARP spoofing.
>
> **[3:30](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=210)** So now let's test your knowledge.
>
> **[3:33](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=213)** Discuss how you can identify an ARP spoofing attack in Wireshark.
>
> **[3:39](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=219)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** arp (18), mac (1), zip (1)
> **Code Keywords:** let (2), this. (1)
> **Definitions:** is a  (2), is an  (1)
> **URLs:** [securitysite.com](https://securitysite.com) (1)
> **Exercise Files:** zip file (1)
> **Speakers:** - [instructor] (1)

#### Defending against ARP attacks
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=0)** - [Instructor] On a local area network that uses ARP, all hosts are aware of the MAC and IP address pairings of all devices.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=9)** However, we know that there are potential attacks against ARP, so you should monitor and protect your network.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=17)** In this segment, we'll investigate some tools that help detect malicious ARP activity.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=24)** The request for comments for ARP was written in 1982.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=29)** And the protocol wasn't designed to deal with malicious activity such as cache poisoning, or spoofing attacks, so let's take a look at a sampling of some of the tools that are available.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=42)** I'm here at this website, [snort.org](https://snort.org).
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=46)** Snort is a powerful intrusion detection system that you can use and, once configured, Snort will monitor for threats.
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=55)** When using Snort, you'll want to check out the ARP spoof pre-processor that can monitor for attacks against ARP.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=62)** Within this page, you'll see a couple of configuration options.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=67)** Another option is Arpalert that will compare with a list of authorized MAC addresses to make sure that nothing suspicious is going on.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=78)** Here we can visit the man page to learn more about Arpwatch.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=83)** Arpwatch is another tool that helps keep track of ethernet to IP address pairings.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=91)** Now, it seems that a lot of these are designed for a Linux system.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=95)** However, there is one that I found called ARP Monitor and this is designed for a Windows system.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=103)** I downloaded and installed ARP Monitor so we can watch it in action.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=108)** I've opened up the panel, and it's automatically monitoring the network.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=113)** On the left, there are a number of different menu choices to view and configure ARP Monitor.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=118)** I'm here at Options and, within this, it gives you a snapshot of what it's looking at, the different adapters, the different events.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=126)** And here, we can select different notification methods.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=131)** This tells us our IP to MAC address pairings on the network.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=136)** And here is a log of all the ARP communications.
>
> **[2:20](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=140)** And here, we'll look at events.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=144)** Now, I purposely caused an ethernet mismatch, so you can see the results in action.
>
> **[2:30](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=150)** Now, what happens with an ethernet mismatch?
>
> **[2:33](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=153)** Well, if the source MAC address in a packet doesn't match the address inside the ARP packet this could indicate a spoofing attack, and you should investigate further.
>
> **[2:45](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=165)** So now, let's test your knowledge.
>
> **[2:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=168)** Address resolution protocol is still in use on many of today's local area networks.
>
> **[2:54](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=174)** However, there can be attacks against ARP.
>
> **[2:58](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=178)** Outline some of the tools you can use that can detect an ARP attack.
>
> **[3:04](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=184)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** arp (13), mac (4)
> **Code Keywords:** let (2), this, (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **URLs:** [snort.org](https://snort.org) (1)
> **Documentation:** man page (1)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)


### 5. Attacking DNS

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Summarizing DNS
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=0)** - [Instructor] DNS converts a host name to an IP address and is essential to any network.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=7)** In this segment, we'll review the components of a DNS request and reply using wire shark.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=15)** Domain name system uses Port 53 over UDP or TCP.
>
> **[0:22](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=22)** The transport protocol will depend on what we need to achieve.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=27)** For a request, DNS will use UDP because UDP is a lightweight protocol and we want a fast efficient response.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=38)** For a full zone transfer, DNS will use TCP as we want to make sure that we have a complete transfer so we use a connection-oriented process.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=51)** Now, DNS queries and responses are pretty straightforward.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=56)** A client will send a query to a DNS server for an IP address and the server will respond with information.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=66)** When looking at a DNS header, there are four sections.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=71)** We have questions, answer resource records, authority resource records, and additional resource records.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=82)** Now, depending on the query, you'll see a number of different types of records.
>
> **[1:26](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=86)** Let's take a look at some common ones.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=89)** You might see a type A, which is an IP version 4 address.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=95)** An MX is a mail exchange and a AAAA is an IP version 6 address.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=104)** Next, let's take a look at a standard request and reply.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=108)** If you'd like to follow along, go to this website and then select DNSrequestreply.pcap.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=115)** If you select it, it will open it in Wire Shark and then you can go to Export, Download File and then download the original file.
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=126)** I then opened it in Wire Shark and I just want to look at a couple of things.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=132)** We want to look at the transaction id, the flags, the query and the answers.
>
> **[2:18](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=138)** So first we see that DNS standard query and we'll drop down the DNS header.
>
> **[2:24](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=144)** Now the first thing we see is the transaction ID, which ends with a 9B.
>
> **[2:29](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=149)** Now this mirrors the query response, which is also 9B, so that transaction is used to keep both parts together.
>
> **[2:39](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=159)** Now, in addition to the transaction ID, we'll drop down the flags and here we see a couple of things.
>
> **[2:46](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=166)** First of all, the flag is set at zero which means it's a standard query.
>
> **[2:52](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=172)** In addition, we'll look down below.
>
> **[2:54](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=174)** We see that the client has asked for recursion.
>
> **[2:58](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=178)** Recursion desired, do query recursively.
>
> **[3:02](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=182)** Now, why is that?
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=183)** Well, there are two types of queries in DNS, recursive and iterative.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=189)** In general, we want recursive and that means that if the server can't find it, the server will go out and do the resolution for me.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=199)** Iterative means that if the server can't find it, I have to go out again and again until I have a resolution.
>
> **[3:26](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=206)** So I do want recursion.
>
> **[3:29](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=209)** I'll pull that up.
>
> **[3:31](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=211)** And here we see the queries.
>
> **[3:32](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=212)** And what we're looking for is the IP address for [cisco.com](https://cisco.com).
>
> **[3:38](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=218)** Now, down below here, you see the response in 2.
>
> **[3:41](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=221)** Well, Wire Shark helps you out a little bit so that you can see where the response is.
>
> **[3:46](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=226)** Now there are only two frames in this capture, but we'll go to frame two.
>
> **[3:53](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=233)** This is the response, and we'll drop down the DNS header.
>
> **[3:56](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=236)** Now first we see the transaction ID.
>
> **[3:58](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=238)** Again, it ends with a 9B.
>
> **[4:02](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=242)** We'll drop down the flags.
>
> **[4:04](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=244)** The first flag is set at one and that means that the message is a response.
>
> **[4:10](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=250)** And now we'll take a look at recursion.
>
> **[4:12](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=252)** We see that the client has asked for recursion.
>
> **[4:16](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=256)** In response, the server says, recursion is available.
>
> **[4:20](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=260)** This server can do a recursive query.
>
> **[4:24](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=264)** Well down below, now pull that back up and we'll go down below to the query which we know we're asking for [cisco.com](https://cisco.com).
>
> **[4:32](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=272)** And here's the answer.
>
> **[4:34](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=274)** Now down below we see the IP address and we'll right click and we'll say Copy Value.
>
> **[4:41](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=281)** Now that will copy that value 72.163.4.161 and we'll test to see if it is indeed a Cisco IP address.
>
> **[4:52](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=292)** To search for that IP address, put that IP address in quotes.
>
> **[4:58](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=298)** And here we see IP address details.
>
> **[5:02](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=302)** Now we'll go to that.
>
> **[5:03](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=303)** And we do see that this IP address does belong to Cisco Systems.
>
> **[5:10](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=310)** So now let's test your knowledge.
>
> **[5:12](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=312)** DNS converts a host name to an IP address.
>
> **[5:17](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=317)** Review key components of a DNS request and reply.
>
> **[5:22](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=322)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** dns (13), udp (3), tcp (2), aaaa (1)
> **Definitions:** is a  (3), means that (3), is an  (2)
> **Code Keywords:** let (3), export, (1)
> **UI Navigation:** go to (4)
> **CLI Commands:** find (2), make (1)
> **Versions:** version 4 (1), version 6 (1), 72.163.4 (1)
> **URLs:** [cisco.com](https://cisco.com) (2)
> **Ports:** port 53 (1)

#### Caching and forgery
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=0)** - [Speaker] Networks rely on DNS to provide accurate information on host-name-to-IP-address resolution.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=8)** In this segment, we'll review how cache poisoning works along with a discussion on a SAD DNS attack.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=17)** DNS resolves a host name to an IP address and is used by nearly all devices and services on a network.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=26)** For example, if I want to go to a webpage I rely on DNS to give me the correct address or else I might be redirected to a bogus site.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=38)** When setting up a DNS server correct configuration is essential as a misconfiguration can lead to devastating problems.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=48)** Along with misconfiguration issues, DNS can be compromised by poisoning the cache.
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=56)** Let's talk about the concept of cache.
>
> **[0:59](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=59)** Cache is a temporary holding area for data.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=62)** It's designed so that devices can get a faster response.
>
> **[1:07](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=67)** Websites use caching so that we can get a quicker response when requesting a webpage.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=74)** On our own system, we have a cache of DNS records.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=79)** Let's take a look.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=80)** I'm at the Windows command line interface, and then once in the command line, I'll type ipconfig displaydns, and then press enter.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=91)** This will display the DNS records in my DNS cache.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=96)** There are a number of records.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=98)** The entries are going to list things such as the record name, record type, but then there's also another entry, and that's right here, and that's called time to live.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=110)** Now, a time to live value in a DNS record isn't the same as it is in an IP header.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=117)** In an IP header, the time to live value is how many hops it can take before it times out.
>
> **[2:03](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=123)** However, in a DNS record, the time to live is how many seconds it can live in cache before it goes away.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=132)** Now, this is really system dependent.
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=134)** In buying the maximum is seven days, in a Microsoft server, it's 24 hours, but the time to live value for DNS is generally specified by the domain name owner.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=147)** So now let's talk about cache poisoning.
>
> **[2:31](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=151)** Cache poisoning inserts bogus information into a DNS servers cache.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=157)** Poisoning is achieved by replying to a DNS request and sending a spoofed IP address.
>
> **[2:45](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=165)** Once the reply is received, the result is placed in the cache until the time to live value is expired.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=173)** Now, once the cash is poisoned the effects will depend on where it was poisoned.
>
> **[2:59](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=179)** In an organization, all local users will be affected.
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=183)** However, an ISP cache poisoning will have widespread effects.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=189)** One type of DNS cache poisoning is the SAD DNS attack, or side-channel attacked DNS.
>
> **[3:18](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=198)** This attack exploits a vulnerability in the way DNS resolvers handle requests.
>
> **[3:25](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=205)** In this attack, the attacker will send a large number of carefully crafted DNS queries to a target DNS server.
>
> **[3:34](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=214)** The queries are designed to trigger a side-channel vulnerability in the server's hardware.
>
> **[3:40](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=220)** Allowing the attacker to infer, or guess, the random transaction ID used in the DNS query process.
>
> **[3:49](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=229)** Once the attacker has successfully inferred the transaction ID, they can launch a DNS cache poisoning attack by sending forged responses to the DNS resolver directing it to cache the attacker's IP address as the authoritative source for a particular domain name.
>
> **[4:10](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=250)** The cache poisoning will then allow the attacker to intercept and modify network traffic, steal sensitive information, or redirect users to malicious websites.
>
> **[4:23](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=263)** To defend against cache poisoning attacks there are a few best practices.
>
> **[4:29](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=269)** DNS resolvers should use random transaction IDs that are not susceptible to inference.
>
> **[4:37](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=277)** Additionally used, DNS security extensions, which can help ensure the authenticity of DNS responses.
>
> **[4:45](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=285)** Network administrators should also regularly monitor their DNS traffic for any suspicious activity, such as a sudden increase in DNS queries or responses from unexpected IP addresses.
>
> **[5:01](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=301)** Now let's test your knowledge.
>
> **[5:04](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=304)** Networks rely on DNS to provide accurate information on host-name-to-IP-address resolution.
>
> **[5:11](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=311)** Review cache poisoning techniques along with how a SAD DNS attack works.
>
> **[5:18](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=318)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** dns (30), sad (3), isp (1)
> **Code Keywords:** let (4), interface (1), type, (1)
> **Analogies:** such as (2), for example (1)
> **Tools:** command line (2)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [speaker] (1)

#### Poisoning DNS
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/poisoning-dns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/poisoning-dns?u=76281980&t=0)** - [Instructor] DNS converts a host name to an IP address.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/poisoning-dns?u=76281980&t=4)** In this video we'll outline how a malicious actor can gain control of a DNS server and poison the records, which can then redirect traffic to a bogus site with the goal of possibly collecting sensitive information.
>
> **[0:20](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/poisoning-dns?u=76281980&t=20)** Either on the internet or within the LAN, resources are identified by a unique domain name.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/poisoning-dns?u=76281980&t=28)** In order to reach the resources, a resolution is made from the domain name to the IP address.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/poisoning-dns?u=76281980&t=36)** On a network, resources include web servers for accessing websites, mail servers for delivering email messages, or application servers for accessing software systems and databases remotely.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/poisoning-dns?u=76281980&t=52)** When requesting information from DNS, there are two types of servers, an authoritative server or a non-authoritative server.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/poisoning-dns?u=76281980&t=63)** Let's compare the two.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/poisoning-dns?u=76281980&t=65)** An authoritative server contains a master set of all the data that publishes DNS data and is updated whenever there is a change in the data.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/poisoning-dns?u=76281980&t=76)** A non-authoritative server is a cache server that retrieves DNS data and contains copies of the normal back-and-forth user queries.
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/poisoning-dns?u=76281980&t=88)** Although a hacker can poison the cache to launch an attack on DNS, a more effective way to compromise DNS is by changing the DNS server records on the authoritative servers.
>
> **[1:42](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/poisoning-dns?u=76281980&t=102)** The DNS server may run within the organization or by a third party, such as the domain name registrar on behalf of the domain name owner.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/poisoning-dns?u=76281980&t=112)** Either way, an administrator must log in and update the records periodically.
>
> **[1:59](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/poisoning-dns?u=76281980&t=119)** A hacker will need to gain access.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/poisoning-dns?u=76281980&t=122)** Gaining access is achieved by exploiting an unpatched vulnerability in the server's operating system, or obtain login credentials of the DNS server by a phishing or social engineering attack.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/poisoning-dns?u=76281980&t=137)** Then once in, the hacker can modify the DNS records so that traffic is redirected to a bogus site.
>
> **[2:25](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/poisoning-dns?u=76281980&t=145)** The site looks exactly like the original and most likely has been cloned.
>
> **[2:32](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/poisoning-dns?u=76281980&t=152)** The malicious actor does this with the goal of possibly collecting username and password information or other credentials.
>
> **[2:41](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/poisoning-dns?u=76281980&t=161)** Now, let's test your knowledge.
>
> **[2:44](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/poisoning-dns?u=76281980&t=164)** Although a hacker can poison the cache to launch an attack on DNS, a more effective way to compromise DNS is by changing the DNS server records on the authoritative servers.
>
> **[2:56](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/poisoning-dns?u=76281980&t=176)** Outline how a malicious actor can gain control of a DNS server and poison the records.
>
> **[3:04](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/poisoning-dns?u=76281980&t=184)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** dns (15), lan (1)
> **Code Keywords:** let (2)
> **Definitions:** is a  (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Guarding against DNS attacks
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-dns-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-dns-attacks?u=76281980&t=0)** - [Instructor] DNS is an important protocol, however, can suffer from an attack.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-dns-attacks?u=76281980&t=5)** In this segment, we'll cover techniques to protect DNS and the resolvers.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-dns-attacks?u=76281980&t=11)** One first line of defense to protect your servers is to keep your systems patched and updated.
>
> **[0:19](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-dns-attacks?u=76281980&t=19)** You'll also want to disable any unnecessary services on the machine.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-dns-attacks?u=76281980&t=25)** Another method that can help protect DNS servers is to enable cache locking, which is a feature on a Windows server that allows administrators to control whether or not the DNS cache can be overwritten.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-dns-attacks?u=76281980&t=41)** Now on a network, authoritative service publish DNS data.
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-dns-attacks?u=76281980&t=47)** A non-authoritative or caching DNS server will retrieve DNS data.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-dns-attacks?u=76281980&t=54)** To defend both of them, the non-authoritative and authoritative server should each have a separate IP address.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-dns-attacks?u=76281980&t=63)** If you use a domain name registrar, which is a company that manages domain names, there are a few things that you can do to ensure more rigid control before any changes are made to the DNS settings.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-dns-attacks?u=76281980&t=79)** One is to use two-factor authentication.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-dns-attacks?u=76281980&t=82)** That way if the password is compromised, there's still another authentication factor, such as a one-time password being delivered to your mobile phone.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-dns-attacks?u=76281980&t=92)** In addition, you should implement some type of verification, such as a security word.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-dns-attacks?u=76281980&t=99)** You should also consider DNS security extensions, which add robust security to the domain name system as the extensions provide authentication and data integrity to protect against attacks such as DNS cache poisoning.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-dns-attacks?u=76281980&t=117)** Finally, let's talk about protecting the DNS resolver, which is a local server that manages DNS requests for the clients on your network.
>
> **[2:09](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-dns-attacks?u=76281980&t=129)** If you manage your own resolver, restrict access to only users on your network.
>
> **[2:17](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-dns-attacks?u=76281980&t=137)** The DNS resolver should not be open to external users as an open resolver can lead to cache poisoning along with a DNS amplification attack.
>
> **[2:30](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-dns-attacks?u=76281980&t=150)** You should periodically check for open resolvers in your organization.
>
> **[2:35](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-dns-attacks?u=76281980&t=155)** You could go to this website.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-dns-attacks?u=76281980&t=157)** Once there, simply click on this link Proceed.
>
> **[2:42](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-dns-attacks?u=76281980&t=162)** That will check to see if you have any open resolvers.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-dns-attacks?u=76281980&t=167)** If there is an open resolver, you'll want to take steps to mitigate this threat.
>
> **[2:53](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-dns-attacks?u=76281980&t=173)** Now let's test your knowledge.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-dns-attacks?u=76281980&t=175)** It's important to defend against DNS attacks.
>
> **[2:59](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-dns-attacks?u=76281980&t=179)** List techniques to protect DNS and the resolvers.
>
> **[3:04](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-dns-attacks?u=76281980&t=184)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** dns (16)
> **Definitions:** is a  (3), is an  (2)
> **Code Keywords:** let (2), finally, (1)
> **Analogies:** such as (3)
> **UI Navigation:** go to (1), click on (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Investigate a DNS header
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-investigate-a-dns-header?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-investigate-a-dns-header?u=76281980&t=0)** (intriguing music)
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-investigate-a-dns-header?u=76281980&t=5)** - [Instructor] Let's do a challenge.
>
> **[0:07](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-investigate-a-dns-header?u=76281980&t=7)** In this challenge, you'll examine a DNS header.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-investigate-a-dns-header?u=76281980&t=11)** First you'll open DNS.pcap next generation in Wire Shark.
>
> **[0:17](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-investigate-a-dns-header?u=76281980&t=17)** You can find the file in the exercise folder.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-investigate-a-dns-header?u=76281980&t=21)** Go to frame one and expand the DNS header.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-investigate-a-dns-header?u=76281980&t=25)** Answer the following.
>
> **[0:27](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-investigate-a-dns-header?u=76281980&t=27)** What is the transaction ID?
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-investigate-a-dns-header?u=76281980&t=30)** Expand the flags and tell me, is recursion requested and is this a query or a response?
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-investigate-a-dns-header?u=76281980&t=39)** Then go to frame two and expand the DNS header and tell me what is the transaction ID?
>
> **[0:47](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-investigate-a-dns-header?u=76281980&t=47)** Then expand the flags and is recursion available and is this a query or response?
>
> **[0:55](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-investigate-a-dns-header?u=76281980&t=55)** Then take a look at the answer and what is the time-to-live value?
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-investigate-a-dns-header?u=76281980&t=60)** So pause the video and complete the challenge and then come back to see what my responses were.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-investigate-a-dns-header?u=76281980&t=68)** This challenge should take you about 10 minutes.
>
> **[1:11](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-investigate-a-dns-header?u=76281980&t=71)** Good luck.

> [!info]- Semantic Content
>
> **Env Vars:** dns (4)
> **UI Navigation:** go to (2)
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (intriguing music) (1)

#### Solution: Investigate a DNS header
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=0)** - [Instructor] Now, let's check our work.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=8)** First, we were to go to frame one and expand the DNS header.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=12)** So we'll click here on frame one, and then I'm going to pull up the panel, and then we'll expand the DNS header.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=21)** The question is, what is the transaction ID?
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=25)** And here we see the transaction ID is 699a.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=29)** Now, that's in hexadecimal, which you can see that it starts with an X.
>
> **[0:34](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=34)** Now, we were to expand the flags.
>
> **[0:36](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=36)** And I'll just drop down the carrot right here where we can see the flags.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=41)** The question is, is recursion requested?
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=44)** And here we see, recursion desired, do query recursively.
>
> **[0:49](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=49)** So yes, it is requested.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=51)** And then the question is, is this a query or a response?
>
> **[0:56](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=56)** And here we see that the message is a query.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=60)** Now, I'll pull this up and go to frame two.
>
> **[1:03](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=63)** I'll pull the flags up so we can see the DNS header.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=68)** And we see that the transaction ID is again hexadecimal 699a.
>
> **[1:14](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=74)** So the two belong together.
>
> **[1:16](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=76)** Now, we'll expand the flags and pull that up.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=80)** Now, this is from the server.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=82)** So there's a little bit more information.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=84)** Now, the question is, is recursion available?
>
> **[1:28](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=88)** Now, we see that recursion is available, the server can do recursive queries.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=95)** And then the question is, is this a request or response?
>
> **[1:40](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=100)** We see that the message is a response.
>
> **[1:44](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=104)** Now, I'll pull this up and we'll look at the response.
>
> **[1:46](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=106)** Now, we'll go down to answers and we'll pull this up.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=110)** And here we see [google.com](https://google.com), type A, which is an IPv4 address.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=117)** And here, we see the time to live.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=120)** The time to live is 179 seconds or two minutes and 59 seconds.
>
> **[2:05](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=125)** And remember, the time to live value in a DNS response means how long it can live in my cache.
>
> **[2:13](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=133)** So I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Env Vars:** dns (4)
> **Definitions:** is a  (2), is an  (1)
> **UI Navigation:** go to (2)
> **Code Keywords:** let (1)
> **URLs:** [google.com](https://google.com) (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Sniffing Tools and Techniques

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Capturing images
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=0)** - [Instructor] We know that we can sniff the network to gather usernames and passwords, but we can also scoop up images.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=8)** In this segment, we'll see how we can capture and export images using Wireshark.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=15)** When sniffing traffic, there are a few apps that can gather and extract images.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=21)** I have a few examples to share with you.
>
> **[0:25](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=25)** One is NetworkMiner, which is an open source network forensic tool that can extract many different types of artifacts, such as files, images and emails.
>
> **[0:38](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=38)** Another tool is Driftnet.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=40)** Driftnet can sniff network traffic and is able to extract images from a TCP data stream.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=48)** Wireshark is also able to extract images.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=52)** Let's take a look.
>
> **[0:54](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=54)** I'm in Wireshark and I'm going to launch a capture and then once I start, I'm going to go to a page.
>
> **[1:02](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=62)** Let's begin the capture.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=66)** All right, I'm here at this site Roflcats.
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=69)** Now I chose this site because it's one of the few out there that's not currently encrypted so we'll be able to see the images pretty easily.
>
> **[1:20](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=80)** So I've stopped the capture and so that you could follow along.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=84)** I created a file, which is found in the exercise folder for chapter six.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=90)** Now this is just the data stream for Roflcats.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=94)** Within this, we're going to see a huge number of images.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=99)** So within the capture, there is a large number of packets but again, what we're looking for is that http stream.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=108)** To extract those images, it's pretty easy.
>
> **[1:50](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=110)** Go to file, export objects, http.
>
> **[1:56](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=116)** Now, we'll take all of those in.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=118)** For example, if you were doing a forensic exercise this might be part of that exercise.
>
> **[2:04](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=124)** You're going to sift through images and see if you can figure out anything and piece together an event.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=131)** But for this exercise, we're going to see we have a number of different images, and then we'll say Save All.
>
> **[2:19](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=139)** And when you do that, you can just create a folder, select that folder and save it in that folder which I have already done and I'll close that.
>
> **[2:30](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=150)** Now, once you've saved all of the images, you want to go in and pick through that.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=156)** Now I've selected one of the images, which I'll show you is Image 2512.
>
> **[2:42](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=162)** And when you select the image, you can right click and say open with.
>
> **[2:46](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=166)** And I just simply opened with my browser, which brought up this image.
>
> **[2:54](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=174)** Now there are many more which you can investigate, but you can see how easy it is to extract images using Wireshark.
>
> **[3:03](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=183)** So now let's test your knowledge.
>
> **[3:06](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=186)** We sniff the network to gather usernames and passwords but we can also scoop up images.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=193)** Discuss how we can capture and export images using Wireshark.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=199)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (1)
> **UI Navigation:** go to (2), select the (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** such as (1), for example (1)
> **Env Vars:** tcp (1)
> **Speakers:** - [instructor] (1)

#### Examining HTTP headers and URLs
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=0)** - [Instructor] Hypertext Transfer Protocol is an application-layer protocol for browsing the web.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=6)** In this segment we'll discover how the headers can tell us a great deal of information about a webpage transaction.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=15)** HTTP has been in use on the web since the early 1990s.
>
> **[0:21](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=21)** It's a client-server model that uses TCP Port 80 but other ports could be used as well.
>
> **[0:29](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=29)** The HTTP headers can tell us the types of servers and browsers that are used during a webpage transaction.
>
> **[0:37](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=37)** This information can then be used to launch an attack.
>
> **[0:42](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=42)** In a normal transaction, the client will send an HTTP request to the server which holds information about the request and about the client capabilities and that would include possibly the language it might accept and the type of connection.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=60)** The server response message would include a status code line and also information about the server capabilities.
>
> **[1:09](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=69)** Now there are a number of different HTTP status codes.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=73)** Now some common responses include the following.
>
> **[1:17](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=77)** Most likely we'll see success, and that means that the request test succeeded and the objects will appear later in the message.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=87)** Redirection means further action must be taken in order to complete the request.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=94)** We could see client error, not found or a server error, which means the server failed to fulfill an apparently valid request, but most likely we're hoping for a 200 success status code.
>
> **[1:54](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=114)** Now we can examine the headers in a couple of different ways.
>
> **[1:58](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=118)** I've launched Wireshark and I'm going to be capturing traffic as I go to this website, [example.com](https://example.com).
>
> **[2:06](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=126)** Now this site is used for testing such as what we're doing so we'll go to [example.com](https://example.com).
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=132)** Now I've captured the result and if you'd like to follow along I have the file in the exercise folder for chapter six.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=141)** Now, once you open it, we're going to select frame seven and then follow the TCP stream.
>
> **[2:27](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=147)** So we'll right click, follow TCP stream, and here we can see the headers.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=156)** And when we look at this, here I see the request from the client in red up on the top and then the response from the server in blue down below.
>
> **[2:47](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=167)** Now the first line that you see right here, it's a GET, says HTTP/1.1 and this is the most common version of HTTP.
>
> **[2:58](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=178)** And we also see some other information, for example, the user agent, which is my browser in this case.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=188)** Now down below is where we see the response from the server such as the parameters of the conversation.
>
> **[3:15](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=195)** Now we see that we can view the headers in Wireshark, but there are other apps that we can use.
>
> **[3:21](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=201)** Let me take you to another example at [websniffer.net](https://websniffer.net).
>
> **[3:26](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=206)** So I'm at websniffer, and I can do exactly the same thing.
>
> **[3:30](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=210)** And here I put [example.com](https://example.com) and I said submit.
>
> **[3:36](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=216)** And here are the results.
>
> **[3:39](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=219)** So if I scroll down here we can see the request header and basically the same information as we saw in Wireshark, but we also can see some other information in a different format.
>
> **[3:52](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=232)** But if I scroll down, there's a nice little tool that builds in.
>
> **[3:57](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=237)** It gives us this source code.
>
> **[3:58](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=238)** Now this is powerful because here we can take a look at information on that page and we could see possibly some webpages that are embedded within it that we could research a little further.
>
> **[4:11](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=251)** And then sometimes there's usernames and passwords and also comments.
>
> **[4:16](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=256)** So HTTP headers can give us a lot of information and can be used as a precursor to an attack.
>
> **[4:25](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=265)** So now let's test your knowledge.
>
> **[4:28](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=268)** HTTP is an application-layer protocol for browsing the web.
>
> **[4:33](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=273)** Explain how HTTP headers can tell us the types of servers and browsers that are used during a webpage transaction.
>
> **[4:43](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=283)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** http (9), tcp (3)
> **Code Keywords:** let (2), this, (1), case. (1)
> **URLs:** [example.com](https://example.com) (3), [websniffer.net](https://websniffer.net) (1)
> **UI Navigation:** go to (2), scroll down (2)
> **Definitions:** is an  (2), means that (1)
> **Analogies:** such as (2), for example (1)
> **Cross-References:** later in (1), as we saw (1)
> **Ports:** port 80 (1)

#### Scooping data with TShark
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/scooping-data-with-tshark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/scooping-data-with-tshark?u=76281980&t=0)** - [Instructor] Most network administrators are familiar with Wireshark.
>
> **[0:04](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/scooping-data-with-tshark?u=76281980&t=4)** It has a rich, graphical interface with many built-in tools.
>
> **[0:09](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/scooping-data-with-tshark?u=76281980&t=9)** However, you really should try TShark.
>
> **[0:12](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/scooping-data-with-tshark?u=76281980&t=12)** It's a command-line tool and it's very lightweight.
>
> **[0:16](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/scooping-data-with-tshark?u=76281980&t=16)** In this segment, we'll run a capture using TShark and then bring it into Wireshark for further analysis.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/scooping-data-with-tshark?u=76281980&t=24)** For this demo, you'll go into the command-line interface and run as administrator.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/scooping-data-with-tshark?u=76281980&t=30)** So first I need to get to the directory where Wireshark is so I'll change directories to program files.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/scooping-data-with-tshark?u=76281980&t=39)** And because there's more than eight characters, I'll need to enclose that in quotes and press enter, and now I'll go to Wireshark.
>
> **[0:50](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/scooping-data-with-tshark?u=76281980&t=50)** So now I'll build my command.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/scooping-data-with-tshark?u=76281980&t=52)** And it's important to know what interface you need so if you have multiple interfaces, use ipconfig.
>
> **[1:01](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/scooping-data-with-tshark?u=76281980&t=61)** So I built my command and what you see is, I tell it to use interface wi-fi, with a duration of 10 seconds and to write to a file called tshark.pcap.
>
> **[1:12](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/scooping-data-with-tshark?u=76281980&t=72)** And you should put the extension, and we'll run that.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/scooping-data-with-tshark?u=76281980&t=78)** Okay, now it's complete so I can get the file.
>
> **[1:23](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/scooping-data-with-tshark?u=76281980&t=83)** So there it is, tshark.pcap, and I'll open it in Wireshark.
>
> **[1:29](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/scooping-data-with-tshark?u=76281980&t=89)** So there it is.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/scooping-data-with-tshark?u=76281980&t=91)** Now you can see you have some choices.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/scooping-data-with-tshark?u=76281980&t=94)** For a lightweight application, use TShark and then bring it into Wireshark for a rich graphical experience.
>
> **[1:43](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/scooping-data-with-tshark?u=76281980&t=103)** Now let's test your knowledge.
>
> **[1:45](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/scooping-data-with-tshark?u=76281980&t=105)** TShark is Wireshark's lightweight command-line partner.
>
> **[1:49](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/scooping-data-with-tshark?u=76281980&t=109)** Explain how to run TShark, and then bring the file into Wireshark for further analysis.
>
> **[1:57](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/scooping-data-with-tshark?u=76281980&t=117)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4), let (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Sniffing tools for mobile devices
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-tools-for-mobile-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-tools-for-mobile-devices?u=76281980&t=0)** - [Instructor] There are times when you might need to sniff network traffic on something other than your laptop.
>
> **[0:06](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-tools-for-mobile-devices?u=76281980&t=6)** In this segment, we'll learn some of the tools available to monitor and capture packets on a mobile device.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-tools-for-mobile-devices?u=76281980&t=14)** Wire Shark is a powerful open source packet analyzer that you can use on your laptop to visualize all the traffic on the network.
>
> **[0:24](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-tools-for-mobile-devices?u=76281980&t=24)** However, there are also packet sniffing tools for mobile devices.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-tools-for-mobile-devices?u=76281980&t=30)** Now, keep in mind that some of the apps require you to have root access to capture packets but there are some that won't require that step.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-tools-for-mobile-devices?u=76281980&t=40)** So let's take a look at some of the tools that can work on a mobile device.
>
> **[0:46](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-tools-for-mobile-devices?u=76281980&t=46)** I'm here at this website and we can take a look at tPacketCapture.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-tools-for-mobile-devices?u=76281980&t=52)** Now, tPacketCapture is an Android app that captures and analyzes network traffic on a mobile device and I'll scroll down where you can see some of the graphics and some of the instructions.
>
> **[1:06](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-tools-for-mobile-devices?u=76281980&t=66)** It has similar features to Wire Shark and it works by using a local VPN, so you don't have to route the phone in order to capture and record traffic.
>
> **[1:18](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-tools-for-mobile-devices?u=76281980&t=78)** Now, once you're done capturing the traffic you can transfer the PCAP file to Wire Shark for a more detailed analysis.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-tools-for-mobile-devices?u=76281980&t=87)** Perfecto is a cloud-based testing platform that provides a suite of testing tools for web and mobile applications.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-tools-for-mobile-devices?u=76281980&t=95)** It offers a wide range of features and capabilities designed to help developers test their applications across a wide range of devices, browsers, and platforms.
>
> **[1:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-tools-for-mobile-devices?u=76281980&t=108)** And the last one we'll look at is wifi Inspect.
>
> **[1:52](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-tools-for-mobile-devices?u=76281980&t=112)** Now this is a tool that can be installed on an Android device, and here we can see some images.
>
> **[2:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-tools-for-mobile-devices?u=76281980&t=120)** Now this app not only captures traffic but it also has many built-in tools such as host discovery along with vulnerability analysis and port scanning.
>
> **[2:12](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-tools-for-mobile-devices?u=76281980&t=132)** However, you will need route access to take advantage of all the features.
>
> **[2:18](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-tools-for-mobile-devices?u=76281980&t=138)** Now, let's test your knowledge.
>
> **[2:20](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-tools-for-mobile-devices?u=76281980&t=140)** There are times when you might need to sniff network traffic on something other than your laptop.
>
> **[2:26](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-tools-for-mobile-devices?u=76281980&t=146)** Discuss some of the tools available to monitor traffic and capture packets on a mobile device.
>
> **[2:34](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-tools-for-mobile-devices?u=76281980&t=154)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** require (2), let (2)
> **Definitions:** is a  (3), is an  (1)
> **Code Identifiers:** tpacketcapture (2)
> **Env Vars:** vpn (1), pcap (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Investigating Omnipeek
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=0)** - [Narrator] When it comes to packet sniffing tools, you have a lot of choices today.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=5)** In this segment, we'll learn of the many features within Omnipeek, another packet capture tool that you can use to investigate the network.
>
> **[0:15](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=15)** I'm here at this webpage, LiveAction.
>
> **[0:18](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=18)** Now let's take a look at Omnipeek, which is a commercial packet sniffer and protocol analysis tool.
>
> **[0:26](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=26)** It's available on a Windows platform and has many features.
>
> **[0:30](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=30)** Omnipeek is like Wireshark in that it's a real-time protocol analyzer and could decode over a thousand protocols.
>
> **[0:39](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=39)** Once in, you can scroll down and we can see some of the features.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=44)** It has a nice graphical interface.
>
> **[0:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=48)** You can do WiFi troubleshooting, monitor distributed networks remotely, conduct voice and video monitoring and troubleshooting, and a lot more that deals with troubleshooting your network.
>
> **[1:05](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=65)** Now, you can do a five day trial, which is what I did.
>
> **[1:08](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=68)** Go to free trials and select Omnipeek Network Protocol Analyzer and you have to fill out a little form and then you can begin your trial.
>
> **[1:19](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=79)** I got the trial, I downloaded it and installed it, and now we can take a look.
>
> **[1:24](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=84)** I'm at the start page, where it shows you some of the sample files that you can take a look at.
>
> **[1:30](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=90)** Now I selected WPA and it opened it in a new tab.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=95)** Now, once you're here, similar to Wireshark and many other applications, there are menu choices that you can use to manipulate and move around in the interface.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=107)** Now, in this, I wanted to show you over on the left hand side that there are a number of different dashboards and you can see the network, some of the applications, the packets themselves... But this one I thought was interesting, especially for this packet capture, notes.
>
> **[2:07](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=127)** Once I select notes here, we can see the pre-shared key, "wildpackets".
>
> **[2:14](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=134)** All right, let's take a look at another one.
>
> **[2:16](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=136)** We'll go to the start page, and this one is packet examples.
>
> **[2:21](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=141)** This is a sample file with a variety of wired traffic.
>
> **[2:25](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=145)** So we'll go to that tab, and again, once in the dashboards, we can select a number of different views: applications, packets.
>
> **[2:36](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=156)** We can see client servers, flows... But within this capture there is a call, so go to voice and video and select calls and right click, and we can say, play audio.
>
> **[2:55](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=175)** And it brings up the audio and you can listen to it to test for quality or just to see that there is voice going across your network that's unencrypted.
>
> **[3:05](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=185)** Now, down below, something else that I thought was really interesting is peer map.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=189)** We'll select that.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=190)** That's a visual.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=192)** Now, of course, that is a way of visualizing what's happening between the end points.
>
> **[3:17](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=197)** I like this because it's like Nmap.
>
> **[3:21](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=201)** This peer map is a feature within Omnipeek that provides a visual representation of the network topology, and this also can include relationships between devices, switches, and routers in the network.
>
> **[3:35](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=215)** Now here we see the communications, or the conversations that are taking place, and over here we see the end points.
>
> **[3:44](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=224)** So as you can see, this is yet another packet capture tool that you can use to investigate the network.
>
> **[3:53](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=233)** Now let's test your knowledge.
>
> **[3:57](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=237)** Omnipeek is a commercial packet sniffer and protocol analysis tool.
>
> **[4:02](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=242)** Outline a few of the many features within Omnipeek.
>
> **[4:06](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=246)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), interface (2), this, (1)
> **Definitions:** is a  (6)
> **UI Navigation:** go to (4), scroll down (1)
> **Analogies:** similar to (1), it's like (1)
> **Env Vars:** wpa (1)
> **Speakers:** - [narrator] (1)

#### Guarding against sniffing
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=0)** - [Instructor] Sniffing network traffic can be a precursor to an attack.
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=5)** In this segment, we'll discuss a few ways to defend your network against sniffing.
>
> **[0:11](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=11)** Sniffing the network can give the network administrator a great deal of information on the status of the network, such as network statistics and protocols that are in use.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=23)** However, unauthorized sniffing may be considered illegal unless it's part of your job or you're monitoring your own network.
>
> **[0:33](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=33)** But knowing that it might be illegal generally doesn't stop a hacker from sniffing the network.
>
> **[0:40](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=40)** So let's talk about a few ways to protect our networks.
>
> **[0:44](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=44)** One way is by using anti-sniffer software which can monitor a network to detect if a node is in promiscuous mode.
>
> **[0:53](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=53)** Now, there are different methods used to identify sniffing.
>
> **[0:58](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=58)** One is the ping method.
>
> **[1:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=60)** Now, when sniffing traffic, the resources, such as RAM and processing speed on a laptop, can be quickly consumed and lead to increased latency when responding to a request.
>
> **[1:13](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=73)** This method sends a series of ping requests out onto the network and monitors the response time from all hosts.
>
> **[1:22](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=82)** Hosts that have a higher latency time could be in promiscuous mode.
>
> **[1:27](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=87)** Another method is the DNS method.
>
> **[1:31](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=91)** Now, when sniffing traffic, some sniffers do recursive DNS lookups.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=96)** This method monitors domain name system requests and responses on the network for unusual patterns or an increase in DNS traffic.
>
> **[1:47](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=107)** In addition, there are programs that help detect sniffing activity.
>
> **[1:53](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=113)** Now, some applications can be tuned to monitor for ARP spoofing, which might be an indication that someone is on the network sniffing.
>
> **[2:02](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=122)** Now, apps include Snort, which is an intrusion detection system that can be used to detect ARP spoofing.
>
> **[2:11](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=131)** arpwatch will monitor MAC address and IP address pairings in the ARP cache to see if there is any duplication.
>
> **[2:20](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=140)** Another program is RITA, or Real Intelligence Threat Analytics, which monitors network traffic to detect potential malicious activity, such as malware, phishing attacks, and advanced persistent threats.
>
> **[2:37](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=157)** Now, there are some best practices to defend against sniffing.
>
> **[2:42](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=162)** You'll want to disable any open ports in common areas to discourage hackers from tapping in and sniffing network traffic.
>
> **[2:51](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=171)** Use encryption for most communications, such as email, webpage transactions, or device configuration.
>
> **[3:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=180)** Keep in mind, however, encryption will not protect broadcast traffic on the network, such as DHCP, CDP, or ARP.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=190)** You should use other methods to protect these protocols as they can provide information on the devices in use on your network.
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=199)** The bottom line is it's not easy to detect sniffers.
>
> **[3:24](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=204)** Therefore, you should use prevention to defend against sniffing attacks.
>
> **[3:30](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=210)** Now let's test your knowledge.
>
> **[3:32](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=212)** Sniffing can be a precursor to an attack.
>
> **[3:36](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=216)** Outline methods that you can use to defend against sniffing.
>
> **[3:41](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=221)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** arp (4), dns (3), ram (1), mac (1), rita (1)
> **Analogies:** such as (5)
> **Code Keywords:** let (2)
> **CLI Commands:** node (1)
> **Definitions:** is an  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/next-steps?u=76281980&t=0)** - [Lisa] Thank you for watching.
>
> **[0:02](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/next-steps?u=76281980&t=2)** In this course, I covered the OSI model along with passive and active attacks.
>
> **[0:08](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/next-steps?u=76281980&t=8)** I reviewed attacks against protocols, such as DHCP, ARP, and DNS.
>
> **[0:14](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/next-steps?u=76281980&t=14)** We then investigated various sniffing tools and techniques that include Wireshark, CloudShark, and Omnipeek.
>
> **[0:23](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/next-steps?u=76281980&t=23)** And then we learned ways to defend against sniffing attacks.
>
> **[0:28](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/next-steps?u=76281980&t=28)** If you're interested in learning more about packet analysis, please check out my Wireshark series, Improve Your Wireshark Skills, and any course in the Ethical Hacking series will be well worth your time.
>
> **[0:41](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/next-steps?u=76281980&t=41)** You might also want to check out the CCNA Network Security series, and also see what my colleague Malcolm Shore has for you on his homepage.
>
> **[0:51](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/next-steps?u=76281980&t=51)** Keep learning.
>
> **[0:52](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/next-steps?u=76281980&t=52)** I hope to see you again soon.

> [!info]- Semantic Content
>
> **Env Vars:** osi (1), dhcp (1), arp (1), dns (1), ccna (1)
> **Analogies:** such as (1)
> **Speakers:** - [lisa] (1)


## Instructor

- [[Lisa Bock]]

## Resources

- Exercise files available

## Skills Covered

- Ethical Hacking
- Network Traffic Analysis

## Path Context

### In [[Become an Ethical Hacker]]
← [[Ethical Hacking- The Complete Malware Analysis Process]] | **8 of 19** | [[Ethical Hacking- Social Engineering]] →

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