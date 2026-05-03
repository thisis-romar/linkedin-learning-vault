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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Ethical%20Hacking-%20Sniffers.md)

![Ethical Hacking: Sniffers](https://media.licdn.com/dms/image/v2/D4D0DAQEEMLLSm2QEAA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1682017851753?e=2147483647&amp;v=beta&amp;t=FGT0JjzwlAgFFURuYYsXzqnsq46-k8GVCWWalH2MYpc)

# Ethical Hacking: Sniffers

> Ethical hacking involves testing to see if an organization's network is vulnerable to outside attacks. It's one of the most desired stills for any IT security professional. In this course—which maps to the Certified Ethical Hacker v12 certification—Lisa Bock provides an overview of what a sniffer is, and how hackers use it to intercept network traffic. Lisa gives a demonstration of what a MAC atta

> [LinkedIn Learning](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733) | 2h 10m | Intermediate | 28K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Visualizing network traffic](#visualizing-network-traffic)
  - [What you should know](#what-you-should-know)
  - [Hacking ethically](#hacking-ethically)
- [**1. Sniffing Overview**](#1-sniffing-overview) (6 videos)
  - [Sniffing network traffic](#sniffing-network-traffic)
  - [Using other sniffing tools](#using-other-sniffing-tools)
  - [Dissecting the OSI model](#dissecting-the-osi-model)
  - [Comparing passive and active attacks](#comparing-passive-and-active-attacks)
  - [Using Wireshark](#using-wireshark)
  - [Tapping into the data stream](#tapping-into-the-data-stream)
- [**2. Spoofing Attacks**](#2-spoofing-attacks) (6 videos)
  - [Launching a macof attack](#launching-a-macof-attack)
  - [Exploiting Layer 2 protocols](#exploiting-layer-2-protocols)
  - [Spoofing a MAC address](#spoofing-a-mac-address)
  - [Defending against MAC attacks](#defending-against-mac-attacks)
  - [VLAN hopping attack](#vlan-hopping-attack)
  - [Spoofing IRDP](#spoofing-irdp)
- [**3. Dissecting DHCP**](#3-dissecting-dhcp) (6 videos)
  - [Investigating DHCP](#investigating-dhcp)
  - [Depleting the DHCP pool](#depleting-the-dhcp-pool)
  - [Deploying a rogue DHCP server](#deploying-a-rogue-dhcp-server)
  - [Defending against DHCP attacks](#defending-against-dhcp-attacks)
  - [Challenge: Identifying key elements in a capture](#challenge-identifying-key-elements-in-a-capture)
  - [Solution: Identifying key elements in a capture](#solution-identifying-key-elements-in-a-capture)
- [**4. Reviewing ARP**](#4-reviewing-arp) (4 videos)
  - [Describing ARP](#describing-arp)
  - [Exploring ARP spoofing tools](#exploring-arp-spoofing-tools)
  - [Detecting ARP spoofing](#detecting-arp-spoofing)
  - [Defending against ARP attacks](#defending-against-arp-attacks)
- [**5. Attacking DNS**](#5-attacking-dns) (6 videos)
  - [Summarizing DNS](#summarizing-dns)
  - [Caching and forgery](#caching-and-forgery)
  - [Poisoning DNS](#poisoning-dns)
  - [Guarding against DNS attacks](#guarding-against-dns-attacks)
  - [Challenge: Investigate a DNS header](#challenge-investigate-a-dns-header)
  - [Solution: Investigate a DNS header](#solution-investigate-a-dns-header)
- [**6. Sniffing Tools and Techniques**](#6-sniffing-tools-and-techniques) (6 videos)
  - [Capturing images](#capturing-images)
  - [Examining HTTP headers and URLs](#examining-http-headers-and-urls)
  - [Scooping data with TShark](#scooping-data-with-tshark)
  - [Sniffing tools for mobile devices](#sniffing-tools-for-mobile-devices)
  - [Investigating Omnipeek](#investigating-omnipeek)
  - [Guarding against sniffing](#guarding-against-sniffing)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Visualizing network traffic](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/visualizing-network-traffic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/visualizing-network-traffic?u=76281980&t=0)** - [Lisa] Did you know that being able to visualize what's on a network is a powerful skill in the ethical hackers arsenal? Sniffing network traffic can provide valuable insights on the structure, security vulnerabilities, and potential attack paths. In this course, I'll cover concepts such as spoofing attacks, along with learning what we can glean from protocols such as ARP, DNS and [[DHCP]]. All outline how we can use [[Wireshark]], Cloudshark and Omnipeek to gather and analyze traffic. Hello, my name is Lisa Bock and I'm a security ambassador. Are you ready to see what's on your network? Then let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (1), [[Wireshark]] (1)
> **Env Vars:** arp (1), dns (1), dhcp (1)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Speakers:** - [lisa] (1)

#### [What you should know](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/what-you-should-know?u=76281980&t=0)** - [Instructor] This course is a basic to intermediate course intended for security professionals, network administrators, managers, students, teachers, or anyone with an interest in learning more about the sniffing phase of [[Ethical Hacking]]. I'll cover a lot of information, but I have provided some files for you. Go to the Exercise File on the welcome screen where you will find files relevant to this course. One is a challenge and links document. Now, during each segment, I'll identify a challenge using the following icon along with a question from the video. Use the document to write out responses to challenges that I cover throughout the course. And so that you can follow along, I've also included the links to the internet resources that I reference. I am super excited to bring you this course, so sharpen your pencil, and let's start learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)

#### [Hacking ethically](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/hacking-ethically?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/hacking-ethically?u=76281980&t=0)** - [Instructor] The goal of the [[Ethical Hacking]] series is to help system administrators understand how to better protect the assets they manage. I'll focus on the concepts of ethical hacking in order to explain why it's essential in any organization's overall security framework. The tests and procedures I explore should only be executed on your own system or a system that you are charged with protecting. If ownership and responsibility lie with another party, be sure to get clear written instructions with explicit permission to conduct ethical hacking activities. Do not investigate individuals, websites, servers, or conduct any illegal activities on any system you do not have permission to analyze.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Ethical Hacking]] (3)
> **Speakers:** - [instructor] (1)


### 1. Sniffing Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [Sniffing network traffic](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=0)** - [Instructor] Sniffing the network or packet analysis is a valuable skill for the ethical hacker and should be part of every network administrator's skillset. Instead of scanning an individual system, we now look at traffic that is flowing across the network. Devices such as [[Intrusion Detection]] and prevention systems monitor the traffic for threats and allowable protocols. However, network administrators should spend a few minutes every day and monitor the traffic. This will give us a great deal of information on the status of the network. Sniffing traffic can gather network [[Statistics]] and monitor protocol use. Sniffing can help detect network misuse. For example, are there any protocols that should not be on your network, such as BitTorrent or unauthorized instant messaging? Packet analysis can run in real time or you can capture traffic for later analysis such as baselining traffic at various points in the network. So that you understand the process, Let's talk about the phases of packet analysis. Gather, decode, display, and analyze. Let's go through each phase, starting with gather. After you choose an interface to listen on and place it in promiscuous mode, the interface scoops up network traffic. Now keep in mind that traffic enters the [[NIC|network interface card]] in binary form, one frame at a time.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=97)** Now decode is the next phase, and this is where the packet analysis software will convert the bits into readable form for analysis. Now let's take a look at the heart of where the decoding takes place. It's called EPAN. [[Wireshark]] was Ethereal before 2006, but the main core is still the same. In this illustration, we see the Ethereal Packet Analyzer or EPAN. This is the packet analyzing engine for Wireshark. Within EPAN, there are several components. The protocol tree, dissectors, dissector plugins, along with the display filters. We then move to display. Now in Wireshark and many other packet analysis tools, there are many options to enhance your graphical experience by displaying the traffic in readable form. Once displayed, we then do the analysis. When we look at it, we're asking ourselves, is this traffic normal? Do we see any unusual TCP flags or excessive duplicate acknowledgements? You might want to examine for malware signatures or traffic in clear text, or router advertisements that could pose a threat. Now let's test your knowledge. Sniffing and analyzing traffic on a network will reveal a great deal of information for the ethical hacker. Describe the phases of packet analysis.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-network-traffic?u=76281980&t=192)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (3), [[Intrusion Detection]] (1), [[Statistics]] (1), [[NIC|Network interface card]] (1)
> **Env Vars:** epan (3), tcp (1)
> **Analogies:** such as (3), for example (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Using other sniffing tools](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-other-sniffing-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-other-sniffing-tools?u=76281980&t=0)** - [Instructor] [[Wireshark]] is a popular sniffing tool, but there are others. In this segment, we'll discuss some options, along with the implications of sniffing network traffic. [[Linux]] has a couple of commonly available sniffers. Let's talk about a few of these. I'm at the homepage of TCPDUMP, a powerful command line packet analyzer which ships by default on many Linux distributions. Another tool that you might run into is Ettercap, a multipurpose sniffer that is specifically designed for switched LANs. And Dsniff can sniff a variety of objects on a network as the package contains several tools. Now there are also [[Hardware]] protocol analyzers that are specialized devices used to monitor and analyze communication protocols at the hardware level. They typically connect to a computer or network using a full duplex tap, and capture data as it passes through the network. Now it's no secret that today there are several ways to sniff network traffic. However you need to recognize the potential implications. One implication is the potential for a security breach. If an unauthorized individual gains access to a network and begins sniffing network traffic, they can potentially capture sensitive information. Another implication of sniffing network traffic
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-other-sniffing-tools?u=76281980&t=96)** is the potential for legal issues. Many countries have laws in place that prohibit unauthorized access to a computer system or network. And sniffing network traffic without permission could potentially be considered a violation of these laws. Now two concepts you'll want to be familiar with is lawful interception versus wiretapping. Lawful interception is the legal process of intercepting and collecting communications to gather evidence for criminal investigations or national security purposes. Wiretapping is intercepting and listening to private communications, commonly without the knowledge or consent of the parties involved. It's commonly used to gather evidence in a criminal investigation, but it can be used in an illegal manner as well, such as a precursor to an attack. So prior to sniffing network traffic, make sure that you have the proper authorization and are following any applicable laws and regulations. Now let's test your knowledge. Discuss hardware protocol analyzers and other tools, along with the implications of sniffing network traffic. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (3), [[Linux]] (2), [[Wireshark]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** tcpdump (1)
> **Tools:** command line (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Dissecting the OSI model](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=0)** - [Instructor] Sniffing or packet analysis requires a solid understanding of encapsulation along with protocols such as TCP, IP, and DNS. The seven-layer OSI model standardizes the function of [[Data Transformation]] by breaking it down into layers, and in particular, outlines how the [[NIC|network interface card]] encapsulates the data as it's prepared for transport on the network. In this segment, I'll review each layer and describe the main function. I'll outline some common protocols in that layer, and state the protocol data unit, which defines what shape the data is in in that particular layer. We'll start at layer seven, which is the application layer. Now, this is where we initiate contact with the network. Within this layer, we see the various protocols such as HTTP, FTP, or SMTP. The Protocol Data unit at this layer is simply data. Layer six is the presentation layer, which has a couple of jobs. One is formatting. Data has to be in the proper format to be presented to the application. For example, if you get a jpeg, that's an image, and the presentation layer is responsible for formatting it correctly so that your browser can render it as an image.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=94)** In addition, there's also optional encryption and compression. At this layer, we see that the protocol data unit is still simply data. Layer five is the session layer, which is responsible for setting up, maintaining, and tearing down a session. Now, in order for a session to take place, though, I have to have the correct IP address, so DNS or [[Domain Name System (DNS)|domain name system]] works in this layer. The protocol data unit at this layer is still data. Layer four is the transport layer, which is where the encapsulation process begins. The transport layer is responsible for transportation of data by using either a connection-oriented protocol such TCP, or a connectionless protocol such as UDP. At this layer, the protocol data unit is a segment, and at this layer, we add a port address, which is associated with a specific application. For example, hypertext transport protocol or HTTP uses port 80. Layer three is the network layer, which is responsible for addressing and [[Routing]]. Now, there are three main protocols in this layer, the internet protocol, address resolution protocol, and internet control message protocol.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=188)** But here we see ARP that is right underneath layer three. ARP does not have an IP header, but it does a resolution of an IP address to a MAC address, and that's why I've placed it in between layer three and layer two. At this layer, the protocol data unit is a packet and the address at this layer is the IP address. In this layer, the header holds a source and destination IP address. Layer two is the data link layer, which is primarily concerned with proper frame formation. The protocol data unit at this layer is a frame. At this point, the header includes the source and destination MAC or physical address. Layer one is the physical layer. This is where binary transmission takes place. Now, transmission is dependent on the medium. If it's over copper, it's a pulse of electricity, if it's over fiber, it's a pulse of light, and if it's over wireless, it's a radio wave. The protocol data unit at this layer is simply bits. Next, let's build out a frame. Now, we're going to start with the data, such as a webpage request. Now, next you have your TCP or UDP header, and this is your transport layer header, which is a segment,
>
> **[4:42](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/dissecting-the-osi-model?u=76281980&t=282)** and this will include a port address. Next, we need an IP header. Now, this is a packet, and it includes an IP address. Frame formation completes by adding a frame header. Now, this is called a frame, and it includes a MAC address. At the end of the frame is a trailer and that includes the frame check sequence. Now here we can see the OSI model in [[Wireshark]], and this roughly translates to the OSI model, and here we can see the protocol data units, frame, packet, segment, and data. Now let's test your knowledge. It's important to understand the OSI model because the encapsulation process is evident in Wireshark, and understanding each of the layers, the protocol data unit, and the addressing will help you to analyze traffic better. For your challenge, complete the table on the OSI model. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (2), [[Data Transformation]] (1), [[NIC|Network interface card]] (1), [[Domain Name System (DNS)|Domain name system]] (1), [[Routing]] (1)
> **Env Vars:** osi (5), tcp (3), mac (3), dns (2), http (2)
> **Definitions:** is a  (6), is called (1)
> **Analogies:** such as (4), for example (2)
> **Ports:** port 80 (1)
> **Speakers:** - [instructor] (1)

#### [Comparing passive and active attacks](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=0)** - [Instructor] On any network, a malicious actor can launch a passive or an active attack. In this segment, we'll compare the difference between the two and then list ways to monitor and defend against attacks. An attack can be against any of the security services. Those include confidentiality, which is protecting data against unauthorized disclosure. For example, in a medical facility, we ensure confidentiality by preventing unauthorized individuals from looking at patient information. Integrity is protecting data from unauthorized modification. For example, someone could change his or her salary from $12 an hour to $20 an hour. This would be a violation of integrity. Availability is ensuring data and services are available to authorized users. A denial of service attack locks out legitimate users and is an attack against availability. Authentication is assurance that the communicating entity is who they say they are. By verifying the identity of a user or a device. For example, on a network we want to be able to provide authentication amongst routers when updating the [[Routing]] tables. Now, let's compare active and passive attacks. An active attack is when the attacker tries to break
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=97)** into a secured system and possibly alter the integrity of the system by stealing or modifying information or introduce malicious code such as viruses, worms or a Trojan horse. Active attacks include denial of service, buffer overflow and password attacks. Passive attacks include something that you wouldn't think is dangerous, such as eavesdropping, traffic analysis or sniffing, and this is hard to detect. Someone may be monitoring transmissions and possibly capturing authentication information such as usernames and passwords or router advertisements. This can result in the disclosure of information to an attacker without the consent or knowledge of the user. Passive attacks also include a more aggressive form of an attack called a reconnaissance exercise. In this case, the attacker is seeking to find out information about the network by using a ping scan or a port scan. Let's talk about the difference between these two scans. A ping scan pings a range of IP addresses to see which hosts will respond and are alive. After the attacker determines which ones are alive in responding, the attacker will then do a port scan, which is used to discover the services that are running
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/comparing-passive-and-active-attacks?u=76281980&t=192)** on the target machine. The malicious actor can then plan an attack on any vulnerable services that they find. We know that there are many potential attacks, but there are methods of defense. We can use encryption. Now by using encryption, if someone were to capture the data they couldn't read it unless they had the key. We use policies such as acceptable use and password policies. Physical controls are the most overlooked form of security but here the controls include things such as locks and smart cards. And device security, for example, use [[Intrusion Detection]] systems to monitor for ping sweeps and port scans along with firewalls to block malicious traffic. Now let's test your knowledge. On any network a malicious actor can launch a passive and or active attack. Compare the difference between the two and list ways to monitor and defend against attacks. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (1), [[Intrusion Detection]] (1)
> **Analogies:** for example (4), such as (3)
> **CLI Commands:** find (2)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Using Wireshark](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=0)** - [Instructor] [[Wireshark]] is an open source tool with a rich graphical user interface and many built-in features. In this segment, we'll review key menu choices along with comparing the difference between capture and display filters. Now I'm in Wireshark and I've opened up a capture. If you'd like to follow along I found bigFlows.pcap at this website. Now I've opened it up in Wireshark and it is a large capture, but what's great about it is it has a variety of different protocols in use. So what I just want to show you is I'm going to explore some common menu choices and then we'll take a look at filtering traffic. So let's take a look here. We'll start with file. Now file allows file related tasks such as open, save, and print. Edit is where you can edit the capture file and filter packets along with add comments. View allows you to control the appearance of the packet list and other parts of the interface. And [[Statistics]], well, this menu provides access to the various statistics about the capture file. Now, you should get familiar with those menu choices 'cause that's holding all of the great features of Wireshark. But now when you are working with Wireshark you can use capture and display filters. Now one important thing to know is that they are different. Let's compare the two.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=96)** A display filter is used during an active capture or even on a pre-captured packet. Now when you're working with display filters we can put a display filter up here or we could use the shortcut. So let's use a shortcut. I'm working with a packet capture and here on my frame 194 and we see that destination port and the source port. Well, what if I just wanted to filter on the source port? I'll right click and here we can see apply as a filter. Now if I say selected it will put it up there and it will run it. If I say not selected it will mean don't select any of those packets. Now prepare as a filter is selected, but it won't run it. It'll just pop it up there and then you have to run it. Now I'm going to clear that. Now what happens when I clear the filter, it will reset and it is a large capture, so it'll take a few seconds. But what if I want to go to a specific protocol? Now once I'm at the display filter this is the bookmarks and it's a blue flag. I'll just drop that down. And here we can see some built-in display filters. Well, I'll just type in DNS because what I want to do is just look for DNS traffic. I'll type DNS, D N S, and what happens is Wireshark tries to help you meaning if it's red, it means that it won't work. Green means it's good, and yellow means go ahead and try it.
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=193)** It might work, it might not work. So when I started to type, you will see that it tries to help you by offering other suggestions. Now, I typed DNS with a lowercase DNS but what if I used an uppercase DNS? Let's try it. D N S. Well the background is red and that means it won't work. Meaning every display filter has to start with a lowercase. So we'll do DNS again and then we'll press enter and that will run the filter. Now while I'm capturing traffic I'll be able to see all the traffic that's happening, but if I filter, it just will filter on that specific filter. But I have the [[Representational State Transfer (REST)|rest]] of the capture with me and that's the power of using a display filter. Now I'm going to close this but I want to also show you a capture filter. Now a capture filter is going to be different and that it's going to be applied prior to capture and it's only going to capture what you filter and nothing else. All right, so we go to capture and look at our options here. And here I see my interface [[Wi-Fi|WiFi]]. Now down below this is your capture filter and we'll see that there's some choices when I go to the bookmarks. And here we can see some of the options that I have. But if I want to type DNS again, I'll type DNS, D N S. Oh hmm, it's turned red.
>
> **[4:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=288)** Well, it's again, because the display filter is different than the capture filter. The capture engine uses Berkeley Packet Filters. So we need to change this. I'll back this off here and in this case what we need to do and you can take a look at the bookmarks 'cause sometimes it helps you. So for example, there's DNS, not DNS, not Port 53. Let's take off not. Port 53. Now I'm going to start the capture, and once I start that I need to go generate some traffic. So a good site to do that is ESPN and lots of traffic, lots of websites on ESPN. And give it a minute and then I'll go back. And here we see my traffic from ESPN and I can stop that. Now, you can only imagine that I probably captured a little bit more data but now I just have DNS traffic, nothing else. And what happens is if there are other indicators, there's other indications of problem in that capture I wouldn't know because I've simply filtered on DNS So why I would usually suggest unless you are trying to save resources is just to use a display filter. But again, it will really depend
>
> **[6:19](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/using-wireshark?u=76281980&t=379)** on what you're trying to do. But another thing is once you're done go back to capture and then to options. And then clear that filter. And I'll start it again. Don't save it. But you want to remove that filter because it will stay in there until you remove it and it will interfere with capturing traffic. Now let's test your knowledge. When sniffing network traffic it's common to use Wireshark. Review key menu choices in the Wireshark interface and compare the difference between capture and display filters. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (8), [[Statistics]] (2), [[Representational State Transfer (REST)|Rest]] (1), [[Wi-Fi|Wifi]] (1)
> **Env Vars:** dns (13), espn (3)
> **Definitions:** is a  (2), is an  (1), means that (1)
> **UI Navigation:** go to (3)
> **Analogies:** such as (1), for example (1), imagine (1)
> **Ports:** port 53 (2)
> **Code Identifiers:** bigflows (1)
> **Cross-References:** go back to (1)

#### [Tapping into the data stream](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=0)** - [Instructor] When sniffing traffic, there are various devices and methods to tap into the data stream. In this video, we'll compare methods administrators use to sniff traffic, along with attacks that can allow a malicious actor to see all traffic on a switched network. Tapping into the data stream and what you will see will depend on the network architecture. As we see in this complex graphic, we can tap into many areas of the network. When tapping into the network, you should be aware of a few things. A wireless access point will act like a hub, which will allow you to see all of the traffic. If you're tapping into a wired network, you will most likely tap into a switch, and you will see only your own traffic. In order to see traffic destined to a specific device, network administrators use port mirroring or SPAN, which is Switch Port Analysis. For example, you can mirror the traffic going to a server and back to your laptop for analysis. Another option is that you could use a full-duplex tap in line with the traffic. However, you will most likely need a special adapter. When conducting [[Penetration Testing]], an ethical hacker can use various attacks to visualize traffic on a switched network more effectively. Let's talk about a couple of these.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=94)** One attack is ARP spoofing, which poisons the ARP cache. Now, the first thing we need to understand is that ARP is stateless. An ARP reply can be sent even if there's no request, and it will be accepted. So when sniffing traffic if you spoof the gateway's MAC address you poison the cache, and all traffic is sent to the spoof machine instead of the gateway. ARP spoofing can be accomplished using arpspoof, a tool that comes with dsniff. Using the following commands will help you achieve this. Here we enable IP forwarding on your host so that traffic goes through your device. Here we'll tell the victim's host that my MAC address is the one that belongs to the gateway. And here we say spoof the gateway to believe that we are the victim. Another attack that allows us to visualize traffic on a switched network is a macof attack. Now, how does this work? Well, a switch's content-addressable memory, or CAM table, as we see on the right, maps the MAC address of a device to the physical switch port. The CAM table helps data move more efficiently on the LAN by sending data only to the proper destination and nowhere else. A macof attack floods the CAM table so that the switch really has no way of knowing where to send the data.
>
> **[3:09](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/tapping-into-the-data-stream?u=76281980&t=189)** At that point, sniffing is easily accomplished, as the switch will enter a fail-open mode and start acting like a hub and send traffic out to all ports. Now let's test your knowledge. There are various methods administrators use to visualize network traffic. Discuss two attacks that allow a malicious actor to see all traffic on a switched network. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Penetration Testing]] (1)
> **Env Vars:** arp (5), mac (3), cam (3), span (1), lan (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)


### 2. Spoofing Attacks

[↑ Back to Table of Contents](#table-of-contents)

#### [Launching a macof attack](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=0)** - [Instructor] One type of attack that can allow a malicious actor to visualize traffic on a switch network is called a macof attack. In this segment, we'll see how easy it is to launch a macof attack using [[Kali Linux]]. First, let's talk about how a switch manages traffic. On a switch, the Content Addressable Memory or CAM table maps the MAC address of the device to the physical switch port. The CAM table helps data move more efficiently on the LAN by sending data out only to the proper destination, and nowhere else. With the CAM table or switching table, these pairings can be voluminous. Well, now that we understand how the CAM table works, let's talk about how a macof attack can spoof the switch by filling the CAM table with bogus entries. A macof attack, or a MAC overflow attack, floods the CAM table so that the switch really has no way of knowing where to send the data. At that point, the switch will enter a fail-open mode and start acting like a hub and send traffic out all ports. The hacker can then easily sniff the traffic. I'm in Kali Linux now to demonstrate a macof attack. First I'll open [[Wireshark]] as I want to do a quick capture so that you can see what happens on the backend during a macof attack.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=95)** We'll go to applications, sniffing and spoofing, Wireshark. And I'll move this over and we'll select any and I'll refresh the interfaces. Now once I launch the attack, pay attention up above because it will start to consume a huge amount of bandwidth. I'll open a terminal. Now I'll issue the command macof, but I'll need to execute as root. Now I need to enter the password for root. And over here I'll start the capture, and then I'll go back and begin the attack. Now I'll stop by hitting Control + C, and take a look at the bandwidth up at the top. We'll move this over. So on the Wireshark side, we can see the Wireshark capture, and then within it we see a bunch of bogus IP and MAC addresses that were sent out in order to spoof the switch and be confused. So in order for this attack to be successful, the macof attack must continue to bombard the switch with these bogus entries. Once stopped, the timers will be reset, and then the switch will resort back to being a switch. Now this can be a great tool for [[Ethical Hacking]], but the results will depend on the switch. It might simply behave like a hub like we'd want it to, or it might do nothing because it has protection enabled,
>
> **[3:13](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/launching-a-macof-attack?u=76281980&t=193)** or it might crash and reboot. So now let's test your knowledge. Explain how a macof attack works. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (4), [[Kali Linux]] (2), [[Ethical Hacking]] (1)
> **Env Vars:** cam (6), mac (3), lan (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Exploiting Layer 2 protocols](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=0)** - [Instructor] By design, Layer 2 can be a target for attacks. In this segment, we'll cover vulnerable Layer 2 protocols, along with potential attacks against Spanning Tree Protocol and Cisco Discovery Protocol. [[Intrusion Detection]] and firewall protection that defend and protect the network, typically work at the network layer and higher. Layer 2 protocols are within the confines of a LAN, under the physical control of an organization. An attack can take place because the network administrators don't generally monitor the LAN unless there are problems. However, there are several Layer 2 protocols that can be vulnerable, and many are associated with Cisco devices. So let's talk about a couple of Layer 2 protocols that can be attacked. One is the Spanning Tree Protocol, which is used on a [[Local Area Network (LAN)|local area network]] because switches have redundant links for fault tolerance. Spanning Tree will change the pathways to fit the condition and maintain the state of the network to keep it operational. Spanning Tree helps to keep a loop-free network by pruning redundant links. Spanning Tree uses what's called Bridge Protocol Data Units, or BPDUs, that hold information about ports, switches, port priority, and addresses. Now a few attacks that can stress the Spanning Tree Protocol
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=95)** include a denial of service attack using a BPDU flood, take over the root bridge, or possibly claim another role. Another protocol that we can attack is called Cisco Discovery Protocol. This shares information with other Cisco devices. Attacks include sending bogus Cisco Discovery Protocol packets to other devices, or flood Cisco Discovery packet's neighbor table and cause a denial of service. In addition, if an attacker can get access to the LAN, they can use the Cisco Discovery Protocol to discover the entire topology of the network. In addition, they can learn the router and switch model types, the operating systems in use, and network addressing, in order to launch an attack. One tool that can take advantage of the vulnerabilities and some of the protocols found in the data link layer is Yersinia. Let's take a look. I'm in [[Kali Linux]] and I'll open a terminal. I need to execute as root, so I'll type yersinia and then we'll go into the graphical user interface. The switch is capital G. And then we'll need to enter the root password. Now it says it's the Alpha version, which is fine. I'll just say, OK. But over on the right-hand side we see Launch attack. And here we can see a number
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploiting-layer-2-protocols?u=76281980&t=190)** of different Layer 2 protocols. For example, here we see Cisco Discovery Protocol, flooding the CDP table, attacks for [[DHCP]], VLAN Trunking Protocol, and there are a number of attacks we can launch against Spanning Tree Protocol. So by design, the data link layer can be a target for attacks. Outline some of the vulnerable Layer 2 protocols. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Intrusion Detection]] (1), [[Local Area Network (LAN)|Local area network]] (1), [[Kali Linux]] (1), [[DHCP]] (1)
> **Env Vars:** lan (3), bpdu (1), cdp (1), dhcp (1), vlan (1)
> **Tools:** terminal (1)
> **Definitions:** is called (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Spoofing a MAC address](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=0)** - [Narrator] Malicious actors spoof their MAC address for various reasons, such as concealing their identity or evading an access control list. But in most cases, it's part of a planned attack. In this segment, we'll discuss a few ways that you can change your MAC address. On a [[Local Area Network (LAN)|local area network]], a host is identified by its Mac address. If an attacker spoofs the Mac address to be the same as the victim, the attacker can then sniff all the traffic that was designed to go to the victim. And in most cases, the victim generally is unaware that anything has taken place. But how do we spoof a Mac address? Well, there are a couple of ways to change the MAC address. Let's talk about a few. One way is to use a Mac address spoofing tool, to change the MAC address of your network interface to the target MAC address. Now, there are many tools available for different operating systems, such as Macchanger for [[Linux]] as we see here at this website or Technitium for [[Windows]]. And you can learn more here. Now, in some cases, you can physically change the MAC address. Let's walk through an example. I went to the control panel, network and sharing, and change adapter settings, which brought this window up and I found this adapter and I'll right click
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=94)** and go to properties and we'll bring this up. And now we'll go to configure and I'll select the Advanced tab. Now we're looking for the network address. Now a network address has a number of different alternate naming conventions and it could go by network address, adapter address, MAC address, physical address, ethernet address, or even [[Hardware]] address. They're all the same thing. So, I'm going to scroll down and in this case, it's network address. Alright, so now we see that it ends with a 4F. Now I went to the command line interface and I ran IP config. So, I scrolled down to see the ethernet adapter and we see the physical is right here and we see it ends with a 4F. So, what I'll do is change the network address. Instead of 4F, I'll change it to 44 Then I'll say OK and it will take a couple of seconds so that it registers. I'll go back in and run IP config all and then we'll locate the interface that we just changed. And here, we see that the physical address has now changed. So, that's one way to physically change your MAC address. A more extreme way to change the MAC address
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-a-mac-address?u=76281980&t=188)** if you can't do it any other way is to go in and modify the registry settings. So, now let's test your knowledge. On a land, a device is identified by its MAC or physical address. Changing the MAC address will allow an attacker to intercept traffic. Discuss ways that you can change a MAC address on a [[NIC|network interface card]]. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Local Area Network (LAN)|Local area network]] (1), [[Linux]] (1), [[Windows]] (1), [[Hardware]] (1), [[NIC|Network interface card]] (1)
> **Env Vars:** mac (12)
> **UI Navigation:** go to (3), select the (1), scroll down (1)
> **Analogies:** such as (2)
> **Tools:** command line (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [narrator] (1)

#### [Defending against MAC attacks](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=0)** - [Instructor] Layer two, or the datalink layer, can fall victim to a number of different types of attacks. Those include a macof attack, MAC spoofing, along with attacks against Cisco Discovery Protocol or Spanning Tree Protocol. Layer two can be a very weak link, and if attacked, any higher layers will most likely be affected. And that will include your users. Best practice is to take steps to protect against these types of attacks. Let's start with protecting against a macof attack. On a switch, to protect against a macof attack, the network administrator should use switchport port security. This limits the number of MAC addresses connecting to a single port on a switch. On a Cisco switch, this is very easy to configure. Now, here are the commands. We would first say switchport mode access, and that would set the interface mode as an access port. Then we would assign port security, and then we would say enable sticky mac. Now a sticky mac allows only MAC addresses that are dynamically assigned or administratively added to stick to the port. And this tells us what would happen if there's a violation. And Cisco suggests that you shut down the port. MAC spoofing is used in a man-in-the-middle attack.
>
> **[1:37](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=97)** To defend against MAC spoofing, use Source Guard on a Cisco device. What this does is filter on trusted IP and MAC address bindings. In order for a hacker to circumvent Source Guard, the attacker would have to spoof both the IP and MAC address, which can be a little more difficult. When we think about Cisco Discovery Protocol, this is a passive attack, because Cisco Discovery Protocol is used to discover other Cisco devices. To defend against this, consider disabling it or be selective where it is used. Additionally, consider using secure encrypted protocols such as SSH or HTTPS to protect against eavesdropping, and also protect against a Spanning Tree Protocol. Well, we wouldn't want to deactivate Spanning Tree, or else we might get a looping effect. So if we do have Spanning Tree enacted, we would use PortFast, and then configure BPDU guard, which disables the port from receiving BPDUs, or Bridge Protocol Data Units. Now, this is the command, spanning-tree portfast bpduguard. We'll also want to enable root guard, and this is the command, spanning-tree guard root. The bottom line is that layer two can be a very weak link,
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-mac-attacks?u=76281980&t=192)** and we want to make sure that we implement security measures to avoid these types of attacks. Now let's test your knowledge. Discuss ways to defend against the following, macof attack, MAC spoofing, Cisco Discovery attack, and Spanning Tree attack. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** mac (8), ssh (1), https (1), bpdu (1)
> **CLI Commands:** ssh (1), make (1)
> **Prerequisites:** configure (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### [VLAN hopping attack](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/vlan-hopping-attack?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/vlan-hopping-attack?u=76281980&t=0)** - [Instructor] Malicious actors use a VLAN hopping attack to gain access to other VLANs on the network. In this segment, we'll outline how a VLAN hopping attack works, along with ways to defend against an attack. But first, let's talk about VLANs. A VLAN, or virtual [[Local Area Network (LAN)|local area network]], removes the physical barrier and treats the host as if they were all part of the same subnet while logically separating networks within networks. VLANs offer several advantages over traditional LANs. One is performance, creating smaller broadcast domains and using switches instead of routers improves efficiency. VLANs also improves security as VLANs can be used to restrict access and create [[Virtual Work]] groups in isolation. VLANs also help provide user mobility. We can implement wireless constraints by ensuring a user assigned to a specific VLAN will always connect to that VLAN regardless of their location. One attack against a VLAN is a VLAN hopping attack, which allows an attacker to gain access to traffic on other VLANs not normally accessible. A VLAN hopping attack occurs when a malicious actor spoofs a switch by making an end device act as a trunk port. Now this can happen
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/vlan-hopping-attack?u=76281980&t=95)** because many times the switch is set in auto trunking, or is using the dynamic trunking protocol, which is the default configuration. When the port senses that it's attached to a trunk line, it will change the mode to trunk. This will then allow the attacker to see all traffic across all VLANs. The malicious actor can then steal passwords or other sensitive information or inject malware into the network. To avoid a VLAN hopping attack, it's important to disable the auto trunking or dynamic trunking protocol. You'll want to type the following command: switchport nonegotiate. Now this disables dynamic trunking protocol negotiation and configures the port as an access port. But then you'll want to verify the configuration for the specified interface by using the command: show interface interface-id switchport. Now, let's test your knowledge. Malicious actors use a VLAN hopping attack to gain access to other VLANs on the network. Outline how a VLAN hopping attack works, along with ways to defend against an attack. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Local Area Network (LAN)|Local area network]] (1), [[Virtual Work]] (1)
> **Env Vars:** vlan (11)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Spoofing IRDP](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-irdp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-irdp?u=76281980&t=0)** - [Instructor] ICMP router discovery protocol, or IRDP is used on a network to allow hosts to discover routers on their network. In this segment, we'll step through how an IRDP spoofing attack works. The IRDP protocol is used by routers to discover information about other routers. IRDP allows routers to dynamically learn the IP address of other routers on the network and exchange network configuration information. IRDP spoofing is when a malicious actor sends false IRDP packets to a target router. This then poisons the [[Routing]] table with incorrect information. The traffic is then redirected to the malicious actor's device which allows the attacker to intercept, read, and even modify the traffic. This type of attack can disrupt communications and help the malicious actor to launch a more serious attack. To prevent IRDP spoofing, you can do the following. Configure routers to only accept IRDP packets from trusted sources by using authentication. Secure communications between routers by using encrypted protocols. And if you have a small network with a few routers that are configured statically, you might want to consider disabling router discovery.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/spoofing-irdp?u=76281980&t=96)** And of course, keep the router software and firmware up-to-date to protect against vulnerabilities. Now, let's test your knowledge. IRDP is used on a network to allow hosts to discover routers on their network. Step through how an IRDP spoofing attack works. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (1)
> **Env Vars:** irdp (10), icmp (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### 3. Dissecting DHCP

[↑ Back to Table of Contents](#table-of-contents)

#### [Investigating DHCP](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=0)** - [Instructor] [[DHCP]], or [[DHCP|dynamic host configuration protocol]], dynamically assigns an IP address. In this video, we'll use [[Wireshark]] to review the four step DHCP process; discover, offer, request, and acknowledge. Dynamic host configuration protocol automatically assigns an IP address on a [[Local Area Network (LAN)|local area network]]. Because we want our IP address fast, it uses UDP for transport. The client will use UDP Port 68 and the server will use UDP Port 67. To activate DHCP, we want to make sure that our interface is set to automatically obtain an IP address. I'm in the control panel, network and internet, network and sharing center, and then I select my interface. I'll select properties. And then in my bindings, I'm going to select TCP IP version four and look at the properties. And here we see obtain an IP address automatically. Now, we don't assign a static IP address unless it's on a machine that we don't want the IP address to change. And that would include something like a server or a printer. When a host joins a network or wakes up, it doesn't have an IP address. It broadcasts by beginning the DHCP process
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=96)** by sending a Discover packet. The DHCP process has four steps; discover, offer, request, and acknowledgement. It's also called the DORA process. Let's see how this works. I'll begin by doing a capture in Wireshark. Now I'll go to the command line interface and I want to release my IP address from the [[Wi-Fi|wifi]] interface. So I'll type IP config, release wifi, and press enter. Now I want my IP address back, so now I need to type IP config, renew wifi, and press enter. Now keep in mind it will take a few seconds because it's a four step process. Now I have an IP address and we can stop the capture. And now we'll take a look. If you'd like to follow along, I put a copy in the exercise folder. So we brought this up and we first see that we have a DHCP release. Now, that means that I've given up my IP address, but I want you to look at the transaction ID. Now here we see it ends with a 2e, but then the next four all end in a 4-7, and that's because they all belong together. So let's start with the discover packet. Now I'll just pull this up. And when we get down here, you can see that it's a discover packet from the host, and that would be my machine,
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=191)** and I'll drop this down. Now we'll see that this packet is a broadcast which is sent to all devices on that network. And then down below we see I don't have an IP address. So the second step is where the server responds with an offer, and we'll go to that frame, frame three, and then we'll drop this down. And what it does is it says I have an IP address and maybe you'd like it. Now it's up to me whether or not I want that IP address. And I decided I do want that. So now I'm going to formally request that IP address and that is sent to the server. And then the server responds with a formal acknowledgement. Now if we take a look at that acknowledgement down below, we see the client IP address and then down below there's other parameters. There's the MAC address and then you'll see the message type and then how long I can keep it along with other parameters sent from the DHCP server. So there's a lot of information in a DHCP transaction. So when we complete that transaction, I have an IP address and now I'm able to connect to the network. So now let's test your knowledge. DHCP dynamically assigns an IP address. Discuss the four step DHCP process; discover, offer, request, and acknowledgement.
>
> **[4:48](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-dhcp?u=76281980&t=288)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (10), [[Wi-Fi|Wifi]] (3), [[DHCP|Dynamic host configuration protocol]] (2), [[Wireshark]] (2), [[Local Area Network (LAN)|Local area network]] (1)
> **Env Vars:** dhcp (10), udp (3), tcp (1), dora (1), mac (1)
> **Ports:** port 68 (1), port 67 (1)
> **UI Navigation:** go to (2)
> **Definitions:** means that (1), is a  (1)
> **CLI Commands:** make (1)
> **Tools:** command line (1)
> **Warnings:** keep in mind (1)

#### [Depleting the DHCP pool](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=0)** - [Instructor] A malicious actor can launch a denial-of-service attack using a [[DHCP]] starvation attack. In this segment, we'll discuss how an attacker can use Yersinia, a tool built into [[Kali Linux]] to send hundreds of DISCOVER packets and exhaust the IP address pool. Setting up a DHCP server on a router is pretty straightforward. Next, let me step you through some of the commands. This enables the DHCP server and relay features on your router. This specifies which IP addresses should be excluded, and that would include printers, servers, or other devices that have a static IP address. This will create a name for a DHCP server address pool. And this will configure a subnet network and mask of the DHCP address pool. This will specify the IP address of a DNS server that is available to any DHCP client. And this will give the IP address of the default router for the DHCP client. And this will specify the duration of the lease. The default is generally one day. DHCP depletion can happen on a network and it can happen for a number of different reasons.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=96)** Many are due to misconfiguration issues, and let's talk about a few. The settings might have included only one lease per client, the server has too many reserved leases, the server scopes have uneven lease times, the server scope has uneven sizes, or there is an influx of new users on the network. While misconfiguration issues happen when setting up a DHCP server, another way to deplete the DHCP pool is by using a DHCP starvation attack, which exhausts all usable IP addresses on a subnet. The attack will prevent anyone from using the network, which is essentially a denial-of-service attack. To launch a DHCP starvation attack, a malicious actor can use Yersinia, which is a network tool used to test and discover vulnerabilities in various networking protocols. Now I'm here at this website where we can see a screenshot of Yersinia. Now, one of the attacks that can be performed using Yersinia is a DHCP starvation attack. In this type of attack, the attacker will flood a DHCP server with a large number of bogus DHCP requests. And here in this graphic, we can see
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/depleting-the-dhcp-pool?u=76281980&t=191)** that it is running an attack and you can see the message type, which is a DISCOVER packet and there's many, many DISCOVER packets. Now, multiple DISCOVER packets are going out onto the network. Now the server will try to respond with DHCPPOFFERs to nonexistent MAC addresses. This will then deplete the IP address pool, causing it to run out of available IP addresses to assign to new clients. Now let's test your knowledge. Outline how an attacker can use Yersinia to launch a DHCP starvation attack and exhaust the IP address pool. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (16), [[Kali Linux]] (1)
> **Env Vars:** dhcp (16), discover (4), dns (1), mac (1)
> **Definitions:** is a  (3), is an  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Deploying a rogue DHCP server](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=0)** - [Instructor] [[DHCP|Dynamic host configuration protocol]] dynamically assigns IP addresses along with other information, such as the default gateway and the DNS servers. In this segment, we'll see how a malicious actor can launch a rogue [[DHCP]] server and supply clients with bogus information. When setting up a DHCP server, you include information on the address pool and the exclusions, lease time, along with the IP address of the DNS server and default gateway. When a client joins the network and requests an IP address, the DHCP server then supplies the information to the client. When an unauthorized or rogue server is on your network, it can start supplying clients with bogus information that will point the victim to the wrong default gateway and DNS server, which can be the same IP address as the attacker's machine. The victim may be unaware that they have the wrong information. When the client has the wrong default gateway, the attacker is essentially a man in the middle and can capture and sniff any traffic destined to the gateway, such as usernames and passwords. In addition, an attacker can create a rogue DNS server, and then design a [[Phishing]] website, and direct the client to the bogus site in order to obtain confidential information,
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=95)** such as credit cards and passwords. One tool that we can use to launch an attack against DHCP is Yersinia. I'm in [[Kali Linux]], and I'll open a terminal. I need to execute as root, so I'll type Yersinia and then we'll go into the graphical user interface. The switch is capital G and then we'll need to enter the root password. It says it's an alpha version, and I'm fine with that, so I'll say, "OK". Now we'll go up to Launch attack and select the tab DHCP. Here you can select creating DHCP rogue server, right here, and then say, "OK". Now this will launch the attack panel. You set the parameters to create your rogue DHCP server. Press Enter and begin capturing traffic. Now, we don't want a rogue DHCP server on our network but I'll show you in [[Wireshark]] evidence of a possible rogue DHCP server. Now, I've opened the packet capture and it only has DHCP traffic but here we see two sets of DORA transactions. Here we see the first set, and here we see the second set, but along with that, you see two sets of transaction IDs. Now, this would be common as we most likely would see
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/deploying-a-rogue-dhcp-server?u=76281980&t=191)** different transaction IDs for different transactions. However, if we take a look at the offers, we see one clear distinction. Here we see an offer from a server that ends with a .1, and here we see an offer from a server that ends with a .4. So there there are two separate offers from two separate IP addresses. The second IP address could be a valid DHCP server or it could be a rogue DHCP server. Now let's test your knowledge. Explain how an attacker can launch a rogue DHCP server, and discuss some possible results. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (13), [[DHCP|Dynamic host configuration protocol]] (1), [[Phishing]] (1), [[Kali Linux]] (1), [[Wireshark]] (1)
> **Env Vars:** dhcp (13), dns (4), dora (1)
> **Analogies:** such as (3)
> **Tools:** terminal (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [Defending against DHCP attacks](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-dhcp-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-dhcp-attacks?u=76281980&t=0)** - [Instructor] [[DHCP]] is an important protocol. In this segment, we'll see how to defend against a DHCP attack. [[DHCP|Dynamic Host Configuration Protocol]] doesn't have a native authentication process. When a client requests an IP address from a DHCP server the client really has no reassurance that the server is legitimate. In addition, the server really has no way of knowing that the client that's requesting the address is a legitimate client on the network or a malicious actor. Rogue clients and servers on the network can cause serious problems. Network administrators can reduce risk by configuring devices to monitor for trusted hosts. To prevent DHCP attacks, there are a few best practices. One is that you can implement VLAN Access Control List. Now, keep in mind that a regular access control list will reside on a router's interface and is used only for routed packets. A VLAN Access Control List provides access control on a switch. In a [[Windows]] environment, [[Active Directory]] authorizes DHCP servers before they can start leasing address to clients. And you can also use Dynamic ARP Inspection.
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-dhcp-attacks?u=76281980&t=98)** Now, this will reject invalid and malicious ARP packets. DHCP snooping on a switch works with IP Source Guard and Dynamic ARP Inspection and works on a concept of trusted ports and untrusted ports. Trusted ports are interfaces that connect to authorized DHCP servers and switch uplinks. Untrusted ports are user access ports. DHCP snooping begins by creating a snooping database containing the information learned per port, like the IP address assigned, MAC address, and VLAN. Now, let's test your knowledge. DHCP is an important protocol. Discuss some of the ways to defend against a DHCP attack. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (10), [[DHCP|Dynamic host configuration protocol]] (1), [[Windows]] (1), [[Active Directory]] (1)
> **Env Vars:** dhcp (10), vlan (3), arp (3), mac (1)
> **Definitions:** is an  (2), is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Identifying key elements in a capture](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-identifying-key-elements-in-a-capture-26999128?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-identifying-key-elements-in-a-capture-26999128?u=76281980&t=0)** - [Instructor] Let's do a challenge. But first, let's have a little background information. While sniffing traffic, you may need to examine the packets to try to piece together an event. In this challenge, we'll examine a PCAP and identify several key elements that could be evidence of an indication of compromise. Although there's a lot going on, we'll evaluate five things using [[Wireshark]], Brim, CloudShark, and VirusTotal. The goal of this challenge is to get an idea of what you might see when there is possible malicious activity on your network. Now, there's detailed instructions on the challenge worksheet, but the first thing is that you'll need to get the packet capture, and it's here at this website, and you'll download the zip file and you'll need the password, which is here on this website. So pause the video, complete the challenge, and then come back and see what my thoughts were. This challenge should take you about 30 minutes. Good luck.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (1)
> **Exercise Files:** download the (1), zip file (1)
> **Prerequisites:** you'll need (2)
> **Env Vars:** pcap (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Identifying key elements in a capture](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=0)** - [Instructor] Okay, now let's check our work. First, we were to go to this site, [malware-traffic-analysis.net](https://malware-traffic-analysis.net), and download and extract this file. You'll need a password, which is found on this page. Next, you'll download and install a copy of Brim. Now, Brim is a tool that helps us dissect a packet capture during analysis. Now I've opened the file Forensic-Challenge.pcap, and now there's a lot going on, but let's take a look at a couple of things just to get you a taste of what you might see during a forensic investigation. Over on the left hand side, we'll take a look at the Queries section, and we'll select Queries, HTTP Requests. There are two entries, and what we want to do is take a look at this host. Now we're going to investigate a little further and take it into Cisco Talos. We'll right-click and copy. And now I'm at Cisco Talos. Now Cisco Talos provides threat intelligence on sites that could possibly have a risky reputation. I've entered the host name and will run the search, and this tells us that this site has an untrusted reputation. Now we're back in Brim and we'll select all the packets.
>
> **[1:39](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=99)** And next we'll take a look at the Suricata alerts. Now, Suricata is an open source [[Intrusion Detection]] and prevention system. So here we see Suricata alerts by category, by source and destination IP address, or by subnet. Now there are a number of different alerts. So if you see a number of Suricata results, this may indicate that the system has detected potential security threats, and you should investigate and take action if appropriate. Now we'll go back to all the packets, and we're going to use this filter, 139.59.6.175, and run the filter. Now you'll select the packet marked Files right here, and now we're going to see how we can dig even deeper in Brim. And I'll scroll over to the right and now on this hash value, right-click. And now we can go and see VirusTotal Lookup. And when we select this, it will take us to VirusTotal. What it does is it immediately investigates that file, and here we see that 56 security vendors and three sandboxes flagged this file as malicious. Now we'll go into [[Wireshark]] and open the capture if you haven't already. In Wireshark, we'll do something a little bit different.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=192)** First, we're going to export some objects, and I do this so I can see if I could piece together what possibly happened, what files could be found within the capture. So we go to File, Export Objects, HTTP. Now we want all of these, so we'll say Save As in a folder, Forensic. Now open the folder, and you want to take a look at this file, and I'll right-click, and open it with a browser. And what we can see is that somehow someone reached a site that was a suspected [[Phishing]] site, and in some cases, they may have gone further, gone to the site and downloaded some malware, which it could have been a drive-by download. You'd have to look a little further to see. But that's part of that capture, and it's piecing together all the events of that incident. We'll also take a look at the emails in this capture. So go to File, Export Objects, IMF, and we want all of those. So we'll say Save All in a folder called email.
>
> **[4:27](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-identifying-key-elements-in-a-capture-27110124?u=76281980&t=267)** Now, once you get into that folder, just select the first email, and you can open it with your application. And here we see a phishing email, which is a classic phishing email. There's an attachment and even a password, which might prompt someone to open it, and then release the malware. And in the last section, I take you out to CloudShark. Now, CloudShark is a cloud-based analysis tool, which is really great for teams. Now we can't capture in CloudShark, but we can share our analysis with our team as we'll do right now. So once here, we'll go to Analysis Tools and Threat Assessment. Now, this is only a portion of the capture, but here we can see there's a lot going on. We see one with high severity and a number of them with low severity. But we want to also then open Advanced Analysis, which will take us to this page. And now I want you to just select right here, this file download, and now we can really investigate and dig into the file to see what possibly has happened. So when you're examining a packet capture after an intrusion, you can find several key elements that help you to piece together either an attack or evidence of an advanced persistent threat. I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Phishing]] (3), [[Wireshark]] (2), [[Intrusion Detection]] (1)
> **UI Navigation:** go to (4), right-click (3), select the (2), open the (2)
> **Definitions:** is a  (3), is an  (1)
> **Env Vars:** http (2), imf (1)
> **Cross-References:** go back to (1), in the last (1)
> **Prerequisites:** you'll need (1), install (1)
> **CLI Commands:** find (1)
> **URLs:** [malware-traffic-analysis.net](https://malware-traffic-analysis.net) (1)


### 4. Reviewing ARP

[↑ Back to Table of Contents](#table-of-contents)

#### [Describing ARP](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=0)** - [Instructor] Address Resolution Protocol resolves an IP address to a MAC address. In this segment, we'll review the purpose of ARP, discuss how it's not routable, and examine a normal ARP request and reply. On a [[Local Area Network (LAN)|Local Area Network]], a host is identified by its MAC address rather than the IP address. When a frame is sent out onto the LAN and the MAC address is unknown, an ARP broadcast is sent out. All hosts on the network will hear it. An ARP request simply says, "Who has this IP address? "Tell me." It will ask over and over until it gets a resolution. So that you can see the process, we'll examine a normal ARP request and reply in [[Wireshark]]. To get a copy of an ARP packet capture so that you can follow along, we'll go to Cloudshark, a cloud-based analysis tool where you can analyze captures from your own device and then you can share it with your team. But I am going to download the file and open it in Wireshark. So we'll go to Export, Download File, and download the original file. And here we have the ARP capture. Now, there are a couple of other packets in here. We see ICMP. But I'll put in the display filter ARP and then press Enter. All right, now move this up
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=92)** so I have a little bit more landscape. We'll start at frame one. Now, when we take a look at frame one, I just want to show you something here. I'll drop this down. There's a lot of information in here. Well, there is no header called frame whatever. That's done by Wireshark and Cloudshark to let you know the [[Metadata]] about that single frame. Now, after that, that's where the encapsulation begins. Right here. There you see the Ethernet II frame header. And then you see ARP. Now, understand there is no IP header. ARP sits in between layer three and layer two. There's no IP header because it's already in the network it needs to be. So now we'll drop down the header. And this is the request. Now, when we take a look, here we see the sender MAC address, the sender IP address, the target MAC address, and the target IP address. Now, here we see zeros where the MAC address should be because it doesn't know the MAC address. So we'll pull that back up and then go to frame two. Now, this is coming from the host with the MAC address. So now take a look. It's done the resolution. Here we see the sender MAC address, the sender IP address, the target MAC address, and the target IP address. Now we'll pull that up.
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/describing-arp?u=76281980&t=188)** Now, keep in mind, in order to analyze ARP traffic, you really have to be sniffing on the same broadcast domain as the device sending the ARP traffic. So now let's test your knowledge. Review the purpose of ARP and some of the characteristics of an ARP request and reply. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (3), [[Local Area Network (LAN)|Local area network]] (1), [[Metadata]] (1)
> **Env Vars:** arp (14), mac (10), lan (1), icmp (1)
> **UI Navigation:** go to (3)
> **Exercise Files:** download the (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Exploring ARP spoofing tools](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=0)** - [Instructor] To effectively launch an ARP spoofing attack, you'll need to use a tool. In this segment, we'll investigate tools such as Ettercap, Habu and KickThemOut. In addition to being able to launch a man-in-the-middle attack, the tools share several key features. They're capable of network sniffing as they capture and analyze traffic in real time. Much of this is done before the attack but the tool will continue to monitor the network while the attack is in progress. They're able to do packet manipulation by modifying or injecting specially crafted packets into a network and they have built-in protocol analysis. So let's talk about a few of these tools. Ettercap is built into [[Kali Linux]] and you can use Ettercap for a man-in-the-middle attack including ARP spoofing. Habu is an open source [[Python (Programming Language)|Python]] network attack framework and I'm at the [[GitHub]] page and I'll scroll down. Habu includes tools for launching a variety of attacks such as ARP spoofing and [[DHCP]] starvation attacks as shown in this list. Another tool that can perform an ARP spoofing attack is called KickThemOut. I'm here at the GitHub page where you can learn a little more about the app.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=94)** KickThemOut is a Python tool that can launch an ARP spoof against devices in a [[Local Area Network (LAN)|local area network]]. The attack will prevent those devices from accessing the internet. Now this attack could be detrimental if there were mission critical [[IoT]] devices such as medical appliances or industrial automation systems. So what I want to do is walk through some of the steps that you would take to launch an attack. I'm in Kali Linux. I've installed the app from GitHub so I'll open a terminal. We'll go to KickThemOut and I need to execute as root and I'll need to enter the password for root. So now I'll need to enter the default gateway. So I'll open another terminal and obtain that IP address. IP route grip default and there we have the IP address and we'll put it over here. All right, at this point, you would select a target and launch the attack. I'll select two and it will take a second and then it will offer some choices. Now I'm not going to launch the attack but you can see that this is achieved fairly easily. So now let's test your knowledge.
>
> **[3:12](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/exploring-arp-spoofing-tools?u=76281980&t=192)** To effectively launch an ARP spoofing attack, you'll need to use a tool. Discuss some common features of Ettercap, Habu and KickThemOut used when launching an attack. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3), [[Kali Linux]] (2), [[Python (Programming Language)|Python]] (2), [[DHCP]] (1), [[Local Area Network (LAN)|Local area network]] (1)
> **Env Vars:** arp (6), dhcp (1)
> **Tools:** github (3), terminal (2)
> **Definitions:** is an  (1), is called (1), is a  (1)
> **Analogies:** such as (3)
> **CLI Commands:** python (2)
> **UI Navigation:** scroll down (1), go to (1)
> **Prerequisites:** you'll need (2)

#### [Detecting ARP spoofing](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=0)** - [Instructor] An ARP spoof or cache poison is used in a man-in-the-middle attack. In this segment, we'll demonstrate in [[Wireshark]] how you can identify an ARP spoofing attack. Address Resolution Protocol is used to resolve an IP address to a MAC address. Now, ARP can have some problems. They're rare, but mainly they're due to configuration errors in that someone may have assigned an incorrect IP address or there may be an incorrect subnet mask. However, we know that there are attacks against ARP one being an ARP spoof or ARP cache poison attack. ARP spoofing is used in a man-in-the-middle attack. To launch an attack, the attackers send spoofed ARP messages. Now, you ask yourself, how does this happen? ARP spoofing can take place because ARP is stateless, meaning it doesn't retain any prior information on packets that were sent in the past. An ARP reply can be sent even if there has been no request and it will be accepted. This then poisons the cache. So I'd like to show you in Wireshark what this looks like. If you'd like to follow along I'm at this website, [securitysite.com](https://securitysite.com). I'm here at this page where we can see that it's loaded with PCAPs that you can use in order to study a little bit more about the protocols.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=94)** The one I'm going to look at is ARP Spoof. On the right-hand side, it says Go and View. I selected Go and that downloaded a ZIP file, which I unzipped, and then I brought it into Wireshark. I'm in Wireshark and I loaded the packet capture. Now, there are a lot of packets. As we see down below, 324. Now, I only want the ARP packets, so I'll put ARP in the display filter and then press Enter. Now more specifically, what I want is an ARP reply and that's an opcode two. So we go down right here to the reply and we see opcode two, and what we'll do is right click and then we'll say Apply As Filter, and then we'll say Selected and that will run the filter. I'll pull that up. Now, when we're in Wireshark, Wireshark will try to help you by notifying you that something might be going on. In the lower left-hand corner, we see a yellow dot and I'll select that and that's the expert information. And what we see here is a duplicate IP address configured and there are a lot of them. So now let's take a look at that and I'll just close this. And here we see the destination b1, b1, b1. Now, what it's doing is it's throwing out information here
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/detecting-arp-spoofing?u=76281980&t=188)** that this IP address is at this address, is at this address and it's trying to spoof the cache by sending out a lot of bogus ARP replies. So we know that Address Resolution Protocol is a great protocol but there are methods to detect ARP spoofing. So now let's test your knowledge. Discuss how you can identify an ARP spoofing attack in Wireshark. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (7)
> **Env Vars:** arp (18), mac (1), zip (1)
> **Definitions:** is a  (2), is an  (1)
> **URLs:** [securitysite.com](https://securitysite.com) (1)
> **Exercise Files:** zip file (1)
> **Speakers:** - [instructor] (1)

#### [Defending against ARP attacks](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=0)** - [Instructor] On a [[Local Area Network (LAN)|local area network]] that uses ARP, all hosts are aware of the MAC and IP address pairings of all devices. However, we know that there are potential attacks against ARP, so you should monitor and protect your network. In this segment, we'll investigate some tools that help detect malicious ARP activity. The request for comments for ARP was written in 1982. And the protocol wasn't designed to deal with malicious activity such as cache poisoning, or spoofing attacks, so let's take a look at a sampling of some of the tools that are available. I'm here at this website, [snort.org](https://snort.org). Snort is a powerful [[Intrusion Detection]] system that you can use and, once configured, Snort will monitor for threats. When using Snort, you'll want to check out the ARP spoof pre-processor that can monitor for attacks against ARP. Within this page, you'll see a couple of configuration options. Another option is Arpalert that will compare with a list of authorized MAC addresses to make sure that nothing suspicious is going on. Here we can visit the man page to learn more about Arpwatch. Arpwatch is another tool that helps keep track of ethernet to IP address pairings. Now, it seems that a lot of these
>
> **[1:33](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/defending-against-arp-attacks?u=76281980&t=93)** are designed for a [[Linux]] system. However, there is one that I found called ARP Monitor and this is designed for a [[Windows]] system. I downloaded and installed ARP Monitor so we can watch it in action. I've opened up the panel, and it's automatically monitoring the network. On the left, there are a number of different menu choices to view and configure ARP Monitor. I'm here at Options and, within this, it gives you a snapshot of what it's looking at, the different adapters, the different events. And here, we can select different notification methods. This tells us our IP to MAC address pairings on the network. And here is a log of all the ARP communications. And here, we'll look at events. Now, I purposely caused an ethernet mismatch, so you can see the results in action. Now, what happens with an ethernet mismatch? Well, if the source MAC address in a packet doesn't match the address inside the ARP packet this could indicate a spoofing attack, and you should investigate further. So now, let's test your knowledge. Address resolution protocol is still in use on many of today's local area networks. However, there can be attacks against ARP. Outline some of the tools you can use that can detect an ARP attack. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Local Area Network (LAN)|Local area network]] (1), [[Intrusion Detection]] (1), [[Linux]] (1), [[Windows]] (1)
> **Env Vars:** arp (13), mac (4)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **URLs:** [snort.org](https://snort.org) (1)
> **Documentation:** man page (1)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)


### 5. Attacking DNS

[↑ Back to Table of Contents](#table-of-contents)

#### [Summarizing DNS](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=0)** - [Instructor] DNS converts a host name to an IP address and is essential to any network. In this segment, we'll review the components of a DNS request and reply using wire shark. [[Domain Name System (DNS)|Domain name system]] uses Port 53 over UDP or TCP. The transport protocol will depend on what we need to achieve. For a request, DNS will use UDP because UDP is a lightweight protocol and we want a fast efficient response. For a full zone transfer, DNS will use TCP as we want to make sure that we have a complete transfer so we use a connection-oriented process. Now, DNS queries and responses are pretty straightforward. A client will send a query to a DNS server for an IP address and the server will respond with information. When looking at a DNS header, there are four sections. We have questions, answer resource records, authority resource records, and additional resource records. Now, depending on the query, you'll see a number of different types of records. Let's take a look at some common ones. You might see a type A, which is an IP version 4 address. An MX is a mail exchange
>
> **[1:38](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=98)** and a AAAA is an IP version 6 address. Next, let's take a look at a standard request and reply. If you'd like to follow along, go to this website and then select DNSrequestreply.pcap. If you select it, it will open it in Wire Shark and then you can go to Export, Download File and then download the original file. I then opened it in Wire Shark and I just want to look at a couple of things. We want to look at the transaction id, the flags, the query and the answers. So first we see that DNS standard query and we'll drop down the DNS header. Now the first thing we see is the transaction ID, which ends with a 9B. Now this mirrors the query response, which is also 9B, so that transaction is used to keep both parts together. Now, in addition to the transaction ID, we'll drop down the flags and here we see a couple of things. First of all, the flag is set at zero which means it's a standard query. In addition, we'll look down below. We see that the client has asked for recursion. Recursion desired, do query recursively. Now, why is that? Well, there are two types of queries in DNS, recursive and iterative. In general, we want recursive
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=191)** and that means that if the server can't find it, the server will go out and do the resolution for me. Iterative means that if the server can't find it, I have to go out again and again until I have a resolution. So I do want recursion. I'll pull that up. And here we see the queries. And what we're looking for is the IP address for [cisco.com](https://cisco.com). Now, down below here, you see the response in 2. Well, Wire Shark helps you out a little bit so that you can see where the response is. Now there are only two frames in this capture, but we'll go to frame two. This is the response, and we'll drop down the DNS header. Now first we see the transaction ID. Again, it ends with a 9B. We'll drop down the flags. The first flag is set at one and that means that the message is a response. And now we'll take a look at recursion. We see that the client has asked for recursion. In response, the server says, recursion is available. This server can do a recursive query. Well down below, now pull that back up and we'll go down below to the query which we know we're asking for [cisco.com](https://cisco.com). And here's the answer. Now down below we see the IP address and we'll right click and we'll say Copy Value. Now that will copy that value 72.163.4.161
>
> **[4:47](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/summarizing-dns?u=76281980&t=287)** and we'll test to see if it is indeed a Cisco IP address. To search for that IP address, put that IP address in quotes. And here we see IP address details. Now we'll go to that. And we do see that this IP address does belong to Cisco Systems. So now let's test your knowledge. DNS converts a host name to an IP address. Review key components of a DNS request and reply. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Domain Name System (DNS)|Domain name system]] (1)
> **Env Vars:** dns (13), udp (3), tcp (2), aaaa (1)
> **Definitions:** is a  (3), means that (3), is an  (2)
> **UI Navigation:** go to (4)
> **CLI Commands:** find (2), make (1)
> **Versions:** version 4 (1), version 6 (1), 72.163.4 (1)
> **URLs:** [cisco.com](https://cisco.com) (2)
> **Ports:** port 53 (1)

#### [Caching and forgery](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=0)** - [Speaker] Networks rely on DNS to provide accurate information on host-name-to-IP-address resolution. In this segment, we'll review how cache poisoning works along with a discussion on a SAD DNS attack. DNS resolves a host name to an IP address and is used by nearly all devices and services on a network. For example, if I want to go to a webpage I rely on DNS to give me the correct address or else I might be redirected to a bogus site. When setting up a DNS server correct configuration is essential as a misconfiguration can lead to devastating problems. Along with misconfiguration issues, DNS can be compromised by poisoning the cache. Let's talk about the concept of cache. Cache is a temporary holding area for data. It's designed so that devices can get a faster response. Websites use caching so that we can get a quicker response when requesting a webpage. On our own system, we have a cache of DNS records. Let's take a look. I'm at the [[Windows]] command line interface, and then once in the command line, I'll type ipconfig displaydns, and then press enter. This will display the DNS records in my DNS cache.
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=96)** There are a number of records. The entries are going to list things such as the record name, record type, but then there's also another entry, and that's right here, and that's called time to live. Now, a time to live value in a DNS record isn't the same as it is in an IP header. In an IP header, the time to live value is how many hops it can take before it times out. However, in a DNS record, the time to live is how many seconds it can live in cache before it goes away. Now, this is really system dependent. In buying the maximum is seven days, in a [[Microsoft]] server, it's 24 hours, but the time to live value for DNS is generally specified by the domain name owner. So now let's talk about cache poisoning. Cache poisoning inserts bogus information into a DNS servers cache. Poisoning is achieved by replying to a DNS request and sending a spoofed IP address. Once the reply is received, the result is placed in the cache until the time to live value is expired. Now, once the cash is poisoned the effects will depend on where it was poisoned. In an organization, all local users will be affected. However, an ISP cache poisoning will have widespread effects. One type of DNS cache poisoning is the SAD DNS attack,
>
> **[3:14](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=194)** or side-channel attacked DNS. This attack exploits a vulnerability in the way DNS resolvers handle requests. In this attack, the attacker will send a large number of carefully crafted DNS queries to a target DNS server. The queries are designed to trigger a side-channel vulnerability in the server's [[Hardware]]. Allowing the attacker to infer, or guess, the random transaction ID used in the DNS query process. Once the attacker has successfully inferred the transaction ID, they can launch a DNS cache poisoning attack by sending forged responses to the DNS resolver directing it to cache the attacker's IP address as the authoritative source for a particular domain name. The cache poisoning will then allow the attacker to intercept and modify network traffic, steal sensitive information, or redirect users to malicious websites. To defend against cache poisoning attacks there are a few best practices. DNS resolvers should use random transaction IDs that are not susceptible to inference. Additionally used, DNS security extensions, which can help ensure the authenticity of DNS responses. Network administrators should also regularly monitor
>
> **[4:49](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/caching-and-forgery?u=76281980&t=289)** their DNS traffic for any suspicious activity, such as a sudden increase in DNS queries or responses from unexpected IP addresses. Now let's test your knowledge. Networks rely on DNS to provide accurate information on host-name-to-IP-address resolution. Review cache poisoning techniques along with how a SAD DNS attack works. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[Microsoft]] (1), [[Hardware]] (1)
> **Env Vars:** dns (30), sad (3), isp (1)
> **Analogies:** such as (2), for example (1)
> **Tools:** command line (2)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [speaker] (1)

#### [Poisoning DNS](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/poisoning-dns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/poisoning-dns?u=76281980&t=0)** - [Instructor] DNS converts a host name to an IP address. In this video we'll outline how a malicious actor can gain control of a DNS server and poison the records, which can then redirect traffic to a bogus site with the goal of possibly collecting sensitive information. Either on the internet or within the LAN, resources are identified by a unique domain name. In order to reach the resources, a resolution is made from the domain name to the IP address. On a network, resources include [[Web Servers]] for accessing websites, mail servers for delivering email messages, or application servers for accessing software systems and [[Databases]] remotely. When requesting information from DNS, there are two types of servers, an authoritative server or a non-authoritative server. Let's compare the two. An authoritative server contains a master set of all the data that publishes DNS data and is updated whenever there is a change in the data. A non-authoritative server is a cache server that retrieves DNS data and contains copies of the normal back-and-forth user queries. Although a hacker can poison the cache to launch an attack on DNS, a more effective way to compromise DNS
>
> **[1:36](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/poisoning-dns?u=76281980&t=96)** is by changing the DNS server records on the authoritative servers. The DNS server may run within the organization or by a third party, such as the domain name registrar on behalf of the domain name owner. Either way, an administrator must log in and update the records periodically. A hacker will need to gain access. Gaining access is achieved by exploiting an unpatched vulnerability in the server's operating system, or obtain login credentials of the DNS server by a [[Phishing]] or social engineering attack. Then once in, the hacker can modify the DNS records so that traffic is redirected to a bogus site. The site looks exactly like the original and most likely has been cloned. The malicious actor does this with the goal of possibly collecting username and password information or other credentials. Now, let's test your knowledge. Although a hacker can poison the cache to launch an attack on DNS, a more effective way to compromise DNS is by changing the DNS server records on the authoritative servers. Outline how a malicious actor can gain control of a DNS server and poison the records. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Web Servers]] (1), [[Databases]] (1), [[Phishing]] (1)
> **Env Vars:** dns (15), lan (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Guarding against DNS attacks](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-dns-attacks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-dns-attacks?u=76281980&t=0)** - [Instructor] DNS is an important protocol, however, can suffer from an attack. In this segment, we'll cover techniques to protect DNS and the resolvers. One first line of defense to protect your servers is to keep your systems patched and updated. You'll also want to disable any unnecessary services on the machine. Another method that can help protect DNS servers is to enable cache locking, which is a feature on a [[Windows Server]] that allows administrators to control whether or not the DNS cache can be overwritten. Now on a network, authoritative service publish DNS data. A non-authoritative or caching DNS server will retrieve DNS data. To defend both of them, the non-authoritative and authoritative server should each have a separate IP address. If you use a domain name registrar, which is a company that manages domain names, there are a few things that you can do to ensure more rigid control before any changes are made to the DNS settings. One is to use two-factor authentication. That way if the password is compromised, there's still another authentication factor, such as a one-time password being delivered to your mobile phone.
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-dns-attacks?u=76281980&t=92)** In addition, you should implement some type of verification, such as a security [[Microsoft Word|word]]. You should also consider DNS security extensions, which add robust security to the [[Domain Name System (DNS)|domain name system]] as the extensions provide authentication and [[Data Integrity]] to protect against attacks such as DNS cache poisoning. Finally, let's talk about protecting the DNS resolver, which is a local server that manages DNS requests for the clients on your network. If you manage your own resolver, restrict access to only users on your network. The DNS resolver should not be open to external users as an open resolver can lead to cache poisoning along with a DNS amplification attack. You should periodically check for open resolvers in your organization. You could go to this website. Once there, simply click on this link Proceed. That will check to see if you have any open resolvers. If there is an open resolver, you'll want to take steps to mitigate this threat. Now let's test your knowledge. It's important to defend against DNS attacks. List techniques to protect DNS and the resolvers. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows Server]] (1), [[Microsoft Word|Word]] (1), [[Domain Name System (DNS)|Domain name system]] (1), [[Data Integrity]] (1)
> **Env Vars:** dns (16)
> **Definitions:** is a  (3), is an  (2)
> **Analogies:** such as (3)
> **UI Navigation:** go to (1), click on (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Investigate a DNS header](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-investigate-a-dns-header?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-investigate-a-dns-header?u=76281980&t=0)** (intriguing music)
>
> **[0:05](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/challenge-investigate-a-dns-header?u=76281980&t=5)** - [Instructor] Let's do a challenge. In this challenge, you'll examine a DNS header. First you'll open DNS.pcap next generation in Wire Shark. You can find the file in the exercise folder. Go to frame one and expand the DNS header. Answer the following. What is the transaction ID? Expand the flags and tell me, is recursion requested and is this a query or a response? Then go to frame two and expand the DNS header and tell me what is the transaction ID? Then expand the flags and is recursion available and is this a query or response? Then take a look at the answer and what is the time-to-live value? So pause the video and complete the challenge and then come back to see what my responses were. This challenge should take you about 10 minutes. Good luck.

> [!info]- Semantic Content
>
> **Env Vars:** dns (4)
> **UI Navigation:** go to (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (intriguing music) (1)

#### [Solution: Investigate a DNS header](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=0)** - [Instructor] Now, let's check our work. First, we were to go to frame one and expand the DNS header. So we'll click here on frame one, and then I'm going to pull up the panel, and then we'll expand the DNS header. The question is, what is the transaction ID? And here we see the transaction ID is 699a. Now, that's in hexadecimal, which you can see that it starts with an X. Now, we were to expand the flags. And I'll just drop down the carrot right here where we can see the flags. The question is, is recursion requested? And here we see, recursion desired, do query recursively. So yes, it is requested. And then the question is, is this a query or a response? And here we see that the message is a query. Now, I'll pull this up and go to frame two. I'll pull the flags up so we can see the DNS header. And we see that the transaction ID is again hexadecimal 699a. So the two belong together. Now, we'll expand the flags and pull that up. Now, this is from the server. So there's a little bit more information. Now, the question is, is recursion available? Now, we see that recursion is available, the server can do recursive queries.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/solution-investigate-a-dns-header?u=76281980&t=95)** And then the question is, is this a request or response? We see that the message is a response. Now, I'll pull this up and we'll look at the response. Now, we'll go down to answers and we'll pull this up. And here we see [google.com](https://google.com), type A, which is an IPv4 address. And here, we see the time to live. The time to live is 179 seconds or two minutes and 59 seconds. And remember, the time to live value in a DNS response means how long it can live in my cache. So I hope you enjoyed this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1)
> **Env Vars:** dns (4)
> **Definitions:** is a  (2), is an  (1)
> **UI Navigation:** go to (2)
> **URLs:** [google.com](https://google.com) (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Sniffing Tools and Techniques

[↑ Back to Table of Contents](#table-of-contents)

#### [Capturing images](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=0)** - [Instructor] We know that we can sniff the network to gather usernames and passwords, but we can also scoop up images. In this segment, we'll see how we can capture and export images using [[Wireshark]]. When sniffing traffic, there are a few apps that can gather and extract images. I have a few examples to share with you. One is NetworkMiner, which is an open source network forensic tool that can extract many different types of artifacts, such as files, images and emails. Another tool is Driftnet. Driftnet can sniff network traffic and is able to extract images from a TCP data stream. Wireshark is also able to extract images. Let's take a look. I'm in Wireshark and I'm going to launch a capture and then once I start, I'm going to go to a page. Let's begin the capture. All right, I'm here at this site Roflcats. Now I chose this site because it's one of the few out there that's not currently encrypted so we'll be able to see the images pretty easily. So I've stopped the capture and so that you could follow along. I created a file, which is found in the exercise folder for chapter six. Now this is just the data stream for Roflcats. Within this,
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=95)** we're going to see a huge number of images. So within the capture, there is a large number of packets but again, what we're looking for is that http stream. To extract those images, it's pretty easy. Go to file, export objects, http. Now, we'll take all of those in. For example, if you were doing a forensic exercise this might be part of that exercise. You're going to sift through images and see if you can figure out anything and piece together an event. But for this exercise, we're going to see we have a number of different images, and then we'll say Save All. And when you do that, you can just create a folder, select that folder and save it in that folder which I have already done and I'll close that. Now, once you've saved all of the images, you want to go in and pick through that. Now I've selected one of the images, which I'll show you is Image 2512. And when you select the image, you can right click and say open with. And I just simply opened with my browser, which brought up this image. Now there are many more which you can investigate, but you can see how easy it is to extract images using Wireshark. So now let's test your knowledge. We sniff the network
>
> **[3:07](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/capturing-images?u=76281980&t=187)** to gather usernames and passwords but we can also scoop up images. Discuss how we can capture and export images using Wireshark. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (5)
> **UI Navigation:** go to (2), select the (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** such as (1), for example (1)
> **Env Vars:** tcp (1)
> **Speakers:** - [instructor] (1)

#### [Examining HTTP headers and URLs](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=0)** - [Instructor] Hypertext Transfer Protocol is an application-layer protocol for browsing the web. In this segment we'll discover how the headers can tell us a great deal of information about a webpage transaction. HTTP has been in use on the web since the early 1990s. It's a client-server model that uses TCP Port 80 but other ports could be used as well. The HTTP headers can tell us the types of servers and browsers that are used during a webpage transaction. This information can then be used to launch an attack. In a normal transaction, the client will send an HTTP request to the server which holds information about the request and about the client capabilities and that would include possibly the language it might accept and the type of connection. The server response message would include a status code line and also information about the server capabilities. Now there are a number of different HTTP status codes. Now some common responses include the following. Most likely we'll see success, and that means that the request test succeeded and the objects will appear later in the message. Redirection means further action must be taken in order to complete the request.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=94)** We could see client error, not found or a server error, which means the server failed to fulfill an apparently valid request, but most likely we're hoping for a 200 success status code. Now we can examine the headers in a couple of different ways. I've launched [[Wireshark]] and I'm going to be capturing traffic as I go to this website, [example.com](https://example.com). Now this site is used for testing such as what we're doing so we'll go to [example.com](https://example.com). Now I've captured the result and if you'd like to follow along I have the file in the exercise folder for chapter six. Now, once you open it, we're going to select frame seven and then follow the TCP stream. So we'll right click, follow TCP stream, and here we can see the headers. And when we look at this, here I see the request from the client in red up on the top and then the response from the server in blue down below. Now the first line that you see right here, it's a GET, says HTTP/1.1 and this is the most common version of HTTP. And we also see some other information, for example, the user agent, which is my browser in this case. Now down below is where we see the response from the server
>
> **[3:11](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/examining-http-headers-and-urls?u=76281980&t=191)** such as the parameters of the conversation. Now we see that we can view the headers in Wireshark, but there are other apps that we can use. Let me take you to another example at [websniffer.net](https://websniffer.net). So I'm at websniffer, and I can do exactly the same thing. And here I put [example.com](https://example.com) and I said submit. And here are the results. So if I scroll down here we can see the request header and basically the same information as we saw in Wireshark, but we also can see some other information in a different format. But if I scroll down, there's a nice little tool that builds in. It gives us this source code. Now this is powerful because here we can take a look at information on that page and we could see possibly some webpages that are embedded within it that we could research a little further. And then sometimes there's usernames and passwords and also comments. So HTTP headers can give us a lot of information and can be used as a precursor to an attack. So now let's test your knowledge. HTTP is an application-layer protocol for browsing the web. Explain how HTTP headers can tell us the types of servers and browsers that are used during a webpage transaction. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (3)
> **Env Vars:** http (9), tcp (3)
> **URLs:** [example.com](https://example.com) (3), [websniffer.net](https://websniffer.net) (1)
> **UI Navigation:** go to (2), scroll down (2)
> **Definitions:** is an  (2), means that (1)
> **Analogies:** such as (2), for example (1)
> **Cross-References:** later in (1), as we saw (1)
> **Ports:** port 80 (1)

#### [Scooping data with TShark](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/scooping-data-with-tshark?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/scooping-data-with-tshark?u=76281980&t=0)** - [Instructor] Most network administrators are familiar with [[Wireshark]]. It has a rich, graphical interface with many built-in tools. However, you really should try TShark. It's a command-line tool and it's very lightweight. In this segment, we'll run a capture using TShark and then bring it into Wireshark for further analysis. For this demo, you'll go into the command-line interface and run as administrator. So first I need to get to the directory where Wireshark is so I'll change directories to program files. And because there's more than eight characters, I'll need to enclose that in quotes and press enter, and now I'll go to Wireshark. So now I'll build my command. And it's important to know what interface you need so if you have multiple interfaces, use ipconfig. So I built my command and what you see is, I tell it to use interface [[Wi-Fi]], with a duration of 10 seconds and to write to a file called tshark.pcap. And you should put the extension, and we'll run that. Okay, now it's complete so I can get the file. So there it is, tshark.pcap, and I'll open it in Wireshark. So there it is. Now you can see you have some choices.
>
> **[1:34](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/scooping-data-with-tshark?u=76281980&t=94)** For a lightweight application, use TShark and then bring it into Wireshark for a rich graphical experience. Now let's test your knowledge. TShark is Wireshark's lightweight command-line partner. Explain how to run TShark, and then bring the file into Wireshark for further analysis. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (8), [[Wi-Fi]] (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Sniffing tools for mobile devices](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-tools-for-mobile-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-tools-for-mobile-devices?u=76281980&t=0)** - [Instructor] There are times when you might need to sniff network traffic on something other than your laptop. In this segment, we'll learn some of the tools available to monitor and capture packets on a mobile device. Wire Shark is a powerful open source packet analyzer that you can use on your laptop to visualize all the traffic on the network. However, there are also packet sniffing tools for mobile devices. Now, keep in mind that some of the apps require you to have root access to capture packets but there are some that won't require that step. So let's take a look at some of the tools that can work on a mobile device. I'm here at this website and we can take a look at tPacketCapture. Now, tPacketCapture is an [[Android]] app that captures and analyzes network traffic on a mobile device and I'll scroll down where you can see some of the graphics and some of the instructions. It has similar features to Wire Shark and it works by using a local VPN, so you don't have to route the phone in order to capture and record traffic. Now, once you're done capturing the traffic you can transfer the PCAP file to Wire Shark for a more detailed analysis. Perfecto is a cloud-based testing platform that provides a suite of testing tools for web and mobile applications.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/sniffing-tools-for-mobile-devices?u=76281980&t=95)** It offers a wide range of features and capabilities designed to help developers test their applications across a wide range of devices, browsers, and platforms. And the last one we'll look at is [[Wi-Fi|wifi]] Inspect. Now this is a tool that can be installed on an Android device, and here we can see some images. Now this app not only captures traffic but it also has many built-in tools such as host discovery along with vulnerability analysis and port scanning. However, you will need route access to take advantage of all the features. Now, let's test your knowledge. There are times when you might need to sniff network traffic on something other than your laptop. Discuss some of the tools available to monitor traffic and capture packets on a mobile device. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Android]] (2), [[Wi-Fi|Wifi]] (1)
> **Definitions:** is a  (3), is an  (1)
> **Code Identifiers:** tpacketcapture (2)
> **Env Vars:** vpn (1), pcap (1)
> **UI Navigation:** scroll down (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Investigating Omnipeek](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=0)** - [Narrator] When it comes to packet sniffing tools, you have a lot of choices today. In this segment, we'll learn of the many features within Omnipeek, another packet capture tool that you can use to investigate the network. I'm here at this webpage, LiveAction. Now let's take a look at Omnipeek, which is a commercial packet sniffer and protocol analysis tool. It's available on a [[Windows]] platform and has many features. Omnipeek is like [[Wireshark]] in that it's a [[Real-Time]] protocol analyzer and could decode over a thousand protocols. Once in, you can scroll down and we can see some of the features. It has a nice graphical interface. You can do [[Wi-Fi|WiFi]] troubleshooting, monitor distributed networks remotely, conduct voice and video monitoring and troubleshooting, and a lot more that deals with troubleshooting your network. Now, you can do a five day trial, which is what I did. Go to free trials and select Omnipeek Network Protocol Analyzer and you have to fill out a little form and then you can begin your trial. I got the trial, I downloaded it and installed it, and now we can take a look. I'm at the start page, where it shows you some of the sample files that you can take a look at. Now I selected WPA and it opened it in a new tab.
>
> **[1:35](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=95)** Now, once you're here, similar to Wireshark and many other applications, there are menu choices that you can use to manipulate and move around in the interface. Now, in this, I wanted to show you over on the left hand side that there are a number of different [[Dashboards]] and you can see the network, some of the applications, the packets themselves... But this one I thought was interesting, especially for this packet capture, notes. Once I select notes here, we can see the pre-shared key, "wildpackets". All right, let's take a look at another one. We'll go to the start page, and this one is packet examples. This is a sample file with a variety of wired traffic. So we'll go to that tab, and again, once in the dashboards, we can select a number of different views: applications, packets. We can see client servers, flows... But within this capture there is a call, so go to voice and video and select calls and right click, and we can say, play audio. And it brings up the audio and you can listen to it to test for quality or just to see that there is voice going across your network that's unencrypted. Now, down below, something else that I thought was really interesting
>
> **[3:08](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/investigating-omnipeek?u=76281980&t=188)** is peer map. We'll select that. That's a visual. Now, of course, that is a way of visualizing what's happening between the end points. I like this because it's like [[Nmap]]. This peer map is a feature within Omnipeek that provides a visual representation of the network topology, and this also can include relationships between devices, switches, and routers in the network. Now here we see the communications, or the conversations that are taking place, and over here we see the end points. So as you can see, this is yet another packet capture tool that you can use to investigate the network. Now let's test your knowledge. Omnipeek is a commercial packet sniffer and protocol analysis tool. Outline a few of the many features within Omnipeek. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (2), [[Dashboards]] (2), [[Windows]] (1), [[Real-Time]] (1), [[Wi-Fi|Wifi]] (1)
> **Definitions:** is a  (6)
> **UI Navigation:** go to (4), scroll down (1)
> **Analogies:** similar to (1), it's like (1)
> **Env Vars:** wpa (1)
> **Speakers:** - [narrator] (1)

#### [Guarding against sniffing](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=0)** - [Instructor] Sniffing network traffic can be a precursor to an attack. In this segment, we'll discuss a few ways to defend your network against sniffing. Sniffing the network can give the network administrator a great deal of information on the status of the network, such as network [[Statistics]] and protocols that are in use. However, unauthorized sniffing may be considered illegal unless it's part of your job or you're monitoring your own network. But knowing that it might be illegal generally doesn't stop a hacker from sniffing the network. So let's talk about a few ways to protect our networks. One way is by using anti-sniffer software which can monitor a network to detect if a node is in promiscuous mode. Now, there are different methods used to identify sniffing. One is the ping method. Now, when sniffing traffic, the resources, such as RAM and processing speed on a laptop, can be quickly consumed and lead to increased latency when responding to a request. This method sends a series of ping requests out onto the network and monitors the response time from all hosts. Hosts that have a higher latency time could be in promiscuous mode. Another method is the DNS method. Now, when sniffing traffic,
>
> **[1:32](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=92)** some sniffers do recursive DNS lookups. This method monitors [[Domain Name System (DNS)|domain name system]] requests and responses on the network for unusual patterns or an increase in DNS traffic. In addition, there are programs that help detect sniffing activity. Now, some applications can be tuned to monitor for ARP spoofing, which might be an indication that someone is on the network sniffing. Now, apps include Snort, which is an [[Intrusion Detection]] system that can be used to detect ARP spoofing. arpwatch will monitor MAC address and IP address pairings in the ARP cache to see if there is any duplication. Another program is RITA, or Real Intelligence Threat Analytics, which monitors network traffic to detect potential malicious activity, such as malware, [[Phishing]] attacks, and advanced persistent threats. Now, there are some best practices to defend against sniffing. You'll want to disable any open ports in common areas to discourage hackers from tapping in and sniffing network traffic. Use encryption for most communications, such as email, webpage transactions, or device configuration. Keep in mind, however, encryption will not protect broadcast traffic on the network, such as [[DHCP]], CDP, or ARP.
>
> **[3:10](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/guarding-against-sniffing?u=76281980&t=190)** You should use other methods to protect these protocols as they can provide information on the devices in use on your network. The bottom line is it's not easy to detect sniffers. Therefore, you should use prevention to defend against sniffing attacks. Now let's test your knowledge. Sniffing can be a precursor to an attack. Outline methods that you can use to defend against sniffing. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (1), [[Domain Name System (DNS)|Domain name system]] (1), [[Intrusion Detection]] (1), [[Phishing]] (1), [[DHCP]] (1)
> **Env Vars:** arp (4), dns (3), ram (1), mac (1), rita (1)
> **Analogies:** such as (5)
> **CLI Commands:** node (1)
> **Definitions:** is an  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ethical-hacking-sniffers-18940733/next-steps?u=76281980&t=0)** - [Lisa] Thank you for watching. In this course, I covered the OSI model along with passive and active attacks. I reviewed attacks against protocols, such as [[DHCP]], ARP, and DNS. We then investigated various sniffing tools and techniques that include [[Wireshark]], CloudShark, and Omnipeek. And then we learned ways to defend against sniffing attacks. If you're interested in learning more about packet analysis, please check out my Wireshark series, Improve Your Wireshark Skills, and any course in the [[Ethical Hacking]] series will be well worth your time. You might also want to check out the CCNA [[Network Security]] series, and also see what my colleague Malcolm Shore has for you on his homepage. Keep learning. I hope to see you again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (3), [[DHCP]] (1), [[Ethical Hacking]] (1), [[Network Security]] (1)
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