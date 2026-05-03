---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: ethical-hacking-scanning-networks-20213513
url: "https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513"
duration_minutes: 135
duration: 2h 15m
level: Intermediate
updated: 12/15/2023
learners: 54600
skills:
  - Network Monitoring Tools
  - Ethical Hacking
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQGFV-f3EJ14fg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702507055898?e=2147483647&amp;v=beta&amp;t=YaHg5sNP2dyA9PLuM1A0dzLqPQjYaa0LxcUUdMsndfs"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Become an Ethical Hacker]]'
prev_courses:
  - '[[Ethical Hacking- Footprinting and Reconnaissance]]'
next_courses:
  - '[[Ethical Hacking- Enumeration]]'
path_nav: '[{"path":"Become an Ethical Hacker","position":3,"total":19,"prev":"Ethical Hacking- Footprinting and Reconnaissance","next":"Ethical Hacking- Enumeration"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/network-monitoring-tools
  - skill/ethical-hacking
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Ethical%20Hacking-%20Scanning%20Networks.md)

![Ethical Hacking: Scanning Networks](https://media.licdn.com/dms/image/v2/D4D0DAQGFV-f3EJ14fg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1702507055898?e=2147483647&amp;v=beta&amp;t=YaHg5sNP2dyA9PLuM1A0dzLqPQjYaa0LxcUUdMsndfs)

# Ethical Hacking: Scanning Networks

> After footprinting and reconnaissance, scanning is the second phase of information gathering that hackers use to size up a network. Network scans are a key tool in the arsenal of ethical hackers, who work to prevent attacks on an organization's infrastructure and data. This course investigates the scanning tools and techniques used to obtain information from a target system. Instructor Lisa Bock d

> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513) | 2h 15m | Intermediate | 55K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Scanning the LAN](#scanning-the-lan)
  - [Discovering resources](#discovering-resources)
  - [Hacking ethically](#hacking-ethically)
  - [Setting up your virtual network](#setting-up-your-virtual-network)
- [**1. Scanning Purpose and Methodology**](#1-scanning-purpose-and-methodology) (6 videos)
  - [Roadmapping a scan](#roadmapping-a-scan)
  - [Outlining the TCP flags](#outlining-the-tcp-flags)
  - [Leveraging the TCP three-way handshake](#leveraging-the-tcp-three-way-handshake)
  - [Summarizing scanning tools](#summarizing-scanning-tools)
  - [Discovering Nmap](#discovering-nmap)
  - [Using hping3](#using-hping3)
- [**2. Discovering Hosts**](#2-discovering-hosts) (5 videos)
  - [Locating network hosts](#locating-network-hosts)
  - [Comparing ping scans](#comparing-ping-scans)
  - [Sending SYN and ACK scans](#sending-syn-and-ack-scans)
  - [Challenge: Identify a scanning signature](#challenge-identify-a-scanning-signature)
  - [Solution: Identify a scanning signature](#solution-identify-a-scanning-signature)
- [**3. Identifying Open Services**](#3-identifying-open-services) (5 videos)
  - [Evaluating port scanning methods](#evaluating-port-scanning-methods)
  - [Scanning IPv6 networks](#scanning-ipv6-networks)
  - [Identifying listening hosts using SCTP](#identifying-listening-hosts-using-sctp)
  - [Using SSDP for discovery](#using-ssdp-for-discovery)
  - [Optimizing scans with Nmap Script Engine](#optimizing-scans-with-nmap-script-engine)
- [**4. Determining Operating Systems**](#4-determining-operating-systems) (5 videos)
  - [Fingerprinting the OS](#fingerprinting-the-os)
  - [Using Wireshark for OS discovery](#using-wireshark-for-os-discovery)
  - [Employing IPv6 fingerprinting](#employing-ipv6-fingerprinting)
  - [Harnessing the TTL value](#harnessing-the-ttl-value)
  - [Mapping the network using Nmap](#mapping-the-network-using-nmap)
- [**5. Moving through the Network**](#5-moving-through-the-network) (4 videos)
  - [Generating less noise](#generating-less-noise)
  - [Understanding the idle scan](#understanding-the-idle-scan)
  - [Firewalking the network](#firewalking-the-network)
  - [Implementing stealth scans](#implementing-stealth-scans)
- [**6. Avoiding Detection**](#6-avoiding-detection) (4 videos)
  - [Manipulating packets](#manipulating-packets)
  - [Spoofing and cloaking](#spoofing-and-cloaking)
  - [Employing proxies](#employing-proxies)
  - [Leveraging anonymizers](#leveraging-anonymizers)
- [**7. Counteracting Scanning**](#7-counteracting-scanning) (5 videos)
  - [Preventing scanning](#preventing-scanning)
  - [Detecting spoofing](#detecting-spoofing)
  - [Challenge: Draw a network diagram](#challenge-draw-a-network-diagram)
  - [Solution: Draw a network diagram](#solution-draw-a-network-diagram)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Scanning the LAN](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-the-lan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-the-lan?u=76281980&t=0)** - [Instructor] After a thorough footprinting exercise, the team is armed with more information on the target and is ready to move into the second phase of [[Ethical Hacking]], scanning the network. In this course, I'll explore scanning techniques and ways to obtain information from the target system, including using specially crafted packets, TCP flags, SYN scans, and ping sweeps. All described methods used to discover hosts, operating systems, and listening services on a network, and outline techniques to avoid detection. We'll finish with learning how to counteract network spoofing and scanning. By the end of this course, you'll understand the tools, techniques, and logic of scanning. Hello, my name is Lisa Bock and I'm a security ambassador. This course is part of the Ethical Hacking Series. Are you ready? Then let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (2)
> **Env Vars:** tcp (1), syn (1)
> **Speakers:** - [instructor] (1)

#### [Discovering resources](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-resources?u=76281980&t=0)** - [Instructor] This course is a basic to intermediate course intended for anyone with an interest in learning more about [[Ethical Hacking]]. This course is part of the Ethical Hacking series. I'll cover several topics, but I have provided a file for you so that you can follow along. Go to the Exercise File link on the Welcome screen, where you will find a Challenges and Links document. In the document, I have included the links to the resources that I reference throughout the course. Additionally, during each segment, I will identify a challenge using the following icon, along with a question from the video. Use the document to write out responses to challenges that I cover throughout the course. I am super excited to bring you this course, so sharpen your pencil, and let's start learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (2)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Hacking ethically](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/hacking-ethically?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/hacking-ethically?u=76281980&t=0)** - [Instructor] The goal of the [[Ethical Hacking]] series is to help system administrators understand how to better protect the assets they manage. I'll focus on the concepts of ethical hacking in order to explain why it's essential in any organization's overall security framework. The tests and procedures I explore should only be executed on your own system or a system that you are charged with protecting. If ownership and responsibility lie with another party, be sure to get clear written instructions with explicit permission to conduct ethical hacking activities. Do not investigate individuals, websites, servers, or conduct any illegal activities on any system you do not have permission to analyze.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (3)
> **Speakers:** - [instructor] (1)

#### [Setting up your virtual network](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/setting-up-your-virtual-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/setting-up-your-virtual-network?u=76281980&t=0)** - [Instructor] To demonstrate some of the tools used in [[Ethical Hacking]], I've set up a small network using pre-made images and [[Virtual Machines]]. As we see in this graphic, we have [[Kali Linux]] and [[Windows]] using the virtual switch, which is created automatically, all inside the VMware Player or VirtualBox environment. Let's take a look at where we can obtain these resources. To run your virtual machines, you can either use VMware or VirtualBox. For an evaluation copy of VMware Workstation Player, you'll go here. And here's where you'll go for a copy of VirtualBox. For the virtual machines, you can visit [[Microsoft]]'s Developer page for a 90 day version of the latest Windows operating system. And go to [kali.org](https://kali.org) for the latest version of Kali. And prebuilt virtual machines for Kali Linux are found here. And take note that these images have the default credentials, kali/kali. Once you set up your network, make sure you can ping all installed machines. Additionally, you may have to adjust your firewall settings, then you should be good to go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtual Machines]] (4), [[Kali Linux]] (2), [[Windows]] (2), [[Ethical Hacking]] (1), [[Microsoft]] (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **URLs:** [kali.org](https://kali.org) (1)
> **UI Navigation:** go to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 1. Scanning Purpose and Methodology

[↑ Back to Table of Contents](#table-of-contents)

#### [Roadmapping a scan](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/roadmapping-a-scan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/roadmapping-a-scan?u=76281980&t=0)** - [Instructor] The second phase of [[Ethical Hacking]] is scanning, which helps develop a profile of the target. In this segment, we'll learn how scanning helps discover responding hosts, check for listening services, determine the operating systems in use, and generate a map of the network. First, let's outline how structured ethical hacking works. Ethical hacking typically has five phases: reconnaissance, scanning, gaining access, maintaining access, and covering tracks. Scanning or port scanning uses a variety of tools and techniques to dissect network resources. Let's talk about how this works. After completing a reconnaissance exercise and gathering details, such as the IP address range and what data or services might be of value, the ethical hacker has more knowledge about the target. Armed with this information, the team has a better idea of how to get deeper into the system. The goal in this phase is to learn more about the network. We want to identify the type of devices that are in place. We'll also check for any defense methods that might exist, such as firewalls and [[Intrusion Detection]] systems. In addition, the team will check for listening services,
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/roadmapping-a-scan?u=76281980&t=98)** determine the operating systems, and monitor for evidence of data being sent in clear text. Prior to starting, the team will outline a plan that includes how and what network devices to scan. The process begins by attempting to connect with listening hosts on the network. We then check for open TCP and UDP ports on a system and continue by building a logical topology or layout of the network. Scanning techniques can vary, but there are some common scans, each having a different objective. Ping sweeps send a succession of probe packets to an IP range on a network with the goal of identifying which hosts are alive and responding. Port scanning identifies listening TCP and UDP ports on a system with the goal of identifying the services that are active on the target. Operating system fingerprinting determines the target's operating system based on response behavior. And network mapping identifies the logical topology and creates a map. Now let's test your knowledge. Discuss how scanning helps discover responding hosts, check for listening services, determine the operating systems in use,
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/roadmapping-a-scan?u=76281980&t=192)** and generate a map of the network. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (3), [[Intrusion Detection]] (1)
> **Env Vars:** tcp (2), udp (2)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### [Outlining the TCP flags](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=0)** - [Instructor] TCP is a connection-oriented protocol that uses flags that helps to tell the story of the data transaction. In this segment, we'll learn how TCP flags can be used when scanning to get a response, avoid detection, or determine the presence of a firewall. First, let's compare how the two predominant transport layer protocols, TCP and UDP, are used during scanning. UDP is a connectionless protocol based on speed. The UDP header only has four fields and no flags to manipulate. When using UDP, you'll never get a response from the host. Instead, a response from a UDP probe might be an ICMP type three, code three, port unreachable. Or if the network is blocking ICMP, no message will be returned. Because of the limited response we get when using UDP when scanning, we mostly focus on TCP. The reason is that TCP has many more opportunities to manipulate the header than UDP. TCP is a connection-oriented protocol that establishes a connection to the remote host via a three-way handshake. A TCP header contains 11 fields,
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=94)** which includes a one byte field that holds the flags. Let's talk about each of the flags and their function. Now, the first group of flags are not used during scanning, and those include reserved. Now, this is for future use and should be set to zero. Explicit congestion notification, congestion window reduced, and ECN Echo are used during congestion control. Urgent indicates that this packet should have priority, and this is rarely seen. Now the next grouping of flags are what you'll commonly use when scanning. The ACK flag acknowledges that the packets have been received. All packets after the initial SYN packet sent by the client should have this flag set. PSH informs TCP that data should be sent immediately. Many times PSH is used within. Reset is designed to allow a station to abort the TCP connection. Now, this can happen for a number of reasons, such as sensing an abnormal connection. The SYN flag will synchronize the sequence number. Only the first packet sent from each end should have this flag set,
>
> **[3:06](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=186)** and that would be the first two packets of the handshake. FIN means the process is complete, and there's no more data from the sender. Now, most scanners use the TCP flags. For example, [[Nmap]] can use the following techniques. A full connect scan completes the handshake and is the most reliable scan. Now this works with most systems, but it's also the most obvious. Open ports will respond with a SYN/ACK, whereas closed ports will respond with a reset. SYN stealth scan is a half open scan as the connection is never established. Now, this works with most systems as well and has this same responses as the full connect. A FIN scan can send a FIN packet to the target port. FIN packets can sneak through undetected. Now, closed ports should send back a reset. Now, a [[Windows]] machine will send resets regardless of the port state. So a Windows machine really isn't susceptible to this type of scan. With a NULL scan, null flags are set and closed ports should return a reset. An ACK scan sends ACKS. And if a reset is returned,
>
> **[4:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/outlining-the-tcp-flags?u=76281980&t=279)** this gives the attacker data on whether or not there's a firewall present. For example, an ICMP destination unreachable response will indicate that the port is most likely filtered. And a Christmas tree scan means that the packet is lit like a Christmas tree, and this one has the FIN, URG, and PSH flag set. Now let's test your knowledge. Outline how the TCP flags can be used when scanning the network to get a response, avoid detection, or determine if there is a firewall. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Nmap]] (1)
> **Env Vars:** tcp (11), udp (7), fin (5), syn (4), icmp (3)
> **Definitions:** is a  (5)
> **Analogies:** for example (2), such as (1)
> **Speakers:** - [instructor] (1)

#### [Leveraging the TCP three-way handshake](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=0)** - [Instructor] TCP is a connection-oriented process, and several network scans use part of the handshake and termination process to get responses from a host. In this segment, we'll step through a TCP handshake and termination, and identify the flags that are set during this process. First, let's talk about a normal TCP session. To begin, Host A will send a synchronization or SYN packet to Host B. The syn packet is used to synchronize sequence numbers. If Host B accepts, it responds with a synchronization acknowledgement. Host A then responds with an acknowledgement. Next, a socket on both ends is created, which is an IP address and a port, and the session begins, and both sides can then exchange data. Normally, everything goes well. However, periodically, when beginning a session, services will be refused. For example, no password was sent, so the connection is reset. No response might indicate a firewall, or you might receive an ICMP "destination unreachable" packet. The code might indicate that the network was unreachable or the host was unreachable,
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=95)** but most likely the target port is firewalled. At that point, the host may try again with another SYN packet. At the end of a conversation, generally, there's a proper termination with an exchange of FIN packets, and you'll see the following. You'll see an ACK and a FIN, an ACK and a FIN, or you might see this combination. But sometimes the connection will simply time out and close. Now I'd like to show you an example of a TCP handshake and FIN exchange between a client and a server. If you'd like to follow along, get the file "TCP_Start&End" found in the exercise folder, and open the file in [[Wireshark]]. We'll first look at the three-way handshake. Now the three-way handshake begins by going to frame 1. And here we see that the client at 10.0.0.148 initiates contact with the server at 178.255.83.1. Now in this case, I'm going to open the TCP header and I'll scroll down so we can take a look at the flags. And here we see that the Syn flag is set. Now we'll go to frame 2, and at this point, the server then responds to the client with a SYN, ACK.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-the-tcp-three-way-handshake?u=76281980&t=190)** Again, looking at the flags, we see the Acknowledgement flag is set along with the Syn flag. Then in frame 3, the client will return a final acknowledgement. And going down to the flags, we see that the Acknowledgement flag is set. Now keep in mind, no data is exchanged during this time, it's just a handshake. However, once the final acknowledgement is set, the two endpoints can begin to send data. Now, TCP starts with a three-way handshake. At the end, we'll have a tear down with an exchange of FIN packets. I'll go down to frame 7, and that's where the session terminates. Here we see in this case, it's sending a FIN and a ACK, so you see the Fin flag set along with the Acknowledgement flag set, and the same happens in frame 8. And then in frame 9 and 10, both sides send a final acknowledgement. At that point, the session will complete. Now let's test your knowledge, step through the TCP handshake and termination, and identify the flags that are set during each process. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (1)
> **Env Vars:** tcp (7), fin (6), ack (4), syn (3), icmp (1)
> **UI Navigation:** open the (2), scroll down (1), go to (1)
> **Versions:** 10.0.0 (1), 178.255.83 (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Summarizing scanning tools](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=0)** - [Instructor] Today, there are many tools available to identify devices, services, operating systems, and vulnerabilities on a network. In this segment, we'll discuss some general functions of scanners and outline a few apps used to audit the network. First, let's discuss the various functions found in scanners and what you might do when scanning the network. Typically, network scanning begins with host discovery, which identifies active devices on a network. This is done by sending probes to a range of IP addresses to see which hosts will respond. Some common methods for host discovery includes ICMP echo requests, or ping scans, TCP ACK or SYN packets, and ARP requests. After the team identifies the listening hosts, the next step is to run a port scan. This determines which port on a device are open, closed, or filtered. Methods include the SYN scan, full connect scan, and the ACK scan. Beyond identifying services on a host, the team often conducts scans to determine the operating system of the target. This is achieved using a method known as fingerprinting,
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=96)** which estimates the operating system based on the analysis of responses from the host. For instance, consider the output of a scan that indicates with 99% accuracy that the operating system is [[Windows 10]]. Finally, upon completing all scans, the scanner can identify the topology and construct a logical map of the network. Next, let's talk about some of the tools you might use when scanning. If you do a keyword search on apps to scan the network, you'll find a wide variety of tools that are either free or for pay, and some are built into [[Kali Linux]]. Apps include the Angry IP Scanner. This is a freely available scanner for [[Linux]], [[Windows]], and Mac OS. Nessus is a widely used vulnerability scanner that's commercially available but free for personal use. Aircrack-ng is a suite of tools for [[Wi-Fi|wireless LAN]] auditing. OpenVAS is an open-source vulnerability scanner, and [[Nmap]] is another open-source tool for network discovery and vulnerability scanning. Unicornscan comes pre-installed with Kali Linux and is a fast, efficient scanner.
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=191)** Let's take a look. I'm here at this page where we can learn more about the key features of Unicornscan. I'll scroll down. One key difference is that Unicornscan uses asynchronous scanning where instead of waiting for each scan to finish, each scan is started independently and can run simultaneously, which results in faster responses. However, you will need a device with enough muscle to handle the resources required for this type of scanning. In addition, the team may be tasked with scanning mobile devices. There are also a wide range of tools available. Drozer is an [[Application Security]] testing framework that's specifically designed for [[Android]] devices. Quark Engine is an open-source Android and iOS malware scoring system. Mobile Security Framework is an automated app used to test Android, iOS, and Windows systems, and Fing can help you troubleshoot your network. I'm here at Fing's homepage where, if we scroll down, we can see how Fing can show you what's happening on your network. Now let's test your knowledge.
>
> **[4:45](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/summarizing-scanning-tools?u=76281980&t=285)** Discuss some common functions of network scanners and outline a few apps used to audit the network. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (3), [[Kali Linux]] (2), [[Windows]] (2), [[Windows 10]] (1), [[Linux]] (1)
> **Definitions:** is a  (4), is an  (4), known as (1)
> **Env Vars:** ack (2), syn (2), icmp (1), tcp (1), arp (1)
> **Code Identifiers:** ios (2)
> **UI Navigation:** scroll down (2)
> **CLI Commands:** find (1)
> **Analogies:** for instance (1)
> **Warnings:** troubleshoot (1)

#### [Discovering Nmap](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-nmap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-nmap?u=76281980&t=0)** - [Instructor] [[Nmap]] is a powerful and flexible open source network discovery tool. In this segment, we'll outline some of the Nmap scans available that include host discovery, port scanning, and operating system detection, along with some additional features to help streamline your scans. Once you understand the basics of scanning, you'll want to evaluate some of the tools that are available. One of the more popular scanning tools is Nmap. Nmap, or [[Nmap|Network Mapper]], provides a wide range of scans and options. In addition to standard scans, Nmap has a wide range of features to optimize scanning on any size network. Let's take a look. I'm here at [nmap.org](https://nmap.org) where we can see the online version of the Nmap book. Once here, you can read about all the available techniques that include finding live hosts and listening services. I'll scroll down where you can read more about host discovery or ping scanning, learn all the methods available for port scanning, along with diving into ways to perform operating system detection. One thing to keep in mind is that Nmap is highly efficient. However, there are times when scans take a lot longer, and they will generate a lot of traffic.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/discovering-nmap?u=76281980&t=97)** This is common when scanning a large complex network. It's possible to reduce Nmap scan times, and the guide lists several methods. I'll go to chapter six, and I've opened it in a new tab where we'll find multiple methods to optimize scanning. Methods include the following: omit noncritical test, for example, disabled DNS resolution and scan only 100 ports, instead of the default 1,000 ports. Optimize timing parameters, for example, slow the rate of probes per second, or we can increase available bandwidth and CPU time. I encourage you to check out this valuable resource where you'll find plenty of scanning information and examples within the book. Now, let's test your knowledge, outline some of the Nmap scans available that include host discovery, port scanning, and operating system detection, along with features to help streamline your scans. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (10), [[Nmap|Network mapper]] (1)
> **CLI Commands:** find (2)
> **Env Vars:** dns (1), cpu (1)
> **UI Navigation:** scroll down (1), go to (1)
> **Analogies:** for example (2)
> **URLs:** [nmap.org](https://nmap.org) (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)

#### [Using hping3](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=0)** - [Instructor] Hping3 is a command line tool that can create specially crafted packets to send to a remote host. In this segment, we'll learn how we can use Hping3 to scan, spoof, or launch an attack. Hping3 is very flexible, and depending on your objective, specific flags and options can be set. The tool can craft and send ICMP, UDP, or TCP packets to a remote host and print the results. It could be used to spoof a source address and determine firewall rules with the goal of evading the firewall. Hping3 can also be used as a backdoor to create a shell that redirects the output and input to a service, so it can be accessed remotely. And it can also be used to launch an attack. With Hping3 we can do standard scans such as a ping sweep, SYN scan, or a Christmas tree scan. We can specify IP options such as randomized IP source and destination address, along with other options such as timing intervals and setting specific flags. Let's jump into Kali and see how this works. I've opened up a terminal so we can do a simple ping scan using Hping3. I'm going to pinging scanme.[nmap.org](https://nmap.org),
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=99)** which is a site that allows you to test and do some pinging and scanning. So I've entered the command and I'll press Enter, and I'll stop that. Okay, so you can see that's a simple ping scan, but what is truly neat about this tool is that it allows you to spoof your source address and it will throw a bunch of random source IP addresses during an attack. Let's talk about how I can use this feature. A SYN flood is a denial-of-service attack that floods a server with bogus SYN request with the goal of locking out legitimate users. To improve the effectiveness of the attack, it should appear as if the packets are coming from multiple sources. That way security devices are unable to tell where the attack is coming from and whether the requests are legitimate or not. So to launch a denial-of-service attack and use a bunch of random IP addresses, I'll go into Hping3 and run a SYN scan using the random source mode. And here we see the command. Now, so we can see the random IP addresses that Hping3 generates, I'll launch [[Wireshark]] here within Kali and start the capture. So we're going to move this over and I'll launch Wireshark. I'm going to start the capture, and I'll minimize this,
>
> **[3:19](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-hping3?u=76281980&t=199)** and now I'll begin the attack. Now I'll stop the attack and I'll go back into Wireshark. I'll stop the capture. And now what I'm going to do, you probably can see some of the IP addresses, but I'll filter by TCP and now you'll really be able to see the random source IP addresses. Now because I used the random source mode, we see a bunch of bogus IP addresses that are pretty much all over the map. Now, with a denial-of-service attack, the idea is to throw multiple IP addresses at the host so they really have no idea where the attack is coming from and whether the requests are legitimate or not. Now I'll minimize this, and I'm at the man page for Hping3. Once there, you can check out all the options that you can use when using Hping3. Now let's test your knowledge. Describe how we can use Hping3 to scan, spoof, or launch an attack. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (3), [[Nmap]] (1)
> **Env Vars:** syn (4), tcp (2), icmp (1), udp (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (3)
> **Tools:** command line (1), terminal (1)
> **URLs:** [nmap.org](https://nmap.org) (1)
> **Documentation:** man page (1)
> **Speakers:** - [instructor] (1)


### 2. Discovering Hosts

[↑ Back to Table of Contents](#table-of-contents)

#### [Locating network hosts](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=0)** - [Instructor] Scanning the network begins by using various tools and techniques to test for responding hosts. In this segment, we'll learn how to identify live hosts for a range of IP addresses and the importance of selecting the correct IP range. One of the first objectives of scanning is to identify live or responding hosts on the network. This is commonly done by using a technique called ping sweep or ping scanning, which sends multiple probe packets to an IP address range on a network. The packets are specifically crafted to obtain responses and gather attributes. Let's check the [[Nmap]] book for more information. I'm here at [nmap.org](https://nmap.org) in chapter three of the online version of the Nmap book, which focuses on host discovery. And I'll scroll down where we can see that this section covers methods used to scan a network for hosts. Now, I'll go to a new tab because I wanted to show you here that this chapter also outlines the importance of first selecting the correct IP range and to carefully research the target IP range before scanning anything. Well, let's talk about this concept. Network scanning helps develop a profile
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=92)** of a target organization. When properly done, it's a valuable tool for the security analyst. The team can use various tools to determine the IP address of an organization. For example, we can use command line tools such as nslookup, dig, or whois, or we can use traceroute and ping. We can check email headers or even use online [[Databases]] and directories. Let's take a look. I'm here at this website Netcraft, where we can search web by domain. For example, in this case, I used [example.com](https://example.com) and I selected search. And I've opened it in a new tab and then down below here you can see where it says Site Report, and I selected that. Now, once I open the site report, and I'll scroll down here, here's where we can find information such as the IP version four address and the IP version six address. Now, one essential rule to keep in mind is even though you have an IP address, you should double check the IP address or net block. Now, even if the client supplied the address, it might not be correct. As we see here, clients sometimes have out of date records or simply write down the wrong information. Now, why is this important?
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=188)** There are certain IP address ranges that are protected from scans, even pings, which mostly include government and military networks. For example, don't scan range 128 or range 129, but there are others. Here I found an exclusion list which lists all the IP addresses that you should not scan.
>
> **[3:38](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/locating-network-hosts?u=76281980&t=218)** In some cases, they aren't on the list, but they're protected nonetheless. Let's take a look. I've opened a command line prompt and entered ping [nationalguard.com](https://nationalguard.com), and I'll press Enter. We'll see how the request will time out due to packet filtering, or in some cases, a silent discard to the [[Bitbucket]]. Now let's test your knowledge. Explain how to identify live network hosts for a range of IP addresses and the importance of selecting the right IP range. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (3), [[Databases]] (1), [[Bitbucket]] (1)
> **Analogies:** for example (3), such as (2)
> **UI Navigation:** scroll down (2), go to (1), open the (1)
> **URLs:** [nmap.org](https://nmap.org) (1), [example.com](https://example.com) (1), [nationalguard.com](https://nationalguard.com) (1)
> **Tools:** command line (2), bitbucket (1)
> **CLI Commands:** find (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Comparing ping scans](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=0)** - [Narrator] When scanning, there are several ping scans that we can use to test for liveness. In this segment, we'll compare the differences between ARP, UDP and ICMP ping scans. First, let's talk about ARP scanning. ARP scanning, also called ARP ping or ARP sweep is a simple and effective way to determine the live hosts on a [[Local Area Network (LAN)|local area network]]. Let's see how this works in [[Wireshark]]. I've opened up ARP scan, where we can view the signature. In the capture, we see multiple ARP broadcasts that are sent out onto the network, and I'll scroll down, and any live host will respond with their MAC address. For example, we see in frame one, the broadcast is sent, who has this IP address? And in frame two, we see a response. I'm at this MAC address, so we know that the host at .68 is alive and responding. Another scan we can use to test for liveness is a UDP ping. With this scan, [[Nmap]] will send a UDP packet to some common ports. For example, port 53, which is used for DNS, it sends it out and will wait for a response. A responding host will return an answer or an ICMP port unreachable error
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=96)** and not responding or offline. You could see various ICMP error messages. For example, in Zenmap, which is the [[Windows]] version of Nmap, I use the following command as we see here, and we let this run. And then down below, we see the host 10.001, which is the router, has port 53 open. I'm in Wireshark and we'll see how this works. I've opened up a UDP scan and I'll go to frame two and we're going to drop down the DNS header and I'll open up the flags and I'll select the Opcode. The Opcode for the DNS request is server status request, which is asking what's your status, and then we'll go down to frame four, which is the response. In this case, the DNS server returned a response code of four or not implemented. This response indicates that it recognizes the query type, but it doesn't support it. However, the server did reply with a recursion available, server can do recursive queries. With a response from the server, we can safely assume that the DNS server is up and operational. Now, UDP scans are slower
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=190)** and less reliable than other scans. However, they are used many times because they can bypass some firewall rules. Now, the last scan we'll talk about isn't ICMP pinging, which is a classic example of a ping sweep. ICMP can be used to discover live hosts, detect the presence of firewalls, fingerprint the operating system, and map the network. When using ICMP during a ping sweep, you'll commonly see some query messages. Those include echo request/reply, which is used to test for reachability and timestamp request/reply, which is used to compute delay between timestamps. In addition, you'll see error messages, and those include destination unreachable, redirect, time exceeded, and parameter problem. I'm in Wireshark and I've opened ICMP scan signature, where you can see the many requests, replies, and error messages, and I'll scroll down. All total, they provide information about the network. However, keep in mind when using ICMP ping sweeps, many times they're blocked by a firewall or [[Intrusion Detection]] system. Now let's test your knowledge. Compare the differences between ARP, UDP
>
> **[4:45](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/comparing-ping-scans?u=76281980&t=285)** and ICMP ping scans. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (3), [[Nmap]] (2), [[Local Area Network (LAN)|Local area network]] (1), [[Windows]] (1), [[Intrusion Detection]] (1)
> **Env Vars:** icmp (9), arp (8), udp (6), dns (5), mac (2)
> **UI Navigation:** scroll down (2), go to (1), select the (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (3)
> **Ports:** port 53 (2)
> **Versions:** 10.001 (1)
> **Warnings:** keep in mind (1)

#### [Sending SYN and ACK scans](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=0)** - [Instructor] A TCP header has multiple flags that can be manipulated, which can be a powerful ally when scanning a network. In this segment, we'll learn how the TCP SYN and ACK flags can be used to detect live hosts on the network and identify firewall rules. During host discovery, the team will send probes to a range of IP addresses to see which hosts respond. While there are many methods we can use, leveraging the power of the TCP flags can achieve solid results when assessing the network. More specifically, we'll see how using the TCP SYN flag can determine which hosts are alive and the TCP ACK flag can help determine the presence of a firewall. First, let's talk about how a TCP SYN scan works. The TCP SYN or half open scan sends probes out onto the network to determine if hosts are alive and responding without making a full connection. This makes it less likely to be logged by certain systems and harder to detect than a full connect scan. The SYN scan is one of the most popular scanning methods because of its speed and also because it's a bit stealthier. Let's talk about how this works. In a standard TCP handshake, the sequence is as follows.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=95)** From Host A, we send a SYN packet to initiate the connection. Host B returns a SYN-ACK, and host A returns a final acknowledgement, and that begins the connection. When using a SYN scan, the scanner only sends the SYN packet or the initial packet in the TCP handshake, and the results are as follows. If the host returns a SYN-ACK, that means the port is open. If the host returns a reset, that means the port is closed. No response or if an ICMP destination unreachable error is returned, this means that the port might be filtered by a firewall. If a target returns a SYN-ACK, this indicates that the port is open. In response, the scanner will send a reset packet to abort the connection to make sure a full connection is not made with the target. Next, let's talk about the TCP ACK scan. This scan is similar to the SYN scan, however, in this scan, the TCP ACK flag is set instead of the SYN flag. A key consideration is that the TCP ACK scan isn't concerned about open or closed ports in the traditional sense. Instead, it will help map out firewall rules by identifying whether a port is filtered
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/sending-syn-and-ack-scans?u=76281980&t=188)** by a firewall or unfiltered. Responses will be as follows. If the host returns a reset, this means that the packet reached the host and the port is considered unfiltered. No response means that the port is considered filtered by a firewall which has prevented the packet from reaching the host. Now, let's test your knowledge. Outline how the TCP SYN and ACK flags can be used to detect live hosts on the network and identify existing firewall rules. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** syn (14), tcp (13), ack (9), icmp (1)
> **Definitions:** means that (2)
> **CLI Commands:** make (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Identify a scanning signature](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-identify-a-scanning-signature?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-identify-a-scanning-signature?u=76281980&t=0)** - [Instructor] Let's do a challenge. For this challenge, we'll evaluate a scanning signature using [[Wireshark]]. For this challenge, we'll begin by going to the Exercise folder and opening the file [[Nmap]] Scan.pcapng in Wireshark. And here's what you should see when you open the file. Now for this challenge, you're going to investigate what's happening in this capture. First, you'll filter by arp, describe the pattern you see, and then clear the filter. Filter by tcp, describe the pattern you see, and then clear the filter. Filter by icmp, describe the pattern you see, and then clear the filter. Now let's take a look at the signature. Filter by frame matches "(?i)nmap" exactly as it's written. Take a look at the results. How many packets are present? Right-click on any of the packets and then select "Follow the Stream." Can you see the text nmap in the pop-up window? Clear the filter. And then finally, you'll filter by tcp.stream eq 3204. Take a look at the results.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-identify-a-scanning-signature?u=76281980&t=92)** What does it say on the User Agent line? This challenge should take you about 20 minutes. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (3), [[Wireshark]] (2)
> **UI Navigation:** open the (1), right-click (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Identify a scanning signature](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=0)** - [Instructor] Okay, now let's check our work. For this challenge, you were to open [[Nmap]] Scan.pcapng, and then I wanted you to filter by several protocols. So when we begin, I want you to imagine that you are an [[Intrusion Detection]] system and you're monitoring all the traffic that goes through your device for unusual or suspicious behavior. And more specifically in this case, we're going to be able to see some patterns of a scan. So first we were to filter by ARP, so we'll go into the display filter and type ARP and then press Enter. Now, I wanted you to describe the pattern that you see. Well, it's pretty evident that the scanner is actually going through and saying, "Who has this IP address?" And it's going through .1, .2, .3, .4, et cetera. And it will go through the entire range of IP addresses for that network. It's waiting for a response so it can then know that that host is alive and responding. So we'll clear the filter. Next, we'll filter by TCP. TCP and press Enter. And then you were to describe the pattern you see. Now again, the scanner is just sending out
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=94)** multiple SYN packets to all the IP addresses in the range. Now, if we remember what happens during a scan that any hosts that are responding will generally send a SYN/ACK back in response to the SYN packet. The scanner then sends a reset, so it does not have a full connection with the host. So that's what you see, as well. Now we'll clear the filter. Next, we'll filter by ICMP, and then we'll take a look at that pattern. Now, in this case, what we're doing is sending a series of ping requests out onto the network. And what we could do, we could filter by destination, so that could just clear it up, as well. And what you'll see is it going through a range of IP addresses requesting some type of reply. Remember, the ping request is a test for reachability. Then I'll clear the filter. Now, this one we wanted to filter by frame matches Nmap, and we want to do that exactly. So we'll go back in here and frame matches Nmap and then I'll press Enter. Now, we see a number of different responses here and they are related to HTTP. So for this question, how many packets are present? And if you go down below, you'll see displayed 32.
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-identify-a-scanning-signature?u=76281980&t=191)** Now, if we right click any of the packets and then select follow the stream, and we'll bring this right over here. The question was, can you see the text Nmap in the popup window? And yes, right here we see Nmap scripting engine. So there's a signature. And I want you to clear the filter, as well. And the last one is to filter by a specific stream. So we'll go in here and put TCP stream equals 3204, and we'll press Enter. And again, we're going to right click, follow the TCP stream, and here again look at the user agent line, and I'll select that. And what that says is Nmap scripting engine, and it refers back to the Nmap book. So clearly a pattern of scanning using Nmap. So understanding how a scan works will help you to tune your devices so you can avoid having scanning on your network. I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (8), [[Intrusion Detection]] (1)
> **Env Vars:** tcp (4), syn (3), arp (2), ack (1), icmp (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Identifying Open Services

[↑ Back to Table of Contents](#table-of-contents)

#### [Evaluating port scanning methods](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=0)** - [Instructor] Once a ping scan determines what hosts are alive and responding, the team then moves to identify open services on each live host. In this segment, we'll discover how port scanning can help identify the types of devices, check for listening services, and determine the operating systems in use on a network. Once the ping sweep is complete, the next step is to identify listening TCP and UDP ports on any of the hosts that are alive and listening. Another task done during port scanning is called service discovery, which is done to identify services that are running, and if possible, determine the version of those services. The added benefit is that by gathering information obtained during scanning, the scanner can identify a wide range of [[Statistics]] and data. Information includes the types of devices, such as firewalls, that are on the network, along with the operating systems that are in use. Let's talk about the process of running a service discovery, and more specifically, describe what ports we scan. Now, keep in mind that some ports are more exposed than others, in that the nature of the port represents a juicier target. On a system, there's a potential
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=94)** for 65,535 TCP and UDP ports. The port numbers are used to identify a specific application or process and fall into three main classes. The well-known ports are in the range of 1 to 1023. You should be familiar with these. Some examples include port 53, DNS, port 80, HTTP, and port 88, Kerberos. In addition, the team may choose to scan other ports as well. For example, ports 1024 through 49151, which are the registered ports that are commonly used by vendors for specific applications. These include port 3389, RDP, and services such as SOCKS, Open VPN, and gaming applications. Ports in the range of 49152 and higher are dynamic, private, or ephemeral, and are generally used by the client as a receiving port while in a communication with a server. Another scan might involve checking for malware ports, for example, port 1001, Silencer. Next, let's talk about some techniques that you might use when port scanning. A SYN scan or half-open scan is the most common method,
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/evaluating-port-scanning-methods?u=76281980&t=192)** and this is where the scanner sends a SYN packet to each target port. If the target port responds with a SYN/ACK packet, that means the port is open. A full connect scan is when the scanner attempts to establish a full connection using the three-way handshake. A UDP scan tests UDP ports instead of TCP. Now, this method is slower and less reliable than TCP scanning. However, it does help to identify services that use UDP, such as DNS, SNMP, and [[DHCP]]. And there's also stealth scans, such as the FIN, NULL, and Xmas Tree scan, which are designed to probe ports without completing a full handshake or connection. Now, once done, the scanner will present you with a list of identified services, and here we see some examples of open ports here at [nmap.org](https://nmap.org), so you know what to look for once the scan is complete. Now, let's test your knowledge. Outline how scanning can help identify the types of devices, check for listening services, and determine the operating systems in use on a network. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1), [[DHCP]] (1), [[Nmap]] (1)
> **Env Vars:** udp (5), tcp (4), syn (3), dns (2), http (1)
> **Analogies:** such as (4), for example (2)
> **Ports:** port 53 (1), port 80 (1), port 88 (1), port 3389 (1), port 1001 (1)
> **URLs:** [nmap.org](https://nmap.org) (1)
> **Definitions:** is called (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Scanning IPv6 networks](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=0)** - [Instructor] When scanning the network, the address space for IPv6 can seem overwhelming. In this segment, we'll discover some approaches to take when scanning a v6 network and list some guidelines that can reduce the predictable nature of IPv6. First, let's talk about IPv6. At this writing, the share of IPv6 traffic is at about 43%, and this growth will continue. When comparing IPv4 to IPv6, there is a potential of a massive address range. With IPv6, a standard subnet size for a LAN is a /64, which is required in order for stateless address auto configuration, or SLAAC, to work. With 64 bits, a subnet has the potential for up to 18.4 quintillion host addresses, an insanely large number that would prevent any type of scanning. However, scanning and locating devices is possible in an IPv6 network by using tools that predict patterns. Let's talk about how this works. In IPv6, there are three ways to configure a host with an IP address: manual, SLAAC, and DHCPv6.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=98)** Manually configured addresses in IPv6 are generally assigned in a pattern. Although they can be assigned randomly, a network administrator will most likely assign addresses in a pattern that can be detected by a scanner without having to scan the entire network. Another method to assign addresses is by using SLAAC. In this case, the host uses an extended unique identifier to assign itself a unique 64-bit IPv6 address, and this then removes the need for manual configuration or [[DHCP]]. Here's how this works. We take a 48-bit MAC address from the [[NIC]]. We separate the organizationally unique identifier and the NIC serial number. We then insert a 16-bit identifier, FFFE. We convert the first grouping to binary and invert the U bit, which is the seventh bit from the left. So 07 will become 05. We then add the link local prefix, and the MAC address would then become the following extended unique identifier. The pattern here is evident, as every SLAAC uses FFFE in the fourth and fifth bytes. In addition, a group of hosts on a network
>
> **[3:15](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/scanning-ipv6-networks?u=76281980&t=195)** commonly share the same NIC card vendor, again, offering a pattern that can be used to further reduce the search space. And the last way to assign addresses is by using DHCPv6, which issues an address from a pool, which many times has a predictable pattern. This, again, can reduce the search space. IPv6 scanning tools can be set to check for live hosts in a specific address range, and can be a starting point to locate other hosts. So now that we understand how IPv6 can be predictable, let's talk about ways to reduce the predictability. One recommendation to foil the pattern is to start the address pools with a high address and randomize the sequence of assigned addresses. In addition, because of the pattern when using SLAAC, it is suggested that you use semantically opaque interface identifiers, which are not based on the MAC address. Now let's test your knowledge. Discuss some approaches that administrators can take when scanning an IPv6 network, and list some guidelines that can reduce the predictable nature of IPv6. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NIC]] (3), [[DHCP]] (1)
> **Env Vars:** slaac (5), mac (3), nic (3), fffe (2), lan (1)
> **Versions:** 18.4 (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Identifying listening hosts using SCTP](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=0)** - [Instructor] The stream control transmission protocol can be used to identify live hosts and open ports on a target system. In this segment, we'll review how the SCTP INIT and COOKIE ECHO scans can gather system information while evading detection. First, let's talk about the stream control transmission protocol. SCTP is a newer transport-layer protocol used to ensure reliable, message-oriented communication. It has minimal overhead and is used to transmit multimedia. It's often referred to as TCP next generation. With SCTP, data can be sent in chunks between two endpoints as opposed to TCP, where data is sent in a stream of bytes, which can be inefficient for certain applications. Let's take a look at SCTP in [[Wireshark]]. If you'd like to follow along, go to the Wireshark Wiki and select this packet capture. Now, once here, I'm going to go to [[Statistics]] and open a flow graph. In this flow graph, we see the communication between two endpoints. Now, the first four packets show a standard SCTP association setup. The initiating end sends an INIT chunk,
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=99)** and if the port is open, the receiving end replies with an INIT-ACK chunk. That is then followed by a COOKIE ECHO, and then a cookie ACK. Now let's talk about how we can use an SCTP INIT and COOKIE ECHO scan to identify active services and open ports on a target system. Well, the benefit of using these scans is that they're considered to be half-open scanning because you don't create an association. The idea is that by not completing a full connection setup, the scans might avoid tripping an alarm. An SCTP INIT scan takes advantage of the way SCTP establishes a connection between the client and the server. This scan will help to determine the state, whether open or closed, of a target port without establishing a full association. Now how this works is the scanner will send an INIT chunk to the target port. If the port is open, it will receive an INIT-ACK chunk. If the port is closed, it will receive an abort chunk. The SCTP COOKIE ECHO scan exploits another stage of the SCTP association setup. In this scan, the scanner sends a COOKIE ECHO chunk
>
> **[3:15](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/identifying-listening-hosts-using-sctp?u=76281980&t=195)** without the INIT and INIT-ACK. If the port is open and there's no previous association, the target will respond with an abort chunk. If the port is closed, it will also respond with an abort chunk. Now, this is a more advanced scan with additional benefits. First of all, it's not as obvious a port scan as the INIT scan. Also, there might be non-stateful firewall rulesets that block INIT chunks, but not COOKIE ECHO chunks. The downside is that an SCTP COOKIE ECHO scan can't differentiate between open and filtered. However, it can be useful in some situations, for example, when combined with other techniques or when trying to observe certain behaviors from a target. Now let's test your knowledge. Review how SCTP INIT and COOKIE ECHO scans can gather system information while evading detection. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (2), [[Statistics]] (1)
> **Env Vars:** sctp (12), init (12), cookie (8), echo (8), ack (4)
> **Prerequisites:** setup (3)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Using SSDP for discovery](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=0)** - [Instructor] Simple Service Discovery Protocol, or SSDP, is a protocol that enables clients to discover network services, with minimal configuration. In this segment, we'll learn how SSDP can be used for passive discovery of network devices. In today's internet of everything, all types of devices, routers, phones, cameras, and servers are connecting to the internet. A self configuring network enables devices to join, leave, and learn about other devices. First, let's talk about the concepts that help devices find one another, Universal Plug and Play, or UPNP, and Simple Service Discovery Protocol, or SSDP. Universal Plug and Play is a framework that provides discovery and advertisements so that the network is aware of what services and devices are available. SSDP enables clients to discover network services. Universal Plug and Play-capable devices or programs send a notification message at regular intervals to announce their services. When sharing information using SSDP, you'll commonly see the following. M-SEARCH is a multicast
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=94)** from a Universal Plug and Play client that wants to discover available services on a network. NOTIFY is also a multicast that announces what services are available. So that we can better understand how SSDP works, I'd like to show you, in [[Wireshark]], some of the information that SSDP provides for passive discovery of network devices. If you'd like to follow along, go to [cloudshark.org](https://cloudshark.org), and then once you're there, we'll go to Export, Download File, Download the original file, and open it in Wireshark. Now, once here, I'll filter by SSDP. Here, we see quite a few packets. I'd also like to do a flow graph. Now we'll go to [[Statistics]] and Flow Graph, and we'll limit it to display filter. And here, we see some notifies, along with M-SEARCH. Now, in this network communication, we see that SSDP packets are sent via multicast using HTTP over UDP. Now, I'll close this. I also want to follow the stream, so we're going to select one of the notifies, right-click, and say Follow, UDP Stream. Now, once here, this is where we can see the information
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-ssdp-for-discovery?u=76281980&t=192)** that the devices are sharing. I'll go right here to LOCATION, I'm going to highlight this. The location is where the device can download and provide information about the services, such as what's the manufacturer, even the icon that should be displayed on the file system. Now I'll also look here at the server, and I'll select this right here. I'll copy that, and then I'll do a quick search. And here, we see that that device is a Wireless N Gigabit Router. So, as we can see, during the discovery phase, we can learn a lot about the devices on our network by examining the SSDP transactions. Now let's test your knowledge. Explain how SSDP can be used for passive discovery of network devices. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (2), [[Statistics]] (1)
> **Env Vars:** ssdp (11), search (2), udp (2), upnp (1), notify (1)
> **UI Navigation:** go to (3), right-click (1)
> **Definitions:** is a  (4)
> **CLI Commands:** find (1)
> **URLs:** [cloudshark.org](https://cloudshark.org) (1)
> **Exercise Files:** download the (1)
> **Analogies:** such as (1)

#### [Optimizing scans with Nmap Script Engine](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=0)** - [Instructor] On its own, [[Nmap]] provides an exceptional ability to scan networks. In this segment, we'll learn how we can use Nmap Scripting Engine to streamline and power up our scanning results. Nmap is a powerful network scanner. However, to make scanning more efficient, we can use pre-configured scripts during an [[Ethical Hacking]] exercise. Let's talk about how this works. A script is a short program that could be used to automate a process. Nmap Scripting Engine scripts are a core component of Nmap that allows users to customize and automate the scanning process. The team can use scripts to achieve the following. We can detect software versions and then once detected, attempt to brute force the service. Determine vulnerabilities, and then take steps to exploit the vulnerability. Uncover malware such as Trojans and backdoors. To use an Nmap script type the following. nmap --script <name of script>. Scripts are grouped into several different categories, and those include malware. These are scripts capable of detecting a variety of different types of malware.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=94)** Discovery are scripts that can discover network services and hosts. Vulnerabilities can test for vulnerabilities on a host. Nmap has a full library of scripts. You can find them here by visiting the online Nmap guide. Now, once here we can see the wide range of scripts that are available. We can also see some examples along with a list of script categories. I'd like to show you an example. I'm here in Zenmap, which is the [[Windows]] version of Nmap, and I use the following script. Here we can see the script as follows. Now this script performed a basic banner grab on scanme.[nmap.org](https://nmap.org), which is a site that we can use for testing scans. And here we see the output as follows. Using Nmap scripts provides flexible options when scanning. For example, you can use more than one script in a command. You'll just need to use a comma between each script. And for a more powerful option, you can run all scripts in a category. For example, I'm back in Zenmap, and here I run a scan on scanme.[nmap.org](https://nmap.org), which checks for all the vulnerabilities.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/optimizing-scans-with-nmap-script-engine?u=76281980&t=193)** And here we can take a look at the command. Now I'll scroll down, which you can see it ran a thorough check of all the vulnerabilities. Now keep in mind, using this option will run multiple scans and will most likely take a while. In addition, the scanning can either cause a system to crash and or create excessive network congestion. As a result, you'll need to evaluate whether running an intrusive scan is appropriate for the environment. Now, let's test your knowledge, explain how we can use Nmap Scripting Engine to streamline and power up our scanning results. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (14), [[Ethical Hacking]] (1), [[Windows]] (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** make (1), find (1)
> **URLs:** [nmap.org](https://nmap.org) (2)
> **UI Navigation:** scroll down (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** you'll need (1)


### 4. Determining Operating Systems

[↑ Back to Table of Contents](#table-of-contents)

#### [Fingerprinting the OS](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/fingerprinting-the-os?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/fingerprinting-the-os?u=76281980&t=0)** - [Narrator] Prior to launching an attack, the team must determine the operating system in use. In this segment, we'll learn how fingerprinting and banner grabbing can determine the operating system and provide information on services that are running. While scanning, identifying the operating system in use can provide valuable information on any security vulnerabilities that exist, so we can launch a more effective attack. Two techniques commonly used to determine the operating system are banner grabbing and fingerprinting. Both are used in the initial stages of a [[Cybersecurity]] assessment, commonly during reconnaissance and enumeration. While the two techniques are somewhat related, they serve different purposes and use different methods. First, let's talk about how banner grabbing works. Banner grabbing is used to identify the details of a particular service or operating system running on a server. This is achieved by establishing a connection to a server and then capturing or grabbing the response. The response commonly includes a banner that displays information about the software, its version, and other details. I'm hereat [nmap.org](https://nmap.org), where we see an example from an [[Nmap]] script that we can use to grab a banner.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/fingerprinting-the-os?u=76281980&t=94)** If we were to connect to an FTP server, it might yield this banner as shown in the script output. Now, let's talk about fingerprinting, which is used to determine the specific type and version of an operating system or service running on a remote server. This can be done using either passive fingerprinting, which analyzes network traffic to gather information on the host or active fingerprinting, which sends specially crafted packets to the target. It then analyzes the response, which can hint at or reveal the underlining operating system or service that is running. Fingerprinting can often determine the operating system or service type, even if banners have been altered or are misleading. Now, keep in mind when using Nmap, this is just a guess and you can learn more about understanding an Nmap fingerprint here at [nmap.org](https://nmap.org). Here is the key difference. Banner grabbing relies on the responses from the host, whereas fingerprinting analyzes the behavior or characteristics of the traffic to make an educated guess about the system or service. Now, let's test your knowledge. Explain how banner grabbing and fingerprinting can determine the operating system and different services that are running.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/fingerprinting-the-os?u=76281980&t=190)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (5), [[Cybersecurity]] (1)
> **URLs:** [nmap.org](https://nmap.org) (2)
> **CLI Commands:** make (1)
> **Env Vars:** ftp (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)

#### [Using Wireshark for OS discovery](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=0)** - [Instructor] In addition to active operating system discovery, the team can leverage passive techniques to determine the target's operating system. In this segment, we'll learn how [[Wireshark]] can capture identifiers to help discover the operating system in use. Passive operating system discovery can be done by using Wireshark. The team can launch a packet capture and monitor the traffic for various identifiers that appear in unencrypted protocols. Two protocols that can provide information are the browser protocol and HTTP. Let's talk about each of these. One protocol that shares information about devices and services on the network is the browser protocol, which collects and shares the work groups, domains, and servers on the network. The browser protocol operates on top of Server Message Block, which is a network communication protocol used for sharing files, printers, and various resources among computers on a LAN or over the internet. I'd like to show you an example in Wireshark. If you'd like to follow along, open Browser Protocol.pcapng, which you'll find in the Exercise folder. Now, in the capture, there's a single announcement, so we can take a look at the information that you can see. Now I'll expand this, and here we see Server Message Block.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=97)** And then I'll drop down [[Microsoft]] [[Windows]] Browser Protocol, and I'll scroll down here. Now, looking at the packet details, we can see that the host name is RECORDING-PC, and here we see the Windows version is [[Windows 10]]. And it tells us about the server type, which here, I'll select that. And it shows us that this is a server. So as you can see, the browser protocol is plainly sharing information that could be used to launch an attack. Another method of discovery is looking at HTTP headers. HTTP is a stateless protocol and contains information in the headers that act like a handshake. This helps the server and the browser provide the best way to present the requested information. For this example, we'll look at HTTP Header Information.pcapng, which is also found in the Exercise folder. For this capture, I went to some webpage and captured some HTTP traffic, and I'll select one of the packets, right click, and say Follow the TCP Stream. And I'll move that up. Now, up here at the top, this is from the client, and then down below this would be the server information. So one thing we can take a look at here, and I'll just highlight this, it's called User Agent. Now the User Agent header identifies
>
> **[3:14](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/using-wireshark-for-os-discovery?u=76281980&t=194)** the application requesting the information from the server, which is typically a browser. Now, to determine the browser in use, go to this site, where then you'll copy and paste the user agent string in the field and then select analyze, and I did, and you can find out it provides additional information about the user agent. And then down below, we see for the server right here, the server is nginx, which is a lightweight version of Apache. So without any scanning, we can conduct passive operating system discovery just by looking at various indicators while sniffing and/or capturing traffic. Now let's test your knowledge. Explain how Wireshark can capture identifiers to help discover the operating system in use. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (4), [[Windows]] (2), [[Microsoft]] (1), [[Windows 10]] (1)
> **Env Vars:** http (5), lan (1), recording (1), tcp (1)
> **CLI Commands:** find (2), nginx (1), apache (1)
> **Definitions:** is a  (4)
> **UI Navigation:** scroll down (1), go to (1)
> **Speakers:** - [instructor] (1)

#### [Employing IPv6 fingerprinting](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=0)** - [Instructor] In addition to standard scans, the team can use IP version six when probing the network to determine the operating systems that are in use. In this segment, we'll learn how IP version six fingerprinting can help identify the operating system and open services on the target. When using [[Nmap]], IP version six fingerprinting is pretty much the same as when scanning with IP version four. To scan with IP version six, you would use the dash six option. Now at a high level, the technique is the same. Nmap sends a series of probes with the goal of receiving enough information back to determine the operating system along with listening services. The differences are in the specific probes Nmap uses and in the way they are matched. What I'd like to do is talk about a few specific features, and then show you the probe in [[Wireshark]]. To follow along, open IP version six probe Nmap.pcapng, which you'll find in the Exercise folder. Now because there's multiple errors, I'll remove the coloring rules right here. So first, let's hop out to the Nmap book, where we can see the types of probes that are used during discovery when using IP version six, and I'll scroll down. Now the benefit of using IP version six
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=99)** is that there are a few IP version six-specific features, and that includes the use of ICMP version six, which I've highlighted a couple here, and one of those is called a node information query. Now this query will ask a target for its host names, IP version four addresses, as well as IP version six addresses. So once in Wireshark, I'll filter just to see that node information query. And here we have that it is a type 139. And we see that there are three of those. Now the target might not respond, but Nmap will still send it in hopes of getting a response. The next type I'd like to show you is an ICMP version six echo, and this is the second one. Now this is an unusual probe. It has an echo request with a type 128, and a code of zero. And the ICMP version six ID is ABCD. And the sequence is one. And there is no data payload. But what makes this probe interesting is that it uses faulty extension headers, and I'll just go here to show you that there are four of them, and they're hop-by-hop, destination options, [[Routing]], hop-by-hop. Now we'll go back into Wireshark,
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=193)** and in this case, we're going to go down to the expert information. And once you open that, you'll see Wireshark recognizes this as an error. The second error shows us that IP version six hop-by-hop extension header must appear immediately after the IP version six header. And we'll right click and apply as a filter to take a look at those errors. And again, it's clearly an error. I'm going to close that. I'll go back to the expert information, and there's also another one that Wireshark recognized as an error. Right here it says, under Note, routing header is deprecated. And again, I'll apply as a filter. Now we know that certain types are deprecated, in this case, it was recognized as an error. So the last thing I'd like to show you is that when using IP version six, we might identify where the firewall is not blocking ports, because the access control lists are not in sync for IP version four and IP version six. For example, I ran a scan using IP version four and IP version six on scanme.[nmap.org](https://nmap.org). Now here we see that I was able to get through port 9929 using IP version four, but not in IP version six. So in that case, you'd want to address that issue. So in some cases, it's worth using an IP version six scan
>
> **[4:51](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-ipv6-fingerprinting?u=76281980&t=291)** when assessing the network. Now let's test your knowledge. Describe how using IP version six fingerprinting can help identify the operating system and open services on the target. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (7), [[Wireshark]] (5), [[Routing]] (2)
> **Env Vars:** icmp (3), abcd (1)
> **Definitions:** is an  (2), is called (1), is a  (1)
> **CLI Commands:** node (2), find (1)
> **URLs:** [nmap.org](https://nmap.org) (1)
> **Ports:** port 9929 (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** scroll down (1)

#### [Harnessing the TTL value](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=0)** - [Lecturer] The Time to Live value in an IP header can be used to help determine the operating system. In this segment, we'll learn how [[Nmap]] uses the Time to Live value to make a best-guess effort as to the target's operating system. Nmap sends probes to identify the operating system based on specific behavior from the target system. A few of the values used in determining the operating system includes the window size in a TCP header, along with the Time to Live value in an IP header. First, let's talk about what the field value, Time to Live, means in an IP header. Time to Live represents the number of hops or routers the packet can take along its journey. Every time it passes through a router, it's decremented by one. Now, this is to prevent the packets from endlessly circling the globe to find their final destination. Here, we see a Time to Live value in an IP version 4 header. And in an IP version 6 header, the Time to Live value is called Hop Limit. They're both the same things. Now, the Time to Live value is not predetermined according to the RFC, instead, the value will differ
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=92)** according to the operating system. Some common values are as follows. For [[Linux]], it's 64 hops, [[Windows]], 128 hop, and Cisco routers, 255 hops. I'd like to show you an example of an active operating system scan in [[Wireshark]]. If you'd like to follow along, you can download activeosfingerprinting.pcapng, here, at [chrissanders.org](https://chrissanders.org). Chris Sanders is a very good author who has written books on Wireshark. You'll select this file, and I've opened it up in a new tab, and here you'll select View raw. Now I've downloaded it and opened it in Wireshark, and once there, I'll take off the coloring rules. Now, once here, we can see that this is a scan. So we can see it better, let's do a flow graph. We'll go to [[Statistics]], and then to Flow Graph. We see that the host at .128 has sent several probes out to host .150, and is waiting for responses. Nmap collects the information that the target returns. Nmap then makes a best-effort guess as to what kind of operating system is in use. Now, whenever you do techniques
>
> **[3:04](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/harnessing-the-ttl-value?u=76281980&t=184)** to determine the operating system, they should be on the same network as the target machine, as the return packets should not cross any routers, because the Time to Live value will be altered. In addition, these probes don't always work, as the tool might not be able to identify the operating system, but Nmap will give it its best shot. Now let's test your knowledge. Outline how Nmap uses the Time to Live values received from the target host to make a best-guess effort as to the target's operating system. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (6), [[Wireshark]] (3), [[Linux]] (1), [[Windows]] (1), [[Statistics]] (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (2), is called (1)
> **Env Vars:** tcp (1), rfc (1)
> **Versions:** version 4 (1), version 6 (1)
> **URLs:** [chrissanders.org](https://chrissanders.org) (1)
> **Documentation:** rfc (1)
> **UI Navigation:** go to (1)

#### [Mapping the network using Nmap](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=0)** - [Instructor] The Ethical Hacker has numerous scanning tools available for network discovery. In this segment, we'll learn how [[Nmap]] can provide detailed information during host discovery, and review some common scans and options. Nmap, or [[Nmap|Network Mapper]], is a popular tool that can find live hosts, identify listening services, and evade [[Intrusion Detection]] systems. Nmap has a ton of scans, options, and scripts. A helpful reference that lists options can be found here, at [nmap.org](https://nmap.org). Let's talk about some common scans. Now, keep in mind, as we go through these, when using Nmap, you might need to run as administrator for certain scans. Some scans include the following. A ping scan, or host discovery scan, sends ICMP ECHO requests, or ping packets, to determine if network hosts are live and responding. A TCP SYN scan, or half-open scan, sends a SYN packet to each target port. If the target port responds with the SYN ACK packet, this means that the port is open. Because it doesn't fully connect with the target, it's a stealthier scan. The TCP full connect scan is when the scanner attempts to establish a full connection using the TCP three-way handshake.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=97)** An intense, or aggressive, scan is a comprehensive scan that includes version detection, operating system detection, script scanning, and trace route. Nmap also has several options to enhance your scan. For example, the -v, that provides verbose output. Or -T, this is a timing option, where -5 is faster. When using Nmap, we enter the command as follows, nmap, options, and then the target host name or IP address. And we can even save the output to a text file by using this command. Nmap will let you know the status as it searches. For example, here we have a standard ping scan. When scanning, Nmap will commonly identify the [[NIC]] vendor. Now, this could be helpful, as some NIC cards have vulnerabilities. The information comes from a plain-text file, and is easily searchable as well. Let's see how this works. I've entered the first six digits of a MAC address, which represents the organizationally unique identifier, and I'll select Search. And here, we see that the company is Cisco. Now, once Nmap knows the NIC vendor, it can help identify a possible network device,
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/mapping-the-network-using-nmap?u=76281980&t=193)** such as a Cisco router. Now, we know it's called Nmap, or Network Mapper, however, Nmap doesn't natively create a map, as it's a command-line tool. For a graphical user interface, use Zenmap, the sister product that has all the functionality of Nmap, and provides a rich, interactive experience. Zenmap will identify the topology and create a map. Let's take a look. I'm in Zenmap, and I ran a scan, and we go to the Topology tab. And this is an example of what you might see after scanning your network. Now here, I did a scan on scanme.[nmap.org](https://nmap.org), and this shows a trace route of scanme.[nmap.org](https://nmap.org). Now, this can be very helpful in identifying the hops from you to the target. For a quick demonstration of scanning a site, we'll take a look at this website, and I put in [example.com](https://example.com), which is a site we can scan. And I'll say I'm not a robot, and do a QUICK NMAP SCAN. And here, we see the results. Now let's test your knowledge. Discuss how Nmap can provide detailed information during host discovery, and review some common scans and options. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (18), [[NIC]] (3), [[Nmap|Network mapper]] (2), [[Intrusion Detection]] (1)
> **Env Vars:** tcp (3), syn (3), nic (3), icmp (1), echo (1)
> **Definitions:** is a  (4), means that (1), is an  (1)
> **URLs:** [nmap.org](https://nmap.org) (3), [example.com](https://example.com) (1)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Warnings:** keep in mind (1)


### 5. Moving through the Network

[↑ Back to Table of Contents](#table-of-contents)

#### [Generating less noise](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980&t=0)** - [Instructor] Scanning a network can generate a great deal of traffic. In this segment, we'll outline methods to quietly scan and avoid detection by [[Intrusion Detection]] systems and firewalls. First, let's talk about two security devices commonly found on a network. A firewall is a security device or software application designed to filter traffic. A firewall will either allow or deny traffic based on a set of rules. Intrusion detection systems, intrusion prevention systems are security appliances that monitor networks for unusual or suspicious activity. Scans are often described as noisy as they generate a significant amount of traffic. And have a recognizable pattern that can be picked up by intrusion detection systems and firewalls. To avoid being dropped by a firewall or setting off an alarm, the team will most likely conduct scanning activities in stealth mode. Let's talk about some options. Stealthy techniques use scans designed to avoid detection. Techniques include the following, we can use slow scans. Instead of scanning ports or systems rapidly, the scan is spread out over a longer period, making the scan harder to detect.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980&t=95)** Strobe mode quietly checks a few ports at a time. The team can enlist the help of an innocent bystander or zombie and use an idle scan to send packets through the network, making the scan harder to trace. And to discover the details of an internal network that's protected by a firewall, the team can use firewalking, which uses a combination of traceroute and port scanning. We can also manipulate packets. We can use inverse TCP flag scans that include the Xmas tree, FIN, and NULL scans, which are many times harder to detect. We might modify packets by fragmenting, crafting, and randomizing the order of packets to spoof network defenses. The team can also use spoofing and concealing. We might want to spoof the Mac and IP addresses to hide the source of the scan. We can use proxies during scanning, which will enable the team to move through a network without fear of being identified. Anonymizers can also be used during [[Ethical Hacking]] to protect the identity and location of the team. Now, let's test your knowledge. Outline methods to quietly scan and avoid detection by intrusion detection systems and firewalls.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/generating-less-noise?u=76281980&t=192)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Intrusion Detection]] (4), [[Ethical Hacking]] (1)
> **Env Vars:** tcp (1), fin (1), null (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Understanding the idle scan](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=0)** - [Instructor] In order to be totally in stealth mode, the team can use the idle scan. In this segment, we'll learn how the idle scan uses an innocent bystander or zombie to send packets to a target, which makes the scan harder to trace. The idle scan is a clever way to be in total stealth mode. However, the idle scan is more complex than other scans. With an idle scan, we're scanning a target via a third party or zombie host. The first step is to find a suitable zombie. This is done by initiating contact with a potential zombie. If the zombie increments the IP header identification field, then the zombie is a good target candidate for the scan. Let's step through what happens during an idle scan. First, the team will send a TCP SYN-ACK to the zombie on a port that we expect to be closed. Now, this is done in order to obtain the IP header ID. Now, because the zombie is not in a conversation with us, the zombie will send a reset. Once we get the reset, then we'll note the identification field value in the IP header. For example, here we see the value as 27694. Next, we'll send a TCP SYN packet to the target
>
> **[1:41](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=101)** using the zombie's IP address. Now, if the port is open on our target, it will return a SYN-ACK to the zombie. And because the zombie never sent something, it will send a reset and the IP ID will increment by one. If the port is closed on our target, our reset will be sent to the zombie. The zombie will discard the packet and the IP ID will not change. The third step is to repeat the first step and send a SYN-ACK to the zombie and wait for the reset. We'll then check the ID field in the IP header. If the ID field header is incremented by one, we assume that the reset was sent and the target port is closed. If the zombie's IP ID field is incremented by two, we assume that the port at the target is open. Although using simple math in determining whether a target port is open sounds like a great idea in concept, the idle scan is difficult to accomplish for a number of different reasons. Most modern operating systems are immune from being used in this type of attack, so finding a suitable zombie can be difficult. The zombie must truly be idle in that there can't be any other interactions with other machines.
>
> **[3:16](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/understanding-the-idle-scan?u=76281980&t=196)** A stateful firewall between you and your zombie machines will most likely block suspicious SYN-ACK packets without a previous initialized connection. And the last thing is that the IP ID is only mandatory if fragmentation is allowed, and in some cases, the ID field is set at zero. Now let's test your knowledge. Explain how the idle scan uses an innocent bystander or zombie to send packets to a target, which makes the scan harder to trace. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** syn (5), ack (4), tcp (2)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Firewalking the network](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/firewalking-the-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/firewalking-the-network?u=76281980&t=0)** - [Instructor] Many times to gather information about the network, the team will encounter a firewall. In this segment, we'll learn how Firewalking can help discover the details of an internal network that's protected by a firewall. On any network, you'll commonly find security devices that protect and defend the network. In most organizations, a firewall is used as a first line of defense. A firewall is designed to filter traffic and will either allow or deny traffic based on a set of rules. Many times, on an enterprise network, the firewall is built into a router. When scanning the network, the team can use Firewalking to see what traffic can pass through a device. Firewalking creates specially crafted packets to determine the hop count or distance to a target machine. By using a combination of tracer route and port scanning, the team can potentially discover firewalls, routers, and network devices that will prevent a probe from reaching the target. to gather information, Firewalking exploits the time to live value in an IP header and waits for an error message. Let's outline how the time to live value works. Every IP packet that is sent over a network has a time to live value in the header.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/firewalking-the-network?u=76281980&t=96)** This value is decremented by one each router it passes through. When the time to live value reaches zero, the packet is dropped, and an ICMP time exceeded message is returned to the sender. As shown in the graphic, the scanner sends probes out, each with a time to live value that is one more than the previous probe. Eventually, reaching the target. By monitoring the responses, the team can infer which ports the firewall will allow and what ports will be blocked. If no responses received, it means that the packet either made it through the firewall or was dropped by the firewall. For example, I'm here at [Kali.org](https://Kali.org) where we can see an example of some of the responses returned by the Firewalk tool. The team can conduct fire walking in one of several ways. You can use tracer route on a Unix [[Linux]] system, tracer on a [[Windows]] system, or use the Firewalk tool available on Cali Linux. Now, let's test your knowledge, describe how Firewalking can help discover the details of an internal network that's protected by a firewall. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Linux]] (2), [[Windows]] (1)
> **CLI Commands:** find (1)
> **URLs:** [kali.org](https://kali.org) (1)
> **Env Vars:** icmp (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Implementing stealth scans](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=0)** - [Instructor] To avoid being dropped by a firewall or setting off an alarm, the team will most likely conduct scanning in stealth mode. In this segment, we'll outline what makes inverse TCP flag scans harder to detect. There are several stealth scans that we can use to avoid detection. The TCP SYN, or half-open scan is the original stealth scan. However, there are other scans the team can use to avoid detection. Inverse TCP flag scans are designed to circumvent firewall rules and gather information on open ports without fully connecting with the target. The scans are called inverse as they are opposite of how TCP flags are normally set, and include the Christmas tree, FIN, NULL, and Maimon scans. Let's talk about how each one of these works to avoid detection. The Christmas tree scan will set the FIN, PSH, and URG flags in the TCP header, which lights up the packet like a Christmas tree. A FIN scan will send a FIN packet to the target port. A NULL scan won't have any TCP flag set. And with the Maimon scan, the scanner sends a TCP ACK packet with the FIN flag set to the target port. When using inverse TCP flag scans,
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=97)** [[Nmap]] will indicate the state as follows. If there's no response, the port is either open or filtered. If the target returns a reset, the port is closed. If the target returns an ICMP unreachable error, the port is considered to be filtered by a firewall. Here are some things to consider when using these scans. The scans can't always distinguish open ports from filtered ones. For example, if an ICMP destination unreachable error is returned, we know that a port is filtered, but most filters will drop suspicious probes without any response making the ports appear open. Since NMAP cannot be sure which one is the case, it marks any non-responsive ports as open filtered. With a FIN scan, closed ports should send back a reset. However, a [[Windows]] machine will send a reset regardless of the port state, so a Windows machine is not susceptible to this type of scan. In addition, some scans, for example, the Maimon scan won't work on a newer operating system. Because inverse TCP FLAG scans use flags to probe systems in ways that most TCP/IP implementations don't expect, it may be able to stay under the radar
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/implementing-stealth-scans?u=76281980&t=192)** of an [[Intrusion Detection]] system or firewall. However many newer devices are tuned to recognize the signature of these scans. That is of course, if they're properly configured, so it might be worth a try to see if you can move through the network undetected. Now, let's test your knowledge. Describe what makes inverse TCP flag scans using the Christmas tree, FIN, NULL, and Maimon scans harder to detect. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (2), [[Windows]] (2), [[Intrusion Detection]] (1)
> **Env Vars:** tcp (11), fin (7), null (3), nmap (2), icmp (2)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)


### 6. Avoiding Detection

[↑ Back to Table of Contents](#table-of-contents)

#### [Manipulating packets](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=0)** - [Instructor] The goal when scanning is to move through the network quietly and gather information on the target. In this segment, we'll learn a variety of ways to manipulate packets, such as: fragmenting, crafting, and randomizing the order of probes to avoid detection. It's rare to use only one method when scanning. Today, there is a wide variety of scanning techniques available. Packets can be manipulated and used as part of a planned attack to: discover live hosts, determine network topology, detect firewalls, and fingerprint the operating system. Let's talk about some of the ways to manipulate packets. One method is to randomize the order of probes. To make scans less obvious, you can randomize the probes sent out onto the network. When you combine randomizing with slow scanning options, this can make it more difficult for devices to detect scanning activity. The --randomize-hosts option in [[Nmap]] will randomize the order of hosts. This option will shuffle groups of up to 16,384 hosts before scanning. Another option is to use fragmentation. In this case, the idea is to split up the TCP header over several packets to make it harder
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=95)** for packet filters and [[Intrusion Detection]] systems to identify what you're doing. To use fragmentation, use the -f option, which causes the scan, including ping scans, to use tiny fragmented IP packets. Let's take a look. I ran a fragmented scan in Zenmap, and then I ran a capture in [[Wireshark]]. To follow along, grab the capture Frag Scan.pcapng, which you'll find in the Exercise folder. First, I'll run a flow graph so we can view the conversation and how the scan checked the ports. We'll go to [[Statistics]] and then Flow Graph. And here we can see the different ports that are checked: 443, 80, 21, 1720. And there's about 1,000 ports which Zenmap checked. Now I'll close that. Now we'll look at the fragmented packets. I've selected frame two, and it says Fragmented IP protocol. Now we know that there are three here that have been fragmented. And what we'll do is, I'll drop down the IP header, and we'll take a look at the identification field. So here we see identification for all three are the same. Now, keep in mind that this scan will only work if fragmentation is allowed. Finally, let's talk about crafting packets.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/manipulating-packets?u=76281980&t=190)** Now, this involves modifying the packets' content, header, or field values to obtain specific responses or behaviors from the target system. One app you can use is Nping. This allows you to easily customize the values of most fields in common protocols, such as TCP, UDP, ARP, and ICMP. For example, we can craft an ICMP packet by using the following command. Now let's step through what this does. This sets ICMP as the protocol to use. And here, this sets the ICMP type and code. This will set the source and destination IP addresses. And this will set the ICMP identifier of the request packet. And finally, a fun option is where you can modify the data string. Now let's test your knowledge. Outline ways to manipulate packets, such as fragmenting, crafting, and randomizing the order of probes to avoid detection. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Nmap]] (1), [[Intrusion Detection]] (1), [[Wireshark]] (1), [[Statistics]] (1)
> **Env Vars:** icmp (5), tcp (2), udp (1), arp (1)
> **CLI Commands:** make (3), find (1)
> **Analogies:** such as (3), for example (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Spoofing and cloaking](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=0)** - [Instructor] Spoofing is done to conceal the identity of a malicious actor so they can either launch an attack or move through the network undetected. In this segment, we'll review how we can use IP and MAC address spoofing to avoid detection or launch an attack. Address spoofing conceals the identity and location of a malicious actor where the address appears to have come from another machine. Techniques include spoofing an IP address or spoofing a MAC address. First, let's talk about IP address spoofing. An IP address uniquely identifies a host on a network. Spoofing an IP address is achieved by crafting an IP header with a forged source IP address. Now, generally this is done when there is no expectation of receiving a reply, as when the source IP address is spoofed, the message cannot be returned to the sender. When scanning with [[Nmap]], you can use the -D or decoy option. This will then launch an attack using bogus IP addresses instead of the actual address. A malicious actor will commonly use this technique to conceal their true location. If they don't spoof or conceal their IP address somehow, then we'll know exactly the location of the IP address.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=96)** Let's take a look. If I'm receiving traffic from this IP address, I can go into Search, and then once there, we can see the geolocation and information about that IP address. We see that it belongs to [[Google]], and if we scroll down, we can see information listing Google's addresses and the geolocation. Now let's talk about MAC address spoofing. On a [[Local Area Network (LAN)|local area network]], a device is identified by its MAC address. MAC address spoofing changes or spoofs the MAC address on a [[NIC|network interface card]] to someone else's MAC address. This will allow an attacker to intercept traffic to launch a man-in-the-middle attack. Let's see how this works. Here, you see a small network with several devices. On the left, you see the IP address and MAC address of the attacker. What you see crossed off was the attacker's MAC address, but the attacker has spoofed the MAC address to appear to be the same as Host A. When traffic is delivered, Host A and the attacker will receive the data. There are a number of different tools available to change your MAC address and a number of different software [[Microsoft Products|products]]. I'm here at this website, where you can see one example of a MAC address changer.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/spoofing-and-cloaking?u=76281980&t=192)** However, if you do a search, you will come up with many different options to change your MAC address. Now, let's test your knowledge. Review how we can use IP and MAC address spoofing to avoid detection or launch an attack. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[Nmap]] (1), [[Local Area Network (LAN)|Local area network]] (1), [[NIC|Network interface card]] (1), [[Microsoft Products|Products]] (1)
> **Env Vars:** mac (14)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Employing proxies](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-proxies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-proxies?u=76281980&t=0)** - [Narrator] Using proxies during scanning enables the team to move through a network without fear of being identified. In this segment, we'll outline how proxy chaining can help conceal the team's IP address and location. A proxy is someone who acts on your behalf. For example, if you are in a legal battle, a lawyer would be your proxy, so you would not have to deal directly with the other entity. Malicious actors use proxy servers to conceal their existence. Proxy chaining uses a chain of proxy servers in a series to route network traffic. Encrypting the traffic will conceal the contents of the packets. The servers use Socket Secure, or SOCKS5, which provides the necessary authentication, so that only authorized users may access a server. Proxy chaining is used to conceal a malicious actor's location and it makes it more difficult to trace the origin of the traffic. The team can also use proxy chaining when scanning to stay anonymous. There are several tools available, such as Proxy Switcher, Proxifier, and Proxy Workbench. On [[Kali Linux]], you can use the ProxyChains utility, which will redirect connections through proxy servers.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/employing-proxies?u=76281980&t=95)** Most of the time, you'll need to complete a few steps. For example, install Tor along with ProxyChains, and then once done, you would issue a command, such as this one, which will use ProxyChains to scan the target and will output the following. Now, let's test your knowledge. Outline how proxy chaining can help conceal the team's IP address and location. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Kali Linux]] (1)
> **Analogies:** for example (2), such as (2)
> **Prerequisites:** you'll need (1), install (1)
> **Env Vars:** socks5 (1)
> **Speakers:** - [narrator] (1)

#### [Leveraging anonymizers](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-anonymizers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-anonymizers?u=76281980&t=0)** - [Instructor] During an [[Ethical Hacking]] exercise, there are several tools that can be used to protect the identity and location of the team. In this segment, we'll describe how anonymizers and censorship circumvention tools can help prevent exposure and gain access to restricted or blocked sites. First, let's outline how the tools work. Anonymizers are tools or services that are designed to provide [[Privacy]] when moving through a network. Censorship circumvention uses various techniques, tools, or strategies to allow an individual to bypass or evade restricted sites. One way to stay anonymous when moving through the network is by using The Onion [[Routing]]. The Onion Routing, or Tor, is an open framework that encrypts and moves traffic within the Tor network. Tor enables anonymous browsing, which allows participants to browse freely without fear of being tracked or having anyone identify their location. Tor builds a circuit where each node, or Onion Router, in its path knows its neighbors but no one else. Once in Tor, a path is chosen through the network. You can learn more and download the browser here on the Tor website.
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/leveraging-anonymizers?u=76281980&t=93)** And I'll scroll down so you can see a lot of the features that Tor offers. Two other tools the team can use are Alkasir and Tails. Alkasir is a censorship circumvention tool designed to help users access blocked or censored web pages and content on the internet. Alkasir employs various techniques, including: proxy servers, tunneling, and encryption. Tails is a live operating system used for secure and anonymous web browsing and communication by routing traffic through the Tor network. Tails doesn't leave any traces of activity or save any data locally, as it runs entirely from a USB drive. Now let's test your knowledge. Describe how anonymizers and censorship circumvention tools help prevent exposure and gain access to restricted or blocked sites. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (3), [[Ethical Hacking]] (1), [[Privacy]] (1)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** node (1)
> **Env Vars:** usb (1)
> **UI Navigation:** scroll down (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)


### 7. Counteracting Scanning

[↑ Back to Table of Contents](#table-of-contents)

#### [Preventing scanning](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=0)** - [Instructor] Scanning is an information gathering method that identifies services and operating systems in use. In this segment, we'll outline methods to defend your network against unauthorized scanning. Scanning is a popular information gathering method. Scanning can identify which ports are open and responding, along with the services that are running. Scanning records how they respond to the queries to gather information on the target. Once we have the information, the next step is to determine if any of the services are vulnerable. This information can then be used to launch an attack. Because the information may be used as a precursor to an attack, methods should be in place to prevent unauthorized scanning attempts. Port scanning has an identifiable signature. A firewall or host will respond to a port scan in one of three ways. Open and listening. Open means the host indicates a service is listening and will respond. Closed means the host responds by denying connections to the port, meaning, I'm alive but I'm not talking to you. No reply, well, in this case, the host is filtered, blocked, or quietly dropped the request and is in stealth mode. Meaning, if you can't see me, you can't attack me.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=96)** Some next generation firewalls and intrusion prevention systems use adaptive behavior and that they block ports if a suspected port scan is in play. In addition, alerts and alarms can be set to notify if they detect multiple connection requests on all ports from a single host. Scanning is easy to do and most devices will experience a scan at some point. It's ultimately a business's responsibility to protect against port scans. Testing your own system is always a good idea. For example, I'm in Zenmap and I ran a scan. Now, we'll go to the ports and we'll see which ones are open. And once you identify any unnecessary ports that are open, you can disable or block the ports. You'll also want to tune your security devices. On routers and firewalls, implement rate limiting to slow down the scanning process, which can discourage attackers and give the admin more time to respond. On switches, use port security features to limit the number of Mac addresses allowed on a specific port. This can prevent unauthorized devices from connecting to the network. And other suggestions include, use firewalls to block unnecessary incoming and outgoing traffic.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/preventing-scanning?u=76281980&t=190)** Tune [[Intrusion Detection]] prevention systems to detect suspicious scanning activities and take action such as blocking the source IP or alerting administrators. Properly segment the network using routers and VLANs to provide isolation and protection of the sub-networks. And because vulnerabilities and outdated software can sometimes be detected with network scans, you should regularly update and patch, keep all systems, software and devices updated with the latest patches. Now, let's test your knowledge. Outline methods to defend your network against unauthorized scanning. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Intrusion Detection]] (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (1), such as (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Detecting spoofing](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=0)** - [Instructor] Spoofing is done to conceal the identity of a malicious actor. In this segment, we'll review best practice methods to detect spoofing and reduce the risk of an attack. First, let's talk about spoofing. A malicious actor will spoof their IP or MAC address to conceal their identity and location, and any traffic received will appear to have come from another machine. Spoofing is dangerous, as many times, it's part of an attack. If there is a suspicion that a machine may be spoofing a communication, you can use one of the following methods. One method is using direct Time to Live probes. The Time to Live, or hop limit, represents the number of hops or routers the packet can take during its journey. A spoofed packet will have a Time to Live value set by the attacker, and if it differs significantly from the expected Time to Live value for packets to that destination, it's a good indication of spoofing. In this method, a Time to Live probe is sent to the actual host. We then compare the Time to Live with the suspect packet. If the Time to Live in the reply is not the same as the packet being checked, it's a strong indication that the packet
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=94)** is coming from a spoofed machine. Now, this technique is successful when the attacker is in a different subnet from the victim, and that's because, as it passes through a router, the time to live value will change. Another method is using the IP identification number. Now, in every IP header, there's an ID field, and for the most part, the ID field values will be predictable. Let's take a look. I'm in [[Wireshark]], and if you'd like to follow along, open the file IP ID.pcapng found in the exercise folder. Now, when you're in here, there's only three packets, and they're all part of the same communication stream going in one direction. So, what I've done is drop down the IP header, and here we can take a look at the identification field. Here, it is 3844, 3845, and 3846. When using this method, a probe is sent to the actual host, and then we compare the IP ID with the suspect packet. If the IP ID and the reply are not near the value of the packet being checked, it's a strong indication that the traffic is being spoofed. Now, this technique is successful even if the attacker is in the same subnet. Now, this technique monitors the window size field
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=188)** in a TCP header. So, how does this work? Well, the TCP header includes a window size field which is used to communicate the maximum amount of data the recipient can currently receive. The value changes as the receiving host is able to accept more data, and will communicate a new window size with a [[Windows]] update message. A zero window size means that the host can no longer receive traffic. Now, if a host advertises a zero window size, the sender should not send any more data. Therefore, one clue to detect spoofing is to return a crafted packet advertising a zero window size. The attacker sending the spoofed TCP packets will not receive the target zero window size update and won't be responsive to change in the congestion window size. When the target continues to receive traffic after advertising a zero window, this is a strong indication that the packets are spoofed. So, now let's talk about best practices to reduce the risk from a spoofed IP address. You should use cryptographic authentication methods, such as IPsec. Monitor networks for atypical activity, for example, source IP addresses that don't match those on the organization's network.
>
> **[4:43](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/detecting-spoofing?u=76281980&t=283)** This could be indicative of a malicious insider launching IP spoofing attacks. And you'll also want to monitor for bogons, or bogus IP addresses on the network. And to prevent MAC address spoofing, you can do the following. Use ARP monitoring software. This checks for duplicate MAC addresses. And for switch security, you can employ dynamic ARP inspection. Now, let's test your knowledge. Review best practice methods to detect spoofing and reduce the risk of an attack. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (1), [[Windows]] (1)
> **Env Vars:** mac (3), tcp (3), arp (2)
> **Definitions:** is a  (2), means that (1)
> **Analogies:** such as (1), for example (1)
> **Best Practices:** best practice (2)
> **UI Navigation:** open the (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Draw a network diagram](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-draw-a-network-diagram?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/challenge-draw-a-network-diagram?u=76281980&t=0)** - [Narrator] Let's do a challenge. But first, a little background information. During an [[Ethical Hacking]] exercise, it's helpful to have a logical drawing of the network. In this challenge, we'll create a network drawing. You can use any tool such as Visio, [[Microsoft PowerPoint|PowerPoint]], or an online solution. Now here's the simple network drawing. Over on the right-hand side, you can see what I would suggest as far as components, but you can always add more. When you're done, I have two questions for you to answer. What are the ways you can use this network drawing, and what's the difference between a logical and a physical network drawing? This challenge should take you about 15 minutes. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (1), [[Microsoft PowerPoint|Powerpoint]] (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Draw a network diagram](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=0)** - Okay, now let's check our work. I wanted you to draw a simple network using some type of tool. In my case, I found one online called Glyphy. Now, once I got in here, I signed up for a free trial, and as you can see, there are 13 days left in my trial. Now, this will allow me to show you how to do a simple drawing. Now, as you can see, I've already added some of the components, internet, cable modem, router firewall, and switch. I've also added a connecting tool right here, and we do need to add a couple more components. Now in tools such as Glyphy, they have a number of library items that you can search for. For example, I searched for server and it came up with those results. Now, once you begin compiling your drawing, you'll see a little library of most used objects. And in this case, I wanted to add a laptop, and I'll just pull this over here. And it allows me to enter text and I'm going to put laptop. And then I'll click outside, but now go back in and modify the text, so it is a larger font. Here I'll add a computer, increase the font,
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=97)** and I'll modify the size, which you can do pretty easily by just shrinking it down. And the last thing is a server.
>
> **[1:55](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=115)** Again, I'll modify the size. All right, so now all of our devices are connected and we have a simple network. I also had two questions for you, and I'll scroll down and we'll answer the two questions. What are ways you can use a network drawing? Well, now there's lots of ways you could use a network drawing. Of course, you might just want to visualize the data flow, but you also might want to see the attack vectors. And you can use this to educate others as to the complexity of the network. And it's also good for troubleshooting. Now the second question is, what's the difference between a logical and a physical drawing? Well, a logical network drawing shows the data flow. Now, this is something that if you wanted to add a device, you might want to look for potential bottlenecks. And it's important that when you're doing an assessment as to where trouble may have occurred. Now, a physical network drawing is a little different as it will show the physical layout of the devices in your organization. Now, we use a physical drawing for things such as when you're experiencing electromagnetic interference and you want to pinpoint where that might be, you can then see the devices and which ones are close to a big piece of machinery, which could cause the interference. So both logical and physical network drawings
>
> **[3:29](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/solution-draw-a-network-diagram?u=76281980&t=209)** are valuable tools. So that's it, and I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **Analogies:** such as (1), for example (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - okay (1)
> **Non-Speech:** (upbeat music) (1)

#### [Next steps](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-scanning-networks-20213513/next-steps?u=76281980&t=0)** - [Lisa] Thank you for watching! [[Ethical Hacking]]: Scanning. In this course, we explored scanning techniques and ways to obtain information from the target system, such as specially crafted packets, TCP flags, UDP scans, and ping sweeps. I described methods to discover hosts, operating systems, and listening services on a network, and outlined several techniques to avoid detection. We summarized with learning how to counteract network spoofing and scanning. If you're interested in learning more, please check out the other courses in our library. New content is added all the time. If you're interested in learning more about packet analysis, check out my learning path, Improve Your [[Wireshark]] Skills. If you're ready to continue your journey as an ethical hacker, be sure to watch the other courses in the series. And you might want to see what my colleague Malcolm Shore has for you on his homepage. Keep learning. I hope to see you again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (1), [[Wireshark]] (1)
> **Env Vars:** tcp (1), udp (1)
> **Analogies:** such as (1)
> **Speakers:** - [lisa] (1)


## Instructor

- [[Lisa Bock]]

## Resources

- Exercise files available

## Skills Covered

- Network Monitoring Tools
- Ethical Hacking

## Path Context

### In [[Become an Ethical Hacker]]
← [[Ethical Hacking- Footprinting and Reconnaissance]] | **3 of 19** | [[Ethical Hacking- Enumeration]] →

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