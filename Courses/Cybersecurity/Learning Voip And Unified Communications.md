---
type: course
cssclasses:
  - lle-course
slug: learning-voip-and-unified-communications
url: "https://www.linkedin.com/learning/learning-voip-and-unified-communications"
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQG9vHFWWRICbA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1608574648575?e=2147483647&amp;v=beta&amp;t=C-HUd-4ctv2YlfdiQpl6orcLic_Trrwnh8_OM8c1Wkk"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[VoIP- From Fundamentals to Troubleshooting]]'
next_courses:
  - '[[Analyzing VoIP Traffic with Wireshark]]'
path_nav: '[{"path":"VoIP- From Fundamentals to Troubleshooting","position":1,"total":3,"prev":null,"next":"Analyzing VoIP Traffic with Wireshark"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Learning%20Voip%20And%20Unified%20Communications.md)

![Learning Voip And Unified Communications](https://media.licdn.com/dms/image/v2/C4E0DAQG9vHFWWRICbA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1608574648575?e=2147483647&amp;v=beta&amp;t=C-HUd-4ctv2YlfdiQpl6orcLic_Trrwnh8_OM8c1Wkk)

# Learning Voip And Unified Communications

> Today, when you make a call, you are most likely using Voice over IP (VoIP). VoIP uses the existing internet and network to transfer and route voice traffic in IP packets. In many cases, it is a part of a Unified Communications (UC) system, which integrates VoIP, video, email, and instant messaging into one seamless business application. In this course, learn about UC and its many layers so you ca

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-voip-and-unified-communications)
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Providing Voice over Internet Protocol (VoIP) telephony](#providing-voice-over-internet-protocol-voip-telephony)
  - [What you need to know](#what-you-need-to-know)
- [**1. Unified Communications Overview**](#1-unified-communications-overview) (4 videos)
  - [Unified communications (UC) overview](#unified-communications-uc-overview)
  - [Making a call using VoIP](#making-a-call-using-voip)
  - [Evolution of the Public Switched Telephone Network (PSTN)](#evolution-of-the-public-switched-telephone-network-pstn)
  - [Moving from the PSTN to VoIP](#moving-from-the-pstn-to-voip)
- [**2. Components and Integration**](#2-components-and-integration) (4 videos)
  - [UC components](#uc-components)
  - [Unifying communication systems](#unifying-communication-systems)
  - [Voice signal conversion with digital codecs](#voice-signal-conversion-with-digital-codecs)
  - [Data transportation using real-time protocols](#data-transportation-using-real-time-protocols)
- [**3. Media Gateway**](#3-media-gateway) (5 videos)
  - [Passing telephony data through gateways](#passing-telephony-data-through-gateways)
  - [Understanding MGCP/Megaco (H.248)](#understanding-mgcpmegaco-h248)
  - [Session Initiation Protocol (SIP)](#session-initiation-protocol-sip)
  - [The H.323 wrapper, H.225, and H.245](#the-h323-wrapper-h225-and-h245)
  - [Translators and mixers](#translators-and-mixers)
- [**4. Business Integration**](#4-business-integration) (5 videos)
  - [Plan a unified communications system](#plan-a-unified-communications-system)
  - [Network assessment](#network-assessment)
  - [Assure quality of service](#assure-quality-of-service)
  - [Using STIR/SHAKEN to restore trust](#using-stirshaken-to-restore-trust)
  - [VoIP security](#voip-security)
- [**Conclusion**](#conclusion) (1 videos)
  - [What's next?](#whats-next)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Providing Voice over Internet Protocol (VoIP) telephony](https://www.linkedin.com/learning/learning-voip-and-unified-communications/providing-voice-over-internet-protocol-voip-telephony-14173322?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/providing-voice-over-internet-protocol-voip-telephony-14173322?u=76281980&t=0)** - [Lisa] Did you know that today when you make a call, you are most likely using Voice over IP.
>
> **[0:08](https://www.linkedin.com/learning/learning-voip-and-unified-communications/providing-voice-over-internet-protocol-voip-telephony-14173322?u=76281980&t=8)** Voice over IP continues to be a fast growing technology that uses the existing internet and network to transfer and route voice traffic in IP packets.
>
> **[0:20](https://www.linkedin.com/learning/learning-voip-and-unified-communications/providing-voice-over-internet-protocol-voip-telephony-14173322?u=76281980&t=20)** In this course, I'll provide an overview of Voice over IP and unified communications.
>
> **[0:26](https://www.linkedin.com/learning/learning-voip-and-unified-communications/providing-voice-over-internet-protocol-voip-telephony-14173322?u=76281980&t=26)** We'll take a brief look of how we move from the public switch telephone network to Voice over IP.
>
> **[0:33](https://www.linkedin.com/learning/learning-voip-and-unified-communications/providing-voice-over-internet-protocol-voip-telephony-14173322?u=76281980&t=33)** I'll cover components of unified communication, including signaling gateways, translators, codecs, and protocols.
>
> **[0:42](https://www.linkedin.com/learning/learning-voip-and-unified-communications/providing-voice-over-internet-protocol-voip-telephony-14173322?u=76281980&t=42)** Hello, my name is Lisa Bach and I am super excited to bring you this course so that you can better understand Voice over IP and unified communications so that you can better manage your network.
>
> **[0:56](https://www.linkedin.com/learning/learning-voip-and-unified-communications/providing-voice-over-internet-protocol-voip-telephony-14173322?u=76281980&t=56)** Are you ready?
>
> **[0:57](https://www.linkedin.com/learning/learning-voip-and-unified-communications/providing-voice-over-internet-protocol-voip-telephony-14173322?u=76281980&t=57)** Let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [lisa] (1)

#### [What you need to know](https://www.linkedin.com/learning/learning-voip-and-unified-communications/what-you-need-to-know-14171521?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/what-you-need-to-know-14171521?u=76281980&t=0)** - [Instructor] This course is for network administrators, engineers, students, and anyone with an interest in learning about unified communications and voiceover IP.
>
> **[0:12](https://www.linkedin.com/learning/learning-voip-and-unified-communications/what-you-need-to-know-14171521?u=76281980&t=12)** Participants will discover how unified communications provides an integrated system of services, such as voice, video, email, and instant messaging, into a seamless business application that improves overall efficiency, and allows the ability to communicate from any location, and improves business productivity in an organization.
>
> **[0:37](https://www.linkedin.com/learning/learning-voip-and-unified-communications/what-you-need-to-know-14171521?u=76281980&t=37)** No prerequisites are required.
>
> **[0:39](https://www.linkedin.com/learning/learning-voip-and-unified-communications/what-you-need-to-know-14171521?u=76281980&t=39)** However, participants might benefit with some basic networking skills and terminology.
>
> **[0:45](https://www.linkedin.com/learning/learning-voip-and-unified-communications/what-you-need-to-know-14171521?u=76281980&t=45)** I reference websites throughout the course.
>
> **[0:48](https://www.linkedin.com/learning/learning-voip-and-unified-communications/what-you-need-to-know-14171521?u=76281980&t=48)** You can follow along, if you like, and visit the webpages.
>
> **[0:52](https://www.linkedin.com/learning/learning-voip-and-unified-communications/what-you-need-to-know-14171521?u=76281980&t=52)** The case-sensitive short URL link will show in the lower third of the page.
>
> **[0:57](https://www.linkedin.com/learning/learning-voip-and-unified-communications/what-you-need-to-know-14171521?u=76281980&t=57)** Keep in mind, after time, links and content will change.

> [!info]- Semantic Content
>
> **Env Vars:** url (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 1. Unified Communications Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [Unified communications (UC) overview](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unified-communications-uc-overview-14175295?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unified-communications-uc-overview-14175295?u=76281980&t=0)** - [Instructor] Humans have been communicating with one another since the time of the cave dweller, in the form of symbols or rock art, etched in the cave, to convey a religious icon or communicate a story.
>
> **[0:16](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unified-communications-uc-overview-14175295?u=76281980&t=16)** Communication has progressed over the centuries and has evolved from pictures to alphabets, and then more formal ways of sharing information, such as couriers, postal systems and newspapers.
>
> **[0:33](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unified-communications-uc-overview-14175295?u=76281980&t=33)** In the 1800s, we began to see an expansion of sharing information with the development of the Typewriter and Telegraph.
>
> **[0:43](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unified-communications-uc-overview-14175295?u=76281980&t=43)** In the 1900s, we saw the telephone, radio and television.
>
> **[0:49](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unified-communications-uc-overview-14175295?u=76281980&t=49)** And after the 1950s, we saw computers, computer networks and the internet.
>
> **[0:56](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unified-communications-uc-overview-14175295?u=76281980&t=56)** In today's world, we use any combination of communication methods, including email, phones, instant messaging, and video conferencing.
>
> **[1:08](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unified-communications-uc-overview-14175295?u=76281980&t=68)** Communication can be [[Real-Time]] or non-real time.
>
> **[1:13](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unified-communications-uc-overview-14175295?u=76281980&t=73)** During real-time communication, the sender and receiver communicate in both directions at the same time.
>
> **[1:23](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unified-communications-uc-overview-14175295?u=76281980&t=83)** Non-real time communication is asynchronous and includes blogs, fax, traditional mail and email.
>
> **[1:32](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unified-communications-uc-overview-14175295?u=76281980&t=92)** It's not time sensitive.
>
> **[1:34](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unified-communications-uc-overview-14175295?u=76281980&t=94)** It's posted and picked up at another time.
>
> **[1:38](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unified-communications-uc-overview-14175295?u=76281980&t=98)** Effective communication requires feedback.
>
> **[1:43](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unified-communications-uc-overview-14175295?u=76281980&t=103)** Unified Communications combines different [[Forms]] of communications and provides a framework for a consistent user interface across multiple devices and improves [[Business Communications]].
>
> **[1:58](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unified-communications-uc-overview-14175295?u=76281980&t=118)** Unified Communications leverages the IP network.
>
> **[2:04](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unified-communications-uc-overview-14175295?u=76281980&t=124)** We can combine communications across a wide range of platforms, including commercial-off-the-shelf tools such as [[Microsoft Outlook|Outlook]] and [[Customer Relations]] Management tools and mobile apps.
>
> **[2:18](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unified-communications-uc-overview-14175295?u=76281980&t=138)** Features can include voicemail, fax, chat, email, video conferencing and presence information.
>
> **[2:27](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unified-communications-uc-overview-14175295?u=76281980&t=147)** Presence information lets you know if someone is available and willing to communicate.
>
> **[2:34](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unified-communications-uc-overview-14175295?u=76281980&t=154)** At the heart of Unified Communications is IP telephony or VoIP.
>
> **[2:40](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unified-communications-uc-overview-14175295?u=76281980&t=160)** With Unified Communications, an individual can send a message on one platform, the receiver will get the response on another platform.
>
> **[2:51](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unified-communications-uc-overview-14175295?u=76281980&t=171)** For example, I receive a voicemail message.
>
> **[2:55](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unified-communications-uc-overview-14175295?u=76281980&t=175)** Unified Communications will translate it to a text or an email message.
>
> **[3:02](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unified-communications-uc-overview-14175295?u=76281980&t=182)** I'll then pick up the phone, check the party's presence information, and if available and willing to talk, I can call or message the individual.
>
> **[3:13](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unified-communications-uc-overview-14175295?u=76281980&t=193)** Unified Communications has many benefits.
>
> **[3:17](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unified-communications-uc-overview-14175295?u=76281980&t=197)** It improves employee and team-based productivity, provides more efficient communication by providing presence information, reduces travel by enabling video conferencing and online collaboration, and offers toll cost savings.
>
> **[3:37](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unified-communications-uc-overview-14175295?u=76281980&t=217)** Although there are many benefits, prior to implementation, the business should conduct a careful assessment, design the networked environment, select appropriate components, software and devices, and plan for network management and security needs.
>
> **[3:58](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unified-communications-uc-overview-14175295?u=76281980&t=238)** Unified Communications combines voice, email and instant messaging into a seamless business application that improves overall efficiency.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (2), [[Forms]] (1), [[Business Communications]] (1), [[Microsoft Outlook|Outlook]] (1), [[Customer Relations]] (1)
> **Analogies:** such as (2), for example (1)
> **Speakers:** - [instructor] (1)

#### [Making a call using VoIP](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980&t=0)** - [Instructor] Have you ever wondered what happens when you pick up the phone to make a call?
>
> **[0:07](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980&t=7)** What happens depends.
>
> **[0:08](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980&t=8)** If you use a traditional landline, you'll use the public switch telephone network.
>
> **[0:16](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980&t=16)** If you use a cell phone, you'll use a cell tower.
>
> **[0:20](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980&t=20)** However, most likely, you are using voiceover IP, or VoIP.
>
> **[0:27](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980&t=27)** VoIP is changing the way we communicate.
>
> **[0:31](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980&t=31)** Voiceover IP or IP telephony uses the existing internet and network to transfer and route voice traffic and IP packets.
>
> **[0:42](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980&t=42)** In many cases, it's part of a unified communication system.
>
> **[0:47](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980&t=47)** VoIP has been in use for over 20 years.
>
> **[0:50](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980&t=50)** However, in the last 10 years, we've seen astonishing growth in voiceover IP.
>
> **[0:57](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980&t=57)** The voiceover IP market is rapidly expanding all over the world in terms of subscribers, growth and traffic.
>
> **[1:07](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980&t=67)** Consumers and businesses are cutting the cord as more and more traffic uses VoIP than the traditional public switch telephone network.
>
> **[1:17](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980&t=77)** Studies show that 60% of the households in the US and Europe are replacing traditional landlines from the phone company with voiceover IP, most likely due to the low cost of bundled services with ISPs.
>
> **[1:35](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980&t=95)** Many businesses are seeing the benefits of choosing a VoIP solution.
>
> **[1:41](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980&t=101)** Businesses can lower the cost of local and long distance phone calls by up to 40%.
>
> **[1:48](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980&t=108)** Using voice and web conferencing reduces travel costs and using VoIP as part of a unified communication solution helps improve productivity, which translates to cost savings for a business.
>
> **[2:05](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980&t=125)** For example, if a business uses an online presence feature in VoIP calling systems, each employee can save approximately a half an hour every day because you can generally reach someone on the first try.
>
> **[2:22](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980&t=142)** For a business, transition, reliability and quality is a concern, but studies show that problems have been rare.
>
> **[2:32](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980&t=152)** Even businesses without an IT department have implemented VoIP successfully.
>
> **[2:38](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980&t=158)** However, businesses still should plan and prepare the network and address the security needs of the VoIP system.
>
> **[2:48](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980&t=168)** In addition to businesses in homes, we're also seeing voiceover IP used with cell phones that can use [[Wi-Fi|wifi]] hotspots and eliminate any costs of a cell plan or data plan.
>
> **[3:03](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980&t=183)** Every function is included, such as calling, texting, browsing and sending email.
>
> **[3:11](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980&t=191)** To take advantage of mobile VoIP, there are various apps available such as Skype or Truphone for both iPhone and [[Android]].
>
> **[3:20](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980&t=200)** In addition, there are a number of VoIP apps available for tablets or laptops.
>
> **[3:27](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980&t=207)** Currently, there are billions of mobile voiceover IP users, and this growth will continue to expand.
>
> **[3:35](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980&t=215)** Voiceover IP, or IP telephony, offers cost-savings, is convenient, and is the future of the telephone industry.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi|Wifi]] (1), [[Android]] (1)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** iphone (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Evolution of the Public Switched Telephone Network (PSTN)](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=0)** - [Speaker] A strong telecommunication infrastructure is essential for the health and expansion of the economy.
>
> **[0:07](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=7)** Currently, most voice traffic travels over the internet using voice over IP or IP telephony.
>
> **[0:15](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=15)** However, it's important to understand the telephone framework because this is the basis for the current networking infrastructure.
>
> **[0:23](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=23)** Let's step back through time to see this evolution.
>
> **[0:28](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=28)** Today's internet had humble beginnings starting with the creation of the telegraph.
>
> **[0:34](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=34)** After the creation of the telegraph, inventors sought to improve the functionality, which led to the telephone.
>
> **[0:43](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=43)** The standard phone system existed for about a century until improvements in the infrastructure made the logical evolution into our modern day voice over IP technology.
>
> **[0:55](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=55)** Alexander Graham Bell patented the telephone in 1876.
>
> **[1:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=60)** Soon after that, the first telephone line using the existing telegraph lines appeared in 1877 in Montreal, Canada.
>
> **[1:11](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=71)** In the beginning, calling involved a manual switch or operator directed calls.
>
> **[1:18](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=78)** In the 1880s, a building in the center of a city called a central [[Microsoft Office|office]] housed equipment, signed up, and connected the community.
>
> **[1:29](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=89)** The companies created islands of local service in a radius of a few miles around the central office in major cities that were part of, owned by, or licensed by the Bell Telephone Company.
>
> **[1:44](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=104)** The telephone signal traveled over copper wires from the central office to the subscribers.
>
> **[1:50](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=110)** When using copper, the signal attenuates and the maximum distance the signal can travel is only about three miles.
>
> **[1:59](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=119)** Beyond that, it isn't possible to hear the other person.
>
> **[2:02](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=122)** Because of this structure, long distance wasn't technically possible.
>
> **[2:08](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=128)** Management incorporated the American Telephone and Telegraph Company in 1885 as a subsidiary of American Bell, and provided long distance service for the Bell system that connected local companies.
>
> **[2:25](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=145)** Here we see an illustration of the central offices connected by what was called the AT&T Long Lines.
>
> **[2:33](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=153)** The early telephone network rapidly expanded.
>
> **[2:38](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=158)** And in 1915, we achieved the first transcontinental telephone call.
>
> **[2:45](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=165)** A hard line has a microphone and a speaker, a ringer, a hook, and a dial switch.
>
> **[2:52](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=172)** A battery powers the telephone, and a line card has many functions that includes signaling, line supervision, and termination.
>
> **[3:04](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=184)** In a standard telephone, two wires make up the loop that enables signaling.
>
> **[3:10](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=190)** On hook means the switch is open, wires are not connected, and there is no electricity flowing.
>
> **[3:18](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=198)** Off hook means the switch is closed, wires are connected, and there is electricity flowing.
>
> **[3:26](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=206)** To make a call, the user picks up the handset and dials a number.
>
> **[3:31](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=211)** The signal travels to the receiver, which initiates ringing.
>
> **[3:37](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=217)** A phone call begins at the subscriber or local loop, which carries the signal from the subscriber's home to the central office over a copper cable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (4)
> **CLI Commands:** make (2)
> **Speakers:** - [speaker] (1)

#### [Moving from the PSTN to VoIP](https://www.linkedin.com/learning/learning-voip-and-unified-communications/moving-from-the-pstn-to-voip?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/moving-from-the-pstn-to-voip?u=76281980&t=0)** - [Instructor] In the 1960s, the public switched telephone network became digital.
>
> **[0:05](https://www.linkedin.com/learning/learning-voip-and-unified-communications/moving-from-the-pstn-to-voip?u=76281980&t=5)** The network supports a bandwidth of 64 kilobits per second, and limits the frequency to the voice band range, which is 300 to 3,300 hertz.
>
> **[0:18](https://www.linkedin.com/learning/learning-voip-and-unified-communications/moving-from-the-pstn-to-voip?u=76281980&t=18)** In 1975, the phone system developed Signaling System 7 control system, or simply SS7.
>
> **[0:29](https://www.linkedin.com/learning/learning-voip-and-unified-communications/moving-from-the-pstn-to-voip?u=76281980&t=29)** SS7 is a set of signaling protocols, used to set up and tear down calls, and is the basis of call [[Routing]] for most of the world's calls.
>
> **[0:40](https://www.linkedin.com/learning/learning-voip-and-unified-communications/moving-from-the-pstn-to-voip?u=76281980&t=40)** The public switched telephone network and SS7 integrate with one another with the help of a signaling gateway.
>
> **[0:49](https://www.linkedin.com/learning/learning-voip-and-unified-communications/moving-from-the-pstn-to-voip?u=76281980&t=49)** Nodes in an SS7 network are signaling points.
>
> **[0:54](https://www.linkedin.com/learning/learning-voip-and-unified-communications/moving-from-the-pstn-to-voip?u=76281980&t=54)** The three kinds of signaling points are Switching Service Point, Signal Transfer Point, and Service Control Point.
>
> **[1:04](https://www.linkedin.com/learning/learning-voip-and-unified-communications/moving-from-the-pstn-to-voip?u=76281980&t=64)** The Switching Service Point is the central [[Microsoft Office|office]] that carries the messages through the public switched telephone network onto the SS7 network.
>
> **[1:15](https://www.linkedin.com/learning/learning-voip-and-unified-communications/moving-from-the-pstn-to-voip?u=76281980&t=75)** Signal Transfer Points have circuits and switches that transfer data from one signaling link to another.
>
> **[1:24](https://www.linkedin.com/learning/learning-voip-and-unified-communications/moving-from-the-pstn-to-voip?u=76281980&t=84)** Service Control Points provide the intelligence of the network by using database inquiries to keep track of credit authorizations for billing, and subscriber listings, along with routing features, such as call forwarding and 800 services.
>
> **[1:42](https://www.linkedin.com/learning/learning-voip-and-unified-communications/moving-from-the-pstn-to-voip?u=76281980&t=102)** A phone call begins at the subscriber loop, travels to the central office and then onto the public switched telephone network where the Signaling System 7 system sets it up, tears it down and routes calls between nodes through an IP network in order to get the signal to its final destination.
>
> **[2:04](https://www.linkedin.com/learning/learning-voip-and-unified-communications/moving-from-the-pstn-to-voip?u=76281980&t=124)** At the other end when the phone rings, the user acknowledges by picking up the handset.
>
> **[2:10](https://www.linkedin.com/learning/learning-voip-and-unified-communications/moving-from-the-pstn-to-voip?u=76281980&t=130)** Then up to our current day technology, we see that in 1983, cellular service launched commercially in Chicago.
>
> **[2:20](https://www.linkedin.com/learning/learning-voip-and-unified-communications/moving-from-the-pstn-to-voip?u=76281980&t=140)** In 1992, the internet became public.
>
> **[2:25](https://www.linkedin.com/learning/learning-voip-and-unified-communications/moving-from-the-pstn-to-voip?u=76281980&t=145)** And then we saw the emergence of commercial internet service providers or ISPs.
>
> **[2:32](https://www.linkedin.com/learning/learning-voip-and-unified-communications/moving-from-the-pstn-to-voip?u=76281980&t=152)** In 1996, the [[Telecommunications]] Act allowed for wide open competition for both local and long-distance telecommunications.
>
> **[2:43](https://www.linkedin.com/learning/learning-voip-and-unified-communications/moving-from-the-pstn-to-voip?u=76281980&t=163)** And 2002, Voice over IP began commercially, which ended the reign of pure long-distance carriers and standard long-distance pricing.
>
> **[2:53](https://www.linkedin.com/learning/learning-voip-and-unified-communications/moving-from-the-pstn-to-voip?u=76281980&t=173)** So the public switched telephone network existed for about a century and then improvements in the infrastructure evolved into our modern-day Voice over IP technology.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (2), [[Microsoft Office|Office]] (2), [[Telecommunications]] (2)
> **Env Vars:** ss7 (5)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 2. Components and Integration

[↑ Back to Table of Contents](#table-of-contents)

#### [UC components](https://www.linkedin.com/learning/learning-voip-and-unified-communications/uc-components-14170765?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/uc-components-14170765?u=76281980&t=0)** - [Instructor] Unified communications is a framework that combines IP-based communication services, such as voice, video and data on a single network that improves overall efficiency.
>
> **[0:16](https://www.linkedin.com/learning/learning-voip-and-unified-communications/uc-components-14170765?u=76281980&t=16)** Most systems have several necessary components that include terminals, applications, codecs, gateways, protocols and network operations.
>
> **[0:28](https://www.linkedin.com/learning/learning-voip-and-unified-communications/uc-components-14170765?u=76281980&t=28)** Terminals are the end devices that interface with the user and include softphones and computers.
>
> **[0:36](https://www.linkedin.com/learning/learning-voip-and-unified-communications/uc-components-14170765?u=76281980&t=36)** A softphone is a computer that looks like a phone and it allows you to make phone calls using voice over IP.
>
> **[0:45](https://www.linkedin.com/learning/learning-voip-and-unified-communications/uc-components-14170765?u=76281980&t=45)** It has a standard phone interface and handset and many have a digital or video interface for messages and presence information.
>
> **[0:54](https://www.linkedin.com/learning/learning-voip-and-unified-communications/uc-components-14170765?u=76281980&t=54)** If using a computer as a terminal, you'll need a headset or a microphone and a speaker.
>
> **[1:01](https://www.linkedin.com/learning/learning-voip-and-unified-communications/uc-components-14170765?u=76281980&t=61)** Today there are many vendors and many choices for unified communications applications, which combines communication services such as voice, video conferencing, email and instant messaging into a seamless business application.
>
> **[1:18](https://www.linkedin.com/learning/learning-voip-and-unified-communications/uc-components-14170765?u=76281980&t=78)** This allows participants to meet online and share files and collaborate using multiple platforms in their own mobile devices.
>
> **[1:29](https://www.linkedin.com/learning/learning-voip-and-unified-communications/uc-components-14170765?u=76281980&t=89)** Gateways are devices in the unified communication system that convert media streams from one set of communication standards to another, by using two main functions, media and signal conversion.
>
> **[1:44](https://www.linkedin.com/learning/learning-voip-and-unified-communications/uc-components-14170765?u=76281980&t=104)** Gateways are essential when communicating in a complex network with the public switch telephone network, ISDN, fax machines and other networks.
>
> **[1:56](https://www.linkedin.com/learning/learning-voip-and-unified-communications/uc-components-14170765?u=76281980&t=116)** In order to transport streaming media such as telephony and video teleconference applications over IP networks, multiple protocols are involved to provide setup, communication control and data transport and include [[Real-Time]] Transport Protocol, Real-time Streaming Protocol, Megaco, SIP and H323.
>
> **[2:21](https://www.linkedin.com/learning/learning-voip-and-unified-communications/uc-components-14170765?u=76281980&t=141)** Codecs encode or decode a data stream to remove redundancies and improve transmission.
>
> **[2:29](https://www.linkedin.com/learning/learning-voip-and-unified-communications/uc-components-14170765?u=76281980&t=149)** There are various codecs.
>
> **[2:31](https://www.linkedin.com/learning/learning-voip-and-unified-communications/uc-components-14170765?u=76281980&t=151)** Each have a specific characteristics such as bit rate and voice quality.
>
> **[2:37](https://www.linkedin.com/learning/learning-voip-and-unified-communications/uc-components-14170765?u=76281980&t=157)** WANs, LANs and the technology used to access the physical network that the IP packets travel, are an essential part of voice over IP and unified communications.
>
> **[2:49](https://www.linkedin.com/learning/learning-voip-and-unified-communications/uc-components-14170765?u=76281980&t=169)** Routers, switches and voice gateways carry data, voice and video between all network devices and applications.
>
> **[2:58](https://www.linkedin.com/learning/learning-voip-and-unified-communications/uc-components-14170765?u=76281980&t=178)** The infrastructure must provide high availability, management, quality of service and [[Network Security]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (2), [[Network Security]] (1)
> **Analogies:** such as (4)
> **Env Vars:** isdn (1), sip (1), h323 (1)
> **Definitions:** is a  (2)
> **Prerequisites:** you'll need (1), setup (1)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Unifying communication systems](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unifying-communication-systems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unifying-communication-systems?u=76281980&t=0)** - [Instructor] Legacy systems that included email, fax, instant messaging and phone systems were disparate and lacked cohesion.
>
> **[0:09](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unifying-communication-systems?u=76281980&t=9)** A unified communication systems integrates phone, voicemail, chat, presence, email and fax on a single system improving productivity.
>
> **[0:21](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unifying-communication-systems?u=76281980&t=21)** Unified communications changes the way we communicate.
>
> **[0:26](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unifying-communication-systems?u=76281980&t=26)** Developers are creating unified communication-enabled apps, digital assistants and bots designed to improve the overall customer experience.
>
> **[0:37](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unifying-communication-systems?u=76281980&t=37)** The market has matured and more and more companies are moving towards unified communications.
>
> **[0:44](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unifying-communication-systems?u=76281980&t=44)** The main task is to integrate all the different types of communication systems to seamlessly work together.
>
> **[0:52](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unifying-communication-systems?u=76281980&t=52)** A unified communications manager is a platform to help them talk to one another and has many jobs.
>
> **[1:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unifying-communication-systems?u=76281980&t=60)** Before selecting one, the business requirements will be different depending on what the objectives are and what systems need to be integrated.
>
> **[1:10](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unifying-communication-systems?u=76281980&t=70)** Some goals of the system include: Call processing.
>
> **[1:15](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unifying-communication-systems?u=76281980&t=75)** At the heart of the unified communication systems is voiceover IP.
>
> **[1:21](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unifying-communication-systems?u=76281980&t=81)** The system should be able to originate, route and terminate calls.
>
> **[1:26](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unifying-communication-systems?u=76281980&t=86)** Signal and device control, including call setup and call tear down between systems.
>
> **[1:33](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unifying-communication-systems?u=76281980&t=93)** And phone features, such as hold, transfer, forward and conference.
>
> **[1:39](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unifying-communication-systems?u=76281980&t=99)** Integration with [[Microsoft Office|office]] communicator apps presence status.
>
> **[1:45](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unifying-communication-systems?u=76281980&t=105)** And behind all of this is a database.
>
> **[1:48](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unifying-communication-systems?u=76281980&t=108)** You'll want database access control and to be able to communicate with the directory to identify and authenticate.
>
> **[1:56](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unifying-communication-systems?u=76281980&t=116)** If the system has a database to store user information, the system should have the ability to synchronize changes.
>
> **[2:05](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unifying-communication-systems?u=76281980&t=125)** Things happen, make sure the system has backup and restore tools, maybe a built-in disaster recovery system, and gateway support and legacy integration.
>
> **[2:19](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unifying-communication-systems?u=76281980&t=139)** It probably will need support for different protocols and protocol [[Routing]].
>
> **[2:25](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unifying-communication-systems?u=76281980&t=145)** And in many cases, analog support for phone, fax and modem.
>
> **[2:31](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unifying-communication-systems?u=76281980&t=151)** Unifying communications can be complex.
>
> **[2:34](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unifying-communication-systems?u=76281980&t=154)** Whether you jump in and completely transform and unify or have a slow transition, there are several things to consider to effectively integrate within an existing infrastructure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (1), [[Routing]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Voice signal conversion with digital codecs](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=0)** - [Instructor] We use the phone system to communicate information.
>
> **[0:04](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=4)** While in a conversation, we must be able to hear and understand what the other party is saying.
>
> **[0:13](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=13)** Voice communication involves analog and digital communication.
>
> **[0:18](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=18)** In that we speak in analog, which is a continuous wave form.
>
> **[0:24](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=24)** In order for the signal to travel over a digital network, we digitize and encode the signal.
>
> **[0:33](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=33)** An algorithm transforms the data before traveling over an IP network.
>
> **[0:39](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=39)** And then it is decoded at the receiver end.
>
> **[0:44](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=44)** When making a decision on how to reproduce the sound, there are two choices.
>
> **[0:50](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=50)** Recreate the sound as if someone were to hear it as if they were sitting right next to the speaker or reproduce it and arrange that the brain is capable of hearing and understanding.
>
> **[1:06](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=66)** As we see in this graphic, the range of human hearing is between 20 and 20,000 cycles per second, or 20 Hertz to 20 kilohertz.
>
> **[1:19](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=79)** However testing demonstrates a human can understand speech in the frequency range between 300 and 3300 Hertz, which is the voice band range.
>
> **[1:33](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=93)** This is my voice in a normal range.
>
> **[1:37](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=97)** This is my voice in a telephone range.
>
> **[1:42](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=102)** Digitization takes an analog signal and approximates how it should sound.
>
> **[1:48](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=108)** The goal is told quality.
>
> **[1:52](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=112)** A codec converts the analog signal into a digital signal for transmission to remove redundancies and compress the data to enable faster transmission and conserve bandwidth.
>
> **[2:05](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=125)** Codecs typically break down speech and to 20 millisecond segments.
>
> **[2:11](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=131)** The lower the bandwidth, the lower the quality.
>
> **[2:15](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=135)** A more complex algorithm will provide better quality for a given bandwidth.
>
> **[2:22](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=142)** As we see there were a number of codecs for packet networks and the g.700 series as we see in this table.
>
> **[2:31](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=151)** However, the most commonly used codec is g.711 or pulse code modulation.
>
> **[2:40](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=160)** An algorithm measures how faithful the voice is and assigns a mean opinion score or MOS.
>
> **[2:48](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=168)** The quality depends on a number of different parameters including the number of participants on the call, the environment, and the type of equipment.
>
> **[3:01](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=181)** According to ITUTP.800 recommendations, we see the MOS quality is rated from one to five.
>
> **[3:10](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=190)** One being unacceptable and five being excellent.
>
> **[3:16](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=196)** Prior to automation, the operator checked on the phone quality by periodically listening to voice samples or on a conversation and assessed a score between one and five.
>
> **[3:29](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=209)** We automate the MOS score now and most VoIP calls fall within the range of 3.5 to 4.2.
>
> **[3:39](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=219)** Because people like to hear a sound during a call, even if the other party is not actively speaking, a voice activity detector detects if there is active speech or not, and inserts comfort noise, or synthetic background noise during periods of silence.
>
> **[3:59](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=239)** Codecs are important as they encode or decode a data stream to remove redundancies and improve transmission speeds and are a necessary element and a unified communication system.

> [!info]- Semantic Content
>
> **Env Vars:** mos (3), itutp (1)
> **Versions:** 3.5 (1), 4.2 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Data transportation using real-time protocols](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=0)** - [Instructor] Demand for multimedia applications is increasing.
>
> **[0:05](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=5)** There are three broad internet-based multimedia categories.
>
> **[0:10](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=10)** Streaming stored audio/video, streaming live audio/video, and interactive video conferencing.
>
> **[0:21](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=21)** In order to transmit streaming media successfully, multiple protocols are necessary to provide setup, data transport and communication control over an IP network.
>
> **[0:35](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=35)** The suite of [[Real-Time]] Protocols includes Real-Time Transport Protocol, transports audio and video.
>
> **[0:44](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=44)** Real-Time Control Protocol carries control information.
>
> **[0:49](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=49)** Real-Time Streaming Protocol establishes and controls multimedia sessions.
>
> **[0:57](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=57)** Real-Time Transport Protocol is a transport protocol for media that is multicast friendly, and has many encoding possibilities.
>
> **[1:07](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=67)** Many times, Real-Time Protocol is over UDP, which is a lightweight transport protocol.
>
> **[1:15](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=75)** In order to ensure additional information about the transmission, RTP has a number of different TCP-like fields, such as sequence number, timestamp and source identifier.
>
> **[1:30](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=90)** Here, we see an RTP header and the fields within.
>
> **[1:35](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=95)** A sequence number is used for reordering packets and detecting loss.
>
> **[1:41](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=101)** A timestamp field is for intramedia synchronization.
>
> **[1:46](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=106)** Think of this as lip-sync when you have audio and video together.
>
> **[1:52](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=112)** And a synchronizing source identifier for multicast support.
>
> **[1:58](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=118)** Each media stream has a corresponding RTP session.
>
> **[2:03](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=123)** Real-Time Control Protocol passively gathers [[Statistics]] and reports information about each session.
>
> **[2:12](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=132)** Real-Time Control Protocol then provides feedback on the quality of data and characteristics of the stream to the media source and other session participants in order to help localize network problems, such as jitter, that occurs in real-time data by the delay between packets.
>
> **[2:33](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=153)** Real-Time Control Protocol reports are sent by all participants, whether it is a single participant, or part of a massive multicast session.
>
> **[2:45](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=165)** In order to avoid congestion, Real-Time Control Protocol ensures bandwidth management by limiting the frequency of reports to only once every five seconds.
>
> **[2:57](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=177)** All sites should use a common time, such as Network Time Protocol or Global Positioning Satellite to support synchronized media delivery, and jitter calculations.
>
> **[3:10](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=190)** Real-Time Streaming Protocol establishes and controls synchronized streams of multimedia sessions for entertainment and communications.
>
> **[3:20](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=200)** Data comes from multimedia servers and multicast sessions.
>
> **[3:26](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=206)** We also need call set up, management and termination.
>
> **[3:30](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=210)** Two protocols in Protocol Suites include Session Initiation Protocol.
>
> **[3:37](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=217)** This provides connection establishment and control between communicating hosts.
>
> **[3:43](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=223)** And H.323.
>
> **[3:45](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=225)** It's a protocol suite for media control that includes protocols H.225 and H.245.
>
> **[3:54](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=234)** Each of the protocols has a specific role in the setup, management and termination of a media session.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (12), [[Statistics]] (1)
> **Env Vars:** rtp (3), udp (1), tcp (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (3)
> **Prerequisites:** setup (2), set up (1)
> **Speakers:** - [instructor] (1)


### 3. Media Gateway

[↑ Back to Table of Contents](#table-of-contents)

#### [Passing telephony data through gateways](https://www.linkedin.com/learning/learning-voip-and-unified-communications/passing-telephony-data-through-gateways?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/passing-telephony-data-through-gateways?u=76281980&t=0)** - [Lisa] When a host sends media from one point to another, media passes through networks that will have different encoding, signaling, and bandwidth requirements.
>
> **[0:11](https://www.linkedin.com/learning/learning-voip-and-unified-communications/passing-telephony-data-through-gateways?u=76281980&t=11)** As media travels through networks, gateways are devices that adjust to the different network signaling requirements and convert media streams from one set of communication standards to another.
>
> **[0:25](https://www.linkedin.com/learning/learning-voip-and-unified-communications/passing-telephony-data-through-gateways?u=76281980&t=25)** Gateways include media gateways, call agents, or media gateway controller, or softswitch, signaling gateways, and translators and mixers.
>
> **[0:39](https://www.linkedin.com/learning/learning-voip-and-unified-communications/passing-telephony-data-through-gateways?u=76281980&t=39)** Various protocols are involved as well.
>
> **[0:42](https://www.linkedin.com/learning/learning-voip-and-unified-communications/passing-telephony-data-through-gateways?u=76281980&t=42)** Signaling transport or SIGTRAN is a telephony protocol that transports SS7 signals through the internet.
>
> **[0:51](https://www.linkedin.com/learning/learning-voip-and-unified-communications/passing-telephony-data-through-gateways?u=76281980&t=51)** Media gateway control protocol or Megaco works with H.323 or SIP.
>
> **[0:58](https://www.linkedin.com/learning/learning-voip-and-unified-communications/passing-telephony-data-through-gateways?u=76281980&t=58)** And [[Call Control]] protocols include SIP, H.323, and Skinny.
>
> **[1:05](https://www.linkedin.com/learning/learning-voip-and-unified-communications/passing-telephony-data-through-gateways?u=76281980&t=65)** A phone call can travel through various networks that include the public switch telephone network, the internet, and a LAN.
>
> **[1:13](https://www.linkedin.com/learning/learning-voip-and-unified-communications/passing-telephony-data-through-gateways?u=76281980&t=73)** As we look at this complex drawing, let's step through a call.
>
> **[1:19](https://www.linkedin.com/learning/learning-voip-and-unified-communications/passing-telephony-data-through-gateways?u=76281980&t=79)** A call might start at the public switch telephone network.
>
> **[1:23](https://www.linkedin.com/learning/learning-voip-and-unified-communications/passing-telephony-data-through-gateways?u=76281980&t=83)** It will then have to pass through a switching service point, and then go to SS7.
>
> **[1:31](https://www.linkedin.com/learning/learning-voip-and-unified-communications/passing-telephony-data-through-gateways?u=76281980&t=91)** That SS7 signal will have to go through a signaling gateway where it becomes SIGTRAN as it travels across the internet.
>
> **[1:41](https://www.linkedin.com/learning/learning-voip-and-unified-communications/passing-telephony-data-through-gateways?u=76281980&t=101)** Once in a [[Local Area Network (LAN)|local area network]], it will hit the call agent or media gateway controller.
>
> **[1:48](https://www.linkedin.com/learning/learning-voip-and-unified-communications/passing-telephony-data-through-gateways?u=76281980&t=108)** Signaling then becomes session initiation protocol, or H.323 as it communicates with another call agent or media gateway controller.
>
> **[2:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/passing-telephony-data-through-gateways?u=76281980&t=120)** Media will have to be transformed as well.
>
> **[2:04](https://www.linkedin.com/learning/learning-voip-and-unified-communications/passing-telephony-data-through-gateways?u=76281980&t=124)** As we see the data coming off of the public switch telephone network, it's in the form of time division multiplexing.
>
> **[2:13](https://www.linkedin.com/learning/learning-voip-and-unified-communications/passing-telephony-data-through-gateways?u=76281980&t=133)** As it passes through the media gateway, it will then transport it into [[Real-Time]] transport protocol.
>
> **[2:21](https://www.linkedin.com/learning/learning-voip-and-unified-communications/passing-telephony-data-through-gateways?u=76281980&t=141)** A complex network will involve gateways and protocols to transport telephony data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Call Control]] (1), [[Local Area Network (LAN)|Local area network]] (1), [[Real-Time]] (1)
> **Env Vars:** ss7 (3), sigtran (2), sip (2), lan (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [lisa] (1)

#### [Understanding MGCP/Megaco (H.248)](https://www.linkedin.com/learning/learning-voip-and-unified-communications/understanding-mgcp-megaco-h-248?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/understanding-mgcp-megaco-h-248?u=76281980&t=0)** - [Instructor] When transmitting multimedia over an IP network, the signal must go through multiple transformations and devices before reaching its final destination.
>
> **[0:11](https://www.linkedin.com/learning/learning-voip-and-unified-communications/understanding-mgcp-megaco-h-248?u=76281980&t=11)** Some of those devices include media gateway controllers.
>
> **[0:16](https://www.linkedin.com/learning/learning-voip-and-unified-communications/understanding-mgcp-megaco-h-248?u=76281980&t=16)** They're also called call agents or softswitches, and these provide signaling logic.
>
> **[0:23](https://www.linkedin.com/learning/learning-voip-and-unified-communications/understanding-mgcp-megaco-h-248?u=76281980&t=23)** Media gateways provide media logic to convert circuit-switched voice traffic to packet-based traffic.
>
> **[0:31](https://www.linkedin.com/learning/learning-voip-and-unified-communications/understanding-mgcp-megaco-h-248?u=76281980&t=31)** Media Gateway Control Protocol handles the signaling and session management required during a multimedia session between the media gateway controller and the media gateway.
>
> **[0:43](https://www.linkedin.com/learning/learning-voip-and-unified-communications/understanding-mgcp-megaco-h-248?u=76281980&t=43)** Megaco, more commonly known as H.248, performs the same functions as Media Gateway Control Protocol, but it is an enhanced version that can operate with either H.323 or Session Initiation Protocol.
>
> **[1:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/understanding-mgcp-megaco-h-248?u=76281980&t=60)** A lot of times it's simply referred to as MGCP Megaco.
>
> **[1:07](https://www.linkedin.com/learning/learning-voip-and-unified-communications/understanding-mgcp-megaco-h-248?u=76281980&t=67)** In this illustration, we see a couple of the components.
>
> **[1:11](https://www.linkedin.com/learning/learning-voip-and-unified-communications/understanding-mgcp-megaco-h-248?u=76281980&t=71)** Up on the top, you see two media gateway controllers or softswitches communicating with one another.
>
> **[1:18](https://www.linkedin.com/learning/learning-voip-and-unified-communications/understanding-mgcp-megaco-h-248?u=76281980&t=78)** The lower part of the graphic, here we see two media gateways, then in between, the [[Real-Time]] protocol media stream communicating.
>
> **[1:27](https://www.linkedin.com/learning/learning-voip-and-unified-communications/understanding-mgcp-megaco-h-248?u=76281980&t=87)** This is where we see MGCP and Megaco in action.
>
> **[1:33](https://www.linkedin.com/learning/learning-voip-and-unified-communications/understanding-mgcp-megaco-h-248?u=76281980&t=93)** Media gateway controllers use MGCP Megaco to control the way the media gateways set up multimedia transmissions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (1)
> **Env Vars:** mgcp (3)
> **Definitions:** known as (1), is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Session Initiation Protocol (SIP)](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=0)** - [Instructor] If we take a look at this graphic, which depicts a complex network, I'm going to focus on the LAN, and we're going to look at the call agent or media gateway controller, communicating with the other call agent using SIP, or Session Initiation Protocol.
>
> **[0:20](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=20)** Session Initiation Protocol is an application layer protocol for signaling and control that establishes, maintains and terminates sessions between parties over the internet, private networks and cellular systems.
>
> **[0:37](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=37)** SIP manages session negotiation, user location and termination.
>
> **[0:44](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=44)** Sessions may involve one or more media streams, such as voice and video, and includes video conferencing, instant messaging, gaming, and sharing multimedia.
>
> **[0:57](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=57)** To clarify when using VoIP, our session involves an audio stream.
>
> **[1:04](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=64)** Now, as you can see, that's one single stream.
>
> **[1:08](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=68)** However, when using video conferencing, we have voice and video, and each stream must get to the participant and a separate session must be established.
>
> **[1:21](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=81)** SIP is the most common signaling protocol used in VoIP today.
>
> **[1:27](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=87)** As a result, manufacturers are incorporating SIP into various [[Microsoft Products|products]], such as phones, proxies, gateways and servers.
>
> **[1:36](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=96)** For a call to take place, we have to establish, manage and terminate.
>
> **[1:43](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=103)** To establish a call, SIP sends an invite, which is sent in order to set up a VoIP call.
>
> **[1:51](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=111)** An INVITE has session descriptions that allow participants to agree on the parameters of the call, such as media channels and codecs.
>
> **[2:01](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=121)** We'll take a look at this INVITE, this is just a small portion of it.
>
> **[2:06](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=126)** Here, we can see INVITE sip:cleo@[patra.net](https://patra.net) SIP/2.0.
>
> **[2:13](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=133)** Now this request line tells me that this is a SIP version 2.0 INVITE sent to cleo@[patra.net](https://patra.net).
>
> **[2:22](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=142)** Other information in an INVITE includes: From, the identity of the caller.
>
> **[2:28](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=148)** To, who are we calling.
>
> **[2:30](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=150)** And media description, format and other attributes.
>
> **[2:35](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=155)** SIP messages must go through either a proxy or redirect server.
>
> **[2:40](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=160)** Both will inspect the To field and then contact the location server to resolve the address.
>
> **[2:46](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=166)** The proxy server forwards the message to the end point or another server.
>
> **[2:52](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=172)** Redirect server returns information to the original sender.
>
> **[2:57](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=177)** Registrar servers record the location of clients.
>
> **[3:02](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=182)** And registrar servers are normally located within a proxy.
>
> **[3:07](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=187)** Let's step through the process.
>
> **[3:10](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=190)** Here, we see the handshake.
>
> **[3:12](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=192)** During this handshake, we're going to get an offer and that'll contain a list of supported streams and codecs.
>
> **[3:19](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=199)** The answer will contain a list of what streams were accepted and also what codecs they can use.
>
> **[3:26](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=206)** Now we see the conversation.
>
> **[3:29](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=209)** [[Real-Time]] Transport Protocol and Real-Time Control Protocol carries the media directly between the end points and also reports on the condition of the call.
>
> **[3:41](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=221)** At the end of the call, you'll see a SIP message with a BYE in the request line.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (2), [[Microsoft Products|Products]] (1)
> **Env Vars:** sip (9), invite (5), lan (1), bye (1)
> **Analogies:** such as (3)
> **URLs:** [patra.net](https://patra.net) (2)
> **Versions:** 2.0 (1), version 2 (1)
> **Definitions:** is an  (1), is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [The H.323 wrapper, H.225, and H.245](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=0)** - [Instructor] In this graphic showing a complex network, I'm going to focus on the H.323 signaling up here in the [[Local Area Network (LAN)|local area network]], where you see the call agent or media gateway controller, communicating with another call agent.
>
> **[0:17](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=17)** H.323 signaling is an ITU-T recommendation for audio and video communication across an IP network.
>
> **[0:26](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=26)** In case you're not familiar with this protocol, we can go to the source to find out more detailed information about it.
>
> **[0:33](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=33)** I'm at this page here with the international [[Telecommunications]] unit, where we can see this recommendation H.323.
>
> **[0:43](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=43)** Keep in mind, it's a recommendation, not a law.
>
> **[0:46](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=46)** It's a guideline for better interoperability.
>
> **[0:50](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=50)** I then, selected the hyperlink for the PDF, and I've opened the document.
>
> **[0:56](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=56)** Now, there's quite a bit to this document but, as I said, if you want it a little bit more detailed information, you can go to the source.
>
> **[1:04](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=64)** H.323 itself isn't a protocol.
>
> **[1:08](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=68)** It acts as a wrapper for media control, that includes H.225, and H.245.
>
> **[1:16](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=76)** These are protocols that have a specific role in the call set up process.
>
> **[1:23](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=83)** An H.323 network is made up of several end points, or terminals, a gateway, an optional gatekeeper, a multi-point control unit, and a backend service.
>
> **[1:39](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=99)** Gatekeepers are an optional, but widely used component of a VoIP network as they serve as a bridge between the H.323 network and the outside world, and provides address resolution and bandwidth control.
>
> **[1:55](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=115)** A backend service holds information about terminals, configuration and billing.
>
> **[2:02](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=122)** And a multi-point control unit is used to bridge video conferencing calls.
>
> **[2:07](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=127)** The controller is used for call signaling.
>
> **[2:10](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=130)** And the processor is used to mix, encode, and switch streams.
>
> **[2:15](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=135)** H.225 signaling establishes communication between two hosts, it's initiated either by a TCP or UDP connection with an H.225 signal.
>
> **[2:28](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=148)** It contains the registration admission status protocol, and negotiates with the gatekeeper.
>
> **[2:35](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=155)** And it obtains the address of the end point it is attempting to contact in order to establish the call.
>
> **[2:42](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=162)** Then, we move to H.245 control protocol.
>
> **[2:47](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=167)** This establishes properties such as the codecs that are used, and logical channels for the media transfer.
>
> **[2:54](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=174)** Then, the call begins followed by the media transport using [[Real-Time]] transport protocol.
>
> **[3:01](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=181)** Let's step through the process.
>
> **[3:03](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=183)** And this shows you an outline of what would happen.
>
> **[3:05](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=185)** First, we begin with the H.225 signaling, that moves to the H.245 signaling.
>
> **[3:13](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=193)** And then, once all the parameters are set, we begin the media transport using the real-time transport protocol stream.
>
> **[3:23](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=203)** H.323 was one of the first VoIP protocols developed.
>
> **[3:27](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=207)** Now it's less popular, however, it is still in use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (2), [[Local Area Network (LAN)|Local area network]] (1), [[Telecommunications]] (1)
> **Env Vars:** itu (1), pdf (1), tcp (1), udp (1)
> **UI Navigation:** go to (2)
> **CLI Commands:** find (1)
> **Definitions:** is an  (1)
> **Analogies:** such as (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** set up (1)

#### [Translators and mixers](https://www.linkedin.com/learning/learning-voip-and-unified-communications/translators-and-mixers-14169852?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/translators-and-mixers-14169852?u=76281980&t=0)** - [Instructor] When transmitting multimedia over a complex network, it's important that all sites receive the data in the correct format.
>
> **[0:10](https://www.linkedin.com/learning/learning-voip-and-unified-communications/translators-and-mixers-14169852?u=76281980&t=10)** Translators and mixers are middleboxes that are placed in the network that transform the media stream within a session.
>
> **[0:19](https://www.linkedin.com/learning/learning-voip-and-unified-communications/translators-and-mixers-14169852?u=76281980&t=19)** They're sometimes necessary when handling conferencing sessions or traversing firewalls.
>
> **[0:26](https://www.linkedin.com/learning/learning-voip-and-unified-communications/translators-and-mixers-14169852?u=76281980&t=26)** Translators transform [[Real-Time]] transport protocol media as it passes through a network to better suit the characteristics of the output network.
>
> **[0:39](https://www.linkedin.com/learning/learning-voip-and-unified-communications/translators-and-mixers-14169852?u=76281980&t=39)** Uses include providing a bridge between different transport protocols, adjust for lower or higher quality bandwidth by converting between media codecs, pass through application layer firewalls, or add or remove encryption.
>
> **[1:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/translators-and-mixers-14169852?u=76281980&t=60)** The translator is transparent to participants, as they won't even know that the data has been modified.
>
> **[1:09](https://www.linkedin.com/learning/learning-voip-and-unified-communications/translators-and-mixers-14169852?u=76281980&t=69)** Translators include bridges, transcoders, exploders and mergers.
>
> **[1:16](https://www.linkedin.com/learning/learning-voip-and-unified-communications/translators-and-mixers-14169852?u=76281980&t=76)** Bridges are one-to-one and are the simplest type of translator.
>
> **[1:21](https://www.linkedin.com/learning/learning-voip-and-unified-communications/translators-and-mixers-14169852?u=76281980&t=81)** A bridge doesn't change the encoding or modify the RTP data; however, it provides translation between different transport protocols.
>
> **[1:33](https://www.linkedin.com/learning/learning-voip-and-unified-communications/translators-and-mixers-14169852?u=76281980&t=93)** Transcoders are one-to-one translators that change the media encoding by decoding compressed data and re-encode it with a different format.
>
> **[1:44](https://www.linkedin.com/learning/learning-voip-and-unified-communications/translators-and-mixers-14169852?u=76281980&t=104)** They will usually change the payload type and padding, but all other RTP header fields generally stay the same.
>
> **[1:55](https://www.linkedin.com/learning/learning-voip-and-unified-communications/translators-and-mixers-14169852?u=76281980&t=115)** Exploders are one-to-many translators that accept in a single packet and generate multiple packets.
>
> **[2:03](https://www.linkedin.com/learning/learning-voip-and-unified-communications/translators-and-mixers-14169852?u=76281980&t=123)** This is for use in multicasts.
>
> **[2:07](https://www.linkedin.com/learning/learning-voip-and-unified-communications/translators-and-mixers-14169852?u=76281980&t=127)** Mergers are many-to-one translators.
>
> **[2:10](https://www.linkedin.com/learning/learning-voip-and-unified-communications/translators-and-mixers-14169852?u=76281980&t=130)** When there are duplicate streams, mergers combine multiple streams into one.
>
> **[2:17](https://www.linkedin.com/learning/learning-voip-and-unified-communications/translators-and-mixers-14169852?u=76281980&t=137)** Sometimes data must pass through networks with lower bandwidth.
>
> **[2:22](https://www.linkedin.com/learning/learning-voip-and-unified-communications/translators-and-mixers-14169852?u=76281980&t=142)** A mixer is placed in a lower bandwidth area and mixes several streams into a single stream.
>
> **[2:30](https://www.linkedin.com/learning/learning-voip-and-unified-communications/translators-and-mixers-14169852?u=76281980&t=150)** It re-encodes the data to match the one with lower bandwidth and then forwards that stream across the link.
>
> **[2:40](https://www.linkedin.com/learning/learning-voip-and-unified-communications/translators-and-mixers-14169852?u=76281980&t=160)** Translators and mixers transform the media stream within a session so all sites receive data in the correct format.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (1)
> **Env Vars:** rtp (2)
> **Speakers:** - [instructor] (1)


### 4. Business Integration

[↑ Back to Table of Contents](#table-of-contents)

#### [Plan a unified communications system](https://www.linkedin.com/learning/learning-voip-and-unified-communications/plan-a-unified-communications-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/plan-a-unified-communications-system?u=76281980&t=0)** - [Instructor] Unified communications provides many value-added services.
>
> **[0:05](https://www.linkedin.com/learning/learning-voip-and-unified-communications/plan-a-unified-communications-system?u=76281980&t=5)** Companies can integrate VoIP with email, billing, mobile devices and customer management systems.
>
> **[0:13](https://www.linkedin.com/learning/learning-voip-and-unified-communications/plan-a-unified-communications-system?u=76281980&t=13)** VoIP and unified communications is not a single product or [[Hardware]] solution.
>
> **[0:19](https://www.linkedin.com/learning/learning-voip-and-unified-communications/plan-a-unified-communications-system?u=76281980&t=19)** As a result, when a company decides to implement a VoIP system, careful planning and consideration are required in order to meet the needs of the organization.
>
> **[0:32](https://www.linkedin.com/learning/learning-voip-and-unified-communications/plan-a-unified-communications-system?u=76281980&t=32)** Voice over IP provides an alternative to the traditional public switch telephone network, not only for large companies, but also small-to-middle size businesses.
>
> **[0:44](https://www.linkedin.com/learning/learning-voip-and-unified-communications/plan-a-unified-communications-system?u=76281980&t=44)** More and more companies are adopting VoIP because of its [[Scalability]], flexibility, and ability to unify communications.
>
> **[0:54](https://www.linkedin.com/learning/learning-voip-and-unified-communications/plan-a-unified-communications-system?u=76281980&t=54)** Before implementation, sit down with all stakeholders and conduct a needs analysis.
>
> **[1:01](https://www.linkedin.com/learning/learning-voip-and-unified-communications/plan-a-unified-communications-system?u=76281980&t=61)** Ask questions such as, do you need a system that can grow with the business?
>
> **[1:07](https://www.linkedin.com/learning/learning-voip-and-unified-communications/plan-a-unified-communications-system?u=76281980&t=67)** Do you have in-house expertise to handle the technical details?
>
> **[1:12](https://www.linkedin.com/learning/learning-voip-and-unified-communications/plan-a-unified-communications-system?u=76281980&t=72)** Should you adopt for a hosted service?
>
> **[1:16](https://www.linkedin.com/learning/learning-voip-and-unified-communications/plan-a-unified-communications-system?u=76281980&t=76)** Do you have a disaster plan if the power or network goes down?
>
> **[1:21](https://www.linkedin.com/learning/learning-voip-and-unified-communications/plan-a-unified-communications-system?u=76281980&t=81)** And what is the budget?
>
> **[1:23](https://www.linkedin.com/learning/learning-voip-and-unified-communications/plan-a-unified-communications-system?u=76281980&t=83)** And what features do you need, conferencing, collaboration, or mobility?
>
> **[1:29](https://www.linkedin.com/learning/learning-voip-and-unified-communications/plan-a-unified-communications-system?u=76281980&t=89)** A unified communication systems is not a one-size-fits-all.
>
> **[1:35](https://www.linkedin.com/learning/learning-voip-and-unified-communications/plan-a-unified-communications-system?u=76281980&t=95)** In today's market, a business has many choices.
>
> **[1:39](https://www.linkedin.com/learning/learning-voip-and-unified-communications/plan-a-unified-communications-system?u=76281980&t=99)** A business can go completely VoIP or choose a hybrid solution, where a company maintains a portion of their traditional analog PBX while migrating different subnetworks onto a VoIP solution.
>
> **[1:53](https://www.linkedin.com/learning/learning-voip-and-unified-communications/plan-a-unified-communications-system?u=76281980&t=113)** Where the system resides will really depend on the size of the business, whether it be a small-to-medium sized business that might choose a hosted phone system, or a larger company with in-house support that might choose an on-premise solution.
>
> **[2:10](https://www.linkedin.com/learning/learning-voip-and-unified-communications/plan-a-unified-communications-system?u=76281980&t=130)** The equipment and handset you select will depend on what features are required, such as automated attendant, application integration, or presence information.
>
> **[2:23](https://www.linkedin.com/learning/learning-voip-and-unified-communications/plan-a-unified-communications-system?u=76281980&t=143)** When deciding to integrate a unified communication system in order to unify communications, careful planning and consideration are required to ensure a successful implementation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1), [[Scalability]] (1)
> **Analogies:** such as (2)
> **Env Vars:** pbx (1)
> **Speakers:** - [instructor] (1)

#### [Network assessment](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=0)** - [Instructor] Networks are complicated, and when dealing with voiceover IP traffic, we may not have a lot of control outside of the [[Local Area Network (LAN)|local area network]].
>
> **[0:10](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=10)** However, on our own local area network, we do have control.
>
> **[0:15](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=15)** An organization has an internal data network and things are going well.
>
> **[0:20](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=20)** The next logical step is to implement a VoIP system.
>
> **[0:24](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=24)** When considering VoIP you need to ask is your network ready?
>
> **[0:30](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=30)** Many businesses want reliability and functionality.
>
> **[0:34](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=34)** Adding voice to an existing infrastructure that has been designed for data flow take some planning.
>
> **[0:41](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=41)** The network must be able to ensure it has a high-quality voice that's mean opinion score of 3.5 to 4.2, and that there are no dropped calls or no delay variation or jitter.
>
> **[0:55](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=55)** Now what's jitter?
>
> **[0:57](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=57)** Will try to explain it.
>
> **[0:59](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=59)** It's as if the audio is blurred.
>
> **[1:02](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=62)** For example, in this illustration, you see a clear image.
>
> **[1:06](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=66)** You can sort of see what the image is, it's blurred.
>
> **[1:10](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=70)** On a voice network we don't want jitter.
>
> **[1:14](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=74)** A local area network along with the technologies and intermediary devices use to access the physical network that the IP packets travel is an essential part of VoIP.
>
> **[1:26](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=86)** Key areas include devices, cabling, and design.
>
> **[1:31](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=91)** Many things can affect call quality.
>
> **[1:35](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=95)** When dealing with VoIP technology, we need to have clean consistent power.
>
> **[1:41](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=101)** Power needs to be clean, but can suffer from network outages, inefficient power or brownouts.
>
> **[1:48](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=108)** When looking at this graphic, this depicts an outage, meaning there is no electricity flowing to the device.
>
> **[1:55](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=115)** A spike would be a surge.
>
> **[1:57](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=117)** Now that wouldn't be good as well.
>
> **[1:59](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=119)** And a brownout, well that's a dip and power.
>
> **[2:03](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=123)** Brownout might not even be your fault.
>
> **[2:06](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=126)** It could mean because in your community, they have rolling brownouts that diminished the power to consume the grid.
>
> **[2:14](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=134)** What you do want is clean power.
>
> **[2:18](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=138)** You should implement an uninterruptible power supply this provides battery backup and gives you clean consistent power.
>
> **[2:27](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=147)** The internet speed can affect voiceover IP, check your internet connection to test latency, upload and download speeds and packet loss.
>
> **[2:37](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=157)** I'm at this website where we can test your speed.
>
> **[2:41](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=161)** I'll click TEST NOW.
>
> **[2:44](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=164)** That give us a mean opinion score of 4.4, which is very good.
>
> **[2:50](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=170)** There are many sites that you can go to to test your internet speed.
>
> **[2:56](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=176)** You'll also want to assess your cable.
>
> **[2:58](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=178)** Check the existing cable to see if it's able to support VoIP.
>
> **[3:03](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=183)** You'll need category 5e or 6 or better to be able to support the bandwidth requirements of voiceover IP.
>
> **[3:12](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=192)** Physically examine the cabling to see if there's any visible damage or any improperly shielded connections.
>
> **[3:20](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=200)** In addition, test all runs to identify any problems that will prevent VoIP from working properly.
>
> **[3:27](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=207)** You can generally run a high-quality cable tester if you don't already have one in-house.
>
> **[3:33](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=213)** Do an inventory of your routers and switches to ensure they can manage the demands of a VoIP system.
>
> **[3:40](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=220)** The more phones that are connecting, the more powerful they need to be.
>
> **[3:46](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=226)** VoIP has a limited ability to deal with out of order packets.
>
> **[3:50](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=230)** Inefficient routers and switches can lead to jitter, latency and poor voice quality.
>
> **[3:57](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=237)** To ensure you can manage and prioritize the voice traffic, implement voice VLANs, which keeps your data from interfering with your VoIP traffic.
>
> **[4:08](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=248)** A voice VLAN will enable the administrator to implement and enforce quality of service and security policy.
>
> **[4:17](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=257)** Many things can affect call quality.
>
> **[4:20](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=260)** Before implementing a VoIP system, conduct a careful assessment to ensure your network is VoIP ready.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Local Area Network (LAN)|Local area network]] (3)
> **Versions:** 3.5 (1), 4.2 (1), 4.4 (1)
> **Env Vars:** test (1), vlan (1)
> **UI Navigation:** go to (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Assure quality of service](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=0)** - [Narrator] Many businesses see the benefit of choosing a voice over IP solution.
>
> **[0:05](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=5)** As they can save money on phone calls and integrate within a unified communication system.
>
> **[0:12](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=12)** When implementing a VoIP solution, it must ensure the same or better quality as a traditional telephone network.
>
> **[0:21](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=21)** All the benefits in the world won't matter if the voice quality is poor.
>
> **[0:26](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=26)** Many things can affect voice quality.
>
> **[0:29](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=29)** Some things we can't control such as weather conditions and an overburdened internet.
>
> **[0:36](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=36)** However, on an internal network, there are a few things we can do to proactively ensure the network will handle the voice traffic.
>
> **[0:44](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=44)** Such as bandwidth, equipment selection and configuring quality of service.
>
> **[0:51](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=51)** There are several issues that affect voice quality.
>
> **[0:54](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=54)** They include latency.
>
> **[0:56](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=56)** That's a delay in packet delivery.
>
> **[0:59](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=59)** Jitter, which is a delay variation of packet delivery.
>
> **[1:03](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=63)** And packet loss, this is when packets are dropped and there's many reasons this may happen.
>
> **[1:10](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=70)** A knee jerk reaction to VoIP issues is simply adding more bandwidth.
>
> **[1:15](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=75)** Studies show adding more bandwidth is not the answer.
>
> **[1:20](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=80)** A proactive approach is to shape the traffic.
>
> **[1:24](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=84)** Using a packet shaper can improve the performance of time-sensitive applications by throttling back non-essential traffic and prioritize the VoIP traffic.
>
> **[1:37](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=97)** For example, this graphic would represent what you might see on a packet shaper dashboard.
>
> **[1:44](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=104)** Today's web pages are interactive by design and will have streaming media playing in the background, which may impact the network.
>
> **[1:54](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=114)** Tune the packet shaper to minimize the impact of bandwidth-hogging applications on the network to protect the VoIP traffic.
>
> **[2:03](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=123)** The quality of your equipment is essential.
>
> **[2:06](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=126)** An unmanaged consumer class switch will not be able to prioritize traffic.
>
> **[2:12](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=132)** If a large document hits that device first, it will be delivered and starve out the voice traffic.
>
> **[2:19](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=139)** Ensure you have the right equipment so you can manage and prioritize traffic.
>
> **[2:26](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=146)** Voice uses the IP network to deliver voice and multimedia communications.
>
> **[2:33](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=153)** Internet protocol or IP is connectionless and best effort.
>
> **[2:38](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=158)** Meaning most of the time it will get there, but there's no guarantee it will get to its final destination.
>
> **[2:46](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=166)** It's like sending a letter general delivery.
>
> **[2:49](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=169)** Transmitting multimedia needs much better than simply best effort.
>
> **[2:56](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=176)** On an IP network, quality of service make sure your voice traffic is prioritized when traveling through the network.
>
> **[3:04](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=184)** When you implement quality of service, [[Real-Time]] traffic is delivered first, before everything else such as [[Microsoft Word|Word]] documents and email.
>
> **[3:15](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=195)** Configure devices to monitor and prioritize time sensitive data.
>
> **[3:20](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=200)** In addition, if the VoIP is outsource, ensure to identify and discuss quality of service issues in the VoIP contract.
>
> **[3:30](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=210)** Poor phone communication is unacceptable.
>
> **[3:33](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=213)** Manage your bandwidth, ensure proper equipment selection, and configure quality of service to ensure your voice traffic gets the treatment it deserves.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Real-Time]] (1), [[Microsoft Word|Word]] (1)
> **Analogies:** such as (3), for example (1), it's like (1)
> **Prerequisites:** configure (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Using STIR/SHAKEN to restore trust](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980&t=0)** - [Instructor] STIR/SHAKEN is a framework designed to combat robocalls and phone number spoofing and ensures legitimate calls reach recipients while blocking fraudulent ones.
>
> **[0:13](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980&t=13)** In this segment, we'll outline how SITR/SHAKEN works and explain why implementing this framework is essential for business.
>
> **[0:22](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980&t=22)** We know that email, spam, and [[Phishing]] go hand in hand, and both are dangerous as they exploit our trust using social engineering.
>
> **[0:33](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980&t=33)** But how do malicious actors use VoIP to exploit our trust?
>
> **[0:38](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980&t=38)** Two ways they exploit our trust is by using vishing and SPIT.
>
> **[0:43](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980&t=43)** Let's talk about each of these concepts.
>
> **[0:46](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980&t=46)** Vishing or voice phishing is where attackers make deceptive calls to trick people into revealing sensitive information, commonly relying on robocalls to reach a greater number of people.
>
> **[1:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980&t=60)** SPIT, or Spam over Internet Telephony, involves mass distribution voicemail messages using VoIP technology, and this is similar to the way email spam works.
>
> **[1:14](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980&t=74)** Vishing and SPIT are very dangerous as spoofing is the primary method to make the attack successful.
>
> **[1:21](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980&t=81)** Spoofing VoIP involves manipulating the caller ID to appear as a trusted source, such as the local hospital or law enforcement agency, which tricks the victim into answering the phone and falling for a scam.
>
> **[1:38](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980&t=98)** And this is possible because voiceover IP can be manipulated.
>
> **[1:43](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980&t=103)** The good news is there is a solution.
>
> **[1:47](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980&t=107)** STIR/SHAKEN is a framework that authenticates and verifies the identity of callers to combat phone number spoofing.
>
> **[1:56](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980&t=116)** Let's talk about how this works.
>
> **[1:58](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980&t=118)** The framework has two parts: STIR, or Secure Telephone Identity Revisited, provides a digital signature that verifies the identity of the caller.
>
> **[2:11](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980&t=131)** SHAKEN, or Signature-based Handling of Asserted Information Using [[Tokens]], sets the standards for deploying STIR, and this helps ensure legitimate calls reach the recipient while blocking or identifying a spoofed call.
>
> **[2:29](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980&t=149)** Now here is the process.
>
> **[2:31](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980&t=151)** When the call is made, the originating provider authenticates the caller's number.
>
> **[2:37](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980&t=157)** The call is then verified by the terminating provider before being completed, and the recipient's phone displays a verified label.
>
> **[2:48](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980&t=168)** However, if the process fails, the call is flagged as suspicious.
>
> **[2:54](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980&t=174)** Implementing STIR/SHAKEN has several benefits.
>
> **[2:58](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980&t=178)** One is that it improves trust with your customers as they're assured that they're communicating with the correct party.
>
> **[3:06](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980&t=186)** It also reduces fraud and scams as recipients will see a notification when the phone number has been verified.
>
> **[3:14](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980&t=194)** In addition, adherence to the framework ensures compliance with certain regulations.
>
> **[3:21](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980&t=201)** For example, we can go to the FCC where it outlines the requirements for voice service providers to implement STIR/SHAKEN to combat spoofing and robocalls.
>
> **[3:33](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980&t=213)** And you can read a little bit more about it here.
>
> **[3:37](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980&t=217)** STIR/SHAKEN helps restore trust and voice communications by preventing fraudsters from scamming consumers and businesses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Phishing]] (2), [[Tokens]] (1)
> **Env Vars:** stir (7), shaken (7), spit (3), sitr (1), fcc (1)
> **Definitions:** is a  (3)
> **Analogies:** similar to (1), such as (1), for example (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** tokens (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [VoIP security](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=0)** - [Narrator] In the early days of voiceover IP, there wasn't much concern over security.
>
> **[0:06](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=6)** However, VoIP is becoming a predominant communication technology because of cost savings, functionality, reliability, and integration with a unified communication system.
>
> **[0:19](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=19)** VoIP is slowly replacing the plain old telephone system or POTS.
>
> **[0:24](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=24)** As a result, security is a major issue.
>
> **[0:29](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=29)** VoIP security threats include malware, eavesdropping, denial of service, and phreaking.
>
> **[0:35](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=35)** Malware is malicious software and includes viruses, worms, Trojans, and backdoors.
>
> **[0:43](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=43)** VoIP uses software and is vulnerable to malware attacks that can hijack the voice infrastructure and spread malware.
>
> **[0:52](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=52)** Defend against this threat by using anti-malware software, along with patch and [[Configuration Management]].
>
> **[0:59](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=59)** In addition, user education is essential as one wrong click can release malware.
>
> **[1:07](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=67)** With un-encrypted voiceover IP, entities send information to one another in plain text.
>
> **[1:14](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=74)** As a result, credentials are vulnerable to exposure.
>
> **[1:18](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=78)** By using a protocol analysis tool during an unencrypted VoIP call, an attacker can eavesdrop on the conversation and gather a great deal of information such as usernames, passwords, and phone numbers.
>
> **[1:34](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=94)** To prevent this use encryption and authentication methods.
>
> **[1:39](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=99)** SIP over transport layer security.
>
> **[1:42](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=102)** This will provide a VPN to secure information during call establishment and secure a [[Real-Time]] transport protocol.
>
> **[1:51](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=111)** We use this to encrypt the data exchange.
>
> **[1:54](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=114)** A denial of service attack sends multiple bogus requests to a server to lock out legitimate users and deny service.
>
> **[2:04](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=124)** One way a hacker can launch a VoIP denial of service attack is by flooding the target with multiple unnecessary SIP INVITE messages.
>
> **[2:14](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=134)** To prevent this, tune your [[Intrusion Detection]] system to block communications if it detects an excessive amount of invite messages.
>
> **[2:24](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=144)** Hackers used phone phreaking back in the day, when a blue box could be spoofed using tones generated by a plastic toy.
>
> **[2:33](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=153)** Because of software flaws, phone phreaking is still possible with VoIP, no plastic toy needed.
>
> **[2:42](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=162)** Phone phreaking can result in call spoofing and overbilling.
>
> **[2:46](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=166)** If the voice stream is hacked, you may be stuck with the bill.
>
> **[2:51](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=171)** To prevent this, monitor for vulnerabilities, update your software and lock down the VoIP system.
>
> **[2:59](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=179)** Vishing is another term for voice over IP [[Phishing]].
>
> **[3:04](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=184)** It's just like regular phishing in that an attack will call the party and request confidential information.
>
> **[3:13](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=193)** Software is easily available that can spoof a phone number and the hacker can even disguise their voice.
>
> **[3:21](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=201)** VoIP makes Vishing easier because an attacker can modify the caller ID so it appears to be coming from a trustworthy source.
>
> **[3:30](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=210)** And Vishers can send one message to thousands of recipients at a time.
>
> **[3:36](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=216)** In many cases, it's nearly impossible to track down hackers and Vishers.
>
> **[3:42](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=222)** Spam over internet telephony or SPIT is like regular spam as it's unwanted messages.
>
> **[3:50](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=230)** SPIT can clog your voicemail system and can carry viruses and spyware in the message.
>
> **[3:57](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=237)** To prevent vishing and SPIT, many VoIP companies verify and authenticate before passing the call onto the recipient.
>
> **[4:07](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=247)** Although a VoIP softphone looks like a phone, it's a computer connected to your network.
>
> **[4:13](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=253)** Protect your VoIP system.
>
> **[4:16](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=256)** Use VoIP authentication methods to ensure integrity and origin authentication.
>
> **[4:22](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=262)** Employ VoIP firewalls, maintain current patch levels, install antivirus, and use encryption.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Phishing]] (2), [[Configuration Management]] (1), [[Real-Time]] (1), [[Intrusion Detection]] (1)
> **Env Vars:** spit (3), sip (2), pots (1), vpn (1), invite (1)
> **Analogies:** such as (1), just like (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [narrator] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [What's next?](https://www.linkedin.com/learning/learning-voip-and-unified-communications/what-s-next-14174309?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/what-s-next-14174309?u=76281980&t=0)** - [Lisa] Thank you for watching!
>
> **[0:03](https://www.linkedin.com/learning/learning-voip-and-unified-communications/what-s-next-14174309?u=76281980&t=3)** By now you have a better understanding of the way we make calls today.
>
> **[0:07](https://www.linkedin.com/learning/learning-voip-and-unified-communications/what-s-next-14174309?u=76281980&t=7)** I gave an overview of voice over IP and unified communications.
>
> **[0:12](https://www.linkedin.com/learning/learning-voip-and-unified-communications/what-s-next-14174309?u=76281980&t=12)** We took a brief look of how we move from the public switched telephone network to voice over IP.
>
> **[0:18](https://www.linkedin.com/learning/learning-voip-and-unified-communications/what-s-next-14174309?u=76281980&t=18)** I covered the components of unified communication, including signaling gateways, translators, codecs, and protocols.
>
> **[0:28](https://www.linkedin.com/learning/learning-voip-and-unified-communications/what-s-next-14174309?u=76281980&t=28)** If you're interested in learning more, please check out the library where we add new courses all the time.
>
> **[0:35](https://www.linkedin.com/learning/learning-voip-and-unified-communications/what-s-next-14174309?u=76281980&t=35)** If you want to learn about encryption, check out my Learning [[Cryptography]] and [[Network Security]] course.
>
> **[0:41](https://www.linkedin.com/learning/learning-voip-and-unified-communications/what-s-next-14174309?u=76281980&t=41)** For security basics, check out my Foundations of IT Security.
>
> **[0:46](https://www.linkedin.com/learning/learning-voip-and-unified-communications/what-s-next-14174309?u=76281980&t=46)** If security and cryptography are up your alley, any course in the [[Ethical Hacking]] series will be well worth your time.
>
> **[0:53](https://www.linkedin.com/learning/learning-voip-and-unified-communications/what-s-next-14174309?u=76281980&t=53)** For more courses, check out my author page.
>
> **[0:56](https://www.linkedin.com/learning/learning-voip-and-unified-communications/what-s-next-14174309?u=76281980&t=56)** Keep learning. I hope to see you again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cryptography]] (2), [[Network Security]] (1), [[Ethical Hacking]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - [lisa] (1)


## Path Context

### In [[VoIP- From Fundamentals to Troubleshooting]]
**1 of 3** | [[Analyzing VoIP Traffic with Wireshark]] →

## Appears In

- [[VoIP- From Fundamentals to Troubleshooting]]

---

[↑ Back to top](#)