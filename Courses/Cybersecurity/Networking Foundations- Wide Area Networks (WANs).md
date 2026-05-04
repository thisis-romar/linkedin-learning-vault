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
  - '[Network Administration- Build Core Skills for Network Management and Security](../../Paths/Cybersecurity/Learning%20Paths/Network%20Administration-%20Build%20Core%20Skills%20for%20Network%20Management%20and%20Security.md)'
prev_courses:
  - '[Networking Foundations- Local Area Networks (LANs)](Networking%20Foundations-%20Local%20Area%20Networks%20(LANs).md)'
next_courses:
  - '[Learning Network Troubleshooting- Practical Network Diagnostics and Solutions](Learning%20Network%20Troubleshooting-%20Practical%20Network%20Diagnostics%20and%20Solutions.md)'
path_nav: '[{"path":"Network Administration- Build Core Skills for Network Management and Security","position":4,"total":6,"prev":"Networking Foundations- Local Area Networks (LANs)","next":"Learning Network Troubleshooting- Practical Network Diagnostics and Solutions"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/network-administration
status: not-started
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/introduction?u=76281980&t=0)** - [Jarrel] Ever thought of your internet connection at home or the [office](../../Skills/Web%20Development/Microsoft%20Office.md), like your DSL lines, VPN, lease lines, or perhaps the older technologies of dial up and frame relay? These are all WAN technologies, not the number one, but WAN as in wide area network, and that is what this course is all about. In this course, we'll first introduce you to the concept of wide area network. Then we'll cover the various ways and means of connecting to the intranet. Finally, we'll discuss what you need to consider when connecting over the intranet, like the bandwidth, security reconnection, and the quality of service. Sounds exciting, isn't it? Hi, I'm Jarrel Rivera, and it is my pleasure to be your instructor in learning wide area networks. Let's start.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1)
> **Env Vars:** wan (2), dsl (1), vpn (1)
> **Speakers:** - [jarrel] (1)

#### [What you should know](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-you-should-know?u=76281980&t=0)** - [Instructor] In this course, we will be covering topics related to networks and internet connectivity. For that matter, it is ideal if you're already familiar with the terms like ISP or the internet service provider, routers, the cloud, and the IP address. In any case, you can refer it to the course handout for terms and definitions related to the wide area network, including the links to external websites that we'll show you in this course. There may be some concepts that you may already know, but hey, stick around. There might be something new for you to learn. Having said, if you are all good to start, then let's proceed.

