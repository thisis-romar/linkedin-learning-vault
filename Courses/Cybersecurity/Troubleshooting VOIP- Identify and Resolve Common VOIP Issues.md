---
type: course
cssclasses:
  - lle-course
slug: troubleshooting-voip-identify-and-resolve-common-voip-issues
url: "https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues"
duration_minutes: 90
duration: 1h 30m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQG4XiNoJITR2w/learning-public-crop_675_1200/B4EZXzZOhfHUAg-/0/1743545231771?e=2147483647&amp;v=beta&amp;t=QX8x7ZXDdlHN4nExL9hmmccE0T5pY7SO3j1279S_a7Q"
linkedin_topic: Cybersecurity
learning_paths:
  - VoIP- From Fundamentals to Troubleshooting
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
status: not-started
created: 2026-04-19
---

![Troubleshooting VOIP: Identify and Resolve Common VOIP Issues](https://media.licdn.com/dms/image/v2/D4E0DAQG4XiNoJITR2w/learning-public-crop_675_1200/B4EZXzZOhfHUAg-/0/1743545231771?e=2147483647&amp;v=beta&amp;t=QX8x7ZXDdlHN4nExL9hmmccE0T5pY7SO3j1279S_a7Q)

# Troubleshooting VOIP: Identify and Resolve Common VOIP Issues

> Build your VoIP troubleshooting and optimization skills so that you can effectively manage VoIP systems. In this course, Lisa Bock provides insights into performance tuning and common VoIP challenges. Gain an understanding of key VoIP protocols and codecs, and learn best practices for configuring VoIP servers, NAT traversal, and security settings. Explore strategies to optimize network devices suc

> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues) | 1h 30m
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Lisa Bock]]

## Table of Contents

### Introduction

#### Ensuring seamless communication
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-seamless-communication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-seamless-communication?u=76281980&t=0)** - Voice over IP is widely used in businesses and home environments.
>
> **[0:05](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-seamless-communication?u=76281980&t=5)** However, VoIP traffic is sensitive to network conditions and requires stable connections and minimal packet loss.
>
> **[0:13](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-seamless-communication?u=76281980&t=13)** Hello, I'm Lisa Bock.
>
> **[0:15](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-seamless-communication?u=76281980&t=15)** Join me as I share my knowledge on VoIP troubleshooting to ensure clear, uninterrupted communication.
>
> **[0:23](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-seamless-communication?u=76281980&t=23)** I'll review key VoIP protocols and codecs while guiding you through best practices to boost performance and ensure quality of service.
>
> **[0:32](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-seamless-communication?u=76281980&t=32)** We'll cover how to verify DNS settings, monitor traffic with simple network management protocol, along with ways to optimize DHCP configurations to eliminate errors.
>
> **[0:45](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-seamless-communication?u=76281980&t=45)** Are you ready to take your VoIP expertise to the next level?
>
> **[0:49](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-seamless-communication?u=76281980&t=49)** Then, let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** dns (1), dhcp (1)
> **Code Keywords:** let (1)
> **Speakers:** - voice (1)

#### What you need to know
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/what-you-need-to-know?u=76281980&t=0)** - [Instructor] This course is designed for IT professionals, network administrators, VoIP engineers, or anyone who would like to gain the skills needed to ensure seamless, high-quality voice communication.
>
> **[0:16](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/what-you-need-to-know?u=76281980&t=16)** I cover several topics, but I provided a file for you so that you can follow along.
>
> **[0:22](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/what-you-need-to-know?u=76281980&t=22)** Go to the Exercise File link on the welcome screen where you will find a Challenges and Links document.
>
> **[0:29](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/what-you-need-to-know?u=76281980&t=29)** In the document, I've included the links to the resources that I will reference throughout the course.
>
> **[0:36](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/what-you-need-to-know?u=76281980&t=36)** Additionally, during each segment, I'll ask a question from the video using the following icon.
>
> **[0:44](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/what-you-need-to-know?u=76281980&t=44)** Use the document to write out your responses.
>
> **[0:48](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/what-you-need-to-know?u=76281980&t=48)** I am super excited to bring you this course, so sharpen your pencil, and let's start learning.

> [!info]- Semantic Content
>
> **Code Keywords:** super (1), let (1)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise file (1)
> **Speakers:** - [instructor] (1)


### 1. Understanding VoIP Fundamentals

