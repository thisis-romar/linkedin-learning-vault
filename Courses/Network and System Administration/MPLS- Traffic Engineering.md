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
  - '[Mastering Multiprotocol Label Switching (MPLS)](../../Paths/Network%20and%20System%20Administration/Learning%20Paths/Mastering%20Multiprotocol%20Label%20Switching%20(MPLS).md)'
prev_courses:
  - '[MPLS L3VPN Foundation and Implementation](MPLS%20L3VPN%20Foundation%20and%20Implementation.md)'
next_courses:
  - '[MPLS Segment Routing](MPLS%20Segment%20Routing.md)'
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
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/boost-your-mpls-skillset-with-traffic-engineering?u=76281980&t=0)** - [Arash] Ever wondered how information travels through the internet? It's like managing traffic on a busy highway, but with data. And learning this can lead to great job in tech. [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) helps data move faster and safer on networks. I will teach you how to make data move smoothly and safely through networks, getting you ready for jobs in tech, where these skills are really valuable. Welcome to MPLS Traffic Engineering. I am Arash Deljoo, and I am here to show you how networks work and how you can have a career in tech. Join me on this journey, where you will learn skills that can lead to exciting tech jobs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (2), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (2)
> **Env Vars:** mpls (2)
> **CLI Commands:** make (1)
> **Analogies:** it's like (1)
> **Speakers:** - [arash] (1)


### 1. MPLS TE Foundation

