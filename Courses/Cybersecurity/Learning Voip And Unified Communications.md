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
  - '[VoIP- From Fundamentals to Troubleshooting](../../Paths/Cybersecurity/Learning%20Paths/VoIP-%20From%20Fundamentals%20to%20Troubleshooting.md)'
next_courses:
  - '[Analyzing VoIP Traffic with Wireshark](Analyzing%20VoIP%20Traffic%20with%20Wireshark.md)'
path_nav: '[{"path":"VoIP- From Fundamentals to Troubleshooting","position":1,"total":3,"prev":null,"next":"Analyzing VoIP Traffic with Wireshark"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
status: not-started
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/providing-voice-over-internet-protocol-voip-telephony-14173322?u=76281980&t=0)** - [Lisa] Did you know that today when you make a call, you are most likely using Voice over IP. Voice over IP continues to be a fast growing technology that uses the existing internet and network to transfer and route voice traffic in IP packets. In this course, I'll provide an overview of Voice over IP and unified communications. We'll take a brief look of how we move from the public switch telephone network to Voice over IP. I'll cover components of unified communication, including signaling gateways, translators, codecs, and protocols. Hello, my name is Lisa Bach and I am super excited to bring you this course so that you can better understand Voice over IP and unified communications so that you can better manage your network. Are you ready? Let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [lisa] (1)

#### [What you need to know](https://www.linkedin.com/learning/learning-voip-and-unified-communications/what-you-need-to-know-14171521?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/what-you-need-to-know-14171521?u=76281980&t=0)** - [Instructor] This course is for network administrators, engineers, students, and anyone with an interest in learning about unified communications and voiceover IP. Participants will discover how unified communications provides an integrated system of services, such as voice, video, email, and instant messaging, into a seamless business application that improves overall efficiency, and allows the ability to communicate from any location, and improves business productivity in an organization. No prerequisites are required. However, participants might benefit with some basic networking skills and terminology. I reference websites throughout the course. You can follow along, if you like, and visit the webpages. The case-sensitive short URL link will show in the lower third of the page. Keep in mind, after time, links and content will change.

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
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unified-communications-uc-overview-14175295?u=76281980&t=0)** - [Instructor] Humans have been communicating with one another since the time of the cave dweller, in the form of symbols or rock art, etched in the cave, to convey a religious icon or communicate a story. Communication has progressed over the centuries and has evolved from pictures to alphabets, and then more formal ways of sharing information, such as couriers, postal systems and newspapers. In the 1800s, we began to see an expansion of sharing information with the development of the Typewriter and Telegraph. In the 1900s, we saw the telephone, radio and television. And after the 1950s, we saw computers, computer networks and the internet. In today's world, we use any combination of communication methods, including email, phones, instant messaging, and video conferencing. Communication can be [Real-Time](../../Skills/Database%20Management/Real-Time.md) or non-real time. During real-time communication, the sender and receiver communicate in both directions at the same time. Non-real time communication is asynchronous and includes blogs, fax, traditional mail and email. It's not time sensitive.
>
> **[1:34](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unified-communications-uc-overview-14175295?u=76281980&t=94)** It's posted and picked up at another time. Effective communication requires feedback. Unified Communications combines different [Forms](../../Skills/Web%20Development/Forms.md) of communications and provides a framework for a consistent user interface across multiple devices and improves [Business Communications](../../Skills/Cloud%20Computing/Business%20Communications.md). Unified Communications leverages the IP network. We can combine communications across a wide range of platforms, including commercial-off-the-shelf tools such as [Outlook](../../Skills/Cloud%20Computing/Microsoft%20Outlook.md) and [Customer Relations](../../Skills/IT%20Help%20Desk/Customer%20Relations.md) Management tools and mobile apps. Features can include voicemail, fax, chat, email, video conferencing and presence information. Presence information lets you know if someone is available and willing to communicate. At the heart of Unified Communications is IP telephony or VoIP. With Unified Communications, an individual can send a message on one platform, the receiver will get the response on another platform. For example, I receive a voicemail message. Unified Communications will translate it to a text or an email message. I'll then pick up the phone, check the party's presence information, and if available and willing to talk,
>
> **[3:09](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unified-communications-uc-overview-14175295?u=76281980&t=189)** I can call or message the individual. Unified Communications has many benefits. It improves employee and team-based productivity, provides more efficient communication by providing presence information, reduces travel by enabling video conferencing and online collaboration, and offers toll cost savings. Although there are many benefits, prior to implementation, the business should conduct a careful assessment, design the networked environment, select appropriate components, software and devices, and plan for network management and security needs. Unified Communications combines voice, email and instant messaging into a seamless business application that improves overall efficiency.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (2), [Forms](../../Skills/Web%20Development/Forms.md) (1), [Business Communications](../../Skills/Cloud%20Computing/Business%20Communications.md) (1), [Outlook](../../Skills/Cloud%20Computing/Microsoft%20Outlook.md) (1), [Customer Relations](../../Skills/IT%20Help%20Desk/Customer%20Relations.md) (1)
> **Analogies:** such as (2), for example (1)
> **Speakers:** - [instructor] (1)