#### Recognizing key VoIP protocols
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=0)** - When using VoIP, you'll use specific protocols and codex to enable voice communication over the internet.
>
> **[0:08](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=8)** In this segment, we'll review common VoIP protocols such as SIP and RTP, along with a few key codex.
>
> **[0:16](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=16)** First, let's talk about some common VoIP protocols, starting with session initiation protocol.
>
> **[0:24](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=24)** SIP is an application layer signaling protocol used to establish, modify and terminate multimedia communication sessions over IP networks, including the internet, private networks and cell systems.
>
> **[0:40](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=40)** SIP supports user registration, authentication, and location management, and commonly uses UDP or TCP port 5060 for standard communication or TCP port 5061 for secure SIP over transport layer security.
>
> **[1:00](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=60)** Session description protocol is used with SIP to negotiate media capabilities during session setup and defining media types such as audio or video, the codex, along with the transport protocols.
>
> **[1:17](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=77)** To handle the transmission of audio and video streams, VoIP uses real-time transport protocol.
>
> **[1:25](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=85)** RTP works with RTP control protocol to provide quality of service feedback, including jitter, packet loss, and latency metrics that can affect call quality.
>
> **[1:39](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=99)** In addition to SIP and RTP, you might also work with H.323.
>
> **[1:46](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=106)** Now, H.323 isn't a protocol.
>
> **[1:49](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=109)** Instead, it acts as a framework for media control.
>
> **[1:54](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=114)** H.323 includes H.225 and H.245, which are two protocols that have a specific role in the call setup process.
>
> **[2:08](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=128)** H.225 establishes communication between two hosts.
>
> **[2:14](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=134)** And H.245 defines the properties such as the audio codex and logical channels for media transfer.
>
> **[2:24](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=144)** Now, keep in mind, H.323 is still used in some legacy VoIP systems but has largely been replaced by SIP.
>
> **[2:35](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=155)** Next, let's talk about some popular VoIP codex.
>
> **[2:39](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=159)** A codec converts an analog signal into a digital signal to remove redundancies and compress the data to enable faster transmission and conserve bandwidth to make the data suitable for transmission over an IP network.
>
> **[2:58](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=178)** Codex typically break down speech into 20 millisecond segments.
>
> **[3:03](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=183)** The lower the bandwidth, the lower the quality.
>
> **[3:06](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=186)** However, a more complex algorithm will provide better quality for a given bandwidth.
>
> **[3:15](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=195)** Now, there are several codex for packet networks in the G.700 series.
>
> **[3:20](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=200)** So let's talk about three of them.
>
> **[3:24](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=204)** A common one is G.711.
>
> **[3:27](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=207)** Now, this is commonly used in enterprise VoIP systems and public switch telephone network gateways.
>
> **[3:34](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=214)** Uncompressed, its 64 kilobits per second, the audio quality is high.
>
> **[3:40](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=220)** It's actually similar to traditional phone systems.
>
> **[3:43](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=223)** The bandwidth usage is also high, but the latency is low.
>
> **[3:49](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=229)** G.729 is commonly used in bandwidth constrained networks.
>
> **[3:55](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=235)** Compressed, it's eight kilobits per second, the audio quality is good, though it's slightly lower than G.711.
>
> **[4:03](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=243)** The bandwidth use is low, and the latency is slightly higher than G.711.
>
> **[4:11](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=251)** G.722 is commonly used in high-quality VoIP communication.
>
> **[4:17](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=257)** Compressed, it's 48 to 64 kilobits per second, and the audio quality is high-definition audio or wideband.
>
> **[4:27](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=267)** Now the bandwidth use is moderate, and the latency is low.
>
> **[4:33](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=273)** Now, there are other popular codecs outside of the G.700 series.
>
> **[4:39](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=279)** One is Opus.
>
> **[4:41](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=281)** Opus is a widely used open-source codec that is used for VoIP and realtime communication.
>
> **[4:48](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=288)** The audio quality is excellent, and it supports wideband and narrowband audio.
>
> **[4:56](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=296)** The bandwidth is adjustable based on network conditions, and it has low latency.
>
> **[5:03](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=303)** Finally, let's bring this together by outlining an example of how they work together when making a VoIP call.
>
> **[5:12](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=312)** SIP will set up the call and negotiate the parameters via session description protocol.
>
> **[5:19](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=319)** Once established, RTP will carry the actual voice data using a chosen codec, such as G.11 or G.729.
>
> **[5:30](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=330)** And the control protocol will monitor the quality of the session, providing feedback to adjust for jitter, delay, or packet loss.
>
> **[5:41](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=341)** Now, let's test your knowledge.
>
> **[5:43](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=343)** Review common VoIP protocols such as SIP and RTP, along with a few codex.
>
> **[5:50](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/recognizing-key-voip-protocols?u=76281980&t=350)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** sip (9), rtp (6), tcp (2), udp (1)
> **Code Keywords:** let (5), private (1), public (1), switch (1), finally, (1)
> **Analogies:** such as (5), similar to (1)
> **Prerequisites:** setup (2), set up (1)
> **Ports:** port 5060 (1), port 5061 (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Warnings:** keep in mind (1)

#### Navigating NAT settings for VoIP
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=0)** - [Instructor] When using voice over IP, you may encounter issues because VoIP traffic must pass through a Network Address Translation device.
>
> **[0:10](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=10)** In this segment, we'll outline how NAT configurations such as STUN, TURN, and ICE help prevent issues such as setup failures, one-way audio, or no audio.
>
> **[0:24](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=24)** NAT dynamically translates a private IP address to a public IP address and vice versa.
>
> **[0:33](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=33)** When deploying VoIP in networks that are using Network Address Translation, issues that can affect call quality are common due to how NAT handles traffic.
>
> **[0:45](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=45)** Let's discuss why this happens.
>
> **[0:49](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=49)** VoIP relies on SIP and RTP, which are not designed to handle NAT.
>
> **[0:57](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=57)** SIP will set up the call but does not carry the actual media.
>
> **[1:03](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=63)** RTP handles the media stream based on the connection details provided in the SIP SDP payload.
>
> **[1:14](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=74)** Problems can occur because VoIP packets contain an IP address in the SIP header payload, which NAT does not translate.
>
> **[1:24](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=84)** Let's take a look.
>
> **[1:28](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=88)** We're going to take a look at a couple of SIP headers in Wireshark, and then we'll compare the two separate files.
>
> **[1:36](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=96)** If you'd like to follow along, you'll go first to this page, and then you'll download this file by going to "Export, Download File," and then I usually download the original file, and then you can open it in Wireshark.
>
> **[1:52](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=112)** The other file is found here, and select "View Raw" and open it in Wireshark.
>
> **[1:58](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=118)** Know those links are found in the Challenges and Links document.
>
> **[2:05](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=125)** So let's take a look at the first one, SIP_Example.pcap.
>
> **[2:10](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=130)** All right, we're going to pop out that first frame.
>
> **[2:12](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=132)** I'll just double-click and I'll just move this down here so that we have more landscape.
>
> **[2:20](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=140)** Now I'm going to drop down the SIP header, and then down below we see in the body the Session Description Protocol.
>
> **[2:28](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=148)** And then I'll scroll down here, and that will tell us the connection address.
>
> **[2:34](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=154)** Now, that connection address must be a public IP address if NAT is involved.
>
> **[2:42](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=162)** And if it isn't a public IP address, RTP may fail.
>
> **[2:47](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=167)** Now in this case, it is a public IP address.
>
> **[2:51](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=171)** All right, now I'm going to close that and we'll go to the other file.
>
> **[2:55](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=175)** I'm in the file SIP_Routing_Error_Wireshark.pcap, and we'll just take a look at the first frame, and I'll just move this up so we can expand the SIP header, and I'll just blow this out, and then we'll go to the message header and then we'll look at "To" and the SIP To address.
>
> **[3:14](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=194)** And in this case, there is the IP address.
>
> **[3:19](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=199)** In this case, the IP address is a private IP address.
>
> **[3:24](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=204)** Now, this could be a problem and result in one-way or no audio, or could be dropped calls, or even the call may fail to establish.
>
> **[3:37](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=217)** To avoid NAT-related issues, you could assign a public IP to the VoIP server, which is effective, but requires strict security measures such as firewalls and access control methods.
>
> **[3:51](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=231)** A more secure solution is to implement NAT Traversal solutions to effectively resolve VoIP connectivity issues.
>
> **[4:01](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=241)** Let's explore how each one works.
>
> **[4:05](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=245)** STUN, or Session Traversal Utilities for NAT, allows VoIP devices to determine their public IP and NAT type, enabling direct communication whenever possible.
>
> **[4:19](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=259)** TURN, or Traversal Using Relays around NAT, relays traffic through a public server when direct communication fails, and this is used in networks with symmetric NAT, where STUN alone is inefficient.
>
> **[4:36](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=276)** And then there's ICE, or Interactive Connectivity Establishment.
>
> **[4:41](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=281)** Now this integrates STUN and TURN to ensure two peers can establish a communication channel.
>
> **[4:49](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=289)** The process begins with STUN and attempts a direct peer-to-peer connection.
>
> **[4:55](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=295)** If that fails due to restrictive NAT or firewall settings, ICE dynamically switches to TURN, relaying traffic through a dedicated server.
>
> **[5:07](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=307)** One way to implement STUN, TURN, and ICE effectively is by deploying a Session Border Controller, or SBC.
>
> **[5:17](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=317)** Now in an enterprise-grade VoIP system, an SBC acts as an intermediary between internal devices and external VoIP networks.
>
> **[5:30](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=330)** An SBC enforces SIP protocol compliance, normalizes headers, and manages NAT traversal while improving security and ensuring connectivity.
>
> **[5:44](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=344)** In addition to NAT Traversal techniques, proper firewall configuration is crucial for allowing VoIP traffic to pass through a NAT environment.
>
> **[5:55](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=355)** NAT will block unsolicited inbound connections, preventing an external device from reaching VoIP services inside your private network.
>
> **[6:05](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=365)** So as a result, when you do use the firewall, make sure you forward the necessary SIP and RTP ports from the public IP to the VoIP server or endpoints to allow VoIP traffic to pass through the firewall or NAT device.
>
> **[6:24](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=384)** Finally, adjust NAT Keepalive settings.
>
> **[6:28](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=388)** Now this sends periodic Keepalive packets to maintain NAT bindings for VoIP traffic to keep the session alive.
>
> **[6:38](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=398)** Now let's test your knowledge.
>
> **[6:40](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=400)** Outline how NAT configurations such as STUN, TURN, and ICE help prevent issues such as setup failures, one-way audio, or no audio.
>
> **[6:52](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/navigating-nat-settings-for-voip?u=76281980&t=412)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** nat (21), sip (10), stun (7), turn (6), ice (5)
> **Code Keywords:** public (8), let (5), pass (3), private (3), case, (3)
> **Analogies:** such as (5)
> **UI Navigation:** go to (2), double-click (1), scroll down (1)
> **Prerequisites:** setup (2), set up (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Exercise Files:** download the (1)

#### Monitoring VoIP health with SNMP
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=0)** - [Instructor] Simple Network Management Protocol can collect information about the health of network devices, along with critical VoIP performance metrics.
>
> **[0:10](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=10)** In this segment, we'll explore how Simple Network Management Protocol can monitor key VoIP issues, including codecs, bandwidth, and quality of service.
>
> **[0:23](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=23)** Simple Network Management Protocol is a powerful tool for monitoring and managing network devices, including VoIP systems.
>
> **[0:34](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=34)** By leveraging SNMP, administrators can track key VoIP performance indicators and quickly identify and address issues to ensure high-quality communication.
>
> **[0:48](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=48)** First, let's review SNMP components.
>
> **[0:53](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=53)** We have the SNMP manager server.
>
> **[0:56](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=56)** Now, this stores the management information base definitions to interpret responses and then issue appropriate queries.
>
> **[1:06](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=66)** Then there are the managed devices, and those include servers, VoIP phones, and routers.
>
> **[1:15](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=75)** Each device has an agent collecting data from the device that is then stored in a local management information base.
>
> **[1:24](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=84)** Now, to communicate, you'll see an exchange of GET and SET requests and responses.
>
> **[1:31](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=91)** And periodically you'll see a trap, which indicates a change of a managed object.
>
> **[1:37](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=97)** Now, the trap could be an error, or it could simply mean that the device is booting up.
>
> **[1:46](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=106)** Next, let's talk about how SNMP monitors key VoIP metrics.
>
> **[1:52](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=112)** SNMP can monitor codecs.
>
> **[1:55](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=115)** Now, devices such as IP phones, VoIP gateways, and session border controllers expose codec-related metrics via SNMP management information bases.
>
> **[2:08](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=128)** And SMMP query to these devices can provide statistics on codec selection, success rates, and negotiation failures.
>
> **[2:20](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=140)** We also can monitor bandwidth utilization.
>
> **[2:24](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=144)** Now, VoIP requires predictable and consistent bandwidth.
>
> **[2:28](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=148)** SNMP monitoring helps detect congestion to ensure adequate capacity for VoIP traffic, offering deeper insight into network performance and potential bottlenecks.
>
> **[2:43](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=163)** Now, it can also monitor quality of service.
>
> **[2:47](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=167)** Quality of service metrics ensure VoIP traffic is prioritized and meets acceptable performance levels for RTP streams.
>
> **[2:59](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=179)** Finally, let's discuss some key benefits of using SNMP for VoIP monitoring.
>
> **[3:07](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=187)** We can set alerts for quality of service metrics that can provide immediate notifications when thresholds are exceeded, before they impact call quality.
>
> **[3:19](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=199)** Now, key metrics include latency.
>
> **[3:22](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=202)** Now, that's your round-trip delay.
>
> **[3:25](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=205)** Now, this should be less than 150 milliseconds.
>
> **[3:29](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=209)** Jitter, which is variations in packet arrival time, should be less than 30 milliseconds.
>
> **[3:37](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=217)** And there's also packet loss.
>
> **[3:39](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=219)** Now, we know we are going to have some packet loss, but percentage of lost packets should be less than 1%.
>
> **[3:49](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=229)** In addition to real-time monitoring, historical reporting enables SNMP data to be stored and analyzed over time, and this allows administrators to identify performance trends and then plan for future capacity needs.
>
> **[4:08](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=248)** Since most VoIP devices and network equipment support SNMP, this approach can be applied across various network infrastructures.
>
> **[4:20](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=260)** To ensure optimal VoIP performance, focus on monitoring network interfaces that carry VoIP traffic, such as connections between the IP PBX and the gateway to detect potential bottlenecks.
>
> **[4:37](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=277)** SNMP-based monitoring combined with digital dashboard tools provide advanced VoIP performance tracking and visualization.
>
> **[4:49](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=289)** Now, while SNMP is a powerful monitoring tool, there are some limitations.
>
> **[4:56](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=296)** One is that excessive polling can actually increase network overhead, and this can then impact performance.
>
> **[5:05](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=305)** Additionally, versions one and 2c will transmit authentication credentials in plain text and can fall victim to an attack.
>
> **[5:17](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=317)** To ensure secure communication, use version three, which supports authentication, encryption, and access control.
>
> **[5:27](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=327)** Now let's test your knowledge.
>
> **[5:30](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=330)** Explore how SNMP can monitor key VoIP issues, including codecs, bandwidth, and quality of service.
>
> **[5:39](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/monitoring-voip-health-with-snmp?u=76281980&t=339)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** snmp (13), set (1), smmp (1), rtp (1), pbx (1)
> **Code Keywords:** let (4), finally, (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (2)
> **API Endpoints:** get  (1)
> **Speakers:** - [instructor] (1)

#### Ensuring security and authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-security-and-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-security-and-authentication?u=76281980&t=0)** - [Instructor] When using VoIP, certificates are commonly used to secure SIP signaling and STIR/SHAKEN is employed to authenticate caller identity.
>
> **[0:11](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-security-and-authentication?u=76281980&t=11)** In this segment, we'll review common issues related to certificates and STIR/SHAKEN, along with mitigation strategies to ensure security and authentication.
>
> **[0:24](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-security-and-authentication?u=76281980&t=24)** First, let's talk about why we use certificates when using VoIP.
>
> **[0:30](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-security-and-authentication?u=76281980&t=30)** Media is commonly encrypted using secure real-time transport protocol, or we can use Datagram Transport Layer Security with secure real-time transport protocol.
>
> **[0:45](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-security-and-authentication?u=76281980&t=45)** Now, when this is used to secure media, Datagram Transport Layer Security uses a certificate to securely exchange encryption keys.
>
> **[0:57](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-security-and-authentication?u=76281980&t=57)** Some of the issues you may face when dealing with certificates include the following.
>
> **[1:03](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-security-and-authentication?u=76281980&t=63)** There may be handshake failures, where the server rejects a secure connection because of an invalid certificate format, mismatched private key, unsupported cipher suite, or an expired certificate.
>
> **[1:19](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-security-and-authentication?u=76281980&t=79)** Some clients fail to register because SIP transport layer security isn't enabled on both the server and the SIP proxy.
>
> **[1:29](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-security-and-authentication?u=76281980&t=89)** If secure RTP is enabled, but the encryption keys are missing or misconfigured, the calls may drop.
>
> **[1:38](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-security-and-authentication?u=76281980&t=98)** To troubleshoot these issues, make sure transport layer security is enabled on the VoIP server.
>
> **[1:46](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-security-and-authentication?u=76281980&t=106)** Verify that the certificate formats match and use a valid certificate from a trusted certificate authority, such as Let's Encrypt or DigiCert.
>
> **[2:00](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-security-and-authentication?u=76281980&t=120)** Next, let's talk about the STIR/SHAKEN module, a framework that ensures caller ID integrity, prevents robocalls and combat spoofing by authenticating SIP calls with digital signatures.
>
> **[2:16](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-security-and-authentication?u=76281980&t=136)** When a call is placed, the originating service provider attest to the legitimacy of the caller's number.
>
> **[2:25](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-security-and-authentication?u=76281980&t=145)** STIR/SHAKEN attestation involves the VoIP service provider digitally signing a call to verify its validity before it reaches the recipient.
>
> **[2:40](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-security-and-authentication?u=76281980&t=160)** Now, some of the STIR/SHAKEN issues to watch for include: missing or incorrect attestation, which can cause a call to be flagged, blocked, or marked as spam or spam likely.
>
> **[2:56](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-security-and-authentication?u=76281980&t=176)** And there can also be outbound call failures where providers may reject unverified calls if STIR/SHAKEN is not properly implemented.
>
> **[3:07](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-security-and-authentication?u=76281980&t=187)** Troubleshooting involves the following.
>
> **[3:10](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-security-and-authentication?u=76281980&t=190)** You'll want to verify the STIR/SHAKEN configuration, check the logs, validate the certificates, and monitor attestation levels.
>
> **[3:23](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-security-and-authentication?u=76281980&t=203)** Now, let's test your knowledge.
>
> **[3:25](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-security-and-authentication?u=76281980&t=205)** Review common issues related to certificates and STIR/SHAKEN, along with mitigation strategies to ensure security and authentication.
>
> **[3:37](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-security-and-authentication?u=76281980&t=217)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** stir (8), shaken (8), sip (4), rtp (1)
> **Code Keywords:** let (4), private (1), module (1), include: (1)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### Resolving infrastructure misconfigurations
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-infrastructure-misconfigurations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-infrastructure-misconfigurations?u=76281980&t=0)** - [Presenter] When deploying a VoIP infrastructure, misconfigurations can lead to issues that degrade service quality.
>
> **[0:09](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-infrastructure-misconfigurations?u=76281980&t=9)** In this segment, we'll review common problems and troubleshooting strategies related to SIP trunking and DSIPRouter configuration.
>
> **[0:20](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-infrastructure-misconfigurations?u=76281980&t=20)** SIP trunking is commonly used by businesses and service providers to connect VoIP servers to the public switch telephone network for external calling.
>
> **[0:32](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-infrastructure-misconfigurations?u=76281980&t=32)** To make outbound calls, you must register with a SIP trunk provider.
>
> **[0:38](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-infrastructure-misconfigurations?u=76281980&t=38)** Let's talk about some of the issues you might face.
>
> **[0:41](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-infrastructure-misconfigurations?u=76281980&t=41)** One is SIP trunk registration failures due to invalid username, password, or SIP domain IP in the trunk settings.
>
> **[0:53](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-infrastructure-misconfigurations?u=76281980&t=53)** Calls may drop after a few seconds because of NAT issues or incorrect session timers, causing SIP sessions to expire prematurely.
>
> **[1:05](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-infrastructure-misconfigurations?u=76281980&t=65)** Outbound calls may fail if the SIP trunk provider requires specific caller ID formats or authentication methods.
>
> **[1:15](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-infrastructure-misconfigurations?u=76281980&t=75)** Additionally, no incoming calls may occur if the provider is not routing inbound calls to the correct SIP URI or PBX extension.
>
> **[1:28](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-infrastructure-misconfigurations?u=76281980&t=88)** To troubleshoot these issues, check the SIP trunk status, verify SIP credentials, and inspect SIP INVITE messages to ensure that the endpoints agree on compatible codex and configurations.
>
> **[1:49](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-infrastructure-misconfigurations?u=76281980&t=109)** Another possible failure point is with the DSIPRouter, which is a SIP proxy and load balancer that simplifies NAT traversal and enhances SIP security.
>
> **[2:02](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-infrastructure-misconfigurations?u=76281980&t=122)** Common issues include one-way audio or no audio, which may occur if RTP streams are not flowing correctly due to improper NAT handling.
>
> **[2:17](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-infrastructure-misconfigurations?u=76281980&t=137)** Additionally, the license key may be expired or tied to a different machine.
>
> **[2:24](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-infrastructure-misconfigurations?u=76281980&t=144)** If the DSIPRouter is not processing SIP calls, it could be due to misconfigured endpoints or firewall rules preventing proper traffic routing.
>
> **[2:37](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-infrastructure-misconfigurations?u=76281980&t=157)** And calls may also be rejected if the DSIPRouter fails to authenticate them because it's not correctly configured with the SIP trunk provider.
>
> **[2:51](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-infrastructure-misconfigurations?u=76281980&t=171)** To troubleshoot these issues, you'll want to verify license activation, check the DSIPRouter logs for errors, ensure proper NAT configuration in that the public IP must match the SIP headers, and also, you should test call routing by using "show sip peers" to confirm that the SIP endpoints are active.
>
> **[3:18](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-infrastructure-misconfigurations?u=76281980&t=198)** Now let's test your knowledge.
>
> **[3:21](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-infrastructure-misconfigurations?u=76281980&t=201)** Review common problems and troubleshooting strategies related to SIP trunking and DSIPRouter.
>
> **[3:29](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-infrastructure-misconfigurations?u=76281980&t=209)** You can record your answer on the Challenge Worksheet.
>
> **[3:33](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-infrastructure-misconfigurations?u=76281980&t=213)** Coming up next, learn ways to enhance VoIP performance.

