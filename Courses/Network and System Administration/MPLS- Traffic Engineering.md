---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: mpls-traffic-engineering
url: "https://www.linkedin.com/learning/mpls-traffic-engineering"
duration_minutes: 155
duration: 2h 35m
level: Advanced
updated: 11/15/2024
learners: 2135
skills:
  - Telecommunications
  - Multiprotocol Label Switching (MPLS)
  - Traffic Engineering
  - Computer Network Operations
  - Engineering
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGOiMlUOjiP6g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1730746939496?e=2147483647&amp;v=beta&amp;t=FLQ-YHCAJbVOgdxDx1icIyb755fKUIagZb3GB7y2Xn8"
linkedin_topic: Network and System Administration
learning_paths:
  - '[[Mastering Multiprotocol Label Switching (MPLS)]]'
prev_courses:
  - '[[MPLS L3VPN Foundation and Implementation]]'
next_courses:
  - '[[MPLS Segment Routing]]'
path_nav: '[{"path":"Mastering Multiprotocol Label Switching (MPLS)","position":3,"total":4,"prev":"MPLS L3VPN Foundation and Implementation","next":"MPLS Segment Routing"}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - skill/telecommunications
  - skill/multiprotocol-label-switching-mpls
  - skill/traffic-engineering
  - skill/computer-network-operations
  - skill/engineering
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/MPLS-%20Traffic%20Engineering.md)

