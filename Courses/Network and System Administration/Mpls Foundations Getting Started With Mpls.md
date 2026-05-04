---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: mpls-foundations-getting-started-with-mpls
url: "https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls"
level: Intermediate
updated: 10/1/2024
learners: 2135
skills:
  - Multiprotocol Label Switching (MPLS)
  - Computer Networking
  - Computer Network Operations
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQHtfKFDJoTUKA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1726169042809?e=2147483647&amp;v=beta&amp;t=dAbLdFJaidUsElXd3W2eqGoa0ENocD0M6pptSR0cyeY"
linkedin_topic: Network and System Administration
learning_paths:
  - '[Mastering Multiprotocol Label Switching (MPLS)](../../Paths/Network%20and%20System%20Administration/Learning%20Paths/Mastering%20Multiprotocol%20Label%20Switching%20(MPLS).md)'
next_courses:
  - '[MPLS L3VPN Foundation and Implementation](MPLS%20L3VPN%20Foundation%20and%20Implementation.md)'
path_nav: '[{"path":"Mastering Multiprotocol Label Switching (MPLS)","position":1,"total":4,"prev":null,"next":"MPLS L3VPN Foundation and Implementation"}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - skill/multiprotocol-label-switching-mpls
  - skill/computer-networking
  - skill/computer-network-operations
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/Mpls%20Foundations%20Getting%20Started%20With%20Mpls.md)