> [!info]- Semantic Content
>
> **Env Vars:** sip (18), nat (4), uri (1), pbx (1), invite (1)
> **Code Keywords:** public (2), let (2), switch (1)
> **Warnings:** troubleshoot (2)
> **CLI Commands:** make (1)
> **Cross-References:** coming up (1)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter] (1)


### 2. Enhancing VoIP Performance

#### Tuning network devices
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=0)** - When managing voiceover IP, increasing bandwidth alone isn't enough to guarantee exceptional performance.
>
> **[0:08](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=8)** In this segment, we'll describe best practices to optimize routers and switches to ensure high call quality and uninterrupted communication.
>
> **[0:18](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=18)** First, let's talk about the devices on the network.
>
> **[0:22](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=22)** For the best performance, we use managed Layer 2 / Layer 3 switches with quality of service capabilities to control traffic at the access and distribution layers.
>
> **[0:35](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=35)** Implement link aggregation to provide additional bandwidth and redundancy and reduce the risk of a single point of failure.
>
> **[0:46](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=46)** And use load balancing to distribute VoIP traffic across multiple paths and prevent network congestion.
>
> **[0:54](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=54)** Next, let's outline some of the configuration options that will prioritize VoIP traffic.
>
> **[1:02](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=62)** Enable Link Layer Discovery Protocol for media endpoint devices to detect and prioritize VoIP endpoints automatically.
>
> **[1:13](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=73)** You should also optimize routing paths by reducing the number of hops between endpoints.
>
> **[1:21](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=81)** And configure the maximum transmission unit to avoid fragmenting VoIP traffic.
>
> **[1:28](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=88)** And here's an example of one way you can maximize the MTU.
>
> **[1:34](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=94)** Another key consideration is to make sure all links, either wired or wireless, have sufficient bandwidth for peak VoIP traffic.
>
> **[1:45](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=105)** Let's talk about how we can achieve this goal.
>
> **[1:49](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=109)** You'll want to periodically analyze current traffic patterns and plan for sufficient capacity, especially during peak usage periods.
>
> **[1:59](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=119)** Determine the bandwidth requirements based on the number of concurrent calls and codec usage.
>
> **[2:07](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=127)** For example, G.711 uses around 87 kilobits per call.
>
> **[2:14](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=134)** And use bandwidth reservation protocols such as Multi-Protocol Label Switching Traffic Engineering and Resource Reservation Protocol to ensure sufficient bandwidth for VoIP and prevent congestion.
>
> **[2:30](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=150)** Finally, let's discuss the reasons why we need to control the traffic flow using methods such as traffic shaping or rate limiting.
>
> **[2:41](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=161)** Under normal conditions, traffic moves smoothly through network devices.
>
> **[2:46](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=166)** However, it doesn't always behave predictably.
>
> **[2:50](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=170)** For example, traffic can become bursty and disrupt normal flow, and this happens when traffic reaches a device such as a switch or router and the buffers may become full or overwhelmed by the burst resulting in output drops that lead to packet loss and network instability.
>
> **[3:13](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=193)** To demonstrate this, I'd like to show you an example of bursty multicast traffic in Wireshark.
>
> **[3:19](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=199)** Let's take a look.
>
> **[3:20](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=200)** I'm here at this website and if you'd like to follow along, you'll find the link in the Challenges and link document.
>
> **[3:28](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=208)** Now what we're going to do is select this file right here.
>
> **[3:33](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=213)** And then, you'll want to extract it and open it in Wireshark.
>
> **[3:39](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=219)** Now, once in Wireshark, we'll go to Statistics and UDP Multicast Streams.
>
> **[3:46](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=226)** And then, we'll open it up.
>
> **[3:48](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=228)** And there's a lot of information here, but what I want to show you are the buffer alarms at the end here, and I'm just going to place my cursor right there because it has the most buffer alarms.
>
> **[4:00](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=240)** Now, to visualize this, I'm going to right-click and I'll say Apply as filter selected, and it will run a filter based on that one with the largest amount of buffer alarms.
>
> **[4:12](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=252)** And then, I'll close that.
>
> **[4:15](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=255)** And now we'll go to Statistics and I/O Graphs to run an I/O graph.
>
> **[4:21](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=261)** Now down below, you can see Filtered packets.
>
> **[4:25](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=265)** Wireshark already assumed I wanted to use this filter, but we'll rename the graph Bursty Traffic, double-click and enter the new name and press Enter.
>
> **[4:41](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=281)** Then, I'll change the color to something bright.
>
> **[4:44](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=284)** Just click one time and we'll make it a real fun pink so we can see it okay, and we'll keep it at line.
>
> **[4:56](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=296)** Then down below, we'll modify the interval.
>
> **[4:59](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=299)** And I'm just going to open this up just a little bit more so we can see it.
>
> **[5:03](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=303)** We're going to change the interval to 100 milliseconds, and that'll be right here.
>
> **[5:10](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=310)** And I can also take off all packets.
>
> **[5:13](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=313)** So now we can see that the traffic was going along, and then there was an output drop as evidenced right here.
>
> **[5:24](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=324)** Now, common methods to manage network traffic include policing and shaping.
>
> **[5:30](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=330)** Let's take a look.
>
> **[5:31](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=331)** Policing enforces a strict traffic rate limit and flattens burst by dropping packets when traffic exceeds a predefined threshold.
>
> **[5:41](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=341)** Now this can lead to packet loss and degraded performance.
>
> **[5:46](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=346)** However, a more effective way to manage traffic is by shaping which smooths the traffic by buffering excess packets, and then sending them out at a consistent rate.
>
> **[5:59](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=359)** Now let's test your knowledge.
>
> **[6:01](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=361)** Describe best practices to optimize routers and switches to ensure high call quality and uninterrupted communication.
>
> **[6:11](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/tuning-network-devices?u=76281980&t=371)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), this, (2), finally, (1), switch (1)
> **Analogies:** such as (3), for example (2)
> **UI Navigation:** go to (2), right-click (1), double-click (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** mtu (1), udp (1)
> **Prerequisites:** configure (1)
> **Speakers:** - when (1)

#### Ensuring quality of service (QoS)
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=0)** - [Instructor] When dealing with voice over IP, it's essential that communication is reliable, clear, and uninterrupted.
>
> **[0:09](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=9)** In this segment, we'll outline steps to take to ensure quality of service for VoIP traffic.
>
> **[0:15](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=15)** Let's start with a discussion on issues that can affect VoIP communication.
>
> **[0:22](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=22)** The network constantly faces contention from competing traffic, bandwidth limitations, and resource constraints.
>
> **[0:30](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=30)** Let's take a look.
>
> **[0:32](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=32)** In this graphic, we see a pie chart that shows the inbound LAN and WAN traffic distribution.
>
> **[0:40](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=40)** In both graphs, we see that YouTube accounts for the largest share of bandwidth consumption, while smaller portions come from various other applications.
>
> **[0:52](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=52)** On the right, because the traffic is actively shaped, we see that 28% of the bandwidth is reserved as saved bandwidth so that critical traffic can be prioritized.
>
> **[1:06](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=66)** Now using a packet shaper throttles non-essential traffic while prioritizing time sensitive applications like VoIP.
>
> **[1:15](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=75)** However, traffic shaping is only one way to conserve bandwidth so that we can prioritize VoIP applications for reliable performance.
>
> **[1:26](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=86)** Next, let's talk about latency, jitter and packet loss.
>
> **[1:32](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=92)** VoIP is sensitive to network delays or variations in packet timing.
>
> **[1:37](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=97)** The impact can result in poor audio quality, choppy sounds or call drops.
>
> **[1:45](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=105)** For optimal call quality, you'll want to keep latency below 150 milliseconds.
>
> **[1:52](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=112)** Packet loss should stay below 1%, and jitter should be below 30 milliseconds.
>
> **[2:00](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=120)** During transmission, latency can vary and the receiving end may experience jitter.
>
> **[2:08](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=128)** This could be minimized by using an adaptive jitter buffer, which reduces jitter-related issues.
>
> **[2:15](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=135)** While RED, or random early detection, can be used alongside of it to prevent sudden congestion spikes.
>
> **[2:24](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=144)** Additionally, we can apply classification, marking, queuing, and scheduling to further optimize network performance.
>
> **[2:35](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=155)** Let's talk about how this works.
>
> **[2:38](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=158)** Classification identifies traffic types such as VoIP or video that require quality of service implementation.
>
> **[2:48](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=168)** Now, classification does not modify the packets, but instead determines which one should receive priority.
>
> **[2:57](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=177)** The next step is marking, which assigns a differentiated services code point or DSCP value to the packet header based on its classification, so it can be easily identified throughout the network.
>
> **[3:13](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=193)** When working with VoIP, the packet should be marked with the appropriate DSCP values, such as expediated forwarding to ensure higher priority.
>
> **[3:26](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=206)** Now, there are multiple ways to mark VoIP packets with DSCP, and it really will depend on the device.
>
> **[3:33](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=213)** For example, I'm here at this page that outlines one way to mark packets.
>
> **[3:39](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=219)** So now let's talk about where we can check the value when troubleshooting.
>
> **[3:46](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=226)** We use the differentiated services code point to identify the traffic classification and the quality of service level.
>
> **[3:56](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=236)** Now, the IP version 4 header uses the Differentiated Services field for better traffic prioritization.
>
> **[4:05](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=245)** The IP version 6 header includes the Traffic Class field.
>
> **[4:10](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=250)** Now, this serves a similar purpose to the Differentiated Services field in IP version 4.
>
> **[4:17](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=257)** However, the IP version 6 header also includes a flow label field, which helps routers identify packets containing delay-sensitive data, such as voice, video, and multimedia.
>
> **[4:34](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=274)** Now, after a packet has been classified and marked, the next step is queuing and scheduling, which stores the packets in the buffer until it's their turn to exit through the router's interface.
>
> **[4:49](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=289)** Queuing methods used to prioritize traffic and ensure fairness include weighted fair queuing, low latency queuing, and class-based weighted fair queuing.
>
> **[5:03](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=303)** I'd like to show you an example of marking a packet with DSCP 46, which is expediated forwarding.
>
> **[5:11](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=311)** Now, this is going to assign a higher priority to the packet.
>
> **[5:16](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=316)** If you'd like to follow along, you'll find the file IP version 4 DSCP 46.pcapng in the Exercise Folder.
>
> **[5:27](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=327)** There is only one frame, so what we're going to do is drop down the IP header.
>
> **[5:32](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=332)** And we'll just move this up here, and here we see the Differentiated Services field, and we'll drop that down.
>
> **[5:39](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=339)** I'm going to highlight this line right here.
>
> **[5:42](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=342)** Here we see an example of that packet being marked with expedited forwarding.
>
> **[5:50](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=350)** Now, in addition to marking though, we need to make sure that the network devices are configured with proper queuing, such as low latency queuing.
>
> **[6:01](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=361)** When implemented correctly, VoIP packets that are marked with DSCP 46 are immediately forwarded before any other traffic.
>
> **[6:13](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=373)** However, if queuing is not configured, marked packets can sit in the same queue as other traffic, leading to jitter, packet loss, and degraded VoIP call quality.
>
> **[6:26](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=386)** Now let's test your knowledge.
>
> **[6:29](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=389)** Outline steps to take to ensure quality of service for VoIP traffic.
>
> **[6:34](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/ensuring-quality-of-service-qos?u=76281980&t=394)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** dscp (6), lan (1), wan (1), red (1)
> **Code Keywords:** let (6), require (1), interface (1)
> **Versions:** version 4 (3), version 6 (2)
> **Analogies:** such as (4), for example (1)
> **CLI Commands:** find (1), make (1)
> **Speakers:** - [instructor] (1)