> [!info]- Semantic Content
>
> **Env Vars:** isp (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to WAN

[↑ Back to Table of Contents](#table-of-contents)

#### [What is WAN?](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980&t=0)** - [Instructor] The wide area network or WAN refers to a network that covers a large geographic area, which may even span even across countries or continents. The internet that we know, or the worldwide web is a good example of WAN. Within a WAN, we can have many other networks that are connected to each other. Think of it as a network of many other networks. Say you've got a network in the US, which is then connected to a network in Australia and Northern Singapore and the UK. That's WAN. That means with WAN, we can access network devices or servers that are remotely connected, even on the other side of the globe. Imagine that! To ensure that remote networks will be able to communicate properly with each other, we have the WAN Standards. The following are the authorities that define the WAN access standards. We've got the TIA or the [Telecommunications](../../Skills/Network%20and%20System%20Administration/Telecommunications.md) Industry Association, EIA or the Electronic Industries Alliance, ISO or the International Organization for Standardization, and the IEEE or the Institute of Electrical and [Electronics](../../Skills/Software%20Development/Electronics.md) Engineers. The WAN standards describe both the physical and data link requirements for a WAN connection that covers the layers one and two of the OSI Model. At layer one or the physical layer, we got the media type and the interface specifications. Meanwhile, at layer two
>
> **[1:34](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/what-is-wan?u=76281980&t=94)** or the datalink layer is where we got the various WAN protocols. Wondering about the various WAN protocols? Don't worry, we'll cover them separately in the succeeding videos. The first known wide area network was created in the late 1950s by the US Air Force. It was used to interconnect sites in the Sage Radar Defense System, connecting a huge number of dedicated phone lines, telephones, and modems. In today's time, we use WAN to interconnect sites and companies across different parts of the world. We also use WAN for remote connectivity, much like when we work from home or when we attend teleconferences in different countries at different time zones. When we search the internet, the servers hosting the websites that we visit could also be in a far off place. That is also WAN in action. As you may see with WAN or the Wide Area Network, we are able to connect multiple networks together. Otherwise, the local networks will be isolated from each other. But how can we connect a network to another network? What could it look like? That is called WAN Topology, and we'll cover that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Telecommunications](../../Skills/Network%20and%20System%20Administration/Telecommunications.md) (1), [Electronics](../../Skills/Software%20Development/Electronics.md) (1)
> **Env Vars:** wan (16), tia (1), eia (1), iso (1), ieee (1)
> **Definitions:** refers to (1), is a  (1), is called (1)
> **Analogies:** think of it as (1), imagine (1)
> **Speakers:** - [instructor] (1)

#### [WAN topologies](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=0)** - [Presenter] A network topology refers to how the devices in the network are connected to each other. For WAN or the wide area network, this may refer to how various sites are connected or how our network is connected to various internet service providers. There are five common WAN topologies. These are point-to-point, hub-and-spoke, dual-homed, full [Mesh](../../Skills/Software%20Development/Mesh.md), and partial mesh. Let us start with the point-to-point topology. A point-to-point topology, as the name implies, refers to a point-to-point connectivity between two endpoints. In this topology, the packets from one site are sent to another site as if there is a direct link between the two. Typically, this topology involves having a dedicated lease line connection like a T3 or E3 line, or a private connection, much like with A VPN. Wondering about dedicated lease lines or VPN perhaps? Don't worry, we'll cover them separately in the succeeding videos. Now, a point-to-point topology is great for high speed private connectivity between two nodes. But what if we got multiple sites? For such cases, we can use the hub-and-spoke or star topology instead. In a star topology, we have multiple sites connecting to a central point. The central point is referred to as the hub, whereas the end points are referred to as the spoke. Hence, a star topology
>
> **[1:32](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=92)** is also referred to as a hub-and-spoke topology. The hub is not the network device hub that you may know. In this topology, the hub simply refers to the central point where all the spokes are connected to. Say, we got branches A, B, and C, which all need to connect to our head [office](../../Skills/Web%20Development/Microsoft%20Office.md). Our branches are the spokes and the head office is the hub. In some references, this topology can also be referred to as a single-homed topology because all spokes are connected to a single home. Get it? Single home. What if we want redundancy such that instead of having a single point where all other sites are connecting to, we'll have not one, but two central points instead. Can we do that? Well, yes, of course. This is known as a dual-homed topology. In a dual-homed topology, the spokes are redundantly connected to two hubs. If you think about it, this topology can be more expensive than a single-homed 'cause there are now two hubs. Plus, there are more connections that you will need to establish. This can be more complex as well than a single-homed, but if you want to implement network redundancy and load balancing, then dual-homed topology could be the option for you. Now, I know what you're thinking. Do we really need to connect to a hub? Can't we just connect one site to all other sites? Yes. We can also do that.
>
> **[3:07](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-topologies?u=76281980&t=187)** This is referred to as a full mesh. In a full mesh topology, each site is connected to all other sites. This is great in terms of redundancy, but this also means that we'll need lots of connections. Say we got four sites, then using the formula of N things, N minus one divided by two, then that means we'll need six connections. Not bad, right? But what if we got 10? Then that leads us to 45 connections. Imagine if we got more. Yikes! Another option is a partial mesh topology. With this topology, we will still have redundancy with multiple links, but we now use less number of connections as compared to a full mesh. In summary, every network is different. Each business will have their different needs. It is important that we know the various WAN topologies, so we can select the most proper way of how we can connect our sites in a wide area network. Take your time to review the different WAN topologies that we've just covered and see if you can identify which is appropriate for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mesh](../../Skills/Software%20Development/Mesh.md) (6), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (2)
> **Definitions:** refers to (3), is a  (2), known as (1), means that (1)
> **Env Vars:** wan (4), vpn (2)
> **UI Navigation:** select the (1)
> **Analogies:** imagine (1)
> **Speakers:** - [presenter] (1)

#### [WAN terminologies](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-terminologies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-terminologies?u=76281980&t=0)** - [Instructor] There are various terminologies that are used in a WAN environment. To better understand this, let us look at this topology. On the left, we have the customer network connecting to the internet service provider or ISP on the right. The ISP or the internet service provider is the company that facilitates access to the internet, much like AT&T and Verizon in the US, or Telstra in Australia. The set of [Hardware](../../Topics/Hardware.md) and devices on the side of the customer is collectively known as the CPE or the customer premises equipment. This may include devices that are either owned by the customer or the business, or in some cases the devices can be leased to the customer by the service provider. On the other hand, the wiring, hardware, and devices on the side of the service provider are known as the service provider equipment. In between the customer and the service provider is an area known as the demarcation point or demarc. It is important to identify where the demarcation point is on a network, as this is where the responsibility for the connection shifts from the customer to the service provider. The demarcation point can also be referred to as the cabling junction box or the meter box, or MPOE or the minimum point of entry. How about the connection from the customer
>
> **[1:32](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-terminologies?u=76281980&t=92)** going to the service provider? That is known as the last mile or the local loop. A copper cable or fiber optics can be used in this case. If you remember, the connection will be from the demarcation point at the customer to the edge of the service provider network. The last mile is then connected to the local service provider facility known as the CO or the central [office](../../Skills/Web%20Development/Microsoft%20Office.md). The central office is where all the customer lines will terminate. And then finally we got the toll network. This includes all the equipment and long haul fiber lines inside the WAN provider network. Speaking of which, did you know that there are fiber optic cables under the sea? Yes, we do. This enables us to have high-speed connectivity across continents over the globe. Pretty good, isn't it? We have just covered various terminologies used in a wired area network. Next topic will be on WAN devices. See you then!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (2), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (2)
> **Env Vars:** wan (3), isp (2), cpe (1), mpoe (1)
> **Definitions:** known as (5), is an  (1)
> **Speakers:** - [instructor] (1)

#### [WAN devices](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=0)** - [Instructor] Earlier, we looked at an overview of a WAN connection between the customer and the service provider. This time, let us [Zoom](../../Skills/Software%20Development/Zoom.md) in on the side of the customer and discuss the different WAN devices that we may have. First, we got a modem. The modem is the device that modulates and demodulates signals to the WAN link of the service provider. Back in the days, we used to have a dial-up modem that is connected to a line phone, which then converts the digital signals from the computer to analog signals that can be sent through the PSDN lines or the public switch telephone network. But in today's time, please be aware that the modem can now be integrated to the SOHO or small [office](../../Skills/Web%20Development/Microsoft%20Office.md), home office routers such as the modem router. On serial connections, the modem is known as a DCE, or data communications equipment as per the EIA. The term DCE is also used to refer to the router that does the clocking on a point-to-point connection. On the other hand, for digital communications, the modem is referred to as a CSU/DSU device. Lots of terminologies, aye? Let's check them out. CSU or the Channel Service Unit is responsible for the connection with the [Telecommunications](../../Skills/Network%20and%20System%20Administration/Telecommunications.md) network. It provides determination for the digital signal and ensures connection integrity through error correction and line monitoring.
>
> **[1:33](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=93)** The DSU or the Data Service Unit, on the other hand, is responsible for managing the interface with the DTE. It converts the line frames into frames that the LAN can interpret and vice versa. So if the modem is a DCE, what's the DTE? The DTE stands for Data Terminal Equipment. It's the one that serves as the source or recipient of data. Yes, your computers, laptops, and even your home router are examples of DTE. How about the WAN router? A WAN router is a device that routes packets across networks. It's typically placed at the edge or the boundary of networks connecting to the ISP or the internet service provider. For that matter, a WAN router is also known as an edge router or a border router. The WAN router can be connected either wired using serial cable or ethernet perhaps, or it can also be wireless, such as via 4G, [5G](../../Skills/Software%20Development/5G.md), or satellite. What you may be familiar with now are the broadband modem routers that are currently used with high speed intranet. Let's pause for a while. Please note that a modem router is different from a common wireless router. A modem router is one that you can connect directly to your service provider, whereas a wireless router is one that can help extend your network wirelessly,
>
> **[3:07](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-devices?u=76281980&t=187)** but may not necessarily be suited for direct connection to your ISP. Having said that, you need to be careful when purchasing a router 'cause not all routers are the same. In some enterprises, they may also use a layer three switch or a multi-layered switch. It has the capabilities of a switch, but it can also forward IP packets much like a router. So for that matter, they can likewise be used in a WAN setting. We have just covered a number of WAN devices. While the list of devices that we've just talked about wasn't exhaustive. It is important that you understand that which of these devices you need will depend on the WAN technology that is implemented in your respective networks. WAN provider links, you say? That is coming up next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (2), [Zoom](../../Skills/Software%20Development/Zoom.md) (1), [Telecommunications](../../Skills/Network%20and%20System%20Administration/Telecommunications.md) (1), [5G](../../Skills/Software%20Development/5G.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-provider-links?u=76281980&t=0)** - [Instructor] The internet service providers, or ISPs, have various options for WAN access connections. They can offer private WAN infrastructure for entities such as large enterprises or public WAN infrastructure for the general public, such as the one that you may have at home. Private WAN infrastructure include dedicated list lines, such as T one, T three, and E one E three lines, circuit switch links such as PSDN and ISDN, as well as packet switch lines like Frame Relay, [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md), or Metro Ethernet. On the other hand, public WAN infrastructure include broadband services such as DSL, cable and satellite intranet. In today's time, we also have wireless WAN via 4G and [5G](../../Skills/Software%20Development/5G.md) technologies, such as the one that you may use in your mobile phones and tablets. For fast connectivity, we also have WAN via fiber optics, typically used in the backbone of our networks. And you may have also heard of [SDN](../../Glossary/Concept/SDN.md) or [software-defined networking](../../Glossary/Concept/SDN.md), which is actually now the trend for wide area networks as well. With SD-WAN, we apply a software-defined approach to managing the wide area network, enabling us to be [agile](../../Skills/DevOps/Agile%20Development.md) in responding to the changing business needs and landscapes. Now, these options do vary in terms of technology, speed and cost. They each have their own pros and cons. Knowing each of these technologies is essential for a good network design. For that matter, will cover each of these WAN technologies
>
> **[1:36](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-provider-links?u=76281980&t=96)** in the succeeding topics.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (1), [5G](../../Skills/Software%20Development/5G.md) (1), [SDN](../../Glossary/Concept/SDN.md) (1), [Software-defined networking](../../Glossary/Concept/SDN.md) (1), [Agile](../../Skills/DevOps/Agile%20Development.md) (1)
> **Env Vars:** wan (9), psdn (1), isdn (1), mpls (1), dsl (1)
> **Analogies:** such as (6)
> **Speakers:** - [instructor] (1)


### 2. Private WAN

[↑ Back to Table of Contents](#table-of-contents)

#### [T1/E1 and T3/E3 leased lines for WAN](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/t1-e1-and-t3-e3-leased-lines-for-wan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/t1-e1-and-t3-e3-leased-lines-for-wan?u=76281980&t=0)** - [Instructor] Let us look at the various private WAN connections, starting with leased lines. Say we got an [office](../../Skills/Web%20Development/Microsoft%20Office.md) in Melbourne, Australia, and another in London, UK, and we'd like to connect the two networks exclusively. One option that we can take is to have a point topology using leased lines. With a point-to-point link, the connection is simple because it's just between two sites. Another advantage is that the capacity of the links is dedicated only to this connection. Nice, right? However, the caveat is that the point-to-point links are typically expensive, given the nature of it being dedicated and private. The fee is paid on a monthly basis, that is why it's called leased lines. Get it? Leased lines. All right, let's move on. With this type of connection, we typically use a serial cable, hence, other may refer to it as a serial link or serial line. You can actually connect two routers back-to-back with a serial cable. Now, at the back of the router, you may see a serial1 interface like this, for which we then use a serial cable such as this one. As you may notice, one end is marked as DCE for the link going to the service provider, whereas the other end is marked as DTE for the link towards the customer end. The bandwidth options for leased lines vary between regions. In North America,
>
> **[1:34](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/t1-e1-and-t3-e3-leased-lines-for-wan?u=76281980&t=94)** the service providers use the T-carrier system with T1 lines having a speed of 1.544 Mbps, and T3 lines with the speed of 43.736 Mbps. In Europe, the service providers use the E-carrier system with E1 lines of 2.048 Mbps, whereas E3 lines have a speed of 34.368 Mbps. There are also other data rates apart from T1, E1, and T3 or E3. There's also a bit of a math involved on why the speeds vary. If you'd like to learn more, then kindly remember to check the course handout as well. In summary, leased lines are great for point-to-point connectivity between two sites. They are private and dedicated only to that site-to-site connection. However, they can be expensive and the speed could be limited, and well, that is as compared to other modern-day options.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1)
> **Versions:** 1.544 (1), 43.736 (1), 2.048 (1), 34.368 (1)
> **Env Vars:** wan (1), dce (1), dte (1)
> **Analogies:** such as (1)
> **Best Practices:** remember to (1)
> **Warnings:** caveat (1)
> **Speakers:** - [instructor] (1)

#### [Circuit-switched WAN connectivity](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=0)** - [Instructor] Let us now look at circuit-switched WAN connectivity. Back in the days, telephone switchboards were used by the phone network. The switchboards were then handled by the switchboard operators. To connect the phone call to the right destination, the operator will need to insert the phone plug into the appropriate phone jack. Once the correct logs were connected, a circuit would then be established between the two callers, which allowed them to talk to each other. This is the PSTN or the Public-Switched Telephone Network, also known as POTS or Post [Office](../../Skills/Web%20Development/Microsoft%20Office.md) Telephone Service, or plain old telephone system. Eventually, the operators were replaced by electro mechanical automatic telephone exchanges. Now, given the operation of switching across various circuits to establish a connection, this technology is then referred to as circuit switching. And yes, PSTN is an example of a circuit-switched network. Later on, we used modems to modulate and demodulate signals so that we can transfer data. We had dial up connections with a speed of 56 KBPS. Imagine that! I still remember the tone of (imitates dial up tone beeping) so as to denote the connection has been established, and then we can then use the internet. (chuckles) Those were the days. Meanwhile, let us consider this example. Say we got customers one, two, three, and four with two switchboards on each side.
>
> **[1:36](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/circuit-switched-wan-connectivity?u=76281980&t=96)** If you want to connect customer one to customer three, then we can do so by establishing a circuit between them. In a similar manner, if we want to connect customer two to customer four, then we'll just have to build a circuit between the two parties as well. Easy, right? But what if we got another user who wants to connect with others as well? Are we able to do so in this example? Well, we've already exhausted all of the available switchboards, so unfortunately we cannot. This is one of the disadvantages of circuit switching. The capacity to handle connections is limited. Once a circuit has been established, the circuit is reserved and cannot be used for something else. In our example, the fifth user will then have to wait until one of the calls is completed so that we can disconnect the previous connection and then establish a new one for the new caller. ISDN or Integrated Services Digital Network is another example of WAN connectivity that also uses circuit switching. As the name implies, it uses digital signals, resulting in higher capacity. In summary, with the circuit-switched network, a dedicated circuit or connection between terminals needs to be established before the users can communicate with each other. Examples of circuit-switched networks are PSTN and ISDN.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1)
> **Env Vars:** pstn (3), wan (2), isdn (2), pots (1), kbps (1)
> **Definitions:** known as (1), is an  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (imitates dial up tone beeping) (1)