![Mpls Foundations Getting Started With Mpls](https://media.licdn.com/dms/image/v2/D4E0DAQHtfKFDJoTUKA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1726169042809?e=2147483647&amp;v=beta&amp;t=dAbLdFJaidUsElXd3W2eqGoa0ENocD0M6pptSR0cyeY)

# Mpls Foundations Getting Started With Mpls

> This course provides an in-depth introduction to Multiprotocol Label Switching (MPLS), an essential technique used in modern network infrastructures. Join instructor Arash Deljoo as he explores the core principles of MPLS, including its architecture, operation, and key components such as Label Distribution Protocol (LDP) and Label Switched Paths (LSPs). Learn more about the different label retenti

> [LinkedIn Learning](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls) | Intermediate | 2K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Become an MPLS expert](#become-an-mpls-expert)
- [**1. MPLS Architecture**](#1-mpls-architecture) (5 videos)
  - [IP forwarding](#ip-forwarding)
  - [MPLS control plane and data plane](#mpls-control-plane-and-data-plane)
  - [Packet forwarding in an MPLS network](#packet-forwarding-in-an-mpls-network)
  - [Penultimate hop popping (PHP)](#penultimate-hop-popping-php)
  - [MPLS label](#mpls-label)
- [**2. MPLS Terminology**](#2-mpls-terminology) (4 videos)
  - [Label switch router (LSR)](#label-switch-router-lsr)
  - [Label switched path (LSP)](#label-switched-path-lsp)
  - [Forwarding equivalence class (FEC)](#forwarding-equivalence-class-fec)
  - [Frame mode MPLS vs. cell mode MPLS](#frame-mode-mpls-vs-cell-mode-mpls)
- [**3. Label Distribution Protocol (LDP)**](#3-label-distribution-protocol-ldp) (5 videos)
  - [Label distribution protocols](#label-distribution-protocols)
  - [MPLS LDP configuration in Cisco IOS](#mpls-ldp-configuration-in-cisco-ios)
  - [MPLS  LDP  neighborship](#mpls-ldp-neighborship)
  - [LDP neighborship verification](#ldp-neighborship-verification)
  - [LDP parameters configuration](#ldp-parameters-configuration)
- [**4. Advanced LDP Configuration**](#4-advanced-ldp-configuration) (5 videos)
  - [LDP authentication](#ldp-authentication)
  - [Controlling the advertisement of labels via LDP](#controlling-the-advertisement-of-labels-via-ldp)
  - [MPLS LDP inbound label binding filtering](#mpls-ldp-inbound-label-binding-filtering)
  - [TTL behavior of labeled packets](#ttl-behavior-of-labeled-packets)
  - [Tracerouting in MPLS networks](#tracerouting-in-mpls-networks)
- [**5.Different MPLS Modes**](#5different-mpls-modes) (4 videos)
  - [MPLS label spaces](#mpls-label-spaces)
  - [Label distribution mode](#label-distribution-mode)
  - [Label retention modes](#label-retention-modes)
  - [LSP control modes](#lsp-control-modes)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Become an MPLS expert](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/become-an-mpls-expert?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/become-an-mpls-expert?u=76281980&t=0)** - [Arash] Welcome to [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) Foundations, Getting Started with MPLS. In this course, we are going to dive deep into the essentials of MPLS, uncovering how it all works, and why it's such a game-changer in the networking world. Whether you are a newbie or looking to brush up on your MPLS skills, you are in the right place. My name is Arash Deljoo, and I'll be your guide through the fascinating world of MPLS. Buckle up and let's get started with MPLS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (6)
> **Env Vars:** mpls (6)
> **Prerequisites:** getting started (1)
> **Speakers:** - [arash] (1)


### 1. MPLS Architecture

[↑ Back to Table of Contents](#table-of-contents)

#### [IP forwarding](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ip-forwarding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ip-forwarding?u=76281980&t=0)** - [Instructor] IP forwarding is the process by which a router moves a packet from one network to another towards its final destination. In each router, we have two planes related to forwarding, the control plane and the data or forwarding plane. The control plane gathers the necessary information for forwarding packets towards their destinations using [Routing Protocols](../../Skills/Network%20and%20System%20Administration/Routing%20Protocols.md) and includes the [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) information base, or RIB or routing table. The control plane uses various routing protocols like OSPF, BGP, or RIP, to build a comprehensive view of the network. The necessary information for forwarding packets is downloaded from the control plane to the data plane. The data plane is responsible for actually moving packets based on the decisions made by the control plane. The router uses a forwarding information base or FIB, which is a simplified and optimized version of the RIB. The FIB contains the best route to each destination and is used for the actual forwarding of packets. Consider R1 with three interfaces, interface A, B, and C. A packet arrives on interface A. The router reads the destination IP address. The router checks the FIB for the destination IP. Suppose the FIB entry indicates that packets destined for this IP
>
> **[1:35](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ip-forwarding?u=76281980&t=95)** should be sent out of interface B with the next stop address of R2. The packet is sent out of interface B towards the next stop IP R2. In Cisco iOS, you can use the show ip route command to verify the routing information base or RIB. Similarly, you can use the show ip cef command to verify the forwarding information base or FIB. After reviewing IP for wording, it's time to explore another method for forwarding packets to their destinations, [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md), [Multiprotocol Label Switching](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (3), [Routing Protocols](../../Skills/Network%20and%20System%20Administration/Routing%20Protocols.md) (2), [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (1), [Multiprotocol label switching](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (1)
> **Env Vars:** fib (5), rib (3), ospf (1), bgp (1), rip (1)
> **Code Identifiers:** ios (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [MPLS control plane and data plane](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=0)** - [Instructor] [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) or [Multiprotocol Label Switching](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) is a protocol agnostic technique for high performance [Telecommunications](../../Skills/Network%20and%20System%20Administration/Telecommunications.md) networks. It directs data from one network node to the next based on labels rather than network addresses. Let's learn about MPLS control and data plane with an example. We have a network that includes four routers, R1, R2, R3 and R4. In this course, the [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) scheme follows the pattern 10.x.y.0/24 where x and y represent the numbers of routers connected to each other. R1 is connected to R2 using the 10.1.2.0/24 network. R2 is connected to R3 using the 10.2.3.0/24 network. And R3 is connected to R4 using the 10.3.4.0/24 network. Additionally, R4 has a loop back interface with the IP address quad 4 /32. In this scenario, when a [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) protocol like OSPF is configured, both the Routing Information Base, or RIB, and the Forwarding Information Base, or FIB, will be fully populated. Let's focus on the network quad 4/32 but the logic applies similarly to all networks.
>
> **[1:36](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=96)** We can use the show ip route command to verify the Routing Information Base, or RIB, on all routers. We can also use the show ip cef command to verify the Forwarding Information Base, or FIB, on all routers. Before enabling MPLS, you can see the outputs of the show ip route command and the show ip cef command for quad 4/32 in all routers. The Routing Information Base, or RIB, is in the control plane, and the Forwarding Information Base, or FIB, is in the data plane of the router. Assume MPLS is enabled on all routers. In the future, I will explain how to enable MPLS, and focus on its core functions. Now, let's concentrate on one network such as quad 4/32 but the principles apply similarly to other networks as well. Each router assigns a label to each network in its routing table. These labels are integers, and I will explain this in more detail later. Assuming for the network quad 4/32, router 1 chooses label 100, router 2 chooses label 200, router 3 chooses label 300, and router 4 chooses label 400. These labels will be stored in the Label Information Base, or LIB, which resides in the control plane of each router. The LIB associates each label
>
> **[3:15](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=195)** with its corresponding network prefix like quad 4/32. The next step involves each router advertising its label to its neighbors using the label distribution protocol, or LDP. Router 4 advertises its locally generated label 400 for the network quad 4/32 to router 3 using the LDP. R3 adds this entry into its Label Information Base, or LIB, as a remote binding LSR quad 4:0 label: 400.
>
> **[3:56](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=236)** This means R3 has received a label 400 from the remote Label Switch Router, or LSR, with the LDP identifier, quad 4:0 for the network quad 4/32. I will explain more about the LDP identifier later. Router 3 advertises its locally generated label 300 for the network quad 4/32 to router 2 and router 4 using the LDP. R2 and R4 add this entry into their LIB as a remote binding LSR 10.3.4.3:0 label: 300.
>
> **[4:43](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=283)** Router 2 advertises its locally generated label 200 for the network quad 4/32 to router 1 and router 3 using the LDP. R1 and R3 add this entry into their LIB as a remote binding LSR 10.2.3.2:0 label: 200.
>
> **[5:09](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=309)** Router 1 advertises its locally generated label 100 for the network quad 4/32 to router 2. R2 adds this entry into its Label Information Base, or LIB, as a remote binding. Next, router adds the next hop label to the FIB. After enabling MPLS, the label learned from the next hop router is included in the FIB. For example, R2 learns labels for quad 4/32 from R1 and R3. Since R3 is the next hop, R2 will use the label learned from R3 in its FIB. Until now, we have learned about the Label Information Base, or LIB, in the control plane, which serves as the repository for label mapping. Now, it's time to learn about the new table in the data plane when we enable MPLS. This table is called the Label Forwarding Information Base, or LFIB. We use the LFIB to forward labeled packets. It contains fields like the local label, outgoing label, prefix, wide label switch, outgoing interface, and next hop. Let's [Zoom](../../Skills/Software%20Development/Zoom.md) in on some of them now. In the LFIB, the local label field holds the label generated locally by the router.
>
> **[6:43](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=403)** While the outgoing label field stores the label learned from the next hop towards a specific prefix downloaded from LIB to LFIB. For example, in R1, the local label field contains 100, and the outgoing label field contains 200, which R1 learned from R2 as the next hop for quad 4/32. In R2, the local label field contains 200, and the outgoing label field contains 300, which are to learn from R3 as the next hop for quad 4/32. In R3, the local label field contains 300, and the outgoing label field contains 400, which R3 learned from R4 as the next hop for quad 4/32. In R4, the local label field contains 400, and the outgoing label field is empty, because R4 is directly connected to quad 4/32. After enabling MPLS, each router has four tables instead of two, RIB, or Routing Information Base, FIB, or Forwarding Information Base, LIB, or Label Information Base, and LFIB, Label Forwarding Information Base. Join me in the next video as we uncover the seamless magic of packet forwarding in an MPLS network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (9), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (6), [Multiprotocol label switching](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (1), [Telecommunications](../../Skills/Network%20and%20System%20Administration/Telecommunications.md) (1), [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) (1)
> **Env Vars:** mpls (9), lib (9), fib (7), ldp (6), lfib (5)
> **Versions:** 10.2.3 (2), 10.3.4 (2), 10.1.2 (1)
> **Analogies:** for example (2), such as (1)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** node (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Packet forwarding in an MPLS network](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/packet-forwarding-in-an-mpls-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/packet-forwarding-in-an-mpls-network?u=76281980&t=0)** - [Instructor] In this video, I take you on an exciting journey of a packet traveling through an [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) network, uncovering how it swiftly forwarded using MPLS labels. Picture this, R1 receives a packet destined for quad 4 and adventure through the MPLS network begins. When a router forwards a packet, it uses the data plane, but with both FIB and NFI being play, which table does it turn to? Let's find out. Here's the rule. If the packet has no label, it's forwarded using the FIB. But if it comes with a label, it's forwarded using the LFIB. According to this rule, since our packet doesn't have a label, R1 will forward it using the FIB. As a result, the packet is sent from gigabit ethernet 0/0 to the next top 10.1.2.2. And along the way, it's tagged with label 200 for its journey. Or to catch the label packet and following the rule, it dives into the LFIB to decide the next leg of the journey. According to LFIB, when R2 receives a labeled packet with label 200, it swaps it to label 300, and forwards it through gigabit ethernet 0/1 towards the next stop at 10.2.3.3.
>
> **[1:40](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/packet-forwarding-in-an-mpls-network?u=76281980&t=100)** As R3 receives the label packet, it swiftly continues its journey using LFIB because this packet is all about the labels. According to LFIB, when R3 receives a labeled packet with label 300, it swaps it to label 400, and forwards it through gigabit ethernet 0/0 towards the next top at 10.3.4.4. Finally, when R4 receives the labeled packet, it checks LFIB, and for packets with label 400, removes the label before forwarding them onward. After removing the label, R4 has an unlabeled packet, so it forwards it according to FIB. According to R4's FIB, quad 4/32 is connected via loopback 0, so the packet will be sent there. In this packet's journey, R1 utilized FIB. R2 and R3 employed LFIB for labeled packets. And R4 utilized both FIB and LFIB. This showcases how R1 forwards IP packets, R2 and R3 switch labeled packets, and R4 managed both types seamlessly. With our newfound understanding of MPLS packet forwarding, let's leap into the next video
>
> **[3:14](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/packet-forwarding-in-an-mpls-network?u=76281980&t=194)** and uncover the strategies to turbocharge our network efficiency.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (4)
> **Env Vars:** lfib (8), fib (7), mpls (4), nfi (1)
> **Versions:** 10.1.2 (1), 10.2.3 (1), 10.3.4 (1)
> **CLI Commands:** find (1)
> **Cross-References:** next video (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [Penultimate hop popping (PHP)](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=0)** - [Presenter] In this video, I reveal the magic of [PHP](../../Skills/Software%20Development/PHP.md) or penultimate hop popping a default feature in Cisco iOS that turbocharges [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) forwarding. Discover how PHP simplifies packet travel and supercharge network efficiency. As you learn in the previous video, R4 checks packets against both LFIB and FIB, which isn't the most efficient process. It's clear that the last router, like R4, always has to first verify the packet against the LFIB, strip the label, and then check it with the FIB to forward it correctly. This repetitive process not only consumes valuable router resources, but also slows down the packet forwarding speed. We can solve this efficiency issue with a feature called PHP or penultimate hop popping. This technique streamlines the process by removing the MPLS label one hop before the final rotor, allowing the last rotor to forward the packet directly using its FIB. Thus conserving resources and enhancing for wording speed. Alright, let's revisit our previous example to see how penultimate hop popping, or PHP, makes MPLS for wording more efficient. In MPLS networks,
>
> **[1:34](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=94)** each router assigns a label to each network entry in its [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) table. R4 As the final router selects a label value of null indicating pop label and communicates these to R3. R3 Zen records null in its LIB, FIB and LFIB received from R4. R4 subsequently removes the LFIB entry for Quad 4/32, since it doesn't assign any label as the last router in the past.
>
> **[2:10](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=130)** So R3 being the penultimate router before the final destination, Quad 4/32 should pop the label from the labeled packet received with label 300. Let's delve into packet four, wording with PHP enabled. R1 receives the packet that's seen for Quad 4 for it we labeled with 200 to R2. R2 receives the labeled packet labeled 200, slaps it to label 300 and forwards it to R3. This is where PHP kicks in. Instead of R3 forwarding the packet with label 400 to R4, R3 removes or pops the labels 300 and sends the packet to R4 without any MPLS label. R4 now receives an unlabeled packet directly. Since there is no label to process, R4 immediately forwards the packet using its FIB to the destination quad four without the extra step of label stripping. By popping the label at R3, PHP eliminates the need for R4 to deal with the MPLS label, allowing it to handle the packet more efficiently. This reduces processing overhead on the final rotor, or R4, and it speeds up packet forwarding. In this packet's journey, R1 utilized FIB.
>
> **[3:44](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=224)** 2R and R3 employed LFIB for labeled packets. And R4 utilized one table list relying on FIB. So in essence, PHP simplifies the last hub in the MPLS network, making the whole process faster and more resource efficient. The good news is that in Cisco iOS, this feature is enabled by default, so there is no need for manual activation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (8), [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (7), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** php (8), mpls (7), fib (7), lfib (5), lib (1)
> **CLI Commands:** php (8)
> **Code Identifiers:** ios (2)
> **Cross-References:** previous video (1)
> **Speakers:** - [presenter] (1)

#### [MPLS label](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label?u=76281980&t=0)** - [Instructor] Now that we have unlocked the mysteries of [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) control and data planes and explored packet forwarding, it's time for the next three link chapter, MPLS Label. MPLS Labels are critical components in the MPLS framework, enabling efficient packet forwarding. Each MPLS label is 32 bits or four bytes in lengths and contains four main fields. Label value or actual label, 20 bits. Experimental bits, or EXP bit, three bits. Bottom of a stack, or BoS, one bit. Time to leave, or TTL, eight bits. Let's dive deeper into the details of each field within an MPLS label to understand their roles. Label value. The label value is the crucial component within the MPLS label that we have touched on in previous videos. It represents the label number assigned by a router and is used to determine the forwarding path of the packet through the network. Experimental or EXP bits. These speeds are used for quality of service or QoS to prioritize packets or to apply different levels of service. They can influence decisions like packet drop precedents or queuing in network devices.
>
> **[1:34](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label?u=76281980&t=94)** Bottom of stack or BoS bit. In some MPLS applications, multiple labels can exist in a stack. The bottom of a stack, or BoS, bit is set to one in the last label of this stack to indicate that it is the final label in the sequence. These marking helps routers correctly interpret the label stack and determine how to process the packet as it moves through the network. Time to leave or TTL. The TTL field works similarly to the TTL field in an IP header. It represents the lifespan of the packet in the network and is decremented by one at each hop. If the TTL reach zero, the packet is discarded. These mechanisms helps prevent packets from looping indefinitely within the network. In networking terminologies, MPLS is considered to be an intermediate layer between traditional layer two and layer three protocols. Hence the designation layer 2.5 in the OSI model context. Now that we have deepened our understanding of MPLS, let's dive into the fascinating world of MPLS terminology in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (11)
> **Env Vars:** mpls (11), ttl (5), exp (2), osi (1)
> **Cross-References:** in the last (1), in the next (1)
> **Versions:** 2.5 (1)
> **Speakers:** - [instructor] (1)


### 2. MPLS Terminology

[↑ Back to Table of Contents](#table-of-contents)

#### [Label switch router (LSR)](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switch-router-lsr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switch-router-lsr?u=76281980&t=0)** - [Instructor] In this video, we'll explore what label switch routers, or LSRs, are and the different types they come in. A label switch router, or LSR, is a router that supports [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md). It is capable of understanding MPLS labels and of receiving and transmitting a label packet on a data link. Three kinds of LSRs exist in an MPLS network, ingress LSRs, egress LSRs, and intermediate LSRs. Ingress LSR is the entry point into the MPLS network. It assigns the initial label to incoming packets. Egress LSRs receive labeled packets, remove the labels, and send them on a data link. Ingress and egress LSRs are edge LSRs. Intermediate LSRs receive an incoming label packet, perform an operation on it, switch the packet, and send the packet on the correct data link. In MPLS, the operations push, swap, and pop are fundamental actions that LSRs perform on packet labels. In our previous scenario, without [PHP](../../Skills/Software%20Development/PHP.md) R1 pushes a label onto the packet. R2 and R2 then swap the label. And finally, R4 pops the label off the packet. At the entry point into the MPLS network,
>
> **[1:37](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switch-router-lsr?u=76281980&t=97)** ingress LSR examines the destination address and push a label onto the packet. As the packet travels through the MPLS network, each transit LSR swaps the current label with a new one according to its forwarding table, directing the packet towards its destination efficiently. When the packet reach the final router egress LSR near the client, the router pops the label off the packet, reverting it to a regular IP packet, and forwards it to the client. An LSR that push labels onto a packet that was not labeled yet is called an imposing LSR, because it is the first LSR to impose labels onto the packet. An LSR that removes all labels from the labeled packet before switching out the packet is a disposing LSR. Now that we have covered essential MPLS terminology, let's expand our knowledge further in the next video. We will explore additional key terms to deepen our understanding of MPLS technology and its applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (9), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **Env Vars:** lsr (10), mpls (9), php (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** php (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Label switched path (LSP)](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switched-path-lsp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switched-path-lsp?u=76281980&t=0)** - [Instructor] A label switched path, or LSP, is a sequence of LSRs that switch a labeled packet through an [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) network or part of an MPLS network. The first LSR of an LSP is the ingress LSR for that LSP, whereas the last LSR of the LSP is the egress LSR. All the LSRs in between the ingress and egress LSRs are the intermediate LSRs. In this figure, the arrow at the top indicates the direction because an LSP is unidirectional. The flow of labeled packets in the other direction, right to left, between the same edge LSRs would be another LSP. The ingress LSR of an LSP is not necessarily the first router to label the packet. The packet might have already been labeled by a preceding LSR. Such a case would be a nested LSP. That is an LSP inside another LSP. In this figure, you can see an LSP spanning the whole reach of the MPLS network. Another LSP starts at the third LSR and ends on the next to last LSR. Therefore, when the packet enters the second LSP on its ingress LSR, this means the third LSR, it's already labeled. This ingress LSR of the nested LSP then push a second label onto the packet.
>
> **[1:35](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switched-path-lsp?u=76281980&t=95)** The label stack of the packet on the second LSP has two labels now. The top label belongs to the nested LSP and the bottom label belongs to the LSP that spans the entire MPLS network. We can utilize nested LSPs in MPLS applications such as MPLS [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md), or TE. In summary, LSPs streamline packet forwarding across MPLS networks, enhancing efficiency and network performance. And LSP typically involves ingress and egress LSRs at its endpoints with intermediate LSRs in between that forward packets based on MPLS labels. With another MPLS concept under our belt, it's time to dive into the next set of exciting terminologies. Let's keep building our knowledge in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (9), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (1)
> **Env Vars:** lsp (18), lsr (11), mpls (9)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Forwarding equivalence class (FEC)](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=0)** - [Instructor] A forwarding equivalence class, or FEC, is a fundamental concept in [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) that groups packets together based on common characteristics for efficient forwarding. In MPLS, an FEC is a set of packets that are forwarded along the same path through an MPLS network and receive identical treatment. This grouping is based on shared attributes such as destination IP addresses, traffic types, or QoS requirements. All packets belonging to the same FEC have the same label. The primary goal of an FEC is to simplify the forwarding process. By classifying packets into FECs at the ingress LSR, MPLS networks can streamline packet processing and [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) decisions. Instead of handling each packet individually, the network only needs to process the FEC label. At the ingress LSR, packets are examined and assigned to an FEC based on their destination or other criteria. Each FEC is mapped to a specific label. Packets are then forwarded through the MPLS network based on their assigned label, not the original IP header information. FECs are crucial for optimizing the performance and [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) of MPLS networks.
>
> **[1:34](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=94)** They enable efficient handling of large volumes of traffic by reducing the need for repeated routing lookups and allow for advanced traffic management techniques like MPLS [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) or TE and QoS. Remember our previous example with four routers: R1, R2, R3, and R4. Let's use it to understand the concept of a forwarding equivalence class, or FEC. In this scenario, R4 has two loopback interfaces: Loopback0 with IP address 4.4.4.4/32 and Loopback1 with IP address 5.5.5.5/32. Each router in the network assigns labels to packets destined for these IPs to streamline the forwarding process. R4 assigns a null label since it is directly connected to these addresses. R3 assigns labels 300 and 301, respectively. R2 chooses labels 200 and 201, respectively. R1 assigns labels 100 and 101, respectively. When R1 receives packets destined for these addresses, it classifies them into different FECs and labels them accordingly. For packets heading to 4.4.4.4/32 means FEC1, R1 assigns label 200.
>
> **[3:09](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=189)** For packets heading to 5.5.5.5/32, FEC2, R1 assigns label 201. R2 will swap these labels to 300 for 4.4.4.4 and 301 for 5.5.5.5. R3 will pop the labels and deliver the packets to R4. R4 forwards the packets to the appropriate loopback interfaces. As packets enter the MPLS network at R1, they are inspected and grouped into FECs based on their destination or other criteria. In this way, FECs enable MPLS to streamline the packet forwarding process, improving efficiency and reducing the complexity of routing decisions. Another MPLS terminology, the forwarding equivalence class or FEC, is now understood. Ready to dive into the next concept? Let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (10), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (3), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (1)
> **Env Vars:** mpls (10), fec (9), lsr (2), fec1 (1), fec2 (1)
> **Versions:** 4.4.4 (3), 5.5.5 (3)
> **Definitions:** is a  (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [Frame mode MPLS vs. cell mode MPLS](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/frame-mode-mpls-vs-cell-mode-mpls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/frame-mode-mpls-vs-cell-mode-mpls?u=76281980&t=0)** - [Instructor] In this video, we will learn about two modes of [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) implementation, Frame Mode MPLS and Cell Mode MPLS. First, let's start with Frame Mode MPLS. This is the method we have learned about up to this point in the course. The figure shows an edge router that receives a normal IP packet. The router then does the following tasks, the router performs [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) lookup to determine the outgoing interface, the router assigns and inserts a label between the Layer 2 frame header and the Layer 3 packet header. If the outgoing interface is enabled for MPLS, and if a next top label for the destination exists, the router then changed the layer to enter type value to indicate that this is a labeled packet. The router sends the label packet. Other routers in the core simply forward packets based on the label. Frame Mode MPLS is the most widely used method and is compatible with most network types. It is the mode we commonly implement in our current networks. However, in ATM, Asynchronous Transfer Mode networks using Frame Mode MPLS is not feasible because the fixed lengths ATM cells are always 53 bytes, and there is no room to add the extra four bytes. for the MPLS label.
>
> **[1:32](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/frame-mode-mpls-vs-cell-mode-mpls?u=76281980&t=92)** This is where Cell Mode MPLS comes into play. In an ATM, Asynchronous Transfer Mode network, each ATM cell is divided into two parts. One, payload, 48 bytes of data. Two, header, five bytes. The five byte header includes fields such as VPI, VCI, virtual pass identifier, virtual channel identifier, which are crucial for cell forwarding in standard ATM operations. These fields direct the cell through the ATM network, ensuring it reach the correct destination. To adapt MPLS to ATM networks, the existing VPI, VCI fields are repurposed. MPLS labels are mapped onto the VPI, VCI field, effectively using these fields to perform MPLS, like forwarding without modifying the fixed 53 byte cell structure. As a summary, Cell Mode MPLS finds its primary utility in ATM networks, leveraging the fixed 53 byte cell structure with MPLS labels applied to the VPI, VCI fields. Conversely, Frame Mode MPLS is widely employed in other network types, accommodating MPLS label insertion into IP packets, which supports diverse applications. Given that ATM networks are considered legacy systems today,
>
> **[3:07](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/frame-mode-mpls-vs-cell-mode-mpls?u=76281980&t=187)** Frame Mode MPLS dominates contemporary networking practices, as emphasized throughout this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (17), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** mpls (17), atm (9), vpi (4), vci (4)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 3. Label Distribution Protocol (LDP)

[↑ Back to Table of Contents](#table-of-contents)

#### [Label distribution protocols](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-protocols?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-protocols?u=76281980&t=0)** - [Instructor] As you have learned in previous sections of this course, after allocating labels for networks in the [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) table, each router needs to advertise these labels to their neighboring routers using a protocol for distributing labels across routers in an [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) network. According to MPLS applications, various protocols work for label distribution, such as TDP, LDP, BGP, and RSVP. In this course, we focus on LDP, or Label Distribution Protocol, for applications like IPV4 or MPLS, as it plays a central role in distributing labels for efficient packet forwarding within MPLS networks. Before diving deep into LDP, let me introduce TDP, or Tag Distribution Protocol. TDP, which predates LDP, was the first protocol for label distribution, developed and implemented by Cisco. However, TDP's proprietary to Cisco. The IETF later formalized LDP. LDP and TDP are similar in the way they operate, but LDP has more functionality than TDP. With the widespread availability of LDP in general deployment Cisco IOS releases, TDP was quickly replaced by LDP.
>
> **[1:36](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-protocols?u=76281980&t=96)** The result is that TDP is becoming obsolete. Each label switching router, or LSR, assigns a label to every IP prefix in its IP routing table, establishing a local binding where each IPV4 prefix is associated with a specific MPLS label. The LSR then shares this binding with all its LDP neighbors, who receive and store these bindings as a remote mapping. LDP distributes labels between routers to establish forwarding paths based on IP reachability information in the routing tables. LDP operates at the control plane level. There, router exchange label mapping information to create mapping between IP prefixes and MPS labels. Routers using LDP-established neighbor relationships with adjacent routers to exchange label-binding information. Once a router receive label mappings from its neighbors, it retains this information in its Label Information Base, or LIB. The LIB stores mapping of both locally-generated labels and labels learned from neighboring routers. Now that we understand MPLS and LDP, we are ready to enable MPLS and configure LDP. Let's dive into the configuration details in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (7), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (3)
> **Env Vars:** ldp (15), tdp (8), mpls (7), ipv4 (2), lsr (2)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [MPLS LDP configuration in Cisco IOS](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=0)** - [Instructor] For enabling [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) LDP on Cisco iOS, first ensure that CEF, or Cisco Express Forwarding, is enabled. This feature is typically enabled by default, but can be explicitly enabled with the IP CEF command. Then, ensure that MPLS is enabled, which is typically enabled by default in Cisco iOS. You can activate it using the command MPLS IP in Global Configuration mode. Now, we have two methods for configuring MPLS. The first method is to use the MPLS IP command on all router interfaces. This is known as the Interface Specific method. The second method is the IGP Configuration method. If you are using OSPF or IS-IS as your IGP, you can enable MPLS LDP on all interfaces that are enabled with the IGP, by using the MPLS LDP Autoconfig command under the [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) protocol process. In our scenario, I will enable MPLS on R1 and R2, using the Interface Configuration method, and on R3 and R4, using the IGP Configuration method with OSPF or IS-IS. If you want routers to choose MPLS labels within a specific range, you can use the command MPLS Label Range minimum/maximum. This is particularly useful for troubleshooting
>
> **[1:35](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=95)** and gaining a better understanding of MPLS label allocation and utilization. R1 configuration: ip cef, mpls ip, mpls label range 100-199, interface gi0/0, mpls ip. R2 configuration: ip cef, mpls ip, mpls label range 200-299, interface gi0/0, mpls ip, interface gi0/1, mpls ip. R3 configuration: ip cef, mpls ip, mpls label range 300-399, router ospf 1, mpls ldp autoconfig. R4 configuration: ip cef, mpls ip, mpls label range 400-499, router ospf 1, mpls ldp autoconfig. You can verify which interfaces have MPLS enabled, using the Show MPLS Interfaces command. Also, running the command Show MPLS Interfaces Detail provides comprehensive information including details about the MPLS Configuration method employed on each interface. You can verify the label information base, or LIB, using the command Show MPLS LDP Bindings.
>
> **[3:12](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=192)** This command displays the MPLS label bindings learned by LDP from neighboring routers. For verifying a specific entry in the Label Information Base, or LIB, you can use the command Show MPLS LDP Bindings Network Mask. Replace network with the network address, and mask with the subnet mask of the specific entry you want to examine. This command displays detailed MPLS label bindings for the specified network prefix. To view the Label Forwarding Information Base, or LFIB, you can use the command Show MPLS Forwarding Table on Cisco iOS devices. This command displays the MPLS forwarding entries that map incoming labels to outgoing interfaces and next hop addresses. R1 sends an ICMP echo request to quad 4. In the LFIB, the bytes switched number increases on R2 and R3 because they are actively involved in MPLS label switching. R1 and R4, however, do not contribute to the LFI because they forward packets using the regular IP forwarding table, or FIB, without MPLS labels.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (36), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** mpls (23), ldp (6), igp (4), cef (2), ospf (2)
> **Code Identifiers:** ios (3)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [MPLS  LDP  neighborship](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980&t=0)** - [Instructor] After mastering basic [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) LDP configuration, let's delve into understanding LDP neighborship. When we enable MPLS LDP on an interface, it activates the multicast address 224.0.0.2 on that interface. An LDP-Hello message starts being sent out. LDP is an application that operates using both UDP and TCP on port 646. LDP uses UDP for session discovery and establishment, sending Hello message to discover neighbors. By default, each router sends out an LDP-Hello message every five seconds. Once neighbors are discovered, it switch to TCP on port 646 for reliable label distribution and session management. Let's break down the process of LDP neighborship establishment and label distribution using a simple example where R1 is connected to R2 with a single link, and the mpls ip command is configured on both interfaces. The multicast address 224.0.0.2 is activated on the interface. Both R1 and R2 start sending LDP-Hello message over UDP to the multicast address 224.0.0.2. These Hello message are used
>
> **[1:37](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980&t=97)** to discover potential LDP neighbors on the directly connected link. When R1 and R2 start sending LDP-Hello message to the multicast address 224.0.0.2, each Hello message contain crucial information, including a Transport-IP address. The Transport-IP is one of the router's IP addresses that will be used for the TCP-Session to exchange label information. The Transport-IP address serves as the endpoint for the TCP connection used in the label distribution process. If the TCP connection is set up, both LSRs negotiate LDP session parameters by exchanging LDP Initializations message. These parameters include such things as the following: timer values, label distribution method, et cetera. If the LDP peers agree on the session parameters, they keep the TCP connection between them. After the LDP session has been set up, it is maintained by either the receipt of LDP packets or a periodic Keep Alive message. Each time the LDP peer receives an LDP packet or a Keep Alive message, the keep alive timer is reset for that peer. Keep Alive message ensures the ongoing health and connectivity of an established LDP session between two routers.
>
> **[3:13](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980&t=193)** This message confirm that the LDP session is still active and that both routers are capable of communicating over the session. By default, each router sends an LDP Keep Alive message every 60 seconds. This interval can be adjusted based on network requirements, but the default setting balances between timely session validation and network traffic overhead. Let's review. LDP-Hello message facilitate multicast-based neighbor discovery and session establishment, while Keep Alive message are unicast and maintain ongoing communication between established LDP neighbors over TCP connections. Now that we understand the LDP neighborship process, let's dive into the configuration and verification commands related to LDP in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (3)
> **Env Vars:** ldp (25), tcp (7), udp (3), mpls (2)
> **Versions:** 224.0.0 (4)
> **Ports:** port 646 (2)
> **Prerequisites:** set up (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** switch to (1)
> **Definitions:** is an  (1)

#### [LDP neighborship verification](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-neighborship-verification?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-neighborship-verification?u=76281980&t=0)** - [Instructor] In this video, we will focus on a simple scenario featuring two routers, R1 and R2 directly connected with [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) configured on their interfaces. Use the show MPLS neighbors command to verify the neighborship between them. LDP Identifier refers to a unique identifier used by each LSR to identify itself within the MPLS network. This LDP ID is a six byte feed that consists of four bytes identifying the LSR uniquely, and two bytes identifying the label space that the LSR is using. The LDP Router-ID is chosen based on the following methods, one, manual configuration, two, highest IP address of enabled loopback interfaces, three, highest IP address of enabled non-loopback interfaces. R1's LDP Router-ID is QUAD-1, which is the highest IP address among its loopback interfaces. R2's LDP Router-ID is QUAD-2, which is the highest IP address among its loopback interfaces. The second part of the LDP Router-ID is typically referred to as the label space, which by default is set to zero in many configurations. However, I will cover the concept of label space in more detail in future videos.
>
> **[1:34](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-neighborship-verification?u=76281980&t=94)** So the LDP Router-ID of R1 is QUAD-1 column zero, and the LDP Router-ID of R2 is QUAD-2 column zero. In LDP, the TCP session is initiated from the router with the highest LDP Router-ID to the router with the lower LDP Router-ID. The State of the LDP neighborship, which is displayed as operational or op, the number of LDP message sent and received between the neighbors, which helps in monitoring the health and activity of the LDP session. Up time typically refers to the duration for which a neighborship session has been active. LDP Discovery Source refers to the interface through which LDP Hello message are sent, while source IP address represent the IP address assigned to the interface from which LDP Hello message originate. This information pertains to the peers or neighboring routers in an LDP session. The last line displays all the IP addresses that exist in the LDP neighbor. You can also use the command show MPLS LDP neighbor details to obtain more detailed information about the LDP neighbors. Now we can see the LDP Hello time and LDP hold time. The hello time is 5,000 millisecond or five seconds, and the hold time is 15,000 millisecond or 15 seconds.
>
> **[3:11](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-neighborship-verification?u=76281980&t=191)** This means that if an LDP Hello message is not received after three intervals, the neighborship will be torn down. Also we can see the LDP KA or Keep Alive interval and Keep Alive whole time. The Keep Alive interval is 60,000 millisecond or 60 seconds, and the whole time is 180,000 millisecond or 180 seconds.
>
> **[3:41](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-neighborship-verification?u=76281980&t=221)** This means that if an LDP KA message is not received after three intervals, the TC position will be torn down. After learning about LDP neighborship, let's explore the configuration of various LDP parameters in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (4)
> **Env Vars:** ldp (28), mpls (4), quad (4), lsr (3), tcp (1)
> **Definitions:** refers to (3), means that (2), is a  (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [LDP parameters configuration](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=0)** - [Instructor] In this video, I will guide you through the configuration of LDP, or label distribution protocol parameters. In Cisco iOS, the LDP router ID is essential for establishing and maintaining LDP sessions. By default, it's derived from the highest IP address of the router's enabled interfaces, but you can manually set it for better control. To verify the LDP router ID and associated setting, use the show [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) LDP discovery command. To explicitly configure the LDP router ID, use the following command. MPLS LDP router ID loop back zero force. This command sets the LDP router ID to the IP address of the specified interface, in this case, loop back zero. The force option ensures that the new router ID is applied immediately, even if it disrupts the existing LDP sessions. To change the interval between sending "hello" message, MPLS LDP discovery hello interval seconds. And to change the LDP hold time, you can use MPLS LDP discovery hello hold time seconds. If the two LDP peers have different LDP hold times configured, the smaller of two values is used as the hold time for that LDP discovery source. It will choose a smaller LDP hello interval than configured, so that it can send
>
> **[1:35](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=95)** at least three LDP hellos before the hold time expires. In our scenario, the LDP hello hold time is configured on R one and R two as 10 seconds and eight seconds respectively, because the protocol uses the smaller of the two values, the eight second hold time is chosen. Additionally, in our scenario, the LDP hello interval is set to three seconds on R one, and four seconds on R two. Since both of these intervals are greater than one third of the chosen hold time, which is eight seconds, resulting in 2.67 seconds, the protocol defaults to using the calculated one third of the hold time, approximately 2.67 seconds, as the hello interval for both R one and R two. After the LDP session has been set up, it's maintained by either the receipt of LDP packets, or a PDR keep alive message. Each time, the LDPPR receives an LDP packet, or a keep alive message, the keep alive timer is reset for that peer. The keep alive and hold times for an LDP session can also be adjusted as needed. To modify the LDP session hold time, you can use the command, MPLS LDP hold time seconds. When two routers in an LDP session have different keep alive, or KA hold times value configured, the session will use the lower of the two values.
>
> **[3:12](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=192)** Correspondingly, the keep alive interval will be set to one third of this lower KA hold time value. When configuring the keep alive hold time for LDP, it is important to understand that this timer is negotiated during the initial establishment of the LDP session. If you change the KA hold time, the new value won't take effect until the LDP neighborship is reset. This ensures that both routers agree on the new timing parameters. To apply the new (indistinct) hold time, you need to restart the LDP neighborship. You can do this using the command, (indistinct) MPLS LDP neighbor star. This command will clear all LDP neighbors, and force the routers to renegotiate decision with the updated KA hold time values. We configured the keep alive hold time on R one and R two as 150 seconds, and 120 seconds respectively. As a result, the KA hold time is chosen as the lower value: 120 seconds. Consequently, the KA interval is set to one third of this value, which is 40 seconds.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (6)
> **Env Vars:** ldp (32), mpls (6), pdr (1), ldppr (1)
> **Versions:** 2.67 (2)
> **Prerequisites:** configure (1), set up (1)
> **Code Identifiers:** ios (1)
> **Speakers:** - [instructor] (1)


### 4. Advanced LDP Configuration

[↑ Back to Table of Contents](#table-of-contents)

#### [LDP authentication](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=0)** - [Instructor] LDP sessions are TCP sessions vulnerable to spoof TCP segment attacks. To safeguard LDP from such risks, message-digest five or MD5 authentication can be implemented. MD5 adds a signature known as the MD5 digest to TCP segment. This digest is computed using a configured password on both ends of the connection for each specific TCP segment. The configured MD5 password is never transmitted. LDP authentication is not mandatory. You can use the show [mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) ldp discovery detail command to check the authentication status. We can enforce authentication for neighbors using the mpls ldp password required command. It's recommended to configure this command on both sides of the neighborship for security. After configuring the mpls ldp password required command, it becomes mandatory to configure a password on both sides of the neighborship. The neighborship will not establish or will be torn down if it was previously established. Let's explore LDP authentication starting with the first method, per-neighbor authentication. You can use mpls ldp neighbor IP address password password string command for per-neighbor authentication. Replace IP address with the actual IP address
>
> **[1:37](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=97)** of the LDP neighbor you want to authenticate and password a string with the password you want to set for authentication between these neighbors. In the output of the show mpls ldp discovery detail command, the presence of neighbor in the password line indicates that the mpls ldp neighbor IP address password password stream command was used to configure authentication for that specific neighbor. The second method is LDP global authentication. This method applies a single password across all LDP neighbors. We need to configure a standard ACL to specify which LDP neighbors or neighbor router IDs we want to enable authentication for. Then we can use the mpls ldp password option number for ACL password command. In the output of the show mpls ldp discovery detail command, the presence of option in the password line indicate that the mpls ldp password option command was used to configure authentication. In mpls ldp authentication, the option method allows for more granular control over which neighbors require authentication. By using different options with a specific access control list or ACLs, you can apply varying passwords for different sets of neighbors.
>
> **[3:13](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=193)** To illustrate, let's say we want to authenticate neighbors with different passwords based on their router IDs. Mpls ldp password option 1 for 1 ACL1 cisco1. Mpls ldp password option 2 for 2 ACL2 cisco2. In this example, option one is assigned to neighbors matching ACL1 with the password, cisco1. Option two is assigned to neighbors matching ACL2 with the password, cisco2. The option number determines the priority. A lower option number, option one, has higher priority over a higher number, option two. The third method of LDP authentication is the fallback method. This method provides a backup mechanism to ensure that neighbors can still establish authenticated sessions even if the primary methods fail or are not applicable. To set up the fallback method, use the mpls ldp password fallback command. This command specifies a global password that applies to any LDP neighbor that does not match any other configured authentication method. In the output of the show mpls ldp discovery detail command, the presence of fallback in the password line indicates that the mpls ldp password fallback command was used to configure authentication.
>
> **[4:49](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=289)** If multiple methods are configured, the priority is one, neighbor command, two, option command, three, fallback method. You can mix and match these methods on different routers in your network as long as the same password is used on both sides of the LDP session. This flexibility allows for granular control of authentication policies based on your network's requirement. In the next video, we will dive into LDP label advertisement control. You will learn how to manage and control the distribution of LDP labels, ensuring optimized and secure label propagation across your network. Stay tuned for more insights on enhancing your MPLS network configuration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (16)
> **Env Vars:** ldp (13), tcp (4), md5 (4), acl (2), acl1 (2)
> **Prerequisites:** configure (6), set up (1)
> **Cross-References:** in the next (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Controlling the advertisement of labels via LDP](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=0)** - [Instructor] LDP provides the capability to selectively advertise or suppress labels to designated LDP peers, offering fine-grained control over label distribution. This feature is particularly useful in certain [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) applications where not all labels need to be distributed across the label-switch routers or LSRs. This network includes four routers, with OSPF configured as the IGP and MPLS LDP configured on all interfaces. Each router allocates a label for all networks in its [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) table and advertises these labels to its LDP neighbors. Let's check the label information base or LIB of R1 with the command show mpls ldp binding. Let's check the RIB of R2 with the command show mpls ldp binding. Assume we only need to have labels for the loopback zero interfaces of the routers, not for the IP addresses of the links between them. We can use the command mpls ldp advertise-labels for ACL1 [to ACL2]. The ACL1 is a standard numbered access list that lets you specify which prefixes should have a label advertised. The ACL2 is a standard numbered access list that lets you specify
>
> **[1:34](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=94)** which LDP peers should receive the label advertisement. First, we should configure no mpls ldp advertise-label on all routers. Then we need to configure an ACL to permit the IP addresses of the loopback interfaces of all routers. Finally, we can use mpls ldp advertise-labels for 1 on all routers. Let's check the label information base or LIB of R1 with the command show mpls ldp binding. Let's check the label information base or LIB of R2 with the command show mpls ldp binding. R1 and R3 advertise labels only for the 192.168.254.x/32 networks
>
> **[2:29](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=149)** and not for other networks. Let's verify the LFIB of R1 and R2. In the LFIB of R1, the three prefixes 192.168.254.2/32,
>
> **[2:47](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=167)** 192.168.254.3/32,
>
> **[2:55](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=175)** and 192.168.254.4/32 have a valid outgoing label, whereas the other prefixes have no label associated with them as outgoing labels. Also, in the LFIB of R2, the three prefix, 192.168.254.1/32,
>
> **[3:25](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=205)** 192.168.254.3/32, and 192.168.254.4/32 have a valid outgoing label, whereas the other prefixes have no label associated with them as outgoing label. Let's use both ACL1 and ACL2. In R3, I want to advertise the label for 192.168.254.1/32
>
> **[4:01](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=241)** and 192.168.254.2/32 to R2,
>
> **[4:10](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=250)** and 192.168.254.3/32 and 192.168.254.4/32 to R4.
>
> **[4:26](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=266)** First, we need to configure two ACLs for ACL2, one to select the router ID of R2 and one for R4: Ip access-list standard R2, Permit 192.168.254.2, Ip access-list standard R4, Permit 192.168.254.4. Then we need to configure two ACLs for the two series of IP addresses: Ip access-list standard FOR_R2, Permit 192.168.254.1, Permit 192.168.254.2, Ip access-list standard FOR_R4, Permit 192.168.254.3, Permit 192.168.254.4. Finally, we need to configure the mpls ldp advertise command twice: No mpls ldp advertise-labels, Mpls ldp advertise-labels for FOR_R2 to R2, Mpls ldp advertise-labels for FOR_R4 to R4. Now, let's check the LIB of R2 and R4.
>
> **[6:02](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=362)** In R2, we have labels for 192.168.254.1/32
>
> **[6:10](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=370)** and 192.168.254.2/32, learned from R3, as expected. In R4, we have labels for 192.168.254.3/32 and 192.168.254.4/32, learned from R3, as expected. In the next video, we will learn about MPLS LDP inbound label binding filtering.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (14), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** ldp (6), lib (4), acl2 (4), mpls (3), acl1 (3)
> **Versions:** 192.168.254 (21)
> **Prerequisites:** configure (5)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### [MPLS LDP inbound label binding filtering](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-inbound-label-binding-filtering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-inbound-label-binding-filtering?u=76281980&t=0)** - [Instructor] In this video, I'm going to explain how you can filter incoming label binding from an ldp neighbor. This feature operates in contrast to preventing the advertising of label binding. You can use the inbound label binding filtering on the receiving LDPPR if you can not apply the outbound filtering of label binding. For instance, you can filter out all received label binding from LDPPRs except for the label binding of the loop back interfaces of routers. In our example on R1, we can verify the label information base or lib using the command show [mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) ldb binding. We need labels only for 192.168.254.4/32
>
> **[0:55](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-inbound-label-binding-filtering?u=76281980&t=55)** We can use the command mpls ldp neighbor NBR_ADDRESS labels accept ACL for inbound label binding filtering. First we should configure a standard ACL to match 192.168.254.4/32
>
> **[1:18](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-inbound-label-binding-filtering?u=76281980&t=78)** Then we use the command mpls ldp neighbor 192.168.254.2 labels accept LP.
>
> **[1:29](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-inbound-label-binding-filtering?u=76281980&t=89)** It only accepts labels for networks permitted by ACL LP from router two. Now let's verify the lib of R1 again. R1 only accepts labels for the 192.168.254.4/32 net 4 and not for others. After learning about how we can control label advertisement or label receiving for ldp, let's delve into ttl behavior in mpls in the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (4)
> **Env Vars:** acl (3), ldppr (1), nbr_address (1)
> **Versions:** 192.168.254 (4)
> **Cross-References:** in the next (1)
> **Analogies:** for instance (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [TTL behavior of labeled packets](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ttl-behavior-of-labeled-packets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ttl-behavior-of-labeled-packets?u=76281980&t=0)** - [Instructor] In this video, I want to explain the TTL or time to live field in [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) labels and how it functions. When an IP packet enters the MPLS cloud, such as at the ingress LSR, the IP-TTL value is copied after being decremented by one to the MPLS TTL values of the pushed labels. If the operation performed on the labeled packet is a swap, the TTL of the incoming label minus one is copied to the swap label. At the egress LSR, the label is removed, and the IP header is exposed again. The IP-TTL value is copied from the MPLS TTL value in the received top label after decremented it by one. Assume that we have a loop inside the MPLS network. R2 sends the labeled packet to R3. R3 sends it back to R2, and R2 sends it to R3 again and so on. After multiple transmissions, the MPLS TTL will finally reach one. After that, the LSR will not forward it, and the packet will be dropped. This means that the MPLS TTL prevents the packets from remaining in the loop forever. This MPLS TTL behavior is similar to IP-TTL behavior, but let's learn about the difference
>
> **[1:34](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ttl-behavior-of-labeled-packets?u=76281980&t=94)** between IP-TTL and MPLS TTL. When a labeled packet is received with a TTL of one, the receiving LSR drops the packet and sends an ICMP message, time exceeded, to the originator of the IP packet. This is the same behavior that a router would exhibit with an IP packet that had an expiring TTL. However, the ICMP message is not immediately sent back to the originator of the packet because an interim LSR might not have an IP pass to work the source of the packet. The ICMP message is forwarded along the LSP the original packet was following. The reason for this forwarding of the ICMP message along the LSP that the original packet with the expiring TTL was following is that in some cases, the LSR that is generating the ICMP message has no knowledge of how to reach the originator of the original packet. One such case is a network with MPLS Layer 3 VPN. In this scenario, the P router does not have the knowledge to send back the ICMP message to the originator of the VPN packet because the P router does not have a road to directly return the ICMP message. Don't be concerned about MPLS Layer 3 VPN. It's beyond the scope of this course.
>
> **[3:10](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ttl-behavior-of-labeled-packets?u=76281980&t=190)** In the next video, I will explain past discovery based on the information we learned in this video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (11)
> **Env Vars:** ttl (15), mpls (11), icmp (7), lsr (6), vpn (3)
> **Definitions:** is a  (2), means that (1)
> **Analogies:** such as (1), similar to (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Tracerouting in MPLS networks](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/tracerouting-in-mpls-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/tracerouting-in-mpls-networks?u=76281980&t=0)** - [Instructor] Tracerouting in an [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) network is a bit different compared to tracerouting in an IP network. Look at this figure, which shows an MPLS network that will be used to show how tracerouting works in an MPLS network. The trace route is done on the R5 router toward the R6 router. The first prop has IP-TTL set to 1 and is received on the R1 router. The TTL of the packet expires on the R1, and it sends an ICMP message TTL exceeded back to the R5. The R5 sends the second prop. The R1 receives it, lowers the TTL R by one and adds a label. The TTL of the label is set to one, then R1 forwards the packet to the R2 router. This R2 router sees the TTL in the top label expiring. It creates an ICMP message TTL expired. Because this is a new packet, the IP-TTL and the TTL in the labels are set to a value of 255. The source IP address is the IP address on the incoming interface of the R2 router. A label is put onto the ICMP message and forwarded along the original LSP. On the R3 router, the label is stripped off and the IP packet is forwarded. The unlabeled IP packet is directly forwarded
>
> **[1:36](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/tracerouting-in-mpls-networks?u=76281980&t=96)** toward the R6 router. That R6 router has the destination IPS of the ICMP message in its [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) table and returns the ICMP message. Eventually, the R5 router on the left receives the ICMP message. This behavior is the same for all props. All ICMP message are forwarded along the original LSP and are not sent back directly to the originator.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (3), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** ttl (9), icmp (7), mpls (3), lsp (2), ips (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)


### 5.Different MPLS Modes

[↑ Back to Table of Contents](#table-of-contents)

#### [MPLS label spaces](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label-spaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label-spaces?u=76281980&t=0)** - [Instructor] In this video, we will learn about [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) label spaces, including per-platform and per-interface configurations. First, let's explore the per-platform label space used in frame mode MPLS, a concept covered in this course. In this figure, LSRA distributes FEC1 with label L1 to LSRs B and C. When LSRA distributes a label for FEC2, this label must be a different label than label L1. If per-platform label space is used, the packet is forwarded solely based on the label independently from the incoming interface. In per-platform label space, there is only one label space available, which is the zero label space. We can observe label space zero in LDP with the identifier LDP Router-id:Label Space. You can use show mpls ldp discovery to view the LDP ID and associated information. Now let's delve into the per-interface label space used in cell mode NPLS. Per-interface label space in MPLS refers to a method where each interface on a router maintains its own set of MPLS labels. This means that labels assigned
>
> **[1:32](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label-spaces?u=76281980&t=92)** to FECs are a unique per interface. For example, LSRA may assign label L1 for FEC1 and send it out on interface GI0/0 to LSRB while assigning label L2 for the same FEC1 and sending it out on interface GI0/1 to LSRC. So per-platform label allocation result in a smaller LIB and LFIB tables and a faster exchange of labels. Per-interface label space mode is often considered more secure than per platform mode because it ensures that MPLS labels are unique and separate for each interface on the router. This separation prevents potential label spoofing or misdirection that could occur if a single label space or per-platform were shared across all interfaces. In this figure, for example, router C has tried to send a labeled packet with a label that was advertised only to router B. The router A has failed to forward the packet because the packet came in through the wrong interface.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (6)
> **Env Vars:** mpls (5), lsra (3), fec1 (3), ldp (3), gi0 (2)
> **Analogies:** for example (2)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Label distribution mode](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-mode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-mode?u=76281980&t=0)** - [Instructor] [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) distributes labels using one of these methods, Unsolicited Downstream or UD label distribution mode, Downstream-on-Demand or DoD label distribution mode. In this video, we will learn about both of them. Let's start with Unsolicited Downstream, which we use in Frame mode MPLS and have learned and experienced in this course. Unsolicited Downstream distribution of labels is a method where each router independently assigns a label to each destination IP prefix in its [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) table. This mapping is stored in the LIB table, which sends it to all LDP peers. There is no control mechanism to govern the propagation of labels in an ordered fashion. This diagram shows router B generating a local label 200 and transmitting it to all neighboring routers. Other routers perform the same process once network X is included in the main routing table by the IGP. Each neighbor then chooses from these options regarding the label, utilize the label if router B is the nearest next hop for network X, retain the label in the LIB table, ignore the label. Frame mode MPLS uses Unsolicited Downstream for label distribution.
>
> **[1:36](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-mode?u=76281980&t=96)** The downstream keyword in the show MPLS LDP neighbors command indicates that Unsolicited Downstream mode is being used for label distribution. Let's learn about Downstream-on-Demand. Downstream-on-Demand distribution of labels requires each LSR to specifically request a label from its downstream neighbor. This figure shows how router A request a next top label from its downstream LDP peer. Unlike Unsolicited Downstream, their labels are pushed proactively to all downstream neighbors, Downstream-on-Demand conserves network resources by distributing labels only when required, typically in response to traffic flow or a specific network conditions. This mode helps optimize label distribution and [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) in MPLS networks, especially in large-scale deployment, where efficient resource utilization is crucial. The usual situation is that Cell mode MPLS uses Downstream-on-Demand label propagation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (6), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (2), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1)
> **Env Vars:** mpls (6), ldp (3), lib (2), igp (1), lsr (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Label retention modes](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-retention-modes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-retention-modes?u=76281980&t=0)** - [Instructor] This video describes the two ways in which labels are retained: Liberal Label Retention or LLR mode. Conservative Label Retention or CLR mode. Liberal Label Retention mode dictates that each LSR keeps all labels received from LDP peers, even if they are not the downstream peers for network X. This figure shows how router C receives and keeps the label received from router B for network X, even though router D is a downstream peer. Conservative Label Retention mode keeps only labels that can immediately be used for normally routed traffic paths. The figure illustrates how router C does not consider router B to be the next top for network X, and therefore, drops the labels received from router B. Frame mode [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) uses the Liberal Label Retention mode, which enables routers to store all received labels, even if the labels are not being used. These labels can be used after the network convergence to enable immediate establishment of an alternative LSP tunnel. In short, the LLR mode gives you quicker adaptation to [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) chains, whereas CLR mode gives you fewer labels to store and a better usage of the available memory on the router.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (1), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** llr (2), clr (2), lsr (1), ldp (1), mpls (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [LSP control modes](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/lsp-control-modes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/lsp-control-modes?u=76281980&t=0)** - [Instructor] LSRs can establish a local binding for A FEC using one of two methods. Independent LSP control mode, ordered LSP control mode. In independent LSP control mode, an LSR can independently create a local binding for A FEC without coordinating with other LSRs. In this mode, each LSR generates a local binding for a specific FEC as soon as it identifies the FEC, which generally means that the prefix for the FEC is included in its [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) table. In frame mode [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md), we use per-platform label space, unsolicited downstream distribution, liberal label retention, and independent control mode. The disadvantage of independent LSP control is that some LSRs begin to label switch packets before the complete LSP is set up end to end. Therefore, the packet is not forwarded in the manner. It should be, if the LSP is not completely set up, the packet might not receive the correct forwarding treatment everywhere, or it might even be dropped. Ordered control mode is usually combined with downstream on demand propagation of labels, where a local label can be assigned and propagated only if a next stop label is available. This requirement results in an ordered sequence
>
> **[1:38](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/lsp-control-modes?u=76281980&t=98)** of downstream requests until an LSR is found that already has a next stop label, or an LSR is reached that uses independent control mode. The figure illustrates how both R two and R three forward requests until an edge is reached. The figure illustrates how both R two and R three forward requests until an edge is reached. The R four uses independent control mode, and can respond to the request. An LSR can assign a label only if it has already received a label from the next top LSR. Otherwise, the LSR must request a label from the next top LSR. This requirement results in an ordered sequence of downstream requests until an LSR is found that already has a next stop label, or an LSR is reached that uses independent control mode. Although ordered control mode could be used with frame mode MPLS, its usage is on cell mode MPLS.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (3), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** lsr (10), lsp (6), fec (5), mpls (3)
> **Prerequisites:** set up (2)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/next-steps?u=76281980&t=0)** - [Instructor] Congratulations, you have made it through the [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) Foundations Getting Started With MPLS course. I'm so proud of all the progress you have made and the knowledge you have gained. Throughout this course, we have covered the essentials of MPLS, from understanding its core principles to implementing and managing MPLS networks. You have learned how labels are distributed, how packets are forwarded, and why MPLS is a game-changer in the networking world. Now that you have a solid foundation, you are ready to dive deeper into the exciting applications of MPLS. You can explore advanced topics like MPLS [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md), which optimizes the flow of network traffic, or delve into MPLS layer three VPN, and layer two VPN for secure and scalable virtual private networks. These advanced topics will further enhance your skills and open up new possibilities in your networking career. Whether you are aiming to optimize network performance, build secure VPNs, or explore other MPLS applications, the knowledge you have gained here will be your stepping stone. Thank you for joining me on this journey through MPLS Foundations. Keep exploring, keep learning, and never stop pushing the boundaries
>
> **[1:34](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/next-steps?u=76281980&t=94)** of what's possible in networking. I look forward to seeing you in future courses. Until then, happy networking. Thank you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (10), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (1)
> **Env Vars:** mpls (10), vpn (2)
> **Definitions:** is a  (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)


## Skills Covered

- Multiprotocol Label Switching (MPLS)
- Computer Networking
- Computer Network Operations

## Path Context

### In [Mastering Multiprotocol Label Switching (MPLS)](../../Paths/Network%20and%20System%20Administration/Learning%20Paths/Mastering%20Multiprotocol%20Label%20Switching%20(MPLS).md)
**1 of 4** | [MPLS L3VPN Foundation and Implementation](MPLS%20L3VPN%20Foundation%20and%20Implementation.md) →

## Appears In

- [Mastering Multiprotocol Label Switching (MPLS)](../../Paths/Network%20and%20System%20Administration/Learning%20Paths/Mastering%20Multiprotocol%20Label%20Switching%20(MPLS).md)

## Related Courses

_Courses sharing skills:_

- [MPLS- Traffic Engineering](MPLS-%20Traffic%20Engineering.md) — Multiprotocol Label Switching (MPLS), Computer Network Operations
- [MPLS Segment Routing](MPLS%20Segment%20Routing.md) — Computer Networking
- [MPLS L3VPN Foundation and Implementation](MPLS%20L3VPN%20Foundation%20and%20Implementation.md) — Multiprotocol Label Switching (MPLS)
- [Networking Foundations- Local Area Networks (LANs)](../Cybersecurity/Networking%20Foundations-%20Local%20Area%20Networks%20(LANs).md) — Computer Networking
- [Cloud Computing- Understanding Networking](../Cloud%20Computing/Cloud%20Computing-%20Understanding%20Networking.md) — Computer Networking

---

[↑ Back to top](#)