#### Optimizing DNS services
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=0)** - [Instructor] The speed and reliability of DNS services directly impact VoIP connectivity and call quality.
>
> **[0:09](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=9)** In this segment, we'll explore ways to optimize DNS to improve VoIP performance.
>
> **[0:17](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=17)** First, let's review the purpose of domain name system and why it's a critical component of any network.
>
> **[0:26](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=26)** DNS resolves domain names into IP addresses.
>
> **[0:31](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=31)** When DNS issues arise, they can severely disrupt VoIP operations, leading to call failures, poor quality, or dropped connections.
>
> **[0:43](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=43)** As a result, optimizing DNS will help ensure reliable call setup, high call quality, and minimal downtime.
>
> **[0:53](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=53)** So let's discuss some ways we can achieve this.
>
> **[0:58](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=58)** One way is to deploy local DNS servers, which can reduce query latency by handling the resolution in a timely manner.
>
> **[1:09](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=69)** In addition, local DNS servers provide a backup option in case external DNS servers are unreachable.
>
> **[1:20](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=80)** Now, you'll want to make sure that the local servers forward unresolved queries to reliable upstream DNS providers, which can also be a trusted public DNS service.
>
> **[1:33](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=93)** Trusted DNS providers include Google Public DNS, CloudFlare, and OpenDNS.
>
> **[1:44](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=104)** Provide redundant DNS servers and configure both primary and secondary DNS servers in all VoIP devices to ensure fallback during failures.
>
> **[1:56](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=116)** Now, here's an example configuration, showing the primary DNS, and then the secondary DNS.
>
> **[2:05](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=125)** Next, let's review the benefits of deploying local caching DNS servers.
>
> **[2:11](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=131)** Now, this will help reduce latency and minimize repeated queries to external DNS providers.
>
> **[2:19](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=139)** Prioritize the caching for SIP servers, gateways, and other critical VoIP infrastructure devices.
>
> **[2:27](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=147)** This will help provide faster resolution of VoIP-related records to ensure optimal call setup.
>
> **[2:35](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=155)** It's always good practice to optimize DNS records management and make sure that your VoIP service DNS records are accurate and up to date.
>
> **[2:46](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=166)** So let's review some key records.
>
> **[2:50](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=170)** Service records are probably the most important, as they allow VoIP devices to discover and connect to SIP servers based on priority and availability.
>
> **[3:02](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=182)** They help to distribute traffic across multiple servers, providing redundancy and load balancing for high availability and reliability.
>
> **[3:15](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=195)** There's also A and AAAA records, and those will resolve domain names to an IP address so the VoIP devices can connect to SIP servers.
>
> **[3:27](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=207)** NAPTR records are less common, but can be used for advanced SIP routing.
>
> **[3:33](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=213)** TXT records store text in DNS.
>
> **[3:37](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=217)** For example, in STIR/SHAKEN, VoIP providers use a text record to authenticate caller ID information and prevent spoofing.
>
> **[3:48](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=228)** And canonical name records provide an alias for a domain, for example, [sipprovider.com](https://sipprovider.com), the alias would be sip.[voipnetwork.com](https://voipnetwork.com).
>
> **[4:02](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=242)** Take a look at the time-to-live values in your DNS records, and you want to set appropriate time-to-live values according to the environment.
>
> **[4:12](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=252)** For example, in a dynamic environment, you might want to use a shorter time-to-live value, such as a time-to-live of 300 seconds, which will provide timely updates to the cached records.
>
> **[4:28](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=268)** And you'll want to monitor DNS.
>
> **[4:31](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=271)** Use tools such as NS Lookup, DIG, or Advanced VoIP Monitoring Solutions to check DNS query times and proper records resolution.
>
> **[4:42](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=282)** In addition, watch for excessive DNS queries, which can indicate misconfigurations or malicious activity.
>
> **[4:52](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=292)** Now, let's test your knowledge.
>
> **[4:54](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=294)** Explore ways to optimize DNS to improve VoIP performance.
>
> **[5:00](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/optimizing-dns-services?u=76281980&t=300)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** dns (26), sip (4), aaaa (1), naptr (1), txt (1)
> **Code Keywords:** let (5), public (2), this. (1)
> **Analogies:** for example (3), such as (2)
> **Prerequisites:** setup (2), configure (1)
> **CLI Commands:** make (2)
> **URLs:** [sipprovider.com](https://sipprovider.com) (1), [voipnetwork.com](https://voipnetwork.com) (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### Preventing DNS configuration issues
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=0)** - [Instructor] Misconfigured DNS settings, such as incorrect IP addresses or missing service records, can cause VoIP connection failures.
>
> **[0:10](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=10)** In this segment, we'll explore how to mitigate common DNS problems to optimize VoIP response times.
>
> **[0:18](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=18)** In our best efforts, we set up the DNS servers to provide fast address resolution.
>
> **[0:25](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=25)** However, as the network changes, we may have to address some common DNS issues that can impact VoIP systems.
>
> **[0:34](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=34)** Let's explore this concept.
>
> **[0:37](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=37)** VoIP services rely on fully qualified domain names, such as those used for SIP trunks or external PBX connections, to establish reliable communication and call routing.
>
> **[0:51](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=51)** For example, a SIP request to sip.[provider.com](https://provider.com) will fail if the DNS lookup is unsuccessful.
>
> **[1:00](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=60)** In some cases, the VoIP system fails to resolve domain names to IP addresses due to unavailable DNS servers.
>
> **[1:10](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=70)** To resolve this, verify the primary and secondary DNS server settings on VoIP devices.
>
> **[1:17](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=77)** Use reliable DNS servers, such as Google Public DNS or CloudFlare.
>
> **[1:24](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=84)** In addition, you can manually configure or hardcode the SIP server IP address in the VoIP device settings as a fallback if DNS resolution fails.
>
> **[1:37](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=97)** In addition, there may be outdated or misconfigured entries that will lead to incorrect IP resolution for VoIP services.
>
> **[1:46](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=106)** For example, there can be typographical errors in DNS entries.
>
> **[1:52](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=112)** To prevent this, you'll want to verify and update the DNS records, and that includes all of those, A, Quad-A, service, and NAPTR, for VoIP services.
>
> **[2:04](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=124)** Coordinate with the VoIP provider to ensure the correct DNS records are used, and then test DNS performance by using tools such as nslookup or dig.
>
> **[2:16](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=136)** High latency in DNS queries can delay call setup and other VoIP-related transactions, and this will lead to increased call setup times or dropped calls during registration attempts.
>
> **[2:31](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=151)** This often occurs when DNS servers are overloaded or they're too far away, or when upstream DNS resolvers are responding too slowly.
>
> **[2:43](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=163)** To mitigate this, use DNS servers that are close to your location, deploy a caching DNS server within your network to reduce query times, and switch to a faster DNS provider if necessary.
>
> **[2:59](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=179)** DNS Time to live issues can occur when the time-to-live values are set incorrectly, which can lead to excessive queries if they're too short or stale information if the time-to-live is too long.
>
> **[3:15](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=195)** To resolve this, configure an optimal time-to-live value that balances query load and data freshness, for example, 300 seconds for VoIP services.
>
> **[3:29](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=209)** And it's also good to flush the DNS cache on any VoIP devices if the records become outdated.
>
> **[3:37](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=217)** There also could be a lack of service record support.
>
> **[3:42](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=222)** Now, some VoIP systems or devices don't support DNS service records.
>
> **[3:48](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=228)** Now, these are essential for SIP server failover and load balancing.
>
> **[3:54](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=234)** Without server support, devices may fail to connect to backup servers and experience inefficient call routing, especially if they rely only on A records.
>
> **[4:08](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=248)** To prevent this, ensure VoIP devices support and are configured to use service records for SIP, and then verify service record functionality using tools like dig.
>
> **[4:21](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=261)** Finally, defend against DNS spoofing and attacks by applying these key strategies.
>
> **[4:28](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=268)** Use DNS security to validate responses and prevent unauthorized redirections.
>
> **[4:35](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=275)** Protect DNS servers from DDoS attacks by implementing rate limiting and DNS query filtering to block abusive traffic.
>
> **[4:46](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=286)** Use secure recursive resolvers that restrict access to trusted sources, and work with DNS providers that offer geographic load balancing, such as CloudFlare or Amazon Web Services Route 53.
>
> **[5:04](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=304)** Now, let's test your knowledge.
>
> **[5:06](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=306)** Discuss common DNS problems and ways to mitigate them to optimize VoIP response times.
>
> **[5:13](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-dns-configuration-issues?u=76281980&t=313)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** dns (29), sip (5), pbx (1), naptr (1)
> **Code Keywords:** this, (5), let (2), public (1), switch (1), finally, (1)
> **Analogies:** such as (5), for example (3)
> **Prerequisites:** configure (2), setup (2), set up (1)
> **URLs:** [provider.com](https://provider.com) (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)


### 3. Optimizing DHCP

#### Managing DHCP servers
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/managing-dhcp-servers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/managing-dhcp-servers?u=76281980&t=0)** - A misconfigured DHCP server can cause delays in IP address assignments, which can affect VoIP traffic.
>
> **[0:09](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/managing-dhcp-servers?u=76281980&t=9)** In this segment, we'll summarize ways to manage servers to optimize VoIP performance.
>
> **[0:15](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/managing-dhcp-servers?u=76281980&t=15)** A DHCP server must be properly configured to effectively allocate IP addressing.
>
> **[0:23](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/managing-dhcp-servers?u=76281980&t=23)** In small to medium-sized networks, a single DHCP server can efficiently manage IP address allocation and use relay agents to serve multiple subnets.
>
> **[0:36](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/managing-dhcp-servers?u=76281980&t=36)** In large, distributed, or multi-site networks, we use multiple DHCP servers with failover and load balancing for redundancy and performance.
>
> **[0:49](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/managing-dhcp-servers?u=76281980&t=49)** Because DHCP management can be complex, let's review some best practices for managing servers in larger networks to prevent VoIP disruptions caused by conflicts.
>
> **[1:02](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/managing-dhcp-servers?u=76281980&t=62)** Let's start with a discussion on ways we can implement redundancy and failover to ensure a quick recovery in case of failure.
>
> **[1:12](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/managing-dhcp-servers?u=76281980&t=72)** Let's explore how this works.
>
> **[1:15](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/managing-dhcp-servers?u=76281980&t=75)** You'll want to deploy a secondary DHCP server to ensure network devices can still obtain an IP address if the primary server fails.
>
> **[1:26](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/managing-dhcp-servers?u=76281980&t=86)** Configure the redundant servers with identical scope and option configurations to avoid conflicts during failover.
>
> **[1:35](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/managing-dhcp-servers?u=76281980&t=95)** And synchronize DHCP databases between primary and failover servers to ensure that they have the same IP address pool and lease information.
>
> **[1:48](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/managing-dhcp-servers?u=76281980&t=108)** Another best practice is to prevent rogue DHCP servers.
>
> **[1:53](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/managing-dhcp-servers?u=76281980&t=113)** Now, to achieve this, you'll enable DHCP snooping on managed switches to ensure that only authorized DHCP servers can provide IP addresses.
>
> **[2:07](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/managing-dhcp-servers?u=76281980&t=127)** In addition, restrict access to the DHCP servers management interface to only authorized administrators and processes.
>
> **[2:17](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/managing-dhcp-servers?u=76281980&t=137)** And take steps to reduce latency.
>
> **[2:20](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/managing-dhcp-servers?u=76281980&t=140)** For this, it's best to strategically position the DHCP servers as close to VoIP devices as possible to minimize response times.
>
> **[2:31](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/managing-dhcp-servers?u=76281980&t=151)** Next, let's discuss the benefits of limiting the DHCP scope to assign IP addresses within a specified range.
>
> **[2:42](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/managing-dhcp-servers?u=76281980&t=162)** Now, by dedicating a specific IP address range to VoIP phones, you can then prioritize their network traffic using quality of service settings based on the assigned IP address range.
>
> **[2:56](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/managing-dhcp-servers?u=76281980&t=176)** Additionally, limiting the scope reduces the chance of IP address conflicts between VoIP phones and other network devices, which can cause connectivity issues and call drops.
>
> **[3:10](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/managing-dhcp-servers?u=76281980&t=190)** And take the time to assign specific IP addresses within the DHCP scope to critical VoIP devices such as gateways and servers.
>
> **[3:21](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/managing-dhcp-servers?u=76281980&t=201)** Finally, let's outline ways to monitor and maintain the DHCP server.
>
> **[3:27](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/managing-dhcp-servers?u=76281980&t=207)** You'll want to enable logging to monitor lease activities and identify potential issues, such as unauthorized devices attempting to obtain an IP address.
>
> **[3:40](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/managing-dhcp-servers?u=76281980&t=220)** Regularly check for IP conflicts, exhausted IP pools, or unallocated addresses, which will help identify potential network problems and capacity issues.
>
> **[3:54](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/managing-dhcp-servers?u=76281980&t=234)** And promptly apply software updates and security patches to address vulnerabilities and boost efficiency.
>
> **[4:03](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/managing-dhcp-servers?u=76281980&t=243)** Now, let's test your knowledge.
>
> **[4:05](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/managing-dhcp-servers?u=76281980&t=245)** Summarize ways to manage DHCP servers to optimize VoIP performance.
>
> **[4:12](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/managing-dhcp-servers?u=76281980&t=252)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (16)
> **Code Keywords:** let (6), this, (2), interface (1), finally, (1)
> **Analogies:** such as (2)
> **Best Practices:** best practice (1), it's best to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - a (1)

#### Provisioning DHCP
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=0)** - [Instructor] DHCP automatically assigns IP addresses along with other information, such as the default gateway and DNS servers on a local area network.
>
> **[0:12](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=12)** In this segment, we'll outline best practices to ensure proper DHCP provisioning.
>
> **[0:21](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=21)** First, let's discuss the importance of proper DHCP management for VoIP.
>
> **[0:28](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=28)** DHCP ensures efficient IP address allocation, reducing delays during device boot up or re-registration.
>
> **[0:37](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=37)** It also helps prioritize and isolate VoIP traffic from other network devices, preventing congestion.
>
> **[0:46](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=46)** Also, preventing IP conflicts minimizes the risk of call drops and network disruptions.
>
> **[0:53](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=53)** And implementing redundancy and failover methods enhances resilience.
>
> **[1:01](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=61)** So next, let's talk about proper DHCP provisioning on a local area network.
>
> **[1:09](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=69)** Just like in any situation, you should carefully plan the IP addressing scheme.
>
> **[1:15](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=75)** You'll want to make sure that the DHCP address pool is sufficient to accommodate all network devices.
>
> **[1:24](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=84)** Another option is to use DHCP reservation for critical devices such as servers, network printers, and VoIP phones to ensure that they always receive the same IP address for reliable connectivity.
>
> **[1:40](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=100)** You can also reserve IP addresses for VoIP devices that are based on their MAC addresses to ensure stability and prevent conflicts.
>
> **[1:51](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=111)** Additionally, check that the DHCP server supports both IPv4 and IPv6 if your VoIP devices require dual-stack configurations.
>
> **[2:04](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=124)** Now because networks can change fairly quickly, you'll want to allow for future growth by leaving some space in the DHCP pool for new devices or network expansions.
>
> **[2:17](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=137)** Periodically review and update DHCP reservations to make sure that they accurately reflect the current network configuration.
>
> **[2:28](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=148)** To isolate VoIP traffic and improve performance, you'll want to segment VoIP devices into dedicated VLANs to ensure that they only interact with the correct DHCP server.
>
> **[2:42](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=162)** Use DHCP relay agents to forward requests to the correct server for the VLAN.
>
> **[2:50](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=170)** You might also need to configure DHCP Option 66 for the trivial file transfer protocol server or Option 150 for multiple server addresses to direct VoIP devices to their provisioning server automatically.
>
> **[3:08](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=188)** DHCP lease time is the duration a device is assigned an IP address before it must renew the lease or obtain a new IP address from the DHCP server.
>
> **[3:23](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=203)** Be sure to set appropriate lease times based on network requirements.
>
> **[3:29](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=209)** For example, in more stable environments, longer leases can help reduce DHCP traffic.
>
> **[3:36](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=216)** But environments with many transient devices such as guest networks, you should use shorter lease times.
>
> **[3:44](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=224)** However, avoid very short lease times, because they can actually increase network traffic and put unnecessary load on the DHCP server.
>
> **[3:56](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=236)** Enable dynamic DNS updates so that DHCP automatically updates DNS records when devices obtain or release their IP address, which will ensure accurate name to IP mappings.
>
> **[4:12](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=252)** Configure DHCP to provide the correct DNS server IP address to the clients, enabling proper name resolution across the network.
>
> **[4:24](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=264)** In addition, be sure to verify DNS and DHCP integration to maintain consistency between IP assignments and hostname resolution.
>
> **[4:36](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=276)** Finally, you'll want to make sure that there aren't any issues with the DHCP server.
>
> **[4:43](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=283)** Some of the tasks you might want to complete include Enable Logging.
>
> **[4:47](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=287)** Enable logging on the server to track assigned IP addresses, and detect delays or failures.
>
> **[4:56](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=296)** Use monitoring tools to identify devices with frequent reregistration or failed DHCP requests.
>
> **[5:04](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=304)** And document DHCP configuration, including IP address ranges, reservations, lease times, or other settings.
>
> **[5:15](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=315)** This will help in troubleshooting and future network planning.
>
> **[5:20](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=320)** Now let's test your knowledge.
>
> **[5:22](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=322)** Outline best practices to ensure proper DHCP provisioning.
>
> **[5:29](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/provisioning-dhcp?u=76281980&t=329)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (24), dns (5), mac (1), vlan (1)
> **Code Keywords:** let (3), require (1), finally, (1)
> **Analogies:** such as (2), just like (1), for example (1)
> **CLI Commands:** make (3)
> **Prerequisites:** configure (2)
> **Speakers:** - [instructor] (1)

#### Mitigating 66/150 errors
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=0)** - [Instructor] In some deployments, VoIP phones use DHCP option 66 and 150 to locate the server hosting their configuration files.
>
> **[0:11](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=11)** In this segment, we'll discuss methods to identify and prevent DHC 66/150 errors.
>
> **[0:21](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=21)** First, let's talk about DHCP options 66 and 150.
>
> **[0:28](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=28)** These options provide VoIP devices with the correct server details automatically during the DHCP transaction.
>
> **[0:38](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=38)** Option 66 provides the URL or IP address of the trivial file transfer protocol server, or similar service that hosts the configuration files.
>
> **[0:50](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=50)** And option 150, which is used mainly by Cisco devices, can specify multiple TFTP server IP addresses.
>
> **[1:01](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=61)** Now, problems can arise if there are multiple DHCP servers that aren't in sync or have incorrect settings, which can lead to conflicting information being provided to the VoIP phones.
>
> **[1:16](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=76)** For example, if you're using more than 1D HCP server, which is common, make sure the scopes do not overlap and that the IP pools are correctly configured.
>
> **[1:29](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=89)** Otherwise, a VoIP phone might receive its IP address from one server, but configuration settings from another, which can cause conflicts.
>
> **[1:41](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=101)** Another example is a phone with a static IP that conflicts with a DHCP assigned address.
>
> **[1:49](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=109)** Now, if a DHCP server is configured with a pool that includes the same IP address of the IP phone and then issues the duplicate IP address to another device, there will be network disruptions or connectivity issues.
>
> **[2:09](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=129)** Next, let's outline methods to prevent DHCP configuration conflicts.
>
> **[2:15](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=135)** You want to make sure you and your team maintain accurate documentation of all scopes, subnets, and server configurations.
>
> **[2:24](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=144)** Keep track of any updates to the configuration servers, IP address, or host name.
>
> **[2:32](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=152)** When you define option 66 and 150 in the DHCP server configuration, make sure that the values match the actual IP address or host name of the TFTP server to avoid any connectivity issues.
>
> **[2:49](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=169)** Now, if specific devices or groups of devices require different TFTP servers, you can use DHCP reservations or custom classes to assign the appropriate options to specific devices or groups.
>
> **[3:06](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=186)** Another important step is to prevent rogue DHCP servers.
>
> **[3:12](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=192)** You'll want to enable DHCP snooping on switches to block unauthorized servers from assigning IP addresses or providing incorrect configuration options.
>
> **[3:24](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=204)** Use monitoring tools like Wireshark or check the server logs to detect rogue or conflicting DHCP servers on the network.
>
> **[3:34](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=214)** Now let's review some good practice to keep the lines of communication open.
>
> **[3:40](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=220)** You'll want to test and validate that option 66 and 150 are properly configured and are working.
>
> **[3:49](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=229)** Inspect the leases to verify that devices are receiving the correct configuration options and test multiple devices on different subnets to ensure consistent configuration.
>
> **[4:03](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=243)** You can also check the lease table using console tools such as DH client on a Linux device for a Cisco device show, IP DHCP binding, and on a Windows device IP config all.
>
> **[4:20](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=260)** Additionally, you can test connectivity by pinging the assigned TFTP server IP or host name.
>
> **[4:28](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=268)** Finally, if you do run into trouble, many VoIP phones log errors when they fail to connect to a configuration server.
>
> **[4:36](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=276)** Check the logs for misconfiguration hints such as incorrect TFTP server addresses or network connectivity problems.
>
> **[4:47](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=287)** In addition, use a network packet capture tool such as Wireshark to observe the discovery and offer messages for conflicting information.
>
> **[4:56](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=296)** So let's take a look.
>
> **[4:58](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=298)** Open the file DHCP, option 66/150.pcapng, which you'll find in the exercise folder.
>
> **[5:08](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=308)** And I'm going to just take a look at this and we want to make sure that there's not multiple DHCP servers on the same subnet providing conflicting options for 66 and 150 values.
>
> **[5:21](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=321)** So here I'm in this capture.
>
> **[5:23](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=323)** There's only one frame, and we'll pull this up.
>
> **[5:26](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=326)** And then we're going to take a look at the DHCP header information.
>
> **[5:30](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=330)** I'll drop this down and then I'll scroll down.
>
> **[5:34](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=334)** And here we see the options and what we're concerned about are these two down here.
>
> **[5:39](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=339)** I'm going to drop down option 66.
>
> **[5:42](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=342)** And here it tells you the TFTP server name JS deploy, and then we'll drop down option 150.
>
> **[5:49](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=349)** And there you see the two IP addresses for the TFTP servers.
>
> **[5:56](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=356)** Now let's test your knowledge, discuss methods to identify and prevent DHCP 66/150 errors.
>
> **[6:06](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/mitigating-66-150-errors?u=76281980&t=366)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (17), tftp (7), dhc (1), url (1), hcp (1)
> **Code Keywords:** let (5), static (1), require (1), finally, (1)
> **CLI Commands:** make (4), find (1)
> **UI Navigation:** open the (1), scroll down (1)
> **Analogies:** for example (1), such as (1)
> **Definitions:** is a  (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)