[↑ Back to Table of Contents](#table-of-contents)

#### [Traffic engineering introduction](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980&t=0)** - [Instructor] [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) is the design and execution of processes that manage and control traffic flows across a network. The goal is to ensure high performance and reliability for data transfers with minimal data loss and delay. This is particularly important in large and complex networks, where the characteristics of how data traffic can change significantly. Let's learn about traffic engineering with an example. Imagine a busy highway during rush hour. To keep traffic flowing smoothly, traffic engineers might open extra lanes, direct cars to alternate routes and prioritize certain vehicles like emergency responders. In a data network, traffic engineering works similarly. For instance, if a video streaming service experiences heavy traffic, the network might reroute some of that data through less congested paths. Ensure that high priority data like live broadcasts get the bandwidth they need, and balance the load across multiple servers to prevent any single server from becoming overwhelmed. By using these techniques, traffic engineering ensures that data travels efficiently, reducing delays,
>
> **[1:37](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980&t=97)** and improving the overall [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md). In this setup with five routers, OSPF as Interior Gateway Protocol, determines that the top path, which offers 10 megabit per second of bandwidth, is the optimal route for transmitting traffic from R1 to R5. This decision is based on OSPF's algorithm, which evaluates bandwidth to select the most efficient path for data transmission within the network. Therefore, OSPF directs traffic along the top path due to its higher bandwidth capacity compared to the bottom path, which provides only five megabit per second of bandwidth. In this scenario, video traffic utilizes eight megabit per second of the available bandwidth on the top path, leaving two megabit per second remaining. The amount of data traffic we have now is three megabit per second. However, OSPF does not consider the remaining two megabit per second of bandwidth on the top path, so it chooses the top path. Since there are three megabit per second of traffic and only two megabit per second of remaining bandwidth on the top path, congestion happens and approximately one megabit per second of traffic is dropped. At the same time, the bottom path
>
> **[3:12](https://www.linkedin.com/learning/mpls-traffic-engineering/traffic-engineering-introduction?u=76281980&t=192)** also has five megabit per second of bandwidth that OSPF is not using. This means that out of the total 15 megabit per second worth of bandwidth between R1 and R5, the network is really only using up some of that bandwidth, which may not be optimal. This situation is an illustration of how valuable intelligent traffic engineering can be for a network. Traffic engineering helps with problems like this, by better utilizing the network's total available bandwidth to provide the customer with the best performance and optimizing the bandwidth. Benefits of traffic engineering include, improved network performance by reduces congestion and ensure a smooth state of flow, leading to better overall network performance. Enhanced reliability by optimizing paths and balancing loads. Traffic engineering minimizes the risk of network failures and service interruptions. Efficient resource utilization by maximizes the use of available network resources, reducing the need for additional infrastructure investments. In the next video, I will introduce [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) Traffic Engineering and explain how it works. Stay tuned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (9), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1), [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (1)
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
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=0)** - [Instructor] In this video, I intend to explain how [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) or TE works. Consider this scenario consisting of five routers. This scenario uses the OSPF protocol. In MPLST a link state IGP protocol which can be OSPF or IS-IS is used for [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md). The OSPF and IS-IS protocols use the SPF algorithm for routing. OSPF in router one selects the upper path from router one to router two to router three as the best route between network A and network B due to its better metric. Router one receives a data flow of seven megabit per second from network A and sends the traffic to network B via the path with the lower metric, which is router one to router two to router three. In MPLST, the IGP protocol, OSPF, or IS-IS send additional information about their links beside the normal link states. For example, when a data flow of seven megabit per second is sent from router one, to router two, to router three, the remaining bandwidth of the interfaces on this path is three megabit per second, and all three routers send new link states to inform the other routers about the remaining bandwidth.
>
> **[1:37](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=97)** Now, all routers know that the upper path has only three megabit per second of unused bandwidth, not 10 megabit per second. In R1 the IGP protocol OSPF uses CSPF or constrained shortest path first instead of the SPF shortest path first and selects the best path considering the remaining bandwidth. The next dataflow with a rate of four megabit per second arrives at router one distinct for network B. Now this traffic is sent via the lower path from router one, to router four, to router five, to router three, instead of the upper path. As observed by considering the remaining bandwidth instead of the defined bandwidth, we successfully routed traffic through different paths, which is what traffic engineering is all about. Now the question is, what role does MPLS play in traffic engineering? In this example, R1 selects the best path based on the information obtained from link state advertisements. To prevent other routers from recalculating the best path, R1 must reserve the selected path and forward traffic through it, ensuring that other routers route traffic to the destination via the router that has chosen the path. Router one uses the RSVP protocol with T extension
>
> **[3:17](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=197)** to reserve the path. RSVP has two important messages, PATH and RESV or reserve. Router one sends a path message requesting path reservation to router four. Router four forwards it to the next router, router five, and finally router five sends it to router three. Then router three returns the reserve message to router five indicating reservation completion and sends a label to router five. When router five receives the reserve message from router three, it sends a reserve message with the label to router four and updates its LFIB table accordingly. Then router four receives the reserve message from router five. It sends a reserve message with the label to router one and updates its LFIB table accordingly. Finally, after receiving RSVP reserve, router one acknowledged that the path has been reserved and completes its FIB table with the label received from R4. Now router one intends to send a data flow of four megabits per second through the downstream path, and to avoid the need for routing by the downstream routers, namely router four, router five, and router three,
>
> **[4:54](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-traffic-engineering-te-overview?u=76281980&t=294)** the traffic is labeled with the label 400, which was received from router four and is sent towards router four. Since router four has received the traffic video label, it swaps label 400 with label 500 based on the LFIB, and then sends the traffic to router five. Router five removes the label from the packet based on the LFIB, and sends the traffic towards router three. As a result, with the help of the label, the intermediate routers do not need to perform routing. The traffic is sent towards the destination solely based on the decision made at the source router which is router one. And the label that is added to the packet, this is source-based routing. In the following videos, we will get to know each component of network traffic engineering in more detail.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (5), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (4), [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (2)
> **Env Vars:** ospf (6), lfib (4), igp (3), rsvp (3), mpls (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. MPLS TE Components

[↑ Back to Table of Contents](#table-of-contents)

#### [Routing protocol requirements](https://www.linkedin.com/learning/mpls-traffic-engineering/routing-protocol-requirement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/routing-protocol-requirement?u=76281980&t=0)** - [Instructor] In this video, we aim to explain the essential [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) protocol requirements for [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) or MPLS-TE, and provide a clear understanding of the Constrained Shortest Path First or CSPF algorithm's role in optimizing path selection. The application of MPLS Traffic Engineering or MPLS-TE with the Link State Interior Gateway Protocol like IS-IS or OSPF is essential. To link State IGPs by exchanging Link State Advertisements or LSAs or Link State Protocol Data Units or LSPs between all routers within the network make it possible to maintain a detailed and up-to-date view of the network topology. This view of the network topology is especially important for MPLS-TE as it helps to maintain a comprehensive view of the network link attributes. Link State IGPs were modified to support MPLS-TE and standardized extensions, and opaque Link State Advertisements or LSAs were added to allow Link State IGPs to advertise traffic engineering parameters like available bandwidth, administrative groups used to select a path that complies with policy,
>
> **[1:35](https://www.linkedin.com/learning/mpls-traffic-engineering/routing-protocol-requirement?u=76281980&t=95)** as well as link attributes like delay, cost, and reliability. The TE extensions for OSPF will advertise much more link information than regular OSPF will, which is absolutely needed for MPLS-TE to function properly. OSPF TE extensions allow for things like link bandwidth. It means how much traffic a link can handle. Administrative groups or colors. It is used for setting policies on certain links. Link metrics. It means extra attributes like delay and cost that can be used in path calculations. Shared Risk Link Groups or SRLGs. We use it to avoid a single point of failure. The opaque LSA Type 10 is an essential component of the OSPF traffic engineering or TE extension to facilitate communication of traffic engineering information within an OSPF area by exchanging between different OSPF adjacencies. By leveraging opaque LSAs Type 10, OSPF enhances its capabilities to support MPLS traffic engineering within a single OSPF area, ensuring efficient and reliable network cooperation.
>
> **[3:11](https://www.linkedin.com/learning/mpls-traffic-engineering/routing-protocol-requirement?u=76281980&t=191)** The IS-IS protocol, intermediate system to intermediate system, has traffic engineering or TE support using enhancements. IS-IS TE extensions introduce additional TLVs that provide detailed traffic engineering information. While OSPF and IS-IS traditionally use SPF for path calculation, the introduction of traffic engineering necessitates the adoption of CSPF. CSPF or Constrained Shortest Path First is an algorithm used in MPLS traffic engineering or MPLS-TE to compute optimal paths based on specific constraints. CSPF relies on the traffic engineering database provided by the underlying Interior Gateway Protocol or IGP such as OSPF or IS-IS. The traffic engineering database includes detailed information about network topology, link attributes, and TE-specific metrics. This advanced algorithm ensures that paths not only connect endpoints, but also adhere to network constraints, thereby optimizing network performance and reliability in modern complex environments. In the next video, I will explain
>
> **[4:45](https://www.linkedin.com/learning/mpls-traffic-engineering/routing-protocol-requirement?u=76281980&t=285)** the next important component of MPLS-TE, RSVP-TE.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (12), [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (11), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** mpls (11), ospf (11), cspf (4), lsa (1), spf (1)
> **Definitions:** is an  (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Resource Reservation Protocol with TE extension](https://www.linkedin.com/learning/mpls-traffic-engineering/resource-reservation-protocol-with-te-extension?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/resource-reservation-protocol-with-te-extension?u=76281980&t=0)** - [Instructor] You need a robust signaling protocol for TE tunnels to ensure seamless link admission across LSR interfaces, and efficient label propagation, enabling optimized traffic flow. RSVP evolved from its original role in signaling integrated services, or IntServ, to effectively handle TE tunnel signaling. While RSVP initially aimed to provide end-to-end QoS, its adaptation for TE tunnels introduces exciting possibilities. Numerous new RSVP objects tailored for TE have been introduced, enhancing its capabilities significantly. RSVP-TE creates LSPs by sending path information from the source to the destination. It also verifies that the chosen path meets certain criteria such as bandwidth and administrational policies. RSVP-TE reserves necessary resources along the paths, such as bandwidth to meet QoS requirements. This reservation ensures that the path can support the traffic without congestion. RSVP-TE allows explicit [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) where the exact path through the network is specified. This capability is useful for [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md),
>
> **[1:34](https://www.linkedin.com/learning/mpls-traffic-engineering/resource-reservation-protocol-with-te-extension?u=76281980&t=94)** enabling network operators to optimize the utilization of network resources. RSVP-TE works with Constrained Shortest Path First, or CSVF, to compute paths that satisfy the required constraints. It dynamically adapts to network chains, ensuring optimal path selection, even in the case of link failures or change in traffic demand. Let's dive into how RSVP-TE operates. The sender initiates a path message which travels through the network, collecting information about the available resources and possible constraints. Each note along the path processes the message and forwards it to the next stop. Upon reaching the destination, a reservation message is sent back along the same path. Each note along the path allocates the necessary resources and confirms the reservation. RSVP-TE periodically refreshes the estate information to maintain the LSP. If any change occur, such as link failures, RSVP-TE can reestablish the path or find an alternate route. In future videos, I will cover configuring RSVP-TE for [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) traffic engineering.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (2), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1), [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (1)
> **Env Vars:** rsvp (11), lsr (1), csvf (1), lsp (1), mpls (1)
> **Analogies:** such as (3)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [RSVP messages](https://www.linkedin.com/learning/mpls-traffic-engineering/rsvp-messages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/rsvp-messages?u=76281980&t=0)** - [Instructor] In this video, we will explore the essential RSVP message that play a critical role in establishing and maintaining [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md)-TE tunnels. This message include RSVP PATH, RSVP RESV, RSVP PathTear, RSVP ResvTear, RSVP PathErr, and RSVP ResvErr. RSVP Path message are sent from the ingress router to the egress router along the path the MPLS-TE tunnel will take. This message carry information about the desired resources and constraints for the tunnel, such as bandwidth requirements and specific path constraints. The Path message also sets up a state information in each intermediate router along the path. RSVP Resv message are the responses from the egress router back to the ingress router following the same path established by the path message. This message confirm the reservation of the resources requested by the path message. The Resv message ensures that each router along the path has successfully reserved the necessary resources for the MPLS-TE tunnel. RSVP PathTear message are used to tear down the MPLS-TE tunnel. When an ingress router decides to terminate the tunnel,
>
> **[1:34](https://www.linkedin.com/learning/mpls-traffic-engineering/rsvp-messages?u=76281980&t=94)** it sends a PathTear message along the path to the egress router. This message instructs each intermediate router to release the resources that were previously reserved for the tunnel. RSVP ResvTear messages work in conjunction with PathTear messages. When a router receives a PathTear message, it sends a ResvTear message back towards the ingress router confirming the release of resources. This two-way tear down process ensures that all reserved resources are properly freed up along the entire path of the tunnel. RSVP PathErr message are error messages sent by any intermediate router back to the ingress router if an issue is encountered while processing a path message. This could happen due to insufficient resources, policy violations, or other errors. The PathErr message provides detailed information about the nature of the problem, allowing the ingress router to take corrective actions. RSVP ResvErr messages are similar to PathErr messages, but are sent in response to Resv messages. If an intermediate router encounters an issue while processing a Resv message, it sends a ResvErr message back to the egress router,
>
> **[3:09](https://www.linkedin.com/learning/mpls-traffic-engineering/rsvp-messages?u=76281980&t=189)** indicating the problem. This helps in identifying and resolving resource reservation issues. By understanding these RSVP messages, you can effectively manage MPLS-TE tunnels, ensuring efficient resource allocation and robust error handling. These messages are fundamental to the dynamic and resilient nature of MPLS [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (6), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (1)
> **Env Vars:** rsvp (14), mpls (6), path (1), resv (1)
> **Analogies:** such as (1), similar to (1)
> **Speakers:** - [instructor] (1)


### 3. MPLS TE Configuration

[↑ Back to Table of Contents](#table-of-contents)

#### [MPLS TE generic configuration](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=0)** - [Instructor] In this video, we will begin with the first step of [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md)-TE configuration. The initial step involves configuring MPLS-TE capability universally across our network and routers. Moving forward, we will delve into additional steps and explore various aspects of MPLS [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) in upcoming videos. First, we should enable MPLS Traffic Engineering globally using the mpls traffic-eng tunnels global command. Don't forget that CEF is a requirement for all MPLS applications. Additionally, I recommend using the mpls label range command to specify the range of labels. Configuration for R1. ip cef, mpls label range 100 199, mpls traffic-eng tunnels. This configures R1 to enable CEF, sets the MPLS label range from 100 to 199, and enables MPLS Traffic Engineering tunnels. Configuration for R2. ip cef, mpls label range 200 299, mpls traffic-eng tunnels. This configures R2 to enable CEF, sets the MPLS label range from 200 to 299,
>
> **[1:37](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=97)** and enables MPLS Traffic Engineering tunnels. Configuration for R3. ip cef, mpls label range 300 399, mpls traffic-eng tunnels. This configures R3 to enable CEF, sets the MPLS label range from 300 to 399, and enables MPLS Traffic Engineering tunnels. Configuration for R4. ip cef, mpls label range 400 499, mpls traffic-eng tunnels. This configures R4 to enable CEF, sets the MPLS label range from 400 to 499, and enables MPLS Traffic Engineering tunnels. Configuration for R5. ip cef, mpls label range 500 599, mpls traffic-eng tunnels. This configures R5 to enable CEF, sets the MPLS label range from 500 to 599, and enables MPLS Traffic Engineering tunnels. Next, we need to enable MPLS-TE capability within our [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) protocol. This is essential for integrating traffic engineering features with our routing processes. By doing this, we allow our routing protocol to share and utilize T information,
>
> **[3:13](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=193)** ensuring optimal path selection and resource allocation throughout the network. To enable MPLS-TE capability in OSPF, we need to use two commands. First, we will set the router ID for MPLS Traffic Engineering with the command mpls traffic-eng router-id loopback ID. This specifies the router ID using the loopback interface. Next, we will enable MPLS Traffic Engineering for a specific OSPF area with the command mpls traffic-eng area AREA-ID. These steps ensure that OSPF can support and utilize MPLS-TE features effectively. On routers R1 one through R5, we configure OSPF along with MPLS Traffic Engineering capabilities using the following commands: router ospf 1, mpls traffic-eng router-id loopback 0, mpls traffic-eng area 0. These commands ensure that OSPF is integrated with MPLS Traffic Engineering, utilizing the loopback interface for the router ID and enabling MPLS-TE within OSPF area 0. This setup allows the routers to participate in traffic engineering processes effectively. After configuring OSPF with MPLS Traffic Engineering capabilities,
>
> **[4:46](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=286)** we proceed to enable MPLS Traffic Engineering on all interfaces using the command mpls traffic-eng tunnel. This command ensures that all interfaces are prepared to support MPLS-TE tunnels, allowing for efficient path setup and resource reservation across the network. On routers R1 through R5, we configure MPLS Traffic Engineering on specific interfaces using the command interface range Gi0/0-1 mpls traffic-eng tunnels. This command enables MPLS Traffic Engineering tunnels on Gigabit Ethernet Interface 0/0 and 0/1. It ensures these interfaces are ready to support MPLS-TE tunnels, facilitating efficient path establishment and resource allocation throughout the network. Next, we enable RSVP on all interfaces, Gigabit Ethernet 0/0 and Gigabit Ethernet 0/1 with the command interface range Gi0/0-1 ip rsvp bandwidth. This command ensures that RSVP, or Resource Reservation Protocol, is enabled on these interfaces, allowing for bandwidth reservation and ensuring quality of service, or QoS, for MPLS Traffic Engineering tunnels. Now that our network
>
> **[6:21](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-generic-configuration?u=76281980&t=381)** is prepared for implementing traffic engineering, let's dive into the first function of MPLS-TE in the next video. And stay tuned to explore how MPLS Traffic Engineering enhances network performance and efficiency.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (50), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (20), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (3)
> **Env Vars:** mpls (32), ospf (7), cef (6), rsvp (2), area (1)
> **Prerequisites:** configure (2), setup (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### [MPLS TE explicit tunnel](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=0)** - [Instructor] [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md)-TE explicit tunnel allows network administrators to manually specify the path that traffic should take through the network, rather than relying solely on the IGP to determine the shortest path. This can be useful for optimizing network performance, managing bandwidth, and ensuring that specific traffic flows take preferred routes for various reasons, such as avoiding congestion or meeting specific service level agreements. In this scenario, the best path between R1 and R3 is through R1, R2, R3 because this path has a lower metric compared to the bottom path, R1, R4, R5, R3. We want to configure an explicit MPLS_TE tunnel, using the bottom path through R1, R4, R5, R3. R1 is the tunnel head, and R3 is the tunnel end. We need to configure the tunnel interface on the tunnel head or R1. Before configuring a tunnel interface in MPLS [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md), it is essential to define the explicit path, using the IP explicit path identifier or IP explicit path name command. Let's break down what each command is doing. IP explicit path identifier 10,
>
> **[1:34](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=94)** this command creates a new explicit path identifier with the number 10. Next address, 10.1.4.4. This comment adds the next hop address 10.1.4.4 to the explicit path identifier 10. Initially, the path consists of only this address. Next address, 10.4.5.5, this command adds another next hop address, 10.4.5.5, to the explicit path identifier 10. Now the path includes two hops, 10.1.4.4, followed by 10.4.5.5. Next address, 10.3.5.3. This command adds a third next hop address, 10.3.5.3, to the explicit path identifier 10. The pass now consists of three hops, 10.1.4.4, 10.4.5.5, and 10.3.5.3. This sequence specifies the exact route that traffic should follow when using this explicit path identifier in MPLS-TE or other IP based explicit path configurations. The first command is to create the tunnel interface and then use the IP unnumbered loop back zero command. The IP unnumbered loop back zero command
>
> **[3:07](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=187)** allows the tunnel interface to borrow the IP address of the loop back zero interface, which helps in simplifying the [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) scheme and conserving IP addresses. The next command is the tunnel destination command, which specifies the destination IP address of the tunnel, the tunnel end, or artery. The next command is the tunnel mode, MPLS traffic, ENG command, which specifies that the tunnel will operate in MPLS traffic engineering mode. The next command, configuring the MPLS traffic engineering path option one, to use the explicit identifier 10. Tunnel MPLS traffic ENG path option one, explicit identifier 10. This command specifies the explicit path that the MPLS tunnel will follow, ensuring precise [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) through the network, based on the defined path identifier. We have successfully completed the MPLS-TE, tunnel configuration on R1. You can check the status of the MPLS-TE tunnel using the command show, MPLS traffic, ENG tunnels. The output of the show MPLS traffic ENG tunnels command provides information about the MPLS traffic engineering tunnel, named R1T0, also known as tunnel zero with the following details, name, name R1T0.
>
> **[4:40](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=280)** This is the name assigned to the MPLST tunnel, often a user defined name for easier identification. Destination, destination 192.168.254.3.
>
> **[5:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=300)** It specifies the destination IP address of the tunnel. In this case, traffic testing for 192.168.254.3,
>
> **[5:12](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=312)** will be forwarded through this MPLS-TE tunnel. A status, describe the current status of the tunnel. Admin, Admin up indicates the administrative status of the tunnel, up , means the tunnel is administratively enabled. Oper, Oper up indicates the operational status of the tunnel. Up means the tunnel is operational and passing traffic. Path, path valid indicates the validity of the path chosen for the tunnel. Valid means the path is correctly configured and available. Signaling, signaling connected, indicates the signaling status of the tunnel. Connected means the signaling protocol, like RSVPT, is properly established. Path option one, it specifies the path option number used for this tunnel. Type explicit 10 indicates that an explicit path identifier 10 is used for this tunnel. The phrase explicit route, 10.1.4.4, 10.4.5.5, 10.3.5.3,
>
> **[6:29](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=389)** 192.168.254.3 indicates a specific path or route
>
> **[6:39](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-explicit-tunnel?u=76281980&t=399)** that traffic will follow through a network. In our next video, we will dive into the practical aspects of directing traffic to our MPLS Traffic Engineering or MPLS-TE tunnel.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (16), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (5), [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) (1), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-static-routes?u=76281980&t=0)** - [Instructor] In the previous two videos, we configured an [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) TE tunnel between R1 and R3. In this video, we will learn how to steer traffic into this T tunnel using a static route. By default, MPLS TE tunnels are not injected into the [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) table, which means no traffic is automatically sent into the T tunnel. To steer traffic into an MPLS TE tunnel, you can use static routing to direct specific traffic flows through the tunnel. Make sure you have an MPLS TE tunnel configured and operational. Use sh mpls traffic-eng tunnels command. Identify the destination network, or IP address that you want to steer through the MPLS TE tunnel. Use a static route to direct traffic for the specific destination through the tunnel interface. This can be done with the ip route NETWORK MASK TUNNEL_ID command. Let's add the static route to steer traffic through the MPLS TE tunnel. ip route 10.3.0.0 255.255.255.0 tunnel 0.
>
> **[1:28](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-static-routes?u=76281980&t=88)** After configuring the static route, you can verify it using show ip route command. Look for the static route entry pointing to tunnel 0 for the destination network 10.3.0.0/24. You can use the traceroute command to see the path from R1 to 10.3.0.0/24 network. This method gives you precise control over which traffic is routed through the MPLS TE tunnel. Static routing is straightforward to configure and doesn't require dynamic routing vertical configuration, ensures that traffic benefits from the optimized path and performance characteristics of the MPLS TE tunnel. Managing static routes can become complex in a larger network with many destinations. Static routes do not automatically adapt to network changes or failures. Additional configurations are needed for redundancy. By using a static routing, you can effectively direct traffic into an MPLS TE tunnel, leveraging the benefits of [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) to optimize your network's performance and resource utilization. In the next video, I will explain how we can steer traffic into the MPLS TE tunnel using Policy-Based Routing or PBR.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (11), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (6), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (1)
> **Env Vars:** mpls (10), network (1), mask (1), tunnel_id (1), pbr (1)
> **Versions:** 10.3.0 (3), 255.255.255 (1)
> **Prerequisites:** make sure you have (1), configure (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Steering traffic into an MPLS TE tunnel with PBR](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-pbr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-pbr?u=76281980&t=0)** - [Instructor] In the previous video, we learned about steering traffic into an [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md)-TE tunnel using static routes. In this video, we will explore how to achieve the same objective, but this time using policy-based [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) or PBR. PBR allows us to make routing decisions based on policies defined by the network administrator, offering a more flexible approach to directing traffic. We need to create an Access Control List or ACL that will match the traffic we want to direct into the MPLS-TE tunnel. Next, we will create a roadmap that uses the ACL to match the traffic and then sets the outgoing interface to the MPLS-TE tunnel interface. Route-map PBR-MPLS-TE permit 10, match ip address ACL, set interface tunnel-id. Then apply the route-map to the incoming interface where you want to steer traffic into the MPLS-TE tunnel. Interface incoming-interface, ip policy route-map PBR_NAME. Finally, we need to verify that our PBR configuration is working correctly and that the traffic is being directed into the MPLS-TE tunnel as intended. Show ip policy, show route-map,
>
> **[1:32](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-pbr?u=76281980&t=92)** show mpls traffic-eng tunnels. Let's look at an example where we steer traffic from 10.1.0.0/24 destined for 10.3.0.0/24 into an MPLS-TE tunnel.
>
> **[1:52](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-pbr?u=76281980&t=112)** Ensure that your tunnel is properly configured and operational with show mpls traffic-eng tunnels before applying the PBR rules. We need to create an Access Control List or ACL like access-list 100 permit ip 10.1.0.0.0.0.255
>
> **[2:19](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-pbr?u=76281980&t=139)** 10.3.0.0.0.0.0.255.
>
> **[2:29](https://www.linkedin.com/learning/mpls-traffic-engineering/steering-traffic-into-an-mpls-te-tunnel-with-pbr?u=76281980&t=149)** Next, we need to create a route-map like route-map PBR permit 10 match IP address 100 set interface tunnel 0. Apply the route-map to the incoming interface gi0/2 interface gigabit ethernet 0/2 ip policy route-map PBR. We need to verify the PBR with show ip policy show route-map. Finally, we need to verify that our PBR is working with traceroute 10.3.0.3. And that's how you can steer traffic into an MPLS-TE tunnel using policy-based routing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (10), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (3)
> **Env Vars:** pbr (9), mpls (8), acl (4), pbr_name (1)
> **Versions:** 10.3.0 (3), 10.1.0 (2), 0.0.0 (2), 0.255 (1)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **Speakers:** - [instructor] (1)

#### [MPLS TE dynamic tunnel](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=0)** - [Instructor] In this video, we will learn how to configure an [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md), or TE, dynamic tunnel. MPLS-TE dynamic tunnels enable automatic path selection based on network conditions, which helps optimize traffic flow and improve overall network performance. In our scenario, we have two paths between R1 and R3. The path between R1, R2, R3 has 20 megabit per second of bandwidth, and the path from R1, R4, R5, R3 has 10 megabit per second of bandwidth. We will configure an MPLS-TE dynamic tunnel to ensure that traffic can dynamically select the best path based on the available bandwidth and network conditions. Now let's create and configure the MPLS-TE tunnel interface. This tunnel will dynamically select the best path based on current network conditions and available bandwidth. Interface tunnel 0, this command creates or enters the configuration mode for the tunnel. Interface tunnel 0, tunnel interfaces are logical interfaces used to encapsulate traffic that needs to be sent through a tunnel. Here, tunnel 0 is being created or selected for configuration. Ip unnumbered loopback0, this command assigns the IP address of the loopback0 interface
>
> **[1:33](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=93)** to the tunnel interface, tunnel 0. Using the ip unnumbered command helps save IP addresses by borrowing the IP address from another interface, typically a loopback interface, which is commonly used in [Routing Protocols](../../Skills/Network%20and%20System%20Administration/Routing%20Protocols.md) because of its stability. Tunnel mode mpls traffic-eng, this command sets the mode of the tunnel to MPLS traffic engineering. By setting the tunnel mode to mpls traffic-eng, you enable the tunnel interface to use MPLS-TE for forwarding traffic. This is essential for using MPLS-TE features, such as dynamic path calculation and resource reservation. Tunnel destination 192.168.254.3, this command specifies the destination IP address for the MPLS-TE tunnel. The destination IP is the IP address of the remote endpoint of the tunnel. Traffic sent through this tunnel will be directed to this destination IP. Replace destination IP with the actual IP address of the remote routers loopback, or another interface. Tunnel mpls traffic-eng bandwidth, this command sets the bandwidth for the MPLS-TE tunnel to 12,000 kilobit per second, or 12 megabit per second.
>
> **[3:06](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=186)** By specifying the bandwidth with this command, you are reserving 12 megabit per second of bandwidth for this tunnel. This information is used by the MPLS-TE mechanisms to ensure that sufficient resources are available along the selected path, and to influence the dynamic path calculation, taking into account the available bandwidth on each potential path. Tunnel mpls traffic-eng path option 1 dynamic, this command configures the tunnel to use a dynamically determined path as its first path option. The path option 1 dynamic part specifies that the primary path, or option one, for this tunnel will be dynamically calculated by the router. MPLS-TE will determine the best paths based on network conditions, available bandwidth, and other constraints, ensuring optimal path selection without manual configuration. To check the status of an MPLS traffic engineering tunnel, you can use the command show mpls traffic-eng tunnels command. This command provides detailed information about the configured MPLS-TE tunnels, including data status, configuration, and performance [Statistics](../../Skills/Data%20Science/Statistics.md). The administrative status of the tunnel is up, indicating that it has been enabled.
>
> **[4:40](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=280)** The operational status of the tunnel is up, meaning that it is currently active and functioning properly. The path of the tunnel is valid, which means that the path computation has succeeded and a valid path exists from the source to the destination. The RSVP-TE signaling is connected, indicating that the signaling for the tunnel setup has been successfully established. Path option 1, type dynamic. This means that the tunnel is using path option one, which is dynamically calculated. Dynamic path options are computed based on available network resources and constraints, rather than being statically defined. The explicit route specifies the exact path the tunnel takes through the network. The tunnel traverses through the IP addresses 10.1.2.2, 10.2.3.3, and finally reach the destination 192.168.254.3.
>
> **[5:52](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=352)** The reason this path is chosen is that it is the only path that can provide 12 megabit per second of bandwidth. This ensures that the tunnel meets the necessary bandwidth requirements for its operation. Now, let's define the next tunnel with the requirement of five megabit per second. Interface tunnel 1. Ip unnumberd loopback 0. Tunnel destination 192.168.254.3
>
> **[6:27](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=387)** Tunnel mode mpls traffic-eng. Tunnel mpls traffic-eng bandwidth 5000. Tunnel mpls traffic-eng path-option 1 dynamic. To check the status of an MPLS traffic engineering tunnel, you can use the command show mpls traffic-eng tunnel's command. The administrative status of the tunnel is up indicating that it has been enabled. The operational status of the tunnel is up, meaning that it is currently active and functioning properly. Path option 1, type dynamic. This means that the tunnel is using path option one, which is dynamically calculated. Dynamic path options are computed based on available network resources and constraints rather than being statically defined. The explicit route specifies the exact path the tunnel takes through the network. The tunnel traverses through the IP addresses 10.1.4.4, 10.4.5.5, 10.3.5.3, and finally reach the destination 192.168.254.3.
>
> **[7:46](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-dynamic-tunnel?u=76281980&t=466)** The reason this path is chosen is that it is the only path that can provide five megabit per second of bandwidth.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (23), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (4), [Routing Protocols](../../Skills/Network%20and%20System%20Administration/Routing%20Protocols.md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=0)** - [Instructor] [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md)-TE semi-dynamic tunnel using exclude addresses allows network engineers to dynamically route traffic while specifying certain addresses or nodes that must be avoided. This combines the flexibility of dynamic [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) with the control of explicit paths to optimize traffic flows and avoid known problematic areas of the network. In this scenario, we have two paths between R1 and R3. We want to configure an MPLS-TE tunnel on R1 as the tunnel head end to R3 as the tunnel endpoint. However, the only requirement is that the tunnel should not pass through R2. We want to exclude R2 from the tunnel path. We need to define explicit path with exclude address. IP explicit path name NO_R2: exclude-address 192.168.254.2,
>
> **[1:11](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=71)** explicit path name NO_R2: exclude address 192.168.254.2.
>
> **[1:23](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=83)** IP explicit path name NO_R2 creates an explicit path named NO_R2 and excludes the address 192.168.254.2, R2's IP address.
>
> **[1:42](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=102)** Then configure the tunnel interface on R1, interface Tunnel0, IP unnumbered Loopback0, tunnel mode mpls traffic-eng tunnel destination 192.168.254.3,
>
> **[2:01](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=121)** tunnel mpls traffic-eng path option1 explicit name NO_R2, end. Interface Tunnel0 creates the Tunnel0 interface. IP on numbered Loopback0 uses the IP addresses of Loopback0 for the tunnel interface. Tunnel destination 192.168.254.3 sets the tunnel destination to R3. Tunnel mode mpls traffic-eng configures the tunnel for mpls [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md). Tunnel mpls traffic-eng path-option 1 explicit name NO_R2 configures the tunnel to use the explicit path NO_R2. After configuration, use the show mpls traffic-eng tunnels come in to verify that the tunnel is up and operational and ensure that it excludes R2. Path option 1, this denotes the first path option available for the MPLS-TE tunnel. Multiple path options can be configured, providing fallback path if the primary one is unavailable. Type explicit. This indicates that the path is explicitly defined. Unlike a dynamic path which is calculated by the router based on available network resources and constraints, and explicit paths specifies the exact route the tunnel should take.
>
> **[3:37](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=217)** NO_R2, this is the name of the explicit path that has been configured. In this case, NO_R2 represents an explicit path that avoids a specific IP address or node, ensuring that the tunnel does not pass through R2. 10.1.4.4, 10.3.4.3, 192.168.254.3,
>
> **[4:07](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-exclude-address?u=76281980&t=247)** these are the IP addresses of the nodes or routers or interfaces that the tunnel will pass through. The sequence is in the exact order the tunnel will follow from the source to the destination. In this scenario, we have configured an MPLS-TE tunnel from R1 to R3, ensuring that the tunnel does not pass through R2 by excluding R2's IP address from the path calculation. This configuration meets the specified requirement by using an alternate path. In the next video, we will dive into another method for setting up a semi-dynamic MPLS-TE tunnel. We will explore how to leverage alternate techniques to optimize traffic flow and enhanced network reliability, and stay tuned to gain a deeper understanding of advanced MPLS-TE configurations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (12), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (1)
> **Env Vars:** no_r2 (9), mpls (6)
> **Versions:** 192.168.254 (6), 10.1.4 (1), 10.3.4 (1)
> **Prerequisites:** configure (2)
> **CLI Commands:** node (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [MPLS TE semi-dynamic tunnel using loose next hop](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=0)** - [Instructor] In [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md)-TE, a semi-dynamic tunnel refers to a setup where the tunnel path can be influenced or partially predefined, providing flexibility and control over [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md). The loose next top technique is a specific method used within MPLS-TE to define paths with flexibility while ensuring traffic follows a general direction rather than a strict adherence to specific nodes or interfaces. In this scenario between R1 and R3, there are two existing paths, we need to establish a tunnel path utilizing the lower route and leveraging both links between R4 and R5. In MPLS-TE, explicit paths with loose next-hop and a strict next-hop configuration are methods used to define precise routes for traffic engineering tunnels. A strict next-hop specifies exact intermediate nodes or interfaces that the MPLS-TE tunnel must traverse in sequence. It's ideal for scenarios where the network topology and traffic engineering requirements necessitates deterministic paths. ip explicit-path name TO_R3. next-address strict 10.1.4.4. next address strict 10.4.5.5.
>
> **[1:38](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=98)** next address strict 192.168.254.3.
>
> **[1:47](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=107)** This command explicitly defines the path that the tunnel must follow via a specific IP addresses. Loose next-hop specifies a general direction or area for the tunnel to follow without specifying exact intermediate nodes. It allows the network to dynamically determine the exact path based on realtime network conditions such as link availability and congestion. ip explicit-path name TO_R3. next-address strict 10.1.4.4. Next-address loose 192.168.254.5. Next-address strict 192.168.254.3.
>
> **[2:41](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=161)** This command provides a loose guideline for the path of the tunnel enabling adaptation to changes in the network. It means that after reaching 10.1.4.4, the tunnel should proceed to towards 192.168.254.5, maintaining connectivity without specifying a particular link. Then configure the tunnel interface on R1 interface Tunnel0. ip unnumbered Loopback0. tunnel mode mpls traffic-eng. tunnel destination 192.168.254.3.
>
> **[3:27](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=207)** tunnel mpls traffic-eng path-option 1 explicit name TO_R3. Interface Tunnel0 creates the tunnel zero interface, ip unnumbered Loopback0 uses the IP ads of Loopback0 for the tunnel interface. Tunnel destination 192.168.254.3 sets the tunnel destination to R3. Tunnel mode mpls traffic-eng, configures the tunnel for MPLS Traffic engineering. Tunnel mpls traffic-eng path-option 1 explicit name TO_R3 configures the tunnel to use the explicit path TO_R3. After configuration, use the show mpls traffic-eng tunnels command to verify that the tunnel is up and operational and ensure that it uses both links between R4 and R5. The tunnel is using the gigabit zero to interface of R4 now. Let's shut down the gigabit zero to interface of R4. Then use the show mpls traffic-eng tunnels command to verify that the tunnel is using the next link between R4 and R5. The tunnel is using the gigabit zero one interface of R4 now. So a strict next-hop path offer deterministic performance characteristics but may not adapt well to network chains and loose next-hop path enhance adaptability
>
> **[5:01](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-semi-dynamic-tunnel-using-loose-next-hop?u=76281980&t=301)** and can optimize traffic flow dynamically, but may require robust network monitoring and management. Congratulations. You now have all the methods for configuring MPLS-TE tunnels, explicit tunnel, dynamic tunnel, and semi-dynamic tunnel. In future videos, we will explore other capabilities of MPLS-TE.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (13), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (4)
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
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-auto-bandwidth?u=76281980&t=0)** - [Instructor] Welcome back to our [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) series. In this video, we will dive into MPLS [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md)'s auto-bandwidth feature. We will explore what auto-bandwidth is, how to configure it, and why it is crucial for optimizing network performance. First, let's define MPLS TE Auto-Bandwidth. Auto-bandwidth is a feature in MPLS Traffic Engineering that automatically adjusts the bandwidth of an MPLS TE tunnel based on current network conditions. This means your network can dynamically respond to changes in traffic load, ensuring efficient utilization of available bandwidth. The system adjusts tunnel bandwidth without manual intervention. It helps in balancing load across network paths and adapts to changes in traffic patterns. The MPLS TE tunnel periodically monitors traffic patterns and adjusts the allocated bandwidth to match current needs. It collects traffic [Statistics](../../Skills/Data%20Science/Statistics.md) for the tunnel and compares current load against the configured bandwidth and increases or decreases bandwidth based on current demand. Let's walk through the configuration of auto-bandwidth for an MPLS TE tunnel. The Tunnel mpls traffic-eng auto-bw command enables the auto-bandwidth feature for an MPLS Traffic Engineering or TE tunnel with optional parameters to specify the minimum
>
> **[1:35](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-auto-bandwidth?u=76281980&t=95)** and maximum bandwidth limits. This feature dynamically adjusts the tunnel's bandwidth based on [Real-Time](../../Skills/Database%20Management/Real-Time.md) traffic measurements, optimizing network resource utilization. Minimum bandwidth specifies the minimum bandwidth that the tunnel can adjust to. This ensures that the tunnel always has a baseline bandwidth to handle minimum traffic requirements. Maximum bandwidth specifies the maximum bandwidth that the tunnel can adjust to. This prevents the tunnel from consuming more bandwidth than what is deemed acceptable or available. The Tunnel mpls traffic-eng auto-bw frequency command is used to set the interval at which the auto-bandwidth feature recalculates and adjusts the bandwidth of an MPLS Traffic Engineering or TE tunnel. This allows the network to dynamically respond to traffic change at regular intervals. The Tunnel mpls traffic-eng auto-bw collect-bw command is used to enable the collection of bandwidth usage statistics for an MPLS Traffic Engineering tunnel. This data is essential for the auto-bandwidth feature to analyze traffic patterns and adjust the tunnel's bandwidth accordingly. To verify that auto-bandwidth is enabled and functioning correctly, you can use show mpls traffic-eng tunnels. This is the auto-bandwidth configuration in our scenario,
>
> **[3:10](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-auto-bandwidth?u=76281980&t=190)** interface Tunnel0, ip unnumbered loopback0, tunnel mode mpls traffic-eng, tunnel destination 192.168.254.3, tunnel mpls traffic-eng auto-bw frequency 300 max-bw 10000 min-bw 5000. show mpls traffic-eng tunnels can be used to monitor the status of the tunnel. Auto-bandwidth is enabled. If the auto-bandwidth feature has just been enabled, wait for some time to allow the collection of samples.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (17), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (5), [Statistics](../../Skills/Data%20Science/Statistics.md) (2), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1)
> **Env Vars:** mpls (10)
> **Versions:** 192.168.254 (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [MPLS TE affinity](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=0)** - [Instructor] In this video, we are going to dive into an important aspect of [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md), or MPLS-TE: affinity, also known as link coloring. Affinity allows network operators to control and influence the selection of paths for TE tunnels based on specific link attributes. This is particularly useful for ensuring that traffic adheres to specific constraints, such as avoiding certain links or preferring particular paths. In MPLS-TE, affinity is a way to tag links with specific attributes or colors, and then configure TE tunnels to include or exclude these links based on their tags. Each link in the network can be associated with a 32-bit affinity value. Similarly, each TE tunnel can be configured with an affinity requirement that determines which links it can or cannot use. First, you need to define the affinity attribute on the links. This is done on the interface level with the mpls traffic-eng attribute-flags affinity_bits. The mpls traffic-eng attribute-flags command is used in the configuration of an interface in Cisco IOS to set the affinity or attribute flags for MPLS traffic engineering, or TE. Affinity bits specifies the 32-bit affinity value
>
> **[1:37](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=97)** in hexadecimal format. Each bit in the 32-bit value can represent a different attribute or property of the link. Next, configure the TE tunnel to use or avoid links based on their affinity attribute. Interface Tunnel0, tunnel mpls traffic-eng affinity affinity_bits [mask affinity_mask]. This command configures affinity attributes for an MPLS traffic engineering or TE tunnel. It sets the affinity and mask values which control which links the TE tunnel can use based on their configured affinity flags. Affinity_bits specifies the desired affinity value in hexadecimal format. This value indicates the attributes the tunnel prefers or requires. Affinity mask specify the affinity mask in hexadecimal format. The mask determines which bits of the affinity value are considered when matching links. In our scenario, two paths exist between R1 and R3. Each path will be assigned a unique affinity. The green path has an affinity attribute of 0x1 and the red path has an affinity attribute of 0x2. We'll then define two tiles on R1, configuring each tunnel to use the specific affinity assigned to the desired paths. R1 interface gigabit 0/0,
>
> **[3:12](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=192)** mpls traffic-eng attribute-flags 0x1. Interface gigabit 0/1, mpls traffic-eng attribute-flags 0x2. R2, interface range gigabit 0/0-1, mpls traffic-eng attribute-flags 0x1. R3, interface gigabit 0/0, mpls traffic-eng attribute-flags 0x1. Interface gigabit 0/1, mpls traffic-eng attribute-flags 0x2. R4, interface range gigabit 0/0-1, mpls traffic-eng attribute-flags 0x2. We will then configure two tunnel interfaces on R1, each with specific requirements about the affinity flag. Interface tunnel0: ip unnumbered loopback 0, tunnel mode mpls traffic-eng, tunnel destination 192.168.254.3, tunnel mpls traffic-eng affinity 0x1 mask 0x8f,
>
> **[4:25](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=265)** tunnel mpls traffic-eng path-option 1 dynamic, end. Interface Tunnel1: ip unnumbered loopback0, tunnel mode mpls traffic-eng, tunnel destination 192.168.254.3, tunnel mpls traffic-eng affinity 0x2 mask 0x8f tunnel mpls traffic-eng path option 1 dynamic, end. The command show mpls traffic-eng tunnels tunnel 0 is used on a Cisco router to display information about MPLS traffic engineering or TE tunnels. Name: R1_t0. This is the name assigned to the MPLS-TE tunnel. In this case, the tunnel is named R1_t0. Affinity: 0x1, 0x8f. 0x1, this indicates that the tunnel has an affinity value of 0x1. The mask is 0x8f, meaning all bits are considered. Explicit route: 10.1.2.2, 10.2.3.3, 192.168.254.3
>
> **[5:41](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=341)** is the explicit route that the MPLS-TE tunnel will follow. These are the IP addresses of the nodes or hops through which the tunnel will be established. The command show mpls traffic-Eng tunnels tunnel 1 is used on a Cisco router to display information about MPLS traffic engineering, or TE tunnels. Name: R1_t1. This is the name assigned to the MPLS-TE tunnel. In this case, the tunnel is named R1_t1. Affinity: 0x2, 0x8f. 0x2, this indicates that the tunnel has an affinity value of 0x2. The mask is 0x8f, meaning all bits are considered. Explicit route: 10.1.4.4, 10.3.4.3, 192.168.254.3
>
> **[6:34](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-affinity?u=76281980&t=394)** is the explicit route that the MPLS-TE tunnel will follow. These are the IP addresses of the nodes or hops through which the tunnel will be established. When a tunnel is being setup the traffic engineering database will look at the affinity bits of the links in the network and compare them against the affinity and mask value of the tunnel. Only links whose attributes match the specified affinity and mask will be considered for the tunnel path.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (28), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (6)
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
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=0)** - [Instructor] In this video, we are diving deep into the concept of [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) Administrative Weight, also known as TE metric, so let's get started. Each interface in a network has an IGP metric, which is used for traditional [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) decisions. In MPLS Traffic Engineering, or TE, each interface also has a TE metric. By default, the TE metric is equal to the IGP metric. When we configure an MPLS-TE tunnel, we can choose the path based on either the best IGP metric or the best TE metric. Since these metrics are the same by default, there is no difference initially. However, as we will see, the default setting uses the TE metric. In this scenario, the base path from R1 to R3 based on the IGP metric is going from R1 to R2, then to R3. Let's configure an MPLS-TE tunnel from R1 to R3. interface Tunnel0, ip unnumbered Loopback0, tunnel mode mpls traffic-eng, tunnel destination 192.168.254.3, tunnel mpls traffic-eng path-option 1 dynamic, end. Let's verify the tunnel with show mpls traffic-eng tunnels. Path weight 10 indicates the weight assigned to the path
>
> **[1:38](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=98)** of the MPLS Traffic Engineering tunnel. Since the IGP metric and TE metric are same by default, the path weight of 10 suggests that this path is preferred based on the underlying IGP metric. The line Metric Type: TE default refers to the default metric type used in MPLS Traffic Engineering, or TE tunnels. The Explicit Route specifies the specific sequence of routers 10.1.2.2 10.2.3.3 192.168.254.3 that an MPLS Traffic Engineering tunnel will traverse. As you can see, the TE metric is identical to the IGP metric for each interface. Let's decrease the TE metric of the bottom path by configuring mpls traffic-eng administrative-weight on the interfaces associated with the bottom path. Then verify the tunnel with show mpls traffic-eng tunnels. Path weight 6 indicates the weight assigned to the path of the MPLS Traffic Engineering tunnel. The Explicit Route specifies the specific sequence of routers 10.1.4.4 10.3.4.3 192.168.254.3 that an MPLS Traffic Engineering tunnel will traverse. The bottom path has lower TE metric now.
>
> **[3:15](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=195)** You can alter the default behavior of MPLS-TE tunnels to select the optimal path based on IGP metric by using the command mpls traffic-eng path-selection {igp|te} Let's apply this command in our scenario and observe its impact. interface Tunnel0, ip unnumbered Loopback0, tunnel mode mpls traffic-eng, tunnel destination 192.168.254.3, tunnel mpls traffic-eng path-option 1 dynamic, tunnel mpls traffic-eng path-selection metric igp, end. Then verify the tunnel with show mpls traffic-eng tunnels. Path weight 10 indicates the weight assigned to the path of the MPLS Traffic Engineering tunnel. The line Metric Type: IGP interface indicates that the metric used for path selection in MPLS-TE tunnel is derived from the IGP metric of the interface. The Explicit Route specifies the specific sequence of routers 10.1.2.2 10.2.3.3 192.168.254.3 that an MPLS Traffic Engineering tunnel will traverse. The top path has lower IGP metric now. By configuring MPLS-TE Administrative Weight, network administrators can optimize traffic distribution,
>
> **[4:49](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-administrative-weight?u=76281980&t=289)** enhance load balancing, and improve overall network resource utilization. This flexibility is invaluable in meeting diverse network demands and ensuring efficient data delivery.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (24), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (9), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** mpls (14), igp (11)
> **Versions:** 192.168.254 (5), 10.1.2 (2), 10.2.3 (2), 10.1.4 (1), 10.3.4 (1)
> **Definitions:** known as (1), refers to (1)
> **Prerequisites:** configure (2)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [MPLS TE setup and hold priority](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=0)** - [Instructor] In this video, we will dive into the concepts of setup and hold priority within the context of [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md)-TE. Set up and hold priorities are crucial elements in MPLS-TE that help determine the precedence of TE tunnel during path computation and maintenance. Setup priority is used when an LSP is being established. It dictates the importance of a new LSP in the network. The lower the number, the higher the priority. For example, a setup priority of zero is considered the highest priority while a priority of seven is the lowest. Hold priority, on the other hand, is used to maintain an existing LSP when there is contention for network resources. Just like setup priority, a lower number means a higher priority. This ensures that critical LSPs remain active even during network congestion or resource shortage. Now let's look at how to configure setup and hold priorities in a typical MPLS TE environment. We need to enter the [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) mode. Use the tunnel MPLS traffic ENG priority, setup priority, hold priority command to configure the setup and hold priorities for an LSP. Interface tunnel tunnel number. Tunnel MPLS traffic ENG priority, setup priority,
>
> **[1:36](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=96)** hold priority. Let's go through a practical configuration example. I configure tunnel zero with a bandwidth requirement of 12 megabit per second. The tunnel selected the top path for this tunnel. This path was chosen because it has a higher bandwidth of 24 megabit per second. After reserving the 12 megabit per second for tunnel zero, the remaining available bandwidth on the top path is now 12 megabit per second. Next, I configure tunnel one with the same destination, but with the bandwidth requirement of 17 megabit per second. However, this tunnel did not come up. The reason is that there isn't enough bandwidth available on either part to meet the 17 megabit per second requirement. Let's break it down. The top path after reserving 12 megabit per second for tunnel zero has 12 megabit per second of remaining bandwidth. The bottom path has 16 megabit per second of available bandwidth. But since tunnel one requires 17 megabit per second, neither path can accommodate this requirement. Let's configure tunnel one with a setup and hold priority of one and tunnel zero with the setup and hold priority of five. With this setting, tunnel one has the highest priority during both the setup and hold phases. This means that if there is contention for bandwidth,
>
> **[3:11](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-setup-and-hold-priority?u=76281980&t=191)** tunnel one will be preferred over tunnel zero. With this new priority setting, both tunnel zero and tunnel one can be established. Tunnel zero will use the bottom path and tunnel one will use the top path. Now let's verify the configuration and the status of tunnel zero using the command, show MPLS traffic engineering tunnels tunnel zero. Explicit route shows that it uses a bottom path. Then verify the configuration and the status of tunnel one using the command show MPLS traffic ENG tunnels tunnel one. Explicit route shows that it uses the bottom path. This demonstrates the effectiveness of using setup and hold priorities to manage network resources. When configuring setup and hold priorities, keep these best practices in mind. One, assign higher priorities means lower numbers to critical LSPs. Two, ensure that hold priority is not lower than setup priority to maintain consistency. Three, regularly review and adjust priorities based on network performance and requirements.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (7), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (2)
> **Prerequisites:** setup (14), configure (5), set up (1)
> **Env Vars:** mpls (7), lsp (4), eng (3)
> **Analogies:** for example (1), just like (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [MPLS TE autoroute announce](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-autoroute-announce?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-autoroute-announce?u=76281980&t=0)** - [Instructor] In this video, we are diving into [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) Autoroute Announce, a crucial feature that enhances traffic engineering in MPLS networks. Let's get started. Autoroute Announce simplifies the process of directing traffic through TE tunnels without the need for manual [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) adjustments. MPLS-TE Autoroute Announce is a feature in MPLS traffic engineering that automatically advertises a tunnel as a preferred path for a specific traffic. This means that once a TE tunnel is established, the IGP will automatically use this tunnel to forward traffic destined for a particular prefix. Let's look at an example configuration of MPLS-TE Autoroute Announce. This is the MPLS-TE tunnel configured on R1, interface Tunnel0, ip unnumbered Loopback0, tunnel mode mpls traffic-eng, tunnel destination 192.168.254.3, tunnel mpls traffic-eng path-option 1 dynamic. Without Autoroute Announce, the tunnel will not appear in the routing table, requiring us to configure a static route or policy-based routing, or PBR, to direct traffic into it. Let's add the Autoroute Announce to the tunnel interface, interface Tunnel0, ip unnumbered Loopback0,
>
> **[1:34](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-autoroute-announce?u=76281980&t=94)** tunnel mode mpls traffic-eng, tunnel destination 192.168.254.3, tunnel mpls traffic-eng path-option 1 dynamic, tunnel mpls traffic-eng autoroute announce. In this configuration, the tunnel mpls traffic-eng autoroute announce command ensures that the IGP will automatically announce this tunnel for traffic engineering purposes. Let's use sh ip route to display that the tunnel interface is automatically added to the routing table. Autoroute allows the router to automatically install MPLS forwarding entries in the IP routing table for each TE tunnel. These entries ensures that traffic destined for a specific IP prefixes is forwarded through the appropriate tunnel. The command sh mpls traffic-eng tunnels with the output Autoroute enabled indicates that the autoroute feature is enabled for MPLS traffic engineering tunnels on the device. In a real-world scenario, MPLS-TE Autoroute Announce can significantly reduce the complexity of managing large scale networks. By automating the advertisement of TE tunnels, network administrators can ensure efficient traffic flow and better resource utilization without constantly tweaking routing configurations.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (16), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (6), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (5)
> **Env Vars:** mpls (9), igp (2), pbr (1)
> **Versions:** 192.168.254 (2)
> **Definitions:** is a  (1), means that (1)
> **Prerequisites:** configure (1), install (1)
> **Speakers:** - [instructor] (1)

#### [MPLS TE forwarding adjacency](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-forwarding-adjacency?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-forwarding-adjacency?u=76281980&t=0)** - [Instructor] In this video, we are delving into [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md)-TE forwarding adjacency, a critical concept in MPLS [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) that facilitates efficient load sharing across network paths. Let's get started. MPLS-TE forwarding adjacency allows you to advertise a TE tunnel as a link in your IGP. Let's take a look at this scenario. Imagine we want to load balance traffic from R1 to R7. All interfaces have the same metric. We have two paths, but because the path through R2 is the shortest path, that's the only path we will use. We could solve this by configuring one MPLS-TE tunnel from R4 to R6 and another from R6 to R4. TE tunnels are unidirectional, so this setup ensures bidirectional traffic flow. Because forwarding adjacency advertises the TE tunnel as a link in your IGP, we need tunnels in both directions. If you only configure unidirectional TE tunnels and enable forwarding adjacency, the IGP won't use the link. Then we need to enable MPLS-TE forwarding adjacency on the tunnel interface with tunnel mpls traffic-eng forwarding adjacency command. Let's verify the [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) table on R1. For the 10.7.0.0/24 network, R1 uses both paths, one through R2
>
> **[1:37](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-forwarding-adjacency?u=76281980&t=97)** and the other through R4. This indicates that load sharing between these two paths is working effectively, thanks to the MPLS-TE tunnels configured on R4 and R6. The tunnel mpls traffic-eng forwarding-adjacency holdtime command in MPLS-TE configures the hold time for forwarding adjacencies. The hold time is important when the tunnel goes down. when a TE tunnel goes down, the router calculates a new path and the TE tunnel comes back up. This causes the link to be withdrawn and readvertised in your IGP. The hold time defines how long the tunnel must be down before telling the IGP it is down. This is useful for maintaining stability in the network and avoiding frequent changes in the routing table, due to temporary tunnel failures. The command show mpls traffic-eng tunnels shows that forwarding adjacency is enabled for this tunnel. Enabling forwarding adjacency for MPLS-TE tunnels allows these tunnels to be advertised as virtual links in the IGP. This integration enhances load sharing, network utilization, and stability, making it easier to manage and optimize traffic engineering in MPLS networks. Configuring an appropriate hold time ensures resilience by maintaining the forwarding adjacency in the IGP
>
> **[3:14](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-forwarding-adjacency?u=76281980&t=194)** during temporary tunnel failures.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (12), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (2), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (2)
> **Env Vars:** mpls (9), igp (7)
> **Prerequisites:** setup (1), configure (1)
> **Versions:** 10.7.0 (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Class-based tunnel selection (CBTS)](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=0)** - [Instructor] In this session, we learn about Class-based Tunnel Selection or CBTS in [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) or MPLSTE. In this guide, we will explore the concept of CBTS, its importance in network traffic management, and how to configure it in a Cisco environment. Class-based Tunnel Selection, or CBTS, is a traffic engineering feature that allows different classes of service, or CoS, traffic to be directed onto separate TE tunnels. These tunnels must all connects the same head end and tail end routers. When [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) CoS traffic to a destination using CBTS tunnels, all traffic for that destination must be routed through these tunnels. Meaning no traffic can be forwarded outside of them via an LSP or as IP traffic. The label switching router or LSR evaluates the IP precedents bits or EXP bits of incoming labels to determine the appropriate TE tunnel. You can map each EXP bit value to a specific TE tunnel, utilizing up to eight tunnels between a pair of LSRs, corresponding to the eight levels of QOS provided by the three EXP bits. (computer key clacking) Let's walk through an example
>
> **[1:33](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=93)** to learn about Class-based Tunnel Selection or CBTS in MPLST. Imagine a service provider network where we have different types of traffic, such as voice, video, and data. Each type of traffic requires different levels of service. We have two routers, router one or head end, and router five or tail end connected by three TE tunnels. Voice and network protocol traffic have an EXP of five, six, or seven. Video traffic has an EXP of three or four, and data traffic has an EXP of zero, one or two. Voice and network protocol traffic must use tunnel one. Video traffic must use tunnel two. Data traffic must use tunnel three. The first task is to assign each EXP value to a tunnel using the command tunnel MPLS traffic ENG EXP value. Assign EXP values five, six, and seven to tunnel one. Assign EXP values three and four to tunnel two. Assign EXP values zero one, and two to tunnel three. Then we need to create a tunnel that includes the three previous tunnels. The name of this tunnel is EXP Bundle Tunnel. And finally, we forward traffic into this tunnel. Let's learn about the configuration of this tunnel.
>
> **[3:12](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=192)** Interface Tunnel 100. This command creates the tunnel interface name Tunnel 100. IP unnumbered Loopback0. This command assigns the IP address of loopback zero to Tunnel 100, allowing it to operate without a unique IP address. Tunnel mode MPLS traffic ENG. This sets the tunnel mode to MPLS traffic engineering, enabling the interface to support MPLST. Tunnel destination 192.168.254.5. This specifies the destination IP address of the tunnel. Directing traffic to the endpoint at 192.168.254.5. Tunnel MPLS traffic ENG autoroute announce. This command ensures that route learn via MPLST are automatically announced to the IGP or Interior Gateway Protocol. Tunnel MPLS traffic ENG EXP bundle master. This designates Tunnel 100 as the master in an experimental bundle, which aggregates multiple member tunnels for enhanced redundancy and load balancing. Tunnel MPLS traffic ENG EXP bundle member Tunnel 1, 2, 3. This command adds Tunnel 1, Tunnel 2,
>
> **[4:45](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=285)** and Tunnel 3 as member tunnels to the experimental bundle, providing additional paths for traffic and ensuring higher availability and resilience. This configuration creates a robust MPLST tunnel set up. With Tunnel 100 as the master and three member tunnels, ensuring efficient traffic management and increased network reliability. Now let's review the output of the show mpls traffic-eng tunnels Tunnel 100 Command, which provides details about Tunnel 100 on router R1. Name R1_t100, Tunnel 100. Destination, 192.168.254.5 This line shows the name of the tunnel and its destination. The tunnel is named R1_t100. Tunnel 100, and it is directed to the IP address, 192.168.254.5. A status, master. This indicates that Tunnel 100 is the master tunnel in an experimental bundle. Admin, up, oper, up, signaling, N/A. Admin up, the administrative status of the tunnel is up, meaning it is enabled. Oper up, the operational status of the tunnel is up, indicating it is functioning correctly.
>
> **[6:21](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=381)** Signaling, N/A, no signaling information is available or applicable for this tunnel. Member autoroute, inactive. This indicates that the member tunnels autoroute announcement is currently inactive. Member tunnels, Tunnel1. Config Exp 5 6 7. Tunnel1 is a member of the experimental bundle. Config Exp 5 6 7. The experimental configuration for Tunnel1 includes priorities five, six, and seven. Tunnel2, config Exp 3 4. Tunnel2 is another member tunnel. Config Exp 3 4. The experimental configuration for Tunnel2 includes priorities three and four. Tunnel3, Config Exp 0 1 2. Tunnel3 is the third member tunnel. Config Exp 0 1 2, the experimental configuration for Tunnel3 includes priorities zero, one and two. History, this section provides historical information about the tunnel. Time since created one hours, 53 minutes. The tunnel was created one hour and 53 minutes ago. Number of LSP IDs, Tun instances, used, zero. No LSP IDs Tunnel instances have been used so far.
>
> **[7:59](https://www.linkedin.com/learning/mpls-traffic-engineering/class-based-tunnel-selection-cbts?u=76281980&t=479)** This configuration ensures that Tunnel 100 is up and running with specified member tunnels for enhanced redundancy and load balancing, with detailed status and historical information to monitor its performance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (8), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (3), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=0)** - [Instructor] In this video, we will explore [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md)-TE Fast Reroute, or FRR, for link protection. Let's start with a brief overview. MPLS-TE Fast Reroute or FRR is a mechanism that provides fast recovery from link or node failures in an MPLS network. It allows traffic to be rerouted quickly to a pre-established backup path, ensuring minimal disruption. In the context of MPLS-TE, FRR link protection involves creating a backup path for a specific link in an LSP. When the primary link fails, traffic is immediately switched to this backup path, maintaining the flow of data. With link protection, one particular link used for TE is protected. This means that all TE Tunnels that are crossing this link are protected by one backup tunnel. This technique is also called facility backup because a complete link with all its TE LSPs backed up. This figure shows a simple network whereby the link R1-R2 is protected by a backup tunnel, R1-R3-R2. This backup tunnel protects only the TE Tunnels in the direction from R1 to R2.
>
> **[1:35](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=95)** Therefore, to protect all tunnels crossing the link R1-R2 in both directions, you need another backup tunnel, R2-R3-R1. In the case of link protection, the backup tunnel is also called a next hop or NHOP bypass tunnel, and always start on the point of local repair or PLR. The PLR here is router R2. The backup tunnel for link protection always connects to the next hop router. This means the router at the remote end of the link. This router is the merge point or MP because this is the router where the protected tunnel and backup tunnel merge. The backup tunnel is an explicit path tunnel that RSVP signals. When the backup tunnel is created, RSVP signals the labels as usual. In this figure, R3 signals R5 to use the implicit NULL label, and R5 signals R2 to use label 500 for the backup tunnel. The TE Tunnel 1 is crossing the link R2-R3. Look at this figure to see the packet forwarding for Tunnel 1. When the protection is not yet in use, the packets on the LSP of Tunnel 1 are coming in on router R2 with a label of 200.
>
> **[3:12](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=192)** This label is swapped with label 300 when the packet leaves router R3. Finally label 300 popped out from router R2. Assume the link between R2 and R3 fails. As soon as the link R2- R3 fails, the PLR here, R2, starts to send the traffic on TE Tunnel 1 onto the NHOP backup tunnel across R5. The incoming packets on R2 are label swapped as before. Label 100 is swapped with label 300. Then the additional label for the NHOP tunnel, label 500 is pushed onto the packet. The packet is labeled switched on the NHOP backup tunnel until it reaches router R3, the MP, the tail end router of the protected link. Notice that the packet arrives at R3 with label 300. When the link R2-R3 was not failing, the packet arrived at router R3 with the same label. The only difference is that now the packet arrives at R3 via another interface. Because the platform-wide label space is used, this does not cause a problem. The PLR should use this backup tunnel to carry TE LSPs only briefly. The protection is temporary because the link failure triggers the PLR to send a path error
>
> **[4:45](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-i?u=76281980&t=285)** to the head end router of the TE Tunnel. When the head end router of the protected TE Tunnel receives the path error, it recalculates a new path for the tunnel LSP and signals it. The IGP also signals the link failure when the PLR uses the backup tunnel to route a protected LSP. The PLR sends the path message of the protected tunnel onto the backup tunnel as long as the backup tunnel is in use. When the head end router completes signaling, the whole LSP's rerouted through the network. The protected TE LSP no longer uses the backup tunnel. One drawback of using link protection is that the NHOP tunnel secures an entire link. At any given moment, numerous TE LSPs with varying bandwidth requirements may traverse the protected link. Consequently, the total protected bandwidth can fluctuate significantly over time. Additionally, the backup tunnel does not allocate bandwidth. As a result, when protected tunnels rely on the backup tunnel, there may not be sufficient bandwidth available to handle all traffic, potentially leading to dropped traffic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (4)
> **Env Vars:** plr (7), lsp (6), nhop (5), mpls (4), frr (3)
> **Definitions:** is a  (1), means that (1), is an  (1)
> **CLI Commands:** node (1)
> **Speakers:** - [instructor] (1)

#### [MPLS TE Fast Reroute for link protection: Part 2](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-ii?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-ii?u=76281980&t=0)** - [Instructor] In our scenario, the primary tunnel is configured on R1 with the destination set to R4. We aim to protect the link between R2 and R3, making R2 the point of local repair or PLR. Consequently, we configured the backup tunnel on R2 with the destination set to R3. R3 is the MP or merge point. We configured the backup tunnel with an explicit path from the PLR to the next hop router. On the headend router of the protected TE tunnel, you specify that the tunnel can use a backup tunnel or be Fast Rerouted with the command, tunnel [mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) traffic-eng fast-reroute. Then specify the backup tunnel with the interface command, mpls traffic-eng backup-path on the protected link. Normally, when the headend router receives a path error message, the tunnel goes down until the [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) or TE labels to each path or LSP is rerouted. However, in the case of Fast Reroute or FRR, this does not happen. The path error message sent by the point of local repair or PLR indicates that the local repair is active. This status informs the headend router not to take the tunnel down while searching for another path for the TE LSP. If the tunnels were to go down, traffic would be lost, defeating the purpose of FRR.
>
> **[1:35](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-link-protection-part-ii?u=76281980&t=95)** Notice that the PLR maintains a Fast Route or FRR database, which includes details such as the incoming and outgoing labels used when the backup tunnel is active. When the backup tunnel's state is ready, it is signaled, but not yet used for FRR. In the active state, the backup tunnel reroutes multiple traffic engineering or TE tunnel label-switched paths or LSPs. The partial state indicates that the backup tunnel has not been signaled yet. Regular traffic should not use the backup tunnel. Therefore, the backup tunnel should not have autoroute announce or forwarding adjacency configured. In the next video, get ready to dive into the world of MPLS TE Fast Reroute Node Protection. We will explore how this powerful feature ensures seamless network resilience and keeps your data flowing smoothly. Don't miss it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (3), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (2)
> **Env Vars:** plr (4), frr (4), lsp (2), mpls (1)
> **CLI Commands:** node (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [MPLS TE Fast Reroute for node protection](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=0)** - [Instructor] [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md)-TE Fast Reroute or FRR for node protection is a feature designed to enhance the resilience of MPLS [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) or TE networks by providing repeat backup paths in the event of node failures. In MPLS-TE networks, traffic is often routed through specific nodes based on predefined paths or TLSPs. If a critical node along these paths fails, it can disrupt traffic. MPLS-TE Fast Reroute for node protection addresses this issue by pre-computing backup paths or bypass tunnels that can quickly reroute traffic around failed nodes, minimizing service disruption. With FRR for node protection, the goal is to safeguard an entire router rather than just a single link. This is achieved by establishing a next-next-hop or NNHOP backup tunnel, ensuring continuity of traffic flow in the event of a router failure. NNHOP backup tunnel is not a tunnel to the next hop router of the PLR, but to the router that is one hop behind the protected router. Therefore, in the case of node protection, the NNHOP router is the MP router. Look at this figure, which has one NNHOP backup tunnel protecting the router R3.
>
> **[1:35](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=95)** 1T tunnel goes from R1 to R5. The NNHOP backup tunnel goes from R2 or the PLR to router R4, the NNHOP and the MP. Node protection is somewhat complex due to one main issue. Packets are rerouted to the NNHOP LSR instead of the NHOP LSR. Consequently, the PLR must determine the correct label for the NNHOP backup tunnel to ensure packets arrive at the NNHOP router with the same top label as they would without the backup tunnel. To address this, the label is communicated via a label sub-object in an RRO object within a reserve message sent from the NNHOP router to the PLR router. When packets come in on the PLR on the rerouted LSP, the PLR must swap the incoming label with this label first and then push the label of the NNHOP backup tunnel. In our scenario, we need to set up tunnel one on router R1 with an explicit path to destination R5. Then enable Fast Reroute or FRR node protection. ip explicit-path name R1R2R3R4R5 next-address 10.1.2.2 next-address 10.2.3.3
>
> **[3:11](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=191)** next-address 10.3.4.4 next-address 10.4.5.5. interface Tunnel1 ip unnumbered Loopback0 tunnel destination 192.168.254.5 tunnel mode mpls traffic-eng tunnel mpls traffic-eng path-option 1 explicit name R1R2R3R4R5 tunnel mpls traffic-eng fast-reroute node-protect. After that, we configure a backup tunnel on router R2 to destination R4 with an explicit path that avoids R3. ip explicit-path name NO_R3 exclude-address 192.168.254.3 interface Tunnel100 ip unnumbered Loopback0 tunnel destination 192.168.254.4 tunnel mode mpls traffic-eng tunnel mpls traffic-eng path-option 1 explicit name NO_R3. Finally, we ensure that interface gi0/1 uses this protected tunnel: interface gi0/1 mpls traffic-eng backup-path tunnel 100. PLR holds a FRR database.
>
> **[4:47](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-fast-reroute-for-node-protection?u=76281980&t=287)** It shows, among other things, the incoming label and the outgoing label when the backup tunnel is used. When the state of the backup tunnel is ready, the tunnel is signaled, but is not used for FRR at this moment. To display the rsvp fast-reroute or FRR status, you can use the show ip rsvp fast-reroute command. This command provides details about the FRR status, backup tunnels, and protected interfaces. In the next video, get ready to dive into the fascinating world of Shared Risk Link Groups or SRLG and discover how they enhance the resilience of backup tunnels. You won't want to miss this exciting topic that takes network reliability to the next level.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (10), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/shared-risk-link-group-srlg?u=76281980&t=0)** - [Instructor] Welcome to this video on shared risk link groups or SRLG, and their role in enhancing backup tunnels for network resilience. We should use SRLG when a backup tunnel can potentially be routed across a link that is on the same fiber or conduit as the protected link. SRLG refers to groups of links that share a common risk of failure due to environmental factors or physical proximity. These risks could include natural disasters, construction activities, or even shared fiber cuts. In our scenario, the links between R2 and R3 and R2 and R6 are part of the same SRLG. This means if any issue affects one link, such as a physical disruption in the shared conduit, it will likely impact all other links in the same group. So when designing backup tunnels, it's crucial to avoid [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) through links that are part of the same SRLG. This strategy prevents a single point of failure from affecting both primary and backup paths simultaneously. Network engineers configure SRLG-aware backup tunnels by specifying alternate paths that do not traverse links within the same SRLG. To ensure robust network resilience, we begin by configuring
>
> **[1:35](https://www.linkedin.com/learning/mpls-traffic-engineering/shared-risk-link-group-srlg?u=76281980&t=95)** the SRLG command on the interface of links that share the same fiber or conduit. For each interface, use the command [mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) traffic, ENGSRLG number, where number is the group identifier of the SRLG. Next, configure tunnel 0 on router R1 with the destination set to R5. Enable fast remote with node protection to ensure seamless recovery in case of node failure. Then configure a backup tunnel that excludes R3. Finally, on R2, enable SRLG exclude globally to ensure that all relevant tunnels automatically avoid links within the same SRLG. We use mpls traffic, eng auto-tunnel backup srlg, exclude force or preferred command to indicate how to treat the SRLG concerning backup auto tunnels. The SRLG command has two keywords, force and preferred. The force keyword ensures that a backup TE tunnel is never routed over a link that has the same SRLG as the protected link, no matter what. If a link with another SRLG is not available to the backup tunnel, the backup tunnel is not created. The preferred keyword indicates that if a link with another SRLG is not found, first to route the backup tunnel across.
>
> **[3:09](https://www.linkedin.com/learning/mpls-traffic-engineering/shared-risk-link-group-srlg?u=76281980&t=189)** The backup tunnel is created across a link with the same SRLG. After configuring the SRLG and setting up our tunnels, it's essential to verify our MPLS [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) topology. We can use the show mpls traffic eng topology brief command to get a quick overview. We can also use the show mpls traffic eng topology srlg command to verify configured SRLG. In conclusion, shared risk link groups play a pivotal role in optimizing backup tunnel strategies. By carefully avoiding SRLG affected links, network operators can uphold reliable connectivity and mitigate risks associated with infrastructure failures.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (5), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (1)
> **Env Vars:** srlg (20), engsrlg (1), mpls (1)
> **Prerequisites:** configure (3)
> **CLI Commands:** node (2)
> **Definitions:** refers to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [MPLS TE Path Protection](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=0)** - [Instructor] In this video, we will explore the concept of path protection in [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) on T networks, its importance and how to implement it. MPLS-TE path protection is a feature that ensures network reliability by providing backup paths or protection paths for TE tunnels. It guards against link or node failures along primary path, minimizing downtime and maintaining service continuity. In this figure, tunnel zero passes from R1 to R2 to R3 to R4. The backup and PLST tunnel travels from R1 to R2 to R5, and finally R4. If the link between R2 and R3 fails, or if the R3 node itself fails, the backup tunnel can seamlessly replace the primary tunnel. Path protection is crucial for mission-critical applications where uninterrupted connectivity is essential. By preemptively establishing backup paths, MPRS TE path protection enhances network resilience and ensure high availability. To configure path protection for a TE tunnel in Cisco IOS, use the tunnel mpls traffic-eng path-option protect command. In this scenario, I configure tunnel 0 and R1 as a dynamic tunnel to destination R4,
>
> **[1:33](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=93)** and set up an explicit path from R1 to R2 to R5 to R4 as the backup explicit path. Now let's take a look at the output of the show mpls traffic eng tunnels command. This command provides detailed information about the MPLS traffic engineering tunnels configured on the router. One of the key pieces of information in this output is the path protection status. In this case, VC path protection one common link, one common node. This indicates that the primary and backup path share one common link and one common node. This is important for understanding the redundancy and potential points of failures in your network. Path protection option 1, type explicit R1R2R5R4. This means that the path protection is set to option 1, which typically refers to the use of a secondary path for protection. The type is explicit, indicating that a specific route is defined for the backup path, which goes from R1 to R2 to R5 to R4. Let's examine the output of the show mpls traffic-eng tunnels protection command. This command provides insights into the protection status and path of MPLS traffic engineering tunnels. Path protection, one common link, one common node. This indicates that the primary
>
> **[3:09](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-path-protection?u=76281980&t=189)** and backup label switch paths, or LSPs, share one common link and one common node. This information helps us understand the overlap between the primary and backup path and identify potential single point of failure. Primary LSP path, the primary LSP path is listed as follows, 10.1.2.2 10.2.3.3 10.3.4.4 192.168.254.4. This is the main route that the MPLS tunnel will use to send traffic. Protect LSP paths. The Protect LSP path is a specified as 10.1.2.2 10.2.5.5 10.4.5.4 192.168.254.4. This is the alternate route that the MPLS tunnel will switch to in case the primary path fails. By examining this information, we can ensure that our backup paths are properly configured and understand the level of redundancy in our network. This helps in maintaining high availability and reliability for our MPLS traffic engineering tunnels.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (10), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (4)
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
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=0)** - [Instructor] In this video, we are going to explore the intriguing process of default cost calculation on [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) TE tunnels with autoroute announce enabled. Join us as we unveil the secrets to optimizing your network [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) like never before. This scenario shows a network of five OSPF routers within a single MPLS TE enabled area. Initially, all links have an OSPF cost of one. A [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) or TE tunnel exists from R1 to R5. The cost of the TE tunnel is two, as shown by the command show mpls traffic-eng tunnels, which displays a path rate of two for this tunnel. Because the IP address 192.168.254.5/32 is directly connected to R5, the metric for this route in the routing table of R1 is three, as we can see with the show ip route command. Notice that the tunnel interface on R1 is the only interface for 192.168.254.5/32. The cost via the IP path R1, to R3, to R5 is also two, but this IP path is not installed in the routing table. The general rule is that for a prefix on the tail-end router,
>
> **[1:34](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=94)** only a tunnel that ends on that tail-end router is used to forward packets. No load balancing occurs between the TE tunnel and the IP path in this case. Let's change the dynamic tunnel to an explicit TE tunnel and configure it from R1 to R5 via R2, R4, and R3. The cost of the TE tunnel is four, as shown by the command show mpls traffic-eng tunnels, which displays a path weight of four for this tunnel. In the routing table of R1, the outgoing interface for 192.168.254.5/32 is again the tunnel interface.
>
> **[2:21](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=141)** This is because the cost of the TE tunnel is equal to the cost of the shortest IGP path, which is two. Therefore, the cost to reach 192.168.254.5/32 via the TE tunnel is two. In contrast, the cost to reach 192.168.254.5/32
>
> **[2:47](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=167)** directly connected to R5 is three. It means even if the TE tunnel is not on the lowest IGP cost path, all traffic that is distinct for prefixes connected to the tail-end router goes into the TE tunnel. Now let's change the cost of the link between R1 and R3 to three. Additionally, let's change the tunnel destination to R4 using the dynamic method. The tunnel will choose the path R1 to R2 to R4 because this path has a lower cost of two. However, there are now two paths to R5. One is the IP path R1 to R3 to R5 with the cost of four, and the other is tunnel zero with the total cost of two. R1 to R2 plus one, R2 to R4 plus one, R4 to R3 equal four. As you can see in R1's routing table for a prefix behind the tail-end router of a TE tunnel, an LSR can load balance traffic over both the TE tunnel and an IP path if the cost for both paths is equal. Keeping the OSPF cost of the link R1 to R3 as one, the TE tunnel is configured over the path R1 to R3 using an explicit path option. The cost of the tunnel is now three.
>
> **[4:22](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=262)** For 192.168.254.5/32, both the tunnel and the IP path have a metric of four, but only the tunnel is being used. The reason why the prefix 192.168.254.5/32 on R5
>
> **[4:44](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnels-default-cost-calculation?u=76281980&t=284)** does not load balance over the IP path R1 to R3 to R5, and the tunnel path zero is because the tail-end router of the tunnel intersects with the IP path. The CSPF or constrained shortest path first calculation on the head-end router recognizes this overlap and selects the TE tunnel as the sole next stop for that prefix.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (5), [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (4), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (1)
> **Env Vars:** ospf (3), mpls (2), igp (2), lsr (1), cspf (1)
> **Versions:** 192.168.254 (7)
> **Best Practices:** general rule (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Adjusting the cost calculation of TE tunnels](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=0)** - [Instructor] In this video, I'm going to talk about adjusting the cost calculation in [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) or TE with exciting insights. In MPLS Traffic Engineering or TE, adjusting the cost calculation is essential for influencing how traffic is routed through the network. The cost of a TE tunnel determines its preference compared to other possible paths. By tweaking this cost, network administrators can optimize traffic flow, improve performance, and ensure that the desired paths are used more frequently. You can change the metric in a direct, related, or absolute way with the tunnel mpls traffic-eng autoroute metric absolute or related value command. In our scenario, we have seven routers with OSPF as the IGP and the cost of each link is set to one. Let's configure Tunnel0 on R1 with the destination set to R3 using autoroute announce and the default cost setting. With the default cost for Tunnel0, the metric to reach 192.168.254.3 is three. This is because the metric is the sum of the Tunnel0 cost or two, and the cost of the Loopback0 interface on R3 or one. Consequently, we can observe the cost to other networks beyond the Tunnel0 tail end.
>
> **[1:38](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=98)** Let's shut down Tunnel0 and configure Tunnel1 with R4 as the destination using autoroute announce and the direct cost of three. We will use the tunnel mpls traffic-eng autoroute metric 3 command. With the direct cost for Tunnel1, the metric to reach 192.168.254.4 is four. This is because the metric is the sum of the Tunnel1 cost or three, and the cost of the Loopback0 interface on R4 or one. Consequently, we can observe the cost to other networks beyond the Tunnel1 tail end. Let's shut down Tunnel1 and configure Tunnel2 with R5 as the destination using autoroute announce and an absolute cost of one. We will use the tunnel mpls traffic-eng autoroute metric absolute 1 command. tunnel mpls traffic-eng autoroute metric absolute value sets a fixed metric for the TE tunnel. The specified value is applied uniformly to all prefixes reachable through the tunnel. No matter how far beyond the tail end router a prefix is, it will have this absolute cost. If you set the absolute metric to one, every prefix reachable via this tunnel will have a cost of one. Finally, let's shut down Tunnel2 and configure Tunnel3 with R6 as the destination
>
> **[3:14](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=194)** using autoroute announce and the relative cost of minus three. We will use the tunnel mpls traffic-eng autoroute metric relative minus three command. tunnel mpls traffic-eng autoroute metric relative value adjusts the tunnel's metric related to the lowest cost IGP path. The related value can range from minus 10 to 10, allowing for fine-tuning of the tunnel's cost. If the lowest IGP path cost to 192.168.254.5/32 is five
>
> **[3:52](https://www.linkedin.com/learning/mpls-traffic-engineering/adjusting-the-cost-calculation-of-te-tunnels?u=76281980&t=232)** and used a relative metric of minus three, the TE tunnel will have a cost of two, five minus three equal two. Use the absolute method when you want a consistent and predictable metric for all destinations reachable through the TE tunnel. Use the relative method when you want the tunnel's metric to adjust dynamically in relation to existing IGP cost, allowing for more granular control over [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) preferences.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (8), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (2), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** igp (4), mpls (2), ospf (1)
> **Prerequisites:** configure (4)
> **Versions:** 192.168.254 (3)
> **Speakers:** - [instructor] (1)

#### [MPLS TE load balancing](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-load-balancing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-load-balancing?u=76281980&t=0)** - [Instructor] In this video, I want to explain [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md)-TE load balancing. We will dive into how MPLS [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) can distribute traffic across multiple paths, enhancing network efficiency and reliability. When multiple TE tunnels have the same cost, traffic can be load-balanced across them. In this scenario, I configured two MPLS-TE tunnels on R1 with the destination set to R3. The first tunnel will take the path from R1 to R2, and then to R3, while the second tunnel will take the bottom path from R1 to R4, and then to R3. In the [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) table of R1, for the network 10.3.0.0/24, we have two interfaces, Tunnel0 and Tunnel1 because the cost of both tunnel is the same. Similarly for the network 192.168.254.3/32, the same condition exists, with both Tunnel0 and Tunnel1 being present due to equal costs. Traffic can also be load-balanced between the native IP path and TE tunnels if the cost of the routing is the same. In this scenario, I configured one TE tunnel from R1 to R3 with the tunnel path set from R1 to R2 to R3. For the link between R3 and R4
>
> **[1:33](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-load-balancing?u=76281980&t=93)** using the 10.3.4.0/24 network address, we have load balancing between the tunnel and IP paths. The load balancing of traffic is weighted proportionally to the bandwidth requirement of the TE tunnels. If you have one tunnel with 100 megabit per second and one with 20 megabit per second of reserve bandwidth, the load balancing ratio is five to one, or the first tunnel should get five times more traffic than the second tunnel. Multiple TE tunnels can be handy when the amount of bandwidth to be reserved between a pair of routers is more than the bandwidth capacity of the links. You can then just create multiple TE tunnels with each piece of the required bandwidth.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (3), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (2), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (1)
> **Env Vars:** mpls (3)
> **Versions:** 10.3.0 (1), 192.168.254 (1), 10.3.4 (1)
> **Speakers:** - [instructor] (1)

#### [MPLS TE reoptimization](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=0)** - [Instructor] In this video, we will delve into the concepts of [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) reoptimization, the need for reoptimization, and the steps involved in reoptimizing MPLS-TE tunnels to ensure optimal network performance. A TE tunnel might find itself routed along a path in the network that is no longer the most efficient or optimal. This can occur if a previously unavailable link becomes operational again, or if a link that initially lacked enough unreserved bandwidth when the tunnel was established, now has sufficient bandwidth due to changing bandwidth reservations. Reoptimization helps reroute the tunnel to a more optimal path within the network. Reoptimization help reroute the tunnel to a more optimal path within the network. To understand reoptimization, it is important to recognize the three triggers that can initiate the rerouting of a TE tunnel to a better path: periodic reoptimization, event-driven reoptimization, and manual reoptimization. In MPLS traffic engineering, or TE, period reoptimization is a crucial mechanism to ensure that TE tunnels continuously follow the most optimal path through the network. In Cisco IOS, the reoptimization of a TE tunnel occurs
>
> **[1:35](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=95)** with the frequency of one-hour wide default. This means that every hour the network evaluates the current path of TE tunnels and reroutes them if more optimal paths are available. This default behavior helps maintain optimal [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) without requiring manual intervention. You can customize this reoptimization frequency using the MPLS traffic-eng reoptimize timers frequency INTERVAL command. The default interval value is set to one hour or 3,600 seconds. If you set the interval to zero, period degree optimization is disabled globally on the router for all TE tunnels. This can be useful in scenarios where automatic reoptimization might disrupt network stability, or is not necessary. In addition to global setting, you can also control reoptimization on a per tunnel basis. If you want to prevent a specific TE tunnel from being reoptimized, you can use the lockdown keyboard with the path-option command, tunnel mpls traffic-eng path-option NUMBER dynamic lockdown In the context of MPLS-TE, event-driven reoptimization refers to the process of rerouting TE tunnels in response to a specific network events. Unlike periodic reoptimization, which occurs at regular intervals,
>
> **[3:10](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=190)** event-driven reoptimization is triggered by changes in the network, such as a previously unavailable link becoming operational. Network conditions can change unexpectedly and new paths may become available that are more optimal for TE tunnels. By reoptimizing TE tunnels in response to these events, we can ensure that network resources are used efficiently, improving overall network performance and reliability. By default, Cisco IOS does not trigger reoptimization when a link in the network becomes available for TE again either due to configuration changes or because its operational state has been restored. This means that even if a previously unavailable link becomes available, TE tunnels will not automatically reroute to use this new path. To enable reoptimization when a link becomes operational for MPLS-TE, you need to configure the mpls traffic-eng reoptimize events link-up command in Cisco IOS. This command ensures that whenever a link in the network transitions to an operational state, MPLS-TE will trigger a reoptimization process to potentially reroute TE tunnels through the newly available link. Manual reoptimization MPLS-TE refers to the process of actively triggering the rerouting of TE tunnels by an administrator.
>
> **[4:45](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-reoptimization?u=76281980&t=285)** Unlike periodic or event-driven reoptimization, manual reoptimization gives network administrators direct control over when and which TE tunnels are rerouted to ensure optimal paths. Network administrators might need to reoptimize TE tunnels immediately in response to specific conditions such as significant changes in network traffic patterns, the restoration of major links, or preparation for planned maintenance. Manual reoptimization provides the flexibility to address these situations promptly. To force the immediate reoptimization of all TE tunnels on the head end router, you use the mpls traffic-eng reoptimize command at the exit configuration mode. If you need to reoptimize only a specific TE tunnel, you can specify the tunnel number with the mpls traffic-eng reoptimize tunnel TUNNEL_NUMBER command.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (12), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (2), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** mpls (8), ios (3), interval (1), number (1), tunnel_number (1)
> **Definitions:** means that (2), is a  (1), refers to (1)
> **Analogies:** such as (2)
> **CLI Commands:** find (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [MPLS TE link manager](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-link-manager?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-link-manager?u=76281980&t=0)** - [Instructor] In this video, we will explore the role and functions of the link manager, a crucial component within the Cisco IOS TE code that ensures efficient operation of TE-enabled routers. The link manager performs essential housekeeping tasks on every TE-enabled router. Its primary responsibility is link admission control. This involves keeping track of the bandwidth reserved by RSVP on each link, and managing new bandwidth reservation requests for tunnel setups. By doing so, it ensures that the network can accommodate new tunnels without exceeding available resources. Another critical function of the link manager is determining which TE tunnel label switched path, or LSP, can preempt another. This is done by evaluating tunnel priorities. If a high-priority tunnel needs to be established, and resources are limited, the link manager can preempt a lower-priority tunnel to free up the necessary bandwidth. Additionally, the link manager triggers the interior gateway protocol, or IGP, to flood link state information when certain thresholds are crossed. This ensures that all routers in the network have up-to-date information about link states, which is crucial for making informed [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) decisions. It not only helps in maintaining
>
> **[1:36](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-link-manager?u=76281980&t=96)** optimal resource utilization, but also ensures that high-priority traffic is always given precedence. The show [mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) traffic-eng link-management command provides detailed insights into the current operations of the link manager. The command show MPLS traffic-eng link-management admission-control displays a status of admission control for MPLS TE links, including current and maximum bandwidth usage, and ensures resources are available before establishing new TE tunnels. This helps prevent oversubscription, and maintains network performance. The command show MPLS traffic-eng link-management advertisements displays information about the advertisements of MPLS TE link attributes, including available bandwidth and resource updates, ensuring optimal path computation and [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md). The command show mpls traffic-eng link-management bandwidth-allocation displays information about the allocation and reservation of bandwidth for MPLS TE links, helping to manage and optimize network resources effectively. The command show mpls traffic-eng
>
> **[3:09](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-link-manager?u=76281980&t=189)** link-management igp-neighbors displays information about IGP neighbors in the context of MPLS traffic engineering, including details about their link state and TE-related attributes, aiding in network topology awareness and path computation. The command show mpls traffic-eng link-management interface INT_NAME displays detailed MPLS TE information for a specified interface, including bandwidth allocation, link attributes, and admission control status, helping to manage and optimize the interface's role in traffic engineering. The command show mpls traffic-eng link-management [Statistics](../../Skills/Data%20Science/Statistics.md) displays statistical data related to MPLS TE link management, including metrics on bandwidth usage, tunnel setup success rates, and link utilization, helping to monitor and optimize network performance. The command show mpls traffic-eng link-management summary provides a concise overview of MPLS TE link management, including key metrics such as total bandwidth, allocated bandwidth, and the status of TE links, facilitating quick assessments of network resource usage and performance. For detailed troubleshooting,
>
> **[4:42](https://www.linkedin.com/learning/mpls-traffic-engineering/mpls-te-link-manager?u=76281980&t=282)** you can use the debug mpls traffic-eng link-management command. This debug command provides [Real-Time](../../Skills/Database%20Management/Real-Time.md) information and logs about MPLS TE link management processes, helping to identify and resolve issues related to link advertisements, bandwidth allocation, and neighbor relationships.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (17), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (3), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1), [Statistics](../../Skills/Data%20Science/Statistics.md) (1), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1)
> **Env Vars:** mpls (10), igp (2), ios (1), rsvp (1), lsp (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 7. MPLS TE and MPLS VPN

[↑ Back to Table of Contents](#table-of-contents)

#### [VRF-to-TE tunnel routing](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=0)** - [Instructor] Welcome to this session on VRF-to-TE Tunnel [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md). Today we will explore how VRFs interact with TE tunnels to optimize and manage network traffic effectively. VRF stands for virtual routing and forwarding. It allows multiple instances of a routing table to coexist within the same router simultaneously. VRFs are used to segregate traffic for different customers or applications, ensuring that data paths are isolated and secure. [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md), or TE tunnels, are used to direct traffic along predefined paths to optimize network resource usage and improve performance. TE tunnels provide better control over how traffic is routed through the network, avoiding congestion and ensuring optimal path utilization. VRF-to-TE tunnel routing combines the benefits of traffic isolation provided by VRFs within the precise traffic control of TE tunnels. This combination allows network administrators to manage traffic flow more effectively, ensuring high availability and performance. In our MPLS layer 3 VPN scenario, before implementing TE we have two VRFs, A and B. R5 in VRF-A has connectivity to R6 in the same VRF, and R7 in VRF-B has connectivity to R8 in the same VRF.
>
> **[1:39](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=99)** I configured two TE tunnels from R1 to R3, one using the top path and another using the bottom path. The goal is to direct traffic from VRF-A to tunnel zero, and traffic from VRF-B to tunnel one. To do this we must specify a different BGP next hop for both VRFs on the egress PE. We also must specify a static route on the ingress PE for each of those BGP next-hop addresses and point them to the respective TE tunnels. In the routing table of VRF-A on router one we can observe that for the destination 192.168.254.6/32,
>
> **[2:30](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=150)** the next stop is 192.168.254.10. Since we configured the static route for 192.168.254.10/32,
>
> **[2:45](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=165)** to use tunnel zero traffic destined for this address in VRF-A will be directed through TE tunnel zero. The traceroute from R5 to R6 loopback zero shows that the traffic passes through R1 then R2 then R3. This routing path confirms that the traffic is utilizing tunnel zero for the communication in VRF-A. In the routing table of VRF-B on R1 we can observe that for the destination 192.168.254.8/32,
>
> **[3:23](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=203)** the next stop is 192.168.254.20. Since we configured the static route for 192.168.254.20/32
>
> **[3:39](https://www.linkedin.com/learning/mpls-traffic-engineering/vrf-to-te-tunnel-routing?u=76281980&t=219)** to use tunnel one, traffic destined for this address in VRF-B will be directed through TE tunnel one. The traceroute from R7 to R8's loopback zero shows that the traffic passes through R1 then R4 then R3. This routing path confirms that the traffic is utilizing tunnel one for the communication in VRF-B. If we want symmetric traffic engineering we need to configure two MPLS TE tunnels, one from R1 to R3 and another from R3 to R1 for each VRF. This setup ensures balanced traffic engineering in both directions between the endpoints. This is possible, but consider [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md). Creating one pair of TE tunnels between two PE routers for every VRF is not very scalable. However, there may be rare cases where you might opt for this approach for tactical reasons. This is possible, but consider scalability. Creating one pair of TE tunnels between two PE routers for every VRF is not very scalable. However, there may be rare cases where you might opt for this approach for tactical reasons.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (8), [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (3), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (3), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (2)
> **Env Vars:** vrf (18), mpls (3), bgp (2), vpn (1)
> **Versions:** 192.168.254 (6)
> **Prerequisites:** configure (1), setup (1)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### [TE tunnel with a P router as a tailend router](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnel-with-p-router-as-tail-end-router?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnel-with-p-router-as-tail-end-router?u=76281980&t=0)** - [Instructor] In this video, I explain how to configure a TE tunnel with the P router as the tail-end router. When a P router is the tail-end router of the tunnel instead of the provider edge or P router, you need to ensure that LDP session exists between the head-end and tail-end router of the TE tunnel LSP. The reason is that the tail-end router sends an implicit null label to its upstream router. The result is that the packets arrive at the tail-end router with the VPN label on top, so the P router either drops the packet if the label is unknown, or it forwards the packet erroneously because it might have advertised the same label, but for a different LSP. The solution is to have an LDP session from the head-end router to the tail-end router of the TE tunnel. The simplest way to implement this is the targeted LDP session between PE and P router. The LDP targeted session must be explicitly configured on the tail-end router to the head-end router and [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) IP must be enabled on the tunnel interface on the head-end router. The result is the VPN packets have three labels. This figure shows the labels on top of a VPN packet that crosses the MPLS-VPN network with such a TE tunnel. The targeted LDP session advertises the LDP label
>
> **[1:38](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnel-with-p-router-as-tail-end-router?u=76281980&t=98)** from the tail-end router to the head-end router of the TE tunnel. The bottom label is still the VPN label, and the medial label is the label that is advertised across the targeted LDP session, and the top label is the TE tunnel LSP label. The label learned from the targeted LDP session is needed to get the packet at the tail-end router of the TE tunnel LSP with two labels so that it can still forwarded toward the egress PE correctly. At the tail-end router of the TE tunnel LSP, the packet arrives with two labels. The top label is the advertised label on the targeted LDP session for the BGP next hop IP address of the VPN V4 route. This label is then labeled swapped with the outgoing LDP label bound to the BGP next hop IP address. An LDP targeted session must be explicitly configured on the tail-end router to the head-end router, and MPLS IP must be enabled on the tunnel interface on the head-end router. Let's verify the trace route from R7 to R8's Loopback0. The result shows that the traffic is going through Tunnel0 and successfully reaching the destination. Notice the presence of three MPLS labels between R1 and R2. Another method is configuring two TE tunnels, one from the PE to the P router and another from the P router to the PE
>
> **[3:13](https://www.linkedin.com/learning/mpls-traffic-engineering/te-tunnel-with-p-router-as-tail-end-router?u=76281980&t=193)** in the reverse direction. Then enable LDP on both tunnels. Let's verify the trace route from R7 to R8's Loopback0. The result shows that the traffic is going through Tunnel0 and successfully reaching the destination, just like in the previous method. Again, notice the presence of three MPLS labels between R1 and R2.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (5)
> **Env Vars:** ldp (12), vpn (6), lsp (5), mpls (5), bgp (2)
> **Analogies:** just like (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [AToM tunnel selection](https://www.linkedin.com/learning/mpls-traffic-engineering/atom-tunnel-selection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/atom-tunnel-selection?u=76281980&t=0)** - [Instructor] In this session, we will delve into AToM or Any Transport over [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) tunnel selection. We will discuss what AToM is, why tunnel selection is important, and how to configure and verify it in a network. AToM or Any Transport over MPLS is a technology that allows Layer 2 frames to be transported over an MPLS network. This is particularly useful for extending Layer 2 services across geographically disperse sites. AToM tunnel selection is the process of choosing the appropriate MPLS-TE tunnel to transport Layer 2 frames across the network. For this to work, you need to set up an MPLS-TE tunnel from the PE to the PE router, and then specify that the AToM traffic should take the TE tunnel instead of the default shortest label paths. This figure shows an MPLS network for an AToM customer. Normally, all labeled traffic follows the top path because it is the shortest path through the MPLS backbone. If you want to send the AToM traffic through the bottom path, you can create two MPLS-TE tunnels between the two PE routers, one from R1 to R3 and another from R3 to R1 to carry the AToM traffic. This example shows how to configure tunnel selection. You need to configure the preferred-path
>
> **[1:32](https://www.linkedin.com/learning/mpls-traffic-engineering/atom-tunnel-selection?u=76281980&t=92)** under the pseudowire class and create a TE tunnel between the PE routers without using the Autoroute Announce command because that steers all the traffic onto the TE tunnel. To verify that the tunnel selection is working, look at the pseudowire with the command show mpls l2transport vc 100 detail. Tunnel selection uses fallback, meaning that if the preferred path becomes unavailable, the AToM traffic is sent across the shortest IGP path. You can, however, disable it by specifying the disable-fallback keyword on the preferred-path command. By following these steps, you can effectively configure AToM tunnel selection to optimize and manage your Layer 2 transport over an MPLS network. This ensures efficient path selection, load balancing, and redundancy, enhancing the overall performance and reliability of your network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (10)
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
> **[0:00](https://www.linkedin.com/learning/mpls-traffic-engineering/next-steps?u=76281980&t=0)** - [Instructor] Congratulations on completing the [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) course. You have now mastered the intricacies of optimizing network traffic with MPLS TE, enhancing efficiency and performance. Remember, your learning journey doesn't end here. Feel free to ask any questions or seek further clarifications through our Q&A. Your curiosity and engagement are key to mastering these advanced technologies. Next, I encourage you to explore segment [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) or SR, a revolutionary technology reshaping network architecture. SR simplifies and enhances [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) by embedding paths into packets, offering unparalleled flexibility and control for modern networking challenges. In a segment routing course, you will delve into SR-MPLS and SRv6, learning to build [agile](../../Skills/DevOps/Agile%20Development.md) programmable network suitable for [5G](../../Skills/Software%20Development/5G.md), [IoT](../../Glossary/Concept/IoT.md), and [Cloud Services](../../Skills/Cloud%20Computing/Cloud%20Services.md). Whether you are improving service delivery or exploring automation, SR will equip you with essential skills for advancing your networking career. Thank you for joining me on this journey through MPLS Traffic Engineering. I'm excited to see your continued growth and success in segment routing and beyond.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (4), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (3), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (2), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [Agile](../../Skills/DevOps/Agile%20Development.md) (1)
> **Env Vars:** mpls (4)
> **Speakers:** - [instructor] (1)


## Instructor

- [Arash Deljoo](../../Instructors/Network%20and%20System%20Administration/Arash%20Deljoo.md)

## Skills Covered

- Telecommunications
- Multiprotocol Label Switching (MPLS)
- Traffic Engineering
- Computer Network Operations
- Engineering

## Path Context

### In [Mastering Multiprotocol Label Switching (MPLS)](../../Paths/Network%20and%20System%20Administration/Learning%20Paths/Mastering%20Multiprotocol%20Label%20Switching%20(MPLS).md)
← [MPLS L3VPN Foundation and Implementation](MPLS%20L3VPN%20Foundation%20and%20Implementation.md) | **3 of 4** | [MPLS Segment Routing](MPLS%20Segment%20Routing.md) →

## Appears In

- [Mastering Multiprotocol Label Switching (MPLS)](../../Paths/Network%20and%20System%20Administration/Learning%20Paths/Mastering%20Multiprotocol%20Label%20Switching%20(MPLS).md)

## Related Courses

_Courses sharing skills:_

- [Mpls Foundations Getting Started With Mpls](Mpls%20Foundations%20Getting%20Started%20With%20Mpls.md) — Multiprotocol Label Switching (MPLS), Computer Network Operations
- [MPLS L3VPN Foundation and Implementation](MPLS%20L3VPN%20Foundation%20and%20Implementation.md) — Multiprotocol Label Switching (MPLS)

---

[↑ Back to top](#)