#### [Packet-switched WAN connectivity](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=0)** - [Instructor] In this video, let us talk about packet switching, and yes, as the name implies, packet switching involves packets. That means unlike circuit-switch networks where a circuit needs to be built before we can communicate, in packet switching, the traffic is split into chunks called packets, which are then routed over a shared network. Here's an example. Say we'd like to communicate from Site A to Site B. We have traffic with the size of 6,000, just an example. First, we'll have to break it into smaller packets, say we'll then have four packets. The first packet arrives at the switch network. The switch in the network will then do a lookup in its table to find where to route the packets. A circuit will then be established temporarily as it routes the packet from one point to the next. Once the packet is passed, the circuit will then break, ready for a new packet to be routed elsewhere. Pretty cool, eh? Since the circuit that is built is not permanent, it is then referred to as a virtual circuit or a VC. Now, because the circuits are just temporary, the network is then used more effectively, that is as compared to circuit-switched networks. Further, since there are no private dedicated circuits for each connection, packet switching is found to be less expensive than leased lines and circuit-switched networks. An example of a packet-switch network is frame relay.
>
> **[1:37](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=97)** In the case of a frame relay, the identifiers for each site are called data-link connection identifiers or DLCIs. Frame relay also uses permanent virtual circuits or PVCs, which means that the path that their packets will take is already pre-configured. Now, since there is an identified path that the data will take, this is known as a connection-oriented packet switching or virtual-circuit switching. In today's time, frame relay systems are commonly being replaced by Ethernet WANs. What is that you ask? We'll cover that in a succeeding video. Meanwhile, you might have also heard of cell switching. It is almost like packet switching. However, instead of breaking the traffic into packets, which may have varying size, in cell switching, the traffic is broken into fixed-sized chunks called cells. See the difference? Packet switching, chunks into packets. Cell switching, fixed-sized chunks called cells. Remember that. An example of cell switching is ATM, not the ATM where you withdraw the money, but ATM referring to asynchronous transfer mode. ATM uses fixed-sized cells of 53 bytes, and that's about it for packet-switched networks. Again, frame relay is an example of a connection-oriented packet switching
>
> **[3:09](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/packet-switched-wan-connectivity?u=76281980&t=189)** or virtual-circuit switching. ATM on the other hand, or the asynchronous transfer mode, is an example of cell switching.