### 4. Managing Common SIP Issues

#### Resolving SIP registration issues
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=0)** - When establishing and maintaining VoIP calls, several issues can lead to SIP registration failure.
>
> **[0:07](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=7)** In this segment, we'll outline typical challenges and mitigation strategies to resolve SIP registration issues.
>
> **[0:15](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=15)** First, let's talk about what happens during the SIP registration process.
>
> **[0:21](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=21)** SIP registration is when a VoIP device, such as an IP phone or PBX system, authenticates and registers with a SIP server or provider to establish communication.
>
> **[0:36](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=36)** SIP registration works in the following manner.
>
> **[0:40](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=40)** A SIP client will send a register request to the server, along with contact information that includes IP address, port, and transport protocol.
>
> **[0:51](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=51)** The SIP server will, in most cases, request authentication.
>
> **[0:57](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=57)** The client will send credentials such as a username and password.
>
> **[1:01](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=61)** The server will then authenticate the request and send a 200 OK response confirming the registration.
>
> **[1:11](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=71)** Once done, registration will keep the device connected to the VoIP provider, and the SIP server can now direct incoming calls to the registered device.
>
> **[1:22](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=82)** At times, there may be SIP registration failures, which can happen due to several reasons.
>
> **[1:29](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=89)** Now, this is a problem because without proper registration, the VoIP phone won't receive calls.
>
> **[1:37](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=97)** In addition, you might experience calls not connecting or dropping mid-call or even multiple error messages.
>
> **[1:45](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=105)** Next, let's go into detail about each issue.
>
> **[1:50](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=110)** One issue is incorrect authentication, where the username and password or domain and realm is incorrectly configured on the VoIP device.
>
> **[2:01](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=121)** Now, to prevent this, you'll need to double check their credentials provided by the SIP provider or VoIP administrator.
>
> **[2:10](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=130)** So now let's take a look at an example of an exchange between a client and server in Wireshark.
>
> **[2:18](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=138)** If you'd like to follow along, you can find the link to this site in the Challenges and Links document.
>
> **[2:24](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=144)** Now, once here, you can grab the file by going to View Raw and it will download, and then you can open it in Wireshark.
>
> **[2:33](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=153)** Now, once here, we're going to put in a filter, and that'll show two status codes that were sent by the server.
>
> **[2:41](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=161)** All right, so here we see our first one, and that says 401 Unauthorized.
>
> **[2:47](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=167)** Now, that means authentication is required and the client should retry with credentials.
>
> **[2:54](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=174)** And then you also see 403 Forbidden, and this comes after 401.
>
> **[3:00](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=180)** Now, that means that there were incorrect credentials or that authentication failed after multiple retries.
>
> **[3:07](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=187)** And at this point, you should verify the username and password along with permissions on the SIP server.
>
> **[3:15](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=195)** Now, another issue is that the NAT/Firewall is blocking the SIP traffic, which can prevent devices behind a NAT translator from registering with the SIP server because their private IP address is not visible externally.
>
> **[3:33](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=213)** Now, to mitigate this, use NAT traversal techniques, such as STUN, TURN, or ICE.
>
> **[3:40](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=220)** In addition, you might want to configure SIP-aware firewalls or session border controllers to manage NAT traversal effectively.
>
> **[3:50](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=230)** You'll also want to make sure that the SIP or RTP traffic can pass through by opening the required firewall ports, which is 5060 for SIP and 10000 to 20000 for RTP.
>
> **[4:04](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=244)** And then you'll also want to configure port forwarding on the router if necessary to route traffic correctly to the VoIP device.
>
> **[4:14](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=254)** Now, periodically, the SIP device cannot reach the SIP server due to DNS errors, network outages, or incorrect server addresses.
>
> **[4:24](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=264)** Test the connectivity to the server using tools such as ping, traceroute, or SIP diagnostic tools.
>
> **[4:34](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=274)** And use a backup SIP server if the primary server is unavailable.
>
> **[4:41](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=281)** You might also find misconfigured network settings, such as VLAN tagging, incorrect default gateway, or subnet mask, and those will also prevent the device from reaching the SIP server.
>
> **[4:55](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=295)** To mitigate this, you'll want to verify the IP configuration on the SIP device.
>
> **[5:02](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=302)** Finally, the SIP registration or expiration timer is misconfigured or not aligned with the SIP server's requirements.
>
> **[5:12](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=312)** So to mitigate this, you should adjust the registration expiration interval in the device configuration.
>
> **[5:19](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=319)** For example, set it to 3,600 seconds.
>
> **[5:23](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=323)** If you're not sure, consult the SIP provider's documentation for optimal timer settings.
>
> **[5:31](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=331)** You should also monitor registration intervals to ensure that devices reregister before the expiration.
>
> **[5:39](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=339)** And what happens is too many failed registration attempts can trigger an account lockout due to security policies.
>
> **[5:48](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=348)** So, to prevent accidental lockouts, you can limit failed registration attempts using rate limiting or fail2ban.
>
> **[5:57](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=357)** Now let's test your knowledge.
>
> **[5:59](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=359)** Outline typical challenges and mitigation strategies to resolve SIP registration issues.
>
> **[6:07](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=367)** You can record your answer on the Challenge worksheet.
>
> **[6:11](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/resolving-sip-registration-issues?u=76281980&t=371)** Up next, avoiding setup delays, transfer failures, or dropped calls.

