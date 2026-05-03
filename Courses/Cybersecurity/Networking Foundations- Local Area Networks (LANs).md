---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: networking-foundations-local-area-networks-lans-24682603
url: "https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603"
duration_minutes: 75
duration: 1h 15m
level: Beginner
updated: 10/17/2024
learners: 7418
skills:
  - Local Area Network (LAN)
  - Computer Networking
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEkH7sUTxptyw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1727811525153?e=2147483647&amp;v=beta&amp;t=OQLvaoUwMZixXvBcDnTbWqF20PwgcnqhLtGxKLGIOow"
linkedin_topic: Cybersecurity
learning_paths:
  - '[[Network Administration- Build Core Skills for Network Management and Security]]'
prev_courses:
  - '[[Networking Foundations- IP Addressing]]'
next_courses:
  - '[[Networking Foundations- Wide Area Networks (WANs)]]'
path_nav: '[{"path":"Network Administration- Build Core Skills for Network Management and Security","position":3,"total":6,"prev":"Networking Foundations- IP Addressing","next":"Networking Foundations- Wide Area Networks (WANs)"}]'
path_count: 1
tags:
  - course
  - topic/security
  - topic/network-and-system-administration
  - skill/local-area-network-lan
  - skill/computer-networking
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Cybersecurity/Networking%20Foundations-%20Local%20Area%20Networks%20(LANs).md)