> [!info]- Semantic Content
>
> **Env Vars:** atm (5)
> **Definitions:** is an  (3), means that (1), known as (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [WAN via MPLS](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-mpls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-mpls?u=76281980&t=0)** - [Instructor] Let us now talk about [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md). Now, MPLS is not another protocol, rather, MPLS is a network optimization technique. It stands for [Multiprotocol Label Switching](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md). Multiprotocol means that it can deliver data traffic across multiple protocols such as T1, E1, T3, E3 lines, frame relay, ATM, or DSL. This means that MPLS is not tied to any single protocol alone. Further, as the name implies, MPLS uses labels to identify the paths between distant routers. The labels are predetermined paths that tell the router on where it needs to send the packets. MPLS is the successor to frame relay. While frame relay is connection oriented, MPLS on the other hand, is connectionless. This means that the path that the data packets may take could vary, and yet the packets will still arrive at the correct destination. Pretty cool, right? Here's a sample topology of how MPLS is used. Notice that we got multiple customer sites connecting to the MPLS cloud. Also, note that each customer site uses different technologies. That is the strength of MPLS. It can be used to carry data across various protocols. When a packet enters the MPLS network, a beat sequence label will be appended
>
> **[1:33](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-mpls?u=76281980&t=93)** or added to the packet by the provider edge routers or the PE. The labels identify how the data will be routed between nodes in the MPLS network. They're much like an address on an envelope that tells where it needs to go. Any packet with the same characteristics will be associated with the same label. Hence, will therefore be forwarded using the same rules if it doesn't matter what protocol is used. In this way, MPLS is able to route packets efficiently, allowing for lower latency and battery quality. Looking back at our example, the routers where the customer connections terminate to are referred to as the PE routers or the provider edge routers. Meanwhile, in the middle of our example topology is a P router, referring to the provider router that connects the P routers and the one that switches the MPLS labeled packets. MPLS was introduced in the early 2000s and is standardized by the IETF, under RFC 3031. It continues to be available and still used in forwarding IP protocol data units.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (15), [Multiprotocol label switching](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (1)
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
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=0)** - [Instructor] In the previous videos, we've looked at private WAN connections. This time, let us cover the various public WAN connections, starting with WAN via DSL. DSL is an acronym for a digital subscriber line, or in some other references, they refer to it as digital subscriber loop. It uses the existing twisted pair telephone lines for internet connectivity. But hey, don't get me wrong, you don't need a separate phone to get a DSL connection. There just need to be an existing telephone line in the area, within considerable distance from your service provider, of course. Wait, if it uses existing telephone lines, is it the same as dial-up? Well, not really. You see, dial-up carries analog signals, whereas in DSL, the signals are converted from analog to digital, hence the name, digital subscriber line. Meanwhile, with dial-up connection, we use a modem. For DSL, we use a DSL modem on the end of the customer or subscriber. The subscriber lines then aggregate to the point of presence, or POP, at the service provider that is using DSLAM, or the DSL access multiplexer. Now, I know what you're probably thinking. Won't voice and data signals interfere with each other? The answer is no. Firstly, the data is carried in a different frequency range on the copper wire.
>
> **[1:35](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=95)** Secondly, splitters or DSL filters are then used to split the frequency so to ensure that the data and voice will not interfere with each other. Pretty cool, isn't it? The speed of a DSL connection does vary, depending on the distance of your premises to the service provider, and also depending on the type of service that your service provider can give you. There are various types of DSL. We got ADSL, or that is the asymmetric digital subscriber line. Asymmetric means that the upstream and downstream speeds are different. That means, you might be able to download data from the internet at 20 MBPS, yet the upload speed is only 1.5 MBPS, just an example. ADSL is the typical setup for most household connections. We also got an SDSL, or symmetric digital subscriber line. Symmetric means that the upstream and downstream speeds are the same, say two MBPS for both upload and download. Again, just an example. The speed will obviously vary depending on what your service provider can provide. You might have also heard of VDSL. It stands for very high speed digital subscriber line. And yes, it is a lot faster than ADSL. For example, the second generation of VDSL plus can reach up to a hundred MBPS for upstream and up to 300 MBPS for downstream.
>
> **[3:11](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=191)** Nice, right? It actually uses a different modulation technique, and that is how it is able to reach such high speeds. Now, you might have also heard of naked DSL, not that type of naked, and it's not really a DSL type of different speed. Rather, it simply refers to a service that only provides DSL or internet connection without a telephone line. Naked DSL is also referred to by different names such as Raw copper, unconditioned local Loop, or ULL, unbundled network element, or UNE, or single order GEA. Connecting via ADSL is simple. First, we need to connect the ADSL modem to the one port of our router. Then we'll connect our computer to one of the LAN ports. Turn on all devices, then proceed with the configuration. Usually, routers come with a connection wizard that can help you with the process. You then just need to enter the details that are provided to you by your service provider. This can either be an IP address, or a PPPoE username and password. Nowadays, most DSL providers use PPPoE, or point-to-point protocol over ethernet. This is to establish internet connections for end users. For that case, your service provider will then supply you with a PPPoE username and password. You then just need to enter your account details,
>
> **[4:45](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-dsl?u=76281980&t=285)** follow the prompts, and voila! You are now connected via a DSL. Though declining in popularity, DSL continues to be available in many parts of the world. It is a cost-effective solution for internet connectivity, especially for areas that are not reachable by modern internet connectivity such as 4G or [5G](../../Skills/Software%20Development/5G.md) mobile technology or fiber connections. Oh, don't worry! We'll cover the modern ways of internet connectivity in the succeeding topics. And that's it for DSL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [5G](../../Skills/Software%20Development/5G.md) (1)
> **Env Vars:** dsl (18), adsl (5), mbps (5), wan (3), vdsl (2)
> **Definitions:** means that (2), is a  (2), is an  (1), stands for (1), refers to (1)
> **Analogies:** such as (2), for example (1)
> **Versions:** 1.5 (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [WAN via cable](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-cable?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-cable?u=76281980&t=0)** - [Instructor] Another common WAN connection is via cable internet. Cable internet uses coaxial cable, which is similar to that which is used in television. It follows the DOCSIS standard, or that is the Data Over Cable Service Interface Specification, so as to transport the data over a coaxial cable. Coaxial cables offer a wider frequency range than the two pair phone cables that are used for DSL. Hence, cable internet is found to have higher bandwidths. Here is a sample topology of how cable internet works. A cable modem is used to translate the digital signals into the broadband frequencies, which then leads to the local cable TV [office](../../Skills/Web%20Development/Microsoft%20Office.md), also known as the headend. A CMTS or a cable modem termination system is then used so as to provide internet services to the customers. Something to note about cable internet is that all the local subscribers do share the same cable bandwidth. What this means is that the more subscribers there are in the locality, then the greater the number of people who need to take a share of the pie. Hence, the bandwidth that can be allocated for each user could then be lower than the expected rates. Here's an example of a cable modem router. Notice that there's a port for a coaxial cable in here, and that's where you'll need to connect the cable.
>
> **[1:34](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-cable?u=76281980&t=94)** The cable modem will then synchronize with the service provider, whereas the next step will be the activation for your connection. WAN via cable was a popular choice given the higher bandwidth that it can offer. But again, this depends on the number of local subscribers on the network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1)
> **Env Vars:** wan (2), docsis (1), dsl (1), cmts (1)
> **Definitions:** is a  (1), known as (1)
> **Documentation:** specification (1)
> **Analogies:** similar to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Wireless WAN via 4G/ 5G](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=0)** - [Instructor] In today's time, we are no longer limited to wired network connectivity 'cause we also now have wireless solutions. And so in this video, let us cover the various wireless WAN technologies such as mobile broadband and fixed wireless access plus I'll also share something about municipal [Wi-Fi](../../Glossary/Standard/Wi-Fi.md). First we got 3G, 4G and [5G](../../Skills/Software%20Development/5G.md) connections, also known as cellular or mobile broadband. Yes, it is wireless 'cause you don't need any wires when you connect to 4G or 5G through your phone, right? And it is WAN 'cause you are able to connect to the internet and even to other servers across the globe. Hence, cellular or mobile broadband is a wireless WAN. Many users with smartphones and tablets can use cellular connectivity for internet browsing, accessing their emails, and even for streaming audio and videos online. But is it limited to mobile phones? Not at all. 'Cause we also now have wireless routers that connect to the internet using 4G and 5G as well via SIM cards. Cool, eh? But how does it work? Our mobile devices got a small antenna, which then communicate with a nearby [Telecommunications](../../Skills/Network%20and%20System%20Administration/Telecommunications.md) tower via radio waves. Now, remember the SIM card? The SIM card, whether the physical chip or the eSIM or iSIM, which is just an electronic code, is what enables our mobile devices to connect to the service provider. It's the SIM that identifies you
>
> **[1:34](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=94)** as a subscriber of a network. So our mobile devices send a signal to the nearby tower and authenticates us that we are a legitimate subscriber to the network. The request is processed and, once authorized, we can then connect to the intranet. As you may know, you can also check the signal strength by looking at the number of bars at the top right hand corner of the screen. This is known as the RSSI or the received signal strength indicator. The more bars you got, the better the signal. Here's an example of a 4G router. In today's time, please be aware that there's also 5G routers available now. You may look either at the side or at the back of the router where you'll see a slot for a SIM card. Yes, that's where we'll need to insert the SIM. If you don't see a SIM card slot at the back of the router, then you may want to look at the bottom of the router instead. So you insert the SIM card, turn on the router and you're good to go. Yes. No further configuration will be required. Nice, right? Next, let us talk about fixed wireless access. With fixed wireless, a small antenna is installed on the customer's premises that is then directed towards the fixed wireless facility. The fixed wireless service is designed to serve only a limited number of locations, hence, fixed wireless is found to provide a more reliable and faster service than cellular connectivity in some locations. However, something to note about fixed wireless
>
> **[3:07](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-4g-5g?u=76281980&t=187)** is that there needs to be a clear, unobstructed line of sight between the two antennas. Remember that. Now, in some cities, residents are able to wirelessly access the internet via municipal Wi-Fi. The wireless access is offered either for free or for a small cost. It's much like connecting to Wi-Fi or wireless internet but municipal Wi-Fi uses stronger radio and directional antennas, so to provide service to a greater range. Now, I know municipal Wi-Fi is really more of a [wireless LAN](../../Glossary/Standard/Wi-Fi.md) than a WAN but I just thought of sharing it with you as it is a nice thing to have in a city, right? Well, great, we've just covered wireless WAN technologies. For the next video, let's cover WAN via satellite.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Wi-Fi](../../Glossary/Standard/Wi-Fi.md) (5), [5G](../../Skills/Software%20Development/5G.md) (4), [Telecommunications](../../Skills/Network%20and%20System%20Administration/Telecommunications.md) (1), [Wireless lan](../../Glossary/Standard/Wi-Fi.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=0)** - [Instructor] Have you heard of Starlink, Viasat in the US, or Sky Muster in Australia? All these three provide network connectivity via satellite. Yes, this is an example of WAN via satellite. Satellite internet service is great for areas where DSL or cable Internet are not available, like in regional and remote areas. To access satellite Internet services, the subscriber will typically need a satellite dish, a DVB-S modem, or a digital video broadcast satellite modem, and coaxial cables. Now these items will typically be provided to you by the service provider as part of their kit. For example, with Starlink, you'll typically receive a satellite dish, which can be a round dish if it is Gen 1 or rectangular dish if it is Gen 2. There's also the Starlink [Mesh](../../Skills/Software%20Development/Mesh.md) [Wi-Fi](../../Glossary/Standard/Wi-Fi.md) router along with the cables. The DVB-S modem translates the signals from your home devices, which are then connected via coax cable to the satellite dish. The satellite dish will then need to be aligned to the satellites in space, which will relay the signals to the ground stations of your service provider, enabling you to have access to the Internet. Having said, a clear line of sight between your satellite dish and the satellite in space is needed. That is why satellite dishes are typically placed on top of a roof or in an elevated location like a pole or a wall,
>
> **[1:35](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=95)** so as to establish a clear connection. Now satellite communication is not limited to just browsing the Internet, it can likewise be used for a private WAN communication, such as for connecting a remote site to the central headquarters. Similar to satellite Internet connection at home, a VSAT, or very small aperture terminal satellite dish, is used, which is then connected to a modem router. The VSAT is a small satellite dish that is typically 80 centimeters to 120 centimeters in diameter. It is best placed on the roof of a building or the customer premises so as to have a good line of sight to the satellite in space. The satellites in space that are used for Internet connectivity are usually in geosynchronous orbit. These satellites are about 35,786 kilometers, or 22,236 miles, away from the Earth. Far out! They are geosynchronous, which means that they orbit the Earth following the Earth's rotation. Here's one interesting fact. Sky Muster in Australia uses two geostationary satellites. Cool, right? Now not all use GEO satellites, 'cause Starlink, for example, uses LEO satellites, or low earth orbit satellites instead. LEO satellites refer to satellites in space that are at 2,000 kilometers away from the Earth or less. Yes, they are nearer to the Earth than GEO satellites.
>
> **[3:14](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=194)** Because LEO satellites are nearer to Earth, then that means we'll need less power to transmit from our homes and offices, and less power means we can use smaller satellite dishes. The smaller the dish, the lower the cost to build. Nice, right? But wait, there's more! Because LEO satellites are closer to the Earth, that means the latency, or the time required for our signals to be sent from Earth to the satellite and back, is much less as compared to GEO satellites. Sounds great! What's the downside, you may ask? Well, comparing LEO to GEO satellites, LEO satellites have a smaller coverage. For that matter, we then need more LEO satellites forming a constellation, and that is why Starlink had to send thousands of satellites in space. As for satellite communications in general, remember that we are sending signals to space. That means our connection can be affected by so many things in space, like the weather perhaps, and even the solar storms. Also, as with any network, there's also the threat of malicious actors listening, in which we need to be careful of as well. Oh, if you are wondering about the things to consider for a WAN connection or Internet connectivity, don't worry, we'll cover that in the succeeding topics. We have gone a long way with WAN connectivity. We have even gone through space. But hey, WAN technology is continuously evolving. That is why, for the next section,
>
> **[4:49](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wireless-wan-via-satellite?u=76281980&t=289)** we'll cover modern WAN solutions. See you then!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mesh](../../Skills/Software%20Development/Mesh.md) (1), [Wi-Fi](../../Glossary/Standard/Wi-Fi.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=0)** - [Instructor] Let us now talk about dedicated broadband or dedicated internet access. In earlier videos, we covered the various public WAN connections, such as cable, ADSL, and satellite internet. These connections are available to the public wherein the bandwidth is shared with other local subscribers. Since it is shared, the speed of your connection may then vary. It may go up or down, depending on how busy the internet connection is. Think of a water pipe. Inside the water pipe is a consistently flowing amount of water. The water is like the bandwidth for the internet in our analogy. Now, say there are five subscribers in the area, including yourself. During the less busy periods, you might get a good amount of bandwidth that is sufficient for your needs. However, during the busy periods when everyone got their devices turned on, watching videos, downloading files, or conducting online meetings, then you may notice your internet speed slowing down. Why? That is because the water flowing through the pipe is shared with other clients, too. Everyone gets a piece of the pie, so to speak. Now, I know what you're thinking. Why not have a pipe of our own? Say you're running a business and you need a high-performing internet connection that doesn't lag when everyone else is connected. Is it possible to have a non-shared connection with guaranteed speed?
>
> **[1:32](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=92)** The answer is yes. That is what we refer to as dedicated internet access or DIA. As the name implies, the network service is dedicated to you and to you alone. The intranet connection is not shared with anyone else, hence, the actual bandwidth is guaranteed, nice, right? If we think back to our analogy, this means that we'll have our own pipe separate from the others. Hence, even when everyone else is busy connecting to the internet, you are not affected 'cause you got your own dedicated network. So is it all just for speed? Well, not at all. DIA is great if you want a consistent and reliable internet speed. Sure. However, remember that DIA also provides a connection that is dedicated to you and your business alone. Hence, it can also provide an added security. How's that you ask? That is because all your data transactions will not be going through the public pipe. Rather, it'll pass only through your dedicated pipeline. In short, it is private. DIA also comes with an SLA, or service level agreement, with your service provider. It's like a promise given to you by your ISP as the level of service that you will get, like the bandwidth, performance level, or the level of support that you may get from them. All sounds great, right?
>
> **[3:05](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/dedicated-internet-access-dia?u=76281980&t=185)** What's the catch? Well, since it is a guaranteed, dedicated service, then it obviously also comes with a cost. DIA is a more costly option than public broadband, and the services that you may get will all depend on what you agree with your service provider. So in essence, it all boils down to what you really need. Do you need a private dedicated network connection with a consistent, reliable internet speed? If yes, then DIA or dedicated internet access might just be the option for you.

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
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=0)** - [Instructor] Fiber-optic cables can be used for sending packets over long distances, and it is also not prone to electromagnetic interference, making it an ideal medium for WAN connections. And so in this video, let us cover WAN via fiber optics. I know what you're thinking. WAN or wide area network is for networks across geographic locations. So for WAN to run over fiber optics, do we actually have fiber-optic cables that run across the globe? Yes, we do. You don't believe me. Here's the website that you may want to check. This is the submarine cable map, which is a free and regularly updated resource from TeleGeography. You see those colored lines on the map? Each of those corresponds to a sub-C or submarine cable, which are basically fiber-optic cables that are laid on the ocean floor. Pretty cool, right? These fiber-optic cables are what we use for transmitting huge amounts of internet data across the world. A nice thing about this website is that we can actually click on one of these links so as to get information about it. Like, this one. Nice. Now, fiber-optic cables are not just found under the sea, 'cause we also now use fiber-optic cables for WAN connectivity to households and businesses as well. This system that is commonly used by service providers to bring fiber optic cabling to the end user,
>
> **[1:34](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=94)** is known as PON or passive optical network. Depending on where PON terminates, the system can be described as either FTTP or fiber to the premises, FTTB or fiber to the building, FTTC or fiber to the curb, or FTTN or fiber to the node. Let us look at each of these, starting with FTTP. FTTP refers to fiber to the premises, or in some countries they may refer to it as fiber to the home or FTTH. That means the fiber-optic cable will run from the exchange up to the customer's premises. Among the options, FTTP is the one that provides the highest potential speed. Next is FTTB or fiber to the building. As the name implies, the fiber-optic cable runs up to the central point in the building, whereas the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the cable going to the customers will be via copper cable. In terms of speed, this will be a bit slower than FTTP, but it can still offer a good level of internet speed. Offering almost similar speed as with FTTB is FTTC or that is fiber to the curb, or in some instances also referred to as fiber to the cabinet. With this option, the fiber-optic cable runs from the service provider central [office](../../Skills/Web%20Development/Microsoft%20Office.md)
>
> **[3:07](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=187)** and terminates in a small enclosure or distribution cabinet that is located on the edge of the street or the curb. And then from the curb, a copper cable will then run up to the customer's premises. Then we have FTTN or fiber to the node. Can you guess up to what point the fiber will run? Yep, as you might have guessed it, with FTTN, the fiber-optic cable runs up to the node, but what is a node you may ask? A node is a connection hub or a cabinet exchange that is located near a neighborhood. Now, when they say near, be aware that the node can be 50 meters or even 500 meters away from your premises. Having said, your connection speed will depend on how far you are from the node. The farther you are from the node, the slower the internet speed. Finally, there's also HFC or hybrid fiber coaxial. It's almost like FTTN, where you have fiber-optic cable that runs up to the node. However, instead of the common copper wiring, existing coaxial cables are used instead. Hence, it is called hybrid fiber coaxial. If you remember, a coaxial cable is the cable that is used for cable TV or cable intranet. Yep. That's the same type of cable that is used in HFC. So what do we need for us to connect via fiber? Aside from fiber-optic cable, that is.
>
> **[4:44](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-via-fiber-optics?u=76281980&t=284)** For FTTx connections, such as for home and small businesses, the fiber-optic cable may terminate either from the service provider's box at your home or in a network node, for which case you only really need a copper cable from the box going to your modem router. Having said, you still need to ensure that your modem router supports your connection type and the speed tier on your service plan. For enterprises, if you want to terminate the fiber-optic cable to your network devices, then you need to check if they have optical network terminal or ONT. Otherwise, you may need to install SFP modules so you can connect your fiber-optic cable directly to your network device. SFP, by the way, stands for small form factor pluggable. How about the protocols for WAN over fiber-optic cables? Synchronous optical networking or SONET and synchronous digital hierarchy or SDH, are the standardized protocols that we use for fiber optic networks. For point-to-point optical links over SONET or SDH, we use packet over SONET for WAN transport. However, in today's time, we are now moving towards OTN or optical transport networking. We have just covered how fiber-optic cables are used for global communications, for residential, and commercial use. There's still more to cover on fiber optics and WAN. In the next video, we'll cover ethernet WAN and dark fiber.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=0)** - Let us continue our discussion on WAN. In this video, we will cover Ethernet WAN and dark fiber. Ethernet, defined under IEEE 802.3, was originally developed for LAN or local area networks. However, with the advent of fiber optic cables, we now have Ethernet standards that can provide high speeds at long distances like the 1000Base-ZX, which is said to have gigabit transmission to at least 70 kilometers. Whoa! So what does that mean for us? Well, it means that we may not be able to extend the range of our local network to farther distances beyond our current location and can even span across countries. This is Ethernet WAN, also known as wide area Ethernet. So why should we go for Ethernet WAN? Firstly, with Ethernet WAN, our network goes from the Ethernet local network to the Ethernet wide area network. Yes, it stays in the Ethernet. That means we no longer need to convert to various WAN technologies like frame relay or ATM, and that is a reduction in administration tasks. Less administration means less cost. Less cost means we'll have savings, which we can then use to further expand our network with other sites and even to the internet.
>
> **[1:34](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=94)** That is easy integration. We'll also now be able to host VoIP as well as streaming and broadcast videos more easily. Well, that is as compared to TDM or frame relay networks. That is business productivity. By the way, Ethernet WAN is gaining popularity that it is now commonly used to replace frame relay and ATM networks. Pretty cool, right? But how can we connect geographically separated sites? Like does it mean we need to add new fiber optic cables underground or under the sea? Not really. If the business wants to install new optical fibers, then yes, sure they can. But you see, there exists some optical fibers which remain unused and are available for purchase. These are what we call dark fiber. They're called dark fiber 'cause there's no light passing through it since they're unused. Get it? No light, hence, they are dark. The dark fibers are available for sale on the market and are the ones that can be used by end user enterprises so as to expand their Ethernet networks. Dark fiber can likewise be used by network operators for redundancy in their networks. When you purchase a dark fiber, that's yours. The entire fiber and its bandwidth will be yours to own and manage. You can have full autonomy. There's no other traffic than your own, and it is physically separated from other networks.
>
> **[3:09](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/ethernet-wan-and-dark-fiber?u=76281980&t=189)** So you can be [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) assured that your data is secure. So for businesses who want to have full control over their network design and be able to have private and secure connections as well, then dark fiber might be an option for you. Whew! We have just covered Ethernet WAN and dark fiber, but there's one more modern WAN solution that we all need to discuss. What's that? It's SD-WAN and we'll cover that next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** wan (10), atm (2), ieee (1), lan (1), tdm (1)
> **Definitions:** means that (1), known as (1), is a  (1)
> **Versions:** 802.3 (1)
> **Prerequisites:** install (1)
> **Speakers:** - let (1)

