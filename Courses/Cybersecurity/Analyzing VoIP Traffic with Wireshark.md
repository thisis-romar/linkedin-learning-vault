---
type: course
cssclasses:
  - lle-course
slug: analyzing-voip-traffic-with-wireshark
url: "https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark"
duration_minutes: 93
duration: 1h 33m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGOAnX93z3bDA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1619133874813?e=2147483647&amp;v=beta&amp;t=Ynte0u_g15vJwqrxxyniDWuCJc8FQeJmi46AU8BPKVc"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[VoIP- From Fundamentals to Troubleshooting]]'
  - '[[Wireshark- Network Traffic Analysis]]'
prev_courses:
  - '[[Learning Voip And Unified Communications]]'
  - '[[Wireshark- Malware and Forensics]]'
next_courses:
  - '[[Troubleshooting VOIP- Identify and Resolve Common VOIP Issues]]'
  - null
path_nav: '[{"path":"VoIP- From Fundamentals to Troubleshooting","position":2,"total":3,"prev":"Learning Voip And Unified Communications","next":"Troubleshooting VOIP- Identify and Resolve Common VOIP Issues"},{"path":"Wireshark- Network Traffic Analysis","position":5,"total":5,"prev":"Wireshark- Malware and Forensics","next":null}]'
path_count: 2
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Analyzing%20VoIP%20Traffic%20with%20Wireshark.md)