![MPLS: Traffic Engineering](https://media.licdn.com/dms/image/v2/D560DAQGOiMlUOjiP6g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1730746939496?e=2147483647&amp;v=beta&amp;t=FLQ-YHCAJbVOgdxDx1icIyb755fKUIagZb3GB7y2Xn8)

# MPLS: Traffic Engineering

> This course provides an in-depth examination of traffic engineering (TE) strategies within MPLS networks. Join instructor Arash Deljoo as he explores topics such as MPLS TE tunnel configurations, RSVP signaling, Fast Reroute (FRR) techniques, and more. Along the way, boost your know-how with optimizing network performance and resource allocation. Ideal for network professionals and system administ

> [LinkedIn Learning](https://www.linkedin.com/learning/mpls-traffic-engineering) | 2h 35m | Advanced | 2K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Boost your MPLS skill set with traffic engineering](#boost-your-mpls-skill-set-with-traffic-engineering)
- [**1. MPLS TE Foundation**](#1-mpls-te-foundation) (2 videos)
  - [Traffic engineering introduction](#traffic-engineering-introduction)
  - [MPLS Traffic Engineering (TE) overview](#mpls-traffic-engineering-te-overview)
- [**2. MPLS TE Components**](#2-mpls-te-components) (3 videos)
  - [Routing protocol requirements](#routing-protocol-requirements)
  - [Resource Reservation Protocol with TE extension](#resource-reservation-protocol-with-te-extension)
  - [RSVP messages](#rsvp-messages)
- [**3. MPLS TE Configuration**](#3-mpls-te-configuration) (7 videos)
  - [MPLS TE generic configuration](#mpls-te-generic-configuration)
  - [MPLS TE explicit tunnel](#mpls-te-explicit-tunnel)
  - [Steering traffic into an MPLS TE tunnel with static routes](#steering-traffic-into-an-mpls-te-tunnel-with-static-routes)
  - [Steering traffic into an MPLS TE tunnel with PBR](#steering-traffic-into-an-mpls-te-tunnel-with-pbr)
  - [MPLS TE dynamic tunnel](#mpls-te-dynamic-tunnel)
  - [MPLS TE semi-dynamic tunnel using exclude-address](#mpls-te-semi-dynamic-tunnel-using-exclude-address)
  - [MPLS TE semi-dynamic tunnel using loose next hop](#mpls-te-semi-dynamic-tunnel-using-loose-next-hop)
- [**4. Advanced MPLS TE Features**](#4-advanced-mpls-te-features) (7 videos)
  - [MPLS TE auto-bandwidth](#mpls-te-auto-bandwidth)
  - [MPLS TE affinity](#mpls-te-affinity)
  - [MPLS TE administrative weight](#mpls-te-administrative-weight)
  - [MPLS TE setup and hold priority](#mpls-te-setup-and-hold-priority)
  - [MPLS TE autoroute announce](#mpls-te-autoroute-announce)
  - [MPLS TE forwarding adjacency](#mpls-te-forwarding-adjacency)
  - [Class-based tunnel selection (CBTS)](#class-based-tunnel-selection-cbts)
- [**5. MPLS TE Fast Reroute (FRR)**](#5-mpls-te-fast-reroute-frr) (5 videos)
  - [MPLS TE Fast Reroute for link protection: Part 1](#mpls-te-fast-reroute-for-link-protection-part-1)
  - [MPLS TE Fast Reroute for link protection: Part 2](#mpls-te-fast-reroute-for-link-protection-part-2)
  - [MPLS TE Fast Reroute for node protection](#mpls-te-fast-reroute-for-node-protection)
  - [Shared Risk Link Group (SRLG)](#shared-risk-link-group-srlg)
  - [MPLS TE Path Protection](#mpls-te-path-protection)
- [**6. Cost Calculation of IGP Routes over TE Tunnels**](#6-cost-calculation-of-igp-routes-over-te-tunnels) (5 videos)
  - [TE tunnels default cost calculation](#te-tunnels-default-cost-calculation)
  - [Adjusting the cost calculation of TE tunnels](#adjusting-the-cost-calculation-of-te-tunnels)
  - [MPLS TE load balancing](#mpls-te-load-balancing)
  - [MPLS TE reoptimization](#mpls-te-reoptimization)
  - [MPLS TE link manager](#mpls-te-link-manager)
- [**7. MPLS TE and MPLS VPN**](#7-mpls-te-and-mpls-vpn) (3 videos)
  - [VRF-to-TE tunnel routing](#vrf-to-te-tunnel-routing)
  - [TE tunnel with a P router as a tailend router](#te-tunnel-with-a-p-router-as-a-tailend-router)
  - [AToM tunnel selection](#atom-tunnel-selection)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Boost your MPLS skill set with traffic engineering](https://www.linkedin.com/learning/mpls-traffic-engineering/boost-your-mpls-skillset-with-traffic-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/boost-your-mpls-skillset-with-traffic-engineering?u=76281980&t=0)** - [Arash] Ever wondered how information travels through the internet?
>
> **[0:05](https://www.linkedin.com/learning/mpls-traffic-engineering/boost-your-mpls-skillset-with-traffic-engineering?u=76281980&t=5)** It's like managing traffic on a busy highway, but with data.
>
> **[0:09](https://www.linkedin.com/learning/mpls-traffic-engineering/boost-your-mpls-skillset-with-traffic-engineering?u=76281980&t=9)** And learning this can lead to great job in tech.
>
> **[0:14](https://www.linkedin.com/learning/mpls-traffic-engineering/boost-your-mpls-skillset-with-traffic-engineering?u=76281980&t=14)** [[Multiprotocol Label Switching (MPLS)|MPLS]] [[Traffic Engineering]] helps data move faster and safer on networks.
>
> **[0:20](https://www.linkedin.com/learning/mpls-traffic-engineering/boost-your-mpls-skillset-with-traffic-engineering?u=76281980&t=20)** I will teach you how to make data move smoothly and safely through networks, getting you ready for jobs in tech, where these skills are really valuable.
>
> **[0:32](https://www.linkedin.com/learning/mpls-traffic-engineering/boost-your-mpls-skillset-with-traffic-engineering?u=76281980&t=32)** Welcome to MPLS Traffic Engineering.
>
> **[0:35](https://www.linkedin.com/learning/mpls-traffic-engineering/boost-your-mpls-skillset-with-traffic-engineering?u=76281980&t=35)** I am Arash Deljoo, and I am here to show you how networks work and how you can have a career in tech.
>
> **[0:42](https://www.linkedin.com/learning/mpls-traffic-engineering/boost-your-mpls-skillset-with-traffic-engineering?u=76281980&t=42)** Join me on this journey, where you will learn skills that can lead to exciting tech jobs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (2), [[Traffic Engineering]] (2)
> **Env Vars:** mpls (2)
> **CLI Commands:** make (1)
> **Analogies:** it's like (1)
> **Speakers:** - [arash] (1)


### 1. MPLS TE Foundation

[↑ Back to Table of Contents](#table-of-contents)

#### [Traffic engineering introduction](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980&t=0)** - [Instructor] [[Traffic Engineering]] is the design and execution of processes that manage and control traffic flows across a network.
>
> **[0:11](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980&t=11)** The goal is to ensure high performance and reliability for data transfers with minimal data loss and delay.
>
> **[0:21](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980&t=21)** This is particularly important in large and complex networks, where the characteristics of how data traffic can change significantly.
>
> **[0:32](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980&t=32)** Let's learn about traffic engineering with an example.
>
> **[0:37](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980&t=37)** Imagine a busy highway during rush hour.
>
> **[0:41](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980&t=41)** To keep traffic flowing smoothly, traffic engineers might open extra lanes, direct cars to alternate routes and prioritize certain vehicles like emergency responders.
>
> **[0:57](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980&t=57)** In a data network, traffic engineering works similarly.
>
> **[1:01](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980&t=61)** For instance, if a video streaming service experiences heavy traffic, the network might reroute some of that data through less congested paths.
>
> **[1:13](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980&t=73)** Ensure that high priority data like live broadcasts get the bandwidth they need, and balance the load across multiple servers to prevent any single server from becoming overwhelmed.
>
> **[1:28](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980&t=88)** By using these techniques, traffic engineering ensures that data travels efficiently, reducing delays, and improving the overall [[User Experience (UX)|user experience]].
>
> **[1:42](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980&t=102)** In this setup with five routers, OSPF as Interior Gateway Protocol, determines that the top path, which offers 10 megabit per second of bandwidth, is the optimal route for transmitting traffic from R1 to R5.
>
> **[2:00](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980&t=120)** This decision is based on OSPF's algorithm, which evaluates bandwidth to select the most efficient path for data transmission within the network.
>
> **[2:12](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980&t=132)** Therefore, OSPF directs traffic along the top path due to its higher bandwidth capacity compared to the bottom path, which provides only five megabit per second of bandwidth.
>
> **[2:28](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980&t=148)** In this scenario, video traffic utilizes eight megabit per second of the available bandwidth on the top path, leaving two megabit per second remaining.
>
> **[2:39](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980&t=159)** The amount of data traffic we have now is three megabit per second.
>
> **[2:44](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980&t=164)** However, OSPF does not consider the remaining two megabit per second of bandwidth on the top path, so it chooses the top path.
>
> **[2:55](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980&t=175)** Since there are three megabit per second of traffic and only two megabit per second of remaining bandwidth on the top path, congestion happens and approximately one megabit per second of traffic is dropped.
>
> **[3:10](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980&t=190)** At the same time, the bottom path also has five megabit per second of bandwidth that OSPF is not using.
>
> **[3:19](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980&t=199)** This means that out of the total 15 megabit per second worth of bandwidth between R1 and R5, the network is really only using up some of that bandwidth, which may not be optimal.
>
> **[3:32](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980&t=212)** This situation is an illustration of how valuable intelligent traffic engineering can be for a network.
>
> **[3:41](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980&t=221)** Traffic engineering helps with problems like this, by better utilizing the network's total available bandwidth to provide the customer with the best performance and optimizing the bandwidth.
>
> **[3:56](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980&t=236)** Benefits of traffic engineering include, improved network performance by reduces congestion and ensure a smooth state of flow, leading to better overall network performance.
>
> **[4:12](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980&t=252)** Enhanced reliability by optimizing paths and balancing loads.
>
> **[4:17](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980&t=257)** Traffic engineering minimizes the risk of network failures and service interruptions.
>
> **[4:24](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980&t=264)** Efficient resource utilization by maximizes the use of available network resources, reducing the need for additional infrastructure investments.
>
> **[4:36](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980&t=276)** In the next video, I will introduce [[Multiprotocol Label Switching (MPLS)|MPLS]] Traffic Engineering and explain how it works.
>
> **[4:43](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980&t=283)** Stay tuned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Traffic Engineering]] (9), [[User Experience (UX)|User experience]] (1), [[Multiprotocol Label Switching (MPLS)|Mpls]] (1)
> **Env Vars:** ospf (5), mpls (1)
> **Definitions:** means that (1), is an  (1)
> **Analogies:** imagine (1), for instance (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [MPLS Traffic Engineering (TE) overview](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=0)** - [Instructor] In this video, I intend to explain how [[Multiprotocol Label Switching (MPLS)|MPLS]] [[Traffic Engineering]] or TE works.
>
> **[0:08](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=8)** Consider this scenario consisting of five routers.
>
> **[0:12](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=12)** This scenario uses the OSPF protocol.
>
> **[0:16](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=16)** In MPLST a link state IGP protocol which can be OSPF or IS-IS is used for [[Routing]].
>
> **[0:25](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=25)** The OSPF and IS-IS protocols use the SPF algorithm for routing.
>
> **[0:32](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=32)** OSPF in router one selects the upper path from router one to router two to router three as the best route between network A and network B due to its better metric.
>
> **[0:45](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=45)** Router one receives a data flow of seven megabit per second from network A and sends the traffic to network B via the path with the lower metric, which is router one to router two to router three.
>
> **[1:01](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=61)** In MPLST, the IGP protocol, OSPF, or IS-IS send additional information about their links beside the normal link states.
>
> **[1:14](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=74)** For example, when a data flow of seven megabit per second is sent from router one, to router two, to router three, the remaining bandwidth of the interfaces on this path is three megabit per second, and all three routers send new link states to inform the other routers about the remaining bandwidth.
>
> **[1:37](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=97)** Now, all routers know that the upper path has only three megabit per second of unused bandwidth, not 10 megabit per second.
>
> **[1:47](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=107)** In R1 the IGP protocol OSPF uses CSPF or constrained shortest path first instead of the SPF shortest path first and selects the best path considering the remaining bandwidth.
>
> **[2:04](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=124)** The next dataflow with a rate of four megabit per second arrives at router one distinct for network B.
>
> **[2:13](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=133)** Now this traffic is sent via the lower path from router one, to router four, to router five, to router three, instead of the upper path.
>
> **[2:24](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=144)** As observed by considering the remaining bandwidth instead of the defined bandwidth, we successfully routed traffic through different paths, which is what traffic engineering is all about.
>
> **[2:39](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=159)** Now the question is, what role does MPLS play in traffic engineering?
>
> **[2:46](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=166)** In this example, R1 selects the best path based on the information obtained from link state advertisements.
>
> **[2:54](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=174)** To prevent other routers from recalculating the best path, R1 must reserve the selected path and forward traffic through it, ensuring that other routers route traffic to the destination via the router that has chosen the path.
>
> **[3:13](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=193)** Router one uses the RSVP protocol with T extension to reserve the path.
>
> **[3:20](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=200)** RSVP has two important messages, PATH and RESV or reserve.
>
> **[3:27](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=207)** Router one sends a path message requesting path reservation to router four.
>
> **[3:34](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=214)** Router four forwards it to the next router, router five, and finally router five sends it to router three.
>
> **[3:44](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=224)** Then router three returns the reserve message to router five indicating reservation completion and sends a label to router five.
>
> **[3:55](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=235)** When router five receives the reserve message from router three, it sends a reserve message with the label to router four and updates its LFIB table accordingly.
>
> **[4:09](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=249)** Then router four receives the reserve message from router five.
>
> **[4:14](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=254)** It sends a reserve message with the label to router one and updates its LFIB table accordingly.
>
> **[4:22](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=262)** Finally, after receiving RSVP reserve, router one acknowledged that the path has been reserved and completes its FIB table with the label received from R4.
>
> **[4:37](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=277)** Now router one intends to send a data flow of four megabits per second through the downstream path, and to avoid the need for routing by the downstream routers, namely router four, router five, and router three, the traffic is labeled with the label 400, which was received from router four and is sent towards router four.
>
> **[5:04](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=304)** Since router four has received the traffic video label, it swaps label 400 with label 500 based on the LFIB, and then sends the traffic to router five.
>
> **[5:19](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=319)** Router five removes the label from the packet based on the LFIB, and sends the traffic towards router three.
>
> **[5:28](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=328)** As a result, with the help of the label, the intermediate routers do not need to perform routing.
>
> **[5:36](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=336)** The traffic is sent towards the destination solely based on the decision made at the source router which is router one.
>
> **[5:44](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=344)** And the label that is added to the packet, this is source-based routing.
>
> **[5:51](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=351)** In the following videos, we will get to know each component of network traffic engineering in more detail.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (5), [[Traffic Engineering]] (4), [[Multiprotocol Label Switching (MPLS)|Mpls]] (2)
> **Env Vars:** ospf (6), lfib (4), igp (3), rsvp (3), mpls (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. MPLS TE Components

[↑ Back to Table of Contents](#table-of-contents)

#### [Routing protocol requirements](https://www.linkedin.com/learning/mpls-traffic-engineering/routing-protocol-requirement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/routing-protocol-requirement?u=76281980&t=0)** - [Instructor] In this video, we aim to explain the essential [[Routing]] protocol requirements for [[Multiprotocol Label Switching (MPLS)|MPLS]] [[Traffic Engineering]] or MPLS-TE, and provide a clear understanding of the Constrained Shortest Path First or CSPF algorithm's role in optimizing path selection.
>
> **[0:22](https://www.linkedin.com/learning/mpls-traffic-engineering/routing-protocol-requirement?u=76281980&t=22)** The application of MPLS Traffic Engineering or MPLS-TE with the Link State Interior Gateway Protocol like IS-IS or OSPF is essential.
>
> **[0:36](https://www.linkedin.com/learning/mpls-traffic-engineering/routing-protocol-requirement?u=76281980&t=36)** To link State IGPs by exchanging Link State Advertisements or LSAs or Link State Protocol Data Units or LSPs between all routers within the network make it possible to maintain a detailed and up-to-date view of the network topology.
>
> **[0:57](https://www.linkedin.com/learning/mpls-traffic-engineering/routing-protocol-requirement?u=76281980&t=57)** This view of the network topology is especially important for MPLS-TE as it helps to maintain a comprehensive view of the network link attributes.
>
> **[1:10](https://www.linkedin.com/learning/mpls-traffic-engineering/routing-protocol-requirement?u=76281980&t=70)** Link State IGPs were modified to support MPLS-TE and standardized extensions, and opaque Link State Advertisements or LSAs were added to allow Link State IGPs to advertise traffic engineering parameters like available bandwidth, administrative groups used to select a path that complies with policy, as well as link attributes like delay, cost, and reliability.
>
> **[1:42](https://www.linkedin.com/learning/mpls-traffic-engineering/routing-protocol-requirement?u=76281980&t=102)** The TE extensions for OSPF will advertise much more link information than regular OSPF will, which is absolutely needed for MPLS-TE to function properly.
>
> **[1:57](https://www.linkedin.com/learning/mpls-traffic-engineering/routing-protocol-requirement?u=76281980&t=117)** OSPF TE extensions allow for things like link bandwidth.
>
> **[2:03](https://www.linkedin.com/learning/mpls-traffic-engineering/routing-protocol-requirement?u=76281980&t=123)** It means how much traffic a link can handle.
>
> **[2:07](https://www.linkedin.com/learning/mpls-traffic-engineering/routing-protocol-requirement?u=76281980&t=127)** Administrative groups or colors.
>
> **[2:10](https://www.linkedin.com/learning/mpls-traffic-engineering/routing-protocol-requirement?u=76281980&t=130)** It is used for setting policies on certain links.
>
> **[2:15](https://www.linkedin.com/learning/mpls-traffic-engineering/routing-protocol-requirement?u=76281980&t=135)** Link metrics.
>
> **[2:16](https://www.linkedin.com/learning/mpls-traffic-engineering/routing-protocol-requirement?u=76281980&t=136)** It means extra attributes like delay and cost that can be used in path calculations.
>
> **[2:23](https://www.linkedin.com/learning/mpls-traffic-engineering/routing-protocol-requirement?u=76281980&t=143)** Shared Risk Link Groups or SRLGs.
>
> **[2:27](https://www.linkedin.com/learning/mpls-traffic-engineering/routing-protocol-requirement?u=76281980&t=147)** We use it to avoid a single point of failure.
>
> **[2:32](https://www.linkedin.com/learning/mpls-traffic-engineering/routing-protocol-requirement?u=76281980&t=152)** The opaque LSA Type 10 is an essential component of the OSPF traffic engineering or TE extension to facilitate communication of traffic engineering information within an OSPF area by exchanging between different OSPF adjacencies.
>
> **[2:53](https://www.linkedin.com/learning/mpls-traffic-engineering/routing-protocol-requirement?u=76281980&t=173)** By leveraging opaque LSAs Type 10, OSPF enhances its capabilities to support MPLS traffic engineering within a single OSPF area, ensuring efficient and reliable network cooperation.
>
> **[3:11](https://www.linkedin.com/learning/mpls-traffic-engineering/routing-protocol-requirement?u=76281980&t=191)** The IS-IS protocol, intermediate system to intermediate system, has traffic engineering or TE support using enhancements.
>
> **[3:22](https://www.linkedin.com/learning/mpls-traffic-engineering/routing-protocol-requirement?u=76281980&t=202)** IS-IS TE extensions introduce additional TLVs that provide detailed traffic engineering information.
>
> **[3:32](https://www.linkedin.com/learning/mpls-traffic-engineering/routing-protocol-requirement?u=76281980&t=212)** While OSPF and IS-IS traditionally use SPF for path calculation, the introduction of traffic engineering necessitates the adoption of CSPF.
>
> **[3:45](https://www.linkedin.com/learning/mpls-traffic-engineering/routing-protocol-requirement?u=76281980&t=225)** CSPF or Constrained Shortest Path First is an algorithm used in MPLS traffic engineering or MPLS-TE to compute optimal paths based on specific constraints.
>
> **[4:01](https://www.linkedin.com/learning/mpls-traffic-engineering/routing-protocol-requirement?u=76281980&t=241)** CSPF relies on the traffic engineering database provided by the underlying Interior Gateway Protocol or IGP such as OSPF or IS-IS.
>
> **[4:14](https://www.linkedin.com/learning/mpls-traffic-engineering/routing-protocol-requirement?u=76281980&t=254)** The traffic engineering database includes detailed information about network topology, link attributes, and TE-specific metrics.
>
> **[4:25](https://www.linkedin.com/learning/mpls-traffic-engineering/routing-protocol-requirement?u=76281980&t=265)** This advanced algorithm ensures that paths not only connect endpoints, but also adhere to network constraints, thereby optimizing network performance and reliability in modern complex environments.
>
> **[4:43](https://www.linkedin.com/learning/mpls-traffic-engineering/routing-protocol-requirement?u=76281980&t=283)** In the next video, I will explain the next important component of MPLS-TE, RSVP-TE.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Traffic Engineering]] (12), [[Multiprotocol Label Switching (MPLS)|Mpls]] (11), [[Routing]] (1)
> **Env Vars:** mpls (11), ospf (11), cspf (4), lsa (1), spf (1)
> **Definitions:** is an  (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Resource Reservation Protocol with TE extension](https://www.linkedin.com/learning/mpls-traffic-engineering/resource-reservation-protocol-with-te-extension?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/resource-reservation-protocol-with-te-extension?u=76281980&t=0)** - [Instructor] You need a robust signaling protocol for TE tunnels to ensure seamless link admission across LSR interfaces, and efficient label propagation, enabling optimized traffic flow.
>
> **[0:15](https://www.linkedin.com/learning/mpls-traffic-engineering/resource-reservation-protocol-with-te-extension?u=76281980&t=15)** RSVP evolved from its original role in signaling integrated services, or IntServ, to effectively handle TE tunnel signaling.
>
> **[0:27](https://www.linkedin.com/learning/mpls-traffic-engineering/resource-reservation-protocol-with-te-extension?u=76281980&t=27)** While RSVP initially aimed to provide end-to-end QoS, its adaptation for TE tunnels introduces exciting possibilities.
>
> **[0:39](https://www.linkedin.com/learning/mpls-traffic-engineering/resource-reservation-protocol-with-te-extension?u=76281980&t=39)** Numerous new RSVP objects tailored for TE have been introduced, enhancing its capabilities significantly.
>
> **[0:49](https://www.linkedin.com/learning/mpls-traffic-engineering/resource-reservation-protocol-with-te-extension?u=76281980&t=49)** RSVP-TE creates LSPs by sending path information from the source to the destination.
>
> **[0:57](https://www.linkedin.com/learning/mpls-traffic-engineering/resource-reservation-protocol-with-te-extension?u=76281980&t=57)** It also verifies that the chosen path meets certain criteria such as bandwidth and administrational policies.
>
> **[1:06](https://www.linkedin.com/learning/mpls-traffic-engineering/resource-reservation-protocol-with-te-extension?u=76281980&t=66)** RSVP-TE reserves necessary resources along the paths, such as bandwidth to meet QoS requirements.
>
> **[1:16](https://www.linkedin.com/learning/mpls-traffic-engineering/resource-reservation-protocol-with-te-extension?u=76281980&t=76)** This reservation ensures that the path can support the traffic without congestion.
>
> **[1:22](https://www.linkedin.com/learning/mpls-traffic-engineering/resource-reservation-protocol-with-te-extension?u=76281980&t=82)** RSVP-TE allows explicit [[Routing]] where the exact path through the network is specified.
>
> **[1:30](https://www.linkedin.com/learning/mpls-traffic-engineering/resource-reservation-protocol-with-te-extension?u=76281980&t=90)** This capability is useful for [[Traffic Engineering]], enabling network operators to optimize the utilization of network resources.
>
> **[1:41](https://www.linkedin.com/learning/mpls-traffic-engineering/resource-reservation-protocol-with-te-extension?u=76281980&t=101)** RSVP-TE works with Constrained Shortest Path First, or CSVF, to compute paths that satisfy the required constraints.
>
> **[1:52](https://www.linkedin.com/learning/mpls-traffic-engineering/resource-reservation-protocol-with-te-extension?u=76281980&t=112)** It dynamically adapts to network chains, ensuring optimal path selection, even in the case of link failures or change in traffic demand.
>
> **[2:04](https://www.linkedin.com/learning/mpls-traffic-engineering/resource-reservation-protocol-with-te-extension?u=76281980&t=124)** Let's dive into how RSVP-TE operates.
>
> **[2:08](https://www.linkedin.com/learning/mpls-traffic-engineering/resource-reservation-protocol-with-te-extension?u=76281980&t=128)** The sender initiates a path message which travels through the network, collecting information about the available resources and possible constraints.
>
> **[2:20](https://www.linkedin.com/learning/mpls-traffic-engineering/resource-reservation-protocol-with-te-extension?u=76281980&t=140)** Each note along the path processes the message and forwards it to the next stop.
>
> **[2:27](https://www.linkedin.com/learning/mpls-traffic-engineering/resource-reservation-protocol-with-te-extension?u=76281980&t=147)** Upon reaching the destination, a reservation message is sent back along the same path.
>
> **[2:35](https://www.linkedin.com/learning/mpls-traffic-engineering/resource-reservation-protocol-with-te-extension?u=76281980&t=155)** Each note along the path allocates the necessary resources and confirms the reservation.
>
> **[2:43](https://www.linkedin.com/learning/mpls-traffic-engineering/resource-reservation-protocol-with-te-extension?u=76281980&t=163)** RSVP-TE periodically refreshes the estate information to maintain the LSP.
>
> **[2:50](https://www.linkedin.com/learning/mpls-traffic-engineering/resource-reservation-protocol-with-te-extension?u=76281980&t=170)** If any change occur, such as link failures, RSVP-TE can reestablish the path or find an alternate route.
>
> **[3:00](https://www.linkedin.com/learning/mpls-traffic-engineering/resource-reservation-protocol-with-te-extension?u=76281980&t=180)** In future videos, I will cover configuring RSVP-TE for [[Multiprotocol Label Switching (MPLS)|MPLS]] traffic engineering.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Traffic Engineering]] (2), [[Routing]] (1), [[Multiprotocol Label Switching (MPLS)|Mpls]] (1)
> **Env Vars:** rsvp (11), lsr (1), csvf (1), lsp (1), mpls (1)
> **Analogies:** such as (3)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [RSVP messages](https://www.linkedin.com/learning/mpls-traffic-engineering/rsvp-messages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/rsvp-messages?u=76281980&t=0)** - [Instructor] In this video, we will explore the essential RSVP message that play a critical role in establishing and maintaining [[Multiprotocol Label Switching (MPLS)|MPLS]]-TE tunnels.
>
> **[0:11](https://www.linkedin.com/learning/mpls-traffic-engineering/rsvp-messages?u=76281980&t=11)** This message include RSVP PATH, RSVP RESV, RSVP PathTear, RSVP ResvTear, RSVP PathErr, and RSVP ResvErr.
>
> **[0:26](https://www.linkedin.com/learning/mpls-traffic-engineering/rsvp-messages?u=76281980&t=26)** RSVP Path message are sent from the ingress router to the egress router along the path the MPLS-TE tunnel will take.
>
> **[0:35](https://www.linkedin.com/learning/mpls-traffic-engineering/rsvp-messages?u=76281980&t=35)** This message carry information about the desired resources and constraints for the tunnel, such as bandwidth requirements and specific path constraints.
>
> **[0:47](https://www.linkedin.com/learning/mpls-traffic-engineering/rsvp-messages?u=76281980&t=47)** The Path message also sets up a state information in each intermediate router along the path.
>
> **[0:55](https://www.linkedin.com/learning/mpls-traffic-engineering/rsvp-messages?u=76281980&t=55)** RSVP Resv message are the responses from the egress router back to the ingress router following the same path established by the path message.
>
> **[1:06](https://www.linkedin.com/learning/mpls-traffic-engineering/rsvp-messages?u=76281980&t=66)** This message confirm the reservation of the resources requested by the path message.
>
> **[1:13](https://www.linkedin.com/learning/mpls-traffic-engineering/rsvp-messages?u=76281980&t=73)** The Resv message ensures that each router along the path has successfully reserved the necessary resources for the MPLS-TE tunnel.
>
> **[1:24](https://www.linkedin.com/learning/mpls-traffic-engineering/rsvp-messages?u=76281980&t=84)** RSVP PathTear message are used to tear down the MPLS-TE tunnel.
>
> **[1:30](https://www.linkedin.com/learning/mpls-traffic-engineering/rsvp-messages?u=76281980&t=90)** When an ingress router decides to terminate the tunnel, it sends a PathTear message along the path to the egress router.
>
> **[1:39](https://www.linkedin.com/learning/mpls-traffic-engineering/rsvp-messages?u=76281980&t=99)** This message instructs each intermediate router to release the resources that were previously reserved for the tunnel.
>
> **[1:49](https://www.linkedin.com/learning/mpls-traffic-engineering/rsvp-messages?u=76281980&t=109)** RSVP ResvTear messages work in conjunction with PathTear messages.
>
> **[1:55](https://www.linkedin.com/learning/mpls-traffic-engineering/rsvp-messages?u=76281980&t=115)** When a router receives a PathTear message, it sends a ResvTear message back towards the ingress router confirming the release of resources.
>
> **[2:06](https://www.linkedin.com/learning/mpls-traffic-engineering/rsvp-messages?u=76281980&t=126)** This two-way tear down process ensures that all reserved resources are properly freed up along the entire path of the tunnel.
>
> **[2:18](https://www.linkedin.com/learning/mpls-traffic-engineering/rsvp-messages?u=76281980&t=138)** RSVP PathErr message are error messages sent by any intermediate router back to the ingress router if an issue is encountered while processing a path message.
>
> **[2:31](https://www.linkedin.com/learning/mpls-traffic-engineering/rsvp-messages?u=76281980&t=151)** This could happen due to insufficient resources, policy violations, or other errors.
>
> **[2:38](https://www.linkedin.com/learning/mpls-traffic-engineering/rsvp-messages?u=76281980&t=158)** The PathErr message provides detailed information about the nature of the problem, allowing the ingress router to take corrective actions.
>
> **[2:50](https://www.linkedin.com/learning/mpls-traffic-engineering/rsvp-messages?u=76281980&t=170)** RSVP ResvErr messages are similar to PathErr messages, but are sent in response to Resv messages.
>
> **[2:58](https://www.linkedin.com/learning/mpls-traffic-engineering/rsvp-messages?u=76281980&t=178)** If an intermediate router encounters an issue while processing a Resv message, it sends a ResvErr message back to the egress router, indicating the problem.
>
> **[3:11](https://www.linkedin.com/learning/mpls-traffic-engineering/rsvp-messages?u=76281980&t=191)** This helps in identifying and resolving resource reservation issues.
>
> **[3:17](https://www.linkedin.com/learning/mpls-traffic-engineering/rsvp-messages?u=76281980&t=197)** By understanding these RSVP messages, you can effectively manage MPLS-TE tunnels, ensuring efficient resource allocation and robust error handling.
>
> **[3:29](https://www.linkedin.com/learning/mpls-traffic-engineering/rsvp-messages?u=76281980&t=209)** These messages are fundamental to the dynamic and resilient nature of MPLS [[Traffic Engineering]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (6), [[Traffic Engineering]] (1)
> **Env Vars:** rsvp (14), mpls (6), path (1), resv (1)
> **Analogies:** such as (1), similar to (1)
> **Speakers:** - [instructor] (1)


### 3. MPLS TE Configuration

[↑ Back to Table of Contents](#table-of-contents)

#### [MPLS TE generic configuration](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=0)** - [Instructor] In this video, we will begin with the first step of [[Multiprotocol Label Switching (MPLS)|MPLS]]-TE configuration.
>
> **[0:07](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=7)** The initial step involves configuring MPLS-TE capability universally across our network and routers.
>
> **[0:16](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=16)** Moving forward, we will delve into additional steps and explore various aspects of MPLS [[Traffic Engineering]] in upcoming videos.
>
> **[0:28](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=28)** First, we should enable MPLS Traffic Engineering globally using the mpls traffic-eng tunnels global command.
>
> **[0:38](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=38)** Don't forget that CEF is a requirement for all MPLS applications.
>
> **[0:44](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=44)** Additionally, I recommend using the mpls label range command to specify the range of labels.
>
> **[0:53](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=53)** Configuration for R1.
>
> **[0:55](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=55)** ip cef, mpls label range 100 199, mpls traffic-eng tunnels.
>
> **[1:05](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=65)** This configures R1 to enable CEF, sets the MPLS label range from 100 to 199, and enables MPLS Traffic Engineering tunnels.
>
> **[1:19](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=79)** Configuration for R2.
>
> **[1:21](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=81)** ip cef, mpls label range 200 299, mpls traffic-eng tunnels.
>
> **[1:29](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=89)** This configures R2 to enable CEF, sets the MPLS label range from 200 to 299, and enables MPLS Traffic Engineering tunnels.
>
> **[1:43](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=103)** Configuration for R3.
>
> **[1:45](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=105)** ip cef, mpls label range 300 399, mpls traffic-eng tunnels.
>
> **[1:54](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=114)** This configures R3 to enable CEF, sets the MPLS label range from 300 to 399, and enables MPLS Traffic Engineering tunnels.
>
> **[2:08](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=128)** Configuration for R4.
>
> **[2:10](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=130)** ip cef, mpls label range 400 499, mpls traffic-eng tunnels.
>
> **[2:18](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=138)** This configures R4 to enable CEF, sets the MPLS label range from 400 to 499, and enables MPLS Traffic Engineering tunnels.
>
> **[2:30](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=150)** Configuration for R5.
>
> **[2:32](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=152)** ip cef, mpls label range 500 599, mpls traffic-eng tunnels.
>
> **[2:41](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=161)** This configures R5 to enable CEF, sets the MPLS label range from 500 to 599, and enables MPLS Traffic Engineering tunnels.
>
> **[2:53](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=173)** Next, we need to enable MPLS-TE capability within our [[Routing]] protocol.
>
> **[3:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=180)** This is essential for integrating traffic engineering features with our routing processes.
>
> **[3:07](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=187)** By doing this, we allow our routing protocol to share and utilize T information, ensuring optimal path selection and resource allocation throughout the network.
>
> **[3:20](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=200)** To enable MPLS-TE capability in OSPF, we need to use two commands.
>
> **[3:25](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=205)** First, we will set the router ID for MPLS Traffic Engineering with the command mpls traffic-eng router-id loopback ID.
>
> **[3:35](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=215)** This specifies the router ID using the loopback interface.
>
> **[3:40](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=220)** Next, we will enable MPLS Traffic Engineering for a specific OSPF area with the command mpls traffic-eng area AREA-ID.
>
> **[3:51](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=231)** These steps ensure that OSPF can support and utilize MPLS-TE features effectively.
>
> **[4:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=240)** On routers R1 one through R5, we configure OSPF along with MPLS Traffic Engineering capabilities using the following commands: router ospf 1, mpls traffic-eng router-id loopback 0, mpls traffic-eng area 0.
>
> **[4:20](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=260)** These commands ensure that OSPF is integrated with MPLS Traffic Engineering, utilizing the loopback interface for the router ID and enabling MPLS-TE within OSPF area 0.
>
> **[4:34](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=274)** This setup allows the routers to participate in traffic engineering processes effectively.
>
> **[4:41](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=281)** After configuring OSPF with MPLS Traffic Engineering capabilities, we proceed to enable MPLS Traffic Engineering on all interfaces using the command mpls traffic-eng tunnel.
>
> **[4:55](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=295)** This command ensures that all interfaces are prepared to support MPLS-TE tunnels, allowing for efficient path setup and resource reservation across the network.
>
> **[5:09](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=309)** On routers R1 through R5, we configure MPLS Traffic Engineering on specific interfaces using the command interface range Gi0/0-1 mpls traffic-eng tunnels.
>
> **[5:24](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=324)** This command enables MPLS Traffic Engineering tunnels on Gigabit Ethernet Interface 0/0 and 0/1.
>
> **[5:33](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=333)** It ensures these interfaces are ready to support MPLS-TE tunnels, facilitating efficient path establishment and resource allocation throughout the network.
>
> **[5:46](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=346)** Next, we enable RSVP on all interfaces, Gigabit Ethernet 0/0 and Gigabit Ethernet 0/1 with the command interface range Gi0/0-1 ip rsvp bandwidth.
>
> **[6:02](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=362)** This command ensures that RSVP, or Resource Reservation Protocol, is enabled on these interfaces, allowing for bandwidth reservation and ensuring quality of service, or QoS, for MPLS Traffic Engineering tunnels.
>
> **[6:20](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=380)** Now that our network is prepared for implementing traffic engineering, let's dive into the first function of MPLS-TE in the next video.
>
> **[6:30](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=390)** And stay tuned to explore how MPLS Traffic Engineering enhances network performance and efficiency.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (50), [[Traffic Engineering]] (20), [[Routing]] (3)
> **Env Vars:** mpls (32), ospf (7), cef (6), rsvp (2), area (1)
> **Prerequisites:** configure (2), setup (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### [MPLS TE explicit tunnel](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=0)** - [Instructor] [[Multiprotocol Label Switching (MPLS)|MPLS]]-TE explicit tunnel allows network administrators to manually specify the path that traffic should take through the network, rather than relying solely on the IGP to determine the shortest path.
>
> **[0:16](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=16)** This can be useful for optimizing network performance, managing bandwidth, and ensuring that specific traffic flows take preferred routes for various reasons, such as avoiding congestion or meeting specific service level agreements.
>
> **[0:34](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=34)** In this scenario, the best path between R1 and R3 is through R1, R2, R3 because this path has a lower metric compared to the bottom path, R1, R4, R5, R3.
>
> **[0:51](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=51)** We want to configure an explicit MPLS_TE tunnel, using the bottom path through R1, R4, R5, R3.
>
> **[1:01](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=61)** R1 is the tunnel head, and R3 is the tunnel end.
>
> **[1:06](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=66)** We need to configure the tunnel interface on the tunnel head or R1.
>
> **[1:12](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=72)** Before configuring a tunnel interface in MPLS [[Traffic Engineering]], it is essential to define the explicit path, using the IP explicit path identifier or IP explicit path name command.
>
> **[1:28](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=88)** Let's break down what each command is doing.
>
> **[1:31](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=91)** IP explicit path identifier 10, this command creates a new explicit path identifier with the number 10.
>
> **[1:40](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=100)** Next address, 10.1.4.4.
>
> **[1:43](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=103)** This comment adds the next hop address 10.1.4.4 to the explicit path identifier 10.
>
> **[1:52](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=112)** Initially, the path consists of only this address.
>
> **[1:56](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=116)** Next address, 10.4.5.5, this command adds another next hop address, 10.4.5.5, to the explicit path identifier 10.
>
> **[2:09](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=129)** Now the path includes two hops, 10.1.4.4, followed by 10.4.5.5.
>
> **[2:18](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=138)** Next address, 10.3.5.3.
>
> **[2:22](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=142)** This command adds a third next hop address, 10.3.5.3, to the explicit path identifier 10.
>
> **[2:32](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=152)** The pass now consists of three hops, 10.1.4.4, 10.4.5.5, and 10.3.5.3.
>
> **[2:43](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=163)** This sequence specifies the exact route that traffic should follow when using this explicit path identifier in MPLS-TE or other IP based explicit path configurations.
>
> **[2:58](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=178)** The first command is to create the tunnel interface and then use the IP unnumbered loop back zero command.
>
> **[3:05](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=185)** The IP unnumbered loop back zero command allows the tunnel interface to borrow the IP address of the loop back zero interface, which helps in simplifying the [[IP Addressing]] scheme and conserving IP addresses.
>
> **[3:19](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=199)** The next command is the tunnel destination command, which specifies the destination IP address of the tunnel, the tunnel end, or artery.
>
> **[3:28](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=208)** The next command is the tunnel mode, MPLS traffic, ENG command, which specifies that the tunnel will operate in MPLS traffic engineering mode.
>
> **[3:39](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=219)** The next command, configuring the MPLS traffic engineering path option one, to use the explicit identifier 10.
>
> **[3:48](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=228)** Tunnel MPLS traffic ENG path option one, explicit identifier 10.
>
> **[3:54](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=234)** This command specifies the explicit path that the MPLS tunnel will follow, ensuring precise [[Routing]] through the network, based on the defined path identifier.
>
> **[4:07](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=247)** We have successfully completed the MPLS-TE, tunnel configuration on R1.
>
> **[4:14](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=254)** You can check the status of the MPLS-TE tunnel using the command show, MPLS traffic, ENG tunnels.
>
> **[4:22](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=262)** The output of the show MPLS traffic ENG tunnels command provides information about the MPLS traffic engineering tunnel, named R1T0, also known as tunnel zero with the following details, name, name R1T0.
>
> **[4:40](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=280)** This is the name assigned to the MPLST tunnel, often a user defined name for easier identification.
>
> **[4:50](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=290)** Destination, destination 192.168.254.3.
>
> **[5:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=300)** It specifies the destination IP address of the tunnel.
>
> **[5:03](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=303)** In this case, traffic testing for 192.168.254.3,
>
> **[5:12](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=312)** will be forwarded through this MPLS-TE tunnel.
>
> **[5:18](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=318)** A status, describe the current status of the tunnel.
>
> **[5:21](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=321)** Admin, Admin up indicates the administrative status of the tunnel, up , means the tunnel is administratively enabled.
>
> **[5:32](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=332)** Oper, Oper up indicates the operational status of the tunnel.
>
> **[5:37](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=337)** Up means the tunnel is operational and passing traffic.
>
> **[5:42](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=342)** Path, path valid indicates the validity of the path chosen for the tunnel.
>
> **[5:48](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=348)** Valid means the path is correctly configured and available.
>
> **[5:53](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=353)** Signaling, signaling connected, indicates the signaling status of the tunnel.
>
> **[5:58](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=358)** Connected means the signaling protocol, like RSVPT, is properly established.
>
> **[6:05](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=365)** Path option one, it specifies the path option number used for this tunnel.
>
> **[6:11](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=371)** Type explicit 10 indicates that an explicit path identifier 10 is used for this tunnel.
>
> **[6:20](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=380)** The phrase explicit route, 10.1.4.4, 10.4.5.5, 10.3.5.3,
>
> **[6:29](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=389)** 192.168.254.3 indicates a specific path or route
>
> **[6:39](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=399)** that traffic will follow through a network.
>
> **[6:44](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=404)** In our next video, we will dive into the practical aspects of directing traffic to our MPLS Traffic Engineering or MPLS-TE tunnel.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (16), [[Traffic Engineering]] (5), [[IP Addressing]] (1), [[Routing]] (1)
> **Env Vars:** mpls (16), eng (4), r1t0 (2), igp (1), mpls_te (1)
> **Versions:** 10.1.4 (5), 10.4.5 (5), 10.3.5 (4), 192.168.254 (3)
> **Prerequisites:** configure (2)
> **Cross-References:** next video (1)
> **Definitions:** known as (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Steering traffic into an MPLS TE tunnel with static routes](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-static-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-static-routes?u=76281980&t=0)** - [Instructor] In the previous two videos, we configured an [[Multiprotocol Label Switching (MPLS)|MPLS]] TE tunnel between R1 and R3.
>
> **[0:07](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-static-routes?u=76281980&t=7)** In this video, we will learn how to steer traffic into this T tunnel using a static route.
>
> **[0:16](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-static-routes?u=76281980&t=16)** By default, MPLS TE tunnels are not injected into the [[Routing]] table, which means no traffic is automatically sent into the T tunnel.
>
> **[0:27](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-static-routes?u=76281980&t=27)** To steer traffic into an MPLS TE tunnel, you can use static routing to direct specific traffic flows through the tunnel.
>
> **[0:37](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-static-routes?u=76281980&t=37)** Make sure you have an MPLS TE tunnel configured and operational.
>
> **[0:42](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-static-routes?u=76281980&t=42)** Use sh mpls traffic-eng tunnels command.
>
> **[0:47](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-static-routes?u=76281980&t=47)** Identify the destination network, or IP address that you want to steer through the MPLS TE tunnel.
>
> **[0:55](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-static-routes?u=76281980&t=55)** Use a static route to direct traffic for the specific destination through the tunnel interface.
>
> **[1:02](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-static-routes?u=76281980&t=62)** This can be done with the ip route NETWORK MASK TUNNEL_ID command.
>
> **[1:09](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-static-routes?u=76281980&t=69)** Let's add the static route to steer traffic through the MPLS TE tunnel.
>
> **[1:14](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-static-routes?u=76281980&t=74)** ip route 10.3.0.0 255.255.255.0 tunnel 0.
>
> **[1:28](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-static-routes?u=76281980&t=88)** After configuring the static route, you can verify it using show ip route command.
>
> **[1:35](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-static-routes?u=76281980&t=95)** Look for the static route entry pointing to tunnel 0 for the destination network 10.3.0.0/24.
>
> **[1:46](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-static-routes?u=76281980&t=106)** You can use the traceroute command to see the path from R1 to 10.3.0.0/24 network.
>
> **[1:57](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-static-routes?u=76281980&t=117)** This method gives you precise control over which traffic is routed through the MPLS TE tunnel.
>
> **[2:04](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-static-routes?u=76281980&t=124)** Static routing is straightforward to configure and doesn't require dynamic routing vertical configuration, ensures that traffic benefits from the optimized path and performance characteristics of the MPLS TE tunnel.
>
> **[2:22](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-static-routes?u=76281980&t=142)** Managing static routes can become complex in a larger network with many destinations.
>
> **[2:30](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-static-routes?u=76281980&t=150)** Static routes do not automatically adapt to network changes or failures.
>
> **[2:35](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-static-routes?u=76281980&t=155)** Additional configurations are needed for redundancy.
>
> **[2:41](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-static-routes?u=76281980&t=161)** By using a static routing, you can effectively direct traffic into an MPLS TE tunnel, leveraging the benefits of [[Traffic Engineering]] to optimize your network's performance and resource utilization.
>
> **[2:56](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-static-routes?u=76281980&t=176)** In the next video, I will explain how we can steer traffic into the MPLS TE tunnel using Policy-Based Routing or PBR.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (11), [[Routing]] (6), [[Traffic Engineering]] (1)
> **Env Vars:** mpls (10), network (1), mask (1), tunnel_id (1), pbr (1)
> **Versions:** 10.3.0 (3), 255.255.255 (1)
> **Prerequisites:** make sure you have (1), configure (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Steering traffic into an MPLS TE tunnel with PBR](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-pbr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-pbr?u=76281980&t=0)** - [Instructor] In the previous video, we learned about steering traffic into an [[Multiprotocol Label Switching (MPLS)|MPLS]]-TE tunnel using static routes.
>
> **[0:08](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-pbr?u=76281980&t=8)** In this video, we will explore how to achieve the same objective, but this time using policy-based [[Routing]] or PBR.
>
> **[0:18](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-pbr?u=76281980&t=18)** PBR allows us to make routing decisions based on policies defined by the network administrator, offering a more flexible approach to directing traffic.
>
> **[0:31](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-pbr?u=76281980&t=31)** We need to create an Access Control List or ACL that will match the traffic we want to direct into the MPLS-TE tunnel.
>
> **[0:41](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-pbr?u=76281980&t=41)** Next, we will create a roadmap that uses the ACL to match the traffic and then sets the outgoing interface to the MPLS-TE tunnel interface.
>
> **[0:53](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-pbr?u=76281980&t=53)** Route-map PBR-MPLS-TE permit 10, match ip address ACL, set interface tunnel-id.
>
> **[1:03](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-pbr?u=76281980&t=63)** Then apply the route-map to the incoming interface where you want to steer traffic into the MPLS-TE tunnel.
>
> **[1:11](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-pbr?u=76281980&t=71)** Interface incoming-interface, ip policy route-map PBR_NAME.
>
> **[1:18](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-pbr?u=76281980&t=78)** Finally, we need to verify that our PBR configuration is working correctly and that the traffic is being directed into the MPLS-TE tunnel as intended.
>
> **[1:29](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-pbr?u=76281980&t=89)** Show ip policy, show route-map, show mpls traffic-eng tunnels.
>
> **[1:37](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-pbr?u=76281980&t=97)** Let's look at an example where we steer traffic from 10.1.0.0/24 destined for 10.3.0.0/24 into an MPLS-TE tunnel.
>
> **[1:52](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-pbr?u=76281980&t=112)** Ensure that your tunnel is properly configured and operational with show mpls traffic-eng tunnels before applying the PBR rules.
>
> **[2:04](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-pbr?u=76281980&t=124)** We need to create an Access Control List or ACL like access-list 100 permit ip 10.1.0.0.0.0.255
>
> **[2:19](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-pbr?u=76281980&t=139)** 10.3.0.0.0.0.0.255.
>
> **[2:29](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-pbr?u=76281980&t=149)** Next, we need to create a route-map like route-map PBR permit 10 match IP address 100 set interface tunnel 0.
>
> **[2:41](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-pbr?u=76281980&t=161)** Apply the route-map to the incoming interface gi0/2 interface gigabit ethernet 0/2 ip policy route-map PBR.
>
> **[2:55](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-pbr?u=76281980&t=175)** We need to verify the PBR with show ip policy show route-map.
>
> **[3:01](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-pbr?u=76281980&t=181)** Finally, we need to verify that our PBR is working with traceroute 10.3.0.3.
>
> **[3:09](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-pbr?u=76281980&t=189)** And that's how you can steer traffic into an MPLS-TE tunnel using policy-based routing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (10), [[Routing]] (3)
> **Env Vars:** pbr (9), mpls (8), acl (4), pbr_name (1)
> **Versions:** 10.3.0 (3), 10.1.0 (2), 0.0.0 (2), 0.255 (1)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### [MPLS TE dynamic tunnel](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=0)** - [Instructor] In this video, we will learn how to configure an [[Multiprotocol Label Switching (MPLS)|MPLS]] [[Traffic Engineering]], or TE, dynamic tunnel.
>
> **[0:08](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=8)** MPLS-TE dynamic tunnels enable automatic path selection based on network conditions, which helps optimize traffic flow and improve overall network performance.
>
> **[0:21](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=21)** In our scenario, we have two paths between R1 and R3.
>
> **[0:25](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=25)** The path between R1, R2, R3 has 20 megabit per second of bandwidth, and the path from R1, R4, R5, R3 has 10 megabit per second of bandwidth.
>
> **[0:39](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=39)** We will configure an MPLS-TE dynamic tunnel to ensure that traffic can dynamically select the best path based on the available bandwidth and network conditions.
>
> **[0:51](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=51)** Now let's create and configure the MPLS-TE tunnel interface.
>
> **[0:56](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=56)** This tunnel will dynamically select the best path based on current network conditions and available bandwidth.
>
> **[1:04](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=64)** Interface tunnel 0, this command creates or enters the configuration mode for the tunnel.
>
> **[1:11](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=71)** Interface tunnel 0, tunnel interfaces are logical interfaces used to encapsulate traffic that needs to be sent through a tunnel.
>
> **[1:21](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=81)** Here, tunnel 0 is being created or selected for configuration.
>
> **[1:27](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=87)** Ip unnumbered loopback0, this command assigns the IP address of the loopback0 interface to the tunnel interface, tunnel 0.
>
> **[1:35](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=95)** Using the ip unnumbered command helps save IP addresses by borrowing the IP address from another interface, typically a loopback interface, which is commonly used in [[Routing Protocols]] because of its stability.
>
> **[1:52](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=112)** Tunnel mode mpls traffic-eng, this command sets the mode of the tunnel to MPLS traffic engineering.
>
> **[2:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=120)** By setting the tunnel mode to mpls traffic-eng, you enable the tunnel interface to use MPLS-TE for forwarding traffic.
>
> **[2:09](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=129)** This is essential for using MPLS-TE features, such as dynamic path calculation and resource reservation.
>
> **[2:18](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=138)** Tunnel destination 192.168.254.3, this command specifies the destination IP address for the MPLS-TE tunnel.
>
> **[2:32](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=152)** The destination IP is the IP address of the remote endpoint of the tunnel.
>
> **[2:37](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=157)** Traffic sent through this tunnel will be directed to this destination IP.
>
> **[2:43](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=163)** Replace destination IP with the actual IP address of the remote routers loopback, or another interface.
>
> **[2:53](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=173)** Tunnel mpls traffic-eng bandwidth, this command sets the bandwidth for the MPLS-TE tunnel to 12,000 kilobit per second, or 12 megabit per second.
>
> **[3:06](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=186)** By specifying the bandwidth with this command, you are reserving 12 megabit per second of bandwidth for this tunnel.
>
> **[3:15](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=195)** This information is used by the MPLS-TE mechanisms to ensure that sufficient resources are available along the selected path, and to influence the dynamic path calculation, taking into account the available bandwidth on each potential path.
>
> **[3:35](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=215)** Tunnel mpls traffic-eng path option 1 dynamic, this command configures the tunnel to use a dynamically determined path as its first path option.
>
> **[3:46](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=226)** The path option 1 dynamic part specifies that the primary path, or option one, for this tunnel will be dynamically calculated by the router.
>
> **[3:57](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=237)** MPLS-TE will determine the best paths based on network conditions, available bandwidth, and other constraints, ensuring optimal path selection without manual configuration.
>
> **[4:12](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=252)** To check the status of an MPLS traffic engineering tunnel, you can use the command show mpls traffic-eng tunnels command.
>
> **[4:21](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=261)** This command provides detailed information about the configured MPLS-TE tunnels, including data status, configuration, and performance [[Statistics]].
>
> **[4:33](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=273)** The administrative status of the tunnel is up, indicating that it has been enabled.
>
> **[4:40](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=280)** The operational status of the tunnel is up, meaning that it is currently active and functioning properly.
>
> **[4:48](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=288)** The path of the tunnel is valid, which means that the path computation has succeeded and a valid path exists from the source to the destination.
>
> **[4:58](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=298)** The RSVP-TE signaling is connected, indicating that the signaling for the tunnel setup has been successfully established.
>
> **[5:09](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=309)** Path option 1, type dynamic.
>
> **[5:12](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=312)** This means that the tunnel is using path option one, which is dynamically calculated.
>
> **[5:18](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=318)** Dynamic path options are computed based on available network resources and constraints, rather than being statically defined.
>
> **[5:28](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=328)** The explicit route specifies the exact path the tunnel takes through the network.
>
> **[5:34](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=334)** The tunnel traverses through the IP addresses 10.1.2.2, 10.2.3.3, and finally reach the destination 192.168.254.3.
>
> **[5:52](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=352)** The reason this path is chosen is that it is the only path that can provide 12 megabit per second of bandwidth.
>
> **[6:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=360)** This ensures that the tunnel meets the necessary bandwidth requirements for its operation.
>
> **[6:08](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=368)** Now, let's define the next tunnel with the requirement of five megabit per second.
>
> **[6:14](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=374)** Interface tunnel 1.
>
> **[6:15](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=375)** Ip unnumberd loopback 0.
>
> **[6:18](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=378)** Tunnel destination 192.168.254.3
>
> **[6:27](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=387)** Tunnel mode mpls traffic-eng.
>
> **[6:31](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=391)** Tunnel mpls traffic-eng bandwidth 5000.
>
> **[6:35](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=395)** Tunnel mpls traffic-eng path-option 1 dynamic.
>
> **[6:40](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=400)** To check the status of an MPLS traffic engineering tunnel, you can use the command show mpls traffic-eng tunnel's command.
>
> **[6:50](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=410)** The administrative status of the tunnel is up indicating that it has been enabled.
>
> **[6:56](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=416)** The operational status of the tunnel is up, meaning that it is currently active and functioning properly.
>
> **[7:04](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=424)** Path option 1, type dynamic.
>
> **[7:06](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=426)** This means that the tunnel is using path option one, which is dynamically calculated.
>
> **[7:12](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=432)** Dynamic path options are computed based on available network resources and constraints rather than being statically defined.
>
> **[7:21](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=441)** The explicit route specifies the exact path the tunnel takes through the network.
>
> **[7:27](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=447)** The tunnel traverses through the IP addresses 10.1.4.4, 10.4.5.5, 10.3.5.3, and finally reach the destination 192.168.254.3.
>
> **[7:46](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=466)** The reason this path is chosen is that it is the only path that can provide five megabit per second of bandwidth.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (23), [[Traffic Engineering]] (4), [[Routing Protocols]] (1), [[Statistics]] (1)
> **Env Vars:** mpls (14), rsvp (1)
> **Versions:** 192.168.254 (4), 10.1.2 (1), 10.2.3 (1), 10.1.4 (1), 10.4.5 (1)
> **Prerequisites:** configure (3), setup (1)
> **Definitions:** means that (3)
> **UI Navigation:** select the (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [MPLS TE semi-dynamic tunnel using exclude-address](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=0)** - [Instructor] [[Multiprotocol Label Switching (MPLS)|MPLS]]-TE semi-dynamic tunnel using exclude addresses allows network engineers to dynamically route traffic while specifying certain addresses or nodes that must be avoided.
>
> **[0:15](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=15)** This combines the flexibility of dynamic [[Routing]] with the control of explicit paths to optimize traffic flows and avoid known problematic areas of the network.
>
> **[0:29](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=29)** In this scenario, we have two paths between R1 and R3.
>
> **[0:34](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=34)** We want to configure an MPLS-TE tunnel on R1 as the tunnel head end to R3 as the tunnel endpoint.
>
> **[0:42](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=42)** However, the only requirement is that the tunnel should not pass through R2.
>
> **[0:48](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=48)** We want to exclude R2 from the tunnel path.
>
> **[0:54](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=54)** We need to define explicit path with exclude address.
>
> **[0:58](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=58)** IP explicit path name NO_R2: exclude-address 192.168.254.2,
>
> **[1:11](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=71)** explicit path name NO_R2: exclude address 192.168.254.2.
>
> **[1:23](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=83)** IP explicit path name NO_R2 creates an explicit path named NO_R2 and excludes the address 192.168.254.2, R2's IP address.
>
> **[1:42](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=102)** Then configure the tunnel interface on R1, interface Tunnel0, IP unnumbered Loopback0, tunnel mode mpls traffic-eng tunnel destination 192.168.254.3,
>
> **[2:01](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=121)** tunnel mpls traffic-eng path option1 explicit name NO_R2, end.
>
> **[2:10](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=130)** Interface Tunnel0 creates the Tunnel0 interface.
>
> **[2:14](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=134)** IP on numbered Loopback0 uses the IP addresses of Loopback0 for the tunnel interface.
>
> **[2:22](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=142)** Tunnel destination 192.168.254.3 sets the tunnel destination to R3.
>
> **[2:32](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=152)** Tunnel mode mpls traffic-eng configures the tunnel for mpls [[Traffic Engineering]].
>
> **[2:38](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=158)** Tunnel mpls traffic-eng path-option 1 explicit name NO_R2 configures the tunnel to use the explicit path NO_R2.
>
> **[2:49](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=169)** After configuration, use the show mpls traffic-eng tunnels come in to verify that the tunnel is up and operational and ensure that it excludes R2.
>
> **[3:03](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=183)** Path option 1, this denotes the first path option available for the MPLS-TE tunnel.
>
> **[3:10](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=190)** Multiple path options can be configured, providing fallback path if the primary one is unavailable.
>
> **[3:18](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=198)** Type explicit. This indicates that the path is explicitly defined.
>
> **[3:23](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=203)** Unlike a dynamic path which is calculated by the router based on available network resources and constraints, and explicit paths specifies the exact route the tunnel should take.
>
> **[3:37](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=217)** NO_R2, this is the name of the explicit path that has been configured.
>
> **[3:42](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=222)** In this case, NO_R2 represents an explicit path that avoids a specific IP address or node, ensuring that the tunnel does not pass through R2.
>
> **[3:55](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=235)** 10.1.4.4, 10.3.4.3, 192.168.254.3,
>
> **[4:07](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=247)** these are the IP addresses of the nodes or routers or interfaces that the tunnel will pass through.
>
> **[4:15](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=255)** The sequence is in the exact order the tunnel will follow from the source to the destination.
>
> **[4:23](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=263)** In this scenario, we have configured an MPLS-TE tunnel from R1 to R3, ensuring that the tunnel does not pass through R2 by excluding R2's IP address from the path calculation.
>
> **[4:36](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=276)** This configuration meets the specified requirement by using an alternate path.
>
> **[4:44](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=284)** In the next video, we will dive into another method for setting up a semi-dynamic MPLS-TE tunnel.
>
> **[4:50](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=290)** We will explore how to leverage alternate techniques to optimize traffic flow and enhanced network reliability, and stay tuned to gain a deeper understanding of advanced MPLS-TE configurations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (12), [[Routing]] (1), [[Traffic Engineering]] (1)
> **Env Vars:** no_r2 (9), mpls (6)
> **Versions:** 192.168.254 (6), 10.1.4 (1), 10.3.4 (1)
> **Prerequisites:** configure (2)
> **CLI Commands:** node (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [MPLS TE semi-dynamic tunnel using loose next hop](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=0)** - [Instructor] In [[Multiprotocol Label Switching (MPLS)|MPLS]]-TE, a semi-dynamic tunnel refers to a setup where the tunnel path can be influenced or partially predefined, providing flexibility and control over [[Traffic Engineering]].
>
> **[0:15](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=15)** The loose next top technique is a specific method used within MPLS-TE to define paths with flexibility while ensuring traffic follows a general direction rather than a strict adherence to specific nodes or interfaces.
>
> **[0:33](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=33)** In this scenario between R1 and R3, there are two existing paths, we need to establish a tunnel path utilizing the lower route and leveraging both links between R4 and R5.
>
> **[0:49](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=49)** In MPLS-TE, explicit paths with loose next-hop and a strict next-hop configuration are methods used to define precise routes for traffic engineering tunnels.
>
> **[1:03](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=63)** A strict next-hop specifies exact intermediate nodes or interfaces that the MPLS-TE tunnel must traverse in sequence.
>
> **[1:14](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=74)** It's ideal for scenarios where the network topology and traffic engineering requirements necessitates deterministic paths.
>
> **[1:25](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=85)** ip explicit-path name TO_R3.
>
> **[1:28](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=88)** next-address strict 10.1.4.4.
>
> **[1:33](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=93)** next address strict 10.4.5.5.
>
> **[1:38](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=98)** next address strict 192.168.254.3.
>
> **[1:47](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=107)** This command explicitly defines the path that the tunnel must follow via a specific IP addresses.
>
> **[1:56](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=116)** Loose next-hop specifies a general direction or area for the tunnel to follow without specifying exact intermediate nodes.
>
> **[2:07](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=127)** It allows the network to dynamically determine the exact path based on realtime network conditions such as link availability and congestion.
>
> **[2:18](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=138)** ip explicit-path name TO_R3.
>
> **[2:21](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=141)** next-address strict 10.1.4.4.
>
> **[2:25](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=145)** Next-address loose 192.168.254.5.
>
> **[2:33](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=153)** Next-address strict 192.168.254.3.
>
> **[2:41](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=161)** This command provides a loose guideline for the path of the tunnel enabling adaptation to changes in the network.
>
> **[2:50](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=170)** It means that after reaching 10.1.4.4, the tunnel should proceed to towards 192.168.254.5, maintaining connectivity without specifying a particular link.
>
> **[3:09](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=189)** Then configure the tunnel interface on R1 interface Tunnel0.
>
> **[3:13](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=193)** ip unnumbered Loopback0.
>
> **[3:15](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=195)** tunnel mode mpls traffic-eng.
>
> **[3:18](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=198)** tunnel destination 192.168.254.3.
>
> **[3:27](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=207)** tunnel mpls traffic-eng path-option 1 explicit name TO_R3.
>
> **[3:35](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=215)** Interface Tunnel0 creates the tunnel zero interface, ip unnumbered Loopback0 uses the IP ads of Loopback0 for the tunnel interface.
>
> **[3:45](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=225)** Tunnel destination 192.168.254.3 sets the tunnel destination to R3.
>
> **[3:55](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=235)** Tunnel mode mpls traffic-eng, configures the tunnel for MPLS Traffic engineering.
>
> **[4:01](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=241)** Tunnel mpls traffic-eng path-option 1 explicit name TO_R3 configures the tunnel to use the explicit path TO_R3.
>
> **[4:11](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=251)** After configuration, use the show mpls traffic-eng tunnels command to verify that the tunnel is up and operational and ensure that it uses both links between R4 and R5.
>
> **[4:24](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=264)** The tunnel is using the gigabit zero to interface of R4 now.
>
> **[4:29](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=269)** Let's shut down the gigabit zero to interface of R4.
>
> **[4:34](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=274)** Then use the show mpls traffic-eng tunnels command to verify that the tunnel is using the next link between R4 and R5.
>
> **[4:43](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=283)** The tunnel is using the gigabit zero one interface of R4 now.
>
> **[4:49](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=289)** So a strict next-hop path offer deterministic performance characteristics but may not adapt well to network chains and loose next-hop path enhance adaptability and can optimize traffic flow dynamically, but may require robust network monitoring and management.
>
> **[5:09](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=309)** Congratulations.
>
> **[5:10](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=310)** You now have all the methods for configuring MPLS-TE tunnels, explicit tunnel, dynamic tunnel, and semi-dynamic tunnel.
>
> **[5:19](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=319)** In future videos, we will explore other capabilities of MPLS-TE.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (13), [[Traffic Engineering]] (4)
> **Env Vars:** mpls (7), to_r3 (5)
> **Versions:** 192.168.254 (6), 10.1.4 (3), 10.4.5 (1)
> **Definitions:** refers to (1), is a  (1), means that (1)
> **Prerequisites:** setup (1), configure (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 4. Advanced MPLS TE Features

[↑ Back to Table of Contents](#table-of-contents)

#### [MPLS TE auto-bandwidth](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-auto-bandwidth?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-auto-bandwidth?u=76281980&t=0)** - [Instructor] Welcome back to our [[Multiprotocol Label Switching (MPLS)|MPLS]] series.
>
> **[0:03](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-auto-bandwidth?u=76281980&t=3)** In this video, we will dive into MPLS [[Traffic Engineering]]'s auto-bandwidth feature.
>
> **[0:09](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-auto-bandwidth?u=76281980&t=9)** We will explore what auto-bandwidth is, how to configure it, and why it is crucial for optimizing network performance.
>
> **[0:18](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-auto-bandwidth?u=76281980&t=18)** First, let's define MPLS TE Auto-Bandwidth.
>
> **[0:22](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-auto-bandwidth?u=76281980&t=22)** Auto-bandwidth is a feature in MPLS Traffic Engineering that automatically adjusts the bandwidth of an MPLS TE tunnel based on current network conditions.
>
> **[0:33](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-auto-bandwidth?u=76281980&t=33)** This means your network can dynamically respond to changes in traffic load, ensuring efficient utilization of available bandwidth.
>
> **[0:43](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-auto-bandwidth?u=76281980&t=43)** The system adjusts tunnel bandwidth without manual intervention.
>
> **[0:48](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-auto-bandwidth?u=76281980&t=48)** It helps in balancing load across network paths and adapts to changes in traffic patterns.
>
> **[0:56](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-auto-bandwidth?u=76281980&t=56)** The MPLS TE tunnel periodically monitors traffic patterns and adjusts the allocated bandwidth to match current needs.
>
> **[1:05](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-auto-bandwidth?u=76281980&t=65)** It collects traffic [[Statistics]] for the tunnel and compares current load against the configured bandwidth and increases or decreases bandwidth based on current demand.
>
> **[1:17](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-auto-bandwidth?u=76281980&t=77)** Let's walk through the configuration of auto-bandwidth for an MPLS TE tunnel.
>
> **[1:23](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-auto-bandwidth?u=76281980&t=83)** The Tunnel mpls traffic-eng auto-bw command enables the auto-bandwidth feature for an MPLS Traffic Engineering or TE tunnel with optional parameters to specify the minimum and maximum bandwidth limits.
>
> **[1:38](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-auto-bandwidth?u=76281980&t=98)** This feature dynamically adjusts the tunnel's bandwidth based on [[Real-Time]] traffic measurements, optimizing network resource utilization.
>
> **[1:48](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-auto-bandwidth?u=76281980&t=108)** Minimum bandwidth specifies the minimum bandwidth that the tunnel can adjust to.
>
> **[1:53](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-auto-bandwidth?u=76281980&t=113)** This ensures that the tunnel always has a baseline bandwidth to handle minimum traffic requirements.
>
> **[2:01](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-auto-bandwidth?u=76281980&t=121)** Maximum bandwidth specifies the maximum bandwidth that the tunnel can adjust to.
>
> **[2:07](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-auto-bandwidth?u=76281980&t=127)** This prevents the tunnel from consuming more bandwidth than what is deemed acceptable or available.
>
> **[2:14](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-auto-bandwidth?u=76281980&t=134)** The Tunnel mpls traffic-eng auto-bw frequency command is used to set the interval at which the auto-bandwidth feature recalculates and adjusts the bandwidth of an MPLS Traffic Engineering or TE tunnel.
>
> **[2:29](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-auto-bandwidth?u=76281980&t=149)** This allows the network to dynamically respond to traffic change at regular intervals.
>
> **[2:36](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-auto-bandwidth?u=76281980&t=156)** The Tunnel mpls traffic-eng auto-bw collect-bw command is used to enable the collection of bandwidth usage statistics for an MPLS Traffic Engineering tunnel.
>
> **[2:48](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-auto-bandwidth?u=76281980&t=168)** This data is essential for the auto-bandwidth feature to analyze traffic patterns and adjust the tunnel's bandwidth accordingly.
>
> **[2:58](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-auto-bandwidth?u=76281980&t=178)** To verify that auto-bandwidth is enabled and functioning correctly, you can use show mpls traffic-eng tunnels.
>
> **[3:06](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-auto-bandwidth?u=76281980&t=186)** This is the auto-bandwidth configuration in our scenario, interface Tunnel0, ip unnumbered loopback0, tunnel mode mpls traffic-eng, tunnel destination 192.168.254.3, tunnel mpls traffic-eng auto-bw frequency 300 max-bw 10000 min-bw 5000.
>
> **[3:35](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-auto-bandwidth?u=76281980&t=215)** show mpls traffic-eng tunnels can be used to monitor the status of the tunnel.
>
> **[3:40](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-auto-bandwidth?u=76281980&t=220)** Auto-bandwidth is enabled.
>
> **[3:44](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-auto-bandwidth?u=76281980&t=224)** If the auto-bandwidth feature has just been enabled, wait for some time to allow the collection of samples.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (17), [[Traffic Engineering]] (5), [[Statistics]] (2), [[Real-Time]] (1)
> **Env Vars:** mpls (10)
> **Versions:** 192.168.254 (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [MPLS TE affinity](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=0)** - [Instructor] In this video, we are going to dive into an important aspect of [[Multiprotocol Label Switching (MPLS)|MPLS]] [[Traffic Engineering]], or MPLS-TE: affinity, also known as link coloring.
>
> **[0:12](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=12)** Affinity allows network operators to control and influence the selection of paths for TE tunnels based on specific link attributes.
>
> **[0:22](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=22)** This is particularly useful for ensuring that traffic adheres to specific constraints, such as avoiding certain links or preferring particular paths.
>
> **[0:34](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=34)** In MPLS-TE, affinity is a way to tag links with specific attributes or colors, and then configure TE tunnels to include or exclude these links based on their tags.
>
> **[0:49](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=49)** Each link in the network can be associated with a 32-bit affinity value.
>
> **[0:55](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=55)** Similarly, each TE tunnel can be configured with an affinity requirement that determines which links it can or cannot use.
>
> **[1:06](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=66)** First, you need to define the affinity attribute on the links.
>
> **[1:09](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=69)** This is done on the interface level with the mpls traffic-eng attribute-flags affinity_bits.
>
> **[1:17](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=77)** The mpls traffic-eng attribute-flags command is used in the configuration of an interface in Cisco IOS to set the affinity or attribute flags for MPLS traffic engineering, or TE.
>
> **[1:32](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=92)** Affinity bits specifies the 32-bit affinity value in hexadecimal format.
>
> **[1:39](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=99)** Each bit in the 32-bit value can represent a different attribute or property of the link.
>
> **[1:46](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=106)** Next, configure the TE tunnel to use or avoid links based on their affinity attribute.
>
> **[1:52](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=112)** Interface Tunnel0, tunnel mpls traffic-eng affinity affinity_bits [mask affinity_mask].
>
> **[2:01](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=121)** This command configures affinity attributes for an MPLS traffic engineering or TE tunnel.
>
> **[2:07](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=127)** It sets the affinity and mask values which control which links the TE tunnel can use based on their configured affinity flags.
>
> **[2:17](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=137)** Affinity_bits specifies the desired affinity value in hexadecimal format.
>
> **[2:23](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=143)** This value indicates the attributes the tunnel prefers or requires.
>
> **[2:28](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=148)** Affinity mask specify the affinity mask in hexadecimal format.
>
> **[2:33](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=153)** The mask determines which bits of the affinity value are considered when matching links.
>
> **[2:41](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=161)** In our scenario, two paths exist between R1 and R3.
>
> **[2:45](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=165)** Each path will be assigned a unique affinity.
>
> **[2:49](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=169)** The green path has an affinity attribute of 0x1 and the red path has an affinity attribute of 0x2.
>
> **[2:59](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=179)** We'll then define two tiles on R1, configuring each tunnel to use the specific affinity assigned to the desired paths.
>
> **[3:09](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=189)** R1 interface gigabit 0/0, mpls traffic-eng attribute-flags 0x1.
>
> **[3:17](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=197)** Interface gigabit 0/1, mpls traffic-eng attribute-flags 0x2.
>
> **[3:24](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=204)** R2, interface range gigabit 0/0-1, mpls traffic-eng attribute-flags 0x1.
>
> **[3:32](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=212)** R3, interface gigabit 0/0, mpls traffic-eng attribute-flags 0x1.
>
> **[3:40](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=220)** Interface gigabit 0/1, mpls traffic-eng attribute-flags 0x2.
>
> **[3:46](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=226)** R4, interface range gigabit 0/0-1, mpls traffic-eng attribute-flags 0x2.
>
> **[3:56](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=236)** We will then configure two tunnel interfaces on R1, each with specific requirements about the affinity flag.
>
> **[4:04](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=244)** Interface tunnel0: ip unnumbered loopback 0, tunnel mode mpls traffic-eng, tunnel destination 192.168.254.3, tunnel mpls traffic-eng affinity 0x1 mask 0x8f,
>
> **[4:25](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=265)** tunnel mpls traffic-eng path-option 1 dynamic, end.
>
> **[4:30](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=270)** Interface Tunnel1: ip unnumbered loopback0, tunnel mode mpls traffic-eng, tunnel destination 192.168.254.3, tunnel mpls traffic-eng affinity 0x2 mask 0x8f tunnel mpls traffic-eng path option 1 dynamic, end.
>
> **[4:55](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=295)** The command show mpls traffic-eng tunnels tunnel 0 is used on a Cisco router to display information about MPLS traffic engineering or TE tunnels.
>
> **[5:06](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=306)** Name: R1_t0.
>
> **[5:08](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=308)** This is the name assigned to the MPLS-TE tunnel.
>
> **[5:11](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=311)** In this case, the tunnel is named R1_t0.
>
> **[5:15](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=315)** Affinity: 0x1, 0x8f.
>
> **[5:18](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=318)** 0x1, this indicates that the tunnel has an affinity value of 0x1.
>
> **[5:25](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=325)** The mask is 0x8f, meaning all bits are considered.
>
> **[5:30](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=330)** Explicit route: 10.1.2.2, 10.2.3.3, 192.168.254.3
>
> **[5:41](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=341)** is the explicit route that the MPLS-TE tunnel will follow.
>
> **[5:45](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=345)** These are the IP addresses of the nodes or hops through which the tunnel will be established.
>
> **[5:53](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=353)** The command show mpls traffic-Eng tunnels tunnel 1 is used on a Cisco router to display information about MPLS traffic engineering, or TE tunnels.
>
> **[6:03](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=363)** Name: R1_t1.
>
> **[6:05](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=365)** This is the name assigned to the MPLS-TE tunnel.
>
> **[6:07](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=367)** In this case, the tunnel is named R1_t1.
>
> **[6:11](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=371)** Affinity: 0x2, 0x8f.
>
> **[6:14](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=374)** 0x2, this indicates that the tunnel has an affinity value of 0x2.
>
> **[6:19](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=379)** The mask is 0x8f, meaning all bits are considered.
>
> **[6:23](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=383)** Explicit route: 10.1.4.4, 10.3.4.3, 192.168.254.3
>
> **[6:34](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=394)** is the explicit route that the MPLS-TE tunnel will follow.
>
> **[6:38](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=398)** These are the IP addresses of the nodes or hops through which the tunnel will be established.
>
> **[6:45](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=405)** When a tunnel is being setup the traffic engineering database will look at the affinity bits of the links in the network and compare them against the affinity and mask value of the tunnel.
>
> **[6:56](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=416)** Only links whose attributes match the specified affinity and mask will be considered for the tunnel path.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (28), [[Traffic Engineering]] (6)
> **Env Vars:** mpls (11), ios (1)
> **Versions:** 192.168.254 (4), 10.1.2 (1), 10.2.3 (1), 10.1.4 (1), 10.3.4 (1)
> **Prerequisites:** configure (3), setup (1)
> **Code Identifiers:** affinity_bits (2), affinity_mask (1)
> **Definitions:** known as (1), is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [MPLS TE administrative weight](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=0)** - [Instructor] In this video, we are diving deep into the concept of [[Multiprotocol Label Switching (MPLS)|MPLS]] [[Traffic Engineering]] Administrative Weight, also known as TE metric, so let's get started.
>
> **[0:12](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=12)** Each interface in a network has an IGP metric, which is used for traditional [[Routing]] decisions.
>
> **[0:20](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=20)** In MPLS Traffic Engineering, or TE, each interface also has a TE metric.
>
> **[0:27](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=27)** By default, the TE metric is equal to the IGP metric.
>
> **[0:32](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=32)** When we configure an MPLS-TE tunnel, we can choose the path based on either the best IGP metric or the best TE metric.
>
> **[0:42](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=42)** Since these metrics are the same by default, there is no difference initially.
>
> **[0:49](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=49)** However, as we will see, the default setting uses the TE metric.
>
> **[0:56](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=56)** In this scenario, the base path from R1 to R3 based on the IGP metric is going from R1 to R2, then to R3.
>
> **[1:06](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=66)** Let's configure an MPLS-TE tunnel from R1 to R3.
>
> **[1:11](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=71)** interface Tunnel0, ip unnumbered Loopback0, tunnel mode mpls traffic-eng, tunnel destination 192.168.254.3, tunnel mpls traffic-eng path-option 1 dynamic, end.
>
> **[1:30](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=90)** Let's verify the tunnel with show mpls traffic-eng tunnels.
>
> **[1:34](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=94)** Path weight 10 indicates the weight assigned to the path of the MPLS Traffic Engineering tunnel.
>
> **[1:41](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=101)** Since the IGP metric and TE metric are same by default, the path weight of 10 suggests that this path is preferred based on the underlying IGP metric.
>
> **[1:52](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=112)** The line Metric Type: TE default refers to the default metric type used in MPLS Traffic Engineering, or TE tunnels.
>
> **[2:01](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=121)** The Explicit Route specifies the specific sequence of routers 10.1.2.2 10.2.3.3 192.168.254.3 that an MPLS Traffic Engineering tunnel will traverse.
>
> **[2:21](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=141)** As you can see, the TE metric is identical to the IGP metric for each interface.
>
> **[2:27](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=147)** Let's decrease the TE metric of the bottom path by configuring mpls traffic-eng administrative-weight on the interfaces associated with the bottom path.
>
> **[2:40](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=160)** Then verify the tunnel with show mpls traffic-eng tunnels.
>
> **[2:44](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=164)** Path weight 6 indicates the weight assigned to the path of the MPLS Traffic Engineering tunnel.
>
> **[2:51](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=171)** The Explicit Route specifies the specific sequence of routers 10.1.4.4 10.3.4.3 192.168.254.3 that an MPLS Traffic Engineering tunnel will traverse.
>
> **[3:11](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=191)** The bottom path has lower TE metric now.
>
> **[3:15](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=195)** You can alter the default behavior of MPLS-TE tunnels to select the optimal path based on IGP metric by using the command mpls traffic-eng path-selection {igp|te} Let's apply this command in our scenario and observe its impact.
>
> **[3:36](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=216)** interface Tunnel0, ip unnumbered Loopback0, tunnel mode mpls traffic-eng, tunnel destination 192.168.254.3, tunnel mpls traffic-eng path-option 1 dynamic, tunnel mpls traffic-eng path-selection metric igp, end.
>
> **[3:58](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=238)** Then verify the tunnel with show mpls traffic-eng tunnels.
>
> **[4:03](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=243)** Path weight 10 indicates the weight assigned to the path of the MPLS Traffic Engineering tunnel.
>
> **[4:09](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=249)** The line Metric Type: IGP interface indicates that the metric used for path selection in MPLS-TE tunnel is derived from the IGP metric of the interface.
>
> **[4:21](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=261)** The Explicit Route specifies the specific sequence of routers 10.1.2.2 10.2.3.3 192.168.254.3 that an MPLS Traffic Engineering tunnel will traverse.
>
> **[4:38](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=278)** The top path has lower IGP metric now.
>
> **[4:42](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=282)** By configuring MPLS-TE Administrative Weight, network administrators can optimize traffic distribution, enhance load balancing, and improve overall network resource utilization.
>
> **[4:55](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=295)** This flexibility is invaluable in meeting diverse network demands and ensuring efficient data delivery.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (24), [[Traffic Engineering]] (9), [[Routing]] (1)
> **Env Vars:** mpls (14), igp (11)
> **Versions:** 192.168.254 (5), 10.1.2 (2), 10.2.3 (2), 10.1.4 (1), 10.3.4 (1)
> **Definitions:** known as (1), refers to (1)
> **Prerequisites:** configure (2)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [MPLS TE setup and hold priority](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=0)** - [Instructor] In this video, we will dive into the concepts of setup and hold priority within the context of [[Multiprotocol Label Switching (MPLS)|MPLS]]-TE.
>
> **[0:08](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=8)** Set up and hold priorities are crucial elements in MPLS-TE that help determine the precedence of TE tunnel during path computation and maintenance.
>
> **[0:21](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=21)** Setup priority is used when an LSP is being established.
>
> **[0:25](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=25)** It dictates the importance of a new LSP in the network.
>
> **[0:31](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=31)** The lower the number, the higher the priority.
>
> **[0:34](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=34)** For example, a setup priority of zero is considered the highest priority while a priority of seven is the lowest.
>
> **[0:44](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=44)** Hold priority, on the other hand, is used to maintain an existing LSP when there is contention for network resources.
>
> **[0:53](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=53)** Just like setup priority, a lower number means a higher priority.
>
> **[0:58](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=58)** This ensures that critical LSPs remain active even during network congestion or resource shortage.
>
> **[1:07](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=67)** Now let's look at how to configure setup and hold priorities in a typical MPLS TE environment.
>
> **[1:16](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=76)** We need to enter the [[Traffic Engineering]] mode.
>
> **[1:19](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=79)** Use the tunnel MPLS traffic ENG priority, setup priority, hold priority command to configure the setup and hold priorities for an LSP.
>
> **[1:29](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=89)** Interface tunnel tunnel number.
>
> **[1:31](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=91)** Tunnel MPLS traffic ENG priority, setup priority, hold priority.
>
> **[1:38](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=98)** Let's go through a practical configuration example.
>
> **[1:42](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=102)** I configure tunnel zero with a bandwidth requirement of 12 megabit per second.
>
> **[1:48](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=108)** The tunnel selected the top path for this tunnel.
>
> **[1:51](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=111)** This path was chosen because it has a higher bandwidth of 24 megabit per second.
>
> **[1:57](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=117)** After reserving the 12 megabit per second for tunnel zero, the remaining available bandwidth on the top path is now 12 megabit per second.
>
> **[2:08](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=128)** Next, I configure tunnel one with the same destination, but with the bandwidth requirement of 17 megabit per second.
>
> **[2:15](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=135)** However, this tunnel did not come up.
>
> **[2:18](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=138)** The reason is that there isn't enough bandwidth available on either part to meet the 17 megabit per second requirement.
>
> **[2:28](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=148)** Let's break it down.
>
> **[2:31](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=151)** The top path after reserving 12 megabit per second for tunnel zero has 12 megabit per second of remaining bandwidth.
>
> **[2:39](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=159)** The bottom path has 16 megabit per second of available bandwidth.
>
> **[2:44](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=164)** But since tunnel one requires 17 megabit per second, neither path can accommodate this requirement.
>
> **[2:52](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=172)** Let's configure tunnel one with a setup and hold priority of one and tunnel zero with the setup and hold priority of five.
>
> **[3:01](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=181)** With this setting, tunnel one has the highest priority during both the setup and hold phases.
>
> **[3:07](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=187)** This means that if there is contention for bandwidth, tunnel one will be preferred over tunnel zero.
>
> **[3:16](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=196)** With this new priority setting, both tunnel zero and tunnel one can be established.
>
> **[3:21](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=201)** Tunnel zero will use the bottom path and tunnel one will use the top path.
>
> **[3:27](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=207)** Now let's verify the configuration and the status of tunnel zero using the command, show MPLS traffic engineering tunnels tunnel zero.
>
> **[3:35](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=215)** Explicit route shows that it uses a bottom path.
>
> **[3:39](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=219)** Then verify the configuration and the status of tunnel one using the command show MPLS traffic ENG tunnels tunnel one.
>
> **[3:46](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=226)** Explicit route shows that it uses the bottom path.
>
> **[3:51](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=231)** This demonstrates the effectiveness of using setup and hold priorities to manage network resources.
>
> **[3:59](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=239)** When configuring setup and hold priorities, keep these best practices in mind.
>
> **[4:05](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=245)** One, assign higher priorities means lower numbers to critical LSPs.
>
> **[4:12](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=252)** Two, ensure that hold priority is not lower than setup priority to maintain consistency.
>
> **[4:19](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=259)** Three, regularly review and adjust priorities based on network performance and requirements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (7), [[Traffic Engineering]] (2)
> **Prerequisites:** setup (14), configure (5), set up (1)
> **Env Vars:** mpls (7), lsp (4), eng (3)
> **Analogies:** for example (1), just like (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [MPLS TE autoroute announce](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-autoroute-announce?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-autoroute-announce?u=76281980&t=0)** - [Instructor] In this video, we are diving into [[Multiprotocol Label Switching (MPLS)|MPLS]] [[Traffic Engineering]] Autoroute Announce, a crucial feature that enhances traffic engineering in MPLS networks.
>
> **[0:10](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-autoroute-announce?u=76281980&t=10)** Let's get started.
>
> **[0:13](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-autoroute-announce?u=76281980&t=13)** Autoroute Announce simplifies the process of directing traffic through TE tunnels without the need for manual [[Routing]] adjustments.
>
> **[0:23](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-autoroute-announce?u=76281980&t=23)** MPLS-TE Autoroute Announce is a feature in MPLS traffic engineering that automatically advertises a tunnel as a preferred path for a specific traffic.
>
> **[0:34](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-autoroute-announce?u=76281980&t=34)** This means that once a TE tunnel is established, the IGP will automatically use this tunnel to forward traffic destined for a particular prefix.
>
> **[0:46](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-autoroute-announce?u=76281980&t=46)** Let's look at an example configuration of MPLS-TE Autoroute Announce.
>
> **[0:51](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-autoroute-announce?u=76281980&t=51)** This is the MPLS-TE tunnel configured on R1, interface Tunnel0, ip unnumbered Loopback0, tunnel mode mpls traffic-eng, tunnel destination 192.168.254.3, tunnel mpls traffic-eng path-option 1 dynamic.
>
> **[1:13](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-autoroute-announce?u=76281980&t=73)** Without Autoroute Announce, the tunnel will not appear in the routing table, requiring us to configure a static route or policy-based routing, or PBR, to direct traffic into it.
>
> **[1:26](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-autoroute-announce?u=76281980&t=86)** Let's add the Autoroute Announce to the tunnel interface, interface Tunnel0, ip unnumbered Loopback0, tunnel mode mpls traffic-eng, tunnel destination 192.168.254.3, tunnel mpls traffic-eng path-option 1 dynamic, tunnel mpls traffic-eng autoroute announce.
>
> **[1:50](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-autoroute-announce?u=76281980&t=110)** In this configuration, the tunnel mpls traffic-eng autoroute announce command ensures that the IGP will automatically announce this tunnel for traffic engineering purposes.
>
> **[2:03](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-autoroute-announce?u=76281980&t=123)** Let's use sh ip route to display that the tunnel interface is automatically added to the routing table.
>
> **[2:10](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-autoroute-announce?u=76281980&t=130)** Autoroute allows the router to automatically install MPLS forwarding entries in the IP routing table for each TE tunnel.
>
> **[2:18](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-autoroute-announce?u=76281980&t=138)** These entries ensures that traffic destined for a specific IP prefixes is forwarded through the appropriate tunnel.
>
> **[2:28](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-autoroute-announce?u=76281980&t=148)** The command sh mpls traffic-eng tunnels with the output Autoroute enabled indicates that the autoroute feature is enabled for MPLS traffic engineering tunnels on the device.
>
> **[2:41](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-autoroute-announce?u=76281980&t=161)** In a real-world scenario, MPLS-TE Autoroute Announce can significantly reduce the complexity of managing large scale networks.
>
> **[2:50](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-autoroute-announce?u=76281980&t=170)** By automating the advertisement of TE tunnels, network administrators can ensure efficient traffic flow and better resource utilization without constantly tweaking routing configurations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (16), [[Routing]] (6), [[Traffic Engineering]] (5)
> **Env Vars:** mpls (9), igp (2), pbr (1)
> **Versions:** 192.168.254 (2)
> **Definitions:** is a  (1), means that (1)
> **Prerequisites:** configure (1), install (1)
> **Speakers:** - [instructor] (1)

#### [MPLS TE forwarding adjacency](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-forwarding-adjacency?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-forwarding-adjacency?u=76281980&t=0)** - [Instructor] In this video, we are delving into [[Multiprotocol Label Switching (MPLS)|MPLS]]-TE forwarding adjacency, a critical concept in MPLS [[Traffic Engineering]] that facilitates efficient load sharing across network paths.
>
> **[0:13](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-forwarding-adjacency?u=76281980&t=13)** Let's get started.
>
> **[0:16](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-forwarding-adjacency?u=76281980&t=16)** MPLS-TE forwarding adjacency allows you to advertise a TE tunnel as a link in your IGP.
>
> **[0:24](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-forwarding-adjacency?u=76281980&t=24)** Let's take a look at this scenario.
>
> **[0:27](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-forwarding-adjacency?u=76281980&t=27)** Imagine we want to load balance traffic from R1 to R7.
>
> **[0:32](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-forwarding-adjacency?u=76281980&t=32)** All interfaces have the same metric.
>
> **[0:34](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-forwarding-adjacency?u=76281980&t=34)** We have two paths, but because the path through R2 is the shortest path, that's the only path we will use.
>
> **[0:43](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-forwarding-adjacency?u=76281980&t=43)** We could solve this by configuring one MPLS-TE tunnel from R4 to R6 and another from R6 to R4.
>
> **[0:52](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-forwarding-adjacency?u=76281980&t=52)** TE tunnels are unidirectional, so this setup ensures bidirectional traffic flow.
>
> **[0:59](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-forwarding-adjacency?u=76281980&t=59)** Because forwarding adjacency advertises the TE tunnel as a link in your IGP, we need tunnels in both directions.
>
> **[1:07](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-forwarding-adjacency?u=76281980&t=67)** If you only configure unidirectional TE tunnels and enable forwarding adjacency, the IGP won't use the link.
>
> **[1:16](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-forwarding-adjacency?u=76281980&t=76)** Then we need to enable MPLS-TE forwarding adjacency on the tunnel interface with tunnel mpls traffic-eng forwarding adjacency command.
>
> **[1:27](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-forwarding-adjacency?u=76281980&t=87)** Let's verify the [[Routing]] table on R1.
>
> **[1:29](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-forwarding-adjacency?u=76281980&t=89)** For the 10.7.0.0/24 network, R1 uses both paths, one through R2 and the other through R4.
>
> **[1:39](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-forwarding-adjacency?u=76281980&t=99)** This indicates that load sharing between these two paths is working effectively, thanks to the MPLS-TE tunnels configured on R4 and R6.
>
> **[1:51](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-forwarding-adjacency?u=76281980&t=111)** The tunnel mpls traffic-eng forwarding-adjacency holdtime command in MPLS-TE configures the hold time for forwarding adjacencies.
>
> **[2:02](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-forwarding-adjacency?u=76281980&t=122)** The hold time is important when the tunnel goes down.
>
> **[2:06](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-forwarding-adjacency?u=76281980&t=126)** when a TE tunnel goes down, the router calculates a new path and the TE tunnel comes back up.
>
> **[2:13](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-forwarding-adjacency?u=76281980&t=133)** This causes the link to be withdrawn and readvertised in your IGP.
>
> **[2:18](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-forwarding-adjacency?u=76281980&t=138)** The hold time defines how long the tunnel must be down before telling the IGP it is down.
>
> **[2:25](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-forwarding-adjacency?u=76281980&t=145)** This is useful for maintaining stability in the network and avoiding frequent changes in the routing table, due to temporary tunnel failures.
>
> **[2:35](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-forwarding-adjacency?u=76281980&t=155)** The command show mpls traffic-eng tunnels shows that forwarding adjacency is enabled for this tunnel.
>
> **[2:44](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-forwarding-adjacency?u=76281980&t=164)** Enabling forwarding adjacency for MPLS-TE tunnels allows these tunnels to be advertised as virtual links in the IGP.
>
> **[2:54](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-forwarding-adjacency?u=76281980&t=174)** This integration enhances load sharing, network utilization, and stability, making it easier to manage and optimize traffic engineering in MPLS networks.
>
> **[3:06](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-forwarding-adjacency?u=76281980&t=186)** Configuring an appropriate hold time ensures resilience by maintaining the forwarding adjacency in the IGP during temporary tunnel failures.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (12), [[Traffic Engineering]] (2), [[Routing]] (2)
> **Env Vars:** mpls (9), igp (7)
> **Prerequisites:** setup (1), configure (1)
> **Versions:** 10.7.0 (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Class-based tunnel selection (CBTS)](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=0)** - [Instructor] In this session, we learn about Class-based Tunnel Selection or CBTS in [[Multiprotocol Label Switching (MPLS)|MPLS]] [[Traffic Engineering]] or MPLSTE.
>
> **[0:09](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=9)** In this guide, we will explore the concept of CBTS, its importance in network traffic management, and how to configure it in a Cisco environment.
>
> **[0:22](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=22)** Class-based Tunnel Selection, or CBTS, is a traffic engineering feature that allows different classes of service, or CoS, traffic to be directed onto separate TE tunnels.
>
> **[0:36](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=36)** These tunnels must all connects the same head end and tail end routers.
>
> **[0:42](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=42)** When [[Routing]] CoS traffic to a destination using CBTS tunnels, all traffic for that destination must be routed through these tunnels.
>
> **[0:53](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=53)** Meaning no traffic can be forwarded outside of them via an LSP or as IP traffic.
>
> **[1:01](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=61)** The label switching router or LSR evaluates the IP precedents bits or EXP bits of incoming labels to determine the appropriate TE tunnel.
>
> **[1:14](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=74)** You can map each EXP bit value to a specific TE tunnel, utilizing up to eight tunnels between a pair of LSRs, corresponding to the eight levels of QOS provided by the three EXP bits.
>
> **[1:30](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=90)** (computer key clacking) Let's walk through an example to learn about Class-based Tunnel Selection or CBTS in MPLST.
>
> **[1:39](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=99)** Imagine a service provider network where we have different types of traffic, such as voice, video, and data.
>
> **[1:48](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=108)** Each type of traffic requires different levels of service.
>
> **[1:53](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=113)** We have two routers, router one or head end, and router five or tail end connected by three TE tunnels.
>
> **[2:02](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=122)** Voice and network protocol traffic have an EXP of five, six, or seven.
>
> **[2:08](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=128)** Video traffic has an EXP of three or four, and data traffic has an EXP of zero, one or two.
>
> **[2:18](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=138)** Voice and network protocol traffic must use tunnel one.
>
> **[2:22](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=142)** Video traffic must use tunnel two.
>
> **[2:24](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=144)** Data traffic must use tunnel three.
>
> **[2:28](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=148)** The first task is to assign each EXP value to a tunnel using the command tunnel MPLS traffic ENG EXP value.
>
> **[2:37](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=157)** Assign EXP values five, six, and seven to tunnel one.
>
> **[2:43](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=163)** Assign EXP values three and four to tunnel two.
>
> **[2:47](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=167)** Assign EXP values zero one, and two to tunnel three.
>
> **[2:53](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=173)** Then we need to create a tunnel that includes the three previous tunnels.
>
> **[2:59](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=179)** The name of this tunnel is EXP Bundle Tunnel.
>
> **[3:02](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=182)** And finally, we forward traffic into this tunnel.
>
> **[3:07](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=187)** Let's learn about the configuration of this tunnel.
>
> **[3:12](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=192)** Interface Tunnel 100.
>
> **[3:14](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=194)** This command creates the tunnel interface name Tunnel 100.
>
> **[3:20](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=200)** IP unnumbered Loopback0.
>
> **[3:22](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=202)** This command assigns the IP address of loopback zero to Tunnel 100, allowing it to operate without a unique IP address.
>
> **[3:31](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=211)** Tunnel mode MPLS traffic ENG.
>
> **[3:34](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=214)** This sets the tunnel mode to MPLS traffic engineering, enabling the interface to support MPLST.
>
> **[3:42](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=222)** Tunnel destination 192.168.254.5.
>
> **[3:49](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=229)** This specifies the destination IP address of the tunnel.
>
> **[3:53](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=233)** Directing traffic to the endpoint at 192.168.254.5.
>
> **[4:03](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=243)** Tunnel MPLS traffic ENG autoroute announce.
>
> **[4:07](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=247)** This command ensures that route learn via MPLST are automatically announced to the IGP or Interior Gateway Protocol.
>
> **[4:17](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=257)** Tunnel MPLS traffic ENG EXP bundle master.
>
> **[4:23](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=263)** This designates Tunnel 100 as the master in an experimental bundle, which aggregates multiple member tunnels for enhanced redundancy and load balancing.
>
> **[4:35](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=275)** Tunnel MPLS traffic ENG EXP bundle member Tunnel 1, 2, 3.
>
> **[4:43](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=283)** This command adds Tunnel 1, Tunnel 2, and Tunnel 3 as member tunnels to the experimental bundle, providing additional paths for traffic and ensuring higher availability and resilience.
>
> **[4:57](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=297)** This configuration creates a robust MPLST tunnel set up.
>
> **[5:02](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=302)** With Tunnel 100 as the master and three member tunnels, ensuring efficient traffic management and increased network reliability.
>
> **[5:13](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=313)** Now let's review the output of the show mpls traffic-eng tunnels Tunnel 100 Command, which provides details about Tunnel 100 on router R1.
>
> **[5:25](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=325)** Name R1_t100, Tunnel 100.
>
> **[5:30](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=330)** Destination, 192.168.254.5 This line shows the name of the tunnel and its destination.
>
> **[5:41](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=341)** The tunnel is named R1_t100.
>
> **[5:45](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=345)** Tunnel 100, and it is directed to the IP address, 192.168.254.5.
>
> **[5:56](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=356)** A status, master.
>
> **[5:57](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=357)** This indicates that Tunnel 100 is the master tunnel in an experimental bundle.
>
> **[6:04](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=364)** Admin, up, oper, up, signaling, N/A.
>
> **[6:09](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=369)** Admin up, the administrative status of the tunnel is up, meaning it is enabled.
>
> **[6:14](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=374)** Oper up, the operational status of the tunnel is up, indicating it is functioning correctly.
>
> **[6:21](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=381)** Signaling, N/A, no signaling information is available or applicable for this tunnel.
>
> **[6:29](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=389)** Member autoroute, inactive.
>
> **[6:31](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=391)** This indicates that the member tunnels autoroute announcement is currently inactive.
>
> **[6:38](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=398)** Member tunnels, Tunnel1.
>
> **[6:40](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=400)** Config Exp 5 6 7.
>
> **[6:45](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=405)** Tunnel1 is a member of the experimental bundle.
>
> **[6:49](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=409)** Config Exp 5 6 7.
>
> **[6:51](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=411)** The experimental configuration for Tunnel1 includes priorities five, six, and seven.
>
> **[7:00](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=420)** Tunnel2, config Exp 3 4.
>
> **[7:03](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=423)** Tunnel2 is another member tunnel.
>
> **[7:06](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=426)** Config Exp 3 4.
>
> **[7:08](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=428)** The experimental configuration for Tunnel2 includes priorities three and four.
>
> **[7:15](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=435)** Tunnel3, Config Exp 0 1 2.
>
> **[7:19](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=439)** Tunnel3 is the third member tunnel.
>
> **[7:22](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=442)** Config Exp 0 1 2, the experimental configuration for Tunnel3 includes priorities zero, one and two.
>
> **[7:32](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=452)** History, this section provides historical information about the tunnel.
>
> **[7:37](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=457)** Time since created one hours, 53 minutes.
>
> **[7:42](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=462)** The tunnel was created one hour and 53 minutes ago.
>
> **[7:47](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=467)** Number of LSP IDs, Tun instances, used, zero.
>
> **[7:53](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=473)** No LSP IDs Tunnel instances have been used so far.
>
> **[7:59](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=479)** This configuration ensures that Tunnel 100 is up and running with specified member tunnels for enhanced redundancy and load balancing, with detailed status and historical information to monitor its performance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (8), [[Traffic Engineering]] (3), [[Routing]] (1)
> **Env Vars:** exp (14), mpls (7), cbts (5), eng (5), mplst (4)
> **Versions:** 192.168.254 (4)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1), such as (1)
> **Prerequisites:** configure (1), set up (1)
> **Speakers:** - [instructor] (1)


### 5. MPLS TE Fast Reroute (FRR)

[↑ Back to Table of Contents](#table-of-contents)

#### [MPLS TE Fast Reroute for link protection: Part 1](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=0)** - [Instructor] In this video, we will explore [[Multiprotocol Label Switching (MPLS)|MPLS]]-TE Fast Reroute, or FRR, for link protection.
>
> **[0:08](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=8)** Let's start with a brief overview.
>
> **[0:11](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=11)** MPLS-TE Fast Reroute or FRR is a mechanism that provides fast recovery from link or node failures in an MPLS network.
>
> **[0:23](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=23)** It allows traffic to be rerouted quickly to a pre-established backup path, ensuring minimal disruption.
>
> **[0:33](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=33)** In the context of MPLS-TE, FRR link protection involves creating a backup path for a specific link in an LSP.
>
> **[0:44](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=44)** When the primary link fails, traffic is immediately switched to this backup path, maintaining the flow of data.
>
> **[0:54](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=54)** With link protection, one particular link used for TE is protected.
>
> **[1:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=60)** This means that all TE Tunnels that are crossing this link are protected by one backup tunnel.
>
> **[1:07](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=67)** This technique is also called facility backup because a complete link with all its TE LSPs backed up.
>
> **[1:16](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=76)** This figure shows a simple network whereby the link R1-R2 is protected by a backup tunnel, R1-R3-R2.
>
> **[1:28](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=88)** This backup tunnel protects only the TE Tunnels in the direction from R1 to R2.
>
> **[1:35](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=95)** Therefore, to protect all tunnels crossing the link R1-R2 in both directions, you need another backup tunnel, R2-R3-R1.
>
> **[1:48](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=108)** In the case of link protection, the backup tunnel is also called a next hop or NHOP bypass tunnel, and always start on the point of local repair or PLR.
>
> **[2:02](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=122)** The PLR here is router R2.
>
> **[2:07](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=127)** The backup tunnel for link protection always connects to the next hop router.
>
> **[2:13](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=133)** This means the router at the remote end of the link.
>
> **[2:17](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=137)** This router is the merge point or MP because this is the router where the protected tunnel and backup tunnel merge.
>
> **[2:27](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=147)** The backup tunnel is an explicit path tunnel that RSVP signals.
>
> **[2:33](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=153)** When the backup tunnel is created, RSVP signals the labels as usual.
>
> **[2:40](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=160)** In this figure, R3 signals R5 to use the implicit NULL label, and R5 signals R2 to use label 500 for the backup tunnel.
>
> **[2:52](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=172)** The TE Tunnel 1 is crossing the link R2-R3.
>
> **[2:57](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=177)** Look at this figure to see the packet forwarding for Tunnel 1.
>
> **[3:01](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=181)** When the protection is not yet in use, the packets on the LSP of Tunnel 1 are coming in on router R2 with a label of 200.
>
> **[3:12](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=192)** This label is swapped with label 300 when the packet leaves router R3.
>
> **[3:18](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=198)** Finally label 300 popped out from router R2.
>
> **[3:24](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=204)** Assume the link between R2 and R3 fails.
>
> **[3:28](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=208)** As soon as the link R2- R3 fails, the PLR here, R2, starts to send the traffic on TE Tunnel 1 onto the NHOP backup tunnel across R5.
>
> **[3:42](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=222)** The incoming packets on R2 are label swapped as before.
>
> **[3:46](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=226)** Label 100 is swapped with label 300.
>
> **[3:50](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=230)** Then the additional label for the NHOP tunnel, label 500 is pushed onto the packet.
>
> **[3:57](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=237)** The packet is labeled switched on the NHOP backup tunnel until it reaches router R3, the MP, the tail end router of the protected link.
>
> **[4:08](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=248)** Notice that the packet arrives at R3 with label 300.
>
> **[4:12](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=252)** When the link R2-R3 was not failing, the packet arrived at router R3 with the same label.
>
> **[4:19](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=259)** The only difference is that now the packet arrives at R3 via another interface.
>
> **[4:26](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=266)** Because the platform-wide label space is used, this does not cause a problem.
>
> **[4:33](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=273)** The PLR should use this backup tunnel to carry TE LSPs only briefly.
>
> **[4:39](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=279)** The protection is temporary because the link failure triggers the PLR to send a path error to the head end router of the TE Tunnel.
>
> **[4:48](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=288)** When the head end router of the protected TE Tunnel receives the path error, it recalculates a new path for the tunnel LSP and signals it.
>
> **[4:59](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=299)** The IGP also signals the link failure when the PLR uses the backup tunnel to route a protected LSP.
>
> **[5:07](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=307)** The PLR sends the path message of the protected tunnel onto the backup tunnel as long as the backup tunnel is in use.
>
> **[5:17](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=317)** When the head end router completes signaling, the whole LSP's rerouted through the network.
>
> **[5:24](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=324)** The protected TE LSP no longer uses the backup tunnel.
>
> **[5:28](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=328)** One drawback of using link protection is that the NHOP tunnel secures an entire link.
>
> **[5:35](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=335)** At any given moment, numerous TE LSPs with varying bandwidth requirements may traverse the protected link.
>
> **[5:43](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=343)** Consequently, the total protected bandwidth can fluctuate significantly over time.
>
> **[5:50](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=350)** Additionally, the backup tunnel does not allocate bandwidth.
>
> **[5:54](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=354)** As a result, when protected tunnels rely on the backup tunnel, there may not be sufficient bandwidth available to handle all traffic, potentially leading to dropped traffic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (4)
> **Env Vars:** plr (7), lsp (6), nhop (5), mpls (4), frr (3)
> **Definitions:** is a  (1), means that (1), is an  (1)
> **CLI Commands:** node (1)
> **Speakers:** - [instructor] (1)

#### [MPLS TE Fast Reroute for link protection: Part 2](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-ii?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-ii?u=76281980&t=0)** - [Instructor] In our scenario, the primary tunnel is configured on R1 with the destination set to R4.
>
> **[0:07](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-ii?u=76281980&t=7)** We aim to protect the link between R2 and R3, making R2 the point of local repair or PLR.
>
> **[0:14](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-ii?u=76281980&t=14)** Consequently, we configured the backup tunnel on R2 with the destination set to R3.
>
> **[0:21](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-ii?u=76281980&t=21)** R3 is the MP or merge point.
>
> **[0:23](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-ii?u=76281980&t=23)** We configured the backup tunnel with an explicit path from the PLR to the next hop router.
>
> **[0:30](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-ii?u=76281980&t=30)** On the headend router of the protected TE tunnel, you specify that the tunnel can use a backup tunnel or be Fast Rerouted with the command, tunnel [[Multiprotocol Label Switching (MPLS)|mpls]] traffic-eng fast-reroute.
>
> **[0:43](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-ii?u=76281980&t=43)** Then specify the backup tunnel with the interface command, mpls traffic-eng backup-path on the protected link.
>
> **[0:52](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-ii?u=76281980&t=52)** Normally, when the headend router receives a path error message, the tunnel goes down until the [[Traffic Engineering]] or TE labels to each path or LSP is rerouted.
>
> **[1:04](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-ii?u=76281980&t=64)** However, in the case of Fast Reroute or FRR, this does not happen.
>
> **[1:10](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-ii?u=76281980&t=70)** The path error message sent by the point of local repair or PLR indicates that the local repair is active.
>
> **[1:17](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-ii?u=76281980&t=77)** This status informs the headend router not to take the tunnel down while searching for another path for the TE LSP.
>
> **[1:27](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-ii?u=76281980&t=87)** If the tunnels were to go down, traffic would be lost, defeating the purpose of FRR.
>
> **[1:35](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-ii?u=76281980&t=95)** Notice that the PLR maintains a Fast Route or FRR database, which includes details such as the incoming and outgoing labels used when the backup tunnel is active.
>
> **[1:47](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-ii?u=76281980&t=107)** When the backup tunnel's state is ready, it is signaled, but not yet used for FRR.
>
> **[1:53](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-ii?u=76281980&t=113)** In the active state, the backup tunnel reroutes multiple traffic engineering or TE tunnel label-switched paths or LSPs.
>
> **[2:02](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-ii?u=76281980&t=122)** The partial state indicates that the backup tunnel has not been signaled yet.
>
> **[2:10](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-ii?u=76281980&t=130)** Regular traffic should not use the backup tunnel.
>
> **[2:13](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-ii?u=76281980&t=133)** Therefore, the backup tunnel should not have autoroute announce or forwarding adjacency configured.
>
> **[2:22](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-ii?u=76281980&t=142)** In the next video, get ready to dive into the world of MPLS TE Fast Reroute Node Protection.
>
> **[2:29](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-ii?u=76281980&t=149)** We will explore how this powerful feature ensures seamless network resilience and keeps your data flowing smoothly.
>
> **[2:37](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-ii?u=76281980&t=157)** Don't miss it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (3), [[Traffic Engineering]] (2)
> **Env Vars:** plr (4), frr (4), lsp (2), mpls (1)
> **CLI Commands:** node (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [MPLS TE Fast Reroute for node protection](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=0)** - [Instructor] [[Multiprotocol Label Switching (MPLS)|MPLS]]-TE Fast Reroute or FRR for node protection is a feature designed to enhance the resilience of MPLS [[Traffic Engineering]] or TE networks by providing repeat backup paths in the event of node failures.
>
> **[0:17](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=17)** In MPLS-TE networks, traffic is often routed through specific nodes based on predefined paths or TLSPs.
>
> **[0:26](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=26)** If a critical node along these paths fails, it can disrupt traffic.
>
> **[0:33](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=33)** MPLS-TE Fast Reroute for node protection addresses this issue by pre-computing backup paths or bypass tunnels that can quickly reroute traffic around failed nodes, minimizing service disruption.
>
> **[0:50](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=50)** With FRR for node protection, the goal is to safeguard an entire router rather than just a single link.
>
> **[0:58](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=58)** This is achieved by establishing a next-next-hop or NNHOP backup tunnel, ensuring continuity of traffic flow in the event of a router failure.
>
> **[1:11](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=71)** NNHOP backup tunnel is not a tunnel to the next hop router of the PLR, but to the router that is one hop behind the protected router.
>
> **[1:22](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=82)** Therefore, in the case of node protection, the NNHOP router is the MP router.
>
> **[1:29](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=89)** Look at this figure, which has one NNHOP backup tunnel protecting the router R3.
>
> **[1:35](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=95)** 1T tunnel goes from R1 to R5.
>
> **[1:39](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=99)** The NNHOP backup tunnel goes from R2 or the PLR to router R4, the NNHOP and the MP.
>
> **[1:51](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=111)** Node protection is somewhat complex due to one main issue.
>
> **[1:56](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=116)** Packets are rerouted to the NNHOP LSR instead of the NHOP LSR.
>
> **[2:02](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=122)** Consequently, the PLR must determine the correct label for the NNHOP backup tunnel to ensure packets arrive at the NNHOP router with the same top label as they would without the backup tunnel.
>
> **[2:17](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=137)** To address this, the label is communicated via a label sub-object in an RRO object within a reserve message sent from the NNHOP router to the PLR router.
>
> **[2:32](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=152)** When packets come in on the PLR on the rerouted LSP, the PLR must swap the incoming label with this label first and then push the label of the NNHOP backup tunnel.
>
> **[2:46](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=166)** In our scenario, we need to set up tunnel one on router R1 with an explicit path to destination R5.
>
> **[2:54](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=174)** Then enable Fast Reroute or FRR node protection.
>
> **[2:59](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=179)** ip explicit-path name R1R2R3R4R5 next-address 10.1.2.2 next-address 10.2.3.3 next-address 10.3.4.4 next-address 10.4.5.5.
>
> **[3:18](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=198)** interface Tunnel1 ip unnumbered Loopback0 tunnel destination 192.168.254.5 tunnel mode mpls traffic-eng tunnel mpls traffic-eng path-option 1 explicit name R1R2R3R4R5 tunnel mpls traffic-eng fast-reroute node-protect.
>
> **[3:48](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=228)** After that, we configure a backup tunnel on router R2 to destination R4 with an explicit path that avoids R3.
>
> **[3:57](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=237)** ip explicit-path name NO_R3 exclude-address 192.168.254.3 interface Tunnel100 ip unnumbered Loopback0 tunnel destination 192.168.254.4 tunnel mode mpls traffic-eng tunnel mpls traffic-eng path-option 1 explicit name NO_R3.
>
> **[4:30](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=270)** Finally, we ensure that interface gi0/1 uses this protected tunnel: interface gi0/1 mpls traffic-eng backup-path tunnel 100.
>
> **[4:44](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=284)** PLR holds a FRR database.
>
> **[4:47](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=287)** It shows, among other things, the incoming label and the outgoing label when the backup tunnel is used.
>
> **[4:54](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=294)** When the state of the backup tunnel is ready, the tunnel is signaled, but is not used for FRR at this moment.
>
> **[5:03](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=303)** To display the rsvp fast-reroute or FRR status, you can use the show ip rsvp fast-reroute command.
>
> **[5:12](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=312)** This command provides details about the FRR status, backup tunnels, and protected interfaces.
>
> **[5:21](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=321)** In the next video, get ready to dive into the fascinating world of Shared Risk Link Groups or SRLG and discover how they enhance the resilience of backup tunnels.
>
> **[5:33](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=333)** You won't want to miss this exciting topic that takes network reliability to the next level.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (10), [[Traffic Engineering]] (1)
> **Env Vars:** nnhop (11), frr (7), plr (7), mpls (4), lsr (2)
> **CLI Commands:** node (9)
> **Versions:** 192.168.254 (3), 10.1.2 (1), 10.2.3 (1), 10.3.4 (1), 10.4.5 (1)
> **Prerequisites:** set up (1), configure (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Shared Risk Link Group (SRLG)](https://www.linkedin.com/learning/mpls-traffic-engineering/shared-risk-link-group-srlg?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/shared-risk-link-group-srlg?u=76281980&t=0)** - [Instructor] Welcome to this video on shared risk link groups or SRLG, and their role in enhancing backup tunnels for network resilience.
>
> **[0:10](https://www.linkedin.com/learning/mpls-traffic-engineering/shared-risk-link-group-srlg?u=76281980&t=10)** We should use SRLG when a backup tunnel can potentially be routed across a link that is on the same fiber or conduit as the protected link.
>
> **[0:21](https://www.linkedin.com/learning/mpls-traffic-engineering/shared-risk-link-group-srlg?u=76281980&t=21)** SRLG refers to groups of links that share a common risk of failure due to environmental factors or physical proximity.
>
> **[0:30](https://www.linkedin.com/learning/mpls-traffic-engineering/shared-risk-link-group-srlg?u=76281980&t=30)** These risks could include natural disasters, construction activities, or even shared fiber cuts.
>
> **[0:40](https://www.linkedin.com/learning/mpls-traffic-engineering/shared-risk-link-group-srlg?u=76281980&t=40)** In our scenario, the links between R2 and R3 and R2 and R6 are part of the same SRLG.
>
> **[0:49](https://www.linkedin.com/learning/mpls-traffic-engineering/shared-risk-link-group-srlg?u=76281980&t=49)** This means if any issue affects one link, such as a physical disruption in the shared conduit, it will likely impact all other links in the same group.
>
> **[1:01](https://www.linkedin.com/learning/mpls-traffic-engineering/shared-risk-link-group-srlg?u=76281980&t=61)** So when designing backup tunnels, it's crucial to avoid [[Routing]] through links that are part of the same SRLG.
>
> **[1:09](https://www.linkedin.com/learning/mpls-traffic-engineering/shared-risk-link-group-srlg?u=76281980&t=69)** This strategy prevents a single point of failure from affecting both primary and backup paths simultaneously.
>
> **[1:19](https://www.linkedin.com/learning/mpls-traffic-engineering/shared-risk-link-group-srlg?u=76281980&t=79)** Network engineers configure SRLG-aware backup tunnels by specifying alternate paths that do not traverse links within the same SRLG.
>
> **[1:31](https://www.linkedin.com/learning/mpls-traffic-engineering/shared-risk-link-group-srlg?u=76281980&t=91)** To ensure robust network resilience, we begin by configuring the SRLG command on the interface of links that share the same fiber or conduit.
>
> **[1:41](https://www.linkedin.com/learning/mpls-traffic-engineering/shared-risk-link-group-srlg?u=76281980&t=101)** For each interface, use the command [[Multiprotocol Label Switching (MPLS)|mpls]] traffic, ENGSRLG number, where number is the group identifier of the SRLG.
>
> **[1:52](https://www.linkedin.com/learning/mpls-traffic-engineering/shared-risk-link-group-srlg?u=76281980&t=112)** Next, configure tunnel 0 on router R1 with the destination set to R5.
>
> **[1:58](https://www.linkedin.com/learning/mpls-traffic-engineering/shared-risk-link-group-srlg?u=76281980&t=118)** Enable fast remote with node protection to ensure seamless recovery in case of node failure.
>
> **[2:05](https://www.linkedin.com/learning/mpls-traffic-engineering/shared-risk-link-group-srlg?u=76281980&t=125)** Then configure a backup tunnel that excludes R3.
>
> **[2:11](https://www.linkedin.com/learning/mpls-traffic-engineering/shared-risk-link-group-srlg?u=76281980&t=131)** Finally, on R2, enable SRLG exclude globally to ensure that all relevant tunnels automatically avoid links within the same SRLG.
>
> **[2:24](https://www.linkedin.com/learning/mpls-traffic-engineering/shared-risk-link-group-srlg?u=76281980&t=144)** We use mpls traffic, eng auto-tunnel backup srlg, exclude force or preferred command to indicate how to treat the SRLG concerning backup auto tunnels.
>
> **[2:38](https://www.linkedin.com/learning/mpls-traffic-engineering/shared-risk-link-group-srlg?u=76281980&t=158)** The SRLG command has two keywords, force and preferred.
>
> **[2:42](https://www.linkedin.com/learning/mpls-traffic-engineering/shared-risk-link-group-srlg?u=76281980&t=162)** The force keyword ensures that a backup TE tunnel is never routed over a link that has the same SRLG as the protected link, no matter what.
>
> **[2:53](https://www.linkedin.com/learning/mpls-traffic-engineering/shared-risk-link-group-srlg?u=76281980&t=173)** If a link with another SRLG is not available to the backup tunnel, the backup tunnel is not created.
>
> **[3:01](https://www.linkedin.com/learning/mpls-traffic-engineering/shared-risk-link-group-srlg?u=76281980&t=181)** The preferred keyword indicates that if a link with another SRLG is not found, first to route the backup tunnel across.
>
> **[3:09](https://www.linkedin.com/learning/mpls-traffic-engineering/shared-risk-link-group-srlg?u=76281980&t=189)** The backup tunnel is created across a link with the same SRLG.
>
> **[3:16](https://www.linkedin.com/learning/mpls-traffic-engineering/shared-risk-link-group-srlg?u=76281980&t=196)** After configuring the SRLG and setting up our tunnels, it's essential to verify our MPLS [[Traffic Engineering]] topology.
>
> **[3:25](https://www.linkedin.com/learning/mpls-traffic-engineering/shared-risk-link-group-srlg?u=76281980&t=205)** We can use the show mpls traffic eng topology brief command to get a quick overview.
>
> **[3:33](https://www.linkedin.com/learning/mpls-traffic-engineering/shared-risk-link-group-srlg?u=76281980&t=213)** We can also use the show mpls traffic eng topology srlg command to verify configured SRLG.
>
> **[3:42](https://www.linkedin.com/learning/mpls-traffic-engineering/shared-risk-link-group-srlg?u=76281980&t=222)** In conclusion, shared risk link groups play a pivotal role in optimizing backup tunnel strategies.
>
> **[3:51](https://www.linkedin.com/learning/mpls-traffic-engineering/shared-risk-link-group-srlg?u=76281980&t=231)** By carefully avoiding SRLG affected links, network operators can uphold reliable connectivity and mitigate risks associated with infrastructure failures.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (5), [[Routing]] (1), [[Traffic Engineering]] (1)
> **Env Vars:** srlg (20), engsrlg (1), mpls (1)
> **Prerequisites:** configure (3)
> **CLI Commands:** node (2)
> **Definitions:** refers to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [MPLS TE Path Protection](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=0)** - [Instructor] In this video, we will explore the concept of path protection in [[Multiprotocol Label Switching (MPLS)|MPLS]] [[Traffic Engineering]] on T networks, its importance and how to implement it.
>
> **[0:11](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=11)** MPLS-TE path protection is a feature that ensures network reliability by providing backup paths or protection paths for TE tunnels.
>
> **[0:21](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=21)** It guards against link or node failures along primary path, minimizing downtime and maintaining service continuity.
>
> **[0:33](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=33)** In this figure, tunnel zero passes from R1 to R2 to R3 to R4.
>
> **[0:39](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=39)** The backup and PLST tunnel travels from R1 to R2 to R5, and finally R4.
>
> **[0:46](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=46)** If the link between R2 and R3 fails, or if the R3 node itself fails, the backup tunnel can seamlessly replace the primary tunnel.
>
> **[0:59](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=59)** Path protection is crucial for mission-critical applications where uninterrupted connectivity is essential.
>
> **[1:06](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=66)** By preemptively establishing backup paths, MPRS TE path protection enhances network resilience and ensure high availability.
>
> **[1:17](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=77)** To configure path protection for a TE tunnel in Cisco IOS, use the tunnel mpls traffic-eng path-option protect command.
>
> **[1:27](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=87)** In this scenario, I configure tunnel 0 and R1 as a dynamic tunnel to destination R4, and set up an explicit path from R1 to R2 to R5 to R4 as the backup explicit path.
>
> **[1:42](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=102)** Now let's take a look at the output of the show mpls traffic eng tunnels command.
>
> **[1:48](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=108)** This command provides detailed information about the MPLS traffic engineering tunnels configured on the router.
>
> **[1:55](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=115)** One of the key pieces of information in this output is the path protection status.
>
> **[2:02](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=122)** In this case, VC path protection one common link, one common node.
>
> **[2:07](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=127)** This indicates that the primary and backup path share one common link and one common node.
>
> **[2:14](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=134)** This is important for understanding the redundancy and potential points of failures in your network.
>
> **[2:22](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=142)** Path protection option 1, type explicit R1R2R5R4.
>
> **[2:29](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=149)** This means that the path protection is set to option 1, which typically refers to the use of a secondary path for protection.
>
> **[2:37](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=157)** The type is explicit, indicating that a specific route is defined for the backup path, which goes from R1 to R2 to R5 to R4.
>
> **[2:48](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=168)** Let's examine the output of the show mpls traffic-eng tunnels protection command.
>
> **[2:54](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=174)** This command provides insights into the protection status and path of MPLS traffic engineering tunnels.
>
> **[3:03](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=183)** Path protection, one common link, one common node.
>
> **[3:07](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=187)** This indicates that the primary and backup label switch paths, or LSPs, share one common link and one common node.
>
> **[3:15](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=195)** This information helps us understand the overlap between the primary and backup path and identify potential single point of failure.
>
> **[3:24](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=204)** Primary LSP path, the primary LSP path is listed as follows, 10.1.2.2 10.2.3.3 10.3.4.4 192.168.254.4.
>
> **[3:41](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=221)** This is the main route that the MPLS tunnel will use to send traffic.
>
> **[3:48](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=228)** Protect LSP paths.
>
> **[3:49](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=229)** The Protect LSP path is a specified as 10.1.2.2 10.2.5.5 10.4.5.4 192.168.254.4.
>
> **[4:04](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=244)** This is the alternate route that the MPLS tunnel will switch to in case the primary path fails.
>
> **[4:13](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=253)** By examining this information, we can ensure that our backup paths are properly configured and understand the level of redundancy in our network.
>
> **[4:23](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=263)** This helps in maintaining high availability and reliability for our MPLS traffic engineering tunnels.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (10), [[Traffic Engineering]] (4)
> **Env Vars:** mpls (7), lsp (4), plst (1), mprs (1), ios (1)
> **Versions:** 10.1.2 (2), 192.168.254 (2), 10.2.3 (1), 10.3.4 (1), 10.2.5 (1)
> **CLI Commands:** node (6)
> **Definitions:** is a  (2), means that (1), refers to (1)
> **Prerequisites:** configure (2), set up (1)
> **UI Navigation:** switch to (1)
> **Speakers:** - [instructor] (1)


### 6. Cost Calculation of IGP Routes over TE Tunnels

[↑ Back to Table of Contents](#table-of-contents)

#### [TE tunnels default cost calculation](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=0)** - [Instructor] In this video, we are going to explore the intriguing process of default cost calculation on [[Multiprotocol Label Switching (MPLS)|MPLS]] TE tunnels with autoroute announce enabled.
>
> **[0:10](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=10)** Join us as we unveil the secrets to optimizing your network [[Routing]] like never before.
>
> **[0:18](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=18)** This scenario shows a network of five OSPF routers within a single MPLS TE enabled area.
>
> **[0:25](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=25)** Initially, all links have an OSPF cost of one.
>
> **[0:31](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=31)** A [[Traffic Engineering]] or TE tunnel exists from R1 to R5.
>
> **[0:37](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=37)** The cost of the TE tunnel is two, as shown by the command show mpls traffic-eng tunnels, which displays a path rate of two for this tunnel.
>
> **[0:49](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=49)** Because the IP address 192.168.254.5/32 is directly connected to R5, the metric for this route in the routing table of R1 is three, as we can see with the show ip route command.
>
> **[1:08](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=68)** Notice that the tunnel interface on R1 is the only interface for 192.168.254.5/32.
>
> **[1:18](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=78)** The cost via the IP path R1, to R3, to R5 is also two, but this IP path is not installed in the routing table.
>
> **[1:29](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=89)** The general rule is that for a prefix on the tail-end router, only a tunnel that ends on that tail-end router is used to forward packets.
>
> **[1:40](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=100)** No load balancing occurs between the TE tunnel and the IP path in this case.
>
> **[1:48](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=108)** Let's change the dynamic tunnel to an explicit TE tunnel and configure it from R1 to R5 via R2, R4, and R3.
>
> **[1:58](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=118)** The cost of the TE tunnel is four, as shown by the command show mpls traffic-eng tunnels, which displays a path weight of four for this tunnel.
>
> **[2:09](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=129)** In the routing table of R1, the outgoing interface for 192.168.254.5/32 is again the tunnel interface.
>
> **[2:21](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=141)** This is because the cost of the TE tunnel is equal to the cost of the shortest IGP path, which is two.
>
> **[2:28](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=148)** Therefore, the cost to reach 192.168.254.5/32 via the TE tunnel is two.
>
> **[2:39](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=159)** In contrast, the cost to reach 192.168.254.5/32
>
> **[2:47](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=167)** directly connected to R5 is three.
>
> **[2:51](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=171)** It means even if the TE tunnel is not on the lowest IGP cost path, all traffic that is distinct for prefixes connected to the tail-end router goes into the TE tunnel.
>
> **[3:05](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=185)** Now let's change the cost of the link between R1 and R3 to three.
>
> **[3:11](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=191)** Additionally, let's change the tunnel destination to R4 using the dynamic method.
>
> **[3:17](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=197)** The tunnel will choose the path R1 to R2 to R4 because this path has a lower cost of two.
>
> **[3:26](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=206)** However, there are now two paths to R5.
>
> **[3:30](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=210)** One is the IP path R1 to R3 to R5 with the cost of four, and the other is tunnel zero with the total cost of two.
>
> **[3:39](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=219)** R1 to R2 plus one, R2 to R4 plus one, R4 to R3 equal four.
>
> **[3:50](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=230)** As you can see in R1's routing table for a prefix behind the tail-end router of a TE tunnel, an LSR can load balance traffic over both the TE tunnel and an IP path if the cost for both paths is equal.
>
> **[4:07](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=247)** Keeping the OSPF cost of the link R1 to R3 as one, the TE tunnel is configured over the path R1 to R3 using an explicit path option.
>
> **[4:19](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=259)** The cost of the tunnel is now three.
>
> **[4:22](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=262)** For 192.168.254.5/32, both the tunnel and the IP path have a metric of four, but only the tunnel is being used.
>
> **[4:35](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=275)** The reason why the prefix 192.168.254.5/32 on R5
>
> **[4:44](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=284)** does not load balance over the IP path R1 to R3 to R5, and the tunnel path zero is because the tail-end router of the tunnel intersects with the IP path.
>
> **[4:57](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=297)** The CSPF or constrained shortest path first calculation on the head-end router recognizes this overlap and selects the TE tunnel as the sole next stop for that prefix.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (5), [[Multiprotocol Label Switching (MPLS)|Mpls]] (4), [[Traffic Engineering]] (1)
> **Env Vars:** ospf (3), mpls (2), igp (2), lsr (1), cspf (1)
> **Versions:** 192.168.254 (7)
> **Best Practices:** general rule (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Adjusting the cost calculation of TE tunnels](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=0)** - [Instructor] In this video, I'm going to talk about adjusting the cost calculation in [[Multiprotocol Label Switching (MPLS)|MPLS]] [[Traffic Engineering]] or TE with exciting insights.
>
> **[0:12](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=12)** In MPLS Traffic Engineering or TE, adjusting the cost calculation is essential for influencing how traffic is routed through the network.
>
> **[0:22](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=22)** The cost of a TE tunnel determines its preference compared to other possible paths.
>
> **[0:30](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=30)** By tweaking this cost, network administrators can optimize traffic flow, improve performance, and ensure that the desired paths are used more frequently.
>
> **[0:41](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=41)** You can change the metric in a direct, related, or absolute way with the tunnel mpls traffic-eng autoroute metric absolute or related value command.
>
> **[0:53](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=53)** In our scenario, we have seven routers with OSPF as the IGP and the cost of each link is set to one.
>
> **[1:02](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=62)** Let's configure Tunnel0 on R1 with the destination set to R3 using autoroute announce and the default cost setting.
>
> **[1:11](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=71)** With the default cost for Tunnel0, the metric to reach 192.168.254.3 is three.
>
> **[1:21](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=81)** This is because the metric is the sum of the Tunnel0 cost or two, and the cost of the Loopback0 interface on R3 or one.
>
> **[1:30](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=90)** Consequently, we can observe the cost to other networks beyond the Tunnel0 tail end.
>
> **[1:38](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=98)** Let's shut down Tunnel0 and configure Tunnel1 with R4 as the destination using autoroute announce and the direct cost of three.
>
> **[1:47](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=107)** We will use the tunnel mpls traffic-eng autoroute metric 3 command.
>
> **[1:54](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=114)** With the direct cost for Tunnel1, the metric to reach 192.168.254.4 is four.
>
> **[2:03](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=123)** This is because the metric is the sum of the Tunnel1 cost or three, and the cost of the Loopback0 interface on R4 or one.
>
> **[2:12](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=132)** Consequently, we can observe the cost to other networks beyond the Tunnel1 tail end.
>
> **[2:20](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=140)** Let's shut down Tunnel1 and configure Tunnel2 with R5 as the destination using autoroute announce and an absolute cost of one.
>
> **[2:29](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=149)** We will use the tunnel mpls traffic-eng autoroute metric absolute 1 command.
>
> **[2:36](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=156)** tunnel mpls traffic-eng autoroute metric absolute value sets a fixed metric for the TE tunnel.
>
> **[2:44](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=164)** The specified value is applied uniformly to all prefixes reachable through the tunnel.
>
> **[2:50](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=170)** No matter how far beyond the tail end router a prefix is, it will have this absolute cost.
>
> **[2:59](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=179)** If you set the absolute metric to one, every prefix reachable via this tunnel will have a cost of one.
>
> **[3:08](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=188)** Finally, let's shut down Tunnel2 and configure Tunnel3 with R6 as the destination using autoroute announce and the relative cost of minus three.
>
> **[3:18](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=198)** We will use the tunnel mpls traffic-eng autoroute metric relative minus three command.
>
> **[3:26](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=206)** tunnel mpls traffic-eng autoroute metric relative value adjusts the tunnel's metric related to the lowest cost IGP path.
>
> **[3:36](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=216)** The related value can range from minus 10 to 10, allowing for fine-tuning of the tunnel's cost.
>
> **[3:43](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=223)** If the lowest IGP path cost to 192.168.254.5/32 is five
>
> **[3:52](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=232)** and used a relative metric of minus three, the TE tunnel will have a cost of two, five minus three equal two.
>
> **[4:03](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=243)** Use the absolute method when you want a consistent and predictable metric for all destinations reachable through the TE tunnel.
>
> **[4:12](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=252)** Use the relative method when you want the tunnel's metric to adjust dynamically in relation to existing IGP cost, allowing for more granular control over [[Routing]] preferences.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (8), [[Traffic Engineering]] (2), [[Routing]] (1)
> **Env Vars:** igp (4), mpls (2), ospf (1)
> **Prerequisites:** configure (4)
> **Versions:** 192.168.254 (3)
> **Speakers:** - [instructor] (1)

#### [MPLS TE load balancing](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-load-balancing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-load-balancing?u=76281980&t=0)** - [Instructor] In this video, I want to explain [[Multiprotocol Label Switching (MPLS)|MPLS]]-TE load balancing.
>
> **[0:04](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-load-balancing?u=76281980&t=4)** We will dive into how MPLS [[Traffic Engineering]] can distribute traffic across multiple paths, enhancing network efficiency and reliability.
>
> **[0:15](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-load-balancing?u=76281980&t=15)** When multiple TE tunnels have the same cost, traffic can be load-balanced across them.
>
> **[0:22](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-load-balancing?u=76281980&t=22)** In this scenario, I configured two MPLS-TE tunnels on R1 with the destination set to R3.
>
> **[0:29](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-load-balancing?u=76281980&t=29)** The first tunnel will take the path from R1 to R2, and then to R3, while the second tunnel will take the bottom path from R1 to R4, and then to R3.
>
> **[0:42](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-load-balancing?u=76281980&t=42)** In the [[Routing]] table of R1, for the network 10.3.0.0/24, we have two interfaces, Tunnel0 and Tunnel1 because the cost of both tunnel is the same.
>
> **[0:55](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-load-balancing?u=76281980&t=55)** Similarly for the network 192.168.254.3/32, the same condition exists, with both Tunnel0 and Tunnel1 being present due to equal costs.
>
> **[1:12](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-load-balancing?u=76281980&t=72)** Traffic can also be load-balanced between the native IP path and TE tunnels if the cost of the routing is the same.
>
> **[1:20](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-load-balancing?u=76281980&t=80)** In this scenario, I configured one TE tunnel from R1 to R3 with the tunnel path set from R1 to R2 to R3.
>
> **[1:30](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-load-balancing?u=76281980&t=90)** For the link between R3 and R4 using the 10.3.4.0/24 network address, we have load balancing between the tunnel and IP paths.
>
> **[1:43](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-load-balancing?u=76281980&t=103)** The load balancing of traffic is weighted proportionally to the bandwidth requirement of the TE tunnels.
>
> **[1:50](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-load-balancing?u=76281980&t=110)** If you have one tunnel with 100 megabit per second and one with 20 megabit per second of reserve bandwidth, the load balancing ratio is five to one, or the first tunnel should get five times more traffic than the second tunnel.
>
> **[2:09](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-load-balancing?u=76281980&t=129)** Multiple TE tunnels can be handy when the amount of bandwidth to be reserved between a pair of routers is more than the bandwidth capacity of the links.
>
> **[2:18](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-load-balancing?u=76281980&t=138)** You can then just create multiple TE tunnels with each piece of the required bandwidth.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (3), [[Routing]] (2), [[Traffic Engineering]] (1)
> **Env Vars:** mpls (3)
> **Versions:** 10.3.0 (1), 192.168.254 (1), 10.3.4 (1)
> **Speakers:** - [instructor] (1)

#### [MPLS TE reoptimization](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=0)** - [Instructor] In this video, we will delve into the concepts of [[Multiprotocol Label Switching (MPLS)|MPLS]] [[Traffic Engineering]] reoptimization, the need for reoptimization, and the steps involved in reoptimizing MPLS-TE tunnels to ensure optimal network performance.
>
> **[0:18](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=18)** A TE tunnel might find itself routed along a path in the network that is no longer the most efficient or optimal.
>
> **[0:27](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=27)** This can occur if a previously unavailable link becomes operational again, or if a link that initially lacked enough unreserved bandwidth when the tunnel was established, now has sufficient bandwidth due to changing bandwidth reservations.
>
> **[0:45](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=45)** Reoptimization helps reroute the tunnel to a more optimal path within the network.
>
> **[0:53](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=53)** Reoptimization help reroute the tunnel to a more optimal path within the network.
>
> **[1:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=60)** To understand reoptimization, it is important to recognize the three triggers that can initiate the rerouting of a TE tunnel to a better path: periodic reoptimization, event-driven reoptimization, and manual reoptimization.
>
> **[1:18](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=78)** In MPLS traffic engineering, or TE, period reoptimization is a crucial mechanism to ensure that TE tunnels continuously follow the most optimal path through the network.
>
> **[1:32](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=92)** In Cisco IOS, the reoptimization of a TE tunnel occurs with the frequency of one-hour wide default.
>
> **[1:39](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=99)** This means that every hour the network evaluates the current path of TE tunnels and reroutes them if more optimal paths are available.
>
> **[1:49](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=109)** This default behavior helps maintain optimal [[Routing]] without requiring manual intervention.
>
> **[1:58](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=118)** You can customize this reoptimization frequency using the MPLS traffic-eng reoptimize timers frequency INTERVAL command.
>
> **[2:08](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=128)** The default interval value is set to one hour or 3,600 seconds.
>
> **[2:14](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=134)** If you set the interval to zero, period degree optimization is disabled globally on the router for all TE tunnels.
>
> **[2:22](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=142)** This can be useful in scenarios where automatic reoptimization might disrupt network stability, or is not necessary.
>
> **[2:32](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=152)** In addition to global setting, you can also control reoptimization on a per tunnel basis.
>
> **[2:38](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=158)** If you want to prevent a specific TE tunnel from being reoptimized, you can use the lockdown keyboard with the path-option command, tunnel mpls traffic-eng path-option NUMBER dynamic lockdown In the context of MPLS-TE, event-driven reoptimization refers to the process of rerouting TE tunnels in response to a specific network events.
>
> **[3:05](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=185)** Unlike periodic reoptimization, which occurs at regular intervals, event-driven reoptimization is triggered by changes in the network, such as a previously unavailable link becoming operational.
>
> **[3:20](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=200)** Network conditions can change unexpectedly and new paths may become available that are more optimal for TE tunnels.
>
> **[3:29](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=209)** By reoptimizing TE tunnels in response to these events, we can ensure that network resources are used efficiently, improving overall network performance and reliability.
>
> **[3:42](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=222)** By default, Cisco IOS does not trigger reoptimization when a link in the network becomes available for TE again either due to configuration changes or because its operational state has been restored.
>
> **[3:57](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=237)** This means that even if a previously unavailable link becomes available, TE tunnels will not automatically reroute to use this new path.
>
> **[4:08](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=248)** To enable reoptimization when a link becomes operational for MPLS-TE, you need to configure the mpls traffic-eng reoptimize events link-up command in Cisco IOS.
>
> **[4:20](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=260)** This command ensures that whenever a link in the network transitions to an operational state, MPLS-TE will trigger a reoptimization process to potentially reroute TE tunnels through the newly available link.
>
> **[4:36](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=276)** Manual reoptimization MPLS-TE refers to the process of actively triggering the rerouting of TE tunnels by an administrator.
>
> **[4:45](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=285)** Unlike periodic or event-driven reoptimization, manual reoptimization gives network administrators direct control over when and which TE tunnels are rerouted to ensure optimal paths.
>
> **[5:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=300)** Network administrators might need to reoptimize TE tunnels immediately in response to specific conditions such as significant changes in network traffic patterns, the restoration of major links, or preparation for planned maintenance.
>
> **[5:17](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=317)** Manual reoptimization provides the flexibility to address these situations promptly.
>
> **[5:25](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=325)** To force the immediate reoptimization of all TE tunnels on the head end router, you use the mpls traffic-eng reoptimize command at the exit configuration mode.
>
> **[5:38](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=338)** If you need to reoptimize only a specific TE tunnel, you can specify the tunnel number with the mpls traffic-eng reoptimize tunnel TUNNEL_NUMBER command.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (12), [[Traffic Engineering]] (2), [[Routing]] (1)
> **Env Vars:** mpls (8), ios (3), interval (1), number (1), tunnel_number (1)
> **Definitions:** means that (2), is a  (1), refers to (1)
> **Analogies:** such as (2)
> **CLI Commands:** find (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [MPLS TE link manager](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-link-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-link-manager?u=76281980&t=0)** - [Instructor] In this video, we will explore the role and functions of the link manager, a crucial component within the Cisco IOS TE code that ensures efficient operation of TE-enabled routers.
>
> **[0:13](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-link-manager?u=76281980&t=13)** The link manager performs essential housekeeping tasks on every TE-enabled router.
>
> **[0:20](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-link-manager?u=76281980&t=20)** Its primary responsibility is link admission control.
>
> **[0:25](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-link-manager?u=76281980&t=25)** This involves keeping track of the bandwidth reserved by RSVP on each link, and managing new bandwidth reservation requests for tunnel setups.
>
> **[0:36](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-link-manager?u=76281980&t=36)** By doing so, it ensures that the network can accommodate new tunnels without exceeding available resources.
>
> **[0:45](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-link-manager?u=76281980&t=45)** Another critical function of the link manager is determining which TE tunnel label switched path, or LSP, can preempt another.
>
> **[0:54](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-link-manager?u=76281980&t=54)** This is done by evaluating tunnel priorities.
>
> **[0:57](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-link-manager?u=76281980&t=57)** If a high-priority tunnel needs to be established, and resources are limited, the link manager can preempt a lower-priority tunnel to free up the necessary bandwidth.
>
> **[1:10](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-link-manager?u=76281980&t=70)** Additionally, the link manager triggers the interior gateway protocol, or IGP, to flood link state information when certain thresholds are crossed.
>
> **[1:21](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-link-manager?u=76281980&t=81)** This ensures that all routers in the network have up-to-date information about link states, which is crucial for making informed [[Routing]] decisions.
>
> **[1:33](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-link-manager?u=76281980&t=93)** It not only helps in maintaining optimal resource utilization, but also ensures that high-priority traffic is always given precedence.
>
> **[1:46](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-link-manager?u=76281980&t=106)** The show [[Multiprotocol Label Switching (MPLS)|mpls]] traffic-eng link-management command provides detailed insights into the current operations of the link manager.
>
> **[1:58](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-link-manager?u=76281980&t=118)** The command show MPLS traffic-eng link-management admission-control displays a status of admission control for MPLS TE links, including current and maximum bandwidth usage, and ensures resources are available before establishing new TE tunnels.
>
> **[2:18](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-link-manager?u=76281980&t=138)** This helps prevent oversubscription, and maintains network performance.
>
> **[2:26](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-link-manager?u=76281980&t=146)** The command show MPLS traffic-eng link-management advertisements displays information about the advertisements of MPLS TE link attributes, including available bandwidth and resource updates, ensuring optimal path computation and [[Traffic Engineering]].
>
> **[2:48](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-link-manager?u=76281980&t=168)** The command show mpls traffic-eng link-management bandwidth-allocation displays information about the allocation and reservation of bandwidth for MPLS TE links, helping to manage and optimize network resources effectively.
>
> **[3:06](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-link-manager?u=76281980&t=186)** The command show mpls traffic-eng link-management igp-neighbors displays information about IGP neighbors in the context of MPLS traffic engineering, including details about their link state and TE-related attributes, aiding in network topology awareness and path computation.
>
> **[3:30](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-link-manager?u=76281980&t=210)** The command show mpls traffic-eng link-management interface INT_NAME displays detailed MPLS TE information for a specified interface, including bandwidth allocation, link attributes, and admission control status, helping to manage and optimize the interface's role in traffic engineering.
>
> **[3:53](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-link-manager?u=76281980&t=233)** The command show mpls traffic-eng link-management [[Statistics]] displays statistical data related to MPLS TE link management, including metrics on bandwidth usage, tunnel setup success rates, and link utilization, helping to monitor and optimize network performance.
>
> **[4:16](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-link-manager?u=76281980&t=256)** The command show mpls traffic-eng link-management summary provides a concise overview of MPLS TE link management, including key metrics such as total bandwidth, allocated bandwidth, and the status of TE links, facilitating quick assessments of network resource usage and performance.
>
> **[4:40](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-link-manager?u=76281980&t=280)** For detailed troubleshooting, you can use the debug mpls traffic-eng link-management command.
>
> **[4:47](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-link-manager?u=76281980&t=287)** This debug command provides [[Real-Time]] information and logs about MPLS TE link management processes, helping to identify and resolve issues related to link advertisements, bandwidth allocation, and neighbor relationships.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (17), [[Traffic Engineering]] (3), [[Routing]] (1), [[Statistics]] (1), [[Real-Time]] (1)
> **Env Vars:** mpls (10), igp (2), ios (1), rsvp (1), lsp (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 7. MPLS TE and MPLS VPN

[↑ Back to Table of Contents](#table-of-contents)

#### [VRF-to-TE tunnel routing](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=0)** - [Instructor] Welcome to this session on VRF-to-TE Tunnel [[Routing]].
>
> **[0:04](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=4)** Today we will explore how VRFs interact with TE tunnels to optimize and manage network traffic effectively.
>
> **[0:12](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=12)** VRF stands for virtual routing and forwarding.
>
> **[0:16](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=16)** It allows multiple instances of a routing table to coexist within the same router simultaneously.
>
> **[0:24](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=24)** VRFs are used to segregate traffic for different customers or applications, ensuring that data paths are isolated and secure.
>
> **[0:36](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=36)** [[Multiprotocol Label Switching (MPLS)|MPLS]] [[Traffic Engineering]], or TE tunnels, are used to direct traffic along predefined paths to optimize network resource usage and improve performance.
>
> **[0:47](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=47)** TE tunnels provide better control over how traffic is routed through the network, avoiding congestion and ensuring optimal path utilization.
>
> **[0:59](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=59)** VRF-to-TE tunnel routing combines the benefits of traffic isolation provided by VRFs within the precise traffic control of TE tunnels.
>
> **[1:09](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=69)** This combination allows network administrators to manage traffic flow more effectively, ensuring high availability and performance.
>
> **[1:19](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=79)** In our MPLS layer 3 VPN scenario, before implementing TE we have two VRFs, A and B.
>
> **[1:27](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=87)** R5 in VRF-A has connectivity to R6 in the same VRF, and R7 in VRF-B has connectivity to R8 in the same VRF.
>
> **[1:39](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=99)** I configured two TE tunnels from R1 to R3, one using the top path and another using the bottom path.
>
> **[1:49](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=109)** The goal is to direct traffic from VRF-A to tunnel zero, and traffic from VRF-B to tunnel one.
>
> **[1:57](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=117)** To do this we must specify a different BGP next hop for both VRFs on the egress PE.
>
> **[2:06](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=126)** We also must specify a static route on the ingress PE for each of those BGP next-hop addresses and point them to the respective TE tunnels.
>
> **[2:18](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=138)** In the routing table of VRF-A on router one we can observe that for the destination 192.168.254.6/32,
>
> **[2:30](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=150)** the next stop is 192.168.254.10.
>
> **[2:37](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=157)** Since we configured the static route for 192.168.254.10/32,
>
> **[2:45](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=165)** to use tunnel zero traffic destined for this address in VRF-A will be directed through TE tunnel zero.
>
> **[2:55](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=175)** The traceroute from R5 to R6 loopback zero shows that the traffic passes through R1 then R2 then R3.
>
> **[3:04](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=184)** This routing path confirms that the traffic is utilizing tunnel zero for the communication in VRF-A.
>
> **[3:12](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=192)** In the routing table of VRF-B on R1 we can observe that for the destination 192.168.254.8/32,
>
> **[3:23](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=203)** the next stop is 192.168.254.20.
>
> **[3:30](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=210)** Since we configured the static route for 192.168.254.20/32
>
> **[3:39](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=219)** to use tunnel one, traffic destined for this address in VRF-B will be directed through TE tunnel one.
>
> **[3:49](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=229)** The traceroute from R7 to R8's loopback zero shows that the traffic passes through R1 then R4 then R3.
>
> **[3:58](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=238)** This routing path confirms that the traffic is utilizing tunnel one for the communication in VRF-B.
>
> **[4:05](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=245)** If we want symmetric traffic engineering we need to configure two MPLS TE tunnels, one from R1 to R3 and another from R3 to R1 for each VRF.
>
> **[4:17](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=257)** This setup ensures balanced traffic engineering in both directions between the endpoints.
>
> **[4:25](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=265)** This is possible, but consider [[Scalability]].
>
> **[4:28](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=268)** Creating one pair of TE tunnels between two PE routers for every VRF is not very scalable.
>
> **[4:35](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=275)** However, there may be rare cases where you might opt for this approach for tactical reasons.
>
> **[4:43](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=283)** This is possible, but consider scalability.
>
> **[4:46](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=286)** Creating one pair of TE tunnels between two PE routers for every VRF is not very scalable.
>
> **[4:52](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=292)** However, there may be rare cases where you might opt for this approach for tactical reasons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (8), [[Multiprotocol Label Switching (MPLS)|Mpls]] (3), [[Traffic Engineering]] (3), [[Scalability]] (2)
> **Env Vars:** vrf (18), mpls (3), bgp (2), vpn (1)
> **Versions:** 192.168.254 (6)
> **Prerequisites:** configure (1), setup (1)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### [TE tunnel with a P router as a tailend router](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnel-with-p-router-as-tail-end-router?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnel-with-p-router-as-tail-end-router?u=76281980&t=0)** - [Instructor] In this video, I explain how to configure a TE tunnel with the P router as the tail-end router.
>
> **[0:08](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnel-with-p-router-as-tail-end-router?u=76281980&t=8)** When a P router is the tail-end router of the tunnel instead of the provider edge or P router, you need to ensure that LDP session exists between the head-end and tail-end router of the TE tunnel LSP.
>
> **[0:23](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnel-with-p-router-as-tail-end-router?u=76281980&t=23)** The reason is that the tail-end router sends an implicit null label to its upstream router.
>
> **[0:31](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnel-with-p-router-as-tail-end-router?u=76281980&t=31)** The result is that the packets arrive at the tail-end router with the VPN label on top, so the P router either drops the packet if the label is unknown, or it forwards the packet erroneously because it might have advertised the same label, but for a different LSP.
>
> **[0:52](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnel-with-p-router-as-tail-end-router?u=76281980&t=52)** The solution is to have an LDP session from the head-end router to the tail-end router of the TE tunnel.
>
> **[0:59](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnel-with-p-router-as-tail-end-router?u=76281980&t=59)** The simplest way to implement this is the targeted LDP session between PE and P router.
>
> **[1:07](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnel-with-p-router-as-tail-end-router?u=76281980&t=67)** The LDP targeted session must be explicitly configured on the tail-end router to the head-end router and [[Multiprotocol Label Switching (MPLS)|MPLS]] IP must be enabled on the tunnel interface on the head-end router.
>
> **[1:20](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnel-with-p-router-as-tail-end-router?u=76281980&t=80)** The result is the VPN packets have three labels.
>
> **[1:26](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnel-with-p-router-as-tail-end-router?u=76281980&t=86)** This figure shows the labels on top of a VPN packet that crosses the MPLS-VPN network with such a TE tunnel.
>
> **[1:35](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnel-with-p-router-as-tail-end-router?u=76281980&t=95)** The targeted LDP session advertises the LDP label from the tail-end router to the head-end router of the TE tunnel.
>
> **[1:44](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnel-with-p-router-as-tail-end-router?u=76281980&t=104)** The bottom label is still the VPN label, and the medial label is the label that is advertised across the targeted LDP session, and the top label is the TE tunnel LSP label.
>
> **[1:57](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnel-with-p-router-as-tail-end-router?u=76281980&t=117)** The label learned from the targeted LDP session is needed to get the packet at the tail-end router of the TE tunnel LSP with two labels so that it can still forwarded toward the egress PE correctly.
>
> **[2:11](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnel-with-p-router-as-tail-end-router?u=76281980&t=131)** At the tail-end router of the TE tunnel LSP, the packet arrives with two labels.
>
> **[2:17](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnel-with-p-router-as-tail-end-router?u=76281980&t=137)** The top label is the advertised label on the targeted LDP session for the BGP next hop IP address of the VPN V4 route.
>
> **[2:25](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnel-with-p-router-as-tail-end-router?u=76281980&t=145)** This label is then labeled swapped with the outgoing LDP label bound to the BGP next hop IP address.
>
> **[2:34](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnel-with-p-router-as-tail-end-router?u=76281980&t=154)** An LDP targeted session must be explicitly configured on the tail-end router to the head-end router, and MPLS IP must be enabled on the tunnel interface on the head-end router.
>
> **[2:47](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnel-with-p-router-as-tail-end-router?u=76281980&t=167)** Let's verify the trace route from R7 to R8's Loopback0.
>
> **[2:52](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnel-with-p-router-as-tail-end-router?u=76281980&t=172)** The result shows that the traffic is going through Tunnel0 and successfully reaching the destination.
>
> **[2:59](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnel-with-p-router-as-tail-end-router?u=76281980&t=179)** Notice the presence of three MPLS labels between R1 and R2.
>
> **[3:05](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnel-with-p-router-as-tail-end-router?u=76281980&t=185)** Another method is configuring two TE tunnels, one from the PE to the P router and another from the P router to the PE in the reverse direction.
>
> **[3:15](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnel-with-p-router-as-tail-end-router?u=76281980&t=195)** Then enable LDP on both tunnels.
>
> **[3:20](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnel-with-p-router-as-tail-end-router?u=76281980&t=200)** Let's verify the trace route from R7 to R8's Loopback0.
>
> **[3:24](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnel-with-p-router-as-tail-end-router?u=76281980&t=204)** The result shows that the traffic is going through Tunnel0 and successfully reaching the destination, just like in the previous method.
>
> **[3:32](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnel-with-p-router-as-tail-end-router?u=76281980&t=212)** Again, notice the presence of three MPLS labels between R1 and R2.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (5)
> **Env Vars:** ldp (12), vpn (6), lsp (5), mpls (5), bgp (2)
> **Analogies:** just like (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [AToM tunnel selection](https://www.linkedin.com/learning/mpls-traffic-engineering/atom-tunnel-selection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/atom-tunnel-selection?u=76281980&t=0)** - [Instructor] In this session, we will delve into AToM or Any Transport over [[Multiprotocol Label Switching (MPLS)|MPLS]] tunnel selection.
>
> **[0:06](https://www.linkedin.com/learning/mpls-traffic-engineering/atom-tunnel-selection?u=76281980&t=6)** We will discuss what AToM is, why tunnel selection is important, and how to configure and verify it in a network.
>
> **[0:15](https://www.linkedin.com/learning/mpls-traffic-engineering/atom-tunnel-selection?u=76281980&t=15)** AToM or Any Transport over MPLS is a technology that allows Layer 2 frames to be transported over an MPLS network.
>
> **[0:24](https://www.linkedin.com/learning/mpls-traffic-engineering/atom-tunnel-selection?u=76281980&t=24)** This is particularly useful for extending Layer 2 services across geographically disperse sites.
>
> **[0:32](https://www.linkedin.com/learning/mpls-traffic-engineering/atom-tunnel-selection?u=76281980&t=32)** AToM tunnel selection is the process of choosing the appropriate MPLS-TE tunnel to transport Layer 2 frames across the network.
>
> **[0:42](https://www.linkedin.com/learning/mpls-traffic-engineering/atom-tunnel-selection?u=76281980&t=42)** For this to work, you need to set up an MPLS-TE tunnel from the PE to the PE router, and then specify that the AToM traffic should take the TE tunnel instead of the default shortest label paths.
>
> **[0:57](https://www.linkedin.com/learning/mpls-traffic-engineering/atom-tunnel-selection?u=76281980&t=57)** This figure shows an MPLS network for an AToM customer.
>
> **[1:02](https://www.linkedin.com/learning/mpls-traffic-engineering/atom-tunnel-selection?u=76281980&t=62)** Normally, all labeled traffic follows the top path because it is the shortest path through the MPLS backbone.
>
> **[1:11](https://www.linkedin.com/learning/mpls-traffic-engineering/atom-tunnel-selection?u=76281980&t=71)** If you want to send the AToM traffic through the bottom path, you can create two MPLS-TE tunnels between the two PE routers, one from R1 to R3 and another from R3 to R1 to carry the AToM traffic.
>
> **[1:27](https://www.linkedin.com/learning/mpls-traffic-engineering/atom-tunnel-selection?u=76281980&t=87)** This example shows how to configure tunnel selection.
>
> **[1:30](https://www.linkedin.com/learning/mpls-traffic-engineering/atom-tunnel-selection?u=76281980&t=90)** You need to configure the preferred-path under the pseudowire class and create a TE tunnel between the PE routers without using the Autoroute Announce command because that steers all the traffic onto the TE tunnel.
>
> **[1:47](https://www.linkedin.com/learning/mpls-traffic-engineering/atom-tunnel-selection?u=76281980&t=107)** To verify that the tunnel selection is working, look at the pseudowire with the command show mpls l2transport vc 100 detail.
>
> **[1:57](https://www.linkedin.com/learning/mpls-traffic-engineering/atom-tunnel-selection?u=76281980&t=117)** Tunnel selection uses fallback, meaning that if the preferred path becomes unavailable, the AToM traffic is sent across the shortest IGP path.
>
> **[2:06](https://www.linkedin.com/learning/mpls-traffic-engineering/atom-tunnel-selection?u=76281980&t=126)** You can, however, disable it by specifying the disable-fallback keyword on the preferred-path command.
>
> **[2:15](https://www.linkedin.com/learning/mpls-traffic-engineering/atom-tunnel-selection?u=76281980&t=135)** By following these steps, you can effectively configure AToM tunnel selection to optimize and manage your Layer 2 transport over an MPLS network.
>
> **[2:25](https://www.linkedin.com/learning/mpls-traffic-engineering/atom-tunnel-selection?u=76281980&t=145)** This ensures efficient path selection, load balancing, and redundancy, enhancing the overall performance and reliability of your network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (10)
> **Env Vars:** mpls (9), igp (1)
> **Tools:** atom (10)
> **Prerequisites:** configure (4), set up (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/mpls-traffic-engineering/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/next-steps?u=76281980&t=0)** - [Instructor] Congratulations on completing the [[Multiprotocol Label Switching (MPLS)|MPLS]] [[Traffic Engineering]] course.
>
> **[0:06](https://www.linkedin.com/learning/mpls-traffic-engineering/next-steps?u=76281980&t=6)** You have now mastered the intricacies of optimizing network traffic with MPLS TE, enhancing efficiency and performance.
>
> **[0:16](https://www.linkedin.com/learning/mpls-traffic-engineering/next-steps?u=76281980&t=16)** Remember, your learning journey doesn't end here.
>
> **[0:20](https://www.linkedin.com/learning/mpls-traffic-engineering/next-steps?u=76281980&t=20)** Feel free to ask any questions or seek further clarifications through our Q&A.
>
> **[0:27](https://www.linkedin.com/learning/mpls-traffic-engineering/next-steps?u=76281980&t=27)** Your curiosity and engagement are key to mastering these advanced technologies.
>
> **[0:33](https://www.linkedin.com/learning/mpls-traffic-engineering/next-steps?u=76281980&t=33)** Next, I encourage you to explore segment [[Routing]] or SR, a revolutionary technology reshaping network architecture.
>
> **[0:43](https://www.linkedin.com/learning/mpls-traffic-engineering/next-steps?u=76281980&t=43)** SR simplifies and enhances [[Scalability]] by embedding paths into packets, offering unparalleled flexibility and control for modern networking challenges.
>
> **[0:56](https://www.linkedin.com/learning/mpls-traffic-engineering/next-steps?u=76281980&t=56)** In a segment routing course, you will delve into SR-MPLS and SRv6, learning to build [[Agile Development|agile]] programmable network suitable for [[5G]], [[IoT]], and [[Cloud Services]].
>
> **[1:10](https://www.linkedin.com/learning/mpls-traffic-engineering/next-steps?u=76281980&t=70)** Whether you are improving service delivery or exploring automation, SR will equip you with essential skills for advancing your networking career.
>
> **[1:22](https://www.linkedin.com/learning/mpls-traffic-engineering/next-steps?u=76281980&t=82)** Thank you for joining me on this journey through MPLS Traffic Engineering.
>
> **[1:28](https://www.linkedin.com/learning/mpls-traffic-engineering/next-steps?u=76281980&t=88)** I'm excited to see your continued growth and success in segment routing and beyond.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (4), [[Routing]] (3), [[Traffic Engineering]] (2), [[Scalability]] (1), [[Agile Development|Agile]] (1)
> **Env Vars:** mpls (4)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Arash Deljoo]]

## Skills Covered

- Telecommunications
- Multiprotocol Label Switching (MPLS)
- Traffic Engineering
- Computer Network Operations
- Engineering

## Path Context

### In [[Mastering Multiprotocol Label Switching (MPLS)]]
← [[MPLS L3VPN Foundation and Implementation]] | **3 of 4** | [[MPLS Segment Routing]] →

## Appears In

- [[Mastering Multiprotocol Label Switching (MPLS)]]

## Related Courses

_Courses sharing skills:_

- [[Mpls Foundations Getting Started With Mpls]] — Multiprotocol Label Switching (MPLS), Computer Network Operations
- [[MPLS L3VPN Foundation and Implementation]] — Multiprotocol Label Switching (MPLS)

---

[↑ Back to top](#)