#### [Software-defined WAN (SD-WAN)](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/software-defined-wan-sd-wan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/software-defined-wan-sd-wan?u=76281980&t=0)** - [Instructor] Let us now talk about SD-WAN. SD-WAN stands for software-defined wide area network. As the name implies, it is a WAN implementation that is designed, deployed, and managed all on a software level. Don't get me wrong, of course, we do still need infrastructure in place, but that will only be on the side of the service provider. The infrastructure is what we refer to as the underlay. You don't see it on your premises, but it's there, somewhere out there. To manage the network, we'll simply use software. Hence, it is software-defined. The software on top of the underlay is what we refer to as the overlay. So in essence, an SD-WAN is a type of an overlay network that provides a wide area network. But how do we do it? Again, it is software-defined. That means behind the scenes are scripts of codes to create a virtual network. Scripts are also used to automate tasks and to orchestrate how multiple devices will work together to form a secure and efficient network. But why? Why are we now going for SD-WAN? You see, it is not easy to manage lots of network infrastructure all on site. You need the space, power, on top of constantly managing or upgrading the devices. If we move these infrastructure to the cloud, then that leaves the business
>
> **[1:33](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/software-defined-wan-sd-wan?u=76281980&t=93)** with only just the network configuration to worry about. Now, how about the network configuration you ask? That is what we now manage via software. As shared earlier, SD-WAN makes it all easier to deploy, operate, and manage our networks. We can likewise now move our traffic to lower cost network links, for example, all from a distance, virtually. SD-WAN has been and still is a game changer. It enabled us to have networks that are more flexible and responsive to business needs as the world transitions from [Hardware](../../Topics/Hardware.md) to cloud-based technology. And that is SD-WAN in a nutshell.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Hardware](../../Topics/Hardware.md) (1)
> **Env Vars:** wan (8)
> **Definitions:** is a  (3), stands for (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [LoRaWAN](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=0)** - [Instructor] Let us now talk about LoRaWAN. LoRaWAN stands for Long-Range Low-Power Wide Area Network. It's developed and maintained by the LoRa Alliance, and it's officially approved as a standard for low-power WAN by the International [Telecommunications](../../Skills/Network%20and%20System%20Administration/Telecommunications.md) Union in December of 2021. Wait, 2021 you say? Yes, it is quite recent. So again, LoRaWAN is a standard for low-power WAN. Eh, what's low-power WAN? Well, think of devices that are low powered like devices that run on battery perhaps, which connect to the internet or over long ranges. Got any ideas? Say your smart devices or the sensors used in smart cities and industries. The sensor chips used in agriculture for plants, or those used in cattles for monitoring. The smart metering devices for water, gas, or electricity and so on and so forth. If you really ponder about it, just think of [IoT](../../Glossary/Concept/IoT.md) or [Internet of things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md) or the machine to machine connections. That is where LoRaWAN comes in. But then we said long-range. How long is that range? Well, it depends on whether there is line of sight and if the gateway is located indoor or outdoor. For indoors, 500 meters, give or take. But outdoors, the distance can run from one kilometers up to 10 kilometers.
>
> **[1:36](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=96)** However, if you stop in the air, the world record as of this writing is 1,336 kilometers or 830 miles. I told you it's the long range. A LoRaWAN end device can be a sensor, an actuator or both. They are battery operated and wirelessly connected to the LoRaWAN network through gateways. LoRaWAN can be operated on ISM bands, 2.4 gigahertz bands and even on license-free spectrum. If you'd like to learn more about the various frequency plans by country, then you may want to check out this link. And so the gateway receives the LoRaWAN messages from the end devices and forwards them to the network server. It sends it using a back home network like through fiber-optic cables, 2.4 gigahertz radio links, or even via cellular network. It is the network server which manages the entire LoRaWAN network. If you think of the addressing, encryption, and authentication, it all happens here with the network server. Then the data will be collected by the application server, which then processes the data depending on how you need it to be used. And yes, it is actually possible to have multiple application servers. So we have just covered LoRaWAN and its architecture. Thinking about it,
>
> **[3:09](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/lorawan?u=76281980&t=189)** the endpoints in the network are no longer limited to computers and servers alone, 'cause we also now have sensors and actuators that are also now connected through the intranet. The playing field, the wide area network is now broadened. And therefore, do we need to consider them as well in our WAN implementations. Wondering about what to consider in WAN? That is what we'll cover next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Telecommunications](../../Skills/Network%20and%20System%20Administration/Telecommunications.md) (1), [IoT](../../Glossary/Concept/IoT.md) (1), [Internet of things](../../Skills/Software%20Development/Internet%20of%20Things%20(IoT).md) (1)
> **Env Vars:** wan (5), ism (1)
> **Versions:** 2.4 (2)
> **Definitions:** stands for (1), is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [WAN consideration](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=0)** - [Instructor] We have learned quite a number of things about WAN in the earlier videos. And so in this video, let us use that knowledge in choosing the appropriate WAN solution for residential and business use. Let's start. Say we'd like to have WAN connectivity for a small [office](../../Skills/Web%20Development/Microsoft%20Office.md) or home office network. First question to ask is: What's available in your area? Yep, it does matter. You see, as much as we've talked about the various WAN connectivity options, like DSL, cable, wireless, satellite, or fiber, not all of these options might be available for you. And so it is worthwhile to first check what your options are. For fiber connections, are you able to have FTTP? Then that would be great. Or maybe you'll have FTTC or FTTB instead. Then, that's okay. But if it would be FTTN, or fiber-to-the-node, then you need to know how far you are from the node, right? For mobile broadband, is there a good [5G](../../Skills/Software%20Development/5G.md) connection, perhaps? If yes, then that would be awesome. If 4G's available, then that's all right, I would say. But compare the speeds with DSL or cable options as well. In that way, you can assess which is appropriate for you. Say, mobile communication is not great in your location, and there's no cable internet nor fiber that is available. Then you may want to check if fixed wireless access is available instead.
>
> **[1:32](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=92)** If fixed wireless access is an option, them remember that the antenna from your home or office will need to have a clear line of sight to the fixed wireless facility. And how about satellite? Well, if you're in a remote or rural area with access to clear skies, then satellite might be an option for you. Yep, it doesn't matter where you are. Even if you are in a far-flung area, the satellite can reach you, as long as there is clear access to the skies. Now, how about for business and enterprises? Well, almost the same thing in a sense that you need to first know what options are available for you. However, instead of just having one internet connection, you need to consider having a backup connection as well. 'Cause what if your primary line goes down? Will you then just accept that it is the end for your business? Of course not. That is why you need to consider having redundancy or backup plan as well. Remember our discussion on WAN topologies? Maybe, instead of just having a single home topology, you may then consider having dual home topology connecting not just one, but perhaps, two service providers instead. Further, think of how your business runs. Will you be connecting only to a single branch or to many? Now, the branches that you need to connect to, are they local, regional, or global? Do you need secure lines?
>
> **[3:05](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=185)** Or are you geared more towards lowering your expenses? All these matter, you know? Say you need to connect to a nearby branch, and you need the connection to be fast and secure. Then you may want to consider a private leased line or dedicated broadband. However, if you will be connecting many remote offices, then [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) might be right for you. But if you want to reduce the cost, then a public WAN could be an option. And then, you may also want to consider having a VPN as well for added security. Which then brings me to the second consideration: cost. Say we have now found out as to what are the available options for you. Next question is: What's your budget? For small office, home office networks, this means comparing the various service plans from different service providers. You will see that different costs account for different speeds and service levels as well. It is now up to you to weigh or assess the options and select which is the most appropriate for you. Think of the things that will drive your internet usage. Will it just be email and internet searches? Then lower-tier plans might be all right. However, if you'll be doing lots of video streaming, online gaming, and upload or download of gigabits of files, then you may want to consider the upper-tier plans instead. Also, think of the number of devices that will be connecting to the internet. The network traffic will be less if it is just one PC.
>
> **[4:40](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-consideration?u=76281980&t=280)** However, if there are more devices that will be connecting at the same time, then obviously, the network traffic will increase as well. The same thing for businesses. But aside from speed, also consider the level of service that you will get. Like, what's the promised uptime? Is it 99.99% availability, for example? How quick is the expected response in case there would be an incident? What's the reputation of the service provider? Is it easy to contact them? Or maybe there's a dedicated service manager, perhaps. And so on and so forth. Read the service level agreement, and ensure that you are aligned with all of the clauses that are stated in there. You may also want to think ahead in the future. What do you project your business growth will be like? Sure, your one solution might be sufficient for your current needs, but do you see your network growing in a few months' time? It's either that the size of the network increases or it's with your network traffic. Either way, also consider [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) when selecting a WAN option, for which SD-WAN might be good for you. As you may see, there are many different factors to consider when choosing an appropriate WAN connection. It is important to compare and assess the various options so as to see which of them best meets the requirements for your home or office network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (6), [5G](../../Skills/Software%20Development/5G.md) (1), [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1)
> **Env Vars:** wan (9), dsl (2), fttp (1), fttc (1), fttb (1)
> **CLI Commands:** node (2)
> **Versions:** 99.99 (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [WAN security and optimization](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=0)** - [Presenter] Say, we now have a WAN connection. What's next? Well, the next step is for us to think of how to secure and optimize our WAN connection. Let us start with WAN security. For site-to-site connections, and even for remote access, one of the most common ways to secure the WAN traffic is by using VPN, or that is the [virtual private network](../../Skills/Network%20and%20System%20Administration/Virtual%20Private%20Network%20(VPN).md). Think of it like having a virtual tunnel between your sites. All traffic between the sites will then pass through the virtual tunnel, hence, a virtual private network. You can also add encryption and authentication to a VPN connection so as to keep your data more secure. However, with added security measures, it will add overhead to the network traffic as well. That is why sometimes, not always, you may notice that the network connection can be a bit slower when using a VPN. For that matter, it is important to also compare and assess which is the right VPN solution for you. Now, aside from VPNs, you also need to check the security of your network devices. For small [office](../../Skills/Web%20Development/Microsoft%20Office.md), home office networks, check your modem router. In terms of physical security, where is the modem router located? Who can access it? Is it kept in a secure place? All right, let us now think of logical security. Are you still using the default username and password for the device? Hopefully not.
>
> **[1:32](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=92)** Now, think of the CIA triad. Confidentiality. What encryption and authentication measures are in place? Integrity. Do you use hashing or digital certificates? How about in terms of availability? Do you have a backup? That's in terms of backup device, backup of your config, and backup power as well, like UPS or uninterruptible power supply 'cause they're all important, you know? Also check if your device has other security features like firewall, content filtering, MAC address filtering, or VPN perhaps that you can use. For business and enterprises, aside from your security appliances, you also need to ensure that policies and procedures are in place for your organization, like policies for remote access and internet use. Also, think of policies for incident handling and reporting, plus guidelines for communicating with your partnered vendors and service provider. All right, say you've now secured your network. How can we optimize it? I mean, we've got lots of network traffic going through, right? How can we manage it in such a way that the important network traffic, like work-related data transfer, is not affected by music streaming, for example? Well, there are various techniques that we can use. First that we can employ is traffic shaping. It is a QoS or a quality of service technique where we can prioritize network traffic, either based on IP address or the application
>
> **[3:08](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=188)** or the protocol. Say we would like to prioritize VoIP traffic followed by data transfers and the list priority is email. Can we do that? Yeah. In that way, the VoIP traffic will be prioritized and will not be affected by when there's too much dotted traffic, just in our example. Nice, right? Meanwhile, please be aware that in some SOHO routers as well as in some other network devices, you might see this capability marked or named as QoS instead of traffic shaping. Just letting you know so that you are aware. As for the WAN connections in between sides, we can streamline the network traffic through any of the following or combination thereof. We've got data compression, deduplication, local caching, and protocol optimization. Let us talk about each of them, starting with data compression. This technique uses compression [Algorithms](../../Skills/Software%20Development/Algorithms.md) such as ZIP or RAR, so as reduce the size of the data before sending it over the WAN network. Next, we have deduplication. As the name implies, with deduplication, it avoids sending the same traffic across the WAN. In case of having redundant data, it sends references instead rather than the actual data. Next, we got local caching or proxy. Say we got a file that we keep on accessing over and over again. Ain't it better if we simply have that file stored locally?
>
> **[4:43](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/wan-security-and-optimization?u=76281980&t=283)** That is caching. DNS and HTTP are just a couple of examples that use this technique. Finally, we got protocol optimization. Think of it as doing some technical tweaks to the network traffic, like adjusting the transmitting window size or by being selective on which packets to acknowledge, or by optimizing the congestion window size. Told you, it's technical, right? The important thing to remember is that with protocol optimization, we are able to mitigate the effects of latency over long distances, hence, be able to improve the application response times. Great! We have just covered a few of the things that you can take so as to secure and optimize your WAN connection. It's your turn now to apply these measures to your own network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Virtual private network](../../Skills/Network%20and%20System%20Administration/Virtual%20Private%20Network%20(VPN).md) (2), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (2), [Algorithms](../../Skills/Software%20Development/Algorithms.md) (1)
> **Env Vars:** wan (8), vpn (5), cia (1), ups (1), mac (1)
> **Analogies:** think of it like (1), for example (1), such as (1), think of it as (1)
> **Definitions:** is a  (1)
> **Warnings:** be aware (1)
> **Speakers:** - [presenter] (1)