![Analyzing VoIP Traffic with Wireshark](https://media.licdn.com/dms/image/v2/C4E0DAQGOAnX93z3bDA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1619133874813?e=2147483647&amp;v=beta&amp;t=Ynte0u_g15vJwqrxxyniDWuCJc8FQeJmi46AU8BPKVc)

# Analyzing VoIP Traffic with Wireshark

> Voice over IP (VoIP) is a technology that sends voice data in packets using the IP network—allowing you to make calls using an internet connection instead of a traditional phone line. In this course, join Lisa Bock as she takes an in-depth look at VoIP protocols and components, as well as how to troubleshoot VoIP calls. Lisa begins with an overview of VoIP, discussing its uses, codecs, and compone

> [LinkedIn Learning](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark) | 1h 33m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Understand and troubleshoot VoIP](#understand-and-troubleshoot-voip)
  - [Getting the most out of this course](#getting-the-most-out-of-this-course)
- [**1. VoIP Overview**](#1-voip-overview) (4 videos)
  - [Voice over IP (VoIP)](#voice-over-ip-voip)
  - [VoIP and Unified Communications (UC)](#voip-and-unified-communications-uc)
  - [Digitizing a signal](#digitizing-a-signal)
  - [VoIP components](#voip-components)
- [**2. Protocols**](#2-protocols) (6 videos)
  - [Protocols overview](#protocols-overview)
  - [TCP/IP](#tcpip)
  - [DHCP](#dhcp)
  - [Real-Time Transport Protocol](#real-time-transport-protocol)
  - [Real-Time Control Protocol](#real-time-control-protocol)
  - [Skinny Client Control Protocol (SCCP)](#skinny-client-control-protocol-sccp)
- [**3. Connecting Systems**](#3-connecting-systems) (6 videos)
  - [Gateways and gatekeepers](#gateways-and-gatekeepers)
  - [Understanding MGCP and Megaco (H.248)](#understanding-mgcp-and-megaco-h248)
  - [Session Initiation Protocol](#session-initiation-protocol)
  - [H.323 family](#h323-family)
  - [Establishing an H.323 connection](#establishing-an-h323-connection)
  - [Evaluating H.323](#evaluating-h323)
- [**4. Network Operations**](#4-network-operations) (5 videos)
  - [Performance overview](#performance-overview)
  - [Quality of service](#quality-of-service)
  - [Domain Name System](#domain-name-system)
  - [Directory integration](#directory-integration)
  - [Using STIR/SHAKEN to reduce robocalls](#using-stirshaken-to-reduce-robocalls)
- [**5. Wireshark Statistics**](#5-wireshark-statistics) (4 videos)
  - [Dissecting a VoIP call](#dissecting-a-voip-call)
  - [Evaluating call quality](#evaluating-call-quality)
  - [Analyzing an RTP stream](#analyzing-an-rtp-stream)
  - [Recognizing jitter](#recognizing-jitter)
- [**Conclusion**](#conclusion) (0 videos)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand and troubleshoot VoIP](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understand-and-troubleshoot-voip-27990966?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understand-and-troubleshoot-voip-27990966?u=76281980&t=0)** - [Lisa] Voiceover internet protocol, or IP telephony, uses the IP network to send voice data in packets. Join me as I share my knowledge of voiceover IP and video conferencing along with protocols that include TCP/IP, [[Real-Time]] protocols, and Skinny so that you can better troubleshoot your VoIP calls or review network operations, quality of service, and directory integration. We'll then finish with a deep dive into [[Wireshark]] [[Statistics]] to help dissect a VoIP call, analyze RTP traffic, and recognize jitter. Hello, my name is Lisa Bock. Are you ready? Then let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (1), [[Wireshark]] (1), [[Statistics]] (1)
> **Env Vars:** tcp (1), rtp (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [lisa] (1)

#### [Getting the most out of this course](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/getting-the-most-out-of-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/getting-the-most-out-of-this-course?u=76281980&t=0)** - [Narrator] This course is an intermediate course intended for network administrators, students, teachers, or anyone with an interest in learning more about voiceover IP and ways you can troubleshoot using [[Wireshark]]. Throughout the course we're going to examine pre recaptured packets that are mainly from online repositories. A high level knowledge of networking technology will help to clarify some of the concepts discussed in this course. However, if you have a basic understanding of networking terms and concepts along with an interest in the subject you should be able to follow along with the lessons. I cover a lot of information but I have provided some files for you. Go to the exercise file on the welcome screen and then once there you'll find a document with selected challenges from the material along with links to resources such as additional reading. During selected segments I'll identify a challenge using the following icon along with a question from the video. Use the document to write out responses to challenges that I cover throughout the course. I am super excited to bring you Wireshark voice over IP so sharpen your pencil and let's start learning.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (2)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** is an  (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [narrator] (1)


### 1. VoIP Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [Voice over IP (VoIP)](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voice-over-ip-voip?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voice-over-ip-voip?u=76281980&t=0)** - [Instructor] When you pick up the phone to make a call, you'll most likely use Voice over IP or VoIP, which is changing the way we communicate. Voice over IP or IP telephony uses the existing internet and network to transfer and route voice traffic in IP packets. In many cases, it's part of a unified communication system. Voice over IP is a group of technologies used to transmit voice and multimedia over an IP network. VoIP can use both proprietary and open standards. Examples include Skype, [[Google]] Hangouts, and others. In addition, there's a number of VoIP apps available for tablets, laptops, or phones. VoIP has been in use for over 20 years, however in the last 10 years, we have seen astonishing growth in Voice over IP. The VoIP market is rapidly expanding all over the world in terms of subscribers, growth, and traffic. Consumers and businesses are cutting the cord as more traffic uses VoIP than the traditional public switched telephone network. VoIP is slowly replacing landlines. Studies show that 60% of households in the US and Europe are replacing traditional landlines from the phone company with Voice over IP, most likely due to the low cost of bundled services with their ISP.
>
> **[1:37](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voice-over-ip-voip?u=76281980&t=97)** In fact, some states are no longer supporting landlines. Many businesses see the benefits of choosing a VoIP solution. Businesses can lower the cost of local and long distance phone calls by up to 40%. Using voice and web conferencing reduces travel costs, and using VoIP as part of a unified communication solution helps improve productivity, which translates to cost savings for a business. Over half the businesses in the US are using VoIP with the other half starting to follow. The internet is constantly being optimized to support voice traffic, and [[Microsoft Products|products]] and services are available to combine data and voice networks. Eventually the internet and the telephone network will be one and the same. Voice over IP offers cost savings, is convenient, and is changing the way we communicate, and that is why we need the tools and knowledge to optimize and improve our networks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (1), [[Microsoft Products|Products]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** isp (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [VoIP and Unified Communications (UC)](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-and-unified-communications-uc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-and-unified-communications-uc?u=76281980&t=0)** - [Instructor] Today's world, we use a combination of communication methods, including email, phones, instant messaging and video conferencing. Communication can be either realtime or non-realtime. Realtime communication is synchronous and includes voice, video conferencing and live chat. During realtime communication, the sender and receiver communicate in both directions at the same time. Non-realtime communication is asynchronous and includes blogs, fax, traditional mail and email. It's not time sensitive. It's posted and then picked up at another time. Unified communications are tools that rely on a VOIP foundation and combines different [[Forms]] of communication. Unified communications provides a framework for consistent user interface across multiple devices and improves [[Business Communications]]. Unified communications leverages the IP network. We can combine communications across a wide range of platforms, including commercial off-the-shelf tools, such as [[Microsoft Outlook|Outlook]] and [[Customer Relations]] management and mobile apps. Features can include voice, voicemail, fax, chat, email and video conferencing. At the heart of unified communications
>
> **[1:36](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-and-unified-communications-uc?u=76281980&t=96)** is IP telephony or VOIP. With unified communications, an individual can send a message one one platform and receive the response on another. Unified communications has many benefits, and it improves overall productivity. Unified communications leverages the IP network, and that is why we must be vigilant in providing proactive monitoring and tuning of our networks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1), [[Business Communications]] (1), [[Microsoft Outlook|Outlook]] (1), [[Customer Relations]] (1)
> **Env Vars:** voip (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Digitizing a signal](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/digitizing-a-signal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/digitizing-a-signal?u=76281980&t=0)** - [Instructor] While in a conversation, we must be able to hear and understand what the other party is saying. Voice communication involves analog and digital communication and that we speak in analog which is a continuous wave form. In order for the signal to travel over a digital network, we digitize and encode the signal. The range of human hearing is between 20 and 20,000 cycles per second. Testing demonstrates a human can understand speech in the frequency range between 300 and 3,300 hertz, this is called the voiceband range. Digitization takes an analog signal and approximates how it should sound. The goal is toll quality. A codec converts the analog signal into a digital signal for transmission. To remove redundancies and compress the data to enable faster transmission and conserve bandwidth. Codecs typically break down speech into 20 millisecond segments. The lower the bandwidth, the lower the quality. A more complex algorithm will provide better quality for a given bandwidth. There are a number of codecs for Packet networks in the G.700 series as we see in this table. However, the most commonly used
>
> **[1:35](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/digitizing-a-signal?u=76281980&t=95)** is G.711 or Pulse Code Modulation. An algorithm measures how faithful the voice is and assigns a mean opinion score or MOS. The quality depends on a number of different parameters including the number of participants on the call, the environment, and the type of equipment. According to industry standards and recommendations, we see that the rating of 3.5 to 4.2 is an acceptable range for voiceover IP traffic. And because people like to hear a sound during a call, even if the party is not actively speaking, a voice activity detector detects if there is active speech or not and inserts comfort or synthetic background noise during periods of silence. Codecs encode or decode a data stream to remove redundancies and improve transmission speeds. The most commonly used codec is G.711 or Pulse Code Modulation.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is called (1), is an  (1)
> **Versions:** 3.5 (1), 4.2 (1)
> **Env Vars:** mos (1)
> **Speakers:** - [instructor] (1)

#### [VoIP components](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-components?u=76281980&t=0)** - [Narrator] When using voice over IP, most systems have several necessary components that include terminals, applications, codecs, gateways, protocols and network operations. Terminals are the end devices that interface with the user and include soft phones and computers. A soft phone is a computer that looks like a phone. It allows you to make phone calls using voice over IP. It has a standard phone interface and handset and many have a digital or video interface for messages and presence information. If using a computer as a terminal, you'll need a headset or a microphone and a speaker. Gateways are devices that convert media streams from one set of communications standards to another by using two main functions, media and signal conversions. Gateways are essential when communicating in a complex network with the Public Switch Telephone Network, ISDN, fax machines and other networks. In order to transport streaming media such as telephony and video teleconference applications, over IP networks, multiple protocols are involved to provide setup, communication control and data transport. And include RTP, Megaco, SIP and H.323. Codecs encode or decode a data stream.
>
> **[1:37](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-components?u=76281980&t=97)** To remove redundancies and improve transmission speeds. There are various codecs. Each has specific characteristics such as bit rate and voice quality. WANs, LANs, and the technologies used to access the physical network that IP package travel, are an essential part of voice over IP and unified communications. Routers, switches and voice gateways carry data, voice, and video between all network devices and applications. The infrastructure must provide high availability, management, quality of service and [[Network Security]]. A voice over IP system has many different components. All of which play an important role in providing exceptional quality and ensuring an optimal [[User Experience (UX)|user experience]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Network Security]] (1), [[User Experience (UX)|User experience]] (1)
> **Env Vars:** isdn (1), rtp (1), sip (1)
> **Analogies:** such as (2)
> **Prerequisites:** you'll need (1), setup (1)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 2. Protocols

[↑ Back to Table of Contents](#table-of-contents)

#### [Protocols overview](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/protocols-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/protocols-overview?u=76281980&t=0)** - [Instructor] A protocol is a set of rules that governs how systems communicate with each other. In Voice over IP, there are multiple protocols that are involved that provide setup, communication control, and data transport. TCP/IP is the internet suite that connects devices on the internet. The suite defines how data is packet-ized, addressed, transmitted, and routed. [[DHCP|Dynamic Host Configuration Protocol]] supplies network hosts with an IP address and other configuration information such as the subnet mask and default gateway. [[Real-Time]] Transport Protocol transports audio and video. Real-Time Control Protocol carries control information for each RTP session. Real-Time Streaming Protocol establishes and controls multimedia sessions in entertainment and communication systems. Session Initiation Protocol establishes, maintains, and terminates sessions between parties over the internet, private network, and cell systems. Skinny [[Call Control]] Protocol is a Cisco proprietary signaling protocol used to register endpoints, provide addressing, return call messages, and control phone display. H.323 establishes properties such as audio codecs
>
> **[1:37](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/protocols-overview?u=76281980&t=97)** and logical controls for the media transfer. Demand for multimedia applications is increasing. In order to transmit streaming media successfully, multiple protocols are necessary to provide setup, data transport, and communication control over an IP network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (3), [[DHCP|Dynamic host configuration protocol]] (1), [[Call Control]] (1)
> **Env Vars:** tcp (1), rtp (1)
> **Analogies:** such as (2)
> **Prerequisites:** setup (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [TCP/IP](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/tcp-ip?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/tcp-ip?u=76281980&t=0)** - [Instructor] TCP/IP or the internet suite is a set of protocols that allows us to communicate and exchange data on the network. The suite defines how data is packetized, addressed, transmitted, and routed. TCP/IP is the predominant communication suite and resides at the network and transport layer. Other protocols will ride on top of the TCP/IP suite, such as HTTP, FTP, and SMTP. The network layer deals with [[Routing]] the packets from the source to its destination. The main players in the network layer are IP and ICMP. IP is responsible for addressing, and it doesn't have any error reporting functions. IP is a connectionless, best effort protocol, meaning there's no guarantee it will get to its final destination. ICMP is used along with IP to carry error, routing, and control messages. It does not exchange any data between systems. The transport layer provides data transport, and the key players are TCP and UDP. Transmission Control Protocol is a connection-oriented protocol that provides reliable data transfer by sequencing and acknowledging data.
>
> **[1:35](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/tcp-ip?u=76281980&t=95)** User Datagram Protocol is a connectionless transport layer protocol for data transport and is used for time-sensitive applications, such as voice over IP, video conferencing, [[DHCP]], and DNS. On a network, TCP is the more predominant transport layer protocol. TCP is more reliable than UDP because it provides sequencing and acknowledgments. However, we will see that RTP, the protocol that transports audio and video, has a number of different TCP-like fields, such as sequence number, timestamp, source identifier, and control methods that help in the accurate delivery of voice and video. TCP/IP, or the internet suite, is a set of protocols that allows us to communicate and exchange data on the network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (2), [[DHCP]] (1)
> **Env Vars:** tcp (8), icmp (2), udp (2), http (1), ftp (1)
> **Definitions:** is a  (5)
> **Analogies:** such as (3)
> **Speakers:** - [instructor] (1)

#### [DHCP](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dhcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dhcp?u=76281980&t=0)** - [Instructor] [[DHCP|Dynamic Host Configuration Protocol]] dynamically assigns IP addresses on a [[Local Area Network (LAN)|local area network]]. A Cisco IP phone needs the [[DHCP]] server to provide an IP address. Special DHCP option 150 is used to send the unified communications manager's address to the VoIP devices so they can register and receive configuration information. A router can act as the DHCP server for its location. And you'll most likely separate the voice and data networks so you'll need to use two DHCP pools. I've opened a packet tracer file to show how the commands are used to set up the DHCP pools on a router. Now these commands are pretty straightforward. Let's get into configure your terminal. And we'll start with creating the DHCP pool named voice.
>
> **[1:18](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dhcp?u=76281980&t=78)** Put in the network address.
>
> **[1:32](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dhcp?u=76281980&t=92)** And we'll put in the default router's IP address.
>
> **[1:43](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dhcp?u=76281980&t=103)** And now we'll create a DHCP pool named data.
>
> **[2:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dhcp?u=76281980&t=120)** And again, we'll put the default router's IP address. And then we'll put the special option.
>
> **[2:18](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dhcp?u=76281980&t=138)** And then we can exit. Special option 150 is only required on a voice VLAN. However, you'll want to include option 150 on the data VLAN, in case you ever use a cellphone on the PCs. So DHCP is also another protocol necessary to carry voice over IP traffic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (8), [[DHCP|Dynamic host configuration protocol]] (1), [[Local Area Network (LAN)|Local area network]] (1)
> **Env Vars:** dhcp (8), vlan (2)
> **Prerequisites:** you'll need (1), set up (1), configure (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Real-Time Transport Protocol](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=0)** - [Instructor] [[Real-Time]] Transport Protocol is a transport protocol for media with real time characteristics. It's multicast friendly and has many encoding possibilities. Many times, RTP is over UDP, which is a lightweight transport protocol. In order to ensure additional information about the transmission, RTP has a number of different TCP-like fields, such as sequence number, timestamp, and source identifier. So here is an RTP header. And we're going to go through those field values in [[Wireshark]]. Now I'm at this website which is CloudShark, and I've opened up a packet capture here, you can see, and I filtered it on RTP. Now what we'll do is go to Export, Download File, and what I did was bring it into Wireshark, but you can watch it or take a look at it here. So once you get into Wireshark and then I filtered it by RTP, Now we can just see the RTP traffic. All right, now what I wanted to do was kind of take look, we'll go to [[Statistics]] and Flowgraph, and limit it to Display Filter, and bring in the flowgraph. And here you can see RTP between the two end points. Now I'll close this. And now we'll take a closer look at RTP.
>
> **[1:34](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=94)** Now what I'll do is I'll bring up this image of RTP, and we'll just keep it up on top. So down below here you can see RTP, or Real-time Transport Protocol. Now we'll blow this out, and now we can take a closer look at this. Now when we look up here, you can see a little bit of details that is in brackets, and it says stream setup in frame one. That is done by Wireshark to keep track of the stream. But now we'll go through those fields. So up here, we'll see the first one. It says version. That identifies the version of RTP and this is version two. The next one, it's a P, which is for padding. Now padding is sometimes necessary in any of the headers, as you know, but this may be needed by some encryption [[Algorithms]] with fixed block sizes for carrying several RTP packets in a lower layer protocol data unit. As you see, there is no padding here. And now we see the extension and in this case it says false. But if the extension bit is set, the fixed header is followed by one header extension. And in this case, there isn't any. Now I'll scroll down a little bit here. Now we're at contributing source. Contributing source identifiers, and this tells us the count. And this is the number of contributing source,
>
> **[3:09](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=189)** or the identifiers that follow the fixed header, and in this case, there are none. And then down below here, we see marker. And I'll just scroll up just a little bit here. The marker bit is used by specific applications that will serve a purpose of its own, and in this case that you see that there is a marker bit. Now down below here, we see what is our actual payload type. Now this identifies the format, and here you can see G.711, which is pretty common. So this tells us the format, or encoding, of the RTP payload. And of course that'll determine its interpretation by the receiving application. Now we see the sequence number that is used for beginning that stream, and in this case, it's sequence number one. This is used in order to monitor and reorder packets, and also to help detect loss. And this is, again, where some things do happen across the network. The initial value of the sequence number is random and/or unpredictable, and that is, of course, to protect that stream. Now we'll go down to timestamp. This is used to place the incoming packets in the correct timing order. Now here we see some either synchronizing source or contributing source. And here you can see the synchronizing source identifier. This is when there is any multicast done, and any contributing source identifiers
>
> **[4:42](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=282)** that will identify a source that has contributed to the combined stream. And then you see the payload, which will follow in that. So, as you can see, even though, and I'm going to just scroll up here and there you see your transport layer protocol is UDP. It is UDP, but it has a whole lot of TCP-like fields to help with additional information about the transmission. So Real-time Transport Protocol is a transport protocol for media with real-time characteristics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (4), [[Wireshark]] (4), [[Statistics]] (1), [[Algorithms]] (1)
> **Env Vars:** rtp (13), udp (3), tcp (2)
> **UI Navigation:** go to (2), scroll up (2), scroll down (1)
> **Definitions:** is a  (4), is an  (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Real-Time Control Protocol](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=0)** - [Instructor] We know that [[Real-Time]] Transport Protocol is a protocol for media with real-time characteristics. However, we also need something to report on the status of the streams. Real-Time Control Protocol is a sister protocol to Real-Time Transport Protocol, that provides control information and [[Statistics]] for an RTP flow. Now, RTP creates a session for each media stream. Real-Time Control Protocol controls the RTP session by passively gathering statistics, and reports information about each session. Real-Time Control Protocol then provides feedback on the quality of the data and characteristics of the stream to the media source, and other session participants, in order to help localize network problems, such as jitter. All sites should use a common type, such as Network Time Protocol, or Global Positioning Satellite. This helps support synchronized media delivery and jitter calculations. Now there are reports that are sent by all participants. Now this is whether it's a single participant, or part of a massive multicast session. To avoid congestion, Real-Time Control Protocol ensures bandwidth management by limiting the frequency of reports to only once every five seconds. Often, you'll find at least two
>
> **[1:37](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=97)** Real-Time Control Protocol packets bundled into a single UDP data unit. This will minimize packet processing overhead to the routers. Now what are the reports? Well we see a sender report. The sender report is sent periodically by all active senders in a conference. This sender report includes statistics for all RTP packets sent during the interval, and uses an absolute timestamp that allows the receiver to synchronize the RTP messages. This helps and if you kind of think about this as lip sync to keep everything synchronized. The receiver report is sent by all participants that receive RTP packets to report on the quality of service. Within this you'll also see sometimes source description. And this will send the CNAME or the alias from an existing A record item to session participants if this is available. And then there might be some additional information such as name, email address, telephone number, and address of the owner or controller of the source. At the end of the participation, you'll see a BYE message and this will shut down a stream. It's pretty much a direct announcement that it's leaving the conference. Another report is application specific, and this is a way to design application specific extensions
>
> **[3:12](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=192)** to the Real-Time Control Protocol. I'm at CloudShark and here I have a stream that we can take a look at. There is a lot more information in here as you can see, it is a lot of SIP and also Telnet and other information. But it does give us a good example of Real-Time Control Protocol. Now what I did was I went to Export, Download the file and I opened it up in [[Wireshark]]. Or you can take a look at it right here in CloudShark. So once I opened it, now you can take a look and there is a lot of other traffic in here. So I can filter by Real-Time Control Protocol. And here we could just see the Real-Time Control Protocol and the reports that are within it. And as you can see, that they are bundled together, generally have two or three reports in there. And I'll take this off 'cause what I want to do is go to a specific packet. 529, and here we can actually see. 529 is preceded by 528 which has the Real-Time Transport Protocol. I want to point out that it is using destination port 8000. Now I'll go right to packet 529 and here we see that this is coming from source port 8001, which is one above. So, RTP takes an even port,
>
> **[4:45](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=285)** and Real-Time Control Protocol will grab the odd port. So within that here, we'll just scroll up here. And now you can see the three reports, and there is your sender report, and that is periodically sent by all active senders in a conference. And that receiver, the receiver report, that is sent by all participants that receive the RTP packets. And this is to help report on the quality of service. And here we have a source description, and this is information about the source, which you can see and I'll just show you here. A little bit more information about the identifier. And I'll scroll down, source description identifiers within that. So Real-Time Control Protocol is a supporting protocol to RTP that passively gathers statistics. Reports are sent by all participants to provide control information and statistics for an RTP flow.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (15), [[Statistics]] (5), [[Wireshark]] (1)
> **Env Vars:** rtp (10), udp (1), cname (1), bye (1), sip (1)
> **Definitions:** is a  (7)
> **UI Navigation:** go to (1), scroll up (1), scroll down (1)
> **Analogies:** such as (3)
> **Ports:** port 8000 (1), port 8001 (1)
> **CLI Commands:** find (1)
> **Exercise Files:** download the (1)

#### [Skinny Client Control Protocol (SCCP)](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=0)** - [Instructor] Skinny Client Control Protocol is a Cisco proprietary protocol, and it's used to control Cisco IP phones and other Cisco endpoint devices. Skinny is similar to Session Initiation Protocol and H.323, but many feel it's easier to troubleshoot than H.323. We'll see that Skinny starts out and uses port 2000, and then the connection then moves to RTP. We're going to take this into [[Wireshark]]. I have a packet capture that was done in a lab, so here we can see some of the conversation over here on the right-hand side. MediaPathEvent, OffHook, SetRinger, SetLamp, and other dialogue, so different things that are occurring, and the communication that happens that causes the messages that are sent to the call processing software. This then helps the device to take the action that has been indicated. When we take a look at this, we'll see that we know that RTP is being used, but it doesn't quite decode it as RTP. Let's go to [[Statistics]] in Flow Graph. In the beginning, we see some just basic information about some commands that are sent. Now we're going to scroll down here.
>
> **[1:34](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=94)** What we see there is Port 16384, and it's saying it's UDP, but it doesn't know that it's supposed to be RTP. I'm going to close this Flow Graph, and I want to go to take a look at port usage here at [SpeedGuide.net](https://SpeedGuide.net). I just put in port 16384. Now you can see that there are other applications. We do see that RTP is using 16384, so we're pretty confident that that's what it should be. I'm back in the packet capture, and as you see, it still looks like it's supposed to be UDP, but let's see if the Telephony will help us. We'll go on to Voiceover IP Calls. Well, we see that, gee, there's something going on. It looks like there should be some activity, and there's some packets. Let's just say Play Streams, and there's nothing here to play, so we're going to close that, and let's close that. Let's help it out. Within Wireshark, there is something that we can do called Decode As. We're going to go into the User Datagram Protocol in the Source Port, and in this case, we'll say Decode As. Currently, there is nothing, so we're just going to type RTP. Now we force it to decode as RTP, and now it says it's RTP, but we'll do one more thing just
>
> **[3:08](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=188)** to make sure that it's going to decode as RTP. We'll go into Analyze, and go to Enabled Protocols, and down below we'll search RTP, and here we want to make sure that RTP is over UDP, and we'll say yes, and we're going to say okay, and so we really kind of just forcing it to recognize it as RTP. Now, we'll go into Telephony and Voiceover IP Calls, and I can see that I know there's some activity. I'll go to Play Streams, and there's nothing here. Well, we'll do one more thing. I'm going to just close this, and in this case, it's already understanding that it is supposed to be RTP, and there's the data, so there's enough to put everything together. We'll go to Telephony, and this time we'll go to RTP, and RTP Streams. Now you can see your two streams, and now let's say Analyze. We'll go to the Analysis, and there we find a lot of the data about the streams, and in this case, we can see that in the lower, right-hand corner, we say Play Streams, and there's our stream. We'll select it, and let's play it.
>
> **[4:28](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=268)** - [Man In Background] Hello. - [Man] Hello, Mr. Boller. (background chatter) No ring, but conversation ensues. Okay.
>
> **[4:40](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=280)** - [Instructor] Okay, so now you can see what we had to do was force Wireshark to render it as RTP. Skinny Client Control Protocol is a Cisco proprietary protocol that controls endpoint devices. When you open it in Wireshark, sometimes Wireshark doesn't decode the stream as RTP, so we have to say decode it as RTP so that the streams can be played back in Wireshark.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (6), [[Statistics]] (1)
> **Env Vars:** rtp (18), udp (3)
> **UI Navigation:** go to (7), scroll down (1)
> **CLI Commands:** make (2), find (1)
> **Ports:** port 16384 (2), port 2000 (1)
> **Speakers:** - [instructor] (2), - [man (1)
> **Definitions:** is a  (2)
> **URLs:** [speedguide.net](https://speedguide.net) (1)


### 3. Connecting Systems

[↑ Back to Table of Contents](#table-of-contents)

#### [Gateways and gatekeepers](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/gateways-and-gatekeepers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/gateways-and-gatekeepers?u=76281980&t=0)** - [Instructor] Today, when you make a call, the communication channel will most likely pass through several different types of networks in order to get to the final destination. As we see in this graphic, a phone call may have to pass from the public switched telephone network, through the internet, to a corporate voice over IP system. As media travels through networks, gateways, or devices that adjust to the different network signaling requirements and convert media streams from one set of communication standards to another. Signaling gateways use two main functions, media and signaling conversion. Gateways include media gateways, call agents or media gateway controllers, signaling gateways, and translators and mixers. Media gateways convert and packetize voice traffic into an RTP stream. Examples include trunking, such as a SIP trunk, that provides an interface between the legacy system and a voice over IP network, and a residential gateway that converts an analog signal to voice over IP. Media gateway control protocol is a master slave protocol that provides a central gateway by handling the signal and session management required during a multi-media session. Megaco is also known as H.248. This performs the same functions as media
>
> **[1:36](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/gateways-and-gatekeepers?u=76281980&t=96)** gateway control protocol, but as a newer protocol that uses different commands and processes. Megaco can operate with either H.323 or Session Initiation Protocol. Signaling gateways pass voice traffic between dissimilar networks. SIGTRAN, or signaling transport is a telephony protocol that transports SS7 signals through the internet. Session Initiation Protocol is an application layer protocol for signaling and control that establishes, maintains, and terminates sessions between parties over the internet, private networks, and cell systems. H.323 acts as a wrapper for media control and setup, and includes H.225, which establishes communications between two hosts, and H.245, which establishes properties, such as audio codex and logical channels for the media transfer. Translators and mixers are middleboxes that are placed in the network that transform the media stream within a session, and are sometimes necessary when handling conference sessions or traversing firewalls. Gateways and voice over IP are necessary to convert media streams, and include media and signaling gateways, along with translators and mixers.

> [!info]- Semantic Content
>
> **Env Vars:** rtp (1), sip (1), sigtran (1), ss7 (1)
> **Definitions:** is a  (2), known as (1), is an  (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Understanding MGCP and Megaco (H.248)](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=0)** - [Instructor] When transmitting multimedia over an IP network the signal must go through multiple transformations and devices before reaching its final destination. In this segment, we'll discover how MGCP Megaco controls the way Media Gateways set up multimedia transmissions. We'll also dissect a transaction and [[Wireshark]] to see how media gateway control protocol interacts with a Cisco call manager. First, let's talk about some of the devices involved. Media Gateways provide media logic to convert circuit switch to packet based traffic. Media Gateway Controllers, also called Call Agents or Soft Switches, provide signaling logic. So let's talk a little bit more about the Call Agents. Call Agents are external control devices in a voice system such as the Cisco Unified Communications Manager. Immediate gateway control protocol, the Call Agent has complete control of the gateway and performs all of the administrative tasks. All route patterns and dial plans are configured on the call manager. The Call Agent contains the control intelligence, endpoints will communicate changes in service state to the call agent. The call agent can then create, modify and delete connections in order to establish and control media sessions
>
> **[1:38](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=98)** with other multimedia endpoints. Now let's talk about the protocols. Media Gateway Control Protocol is a primary secondary protocol that provides a central gateway by handling the signal and session management required during a multimedia session. Megaco, more commonly known as H.248 performs the same functions as media gateway control protocol, but is a newer protocol that uses different commands and processes. Megaco will operate with either H.323 or SIP. In this graphic, we can see where the interchange between the call agent and the media gateway takes place by using either Media Gateway Control protocol or Megaco. I found this site that can help you understand how Media Gateway Control protocol interacts with the Cisco call manager. And if we scroll down, this will outline some of the basic commands that are used to exchange messages between the Call Agent and the gateway. So next, let's take a look at some of the transactions that occurred during a session in Wireshark. If you'd like to follow along, you can get the file here, select download and open it in Wireshark. I opened the file and saved it locally as sip.pcapng. Now here we can see a lot of commands as it's talking
>
> **[3:13](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=193)** with the device. There's a lot of dialogue and a lot of things that are happening, but we're really going to focus on the Media Gateway Control Protocol. So let's put in a filter. MGCP and press enter. And here we see 30 packets. So let's go to [[Statistics]] and flow graph and a limit to display filter. And here you can see the exchange. But I'll close that. I want to see the dialogue, so I'll right click and say, follow UDP Stream. And here we can see all the commands and how the Media Gateway Control Protocol interacts with the Cisco call manager. But let me bring that into [[Microsoft PowerPoint|PowerPoint]] to show us a little bit easier those different commands. So here we see the commands and one of those would be a restart in progress. And in this case the gateways going to notify the call manager that an endpoint or a group of endpoints are taken out or placed back into service. Now this may have happened for a number of different reasons. One of them being the signal didn't get to the call manager in some way. Here we see a notify, and this is where the gateway will inform the Cisco call manager when different events occur. A notification request is where the call manager's going to instruct the gateway to watch for specific events
>
> **[4:47](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=287)** such as hooks or different tones. And here we see create connection. This is where the call manager will create a connection between two endpoints. And you'll also see some other signaling including on hook transition, off hook or flash hook. Now let's test your knowledge, discuss some of the commands used during multimedia transmissions. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (3), [[Statistics]] (1), [[Microsoft PowerPoint|Powerpoint]] (1)
> **Env Vars:** mgcp (2), sip (1), udp (1)
> **Definitions:** is a  (2), known as (1)
> **UI Navigation:** scroll down (1), go to (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### [Session Initiation Protocol](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=0)** - [Instructor] Session initiation protocol, or SIP, is an application layer protocol for signaling and control that establishes, maintains, and terminates sessions between parties over the internet, private networks, and cell systems. SIP is the most common signaling protocol used in VoIP today. As a result, manufacturers are incorporating SIP into various [[Microsoft Products|products]], such as phones, proxies, gateways, and servers. SIP sessions may involve one or more media streams such as voice and video and includes videoconferencing, IM, gaming, and shared multimedia. For a call to take place, we have to establish, manage, and terminate. SIP sends an invite, which is sent to set up a VoIP call. An invite has a session description that allows participants to agree on the parameters of the call, such as media channels and codecs. In this invite, we see the request line tells me that this is SIP version 2.0 invite, which is sent to sip:Cleo@[Patra.net](https://Patra.net), and other information such as from and the caller's location. Within that invite there's also the session description protocol. This describes streaming media parameters
>
> **[1:35](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=95)** that perhaps include the format and other attributes so that both parties can agree upon those parameters. SIP messages go through either a proxy or redirect servers. Both will inspect the to field and then contact the location server to resolve the address. The servers include redirect servers that return information to the original sender; the proxy server will forward the message to the endpoint or other server; and a registrar server will record the location of clients and are normally located within the proxy. So now let's step through the process. With a SIP call process we see first the handshake. This is going to offer a list of supported streams in codecs and the answer will provide a list of accepted streams and codecs. And then in the conversation, RTP will carry the media directly between the endpoints. At the end of the call, you're going to see a SIP message with a bye in the request line. Now, if you'd like to follow along, go to this website where we can get a sample capture. What we're going to get is MagicJack in a short test call right here. And then you'll want to open it up in [[Wireshark]]. Now, once it's open, we're going to filter. Okay, we'll go up here and we're going to say SIP or RTP.
>
> **[3:15](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=195)** All right, so now we just have those two protocols and what we can do is go to [[Statistics]] and flow graph. And I'll bring this over and we'll say limit to display filter so we just have that SIP and then subsequent RTP, the conversation. All right, so now here you can see the invite and then down below you see RTP and they're using the codec G.711. We'll scroll all the way down and there you can see the request, we've said bye, and that means that they want to leave the session. All right, now we'll close this. Now we'll go up to the beginning here where we start with the invite, and here we see session initiation protocol, and I'll pull this up and here you see the header, and that, again, just says where it's coming from, and the request line, and there's your invite. And now, within the body, though, there's where we see the session description protocol. And you can find other parameters within that explaining what will be supported, and I'll bring that up, as well. Now, when we can finish up with going to telephony. Now, of course, we could go to VoIP calls, but in this case, let's go to SIP flows. And here you can see the SIP flow,
>
> **[4:50](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=290)** and then down below, play streams. And you'll see the two streams here, and there we could just output to the default output device. And we'll play the streams. (low-pitched telephone ringing) (higher-pitched telephone ringing) (low-pitched telephone ringing)
>
> **[5:12](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=312)** - [Caller] Test one, two three.
>
> **[5:17](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=317)** - [Instructor] So that's just a simple example of session initiation protocol, an application layer protocol for signaling and control that establishes, maintains, and terminates sessions between parties.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[Wireshark]] (1), [[Statistics]] (1)
> **Env Vars:** sip (13), rtp (4)
> **UI Navigation:** go to (4)
> **Analogies:** such as (4)
> **Speakers:** - [instructor] (2), - [caller] (1)
> **CLI Commands:** find (1)
> **URLs:** [patra.net](https://patra.net) (1)
> **Versions:** version 2 (1)

#### [H.323 family](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/h-323-family?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/h-323-family?u=76281980&t=0)** - [Instructor] H.323 Signaling is an ITU-T recommendation for audio and video communication across an IP network. H.323 acts as a wrapper for media control and includes H.225, H.245, which are both protocols that have a specific role in the call setup process. An H.323 network is made of several components, such as end points or terminals, a gateway, and a a multipoint control unit. This is used to bridge videoconferencing calls, and it includes a multipoint controller for call signaling, and a multipoint processor to mix, encode, and switch streams. Then there's the gatekeeper and a back-end service which holds information about terminals, configuration, and billing. The gatekeepers are very useful as they serve as a bridge between the H.323 network and the outside world. The gatekeepers provide address resolution and bandwidth control. An H.225 signal establishes communications between two hosts, which is initiated either using a TCP or UDP connection with an H.225 signal. This contains the registration admission status protocol
>
> **[1:35](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/h-323-family?u=76281980&t=95)** and negotiates with the gatekeeper and obtains the information of the endpoint it is attempting to contact in order to establish the call. An H.245 control protocol establishes properties such as audio codecs and logical channels for the media transfer. An H.245 protocol includes master slave determination. Now this is used to prevent conflicts between two terminals which want to start the process. It makes the decision about which one will be the master and which one will be the slave. Here you can see the H.323 call setup. It begins up above by what you see as Q.931, which has the protocol H.245, and then after that the call then begins immediate transfer using RTP. H.323 was one of the first voice over IP protocols that was developed and used by vendors. However, it is less popular since the development of SIP, but it is still in use. H.323 acts as a wrapper for media control and setup and includes H225 and H245, which provides audio codec and logical channels for the media transfer.

> [!info]- Semantic Content
>
> **Env Vars:** itu (1), tcp (1), udp (1), rtp (1), sip (1)
> **Prerequisites:** setup (3)
> **Analogies:** such as (2)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Establishing an H.323 connection](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=0)** - [Instructor] H.323 acts as a wrapper for media control and setup and was one of the first VoIP protocols developed and used by vendors. However, it's less popular since the development of sip but it's still in use today. In this segment, we'll focus on what transpires when establishing an H.323 connection. Now the call setup begins first with the connection established using Q.931, and then after that you see the call established using H.245 and then you see the media stream with RTP. In this segment, we can see an example of the call set up using Q.931. If you'd like to follow along, go to this website and you'll download and extract rtp_example.raw which is found right here and then you'll open it in Wire Shark. Now, once I brought it into Wire Shark, I saved it in a PCAP Next Generation format. Now within this capture, we see an example of this wrapper and some of the protocols within H.323. Now prior to our evaluation, we're going to check some of the protocols and make sure that we can reassemble the packet. Now this is probably already done but sometimes students will say that they're unable to get the capture to work or replay the capture. So we'll go into edit
>
> **[1:34](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=94)** and then preferences and then protocols. And we're going to look for TCP.
>
> **[1:46](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=106)** And right here we see that it is set to allow subdissector to reassemble TCP streams. Okay good. Next, we'll check TPKT. TPKT is transport service on top of TCP. And again, we actually see that it's going to be reassembled as well. So those two preferences are set and that's good because this is where we might see a problem. So I'll close this and now what we're going to do is start by looking at Q.931 In wire shark, the filter will be Q 931, and we'll press enter. All right, we'll pull this up and now let's examine the setup during the first phase which uses the protocol H.225. Now, this is pretty straightforward. However, this might be one place you could look while troubleshooting potential connection issues. And right here we see the standard exchanges of setup, alerting and connect, but we also see call proceeding. Now let me take you to a website where we can learn more about some of the messages you might encounter. So go to this website and it talks about Q.931. Now Q.931 is ISDN's connection control protocol roughly comparable to TCP in the internet protocol stack.
>
> **[3:24](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=204)** I'll scroll down here and we can see the most important message types and some of them include alerting, call proceeding and connect. But within those messages we see the exchange of bearer capability because it is an ISDN protocol. So now let's go back into wire shark and we're going to expand packet four. So I'll just drop this down and here we first see and I'll scroll this up, Q.931 and we see a lot of information here, the bearer information, the bearer capability and I'll pull this up, display name and then I'll pull this up and we'll take a look at H.225 and we'll expand that. Here we see user information, message body and some of the information as far as the setup, source information and down below here we see alias address, m.jemec. So let's take a look at a little bit more information on endpoint aliasing. I'm here at this site on H.323 endpoint aliasing and down below it talks about H.323. The ID is a string based alias assigned to the endpoint such as conference room 222 or [[John the Ripper|John]] Smith. And these are useful only locally. However, this information can be essential as if the alias is not authorized, the call may be rejected.
>
> **[4:59](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=299)** So now we'll do one more thing. We'll bring this up and we'll go into telephony and we'll look at some of the [[Statistics]], one being H.225. And when we're take a look at this, you can see that there's setup and then down below you see call progress and connect. And there isn't anything really problematic. However, if you're benchmarking this type of traffic and you want it to go back and evaluate the type of information when life was good, this could be valuable. So when you do this, you can say, Save As and you can save it in one of the different formats such as text which I did, comma separated value or YAML and I'll just cancel that. But then you could go back and compare it which can be valuable. So now we understand what transpires when establishing an H.323 connection. Now let's test your knowledge. H.323 acts as a wrapper for media control. Outline a few of the steps that you will see during the Q.931 call setup. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[John the Ripper|John]] (1), [[Statistics]] (1)
> **Env Vars:** tcp (4), tpkt (2), isdn (2), rtp (1), pcap (1)
> **Prerequisites:** setup (7), set up (1)
> **UI Navigation:** go to (2), scroll down (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** rtp_example (1)

#### [Evaluating H.323](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980&t=0)** - [Instructor] H.323 acts as a wrapper for media control and includes H.225 and H.245, which are both protocols that have a specific role in the call setup process. In this segment, we'll focus on H.245 which establishes the properties of the call. H.323 begins with Q.931, which establishes a connection between hosts. We then move into H.245, which establishes properties such as audio codex and logical channels for the media transfer. Then once the call is set up, the properties can begin exchanging data using RTP. Let's see how this works in [[Wireshark]]. For this example, we'll use the RTP example file. To start, we want to filter only H.245 traffic. So go to the display filter and type H.245 and press Enter. Now within the frames, I want you to take note that this process uses TCP as we see here. So to view the transaction, we'll go to [[Statistics]] and then Flow Graph. And then once there we'll select Limit to display filter. And there we see H.245 traffic. Now what happens is H.245 completes the following.
>
> **[1:37](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980&t=97)** First we see here, we begin with the terminalCapabilitySet message and this indicates the audio codex and other capabilities of each endpoint. And then down below, we then see the process of primary secondary determination which determines which endpoint will be the boss. Now this process is important, as it's used to prevent conflicts between the two terminals. And then below we see the opening of logical channels and here we see the codec G.711 along with some acknowledgements. And now we'll close that and we'll remove the filter and then we can see the [[Representational State Transfer (REST)|rest]] of the capture. Now, once the flow is established the process moves to RTP using UDP. So I'll select one of these, and here we see UDP, and that's your media transfer. So when you're looking at normal voice over IP traffic, H.323 probably isn't one you're going to see as often but you might. And if you're using it, Wireshark will be able to open it, decode it, take a look at the data transfer itself and help you during troubleshooting. Now, let's test your knowledge. H.323 begins with Q.931. Explain what happens after the setup phase using H.245. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (2), [[Statistics]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** rtp (3), udp (2), tcp (1)
> **Prerequisites:** setup (2), set up (1)
> **Code Identifiers:** terminalcapabilityset (1)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 4. Network Operations

[↑ Back to Table of Contents](#table-of-contents)

#### [Performance overview](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/performance-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/performance-overview?u=76281980&t=0)** - [Instructor] Businesses choose a voiceover IP solution to save money on phone calls and because it can integrate within a unified communication system. When implementing a voiceover IP solution, it must ensure the same or better quality as a tradition telephone network. Many things can affect voice quality. Issues include latency, which is the delay in packet delivery; jitter, which is delay variation of packet delivery; and packet loss, which is dropped packets. On an internal network, there are a few things that we can proactively do to ensure that the network can handle the voice traffic such as network bandwidth, equipment selection, and configuring quality of service. Now, studies show that adding more bandwidth is not the answer. A proactive approach is to shape the traffic. Using a packet shaper can improve the performance of time-sensitive applications by throttling back nonessential traffic and prioritizing the voiceover IP traffic. For example, this graphic might represent what you'll see on a packet shaper dashboard. Now, today's web pages are interactive by design and will have streaming media playing in the background, which might impact the network. Tune the packet shaper to minimize the impact
>
> **[1:35](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/performance-overview?u=76281980&t=95)** of bandwidth hogging applications on the network to protect your voiceover IP traffic. The quality of equipment is essential. An unmanaged consumer class switch will not be able to prioritize traffic. If a large document hits the device first, it will be delivered and starve out the voice traffic. Ensure that you have the right equipment so that you can manage and prioritize traffic. Voiceover IP uses the IP network to deliver voice and multimedia communications. Internet protocol, or IP, is connectionless and best effort, meaning most of the time it will get there, but there's no guarantee it will get to its final destination. It's like sending a letter using general delivery. Transmitting multimedia needs to be much better than best effort. On an IP network, quality of service makes sure that voice data is prioritized when traveling through the network. When you implement quality of service, realtime traffic is delivered first before everything else such as [[Microsoft Word|Word]] documents and email. In addition to configuring the devices to monitor and prioritize time-sensitive traffic, if you outsource voiceover IP, make sure to identify and discuss quality of service issues on the VoIP contract.
>
> **[3:10](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/performance-overview?u=76281980&t=190)** Poor phone communication is unacceptable. Manage your bandwidth, ensure proper equipment selection, and configure quality of service to ensure your voice traffic gets the treatment it deserves.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Analogies:** such as (2), for example (1), it's like (1)
> **CLI Commands:** make (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Quality of service](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=0)** - [Instructor] Internet protocol is a connectionless best effort protocol, meaning there's no guarantee it will get to its final destination. Quality of service makes sure that voice data is prioritized when traveling through an IP network. Now, when you implement quality of service, [[Real-Time]] traffic is delivered first, before everything else, such as [[Microsoft Word|Word]] documents or email. Quality of service is also called type of service, quality of service, or in some cases, differential services. This is the field value in an IP header that marks priority traffic. Now, the concept of priority of service, or type of service, or quality of service, has been around a long time. In fact here, I'm at the original IP RFC, RFC 791. And if you look here, there is a field value in IP version 4 that talks about type of service. There are eight bits or one byte that allows you to modify that header to push up the priority. And here, you can see some of the priorities and the precedence and what it does for that type of traffic. So when we do look at a header value and we look at what we see as far as class selector values, the normal traffic is, what's called best effort. And that's the default, a zero, and it's just going to do it's best it can.
>
> **[1:34](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=94)** And then you see network control. And those are protocols that deal with [[Routing Protocols]], or getting the data through to deal with network issues, Internet Key Exchange, EIGRP, Open Shortest Path First. And here we see signaling. And that is class selector 3, which has a decimal value of 24. So you can see, it's pushed up a little bit in the priority. Now, I have some examples that I wanted to show you. What I'll do is, I'm going to put up on the top here, this is actually the class selector in an image so you can take a look and cross reference. So as you can see, the default is zero. And in this case, this is just best effort. So what I've done is, we are into the IP header, and when we have that IP header there, you can see that what it is doing is providing you with the ability of the differentiated services field. Let me just drop this down here. It is zero, and again, class selector zero, default, best effort, nothing really special there. Now, we also have one here that I thought was interesting, and that is EIGRP, Enhanced Interior Gateway Protocol is the protocol we use on Cisco routers. And what it does is update the routers, let the other routers know that I'm available, I'm able to provide you with the ability to route traffic.
>
> **[3:08](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=188)** So here you can see, that's a class selector six, and that has to deal with network control. So in our image here, we can see that that has to do with EIGRP, Open Shortest Path First, but that's bumping that priority up pretty high so that it really pushes out that traffic so that the routers are aware that other routers are available to provide [[Routing]] to their traffic. And here I have Skinny. And this Skinny capture is, of course, a Cisco protocol. And when we take a look at that, that is, Cisco is showing you a class selector three, which is, again, signaling. And again, that's about normal. We want to see that priority at around 24. This was one I thought was interesting. This is Magicjac, I brought this in and I thought, I wonder what that field value is. Oddly enough, what we see for that one is that is set at zero or best effort. So we did see a little bit of jitter on that and that could very well be because the priority wasn't that high, it's just at best effort. So of course, that could cause some issues in the data transfer. So as we know, Voice over IP has minimal tolerance for packet loss and disruption. When you implement quality of service, real-time traffic is pushed up in priority and delivered faster.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (2), [[Microsoft Word|Word]] (1), [[Routing Protocols]] (1), [[Routing]] (1)
> **Env Vars:** eigrp (3), rfc (2)
> **Documentation:** rfc (2)
> **Definitions:** is a  (2)
> **Versions:** version 4 (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Domain Name System](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/domain-name-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/domain-name-system?u=76281980&t=0)** - [Instructor] Every device that's connected to the internet, such as a web or email server, a VoIP phone, or other end device, has an IP address. [[Domain Name System (DNS)|Domain name system]], or DNS, maps a host name to an IP address and works like the internet's phone book. This enables devices to connect with one another. Whenever you place a call to a SIP address, the server will request the address from the DNS server. Once it's resolved, you can make the call. With DNS, there are a number of different types of resource records. These resource records are used to specify a resource type and an IP address to locate the resource. Some commonly seen records are a type A record. A type A resource record is used for an IP version four address. You might also see a quad A, which is used for an IP version six address. A mail exchange record will redirect mail to a mail server. And the last entry is a service record, which defines available services such as HTTP, LDAP, and SIP. Similar to the way a mail exchange record is used to send and receive mail, a DNS service record helps connect to a SIP user. In many cases, when a SIP client calls a public SIP address,
>
> **[1:37](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/domain-name-system?u=76281980&t=97)** an IP phone will use a DNS service record to query and determine the IP address and port of the SIP proxy or redirect server. The service record allows administrators to use several servers for a single domain and then designate some host for primary servers for a server and other backups. Now this is just a format as you can see. The standard format begins with an underscore, and then it tells us the protocol type, name, time to live, class, priority, weight, port, and target. And here's an example of a service record.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Domain Name System (DNS)|Domain name system]] (1)
> **Env Vars:** sip (6), dns (5), http (1), ldap (1)
> **Analogies:** such as (2), similar to (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Directory integration](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/directory-integration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/directory-integration?u=76281980&t=0)** - [Instructor] Directories are [[Databases]] that allow a company to centralize all user information and permissions into a central location that is available to many different applications, and might be required in order to ensure voice over IP functionality. LDAP or Lightweight Directory Access Protocol provides applications with a method to access and modify the information in the directory. Integration between voice applications and an LDAP directory is commonly done in many organizations. In this graphic we see several components and some of the interactions that can take place within the directory. One common task is to do a lookup of the requested user from an IP phone or other voice and/or video application, so that the user can dial the contact directly. Certain Cisco IP phones are equipped with a display screen so that you can search a user directory. When the user presses the directory's button on the phone, the IP phone will send a request to a web server and return the results to the user. Another task is to move and update user information from the corporate directory into the user database of voice and/or video applications, so the apps have the latest information. End users and administrators will need to be authenticated
>
> **[1:38](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/directory-integration?u=76281980&t=98)** to provide a single logon functionality so that they can interact with the various corporate applications. And general directory integration on a corporate network can provide authentication, provisioning, and user lookup, and may be required in order to ensure VoIP functionality.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1)
> **Env Vars:** ldap (2)
> **Speakers:** - [instructor] (1)

#### [Using STIR/SHAKEN to reduce robocalls](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=0)** - [Instructor] Malicious actors use several methods to spoof a phone number. In this segment, we'll learn how the standard STIR/SHAKEN provides a way to validate caller identity and prevent spoofing attacks. One method malicious actors use to bait victims into sending money is by spoofing a phone number. Let's walk through an example of how this is done. Imagine someone getting a call that they think is from their grandchild. The malicious actor will speak with the grandparent and describe a situation where they're in a bind and will ask the victim to send money. The victim might send the money, however later on they find out that they have been spoofed. Now, how does this happen? I'm here at this website where we learn that every month there are approximately 5 billion robo-calls to US phones, and nearly 2 billion of those calls are from cyber criminals intent on stealing from unsuspecting victims. The malicious actors spoof the numbers to make it seem that the call is from someone they know. Now, because Voice over IP uses software, spoofing a number is possible. I'm here at this site where you can learn how to make spoof calls using any phone number you want right from your smartphone. Now, there are others that malicious actors use to spoof phone numbers.
>
> **[1:35](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=95)** To combat this massive fraud, The Federal Communications Commission adopted rules requiring service providers to deploy a solution called STIR/SHAKEN. STIR/SHAKEN is an industry-wide initiative to restore trust in our voice communications. Its goal is to prevent fraudsters from scamming consumers and businesses through robo calls and illegal phone numbers spoofing, while making sure that legitimate calls reach the recipient. STIR is a type of digital signature for a call which verifies the identity of the caller. SHAKEN provides the standards that guide how the provider deploys STIR. STIR/SHAKEN work together as a framework devised to reduce malicious robocalls and number spoofing. Let's step through how this works. When a caller initiates a call, the SIP invite is sent to the originating provider that checks with the authentication service to make sure that the sender can use the phone number. Once authenticated, the SIP invite with the identity header is sent to the terminating provider, which moves to verify that everything is correct. Afterwards, the call can then be completed. Depending on your provider, you might get this type of notification if it's spam, it's up to you to decide whether to answer the call or not.
>
> **[3:09](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=189)** If it's verified, you might see something like this, a V with the phone number and that ensures that you can trust that number. Now, let's test your knowledge. Malicious actors use several methods to spoof a phone number. Explain how the standard STIR/SHAKEN provides a way to validate caller identity. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** stir (7), shaken (6), sip (2)
> **CLI Commands:** make (3), find (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)


### 5. Wireshark Statistics

[↑ Back to Table of Contents](#table-of-contents)

#### [Dissecting a VoIP call](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=0)** - [Instructor] When examining a voice-over-IP call, [[Wireshark]] does a great job of dissecting a number of the common protocols. Those include SIP and H.323, along with MGCP/Megaco. But in addition, WireShark also supports some lesser known protocols, such as ISUP, which is ISDN user part. Now, this protocol is used in trunk signaling between telephone exchanges to establish and release calls. WireShark also supports UNISTIM, which is a Nortel proprietary voice-over-IP protocol. Now, you might not ever see these protocols, but they are available, along with many other protocols used to transmit multimedia. Now, when you're looking at the call itself, there's a number of different states it recognizes. You might see it in the CALL SETUP state, or RINGING, or IN CALL, when both parties are connected. It could be CANCELLED, or COMPLETED and that means both parties have disconnected. It could be REJECTED, or in some cases, it might come up as UNKNOWN. And that's because WireShark really didn't understand how to interpret the state. So now let's take a look at an example of a couple of calls where you can see the different states. If you'd like to follow along,
>
> **[1:33](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=93)** I found a site that has several files to choose from. And I'm going to select sip, along with SIP-488-Not-Acceptable, and open them in WireShark. Let's start with sip. Now, once you open the file, you can save it locally and we'll take a look at the Telephony menu choice. And within that you can see that there are a number of different [[Statistics]]. Now, it really would depend what's included in your capture, the ones you can use, but in this case, we're going to select VoIP calls. Now, once you open it, you can see that the columns can be manipulated, so that we can see all the information and then you can see some of the elements of that particular segment. For example, the Start Time and Stop Time. Now, in addition to what you see here, we can actually go to Time of Day and, that again, could be part of your troubleshooting exercise. And I'll unselect that. You can see what the Initial Speaker's IP address is and where it's from, along with where it's going to. And you can see the Protocol. Those would be the ones that are supported and how long it lasted, along with how many Packets. And there you would see the State. And in this case, we see IN CALL, RINGING and CALL SETUP, along with any Comments. Now, we'll see one more, I'll take a look at that Not Acceptable. And now in this case, we'll go to Telephony, VoIP calls.
>
> **[3:08](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=188)** And now we see the State, REJECTED. Now, a REJECTED call, you might need to do some troubleshooting. So WireShark has the capability of dissecting many different protocols, along with recognizing different States in a VoIP call. Now, let's test your knowledge. In WireShark, the VoIP call statistics and the Telephony menu support several protocols and can indicate the state of the call. List five possible states that you might see in a VoIP call. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (7), [[Statistics]] (2)
> **Env Vars:** call (4), rejected (3), sip (2), setup (2), ringing (2)
> **UI Navigation:** go to (2), open the (1)
> **Analogies:** such as (1), for example (1)
> **Prerequisites:** setup (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Evaluating call quality](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-call-quality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-call-quality?u=76281980&t=0)** - [Instructor] When troubleshooting a call, you can view the protocols and evaluate the corresponding [[Real-Time]] protocol streams. In this segment, we'll go into the VoIP call [[Statistics]] and then the play streams feature and then examine some of the choices. For this segment, we'll use the file sip.pcap next generation. So let's start by going to telephony and VoIP calls. Now, once you click on any of those calls, you can do something with the choices below. For example, I can select Prepare A Filter, and you can see in the background that it has prepared a filter. I could also select flow sequence, and I'll bring that up and that gives us a nice snapshot of that call. This will isolate that single call where on the top you can see the IP addresses and then you could do a logical drawing to help during troubleshooting. And I'll close that. Then we can also play the streams and as long as the Kodak is supported, that will be able to be played. And of course, that's anything in the g.711 family. And here we see that the payload is indeed g.711. First of all, you see that there's two sides. Well, what if you just wanted to isolate one side? I can right click and then I could go to audio [[Routing]] and then say mute, and that'll keep it quiet while you evaluate the other part of the call.
>
> **[1:37](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-call-quality?u=76281980&t=97)** I'm going to uncheck that and now we'll go unmute. And now I can play the stream. To play all the streams, I'll select this icon right here. (speaking foreign language)
>
> **[1:58](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-call-quality?u=76281980&t=118)** So in general, you can see that wire shark voiceover IP calls and the telephony menu gives us a lot of options so that we can evaluate the calls in our capture in order to do an analysis. Now, let's test your knowledge. When troubleshooting a voiceover IP call, you can view the VoIP protocols and evaluate the corresponding realtime protocol streams. Discuss some of the choices you have once you're in the Play Dreams Dialogue box. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (1), [[Statistics]] (1), [[Routing]] (1)
> **UI Navigation:** click on (1), go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Analyzing an RTP stream](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=0)** - [Instructor] When evaluating an RTP stream in [[Wireshark]], there are several ways to view the data. In this segment, we'll isolate and analyze the RTP streams. For this segment, we'll use the file sip.pcap next generation. So we'll go into Telephony and then RTP. And here we see RTP streams, but the other two are dimmed out. Well, let's just select that, RTP streams, and here we see three streams. Now I know that there are more than three streams. So what we have to do is help Wireshark by completing a couple of tasks. So we'll close that. And first we're going to do is use the feature decode as, specifically, we're going to go into the user datagram protocol using Source Port 4800. So I know that there is one at Frame 516. So go to Specified Packet, 516 and then press Enter. Now once there, right click and say Decode As. Now currently there's nothing. So we're going to type RTP and it will force it to decode as RTP. Select RTP, and then we'll say Save. And now it recognizes it as RTP. And now we're also going to put in the display filter RTP.
>
> **[1:38](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=98)** And now we can view the streams. So go into Telephony and RTP. And now we can see the streams and the other two options. So I can select the first one. Now, if I select Stream Analysis, this brings up the current stream that I had selected. Now this is nice because it shows me a snapshot of that particular stream, but I'd like to view all of the streams. So I'm going to close that. And this time we're going to go into Telephony, RTP, RTP Streams. And now you see I have five streams. So we'll select, we'll select this one here, the third one and we'll say Analyze. Now it gives us a nice snapshot of that stream and we can see the source address, port, destination address and port, and here we see the synchronizing source. We can see the RTP packets, duration and some other [[Statistics]]. Now let's see, what else can we see? Okay, we see the lost packets. That's zero, that's great. And maximum jitter. That's really low. It looks pretty good. Of course, anything under 30 milliseconds is okay. So then we can select the graph tab. And within that graph, you can uncheck what you don't want or what you'd like to see. So now let's test your knowledge.
>
> **[3:11](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=191)** When evaluating an RTP stream in Wireshark, there are several ways to view the data. List five statistics and/or tasks that you can view when you analyze the RTP streams. You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (3), [[Statistics]] (2)
> **Env Vars:** rtp (16)
> **UI Navigation:** select the (2), go to (1)
> **Ports:** port 4800 (1)
> **Speakers:** - [instructor] (1)

#### [Recognizing jitter](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=0)** - [Instructor] There are times when it's essential to do an RTP stream analysis to determine trouble spots on the network. In this segment, we'll learn how to graph and compare jitter between streams. For this segment, we'll work with a capture MagicJack and short call, and that's right here. I opened it and saved it locally as a PCAP next generation. But first, let's do a little housekeeping. Every once in a while a student will say that [[Wireshark]]'s unable to see the RTP streams. Now they know it's in there, but Wireshark's unable to decode it. Now we know that there are different things that we can do to help Wireshark, but I want to show you another way. Go to analyze and enabled protocols and type RTP, and then down below you'll want to check RTP over UDP. And this will help Wireshark decode an RTP over UDP stream and we'll say, okay. Now, we know that ideally jitter should be below 30 milliseconds. However, at times the connection becomes unstable and jitter will start to creep up. So we'll go to the display filter and type RTP and press enter. Alright, now we'll go to telephony and RTP. RTP streams. Now we see there are two streams and what we want to do
>
> **[1:34](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=94)** is nudge the column values over just a little bit cuz what I want to see is the jitter. Alright, so here we see the max jitter. We see the two values, and I'm going to sort those so that we see the lower value of 0.83 and then the second value 12.83. So there is a difference. And those are two good streams to compare. Select both and select analyze. So here we see stream zero and the max jitter is 0.83. Very reasonable. We won't have any problems with that, but let's go to stream one. Now we see the difference, max jitter 12.83. Now we'll go to the graph and there's a lot going on in the graph. We don't need all these variables. I'm going to uncheck these so we can just compare the two streams. Now we'll uncheck stream one and that's stream zero jitter as you see there. And that's the nice low value 0.83. But let's just check this. So stream one shows up and it's consistently at 12. Now depending on what's happening on your network, this is a good time to baseline or snapshot that call just because it might change over time. You want to see what's happening on your network and possibly if you've changed your software when you're doing your analysis so that you can compare. At this point, I did play the streams and I didn't feel that there was any significant degradation of the call,
>
> **[3:09](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=189)** but this could change over time. So now let's test your knowledge. There are times when it's essential to do an RTP stream analysis to determine trouble spots on the network. List the steps to compare and graph jitter when doing a stream analysis. You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wireshark]] (4)
> **Env Vars:** rtp (9), udp (2), pcap (1)
> **Versions:** 0.83 (3), 12.83 (2)
> **UI Navigation:** go to (5)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)


## Instructor

- [[Lisa Bock]]

## Path Context

### In [[VoIP- From Fundamentals to Troubleshooting]]
← [[Learning Voip And Unified Communications]] | **2 of 3** | [[Troubleshooting VOIP- Identify and Resolve Common VOIP Issues]] →

### In [[Wireshark- Network Traffic Analysis]]
← [[Wireshark- Malware and Forensics]] | **5 of 5**

## Appears In

- [[VoIP- From Fundamentals to Troubleshooting]]
- [[Wireshark- Network Traffic Analysis]]

---

[↑ Back to top](#)