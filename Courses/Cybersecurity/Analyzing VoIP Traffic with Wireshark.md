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
  - VoIP- From Fundamentals to Troubleshooting
  - Wireshark- Network Traffic Analysis
path_count: 2
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
status: not-started
created: 2026-04-20
---

![Analyzing VoIP Traffic with Wireshark](https://media.licdn.com/dms/image/v2/C4E0DAQGOAnX93z3bDA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1619133874813?e=2147483647&amp;v=beta&amp;t=Ynte0u_g15vJwqrxxyniDWuCJc8FQeJmi46AU8BPKVc)

# Analyzing VoIP Traffic with Wireshark

> Voice over IP (VoIP) is a technology that sends voice data in packets using the IP network—allowing you to make calls using an internet connection instead of a traditional phone line. In this course, join Lisa Bock as she takes an in-depth look at VoIP protocols and components, as well as how to troubleshoot VoIP calls. Lisa begins with an overview of VoIP, discussing its uses, codecs, and compone

> [LinkedIn Learning](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark) | 1h 33m
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Lisa Bock]]

## Table of Contents

### Introduction

#### Understand and troubleshoot VoIP
> [LinkedIn Learning](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understand-and-troubleshoot-voip-27990966?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understand-and-troubleshoot-voip-27990966?u=76281980&t=0)** - [Lisa] Voiceover internet protocol, or IP telephony, uses the IP network to send voice data in packets.
>
> **[0:08](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understand-and-troubleshoot-voip-27990966?u=76281980&t=8)** Join me as I share my knowledge of voiceover IP and video conferencing along with protocols that include TCP/IP, real-time protocols, and Skinny so that you can better troubleshoot your VoIP calls or review network operations, quality of service, and directory integration.
>
> **[0:30](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understand-and-troubleshoot-voip-27990966?u=76281980&t=30)** We'll then finish with a deep dive into Wireshark Statistics to help dissect a VoIP call, analyze RTP traffic, and recognize jitter.
>
> **[0:41](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understand-and-troubleshoot-voip-27990966?u=76281980&t=41)** Hello, my name is Lisa Bock.
>
> **[0:44](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understand-and-troubleshoot-voip-27990966?u=76281980&t=44)** Are you ready? Then let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (1), rtp (1)
> **Code Keywords:** let (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [lisa] (1)

#### Getting the most out of this course
> [LinkedIn Learning](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/getting-the-most-out-of-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/getting-the-most-out-of-this-course?u=76281980&t=0)** - [Narrator] This course is an intermediate course intended for network administrators, students, teachers, or anyone with an interest in learning more about voiceover IP and ways you can troubleshoot using Wireshark.
>
> **[0:16](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/getting-the-most-out-of-this-course?u=76281980&t=16)** Throughout the course we're going to examine pre recaptured packets that are mainly from online repositories.
>
> **[0:23](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/getting-the-most-out-of-this-course?u=76281980&t=23)** A high level knowledge of networking technology will help to clarify some of the concepts discussed in this course.
>
> **[0:30](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/getting-the-most-out-of-this-course?u=76281980&t=30)** However, if you have a basic understanding of networking terms and concepts along with an interest in the subject you should be able to follow along with the lessons.
>
> **[0:41](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/getting-the-most-out-of-this-course?u=76281980&t=41)** I cover a lot of information but I have provided some files for you.
>
> **[0:46](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/getting-the-most-out-of-this-course?u=76281980&t=46)** Go to the exercise file on the welcome screen and then once there you'll find a document with selected challenges from the material along with links to resources such as additional reading.
>
> **[1:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/getting-the-most-out-of-this-course?u=76281980&t=60)** During selected segments I'll identify a challenge using the following icon along with a question from the video.
>
> **[1:09](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/getting-the-most-out-of-this-course?u=76281980&t=69)** Use the document to write out responses to challenges that I cover throughout the course.
>
> **[1:15](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/getting-the-most-out-of-this-course?u=76281980&t=75)** I am super excited to bring you Wireshark voice over IP so sharpen your pencil and let's start learning.

> [!info]- Semantic Content
>
> **Code Keywords:** super (1), let (1)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** exercise file (1)
> **Definitions:** is an  (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [narrator] (1)


### 1. VoIP Overview

#### Voice over IP (VoIP)
> [LinkedIn Learning](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voice-over-ip-voip?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voice-over-ip-voip?u=76281980&t=0)** - [Instructor] When you pick up the phone to make a call, you'll most likely use Voice over IP or VoIP, which is changing the way we communicate.
>
> **[0:10](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voice-over-ip-voip?u=76281980&t=10)** Voice over IP or IP telephony uses the existing internet and network to transfer and route voice traffic in IP packets.
>
> **[0:20](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voice-over-ip-voip?u=76281980&t=20)** In many cases, it's part of a unified communication system.
>
> **[0:25](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voice-over-ip-voip?u=76281980&t=25)** Voice over IP is a group of technologies used to transmit voice and multimedia over an IP network.
>
> **[0:34](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voice-over-ip-voip?u=76281980&t=34)** VoIP can use both proprietary and open standards.
>
> **[0:38](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voice-over-ip-voip?u=76281980&t=38)** Examples include Skype, Google Hangouts, and others.
>
> **[0:43](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voice-over-ip-voip?u=76281980&t=43)** In addition, there's a number of VoIP apps available for tablets, laptops, or phones.
>
> **[0:51](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voice-over-ip-voip?u=76281980&t=51)** VoIP has been in use for over 20 years, however in the last 10 years, we have seen astonishing growth in Voice over IP.
>
> **[1:01](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voice-over-ip-voip?u=76281980&t=61)** The VoIP market is rapidly expanding all over the world in terms of subscribers, growth, and traffic.
>
> **[1:09](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voice-over-ip-voip?u=76281980&t=69)** Consumers and businesses are cutting the cord as more traffic uses VoIP than the traditional public switched telephone network.
>
> **[1:18](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voice-over-ip-voip?u=76281980&t=78)** VoIP is slowly replacing landlines.
>
> **[1:20](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voice-over-ip-voip?u=76281980&t=80)** Studies show that 60% of households in the US and Europe are replacing traditional landlines from the phone company with Voice over IP, most likely due to the low cost of bundled services with their ISP.
>
> **[1:37](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voice-over-ip-voip?u=76281980&t=97)** In fact, some states are no longer supporting landlines.
>
> **[1:41](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voice-over-ip-voip?u=76281980&t=101)** Many businesses see the benefits of choosing a VoIP solution.
>
> **[1:45](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voice-over-ip-voip?u=76281980&t=105)** Businesses can lower the cost of local and long distance phone calls by up to 40%.
>
> **[1:52](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voice-over-ip-voip?u=76281980&t=112)** Using voice and web conferencing reduces travel costs, and using VoIP as part of a unified communication solution helps improve productivity, which translates to cost savings for a business.
>
> **[2:06](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voice-over-ip-voip?u=76281980&t=126)** Over half the businesses in the US are using VoIP with the other half starting to follow.
>
> **[2:13](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voice-over-ip-voip?u=76281980&t=133)** The internet is constantly being optimized to support voice traffic, and products and services are available to combine data and voice networks.
>
> **[2:24](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voice-over-ip-voip?u=76281980&t=144)** Eventually the internet and the telephone network will be one and the same.
>
> **[2:29](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voice-over-ip-voip?u=76281980&t=149)** Voice over IP offers cost savings, is convenient, and is changing the way we communicate, and that is why we need the tools and knowledge to optimize and improve our networks.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** public (1)
> **Env Vars:** isp (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### VoIP and Unified Communications (UC)
> [LinkedIn Learning](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-and-unified-communications-uc?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-and-unified-communications-uc?u=76281980&t=0)** - [Instructor] Today's world, we use a combination of communication methods, including email, phones, instant messaging and video conferencing.
>
> **[0:11](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-and-unified-communications-uc?u=76281980&t=11)** Communication can be either realtime or non-realtime.
>
> **[0:16](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-and-unified-communications-uc?u=76281980&t=16)** Realtime communication is synchronous and includes voice, video conferencing and live chat.
>
> **[0:24](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-and-unified-communications-uc?u=76281980&t=24)** During realtime communication, the sender and receiver communicate in both directions at the same time.
>
> **[0:32](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-and-unified-communications-uc?u=76281980&t=32)** Non-realtime communication is asynchronous and includes blogs, fax, traditional mail and email.
>
> **[0:40](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-and-unified-communications-uc?u=76281980&t=40)** It's not time sensitive.
>
> **[0:42](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-and-unified-communications-uc?u=76281980&t=42)** It's posted and then picked up at another time.
>
> **[0:47](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-and-unified-communications-uc?u=76281980&t=47)** Unified communications are tools that rely on a VOIP foundation and combines different forms of communication.
>
> **[0:56](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-and-unified-communications-uc?u=76281980&t=56)** Unified communications provides a framework for consistent user interface across multiple devices and improves business communications.
>
> **[1:06](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-and-unified-communications-uc?u=76281980&t=66)** Unified communications leverages the IP network.
>
> **[1:11](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-and-unified-communications-uc?u=76281980&t=71)** We can combine communications across a wide range of platforms, including commercial off-the-shelf tools, such as Outlook and customer relations management and mobile apps.
>
> **[1:25](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-and-unified-communications-uc?u=76281980&t=85)** Features can include voice, voicemail, fax, chat, email and video conferencing.
>
> **[1:33](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-and-unified-communications-uc?u=76281980&t=93)** At the heart of unified communications is IP telephony or VOIP.
>
> **[1:40](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-and-unified-communications-uc?u=76281980&t=100)** With unified communications, an individual can send a message one one platform and receive the response on another.
>
> **[1:49](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-and-unified-communications-uc?u=76281980&t=109)** Unified communications has many benefits, and it improves overall productivity.
>
> **[1:56](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-and-unified-communications-uc?u=76281980&t=116)** Unified communications leverages the IP network, and that is why we must be vigilant in providing proactive monitoring and tuning of our networks.

> [!info]- Semantic Content
>
> **Env Vars:** voip (2)
> **Code Keywords:** interface (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Digitizing a signal
> [LinkedIn Learning](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/digitizing-a-signal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/digitizing-a-signal?u=76281980&t=0)** - [Instructor] While in a conversation, we must be able to hear and understand what the other party is saying.
>
> **[0:07](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/digitizing-a-signal?u=76281980&t=7)** Voice communication involves analog and digital communication and that we speak in analog which is a continuous wave form.
>
> **[0:18](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/digitizing-a-signal?u=76281980&t=18)** In order for the signal to travel over a digital network, we digitize and encode the signal.
>
> **[0:26](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/digitizing-a-signal?u=76281980&t=26)** The range of human hearing is between 20 and 20,000 cycles per second.
>
> **[0:32](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/digitizing-a-signal?u=76281980&t=32)** Testing demonstrates a human can understand speech in the frequency range between 300 and 3,300 hertz, this is called the voiceband range.
>
> **[0:44](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/digitizing-a-signal?u=76281980&t=44)** Digitization takes an analog signal and approximates how it should sound.
>
> **[0:51](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/digitizing-a-signal?u=76281980&t=51)** The goal is toll quality.
>
> **[0:54](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/digitizing-a-signal?u=76281980&t=54)** A codec converts the analog signal into a digital signal for transmission.
>
> **[1:01](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/digitizing-a-signal?u=76281980&t=61)** To remove redundancies and compress the data to enable faster transmission and conserve bandwidth.
>
> **[1:09](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/digitizing-a-signal?u=76281980&t=69)** Codecs typically break down speech into 20 millisecond segments.
>
> **[1:15](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/digitizing-a-signal?u=76281980&t=75)** The lower the bandwidth, the lower the quality.
>
> **[1:19](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/digitizing-a-signal?u=76281980&t=79)** A more complex algorithm will provide better quality for a given bandwidth.
>
> **[1:25](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/digitizing-a-signal?u=76281980&t=85)** There are a number of codecs for Packet networks in the G.700 series as we see in this table.
>
> **[1:33](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/digitizing-a-signal?u=76281980&t=93)** However, the most commonly used is G.711 or Pulse Code Modulation.
>
> **[1:41](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/digitizing-a-signal?u=76281980&t=101)** An algorithm measures how faithful the voice is and assigns a mean opinion score or MOS.
>
> **[1:49](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/digitizing-a-signal?u=76281980&t=109)** The quality depends on a number of different parameters including the number of participants on the call, the environment, and the type of equipment.
>
> **[2:01](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/digitizing-a-signal?u=76281980&t=121)** According to industry standards and recommendations, we see that the rating of 3.5 to 4.2 is an acceptable range for voiceover IP traffic.
>
> **[2:14](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/digitizing-a-signal?u=76281980&t=134)** And because people like to hear a sound during a call, even if the party is not actively speaking, a voice activity detector detects if there is active speech or not and inserts comfort or synthetic background noise during periods of silence.
>
> **[2:32](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/digitizing-a-signal?u=76281980&t=152)** Codecs encode or decode a data stream to remove redundancies and improve transmission speeds.
>
> **[2:40](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/digitizing-a-signal?u=76281980&t=160)** The most commonly used codec is G.711 or Pulse Code Modulation.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1), is called (1), is an  (1)
> **Versions:** 3.5 (1), 4.2 (1)
> **Env Vars:** mos (1)
> **Speakers:** - [instructor] (1)

#### VoIP components
> [LinkedIn Learning](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-components?u=76281980&t=0)** - [Narrator] When using voice over IP, most systems have several necessary components that include terminals, applications, codecs, gateways, protocols and network operations.
>
> **[0:14](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-components?u=76281980&t=14)** Terminals are the end devices that interface with the user and include soft phones and computers.
>
> **[0:22](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-components?u=76281980&t=22)** A soft phone is a computer that looks like a phone.
>
> **[0:26](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-components?u=76281980&t=26)** It allows you to make phone calls using voice over IP.
>
> **[0:30](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-components?u=76281980&t=30)** It has a standard phone interface and handset and many have a digital or video interface for messages and presence information.
>
> **[0:40](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-components?u=76281980&t=40)** If using a computer as a terminal, you'll need a headset or a microphone and a speaker.
>
> **[0:47](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-components?u=76281980&t=47)** Gateways are devices that convert media streams from one set of communications standards to another by using two main functions, media and signal conversions.
>
> **[0:59](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-components?u=76281980&t=59)** Gateways are essential when communicating in a complex network with the Public Switch Telephone Network, ISDN, fax machines and other networks.
>
> **[1:11](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-components?u=76281980&t=71)** In order to transport streaming media such as telephony and video teleconference applications, over IP networks, multiple protocols are involved to provide setup, communication control and data transport.
>
> **[1:27](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-components?u=76281980&t=87)** And include RTP, Megaco, SIP and H.323.
>
> **[1:34](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-components?u=76281980&t=94)** Codecs encode or decode a data stream.
>
> **[1:37](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-components?u=76281980&t=97)** To remove redundancies and improve transmission speeds.
>
> **[1:42](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-components?u=76281980&t=102)** There are various codecs.
>
> **[1:44](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-components?u=76281980&t=104)** Each has specific characteristics such as bit rate and voice quality.
>
> **[1:50](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-components?u=76281980&t=110)** WANs, LANs, and the technologies used to access the physical network that IP package travel, are an essential part of voice over IP and unified communications.
>
> **[2:03](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-components?u=76281980&t=123)** Routers, switches and voice gateways carry data, voice, and video between all network devices and applications.
>
> **[2:12](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-components?u=76281980&t=132)** The infrastructure must provide high availability, management, quality of service and network security.
>
> **[2:21](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-components?u=76281980&t=141)** A voice over IP system has many different components.
>
> **[2:25](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/voip-components?u=76281980&t=145)** All of which play an important role in providing exceptional quality and ensuring an optimal user experience.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (3), public (1), switch (1)
> **Env Vars:** isdn (1), rtp (1), sip (1)
> **Analogies:** such as (2)
> **Prerequisites:** you'll need (1), setup (1)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)


### 2. Protocols

#### Protocols overview
> [LinkedIn Learning](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/protocols-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/protocols-overview?u=76281980&t=0)** - [Instructor] A protocol is a set of rules that governs how systems communicate with each other.
>
> **[0:06](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/protocols-overview?u=76281980&t=6)** In Voice over IP, there are multiple protocols that are involved that provide setup, communication control, and data transport.
>
> **[0:17](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/protocols-overview?u=76281980&t=17)** TCP/IP is the internet suite that connects devices on the internet.
>
> **[0:23](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/protocols-overview?u=76281980&t=23)** The suite defines how data is packet-ized, addressed, transmitted, and routed.
>
> **[0:29](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/protocols-overview?u=76281980&t=29)** Dynamic Host Configuration Protocol supplies network hosts with an IP address and other configuration information such as the subnet mask and default gateway.
>
> **[0:43](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/protocols-overview?u=76281980&t=43)** Real-Time Transport Protocol transports audio and video.
>
> **[0:48](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/protocols-overview?u=76281980&t=48)** Real-Time Control Protocol carries control information for each RTP session.
>
> **[0:55](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/protocols-overview?u=76281980&t=55)** Real-Time Streaming Protocol establishes and controls multimedia sessions in entertainment and communication systems.
>
> **[1:05](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/protocols-overview?u=76281980&t=65)** Session Initiation Protocol establishes, maintains, and terminates sessions between parties over the internet, private network, and cell systems.
>
> **[1:17](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/protocols-overview?u=76281980&t=77)** Skinny Call Control Protocol is a Cisco proprietary signaling protocol used to register endpoints, provide addressing, return call messages, and control phone display.
>
> **[1:31](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/protocols-overview?u=76281980&t=91)** H.323 establishes properties such as audio codecs and logical controls for the media transfer.
>
> **[1:41](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/protocols-overview?u=76281980&t=101)** Demand for multimedia applications is increasing.
>
> **[1:46](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/protocols-overview?u=76281980&t=106)** In order to transmit streaming media successfully, multiple protocols are necessary to provide setup, data transport, and communication control over an IP network.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (1), rtp (1)
> **Analogies:** such as (2)
> **Prerequisites:** setup (2)
> **Code Keywords:** private (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### TCP/IP
> [LinkedIn Learning](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/tcp-ip?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/tcp-ip?u=76281980&t=0)** - [Instructor] TCP/IP or the internet suite is a set of protocols that allows us to communicate and exchange data on the network.
>
> **[0:10](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/tcp-ip?u=76281980&t=10)** The suite defines how data is packetized, addressed, transmitted, and routed.
>
> **[0:16](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/tcp-ip?u=76281980&t=16)** TCP/IP is the predominant communication suite and resides at the network and transport layer.
>
> **[0:25](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/tcp-ip?u=76281980&t=25)** Other protocols will ride on top of the TCP/IP suite, such as HTTP, FTP, and SMTP.
>
> **[0:36](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/tcp-ip?u=76281980&t=36)** The network layer deals with routing the packets from the source to its destination.
>
> **[0:41](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/tcp-ip?u=76281980&t=41)** The main players in the network layer are IP and ICMP.
>
> **[0:47](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/tcp-ip?u=76281980&t=47)** IP is responsible for addressing, and it doesn't have any error reporting functions.
>
> **[0:54](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/tcp-ip?u=76281980&t=54)** IP is a connectionless, best effort protocol, meaning there's no guarantee it will get to its final destination.
>
> **[1:03](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/tcp-ip?u=76281980&t=63)** ICMP is used along with IP to carry error, routing, and control messages.
>
> **[1:11](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/tcp-ip?u=76281980&t=71)** It does not exchange any data between systems.
>
> **[1:16](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/tcp-ip?u=76281980&t=76)** The transport layer provides data transport, and the key players are TCP and UDP.
>
> **[1:24](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/tcp-ip?u=76281980&t=84)** Transmission Control Protocol is a connection-oriented protocol that provides reliable data transfer by sequencing and acknowledging data.
>
> **[1:35](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/tcp-ip?u=76281980&t=95)** User Datagram Protocol is a connectionless transport layer protocol for data transport and is used for time-sensitive applications, such as voice over IP, video conferencing, DHCP, and DNS.
>
> **[1:52](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/tcp-ip?u=76281980&t=112)** On a network, TCP is the more predominant transport layer protocol.
>
> **[1:58](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/tcp-ip?u=76281980&t=118)** TCP is more reliable than UDP because it provides sequencing and acknowledgments.
>
> **[2:06](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/tcp-ip?u=76281980&t=126)** However, we will see that RTP, the protocol that transports audio and video, has a number of different TCP-like fields, such as sequence number, timestamp, source identifier, and control methods that help in the accurate delivery of voice and video.
>
> **[2:27](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/tcp-ip?u=76281980&t=147)** TCP/IP, or the internet suite, is a set of protocols that allows us to communicate and exchange data on the network.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (8), icmp (2), udp (2), http (1), ftp (1)
> **Definitions:** is a  (5)
> **Analogies:** such as (3)
> **Speakers:** - [instructor] (1)

#### DHCP
> [LinkedIn Learning](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dhcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dhcp?u=76281980&t=0)** - [Instructor] Dynamic Host Configuration Protocol dynamically assigns IP addresses on a local area network.
>
> **[0:08](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dhcp?u=76281980&t=8)** A Cisco IP phone needs the DHCP server to provide an IP address.
>
> **[0:15](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dhcp?u=76281980&t=15)** Special DHCP option 150 is used to send the unified communications manager's address to the VoIP devices so they can register and receive configuration information.
>
> **[0:30](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dhcp?u=76281980&t=30)** A router can act as the DHCP server for its location.
>
> **[0:35](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dhcp?u=76281980&t=35)** And you'll most likely separate the voice and data networks so you'll need to use two DHCP pools.
>
> **[0:43](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dhcp?u=76281980&t=43)** I've opened a packet tracer file to show how the commands are used to set up the DHCP pools on a router.
>
> **[0:52](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dhcp?u=76281980&t=52)** Now these commands are pretty straightforward.
>
> **[0:58](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dhcp?u=76281980&t=58)** Let's get into configure your terminal.
>
> **[1:02](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dhcp?u=76281980&t=62)** And we'll start with creating the DHCP pool named voice.
>
> **[1:18](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dhcp?u=76281980&t=78)** Put in the network address.
>
> **[1:32](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dhcp?u=76281980&t=92)** And we'll put in the default router's IP address.
>
> **[1:43](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dhcp?u=76281980&t=103)** And now we'll create a DHCP pool named data.
>
> **[2:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dhcp?u=76281980&t=120)** And again, we'll put the default router's IP address.
>
> **[2:06](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dhcp?u=76281980&t=126)** And then we'll put the special option.
>
> **[2:18](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dhcp?u=76281980&t=138)** And then we can exit.
>
> **[2:23](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dhcp?u=76281980&t=143)** Special option 150 is only required on a voice VLAN.
>
> **[2:29](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dhcp?u=76281980&t=149)** However, you'll want to include option 150 on the data VLAN, in case you ever use a cellphone on the PCs.
>
> **[2:38](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dhcp?u=76281980&t=158)** So DHCP is also another protocol necessary to carry voice over IP traffic.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (8), vlan (2)
> **Prerequisites:** you'll need (1), set up (1), configure (1)
> **Code Keywords:** let (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Real-Time Transport Protocol
> [LinkedIn Learning](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=0)** - [Instructor] Real-time Transport Protocol is a transport protocol for media with real time characteristics.
>
> **[0:08](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=8)** It's multicast friendly and has many encoding possibilities.
>
> **[0:13](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=13)** Many times, RTP is over UDP, which is a lightweight transport protocol.
>
> **[0:20](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=20)** In order to ensure additional information about the transmission, RTP has a number of different TCP-like fields, such as sequence number, timestamp, and source identifier.
>
> **[0:35](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=35)** So here is an RTP header.
>
> **[0:37](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=37)** And we're going to go through those field values in Wireshark.
>
> **[0:42](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=42)** Now I'm at this website which is CloudShark, and I've opened up a packet capture here, you can see, and I filtered it on RTP.
>
> **[0:53](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=53)** Now what we'll do is go to Export, Download File, and what I did was bring it into Wireshark, but you can watch it or take a look at it here.
>
> **[1:02](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=62)** So once you get into Wireshark and then I filtered it by RTP, Now we can just see the RTP traffic.
>
> **[1:12](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=72)** All right, now what I wanted to do was kind of take look, we'll go to Statistics and Flowgraph, and limit it to Display Filter, and bring in the flowgraph.
>
> **[1:24](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=84)** And here you can see RTP between the two end points.
>
> **[1:29](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=89)** Now I'll close this.
>
> **[1:30](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=90)** And now we'll take a closer look at RTP.
>
> **[1:34](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=94)** Now what I'll do is I'll bring up this image of RTP, and we'll just keep it up on top.
>
> **[1:40](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=100)** So down below here you can see RTP, or Real-time Transport Protocol.
>
> **[1:45](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=105)** Now we'll blow this out, and now we can take a closer look at this.
>
> **[1:50](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=110)** Now when we look up here, you can see a little bit of details that is in brackets, and it says stream setup in frame one.
>
> **[1:59](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=119)** That is done by Wireshark to keep track of the stream.
>
> **[2:03](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=123)** But now we'll go through those fields.
>
> **[2:06](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=126)** So up here, we'll see the first one.
>
> **[2:08](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=128)** It says version.
>
> **[2:09](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=129)** That identifies the version of RTP and this is version two.
>
> **[2:15](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=135)** The next one, it's a P, which is for padding.
>
> **[2:19](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=139)** Now padding is sometimes necessary in any of the headers, as you know, but this may be needed by some encryption algorithms with fixed block sizes for carrying several RTP packets in a lower layer protocol data unit.
>
> **[2:35](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=155)** As you see, there is no padding here.
>
> **[2:39](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=159)** And now we see the extension and in this case it says false.
>
> **[2:44](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=164)** But if the extension bit is set, the fixed header is followed by one header extension.
>
> **[2:51](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=171)** And in this case, there isn't any.
>
> **[2:55](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=175)** Now I'll scroll down a little bit here.
>
> **[2:57](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=177)** Now we're at contributing source.
>
> **[3:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=180)** Contributing source identifiers, and this tells us the count.
>
> **[3:05](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=185)** And this is the number of contributing source, or the identifiers that follow the fixed header, and in this case, there are none.
>
> **[3:14](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=194)** And then down below here, we see marker.
>
> **[3:17](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=197)** And I'll just scroll up just a little bit here.
>
> **[3:20](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=200)** The marker bit is used by specific applications that will serve a purpose of its own, and in this case that you see that there is a marker bit.
>
> **[3:30](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=210)** Now down below here, we see what is our actual payload type.
>
> **[3:34](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=214)** Now this identifies the format, and here you can see G.711, which is pretty common.
>
> **[3:42](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=222)** So this tells us the format, or encoding, of the RTP payload.
>
> **[3:47](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=227)** And of course that'll determine its interpretation by the receiving application.
>
> **[3:52](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=232)** Now we see the sequence number that is used for beginning that stream, and in this case, it's sequence number one.
>
> **[4:01](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=241)** This is used in order to monitor and reorder packets, and also to help detect loss.
>
> **[4:07](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=247)** And this is, again, where some things do happen across the network.
>
> **[4:11](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=251)** The initial value of the sequence number is random and/or unpredictable, and that is, of course, to protect that stream.
>
> **[4:20](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=260)** Now we'll go down to timestamp.
>
> **[4:22](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=262)** This is used to place the incoming packets in the correct timing order.
>
> **[4:28](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=268)** Now here we see some either synchronizing source or contributing source.
>
> **[4:32](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=272)** And here you can see the synchronizing source identifier.
>
> **[4:36](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=276)** This is when there is any multicast done, and any contributing source identifiers that will identify a source that has contributed to the combined stream.
>
> **[4:47](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=287)** And then you see the payload, which will follow in that.
>
> **[4:50](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=290)** So, as you can see, even though, and I'm going to just scroll up here and there you see your transport layer protocol is UDP.
>
> **[4:58](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=298)** It is UDP, but it has a whole lot of TCP-like fields to help with additional information about the transmission.
>
> **[5:09](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-transport-protocol?u=76281980&t=309)** So Real-time Transport Protocol is a transport protocol for media with real-time characteristics.

> [!info]- Semantic Content
>
> **Env Vars:** rtp (13), udp (3), tcp (2)
> **Code Keywords:** case, (3), this. (2), export, (1), type. (1)
> **UI Navigation:** go to (2), scroll up (2), scroll down (1)
> **Definitions:** is a  (4), is an  (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Real-Time Control Protocol
> [LinkedIn Learning](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=0)** - [Instructor] We know that Real-Time Transport Protocol is a protocol for media with real-time characteristics.
>
> **[0:08](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=8)** However, we also need something to report on the status of the streams.
>
> **[0:14](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=14)** Real-Time Control Protocol is a sister protocol to Real-Time Transport Protocol, that provides control information and statistics for an RTP flow.
>
> **[0:27](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=27)** Now, RTP creates a session for each media stream.
>
> **[0:32](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=32)** Real-Time Control Protocol controls the RTP session by passively gathering statistics, and reports information about each session.
>
> **[0:43](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=43)** Real-Time Control Protocol then provides feedback on the quality of the data and characteristics of the stream to the media source, and other session participants, in order to help localize network problems, such as jitter.
>
> **[0:59](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=59)** All sites should use a common type, such as Network Time Protocol, or Global Positioning Satellite.
>
> **[1:05](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=65)** This helps support synchronized media delivery and jitter calculations.
>
> **[1:11](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=71)** Now there are reports that are sent by all participants.
>
> **[1:15](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=75)** Now this is whether it's a single participant, or part of a massive multicast session.
>
> **[1:22](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=82)** To avoid congestion, Real-Time Control Protocol ensures bandwidth management by limiting the frequency of reports to only once every five seconds.
>
> **[1:34](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=94)** Often, you'll find at least two Real-Time Control Protocol packets bundled into a single UDP data unit.
>
> **[1:42](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=102)** This will minimize packet processing overhead to the routers.
>
> **[1:47](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=107)** Now what are the reports?
>
> **[1:49](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=109)** Well we see a sender report.
>
> **[1:51](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=111)** The sender report is sent periodically by all active senders in a conference.
>
> **[1:58](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=118)** This sender report includes statistics for all RTP packets sent during the interval, and uses an absolute timestamp that allows the receiver to synchronize the RTP messages.
>
> **[2:12](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=132)** This helps and if you kind of think about this as lip sync to keep everything synchronized.
>
> **[2:20](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=140)** The receiver report is sent by all participants that receive RTP packets to report on the quality of service.
>
> **[2:29](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=149)** Within this you'll also see sometimes source description.
>
> **[2:34](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=154)** And this will send the CNAME or the alias from an existing A record item to session participants if this is available.
>
> **[2:43](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=163)** And then there might be some additional information such as name, email address, telephone number, and address of the owner or controller of the source.
>
> **[2:53](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=173)** At the end of the participation, you'll see a BYE message and this will shut down a stream.
>
> **[2:59](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=179)** It's pretty much a direct announcement that it's leaving the conference.
>
> **[3:05](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=185)** Another report is application specific, and this is a way to design application specific extensions to the Real-Time Control Protocol.
>
> **[3:16](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=196)** I'm at CloudShark and here I have a stream that we can take a look at.
>
> **[3:20](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=200)** There is a lot more information in here as you can see, it is a lot of SIP and also Telnet and other information.
>
> **[3:28](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=208)** But it does give us a good example of Real-Time Control Protocol.
>
> **[3:33](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=213)** Now what I did was I went to Export, Download the file and I opened it up in WireShark.
>
> **[3:39](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=219)** Or you can take a look at it right here in CloudShark.
>
> **[3:42](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=222)** So once I opened it, now you can take a look and there is a lot of other traffic in here.
>
> **[3:48](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=228)** So I can filter by Real-Time Control Protocol.
>
> **[3:55](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=235)** And here we could just see the Real-Time Control Protocol and the reports that are within it.
>
> **[4:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=240)** And as you can see, that they are bundled together, generally have two or three reports in there.
>
> **[4:07](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=247)** And I'll take this off 'cause what I want to do is go to a specific packet.
>
> **[4:12](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=252)** 529, and here we can actually see.
>
> **[4:19](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=259)** 529 is preceded by 528 which has the Real-Time Transport Protocol.
>
> **[4:27](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=267)** I want to point out that it is using destination port 8000.
>
> **[4:32](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=272)** Now I'll go right to packet 529 and here we see that this is coming from source port 8001, which is one above.
>
> **[4:42](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=282)** So, RTP takes an even port, and Real-Time Control Protocol will grab the odd port.
>
> **[4:49](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=289)** So within that here, we'll just scroll up here.
>
> **[4:52](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=292)** And now you can see the three reports, and there is your sender report, and that is periodically sent by all active senders in a conference.
>
> **[5:02](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=302)** And that receiver, the receiver report, that is sent by all participants that receive the RTP packets.
>
> **[5:10](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=310)** And this is to help report on the quality of service.
>
> **[5:15](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=315)** And here we have a source description, and this is information about the source, which you can see and I'll just show you here.
>
> **[5:23](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=323)** A little bit more information about the identifier.
>
> **[5:26](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=326)** And I'll scroll down, source description identifiers within that.
>
> **[5:31](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=331)** So Real-Time Control Protocol is a supporting protocol to RTP that passively gathers statistics.
>
> **[5:39](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/real-time-control-protocol?u=76281980&t=339)** Reports are sent by all participants to provide control information and statistics for an RTP flow.

> [!info]- Semantic Content
>
> **Env Vars:** rtp (10), udp (1), cname (1), bye (1), sip (1)
> **Definitions:** is a  (7)
> **UI Navigation:** go to (1), scroll up (1), scroll down (1)
> **Analogies:** such as (3)
> **Code Keywords:** type, (1), export, (1)
> **Ports:** port 8000 (1), port 8001 (1)
> **CLI Commands:** find (1)
> **Exercise Files:** download the (1)

#### Skinny Client Control Protocol (SCCP)
> [LinkedIn Learning](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=0)** - [Instructor] Skinny Client Control Protocol is a Cisco proprietary protocol, and it's used to control Cisco IP phones and other Cisco endpoint devices.
>
> **[0:12](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=12)** Skinny is similar to Session Initiation Protocol and H.323, but many feel it's easier to troubleshoot than H.323.
>
> **[0:24](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=24)** We'll see that Skinny starts out and uses port 2000, and then the connection then moves to RTP.
>
> **[0:33](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=33)** We're going to take this into Wireshark.
>
> **[0:37](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=37)** I have a packet capture that was done in a lab, so here we can see some of the conversation over here on the right-hand side.
>
> **[0:46](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=46)** MediaPathEvent, OffHook, SetRinger, SetLamp, and other dialogue, so different things that are occurring, and the communication that happens that causes the messages that are sent to the call processing software.
>
> **[1:05](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=65)** This then helps the device to take the action that has been indicated.
>
> **[1:11](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=71)** When we take a look at this, we'll see that we know that RTP is being used, but it doesn't quite decode it as RTP.
>
> **[1:20](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=80)** Let's go to statistics in Flow Graph.
>
> **[1:24](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=84)** In the beginning, we see some just basic information about some commands that are sent.
>
> **[1:30](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=90)** Now we're going to scroll down here.
>
> **[1:34](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=94)** What we see there is Port 16384, and it's saying it's UDP, but it doesn't know that it's supposed to be RTP.
>
> **[1:46](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=106)** I'm going to close this Flow Graph, and I want to go to take a look at port usage here at [SpeedGuide.net](https://SpeedGuide.net).
>
> **[1:56](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=116)** I just put in port 16384.
>
> **[2:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=120)** Now you can see that there are other applications.
>
> **[2:03](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=123)** We do see that RTP is using 16384, so we're pretty confident that that's what it should be.
>
> **[2:12](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=132)** I'm back in the packet capture, and as you see, it still looks like it's supposed to be UDP, but let's see if the Telephony will help us.
>
> **[2:21](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=141)** We'll go on to Voiceover IP Calls.
>
> **[2:24](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=144)** Well, we see that, gee, there's something going on.
>
> **[2:27](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=147)** It looks like there should be some activity, and there's some packets.
>
> **[2:32](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=152)** Let's just say Play Streams, and there's nothing here to play, so we're going to close that, and let's close that.
>
> **[2:41](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=161)** Let's help it out.
>
> **[2:43](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=163)** Within Wireshark, there is something that we can do called Decode As.
>
> **[2:48](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=168)** We're going to go into the User Datagram Protocol in the Source Port, and in this case, we'll say Decode As.
>
> **[2:55](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=175)** Currently, there is nothing, so we're just going to type RTP.
>
> **[3:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=180)** Now we force it to decode as RTP, and now it says it's RTP, but we'll do one more thing just to make sure that it's going to decode as RTP.
>
> **[3:12](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=192)** We'll go into Analyze, and go to Enabled Protocols, and down below we'll search RTP, and here we want to make sure that RTP is over UDP, and we'll say yes, and we're going to say okay, and so we really kind of just forcing it to recognize it as RTP.
>
> **[3:36](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=216)** Now, we'll go into Telephony and Voiceover IP Calls, and I can see that I know there's some activity.
>
> **[3:43](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=223)** I'll go to Play Streams, and there's nothing here.
>
> **[3:46](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=226)** Well, we'll do one more thing.
>
> **[3:48](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=228)** I'm going to just close this, and in this case, it's already understanding that it is supposed to be RTP, and there's the data, so there's enough to put everything together.
>
> **[3:58](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=238)** We'll go to Telephony, and this time we'll go to RTP, and RTP Streams.
>
> **[4:04](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=244)** Now you can see your two streams, and now let's say Analyze.
>
> **[4:11](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=251)** We'll go to the Analysis, and there we find a lot of the data about the streams, and in this case, we can see that in the lower, right-hand corner, we say Play Streams, and there's our stream.
>
> **[4:24](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=264)** We'll select it, and let's play it.
>
> **[4:28](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=268)** - [Man In Background] Hello. - [Man] Hello, Mr. Boller.
>
> **[4:31](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=271)** (background chatter) No ring, but conversation ensues.
>
> **[4:38](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=278)** Okay.
>
> **[4:40](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=280)** - [Instructor] Okay, so now you can see what we had to do was force Wireshark to render it as RTP.
>
> **[4:49](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=289)** Skinny Client Control Protocol is a Cisco proprietary protocol that controls endpoint devices.
>
> **[4:57](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/skinny-client-control-protocol-sccp?u=76281980&t=297)** When you open it in Wireshark, sometimes Wireshark doesn't decode the stream as RTP, so we have to say decode it as RTP so that the streams can be played back in Wireshark.

> [!info]- Semantic Content
>
> **Env Vars:** rtp (18), udp (3)
> **Code Keywords:** let (7), case, (3), this, (2)
> **UI Navigation:** go to (7), scroll down (1)
> **CLI Commands:** make (2), find (1)
> **Ports:** port 16384 (2), port 2000 (1)
> **Speakers:** - [instructor] (2), - [man (1)
> **Definitions:** is a  (2)
> **URLs:** [speedguide.net](https://speedguide.net) (1)


### 3. Connecting Systems

#### Gateways and gatekeepers
> [LinkedIn Learning](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/gateways-and-gatekeepers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/gateways-and-gatekeepers?u=76281980&t=0)** - [Instructor] Today, when you make a call, the communication channel will most likely pass through several different types of networks in order to get to the final destination.
>
> **[0:11](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/gateways-and-gatekeepers?u=76281980&t=11)** As we see in this graphic, a phone call may have to pass from the public switched telephone network, through the internet, to a corporate voice over IP system.
>
> **[0:22](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/gateways-and-gatekeepers?u=76281980&t=22)** As media travels through networks, gateways, or devices that adjust to the different network signaling requirements and convert media streams from one set of communication standards to another.
>
> **[0:36](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/gateways-and-gatekeepers?u=76281980&t=36)** Signaling gateways use two main functions, media and signaling conversion.
>
> **[0:43](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/gateways-and-gatekeepers?u=76281980&t=43)** Gateways include media gateways, call agents or media gateway controllers, signaling gateways, and translators and mixers.
>
> **[0:53](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/gateways-and-gatekeepers?u=76281980&t=53)** Media gateways convert and packetize voice traffic into an RTP stream.
>
> **[1:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/gateways-and-gatekeepers?u=76281980&t=60)** Examples include trunking, such as a SIP trunk, that provides an interface between the legacy system and a voice over IP network, and a residential gateway that converts an analog signal to voice over IP.
>
> **[1:16](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/gateways-and-gatekeepers?u=76281980&t=76)** Media gateway control protocol is a master slave protocol that provides a central gateway by handling the signal and session management required during a multi-media session.
>
> **[1:29](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/gateways-and-gatekeepers?u=76281980&t=89)** Megaco is also known as H.248.
>
> **[1:34](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/gateways-and-gatekeepers?u=76281980&t=94)** This performs the same functions as media gateway control protocol, but as a newer protocol that uses different commands and processes.
>
> **[1:44](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/gateways-and-gatekeepers?u=76281980&t=104)** Megaco can operate with either H.323 or Session Initiation Protocol.
>
> **[1:51](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/gateways-and-gatekeepers?u=76281980&t=111)** Signaling gateways pass voice traffic between dissimilar networks.
>
> **[1:56](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/gateways-and-gatekeepers?u=76281980&t=116)** SIGTRAN, or signaling transport is a telephony protocol that transports SS7 signals through the internet.
>
> **[2:05](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/gateways-and-gatekeepers?u=76281980&t=125)** Session Initiation Protocol is an application layer protocol for signaling and control that establishes, maintains, and terminates sessions between parties over the internet, private networks, and cell systems.
>
> **[2:21](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/gateways-and-gatekeepers?u=76281980&t=141)** H.323 acts as a wrapper for media control and setup, and includes H.225, which establishes communications between two hosts, and H.245, which establishes properties, such as audio codex and logical channels for the media transfer.
>
> **[2:43](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/gateways-and-gatekeepers?u=76281980&t=163)** Translators and mixers are middleboxes that are placed in the network that transform the media stream within a session, and are sometimes necessary when handling conference sessions or traversing firewalls.
>
> **[2:57](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/gateways-and-gatekeepers?u=76281980&t=177)** Gateways and voice over IP are necessary to convert media streams, and include media and signaling gateways, along with translators and mixers.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (3), public (1), interface (1), private (1)
> **Env Vars:** rtp (1), sip (1), sigtran (1), ss7 (1)
> **Definitions:** is a  (2), known as (1), is an  (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Understanding MGCP and Megaco (H.248)
> [LinkedIn Learning](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=0)** - [Instructor] When transmitting multimedia over an IP network the signal must go through multiple transformations and devices before reaching its final destination.
>
> **[0:12](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=12)** In this segment, we'll discover how MGCP Megaco controls the way Media Gateways set up multimedia transmissions.
>
> **[0:21](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=21)** We'll also dissect a transaction and Wireshark to see how media gateway control protocol interacts with a Cisco call manager.
>
> **[0:31](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=31)** First, let's talk about some of the devices involved.
>
> **[0:36](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=36)** Media Gateways provide media logic to convert circuit switch to packet based traffic.
>
> **[0:43](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=43)** Media Gateway Controllers, also called Call Agents or Soft Switches, provide signaling logic.
>
> **[0:51](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=51)** So let's talk a little bit more about the Call Agents.
>
> **[0:55](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=55)** Call Agents are external control devices in a voice system such as the Cisco Unified Communications Manager.
>
> **[1:04](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=64)** Immediate gateway control protocol, the Call Agent has complete control of the gateway and performs all of the administrative tasks.
>
> **[1:14](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=74)** All route patterns and dial plans are configured on the call manager.
>
> **[1:19](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=79)** The Call Agent contains the control intelligence, endpoints will communicate changes in service state to the call agent.
>
> **[1:29](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=89)** The call agent can then create, modify and delete connections in order to establish and control media sessions with other multimedia endpoints.
>
> **[1:41](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=101)** Now let's talk about the protocols.
>
> **[1:44](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=104)** Media Gateway Control Protocol is a primary secondary protocol that provides a central gateway by handling the signal and session management required during a multimedia session.
>
> **[1:58](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=118)** Megaco, more commonly known as H.248 performs the same functions as media gateway control protocol, but is a newer protocol that uses different commands and processes.
>
> **[2:13](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=133)** Megaco will operate with either H.323 or SIP.
>
> **[2:18](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=138)** In this graphic, we can see where the interchange between the call agent and the media gateway takes place by using either Media Gateway Control protocol or Megaco.
>
> **[2:31](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=151)** I found this site that can help you understand how Media Gateway Control protocol interacts with the Cisco call manager.
>
> **[2:39](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=159)** And if we scroll down, this will outline some of the basic commands that are used to exchange messages between the Call Agent and the gateway.
>
> **[2:49](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=169)** So next, let's take a look at some of the transactions that occurred during a session in Wireshark.
>
> **[2:57](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=177)** If you'd like to follow along, you can get the file here, select download and open it in Wireshark.
>
> **[3:04](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=184)** I opened the file and saved it locally as sip.pcapng.
>
> **[3:09](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=189)** Now here we can see a lot of commands as it's talking with the device.
>
> **[3:15](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=195)** There's a lot of dialogue and a lot of things that are happening, but we're really going to focus on the Media Gateway Control Protocol.
>
> **[3:23](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=203)** So let's put in a filter.
>
> **[3:27](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=207)** MGCP and press enter.
>
> **[3:30](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=210)** And here we see 30 packets.
>
> **[3:33](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=213)** So let's go to statistics and flow graph and a limit to display filter.
>
> **[3:39](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=219)** And here you can see the exchange.
>
> **[3:43](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=223)** But I'll close that.
>
> **[3:46](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=226)** I want to see the dialogue, so I'll right click and say, follow UDP Stream.
>
> **[3:52](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=232)** And here we can see all the commands and how the Media Gateway Control Protocol interacts with the Cisco call manager.
>
> **[4:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=240)** But let me bring that into PowerPoint to show us a little bit easier those different commands.
>
> **[4:06](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=246)** So here we see the commands and one of those would be a restart in progress.
>
> **[4:12](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=252)** And in this case the gateways going to notify the call manager that an endpoint or a group of endpoints are taken out or placed back into service.
>
> **[4:23](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=263)** Now this may have happened for a number of different reasons.
>
> **[4:26](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=266)** One of them being the signal didn't get to the call manager in some way.
>
> **[4:32](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=272)** Here we see a notify, and this is where the gateway will inform the Cisco call manager when different events occur.
>
> **[4:40](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=280)** A notification request is where the call manager's going to instruct the gateway to watch for specific events such as hooks or different tones.
>
> **[4:51](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=291)** And here we see create connection.
>
> **[4:53](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=293)** This is where the call manager will create a connection between two endpoints.
>
> **[4:58](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=298)** And you'll also see some other signaling including on hook transition, off hook or flash hook.
>
> **[5:07](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=307)** Now let's test your knowledge, discuss some of the commands used during multimedia transmissions.
>
> **[5:14](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/understanding-mgcp-and-megaco-h-248?u=76281980&t=314)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), switch (1), delete (1)
> **Env Vars:** mgcp (2), sip (1), udp (1)
> **Definitions:** is a  (2), known as (1)
> **UI Navigation:** scroll down (1), go to (1)
> **Analogies:** such as (2)
> **Speakers:** - [instructor] (1)

#### Session Initiation Protocol
> [LinkedIn Learning](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=0)** - [Instructor] Session initiation protocol, or SIP, is an application layer protocol for signaling and control that establishes, maintains, and terminates sessions between parties over the internet, private networks, and cell systems.
>
> **[0:19](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=19)** SIP is the most common signaling protocol used in VoIP today.
>
> **[0:24](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=24)** As a result, manufacturers are incorporating SIP into various products, such as phones, proxies, gateways, and servers.
>
> **[0:34](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=34)** SIP sessions may involve one or more media streams such as voice and video and includes videoconferencing, IM, gaming, and shared multimedia.
>
> **[0:48](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=48)** For a call to take place, we have to establish, manage, and terminate.
>
> **[0:54](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=54)** SIP sends an invite, which is sent to set up a VoIP call.
>
> **[1:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=60)** An invite has a session description that allows participants to agree on the parameters of the call, such as media channels and codecs.
>
> **[1:10](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=70)** In this invite, we see the request line tells me that this is SIP version 2.0 invite, which is sent to sip:Cleo@[Patra.net](https://Patra.net), and other information such as from and the caller's location.
>
> **[1:27](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=87)** Within that invite there's also the session description protocol.
>
> **[1:32](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=92)** This describes streaming media parameters that perhaps include the format and other attributes so that both parties can agree upon those parameters.
>
> **[1:44](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=104)** SIP messages go through either a proxy or redirect servers.
>
> **[1:49](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=109)** Both will inspect the to field and then contact the location server to resolve the address.
>
> **[1:56](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=116)** The servers include redirect servers that return information to the original sender; the proxy server will forward the message to the endpoint or other server; and a registrar server will record the location of clients and are normally located within the proxy.
>
> **[2:16](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=136)** So now let's step through the process.
>
> **[2:19](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=139)** With a SIP call process we see first the handshake.
>
> **[2:23](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=143)** This is going to offer a list of supported streams in codecs and the answer will provide a list of accepted streams and codecs.
>
> **[2:32](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=152)** And then in the conversation, RTP will carry the media directly between the endpoints.
>
> **[2:39](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=159)** At the end of the call, you're going to see a SIP message with a bye in the request line.
>
> **[2:46](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=166)** Now, if you'd like to follow along, go to this website where we can get a sample capture.
>
> **[2:51](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=171)** What we're going to get is MagicJack in a short test call right here.
>
> **[2:56](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=176)** And then you'll want to open it up in Wireshark.
>
> **[2:59](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=179)** Now, once it's open, we're going to filter.
>
> **[3:03](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=183)** Okay, we'll go up here and we're going to say SIP or RTP.
>
> **[3:15](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=195)** All right, so now we just have those two protocols and what we can do is go to statistics and flow graph.
>
> **[3:25](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=205)** And I'll bring this over and we'll say limit to display filter so we just have that SIP and then subsequent RTP, the conversation.
>
> **[3:36](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=216)** All right, so now here you can see the invite and then down below you see RTP and they're using the codec G.711.
>
> **[3:48](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=228)** We'll scroll all the way down and there you can see the request, we've said bye, and that means that they want to leave the session.
>
> **[3:58](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=238)** All right, now we'll close this.
>
> **[4:01](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=241)** Now we'll go up to the beginning here where we start with the invite, and here we see session initiation protocol, and I'll pull this up and here you see the header, and that, again, just says where it's coming from, and the request line, and there's your invite.
>
> **[4:21](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=261)** And now, within the body, though, there's where we see the session description protocol.
>
> **[4:27](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=267)** And you can find other parameters within that explaining what will be supported, and I'll bring that up, as well.
>
> **[4:37](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=277)** Now, when we can finish up with going to telephony.
>
> **[4:41](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=281)** Now, of course, we could go to VoIP calls, but in this case, let's go to SIP flows.
>
> **[4:47](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=287)** And here you can see the SIP flow, and then down below, play streams.
>
> **[4:54](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=294)** And you'll see the two streams here, and there we could just output to the default output device.
>
> **[5:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=300)** And we'll play the streams.
>
> **[5:03](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=303)** (low-pitched telephone ringing) (higher-pitched telephone ringing) (low-pitched telephone ringing)
>
> **[5:12](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=312)** - [Caller] Test one, two three.
>
> **[5:17](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/session-initiation-protocol?u=76281980&t=317)** - [Instructor] So that's just a simple example of session initiation protocol, an application layer protocol for signaling and control that establishes, maintains, and terminates sessions between parties.

> [!info]- Semantic Content
>
> **Env Vars:** sip (13), rtp (4)
> **Code Keywords:** let (2), private (1), this. (1), from, (1), case, (1)
> **UI Navigation:** go to (4)
> **Analogies:** such as (4)
> **Speakers:** - [instructor] (2), - [caller] (1)
> **CLI Commands:** find (1)
> **URLs:** [patra.net](https://patra.net) (1)
> **Versions:** version 2 (1)

#### H.323 family
> [LinkedIn Learning](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/h-323-family?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/h-323-family?u=76281980&t=0)** - [Instructor] H.323 Signaling is an ITU-T recommendation for audio and video communication across an IP network.
>
> **[0:11](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/h-323-family?u=76281980&t=11)** H.323 acts as a wrapper for media control and includes H.225, H.245, which are both protocols that have a specific role in the call setup process.
>
> **[0:26](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/h-323-family?u=76281980&t=26)** An H.323 network is made of several components, such as end points or terminals, a gateway, and a a multipoint control unit.
>
> **[0:39](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/h-323-family?u=76281980&t=39)** This is used to bridge videoconferencing calls, and it includes a multipoint controller for call signaling, and a multipoint processor to mix, encode, and switch streams.
>
> **[0:53](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/h-323-family?u=76281980&t=53)** Then there's the gatekeeper and a back-end service which holds information about terminals, configuration, and billing.
>
> **[1:02](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/h-323-family?u=76281980&t=62)** The gatekeepers are very useful as they serve as a bridge between the H.323 network and the outside world.
>
> **[1:11](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/h-323-family?u=76281980&t=71)** The gatekeepers provide address resolution and bandwidth control.
>
> **[1:17](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/h-323-family?u=76281980&t=77)** An H.225 signal establishes communications between two hosts, which is initiated either using a TCP or UDP connection with an H.225 signal.
>
> **[1:31](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/h-323-family?u=76281980&t=91)** This contains the registration admission status protocol and negotiates with the gatekeeper and obtains the information of the endpoint it is attempting to contact in order to establish the call.
>
> **[1:45](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/h-323-family?u=76281980&t=105)** An H.245 control protocol establishes properties such as audio codecs and logical channels for the media transfer.
>
> **[1:55](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/h-323-family?u=76281980&t=115)** An H.245 protocol includes master slave determination.
>
> **[2:01](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/h-323-family?u=76281980&t=121)** Now this is used to prevent conflicts between two terminals which want to start the process.
>
> **[2:08](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/h-323-family?u=76281980&t=128)** It makes the decision about which one will be the master and which one will be the slave.
>
> **[2:13](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/h-323-family?u=76281980&t=133)** Here you can see the H.323 call setup.
>
> **[2:18](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/h-323-family?u=76281980&t=138)** It begins up above by what you see as Q.931, which has the protocol H.245, and then after that the call then begins immediate transfer using RTP.
>
> **[2:33](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/h-323-family?u=76281980&t=153)** H.323 was one of the first voice over IP protocols that was developed and used by vendors.
>
> **[2:41](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/h-323-family?u=76281980&t=161)** However, it is less popular since the development of SIP, but it is still in use.
>
> **[2:49](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/h-323-family?u=76281980&t=169)** H.323 acts as a wrapper for media control and setup and includes H225 and H245, which provides audio codec and logical channels for the media transfer.

> [!info]- Semantic Content
>
> **Env Vars:** itu (1), tcp (1), udp (1), rtp (1), sip (1)
> **Prerequisites:** setup (3)
> **Analogies:** such as (2)
> **Code Keywords:** switch (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Establishing an H.323 connection
> [LinkedIn Learning](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=0)** - [Instructor] H.323 acts as a wrapper for media control and setup and was one of the first VoIP protocols developed and used by vendors.
>
> **[0:10](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=10)** However, it's less popular since the development of sip but it's still in use today.
>
> **[0:16](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=16)** In this segment, we'll focus on what transpires when establishing an H.323 connection.
>
> **[0:24](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=24)** Now the call setup begins first with the connection established using Q.931, and then after that you see the call established using H.245 and then you see the media stream with RTP.
>
> **[0:42](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=42)** In this segment, we can see an example of the call set up using Q.931.
>
> **[0:48](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=48)** If you'd like to follow along, go to this website and you'll download and extract rtp_example.raw which is found right here and then you'll open it in Wire Shark.
>
> **[1:02](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=62)** Now, once I brought it into Wire Shark, I saved it in a PCAP Next Generation format.
>
> **[1:08](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=68)** Now within this capture, we see an example of this wrapper and some of the protocols within H.323.
>
> **[1:16](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=76)** Now prior to our evaluation, we're going to check some of the protocols and make sure that we can reassemble the packet.
>
> **[1:23](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=83)** Now this is probably already done but sometimes students will say that they're unable to get the capture to work or replay the capture.
>
> **[1:32](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=92)** So we'll go into edit and then preferences and then protocols.
>
> **[1:37](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=97)** And we're going to look for TCP.
>
> **[1:46](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=106)** And right here we see that it is set to allow subdissector to reassemble TCP streams.
>
> **[1:53](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=113)** Okay good.
>
> **[1:54](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=114)** Next, we'll check TPKT.
>
> **[2:02](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=122)** TPKT is transport service on top of TCP.
>
> **[2:06](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=126)** And again, we actually see that it's going to be reassembled as well.
>
> **[2:11](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=131)** So those two preferences are set and that's good because this is where we might see a problem.
>
> **[2:17](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=137)** So I'll close this and now what we're going to do is start by looking at Q.931 In wire shark, the filter will be Q 931, and we'll press enter.
>
> **[2:33](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=153)** All right, we'll pull this up and now let's examine the setup during the first phase which uses the protocol H.225.
>
> **[2:43](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=163)** Now, this is pretty straightforward.
>
> **[2:45](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=165)** However, this might be one place you could look while troubleshooting potential connection issues.
>
> **[2:51](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=171)** And right here we see the standard exchanges of setup, alerting and connect, but we also see call proceeding.
>
> **[3:02](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=182)** Now let me take you to a website where we can learn more about some of the messages you might encounter.
>
> **[3:08](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=188)** So go to this website and it talks about Q.931.
>
> **[3:14](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=194)** Now Q.931 is ISDN's connection control protocol roughly comparable to TCP in the internet protocol stack.
>
> **[3:24](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=204)** I'll scroll down here and we can see the most important message types and some of them include alerting, call proceeding and connect.
>
> **[3:33](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=213)** But within those messages we see the exchange of bearer capability because it is an ISDN protocol.
>
> **[3:42](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=222)** So now let's go back into wire shark and we're going to expand packet four.
>
> **[3:47](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=227)** So I'll just drop this down and here we first see and I'll scroll this up, Q.931 and we see a lot of information here, the bearer information, the bearer capability and I'll pull this up, display name and then I'll pull this up and we'll take a look at H.225 and we'll expand that.
>
> **[4:10](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=250)** Here we see user information, message body and some of the information as far as the setup, source information and down below here we see alias address, m.jemec.
>
> **[4:24](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=264)** So let's take a look at a little bit more information on endpoint aliasing.
>
> **[4:30](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=270)** I'm here at this site on H.323 endpoint aliasing and down below it talks about H.323.
>
> **[4:40](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=280)** The ID is a string based alias assigned to the endpoint such as conference room 222 or John Smith.
>
> **[4:48](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=288)** And these are useful only locally.
>
> **[4:51](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=291)** However, this information can be essential as if the alias is not authorized, the call may be rejected.
>
> **[4:59](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=299)** So now we'll do one more thing.
>
> **[5:01](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=301)** We'll bring this up and we'll go into telephony and we'll look at some of the statistics, one being H.225.
>
> **[5:09](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=309)** And when we're take a look at this, you can see that there's setup and then down below you see call progress and connect.
>
> **[5:20](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=320)** And there isn't anything really problematic.
>
> **[5:23](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=323)** However, if you're benchmarking this type of traffic and you want it to go back and evaluate the type of information when life was good, this could be valuable.
>
> **[5:33](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=333)** So when you do this, you can say, Save As and you can save it in one of the different formats such as text which I did, comma separated value or YAML and I'll just cancel that.
>
> **[5:47](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=347)** But then you could go back and compare it which can be valuable.
>
> **[5:51](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=351)** So now we understand what transpires when establishing an H.323 connection.
>
> **[5:58](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=358)** Now let's test your knowledge.
>
> **[6:01](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=361)** H.323 acts as a wrapper for media control.
>
> **[6:05](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=365)** Outline a few of the steps that you will see during the Q.931 call setup.
>
> **[6:12](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/establishing-an-h-323-connection?u=76281980&t=372)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** tcp (4), tpkt (2), isdn (2), rtp (1), pcap (1)
> **Prerequisites:** setup (7), set up (1)
> **Code Keywords:** let (5), this, (2)
> **UI Navigation:** go to (2), scroll down (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** rtp_example (1)

#### Evaluating H.323
> [LinkedIn Learning](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980&t=0)** - [Instructor] H.323 acts as a wrapper for media control and includes H.225 and H.245, which are both protocols that have a specific role in the call setup process.
>
> **[0:15](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980&t=15)** In this segment, we'll focus on H.245 which establishes the properties of the call.
>
> **[0:24](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980&t=24)** H.323 begins with Q.931, which establishes a connection between hosts.
>
> **[0:32](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980&t=32)** We then move into H.245, which establishes properties such as audio codex and logical channels for the media transfer.
>
> **[0:42](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980&t=42)** Then once the call is set up, the properties can begin exchanging data using RTP.
>
> **[0:50](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980&t=50)** Let's see how this works in Wireshark.
>
> **[0:53](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980&t=53)** For this example, we'll use the RTP example file.
>
> **[0:58](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980&t=58)** To start, we want to filter only H.245 traffic.
>
> **[1:03](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980&t=63)** So go to the display filter and type H.245 and press Enter.
>
> **[1:11](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980&t=71)** Now within the frames, I want you to take note that this process uses TCP as we see here.
>
> **[1:18](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980&t=78)** So to view the transaction, we'll go to Statistics and then Flow Graph.
>
> **[1:24](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980&t=84)** And then once there we'll select Limit to display filter.
>
> **[1:28](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980&t=88)** And there we see H.245 traffic.
>
> **[1:32](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980&t=92)** Now what happens is H.245 completes the following.
>
> **[1:37](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980&t=97)** First we see here, we begin with the terminalCapabilitySet message and this indicates the audio codex and other capabilities of each endpoint.
>
> **[1:49](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980&t=109)** And then down below, we then see the process of primary secondary determination which determines which endpoint will be the boss.
>
> **[1:59](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980&t=119)** Now this process is important, as it's used to prevent conflicts between the two terminals.
>
> **[2:05](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980&t=125)** And then below we see the opening of logical channels and here we see the codec G.711 along with some acknowledgements.
>
> **[2:16](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980&t=136)** And now we'll close that and we'll remove the filter and then we can see the rest of the capture.
>
> **[2:23](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980&t=143)** Now, once the flow is established the process moves to RTP using UDP.
>
> **[2:30](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980&t=150)** So I'll select one of these, and here we see UDP, and that's your media transfer.
>
> **[2:37](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980&t=157)** So when you're looking at normal voice over IP traffic, H.323 probably isn't one you're going to see as often but you might.
>
> **[2:46](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980&t=166)** And if you're using it, Wireshark will be able to open it, decode it, take a look at the data transfer itself and help you during troubleshooting.
>
> **[2:57](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980&t=177)** Now, let's test your knowledge.
>
> **[2:59](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980&t=179)** H.323 begins with Q.931.
>
> **[3:04](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980&t=184)** Explain what happens after the setup phase using H.245.
>
> **[3:11](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-h-323?u=76281980&t=191)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** rtp (3), udp (2), tcp (1)
> **Prerequisites:** setup (2), set up (1)
> **Code Keywords:** let (2)
> **Code Identifiers:** terminalcapabilityset (1)
> **UI Navigation:** go to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 4. Network Operations

#### Performance overview
> [LinkedIn Learning](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/performance-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/performance-overview?u=76281980&t=0)** - [Instructor] Businesses choose a voiceover IP solution to save money on phone calls and because it can integrate within a unified communication system.
>
> **[0:11](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/performance-overview?u=76281980&t=11)** When implementing a voiceover IP solution, it must ensure the same or better quality as a tradition telephone network.
>
> **[0:21](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/performance-overview?u=76281980&t=21)** Many things can affect voice quality.
>
> **[0:24](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/performance-overview?u=76281980&t=24)** Issues include latency, which is the delay in packet delivery; jitter, which is delay variation of packet delivery; and packet loss, which is dropped packets.
>
> **[0:39](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/performance-overview?u=76281980&t=39)** On an internal network, there are a few things that we can proactively do to ensure that the network can handle the voice traffic such as network bandwidth, equipment selection, and configuring quality of service.
>
> **[0:54](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/performance-overview?u=76281980&t=54)** Now, studies show that adding more bandwidth is not the answer.
>
> **[0:59](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/performance-overview?u=76281980&t=59)** A proactive approach is to shape the traffic.
>
> **[1:03](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/performance-overview?u=76281980&t=63)** Using a packet shaper can improve the performance of time-sensitive applications by throttling back nonessential traffic and prioritizing the voiceover IP traffic.
>
> **[1:15](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/performance-overview?u=76281980&t=75)** For example, this graphic might represent what you'll see on a packet shaper dashboard.
>
> **[1:22](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/performance-overview?u=76281980&t=82)** Now, today's web pages are interactive by design and will have streaming media playing in the background, which might impact the network.
>
> **[1:32](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/performance-overview?u=76281980&t=92)** Tune the packet shaper to minimize the impact of bandwidth hogging applications on the network to protect your voiceover IP traffic.
>
> **[1:42](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/performance-overview?u=76281980&t=102)** The quality of equipment is essential.
>
> **[1:45](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/performance-overview?u=76281980&t=105)** An unmanaged consumer class switch will not be able to prioritize traffic.
>
> **[1:51](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/performance-overview?u=76281980&t=111)** If a large document hits the device first, it will be delivered and starve out the voice traffic.
>
> **[1:59](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/performance-overview?u=76281980&t=119)** Ensure that you have the right equipment so that you can manage and prioritize traffic.
>
> **[2:04](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/performance-overview?u=76281980&t=124)** Voiceover IP uses the IP network to deliver voice and multimedia communications.
>
> **[2:12](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/performance-overview?u=76281980&t=132)** Internet protocol, or IP, is connectionless and best effort, meaning most of the time it will get there, but there's no guarantee it will get to its final destination.
>
> **[2:25](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/performance-overview?u=76281980&t=145)** It's like sending a letter using general delivery.
>
> **[2:29](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/performance-overview?u=76281980&t=149)** Transmitting multimedia needs to be much better than best effort.
>
> **[2:35](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/performance-overview?u=76281980&t=155)** On an IP network, quality of service makes sure that voice data is prioritized when traveling through the network.
>
> **[2:43](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/performance-overview?u=76281980&t=163)** When you implement quality of service, realtime traffic is delivered first before everything else such as Word documents and email.
>
> **[2:54](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/performance-overview?u=76281980&t=174)** In addition to configuring the devices to monitor and prioritize time-sensitive traffic, if you outsource voiceover IP, make sure to identify and discuss quality of service issues on the VoIP contract.
>
> **[3:10](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/performance-overview?u=76281980&t=190)** Poor phone communication is unacceptable.
>
> **[3:14](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/performance-overview?u=76281980&t=194)** Manage your bandwidth, ensure proper equipment selection, and configure quality of service to ensure your voice traffic gets the treatment it deserves.

> [!info]- Semantic Content
>
> **Analogies:** such as (2), for example (1), it's like (1)
> **CLI Commands:** make (1)
> **Code Keywords:** switch (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Quality of service
> [LinkedIn Learning](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=0)** - [Instructor] Internet protocol is a connectionless best effort protocol, meaning there's no guarantee it will get to its final destination.
>
> **[0:10](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=10)** Quality of service makes sure that voice data is prioritized when traveling through an IP network.
>
> **[0:17](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=17)** Now, when you implement quality of service, real-time traffic is delivered first, before everything else, such as Word documents or email.
>
> **[0:28](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=28)** Quality of service is also called type of service, quality of service, or in some cases, differential services.
>
> **[0:36](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=36)** This is the field value in an IP header that marks priority traffic.
>
> **[0:42](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=42)** Now, the concept of priority of service, or type of service, or quality of service, has been around a long time.
>
> **[0:51](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=51)** In fact here, I'm at the original IP RFC, RFC 791.
>
> **[0:57](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=57)** And if you look here, there is a field value in IP version 4 that talks about type of service.
>
> **[1:04](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=64)** There are eight bits or one byte that allows you to modify that header to push up the priority.
>
> **[1:11](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=71)** And here, you can see some of the priorities and the precedence and what it does for that type of traffic.
>
> **[1:18](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=78)** So when we do look at a header value and we look at what we see as far as class selector values, the normal traffic is, what's called best effort.
>
> **[1:29](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=89)** And that's the default, a zero, and it's just going to do it's best it can.
>
> **[1:34](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=94)** And then you see network control.
>
> **[1:36](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=96)** And those are protocols that deal with routing protocols, or getting the data through to deal with network issues, Internet Key Exchange, EIGRP, Open Shortest Path First.
>
> **[1:51](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=111)** And here we see signaling.
>
> **[1:52](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=112)** And that is class selector 3, which has a decimal value of 24.
>
> **[1:58](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=118)** So you can see, it's pushed up a little bit in the priority.
>
> **[2:01](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=121)** Now, I have some examples that I wanted to show you.
>
> **[2:05](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=125)** What I'll do is, I'm going to put up on the top here, this is actually the class selector in an image so you can take a look and cross reference.
>
> **[2:15](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=135)** So as you can see, the default is zero.
>
> **[2:19](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=139)** And in this case, this is just best effort.
>
> **[2:22](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=142)** So what I've done is, we are into the IP header, and when we have that IP header there, you can see that what it is doing is providing you with the ability of the differentiated services field.
>
> **[2:34](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=154)** Let me just drop this down here.
>
> **[2:36](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=156)** It is zero, and again, class selector zero, default, best effort, nothing really special there.
>
> **[2:44](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=164)** Now, we also have one here that I thought was interesting, and that is EIGRP, Enhanced Interior Gateway Protocol is the protocol we use on Cisco routers.
>
> **[2:57](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=177)** And what it does is update the routers, let the other routers know that I'm available, I'm able to provide you with the ability to route traffic.
>
> **[3:08](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=188)** So here you can see, that's a class selector six, and that has to deal with network control.
>
> **[3:14](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=194)** So in our image here, we can see that that has to do with EIGRP, Open Shortest Path First, but that's bumping that priority up pretty high so that it really pushes out that traffic so that the routers are aware that other routers are available to provide routing to their traffic.
>
> **[3:34](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=214)** And here I have Skinny.
>
> **[3:36](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=216)** And this Skinny capture is, of course, a Cisco protocol.
>
> **[3:41](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=221)** And when we take a look at that, that is, Cisco is showing you a class selector three, which is, again, signaling.
>
> **[3:49](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=229)** And again, that's about normal.
>
> **[3:51](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=231)** We want to see that priority at around 24.
>
> **[3:55](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=235)** This was one I thought was interesting.
>
> **[3:57](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=237)** This is Magicjac, I brought this in and I thought, I wonder what that field value is.
>
> **[4:04](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=244)** Oddly enough, what we see for that one is that is set at zero or best effort.
>
> **[4:10](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=250)** So we did see a little bit of jitter on that and that could very well be because the priority wasn't that high, it's just at best effort.
>
> **[4:21](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=261)** So of course, that could cause some issues in the data transfer.
>
> **[4:25](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=265)** So as we know, Voice over IP has minimal tolerance for packet loss and disruption.
>
> **[4:31](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/quality-of-service?u=76281980&t=271)** When you implement quality of service, real-time traffic is pushed up in priority and delivered faster.

> [!info]- Semantic Content
>
> **Code Keywords:** default, (2), let (2), else, (1), case, (1)
> **Env Vars:** eigrp (3), rfc (2)
> **Documentation:** rfc (2)
> **Definitions:** is a  (2)
> **Versions:** version 4 (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Domain Name System
> [LinkedIn Learning](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/domain-name-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/domain-name-system?u=76281980&t=0)** - [Instructor] Every device that's connected to the internet, such as a web or email server, a VoIP phone, or other end device, has an IP address.
>
> **[0:13](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/domain-name-system?u=76281980&t=13)** Domain name system, or DNS, maps a host name to an IP address and works like the internet's phone book.
>
> **[0:21](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/domain-name-system?u=76281980&t=21)** This enables devices to connect with one another.
>
> **[0:25](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/domain-name-system?u=76281980&t=25)** Whenever you place a call to a SIP address, the server will request the address from the DNS server.
>
> **[0:33](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/domain-name-system?u=76281980&t=33)** Once it's resolved, you can make the call.
>
> **[0:36](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/domain-name-system?u=76281980&t=36)** With DNS, there are a number of different types of resource records.
>
> **[0:42](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/domain-name-system?u=76281980&t=42)** These resource records are used to specify a resource type and an IP address to locate the resource.
>
> **[0:51](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/domain-name-system?u=76281980&t=51)** Some commonly seen records are a type A record.
>
> **[0:56](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/domain-name-system?u=76281980&t=56)** A type A resource record is used for an IP version four address.
>
> **[1:01](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/domain-name-system?u=76281980&t=61)** You might also see a quad A, which is used for an IP version six address.
>
> **[1:08](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/domain-name-system?u=76281980&t=68)** A mail exchange record will redirect mail to a mail server.
>
> **[1:13](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/domain-name-system?u=76281980&t=73)** And the last entry is a service record, which defines available services such as HTTP, LDAP, and SIP.
>
> **[1:23](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/domain-name-system?u=76281980&t=83)** Similar to the way a mail exchange record is used to send and receive mail, a DNS service record helps connect to a SIP user.
>
> **[1:33](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/domain-name-system?u=76281980&t=93)** In many cases, when a SIP client calls a public SIP address, an IP phone will use a DNS service record to query and determine the IP address and port of the SIP proxy or redirect server.
>
> **[1:48](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/domain-name-system?u=76281980&t=108)** The service record allows administrators to use several servers for a single domain and then designate some host for primary servers for a server and other backups.
>
> **[2:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/domain-name-system?u=76281980&t=120)** Now this is just a format as you can see.
>
> **[2:04](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/domain-name-system?u=76281980&t=124)** The standard format begins with an underscore, and then it tells us the protocol type, name, time to live, class, priority, weight, port, and target.
>
> **[2:16](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/domain-name-system?u=76281980&t=136)** And here's an example of a service record.

> [!info]- Semantic Content
>
> **Env Vars:** sip (6), dns (5), http (1), ldap (1)
> **Code Keywords:** public (1), type, (1), class, (1)
> **Analogies:** such as (2), similar to (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Directory integration
> [LinkedIn Learning](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/directory-integration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/directory-integration?u=76281980&t=0)** - [Instructor] Directories are databases that allow a company to centralize all user information and permissions into a central location that is available to many different applications, and might be required in order to ensure voice over IP functionality.
>
> **[0:21](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/directory-integration?u=76281980&t=21)** LDAP or Lightweight Directory Access Protocol provides applications with a method to access and modify the information in the directory.
>
> **[0:32](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/directory-integration?u=76281980&t=32)** Integration between voice applications and an LDAP directory is commonly done in many organizations.
>
> **[0:41](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/directory-integration?u=76281980&t=41)** In this graphic we see several components and some of the interactions that can take place within the directory.
>
> **[0:49](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/directory-integration?u=76281980&t=49)** One common task is to do a lookup of the requested user from an IP phone or other voice and/or video application, so that the user can dial the contact directly.
>
> **[1:02](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/directory-integration?u=76281980&t=62)** Certain Cisco IP phones are equipped with a display screen so that you can search a user directory.
>
> **[1:11](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/directory-integration?u=76281980&t=71)** When the user presses the directory's button on the phone, the IP phone will send a request to a web server and return the results to the user.
>
> **[1:20](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/directory-integration?u=76281980&t=80)** Another task is to move and update user information from the corporate directory into the user database of voice and/or video applications, so the apps have the latest information.
>
> **[1:34](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/directory-integration?u=76281980&t=94)** End users and administrators will need to be authenticated to provide a single logon functionality so that they can interact with the various corporate applications.
>
> **[1:45](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/directory-integration?u=76281980&t=105)** And general directory integration on a corporate network can provide authentication, provisioning, and user lookup, and may be required in order to ensure VoIP functionality.

> [!info]- Semantic Content
>
> **Env Vars:** ldap (2)
> **Speakers:** - [instructor] (1)

#### Using STIR/SHAKEN to reduce robocalls
> [LinkedIn Learning](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=0)** - [Instructor] Malicious actors use several methods to spoof a phone number.
>
> **[0:04](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=4)** In this segment, we'll learn how the standard STIR/SHAKEN provides a way to validate caller identity and prevent spoofing attacks.
>
> **[0:14](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=14)** One method malicious actors use to bait victims into sending money is by spoofing a phone number.
>
> **[0:21](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=21)** Let's walk through an example of how this is done.
>
> **[0:25](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=25)** Imagine someone getting a call that they think is from their grandchild.
>
> **[0:30](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=30)** The malicious actor will speak with the grandparent and describe a situation where they're in a bind and will ask the victim to send money.
>
> **[0:40](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=40)** The victim might send the money, however later on they find out that they have been spoofed.
>
> **[0:47](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=47)** Now, how does this happen?
>
> **[0:50](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=50)** I'm here at this website where we learn that every month there are approximately 5 billion robo-calls to US phones, and nearly 2 billion of those calls are from cyber criminals intent on stealing from unsuspecting victims.
>
> **[1:08](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=68)** The malicious actors spoof the numbers to make it seem that the call is from someone they know.
>
> **[1:15](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=75)** Now, because Voice over IP uses software, spoofing a number is possible.
>
> **[1:21](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=81)** I'm here at this site where you can learn how to make spoof calls using any phone number you want right from your smartphone.
>
> **[1:30](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=90)** Now, there are others that malicious actors use to spoof phone numbers.
>
> **[1:35](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=95)** To combat this massive fraud, The Federal Communications Commission adopted rules requiring service providers to deploy a solution called STIR/SHAKEN.
>
> **[1:47](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=107)** STIR/SHAKEN is an industry-wide initiative to restore trust in our voice communications.
>
> **[1:53](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=113)** Its goal is to prevent fraudsters from scamming consumers and businesses through robo calls and illegal phone numbers spoofing, while making sure that legitimate calls reach the recipient.
>
> **[2:07](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=127)** STIR is a type of digital signature for a call which verifies the identity of the caller.
>
> **[2:15](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=135)** SHAKEN provides the standards that guide how the provider deploys STIR.
>
> **[2:20](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=140)** STIR/SHAKEN work together as a framework devised to reduce malicious robocalls and number spoofing.
>
> **[2:29](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=149)** Let's step through how this works.
>
> **[2:31](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=151)** When a caller initiates a call, the SIP invite is sent to the originating provider that checks with the authentication service to make sure that the sender can use the phone number.
>
> **[2:44](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=164)** Once authenticated, the SIP invite with the identity header is sent to the terminating provider, which moves to verify that everything is correct.
>
> **[2:56](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=176)** Afterwards, the call can then be completed.
>
> **[3:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=180)** Depending on your provider, you might get this type of notification if it's spam, it's up to you to decide whether to answer the call or not.
>
> **[3:09](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=189)** If it's verified, you might see something like this, a V with the phone number and that ensures that you can trust that number.
>
> **[3:18](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=198)** Now, let's test your knowledge.
>
> **[3:21](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=201)** Malicious actors use several methods to spoof a phone number.
>
> **[3:25](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=205)** Explain how the standard STIR/SHAKEN provides a way to validate caller identity.
>
> **[3:33](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/using-stir-shaken-to-reduce-robocalls?u=76281980&t=213)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** stir (7), shaken (6), sip (2)
> **CLI Commands:** make (3), find (1)
> **Code Keywords:** let (3), this, (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)


### 5. Wireshark Statistics

#### Dissecting a VoIP call
> [LinkedIn Learning](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=0)** - [Instructor] When examining a voice-over-IP call, WireShark does a great job of dissecting a number of the common protocols.
>
> **[0:08](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=8)** Those include SIP and H.323, along with MGCP/Megaco.
>
> **[0:16](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=16)** But in addition, WireShark also supports some lesser known protocols, such as ISUP, which is ISDN user part.
>
> **[0:26](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=26)** Now, this protocol is used in trunk signaling between telephone exchanges to establish and release calls.
>
> **[0:34](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=34)** WireShark also supports UNISTIM, which is a Nortel proprietary voice-over-IP protocol.
>
> **[0:42](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=42)** Now, you might not ever see these protocols, but they are available, along with many other protocols used to transmit multimedia.
>
> **[0:52](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=52)** Now, when you're looking at the call itself, there's a number of different states it recognizes.
>
> **[0:58](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=58)** You might see it in the CALL SETUP state, or RINGING, or IN CALL, when both parties are connected.
>
> **[1:07](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=67)** It could be CANCELLED, or COMPLETED and that means both parties have disconnected.
>
> **[1:14](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=74)** It could be REJECTED, or in some cases, it might come up as UNKNOWN.
>
> **[1:19](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=79)** And that's because WireShark really didn't understand how to interpret the state.
>
> **[1:25](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=85)** So now let's take a look at an example of a couple of calls where you can see the different states.
>
> **[1:31](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=91)** If you'd like to follow along, I found a site that has several files to choose from.
>
> **[1:37](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=97)** And I'm going to select sip, along with SIP-488-Not-Acceptable, and open them in WireShark.
>
> **[1:46](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=106)** Let's start with sip.
>
> **[1:48](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=108)** Now, once you open the file, you can save it locally and we'll take a look at the Telephony menu choice.
>
> **[1:54](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=114)** And within that you can see that there are a number of different statistics.
>
> **[2:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=120)** Now, it really would depend what's included in your capture, the ones you can use, but in this case, we're going to select VoIP calls.
>
> **[2:09](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=129)** Now, once you open it, you can see that the columns can be manipulated, so that we can see all the information and then you can see some of the elements of that particular segment.
>
> **[2:21](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=141)** For example, the Start Time and Stop Time.
>
> **[2:24](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=144)** Now, in addition to what you see here, we can actually go to Time of Day and, that again, could be part of your troubleshooting exercise.
>
> **[2:33](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=153)** And I'll unselect that.
>
> **[2:35](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=155)** You can see what the Initial Speaker's IP address is and where it's from, along with where it's going to.
>
> **[2:44](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=164)** And you can see the Protocol.
>
> **[2:45](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=165)** Those would be the ones that are supported and how long it lasted, along with how many Packets.
>
> **[2:52](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=172)** And there you would see the State.
>
> **[2:54](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=174)** And in this case, we see IN CALL, RINGING and CALL SETUP, along with any Comments.
>
> **[3:01](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=181)** Now, we'll see one more, I'll take a look at that Not Acceptable.
>
> **[3:04](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=184)** And now in this case, we'll go to Telephony, VoIP calls.
>
> **[3:08](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=188)** And now we see the State, REJECTED.
>
> **[3:11](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=191)** Now, a REJECTED call, you might need to do some troubleshooting.
>
> **[3:17](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=197)** So WireShark has the capability of dissecting many different protocols, along with recognizing different States in a VoIP call.
>
> **[3:26](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=206)** Now, let's test your knowledge.
>
> **[3:28](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=208)** In WireShark, the VoIP call statistics and the Telephony menu support several protocols and can indicate the state of the call.
>
> **[3:38](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=218)** List five possible states that you might see in a VoIP call.
>
> **[3:43](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/dissecting-a-voip-call?u=76281980&t=223)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** call (4), rejected (3), sip (2), setup (2), ringing (2)
> **Code Keywords:** let (3), case, (3), from. (1), from, (1)
> **UI Navigation:** go to (2), open the (1)
> **Analogies:** such as (1), for example (1)
> **Prerequisites:** setup (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Evaluating call quality
> [LinkedIn Learning](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-call-quality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-call-quality?u=76281980&t=0)** - [Instructor] When troubleshooting a call, you can view the protocols and evaluate the corresponding real-time protocol streams.
>
> **[0:08](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-call-quality?u=76281980&t=8)** In this segment, we'll go into the VoIP call statistics and then the play streams feature and then examine some of the choices.
>
> **[0:17](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-call-quality?u=76281980&t=17)** For this segment, we'll use the file sip.pcap next generation.
>
> **[0:23](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-call-quality?u=76281980&t=23)** So let's start by going to telephony and VoIP calls.
>
> **[0:28](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-call-quality?u=76281980&t=28)** Now, once you click on any of those calls, you can do something with the choices below.
>
> **[0:33](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-call-quality?u=76281980&t=33)** For example, I can select Prepare A Filter, and you can see in the background that it has prepared a filter.
>
> **[0:42](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-call-quality?u=76281980&t=42)** I could also select flow sequence, and I'll bring that up and that gives us a nice snapshot of that call.
>
> **[0:51](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-call-quality?u=76281980&t=51)** This will isolate that single call where on the top you can see the IP addresses and then you could do a logical drawing to help during troubleshooting.
>
> **[1:01](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-call-quality?u=76281980&t=61)** And I'll close that.
>
> **[1:03](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-call-quality?u=76281980&t=63)** Then we can also play the streams and as long as the Kodak is supported, that will be able to be played.
>
> **[1:11](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-call-quality?u=76281980&t=71)** And of course, that's anything in the g.711 family.
>
> **[1:16](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-call-quality?u=76281980&t=76)** And here we see that the payload is indeed g.711.
>
> **[1:21](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-call-quality?u=76281980&t=81)** First of all, you see that there's two sides.
>
> **[1:23](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-call-quality?u=76281980&t=83)** Well, what if you just wanted to isolate one side?
>
> **[1:26](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-call-quality?u=76281980&t=86)** I can right click and then I could go to audio routing and then say mute, and that'll keep it quiet while you evaluate the other part of the call.
>
> **[1:37](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-call-quality?u=76281980&t=97)** I'm going to uncheck that and now we'll go unmute.
>
> **[1:41](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-call-quality?u=76281980&t=101)** And now I can play the stream.
>
> **[1:45](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-call-quality?u=76281980&t=105)** To play all the streams, I'll select this icon right here.
>
> **[1:50](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-call-quality?u=76281980&t=110)** (speaking foreign language)
>
> **[1:58](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-call-quality?u=76281980&t=118)** So in general, you can see that wire shark voiceover IP calls and the telephony menu gives us a lot of options so that we can evaluate the calls in our capture in order to do an analysis.
>
> **[2:13](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-call-quality?u=76281980&t=133)** Now, let's test your knowledge.
>
> **[2:15](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-call-quality?u=76281980&t=135)** When troubleshooting a voiceover IP call, you can view the VoIP protocols and evaluate the corresponding realtime protocol streams.
>
> **[2:25](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-call-quality?u=76281980&t=145)** Discuss some of the choices you have once you're in the Play Dreams Dialogue box.
>
> **[2:31](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/evaluating-call-quality?u=76281980&t=151)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **UI Navigation:** click on (1), go to (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Analyzing an RTP stream
> [LinkedIn Learning](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=0)** - [Instructor] When evaluating an RTP stream in Wireshark, there are several ways to view the data.
>
> **[0:07](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=7)** In this segment, we'll isolate and analyze the RTP streams.
>
> **[0:12](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=12)** For this segment, we'll use the file sip.pcap next generation.
>
> **[0:18](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=18)** So we'll go into Telephony and then RTP.
>
> **[0:22](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=22)** And here we see RTP streams, but the other two are dimmed out.
>
> **[0:27](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=27)** Well, let's just select that, RTP streams, and here we see three streams.
>
> **[0:34](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=34)** Now I know that there are more than three streams.
>
> **[0:37](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=37)** So what we have to do is help Wireshark by completing a couple of tasks.
>
> **[0:43](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=43)** So we'll close that.
>
> **[0:45](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=45)** And first we're going to do is use the feature decode as, specifically, we're going to go into the user datagram protocol using Source Port 4800.
>
> **[0:57](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=57)** So I know that there is one at Frame 516.
>
> **[1:01](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=61)** So go to Specified Packet, 516 and then press Enter.
>
> **[1:08](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=68)** Now once there, right click and say Decode As.
>
> **[1:13](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=73)** Now currently there's nothing.
>
> **[1:15](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=75)** So we're going to type RTP and it will force it to decode as RTP.
>
> **[1:24](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=84)** Select RTP, and then we'll say Save.
>
> **[1:28](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=88)** And now it recognizes it as RTP.
>
> **[1:32](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=92)** And now we're also going to put in the display filter RTP.
>
> **[1:38](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=98)** And now we can view the streams.
>
> **[1:40](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=100)** So go into Telephony and RTP.
>
> **[1:44](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=104)** And now we can see the streams and the other two options.
>
> **[1:48](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=108)** So I can select the first one.
>
> **[1:50](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=110)** Now, if I select Stream Analysis, this brings up the current stream that I had selected.
>
> **[1:57](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=117)** Now this is nice because it shows me a snapshot of that particular stream, but I'd like to view all of the streams.
>
> **[2:04](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=124)** So I'm going to close that.
>
> **[2:05](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=125)** And this time we're going to go into Telephony, RTP, RTP Streams.
>
> **[2:11](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=131)** And now you see I have five streams.
>
> **[2:14](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=134)** So we'll select, we'll select this one here, the third one and we'll say Analyze.
>
> **[2:22](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=142)** Now it gives us a nice snapshot of that stream and we can see the source address, port, destination address and port, and here we see the synchronizing source.
>
> **[2:36](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=156)** We can see the RTP packets, duration and some other statistics.
>
> **[2:44](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=164)** Now let's see, what else can we see?
>
> **[2:46](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=166)** Okay, we see the lost packets.
>
> **[2:49](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=169)** That's zero, that's great.
>
> **[2:51](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=171)** And maximum jitter.
>
> **[2:53](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=173)** That's really low.
>
> **[2:54](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=174)** It looks pretty good.
>
> **[2:55](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=175)** Of course, anything under 30 milliseconds is okay.
>
> **[3:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=180)** So then we can select the graph tab.
>
> **[3:02](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=182)** And within that graph, you can uncheck what you don't want or what you'd like to see.
>
> **[3:08](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=188)** So now let's test your knowledge.
>
> **[3:11](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=191)** When evaluating an RTP stream in Wireshark, there are several ways to view the data.
>
> **[3:17](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=197)** List five statistics and/or tasks that you can view when you analyze the RTP streams.
>
> **[3:25](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/analyzing-an-rtp-stream?u=76281980&t=205)** You can record your answer on the challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** rtp (16)
> **Code Keywords:** let (3)
> **UI Navigation:** select the (2), go to (1)
> **Ports:** port 4800 (1)
> **Speakers:** - [instructor] (1)

#### Recognizing jitter
> [LinkedIn Learning](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=0)** - [Instructor] There are times when it's essential to do an RTP stream analysis to determine trouble spots on the network.
>
> **[0:09](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=9)** In this segment, we'll learn how to graph and compare jitter between streams.
>
> **[0:15](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=15)** For this segment, we'll work with a capture MagicJack and short call, and that's right here.
>
> **[0:23](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=23)** I opened it and saved it locally as a PCAP next generation.
>
> **[0:28](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=28)** But first, let's do a little housekeeping.
>
> **[0:31](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=31)** Every once in a while a student will say that Wireshark's unable to see the RTP streams.
>
> **[0:37](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=37)** Now they know it's in there, but Wireshark's unable to decode it.
>
> **[0:41](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=41)** Now we know that there are different things that we can do to help Wireshark, but I want to show you another way.
>
> **[0:48](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=48)** Go to analyze and enabled protocols and type RTP, and then down below you'll want to check RTP over UDP.
>
> **[0:59](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=59)** And this will help Wireshark decode an RTP over UDP stream and we'll say, okay.
>
> **[1:08](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=68)** Now, we know that ideally jitter should be below 30 milliseconds.
>
> **[1:13](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=73)** However, at times the connection becomes unstable and jitter will start to creep up.
>
> **[1:19](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=79)** So we'll go to the display filter and type RTP and press enter.
>
> **[1:25](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=85)** Alright, now we'll go to telephony and RTP. RTP streams.
>
> **[1:31](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=91)** Now we see there are two streams and what we want to do is nudge the column values over just a little bit cuz what I want to see is the jitter.
>
> **[1:43](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=103)** Alright, so here we see the max jitter.
>
> **[1:46](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=106)** We see the two values, and I'm going to sort those so that we see the lower value of 0.83 and then the second value 12.83.
>
> **[1:54](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=114)** So there is a difference.
>
> **[1:55](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=115)** And those are two good streams to compare.
>
> **[1:58](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=118)** Select both and select analyze.
>
> **[2:02](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=122)** So here we see stream zero and the max jitter is 0.83.
>
> **[2:07](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=127)** Very reasonable.
>
> **[2:08](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=128)** We won't have any problems with that, but let's go to stream one.
>
> **[2:12](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=132)** Now we see the difference, max jitter 12.83.
>
> **[2:17](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=137)** Now we'll go to the graph and there's a lot going on in the graph.
>
> **[2:21](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=141)** We don't need all these variables.
>
> **[2:22](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=142)** I'm going to uncheck these so we can just compare the two streams.
>
> **[2:28](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=148)** Now we'll uncheck stream one and that's stream zero jitter as you see there.
>
> **[2:33](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=153)** And that's the nice low value 0.83.
>
> **[2:37](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=157)** But let's just check this.
>
> **[2:39](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=159)** So stream one shows up and it's consistently at 12.
>
> **[2:43](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=163)** Now depending on what's happening on your network, this is a good time to baseline or snapshot that call just because it might change over time.
>
> **[2:53](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=173)** You want to see what's happening on your network and possibly if you've changed your software when you're doing your analysis so that you can compare.
>
> **[3:02](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=182)** At this point, I did play the streams and I didn't feel that there was any significant degradation of the call, but this could change over time.
>
> **[3:13](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=193)** So now let's test your knowledge.
>
> **[3:15](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=195)** There are times when it's essential to do an RTP stream analysis to determine trouble spots on the network.
>
> **[3:23](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=203)** List the steps to compare and graph jitter when doing a stream analysis.
>
> **[3:28](https://www.linkedin.com/learning/analyzing-voip-traffic-with-wireshark/recognizing-jitter?u=76281980&t=208)** You can record your answer on the Challenge worksheet.

> [!info]- Semantic Content
>
> **Env Vars:** rtp (9), udp (2), pcap (1)
> **Code Keywords:** let (4), this. (1)
> **Versions:** 0.83 (3), 12.83 (2)
> **UI Navigation:** go to (5)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)


### Conclusion


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