![Networking Foundations: Local Area Networks (LANs)](https://media.licdn.com/dms/image/v2/D560DAQEkH7sUTxptyw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1727811525153?e=2147483647&amp;v=beta&amp;t=OQLvaoUwMZixXvBcDnTbWqF20PwgcnqhLtGxKLGIOow)

# Networking Foundations: Local Area Networks (LANs)

> In this course, learn how to connect and secure a local area network (LAN) and a wireless area network. LANs are necessary to connect the devices in an organization: to each computer, to printers and servers, to the internet, and to the world. Whether you need to set up a simple LAN at your home or a cable system for an entire office, this course—designed for beginners and professionals alike—prov

> [LinkedIn Learning](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603) | 1h 15m | Beginner | 7K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Learning networking foundations: LANs](#learning-networking-foundations-lans)
  - [What you should know](#what-you-should-know)
- [**1. Local Area Network (LAN)**](#1-local-area-network-lan) (3 videos)
  - [What is a LAN?](#what-is-a-lan)
  - [Components of a LAN](#components-of-a-lan)
  - [LAN topologies](#lan-topologies)
- [**2. Wired LAN**](#2-wired-lan) (6 videos)
  - [What is Ethernet?](#what-is-ethernet)
  - [Ethernet standards](#ethernet-standards)
  - [Copper cable: Twisted pair](#copper-cable-twisted-pair)
  - [Twisted pair cable configuration](#twisted-pair-cable-configuration)
  - [Copper cable: Coaxial cable](#copper-cable-coaxial-cable)
  - [Fiber optic cables](#fiber-optic-cables)
- [**3. Wireless LAN**](#3-wireless-lan) (3 videos)
  - [What is wireless LAN?](#what-is-wireless-lan)
  - [Wireless standards](#wireless-standards)
  - [Wireless LAN configuration via SOHO router](#wireless-lan-configuration-via-soho-router)
- [**4. LAN Configurations**](#4-lan-configurations) (4 videos)
  - [DHCP: Dynamic Host Configuration Protocol](#dhcp-dynamic-host-configuration-protocol)
  - [DNS: Domain Name System](#dns-domain-name-system)
  - [VLAN: Virtual local area network](#vlan-virtual-local-area-network)
  - [LAN security](#lan-security)
- [**Conclusion**](#conclusion) (2 videos)
  - [LAN troubleshooting](#lan-troubleshooting)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learning networking foundations: LANs](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/learning-networking-foundations-lans?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/learning-networking-foundations-lans?u=76281980&t=0)** - [Jarrel] A LAN is different from a MAN, WAN, or a PAN, but is somewhat related to [[Wi-Fi|wireless LAN]] and a VLAN. If you're like, "Wait, what was that again?" That's okay 'cause that's what we'll cover in this course. We will first talk about what is the [[Local Area Network (LAN)|local area network]], or the LAN. Then we'll look at the various ways of connecting to a LAN from copper cables of twisted pairs and coax to fiber optic cables and even wireless. We'll also cover some of the LAN configurations, like VLANs, [[DHCP]], and LAN security. Hi, I'm Jarrel Rivera and it is my pleasure to welcome you to the digital neighborhood, where devices chat and share resources, and that is LAN, or the local area network. Let's start.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Local Area Network (LAN)|Local area network]] (2), [[Wi-Fi|Wireless lan]] (1), [[DHCP]] (1)
> **Env Vars:** lan (7), man (1), wan (1), pan (1), vlan (1)
> **Speakers:** - [jarrel] (1)

#### [What you should know](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/what-you-should-know?u=76281980&t=0)** - [Instructor] In this course, we'll be covering topics related to [[Computer Networking]]. For that matter, it is ideal if you're already familiar with the terms like SOHO or the small [[Microsoft Office|office]] home office network, IP addresses, [[Network Switches]], [[Wi-Fi]], copper cables, and fiber optics. Also, later in the course I'll be doing some basic demonstrations using [[Wireshark]] and a SOHO router emulator from TP-Link. The emulator is publicly available. Check out the link from the course handout so you can also try it for yourself. Now, there could be some concepts that you may already know, but hey, stick around cause you never know, there might be something new for you to learn. Having said that, if you are all good to start, then let's proceed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (2), [[Computer Networking]] (1), [[Network Switches]] (1), [[Wi-Fi]] (1), [[Wireshark]] (1)
> **Env Vars:** soho (2)
> **Cross-References:** later in (1)
> **Speakers:** - [instructor] (1)


### 1. Local Area Network (LAN)

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a LAN?](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/what-is-a-lan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/what-is-a-lan?u=76281980&t=0)** - [Instructor] Let's start with the question, what is a LAN? LAN stands for [[Local Area Network (LAN)|local area network]]. As the name implies, it is a type of network where devices are connected within a local area. An example of which are the networks that we have in our homes, offices or at school, and there are various ways of how we can connect devices in a LAN. We can use wires like coaxial cable, twisted pair cables, via fiber optic cables, and we can also connect wirelessly. Yes, the [[Wi-Fi]] that we know is actually a [[Wi-Fi|wireless LAN]], a wireless local area network. So, what's the benefit of connecting to a LAN? Well, within a LAN or a local area network, the devices can talk to each other and share resources. If you come to think about it, how is it that the people within your workplace are able to print to the shared local printer? That is because of LAN. How is it that we can access the same server in our [[Microsoft Office|office]]? That is also because of LAN. And LANs are not limited to homes and offices, by the way. It is also present in data centers, computer labs at schools, and even in industrial networks. Yes, we can connect the PLCs or the programmable logic controllers and sensors to a LAN so that they can all be managed centrally to a server. Cool, eh? This type of setup where devices connect to a server is what we refer to as a client/server LAN. The clients are the devices that connect to the server, whereas the server is the one providing a service.
>
> **[1:35](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/what-is-a-lan?u=76281980&t=95)** Now, the services that can be provided in a LAN may include file storage, application access, and network services, like with DNS and [[DHCP]]. Wondering about these LAN configurations? Don't worry, we'll cover them in a succeeding video. Meanwhile, there's also a type of LAN known as a peer-to-peer LAN. In this setup, the devices directly communicate and share resources with each other. There's no central device that acts as a server in a peer-to-peer LAN. If you think about it, this is the common setup that we have in our home networks. Now, don't get confused with a LAN, MAN, WAN, and a PAN. While a LAN is confined within a local area, a MAN, or metropolitan area network, is a network that spans across a city or a suburb, whereas a WAN refers to a wide area network relating to network connections across geographic regions, like the internet, for example. Now, how about a PAN? PAN refers to a personal area network. Having said, it is a network for a personal area or space. Hence a PAN, or personal area network, is much smaller than a LAN Think of the connectivity of your Bluetooth headset to your mobile phone. That is a PAN. Whereas the connection of multiple computers in a computer lab or in an office is a local area network or a LAN. In summary, a LAN, or a local area network, is a type of network that is used
>
> **[3:09](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/what-is-a-lan?u=76281980&t=189)** to connect multiple devices within a local area to enable communication and sharing of resources with each other. But how can we connect to a LAN? That is what we'll cover next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Local Area Network (LAN)|Local area network]] (5), [[Microsoft Office|Office]] (2), [[Wi-Fi]] (1), [[Wi-Fi|Wireless lan]] (1), [[DHCP]] (1)
> **Env Vars:** lan (21), pan (5), man (2), wan (2), dns (1)
> **Definitions:** is a  (7), refers to (2), stands for (1), known as (1)
> **Prerequisites:** setup (3)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Components of a LAN](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/components-of-a-lan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/components-of-a-lan?u=76281980&t=0)** - [Instructor] There are various components that make up a LAN, or a [[Local Area Network (LAN)|local area network]]. We've got the hosts, or the end devices, the intermediary devices such as the switch, routers, and access points, as well as the network media, like the cables or the [[Wi-Fi|wifi]] connection. In this video, let us cover each of these components, starting with the end devices. When we say end device, we are referring to the devices that we connect to the network like our laptops, desktops, printers, VOIP phones, IP cameras, and even your mobile phones. These endpoints connect to the network and serve as either the source or destination of the messages that are transmitted over the network. In order for these devices to connect to the LAN, there need to be a [[NIC|network interface card]], or [[NIC]], that is installed. The NIC can either be a wired NIC where you can plug in your twisted-pair cable or a wireless NIC for connecting to a wireless network. Yes, even your mobile phones have a wireless NIC inside. Within the NIC, or the network interface card, is a physical address known as the MAC address. It is a 48-bit address represented in hexadecimal and is unique to each device. This is the address that is used by our devices to communicate with one another. You might then wonder, shouldn't it be an IP address? Well, an IP address is used for communicating across networks.
>
> **[1:34](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/components-of-a-lan?u=76281980&t=94)** For a common LAN, or a local area network, the devices use a MAC address instead. In today's time, our devices also communicate outside of the LAN, such as when we connect to the internet. For that matter, our devices are then configured with IP addresses. Now, we said that we can connect to a LAN either via wired or wireless. The medium or channel over which our devices communicate is what we refer to as the network media. There are various media that we can use. There's the copper cables like coaxial cable and twisted-pair cables, there's the fiber optic cables, and via wireless transmissions like the [[Wi-Fi]]. The signal encoding is different for each media type. For copper cables, the data is encoded into electrical pulses. For fiber optic transmissions, the data is encoded into pulses of light. Whereas in wireless transmission, the data is transmitted via electromagnetic waves. Pretty cool, right? Each network media has their pros and cons and a reason why one media is preferred on certain instances versus the others. It is important to know the differences between each of them, so [[Representational State Transfer (REST)|rest]] assured that we'll cover them separately in the succeeding videos. Finally, we've got the intermediary devices. Think of the network switch, the routers, and the wireless access points.
>
> **[3:07](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/components-of-a-lan?u=76281980&t=187)** That is what we refer to as the intermediary devices. Intermediary, because they're used to interconnect our end devices to one another. Ah. So what's the difference between a switch, a router, and an access point? A network switch is used within a LAN. It uses a MAC address table to send frames to the correct destination. A router, on the other hand, is used for sending packets across the network. Now, can you guess what type of address is used by a router? Hmm, yep, it's an IP address. Having said, for connecting devices within a LAN, a switch is what we need. However, for connecting across the network, such as when browsing the internet, then we'll need a router instead. Meanwhile, a wireless access point is the device used to connect our devices to the Wi-Fi or to the wireless local area network. But wait, you might then think of your home network setup wherein what you got is a wireless home router. So what's that? Is it a switch, a router, or an access point? Well, the answer is all of them. A SOHO router, or a small [[Microsoft Office|office]]/home office router, has the capability to connect you to the internet. Hence, it is a router. It commonly also has LAN ports to connect your devices via wired cable to a LAN. Hence, it's a switch too.
>
> **[4:42](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/components-of-a-lan?u=76281980&t=282)** Finally, many SOHO routers have antennas which enable you to connect your devices wirelessly. For that matter, it acts as an access point. It's a three-in-one device combining a router, a switch, and an access point. Now, a SOHO router only has limited number of ports, so it is only ideal for small office or home office networks. How about for large networks? For larger networks, we need intermediary devices that can meet the needs of the business, for which case switches with 24, 48 or even hundreds of ports might be required. We also now have cloud managed devices such as Cisco Meraki, which enables monitoring and management of network devices over the internet. With the advent of virtualization, we also now have virtual [[Network Switches]] and routers that could be ideal for large enterprises and cloud managed solutions. To know more about the various considerations when selecting network devices kindly refer to the course handout as well. Meanwhile, you might have also heard of a network hub. A network hub is an active repeater in a sense that when it receives a signal from one port, it then sends it to all other devices connected to it. If two or more devices would send a signal at the same time, then there would be a collision. Yikes! For this matter, we don't commonly use hubs anymore in our modern networks.
>
> **[6:16](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/components-of-a-lan?u=76281980&t=376)** It's still covered in many books and references, but instead of hubs, what we now use are network switches instead. As you can see, there are various components that make up a LAN. Each of these components play a vital role in our network. The number of these components and the types of components used in a LAN may vary depending on the complexity and size of the network. So what does a LAN connection look like? That is network topology, and that is what we'll cover next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[NIC]] (6), [[Microsoft Office|Office]] (4), [[Local Area Network (LAN)|Local area network]] (3), [[NIC|Network interface card]] (2), [[Wi-Fi]] (2)
> **Env Vars:** lan (12), nic (6), mac (3), soho (3), voip (1)
> **Definitions:** is a  (4), known as (1), is an  (1)
> **Analogies:** such as (4)
> **CLI Commands:** make (2)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [LAN topologies](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/lan-topologies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/lan-topologies?u=76281980&t=0)** - [Presenter] A network topology refers to how the devices in the network are connected to each other. For a LAN or a [[Local Area Network (LAN)|local area network]], this may refer to how various end devices are connected. There are five common LAN topologies. These are bus, tree, ring, star or hub-and-spoke and [[Mesh]]. Let us talk about each of these starting with a bus topology. In a bus topology, each device is connected to a single length of cable, referred to as the bus. It is a simple topology and easy to build. However, if the cable breaks, then the network connection will also be broken. The tree topology is a logical extension of the bus topology. Notice that with a tree topology, there's only one active data path between any of the endpoints. Did you notice that? It is called the tree topology because much like a tree, the network begins at the root and expands to the [[Representational State Transfer (REST)|rest]] of the network going to the end points. In this topology, the physical cable plant is known as the branching tree. Next is the ring topology. Can you guess why it's called the ring topology? Yep, it's called the ring topology because the devices are connected to each other enclosed in a loop. This topology is used in implementation, such as Token Ring or IEEE 802.5, and in FDDI or Fiber Distributed Data Interface. And like in a bus topology, there are various cable segments
>
> **[1:37](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/lan-topologies?u=76281980&t=97)** with a star topology, and so even if one of the cable segments break, there will continue to be network connectivity with the rest of the network. Having said, the single point of failure, however, in a star topology is the central device or the hub. So, what can we do to mitigate it? In today's time, it is common to employ redundancy either on a link or on a device level so as to provide continuity amidst a failure in one of the links or one of the devices in the network. Having redundant connections across the devices then results in a mesh topology. This type of topology brings the highest reliability among the five topology types that we discussed. However, this can also be the most costly to build and keep due to the multiple links that we have. One good example of a mesh is with a wireless mesh network. For large networks, it is advised to use the hierarchical design model. In this way, it will be much easier to manage any changes on the subset of a network, limiting the impact to the rest of the network system. A hierarchical LAN design consists of the following three layers. We've got the access layer, distribution layer, and the core layer. The access layer is where the endpoints are connected to. The access switches then connect or aggregate to the distribution layer. And finally, the core layer provides the connectivity up to the internet.
>
> **[3:12](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/lan-topologies?u=76281980&t=192)** For medium enterprises, it is possible to collapse the core layer and distribution layer into a single layer so as to reduce the complexity and cost. This is known as the two-tier hierarchical design or also referred to as collapsed-core design. Every network is unique, and each business has their own distinct requirements. Understanding the various LAN topologies is crucial for building an efficient and effective network setup. Take a moment to review the different LAN topologies that we have just discussed and identify which one aligns best with your specific needs and network environment.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Mesh]] (4), [[Representational State Transfer (REST)|Rest]] (3), [[Local Area Network (LAN)|Local area network]] (1)
> **Env Vars:** lan (5), ieee (1), fddi (1)
> **Definitions:** is a  (2), known as (2), refers to (1), is called (1)
> **Versions:** 802.5 (1)
> **Cross-References:** we discussed (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [presenter] (1)


### 2. Wired LAN

[↑ Back to Table of Contents](#table-of-contents)

#### [What is Ethernet?](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/what-is-ethernet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/what-is-ethernet?u=76281980&t=0)** - [Instructor] There are two LAN technologies that are currently being used. We got the Ethernet and the wireless LANs. In this section of our course, let's start with the ethernet. Ethernet refers to a family of networking technologies defined in the IEEE 802.2 and and IEE 802.3 standards. It has become the defacto standard for wired communications, hence when you hear the term Ethernet, you can then think of a wired [[Local Area Network (LAN)|local area network]]. Wired LAN, which means it includes twisted-pair coaxial cables and fiber optics. Ethernet standards specify the protocols operating at layers one and two of the OSI model, which points to the physical and data link layers. Layer one deals with the media that we will be using, whether a copper cable, fiber optic cable, or via wireless. Layered though, on the other hand, deals with how to forward the frame within and outside of the local network. So if Ethernet operates at layers one and two, this means Ethernet covers the layers that are responsible for data encapsulation, media access control, and data link layer addressing. Very important, isn't it? For us to better understand how Ethernet works, let us look at this packet capture using [[Wireshark]]. This is a packet capture of an ARP request and reply. ARP, or the address resolution protocol is the protocol
>
> **[1:35](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/what-is-ethernet?u=76281980&t=95)** that manages the mapping of IP addresses to MAC addresses, which is essential so that our devices can communicate on the same local network. Let us now look at one of the packets and inspect the ethernet frame. Did you notice the type of address used in the ethernet frame for destination and the source? Yep, it's a MAC address, just like what we expected as per the Ethernet structure. Now, aside from the source and destination MAC addresses, we also see the type. This identifies the upper layer protocol that is encapsulated in the Ethernet frame. For our example, it is a packet capture of an address resolution protocol or ARP request and reply. And that is why in the Type field it shows ARP. Notice that for this, our packet capture, our Ethernet frame has padding. But why? You see, the minimum Ethernet frame size is 64 bytes. When the transmitted frame is less than the minimum, this could cause frames to be dropped. For that matter, padding is used to ensure that frames meet the minimum size requirement. Ooh, by the way, small sized frames are called runts, whereas frames that are larger than 1,518 bytes are called giants. And then down below, we now have the data for our ARP. Nice, right?
>
> **[3:08](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/what-is-ethernet?u=76281980&t=188)** Once again, within an Ethernet or a wired local area network, the address used is the MAC address or the physical address that is configured in our network interface cards. Meanwhile, the ARP or the address resolution protocol helps in mapping the IP addresses to MAC addresses of our devices. The items which are not shown in the capture are the preamble and the frame checks sequence fields. The preamble is found at the start of the Ethernet frame, containing synchronization bits which are processed by the [[NIC|network interface card]]. On the other hand, the frame check sequence or FCS is used to identify errors during the transmission and is verified by the receiver. Ethernet was first developed back in the 1970s. In its early years, Ethernet used a contention based access method known as CSMA/CD or carrier sense multiple access collision detection. Let me explain. Before transmitting data, a device would first listen to the network to check if the medium is free, hence carrier sense. The reason is because multiple devices do share the same transmission medium. That is multiple access. So what happens in case two devices would transmit at the same time, a collision will happen, which is then detected by the end devices. Hence collision detection.
>
> **[4:42](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/what-is-ethernet?u=76281980&t=282)** The devices will then wait for a random back off period, then attempt to retransmit. And that is CSMA/CD in a nutshell. It was a fundamental part of Ethernet technology in its early days, but it is now less used in today's time with advancements in networking technology. Wait, if Ethernet is an old standard, how is it still relevant in today's time? Has it been updated since then? Good questions. That is what we'll cover next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Local Area Network (LAN)|Local area network]] (2), [[Wireshark]] (1), [[NIC|Network interface card]] (1)
> **Env Vars:** arp (6), mac (5), lan (2), csma (2), ieee (1)
> **Definitions:** is a  (2), refers to (1), known as (1), is an  (1)
> **CLI Commands:** cd (2)
> **Versions:** 802.2 (1), 802.3 (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Ethernet standards](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/ethernet-standards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/ethernet-standards?u=76281980&t=0)** - [Narrator] Let us now talk about Ethernet standards. Historically, when Ethernet has not yet been developed, each vendor would have their own proprietary method for connecting network devices. If you tried to connect a network device from vendor A to another network device from vendor B, they just might not work, and that was a real pain. Hence, standards were developed so that network equipment from different vendors could interconnect with one another. Among the standards that were created was the Ethernet. Ethernet was created in 1973 under IEEE 802.3. I know, it has been some time, right? However, unlike other standards, Ethernet has evolved over time, which is probably one of the reasons that it became so popular and that it is now that the de facto standard for wired local area networks. Let us look at Ethernet's standard notation. Say we got 100Base-T. The leading number refers to the transmission speed in megabits per second. In our example, we got 100, so that is 100 Mbps. What if we got 1000? Yep, that is 1000 Mbps, or that is equivalent to one gig. How about if it is 10GBase-T? What do you think? Yep, that is 10 gig indeed. Then 40G for 40 gig, and 100G for 100 gig.
>
> **[1:34](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/ethernet-standards?u=76281980&t=94)** Nice. After the number, we got the [[Microsoft Word|word]] Base, referring to baseband transmission, and finally, T to denote that it is for twisted-pair cable. There could also be cases where you might see 100Base-TX or D4 instead. The appended letter or number is used to identify the line code method that is used, so as to differentiate one standard to another. In today's time, we also use fiber optic cables for gigabit networks, for which the following are used. 1000Base-SX. The S refers to short distance, which is commonly used with multimode fiber. We also have 1000Base-LX, where in the L that refers to long distance, which is common for single-mode fiber. You might also see 1000Base-RHx in some fiber optic [[Microsoft Products|products]] in the market right now, especially in the automotive industry. RH refers to robust high-speed, which is used for gigabit Ethernet over step-index POFs, or plastic optical fibers. We've also used coaxial cables in Ethernet. Back in the 1980s, we had standards like 10Base2 and 10Base5, which used coaxial cables. 10Base2 has a speed of 10 Mbps, with maximum segment length of approximately 200 meters, hence 10Base2.
>
> **[3:11](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/ethernet-standards?u=76281980&t=191)** This is also known as thinnet, because it used thin coaxial cables that were terminated with BNC connectors. 10Base5, on the other hand, has a speed of 10 Mbps with maximum segment length of 500 meters. This is also known as thicknet, because of its use of thick coaxial cables. As you can see, Ethernet standards have evolved over time to support higher network speeds and bandwidth. This [[Scalability]] ensures that Ethernet can meet the growing demands of modern networks, and that is why Ethernet is still used up until today.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1), [[Microsoft Products|Products]] (1), [[Scalability]] (1)
> **Definitions:** refers to (4), known as (2)
> **Env Vars:** ieee (1), bnc (1)
> **Versions:** 802.3 (1)
> **Speakers:** - [narrator] (1)

#### [Copper cable: Twisted pair](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/copper-cable-twisted-pair?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/copper-cable-twisted-pair?u=76281980&t=0)** - [Instructor] Let us now talk about twisted-pair cables. Twisted-pair cables are called as such because, inside it, are pairs of cables that are twisted together. This twisting of cables help reduce the effects of crosstalk or the interference that could be caused by an adjacent cable. There are two common types of twisted-pair cables. We got the UTP, or the Unshielded Twisted-Pair, and the STP, or the Shielded Twisted-Pair. As the name implies, UTP is unshielded, which means that the cable does not have any additional shielding, unlike STP. Because of this, UTP is less expensive than STP, and is ideal for home and [[Microsoft Office|office]] environments where there is minimal Electromagnetic Interference, or EMI, or Radio Frequency Interference, or RFI. On the other hand, in an STP, or a Shielded Twisted-Pair cable, each pair of wires is individually wrapped in a shielding material, such as a [[Mesh]], or an aluminum foil, which makes it less prone to Electromagnetic Interferences or Radio Frequency Interferences. Because of this, STP is the better choice for industrial settings, where there are heavy machineries or radio and electrical installations. An example of STP is the Foil Twisted-Pair, where each twisted-pair is individually wrapped in foil shielding.
>
> **[1:34](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/copper-cable-twisted-pair?u=76281980&t=94)** In some cases, an STP cable may also have an overall braided shield for added layer of shielding. Now, please be aware that the maximum cable length for using STP or UTP is only up to 100 meters, or that is 385 feet. Beyond this distance, the signal quality degrades, which may lead to reduced speeds and increased packet loss. Meanwhile, there are various categories of ethernet cables that are currently in use. We got CAT3, CAT5, CAT5e, CAT6, CAT6a, CAT7, and CAT8. Now, when I say cat, this one is referring to category of cable, not the meow cat that you might know. (laughs) CAT3 cable is used in PSTN, or the Public Switched Telephone Network. It is terminated by RJ11, and was the cable used in connecting the telephone line to the dial-up modem back in the days. CAT5, CAT5e, CAT6, and CAT6a cables are all terminated via 8P8C, or commonly known as RJ45. The e in CAT5e refers to enhanced, being an improved version of CAT5 cable. Meanwhile, the a in CAT6a cable refers to augmented, noting the performance improvements over its predecessor of CAT6. From this table, notice that the higher the category number,
>
> **[3:10](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/copper-cable-twisted-pair?u=76281980&t=190)** the higher the speed that it can support. For example, CAT6 cables can support 10 Gbps speeds as compared to CAT5e that can only support one gigabit of speed. CAT5e and CAT6a cables are what we commonly use in our home and office networks. CAT7 cables were introduced as a standard in the early 2000s. It is designed with better shielding than CAT6, and it can support speeds of 10 gigabit per second. As for CAT7a, it can support speeds of up to 40 gigabit per second. CAT7 and CAT7a cables are terminated by TERA or GG45, or that is Giga Gate 45. Finally, we got CAT8. CAT8 is the latest category of cable in our list, well, at least as of this writing. CAT8 cables were released in 2016 and are designed for high-speed data transmission, supporting speeds of up to 40 gigabit per second. They are terminated by shielded RJ45 connectors, which are specifically designed for CAT8. CAT7 and CAT8 cables are commonly used in data centers and enterprise networks. Now, when you look at the inside of a twisted-pair cable, what you'll see are four twisted-pair cables that have different colors. There's orange, white with orange stripes, blue, white with blue stripes,
>
> **[4:45](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/copper-cable-twisted-pair?u=76281980&t=285)** green, white with green stripes, brown, and white with brown stripes. And you'll be like, "Eh? How do we then configure it?" Well, there are standards for it, and that is what we'll cover next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (2), [[Mesh]] (1)
> **Env Vars:** stp (8), cat8 (6), cat6 (5), utp (4), cat7 (4)
> **Definitions:** refers to (2), means that (1), known as (1)
> **CLI Commands:** cat (2)
> **Analogies:** such as (1), for example (1)
> **Warnings:** be aware (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Twisted pair cable configuration](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/twisted-pair-cable-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/twisted-pair-cable-configuration?u=76281980&t=0)** - [Instructor] In this video, let us talk about the twisted-pair cable configurations. ANSI/TIA-568 is the cabling system standard that we use today. In some references, you might see TIA/EIA-568 instead. But hey, they're actually referring to the same set of standards anyway. The name changed to ANSI/TIA-568 in 2011 after the [[Electronics]] Industries Alliance or EIA has ceased its operations. So what's with the T568 standard? Under the ANSI/TIA-568 is the definition of the pinout assignments or the arrangements between the connection and the wires in the cable. The standard defines two alternative pinouts: T568A and T568B. Now, what do you see? First, notice that the wires alternate between the stripe and the solid color wires. For T568A, it's stripe green, solid green, stripe orange. Then check out the break in the pattern. It's solid blue, then stripe blue, and then back to solid orange, followed by stripe brown and solid brown. Meanwhile, for T568B, notice that it starts with the stripe orange, then solid orange, stripe green. Then once again we got the break in pattern. It's solid blue, then stripe blue, then back the solid green,
>
> **[1:33](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/twisted-pair-cable-configuration?u=76281980&t=93)** followed by stripe brown and solid brown. Also, take note of the starting colors. T568A starts with a stripe green, whereas T568B starts with a stripe orange. Basically, the green and orange pairs are swapped. For both pinouts, the fourth and fifth pins are the same, with solid blue and stripe blue. Same thing with pin seven and eight, stripe brown and solid brown. And so you may ask, okay, so we got two pinout configurations. When do we use them? If both ends of the cable use the same pinout configuration, say both are T568A or both are T568B, this is what we refer to as a straight-through cable. We use a straight-through cable for connecting different devices such as PC to switch and switch to a router. Meanwhile, if one end of the cable is configured with T568A and then the other end of the cable is T568B, this is what we refer to as a cross-connect or a crossover cable. This is commonly used for connections between similar devices, such as for PC to PC, switch to switch, or router to router, and the only exception to the rule is PC to the router. On the other hand, if one end of the cable is using either T568A or T568B, and yet the other end is reversed,
>
> **[3:08](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/twisted-pair-cable-configuration?u=76281980&t=188)** this is what would refer to as a rollover or a console cable. Not the console, like the gaming console. Rather, I'm referring to the connection via the console port on the network device. We usually use a console cable for configuration and management of our network devices. Wait, does it mean that we need to be aware of the type of cable we are using and what devices we are connecting? Ideally, yes, it would be great to check first the type of cable you got before you connect it to your devices. But you see, there's now a feature in many modern devices known as Auto-MDIX, or automatic medium-dependent interface crossover. With this feature, the network device can now automatically detect the type of cable that is connected to the port, whether it's straight-through or crossover, and the device will automatically adjust the connection accordingly. Nice, right? Auto-MDIX helps to minimize the risk of connection errors due to incorrect cabling. Having said that, it is still good to know the various types of cable configurations and when to use them 'cause Auto-MDIX may not be available in all devices. And that's it for twisted-pair cable configurations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Electronics]] (1)
> **Env Vars:** t568a (6), t568b (6), tia (4), ansi (3), mdix (3)
> **UI Navigation:** switch to (2)
> **Analogies:** such as (2)
> **Definitions:** known as (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Copper cable: Coaxial cable](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/copper-cable-coaxial-cable?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/copper-cable-coaxial-cable?u=76281980&t=0)** - [Instructor] Let us now talk about coaxial cables. Yes, coaxial cables, much like the ones at the back of your TV. Coaxial cables were used in local area networks for thin net and thick net implementations. That was back in the 1980s and 90s when 10Base2 and 10Base5 deployments were used. Coaxial cables are less susceptible to EMI or RFI interferences than twisted-pair cables. This it's due to their construction. To better understand, let us take a closer look. From the center is a solid conductor which is then surrounded by an insulating layer, followed by a tubular conducting shield, typically made of braided wire or foil. This shield is what protects the inner conductor from unwanted signals. Since there is less signal loss on coaxial cable as compared to twisted-pair, signals can then travel further in coaxial cables to approximately 500 meters or 1,640 feet. The common connectors used with a coaxial cable are the BNC, short for British naval connector or Bayonet Neill-Concelman, and the F connector. These are commonly used in television, satellite communications, and other RF applications. And so you might then ask if coax is that good, why is it that twisted-pair cables are more commonly used in LAN implementations instead of coax?
>
> **[1:34](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/copper-cable-coaxial-cable?u=76281980&t=94)** Well, I'll share three reasons. First is the cost. Twisted-pair cables are generally less expensive than coaxial cables, making it a more cost effective option for home and [[Microsoft Office|office]] networks. Second reason is the ease of installation. Twisted-pair cables are thinner and more flexible than coaxial cables, which makes it ideal for tight spaces and complex network layouts. And finally, transmission rates. Don't get me wrong, coaxial cables have good bandwidth, but may not be as high as CAT7 or CAT8 cables for data transmission. While the use of coaxial cables for local area networks has declined, is not the end for coaxial cables though. We use coaxial cables for WAN, or wide area network implementations, or that is for long distance networks that can even span across geographic boundaries. How about for LAN? Can we still use coax for LAN? The answer is yes. If you got dark coax, I mean coaxial cables that are unused with no signals passing through it, then you can use MoCA adapters or Ethernet-to-coax adapters. MoCA stands for multimedia over coax alliance. MoCA adapters can be used to enable the use of your existing coaxial cable infrastructure to create a high-speed wired Ethernet network. MoCA adapters are typically plug and play.
>
> **[3:08](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/copper-cable-coaxial-cable?u=76281980&t=188)** You connect one adapter to your modem router and another to a coaxial port near your device, and that's it. You'll now be able to use coax to an Ethernet wide LAN. In summary, coaxial cables have been used in network implementations for a long time and are still being used for wide area networks. While its use in LAN implementations has declined, existing dark coaxial cables can still be used for Ethernet with the use of MoCA adapters or ethernet-to-coax adapters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (1)
> **Env Vars:** lan (5), emi (1), rfi (1), bnc (1), cat7 (1)
> **Definitions:** is a  (1), short for (1), stands for (1)
> **Speakers:** - [instructor] (1)

#### [Fiber optic cables](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/fiber-optic-cables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/fiber-optic-cables?u=76281980&t=0)** - [Narrator] Have you heard of the phrase, "Moving at the speed of light"? Well, in case you haven't, it means lightning fast, very fast. And that's what happens with fiber optic cables. The data is encoded into pulses of light, and because of that, we are then able to have faster network connections as compared to copper cables. But, how are we able to do that? To understand, let us take a closer look. Here's a diagram of an optical fiber. Inside, we got the glass fiber and the cladding. The core layer, which is the one in the middle, is made up of pure glass with high index of refraction. The cladding on the other hand, is also made up of glass, but with a lower index of refraction. This difference in material is what keeps the light inside the fiber core. Think of it much like a pipe or a tunnel that leads the light to where you need it to be sent, which then enables network transmissions for long distances. And when I say long distance, I mean even across countries and continents. Far out! Let us go back to our diagram. We can also see that the optical fiber is then surrounded by layers of plastic shield, followed by an outer jacket to protect the cable. Now, there are two types of fiber optic cables. We got the single-mode and the multi-mode. In a single-mode fiber, as the name implies, there's only one mode or wavelength of light that propagates through the fiber. It uses lasers as the light-generating method.
>
> **[1:35](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/fiber-optic-cables?u=76281980&t=95)** Nice, right? But the caveat is that it's more expensive than multi-mode fiber. Single-mode fiber is found to be capable of higher bandwidth and greater distances than multi-mode, and is therefore often used for network backbones. On the other hand, multi-mode fiber allows multiple or many modes of light to propagate through the fiber. It uses LEDs or light-emitting diodes as light generating devices. It is cheaper than single-mode and is typically used for network connections within buildings with shorter distances than a single-mode. There are various connectors that can be used with fiber optic cables. We got SC connectors, LC, FC, and ST, to name a few. If you'd like to learn more about the various fiber connectors, then kindly also check the course handout. The use of fiber optic cables in networking has enabled us to gain higher transmission speeds and be able to transmit at longer distances. Fiber optic cables are also not susceptible to EMI or RFI interferences, making it an ideal medium for noisy environments. Having said, please be aware that fiber optic cables can be more expensive than copper cable and may require a special set of skills to splice and terminate. So ensure to weigh your options when selecting which you want to use for your local networks.

> [!info]- Semantic Content
>
> **Env Vars:** emi (1), rfi (1)
> **Warnings:** caveat (1), be aware (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [narrator] (1)


### 3. Wireless LAN

[↑ Back to Table of Contents](#table-of-contents)

#### [What is wireless LAN?](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/what-is-wireless-lan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/what-is-wireless-lan?u=76281980&t=0)** - [Instructor] Let us now talk about [[Wi-Fi|wireless LAN]]. Yes, wireless, which means no wires. More likely you've either connected or seen other people connecting to the internet via [[Wi-Fi]]. That's it. Wi-Fi is an example of a wireless LAN. With wireless communications, we use radio frequencies to transmit data. For Wi-Fi specifically, we commonly use frequencies of either 2.4 gigahertz, 5 gigahertz, or 6 gigahertz. Something to note though, the lower the frequency, the longer the range, but narrower bandwidth capacity. Meanwhile, the higher the frequency, the bigger the bandwidth capacity, but shorter range. Having said, when comparing 2.4 gigahertz to 5 gigahertz, for example, 2.4 gigahertz has narrower bandwidth and has a slower speed than 5 gigahertz, but 2.4 gigahertz can have a longer range. 2.4 gigahertz is found to be able to penetrate through walls, that means it can be accessed from one room to another, whereas 5 gigahertz would have a more limited reach. One of the key benefits of wireless LAN is mobility. It has enabled us to use our mobile devices such as mobile phones and laptops, then move around at home or in the [[Microsoft Office|office]] while staying connected over the network. It has freed us from cable wires. But wireless LAN is not limited to Wi-Fi though. One other option is infrared communications.
>
> **[1:36](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/what-is-wireless-lan?u=76281980&t=96)** While it may not have as wide usage as Wi-Fi, it is actually a viable form of wireless LAN, such as for short range connections with remote controls and home automation devices, as well as in line of sight communications across buildings or sites. Speaking of home automation, we also now have wireless networks for connecting [[IoT]] devices. IoT refers to [[IoT|internet of things]]. These are devices that we can connect to the network or to the internet with the use of wireless technologies such as Zigbee, ANT+, or Z-Wave among many others. These wireless technologies enable us to connect to and manage various IoT devices. And the most recent innovation, well at least as of this writing, is LiFi or light fidelity which uses light. And when I say light, I'm referring to, yes, the visible light and the non-visible light such as ultraviolet and infrared. It is really a pretty cool technology. If you'd like to learn more, I recommend that you check the IEEE Standard of 802.11bb of 2023. Meanwhile, let's go back to Wi-Fi. In order for our devices to connect to the wireless network, we'll need devices such as this small office/home office wireless router. This SOHO router acts as an access point for our wireless network. However, when purchasing,
>
> **[3:09](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/what-is-wireless-lan?u=76281980&t=189)** or when you are configuring these devices, you might see options like 802.11a, 802.11n, 802.11ac, and you may be like, what are these? These are referring to the wireless standards that are supported by the device. Wondering about these wireless standards? Don't worry 'cause that is what we'll cover next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi]] (6), [[Wi-Fi|Wireless lan]] (5), [[Microsoft Office|Office]] (3), [[IoT]] (3), [[IoT|Internet of things]] (1)
> **Env Vars:** lan (5), ant (1), ieee (1), soho (1)
> **Analogies:** such as (5), for example (1)
> **Versions:** 2.4 (5)
> **Definitions:** is an  (1), refers to (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Wireless standards](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/wireless-standards?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/wireless-standards?u=76281980&t=1)** - [Instructor] IEEE 802.11 sets the standards for implementing wireless local area networks. And so in this video, let us talk about the various [[Wi-Fi|wireless LAN]] standards. And here they are. By the way, just a reminder that you can also refer the course handout if you'd like to have access to a copy of this table. Alright, let us go through the details one by one. In the first column, you will notice that each standard is differentiated by a letter. There's 802.11a, 802.11b, g, n, and so on. I've also placed their common notations of which among these standards referred to [[Wi-Fi]] 4, Wi-Fi 5, Wi-Fi 6, and Wi-Fi 7. Yes, the newest of these standards is 802.11be, also referred to as Wi-Fi 7 standard. There's also an upcoming Wi-Fi 8 but it is still in the works. So not yet included in this table. Now take note of the different frequencies used by each standard and their data rates 'cause these are the important items that you need to know. Notice that both 802.11b and 802.11g use 2.4 gigahertz. However, 802.11b only has a maximum debt rate of 11 Mbps, whereas 802.11g has a maximum debt rate of 54 Mpbs. Meanwhile, 802.11a and 802.11ac
>
> **[1:36](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/wireless-standards?u=76281980&t=96)** both use a frequency of five gigahertz. However, they differ with their maximum data rates as well. 802.11a only has a maximum data rate of 54 Mpbs, whereas 802.11ac can reach 6.9 gigabits per second. Woo. On the other hand, 802.11n, also known as Wi-Fi 4, uses both 2.4 gigahertz and five gigahertz frequencies. Now many routers nowadays would've support for 802.11n. This means that they're capable of using either 2.4 gigahertz or five gigahertz. Finally, do you see the frequencies that can be used by 802.11ax or Wi-Fi 6E, as well as that for 802.11be or the Wi-Fi 7? Hmm, both of these standards use tri-bands, referring to the three bands of frequencies of 2.4 gigahertz, five gigahertz, and six gigahertz. However, as we've seen in earlier standards, 802.11ax and 802.11b also differ in their speeds. So what can we learn from this? One, there are currently three frequencies that can be used in a Wi-Fi environment. There's 2.4 gigahertz, five gigahertz, and six gigahertz. You need to know which of these frequencies is supported by your end devices before you buy
>
> **[3:11](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/wireless-standards?u=76281980&t=191)** and configure a SOHO router. 'Cause it doesn't make sense to configure a five gigahertz wireless LAN if your device only support 2.4 gigahertz, right? Secondly, notice that the newer standards support higher data rates. That means faster speeds. So if you have the option between 802.11n and 802.11ac, which one would you choose, right? I'll leave that in your capable hands to decide. Finally, it is also important to be aware of the commercial names like Wi-Fi 4, Wi-Fi 5, or Wi-Fi 7. They simply refer to the IEEE 802.11 standards, which differ in frequency and data rates. And that's it for the various wireless LAN standards.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi]] (13), [[Wi-Fi|Wireless lan]] (3)
> **Versions:** 2.4 (6), 802.11 (2), 6.9 (1)
> **Env Vars:** lan (3), ieee (2), soho (1)
> **Definitions:** known as (1), means that (1)
> **Prerequisites:** configure (2)
> **CLI Commands:** make (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Wireless LAN configuration via SOHO router](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/wireless-lan-configuration-via-soho-router?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/wireless-lan-configuration-via-soho-router?u=76281980&t=0)** - [Instructor] Let us now look at how to configure a [[Wi-Fi|wireless LAN]] using a SOHO router. Please be aware that the look and feel of a router's interface may differ from one to another, but the basic concepts would still be the same. For this demo, I'll be using an emulator for a wireless router from TP-Link. Specifically, I'll be using an emulator for an Archer AX 90, which is the model name for AX 6600. Here's the view after logging into the router. At the top, we got the menus for network map, internet, wireless, home shield, and advanced. For our end, we are interested in configuring a wireless LAN so let's go to wireless. Here we can see a few settings that we can set. From the top, we can see the options for enabling OFDMA, TWT, or the target wake time, and smart connect. Please be aware that these features may or may not be available in some routers. For our demonstration, we are interested in configuring the wireless LAN, so we'll focus on the lower sections instead. Notice that we got sections for 2.4 gigahertz, 5 gigahertz one and 5 gigahertz two. This router is a tri-band router, and that is why we see all these three sections in here. Tri-band, meaning it can work across three different bands at the same time.
>
> **[1:34](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/wireless-lan-configuration-via-soho-router?u=76281980&t=94)** For some SOHO routers, they may only have 2.4 gigahertz and a single 5 gigahertz channel. Those are dual band routers. For each section, say with 2.4 gigahertz, notice that we got a field for network name, SSID. This is the name of the wireless network that we will be setting up. For a demonstration, say, I'll name this as my home [[Wi-Fi]]. It is ideal to have a unique name for your network name, SSID, or the service set ID, so that later on when you're connecting via Wi-Fi, you would know which one is the network that you need to connect to. Also, please be aware that it is a good practice not to have a space in the SSID or the network name as some devices might not handle spaces well. Instead of spaces, you can use a hyphen or an underscore instead. Notice that there's also a tick box for hiding the SSID. If you opt to hide the SSID, then your wireless network will not be in the list of available networks. In order for you to connect to it later on, you will need to select hidden network and then enter your SSID or the network name. All right. We now have the network name or SSID for our wireless network. Great. It is also good practice to keep your wireless networks away from intruders, right? To do that, we'll then need to apply some security. Notice that we got options for WPA2 personal,
>
> **[3:09](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/wireless-lan-configuration-via-soho-router?u=76281980&t=189)** WPA3 personal, and WPA2 enterprise. WPA refers to [[Wi-Fi|wifi]] protected access, where in WPA3 is the newer security algorithm, which is more secure than WPA2. And so if your router has the option for WPA3, then please use WPA3. Otherwise, use WPA2 at least. Meanwhile, if you have a radio server, then you may opt to select WPA2 enterprise instead. Then enter the server's IP address along with the password. For small [[Microsoft Office|office]] home office networks, we typically use a preshared key or a passphrase, so for this demonstration, I'll select WPA3 personal and then enter a password. This passphrase will be the Wi-Fi password that we'll enter when we connect to this wireless network later on. For our end, I'll enter [[LinkedIn]] demo Wi-Fi, so let me type that one properly and that's it. I know it's pretty long, right? It is a good practice to use passphrases with a mix of letters, numbers, and special characters, so as to better secure your wireless network. And that's it. That's how easy it is to configure a wireless LAN. If you'd like to configure a 5 gigahertz Wi-Fi network as well, simply enable the option for 5 gigahertz,
>
> **[4:43](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/wireless-lan-configuration-via-soho-router?u=76281980&t=283)** provide the SSID or network name, and remember to always secure the wireless network with proper authentication. Now, please remember to click the save button in order for the changes to take effect. It can either be at the bottom of the page or at the top. In some routers, there could also be an option for more advanced settings like encryption, channel, and the mode. For encryption, I do recommend using AES or the advanced encryption standard when possible. Now, remember the wireless standards that we covered in previous video? That is what is being referred to here in the mode. See that? In 2.4 gigahertz, we can select either 802.11ax only, 822.11 BGN mix, or 822.11 BGN ax, meaning it is compatible across all these standards that use 2.4 gigahertz. If you look at the section for 5 gigahertz, then we'll see the standards that use 5 gigahertz frequency, which are the IEEE 822.11 A and ac and the ax. Pretty cool, right? If you're interested in learning more about wireless networks, then you may want to check the other courses here in LinkedIn learning that are specific to wireless networks. Meanwhile, we've just covered how to configure a wireless network using a SOHO router.
>
> **[6:18](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/wireless-lan-configuration-via-soho-router?u=76281980&t=378)** It's your turn now to apply what you've just learned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi]] (5), [[Wi-Fi|Wireless lan]] (4), [[Microsoft Office|Office]] (2), [[LinkedIn]] (2), [[Wi-Fi|Wifi]] (1)
> **Env Vars:** ssid (8), wpa2 (5), wpa3 (5), lan (4), soho (3)
> **Versions:** 2.4 (5), 822.11 (3)
> **Best Practices:** good practice (3), remember to (2)
> **Definitions:** is a  (3), refers to (1)
> **Prerequisites:** configure (4)
> **Warnings:** be aware (3)
> **Cross-References:** we covered (1), previous video (1)


### 4. LAN Configurations

[↑ Back to Table of Contents](#table-of-contents)

#### [DHCP: Dynamic Host Configuration Protocol](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/dhcp-dynamic-host-configuration-protocol?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/dhcp-dynamic-host-configuration-protocol?u=76281980&t=0)** - [Speaker] When configuring a SOHO router or a small [[Microsoft Office|office]] home office router, there are a few configurations that relates to LAN or the [[Local Area Network (LAN)|local area network]], which could be useful in your home or office networks. And so in the succeeding videos, we'll cover [[DHCP]], DNS, VLAN, and LAN security. Let's start with DHCP. DHCP stands for [[DHCP|Dynamic Host Configuration Protocol]]. As the name implies, it is a protocol for dynamic or automatic configuration of IP addresses to host or end devices. Okay, but why do we need it? Imagine if we got a laboratory of 100 computers and we need to assign an IP address to each device. We can manually configure each device, true, but that will take a while, so for that matter, we can then opt to use DHCP instead. Let us see how to configure that. I've got here an emulator for a wireless router from TP-Link. As shared in an earlier video. Please be aware that the look and feel of a router's interface may differ from one to another, but the basic concepts would still be the same. Having said, to configure DHCP in this router, we'll go to advanced, and then on the left-hand side, we'll select DHCP server. Yes, some SOHO routers can act as the DHCP server, which will enable it automatically provide IP addresses to your devices.
>
> **[1:34](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/dhcp-dynamic-host-configuration-protocol?u=76281980&t=94)** Pretty cool, right? First, we'll need to ensure that the DHCP service is enabled. Next, we got the IP address pool. This refers to the range of IP addresses that our router can provide. You can adjust the range however you like, but just be mindful that the address pool needs to be sufficient for all of the devices that will connect to your network. Notice that we also got an address list time in minutes. Yes. IP addresses that are dynamically allocated are not forever. They will only de-list or assigned for a certain period of time. When the lease time is about to elapse. the device will then need to contact the DHCP server to get a new IP address. This typically happens automatically. Otherwise, on a [[Windows]] machine, you can use the command IP config space forward slash renew, so as to get a new IP address. Meanwhile, notice that there's also optional fields for default gateway, primary DNS, and the secondary DNS. The default gateway is the IP address of the router facing the local area network. In our example, we can find the router's IP address in the LAN settings. On the other hand, the primary and secondary DNS are referring to your DNS servers. It is good to have these fields, so
>
> **[3:06](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/dhcp-dynamic-host-configuration-protocol?u=76281980&t=186)** that when a device contacts the DHCP server for an IP address, not only that it'll get an IP address, but it can also automatically learn the IP addresses of the router or the default gateway, as well as that of the DNS servers. There are also cases wherein you might have a device that you commonly connect to the network and you wanted to get a specific IP address. Is that possible? Well, if your device has the capability of DHCP address reservation, then the answer is yes. Simply click on the add button, then enter the MAC address of the device together with the IP address that you would like it to have. Click on save, and that's how simple it is to reserve an IP address.
>
> **[3:59](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/dhcp-dynamic-host-configuration-protocol?u=76281980&t=239)** Down below, we can also see the list of devices that are connected to the network, which then have been assigned with IP addresses by the DHCP server. We have just looked at how to configure DHCP on the SOHO router. It's your turn now to apply what you've just learned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (13), [[Microsoft Office|Office]] (3), [[Local Area Network (LAN)|Local area network]] (2), [[DHCP|Dynamic host configuration protocol]] (1), [[Windows]] (1)
> **Env Vars:** dhcp (13), dns (6), soho (3), lan (3), vlan (1)
> **Prerequisites:** configure (4)
> **Definitions:** stands for (1), is a  (1), refers to (1)
> **UI Navigation:** click on (2)
> **CLI Commands:** find (1)
> **Analogies:** imagine (1)
> **Warnings:** be aware (1)

#### [DNS: Domain Name System](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/dns-domain-name-system?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/dns-domain-name-system?u=76281980&t=0)** - [Instructor] When we configured [[DHCP]] on our SOHO router, one of the optional fields is the DNS. And you might be like, "What's that?" And so, let's talk about DNS in this video. DNS is an acronym which stands for [[Domain Name System (DNS)|Domain Name System]] or Domain Name Server in some references. Either way, it's a computer protocol that matches domain names to their respective IP addresses. Whenever we visit a website, we typically enter the domain name, like www.[example.com](https://example.com), instead of its servers IP address, right? Because it's a lot easier for us to remember domain names than their IP addresses. So, how does our browser know which server to go? Well, that is what DNS is for. It matches domain names to their respective IP addresses. DNS servers can either be hosted within your local network or it can be external, such as your ISP or internet service provider, or from a third-party vendor, such as [[Google]]. Having said, one of Google's public DNS servers has an IP address of 8.8.8.8. It is public, so even you can use it as well. And that is DNS in a nutshell. There is so much more to uncover about DNS. If you're interested, then you may also want to check out my course on learning DNS also here in [[LinkedIn]] Learning. See you then.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2), [[DHCP]] (1), [[Domain Name System (DNS)|Domain name system]] (1), [[LinkedIn]] (1)
> **Env Vars:** dns (9), dhcp (1), soho (1), isp (1)
> **Definitions:** is an  (1), stands for (1)
> **Analogies:** such as (2)
> **URLs:** [example.com](https://example.com) (1)
> **Versions:** 8.8.8 (1)
> **Speakers:** - [instructor] (1)

#### [VLAN: Virtual local area network](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/vlan-virtual-local-area-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/vlan-virtual-local-area-network?u=76281980&t=0)** - [Instructor] Let us now talk about VLANs. VLAN refers to virtual [[Local Area Network (LAN)|local area network]]. As the name implies, it is a local area network, but virtual. And you'll be like, eh, what does it mean? Let us consider this example. Here, we got 10 computers that are currently connected to a single switch. However, what if we wanted to segment or separate the devices across two networks such that PC1 to 5 are in network A, and then PC6 to 10 are in network B. Can we do that? Well, we can do this by connecting five devices to a single switch and then the other five devices to another switch. The reason is that by default, all devices connected to the same switch belong to the same local network. However, while it is possible to have this set up, is it cost effective though? Say the switch that we are using is a 12-port switch. If we got five devices on each switch, that means five interfaces are utilized for the host, and seven are not used, and that is for each switch. So the question is, is it possible to use the same switch but configure it in such a way that the first five interfaces belong to network A, then the other five interfaces belong to network B? The answer is yes, and that is through VLAN.
>
> **[1:35](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/vlan-virtual-local-area-network?u=76281980&t=95)** But wait, earlier we said that by default, all devices connected to the same switch belong to the same local network. Well, that's correct. That is because by default, all interfaces of a switch belong to VLAN 1. So same VLAN, hence the same network. And so what we can then do is to configure new private VLANs and then assign our devices to those. By configuring VLANs, we can then segment or divide the network virtually. We can use VLANs to separate the networks across different departments or to segment each network floors on buildings. But hey, VLANs are not limited to medium and large networks though. To demonstrate, let us use this SOHO router emulator from TP-Link. Let us go to Advanced, IPTV/VLAN, and then I'll just enable this one. Yes, on small [[Microsoft Office|office]]/home office networks, we can use VLANs to separate the traffic for IPTV from the VoIP traffic, as well as the data traffic for our local area networks. Nice, right? IEE 802.11Q sets the standard for VLANs on an Ethernet network. The interfaces connected to end devices can be configured as access ports and are assigned to specific VLAN. For some SOHO routers,
>
> **[3:07](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/vlan-virtual-local-area-network?u=76281980&t=187)** access ports are known as untagged ports. Meanwhile, interfaces connected to another switch or to a router are configured to handle multiple VLANs, such is configured as trunk links, also called as tagged ports in some SOHO routers. So remember, if you need to segment the devices on local network, you may then consider using VLANs or virtual local area network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Local Area Network (LAN)|Local area network]] (3), [[Microsoft Office|Office]] (2)
> **Env Vars:** vlan (6), soho (3), iptv (2), pc1 (1), pc6 (1)
> **Definitions:** is a  (2), refers to (1), known as (1)
> **Prerequisites:** configure (2), set up (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [LAN security](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/lan-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/lan-security?u=76281980&t=0)** - [Instructor] Let us now talk about some of the best practices for securing the [[Local Area Network (LAN)|local area network]]. First is physical security. Sadly, this is one aspect that is often missed out. With physical security, we need to ensure that our network [[Hardware]], routers, switches, and even our network links are all protected from unauthorized physical access. This can be done by placing them in secure rooms with secure racks or cabinets. In the context of availability, you may consider having redundancies in your network design. Redundancies can either be with redundant links or backup network devices, and redundant power as well. This is to help ensure that if one network component fails, then another can take over maintaining network operations with zero to minimal interruptions. Or in the case of the loss of power, then at least you got a UPS or uninterruptible power supply or backup generators so as to keep your systems running. In terms of network protocols, there are redundancy protocols that you can configure, such as FHRP, or first-hop redundancy protocol, HSRP, or hot standby redundancy protocol, GLBP, or the gateway load balancing protocol, or the VRRP, the virtual router redundancy protocol. Redundant systems can also enable you to do load balancing, so as to increase network performance
>
> **[1:35](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/lan-security?u=76281980&t=95)** and avoid or minimize bottlenecks. Having said, please also remember to keep backups of the configurations of your network devices. This will be useful in disaster recovery or in case of data corruption with your network configurations. As for logical security, there are quite a few items to consider. Let's start with authentication. We need to ensure that we use strong passphrases for user accounts, [[Wi-Fi]] access, including the router or switch admin access. For Wi-Fi access, use WPA3-Personal if possible, or WPA2 with pre shared key for small [[Microsoft Office|office]] home office networks. You can also use RADIUS via WPA2-Enterprise for medium to large networks. In terms of encryption, please remember to use strong encryption like AES, such as in Wi-Fi advanced configuration. You can also opt to use VPN or [[Virtual Private Network (VPN)|virtual private network]] to keep your network secure. Next is authorization. This looks at permissions and access controls. For networks, you can opt to use whitelists such as web filtering or use MAC address filtering, so as to limit which devices would be allowed to connect to the network. You can also use systems and devices like firewalls, along with IDS or [[Intrusion Detection]] system, and IPS or intrusion prevention systems
>
> **[3:09](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/lan-security?u=76281980&t=189)** to better secure the network. Ooh, by the way, if you'd like to learn more about firewalls, then you may want to check out my course on firewall administration essentials, also here in [[LinkedIn]] Learning. Finally, it is also a good practice to conduct regular audits or compliance checks, so as to ensure that proper security controls are in place. In summary, here are a few of the best practices that you can apply to your local area networks. By implementing these best practices, you can then reduce or minimize the risk of attacks from cyber threats.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi]] (3), [[Microsoft Office|Office]] (2), [[Local Area Network (LAN)|Local area network]] (1), [[Hardware]] (1), [[Virtual Private Network (VPN)|Virtual private network]] (1)
> **Env Vars:** wpa2 (2), ups (1), fhrp (1), hsrp (1), glbp (1)
> **Analogies:** such as (3)
> **Best Practices:** remember to (1), good practice (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [LAN troubleshooting](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/lan-troubleshooting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/lan-troubleshooting?u=76281980&t=0)** - [Instructor] Let us now talk about LAN troubleshooting, 'cause let's face it, sometimes the network just doesn't work, right? So what do we do? There are various approaches that we can apply. There's the top-down approach and the bottom-up approach, there's the divide and conquer, follow the path, and component swapping. Let's start with the top-down and bottom-up approaches. These two approaches relate to the OSI model. The top-down approach means that we start with the application layer. Check first if the app is working. Like if you are printing, are you printing to the correct printer? Is the printer turned on and connected to the network? Has the ink, is there paper? Do you see any printer errors? If you are browsing the internet, are you going to the right website? Is that the proper browser for you to use? Or could there be an application or software on your end that could be blocking your network connection, like a firewall perhaps? The firewall can also operate at layer four, which is the transport layer. Here we look at the TCP and UDP ports. Yes, it is ideal to have some knowledge about the common ports and protocols that you use in your network, especially for network administrators. A simple mistype of the port number could cause connection issues. Then we look at the network layer. This is where we check the IP address configuration. On a [[Windows]] machine, you can use the ipconfig command. On a [[Linux]] machine, you can use the ifconfig
>
> **[1:35](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/lan-troubleshooting?u=76281980&t=95)** or the IP address command. The same commands can also work on Apple and [[Android]] devices. Having said that, inspect the IP configuration closely. Is the IP address correct? Have you checked the subnet mask? How about the default gateway? Compare the IP addresses in your network. Are you in the right subnet? Is the router working properly? If you are getting a 169.254 IP address, then something is not quite right. This is an APIPA, an automatic private IP address. Getting this means that your device is trying to get an IP address automatically or via [[DHCP]], but for some reason it is unable to reach the DHCP server. Maybe the DHCP server is down, or maybe the DHCP has already been exhausted. To get a new IP address on a Windows machine, you can use the command ipconfigs /renew. If it still doesn't work, then perhaps the connection itself is the problem. And so the next that we look at is the data link layer. Here is when we now check the switch and the interface cards. How are the lights? Is it on? Are they blinking? How about the network interface cards on your device? Do you see green or amber lights, perhaps? If it is red or it has no lights, then there's the problem. And finally, the physical layer. If you have a wired connection, check the cables. Is it plugged in properly?
>
> **[3:08](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/lan-troubleshooting?u=76281980&t=188)** Is it the correct cable? Are there any signs of physical damages to the cable? Do you have a cable tester to test it out? If you are connecting via wireless connection, are you connecting to the correct network SSID? Did you enter the right password? Double check it against your router configuration. And finally, how's the signal strength? Or maybe you are connected to the [[Wi-Fi]], but it says no internet connection. If that is the case, then you may need to check your router to see if you have an active connection with your internet service provider, or the ISP. By the way, the connection to the internet or the worldwide web is in the realm of WAN, or the wide area network. If you're interested in learning more about WAN, then you may want to check out my course, also here in [[LinkedIn]] Learning. In this troubleshooting approach, you would notice that we started from the application layer going down to the physical layer, hence it is called as the top-down approach. Doing the reverse where you check first the cables then the interface card, followed by the switch, then the IP address and the router, and lastly, the apps, is what we refer to as the bottom-up approach. As you can see, these two approaches are systematic. By looking at every layer, we are able to isolate the problem effectively, eliminating potential issues layer by layer. How about if you got a segmented network, like with multiple VLANs across different departments
>
> **[4:42](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/lan-troubleshooting?u=76281980&t=282)** or other types of complex network issue? For such a case, I would recommend the divide and conquer approach. With the divide-and-conquer approach, we typically start at the network layer, looking at the IP address configurations. You can use the tools like ping command or the traceroute source to find where the faults are. Then you can go up or down the OSI model to resolve the issue. For complex problems, you can also use netstat or [[Wireshark]] to further analyze the network traffic. Once you have found the problematic layer, then you can use the follow-the-path approach to further trace the issue and resolve it. With the follow-the-path approach, we look at the data flow through the network, from the source going to the destination, checking each hub along the way to see where the issue occurs. This is particularly useful for resolving [[Routing]] issues. Finally, we've got the component-swapping approach. As the name implies, we swap the suspected faulty components with a known good component. A common example is when we replace a network cable with a different one. But this can also apply with other network components like swapping interface cards or swapping to a different switchboard. It is quite straightforward, as you may see, but it can be an effective approach to troubleshooting without requiring advanced diagnostic tools. In summary, each of these troubleshooting approaches can be effective depending on the network issue
>
> **[6:17](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/lan-troubleshooting?u=76281980&t=377)** that you are facing. You can also opt to combine these methods together for a more effective and efficient troubleshooting of your network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (4), [[Windows]] (2), [[Linux]] (1), [[Android]] (1), [[Wi-Fi]] (1)
> **Env Vars:** dhcp (4), osi (2), wan (2), lan (1), tcp (1)
> **Definitions:** means that (2), is an  (1), is called (1)
> **CLI Commands:** find (1)
> **Versions:** 169.254 (1)
> **Speakers:** - [instructor] (1)

#### [Next steps](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/networking-foundations-local-area-networks-lans-24682603/next-steps?u=76281980&t=0)** - [Host] Yay, you've just completed the course on local area networks. Hopefully you now have a better understanding of what a [[Local Area Network (LAN)|local area network]] is, or the LAN along with the various LAN connectivity options from wide ethernet to [[Wi-Fi|wireless LAN]]. The next step is for you to explore further and apply what you've just learned. Having said that, if you're interested in creating a simulated local network, then you may want to check my course on Cisco Modeling labs. Ooh, by the way, I also have other courses here on [[LinkedIn]] Learning that might interest you as well, like the courses on WAN, Firewall and DNS. So check them out too. Meanwhile, I invite you to connect with me here on LinkedIn or follow me at my YouTube channel. Feel free to drop me a message as I'd be happy to hear from you wherever you are across the globe. And with that, I wish you all the best in life and in your networking career.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2), [[Local Area Network (LAN)|Local area network]] (1), [[Wi-Fi|Wireless lan]] (1)
> **Env Vars:** lan (3), wan (1), dns (1)
> **Speakers:** - [host] (1)


## Instructor

- [[Jarrel Rivera]]

## Resources

- Exercise files available

## Skills Covered

- Local Area Network (LAN)
- Computer Networking

## Path Context

### In [[Network Administration- Build Core Skills for Network Management and Security]]
← [[Networking Foundations- IP Addressing]] | **3 of 6** | [[Networking Foundations- Wide Area Networks (WANs)]] →

## Appears In

- [[Network Administration- Build Core Skills for Network Management and Security]]

## Related Courses

_Courses sharing skills:_

- [[MPLS Segment Routing]] — Computer Networking
- [[Mpls Foundations Getting Started With Mpls]] — Computer Networking
- [[Cloud Computing- Understanding Networking]] — Computer Networking

---

[↑ Back to top](#)