#### [Making a call using VoIP](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980&t=0)** - [Instructor] Have you ever wondered what happens when you pick up the phone to make a call? What happens depends. If you use a traditional landline, you'll use the public switch telephone network. If you use a cell phone, you'll use a cell tower. However, most likely, you are using voiceover IP, or VoIP. VoIP is changing the way we communicate. Voiceover IP or IP telephony uses the existing internet and network to transfer and route voice traffic and IP packets. In many cases, it's part of a unified communication system. VoIP has been in use for over 20 years. However, in the last 10 years, we've seen astonishing growth in voiceover IP. The voiceover IP market is rapidly expanding all over the world in terms of subscribers, growth and traffic. Consumers and businesses are cutting the cord as more and more traffic uses VoIP than the traditional public switch telephone network. Studies show that 60% of the households in the US and Europe are replacing traditional landlines from the phone company with voiceover IP, most likely due to the low cost of bundled services with ISPs.
>
> **[1:35](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980&t=95)** Many businesses are seeing the benefits of choosing a VoIP solution. Businesses can lower the cost of local and long distance phone calls by up to 40%. Using voice and web conferencing reduces travel costs and using VoIP as part of a unified communication solution helps improve productivity, which translates to cost savings for a business. For example, if a business uses an online presence feature in VoIP calling systems, each employee can save approximately a half an hour every day because you can generally reach someone on the first try. For a business, transition, reliability and quality is a concern, but studies show that problems have been rare. Even businesses without an IT department have implemented VoIP successfully. However, businesses still should plan and prepare the network and address the security needs of the VoIP system. In addition to businesses in homes, we're also seeing voiceover IP used with cell phones that can use [wifi](../../Glossary/Standard/Wi-Fi.md) hotspots and eliminate any costs of a cell plan or data plan. Every function is included, such as calling, texting, browsing and sending email.
>
> **[3:11](https://www.linkedin.com/learning/learning-voip-and-unified-communications/making-a-call-using-voip-14171517?u=76281980&t=191)** To take advantage of mobile VoIP, there are various apps available such as Skype or Truphone for both iPhone and [Android](../../Glossary/Sdk/Android.md). In addition, there are a number of VoIP apps available for tablets or laptops. Currently, there are billions of mobile voiceover IP users, and this growth will continue to expand. Voiceover IP, or IP telephony, offers cost-savings, is convenient, and is the future of the telephone industry.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wifi](../../Glossary/Standard/Wi-Fi.md) (1), [Android](../../Glossary/Sdk/Android.md) (1)
> **Analogies:** such as (2), for example (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** iphone (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Evolution of the Public Switched Telephone Network (PSTN)](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=0)** - [Speaker] A strong telecommunication infrastructure is essential for the health and expansion of the economy. Currently, most voice traffic travels over the internet using voice over IP or IP telephony. However, it's important to understand the telephone framework because this is the basis for the current networking infrastructure. Let's step back through time to see this evolution. Today's internet had humble beginnings starting with the creation of the telegraph. After the creation of the telegraph, inventors sought to improve the functionality, which led to the telephone. The standard phone system existed for about a century until improvements in the infrastructure made the logical evolution into our modern day voice over IP technology. Alexander Graham Bell patented the telephone in 1876. Soon after that, the first telephone line using the existing telegraph lines appeared in 1877 in Montreal, Canada. In the beginning, calling involved a manual switch or operator directed calls. In the 1880s, a building in the center of a city called a central [office](../../Skills/Web%20Development/Microsoft%20Office.md) housed equipment, signed up, and connected the community. The companies created islands of local service in a radius of a few miles around the central office
>
> **[1:36](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=96)** in major cities that were part of, owned by, or licensed by the Bell Telephone Company. The telephone signal traveled over copper wires from the central office to the subscribers. When using copper, the signal attenuates and the maximum distance the signal can travel is only about three miles. Beyond that, it isn't possible to hear the other person. Because of this structure, long distance wasn't technically possible. Management incorporated the American Telephone and Telegraph Company in 1885 as a subsidiary of American Bell, and provided long distance service for the Bell system that connected local companies. Here we see an illustration of the central offices connected by what was called the AT&T Long Lines. The early telephone network rapidly expanded. And in 1915, we achieved the first transcontinental telephone call. A hard line has a microphone and a speaker, a ringer, a hook, and a dial switch. A battery powers the telephone, and a line card has many functions that includes signaling, line supervision, and termination. In a standard telephone, two wires make up the loop that enables signaling. On hook means the switch is open,
>
> **[3:13](https://www.linkedin.com/learning/learning-voip-and-unified-communications/evolution-of-the-public-switched-telephone-network-pstn?u=76281980&t=193)** wires are not connected, and there is no electricity flowing. Off hook means the switch is closed, wires are connected, and there is electricity flowing. To make a call, the user picks up the handset and dials a number. The signal travels to the receiver, which initiates ringing. A phone call begins at the subscriber or local loop, which carries the signal from the subscriber's home to the central office over a copper cable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (4)
> **CLI Commands:** make (2)
> **Speakers:** - [speaker] (1)

#### [Moving from the PSTN to VoIP](https://www.linkedin.com/learning/learning-voip-and-unified-communications/moving-from-the-pstn-to-voip?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/moving-from-the-pstn-to-voip?u=76281980&t=0)** - [Instructor] In the 1960s, the public switched telephone network became digital. The network supports a bandwidth of 64 kilobits per second, and limits the frequency to the voice band range, which is 300 to 3,300 hertz. In 1975, the phone system developed Signaling System 7 control system, or simply SS7. SS7 is a set of signaling protocols, used to set up and tear down calls, and is the basis of call [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) for most of the world's calls. The public switched telephone network and SS7 integrate with one another with the help of a signaling gateway. Nodes in an SS7 network are signaling points. The three kinds of signaling points are Switching Service Point, Signal Transfer Point, and Service Control Point. The Switching Service Point is the central [office](../../Skills/Web%20Development/Microsoft%20Office.md) that carries the messages through the public switched telephone network onto the SS7 network. Signal Transfer Points have circuits and switches that transfer data from one signaling link to another. Service Control Points provide the intelligence of the network by using database inquiries to keep track of credit authorizations for billing,
>
> **[1:34](https://www.linkedin.com/learning/learning-voip-and-unified-communications/moving-from-the-pstn-to-voip?u=76281980&t=94)** and subscriber listings, along with routing features, such as call forwarding and 800 services. A phone call begins at the subscriber loop, travels to the central office and then onto the public switched telephone network where the Signaling System 7 system sets it up, tears it down and routes calls between nodes through an IP network in order to get the signal to its final destination. At the other end when the phone rings, the user acknowledges by picking up the handset. Then up to our current day technology, we see that in 1983, cellular service launched commercially in Chicago. In 1992, the internet became public. And then we saw the emergence of commercial internet service providers or ISPs. In 1996, the [Telecommunications](../../Skills/Network%20and%20System%20Administration/Telecommunications.md) Act allowed for wide open competition for both local and long-distance telecommunications. And 2002, Voice over IP began commercially, which ended the reign of pure long-distance carriers and standard long-distance pricing. So the public switched telephone network existed for about a century and then improvements in the infrastructure evolved into our modern-day Voice over IP technology.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (2), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (2), [Telecommunications](../../Skills/Network%20and%20System%20Administration/Telecommunications.md) (2)
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
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/uc-components-14170765?u=76281980&t=0)** - [Instructor] Unified communications is a framework that combines IP-based communication services, such as voice, video and data on a single network that improves overall efficiency. Most systems have several necessary components that include terminals, applications, codecs, gateways, protocols and network operations. Terminals are the end devices that interface with the user and include softphones and computers. A softphone is a computer that looks like a phone and it allows you to make phone calls using voice over IP. It has a standard phone interface and handset and many have a digital or video interface for messages and presence information. If using a computer as a terminal, you'll need a headset or a microphone and a speaker. Today there are many vendors and many choices for unified communications applications, which combines communication services such as voice, video conferencing, email and instant messaging into a seamless business application. This allows participants to meet online and share files and collaborate using multiple platforms in their own mobile devices. Gateways are devices in the unified communication system that convert media streams from one set
>
> **[1:35](https://www.linkedin.com/learning/learning-voip-and-unified-communications/uc-components-14170765?u=76281980&t=95)** of communication standards to another, by using two main functions, media and signal conversion. Gateways are essential when communicating in a complex network with the public switch telephone network, ISDN, fax machines and other networks. In order to transport streaming media such as telephony and video teleconference applications over IP networks, multiple protocols are involved to provide setup, communication control and data transport and include [Real-Time](../../Skills/Database%20Management/Real-Time.md) Transport Protocol, Real-time Streaming Protocol, Megaco, SIP and H323. Codecs encode or decode a data stream to remove redundancies and improve transmission. There are various codecs. Each have a specific characteristics such as bit rate and voice quality. WANs, LANs and the technology used to access the physical network that the IP packets travel, are an essential part of voice over IP and unified communications. Routers, switches and voice gateways carry data, voice and video between all network devices and applications. The infrastructure must provide high availability, management, quality of service and [Network Security](../../Skills/Cybersecurity/Network%20Security.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (2), [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unifying-communication-systems?u=76281980&t=0)** - [Instructor] Legacy systems that included email, fax, instant messaging and phone systems were disparate and lacked cohesion. A unified communication systems integrates phone, voicemail, chat, presence, email and fax on a single system improving productivity. Unified communications changes the way we communicate. Developers are creating unified communication-enabled apps, digital assistants and bots designed to improve the overall customer experience. The market has matured and more and more companies are moving towards unified communications. The main task is to integrate all the different types of communication systems to seamlessly work together. A unified communications manager is a platform to help them talk to one another and has many jobs. Before selecting one, the business requirements will be different depending on what the objectives are and what systems need to be integrated. Some goals of the system include: Call processing. At the heart of the unified communication systems is voiceover IP. The system should be able to originate, route and terminate calls. Signal and device control, including call setup and call tear down between systems. And phone features, such as hold, transfer,
>
> **[1:36](https://www.linkedin.com/learning/learning-voip-and-unified-communications/unifying-communication-systems?u=76281980&t=96)** forward and conference. Integration with [office](../../Skills/Web%20Development/Microsoft%20Office.md) communicator apps presence status. And behind all of this is a database. You'll want database access control and to be able to communicate with the directory to identify and authenticate. If the system has a database to store user information, the system should have the ability to synchronize changes. Things happen, make sure the system has backup and restore tools, maybe a built-in disaster recovery system, and gateway support and legacy integration. It probably will need support for different protocols and protocol [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md). And in many cases, analog support for phone, fax and modem. Unifying communications can be complex. Whether you jump in and completely transform and unify or have a slow transition, there are several things to consider to effectively integrate within an existing infrastructure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Voice signal conversion with digital codecs](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=0)** - [Instructor] We use the phone system to communicate information. While in a conversation, we must be able to hear and understand what the other party is saying. Voice communication involves analog and digital communication. In that we speak in analog, which is a continuous wave form. In order for the signal to travel over a digital network, we digitize and encode the signal. An algorithm transforms the data before traveling over an IP network. And then it is decoded at the receiver end. When making a decision on how to reproduce the sound, there are two choices. Recreate the sound as if someone were to hear it as if they were sitting right next to the speaker or reproduce it and arrange that the brain is capable of hearing and understanding. As we see in this graphic, the range of human hearing is between 20 and 20,000 cycles per second, or 20 Hertz to 20 kilohertz. However testing demonstrates a human can understand speech in the frequency range between 300 and 3300 Hertz, which is the voice band range. This is my voice in a normal range.
>
> **[1:37](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=97)** This is my voice in a telephone range. Digitization takes an analog signal and approximates how it should sound. The goal is told quality. A codec converts the analog signal into a digital signal for transmission to remove redundancies and compress the data to enable faster transmission and conserve bandwidth. Codecs typically break down speech and to 20 millisecond segments. The lower the bandwidth, the lower the quality. A more complex algorithm will provide better quality for a given bandwidth. As we see there were a number of codecs for packet networks and the g.700 series as we see in this table. However, the most commonly used codec is g.711 or pulse code modulation. An algorithm measures how faithful the voice is and assigns a mean opinion score or MOS. The quality depends on a number of different parameters including the number of participants on the call, the environment, and the type of equipment. According to ITUTP.800 recommendations, we see the MOS quality is rated from one to five. One being unacceptable and five being excellent.
>
> **[3:16](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voice-signal-conversion-with-digital-codecs?u=76281980&t=196)** Prior to automation, the operator checked on the phone quality by periodically listening to voice samples or on a conversation and assessed a score between one and five. We automate the MOS score now and most VoIP calls fall within the range of 3.5 to 4.2. Because people like to hear a sound during a call, even if the other party is not actively speaking, a voice activity detector detects if there is active speech or not, and inserts comfort noise, or synthetic background noise during periods of silence. Codecs are important as they encode or decode a data stream to remove redundancies and improve transmission speeds and are a necessary element and a unified communication system.

> [!info]- Semantic Content
>
> **Env Vars:** mos (3), itutp (1)
> **Versions:** 3.5 (1), 4.2 (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Data transportation using real-time protocols](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=0)** - [Instructor] Demand for multimedia applications is increasing. There are three broad internet-based multimedia categories. Streaming stored audio/video, streaming live audio/video, and interactive video conferencing. In order to transmit streaming media successfully, multiple protocols are necessary to provide setup, data transport and communication control over an IP network. The suite of [Real-Time](../../Skills/Database%20Management/Real-Time.md) Protocols includes Real-Time Transport Protocol, transports audio and video. Real-Time Control Protocol carries control information. Real-Time Streaming Protocol establishes and controls multimedia sessions. Real-Time Transport Protocol is a transport protocol for media that is multicast friendly, and has many encoding possibilities. Many times, Real-Time Protocol is over UDP, which is a lightweight transport protocol. In order to ensure additional information about the transmission, RTP has a number of different TCP-like fields, such as sequence number, timestamp and source identifier. Here, we see an RTP header and the fields within.
>
> **[1:35](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=95)** A sequence number is used for reordering packets and detecting loss. A timestamp field is for intramedia synchronization. Think of this as lip-sync when you have audio and video together. And a synchronizing source identifier for multicast support. Each media stream has a corresponding RTP session. Real-Time Control Protocol passively gathers [Statistics](../../Skills/Data%20Science/Statistics.md) and reports information about each session. Real-Time Control Protocol then provides feedback on the quality of data and characteristics of the stream to the media source and other session participants in order to help localize network problems, such as jitter, that occurs in real-time data by the delay between packets. Real-Time Control Protocol reports are sent by all participants, whether it is a single participant, or part of a massive multicast session. In order to avoid congestion, Real-Time Control Protocol ensures bandwidth management by limiting the frequency of reports to only once every five seconds. All sites should use a common time, such as Network Time Protocol or Global Positioning Satellite to support synchronized media delivery, and jitter calculations.
>
> **[3:10](https://www.linkedin.com/learning/learning-voip-and-unified-communications/data-transportation-using-real-time-protocols?u=76281980&t=190)** Real-Time Streaming Protocol establishes and controls synchronized streams of multimedia sessions for entertainment and communications. Data comes from multimedia servers and multicast sessions. We also need call set up, management and termination. Two protocols in Protocol Suites include Session Initiation Protocol. This provides connection establishment and control between communicating hosts. And H.323. It's a protocol suite for media control that includes protocols H.225 and H.245. Each of the protocols has a specific role in the setup, management and termination of a media session.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (12), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/passing-telephony-data-through-gateways?u=76281980&t=0)** - [Lisa] When a host sends media from one point to another, media passes through networks that will have different encoding, signaling, and bandwidth requirements. As media travels through networks, gateways are devices that adjust to the different network signaling requirements and convert media streams from one set of communication standards to another. Gateways include media gateways, call agents, or media gateway controller, or softswitch, signaling gateways, and translators and mixers. Various protocols are involved as well. Signaling transport or SIGTRAN is a telephony protocol that transports SS7 signals through the internet. Media gateway control protocol or Megaco works with H.323 or SIP. And [Call Control](../../Skills/IT%20Help%20Desk/Call%20Control.md) protocols include SIP, H.323, and Skinny. A phone call can travel through various networks that include the public switch telephone network, the internet, and a LAN. As we look at this complex drawing, let's step through a call. A call might start at the public switch telephone network. It will then have to pass through a switching service point, and then go to SS7. That SS7 signal will have to go through a signaling gateway
>
> **[1:36](https://www.linkedin.com/learning/learning-voip-and-unified-communications/passing-telephony-data-through-gateways?u=76281980&t=96)** where it becomes SIGTRAN as it travels across the internet. Once in a [local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md), it will hit the call agent or media gateway controller. Signaling then becomes session initiation protocol, or H.323 as it communicates with another call agent or media gateway controller. Media will have to be transformed as well. As we see the data coming off of the public switch telephone network, it's in the form of time division multiplexing. As it passes through the media gateway, it will then transport it into [Real-Time](../../Skills/Database%20Management/Real-Time.md) transport protocol. A complex network will involve gateways and protocols to transport telephony data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Call Control](../../Skills/IT%20Help%20Desk/Call%20Control.md) (1), [Local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md) (1), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1)
> **Env Vars:** ss7 (3), sigtran (2), sip (2), lan (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [lisa] (1)

#### [Understanding MGCP/Megaco (H.248)](https://www.linkedin.com/learning/learning-voip-and-unified-communications/understanding-mgcp-megaco-h-248?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/understanding-mgcp-megaco-h-248?u=76281980&t=0)** - [Instructor] When transmitting multimedia over an IP network, the signal must go through multiple transformations and devices before reaching its final destination. Some of those devices include media gateway controllers. They're also called call agents or softswitches, and these provide signaling logic. Media gateways provide media logic to convert circuit-switched voice traffic to packet-based traffic. Media Gateway Control Protocol handles the signaling and session management required during a multimedia session between the media gateway controller and the media gateway. Megaco, more commonly known as H.248, performs the same functions as Media Gateway Control Protocol, but it is an enhanced version that can operate with either H.323 or Session Initiation Protocol. A lot of times it's simply referred to as MGCP Megaco. In this illustration, we see a couple of the components. Up on the top, you see two media gateway controllers or softswitches communicating with one another. The lower part of the graphic, here we see two media gateways, then in between, the [Real-Time](../../Skills/Database%20Management/Real-Time.md) protocol media stream communicating. This is where we see MGCP and Megaco in action. Media gateway controllers use MGCP Megaco
>
> **[1:38](https://www.linkedin.com/learning/learning-voip-and-unified-communications/understanding-mgcp-megaco-h-248?u=76281980&t=98)** to control the way the media gateways set up multimedia transmissions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1)
> **Env Vars:** mgcp (3)
> **Definitions:** known as (1), is an  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Session Initiation Protocol (SIP)](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=0)** - [Instructor] If we take a look at this graphic, which depicts a complex network, I'm going to focus on the LAN, and we're going to look at the call agent or media gateway controller, communicating with the other call agent using SIP, or Session Initiation Protocol. Session Initiation Protocol is an application layer protocol for signaling and control that establishes, maintains and terminates sessions between parties over the internet, private networks and cellular systems. SIP manages session negotiation, user location and termination. Sessions may involve one or more media streams, such as voice and video, and includes video conferencing, instant messaging, gaming, and sharing multimedia. To clarify when using VoIP, our session involves an audio stream. Now, as you can see, that's one single stream. However, when using video conferencing, we have voice and video, and each stream must get to the participant and a separate session must be established. SIP is the most common signaling protocol used in VoIP today. As a result, manufacturers are incorporating SIP into various [products](../../Skills/Software%20Development/Microsoft%20Products.md), such as phones,
>
> **[1:32](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=92)** proxies, gateways and servers. For a call to take place, we have to establish, manage and terminate. To establish a call, SIP sends an invite, which is sent in order to set up a VoIP call. An INVITE has session descriptions that allow participants to agree on the parameters of the call, such as media channels and codecs. We'll take a look at this INVITE, this is just a small portion of it. Here, we can see INVITE sip:cleo@[patra.net](https://patra.net) SIP/2.0. Now this request line tells me that this is a SIP version 2.0 INVITE sent to cleo@[patra.net](https://patra.net). Other information in an INVITE includes: From, the identity of the caller. To, who are we calling. And media description, format and other attributes. SIP messages must go through either a proxy or redirect server. Both will inspect the To field and then contact the location server to resolve the address. The proxy server forwards the message to the end point or another server. Redirect server returns information to the original sender. Registrar servers record the location of clients. And registrar servers are normally located within a proxy. Let's step through the process.
>
> **[3:10](https://www.linkedin.com/learning/learning-voip-and-unified-communications/session-initiation-protocol-sip?u=76281980&t=190)** Here, we see the handshake. During this handshake, we're going to get an offer and that'll contain a list of supported streams and codecs. The answer will contain a list of what streams were accepted and also what codecs they can use. Now we see the conversation. [Real-Time](../../Skills/Database%20Management/Real-Time.md) Transport Protocol and Real-Time Control Protocol carries the media directly between the end points and also reports on the condition of the call. At the end of the call, you'll see a SIP message with a BYE in the request line.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (2), [Products](../../Skills/Software%20Development/Microsoft%20Products.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=0)** - [Instructor] In this graphic showing a complex network, I'm going to focus on the H.323 signaling up here in the [local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md), where you see the call agent or media gateway controller, communicating with another call agent. H.323 signaling is an ITU-T recommendation for audio and video communication across an IP network. In case you're not familiar with this protocol, we can go to the source to find out more detailed information about it. I'm at this page here with the international [Telecommunications](../../Skills/Network%20and%20System%20Administration/Telecommunications.md) unit, where we can see this recommendation H.323. Keep in mind, it's a recommendation, not a law. It's a guideline for better interoperability. I then, selected the hyperlink for the PDF, and I've opened the document. Now, there's quite a bit to this document but, as I said, if you want it a little bit more detailed information, you can go to the source. H.323 itself isn't a protocol. It acts as a wrapper for media control, that includes H.225, and H.245. These are protocols that have a specific role in the call set up process. An H.323 network is made up of several end points, or terminals, a gateway, an optional gatekeeper, a multi-point control unit, and a backend service.
>
> **[1:39](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=99)** Gatekeepers are an optional, but widely used component of a VoIP network as they serve as a bridge between the H.323 network and the outside world, and provides address resolution and bandwidth control. A backend service holds information about terminals, configuration and billing. And a multi-point control unit is used to bridge video conferencing calls. The controller is used for call signaling. And the processor is used to mix, encode, and switch streams. H.225 signaling establishes communication between two hosts, it's initiated either by a TCP or UDP connection with an H.225 signal. It contains the registration admission status protocol, and negotiates with the gatekeeper. And it obtains the address of the end point it is attempting to contact in order to establish the call. Then, we move to H.245 control protocol. This establishes properties such as the codecs that are used, and logical channels for the media transfer. Then, the call begins followed by the media transport using [Real-Time](../../Skills/Database%20Management/Real-Time.md) transport protocol. Let's step through the process. And this shows you an outline of what would happen. First, we begin with the H.225 signaling, that moves to the H.245 signaling.
>
> **[3:13](https://www.linkedin.com/learning/learning-voip-and-unified-communications/the-h-323-wrapper-h-225-and-h-245?u=76281980&t=193)** And then, once all the parameters are set, we begin the media transport using the real-time transport protocol stream. H.323 was one of the first VoIP protocols developed. Now it's less popular, however, it is still in use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (2), [Local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md) (1), [Telecommunications](../../Skills/Network%20and%20System%20Administration/Telecommunications.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/translators-and-mixers-14169852?u=76281980&t=0)** - [Instructor] When transmitting multimedia over a complex network, it's important that all sites receive the data in the correct format. Translators and mixers are middleboxes that are placed in the network that transform the media stream within a session. They're sometimes necessary when handling conferencing sessions or traversing firewalls. Translators transform [Real-Time](../../Skills/Database%20Management/Real-Time.md) transport protocol media as it passes through a network to better suit the characteristics of the output network. Uses include providing a bridge between different transport protocols, adjust for lower or higher quality bandwidth by converting between media codecs, pass through application layer firewalls, or add or remove encryption. The translator is transparent to participants, as they won't even know that the data has been modified. Translators include bridges, transcoders, exploders and mergers. Bridges are one-to-one and are the simplest type of translator. A bridge doesn't change the encoding or modify the RTP data; however, it provides translation between different transport protocols. Transcoders are one-to-one translators
>
> **[1:36](https://www.linkedin.com/learning/learning-voip-and-unified-communications/translators-and-mixers-14169852?u=76281980&t=96)** that change the media encoding by decoding compressed data and re-encode it with a different format. They will usually change the payload type and padding, but all other RTP header fields generally stay the same. Exploders are one-to-many translators that accept in a single packet and generate multiple packets. This is for use in multicasts. Mergers are many-to-one translators. When there are duplicate streams, mergers combine multiple streams into one. Sometimes data must pass through networks with lower bandwidth. A mixer is placed in a lower bandwidth area and mixes several streams into a single stream. It re-encodes the data to match the one with lower bandwidth and then forwards that stream across the link. Translators and mixers transform the media stream within a session so all sites receive data in the correct format.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1)
> **Env Vars:** rtp (2)
> **Speakers:** - [instructor] (1)


### 4. Business Integration

[↑ Back to Table of Contents](#table-of-contents)

#### [Plan a unified communications system](https://www.linkedin.com/learning/learning-voip-and-unified-communications/plan-a-unified-communications-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/plan-a-unified-communications-system?u=76281980&t=0)** - [Instructor] Unified communications provides many value-added services. Companies can integrate VoIP with email, billing, mobile devices and customer management systems. VoIP and unified communications is not a single product or [Hardware](../../Topics/Hardware.md) solution. As a result, when a company decides to implement a VoIP system, careful planning and consideration are required in order to meet the needs of the organization. Voice over IP provides an alternative to the traditional public switch telephone network, not only for large companies, but also small-to-middle size businesses. More and more companies are adopting VoIP because of its [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md), flexibility, and ability to unify communications. Before implementation, sit down with all stakeholders and conduct a needs analysis. Ask questions such as, do you need a system that can grow with the business? Do you have in-house expertise to handle the technical details? Should you adopt for a hosted service? Do you have a disaster plan if the power or network goes down? And what is the budget? And what features do you need, conferencing, collaboration, or mobility? A unified communication systems is not a one-size-fits-all. In today's market, a business has many choices.
>
> **[1:39](https://www.linkedin.com/learning/learning-voip-and-unified-communications/plan-a-unified-communications-system?u=76281980&t=99)** A business can go completely VoIP or choose a hybrid solution, where a company maintains a portion of their traditional analog PBX while migrating different subnetworks onto a VoIP solution. Where the system resides will really depend on the size of the business, whether it be a small-to-medium sized business that might choose a hosted phone system, or a larger company with in-house support that might choose an on-premise solution. The equipment and handset you select will depend on what features are required, such as automated attendant, application integration, or presence information. When deciding to integrate a unified communication system in order to unify communications, careful planning and consideration are required to ensure a successful implementation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1)
> **Analogies:** such as (2)
> **Env Vars:** pbx (1)
> **Speakers:** - [instructor] (1)

#### [Network assessment](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=0)** - [Instructor] Networks are complicated, and when dealing with voiceover IP traffic, we may not have a lot of control outside of the [local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md). However, on our own local area network, we do have control. An organization has an internal data network and things are going well. The next logical step is to implement a VoIP system. When considering VoIP you need to ask is your network ready? Many businesses want reliability and functionality. Adding voice to an existing infrastructure that has been designed for data flow take some planning. The network must be able to ensure it has a high-quality voice that's mean opinion score of 3.5 to 4.2, and that there are no dropped calls or no delay variation or jitter. Now what's jitter? Will try to explain it. It's as if the audio is blurred. For example, in this illustration, you see a clear image. You can sort of see what the image is, it's blurred. On a voice network we don't want jitter. A local area network along with the technologies and intermediary devices use to access the physical network that the IP packets travel is an essential part of VoIP. Key areas include devices, cabling, and design. Many things can affect call quality.
>
> **[1:35](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=95)** When dealing with VoIP technology, we need to have clean consistent power. Power needs to be clean, but can suffer from network outages, inefficient power or brownouts. When looking at this graphic, this depicts an outage, meaning there is no electricity flowing to the device. A spike would be a surge. Now that wouldn't be good as well. And a brownout, well that's a dip and power. Brownout might not even be your fault. It could mean because in your community, they have rolling brownouts that diminished the power to consume the grid. What you do want is clean power. You should implement an uninterruptible power supply this provides battery backup and gives you clean consistent power. The internet speed can affect voiceover IP, check your internet connection to test latency, upload and download speeds and packet loss. I'm at this website where we can test your speed. I'll click TEST NOW. That give us a mean opinion score of 4.4, which is very good. There are many sites that you can go to to test your internet speed. You'll also want to assess your cable. Check the existing cable to see if it's able to support VoIP. You'll need category 5e or 6 or better to be able to support
>
> **[3:08](https://www.linkedin.com/learning/learning-voip-and-unified-communications/network-assessment-14172475?u=76281980&t=188)** the bandwidth requirements of voiceover IP. Physically examine the cabling to see if there's any visible damage or any improperly shielded connections. In addition, test all runs to identify any problems that will prevent VoIP from working properly. You can generally run a high-quality cable tester if you don't already have one in-house. Do an inventory of your routers and switches to ensure they can manage the demands of a VoIP system. The more phones that are connecting, the more powerful they need to be. VoIP has a limited ability to deal with out of order packets. Inefficient routers and switches can lead to jitter, latency and poor voice quality. To ensure you can manage and prioritize the voice traffic, implement voice VLANs, which keeps your data from interfering with your VoIP traffic. A voice VLAN will enable the administrator to implement and enforce quality of service and security policy. Many things can affect call quality. Before implementing a VoIP system, conduct a careful assessment to ensure your network is VoIP ready.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md) (3)
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
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=0)** - [Narrator] Many businesses see the benefit of choosing a voice over IP solution. As they can save money on phone calls and integrate within a unified communication system. When implementing a VoIP solution, it must ensure the same or better quality as a traditional telephone network. All the benefits in the world won't matter if the voice quality is poor. Many things can affect voice quality. Some things we can't control such as weather conditions and an overburdened internet. However, on an internal network, there are a few things we can do to proactively ensure the network will handle the voice traffic. Such as bandwidth, equipment selection and configuring quality of service. There are several issues that affect voice quality. They include latency. That's a delay in packet delivery. Jitter, which is a delay variation of packet delivery. And packet loss, this is when packets are dropped and there's many reasons this may happen. A knee jerk reaction to VoIP issues is simply adding more bandwidth. Studies show adding more bandwidth is not the answer. A proactive approach is to shape the traffic. Using a packet shaper can improve the performance of time-sensitive applications by throttling back non-essential traffic and prioritize the VoIP traffic.
>
> **[1:37](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=97)** For example, this graphic would represent what you might see on a packet shaper dashboard. Today's web pages are interactive by design and will have streaming media playing in the background, which may impact the network. Tune the packet shaper to minimize the impact of bandwidth-hogging applications on the network to protect the VoIP traffic. The quality of your equipment is essential. An unmanaged consumer class switch will not be able to prioritize traffic. If a large document hits that device first, it will be delivered and starve out the voice traffic. Ensure you have the right equipment so you can manage and prioritize traffic. Voice uses the IP network to deliver voice and multimedia communications. Internet protocol or IP is connectionless and best effort. Meaning most of the time it will get there, but there's no guarantee it will get to its final destination. It's like sending a letter general delivery. Transmitting multimedia needs much better than simply best effort. On an IP network, quality of service make sure your voice traffic is prioritized when traveling through the network. When you implement quality of service, [Real-Time](../../Skills/Database%20Management/Real-Time.md) traffic is delivered first,
>
> **[3:09](https://www.linkedin.com/learning/learning-voip-and-unified-communications/assure-quality-of-service?u=76281980&t=189)** before everything else such as [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) documents and email. Configure devices to monitor and prioritize time sensitive data. In addition, if the VoIP is outsource, ensure to identify and discuss quality of service issues in the VoIP contract. Poor phone communication is unacceptable. Manage your bandwidth, ensure proper equipment selection, and configure quality of service to ensure your voice traffic gets the treatment it deserves.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **Analogies:** such as (3), for example (1), it's like (1)
> **Prerequisites:** configure (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Using STIR/SHAKEN to restore trust](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980&t=0)** - [Instructor] STIR/SHAKEN is a framework designed to combat robocalls and phone number spoofing and ensures legitimate calls reach recipients while blocking fraudulent ones. In this segment, we'll outline how SITR/SHAKEN works and explain why implementing this framework is essential for business. We know that email, spam, and [Phishing](../../Skills/Software%20Development/Phishing.md) go hand in hand, and both are dangerous as they exploit our trust using social engineering. But how do malicious actors use VoIP to exploit our trust? Two ways they exploit our trust is by using vishing and SPIT. Let's talk about each of these concepts. Vishing or voice phishing is where attackers make deceptive calls to trick people into revealing sensitive information, commonly relying on robocalls to reach a greater number of people. SPIT, or Spam over Internet Telephony, involves mass distribution voicemail messages using VoIP technology, and this is similar to the way email spam works. Vishing and SPIT are very dangerous as spoofing is the primary method to make the attack successful. Spoofing VoIP involves manipulating the caller ID to appear as a trusted source, such as the local hospital or law enforcement agency, which tricks the victim into answering the phone
>
> **[1:35](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980&t=95)** and falling for a scam. And this is possible because voiceover IP can be manipulated. The good news is there is a solution. STIR/SHAKEN is a framework that authenticates and verifies the identity of callers to combat phone number spoofing. Let's talk about how this works. The framework has two parts: STIR, or Secure Telephone Identity Revisited, provides a digital signature that verifies the identity of the caller. SHAKEN, or Signature-based Handling of Asserted Information Using [Tokens](../../Skills/Web%20Development/Tokens.md), sets the standards for deploying STIR, and this helps ensure legitimate calls reach the recipient while blocking or identifying a spoofed call. Now here is the process. When the call is made, the originating provider authenticates the caller's number. The call is then verified by the terminating provider before being completed, and the recipient's phone displays a verified label. However, if the process fails, the call is flagged as suspicious. Implementing STIR/SHAKEN has several benefits. One is that it improves trust with your customers as they're assured that they're communicating with the correct party. It also reduces fraud and scams
>
> **[3:09](https://www.linkedin.com/learning/learning-voip-and-unified-communications/using-stir-shaken-to-restore-trust?u=76281980&t=189)** as recipients will see a notification when the phone number has been verified. In addition, adherence to the framework ensures compliance with certain regulations. For example, we can go to the FCC where it outlines the requirements for voice service providers to implement STIR/SHAKEN to combat spoofing and robocalls. And you can read a little bit more about it here. STIR/SHAKEN helps restore trust and voice communications by preventing fraudsters from scamming consumers and businesses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Phishing](../../Skills/Software%20Development/Phishing.md) (2), [Tokens](../../Skills/Web%20Development/Tokens.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=0)** - [Narrator] In the early days of voiceover IP, there wasn't much concern over security. However, VoIP is becoming a predominant communication technology because of cost savings, functionality, reliability, and integration with a unified communication system. VoIP is slowly replacing the plain old telephone system or POTS. As a result, security is a major issue. VoIP security threats include malware, eavesdropping, denial of service, and phreaking. Malware is malicious software and includes viruses, worms, Trojans, and backdoors. VoIP uses software and is vulnerable to malware attacks that can hijack the voice infrastructure and spread malware. Defend against this threat by using anti-malware software, along with patch and [Configuration Management](../../Skills/Software%20Development/Configuration%20Management.md). In addition, user education is essential as one wrong click can release malware. With un-encrypted voiceover IP, entities send information to one another in plain text. As a result, credentials are vulnerable to exposure. By using a protocol analysis tool during an unencrypted VoIP call, an attacker can eavesdrop on the conversation and gather a great deal of information such as usernames, passwords, and phone numbers. To prevent this use encryption and authentication methods.
>
> **[1:39](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=99)** SIP over transport layer security. This will provide a VPN to secure information during call establishment and secure a [Real-Time](../../Skills/Database%20Management/Real-Time.md) transport protocol. We use this to encrypt the data exchange. A denial of service attack sends multiple bogus requests to a server to lock out legitimate users and deny service. One way a hacker can launch a VoIP denial of service attack is by flooding the target with multiple unnecessary SIP INVITE messages. To prevent this, tune your [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) system to block communications if it detects an excessive amount of invite messages. Hackers used phone phreaking back in the day, when a blue box could be spoofed using tones generated by a plastic toy. Because of software flaws, phone phreaking is still possible with VoIP, no plastic toy needed. Phone phreaking can result in call spoofing and overbilling. If the voice stream is hacked, you may be stuck with the bill. To prevent this, monitor for vulnerabilities, update your software and lock down the VoIP system. Vishing is another term for voice over IP [Phishing](../../Skills/Software%20Development/Phishing.md). It's just like regular phishing in that an attack will call the party and request confidential information. Software is easily available that can spoof a phone number
>
> **[3:16](https://www.linkedin.com/learning/learning-voip-and-unified-communications/voip-security-14172477?u=76281980&t=196)** and the hacker can even disguise their voice. VoIP makes Vishing easier because an attacker can modify the caller ID so it appears to be coming from a trustworthy source. And Vishers can send one message to thousands of recipients at a time. In many cases, it's nearly impossible to track down hackers and Vishers. Spam over internet telephony or SPIT is like regular spam as it's unwanted messages. SPIT can clog your voicemail system and can carry viruses and spyware in the message. To prevent vishing and SPIT, many VoIP companies verify and authenticate before passing the call onto the recipient. Although a VoIP softphone looks like a phone, it's a computer connected to your network. Protect your VoIP system. Use VoIP authentication methods to ensure integrity and origin authentication. Employ VoIP firewalls, maintain current patch levels, install antivirus, and use encryption.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Phishing](../../Skills/Software%20Development/Phishing.md) (2), [Configuration Management](../../Skills/Software%20Development/Configuration%20Management.md) (1), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), [Intrusion Detection](../../Skills/Network%20and%20System%20Administration/Intrusion%20Detection.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/learning-voip-and-unified-communications/what-s-next-14174309?u=76281980&t=0)** - [Lisa] Thank you for watching! By now you have a better understanding of the way we make calls today. I gave an overview of voice over IP and unified communications. We took a brief look of how we move from the public switched telephone network to voice over IP. I covered the components of unified communication, including signaling gateways, translators, codecs, and protocols. If you're interested in learning more, please check out the library where we add new courses all the time. If you want to learn about encryption, check out my Learning [Cryptography](../../Skills/Cybersecurity/Cryptography.md) and [Network Security](../../Skills/Cybersecurity/Network%20Security.md) course. For security basics, check out my Foundations of IT Security. If security and cryptography are up your alley, any course in the [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) series will be well worth your time. For more courses, check out my author page. Keep learning. I hope to see you again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Cryptography](../../Skills/Cybersecurity/Cryptography.md) (2), [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (1), [Ethical Hacking](../../Skills/Cybersecurity/Ethical%20Hacking.md) (1)
> **CLI Commands:** make (1)
> **Speakers:** - [lisa] (1)


## Path Context

### In [VoIP- From Fundamentals to Troubleshooting](../../Paths/Cybersecurity/Learning%20Paths/VoIP-%20From%20Fundamentals%20to%20Troubleshooting.md)
**1 of 3** | [Analyzing VoIP Traffic with Wireshark](Analyzing%20VoIP%20Traffic%20with%20Wireshark.md) →

## Appears In

- [VoIP- From Fundamentals to Troubleshooting](../../Paths/Cybersecurity/Learning%20Paths/VoIP-%20From%20Fundamentals%20to%20Troubleshooting.md)

---

[↑ Back to top](#)