> [!info]- Semantic Content
>
> **Env Vars:** sip (27), nat (4), rtp (2), pbx (1), stun (1)
> **Code Keywords:** let (4), this, (4), private (1), pass (1), finally, (1)
> **Analogies:** such as (5), for example (1)
> **Prerequisites:** configure (2), you'll need (1), setup (1)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (1), means that (1)
> **Speakers:** - when (1)

#### Preventing setup and routing challenges
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=0)** - [Narrator] Efficient call setup and routing are essential for seamless VoIP communications.
>
> **[0:06](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=6)** In this segment, we'll summarize common SIP issues, such as setup delays, transfer failures, and dropped calls, along with effective mitigation strategies.
>
> **[0:19](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=19)** Setup and routing challenges can occur for various reasons, and they're often as a result of network issues, such as latency, which slows data transmission and packet loss.
>
> **[0:33](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=33)** To address these issues, use monitoring tools to identify and resolve packet loss, jitter, and latency.
>
> **[0:42](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=42)** Additionally, you should prioritize VoIP traffic on routers and switches with quality of service settings to minimize these effects.
>
> **[0:52](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=52)** To better understand these challenges, let's break down some common VoIP issues.
>
> **[0:58](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=58)** First, let's discuss call setup delays.
>
> **[1:03](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=63)** VoIP call setup may take longer than expected due to inefficient SIP routing or DNS resolution delays.
>
> **[1:11](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=71)** In addition, there may be overloaded SIP servers and devices struggling to process requests.
>
> **[1:19](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=79)** As far as prevention strategies, you'll want to configure efficient SIP routes and reduce the number of hops between the endpoints.
>
> **[1:28](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=88)** Enable DNS caching on devices to minimize DNS lookup delays for the SIP servers, and upgrade your infrastructure to ensure that your SIP servers and network hardware can handle the expected traffic load.
>
> **[1:46](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=106)** Call transfer problems can also occur, leading to drop calls, or routed to the wrong recipient.
>
> **[1:53](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=113)** Now, this can happen if SIP REFER or re-INVITE messages are unsupported or misconfigured due to inconsistent codec negotiation between devices, or because of NAT traversal issues during the transfer process.
>
> **[2:11](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=131)** To prevent these problems, configure a common set of supported codecs across all devices to avoid mismatches during call transfers, and use session border controllers to manage NAT traversal and normalize SIP messages during transfers.
>
> **[2:31](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=151)** Dropped calls are when active calls disconnect unexpectedly due to network or system issues.
>
> **[2:39](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=159)** Now, this can happen when SIP session timers expire without re-registration or keep-alive messages.
>
> **[2:48](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=168)** Prevention strategies include configure SIP and RTP keep-alive packets to maintain the session connectivity.
>
> **[2:57](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=177)** Now, when dealing with one-way or No Audio, callers might only hear one side of the conversation, or both sides could experience complete silence.
>
> **[3:10](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=190)** Now, this can happen if there are misconfigurations in the firewall or NAT device, and this can block or interrupt the RTP media stream.
>
> **[3:21](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=201)** You'll want to review firewall settings to ensure SIP and RTP traffic is allowed, and configure port forwarding for NAT if necessary.
>
> **[3:31](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=211)** SIP trunk congestion can occur when high call volumes overload the SIP trunk, and this can cause delays, dropped calls, or failed connections.
>
> **[3:42](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=222)** To prevent this, make sure the sip trunk capacity matches the organization's call volume needs.
>
> **[3:50](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=230)** Also, you might want to load balance and distribute calls across multiple SIP trunks or servers to prevent congestion.
>
> **[3:59](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=239)** Call failures can occur due to errors in the dial plan or routing logic, and that's often caused by incomplete configurations or unsupported dialing patterns.
>
> **[4:11](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=251)** To prevent this, regularly review and update your dial plans, and you can use wildcard entries for dialing patterns.
>
> **[4:21](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=261)** For example, to route a 10-digit long distance call to the provider, we would use this number, 91, followed by the Xs, where X is the wildcard that can be used for any digit.
>
> **[4:36](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=276)** Best practice includes using tools such as Wireshark, SIP trace utilities, and VoIP monitoring software to identify and resolve issues proactively, and also keep devices and software up-to-date with the latest patches and configurations.
>
> **[4:57](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=297)** Now, let's test your knowledge.
>
> **[4:59](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=299)** Summarize common SIP issues, such as setup delays, transfer failures, and dropped calls, along with effective mitigation strategies.
>
> **[5:10](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=310)** You can record your answer on the Challenge worksheet.
>
> **[5:14](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/preventing-setup-and-routing-challenges?u=76281980&t=314)** Up next, we'll unlock the power of a SIP Proxy.

