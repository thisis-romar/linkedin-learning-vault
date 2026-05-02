---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: networking-foundations-wide-area-networks-wans-23860739
url: "https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739"
duration_minutes: 76
duration: 1h 16m
level: Intermediate
updated: 4/17/2024
learners: 6647
skills:
  - Network Administration
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQE4mMCTFW78Lw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1712791908525?e=2147483647&amp;v=beta&amp;t=aE2ZVLXxqea9VlEVjsqxpJMUPc2klkwCdzeqp6Wo6VI"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Network Administration- Build Core Skills for Network Management and Security]]'
prev_courses:
  - '[[Networking Foundations- Local Area Networks (LANs)]]'
next_courses:
  - '[[Learning Network Troubleshooting- Practical Network Diagnostics and Solutions]]'
path_nav: '[{"path":"Network Administration- Build Core Skills for Network Management and Security","position":4,"total":6,"prev":"Networking Foundations- Local Area Networks (LANs)","next":"Learning Network Troubleshooting- Practical Network Diagnostics and Solutions"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/network-administration
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Networking%20Foundations-%20Wide%20Area%20Networks%20(WANs).md)

![Networking Foundations: Wide Area Networks (WANs)](https://media.licdn.com/dms/image/v2/D560DAQE4mMCTFW78Lw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1712791908525?e=2147483647&amp;v=beta&amp;t=aE2ZVLXxqea9VlEVjsqxpJMUPc2klkwCdzeqp6Wo6VI)

# Networking Foundations: Wide Area Networks (WANs)

> A wide area network (WAN) spans across large distances or across geographic locations. In this course, IT trainer and technology advocate Jarrel Rivera guides you through this foundational networking topic. Get an introduction to WAN, including terminologies, topologies, and devices. Learn about traditional WAN, such as leased lines, PSTN, ISDN, ATM, Frame-relay, SONET/SDH, and dive into modern WA

> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739) | 1h 16m | Intermediate | 7K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Introduction](#introduction)
  - [What you should know](#what-you-should-know)
- [**1. Introduction to WAN**](#1-introduction-to-wan) (5 videos)
  - [What is WAN?](#what-is-wan)
  - [WAN topologies](#wan-topologies)
  - [WAN terminologies](#wan-terminologies)
  - [WAN devices](#wan-devices)
  - [WAN provider links](#wan-provider-links)
- [**2. Private WAN**](#2-private-wan) (4 videos)
  - [T1/E1 and T3/E3 leased lines for WAN](#t1e1-and-t3e3-leased-lines-for-wan)
  - [Circuit-switched WAN connectivity](#circuit-switched-wan-connectivity)
  - [Packet-switched WAN connectivity](#packet-switched-wan-connectivity)
  - [WAN via MPLS](#wan-via-mpls)
- [**3. Public WAN**](#3-public-wan) (4 videos)
  - [WAN via DSL](#wan-via-dsl)
  - [WAN via cable](#wan-via-cable)
  - [Wireless WAN via 4G/ 5G](#wireless-wan-via-4g-5g)
  - [Wireless WAN via Satellite](#wireless-wan-via-satellite)
- [**4. Modern WAN**](#4-modern-wan) (5 videos)
  - [Dedicated internet access (DIA)](#dedicated-internet-access-dia)
  - [WAN via Fiber Optics](#wan-via-fiber-optics)
  - [Ethernet WAN and Dark Fiber](#ethernet-wan-and-dark-fiber)
  - [Software-defined WAN (SD-WAN)](#software-defined-wan-sd-wan)
  - [LoRaWAN](#lorawan)
- [**Conclusion**](#conclusion) (3 videos)
  - [WAN consideration](#wan-consideration)
  - [WAN security and optimization](#wan-security-and-optimization)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/introduction?u=76281980&t=0)** - [Jarrel] Ever thought of your internet connection at home or the [[Microsoft Office|office]], like your DSL lines, VPN, lease lines, or perhaps the older technologies of dial up and frame relay?
>
> **[0:11](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/introduction?u=76281980&t=11)** These are all WAN technologies, not the number one, but WAN as in wide area network, and that is what this course is all about.
>
> **[0:20](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/introduction?u=76281980&t=20)** In this course, we'll first introduce you to the concept of wide area network.
>
> **[0:25](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/introduction?u=76281980&t=25)** Then we'll cover the various ways and means of connecting to the intranet.
>
> **[0:29](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/introduction?u=76281980&t=29)** Finally, we'll discuss what you need to consider when connecting over the intranet, like the bandwidth, security reconnection, and the quality of service.
>
> **[0:38](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/introduction?u=76281980&t=38)** Sounds exciting, isn't it?
>
> **[0:40](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/introduction?u=76281980&t=40)** Hi, I'm Jarrel Rivera, and it is my pleasure to be your instructor in learning wide area networks.
>
> **[0:47](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/introduction?u=76281980&t=47)** Let's start.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (1)
> **Env Vars:** wan (2), dsl (1), vpn (1)
> **Speakers:** - [jarrel] (1)

#### [What you should know](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-you-should-know?u=76281980&t=0)** - [Instructor] In this course, we will be covering topics related to networks and internet connectivity.
>
> **[0:06](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-you-should-know?u=76281980&t=6)** For that matter, it is ideal if you're already familiar with the terms like ISP or the internet service provider, routers, the cloud, and the IP address.
>
> **[0:16](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-you-should-know?u=76281980&t=16)** In any case, you can refer it to the course handout for terms and definitions related to the wide area network, including the links to external websites that we'll show you in this course.
>
> **[0:28](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-you-should-know?u=76281980&t=28)** There may be some concepts that you may already know, but hey, stick around.
>
> **[0:32](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-you-should-know?u=76281980&t=32)** There might be something new for you to learn.
>
> **[0:34](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-you-should-know?u=76281980&t=34)** Having said, if you are all good to start, then let's proceed.

> [!info]- Semantic Content
>
> **Env Vars:** isp (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to WAN

[↑ Back to Table of Contents](#table-of-contents)

#### [What is WAN?](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980&t=0)** - [Instructor] The wide area network or WAN refers to a network that covers a large geographic area, which may even span even across countries or continents.
>
> **[0:11](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980&t=11)** The internet that we know, or the worldwide web is a good example of WAN.
>
> **[0:16](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980&t=16)** Within a WAN, we can have many other networks that are connected to each other.
>
> **[0:21](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980&t=21)** Think of it as a network of many other networks.
>
> **[0:25](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980&t=25)** Say you've got a network in the US, which is then connected to a network in Australia and Northern Singapore and the UK.
>
> **[0:33](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980&t=33)** That's WAN.
>
> **[0:35](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980&t=35)** That means with WAN, we can access network devices or servers that are remotely connected, even on the other side of the globe.
>
> **[0:43](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980&t=43)** Imagine that!
>
> **[0:44](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980&t=44)** To ensure that remote networks will be able to communicate properly with each other, we have the WAN Standards.
>
> **[0:51](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980&t=51)** The following are the authorities that define the WAN access standards.
>
> **[0:56](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980&t=56)** We've got the TIA or the [[Telecommunications]] Industry Association, EIA or the Electronic Industries Alliance, ISO or the International Organization for Standardization, and the IEEE or the Institute of Electrical and [[Electronics]] Engineers.
>
> **[1:15](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980&t=75)** The WAN standards describe both the physical and data link requirements for a WAN connection that covers the layers one and two of the OSI Model.
>
> **[1:25](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980&t=85)** At layer one or the physical layer, we got the media type and the interface specifications.
>
> **[1:32](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980&t=92)** Meanwhile, at layer two or the datalink layer is where we got the various WAN protocols.
>
> **[1:38](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980&t=98)** Wondering about the various WAN protocols?
>
> **[1:40](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980&t=100)** Don't worry, we'll cover them separately in the succeeding videos.
>
> **[1:45](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980&t=105)** The first known wide area network was created in the late 1950s by the US Air Force.
>
> **[1:51](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980&t=111)** It was used to interconnect sites in the Sage Radar Defense System, connecting a huge number of dedicated phone lines, telephones, and modems.
>
> **[2:01](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980&t=121)** In today's time, we use WAN to interconnect sites and companies across different parts of the world.
>
> **[2:09](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980&t=129)** We also use WAN for remote connectivity, much like when we work from home or when we attend teleconferences in different countries at different time zones.
>
> **[2:18](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980&t=138)** When we search the internet, the servers hosting the websites that we visit could also be in a far off place.
>
> **[2:24](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980&t=144)** That is also WAN in action.
>
> **[2:27](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980&t=147)** As you may see with WAN or the Wide Area Network, we are able to connect multiple networks together.
>
> **[2:34](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980&t=154)** Otherwise, the local networks will be isolated from each other.
>
> **[2:38](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980&t=158)** But how can we connect a network to another network?
>
> **[2:41](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980&t=161)** What could it look like?
>
> **[2:43](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980&t=163)** That is called WAN Topology, and we'll cover that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Telecommunications]] (1), [[Electronics]] (1)
> **Env Vars:** wan (16), tia (1), eia (1), iso (1), ieee (1)
> **Definitions:** refers to (1), is a  (1), is called (1)
> **Analogies:** think of it as (1), imagine (1)
> **Speakers:** - [instructor] (1)

#### [WAN topologies](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=0)** - [Presenter] A network topology refers to how the devices in the network are connected to each other.
>
> **[0:06](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=6)** For WAN or the wide area network, this may refer to how various sites are connected or how our network is connected to various internet service providers.
>
> **[0:18](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=18)** There are five common WAN topologies.
>
> **[0:20](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=20)** These are point-to-point, hub-and-spoke, dual-homed, full [[Mesh]], and partial mesh.
>
> **[0:26](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=26)** Let us start with the point-to-point topology.
>
> **[0:29](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=29)** A point-to-point topology, as the name implies, refers to a point-to-point connectivity between two endpoints.
>
> **[0:37](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=37)** In this topology, the packets from one site are sent to another site as if there is a direct link between the two.
>
> **[0:45](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=45)** Typically, this topology involves having a dedicated lease line connection like a T3 or E3 line, or a private connection, much like with A VPN.
>
> **[0:56](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=56)** Wondering about dedicated lease lines or VPN perhaps?
>
> **[0:59](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=59)** Don't worry, we'll cover them separately in the succeeding videos.
>
> **[1:03](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=63)** Now, a point-to-point topology is great for high speed private connectivity between two nodes.
>
> **[1:09](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=69)** But what if we got multiple sites?
>
> **[1:12](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=72)** For such cases, we can use the hub-and-spoke or star topology instead.
>
> **[1:18](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=78)** In a star topology, we have multiple sites connecting to a central point.
>
> **[1:23](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=83)** The central point is referred to as the hub, whereas the end points are referred to as the spoke.
>
> **[1:30](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=90)** Hence, a star topology is also referred to as a hub-and-spoke topology.
>
> **[1:37](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=97)** The hub is not the network device hub that you may know.
>
> **[1:41](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=101)** In this topology, the hub simply refers to the central point where all the spokes are connected to.
>
> **[1:49](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=109)** Say, we got branches A, B, and C, which all need to connect to our head [[Microsoft Office|office]].
>
> **[1:54](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=114)** Our branches are the spokes and the head office is the hub.
>
> **[1:59](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=119)** In some references, this topology can also be referred to as a single-homed topology because all spokes are connected to a single home.
>
> **[2:09](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=129)** Get it? Single home.
>
> **[2:11](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=131)** What if we want redundancy such that instead of having a single point where all other sites are connecting to, we'll have not one, but two central points instead.
>
> **[2:22](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=142)** Can we do that?
>
> **[2:23](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=143)** Well, yes, of course.
>
> **[2:24](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=144)** This is known as a dual-homed topology.
>
> **[2:29](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=149)** In a dual-homed topology, the spokes are redundantly connected to two hubs.
>
> **[2:35](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=155)** If you think about it, this topology can be more expensive than a single-homed 'cause there are now two hubs.
>
> **[2:42](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=162)** Plus, there are more connections that you will need to establish.
>
> **[2:46](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=166)** This can be more complex as well than a single-homed, but if you want to implement network redundancy and load balancing, then dual-homed topology could be the option for you.
>
> **[2:56](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=176)** Now, I know what you're thinking.
>
> **[2:58](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=178)** Do we really need to connect to a hub?
>
> **[3:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=180)** Can't we just connect one site to all other sites?
>
> **[3:04](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=184)** Yes. We can also do that.
>
> **[3:07](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=187)** This is referred to as a full mesh.
>
> **[3:10](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=190)** In a full mesh topology, each site is connected to all other sites.
>
> **[3:15](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=195)** This is great in terms of redundancy, but this also means that we'll need lots of connections.
>
> **[3:21](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=201)** Say we got four sites, then using the formula of N things, N minus one divided by two, then that means we'll need six connections.
>
> **[3:29](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=209)** Not bad, right?
>
> **[3:31](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=211)** But what if we got 10?
>
> **[3:32](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=212)** Then that leads us to 45 connections.
>
> **[3:36](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=216)** Imagine if we got more. Yikes!
>
> **[3:39](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=219)** Another option is a partial mesh topology.
>
> **[3:43](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=223)** With this topology, we will still have redundancy with multiple links, but we now use less number of connections as compared to a full mesh.
>
> **[3:53](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=233)** In summary, every network is different.
>
> **[3:56](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=236)** Each business will have their different needs.
>
> **[3:59](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=239)** It is important that we know the various WAN topologies, so we can select the most proper way of how we can connect our sites in a wide area network.
>
> **[4:09](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=249)** Take your time to review the different WAN topologies that we've just covered and see if you can identify which is appropriate for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Mesh]] (6), [[Microsoft Office|Office]] (2)
> **Definitions:** refers to (3), is a  (2), known as (1), means that (1)
> **Env Vars:** wan (4), vpn (2)
> **UI Navigation:** select the (1)
> **Analogies:** imagine (1)
> **Speakers:** - [presenter] (1)

#### [WAN terminologies](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-terminologies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-terminologies?u=76281980&t=0)** - [Instructor] There are various terminologies that are used in a WAN environment.
>
> **[0:05](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-terminologies?u=76281980&t=5)** To better understand this, let us look at this topology.
>
> **[0:09](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-terminologies?u=76281980&t=9)** On the left, we have the customer network connecting to the internet service provider or ISP on the right.
>
> **[0:16](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-terminologies?u=76281980&t=16)** The ISP or the internet service provider is the company that facilitates access to the internet, much like AT&T and Verizon in the US, or Telstra in Australia.
>
> **[0:29](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-terminologies?u=76281980&t=29)** The set of [[Hardware]] and devices on the side of the customer is collectively known as the CPE or the customer premises equipment.
>
> **[0:39](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-terminologies?u=76281980&t=39)** This may include devices that are either owned by the customer or the business, or in some cases the devices can be leased to the customer by the service provider.
>
> **[0:50](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-terminologies?u=76281980&t=50)** On the other hand, the wiring, hardware, and devices on the side of the service provider are known as the service provider equipment.
>
> **[0:59](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-terminologies?u=76281980&t=59)** In between the customer and the service provider is an area known as the demarcation point or demarc.
>
> **[1:07](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-terminologies?u=76281980&t=67)** It is important to identify where the demarcation point is on a network, as this is where the responsibility for the connection shifts from the customer to the service provider.
>
> **[1:20](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-terminologies?u=76281980&t=80)** The demarcation point can also be referred to as the cabling junction box or the meter box, or MPOE or the minimum point of entry.
>
> **[1:30](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-terminologies?u=76281980&t=90)** How about the connection from the customer going to the service provider?
>
> **[1:34](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-terminologies?u=76281980&t=94)** That is known as the last mile or the local loop.
>
> **[1:38](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-terminologies?u=76281980&t=98)** A copper cable or fiber optics can be used in this case.
>
> **[1:43](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-terminologies?u=76281980&t=103)** If you remember, the connection will be from the demarcation point at the customer to the edge of the service provider network.
>
> **[1:51](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-terminologies?u=76281980&t=111)** The last mile is then connected to the local service provider facility known as the CO or the central [[Microsoft Office|office]].
>
> **[1:59](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-terminologies?u=76281980&t=119)** The central office is where all the customer lines will terminate.
>
> **[2:04](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-terminologies?u=76281980&t=124)** And then finally we got the toll network.
>
> **[2:07](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-terminologies?u=76281980&t=127)** This includes all the equipment and long haul fiber lines inside the WAN provider network.
>
> **[2:13](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-terminologies?u=76281980&t=133)** Speaking of which, did you know that there are fiber optic cables under the sea?
>
> **[2:17](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-terminologies?u=76281980&t=137)** Yes, we do.
>
> **[2:19](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-terminologies?u=76281980&t=139)** This enables us to have high-speed connectivity across continents over the globe.
>
> **[2:24](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-terminologies?u=76281980&t=144)** Pretty good, isn't it?
>
> **[2:26](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-terminologies?u=76281980&t=146)** We have just covered various terminologies used in a wired area network.
>
> **[2:31](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-terminologies?u=76281980&t=151)** Next topic will be on WAN devices.
>
> **[2:34](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-terminologies?u=76281980&t=154)** See you then!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (2), [[Microsoft Office|Office]] (2)
> **Env Vars:** wan (3), isp (2), cpe (1), mpoe (1)
> **Definitions:** known as (5), is an  (1)
> **Speakers:** - [instructor] (1)

#### [WAN devices](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=0)** - [Instructor] Earlier, we looked at an overview of a WAN connection between the customer and the service provider.
>
> **[0:06](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=6)** This time, let us [[Zoom]] in on the side of the customer and discuss the different WAN devices that we may have.
>
> **[0:13](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=13)** First, we got a modem.
>
> **[0:15](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=15)** The modem is the device that modulates and demodulates signals to the WAN link of the service provider.
>
> **[0:23](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=23)** Back in the days, we used to have a dial-up modem that is connected to a line phone, which then converts the digital signals from the computer to analog signals that can be sent through the PSDN lines or the public switch telephone network.
>
> **[0:38](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=38)** But in today's time, please be aware that the modem can now be integrated to the SOHO or small [[Microsoft Office|office]], home office routers such as the modem router.
>
> **[0:50](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=50)** On serial connections, the modem is known as a DCE, or data communications equipment as per the EIA.
>
> **[0:58](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=58)** The term DCE is also used to refer to the router that does the clocking on a point-to-point connection.
>
> **[1:06](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=66)** On the other hand, for digital communications, the modem is referred to as a CSU/DSU device.
>
> **[1:14](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=74)** Lots of terminologies, aye?
>
> **[1:15](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=75)** Let's check them out.
>
> **[1:18](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=78)** CSU or the Channel Service Unit is responsible for the connection with the [[Telecommunications]] network.
>
> **[1:24](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=84)** It provides determination for the digital signal and ensures connection integrity through error correction and line monitoring.
>
> **[1:33](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=93)** The DSU or the Data Service Unit, on the other hand, is responsible for managing the interface with the DTE.
>
> **[1:41](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=101)** It converts the line frames into frames that the LAN can interpret and vice versa.
>
> **[1:47](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=107)** So if the modem is a DCE, what's the DTE?
>
> **[1:52](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=112)** The DTE stands for Data Terminal Equipment.
>
> **[1:56](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=116)** It's the one that serves as the source or recipient of data.
>
> **[2:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=120)** Yes, your computers, laptops, and even your home router are examples of DTE.
>
> **[2:08](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=128)** How about the WAN router?
>
> **[2:09](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=129)** A WAN router is a device that routes packets across networks.
>
> **[2:15](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=135)** It's typically placed at the edge or the boundary of networks connecting to the ISP or the internet service provider.
>
> **[2:22](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=142)** For that matter, a WAN router is also known as an edge router or a border router.
>
> **[2:30](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=150)** The WAN router can be connected either wired using serial cable or ethernet perhaps, or it can also be wireless, such as via 4G, [[5G]], or satellite.
>
> **[2:42](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=162)** What you may be familiar with now are the broadband modem routers that are currently used with high speed intranet.
>
> **[2:48](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=168)** Let's pause for a while.
>
> **[2:49](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=169)** Please note that a modem router is different from a common wireless router.
>
> **[2:56](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=176)** A modem router is one that you can connect directly to your service provider, whereas a wireless router is one that can help extend your network wirelessly, but may not necessarily be suited for direct connection to your ISP.
>
> **[3:12](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=192)** Having said that, you need to be careful when purchasing a router 'cause not all routers are the same.
>
> **[3:20](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=200)** In some enterprises, they may also use a layer three switch or a multi-layered switch.
>
> **[3:26](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=206)** It has the capabilities of a switch, but it can also forward IP packets much like a router.
>
> **[3:31](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=211)** So for that matter, they can likewise be used in a WAN setting.
>
> **[3:36](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=216)** We have just covered a number of WAN devices.
>
> **[3:39](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=219)** While the list of devices that we've just talked about wasn't exhaustive.
>
> **[3:43](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=223)** It is important that you understand that which of these devices you need will depend on the WAN technology that is implemented in your respective networks.
>
> **[3:55](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=235)** WAN provider links, you say?
>
> **[3:57](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=237)** That is coming up next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (2), [[Zoom]] (1), [[Telecommunications]] (1), [[5G]] (1)
> **Env Vars:** wan (11), dte (4), dce (3), csu (2), dsu (2)
> **Definitions:** known as (2), is a  (2), stands for (1)
> **Warnings:** be aware (1), note that (1), be careful (1)
> **Analogies:** such as (2)
> **Cross-References:** coming up (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [WAN provider links](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-provider-links?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-provider-links?u=76281980&t=0)** - [Instructor] The internet service providers, or ISPs, have various options for WAN access connections.
>
> **[0:07](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-provider-links?u=76281980&t=7)** They can offer private WAN infrastructure for entities such as large enterprises or public WAN infrastructure for the general public, such as the one that you may have at home.
>
> **[0:18](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-provider-links?u=76281980&t=18)** Private WAN infrastructure include dedicated list lines, such as T one, T three, and E one E three lines, circuit switch links such as PSDN and ISDN, as well as packet switch lines like Frame Relay, [[Multiprotocol Label Switching (MPLS)|MPLS]], or Metro Ethernet.
>
> **[0:34](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-provider-links?u=76281980&t=34)** On the other hand, public WAN infrastructure include broadband services such as DSL, cable and satellite intranet.
>
> **[0:42](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-provider-links?u=76281980&t=42)** In today's time, we also have wireless WAN via 4G and [[5G]] technologies, such as the one that you may use in your mobile phones and tablets.
>
> **[0:51](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-provider-links?u=76281980&t=51)** For fast connectivity, we also have WAN via fiber optics, typically used in the backbone of our networks.
>
> **[0:58](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-provider-links?u=76281980&t=58)** And you may have also heard of SDN or software-defined networking, which is actually now the trend for wide area networks as well.
>
> **[1:06](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-provider-links?u=76281980&t=66)** With SD-WAN, we apply a software-defined approach to managing the wide area network, enabling us to be [[Agile Development|agile]] in responding to the changing business needs and landscapes.
>
> **[1:19](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-provider-links?u=76281980&t=79)** Now, these options do vary in terms of technology, speed and cost.
>
> **[1:25](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-provider-links?u=76281980&t=85)** They each have their own pros and cons.
>
> **[1:27](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-provider-links?u=76281980&t=87)** Knowing each of these technologies is essential for a good network design.
>
> **[1:32](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-provider-links?u=76281980&t=92)** For that matter, will cover each of these WAN technologies in the succeeding topics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (1), [[5G]] (1), [[Agile Development|Agile]] (1)
> **Env Vars:** wan (9), psdn (1), isdn (1), mpls (1), dsl (1)
> **Analogies:** such as (6)
> **Speakers:** - [instructor] (1)


### 2. Private WAN

[↑ Back to Table of Contents](#table-of-contents)

#### [T1/E1 and T3/E3 leased lines for WAN](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/t1-e1-and-t3-e3-leased-lines-for-wan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/t1-e1-and-t3-e3-leased-lines-for-wan?u=76281980&t=0)** - [Instructor] Let us look at the various private WAN connections, starting with leased lines.
>
> **[0:05](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/t1-e1-and-t3-e3-leased-lines-for-wan?u=76281980&t=5)** Say we got an [[Microsoft Office|office]] in Melbourne, Australia, and another in London, UK, and we'd like to connect the two networks exclusively.
>
> **[0:14](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/t1-e1-and-t3-e3-leased-lines-for-wan?u=76281980&t=14)** One option that we can take is to have a point topology using leased lines.
>
> **[0:20](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/t1-e1-and-t3-e3-leased-lines-for-wan?u=76281980&t=20)** With a point-to-point link, the connection is simple because it's just between two sites.
>
> **[0:24](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/t1-e1-and-t3-e3-leased-lines-for-wan?u=76281980&t=24)** Another advantage is that the capacity of the links is dedicated only to this connection.
>
> **[0:31](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/t1-e1-and-t3-e3-leased-lines-for-wan?u=76281980&t=31)** Nice, right?
>
> **[0:32](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/t1-e1-and-t3-e3-leased-lines-for-wan?u=76281980&t=32)** However, the caveat is that the point-to-point links are typically expensive, given the nature of it being dedicated and private.
>
> **[0:42](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/t1-e1-and-t3-e3-leased-lines-for-wan?u=76281980&t=42)** The fee is paid on a monthly basis, that is why it's called leased lines.
>
> **[0:48](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/t1-e1-and-t3-e3-leased-lines-for-wan?u=76281980&t=48)** Get it? Leased lines.
>
> **[0:50](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/t1-e1-and-t3-e3-leased-lines-for-wan?u=76281980&t=50)** All right, let's move on.
>
> **[0:52](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/t1-e1-and-t3-e3-leased-lines-for-wan?u=76281980&t=52)** With this type of connection, we typically use a serial cable, hence, other may refer to it as a serial link or serial line.
>
> **[1:01](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/t1-e1-and-t3-e3-leased-lines-for-wan?u=76281980&t=61)** You can actually connect two routers back-to-back with a serial cable.
>
> **[1:06](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/t1-e1-and-t3-e3-leased-lines-for-wan?u=76281980&t=66)** Now, at the back of the router, you may see a serial1 interface like this, for which we then use a serial cable such as this one.
>
> **[1:15](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/t1-e1-and-t3-e3-leased-lines-for-wan?u=76281980&t=75)** As you may notice, one end is marked as DCE for the link going to the service provider, whereas the other end is marked as DTE for the link towards the customer end.
>
> **[1:29](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/t1-e1-and-t3-e3-leased-lines-for-wan?u=76281980&t=89)** The bandwidth options for leased lines vary between regions.
>
> **[1:33](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/t1-e1-and-t3-e3-leased-lines-for-wan?u=76281980&t=93)** In North America, the service providers use the T-carrier system with T1 lines having a speed of 1.544 Mbps, and T3 lines with the speed of 43.736 Mbps.
>
> **[1:48](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/t1-e1-and-t3-e3-leased-lines-for-wan?u=76281980&t=108)** In Europe, the service providers use the E-carrier system with E1 lines of 2.048 Mbps, whereas E3 lines have a speed of 34.368 Mbps.
>
> **[2:02](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/t1-e1-and-t3-e3-leased-lines-for-wan?u=76281980&t=122)** There are also other data rates apart from T1, E1, and T3 or E3.
>
> **[2:07](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/t1-e1-and-t3-e3-leased-lines-for-wan?u=76281980&t=127)** There's also a bit of a math involved on why the speeds vary.
>
> **[2:11](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/t1-e1-and-t3-e3-leased-lines-for-wan?u=76281980&t=131)** If you'd like to learn more, then kindly remember to check the course handout as well.
>
> **[2:16](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/t1-e1-and-t3-e3-leased-lines-for-wan?u=76281980&t=136)** In summary, leased lines are great for point-to-point connectivity between two sites.
>
> **[2:22](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/t1-e1-and-t3-e3-leased-lines-for-wan?u=76281980&t=142)** They are private and dedicated only to that site-to-site connection.
>
> **[2:27](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/t1-e1-and-t3-e3-leased-lines-for-wan?u=76281980&t=147)** However, they can be expensive and the speed could be limited, and well, that is as compared to other modern-day options.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (1)
> **Versions:** 1.544 (1), 43.736 (1), 2.048 (1), 34.368 (1)
> **Env Vars:** wan (1), dce (1), dte (1)
> **Analogies:** such as (1)
> **Best Practices:** remember to (1)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)

#### [Circuit-switched WAN connectivity](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=0)** - [Instructor] Let us now look at circuit-switched WAN connectivity.
>
> **[0:04](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=4)** Back in the days, telephone switchboards were used by the phone network.
>
> **[0:09](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=9)** The switchboards were then handled by the switchboard operators.
>
> **[0:13](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=13)** To connect the phone call to the right destination, the operator will need to insert the phone plug into the appropriate phone jack.
>
> **[0:21](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=21)** Once the correct logs were connected, a circuit would then be established between the two callers, which allowed them to talk to each other.
>
> **[0:28](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=28)** This is the PSTN or the Public-Switched Telephone Network, also known as POTS or Post [[Microsoft Office|Office]] Telephone Service, or plain old telephone system.
>
> **[0:41](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=41)** Eventually, the operators were replaced by electro mechanical automatic telephone exchanges.
>
> **[0:47](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=47)** Now, given the operation of switching across various circuits to establish a connection, this technology is then referred to as circuit switching.
>
> **[0:57](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=57)** And yes, PSTN is an example of a circuit-switched network.
>
> **[1:02](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=62)** Later on, we used modems to modulate and demodulate signals so that we can transfer data.
>
> **[1:09](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=69)** We had dial up connections with a speed of 56 KBPS.
>
> **[1:14](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=74)** Imagine that!
>
> **[1:15](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=75)** I still remember the tone of (imitates dial up tone beeping) so as to denote the connection has been established, and then we can then use the internet. (chuckles) Those were the days.
>
> **[1:26](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=86)** Meanwhile, let us consider this example.
>
> **[1:30](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=90)** Say we got customers one, two, three, and four with two switchboards on each side.
>
> **[1:36](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=96)** If you want to connect customer one to customer three, then we can do so by establishing a circuit between them.
>
> **[1:43](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=103)** In a similar manner, if we want to connect customer two to customer four, then we'll just have to build a circuit between the two parties as well.
>
> **[1:52](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=112)** Easy, right?
>
> **[1:53](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=113)** But what if we got another user who wants to connect with others as well?
>
> **[1:59](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=119)** Are we able to do so in this example?
>
> **[2:01](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=121)** Well, we've already exhausted all of the available switchboards, so unfortunately we cannot.
>
> **[2:09](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=129)** This is one of the disadvantages of circuit switching.
>
> **[2:13](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=133)** The capacity to handle connections is limited.
>
> **[2:17](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=137)** Once a circuit has been established, the circuit is reserved and cannot be used for something else.
>
> **[2:24](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=144)** In our example, the fifth user will then have to wait until one of the calls is completed so that we can disconnect the previous connection and then establish a new one for the new caller.
>
> **[2:35](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=155)** ISDN or Integrated Services Digital Network is another example of WAN connectivity that also uses circuit switching.
>
> **[2:44](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=164)** As the name implies, it uses digital signals, resulting in higher capacity.
>
> **[2:50](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=170)** In summary, with the circuit-switched network, a dedicated circuit or connection between terminals needs to be established before the users can communicate with each other.
>
> **[3:02](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=182)** Examples of circuit-switched networks are PSTN and ISDN.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (1)
> **Env Vars:** pstn (3), wan (2), isdn (2), pots (1), kbps (1)
> **Definitions:** known as (1), is an  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (imitates dial up tone beeping) (1)

#### [Packet-switched WAN connectivity](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=0)** - [Instructor] In this video, let us talk about packet switching, and yes, as the name implies, packet switching involves packets.
>
> **[0:09](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=9)** That means unlike circuit-switch networks where a circuit needs to be built before we can communicate, in packet switching, the traffic is split into chunks called packets, which are then routed over a shared network.
>
> **[0:23](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=23)** Here's an example.
>
> **[0:25](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=25)** Say we'd like to communicate from Site A to Site B.
>
> **[0:29](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=29)** We have traffic with the size of 6,000, just an example.
>
> **[0:33](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=33)** First, we'll have to break it into smaller packets, say we'll then have four packets.
>
> **[0:39](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=39)** The first packet arrives at the switch network.
>
> **[0:42](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=42)** The switch in the network will then do a lookup in its table to find where to route the packets.
>
> **[0:49](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=49)** A circuit will then be established temporarily as it routes the packet from one point to the next.
>
> **[0:55](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=55)** Once the packet is passed, the circuit will then break, ready for a new packet to be routed elsewhere.
>
> **[1:02](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=62)** Pretty cool, eh?
>
> **[1:04](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=64)** Since the circuit that is built is not permanent, it is then referred to as a virtual circuit or a VC.
>
> **[1:12](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=72)** Now, because the circuits are just temporary, the network is then used more effectively, that is as compared to circuit-switched networks.
>
> **[1:21](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=81)** Further, since there are no private dedicated circuits for each connection, packet switching is found to be less expensive than leased lines and circuit-switched networks.
>
> **[1:33](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=93)** An example of a packet-switch network is frame relay.
>
> **[1:37](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=97)** In the case of a frame relay, the identifiers for each site are called data-link connection identifiers or DLCIs.
>
> **[1:46](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=106)** Frame relay also uses permanent virtual circuits or PVCs, which means that the path that their packets will take is already pre-configured.
>
> **[1:56](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=116)** Now, since there is an identified path that the data will take, this is known as a connection-oriented packet switching or virtual-circuit switching.
>
> **[2:08](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=128)** In today's time, frame relay systems are commonly being replaced by Ethernet WANs.
>
> **[2:14](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=134)** What is that you ask?
>
> **[2:15](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=135)** We'll cover that in a succeeding video.
>
> **[2:18](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=138)** Meanwhile, you might have also heard of cell switching.
>
> **[2:21](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=141)** It is almost like packet switching.
>
> **[2:23](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=143)** However, instead of breaking the traffic into packets, which may have varying size, in cell switching, the traffic is broken into fixed-sized chunks called cells.
>
> **[2:36](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=156)** See the difference?
>
> **[2:37](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=157)** Packet switching, chunks into packets.
>
> **[2:40](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=160)** Cell switching, fixed-sized chunks called cells.
>
> **[2:45](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=165)** Remember that.
>
> **[2:46](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=166)** An example of cell switching is ATM, not the ATM where you withdraw the money, but ATM referring to asynchronous transfer mode.
>
> **[2:56](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=176)** ATM uses fixed-sized cells of 53 bytes, and that's about it for packet-switched networks.
>
> **[3:04](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=184)** Again, frame relay is an example of a connection-oriented packet switching or virtual-circuit switching.
>
> **[3:12](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=192)** ATM on the other hand, or the asynchronous transfer mode, is an example of cell switching.

> [!info]- Semantic Content
>
> **Env Vars:** atm (5)
> **Definitions:** is an  (3), means that (1), known as (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [WAN via MPLS](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-mpls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-mpls?u=76281980&t=0)** - [Instructor] Let us now talk about [[Multiprotocol Label Switching (MPLS)|MPLS]].
>
> **[0:03](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-mpls?u=76281980&t=3)** Now, MPLS is not another protocol, rather, MPLS is a network optimization technique.
>
> **[0:11](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-mpls?u=76281980&t=11)** It stands for [[Multiprotocol Label Switching (MPLS)|Multiprotocol Label Switching]].
>
> **[0:15](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-mpls?u=76281980&t=15)** Multiprotocol means that it can deliver data traffic across multiple protocols such as T1, E1, T3, E3 lines, frame relay, ATM, or DSL.
>
> **[0:27](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-mpls?u=76281980&t=27)** This means that MPLS is not tied to any single protocol alone.
>
> **[0:33](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-mpls?u=76281980&t=33)** Further, as the name implies, MPLS uses labels to identify the paths between distant routers.
>
> **[0:40](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-mpls?u=76281980&t=40)** The labels are predetermined paths that tell the router on where it needs to send the packets.
>
> **[0:47](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-mpls?u=76281980&t=47)** MPLS is the successor to frame relay.
>
> **[0:50](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-mpls?u=76281980&t=50)** While frame relay is connection oriented, MPLS on the other hand, is connectionless.
>
> **[0:56](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-mpls?u=76281980&t=56)** This means that the path that the data packets may take could vary, and yet the packets will still arrive at the correct destination.
>
> **[1:04](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-mpls?u=76281980&t=64)** Pretty cool, right?
>
> **[1:06](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-mpls?u=76281980&t=66)** Here's a sample topology of how MPLS is used.
>
> **[1:10](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-mpls?u=76281980&t=70)** Notice that we got multiple customer sites connecting to the MPLS cloud.
>
> **[1:15](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-mpls?u=76281980&t=75)** Also, note that each customer site uses different technologies.
>
> **[1:20](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-mpls?u=76281980&t=80)** That is the strength of MPLS.
>
> **[1:23](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-mpls?u=76281980&t=83)** It can be used to carry data across various protocols.
>
> **[1:28](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-mpls?u=76281980&t=88)** When a packet enters the MPLS network, a beat sequence label will be appended or added to the packet by the provider edge routers or the PE.
>
> **[1:38](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-mpls?u=76281980&t=98)** The labels identify how the data will be routed between nodes in the MPLS network.
>
> **[1:45](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-mpls?u=76281980&t=105)** They're much like an address on an envelope that tells where it needs to go.
>
> **[1:49](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-mpls?u=76281980&t=109)** Any packet with the same characteristics will be associated with the same label.
>
> **[1:54](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-mpls?u=76281980&t=114)** Hence, will therefore be forwarded using the same rules if it doesn't matter what protocol is used.
>
> **[2:01](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-mpls?u=76281980&t=121)** In this way, MPLS is able to route packets efficiently, allowing for lower latency and battery quality.
>
> **[2:10](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-mpls?u=76281980&t=130)** Looking back at our example, the routers where the customer connections terminate to are referred to as the PE routers or the provider edge routers.
>
> **[2:21](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-mpls?u=76281980&t=141)** Meanwhile, in the middle of our example topology is a P router, referring to the provider router that connects the P routers and the one that switches the MPLS labeled packets.
>
> **[2:34](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-mpls?u=76281980&t=154)** MPLS was introduced in the early 2000s and is standardized by the IETF, under RFC 3031.
>
> **[2:42](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-mpls?u=76281980&t=162)** It continues to be available and still used in forwarding IP protocol data units.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (15), [[Multiprotocol Label Switching (MPLS)|Multiprotocol label switching]] (1)
> **Env Vars:** mpls (15), atm (1), dsl (1), ietf (1), rfc (1)
> **Definitions:** means that (3), is a  (2), stands for (1)
> **Documentation:** rfc (1)
> **Analogies:** such as (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 3. Public WAN

[↑ Back to Table of Contents](#table-of-contents)

#### [WAN via DSL](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=0)** - [Instructor] In the previous videos, we've looked at private WAN connections.
>
> **[0:05](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=5)** This time, let us cover the various public WAN connections, starting with WAN via DSL.
>
> **[0:13](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=13)** DSL is an acronym for a digital subscriber line, or in some other references, they refer to it as digital subscriber loop.
>
> **[0:22](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=22)** It uses the existing twisted pair telephone lines for internet connectivity.
>
> **[0:27](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=27)** But hey, don't get me wrong, you don't need a separate phone to get a DSL connection.
>
> **[0:32](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=32)** There just need to be an existing telephone line in the area, within considerable distance from your service provider, of course.
>
> **[0:40](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=40)** Wait, if it uses existing telephone lines, is it the same as dial-up?
>
> **[0:45](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=45)** Well, not really.
>
> **[0:47](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=47)** You see, dial-up carries analog signals, whereas in DSL, the signals are converted from analog to digital, hence the name, digital subscriber line.
>
> **[1:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=60)** Meanwhile, with dial-up connection, we use a modem.
>
> **[1:04](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=64)** For DSL, we use a DSL modem on the end of the customer or subscriber.
>
> **[1:10](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=70)** The subscriber lines then aggregate to the point of presence, or POP, at the service provider that is using DSLAM, or the DSL access multiplexer.
>
> **[1:22](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=82)** Now, I know what you're probably thinking.
>
> **[1:24](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=84)** Won't voice and data signals interfere with each other?
>
> **[1:28](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=88)** The answer is no.
>
> **[1:30](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=90)** Firstly, the data is carried in a different frequency range on the copper wire.
>
> **[1:35](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=95)** Secondly, splitters or DSL filters are then used to split the frequency so to ensure that the data and voice will not interfere with each other.
>
> **[1:46](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=106)** Pretty cool, isn't it?
>
> **[1:47](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=107)** The speed of a DSL connection does vary, depending on the distance of your premises to the service provider, and also depending on the type of service that your service provider can give you.
>
> **[1:59](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=119)** There are various types of DSL.
>
> **[2:01](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=121)** We got ADSL, or that is the asymmetric digital subscriber line.
>
> **[2:07](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=127)** Asymmetric means that the upstream and downstream speeds are different.
>
> **[2:12](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=132)** That means, you might be able to download data from the internet at 20 MBPS, yet the upload speed is only 1.5 MBPS, just an example.
>
> **[2:22](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=142)** ADSL is the typical setup for most household connections.
>
> **[2:27](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=147)** We also got an SDSL, or symmetric digital subscriber line.
>
> **[2:33](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=153)** Symmetric means that the upstream and downstream speeds are the same, say two MBPS for both upload and download.
>
> **[2:42](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=162)** Again, just an example.
>
> **[2:44](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=164)** The speed will obviously vary depending on what your service provider can provide.
>
> **[2:49](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=169)** You might have also heard of VDSL.
>
> **[2:52](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=172)** It stands for very high speed digital subscriber line.
>
> **[2:57](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=177)** And yes, it is a lot faster than ADSL.
>
> **[3:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=180)** For example, the second generation of VDSL plus can reach up to a hundred MBPS for upstream and up to 300 MBPS for downstream.
>
> **[3:11](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=191)** Nice, right?
>
> **[3:12](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=192)** It actually uses a different modulation technique, and that is how it is able to reach such high speeds.
>
> **[3:19](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=199)** Now, you might have also heard of naked DSL, not that type of naked, and it's not really a DSL type of different speed.
>
> **[3:26](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=206)** Rather, it simply refers to a service that only provides DSL or internet connection without a telephone line.
>
> **[3:35](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=215)** Naked DSL is also referred to by different names such as Raw copper, unconditioned local Loop, or ULL, unbundled network element, or UNE, or single order GEA.
>
> **[3:49](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=229)** Connecting via ADSL is simple.
>
> **[3:51](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=231)** First, we need to connect the ADSL modem to the one port of our router.
>
> **[3:56](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=236)** Then we'll connect our computer to one of the LAN ports.
>
> **[4:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=240)** Turn on all devices, then proceed with the configuration.
>
> **[4:04](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=244)** Usually, routers come with a connection wizard that can help you with the process.
>
> **[4:10](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=250)** You then just need to enter the details that are provided to you by your service provider.
>
> **[4:15](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=255)** This can either be an IP address, or a PPPoE username and password.
>
> **[4:23](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=263)** Nowadays, most DSL providers use PPPoE, or point-to-point protocol over ethernet.
>
> **[4:31](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=271)** This is to establish internet connections for end users.
>
> **[4:35](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=275)** For that case, your service provider will then supply you with a PPPoE username and password.
>
> **[4:43](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=283)** You then just need to enter your account details, follow the prompts, and voila!
>
> **[4:47](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=287)** You are now connected via a DSL.
>
> **[4:50](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=290)** Though declining in popularity, DSL continues to be available in many parts of the world.
>
> **[4:56](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=296)** It is a cost-effective solution for internet connectivity, especially for areas that are not reachable by modern internet connectivity such as 4G or [[5G]] mobile technology or fiber connections.
>
> **[5:09](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=309)** Oh, don't worry!
>
> **[5:11](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=311)** We'll cover the modern ways of internet connectivity in the succeeding topics.
>
> **[5:15](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=315)** And that's it for DSL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[5G]] (1)
> **Env Vars:** dsl (18), adsl (5), mbps (5), wan (3), vdsl (2)
> **Definitions:** means that (2), is a  (2), is an  (1), stands for (1), refers to (1)
> **Analogies:** such as (2), for example (1)
> **Versions:** 1.5 (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [WAN via cable](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-cable?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-cable?u=76281980&t=0)** - [Instructor] Another common WAN connection is via cable internet.
>
> **[0:04](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-cable?u=76281980&t=4)** Cable internet uses coaxial cable, which is similar to that which is used in television.
>
> **[0:10](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-cable?u=76281980&t=10)** It follows the DOCSIS standard, or that is the Data Over Cable Service Interface Specification, so as to transport the data over a coaxial cable.
>
> **[0:22](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-cable?u=76281980&t=22)** Coaxial cables offer a wider frequency range than the two pair phone cables that are used for DSL.
>
> **[0:28](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-cable?u=76281980&t=28)** Hence, cable internet is found to have higher bandwidths.
>
> **[0:33](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-cable?u=76281980&t=33)** Here is a sample topology of how cable internet works.
>
> **[0:38](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-cable?u=76281980&t=38)** A cable modem is used to translate the digital signals into the broadband frequencies, which then leads to the local cable TV [[Microsoft Office|office]], also known as the headend.
>
> **[0:50](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-cable?u=76281980&t=50)** A CMTS or a cable modem termination system is then used so as to provide internet services to the customers.
>
> **[0:58](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-cable?u=76281980&t=58)** Something to note about cable internet is that all the local subscribers do share the same cable bandwidth.
>
> **[1:07](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-cable?u=76281980&t=67)** What this means is that the more subscribers there are in the locality, then the greater the number of people who need to take a share of the pie.
>
> **[1:16](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-cable?u=76281980&t=76)** Hence, the bandwidth that can be allocated for each user could then be lower than the expected rates.
>
> **[1:24](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-cable?u=76281980&t=84)** Here's an example of a cable modem router.
>
> **[1:27](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-cable?u=76281980&t=87)** Notice that there's a port for a coaxial cable in here, and that's where you'll need to connect the cable.
>
> **[1:34](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-cable?u=76281980&t=94)** The cable modem will then synchronize with the service provider, whereas the next step will be the activation for your connection.
>
> **[1:42](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-cable?u=76281980&t=102)** WAN via cable was a popular choice given the higher bandwidth that it can offer.
>
> **[1:48](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-cable?u=76281980&t=108)** But again, this depends on the number of local subscribers on the network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (1)
> **Env Vars:** wan (2), docsis (1), dsl (1), cmts (1)
> **Definitions:** is a  (1), known as (1)
> **Documentation:** specification (1)
> **Analogies:** similar to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Wireless WAN via 4G/ 5G](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=0)** - [Instructor] In today's time, we are no longer limited to wired network connectivity 'cause we also now have wireless solutions.
>
> **[0:08](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=8)** And so in this video, let us cover the various wireless WAN technologies such as mobile broadband and fixed wireless access plus I'll also share something about municipal Wi-Fi.
>
> **[0:21](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=21)** First we got 3G, 4G and [[5G]] connections, also known as cellular or mobile broadband.
>
> **[0:28](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=28)** Yes, it is wireless 'cause you don't need any wires when you connect to 4G or 5G through your phone, right?
>
> **[0:35](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=35)** And it is WAN 'cause you are able to connect to the internet and even to other servers across the globe.
>
> **[0:41](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=41)** Hence, cellular or mobile broadband is a wireless WAN.
>
> **[0:46](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=46)** Many users with smartphones and tablets can use cellular connectivity for internet browsing, accessing their emails, and even for streaming audio and videos online.
>
> **[0:57](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=57)** But is it limited to mobile phones? Not at all.
>
> **[1:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=60)** 'Cause we also now have wireless routers that connect to the internet using 4G and 5G as well via SIM cards.
>
> **[1:08](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=68)** Cool, eh? But how does it work?
>
> **[1:11](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=71)** Our mobile devices got a small antenna, which then communicate with a nearby [[Telecommunications]] tower via radio waves.
>
> **[1:18](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=78)** Now, remember the SIM card?
>
> **[1:20](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=80)** The SIM card, whether the physical chip or the eSIM or iSIM, which is just an electronic code, is what enables our mobile devices to connect to the service provider.
>
> **[1:31](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=91)** It's the SIM that identifies you as a subscriber of a network.
>
> **[1:37](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=97)** So our mobile devices send a signal to the nearby tower and authenticates us that we are a legitimate subscriber to the network.
>
> **[1:45](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=105)** The request is processed and, once authorized, we can then connect to the intranet.
>
> **[1:51](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=111)** As you may know, you can also check the signal strength by looking at the number of bars at the top right hand corner of the screen.
>
> **[1:58](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=118)** This is known as the RSSI or the received signal strength indicator.
>
> **[2:03](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=123)** The more bars you got, the better the signal.
>
> **[2:07](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=127)** Here's an example of a 4G router.
>
> **[2:09](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=129)** In today's time, please be aware that there's also 5G routers available now.
>
> **[2:14](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=134)** You may look either at the side or at the back of the router where you'll see a slot for a SIM card.
>
> **[2:21](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=141)** Yes, that's where we'll need to insert the SIM.
>
> **[2:23](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=143)** If you don't see a SIM card slot at the back of the router, then you may want to look at the bottom of the router instead.
>
> **[2:29](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=149)** So you insert the SIM card, turn on the router and you're good to go.
>
> **[2:34](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=154)** Yes. No further configuration will be required.
>
> **[2:37](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=157)** Nice, right?
>
> **[2:39](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=159)** Next, let us talk about fixed wireless access.
>
> **[2:42](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=162)** With fixed wireless, a small antenna is installed on the customer's premises that is then directed towards the fixed wireless facility.
>
> **[2:51](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=171)** The fixed wireless service is designed to serve only a limited number of locations, hence, fixed wireless is found to provide a more reliable and faster service than cellular connectivity in some locations.
>
> **[3:04](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=184)** However, something to note about fixed wireless is that there needs to be a clear, unobstructed line of sight between the two antennas.
>
> **[3:14](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=194)** Remember that.
>
> **[3:15](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=195)** Now, in some cities, residents are able to wirelessly access the internet via municipal Wi-Fi.
>
> **[3:22](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=202)** The wireless access is offered either for free or for a small cost.
>
> **[3:27](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=207)** It's much like connecting to Wi-Fi or wireless internet but municipal Wi-Fi uses stronger radio and directional antennas, so to provide service to a greater range.
>
> **[3:37](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=217)** Now, I know municipal Wi-Fi is really more of a wireless LAN than a WAN but I just thought of sharing it with you as it is a nice thing to have in a city, right?
>
> **[3:47](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=227)** Well, great, we've just covered wireless WAN technologies.
>
> **[3:51](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=231)** For the next video, let's cover WAN via satellite.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[5G]] (4), [[Telecommunications]] (1)
> **Env Vars:** sim (8), wan (6), rssi (1), lan (1)
> **Definitions:** known as (2), is a  (2)
> **Code Identifiers:** esim (1), isim (1)
> **Cross-References:** next video (1)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Wireless WAN via Satellite](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=0)** - [Instructor] Have you heard of Starlink, Viasat in the US, or Sky Muster in Australia?
>
> **[0:06](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=6)** All these three provide network connectivity via satellite.
>
> **[0:10](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=10)** Yes, this is an example of WAN via satellite.
>
> **[0:15](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=15)** Satellite internet service is great for areas where DSL or cable Internet are not available, like in regional and remote areas.
>
> **[0:24](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=24)** To access satellite Internet services, the subscriber will typically need a satellite dish, a DVB-S modem, or a digital video broadcast satellite modem, and coaxial cables.
>
> **[0:36](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=36)** Now these items will typically be provided to you by the service provider as part of their kit.
>
> **[0:43](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=43)** For example, with Starlink, you'll typically receive a satellite dish, which can be a round dish if it is Gen 1 or rectangular dish if it is Gen 2.
>
> **[0:54](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=54)** There's also the Starlink [[Mesh]] Wi-Fi router along with the cables.
>
> **[0:59](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=59)** The DVB-S modem translates the signals from your home devices, which are then connected via coax cable to the satellite dish.
>
> **[1:07](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=67)** The satellite dish will then need to be aligned to the satellites in space, which will relay the signals to the ground stations of your service provider, enabling you to have access to the Internet.
>
> **[1:20](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=80)** Having said, a clear line of sight between your satellite dish and the satellite in space is needed.
>
> **[1:27](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=87)** That is why satellite dishes are typically placed on top of a roof or in an elevated location like a pole or a wall, so as to establish a clear connection.
>
> **[1:38](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=98)** Now satellite communication is not limited to just browsing the Internet, it can likewise be used for a private WAN communication, such as for connecting a remote site to the central headquarters.
>
> **[1:51](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=111)** Similar to satellite Internet connection at home, a VSAT, or very small aperture terminal satellite dish, is used, which is then connected to a modem router.
>
> **[2:01](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=121)** The VSAT is a small satellite dish that is typically 80 centimeters to 120 centimeters in diameter.
>
> **[2:10](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=130)** It is best placed on the roof of a building or the customer premises so as to have a good line of sight to the satellite in space.
>
> **[2:18](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=138)** The satellites in space that are used for Internet connectivity are usually in geosynchronous orbit.
>
> **[2:25](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=145)** These satellites are about 35,786 kilometers, or 22,236 miles, away from the Earth.
>
> **[2:36](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=156)** Far out!
>
> **[2:37](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=157)** They are geosynchronous, which means that they orbit the Earth following the Earth's rotation.
>
> **[2:44](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=164)** Here's one interesting fact.
>
> **[2:45](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=165)** Sky Muster in Australia uses two geostationary satellites.
>
> **[2:51](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=171)** Cool, right?
>
> **[2:52](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=172)** Now not all use GEO satellites, 'cause Starlink, for example, uses LEO satellites, or low earth orbit satellites instead.
>
> **[3:02](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=182)** LEO satellites refer to satellites in space that are at 2,000 kilometers away from the Earth or less.
>
> **[3:09](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=189)** Yes, they are nearer to the Earth than GEO satellites.
>
> **[3:14](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=194)** Because LEO satellites are nearer to Earth, then that means we'll need less power to transmit from our homes and offices, and less power means we can use smaller satellite dishes.
>
> **[3:26](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=206)** The smaller the dish, the lower the cost to build.
>
> **[3:30](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=210)** Nice, right?
>
> **[3:31](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=211)** But wait, there's more!
>
> **[3:33](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=213)** Because LEO satellites are closer to the Earth, that means the latency, or the time required for our signals to be sent from Earth to the satellite and back, is much less as compared to GEO satellites.
>
> **[3:46](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=226)** Sounds great!
>
> **[3:48](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=228)** What's the downside, you may ask?
>
> **[3:50](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=230)** Well, comparing LEO to GEO satellites, LEO satellites have a smaller coverage.
>
> **[3:56](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=236)** For that matter, we then need more LEO satellites forming a constellation, and that is why Starlink had to send thousands of satellites in space.
>
> **[4:06](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=246)** As for satellite communications in general, remember that we are sending signals to space.
>
> **[4:12](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=252)** That means our connection can be affected by so many things in space, like the weather perhaps, and even the solar storms.
>
> **[4:20](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=260)** Also, as with any network, there's also the threat of malicious actors listening, in which we need to be careful of as well.
>
> **[4:29](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=269)** Oh, if you are wondering about the things to consider for a WAN connection or Internet connectivity, don't worry, we'll cover that in the succeeding topics.
>
> **[4:37](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=277)** We have gone a long way with WAN connectivity.
>
> **[4:41](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=281)** We have even gone through space.
>
> **[4:43](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=283)** But hey, WAN technology is continuously evolving.
>
> **[4:47](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=287)** That is why, for the next section, we'll cover modern WAN solutions.
>
> **[4:52](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=292)** See you then!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Mesh]] (1)
> **Env Vars:** leo (7), wan (6), geo (4), dvb (2), vsat (2)
> **Analogies:** for example (2), such as (1), similar to (1)
> **Definitions:** is an  (1), is a  (1), means that (1)
> **Tools:** terminal (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)


### 4. Modern WAN

[↑ Back to Table of Contents](#table-of-contents)

#### [Dedicated internet access (DIA)](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=0)** - [Instructor] Let us now talk about dedicated broadband or dedicated internet access.
>
> **[0:06](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=6)** In earlier videos, we covered the various public WAN connections, such as cable, ADSL, and satellite internet.
>
> **[0:14](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=14)** These connections are available to the public wherein the bandwidth is shared with other local subscribers.
>
> **[0:21](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=21)** Since it is shared, the speed of your connection may then vary.
>
> **[0:25](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=25)** It may go up or down, depending on how busy the internet connection is.
>
> **[0:30](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=30)** Think of a water pipe.
>
> **[0:32](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=32)** Inside the water pipe is a consistently flowing amount of water.
>
> **[0:36](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=36)** The water is like the bandwidth for the internet in our analogy.
>
> **[0:41](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=41)** Now, say there are five subscribers in the area, including yourself.
>
> **[0:46](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=46)** During the less busy periods, you might get a good amount of bandwidth that is sufficient for your needs.
>
> **[0:52](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=52)** However, during the busy periods when everyone got their devices turned on, watching videos, downloading files, or conducting online meetings, then you may notice your internet speed slowing down.
>
> **[1:05](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=65)** Why?
>
> **[1:06](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=66)** That is because the water flowing through the pipe is shared with other clients, too.
>
> **[1:12](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=72)** Everyone gets a piece of the pie, so to speak.
>
> **[1:16](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=76)** Now, I know what you're thinking.
>
> **[1:18](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=78)** Why not have a pipe of our own?
>
> **[1:20](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=80)** Say you're running a business and you need a high-performing internet connection that doesn't lag when everyone else is connected.
>
> **[1:28](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=88)** Is it possible to have a non-shared connection with guaranteed speed?
>
> **[1:32](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=92)** The answer is yes.
>
> **[1:34](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=94)** That is what we refer to as dedicated internet access or DIA.
>
> **[1:40](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=100)** As the name implies, the network service is dedicated to you and to you alone.
>
> **[1:46](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=106)** The intranet connection is not shared with anyone else, hence, the actual bandwidth is guaranteed, nice, right?
>
> **[1:53](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=113)** If we think back to our analogy, this means that we'll have our own pipe separate from the others.
>
> **[2:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=120)** Hence, even when everyone else is busy connecting to the internet, you are not affected 'cause you got your own dedicated network.
>
> **[2:08](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=128)** So is it all just for speed?
>
> **[2:11](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=131)** Well, not at all.
>
> **[2:12](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=132)** DIA is great if you want a consistent and reliable internet speed.
>
> **[2:18](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=138)** Sure.
>
> **[2:19](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=139)** However, remember that DIA also provides a connection that is dedicated to you and your business alone.
>
> **[2:28](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=148)** Hence, it can also provide an added security.
>
> **[2:31](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=151)** How's that you ask?
>
> **[2:33](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=153)** That is because all your data transactions will not be going through the public pipe.
>
> **[2:38](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=158)** Rather, it'll pass only through your dedicated pipeline.
>
> **[2:43](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=163)** In short, it is private.
>
> **[2:46](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=166)** DIA also comes with an SLA, or service level agreement, with your service provider.
>
> **[2:52](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=172)** It's like a promise given to you by your ISP as the level of service that you will get, like the bandwidth, performance level, or the level of support that you may get from them.
>
> **[3:03](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=183)** All sounds great, right?
>
> **[3:05](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=185)** What's the catch?
>
> **[3:06](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=186)** Well, since it is a guaranteed, dedicated service, then it obviously also comes with a cost.
>
> **[3:13](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=193)** DIA is a more costly option than public broadband, and the services that you may get will all depend on what you agree with your service provider.
>
> **[3:23](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=203)** So in essence, it all boils down to what you really need.
>
> **[3:27](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=207)** Do you need a private dedicated network connection with a consistent, reliable internet speed?
>
> **[3:33](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=213)** If yes, then DIA or dedicated internet access might just be the option for you.

> [!info]- Semantic Content
>
> **Env Vars:** dia (6), wan (1), adsl (1), sla (1), isp (1)
> **Definitions:** is a  (3), means that (1)
> **Analogies:** such as (1), it's like (1)
> **Cross-References:** we covered (1)
> **Speakers:** - [instructor] (1)

#### [WAN via Fiber Optics](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=0)** - [Instructor] Fiber-optic cables can be used for sending packets over long distances, and it is also not prone to electromagnetic interference, making it an ideal medium for WAN connections.
>
> **[0:13](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=13)** And so in this video, let us cover WAN via fiber optics.
>
> **[0:18](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=18)** I know what you're thinking.
>
> **[0:20](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=20)** WAN or wide area network is for networks across geographic locations.
>
> **[0:25](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=25)** So for WAN to run over fiber optics, do we actually have fiber-optic cables that run across the globe?
>
> **[0:33](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=33)** Yes, we do. You don't believe me.
>
> **[0:35](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=35)** Here's the website that you may want to check.
>
> **[0:38](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=38)** This is the submarine cable map, which is a free and regularly updated resource from TeleGeography.
>
> **[0:45](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=45)** You see those colored lines on the map?
>
> **[0:48](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=48)** Each of those corresponds to a sub-C or submarine cable, which are basically fiber-optic cables that are laid on the ocean floor.
>
> **[0:57](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=57)** Pretty cool, right?
>
> **[0:58](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=58)** These fiber-optic cables are what we use for transmitting huge amounts of internet data across the world.
>
> **[1:07](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=67)** A nice thing about this website is that we can actually click on one of these links so as to get information about it.
>
> **[1:14](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=74)** Like, this one. Nice.
>
> **[1:18](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=78)** Now, fiber-optic cables are not just found under the sea, 'cause we also now use fiber-optic cables for WAN connectivity to households and businesses as well.
>
> **[1:28](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=88)** This system that is commonly used by service providers to bring fiber optic cabling to the end user, is known as PON or passive optical network.
>
> **[1:39](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=99)** Depending on where PON terminates, the system can be described as either FTTP or fiber to the premises, FTTB or fiber to the building, FTTC or fiber to the curb, or FTTN or fiber to the node.
>
> **[1:57](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=117)** Let us look at each of these, starting with FTTP.
>
> **[2:02](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=122)** FTTP refers to fiber to the premises, or in some countries they may refer to it as fiber to the home or FTTH.
>
> **[2:12](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=132)** That means the fiber-optic cable will run from the exchange up to the customer's premises.
>
> **[2:19](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=139)** Among the options, FTTP is the one that provides the highest potential speed.
>
> **[2:25](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=145)** Next is FTTB or fiber to the building.
>
> **[2:30](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=150)** As the name implies, the fiber-optic cable runs up to the central point in the building, whereas the [[Representational State Transfer (REST)|rest]] of the cable going to the customers will be via copper cable.
>
> **[2:41](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=161)** In terms of speed, this will be a bit slower than FTTP, but it can still offer a good level of internet speed.
>
> **[2:49](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=169)** Offering almost similar speed as with FTTB is FTTC or that is fiber to the curb, or in some instances also referred to as fiber to the cabinet.
>
> **[3:02](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=182)** With this option, the fiber-optic cable runs from the service provider central [[Microsoft Office|office]] and terminates in a small enclosure or distribution cabinet that is located on the edge of the street or the curb.
>
> **[3:15](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=195)** And then from the curb, a copper cable will then run up to the customer's premises.
>
> **[3:21](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=201)** Then we have FTTN or fiber to the node.
>
> **[3:26](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=206)** Can you guess up to what point the fiber will run?
>
> **[3:29](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=209)** Yep, as you might have guessed it, with FTTN, the fiber-optic cable runs up to the node, but what is a node you may ask?
>
> **[3:38](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=218)** A node is a connection hub or a cabinet exchange that is located near a neighborhood.
>
> **[3:45](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=225)** Now, when they say near, be aware that the node can be 50 meters or even 500 meters away from your premises.
>
> **[3:54](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=234)** Having said, your connection speed will depend on how far you are from the node.
>
> **[4:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=240)** The farther you are from the node, the slower the internet speed.
>
> **[4:05](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=245)** Finally, there's also HFC or hybrid fiber coaxial.
>
> **[4:10](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=250)** It's almost like FTTN, where you have fiber-optic cable that runs up to the node.
>
> **[4:16](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=256)** However, instead of the common copper wiring, existing coaxial cables are used instead.
>
> **[4:22](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=262)** Hence, it is called hybrid fiber coaxial.
>
> **[4:26](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=266)** If you remember, a coaxial cable is the cable that is used for cable TV or cable intranet.
>
> **[4:33](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=273)** Yep. That's the same type of cable that is used in HFC.
>
> **[4:37](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=277)** So what do we need for us to connect via fiber?
>
> **[4:41](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=281)** Aside from fiber-optic cable, that is.
>
> **[4:44](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=284)** For FTTx connections, such as for home and small businesses, the fiber-optic cable may terminate either from the service provider's box at your home or in a network node, for which case you only really need a copper cable from the box going to your modem router.
>
> **[5:02](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=302)** Having said, you still need to ensure that your modem router supports your connection type and the speed tier on your service plan.
>
> **[5:10](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=310)** For enterprises, if you want to terminate the fiber-optic cable to your network devices, then you need to check if they have optical network terminal or ONT.
>
> **[5:20](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=320)** Otherwise, you may need to install SFP modules so you can connect your fiber-optic cable directly to your network device.
>
> **[5:28](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=328)** SFP, by the way, stands for small form factor pluggable.
>
> **[5:33](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=333)** How about the protocols for WAN over fiber-optic cables?
>
> **[5:37](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=337)** Synchronous optical networking or SONET and synchronous digital hierarchy or SDH, are the standardized protocols that we use for fiber optic networks.
>
> **[5:48](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=348)** For point-to-point optical links over SONET or SDH, we use packet over SONET for WAN transport.
>
> **[5:56](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=356)** However, in today's time, we are now moving towards OTN or optical transport networking.
>
> **[6:03](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=363)** We have just covered how fiber-optic cables are used for global communications, for residential, and commercial use.
>
> **[6:11](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=371)** There's still more to cover on fiber optics and WAN.
>
> **[6:14](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=374)** In the next video, we'll cover ethernet WAN and dark fiber.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Microsoft Office|Office]] (1)
> **Env Vars:** wan (9), fttp (5), fttn (4), fttb (3), sonet (3)
> **CLI Commands:** node (10)
> **Definitions:** is a  (3), known as (1), refers to (1), is called (1), stands for (1)
> **Cross-References:** in the next (1)
> **Tools:** terminal (1)
> **UI Navigation:** click on (1)
> **Analogies:** such as (1)

#### [Ethernet WAN and Dark Fiber](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=0)** - Let us continue our discussion on WAN.
>
> **[0:03](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=3)** In this video, we will cover Ethernet WAN and dark fiber.
>
> **[0:08](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=8)** Ethernet, defined under IEEE 802.3, was originally developed for LAN or local area networks.
>
> **[0:16](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=16)** However, with the advent of fiber optic cables, we now have Ethernet standards that can provide high speeds at long distances like the 1000Base-ZX, which is said to have gigabit transmission to at least 70 kilometers.
>
> **[0:33](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=33)** Whoa!
>
> **[0:34](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=34)** So what does that mean for us?
>
> **[0:37](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=37)** Well, it means that we may not be able to extend the range of our local network to farther distances beyond our current location and can even span across countries.
>
> **[0:48](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=48)** This is Ethernet WAN, also known as wide area Ethernet.
>
> **[0:55](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=55)** So why should we go for Ethernet WAN?
>
> **[0:57](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=57)** Firstly, with Ethernet WAN, our network goes from the Ethernet local network to the Ethernet wide area network.
>
> **[1:06](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=66)** Yes, it stays in the Ethernet.
>
> **[1:10](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=70)** That means we no longer need to convert to various WAN technologies like frame relay or ATM, and that is a reduction in administration tasks.
>
> **[1:21](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=81)** Less administration means less cost.
>
> **[1:24](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=84)** Less cost means we'll have savings, which we can then use to further expand our network with other sites and even to the internet.
>
> **[1:34](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=94)** That is easy integration.
>
> **[1:36](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=96)** We'll also now be able to host VoIP as well as streaming and broadcast videos more easily.
>
> **[1:42](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=102)** Well, that is as compared to TDM or frame relay networks.
>
> **[1:46](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=106)** That is business productivity.
>
> **[1:49](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=109)** By the way, Ethernet WAN is gaining popularity that it is now commonly used to replace frame relay and ATM networks.
>
> **[1:58](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=118)** Pretty cool, right?
>
> **[2:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=120)** But how can we connect geographically separated sites?
>
> **[2:03](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=123)** Like does it mean we need to add new fiber optic cables underground or under the sea?
>
> **[2:09](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=129)** Not really.
>
> **[2:11](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=131)** If the business wants to install new optical fibers, then yes, sure they can.
>
> **[2:16](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=136)** But you see, there exists some optical fibers which remain unused and are available for purchase.
>
> **[2:23](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=143)** These are what we call dark fiber.
>
> **[2:27](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=147)** They're called dark fiber 'cause there's no light passing through it since they're unused.
>
> **[2:32](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=152)** Get it?
>
> **[2:32](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=152)** No light, hence, they are dark.
>
> **[2:35](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=155)** The dark fibers are available for sale on the market and are the ones that can be used by end user enterprises so as to expand their Ethernet networks.
>
> **[2:45](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=165)** Dark fiber can likewise be used by network operators for redundancy in their networks.
>
> **[2:52](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=172)** When you purchase a dark fiber, that's yours.
>
> **[2:55](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=175)** The entire fiber and its bandwidth will be yours to own and manage.
>
> **[3:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=180)** You can have full autonomy.
>
> **[3:03](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=183)** There's no other traffic than your own, and it is physically separated from other networks.
>
> **[3:09](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=189)** So you can be [[Representational State Transfer (REST)|rest]] assured that your data is secure.
>
> **[3:14](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=194)** So for businesses who want to have full control over their network design and be able to have private and secure connections as well, then dark fiber might be an option for you.
>
> **[3:25](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=205)** Whew!
>
> **[3:26](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=206)** We have just covered Ethernet WAN and dark fiber, but there's one more modern WAN solution that we all need to discuss.
>
> **[3:34](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=214)** What's that?
>
> **[3:35](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=215)** It's SD-WAN and we'll cover that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** wan (10), atm (2), ieee (1), lan (1), tdm (1)
> **Definitions:** means that (1), known as (1), is a  (1)
> **Versions:** 802.3 (1)
> **Prerequisites:** install (1)
> **Speakers:** - let (1)

#### [Software-defined WAN (SD-WAN)](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/software-defined-wan-sd-wan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/software-defined-wan-sd-wan?u=76281980&t=0)** - [Instructor] Let us now talk about SD-WAN.
>
> **[0:03](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/software-defined-wan-sd-wan?u=76281980&t=3)** SD-WAN stands for software-defined wide area network.
>
> **[0:08](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/software-defined-wan-sd-wan?u=76281980&t=8)** As the name implies, it is a WAN implementation that is designed, deployed, and managed all on a software level.
>
> **[0:16](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/software-defined-wan-sd-wan?u=76281980&t=16)** Don't get me wrong, of course, we do still need infrastructure in place, but that will only be on the side of the service provider.
>
> **[0:23](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/software-defined-wan-sd-wan?u=76281980&t=23)** The infrastructure is what we refer to as the underlay.
>
> **[0:28](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/software-defined-wan-sd-wan?u=76281980&t=28)** You don't see it on your premises, but it's there, somewhere out there.
>
> **[0:32](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/software-defined-wan-sd-wan?u=76281980&t=32)** To manage the network, we'll simply use software.
>
> **[0:36](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/software-defined-wan-sd-wan?u=76281980&t=36)** Hence, it is software-defined.
>
> **[0:39](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/software-defined-wan-sd-wan?u=76281980&t=39)** The software on top of the underlay is what we refer to as the overlay.
>
> **[0:44](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/software-defined-wan-sd-wan?u=76281980&t=44)** So in essence, an SD-WAN is a type of an overlay network that provides a wide area network.
>
> **[0:52](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/software-defined-wan-sd-wan?u=76281980&t=52)** But how do we do it?
>
> **[0:54](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/software-defined-wan-sd-wan?u=76281980&t=54)** Again, it is software-defined.
>
> **[0:57](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/software-defined-wan-sd-wan?u=76281980&t=57)** That means behind the scenes are scripts of codes to create a virtual network.
>
> **[1:02](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/software-defined-wan-sd-wan?u=76281980&t=62)** Scripts are also used to automate tasks and to orchestrate how multiple devices will work together to form a secure and efficient network.
>
> **[1:12](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/software-defined-wan-sd-wan?u=76281980&t=72)** But why?
>
> **[1:14](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/software-defined-wan-sd-wan?u=76281980&t=74)** Why are we now going for SD-WAN?
>
> **[1:16](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/software-defined-wan-sd-wan?u=76281980&t=76)** You see, it is not easy to manage lots of network infrastructure all on site.
>
> **[1:22](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/software-defined-wan-sd-wan?u=76281980&t=82)** You need the space, power, on top of constantly managing or upgrading the devices.
>
> **[1:28](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/software-defined-wan-sd-wan?u=76281980&t=88)** If we move these infrastructure to the cloud, then that leaves the business with only just the network configuration to worry about.
>
> **[1:36](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/software-defined-wan-sd-wan?u=76281980&t=96)** Now, how about the network configuration you ask?
>
> **[1:40](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/software-defined-wan-sd-wan?u=76281980&t=100)** That is what we now manage via software.
>
> **[1:43](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/software-defined-wan-sd-wan?u=76281980&t=103)** As shared earlier, SD-WAN makes it all easier to deploy, operate, and manage our networks.
>
> **[1:51](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/software-defined-wan-sd-wan?u=76281980&t=111)** We can likewise now move our traffic to lower cost network links, for example, all from a distance, virtually.
>
> **[1:59](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/software-defined-wan-sd-wan?u=76281980&t=119)** SD-WAN has been and still is a game changer.
>
> **[2:04](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/software-defined-wan-sd-wan?u=76281980&t=124)** It enabled us to have networks that are more flexible and responsive to business needs as the world transitions from [[Hardware]] to cloud-based technology.
>
> **[2:14](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/software-defined-wan-sd-wan?u=76281980&t=134)** And that is SD-WAN in a nutshell.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1)
> **Env Vars:** wan (8)
> **Definitions:** is a  (3), stands for (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [LoRaWAN](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=0)** - [Instructor] Let us now talk about LoRaWAN.
>
> **[0:03](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=3)** LoRaWAN stands for Long-Range Low-Power Wide Area Network.
>
> **[0:08](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=8)** It's developed and maintained by the LoRa Alliance, and it's officially approved as a standard for low-power WAN by the International [[Telecommunications]] Union in December of 2021.
>
> **[0:21](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=21)** Wait, 2021 you say?
>
> **[0:23](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=23)** Yes, it is quite recent.
>
> **[0:26](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=26)** So again, LoRaWAN is a standard for low-power WAN.
>
> **[0:31](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=31)** Eh, what's low-power WAN?
>
> **[0:34](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=34)** Well, think of devices that are low powered like devices that run on battery perhaps, which connect to the internet or over long ranges.
>
> **[0:44](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=44)** Got any ideas?
>
> **[0:45](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=45)** Say your smart devices or the sensors used in smart cities and industries.
>
> **[0:51](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=51)** The sensor chips used in agriculture for plants, or those used in cattles for monitoring.
>
> **[0:57](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=57)** The smart metering devices for water, gas, or electricity and so on and so forth.
>
> **[1:04](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=64)** If you really ponder about it, just think of [[IoT]] or [[IoT|Internet of things]] or the machine to machine connections.
>
> **[1:11](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=71)** That is where LoRaWAN comes in.
>
> **[1:14](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=74)** But then we said long-range.
>
> **[1:17](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=77)** How long is that range?
>
> **[1:18](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=78)** Well, it depends on whether there is line of sight and if the gateway is located indoor or outdoor.
>
> **[1:25](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=85)** For indoors, 500 meters, give or take.
>
> **[1:29](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=89)** But outdoors, the distance can run from one kilometers up to 10 kilometers.
>
> **[1:36](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=96)** However, if you stop in the air, the world record as of this writing is 1,336 kilometers or 830 miles.
>
> **[1:47](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=107)** I told you it's the long range.
>
> **[1:50](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=110)** A LoRaWAN end device can be a sensor, an actuator or both.
>
> **[1:55](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=115)** They are battery operated and wirelessly connected to the LoRaWAN network through gateways.
>
> **[2:01](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=121)** LoRaWAN can be operated on ISM bands, 2.4 gigahertz bands and even on license-free spectrum.
>
> **[2:11](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=131)** If you'd like to learn more about the various frequency plans by country, then you may want to check out this link.
>
> **[2:20](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=140)** And so the gateway receives the LoRaWAN messages from the end devices and forwards them to the network server.
>
> **[2:28](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=148)** It sends it using a back home network like through fiber-optic cables, 2.4 gigahertz radio links, or even via cellular network.
>
> **[2:37](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=157)** It is the network server which manages the entire LoRaWAN network.
>
> **[2:43](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=163)** If you think of the addressing, encryption, and authentication, it all happens here with the network server.
>
> **[2:51](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=171)** Then the data will be collected by the application server, which then processes the data depending on how you need it to be used.
>
> **[2:59](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=179)** And yes, it is actually possible to have multiple application servers.
>
> **[3:04](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=184)** So we have just covered LoRaWAN and its architecture.
>
> **[3:08](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=188)** Thinking about it, the endpoints in the network are no longer limited to computers and servers alone, 'cause we also now have sensors and actuators that are also now connected through the intranet.
>
> **[3:20](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=200)** The playing field, the wide area network is now broadened.
>
> **[3:25](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=205)** And therefore, do we need to consider them as well in our WAN implementations.
>
> **[3:30](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=210)** Wondering about what to consider in WAN?
>
> **[3:32](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=212)** That is what we'll cover next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Telecommunications]] (1), [[IoT]] (1), [[IoT|Internet of things]] (1)
> **Env Vars:** wan (5), ism (1)
> **Versions:** 2.4 (2)
> **Definitions:** stands for (1), is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [WAN consideration](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=0)** - [Instructor] We have learned quite a number of things about WAN in the earlier videos.
>
> **[0:04](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=4)** And so in this video, let us use that knowledge in choosing the appropriate WAN solution for residential and business use.
>
> **[0:13](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=13)** Let's start.
>
> **[0:15](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=15)** Say we'd like to have WAN connectivity for a small [[Microsoft Office|office]] or home office network.
>
> **[0:21](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=21)** First question to ask is: What's available in your area?
>
> **[0:24](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=24)** Yep, it does matter.
>
> **[0:26](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=26)** You see, as much as we've talked about the various WAN connectivity options, like DSL, cable, wireless, satellite, or fiber, not all of these options might be available for you.
>
> **[0:37](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=37)** And so it is worthwhile to first check what your options are.
>
> **[0:42](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=42)** For fiber connections, are you able to have FTTP?
>
> **[0:46](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=46)** Then that would be great.
>
> **[0:47](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=47)** Or maybe you'll have FTTC or FTTB instead.
>
> **[0:51](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=51)** Then, that's okay.
>
> **[0:53](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=53)** But if it would be FTTN, or fiber-to-the-node, then you need to know how far you are from the node, right?
>
> **[1:01](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=61)** For mobile broadband, is there a good [[5G]] connection, perhaps?
>
> **[1:05](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=65)** If yes, then that would be awesome.
>
> **[1:08](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=68)** If 4G's available, then that's all right, I would say.
>
> **[1:11](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=71)** But compare the speeds with DSL or cable options as well.
>
> **[1:15](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=75)** In that way, you can assess which is appropriate for you.
>
> **[1:20](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=80)** Say, mobile communication is not great in your location, and there's no cable internet nor fiber that is available.
>
> **[1:27](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=87)** Then you may want to check if fixed wireless access is available instead.
>
> **[1:32](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=92)** If fixed wireless access is an option, them remember that the antenna from your home or office will need to have a clear line of sight to the fixed wireless facility.
>
> **[1:44](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=104)** And how about satellite?
>
> **[1:46](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=106)** Well, if you're in a remote or rural area with access to clear skies, then satellite might be an option for you.
>
> **[1:53](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=113)** Yep, it doesn't matter where you are.
>
> **[1:56](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=116)** Even if you are in a far-flung area, the satellite can reach you, as long as there is clear access to the skies.
>
> **[2:05](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=125)** Now, how about for business and enterprises?
>
> **[2:08](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=128)** Well, almost the same thing in a sense that you need to first know what options are available for you.
>
> **[2:14](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=134)** However, instead of just having one internet connection, you need to consider having a backup connection as well.
>
> **[2:21](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=141)** 'Cause what if your primary line goes down?
>
> **[2:24](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=144)** Will you then just accept that it is the end for your business?
>
> **[2:27](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=147)** Of course not.
>
> **[2:29](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=149)** That is why you need to consider having redundancy or backup plan as well.
>
> **[2:34](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=154)** Remember our discussion on WAN topologies?
>
> **[2:38](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=158)** Maybe, instead of just having a single home topology, you may then consider having dual home topology connecting not just one, but perhaps, two service providers instead.
>
> **[2:51](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=171)** Further, think of how your business runs.
>
> **[2:54](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=174)** Will you be connecting only to a single branch or to many?
>
> **[2:57](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=177)** Now, the branches that you need to connect to, are they local, regional, or global?
>
> **[3:03](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=183)** Do you need secure lines?
>
> **[3:05](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=185)** Or are you geared more towards lowering your expenses?
>
> **[3:09](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=189)** All these matter, you know?
>
> **[3:11](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=191)** Say you need to connect to a nearby branch, and you need the connection to be fast and secure.
>
> **[3:16](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=196)** Then you may want to consider a private leased line or dedicated broadband.
>
> **[3:21](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=201)** However, if you will be connecting many remote offices, then [[Multiprotocol Label Switching (MPLS)|MPLS]] might be right for you.
>
> **[3:28](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=208)** But if you want to reduce the cost, then a public WAN could be an option.
>
> **[3:32](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=212)** And then, you may also want to consider having a VPN as well for added security.
>
> **[3:38](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=218)** Which then brings me to the second consideration: cost.
>
> **[3:43](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=223)** Say we have now found out as to what are the available options for you.
>
> **[3:47](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=227)** Next question is: What's your budget?
>
> **[3:51](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=231)** For small office, home office networks, this means comparing the various service plans from different service providers.
>
> **[3:58](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=238)** You will see that different costs account for different speeds and service levels as well.
>
> **[4:04](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=244)** It is now up to you to weigh or assess the options and select which is the most appropriate for you.
>
> **[4:11](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=251)** Think of the things that will drive your internet usage.
>
> **[4:14](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=254)** Will it just be email and internet searches?
>
> **[4:17](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=257)** Then lower-tier plans might be all right.
>
> **[4:20](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=260)** However, if you'll be doing lots of video streaming, online gaming, and upload or download of gigabits of files, then you may want to consider the upper-tier plans instead.
>
> **[4:31](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=271)** Also, think of the number of devices that will be connecting to the internet.
>
> **[4:36](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=276)** The network traffic will be less if it is just one PC.
>
> **[4:40](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=280)** However, if there are more devices that will be connecting at the same time, then obviously, the network traffic will increase as well.
>
> **[4:47](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=287)** The same thing for businesses.
>
> **[4:50](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=290)** But aside from speed, also consider the level of service that you will get.
>
> **[4:55](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=295)** Like, what's the promised uptime?
>
> **[4:57](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=297)** Is it 99.99% availability, for example?
>
> **[5:02](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=302)** How quick is the expected response in case there would be an incident?
>
> **[5:06](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=306)** What's the reputation of the service provider?
>
> **[5:08](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=308)** Is it easy to contact them?
>
> **[5:10](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=310)** Or maybe there's a dedicated service manager, perhaps.
>
> **[5:14](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=314)** And so on and so forth.
>
> **[5:16](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=316)** Read the service level agreement, and ensure that you are aligned with all of the clauses that are stated in there.
>
> **[5:24](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=324)** You may also want to think ahead in the future.
>
> **[5:27](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=327)** What do you project your business growth will be like?
>
> **[5:30](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=330)** Sure, your one solution might be sufficient for your current needs, but do you see your network growing in a few months' time?
>
> **[5:37](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=337)** It's either that the size of the network increases or it's with your network traffic.
>
> **[5:43](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=343)** Either way, also consider [[Scalability]] when selecting a WAN option, for which SD-WAN might be good for you.
>
> **[5:52](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=352)** As you may see, there are many different factors to consider when choosing an appropriate WAN connection.
>
> **[5:59](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=359)** It is important to compare and assess the various options so as to see which of them best meets the requirements for your home or office network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (6), [[5G]] (1), [[Multiprotocol Label Switching (MPLS)|Mpls]] (1), [[Scalability]] (1)
> **Env Vars:** wan (9), dsl (2), fttp (1), fttc (1), fttb (1)
> **CLI Commands:** node (2)
> **Versions:** 99.99 (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [WAN security and optimization](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=0)** - [Presenter] Say, we now have a WAN connection.
>
> **[0:03](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=3)** What's next?
>
> **[0:04](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=4)** Well, the next step is for us to think of how to secure and optimize our WAN connection.
>
> **[0:10](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=10)** Let us start with WAN security.
>
> **[0:13](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=13)** For site-to-site connections, and even for remote access, one of the most common ways to secure the WAN traffic is by using VPN, or that is the [[Virtual Private Network (VPN)|virtual private network]].
>
> **[0:26](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=26)** Think of it like having a virtual tunnel between your sites.
>
> **[0:29](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=29)** All traffic between the sites will then pass through the virtual tunnel, hence, a virtual private network.
>
> **[0:37](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=37)** You can also add encryption and authentication to a VPN connection so as to keep your data more secure.
>
> **[0:44](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=44)** However, with added security measures, it will add overhead to the network traffic as well.
>
> **[0:50](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=50)** That is why sometimes, not always, you may notice that the network connection can be a bit slower when using a VPN.
>
> **[0:59](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=59)** For that matter, it is important to also compare and assess which is the right VPN solution for you.
>
> **[1:07](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=67)** Now, aside from VPNs, you also need to check the security of your network devices.
>
> **[1:12](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=72)** For small [[Microsoft Office|office]], home office networks, check your modem router.
>
> **[1:17](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=77)** In terms of physical security, where is the modem router located?
>
> **[1:21](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=81)** Who can access it?
>
> **[1:22](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=82)** Is it kept in a secure place?
>
> **[1:24](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=84)** All right, let us now think of logical security.
>
> **[1:27](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=87)** Are you still using the default username and password for the device?
>
> **[1:31](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=91)** Hopefully not.
>
> **[1:32](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=92)** Now, think of the CIA triad.
>
> **[1:35](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=95)** Confidentiality.
>
> **[1:36](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=96)** What encryption and authentication measures are in place?
>
> **[1:40](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=100)** Integrity.
>
> **[1:41](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=101)** Do you use hashing or digital certificates?
>
> **[1:45](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=105)** How about in terms of availability?
>
> **[1:48](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=108)** Do you have a backup?
>
> **[1:49](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=109)** That's in terms of backup device, backup of your config, and backup power as well, like UPS or uninterruptible power supply 'cause they're all important, you know?
>
> **[2:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=120)** Also check if your device has other security features like firewall, content filtering, MAC address filtering, or VPN perhaps that you can use.
>
> **[2:12](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=132)** For business and enterprises, aside from your security appliances, you also need to ensure that policies and procedures are in place for your organization, like policies for remote access and internet use.
>
> **[2:25](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=145)** Also, think of policies for incident handling and reporting, plus guidelines for communicating with your partnered vendors and service provider.
>
> **[2:35](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=155)** All right, say you've now secured your network.
>
> **[2:38](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=158)** How can we optimize it?
>
> **[2:40](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=160)** I mean, we've got lots of network traffic going through, right?
>
> **[2:44](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=164)** How can we manage it in such a way that the important network traffic, like work-related data transfer, is not affected by music streaming, for example?
>
> **[2:53](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=173)** Well, there are various techniques that we can use.
>
> **[2:56](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=176)** First that we can employ is traffic shaping.
>
> **[2:59](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=179)** It is a QoS or a quality of service technique where we can prioritize network traffic, either based on IP address or the application or the protocol.
>
> **[3:10](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=190)** Say we would like to prioritize VoIP traffic followed by data transfers and the list priority is email.
>
> **[3:18](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=198)** Can we do that?
>
> **[3:19](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=199)** Yeah.
>
> **[3:20](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=200)** In that way, the VoIP traffic will be prioritized and will not be affected by when there's too much dotted traffic, just in our example.
>
> **[3:29](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=209)** Nice, right?
>
> **[3:30](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=210)** Meanwhile, please be aware that in some SOHO routers as well as in some other network devices, you might see this capability marked or named as QoS instead of traffic shaping.
>
> **[3:44](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=224)** Just letting you know so that you are aware.
>
> **[3:47](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=227)** As for the WAN connections in between sides, we can streamline the network traffic through any of the following or combination thereof.
>
> **[3:55](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=235)** We've got data compression, deduplication, local caching, and protocol optimization.
>
> **[4:01](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=241)** Let us talk about each of them, starting with data compression.
>
> **[4:06](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=246)** This technique uses compression [[Algorithms]] such as ZIP or RAR, so as reduce the size of the data before sending it over the WAN network.
>
> **[4:16](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=256)** Next, we have deduplication.
>
> **[4:18](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=258)** As the name implies, with deduplication, it avoids sending the same traffic across the WAN.
>
> **[4:25](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=265)** In case of having redundant data, it sends references instead rather than the actual data.
>
> **[4:32](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=272)** Next, we got local caching or proxy.
>
> **[4:35](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=275)** Say we got a file that we keep on accessing over and over again.
>
> **[4:39](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=279)** Ain't it better if we simply have that file stored locally?
>
> **[4:43](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=283)** That is caching.
>
> **[4:44](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=284)** DNS and HTTP are just a couple of examples that use this technique.
>
> **[4:50](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=290)** Finally, we got protocol optimization.
>
> **[4:53](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=293)** Think of it as doing some technical tweaks to the network traffic, like adjusting the transmitting window size or by being selective on which packets to acknowledge, or by optimizing the congestion window size.
>
> **[5:05](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=305)** Told you, it's technical, right?
>
> **[5:08](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=308)** The important thing to remember is that with protocol optimization, we are able to mitigate the effects of latency over long distances, hence, be able to improve the application response times.
>
> **[5:21](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=321)** Great!
>
> **[5:21](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=321)** We have just covered a few of the things that you can take so as to secure and optimize your WAN connection.
>
> **[5:28](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=328)** It's your turn now to apply these measures to your own network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtual Private Network (VPN)|Virtual private network]] (2), [[Microsoft Office|Office]] (2), [[Algorithms]] (1)
> **Env Vars:** wan (8), vpn (5), cia (1), ups (1), mac (1)
> **Analogies:** think of it like (1), for example (1), such as (1), think of it as (1)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)
> **Speakers:** - [presenter] (1)

#### [Next steps](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/next-steps?u=76281980&t=0)** - [Instructor] Yay, you've just completed the course on wide area networks.
>
> **[0:04](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/next-steps?u=76281980&t=4)** Hopefully you now have a better understanding of what a wide area network is, the various one options for public and private connectivity, as well as the different considerations when selecting a WAN connection.
>
> **[0:17](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/next-steps?u=76281980&t=17)** The next step is for you to explore further and apply what you've just learned.
>
> **[0:22](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/next-steps?u=76281980&t=22)** Having said, if you are interested in creating a simulated WAN network, then you may want to check my course on Cisco Modeling Labs.
>
> **[0:30](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/next-steps?u=76281980&t=30)** Ooh, by the way, I also have other courses here on [[LinkedIn]] Learning that might interest you as well, so check them out too.
>
> **[0:38](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/next-steps?u=76281980&t=38)** Meanwhile, I invite you to connect with me here on LinkedIn and follow me at my YouTube channel.
>
> **[0:43](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/next-steps?u=76281980&t=43)** Feel free to drop me a message as I'd be happy to hear from you wherever you are across the globe.
>
> **[0:49](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/next-steps?u=76281980&t=49)** And with that, I wish you all the best in life and in your networking career.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2)
> **Env Vars:** wan (2)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Jarrel Rivera]]

## Resources

- Exercise files available

## Skills Covered

- Network Administration

## Path Context

### In [[Network Administration- Build Core Skills for Network Management and Security]]
← [[Networking Foundations- Local Area Networks (LANs)]] | **4 of 6** | [[Learning Network Troubleshooting- Practical Network Diagnostics and Solutions]] →

## Appears In

- [[Network Administration- Build Core Skills for Network Management and Security]]

## Related Courses

_Courses sharing skills:_

- [[Cisco Networking Foundations- Wireless Networks, Services, Security, and Virtualization]] — Network Administration
- [[MPLS Segment Routing]] — Network Administration
- [[Server Administration Essential Training]] — Network Administration
- [[Protecting Your Network with Open-Source Software]] — Network Administration
- [[Networking Foundations Networking Basics]] — Network Administration

---

[↑ Back to top](#)