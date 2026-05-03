---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: mpls-segment-routing
url: "https://www.linkedin.com/learning/mpls-segment-routing"
duration_minutes: 190
duration: 3h 10m
level: Advanced
updated: 2/10/2025
learners: 13848
skills:
  - Routing
  - Network Administration
  - Computer Networking
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQGOkv5eYwF3Bg/learning-public-crop_675_1200/B4EZSzFUeTGYAc-/0/1738171304069?e=2147483647&amp;v=beta&amp;t=FaaXPsqWviCG5DLG0uwJ_9goW8jKp7hmzTuWgYz0XiE"
linkedin_topic: Network and System Administration
learning_paths:
  - '[[Mastering Multiprotocol Label Switching (MPLS)]]'
prev_courses:
  - '[[MPLS- Traffic Engineering]]'
path_nav: '[{"path":"Mastering Multiprotocol Label Switching (MPLS)","position":4,"total":4,"prev":"MPLS- Traffic Engineering","next":null}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - skill/routing
  - skill/network-administration
  - skill/computer-networking
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/MPLS%20Segment%20Routing.md)

![MPLS Segment Routing](https://media.licdn.com/dms/image/v2/D4E0DAQGOkv5eYwF3Bg/learning-public-crop_675_1200/B4EZSzFUeTGYAc-/0/1738171304069?e=2147483647&amp;v=beta&amp;t=FaaXPsqWviCG5DLG0uwJ_9goW8jKp7hmzTuWgYz0XiE)

# MPLS Segment Routing

> This comprehensive course is tailored for network engineers and IT professionals aiming to master segment routing (SR) over MPLS. Led by expert instructor Arash Deljoo, the course delves into the core principles and practical implementation techniques of segment routing—an innovative networking paradigm that simplifies operations, enhances scalability, and optimizes traffic flow.Discover how segme

> [LinkedIn Learning](https://www.linkedin.com/learning/mpls-segment-routing) | 3h 10m | Advanced | 14K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Supercharge your MPLS segment routing](#supercharge-your-mpls-segment-routing)
- [**1. Section 1: Why Segment Routing (SR)?**](#1-section-1-why-segment-routing-sr) (3 videos)
  - [IP forwarding](#ip-forwarding)
  - [MPLS forwarding](#mpls-forwarding)
  - [Segment routing (SR)](#segment-routing-sr)
- [**2. Segment Routing (SR) Foundation**](#2-segment-routing-sr-foundation) (6 videos)
  - [Understanding source routing and segment routing](#understanding-source-routing-and-segment-routing)
  - [Global and local segments, SRGB, and segment advertisements](#global-and-local-segments-srgb-and-segment-advertisements)
  - [Understanding IGP prefix segment](#understanding-igp-prefix-segment)
  - [Understanding IGP adjacency segment](#understanding-igp-adjacency-segment)
  - [SRGB advertisement and index advertisement](#srgb-advertisement-and-index-advertisement)
  - [Label switching database (LSD)](#label-switching-database-lsd)
- [**3. Segment Routing (SR) Configuration**](#3-segment-routing-sr-configuration) (4 videos)
  - [IS-IS segment routing configuration](#is-is-segment-routing-configuration)
  - [IS-IS segment routing verification](#is-is-segment-routing-verification)
  - [OSPF segment routing configuration](#ospf-segment-routing-configuration)
  - [OSPF segment routing verification](#ospf-segment-routing-verification)
- [**4. Segment Routing (SR) and LDP**](#4-segment-routing-sr-and-ldp) (6 videos)
  - [Segment routing co-existence with LDP](#segment-routing-co-existence-with-ldp)
  - [Simple migration from LDP to Segment routing](#simple-migration-from-ldp-to-segment-routing)
  - [LDP to Segment routing interworking](#ldp-to-segment-routing-interworking)
  - [Segment routing to LDP interworking](#segment-routing-to-ldp-interworking)
  - [Segment routing over LDP interworking](#segment-routing-over-ldp-interworking)
  - [LDP over segment routing interworking](#ldp-over-segment-routing-interworking)
- [**5. Topology-Independent Loop-Free Alternate (TI-LFA)**](#5-topology-independent-loop-free-alternate-ti-lfa) (7 videos)
  - [Classic loop free alternate (LFA)](#classic-loop-free-alternate-lfa)
  - [TI-LFA for link protection](#ti-lfa-for-link-protection)
  - [TI-LFA for node protection](#ti-lfa-for-node-protection)
  - [TI-LFA with SRLG](#ti-lfa-with-srlg)
  - [TI-LFA preference](#ti-lfa-preference)
  - [TI-LFA for LDP traffic](#ti-lfa-for-ldp-traffic)
  - [TI-LFA wrap-up](#ti-lfa-wrap-up)
- [**6. Segment Routing Traffic Engineering (SR-TE)**](#6-segment-routing-traffic-engineering-sr-te) (8 videos)
  - [Segment routing traffic engineering (SR-TE) overview](#segment-routing-traffic-engineering-sr-te-overview)
  - [SR-TE policy with an explicit path](#sr-te-policy-with-an-explicit-path)
  - [Using adjacency SID in SR-TE with explicit method](#using-adjacency-sid-in-sr-te-with-explicit-method)
  - [Understanding SR-TE policy binding SID](#understanding-sr-te-policy-binding-sid)
  - [Segment routing traffic engineering (SR-TE) dynamic path](#segment-routing-traffic-engineering-sr-te-dynamic-path)
  - [SR-TE dynamic path based on metric-type hop count](#sr-te-dynamic-path-based-on-metric-type-hop-count)
  - [SR-TE dynamic path based on metric-type IGP or TE](#sr-te-dynamic-path-based-on-metric-type-igp-or-te)
  - [Constraints in dynamic segment routing traffic engineering](#constraints-in-dynamic-segment-routing-traffic-engineering)
- [**7. SR-TE Traffic Steering**](#7-sr-te-traffic-steering) (3 videos)
  - [SR-TE automatic traffic steering with BGP](#sr-te-automatic-traffic-steering-with-bgp)
  - [SR-TE on demand nexthop (ODN)](#sr-te-on-demand-nexthop-odn)
  - [Multi-domain ODN with path computation element (PCE)](#multi-domain-odn-with-path-computation-element-pce)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Supercharge your MPLS segment routing](https://www.linkedin.com/learning/mpls-segment-routing/supercharge-your-mpls-segment-routing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/supercharge-your-mpls-segment-routing?u=76281980&t=0)** - [Arash] Have you ever wondered how modern networks achieve precise [[Traffic Engineering]], simplify operations, and scale seamlessly across domains? Welcome to the [[Multiprotocol Label Switching (MPLS)|MPLS]] segment [[Routing]] or SR course where we dive deep into one of the most advanced technologies in networking. In this course, you will learn SR fundamentals, understand how segment routing integrates with MPLS to enable efficient traffic forwarding and engineering, traffic engineering with SRT policies, discover how to optimize network paths based on constraints like bandwidth and latency, multi-domain solutions, solve real world challenges in large-scale complex network environments using SR. I am Arash Deljoo, a network engineer and educator with 15 years of experience in designing, managing, and teaching complex network systems. So, are you ready to take your networking knowledge to the next level and unlock new career opportunities? Let's dive into the exciting world of MPL segment routing and transform how you approach modern networks. Welcome aboard.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (3), [[Traffic Engineering]] (2), [[Multiprotocol Label Switching (MPLS)|Mpls]] (2)
> **Env Vars:** mpls (2), srt (1), mpl (1)
> **Speakers:** - [arash] (1)


### 1. Section 1: Why Segment Routing (SR)?

[↑ Back to Table of Contents](#table-of-contents)

#### [IP forwarding](https://www.linkedin.com/learning/mpls-segment-routing/ip-forwarding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/ip-forwarding?u=76281980&t=0)** - [Instructor] Welcome to today's lesson on IP forwarding. In the vast world of networking, IP forwarding is a fundamental process that ensures data packets reach their correct destination. Let's break down how this process works and why it's crucial for network communication. When a device like a computer or a smartphone sends data across a network, it breaks this data into smaller chunks called IP packets. Each packet contains crucial information, including the destination IP address, which tells the network where the data needs to go. As these IP packets travel through the network, they encounter various routers. Routers are like traffic managers for data, directing packets to their destinations. Let's see what happens when a router receives an IP packet. When a router receives an IP packet, its first job is to check the destination IP address inside the packet. The router then refers to its [[Routing]] table, a dynamic database that stores information about how to reach various network destinations. The routing table contains a list of possible destination networks and the best path to reach them. The router looks up the destination IP address of the incoming packet in this table. Based on this lookup, the router determines the best next hop
>
> **[1:34](https://www.linkedin.com/learning/mpls-segment-routing/ip-forwarding?u=76281980&t=94)** or the next router to send the packet to on its journey toward the destination. The router then forwards the packet to the next hop router as it's specified in the routing table. This process repeats at each router along the path until the packet reach its final destination. Upon reaching the destination device, the IP packet is reassembled into its original form, and the data is delivered to the intended application or service. To summarize, IP forwarding is a critical function in networking where routers use the routing tables to determine the best path for IP packet based on their destination addresses. This ensures that data travels efficiently and accurately across complex networks. However, traditional IP forwarding does come with its challenges, particularly when it comes to [[Traffic Engineering]]. In IP networks, optimizing traffic paths and managing congestion can be quite complex. Each router along the path must individually process the IP header and consult its routing table, which can be cumbersome and slow. In contrast, [[Multiprotocol Label Switching (MPLS)|MPLS]] or [[Multiprotocol Label Switching (MPLS)|multiprotocol label switching]], simplifies traffic engineering. With MPLS, the head end router specifies the entire path for a packet and assigns a label to it.
>
> **[3:09](https://www.linkedin.com/learning/mpls-segment-routing/ip-forwarding?u=76281980&t=189)** Subsequent routers only need to read the label and forward the packet based on the predefined path. This not only speeds up the forwarding process, but also makes traffic engineering more manageable and efficient. This approach significantly reduces the complexity of managing traffic flows and improves overall network performance. In our next video, we will dive deeper into MPLS forwarding, exploring how it enhances network performance, and simplifies traffic engineering compared to traditional IP forwarding. Stay tuned to discover how MPLS can transform your network management.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (5), [[Traffic Engineering]] (4), [[Multiprotocol Label Switching (MPLS)|Mpls]] (4), [[Multiprotocol Label Switching (MPLS)|Multiprotocol label switching]] (1)
> **Env Vars:** mpls (4)
> **Definitions:** is a  (2), refers to (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### [MPLS forwarding](https://www.linkedin.com/learning/mpls-segment-routing/mpls-forwarding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/mpls-forwarding?u=76281980&t=0)** - [Instructor] Today, we will dive into the concept of [[Multiprotocol Label Switching (MPLS)|MPLS]] forwarding, a key technique used to optimize packet [[Routing]] in networks. We will explore how MPLS works, its benefits, and why it is a crucial component of modern networking. Let's get started. MPLS stands for [[Multiprotocol Label Switching (MPLS)|Multiprotocol Label Switching]]. It's a technique used to forward packets through a network based on labels rather than traditional IP routing methods. In MPLS, each packet is assigned a label that enters the MPLS network. This label is a short fixed-length identifier that represents the package forwarding path or forwarding EQ valence class or FEC. These labels are used by label switch routers or LSRs to make forwarding decisions. Instead of looking up the package destination IP address, LSRs look at the IP to determine the packet's next hop. Here is a step-by-step look at how MPLS forwarding operates. Label Assignment. When a packet enters the MPLS network, an ingress router called the Label Edge Router or LER assigns a label to the packet. This label encodes the packets forwarding path. Label Forwarding. As the packet travels through the MPLS network, intermediate routers known as Label Switch Routers or LSRs use the label to forward the packet.
>
> **[1:35](https://www.linkedin.com/learning/mpls-segment-routing/mpls-forwarding?u=76281980&t=95)** Each LSR swaps the current label with a new label that directs the packet to the next hop. When the packet reach the ingress router, and another LER, the label is removed, and the packet is forwarded based on traditional IP routing or another forwarding method to its final destination. MPLS forwarding offers several advantages over traditional IP routing. Efficiency. MPLS reduces the complexity of packet forwarding by using fixed-lengths labels instead of variable-length IP address. This speeds up forwarding process as routers only need to perform simple label swaps. [[Traffic Engineering]]. MPLS allows for advanced traffic engineering through explicit path setup. Network operators can define specific Label Switch Paths or LSPs to optimize traffic flow and avoid congestion. [[Scalability]]. MPLS supports large-scale networks with complex routing needs while maintaining performance. The use of labels simplifies the management of routing tables and enhances network scalability. MPLS can prioritize traffic and provide different levels of service for different types of traffic, ensuring that critical applications receive the necessary bandwidth and minimal delay. While MPLS forwarding is effective in many ways, it does have some inefficiencies and limitations.
>
> **[3:10](https://www.linkedin.com/learning/mpls-segment-routing/mpls-forwarding?u=76281980&t=190)** MPLS networks can be complex to configure and manage. This complexity arises from the need to maintain label distribution protocols, like LDP or Label Distribution Protocol or RSVP or Resource Reservation Protocol, for setting up and managing Label Switch Paths or LSPs. MPLS requires the maintenance of label information and routing tables at each router, which can lead to a scalability issues. As the network grows, the overhead associated with managing these labels and maintaining state information increases. MPLS paths are typically static and need to be manually configured. This lack of dynamism means that the network may not adapt quickly to change in traffic patterns or network failures, potentially leading to inefficiencies. The need to configure and manage multiple protocols and maintain detailed label information adds operational overhead. This can increase the complexity and cost of network management. Segment Routing or SR was designed to address these inefficiencies SR simplifies network operations by using the different approach to packet forwarding. Instead of relying on complex Label Distribution Protocols, Segment Routing encodes the forwarding path as a series of instructions or segments embedded directly in the packet header. This approach addresses the shortcomings of MPLS
>
> **[4:45](https://www.linkedin.com/learning/mpls-segment-routing/mpls-forwarding?u=76281980&t=285)** in several key ways. In our next video, we will take a closer look at Segment Routing, exploring its key features, benefits, and real-world applications, and stay tuned to learn how Segment Routing can transform network operations and improve performance.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (18), [[Routing]] (11), [[Scalability]] (3), [[Traffic Engineering]] (2), [[Multiprotocol Label Switching (MPLS)|Multiprotocol label switching]] (1)
> **Env Vars:** mpls (18), ler (2), fec (1), lsr (1), ldp (1)
> **Definitions:** is a  (3), stands for (1), known as (1)
> **Prerequisites:** configure (2), setup (1)
> **CLI Commands:** make (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### [Segment routing (SR)](https://www.linkedin.com/learning/mpls-segment-routing/segment-routing-sr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/segment-routing-sr?u=76281980&t=0)** - [Instructor] In today's session, we will explore segment [[Routing]] or SR, a modern approach to network routing and [[Traffic Engineering]]. We will compare the benefits of SR with traditional [[Multiprotocol Label Switching (MPLS)|MPLS]] traffic engineering and introduce the two types of SR implementations. Let's get started. Segment routing simplifies network operations by encoding path information directly into the packet header. This innovative approach eliminates the need for complex label distribution protocols, streamlining traffic management and improving network efficiency. Let's compare the benefits of segment routing with traditional MPLS traffic engineering. Simplified network management. MPLS traffic engineering requires separate protocols like LDP and RSVP for label distribution and packet hop. Segment routing encodes path information in the packet header, eliminating the need for additional protocols and simplifying management. Enhanced [[Scalability]]. MPLS traffic engineering needs to maintain label states and distribution information in each router, leading to scalability challenges. Segment routing reduces the amount of state information needed, enhancing scalability and reducing overhead. Dynamic path management. MPLS traffic engineering paths are often static and manually configured, making it hard to adapt to real time change.
>
> **[1:34](https://www.linkedin.com/learning/mpls-segment-routing/segment-routing-sr?u=76281980&t=94)** Segment routing supports dynamic and programmable paths based on real time network conditions, improving flexibility and responsiveness. There are two primary types of segment routing implementations. Segment routing over MPLS or SR-MPLS and segment routing over IPv6, SRv6. Segment routing over MPLS or SR-MPLS utilizes MPLS labels to encode segments, simplifies integration with existing MPLS infrastructure. Segment routing over IPv6 or SRv6 encode segments as IPv6 addresses, leverage the IPv6 header for segment information, making it suitable for IPv6 networks. In this course, we will focus on segment routing over MPLS or SR-MPLS. You will learn how SR-MPLS leverages MPLS labels for efficient path encoding and traffic engineering. Future courses will cover segment routing over IPv6 or SRv6, exploring its unique benefits and applications in modern IPv6 networks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (15), [[Routing]] (14), [[Traffic Engineering]] (7), [[Scalability]] (3)
> **Env Vars:** mpls (15), ldp (1), rsvp (1)
> **Speakers:** - [instructor] (1)


### 2. Segment Routing (SR) Foundation

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding source routing and segment routing](https://www.linkedin.com/learning/mpls-segment-routing/understanding-source-routing-and-segment-routing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/understanding-source-routing-and-segment-routing?u=76281980&t=0)** - [Instructor] In this session, we will learn about source [[Routing]] and segment routing. We will explore the fundamentals of these routing techniques, their segment types, and how they operate within a network. Let's get started. Source routing is a routing technique where the center of a packet specifies the route that the package should take through the network. Instead of relying on each router along the path to determine the next stop, the entire road is predefined by the source. This metric provides greater control over the path, enabling efficient traffic management and optimization. However, it can also increase complexity since the source must be aware of the entire network topology. Segment routing or SR builds on the principles of source routing, but introduces segments to simplify and enhance routing. In segment routing, the path is broken down into a series of segments, which are instructions encoded within the packet header. Each segment represents either a topological instruction, like a node or a link, or a service-based instruction. This approach reduces the need for complex signaling protocols and simplifies network operations. Segment routing defines various types of segments to direct traffic through a network efficiently. Let's focus on the two most frequently used types, prefix segment, adjacency segment.
>
> **[1:35](https://www.linkedin.com/learning/mpls-segment-routing/understanding-source-routing-and-segment-routing?u=76281980&t=95)** A prefix segment, also known as a node segment, represents a specific destination prefix or node within the network. It's globally unique within the network domain and direct package to a particular endpoint. When a packet encounters a prefix segment, it's routed to the corresponding node associated with the prefix. This segment is essential for directing traffic to known locations, such as servers, data centers, or any specific device within the network. Prefix segments are fundamental to segment routing as they simplify routing decisions. Each packet carries its destination as part of the segment list, allowing routers to forward the packet based on the encoded segments without needing additional routing information. An adjacency segment is a strict forwarding instruction that creates a single hop tunnel between two nodes. It represents a specific link or adjacency between two nodes in the network. When a packet encounters an adjacency segment, it's directed to traverse the specified link associated with an interior gateway protocol or IGP adjacency, regardless of the link's cost. This means that the packet will always follow the predefined path through that specific link, providing precise control over the packet's route. Adjacency segments are particularly useful for [[Traffic Engineering]], allowing network operators
>
> **[3:08](https://www.linkedin.com/learning/mpls-segment-routing/understanding-source-routing-and-segment-routing?u=76281980&t=188)** to manage and optimize the flow of traffic through a specific path. This is crucial in scenarios where certain links need to be used for load balancing or to ensure quality of service. Segment routing can operate over different forwarding planes, primarily [[Multiprotocol Label Switching (MPLS)|MPLS]], [[Multiprotocol Label Switching (MPLS)|multiprotocol label switching]], and IPv6. Each forwarding plane type has its own advantage and use cases. In the MPLS forarding planes, segments are represented as labels, while in the IPv6 forwarding plane, segments are represented as IPv6 addresses. This flexibility allows segment routing to be implemented in various network environments, leveraging existing infrastructure. In conclusion, source routing and segment routing are powerful techniques for managing network traffic. By understanding the different segment types, prefix, node, and adjacency segment, and their forwarding planes, network operators can achieve greater control, flexibility, and efficiency.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (17), [[Multiprotocol Label Switching (MPLS)|Mpls]] (2), [[Traffic Engineering]] (1), [[Multiprotocol Label Switching (MPLS)|Multiprotocol label switching]] (1)
> **CLI Commands:** node (5)
> **Definitions:** is a  (2), known as (1), means that (1)
> **Env Vars:** mpls (2), igp (1)
> **Analogies:** such as (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Global and local segments, SRGB, and segment advertisements](https://www.linkedin.com/learning/mpls-segment-routing/global-and-local-segments-srgb-and-segment-advertisements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/global-and-local-segments-srgb-and-segment-advertisements?u=76281980&t=0)** - [Instructor] In this session, we will cover the key concepts of global segment, local segment, segment [[Routing]] global block or SRGB, default SRGB, prefix segment advertisement, and adjacency segment advertisement. Global segment. In segment routing, a global segment is an identifier that is globally significant within the entire segment routing domain. This means that the value assigned to a global segment is unique and can be understood by all routers in the network. Typically, global segments are used to represent network-wide resources, such as a specific node or a particular path. Local segment. On the other hand, a local segment is an identifier that is only significant to the local router. This means that the value of a local segment is unique only within the context of the router that assigns it. Local segments are typically used for adjacency segments, which represents the link between routers. These segments are used to direct traffic over a specific link rather than through a specific node. The segment routing global block, or SRGB, is a range of segment identifiers, or SIDs, reserved for global segments. Each router in a segment routing domain is configured with the same SRGB, ensuring that the global segments have consistent meaning across the entire network. For example, if the SRGB is defined as 16000 to 23999,
>
> **[1:40](https://www.linkedin.com/learning/mpls-segment-routing/global-and-local-segments-srgb-and-segment-advertisements?u=76281980&t=100)** then any SID within this range will be interpreted consistently by all routers in the domain. The default SRGB's predefined range of SIDs that routers use if no custom SRGB is specified. The default range ensures basic interoperability and simplifies initial configuration. Typically, the default SRGB might be something like 16000 to 23999. Using the default SRGB allows for easier deployment of segment routing in a network without the need for extensive configuration. Prefix segment advertisement is the process by which a router advertises its prefix segment, also known as node SIDs, to other routers in the network. This advertisement is typically done using an IGP, such as OSPF or IS-IS. The node SID is a type of global segment that uniquely identifies a router. By advertising its prefix segment, a router enables other routers to direct traffic towards it using the node SID. Adjacency segment advertisement is the process by which a router advertises its adjacency segments, which represents its direct link to neighboring routers. These segments are local to the router and are used to specify a particular outgoing link. For instance, if a router has two links to two different neighbors,
>
> **[3:13](https://www.linkedin.com/learning/mpls-segment-routing/global-and-local-segments-srgb-and-segment-advertisements?u=76281980&t=193)** it can advertise two different adjacency segments, allowing for fine-grained control over traffic paths. Understanding these concepts is crucial for implementing and managing a segment routing-enabled network. In future videos, we will dive into segment routing configuration and gain a better understanding of these concepts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (8)
> **Env Vars:** srgb (9), sid (3), igp (1), ospf (1)
> **Definitions:** is an  (2), means that (2), is a  (2), defined as (1), known as (1)
> **CLI Commands:** node (5)
> **Analogies:** such as (2), for example (1), for instance (1)
> **Speakers:** - [instructor] (1)

#### [Understanding IGP prefix segment](https://www.linkedin.com/learning/mpls-segment-routing/understanding-igp-prefix-segment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/understanding-igp-prefix-segment?u=76281980&t=0)** - [Instructor] An IGP or Interior Gateway Protocol prefix segment is a crucial concept in segment [[Routing]], enabling efficient and scalable routing within an autonomous system. The IGP prefix segment ensures that packet follow the shortest path to reach the destination IGP prefix within the network. This path computation is ECMP or equal cost multi path avail, meaning it can handle multiple paths of equal cost to distribute traffic efficiently, enhancing load balancing and redundancy. IGP prefix segments are considered global segments. This means the segment identifier, or SID is consistent and unique across the entire network domain. It helps in creating a standardized routing mechanism that simplifies network operations and improve interoperability. The SID for an IGP prefix segment is calculated using a simple formula, label is equal to 16,000 plus index. The base label value is 16,000, and the index is a unique identifier for the specific IGP prefix. This approach ensures that each IGP prefix has a distinct SID that can be easily recognized and processed by network devices. The index associated with each IGP prefix is advertised throughout the network using IGP protocols like ISIS or Intermediate System to Intermediate System,
>
> **[1:35](https://www.linkedin.com/learning/mpls-segment-routing/understanding-igp-prefix-segment?u=76281980&t=95)** or OSPF, Open Shortest Path First. This advertisement allows all routers in the network to understand the segment and road traffic accordingly. Let's consider an example to illustrate how an IGP prefix segment works in a network. Router A source has an IGP prefix 10.0.1.0/24 with an index of five. Router B has an IGP prefix 10.0.2.0/24 with an index of 10. Router C has an IGP prefix 10.0.3.0/24 with an index of 15.
>
> **[2:18](https://www.linkedin.com/learning/mpls-segment-routing/understanding-igp-prefix-segment?u=76281980&t=138)** Router D has an IGP prefix 10.0.4.0/24 with an index of 20. Router E destination has an IGP prefix 10.0.5.0/24 with an index of 25. For 10.0.1.0/24 on router A, label is equal to 16,000 plus five equal 16,005. For 10.0.2.0/24 on router B, label is equal to 16,000 plus 10 equal 16,010. For 10.0.3.0/24 on router C, label is equal to 16,000 plus 15 equal 16,015. For 10.0.4.0/24 on router D, label is equal to 16,000 plus 20 equal 16,020. For 10.0.5.0/24 on router E, label is equal to 16,000 plus 25 equal 16,025. Suppose a packet originates at router A and needs to traverse through router B, C, and D before reaching router E. Router A will stack multiple SIDs in the packet to specify this path. SID stack. Router A adds the following SIDs to the packet. Top of a stack 16,025 or router E, next 6,020 router D,
>
> **[3:58](https://www.linkedin.com/learning/mpls-segment-routing/understanding-igp-prefix-segment?u=76281980&t=238)** next 16,015 or router C, bottom of the stack 16,010 or router B. Path traverse sub. Router A forwards the packet to router B using SID 16,010. Router B pops the top SID and finds the next SID 16,015. Then forwards a packet to router C. Router C pops the top SID, and finds the next SID 16,020. Then forwards the packet to router D, router D pops the top SID, and finds the next SID 16,025. Then forwards the packet to router E. Router E receives the packet and directs it to the 10.0.5.0/24 network. In this example, router A or source adds the SID stack to the packet. Router B, C, and D pop the top SID, and forwards the packet based on the next SID in the stack. Router E, or destination receives the packet and processes it. This example demonstrates how the SID stack effectively guides the packet through a specified path in the network, ensuring it reached its intended destination.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (3)
> **Env Vars:** igp (15), sid (15), ecmp (1), isis (1), ospf (1)
> **Versions:** 10.0.5 (3), 10.0.1 (2), 10.0.2 (2), 10.0.3 (2), 10.0.4 (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Understanding IGP adjacency segment](https://www.linkedin.com/learning/mpls-segment-routing/understanding-igp-adjacency-segment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/understanding-igp-adjacency-segment?u=76281980&t=0)** - [Instructor] In this session, we will cover the concept of IGP Adjacency Segments, their properties, and how they are used in a network. In segment [[Routing]], an IGP adjacency segment refers to a specific type of segment used to direct packets between directly connected routers. This segment is crucial in defining the exact path that packets should take through the network by leveraging existing IGP protocols like IS-IS or OSPF. The IGP adjacency segment is only meaningful to the local router and its directly connected neighbor. Consider a network topology with five routers, A, B, C, D, and E connected in a specific manner. The goal is to understand how IGP adjacency segments facilitate packet forwarding across these routers. Router A connects to router B and router C. Router B connects to router A and router D. Router C connects to router A and router D. Router D connects to router B and router C, and also router E with two links. Each router advertises its adjacency segments and labels are assigned to these segments. Router A, adjacency to router B, label 24001. Adjacency to router C, label 24002. Router B, adjacency to router A, label 25001.
>
> **[1:35](https://www.linkedin.com/learning/mpls-segment-routing/understanding-igp-adjacency-segment?u=76281980&t=95)** Adjacency to router, D label 24003. Router C, adjacency to router A, label 26001. Adjacency to router D, label 24004. Router D, adjacency to router B, label 25003. Adjacency to router C, label 26004. Adjacency 1 to router E, label 24005 Adjacency 2 to router E, label 25002. Router E, adjacency 1 to router D, label 25005. Adjacency 2 to router D, label 25006. Each router uses IS-IS or OSPF to advertise these adjacency segments. We want to reach router E from router A using the top link between router D and router E. The segment routing SID track will guide the packets through the network. The packet needs to follow these steps. Router A will send the traffic to router B with the SID stack from bottom to top, 16005, 24005, 16004, 16002. Router B will pop the SID 16002 and then forward it to router D with SID stack from bottom to top, 16005, 24005, 16004. Router D will pop the SID 16004,
>
> **[3:11](https://www.linkedin.com/learning/mpls-segment-routing/understanding-igp-adjacency-segment?u=76281980&t=191)** and because the next SID is 24005, it will first pop it and send it from the top path to router E with SID 16005. Router E will pop the SID and send it to the destination network. Characteristics of IGP adjacency segments. Local relevance: This segment is only relevant to the local router and its directly connected neighbor. Path definition: Allows for exact control over packet roads by specifying specific adjacencies the packet must follow. Versatility: Supports flexible routing methods such as [[Traffic Engineering]] by determining specific hubs along the route.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (3), [[Traffic Engineering]] (1)
> **Env Vars:** sid (8), igp (6), ospf (2)
> **Definitions:** refers to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [SRGB advertisement and index advertisement](https://www.linkedin.com/learning/mpls-segment-routing/srgb-advertisement-and-index-advertisement?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/srgb-advertisement-and-index-advertisement?u=76281980&t=0)** - [Instructor] In this session, we will explore the concepts of SRGB advertisement and index advertisement, which are crucial for the efficient operation of segment [[Routing]] networks. First, let's learn about SRGB advertisements. SRGB stands for segment routing global block. It's a range of labels reserved for segment routing global segments. Each router advertises its SRGB range to ensure interoperability and correct label interpretation across the network. For example, a router might advertise an SRGB range of 16,000 to 23,999. Advertisement ensures that all nodes in the network understand which label range are used for global segments. Interior gateway protocols, or IGPs, like IS-IS and OSPF are used to advertise SRGBs. The SRGB information is included in the link state advertisement, or LSAs, or link state protocol data units, or LSPs. IS-IS and OSPF have been extended to carry SRGB information. Now, let's learn about index advertisement in segment routing. A prefix segment identifier, or prefix SID, is advertised as a domain-wide unique index. The index is a relative number that when added to the SRGB base, determines the exact label.
>
> **[1:35](https://www.linkedin.com/learning/mpls-segment-routing/srgb-advertisement-and-index-advertisement?u=76281980&t=95)** Assume a network where all nodes have SRGB 16,000 to 23,999.
>
> **[1:44](https://www.linkedin.com/learning/mpls-segment-routing/srgb-advertisement-and-index-advertisement?u=76281980&t=104)** R5 advertises prefix 5.5.5.5/32 with prefix SID index five.
>
> **[1:53](https://www.linkedin.com/learning/mpls-segment-routing/srgb-advertisement-and-index-advertisement?u=76281980&t=113)** Other nodes calculate label 16,005 for prefix 5.5.5.5/32.
>
> **[2:01](https://www.linkedin.com/learning/mpls-segment-routing/srgb-advertisement-and-index-advertisement?u=76281980&t=121)** Base on no these advertise SRGB base of 16,000 and index of five. Label is equal to SRGB base plus prefix SID index. If the router's SRGB base is 16,000, the label for this prefix is calculated as 16,000 plus five is equal to 16,005. It is highly recommended to use a uniform SRGB across all nodes in a segment routing domain. This uniformity simplifies network operations and management. What happens when routers use different SRGB ranges and how segment routing handles such scenarios? We'll illustrate this with a practical example involving five routers. We have five routers: R1, R2, R3, R4, and R5. Routers R1, R2, R4, and R5 use the default SRGB range, 16,000 to 23,999.
>
> **[3:10](https://www.linkedin.com/learning/mpls-segment-routing/srgb-advertisement-and-index-advertisement?u=76281980&t=190)** Router R3 uses a different SRGB range, 50,000 to 58,000. The destination network, 5.5.5.5/32 is connected to R5. R1, R2, R4, and R5 advertise their SRGB as 16,000 to 23,999. R3 advertises its SRGB as 50,000 to 58,000. Each router advertises a prefix SID index for its connected prefixes. For example, R5 advertises prefix 5.5.5.5/32 with the prefix SID index of five. Each router calculates the label for the prefix 5.5.5.5/32 based on the advertised index. For example, R1 calculates the label as 16,000 or base plus five, or index is equal to 16,005. Each router advertises the calculated label for the prefix 5.5.5.5/32 using IGP extensions. R2 advertises to R1 that it should use label 16,005 to reach 5.5.5.5/32. R3 advertises to R2 that it should use label 50,005. Similarly, R4 advertises to R3 to use label 16,005.
>
> **[4:47](https://www.linkedin.com/learning/mpls-segment-routing/srgb-advertisement-and-index-advertisement?u=76281980&t=287)** And R5 advertises to R4 to use label 16,005. Each router uses the receive label advertisements to forward packets correctly. About packet flow, R1 forwards the packet to R2 with label 16,005. R2 receives the packet with label 16,005. R2 maps this label to its own LFIB and calculates the corresponding label as 50,005. R2 for the packet to R3 with label 50,005. R3 receives the packet with label 50,005. R3 maps this label to its own LFIB and calculates the corresponding label as 16,005. R3 forwards the packet to R4 with label 16,005. R4 receives the packet with label 16,005. R4 maps this label to its own LFIB and calculates the corresponding label as 16,005. R4 forwards the packet to R5 with label 16,005. R5 receives the packet with label 16,005. R5 recognizes the label and forwards the packet to the destination 5.5.5.5/32. Different SRGB ranges can coexist in a segment routing network. In practice, having different SRGB range does not provide additional benefits
>
> **[6:21](https://www.linkedin.com/learning/mpls-segment-routing/srgb-advertisement-and-index-advertisement?u=76281980&t=381)** as the network can function effectively with a uniform SRGB. In future sessions, we will explore the configuration of segment routing in more detail. We will also experience configuring and managing different SRGB range. Practical exercises will help solidify your understanding of these concepts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (8)
> **Env Vars:** srgb (22), sid (5), lfib (3), ospf (2), igp (1)
> **Versions:** 5.5.5 (8)
> **Analogies:** for example (3)
> **Definitions:** stands for (1), is a  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Label switching database (LSD)](https://www.linkedin.com/learning/mpls-segment-routing/label-switching-database-lsd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/label-switching-database-lsd?u=76281980&t=0)** - [Instructor] Welcome to this video on the label switching database or LSD and its role in segment [[Routing]]. Let's dive into how LSD manages label allocations and preserves the segment routing global block or SRGB label range. Most [[Multiprotocol Label Switching (MPLS)|MPLS]] applications use label dynamically allocated by LSD. These applications include LDP, RSVP, L2VPN, BGP, LU and VPN, IS-IS adjacency SID, OSPF adjacency SID, TE binding SID. LSD preserves the default SRGB label range 16,000 to 23,999.
>
> **[0:45](https://www.linkedin.com/learning/mpls-segment-routing/label-switching-database-lsd?u=76281980&t=45)** This preservation occurs in any segment routing capable software release even if segment routing is not enabled. No labels are allocated from that preserved range. The preservation of the default SRGB label range ensures that future segment routing activation is possible without a reboot. An example sequence of segment routing activation. One, no segment routing enabled. No SRGB allocated. LSD preserves default SRGB label range. Dynamic labels are allocated by various MPLS applications. Two, some time later, segment routing IS-IS is enabled with default SRGB. SRGB label ranges free or preserved start using segment routing without reboot. However, if the configured MPLS label range includes this default range, the default preservation is disabled. For example, if the MPLS label range is configured as 16,000 to 1,048,575, the default SRGB label range preservation will be disabled. LSD allocate dynamic labels starting from 24,000. If the configured MPLS label range includes the default SRGB label range, the preservation of the default range is disabled. Upon boot, LSD does not accept any dynamic label allocation before IS-IS or OSPF have registered with LSD.
>
> **[2:22](https://www.linkedin.com/learning/mpls-segment-routing/label-switching-database-lsd?u=76281980&t=142)** Once IS-IS or OSPF have registered, LSD allocates the requested SRGB. An example sequence of events after a router booted. One, LSD waits for high priority clients. Two, IS-IS registers with LSD, request default SRGB 16,000 to 23,999. Three, LSD starts allocating labels. For example, LDP request dynamic labels. If segment routing is not enabled, IS-IS or OSPF do not request an SRGB, and thus no SRGB is allocated. Another example sequence of events after a router booted or using non-default SRGB. One, LSD waits for high priority clients. Two, IS-IS registers with LSD, request SRGB 30,000 to 39,999. Three, LSD starts allocating label. For example, LDP request dynamic labels. LSD preserves the preserved range. Multiple IGP instances can use the same SRGB or use different, non-overlapping SRGBs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (10), [[Multiprotocol Label Switching (MPLS)|Mpls]] (5)
> **Env Vars:** lsd (16), srgb (16), mpls (5), ospf (4), ldp (3)
> **Analogies:** for example (3)
> **Speakers:** - [instructor] (1)


### 3. Segment Routing (SR) Configuration

[↑ Back to Table of Contents](#table-of-contents)

#### [IS-IS segment routing configuration](https://www.linkedin.com/learning/mpls-segment-routing/is-is-segment-routing-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/is-is-segment-routing-configuration?u=76281980&t=0)** - [Instructor] In this video, we will delve into configuring segment [[Routing]], or SR, using IS-IS on IOS XR. Segment routing can utilize either IS-IS or OSVF as its interior gateway port, or IGP. Today, we will focus on IS-IS, but in a future session, we will explore OSVF. We will configure a network with four routers, R1 connected to R2, R2 connected to R3, R3 connected to R4. Each router has a loopback interface, R1 loopback0 with IP 1.1.1.1/32, R2 loopback0 with IP 2.2.2.2/32, R3 loopback0 with IP 3/3.3.3/32, R4 loopback0 with IP 4/4/4/4/32. Step one, configure IS-IS without segment routing. Let's start by configuring IS-IS on each router without segment routing. #router isis TAG creates an IS-IS routing instance with a specific tag. #net NET defines the network entity title, or NET, for IS-IS. #is-type level-2-only configures IS-IS to operate only as a level two router. #address-family ipv4 unicast specifies the address-family. #metric-style wide enables wide metric for IS-IS.
>
> **[1:37](https://www.linkedin.com/learning/mpls-segment-routing/is-is-segment-routing-configuration?u=76281980&t=97)** #interface INT_NAME specifies the interface to be used. #point-to-point, optional command to configure the interface as point-to-point. #address-family ipv4 unicast specifies the address-family. #interface loopback0. #address-family ipv4 unicast configure IS-IS on the loopback interface for ipv4 unicast address-family. #commit applies the configuration. Configuration for R1, router isis ARASH, net 49.0001.0000.0000.0001.00,
>
> **[2:25](https://www.linkedin.com/learning/mpls-segment-routing/is-is-segment-routing-configuration?u=76281980&t=145)** is-type level-2-only, address-family ipv4 unicast, metric-style wide, interface GigabitEthernet0/0/0/0, point-to-point, address-family ipv4 unicast, interface Loopback0, address-family ipv4 unicast, commit. Configuration for R2, router isis ARASH, net 49.0001.0000.0000.0002.00,
>
> **[3:08](https://www.linkedin.com/learning/mpls-segment-routing/is-is-segment-routing-configuration?u=76281980&t=188)** is-type level-2-only, address-family ipv4 unicast, metric-style wide, interface GigabitEthernet0/0/0/0, point-to-point, address-family ipv4 unicast, interface GigabitEthernet0/0/0/1, point-to-point, address-family ipv4 unicast, interface Loopback0, address-family ipv4 unicast, commit. Configuration for R3, router isis ARASH, net 49.0001.0000.0000.0003.00,
>
> **[3:58](https://www.linkedin.com/learning/mpls-segment-routing/is-is-segment-routing-configuration?u=76281980&t=238)** is-type level-2-only, address-family ipv4 unicast, metric-style wide, interface GigabitEthernet0/0/0/0, point-to-point, address-family ipv4 unicast, interface GigabitEthernet0/0/0/1, point-to-point, address-family ipv4 unicast, interface Loopback0, address-family ipv4 unicast, commit. Configuration for R4, router isis ARASH, net 49.0001.0000.0000.0004.00,
>
> **[4:44](https://www.linkedin.com/learning/mpls-segment-routing/is-is-segment-routing-configuration?u=76281980&t=284)** is-type level-2-only, address-family ipv4 unicast, metric-style wide, interface GigabitEthernet0/0/0/0, point-to-point, address-family ipv4 unicast, interface Loopback0, address-family ipv4 unicast, commit. Step two, enable segment routing on IS-IS. Now let's enable segment routing on the IS-IS instance and configure [[Multiprotocol Label Switching (MPLS)|MPLS]] as the data plane. #router isis TAG, enter IS-IS IS-IS router configuration mode. #address-family ipv4 unicast, enter ipv4 address family configuration mode. #segment-routing mpls, enables segment routing with MPLS as the data plane. Configure prefix SID. We can assign segment identifier, or SIDs, to loopback interfaces. Prefix-sid absolute value directly assign an absolute SID value. prefix-sid index INDEX assign an index that will be added to a base value to drive the SID. Configuration for R1, router isis ARASH, address-family ipv4 unicast, segment-routing mpls, interface Lookback0, address-family ipv4 unicast, prefix-sid absolute 16001, commit. Configuration for R2, router isis ARASH, address-family ipv4 unicast,
>
> **[6:18](https://www.linkedin.com/learning/mpls-segment-routing/is-is-segment-routing-configuration?u=76281980&t=378)** segment-routing mpls, interface Lookback0, address-family ipv4 unicast, prefix-sid absolute 16002, commit. Configuration for R3, router isis ARASH, address-family ipv4 unicast, segment-routing mpls, interface Loopback0, address-family ipv4 unicast, prefix-sid index 3, commit. Configuration for R4, router isis ARASH, address-family ipv4 unicast, segment-routing mpls, interface Loopback0, address-family ipv4 unicast, prefix-sid index 4, commit. After this configuration, MPLS forwarding is enabled on all non-passive IS-IS interfaces. Adjacency SIDs are allocated and distributed for all adjacencies. In the next video, we will verify the segment routing details in this scenario.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (14), [[Multiprotocol Label Switching (MPLS)|Mpls]] (8)
> **Env Vars:** arash (8), mpls (3), sid (3), osvf (2), tag (2)
> **Versions:** 49.0001.0000 (4), 1.1.1 (1), 2.2.2 (1), 3.3.3 (1), 0000.0001.00 (1)
> **Prerequisites:** configure (6)
> **SQL:** index (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [IS-IS segment routing verification](https://www.linkedin.com/learning/mpls-segment-routing/is-is-segment-routing-verification?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/is-is-segment-routing-verification?u=76281980&t=0)** - [Instructor] In this session, we will learn how to monitor and verify is-is segment [[Routing]]. The show is-is adjacency detail command in Cisco iOS XR provides detailed information about is-is adjacencies, particularly useful in the context of segment routing. Adjacency segment identifier or SID. This is a unique identifier assigned to an is-is adjacency used in segment routing, or SR, to represent a specific link between two routers. The adjacency SID is essential for direct forwarding along a specified path within the network. Non-fast reroute, non-FRR adjacency SID. This is an adjacency SID that is not configured for fast reroute or FRR. FRR is a mechanism designed to quickly reroute traffic in case of a link or node failure, ensuring minimal disruption. Let's use the show is-is adjacency detail command on R1 to monitor and verify is-is segment routing. This command will provide detailed information about the is-is adjacencies, including adjacency SID and non-FRR adjacency SID, helping us ensure that our segment routing configuration is correct. Let's now use the show is-is adjacency detail command on R2 to continue monitoring and verifying is-is segment routing. This command will provide similar detailed information about R2's is-is adjacencies, including the adjacency SID
>
> **[1:37](https://www.linkedin.com/learning/mpls-segment-routing/is-is-segment-routing-verification?u=76281980&t=97)** and non-FRR adjacency SID. Next, use the show is-is adjacency detail command on R3 to continue verifying is-is segment routing. Finally, use the show is-is adjacency detail command on R4 four to complete the verification of is-is segment routing. In this figure, we can see all adjacency SIDs, or segment identifiers. is-is will advertise each of these adjacency SIDs to all other routers in the network. This advertisement ensures that each router is aware of the SIDs associated with the adjacencies, facilitating efficient [[Traffic Engineering]] and routing within the segment routing framework. To verify that the link state of R1, including segment routing information is available in all routers, you can use the show is-is database R1.00-00 verbose command on R1, R2, R3, and R4. This will allow you to check the is-is database and ensure that the segment routing information is correctly. In the output from R1, we see the following details. SRGB base, 16,000, range, 8,000. This indicates that R1 is using the default segment routing global block, or SRGB range. And specifically SRGB base 16,000, this is the starting value of the default SRGB range. Range 8,000. This signifies that the SRGB range extends
>
> **[3:16](https://www.linkedin.com/learning/mpls-segment-routing/is-is-segment-routing-verification?u=76281980&t=196)** from the base value of 16,000 up to 23,999, which is a total range of 8,000 labels. In other words, R1's SRGB range is from 16,000 to 23,999, providing a total of 8,000 labels for segment routing. Adjacency SID 24,001. This is the segment identifier assigned to the adjacency between R1 and R2. It is used to uniquely identify the link for segment routing purposes. Since FRR is not enabled for this adjacency, the adjacency SID of 24,001 is classified as a non-FRR adjacency SID. You can verify the prefix SID index, which provides insight into how segment routing IDs are mapped. For instance, if you configure the prefix SID of 16,001 and the prefix SID index shown is one, this means the configuration aligns with how segment routing SIDs are mapped. Using the SRGB base. The prefix SID is calculated by adding the prefix SID index to the SRGB base. Prefix SID is equal to SRGB base plus prefix SID index. Prefix SID is equal to 16,000 plus one is equal to 16,001.
>
> **[4:45](https://www.linkedin.com/learning/mpls-segment-routing/is-is-segment-routing-verification?u=76281980&t=285)** When you use the show is-is database R1.00-00 detail comment on other routers, you should see exactly the same information as on R1. This indicates that the segment routing information, including adjacency SIDs and prefix SIDs is consistently propagated and recognized across all routers in the network. This consistency confirms that the is-is network is correctly distributing and maintaining segment routing data across all devices. Let's assume we send an ICMP packet from R1 to the destination address 4.4.4.4/32. To verify how this packet is forwarded, we need to check the forwarding information base or, FIB on R1. Use the command show cef 4.4.4.4/32 to inspect the forwarding entry for the destination address. The output will indicate the local label assigned to the destination. Local label 16,004. This is the prefix SID for the destination 4.4.4.4/32, indicating that segment routing is used. Forwarding action. R1 will impose the label 16,004 on the ICMP packet. Outgoing interface. The packet will be forwarded out of the interface gigabit ethernet 0/0/0/0 towards R2. Now, we will check how R2 handles this labeled packet.
>
> **[6:21](https://www.linkedin.com/learning/mpls-segment-routing/is-is-segment-routing-verification?u=76281980&t=381)** Check LFIB on R2. Use the command show [[Multiprotocol Label Switching (MPLS)|MPLS]] forwarding table on R2 to verify how the label 16,004 is handled. The output will show the label operation and the next top information. Local label 16,004 indicates that R2 recognizes the incoming label. Outgoing label 16,004. R2 shows the incoming label 16,004 with the same label, 16,004. Outgoing interface. The package is forwarded out of the interface gigabit ethernet 0/0/0/1 towards R3. Next up, the next top IP address is 10.2.3.3. After R2 forwards the labeled packet out of gigabit ethernet 0/0/0/1, R3 will receive the packet with label 16,004. Use the command show mpls forwarding table 16,004 on R3 to verify how the label 16,004 is handled. Local label 16,004 indicates that R3 recognizes the incoming label. Outgoing label pop. R3 will pop or remove the label 16,004. Outgoing interface. The packet is forwarded out of the interface gigabit ethernet 0/0/0/0 towards R4. Next up, the next top IP address is 10.3.4.4.
>
> **[7:58](https://www.linkedin.com/learning/mpls-segment-routing/is-is-segment-routing-verification?u=76281980&t=478)** R4 receives the packet from R3 without any MPLS label because R3 performed a label pop preparation. R4 will now forward the packet based on its routing table. Use the command show IP route on R4 to verify the routing table entry.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (22), [[Multiprotocol Label Switching (MPLS)|Mpls]] (3), [[Traffic Engineering]] (1)
> **Env Vars:** sid (20), srgb (9), frr (7), icmp (2), mpls (2)
> **Versions:** 4.4.4 (3), 10.2.3 (1), 10.3.4 (1)
> **Definitions:** is a  (3), is an  (1), in other words (1)
> **CLI Commands:** node (1)
> **Code Identifiers:** ios (1)
> **Analogies:** for instance (1)
> **Prerequisites:** configure (1)

#### [OSPF segment routing configuration](https://www.linkedin.com/learning/mpls-segment-routing/ospf-segment-routing-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/ospf-segment-routing-configuration?u=76281980&t=0)** - [Instructor] In this video, we will delve into configuring segment [[Routing]] or SR using OSPF on IOS XR. We will configure a network with four routers. R1, connected to R2, R2 connected to R3, R3 connected to R4. Each router has a loopback interface. R1 loopback 0 with IP 1.1.1.1/32. R2 loopback 0 with IP 2.2.2.2/32. R3 loopback zero with IP 3.3.3.3/32. R4 loopback 0 with IP 4.4.4.4/32. Configuring OSPF segment routing or SR in a Cisco IOS XR environment involves several steps. Step one, global OSPF configuration with SR. Enable OSPF. Enable segment routing with [[Multiprotocol Label Switching (MPLS)|MPLS]]. Router OSPF PID. Segment-routing mpls. Step two. Area configuration. Define an OSPF area. Area area ID. And step three, interface configuration with an area. Assign physical interfaces to the OSPF area and specify the network type. Interface interface name. Network point-to-point. Step four. Loopback interface configuration. Assign a prefix SID to the loopback interface for SR.
>
> **[1:36](https://www.linkedin.com/learning/mpls-segment-routing/ospf-segment-routing-configuration?u=76281980&t=96)** Interface loopback0, prefix-sid absolute value or prefix-sid index INDEX. R1 configuration. Router, configure, router ospf ARASH, segment-routing mpls, area 0, interface GigabitEthernet0/0/0/0/0, network point-to-point, exit, interface Loopback0, prefix-sid absolute 16001, exit, exit, exit, commit, exit. If you prefer to use the prefix-sid index instead of prefix-sid absolute, replace the loopback configuration line with prefix-sid index 1. R2 configuration. Configure, router ospf ARASH, segment-routing mpls, area 0, interface GigabitEthernet0/0/0/0/0, network point-to-point, exit, interface GigabitEthernet0/0/1, network point-to-point, exit, interface Loopback0, prefix-sid absolute 16002, exit, exit, exit, commit, exit. R3 configuration. Configure,
>
> **[3:08](https://www.linkedin.com/learning/mpls-segment-routing/ospf-segment-routing-configuration?u=76281980&t=188)** router ospf ARASH, segment-routing mpls, area 0, interface GigabitEthernet0/0/0/0, network point-to-point, exit, interface GigabitEthernet0/0/1, network point-to-point, exit, interface Loopback0, prefix-sid absolute 16003, exit, exit, exit, commit, exit. R4 configuration. Configure, router ospf ARASH, segment-routing mpls, area 0, interface GigabitEthernet0/0/0/0, network point-to-point, exit, interface Loopback0, prefix-sid absolute 16004, exit, exit, exit, commit, exit. This configuration enables OSPF segment routing on a Cisco IOS XR router, specifying which interfaces participate in OSPF and assigning segment routing identifiers or SIDs to the loopback interface for routing purposes. In the next video, we will verify the segment routing details in this scenario.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (12), [[Multiprotocol Label Switching (MPLS)|Mpls]] (6)
> **Env Vars:** ospf (9), arash (4), ios (3), mpls (1), pid (1)
> **Prerequisites:** configure (5)
> **Versions:** 1.1.1 (1), 2.2.2 (1), 3.3.3 (1), 4.4.4 (1)
> **SQL:** index (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [OSPF segment routing verification](https://www.linkedin.com/learning/mpls-segment-routing/ospf-segment-routing-verification?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/ospf-segment-routing-verification?u=76281980&t=0)** - [Instructor] In this session, we will learn how to monitor and verify OSPF segment [[Routing]]. The show ospf neighbor command in Cisco IOS XR is used to display information about the OSPF neighbors on a router. This command helps network administrators troubleshoot and monitor the status of OSPF adjacencies. Running the command show ospf neighbor on R1 provides a summary of the OSPF neighbor relationships. Neighbor ID, 2.2.2.2, this is the OSPF router ID of R2. PRI one, the priority of the neighbor, state full. R1 is fully adjacent with R2. Dead time, 34, the remaining time before R2 is considered dead if no hello packets are received. Address 10.1.2.2, the IPS of R2's interface. Interface, gigabit ethernet 0/0/0/0/, the local interface on R1 through which R2 is reachable. When running the command show ospf neighbor on R2, the output might look like this, neighbor ID, the OSPF router IDs of the neighbors, 1.1.1.1 for R1, and 3.3.3.3 for R3. PRI, the priority of the neighbors, both have a priority of one. State, the OSPF state of the neighbor relationships, both are full. Dead time, the remaining time before the neighbors are declared dead
>
> **[1:33](https://www.linkedin.com/learning/mpls-segment-routing/ospf-segment-routing-verification?u=76281980&t=93)** if no hello packets are received. Address, the IP addresses of the neighbor's interfaces. Interface, the local interface on R2 through which the neighbors are reachable. The show ospf neighbor detail command in Cisco IOS XR can provide detailed information about OSPF neighbors, including segment routing or SR related details like the adjacency segment identifier, or SID label if segment routing is configured in the OSPF domain. Adjacency SID label shows the segment routing adjacency SID label associated with the link to this neighbor. This label is used in segment routing to represent the specific adjacency or link between the two routers. In this example, R1 has a neighbor, R2, with router ID 2.2.2.2, and an adjacency SID label of 24,000. Let's use the show CEF 4.4.4.4 S/32 on R1. This command displays Cisco express forwarding, or CEF information for a specified IP prefix. 4.4.4.4/32, the IP prefix being queried, which is a S/32 prefix indicating a single IP address. Version 29, the version of the CEF entry, which increments with each change in the forwarding information. Label SR, indicates that segment routing
>
> **[3:07](https://www.linkedin.com/learning/mpls-segment-routing/ospf-segment-routing-verification?u=76281980&t=187)** or SR labels are being used. Local label 16,004, the local [[Multiprotocol Label Switching (MPLS)|MPLS]] label assigned to this prefix by the router. Label imposed 16,004, the MPLS label that will be imposed or added on packets testing for this prefix. To provide a more precise and relevant output based on your scenario, let's consider the show mpls forwarding table command on router R2, where the prefix is identified as an SR prefix ID X four, and the outgoing interface is GI0/0/0/1 with the next top IP address, 10.2.3.3. Local label, the MPLS label that the router or R2 uses to identify incoming traffic. In this case, it is 16,004. Outgoing label, the MPLS label that R2 will impose on packets as they are forwarded out of the router. In this case, it is 16,004. Prefix for ID, this identifies the MPLS FEC. Here, it is listed as SRPFX IDX four, indicating a segment routing prefix with an index of four. Outgoing interface, the interface through which the labeled packet will be sent. Here, it is gigabit ethernet 0/0/0/0/1. Next hop, the IP address of the next hop router. Here, it is 10.2.3.3.
>
> **[4:43](https://www.linkedin.com/learning/mpls-segment-routing/ospf-segment-routing-verification?u=76281980&t=283)** In segment routing, or SR, the handling of labels can indeed lead to scenarios where the local label and the outgoing label are the same. This occurs because segment routing leverage the concept of prefix segment identifiers, or prefix SIDs, which are consistent across the network for a given prefix. This consistency simplifies the label distribution and forwarding process, as all routers use the same SID to reach a specific prefix. To illustrate how segment routing labels are consistent across different routers, let's examine the show mpls forwarding table command on router R3. This command will demonstrate that R3 uses the 16,004 for local label and POP as outing label. Let's ping 4.4.4.4 from R1, it is successful. When the bytes switched counter on R2 shows an increment to 500 bytes, it means R2 has forwarded 500 bytes of traffic based on its MPLS forwarding rules. This indicates that R2 is processing and forwarding MPLS packets according to its MPLS table. To check the MPLS forwarding details on R3, use the show mpls forwarding table command. Neighbor 16,004 is received, POP, and traffic is forwarded 10.3.4.4 via interface GI0/0/0/0/0. Byte three incrementing by 500 bytes indicates the amount
>
> **[6:20](https://www.linkedin.com/learning/mpls-segment-routing/ospf-segment-routing-verification?u=76281980&t=380)** of traffic forwarded. The show ospf database command in Cisco IOS XR provides detailed information about the OSPF link state database. This database contains all the OSPF link state advertisements, or LSAs, that the router has received and originated. This information is crucial for understanding the OSPF topology and troubleshooting OSPF related issues. In the scenario over segment routing, or SR, is enabled on OSPF, you will indeed see Type-10 Opaque LSAs in the OSPF database. These LSAs are used to carry segment routing information such as segment identifiers, or SIDs, and other SR related data. When segment routing, or SR, is enabled on OSPF, the OSPF protocol uses Type-10 Opaque LSAs to distribute SR related information. These LSAs can carry several types of information, notably, type four, router information, type seven, extended prefix, type eight, extended link. Type four router information can include TLVs, or type lengths value, that define a specific attributes such as capabilities for MPLS TE, Graceful Restart, and segment routing. Type seven extended prefix includes TLVs that provide detailed prefix information, which can include prefix SID, segment identifier associated with the prefix,
>
> **[7:54](https://www.linkedin.com/learning/mpls-segment-routing/ospf-segment-routing-verification?u=76281980&t=474)** flags and attributes that define how the prefix should be used in routing and forwarding decisions. Type eight extended link includes TLVs that provide detailed link information, which can include link attributes like metrics, bandwidth, and adjacency SID segment identifier associated with the link.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (15), [[Multiprotocol Label Switching (MPLS)|Mpls]] (13)
> **Env Vars:** ospf (17), mpls (10), sid (7), ios (3), cef (3)
> **Versions:** 4.4.4 (3), 2.2.2 (2), 10.2.3 (2), 10.1.2 (1), 1.1.1 (1)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)


### 4. Segment Routing (SR) and LDP

[↑ Back to Table of Contents](#table-of-contents)

#### [Segment routing co-existence with LDP](https://www.linkedin.com/learning/mpls-segment-routing/segment-routing-co-existence-with-ldp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/segment-routing-co-existence-with-ldp?u=76281980&t=0)** - [Instructor] In this lesson, we will explore segment [[Routing]] and LDP coexistence. We will begin by examining how segment routing and LDP can coexist in the control plane, then we will delve into how they operate together in the data plane. By the end of this lesson, you will have a clear understanding of how these protocols interact within a network and how to manage their coexistence effectively. Segment routing and LDP control plane coexistence. The [[Multiprotocol Label Switching (MPLS)|MPLS]] architecture allows for the concurrent use of multiple label distribution protocols such as LDP, RSVP-TE, and segment routing or SR. This capability enables the SR control plane to coexist with other protocols without direct interaction. Each node in the network manage its labels through a label manager, which plays a crucial role in ensuring a smooth coexistence between SR and LDP. Label Range Reservation. The label manager reserves a dedicated label range known as the segment routing global block or SRGB exclusively for the SR control plane. Dynamic Label Management. It ensures that all dynamically assigned labels used by LDP or other protocols are allocated outside the SRGB, preventing conflicts between the protocols.
>
> **[1:33](https://www.linkedin.com/learning/mpls-segment-routing/segment-routing-co-existence-with-ldp?u=76281980&t=93)** Unique Label Allocation. The label manager guarantees that any dynamically allocated label is unique within the network, ensuring there are no misinterpretations. Consider a network with five routers, R1, R2, R3, R4, and R5, all running segment routing or SR. R1, R2, and R4 use a default SRGB range of 16000, 23999. R3 uses a customized SRGB range of 24000, 31999.
>
> **[2:14](https://www.linkedin.com/learning/mpls-segment-routing/segment-routing-co-existence-with-ldp?u=76281980&t=134)** R5 hosts the 1.1.1.5/32 network with the prefix SID configured as index 5, which translates to a label derived from its SRGB. Let's trace the packet flow. At R1, the destination is 1.1.1.5/32 or prefix SID 5 and the label assigned for this prefix is 16005 from R1's SRGB. R1 forwards the packet with label 16005 towards R2. At R2, R2 receives the packet with label 16005. Since R3 uses a different SRGB, 24000, 31999, R2 swaps the incoming label 16005 to 24005 and forwards the packet to R3. R3 receives the packet with label 24005, which falls within its SRGB range, 24000, 31999. The label for rewarding information base or LFIB on R3 maps this label to the outgoing label 16005 since the next hop, R4, uses the default SRGB. R3 swaps 24005 with 16005 and forwards the packet to R4.
>
> **[3:50](https://www.linkedin.com/learning/mpls-segment-routing/segment-routing-co-existence-with-ldp?u=76281980&t=230)** At R4, R4 receives the packet with label 16005. According to its LFIB, this label matched the prefix SID for 1.1.1.5/32. As the label action is pop, R4 pops the label and forwards the unlabel packet to R5. R5 receives the packet and successfully rolls it to the 1.1.1.5/32 destination. Segment routing and LDP data plane coexistence. Now, assume we enable LDP on all routers. In this scenario, LDP labels are dynamically allocated by the label manager. Here's how the LDP labels are assigned in our network. When R1 receives a packet distinct for 1.1.1.5/32, the default behavior is for LDP to be preferred over segment routing, thus R1 imposes the LDP label and forwards the packet as follows. At R1, by default, LDP is preferred. So instead of using the SR label 16005, R1 imposes the LDP label 24001 and forwards the packet to R2. At R2, R2 receives the packet with label 24001 and swaps it with 32011, forwarding the packet to R3.
>
> **[5:27](https://www.linkedin.com/learning/mpls-segment-routing/segment-routing-co-existence-with-ldp?u=76281980&t=327)** At R3, R3 receives the packet with label 32011 and swaps it with 24003 before forwarding the packet to R4. At R4, R4 receives the packet with label 24003. According to its LFIB, it pops the label and forwards the unlabeled packet to R5. At R5, R5 receives the packet and forwards it to the 1.1.1.5/32 destination. Changing the default behavior to prefer SR labels. To configure the IS-IS routing protocol in IOS XRv, the preference for segment routing or SR over LDP, you can use the following comments, router isis <process-name>, address-family ipv4 unicast, segment-routing mpls sr-prefer, exit. To configure OSPF in IOS XR with segment routing or SR and to change the default behavior to prefer SR labels over LDP labels, you can use the following comments, router ospf <process-name>, segment-routing mpls, segment-routing sr-prefer. By enabling this command, R1 will now impose the SR label 16005 when forwarding the packet towards 1.1.1.5/32.
>
> **[7:02](https://www.linkedin.com/learning/mpls-segment-routing/segment-routing-co-existence-with-ldp?u=76281980&t=422)** Ensuring that segment routing is used for label imposition in IP to MPS forwarding instead of LDP. LDP is preferred over SR In IP to MPLS by default because of legacy behavior in MPLS networks. LDP label distribution protocol has been the default label distribution mechanism for many MPLS deployments, and as a result, network devices prioritize LDP labels when both LDP and SR labels are available. This default preference ensures backward compatibility with existing MPLS setups that rely on LDP and avoids potential disruptions when introducing segment routing or SR into an already established MPLS environment. In the next video, I will cover how we can migrate from LDP to segment routing or SR. This is another practical use of the default preference for LDP over SR and how we can control that transition effectively. Stay tuned to learn more about this important migration process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (17), [[Multiprotocol Label Switching (MPLS)|Mpls]] (8)
> **Env Vars:** ldp (24), srgb (9), mpls (6), sid (3), lfib (3)
> **Versions:** 1.1.1 (7)
> **Prerequisites:** configure (2)
> **CLI Commands:** node (1)
> **Cross-References:** in the next (1)
> **Definitions:** known as (1)
> **Analogies:** such as (1)

#### [Simple migration from LDP to Segment routing](https://www.linkedin.com/learning/mpls-segment-routing/simple-migration-from-ldp-to-segment-routing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/simple-migration-from-ldp-to-segment-routing?u=76281980&t=0)** - [Instructor] In this lesson, we will walk through the steps to migrate from LDP to SR in a simple, controlled manner. Assumptions. LDP and SR are kept independent. Throughout the migration, there will be no interaction between LDP and SR control planes. Continuous connectivity. SR-enabled PEs maintain continuous SR connectivity, while LDP-enabled PEs maintain continuous LDP connectivity during the migration. Upgrade flexibility. All nodes in the network can be upgraded to support SR, and all services can also be transitioned to SR. Initial state. All nodes in the network are running LDP with no SR enabled. Step 1, upgrade all nodes to support SR. Upgrade all nodes to SR in no particular order. During this stage, the default preference for LDP label imposition remains, meaning LDP labels will still be used for forwarding. SR will be operational, but LDP will continue to handle label imposition for [[Multiprotocol Label Switching (MPLS)|MPLS]] traffic as the default protocol. Step 2, configure PEs to prefer SR labeling position. Once all nodes are SR-capable, configure the provider edge or PE routers to prefer SR labeling position.
>
> **[1:33](https://www.linkedin.com/learning/mpls-segment-routing/simple-migration-from-ldp-to-segment-routing?u=76281980&t=93)** This can also be done in no particular order. Using the command segment-[[Routing]] mpls sr-prefer, you can shift the label preference from LDP two SR for these PE routers. After this step, PEs will impose SR labels rather than LDP labels when forwarding MPLS traffic. Final state. All nodes in the network now run segment routing with no reliance on LDP for label distribution or imposition. SR is fully operational, handling all MPLS traffic within the network. Key considerations. This migration process ensures continuous connectivity as both LDP and SR control planes remain independent during the upgrade. The flexibility of performing upgrades and preference change in no particular order provides operational ease, reducing the risk of service disruptions. This simple two-step process allows for a smooth transition from LDP to segment routing, ensuring that your network remains operational throughout the migration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (4), [[Routing]] (3)
> **Env Vars:** ldp (14), mpls (3)
> **Prerequisites:** configure (2)
> **Speakers:** - [instructor] (1)

#### [LDP to Segment routing interworking](https://www.linkedin.com/learning/mpls-segment-routing/ldp-to-segment-routing-interworking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/ldp-to-segment-routing-interworking?u=76281980&t=0)** - [Instructor] In this lesson, we will learn about LDP to segment [[Routing]] interworking. Let's start with the scenario involving five routers to explain how LDP and SR can work together seamlessly. In this scenario, we have five routers: R1, R2, R3, R4, and R5. R1 and R2 are LDP enabled and do not support segment routing or SR. R4 and R5 are segment routing or SR enabled, but do not support LDP. R3 is the border node between LDP and SR. It is configured with both LDP and SR to enable interworking. R4, R4, and R5 use the default SRGB range of 16,000, 23,999. In R5, the index five is configured for the 1.1.1.5/32 network connected to R5. Therefore, the SR label for this network is 16,005. Both R3 and R4 choose label 16,005 for 1.1.1.5/32.
>
> **[1:13](https://www.linkedin.com/learning/mpls-segment-routing/ldp-to-segment-routing-interworking?u=76281980&t=73)** In the LDP domain routers, R1, R2, and R3 exchange LDP labels. R1 assigns a local LDP label of 90,008. R2 assigns a local LDP label of 90,100. R3 assigns a local LDP label of 90,007. A packet destined for 1.1.1.5 arrives at R1. R1 checks its FIB and finds the label received from its next hop R2 90,100. R1 forwards the packet to R2 with label 90,100. R2 receives the packet and checks its LFIB. It swaps the incoming label 90,100 with the label it received from R3, which is 90,007. R2 forwards was the packet to R3 with label 90,007. R3, the LDP-SR border node receives the packet with the label 90,007, but it doesn't have an LDP outgoing label for 1.1.1.5/32 because its next stop R4 is not LDP enabled. At this point, interworking between LDP and SR occurs. R3 installs an LDP to SR forwarding entry automatically. Incoming label. The local LDP label 90,007 allocated by R3 for 1.1.1.5/32.
>
> **[2:52](https://www.linkedin.com/learning/mpls-segment-routing/ldp-to-segment-routing-interworking?u=76281980&t=172)** Outgoing label. The SR prefix SID label 16,005 bound to 1.1.1.5/32 is used for forwarding. Outgoing interface. The packet is forwarded to R4. After R3 forwards the labeled packet to R4 with the SR label 16,005, R4 checks its LFIB and sees that the label 16,005 corresponds to the destination 1.1.1.5/32. R4 performs a [[PHP]] or penultimate hop popping operation, meaning it pops the label 16,005. The packet is now label-free and is forwarded to R5. Since R5 is the destination for the 1.1.1.5/32 network, it receives and processes the packet. The interworking functionality allows R3 to seamlessly switch between LDP and SR labels, ensuring smooth forwarding of labeled packets across the LDP-SR boundary. This LDP to SR forwarding entry is automatically derived and installed on the border node R3 without any additional configuration required. Also for unlabeled IP packets arriving at R3 destined for 1.1.1.5/32, R3 imposes the prefix SID label 16,005 and forwards it to R4.
>
> **[4:28](https://www.linkedin.com/learning/mpls-segment-routing/ldp-to-segment-routing-interworking?u=76281980&t=268)** Now that we have learned about LDP to SR interworking, let's move on to the next lesson where we will explore SR to LDP interworking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (3), [[PHP]] (1)
> **Env Vars:** ldp (22), lfib (2), sid (2), srgb (1), fib (1)
> **Versions:** 1.1.1 (9)
> **CLI Commands:** node (3), php (1)
> **Speakers:** - [instructor] (1)

#### [Segment routing to LDP interworking](https://www.linkedin.com/learning/mpls-segment-routing/segment-routing-to-ldp-interworking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/segment-routing-to-ldp-interworking?u=76281980&t=0)** - [Instructor] In this lesson we will learn about SR to LDP interworking. Let's use an example involving five routers to understand how segment [[Routing]] or SR and LDP Interwork. We have five routers, R1, R2, R3, R4 and R5. R1 and R2 are segment routing or SR enabled and do not support LDP. R4 and R5 are LDP enabled and do not support segment routing. R3 is the border node between the SR and LDP domains and it is configured with both segment routing and LDP. R1, R2 and R3 use the default SRGB range of 16000, 23999. R5 advertises the network 1.1.1.5/32 and does not support SR. Therefore R3 and R4 choose LDP labels for this prefix. R4 assigns label 90090. R3 assigns label 90002. R5 sends an implicit null to R4 because it is the final hub for the 1.1.1.5/32 network and R4 sends 90090 to R3. Assume a packet testing for 1.1.1.5 arrives at R1, which is SR enabled. Since R1 is in the SR domain,
>
> **[1:33](https://www.linkedin.com/learning/mpls-segment-routing/segment-routing-to-ldp-interworking?u=76281980&t=93)** it doesn't have an LDP label for this destination. For R1 to forward packets using segment routing, it needs a prefix SID label towards R5. Since R5 does not support SR it cannot advertise a prefix SID for the 1.1.1.5/32. Here the mapping server comes into play. A mapping server advertises a prefix SID mapping on behalf of non SR nodes like R5 in the network. In our example, the mapping server advertises prefix SID index five for the prefix one, 1.1.1.5/32 on behalf of R5. R1, R2 and R3 the segment routing nodes use the mapping to install the segment routing [[Multiprotocol Label Switching (MPLS)|MPLS]] forwarding entry in their LFIB. When a packet testing for 1.1.1.5 is received by R1, it is forwarded with the prefix SID label 16005. R1 forwards packet to R2 with labeled 16005. R2 swaps the label 16005 to 16005 and forwards the packet to R3. When R3 the border node receives the package with label 16005, it identifies that R4 does not support SR. Here is where SR to LDP interworking occurs. R3 connects the prefix SID of 1.1.1.5/32
>
> **[3:13](https://www.linkedin.com/learning/mpls-segment-routing/segment-routing-to-ldp-interworking?u=76281980&t=193)** label 16005 to the LDP LSP. R3 automatically installs an SR to LDP forwarding entry Incoming label. The local SR label 16005 for 1.1.1.5/32 from the mapping server. Outgoing label. The LDP label 90090 received from R4. Outgoing interface. The interface to R4, the downstream LDP node. R3 swaps the incoming SR label 16005 with the outgoing LDP label 90090 and forwards was the packet to R4. R4 receives the labeled packet with label 90090, checks its LFIB and match it to the prefix 1.1.1.5/32. Since R5 sent an implicit null, R4 pops the label penultimate hub popping and forwards the packet label 3 to R5. Regarding the mapping server, it can be any router within the SR domain. You can configure it using the following commands. Segment routing mapping server prefix SID map IPv4 1.1.1.5/32 5 range 1. This configuration advertises a prefix SID mapping for the 1.1.1.5/32 network with index 5. Now that we have covered SR to LDP interworking,
>
> **[4:51](https://www.linkedin.com/learning/mpls-segment-routing/segment-routing-to-ldp-interworking?u=76281980&t=291)** in the next lesson we will explore SR over LDP.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (8), [[Multiprotocol Label Switching (MPLS)|Mpls]] (1)
> **Env Vars:** ldp (16), sid (8), lfib (2), srgb (1), mpls (1)
> **Versions:** 1.1.1 (11)
> **CLI Commands:** node (3)
> **Prerequisites:** install (1), configure (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Segment routing over LDP interworking](https://www.linkedin.com/learning/mpls-segment-routing/segment-routing-over-ldp-interworking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/segment-routing-over-ldp-interworking?u=76281980&t=0)** - [Instructor] In this lesson, we will explore Segment [[Routing]] or SR over LDP interworking using a six-router network. We will discuss two conditions, one for a prefix in the SR domain and one for a prefix in the LDP domain. Let's start with the network topology. R1 is an SR-only router. R2 is an SRL/DP router. R3 is an LDP-only router. R4 is an SRL/DP router. R5 and R6 are SR-only routers. All SR routers use the default SRGB range, from 16000-23999. Condition 1: Prefix in the SR domain, 1.1.1.6/32. Let's consider the 1.1.1.6/32 prefix, which is connected to R6, an SR-only router. R6 assigns Index 6 to the prefix 1.1.1.6/32, making its prefix SID 16006. All SR routers in the domain, such as R1, R2, R4, and R5, learn the Index 6 through IGP and use it to forward traffic two vault 1.1.1.6/32. At the same time, since R4 supports both SR and LDP,
>
> **[1:34](https://www.linkedin.com/learning/mpls-segment-routing/segment-routing-over-ldp-interworking?u=76281980&t=94)** it chooses an LDP label for this prefix. R4 assigns LDP Label 400 for 1.1.1.6/32 and advertises it to R3, R3, LDP-only, assigns LDP Label 300 for 1.1.1.6/32 and advertises it to R2. R2 SRL/DP router plays a critical role here. R2 automatically creates an SR to LDP forwarding entry for the prefix, mapping the prefix SID 16006 to the LDP label it received from R3. Similarly, R4 creates an LDP to SR forwarding entry, linking the local LDP label to the prefix SID 16006. Packet flow. R1 receives a packet distinct for 1.1.1.6 R1 applies the prefix SID 16006 and forwards the packet to R2. R2 receives the packet with Label 16006 and performs an SR to LDP interworking. R2 swaps Label 16006 with LDP Label 300 received from R3 and forwards the packet to R3. R3 receives the packet with Label 300. R3 swaps Label 300 with LDP Label 400 received from R4 and forwards the packet to R4.
>
> **[3:09](https://www.linkedin.com/learning/mpls-segment-routing/segment-routing-over-ldp-interworking?u=76281980&t=189)** R4 receives the packet with Label 400 and performs an LDP to SR interworking. R4 swaps Label 400 with prefix SID 16006 and forwards the packet to R5. R5 receives the packet with Label 16006 and pops the label, forwarding the unlabeled packet to R6. This automatic interworking between SR and LDP ensures that traffic flows smoothly between domains without any additional configuration. Condition 2: Prefix in the LDP domain, 1.1.1.3/32, which is connected to R3, LDP-only router. Since R3 is LDP-only, it does not advertise a prefixed SID for 1.1.1.3/32, so R1 and R2 do not have a prefix SID for this prefix. Additionally, because R1 is configured for SR only, it does not have an LDP label for this network. This means R1 does not have an SR or LDP label for 1.1.1.3/32. Therefore, if R1 receives a packet destined for 1.1.1.3/32, it cannot assign any label to it. To address this, we need a mapping server. The mapping server can be enabled on any SR-enabled node, like R5, and it can advertise a prefix SID on behalf of R3. The mapping server advertises an Index 3
>
> **[4:47](https://www.linkedin.com/learning/mpls-segment-routing/segment-routing-over-ldp-interworking?u=76281980&t=287)** for 1.1.1.3/32 prefix. And R1, R2, R4, and other SR nodes will receive these prefix SID information. R1, R2, R4, R5, and R6 use the prefix SID 16003 for 1.1.1.3/32 Additionally, because R3 is directly connected to the prefix 1.1.1.3/32, it advertises an implicit Null label to its LDP neighbor, R2. R2 then automatically completes its SRL/DP interworking entry, bridging the SR and LDP domains for this prefix. Packet flow. R1 receives a packet distinct for 1.1.1.3/32. R1 forwards a packet with label 16003 prefix SID for 1.1.1.3/32 based on mapping server to R2. R2 performs SR to LDP interworking and pop label 16003, then forwards the packet to R3. Conclusion. In Segment Routing over LDP interworking, a mapping server is crucial in scenarios where SR label switch paths or LSVs need to traverse from an SR domain or island and terminate in an LDP domain or island. the mapping server assigns prefixed SIDs
>
> **[6:19](https://www.linkedin.com/learning/mpls-segment-routing/segment-routing-over-ldp-interworking?u=76281980&t=379)** on behalf of LDP-only nodes, ensuring smooth packet forwarding. However, if there are no SR LSPs that terminate in the LDP domain, a mapping server is not required. Now that we have covered Segment Routing over LDP interworking, in the next lesson, we will explore LDP over Segment Routing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (4)
> **Env Vars:** ldp (31), sid (11), srl (4), srgb (1), igp (1)
> **Versions:** 1.1.1 (16)
> **Definitions:** is an  (4)
> **CLI Commands:** node (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [LDP over segment routing interworking](https://www.linkedin.com/learning/mpls-segment-routing/ldp-over-segment-routing-interworking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/ldp-over-segment-routing-interworking?u=76281980&t=0)** - [Instructor] In this lesson, we will explore LDP over Segment [[Routing]], or SR Interworking, using an example with five routers, R1, R2, R3, R4, and R5. In our topology, R1 is an LDP-only router. R2 is an SR/LDP router. R3 is an SR-only router. R4 is another SR/LDP router. R5 is also an LDP-only router. We will cover two conditions; Condition 1 prefixed in the SR domain, 4.4.4.4/32. In this condition, we have a prefix 4.4.4.4/32 connected to R4. Since R4 is an SR-capable router, it advertises this prefix with a prefix SID-index of four. These results in R2, R3 and R4 using 16,004 as the SR label for this prefix. At the same time, the prefix 4.4.4.4/32 is also advertised via IGP to all routers in the network, allowing the LDP routers to choose their LDP labels. For example, R2 assigns LDP label 200 for this prefix. Additionally, because R2 supports both SR and LDP, it'll use LDP/SR Interworking to automatically complete the LDP/SR entry in its LFIB.
>
> **[1:38](https://www.linkedin.com/learning/mpls-segment-routing/ldp-over-segment-routing-interworking?u=76281980&t=98)** Packet Flow for prefix 4.4.4.4. Suppose R1 receives a packet destined for 4.4.4.4. Since R1 is an LDP-only router, it forwards the packet using LDP label 200, which it received from R2. Upon receiving the packet R2 swaps the LDP label 200 with the SR label 16,004, the prefix SID 4.4.4.4./32.
>
> **[2:11](https://www.linkedin.com/learning/mpls-segment-routing/ldp-over-segment-routing-interworking?u=76281980&t=131)** R2 and four was the packet to R3 which is an SR-only router. R3 pops the SR label 16,004 and forwards the packet directly to R4. In LDP over Segment Routing or SR Interworking, if the destination network is within the SR domain, no additional configuration is needed. The Interworking between SR and LDP occurs automatically and the routers handle the label switching and forwarding seamlessly without any manual intervention. Condition 2, prefix in the LDP domain 5.5.5.5/32. In this second condition, we explore how segment routing, or SR routers, handle prefixes in the LDP domain, such as 5.5.5.5/32, which is connected to R5, an LDP-only router. Here's how the network behaves. R1, R2, R4, and R5 are all capable of LDP and will choose LDP labels for their prefixes. These labels are then advertised to their respective LDP labels. R3, being an SR-only router, does not have any LDP labels, nor does it have a prefix SID for prefixes outside of the SR domain. In this scenario, an SR mapping server is needed. This mapping server can be configured on any SR node, for example, R4.
>
> **[3:47](https://www.linkedin.com/learning/mpls-segment-routing/ldp-over-segment-routing-interworking?u=76281980&t=227)** R4 is configured with mapping server capability and advertises the prefix 5.5.5.5/32 with an index of five. As a result, R2, R3 and R4 learn the index five and assign the corresponding prefix id 16,005 to the prefix 5.5.5.5/32. R2 and R4 complete their LFIB entries using SR/LDP Interworking. Packet flow for prefix 5.5.5.5/32, assume R1 receives a packet distinct for 5.5.5.5/32. R1 match the destination IP with this FIB. Push the LDP label 250 received from R2 and forward the packet to R2. Upon receiving the packet, R2 have LDP labeled 250 with 16,005. The prefix SID for 5.5.5.5/32 according to its LFIB and forwards the packet to R3. R3 swaps the SR label 16,005 and forwards the packet to R4. R4, upon receiving the packet, pops the SR label and forwards the unlabeled packet to R5. This example demonstrates how LDP over SR Interworking operates when a prefix resides inside the LDP domain. In scenarios where LDPN segment routing
>
> **[5:23](https://www.linkedin.com/learning/mpls-segment-routing/ldp-over-segment-routing-interworking?u=76281980&t=323)** or SR Interworkings required, a prefix SID is essential for SR nodes to properly install and forward traffic to prefixes within the SR island. Since LDP-only nodes cannot advertise a prefix SID, a mapping server is necessary to advertise the prefix SID on their behalf. This ensures a smooth SR/LDP Interworking and allows SR paths to reach prefixes within the LDP domain. Without a mapping server, SR nodes would not be able to forward traffic to LDP-only prefixes, making it a crucial component in mixed SR and LDP environments. We have covered the Interworking deployment models, including SR to LDP, LDP to SR, SR over LDP, and LDP over SR. Exciting concepts that open up great possibilities in network design.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (4)
> **Env Vars:** ldp (37), sid (7), lfib (3), igp (1), fib (1)
> **Versions:** 5.5.5 (7), 4.4.4 (6)
> **Definitions:** is an  (6)
> **Analogies:** for example (2), such as (1)
> **CLI Commands:** node (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 5. Topology-Independent Loop-Free Alternate (TI-LFA)

[↑ Back to Table of Contents](#table-of-contents)

#### [Classic loop free alternate (LFA)](https://www.linkedin.com/learning/mpls-segment-routing/classic-loop-free-alternate-lfa?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/classic-loop-free-alternate-lfa?u=76281980&t=0)** - [Instructor] In this lesson, we will explore classic loop-free alternate, or LFA, fast reroute, or FRR, a mechanism used in networks to quickly converge and switch to a backup path in case of a link failure. LFA FRR precomputes a backup path which can be immediately activated upon failure, allowing sub-50 millisecond reroute times. This ensures minimal packet loss during network failures, enhancing network resilience. Let's walk through a simple example to better understand how LFA FRR works. We have four routers in our topology. R1 is connected to both R2 and R3. R2 is connected to R4. R3 is also connected to R4. R4 is connected to the destination network. The network uses an IGP, or interior gateway protocol, like OSPF or IS-IS to populate the [[Routing]] tables. Path selection and primary route. In this example, the primary path from R1 to destination network is R1 to R2 to R4 to destination network, because this path the lowest IGP cost. The alternate path, which is less optimal due to higher IGP cost, is R1 to R3 to R4 to destination network. Using classic LFA FRR.
>
> **[1:36](https://www.linkedin.com/learning/mpls-segment-routing/classic-loop-free-alternate-lfa?u=76281980&t=96)** We want to ensure that if the primary path through R2 and R4 fails, the network can switch to the backup path as quickly as possible. This is where classic LFA FRR comes into play. With classic LFA FRR, the IGP precomputes a backup path for each primary path per IGP destination. In our case, the backup path would be R1 to R3 to R4 to destination network. This backup path is pre-installed in the data plane, so if the primary link fails, traffic can be immediately rerouted to the backup paths. Upon local failure of the link between R2 and R4, all the backup paths of the impacted destination are activated in a prefix-independent manner, resulting in sub-50 millisecond loss of connectivity. Advantage of classic LFA FRR. Per-prefix LFA. It is a simple, automatic and local technique that provides fast reroute for each prefix independently. Sub-50 millisecond reroute. This quick switchover significantly reduces downtime in case of network failures. However, classic LFA FRR has limitations. Routing loops. Consider a scenario where the link between R2 and R4 fails. R2's backup paths might send traffic to R1
>
> **[3:11](https://www.linkedin.com/learning/mpls-segment-routing/classic-loop-free-alternate-lfa?u=76281980&t=191)** and then R1 may forward it back to R2 because R1 believes the best path is still through R2. This creates a routing loop where traffic bounces between routers until the network converges. This happens because classic LFA FRR does not ensure synchronization between routers, leading to incomplete coverage and topology-dependent behavior. Non-optimal backup paths. Another issue is that classic LFA doesn't always provide the most optimal backup path. The backup path may not be designed to handle the same amount of traffic as the primary path, and it may involve edge nodes that are not ideal for transit traffic. Operators may need to perform additional LFA configuration to avoid selecting undesired backup paths. The solution is topology-independent LFA, or TI-LFA. To address the limitation of classic LFA FRR, operators prefer using topology-independent LFA, or TI-LFA, which provides a more flexible and optimal backup paths, aligned with the regular IGP convergence. We'll cover TI-LFA in detail in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (3)
> **Env Vars:** lfa (18), frr (10), igp (6), ospf (1)
> **UI Navigation:** switch to (2)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [TI-LFA for link protection](https://www.linkedin.com/learning/mpls-segment-routing/ti-lfa-for-link-protection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/ti-lfa-for-link-protection?u=76281980&t=0)** - [Instructor] In the previous lesson, we discussed classic loop-free alternate or LFA and its limitations, including transient congestion and suboptimal [[Routing]]. Today, we will explore topology-dependent loop-free alternate or TI-LFA, which resolves these issues by providing 100% link and node protection with sub 50 millisecond reroute time. Why haven't we used TI-LFA before segment routing? The main reason is that before segment routing or SR, the post-convergence path, the past used after IGP convergence following a failure, wasn't always loop-free. Classic routing mechanisms didn't have a way to guarantee that a pre-computed backup path wouldn't create a loop. However, SR now allows us to use the post-convergence path with convenience since TI-LFA enforces loop-freeness by encoding the backup route as a sequence of segments. This encoding enables TI-LFA to steer traffic along an explicit, loop-free path. By using segment lists, TI-LFA guarantees a loop-free repair path. When a failure occurs, the segment list explicitly directs traffic along the predetermined backup path, avoiding potential routing loops that were an issue before SR.
>
> **[1:34](https://www.linkedin.com/learning/mpls-segment-routing/ti-lfa-for-link-protection?u=76281980&t=94)** Let's look at an example of TI-LFA with link protection using a simple network with four routers, R1, R2, R3, and R4. In this network, OSPF is configured with different link costs, and the destination network 4.4.4.4/32 is connected to R4. The best path from R1 to 4.4.4.4/32 is R1 to R2 to R4 with a total cost of two, which is lower than other available paths. Suppose we enable TI-LFA for link protection on R1. TI-LFA can be configured per interface, but can also be configured on instance or area level inherited by lower levels. router ospf PROCESS-TAG. area AREA ID. interface INTERFACE_NAME. fast-reroute per-prefix. fast reroute per-prefix ti-lfa. In the routing table, we can now see a backup path for 4.4.4.4/32 pre-installed in the data plane. If R1's gigabit 0/0/0/0 interface or primary link to R4 fails, traffic will instantly redirect to R3 10.1.3.3 allowing rerouting in less than 50 millisecond. This immediate rerouting minimizes service interruption by leveraging a backup path available
>
> **[3:07](https://www.linkedin.com/learning/mpls-segment-routing/ti-lfa-for-link-protection?u=76281980&t=187)** in both the routing table and FIB or forwarding information base. Thanks to segment routing, TI-LFA can enforce a loop-free repair path even if the primary link from R2 to R4 fails. From R2's perspective, for instance, if this link goes down, R2 can encode a segment list in the packet that directs this through R1 and R3 before reaching R4. R1 forwards the packet to R3 based on the segment list, avoiding any looping back to R2. TI-LFA leveraged the post-convergence path, the optimal path that will be used after IGP convergence following a failure. This path is pre-planned and dimensioned by the operator to handle traffic in case of failure. By design, this approach eliminates transient congestion and provides seamless rerouting without sacrificing optimality. TI-LFA, especially with segment routing, is a powerful tool for enhancing network [[Resiliency]]. It not only ensures fast failover within 50 millisecond, but also guarantees loop-free rerouting through segment lists. With SR and TI-LFA, networks can automatically handle failures without congestion or suboptimal paths, providing a highly resilient infrastructure. In the next lesson, we will dive deeper into TI-LFA to explore its inner workings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (9), [[Resiliency]] (1)
> **Env Vars:** lfa (14), igp (2), ospf (1), process (1), tag (1)
> **Versions:** 4.4.4 (3), 10.1.3 (1)
> **Cross-References:** we discussed (1), in the next (1)
> **CLI Commands:** node (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [TI-LFA for node protection](https://www.linkedin.com/learning/mpls-segment-routing/ti-lfa-for-node-protection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/ti-lfa-for-node-protection?u=76281980&t=0)** - [Instructor] In this lesson, we will explore topology independent loop-free alternate, TI-LFA, with a focus on node protection. To illustrate, let's walk through a scenario. We have four routers, R1, R2, R3, and R4, configured with OSPF in area 0. The target network is the loopback interface 4.4.4.4/32 on R4. And R1 has multiple paths to reach it. The primary path based on the IGP cost is from R1 to R2 to R4 with a total cost of three. First, let's start by enabling TI-LFA link protection on interface gigabit 0/0/0/0 of R1, which we covered in the previous lesson, router ospf ARASH, area 0.0.0.0, interface gigabit0/0/0/0, fast-reroute per-prefix, fast-reroute per-prefix ti-lfa enable. After configuration, R1's IGP recalculates the best path, assuming that the gigabit0/0/0/0 link could potentially fail. With this assumption, the backup path from R1 to R3 to R4 is selected, which has a total cost of eight to reach R4's loopback. Let's shut down the gigabit0/0/0/0 interface on R1. A traceroute from R1 to 4.4.4.4
>
> **[1:38](https://www.linkedin.com/learning/mpls-segment-routing/ti-lfa-for-node-protection?u=76281980&t=98)** shows that traffic will follow the path from R1 to R3 to R2 to R4 as expected. Now let's enable TI-LFA node protection instead. rotor ospf ARASH, area 0.0.0.0, interface gigabit0/0/0/0, fast-reroute pre-prefix, fast-reroute per-prefix ti-lfa enable, fast-reroute per-prefix tiebreaker node-protecting index 1-255. When we enable node protection, IGP assumes that the next-hop router R2 might fail rather than just the link. This means it avoids paths that would still go through R2, such as R1 to R3 to R2 to R4. Instead, it uses an alternate path that bypasses R2 entirely from R1 to R3 to R4. With this path, the total cost to reach R4's loopback 4.4.4.4/32 is now 16. The key difference between TI-LFA link protection and TI-LFA node protection is how the IGP calculates alternate paths. With link protection, only the link failure is considered. While with node protection, the next-hop router is assumed to have failed, prompting a completely different path selection to ensure the route remains resilient.
>
> **[3:14](https://www.linkedin.com/learning/mpls-segment-routing/ti-lfa-for-node-protection?u=76281980&t=194)** The output of show ospf routes 4.4.4.4/32 backup-path displays the backup path details. P node: node 3.3.3.3 with label 3, where P nodes refers to a node reached via a prefixes ID. Here, label 3 represents implicit null. Q node: node 4.4.4.4 with label 24002 where Q node indicates a node reached via an adjacency SID or adjacency segment ID The label 24002 is the adjacency SID for the link to 4.4.4.4. This structure shows the backup path using specific segment [[Routing]] identifiers, prefix SID for nodes and adjacency SID For direct adjacencies. Link protection may also provide guaranteed node protection. The link protecting repair path is the same as the node protecting repair path. In this figure, enabling link protection on node 1's interface will also protect node 2. In the next lesson, we will dive into another powerful type of TI-LFA. Get ready for more advanced protection techniques.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (1)
> **CLI Commands:** node (17)
> **Env Vars:** lfa (6), igp (4), sid (4), arash (2), ospf (1)
> **Versions:** 4.4.4 (6), 0.0.0 (2), node 3 (1), 3.3.3 (1), node 4 (1)
> **Cross-References:** we covered (1), in the next (1)
> **Definitions:** refers to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [TI-LFA with SRLG](https://www.linkedin.com/learning/mpls-segment-routing/ti-lfa-with-srlg?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/ti-lfa-with-srlg?u=76281980&t=0)** - [Instructor] Welcome to today's lesson, where we will explore Topology-Independent Loop-Free Alternate, or TI-LFA, and how it interacts with Shared Risk Link Groups or SRLG. TI-LFA is a powerful feature that provides fast reroute capabilities, ensuring traffic continues to flow in the event of link or node failures. Before we dive into TI-LFA, let's briefly discuss Shared Risk Link Groups or SRLGs. SRLGs are a set of links that share a common risk factor, if one link fails, all links in the group are likely to fail as well. For instance, links that share the same physical cable or are subject to the same external environmental factors. Imagine we have a network with four routers, R1, R2, R3, and R4. Let's say that R2 is connected to both R3 and R4, and both of these links are part of the same SRLG due to their shared physical infrastructure. The destination is a network connected to R4. In this setup, if R2 is sending traffic to the 4.4.4.4/32 network, it uses the direct link between R2 and R4, with a cost of 2 to reach 4.4.4.4/32. However, if the link between R2 and R4 fails, we must ensure R2 can still reach R4.
>
> **[1:35](https://www.linkedin.com/learning/mpls-segment-routing/ti-lfa-with-srlg?u=76281980&t=95)** This is where TI-LFA comes into play. If we enable TI-LFA link protection, R2 can use an alternate path through R3 to reach R4. Now, when we enable TI-LFA with SRLG awareness, R2 considers the risk of using R3 link if R2 link fails. Since R2 link and R3 link are in the same SRLG, if R2 link fails, R2 can't rely on R3 either, as both are vulnerable to the same failure. With SRLG-aware TI-LFA, R2 will not just look for any alternate path, it'll ensure that the alternate path is not affected by the same risk as the primary path. In our case, R2 may find that the only viable path to R4 is through an entirely different router, say R1, which is not in the SRLG with R2 or R3. The path from R1 has a total cost of 17 to the destination network, while the path from R3 has a cost of 12. However, due to the same SRLG, R2 will choose the path from R1. We need to configure the same SRLG value on links that share the same risk factors with these commands. srlg. interface INT_NAME. INDEX value SRLG_VALUE. We can configure multiple SRLG values for a single interface,
>
> **[3:08](https://www.linkedin.com/learning/mpls-segment-routing/ti-lfa-with-srlg?u=76281980&t=188)** allowing to belong to multiple SRLG groups. Each SRLG can be identified by a unique index value, enabling precise control over shared risk associations on that interface. For example, srlg, interface Gi0/0, srlg 10 value 100, srlg 20 value 200. In this example, the interface Gi0/0 is associated with two SRLGs, identified by index 10 and index 20, with respective SRLG values 100 and 200. To ensure that the fast reroute or FRR mechanism consider SRLG, we should configure the following command: fast-reroute per-prefix tiebreaker srlg-disjoint index <1-255>. This command tells the router to use SRLG disjoint paths as a tiebreaker when selecting backup paths for per-prefix protection, helping to avoid paths that shared the same SRLG risk. The 1 to 255 index uniquely identifies the tiebreaker rule, which is helpful when managing multiple rules for backup path selection. To sum up: TI-LFA with SRLG awareness enhances network resilience by preventing traffic from being rerouted to paths that share the same risk factors. This intelligent path selection helps maintain
>
> **[4:41](https://www.linkedin.com/learning/mpls-segment-routing/ti-lfa-with-srlg?u=76281980&t=281)** network reliability and minimizes downtime. In the next lesson, we will explore TI-LFA in more depth, covering additional details.

> [!info]- Semantic Content
>
> **Env Vars:** srlg (16), lfa (9), int_name (1), index (1), srlg_value (1)
> **Prerequisites:** configure (3), setup (1)
> **Analogies:** for instance (1), imagine (1), for example (1)
> **CLI Commands:** node (1), find (1)
> **Versions:** 4.4.4 (2)
> **Definitions:** is a  (2)
> **SQL:** index (1)
> **Cross-References:** in the next (1)

#### [TI-LFA preference](https://www.linkedin.com/learning/mpls-segment-routing/ti-lfa-preference?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/ti-lfa-preference?u=76281980&t=0)** - [Instructor] In this lesson, we will cover TI-LFA preference and see what happens when multiple protection mechanisms are enabled simultaneously. So far, we have learned about TI-LFA for link protection, node protection, and SRLG. But if we enable multiple of these protocols at once, which one will be preferred? To understand this better, let's start with a simple scenario that includes four routers, R1, R2, R3, and R4. In this setup, we have two links between R1 and R2 and the destination network, 4.4.4.4/32, is connected to R4. According to IGP cost, the base path from R1 to 4.4.4.4/32 is R1 to R2 using GigabitEthernet0/0/0/0, then from R2 to R4. The total cost of this path is 3. First, let's enable TI-LFA link protection on the GigabitEthernet0/0/0/0 interface of R1. Now, if the GigabitEthernet0/0/0/0 fails, IGP will calculate the post-convergence paths to protect against this link failure. With link protection enabled, the backup path will reroute traffic from R1 to R2 using the second link,
>
> **[1:34](https://www.linkedin.com/learning/mpls-segment-routing/ti-lfa-preference?u=76281980&t=94)** GigabitEthernet0/0/0/2, between R1 and R2, and then continue from R2 to R4. The cost of this link protected backup path is 4. Now, let's enable node protection on R1's GigabitEthernet0/0/0/0 interface. Here, IGP will assume the entire next hop on this interface has failed and calculate the best available path accordingly. With no protection enabled, traffic will be rerouted from R1 to R3, then on to R4. The total cost of this node protected path to the destination network 4.4.4.4/32 is 16. Now, what happens if we enable both link protection and node protection on the GigabitEthernet0/0/0/0 interface of R1? Which one will be preferred? The answer is that node protection is always preferred over link protection. This is because node protection provides an additional layer of security, protecting against both link and node failures. In other words, when node protection is enabled, it assumes the entire node could be down and selects a backup path that bypasses the next hop node altogether, providing greater resilience. Let's compare TI-LFA link protection and SRLG. The GigabitEthernet0/0/0/0
>
> **[3:13](https://www.linkedin.com/learning/mpls-segment-routing/ti-lfa-preference?u=76281980&t=193)** and GigabitEthernet0/0/0/2 interface on R1 have been assigned the same SRLG value, indicating that they share a common risk. I have also configured TI-LFA link protection on GigabitEthernet0/0/0/0. Now let's look at how these configurations affect the backup paths chosen by IGP. Without SRLG configured, link protection would reroute traffic from R1 using the GigabitEthernet0/0/0/2 interface to reach R2, and then use the direct link from R2 to R4 to reach the destination network, 4.4.4.4/32. This path has a cost of 4 and avoids the failed GigabitEthernet0/0/0/0 link on R1. However, because GigabitEthernet0/0/0/0 and GigabitEthernet0/0/0/2 on R1 share the same SRLG value, TI-LFA assumes that these links could fail together, so instead, it chooses a path that avoids both interfaces. The new path goes from R1 to R3, then from R3 to R2, and finally to R4. This SRLG-protected path has a higher cost of 8, but provides greater resilience by avoiding links with shared risk.
>
> **[4:47](https://www.linkedin.com/learning/mpls-segment-routing/ti-lfa-preference?u=76281980&t=287)** This example shows that SRLG has a higher preference than link protection. SRLG considers common failure domains and offers protection at a higher level of [[Resiliency]]. This preference hierarchy means that TI-LFA link protection has the lowest priority when compared to TI-LFA node protection and SRLG, providing basic backup for link failures unless a shared risk is identified. Let's compare TI-LFA node protection and SRLG to understand their interactions when both are configured. The GigabitEthernet0/0/0/0 and GigabitEthernet0/0/0/2 interface on R1 share the same SRLG value, indicating a common risk. TI-LFA node protection is enabled on GigabitEthernet0/0/0/0 of R1. When both node protection and SRLG are configured, IGP attempts to find the backup path that satisfies both requirements. Node protection: this require avoiding the next hop, R2. SRLG: since GigabitEthernet0/0/0/0 and GigabitEthernet0/0/0/2 share an SRLG value, IGP also avoids these interfaces. The IGP ultimately selects the path from R1 to R3 and then to R4 as the backup route.
>
> **[6:22](https://www.linkedin.com/learning/mpls-segment-routing/ti-lfa-preference?u=76281980&t=382)** This path avoids both R2 for node protection and the interface with the SRLG value for SRLG protection, providing a robust alternative path. In some cases, the IGO cannot find the backup path that satisfies both node protection and SRLG constraints. When this happens, the index value configured for each feature determines which one takes precedence. The feature with the higher index value is preferred. If node protection has a higher index, the IGP will prioritize avoiding the protected node. If SRLG has a higher index, the IGP will prioritize avoiding the SRLG-linked interfaces. In this example, SRLG is configured on interfaces GigabitEthernet0/0/0/0 and GigabitEthernet0/0/0/1 on R1 With the same SRLG value. Node protection is enabled on GigabitEthernet0/0/0/0 on R1. When traffic from R1 to the destination 4.4.4.4/32 on R4 cannot satisfy both node protection and SRLG requirements, the network will default to the index value priority. If SRLG has a higher index than node protection, the IGP will select the path R1 GigabitEthernet0/0/0/2 to R2 to R4,
>
> **[7:57](https://www.linkedin.com/learning/mpls-segment-routing/ti-lfa-preference?u=76281980&t=477)** as this satisfies the SRLG requirement, despite passing through R2. If node protection has a higher index than SRLG, the path R1 to R3 to R4 is chosen to avoid passing through R2. This indexing method allows operators to prioritize either avoiding the same SRLG interfaces or bypassing a failed node based on network design and traffic protection needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Resiliency]] (1)
> **Env Vars:** srlg (26), lfa (10), igp (10), igo (1)
> **CLI Commands:** node (24), find (2)
> **Versions:** 4.4.4 (5)
> **UI Navigation:** select the (1)
> **Definitions:** in other words (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [TI-LFA for LDP traffic](https://www.linkedin.com/learning/mpls-segment-routing/ti-lfa-for-ldp-traffic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/ti-lfa-for-ldp-traffic?u=76281980&t=0)** - [Instructor] In this lesson, we will explore how TI-LFA can enhance traffic rerouting efficiency in a service provider network that primarily relies on LDP. We will work through a scenario where we have six routers with R5 and R6 acting as provider edge or PE routers. All routers are running LDP to handle label switching and provide traffic paths. Traffic from R5 to R6 takes the best IGP path, passing sequentially through R5, R1, R2, and R4 to reach R6. However, if the link between R1 and R2 fails, LDP will need time to reconverge and select an alternative path. This delay can disrupt applications relying on the network. To improve convergence, we enable segment [[Routing]] or SR on the core routers R1, R2, R3, and R4 while keeping LDP on the PE routers R5 and R6. With TI-LFA enabled on R1's interface, if the primary link between R1 and R2 fails, the traffic will automatically switch to an alternative path, the bottom path, within 50 milliseconds. This setup allows us to utilize the fast reloading capabilities of TI-LFA without fully migrating the entire network to SR. This rapid reloading minimizes disruptions, maintaining service continuity
>
> **[1:34](https://www.linkedin.com/learning/mpls-segment-routing/ti-lfa-for-ldp-traffic?u=76281980&t=94)** and enhancing the network's convergence time. This example highlights the role of TI-LFA in ensuring rapid recovery even in networks primarily dependent on LDP, by leveraging SR capabilities on selected routers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (1)
> **Env Vars:** ldp (5), lfa (4), igp (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [TI-LFA wrap-up](https://www.linkedin.com/learning/mpls-segment-routing/ti-lfa-wrap-up?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/ti-lfa-wrap-up?u=76281980&t=0)** - [Instructor] We have covered the essential of Topology-Independent Loop-Free Alternate, or TI-LFA, an advanced mechanism in segment [[Routing]] that ensures quick, reliable failover paths for both link and node protection, all within a 50 milliseconds recovery timeframe. TI-LFA delivers 100% coverage by offering both link and node protection, preventing any gaps in failover, which is especially critical in high-demand networks. Key benefits of TI-LFA. It avoids transient congestion and suboptimal routing by leveraging the post-convergence path that's being planned to handle traffic during a failure. The setup is simple, easy to operate, and fully automated by the IGP. No complex manual configurations are needed, making TI-LFA highly reliable and straightforward for network operators. TI-LFA is designed for incremental deployment and can seamlessly protect both LDP and IP traffic, providing a smooth transition into segment routing. Now you might wonder what's the most optimal, natural path upon failure? With TI-LFA, it's the post-convergence path, the path that IGP selects after convergence following a failure. This path has already been dimensioned to handle the traffic,
>
> **[1:32](https://www.linkedin.com/learning/mpls-segment-routing/ti-lfa-wrap-up?u=76281980&t=92)** ensuring seamless failover without causing further congestion. Why TI-LFA only after segment routing? Without segment routing, we couldn't reliably use the post-convergence path as it may not always be loop-free. With segment routing, TI-LFA enforces loop-free post-convergence paths by encoding these paths as segment list, guaranteeing stable and optimal recovery. Let's look at the scenario. Imagine we have R1 sending traffic to 6.6.6.6/32 via SID 16006, initially taking the top path to R6. If TI-LFA is configured on R1's interface to R2 and that link fails, R1 reroutes traffic to R6 via R3 without needing any additional SIDs, demonstrating TI-LFA's efficiency. However, this isn't always the case. If a failure could lead to potential loops, R1 might need to add more segments such as 16004 and 16006 to ensure the traffic frees R3 and then R4 without looping back. The number of segments to add is calculated by the IGP, and varies based on the destination and network topology. In TI-LFA, extensive research has led to an implementation that can reliably scale
>
> **[3:07](https://www.linkedin.com/learning/mpls-segment-routing/ti-lfa-wrap-up?u=76281980&t=187)** and compute these segments with efficiency. Repair segment list sizes. For a symmetric network and link protection, it's proven that two segments are often sufficient. For asymmetric networks or more complex scenarios like node or SRLG protection, there is no theoretical segment limit, but in real-world cases, it remains manageable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (6)
> **Env Vars:** lfa (11), igp (3), ldp (1), sid (1), srlg (1)
> **CLI Commands:** node (3)
> **Analogies:** imagine (1), such as (1)
> **Versions:** 6.6.6 (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 6. Segment Routing Traffic Engineering (SR-TE)

[↑ Back to Table of Contents](#table-of-contents)

#### [Segment routing traffic engineering (SR-TE) overview](https://www.linkedin.com/learning/mpls-segment-routing/segment-routing-traffic-engineering-sr-te-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/segment-routing-traffic-engineering-sr-te-overview?u=76281980&t=0)** - [Instructor] Welcome to this session on Segment [[Routing]] [[Traffic Engineering]] or SR-TE. In this lesson, we will explore how SR-TE enables network operators to define paths for traffic flow in a way that meets specific requirements, such as lower costs or minimal delays. SR-TE allows us to steer traffic along paths that are intentionally chosen based on our policies or service level agreements or SLAs. With SR-TE, we can manage traffic flows more intelligently, making the network responsive to various service demands. To guide traffic through a specific path, SR-TE uses what we call an SR policy. An SR policy is a set of rules that directs traffic to follow a predetermined path. This SR policy is uniquely defined by a tuple. consisting of head-end, color, endpoint. Head-end, this is the node where the SR policy is created and implemented. Color, a numerical value that differentiates SR policies for the same source and destination path. Endpoint, the destination or endpoint of the SR policy. Each SR policy at a specific head-end can only have one instance with a given color for the same destination. Let's learn about policy elements in detail.
>
> **[1:35](https://www.linkedin.com/learning/mpls-segment-routing/segment-routing-traffic-engineering-sr-te-overview?u=76281980&t=95)** The head-end is the starting point where the SR policy is instantiated. It's essentially where policy enforcements begins. The color value identifies different SR policies targeting the same destination node, but serving different purposes, such as low cost or low-delay paths. Each SR policy at the head-end is uniquely defined by the color and the destination or endpoint. This color represents a specific treatment, such as a policy or an SLA type. The endpoint is the destination where the SR policy is directing traffic. An example of policy colors could be green for low-cost paths, and red for low-delay paths. Let's walk through two use case examples to see how SR-TE can be applied. Suppose we have a subnet, 1.1.1.0/24, and we want to direct traffic through a low-cost path via Node 4. We could define an SR policy, 1, Green, 4, where head-end is Node 1. Color is green for low cost, Endpoint is Node 4. Now, let's say we have another subnet 2.2.2.0/24, and for this traffic, we need minimal delay. We can create another SR policy, 1, Red, 4, with Head-end is Node 1.
>
> **[3:10](https://www.linkedin.com/learning/mpls-segment-routing/segment-routing-traffic-engineering-sr-te-overview?u=76281980&t=190)** Color is red for low delay. Endpoint is Node 4. Each of these SR policies ensures that the network dynamically selects the appropriate path based on the policy color, giving traffic either a low-cost or a low-delay treatment as required. In summary, SR-TE enables tailored traffic steering by defining SR policies with head-end, color, and endpoint identifiers. Each policy has a unique color representing a specific treatment, like low cost or low delay. Color-based policies allow us to differentiate paths, even for the same source destination pair, providing flexibility to meet diverse SLAs within the same network. By leveraging SR-TE, operators can efficiently meet service-level demands and optimize traffic flow across complex network topologies. In the next lesson, we will dive deeper into the details of Segment Routing Traffic Engineering or SR-TE. And stay tuned to learn more about maximizing the benefits of SR-TE in your network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (2), [[Traffic Engineering]] (2)
> **CLI Commands:** node (7)
> **Versions:** node 4 (3), node 1 (2), 1.1.1 (1), 2.2.2 (1)
> **Analogies:** such as (3)
> **Env Vars:** sla (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [SR-TE policy with an explicit path](https://www.linkedin.com/learning/mpls-segment-routing/sr-te-policy-with-an-explicit-path?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/sr-te-policy-with-an-explicit-path?u=76281980&t=0)** - [Instructor] In this lesson, we are diving into SR-TE policies with explicit paths unlocking how to take full control over your traffic flow In segment [[Routing]] [[Traffic Engineering]], an SR policy is a structured path through the network used to direct traffic according to a specified requirements. An SR policy can consist of one or more candidate paths, or Cpaths, which are options for reaching a destination. Each candidate path has an associated preference value that influences which path is chosen. The SR policy will select and instantiate one single path in the routing and forwarding information base, RIB/FIB. This is the preferred valid candidate path, meaning it's the highest priority option that's operationally ready. Candidate path can be either dynamic where the path is calculated automatically based on network conditions or explicit where the path is predefined with a specific sequence of SIDs or segment identifiers representing each hop along the way. In our example, we want to route traffic from R1 to the destination 6.6.6.60/32. The shortest IGP path is R1 to R2 to R3 to R6 but for traffic engineering purposes,
>
> **[1:35](https://www.linkedin.com/learning/mpls-segment-routing/sr-te-policy-with-an-explicit-path?u=76281980&t=95)** we will create an SR-TE policy with two candidate paths. Top path, R1 to R2 to R4 to R3 to R6 with a preference of 100. Bottom path, R1 to R2 to R5 to R3 to R6 with a preference of 200. Step one, configuring segment lists. Each candidate path uses a segment list that defines the exact path for traffic. This list includes the specific labels or SIDs that represent each hop or router along the path. Segment list R12436. This is the path with preference 100, and it defines an explicit set of hubs from R1 to the destination via a specific intermediate routers. Segment list name R12436, index 10 [[Multiprotocol Label Switching (MPLS)|mpls]] label 16,002, index 20 mpls label 16,004, index 30 mpls label 16,003, index 40 mpls label 16,006. Segment list R12536. This is the path with preference 200, and it defines an explicit set of hubs from R1 to the destination via a specific intermediate routers. Segment list name R 12536, index 10 mpls label 16,002,
>
> **[3:11](https://www.linkedin.com/learning/mpls-segment-routing/sr-te-policy-with-an-explicit-path?u=76281980&t=191)** index 20 mpls label 16,005, index 30 mpls label 16,003, index 40 mpls label 16,006. Step two, defining the SR-TE policy. Now that we have defined the segment lists, let's create the policy. Here's the configuration. Segment-routing traffic-eng policy policy one. Policy one is the name of the policy being created. An SR-TE policy is a specific path or set of paths that traffic will follow to reach a destination based on traffic engineering or TE requirements. Color 100 endpoint IPv4 6.6.6.6. The color is used as a tag to identify a specific SR policies often tied to different types of traffic. In some cases, color can represent the priority type or even a quality requirement of the traffic. The endpoint is the final destination of the policy this policy will handle. Here, it's configured as an IPv4 address 6.6.6.6 binding SID mpls 1000. The binding SID or BSID is a label in this case, 1000, that uniquely identifies this SR-TE policy in the network. Binding SIDs are useful
>
> **[4:45](https://www.linkedin.com/learning/mpls-segment-routing/sr-te-policy-with-an-explicit-path?u=76281980&t=285)** because they simplify packet forwarding. When packets arrive at R1 with the label 1000, R1 will follow the instructions in this policy to reach the destination. Binding SIDs provides a mechanism to map incoming traffic to SR-TE policies efficiently. Candidate paths, candidate path preference. Each candidate path has a preference which ranks the path. Higher numbers indicate higher priority. The router will select the valid candidate path with the highest preference to be active in the RIB/FIB. Multiple candidate paths. Here there are two candidate paths. Preference 200, the primary or preferred path segment list, R12536. This path has the highest priority because it has the highest preference value 200. Preference 100. The backup path segment list R12436. This path will be used if the primary path becomes unavailable. This setup defines a policy name, policy one for traffic engineering targeting to destination 6.6.6.6 with a binding SID of 1000. The router will try to use the path with the highest preference by default, switching to the backup path if the primary path fails. To monitor the policy, use show segment-routing traffic-eng policy. This command will show details such as the selected path,
>
> **[6:22](https://www.linkedin.com/learning/mpls-segment-routing/sr-te-policy-with-an-explicit-path?u=76281980&t=382)** the preference, and the status of each candidate path. Additionally, you can inspect the label forwarding information based on LFIB to verify the binding SID. Show mpls forwarding table. In the LFIB, you will see that label of 1000 maps to policy one indicating that any traffic received with label 1000 will follow the configured path. There are two ways to steer traffic into this policy. One, using the binding SID. Packets sent to R1 with label 1000 will automatically follow policy one's instructions. Two, using a static route. Define a static route that directs traffic for 6.6.6.60/32 to SR-TE policy. Router static address-family IPv4 unicast 6.6.6.60/32 sr-policy srte_c_100_ep_6.6.6.6.
>
> **[7:26](https://www.linkedin.com/learning/mpls-segment-routing/sr-te-policy-with-an-explicit-path?u=76281980&t=446)** Here, the static route will automatically select policy one, which has the system generated name srte_c_100_ep_6.6.6.6 to reach the destination. This approach is useful for scenarios, various specific prefix needs to follow the SR-TE policy. This completes our configuration and testing for an SR-TE policy with an explicit paths

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (10), [[Routing]] (4), [[Traffic Engineering]] (4)
> **Env Vars:** sid (5), r12436 (3), rib (2), fib (2), r12536 (2)
> **Versions:** 6.6.6 (8)
> **Definitions:** is a  (3)
> **UI Navigation:** select the (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Using adjacency SID in SR-TE with explicit method](https://www.linkedin.com/learning/mpls-segment-routing/using-adjacency-sid-in-sr-te-with-explicit-method?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/using-adjacency-sid-in-sr-te-with-explicit-method?u=76281980&t=0)** - [Narrator] In this video, we will discuss the need to use adjacency SIDs in segment [[Routing]], [[Traffic Engineering]], or SRT when employing the explicit method for traffic steering. The explicit method in SRT allows us to define a specific path for our traffic to follow, giving us more control over how package travels the network. By using explicit paths, we can prioritize certain links or routes based on our network requirements, enabling better traffic management and resource utilization. In this scenario, we have four routers. R1 is connected to R2. R2 has two links connecting to R3. R3 is then connected to R4. Each link between R2 and R3 is associated with a different adjacency SID. 24,001 for the top pass and 24,002 for the bottom pass. In our configuration, we want to establish a policy where traffic takes the top pass as the first priority and the bottom pass as the second priority. However, we cannot use the prefix SID of R3 in this case because both links ultimately reach the same prefix, SID of R3. To implement this, we need to define our policy using explicit adjacency SIDs. For the top pass, we will assign a priority of 200, while for the bottom pass,
>
> **[1:33](https://www.linkedin.com/learning/mpls-segment-routing/using-adjacency-sid-in-sr-te-with-explicit-method?u=76281980&t=93)** we will set a lower priority of 100. By configuring our policy with the specified priorities and using the adjacency SIDs, we can effectively control the path that our traffic takes through the network. Here we have two segment lists, green and red. Segment list green, index one. These points to the [[Multiprotocol Label Switching (MPLS)|MPLS]] label 16,002, which may represent the first segment of R traffic path. Index two. These points to the MPLS label 24,001, corresponding to the adjacency SID for the primary link between R2 and R3. Index three. These points to the MPLS label 16,003, which might represent another segment in the path toward the destination. This segment please allows us to steer traffic down the preferred path, utilizing the adjacency SID 24,001, which we previously designated as the top path with a higher priority. Segment list read, index one. Similar to the green list, this index also points to MPLS label 16,002. Index two. This points to the MPLS label 24,002, which corresponds to the adjacency SID for the secondary link between R2 and R3. Index three. Again, these points to MPLS label 16,003. The red segment list is used for traffic that should take the lower priority path,
>
> **[3:08](https://www.linkedin.com/learning/mpls-segment-routing/using-adjacency-sid-in-sr-te-with-explicit-method?u=76281980&t=188)** directing it through the adjacency SID 24,002. In summary, using adjacency SIDs in SRT with the explicit method allows us to achieve precise control over traffic paths, ensuring that our network operates efficiently according to our specific priorities. The configuration provided is defining an SRT segment routing traffic engineering policy name policy one. This policy specifies two candidate paths with different priorities, allowing traffic to be directed over preferred routes based on the segment lists, green and red. This policy prioritizes the green path for routing traffic to 4.4.4.4 through a specific segments and labels. If the green pass is unavailable, it'll automatically switch to the red path.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (6), [[Routing]] (3), [[Traffic Engineering]] (2)
> **Env Vars:** sid (7), mpls (6), srt (4)
> **Versions:** 4.4.4 (1)
> **UI Navigation:** switch to (1)
> **Analogies:** similar to (1)
> **Speakers:** - [narrator] (1)

#### [Understanding SR-TE policy binding SID](https://www.linkedin.com/learning/mpls-segment-routing/understanding-sr-te-policy-binding-sid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/understanding-sr-te-policy-binding-sid?u=76281980&t=0)** - [Instructor] In this lesson, we are going to explore an essential concept in Segment [[Routing]] [[Traffic Engineering]] or SRT. The binding segment identifier or binding SID. Binding SIDs play a crucial role in SRT by simplifying policy implementation and helping control traffic with precision across the network. Let's dive into what a binding SID is, how it functions, and why it's such a powerful tool for traffic engineering. What is a binding SID? A binding SID is an identifier assigned to an SRT policy that represents a specific path or policy in the network. Think of it as a unique label that consolidates an entire SRT policy under a single straightforward identifier. Rather than adding multiple SIDS to dictate the exact path for traffic, a single binding SID can be applied to streamline the process. Why use a binding SID? Binding SIDs bring several advantages to SRT. Simplification: By consolidating a policy into one identifier, you make complex SRT policies simpler to apply and manage. [[Scalability]]: Binding SIDs allow you to create and manage more flexible, scalable networks. You can group policies and easily reference paths
>
> **[1:35](https://www.linkedin.com/learning/mpls-segment-routing/understanding-sr-te-policy-binding-sid?u=76281980&t=95)** without reconfiguring individual paths. Policy control: With a binding SID, it becomes easier to apply or withdraw policies as network demands shift, offering on-demand path management. How a binding SID works? Imagine you have an SRT policy that defines a specific path from a head end router to a target endpoint. When you assign a binding SID to this policy, any traffic sent to that binding SID will automatically follow the specified SRT policy paths. This single binding SID is treated like an [[Multiprotocol Label Switching (MPLS)|MPLS]] label or an identifier that represents the entire path for that policy. In this configuration, we have assigned Policy1 a binding SID of MPLS label 1000. The endpoint is set to 4.4.4.4, which means any traffic directed to this binding SID will follow the path defined in Policy1 to reach this endpoint. Now, rather than configuring each individual path segment, we can simply use binding SID 1000 to represent this entire policy. Consider a scenario where we have multiple paths to a destination. You want to road some traffic along a low latency path, while other traffic should go through a low cost path. Using binding SIDs, you can set up a separate SRT policy
>
> **[3:09](https://www.linkedin.com/learning/mpls-segment-routing/understanding-sr-te-policy-binding-sid?u=76281980&t=189)** for each of these paths. Assign a unique binding SID to each one, and road traffic to these SIDs based on a specific requirements or application needs. This capability enables you to handle network demands with greater precision and flexibility, providing the right path for the right traffic types.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Traffic Engineering]] (2), [[Multiprotocol Label Switching (MPLS)|Mpls]] (2), [[Routing]] (1), [[Scalability]] (1)
> **Env Vars:** sid (15), srt (9), mpls (2), sids (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** think of it as (1), imagine (1)
> **CLI Commands:** make (1)
> **Versions:** 4.4.4 (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Segment routing traffic engineering (SR-TE) dynamic path](https://www.linkedin.com/learning/mpls-segment-routing/segment-routing-traffic-engineering-sr-te-dynamic-path?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/segment-routing-traffic-engineering-sr-te-dynamic-path?u=76281980&t=0)** - [Instructor] In this lesson, we learn how segment [[Routing]] [[Traffic Engineering]], or SR-TE Dynamic Path enables network to dynamically adapt to changing conditions and always choose the most optimized path. SR-TE Dynamic Path allows the head end router to compute the best route based on defined objectives, such as minimizing hop count, cost or delay, while respecting constraints like bandwidth or avoiding specific links. The computed path is expressed as a SID list. A sequence of segment identifiers that guide packets through the desired route in the network. If network conditions change, such as a link failure or increased congestion, the headend recalculates the past in [[Real-Time]], ensuring performance and [[Resiliency]] without manual intervention. In more complex scenarios, such as multi-domain or multi-area networks, where the headend lags full visibility of the topology, the task of past computation can be delegated to a past computation element or PCE. The PCE, with its broader view of the network, can compute the optimal path and returns the SI delays to the headend, enabling seamless traffic engineering even in larger scale networks. Key features of SR-TE Dynamic Paths. Optimization objective. A Dynamic Path expresses an optimization goal
>
> **[1:33](https://www.linkedin.com/learning/mpls-segment-routing/segment-routing-traffic-engineering-sr-te-dynamic-path?u=76281980&t=93)** such as minimizing hop count or choose the path with the least number of hops, minimizing latency, or select the path with the lowest delay, minimizing cost, or use the path with the lowest total link cost. Constraints. Constraints like bandwidth requirement, a specific note inclusion or exclusion, or SR labels, segment identifiers, or SIDs, can be applied to refine the path computation. On-demand path computation. The headend or source router dynamically calculates the path based on the current network state using IGP extensions like OSPF or ISIS. If the network change like link failures or topology updates, the path is recomputed automatically. [[Scalability]], unlike traditional MPLST, SRT does not require maintaining a state for every path in intermediate routers. The SID list is computed at the source and carried in the packet header. How SR-TE Dynamic Path works? Topology discovery. The IGP, like ISIS or OSPF, learns the network topology and advertises segment identifiers, or SIDs, and link state attributes like bandwidth or delay. Policy definition. The headend router is configured with an SR policy. Path computation.
>
> **[3:05](https://www.linkedin.com/learning/mpls-segment-routing/segment-routing-traffic-engineering-sr-te-dynamic-path?u=76281980&t=185)** The router computes as ideal list or a sequence of labels to guide traffic through the network based on the defined policy. Traffic forwarding, the router encapsulates traffic with the computed SID list and the packets follow the program path. Automatic recalculation. If a link fails or network conditions change, the headend recompute the path dynamically, ensuring the best available path is always used.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Traffic Engineering]] (2), [[Routing]] (1), [[Real-Time]] (1), [[Resiliency]] (1), [[Scalability]] (1)
> **Env Vars:** sid (3), pce (2), igp (2), ospf (2), isis (2)
> **Analogies:** such as (4)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [SR-TE dynamic path based on metric-type hop count](https://www.linkedin.com/learning/mpls-segment-routing/sr-te-dynamic-path-based-on-metric-type-hop-count?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/sr-te-dynamic-path-based-on-metric-type-hop-count?u=76281980&t=0)** - [Instructor] In this video, we learn about implementing SR-TE dynamic path based on metric-type hop count. You will see how segment [[Routing]] [[Traffic Engineering]] adapts dynamically to select the most efficient path based on hop count, ensuring optimized traffic flow. We will explore a scenario with five routers to demonstrate how SR-TE works. The topology includes dynamic recalculation of paths and a clear comparison between cost and hop count metrics. We will configure SR-TE on R1 to dynamically select the paths with the lowest hop count. Here's a sample configuration. Router isis 1. This command enables IS-IS or intermediate system to intermediate system routing protocol instance. IS-IS is commonly used in segment routing or SR deployments to distribute link-state information required for SR. Distribute link-estate. This command ensures that IS-IS distributes link-state information, which is critical for building the SR topology database. This database is used to calculate paths dynamically. Segment-routing traffic-eng. This command enables segment routing traffic engineering or SR-TE in the IS-IS instance. It allows IS-IS to handle traffic engineering extensions such as advertising SR policies and computing SR paths.
>
> **[1:38](https://www.linkedin.com/learning/mpls-segment-routing/sr-te-dynamic-path-based-on-metric-type-hop-count?u=76281980&t=98)** Policy P1. This defines an SR policy name P1. An SR policy is a set of rules and constraints that specify how traffic should flow across the network. It contains the parameters needed to compute traffic engineered paths. Color 20. The color is a unique identifier for the SR policy. It represents the traffic type or objective, like prioritizing certain types of traffic. Color 20 in this example is used to identify this specific policy. End-point IPv4 5.5.5.5. This specifies the destination of the SR policy. In this case, it's the loopback address of R5, 5.5.5.5 The SR policy will calculate paths that direct traffic toward this endpoint. Binding-sid [[Multiprotocol Label Switching (MPLS)|mpls]] 1000. The binding SID or segment identifier is an MPLS label, 1000 in this case, that represents the SR policy. When traffic is labeled with this SID, it will follow the SR policy rules. Candidate-paths. This defines the possible path that the SR policy can use. A candidate path is a potential route that the SR policy might select based on its constraints and preferences. Preference 100. This assigns a preference value to the candidate path. If multiple candidate paths exists,
>
> **[3:11](https://www.linkedin.com/learning/mpls-segment-routing/sr-te-dynamic-path-based-on-metric-type-hop-count?u=76281980&t=191)** the SR policy chooses the one with the highest preference. Here, the preference is 100. Dynamic. This specifies that the SR policy should compute the paths dynamically. Rather than being manually defined, the system calculates the best paths in real time based on constraints like cost or hop count. Metric type hopcount. This defines the optimization metric for the dynamic path calculation. In this case, the SR policy prioritizes the hop count, selecting paths with the fewest number of router hops, even if their costs are higher. Commit. This comment applies and saves the configuration, making the SR policy active. Once committed, R1 uses this SR policy to dynamically compute the path to the destination 5.5.5.5. This configuration ensures that R1 calculates the most optimal path dynamically based on the hopcount metric. It sets up a traffic engineering policy name P1 with a color of 20 and the destination of 5.5.5.5. The dynamic path selection is configured with a preference of 100 and optimized for hopcount. This ensures R1 calculates paths dynamically based on hopcount, selecting the most efficient route R1 to R2 to R3 to R5. Based on the hopcount metric, this path is selected, even though it has a higher cost
>
> **[4:46](https://www.linkedin.com/learning/mpls-segment-routing/sr-te-dynamic-path-based-on-metric-type-hop-count?u=76281980&t=286)** because the policy prioritizes fewer hops. IS-IS provides the network topology and distributes link-state information. SR-TE calculates the best paths dynamically based on the defined metric hopcount. The policy P1 ensure traffic heading to 5.5.5.5 follows the computed path that minimizes hops. The binding-sid 1000 acts as a label to enforce the policy. This configuration ensures a dynamic optimized path is always chosen.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (5), [[Traffic Engineering]] (4), [[Multiprotocol Label Switching (MPLS)|Mpls]] (2)
> **Versions:** 5.5.5 (5)
> **Definitions:** is a  (3), is an  (1)
> **Env Vars:** sid (2), mpls (1)
> **UI Navigation:** select the (2)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [SR-TE dynamic path based on metric-type IGP or TE](https://www.linkedin.com/learning/mpls-segment-routing/sr-te-dynamic-path-based-on-metric-type-igp-or-te?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/sr-te-dynamic-path-based-on-metric-type-igp-or-te?u=76281980&t=0)** - [Instructor] In this lesson, we explore how segment [[Routing]] [[Traffic Engineering]], or SR-TE, can be configured to use different paths based on metric type IGP and metric type TE in a network with five routers, R1, R2, R3, R4, and R5. We have two paths from R1 to R5. Path 1, R1 to R2 to R3 to R5. Best for IGP metric. Path 2, R1 to R2 to R4 to R3 to R5. Best for TE metric. The goal is traffic from loopback 1 of R1 to R5 should follow path 1, IGP metric. Traffic from loopback 2 of R1 to R5 should follow path 2, TE metric. We start by configuring a dynamic SR-TE policy to use IGP metric for traffic engineering. router isis lab enables IS-IS's routing protocol distribute link-state advertises link state information for segment routing. segment-routing traffic-eng enables SR-TE features. policy P1 defines a policy named P1. color 20 associates the policy with color value 20. end-point ipv4 5.5.5.5 sets the destination endpoint for the SR policy as R5's loopback address. binding-sid [[Multiprotocol Label Switching (MPLS)|mpls]] 1000
>
> **[1:35](https://www.linkedin.com/learning/mpls-segment-routing/sr-te-dynamic-path-based-on-metric-type-igp-or-te?u=76281980&t=95)** reserves MPLS binding SID 1000 for this policy. candidate-paths defines possible path for the policy. preference 100 sets the priority for this path. dynamic indicates dynamic path computation metric type igp configures the IGP metric as the optimization objective. With the show segment-routing traffic-eng policy command, we confirm that path 1, R1 to R2 to R3 to R5, is selected based on IGP metric. Next, we configure another dynamic SR-TE policy to use the TE metric. policy P2 defines a policy named P2. color 30 associates the policy with color value 30. binding-sid mpls 1001 reserves MPLS binding SID 1001 for this policy. candidate-paths defines possible path for the policy. preference 100 sets the priority for this path. dynamic indicates dynamic path computation. metric type te configures a TE metric as the optimization objective. Using the show segment-routing traffic-eng policy command again, we verify that path 2, R1 to R2 to R4 to R3 to R5, is selected based on the TE metric. Finally, we configure static routes to direct traffic from specific loopbacks
>
> **[3:09](https://www.linkedin.com/learning/mpls-segment-routing/sr-te-dynamic-path-based-on-metric-type-igp-or-te?u=76281980&t=189)** to the appropriate SR-TE policy. router static. address-family ipv4 unicast. 5.5.5.10 sr-policy srte_c_20_ep_5.5.5.5
>
> **[3:28](https://www.linkedin.com/learning/mpls-segment-routing/sr-te-dynamic-path-based-on-metric-type-igp-or-te?u=76281980&t=208)** directs traffic to R5's loopback 1, 5.5.5.10, via policy P1 or best IGP metric. 5.5.5.20 sr-policy srte_c_30_ep_5.5.5.5
>
> **[3:48](https://www.linkedin.com/learning/mpls-segment-routing/sr-te-dynamic-path-based-on-metric-type-igp-or-te?u=76281980&t=228)** directs traffic to R5 loopback 2, 5.5.5.20, via policy P2 or TE metric. When tracing to 5.5.5.10, traffic follows path 1, R1 to R2 to R3 to R5. When tracing to 5.5.5.20, traffic follows path 2, R1 to R2 to R4 to R3 to R5. This demonstrates the use of SR-TE policies to dynamically optimize traffic based on different metric types.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (6), [[Multiprotocol Label Switching (MPLS)|Mpls]] (4), [[Traffic Engineering]] (2)
> **Env Vars:** igp (7), mpls (2), sid (2)
> **Versions:** 5.5.5 (9)
> **Prerequisites:** configure (2)
> **Speakers:** - [instructor] (1)

#### [Constraints in dynamic segment routing traffic engineering](https://www.linkedin.com/learning/mpls-segment-routing/constraints-in-dynamic-segment-routing-traffic-engineering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/constraints-in-dynamic-segment-routing-traffic-engineering?u=76281980&t=0)** - [Instructor] Dynamic Segment [[Routing]] [[Traffic Engineering]], or SRT, allows networks to dynamically calculate and optimize traffic paths based on specific requirements or constraints. Constraints are rules that determine whether a particular path can be used. These constraints include metrics like IGP cost, delay, bandwidth, or path affinities. What is affinity in segment routing? Affinity is a mechanism to take links with certain attributes like color-coded names like green or blue that defines their characteristics. These affinities can then be used as constraints in SRT policies to include or exclude specific links during path computation. In segment routing, you can define an affinity with a unique name and associated it with a bit position. The bit position identifies the affinity in a bit mask format. Bit position 0, 0x, quad zero, 0001. Bit position 1, 0x, quad zero, 0002. Bit position 2, 0x, quad zero, 0004. Commands to configure affinity. Enter segment-routing traffic engineering mode, segment-routing traffic-eng. Define an affinity map, affinity-map name GREEN bit-position 0. Commit the configuration, commit.
>
> **[1:35](https://www.linkedin.com/learning/mpls-segment-routing/constraints-in-dynamic-segment-routing-traffic-engineering?u=76281980&t=95)** In this configuration, the affinity green is assigned bit position zero. This corresponds to the value 0x, quad zero, 0001 in hexadecimal, where the least significant bit is set. Now that we know how to define an affinity, let's dive into an example that shows how this works in practice. Imagine we have a network with five routers, R1, R2, R3, R4, and R5. The best path from R1 to R5 according to the IGP cost is R1 to R2 to R3 to R5. But let's say we want to influence this path selection based on affinities. On router R2, we'll define an affinity green for the link gigabit ethernet 0/0/0/1, segment-routing traffic-eng interface gigabit ethernet 0/0/0/1 affinity 0x00000001. Then we define the affinity green on R1 and R2 like this, segment-routing traffic-eng affinity-map name GREEN bit position 0, commit. Now that we have set up the affinity, let's configure a dynamic SRT policy on R1 that will use a constraint to avoid any path that has the green affinity. Here's how we define the policy.
>
> **[3:09](https://www.linkedin.com/learning/mpls-segment-routing/constraints-in-dynamic-segment-routing-traffic-engineering?u=76281980&t=189)** Policy P1, color 20 end-point ipv4 5.5.5.5, binding-sid [[Multiprotocol Label Switching (MPLS)|mpls]] 1000, candidate-paths, preference 100, dynamic, metric type igp, exit. And here is the important part. Adding the affinity constraints to exclude paths with green. Constraint, affinity, exclude-any name GREEN, commit. The policy dynamically computes the paths from R1 to the endpoint 5.5.5.5 or R5 with the constraints to exclude any link with the affinity green. Since the link R2 R3 has the affinity green value 0x, quad zero, 001, it is excluded from the computed path. The policy will select the next best path that satisfies the constraints, which is R1 to R2 to R4 to R3 to R5. There are three main types of constraints that you can use, exclude-any, include-any, and include-all. The exclude-any constraint tells the router to exclude any path that has the specified affinity. Next, we have the include-any constraint. This works the opposite of the exclude-any constraints. It tells the router to include paths that have at least one of the specified affinities.
>
> **[4:42](https://www.linkedin.com/learning/mpls-segment-routing/constraints-in-dynamic-segment-routing-traffic-engineering?u=76281980&t=282)** Finally, there is the include-all constraint. This is the strictest of the three. It requires that all paths in the selected route must have the specified affinity. By using these constraints in your dynamic policies, you can fine tune how traffic flows through your network, ensuring that your paths meet a specific requirements for performance, availability and even business rules.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (7), [[Traffic Engineering]] (2), [[Multiprotocol Label Switching (MPLS)|Mpls]] (1)
> **Env Vars:** srt (3), green (3), igp (2)
> **Prerequisites:** configure (2), set up (1)
> **Versions:** 5.5.5 (2)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)


### 7. SR-TE Traffic Steering

[↑ Back to Table of Contents](#table-of-contents)

#### [SR-TE automatic traffic steering with BGP](https://www.linkedin.com/learning/mpls-segment-routing/sr-te-automatic-traffic-steering-with-bgp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/sr-te-automatic-traffic-steering-with-bgp?u=76281980&t=0)** - [Instructor] Today, let's tackle a practical and fascinating use case, automatically steering customer traffic in an SR-TE environment using BGP. Imagine a service provider network with two customers, red and orange. Both customers have two sites, site one and site two, and we want to control how traffic flows between their sites using segment [[Routing]] [[Traffic Engineering]], or SRT. The goal is simple. Traffic between site one and site two of customer red should follow the top path of the provider network. Traffic between site one and site two of customer orange should follow the bottom path of the provider network. To achieve this, we will use SRT policies on P one combined with BGP color attributes sent by P five. The entire process will be automated, dynamically steering traffic to the correct path based on the customer. Here's the plan. On P one, we will configure two SRT policies. Policy P1 with color 10. This policy uses the top path and has an endpoint of 5.5.5.5. The loop back of P five. Policy P2 with color 20. This policy uses the bottom path, also with an endpoint of 5.5.5.5. The magic happens with BGP on P5. P5 will advertise prefixes for the customer destinations
>
> **[1:35](https://www.linkedin.com/learning/mpls-segment-routing/sr-te-automatic-traffic-steering-with-bgp?u=76281980&t=95)** with color attributes and NextHop information. For customer red, prefixes are advertised with color 10. For customer orange, prefixes are advertised with color 20. Let's break this down step by step. On P1, we configure policy P1, color 10, explicit path, top path via a specific nodes or links, endpoint 5.5.5.5. Policy P2, color 20. Explicit path, bottom path via different nodes or links. Endpoint 5.5.5.5. When P1 receives traffic, it will map incoming packets to the appropriate SRT policy, based on the BGP color and NextHop attributes received from P5. On P5, we set up BGP to advertise prefixes with the required colors using a route policy. Customer rates traffic is distinct for 7.7.7.7./32. This prefix is tagged with color 10, matching policy P1. Customer orange traffic is distinct for 9.9.9.9/32. This prefix is tagged with color 20, matching policy P2. The configuration on P5 looks like this. Extcommunity opaque RED 10 end-set defines an extended community named "RED"
>
> **[3:11](https://www.linkedin.com/learning/mpls-segment-routing/sr-te-automatic-traffic-steering-with-bgp?u=76281980&t=191)** with a value of 10. Extcommunity opaque ORANGE 20 End-set. This command defines an extended community named "ORANGE" with the value of 20. Route-policy SET_COLOR. This begins the definition of a route policy named "SET_COLOR". If destination in 7.7.7.7/32, then match traffic testing for the prefix 7.7.7.7/32. Set extcommunity color RED. Attach the RED extended community with color value 10 to the prefix 7.7.7.7/32. If destination in 9.9.9.9/32, then match traffic testing for the prefix 9.9.9.9/32. Set extcommunity color ORANGE. Attach to orange extended community with color value 20 to the prefix 9.9.9.9/32. When traffic from site one to site two for customer red reach P1, it match policy P1 or top path because of the color 10 set by P5. Similarly, traffic for customer orange match policy P2 or bottom path because of the color 20. The key here is that P5 will tag this prefix with the color community. If the color match one of the SRT policies on R one
>
> **[4:46](https://www.linkedin.com/learning/mpls-segment-routing/sr-te-automatic-traffic-steering-with-bgp?u=76281980&t=286)** and the BGP NextHop match the policy endpoint, the traffic will be automatically mapped to that SRT policy. This is the power of SRT with BGP in automating traffic steering, reducing complexity, and providing precise control over customer traffic flows.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (1), [[Traffic Engineering]] (1)
> **Env Vars:** bgp (7), srt (7), red (4), orange (3), set_color (2)
> **Versions:** 5.5.5 (4), 7.7.7 (4), 9.9.9 (4)
> **Prerequisites:** configure (2), set up (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [SR-TE on demand nexthop (ODN)](https://www.linkedin.com/learning/mpls-segment-routing/sr-te-on-demand-nexthop-odn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/sr-te-on-demand-nexthop-odn?u=76281980&t=0)** - [Instructor] In this lesson, we will explore how SR-TE on-demand next hop, or ODN, enables traffic steering based on SLA requirements using a real-world provider customer scenario. By leveraging colors and dynamic SR policies, we will configure traffic to follow paths optimized for either IGP or TE metrics. We have a service provider, or SP, network and a customer with two sites, Site-1 and Site-2. In the SP network, The IGP cost from R1 to R2 to R4 is lower than the cost from R1 to R3 to R4. The TE metric from R1 to R3 to R4 is lower than the TE metric from R1 to R2 to R4. In the customer network Site-2 has two networks, Net A and Net B. Traffic from Site-1 to Net A should use the lowest IGP metric path. Traffic from Site-1 to Net B should use the lowest TE metric path. To achieve this, we will configure R1 to use ODN with the following policies. Color 10 for IGP optimized path. Color 20 for TE optimized path. Segment-[[Routing]]. This command enables segment routing, or SR, on the device. traffic-engineering. This enables [[Traffic Engineering]], or TE, which provides more granular control
>
> **[1:33](https://www.linkedin.com/learning/mpls-segment-routing/sr-te-on-demand-nexthop-odn?u=76281980&t=93)** over the path selection process based on various factors like bandwidth, delay, or other criteria. on-demand color 10. This defines an on-demand next hop, or ODN, with color 10. The color is essentially a label that identifies a specific policy or paths for routing traffic. In this case, color 10 will be used to steer traffic based on the IGP metric. dynamic. This keyword indicates that the ODN is dynamic, meaning it is not statically defined but can change based on network conditions. The dynamic setting ensures that the traffic path will adjust automatically based on [[Real-Time]] routing information. metric type igp. The IGP metric is used for routing decisions in traditional IGPs like OSPF or IS-IS. By specifying IGP metric, this line ensures that the traffic for color 10 is steered according to the best IGP path, which could be the path with the lowest IGP cost. on-demand color 20. This defines another on-demand next hop with color 20. Here, color 20 will be used to steer traffic based on the traffic engineering, or TE, metric. This allows the network to choose the path with the best TE metric, which typically accounts for factors like available bandwidth, latency, and other [[Performance Metrics]] beyond just IGP.
>
> **[3:10](https://www.linkedin.com/learning/mpls-segment-routing/sr-te-on-demand-nexthop-odn?u=76281980&t=190)** dynamic. As with color 10, color 20 is also dynamic. It will adapt to changing network conditions with the path being selected based on the most current TE information. metric type te. This specifies that the traffic steering for color 20 will follow the traffic engineering metric, which is based on factors like link bandwidth, delay, and other TE-related parameters instead of just IGP cost. Traffic steering workflow. One, prefix advertisement. On all four BGPs configured to advertise prefixes with associated colors, Net A is advertised with color 10 or best IGP path. Net B is advertised with color 20 or best TE path. Two, policy activation on R1. When R1 receives a BGP update for Net A with color 10, it dynamically creates an SR policy optimized for IGP metrics. When R1 receives a BGP update for Net B with color 20, it dynamically creates an SR policy optimized for TE metrics. Three, traffic steering. Traffic destined for Net A is steered through the IGP optimized path, R1 to R2 to R4. Traffic destined for Net B is steered through the TE-optimized path, R1 to R3 to R4. Benefits of ODN in this scenario.
>
> **[4:45](https://www.linkedin.com/learning/mpls-segment-routing/sr-te-on-demand-nexthop-odn?u=76281980&t=285)** Dynamic adaptation automatically computes SR policies based on BGP signals without manual intervention. Granular SLA control enables differentiated handling for traffic types like IGP versus TE optimization within the same infrastructure. Efficient resource use ensures traffic uses the most appropriate paths, optimizing network performance. A scalable solution handles complex routing requirements across large scale networks seamlessly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (6), [[Traffic Engineering]] (3), [[Real-Time]] (1), [[Performance Metrics]] (1)
> **Env Vars:** igp (15), odn (5), bgp (3), sla (2), ospf (1)
> **Prerequisites:** configure (2)
> **Speakers:** - [instructor] (1)

#### [Multi-domain ODN with path computation element (PCE)](https://www.linkedin.com/learning/mpls-segment-routing/multi-domain-odn-with-path-computation-element-pce?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/multi-domain-odn-with-path-computation-element-pce?u=76281980&t=0)** - [Instructor] In this lesson, we will explore the concept of Segment [[Routing]] [[Traffic Engineering]] or SRT in a multi-domain environment using the on-demand next hop or ODN model with Path Computation Element or PCE. We will also discuss the Path Computation Element Protocol or PCEP and use a practical example to tie everything together. First, let's understand the Path Computation Element or PCE. PCE is a network entity responsible for calculating optimal path for traffic engineering purposes. It's particularly useful in multi-domain environments where the internal topology of one domain may not be visible to other domains. In multi-domain networks, it's challenging for routers in one domain to compute paths across other domains due to a lack of visibility into data topology. PCE resolves this by acting as a centralized brain with visibility across domains, enabling optimized path computation. Now, let's look at the Path Computation Element Protocol or PCEP. This is the protocol used for communication between the PCE and network devices such as Path Computation Clients or PCCs, which are typically routers. Key functions of PCEP. Path requests. PCCs send path computation requests to the PCE.
>
> **[1:35](https://www.linkedin.com/learning/mpls-segment-routing/multi-domain-odn-with-path-computation-element-pce?u=76281980&t=95)** Path Replies. The PCE responds with the computed path that meets specific requirements like bandwidth or latency constraints. Path Updates. The PCE can update paths dynamically to adapt to network change or optimization needs. In a multi-domain SRT scenario, the PCC router in the source domain request an SRT policy from the PCE using PCEP. The PCE computes the best end-to-end path based on available network resources across all domains. The PCE replies to the PCC with the segment list or SID list that encodes the path. The PCC programs the SRT policy into its data plane, and it starts forwarding traffic. Let's walk through an example involving three domains. Domain 1, Domain 2, and Domain 3. Our objective is to send traffic from R1 in Domain 1 to R7 in Domain 3 with specific traffic engineering constraints. R1, R2, and R3 are in Domain 1. R4, R5, and R8 are in Domain 2. R6, R7, R9 are in Domain 3. The domains are connected via boundary routers. R3 Domain 1 connected to R4 Domain 2. R5 Domain 2 connects to R6 Domain 3. The traffic from R1 to R7 requires low latency and must avoid a specific link in Domain 2.
>
> **[3:12](https://www.linkedin.com/learning/mpls-segment-routing/multi-domain-odn-with-path-computation-element-pce?u=76281980&t=192)** R1 or PCC sends a path computation request to the PCE, specifying the destination or R5 and the constraints low latency. The PC with its global visibility computes the path, R1 to R2 to R3 to R4 to R5 to R6 to R7. It encodes this path as an SID list, SID-R2, SID-R3, SID-R4, SID-R5, SID-R6, SID-R7.
>
> **[3:45](https://www.linkedin.com/learning/mpls-segment-routing/multi-domain-odn-with-path-computation-element-pce?u=76281980&t=225)** The PCE sends the computed SID list back to R1 using PCEP. R1 installs the SRT policy and it starts forwarding traffic according to the SID list. If a link in Domain 2 fails, the PCE recalculates the path and sends a new SID list to R1, ensuring uninterrupted traffic flow. So, using PCE and PCEP in a multi-domain SRT setup provides several benefits. End-to-end optimization. Optimized paths are calculated considering the topology and constraints of all domains. Dynamic path recalculation. PCE dynamically adapts to network change ensuring optimal traffic flow. Simplified operations. Centralized path computation reduces the complexity of configuring and managing SR policies manually. [[Scalability]]. PCE supports large scale deployments by uploading path computation from individual routers. In summary, PCE and PCEP are critical components for implementing SR-TE in multi-domain networks. They simplify path computation and enable end-to-end traffic engineering even in complex environments.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Traffic Engineering]] (4), [[Routing]] (1), [[Scalability]] (1)
> **Env Vars:** pce (18), sid (11), pcep (7), srt (6), pcc (4)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/mpls-segment-routing/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-segment-routing/next-steps?u=76281980&t=0)** - [Arash] Congratulations on successfully completing the [[Multiprotocol Label Switching (MPLS)|MPLS]] Segment [[Routing]] course. You have worked hard, and I'm excited to see your progress and dedication to mastering this powerful networking technology. With your foundational knowledge in MPLS Segment Routing, you are well-equipped to dive even deeper into this field. I highly recommend continuing your learning journey with either: Segment Routing over IPv6 or SRv6. A great next step, as SRv6 is rapidly becoming a critical part of modern networking. It leverages the power of IPv6 to further enhance [[Scalability]] and efficiency. Advanced Segment Routing. For those who want to master more complex concepts, this course will deepen your understanding and prepare you for more advanced network designs and configurations. Both courses will help you stay ahead of the curve and make you an even more valuable asset in the networking world. Keep pushing your learning, and feel free to reach out if you have any question along the way. Once again, congratulations, and I, Arash, wish you the best of luck in your next learning adventure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (4), [[Multiprotocol Label Switching (MPLS)|Mpls]] (2), [[Scalability]] (1)
> **Env Vars:** mpls (2)
> **CLI Commands:** make (1)
> **Speakers:** - [arash] (1)


## Instructor

- [[Arash Deljoo]]

## Skills Covered

- Routing
- Network Administration
- Computer Networking

## Path Context

### In [[Mastering Multiprotocol Label Switching (MPLS)]]
← [[MPLS- Traffic Engineering]] | **4 of 4**

## Appears In

- [[Mastering Multiprotocol Label Switching (MPLS)]]

## Related Courses

_Courses sharing skills:_

- [[Cloud Computing- Understanding Networking]] — Network Administration, Computer Networking
- [[Cisco Networking Foundations- Wireless Networks, Services, Security, and Virtualization]] — Network Administration
- [[Mpls Foundations Getting Started With Mpls]] — Computer Networking
- [[Server Administration Essential Training]] — Network Administration
- [[Protecting Your Network with Open-Source Software]] — Network Administration

---

[↑ Back to top](#)