#### [Next steps](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-wide-area-networks-wans-23860739/next-steps?u=76281980&t=0)** - [Instructor] Yay, you've just completed the course on wide area networks. Hopefully you now have a better understanding of what a wide area network is, the various one options for public and private connectivity, as well as the different considerations when selecting a WAN connection. The next step is for you to explore further and apply what you've just learned. Having said, if you are interested in creating a simulated WAN network, then you may want to check my course on Cisco Modeling Labs. Ooh, by the way, I also have other courses here on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning that might interest you as well, so check them out too. Meanwhile, I invite you to connect with me here on LinkedIn and follow me at my YouTube channel. Feel free to drop me a message as I'd be happy to hear from you wherever you are across the globe. And with that, I wish you all the best in life and in your networking career.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (2)
> **Env Vars:** wan (2)
> **Speakers:** - [instructor] (1)


## Instructor

- [Jarrel Rivera](../../Instructors/Cybersecurity/Jarrel%20Rivera.md)

## Resources

- Exercise files available

## Skills Covered

- Network Administration

## Path Context

### In [Network Administration- Build Core Skills for Network Management and Security](../../Paths/Cybersecurity/Learning%20Paths/Network%20Administration-%20Build%20Core%20Skills%20for%20Network%20Management%20and%20Security.md)
← [Networking Foundations- Local Area Networks (LANs)](Networking%20Foundations-%20Local%20Area%20Networks%20(LANs).md) | **4 of 6** | [Learning Network Troubleshooting- Practical Network Diagnostics and Solutions](Learning%20Network%20Troubleshooting-%20Practical%20Network%20Diagnostics%20and%20Solutions.md) →

## Appears In

- [Network Administration- Build Core Skills for Network Management and Security](../../Paths/Cybersecurity/Learning%20Paths/Network%20Administration-%20Build%20Core%20Skills%20for%20Network%20Management%20and%20Security.md)

## Related Courses

_Courses sharing skills:_

- [Cisco Networking Foundations- Wireless Networks, Services, Security, and Virtualization](../Network%20and%20System%20Administration/Cisco%20Networking%20Foundations-%20Wireless%20Networks%2C%20Services%2C%20Security%2C%20and%20Virtualization.md) — Network Administration
- [MPLS Segment Routing](../Network%20and%20System%20Administration/MPLS%20Segment%20Routing.md) — Network Administration
- [Server Administration Essential Training](../Cloud%20Computing/Server%20Administration%20Essential%20Training.md) — Network Administration
- [Protecting Your Network with Open-Source Software](Protecting%20Your%20Network%20with%20Open-Source%20Software.md) — Network Administration
- [Networking Foundations Networking Basics](../Network%20and%20System%20Administration/Networking%20Foundations%20Networking%20Basics.md) — Network Administration

---

[↑ Back to top](#)