> [!info]- Semantic Content
>
> **Env Vars:** sip (17), nat (4), dns (3), rtp (3), refer (1)
> **Prerequisites:** setup (6), configure (4)
> **Code Keywords:** let (3), this, (2)
> **Analogies:** such as (4), for example (1)
> **CLI Commands:** make (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [narrator] (1)

#### Using a SIP proxy
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=0)** - [Instructor] A SIP proxy routes SIP requests, facilitates NAT traversal, and enhances security.
>
> **[0:08](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=8)** However, improper configuration can degrade call quality.
>
> **[0:13](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=13)** In this segment, we'll explore the role of a SIP proxy and how it can impact VoIP traffic.
>
> **[0:21](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=21)** First, let's talk about some of the functions a proxy can handle.
>
> **[0:27](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=27)** Large VoIP providers, telecom companies, and cloud-based VoIP services use SIP proxies such as the dSIPRouter to manage call routing, SIP request handling, load balancing, and failover management across multiple servers.
>
> **[0:45](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=45)** Now SIP proxy servers are not necessary for small businesses using a hosted VoIP provider, since the provider handles the SIP traffic routing.
>
> **[0:57](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=57)** Now, it's common to see session border controllers working alongside a SIP proxy to provide security and NAT traversal.
>
> **[1:07](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=67)** Now SIP proxy or session border controller settings can inadvertently block or modify SIP registration messages.
>
> **[1:17](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=77)** To prevent this, validate proxy or session border controller settings to ensure proper forwarding of SIP messages.
>
> **[1:28](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=88)** So now let's talk about some of the ways a proxy can affect VoIP traffic.
>
> **[1:34](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=94)** One issue is that the SIP proxy is not routing calls.
>
> **[1:39](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=99)** A SIP proxy may fail to forward calls due to misconfigured SIP headers, incorrect route settings, or missing transport rules.
>
> **[1:48](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=108)** You might also see NAT traversal issues.
>
> **[1:52](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=112)** Now, many SIP proxies are not optimized for SIP/RTP NAT traversal, which leads to one-way audio or dropped calls.
>
> **[2:03](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=123)** Instead of a proxy, VoIP solutions typically rely on STUN, TURN, or session border controllers for NAT traversal.
>
> **[2:14](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=134)** Another protocol that can be impacted is RTP traffic.
>
> **[2:18](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=138)** Real-time Transport Protocol carries voice data over UDP, which most SIP proxies do not efficiently handle.
>
> **[2:27](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=147)** Instead, VoIP systems often bypass the proxy for RTP traffic, establishing a direct media stream between endpoints for better performance.
>
> **[2:40](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=160)** Let's take a look at a couple of examples where a proxy could be affecting SIP traffic.
>
> **[2:46](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=166)** If you'd like to follow along, go to this website and you're going to select "Raw," and then you'll download it and open it in Wireshark.
>
> **[2:55](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=175)** Now the links for this site are in the Challenges and Links document.
>
> **[3:00](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=180)** Now in this SIP capture, we see that there's a routing error and some call setup issues.
>
> **[3:06](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=186)** So we'll apply a filter, and again, I put this in the Challenges and Links document, and we'll press enter, and here you see your errors.
>
> **[3:16](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=196)** Now, a couple of them that you do see are SIP Status Code 480 and SIP Status Code 404.
>
> **[3:25](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=205)** So let's step through what happened and why the endpoints couldn't connect.
>
> **[3:32](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=212)** A SIP proxy handles call routing.
>
> **[3:35](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=215)** However, if it does not recognize a valid route to telephone one or telephone two, it's going to return a 404 Not Found or 408 Temporarily Unavailable.
>
> **[3:49](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=229)** Now, the proxy may have been misconfigured or not properly forwarding requests to the correct SIP server.
>
> **[3:58](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=238)** In addition, there may be some DNS resolution issues at the proxy that prevents it from correctly identifying a particular domain.
>
> **[4:08](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=248)** Now, when troubleshooting, you'll want to check that the proxy has a valid routing rule for telephone one and telephone two.
>
> **[4:16](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=256)** And you can also see some call setup issues, and those would be INVITE 401, 404, or 489 Bad Event.
>
> **[4:26](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=266)** If the SIP proxy does not support a required SIP event, it may reject SUBSCRIBE or PUBLISH events with a 489 Bad Event error.
>
> **[4:38](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=278)** In addition, if the proxy does not properly handle outbound INVITE messages, calls may fail after 401 challenges, and this will cause SIP endpoints to register incorrectly.
>
> **[4:52](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=292)** So for troubleshooting, you'll want to verify that the SIP proxy supports presence-related SIP events, specifically SUBSCRIBE and PUBLISH, if your VoIP system relies on these features.
>
> **[5:06](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=306)** Make sure the contact headers are not being incorrectly modified, and verify that the proxy correctly forwards 401 challenges and INVITE messages.
>
> **[5:20](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=320)** Now, let's test your knowledge.
>
> **[5:22](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=322)** Explore the role of a SIP proxy along with some of the ways a proxy can affect VoIP traffic.
>
> **[5:29](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/using-a-sip-proxy?u=76281980&t=329)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** sip (29), nat (5), rtp (3), invite (3), subscribe (2)
> **Code Keywords:** let (5), this, (1)
> **Prerequisites:** setup (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** dsiprouter (1)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Identifying SIP communication issues
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=0)** - [Instructor] Addressing protocol concerns is essential for maintaining reliable VoIP communications.
>
> **[0:07](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=7)** In this segment, we'll summarize common issues that can disrupt VoIP systems if not properly managed.
>
> **[0:15](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=15)** First, let's review codec mismatches and their potential implications.
>
> **[0:20](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=20)** Now, codecs handle the encoding and decoding of audio in VoIP calls.
>
> **[0:26](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=26)** If two systems don't share a common codec during call setup or transfer, you can run into call failures or poor audio call.
>
> **[0:36](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=36)** To prevent codec mismatches, you'll want to standardize codec configurations across all devices and systems using widely supported codecs, like G.711 or G.729.
>
> **[0:51](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=51)** Make sure the VoIP provider supports the selected codecs.
>
> **[0:55](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=55)** In addition, you can deploy a session border controller to normalize codec negotiation between the endpoints.
>
> **[1:05](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=65)** Now, if calls drop after a connection, you'll want to test and validate codec negotiation using SIP trace tools or a packet capture.
>
> **[1:14](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=74)** Let's take a look.
>
> **[1:16](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=76)** I'm here at this site, and we're going to download SIP example.pcap, and I have the link for you in the challenge and links document, and we'll go to export, download file, and I generally select download the original file.
>
> **[1:33](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=93)** Now, once in, I'm going to go to frame one, and then down below, we see the SIP header.
>
> **[1:39](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=99)** And I'll open this up and we're going to go to the message body, and we'll look for the session description protocol.
>
> **[1:47](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=107)** And I'll scroll this up as well.
>
> **[1:49](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=109)** And take a look at some of what is trying to be negotiated between the two endpoints.
>
> **[1:55](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=115)** And here, we see in the header, audio media port 40376, and then down below is where you see the supported codecs.
>
> **[2:07](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=127)** We see G.711, PCM A, G.729, G.723, and G.711 PCMU.
>
> **[2:20](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=140)** And then on the bottom here, we see media attributes send and receive.
>
> **[2:26](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=146)** Now, this indicates bidirectional audio is expected.
>
> **[2:31](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=151)** Now, codec mismatches can occur.
>
> **[2:34](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=154)** Now, because of this, we want to make sure that the receiver must support at least one of the offered codecs.
>
> **[2:42](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=162)** So next, let's talk about SIP header manipulation and the potential impact.
>
> **[2:48](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=168)** SIP headers carry key call details like source, destination, and media negotiation.
>
> **[2:55](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=175)** Unexpected header modifications by devices can disrupt call setup, routing, and media delivery.
>
> **[3:03](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=183)** To prevent these issues, use diagnostic tools like Wireshark or SIP Debuggers to evaluate the SIP invite and response messages.
>
> **[3:13](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=193)** Now, one thing you can do is work with your VoIP provider and make sure that they're handling the headers correctly, especially for critical features like Caller ID and E911.
>
> **[3:26](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=206)** Additionally, you should implement SIP normalization rules or deploy a session border controller to help enforce header consistency.
>
> **[3:36](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=216)** Finally, you may have to deal with SIP Application Layer Gateway interference.
>
> **[3:42](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=222)** So let's talk about what this is and why it can affect VoIP traffic.
>
> **[3:48](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=228)** SIP Application Layer Gateway is a feature in many routers and firewalls that modify SIP packets to allow NAT traversal, rewriting the private IP addresses with a public one.
>
> **[4:02](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=242)** It can also modify the SIP header, ports, and the structure of the message.
>
> **[4:09](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=249)** Now, once modified, this can cause call registration failures, dropped calls, or one-way audio.
>
> **[4:17](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=257)** Now, because most modern VoIP systems can handle NAT traversal without a SIP Application Layer Gateway, in most cases, you'll want to disable the Application Layer Gateway on the routers or firewall.
>
> **[4:33](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=273)** Now, let's test your knowledge.
>
> **[4:35](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=275)** Summarize common issues such as codec mismatches, SIP header manipulation, and SIP Application Layer Gateway interference that can disrupt VoIP systems if not properly managed.
>
> **[4:50](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/identifying-sip-communication-issues?u=76281980&t=290)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** sip (15), nat (2), pcm (1), pcmu (1), e911 (1)
> **Code Keywords:** let (5), export, (1), this, (1), finally, (1), private (1)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (3)
> **Prerequisites:** setup (2)
> **Ports:** port 40376 (1)
> **Exercise Files:** download the (1)
> **Definitions:** is a  (1)


### Conclusion

#### What’s next
> [LinkedIn Learning](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/what-s-next?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/what-s-next?u=76281980&t=0)** - Thank you for watching "Troubleshooting Voice Over IP."
>
> **[0:04](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/what-s-next?u=76281980&t=4)** In this course, we learned about ways to recognize key VoIP protocols and codecs, and understand the initial setup and best practices for configuring the VoIP server, firewall, and NAT settings.
>
> **[0:18](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/what-s-next?u=76281980&t=18)** We then outlined ways to enhance VoIP performance, including optimizing switches and routers, ensuring quality of service, verifying DNS settings, and monitoring VoIP with Simple Network Management Protocol.
>
> **[0:33](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/what-s-next?u=76281980&t=33)** I summarized ways to optimize DHCP, including managing servers, handling IP address allocation, properly provisioning VoIP-specific DHCP options, and mitigating 66/150 errors.
>
> **[0:50](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/what-s-next?u=76281980&t=50)** Finally, we outlined ways to manage common SIP issues, including registration problems, setup delays, routing errors, and SIP header manipulation.
>
> **[1:01](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/what-s-next?u=76281980&t=61)** If you are interested in learning more, please check out the library where new courses are added all the time.
>
> **[1:09](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/what-s-next?u=76281980&t=69)** If you're interested in packet analysis, check out my series, "Improve Your Wireshark Skills," and any course in the "Ethical Hacking" series will be well worth your time.
>
> **[1:21](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/what-s-next?u=76281980&t=81)** And you also might want to see what my colleague, Malcolm Shore, has for you on his homepage.
>
> **[1:27](https://www.linkedin.com/learning/troubleshooting-voip-identify-and-resolve-common-voip-issues/what-s-next?u=76281980&t=87)** Keep learning, I hope to see you again soon.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (2), sip (2), nat (1), dns (1)
> **Prerequisites:** setup (2)
> **Code Keywords:** finally, (1)
> **Speakers:** - thank (1)


## Path Context

### In [[VoIP- From Fundamentals to Troubleshooting]]
← [[Analyzing VoIP Traffic with Wireshark]] | **3 of 3**

## Appears In

- [[VoIP- From Fundamentals to Troubleshooting]]

---

[↑ Back to top](#)