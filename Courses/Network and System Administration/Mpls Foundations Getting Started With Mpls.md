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
  - '[[Mastering Multiprotocol Label Switching (MPLS)]]'
next_courses:
  - '[[MPLS L3VPN Foundation and Implementation]]'
path_nav: '[{"path":"Mastering Multiprotocol Label Switching (MPLS)","position":1,"total":4,"prev":null,"next":"MPLS L3VPN Foundation and Implementation"}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - skill/multiprotocol-label-switching-mpls
  - skill/computer-networking
  - skill/computer-network-operations
status: not-started
created: 2026-04-21
---

![Mpls Foundations Getting Started With Mpls](https://media.licdn.com/dms/image/v2/D4E0DAQHtfKFDJoTUKA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1726169042809?e=2147483647&amp;v=beta&amp;t=dAbLdFJaidUsElXd3W2eqGoa0ENocD0M6pptSR0cyeY)

# Mpls Foundations Getting Started With Mpls

> This course provides an in-depth introduction to Multiprotocol Label Switching (MPLS), an essential technique used in modern network infrastructures. Join instructor Arash Deljoo as he explores the core principles of MPLS, including its architecture, operation, and key components such as Label Distribution Protocol (LDP) and Label Switched Paths (LSPs). Learn more about the different label retenti

> [LinkedIn Learning](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls) | Intermediate | 2K learners
> [Jump to Path Context ↓](#path-context)

## Skills Covered

- Multiprotocol Label Switching (MPLS)
- Computer Networking
- Computer Network Operations

## Table of Contents

### Introduction

#### Become an MPLS expert
> [LinkedIn Learning](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/become-an-mpls-expert?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/become-an-mpls-expert?u=76281980&t=0)** - [Arash] Welcome to MPLS Foundations, Getting Started with MPLS.
>
> **[0:04](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/become-an-mpls-expert?u=76281980&t=4)** In this course, we are going to dive deep into the essentials of MPLS, uncovering how it all works, and why it's such a game-changer in the networking world.
>
> **[0:18](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/become-an-mpls-expert?u=76281980&t=18)** Whether you are a newbie or looking to brush up on your MPLS skills, you are in the right place.
>
> **[0:26](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/become-an-mpls-expert?u=76281980&t=26)** My name is Arash Deljoo, and I'll be your guide through the fascinating world of MPLS.
>
> **[0:32](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/become-an-mpls-expert?u=76281980&t=32)** Buckle up and let's get started with MPLS.

> [!info]- Semantic Content
>
> **Env Vars:** mpls (6)
> **Code Keywords:** let (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [arash] (1)


### 1. MPLS Architecture

#### IP forwarding
> [LinkedIn Learning](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ip-forwarding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ip-forwarding?u=76281980&t=0)** - [Instructor] IP forwarding is the process by which a router moves a packet from one network to another towards its final destination.
>
> **[0:09](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ip-forwarding?u=76281980&t=9)** In each router, we have two planes related to forwarding, the control plane and the data or forwarding plane.
>
> **[0:17](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ip-forwarding?u=76281980&t=17)** The control plane gathers the necessary information for forwarding packets towards their destinations using routing protocols and includes the routing information base, or RIB or routing table.
>
> **[0:31](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ip-forwarding?u=76281980&t=31)** The control plane uses various routing protocols like OSPF, BGP, or RIP, to build a comprehensive view of the network.
>
> **[0:41](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ip-forwarding?u=76281980&t=41)** The necessary information for forwarding packets is downloaded from the control plane to the data plane.
>
> **[0:48](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ip-forwarding?u=76281980&t=48)** The data plane is responsible for actually moving packets based on the decisions made by the control plane.
>
> **[0:55](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ip-forwarding?u=76281980&t=55)** The router uses a forwarding information base or FIB, which is a simplified and optimized version of the RIB.
>
> **[1:04](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ip-forwarding?u=76281980&t=64)** The FIB contains the best route to each destination and is used for the actual forwarding of packets.
>
> **[1:12](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ip-forwarding?u=76281980&t=72)** Consider R1 with three interfaces, interface A, B, and C.
>
> **[1:18](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ip-forwarding?u=76281980&t=78)** A packet arrives on interface A.
>
> **[1:21](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ip-forwarding?u=76281980&t=81)** The router reads the destination IP address.
>
> **[1:25](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ip-forwarding?u=76281980&t=85)** The router checks the FIB for the destination IP.
>
> **[1:30](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ip-forwarding?u=76281980&t=90)** Suppose the FIB entry indicates that packets destined for this IP should be sent out of interface B with the next stop address of R2.
>
> **[1:41](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ip-forwarding?u=76281980&t=101)** The packet is sent out of interface B towards the next stop IP R2.
>
> **[1:47](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ip-forwarding?u=76281980&t=107)** In Cisco iOS, you can use the show ip route command to verify the routing information base or RIB.
>
> **[1:54](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ip-forwarding?u=76281980&t=114)** Similarly, you can use the show ip cef command to verify the forwarding information base or FIB.
>
> **[2:02](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ip-forwarding?u=76281980&t=122)** After reviewing IP for wording, it's time to explore another method for forwarding packets to their destinations, MPLS, Multiprotocol Label Switching.

> [!info]- Semantic Content
>
> **Env Vars:** fib (5), rib (3), ospf (1), bgp (1), rip (1)
> **Code Keywords:** interface (4)
> **Code Identifiers:** ios (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### MPLS control plane and data plane
> [LinkedIn Learning](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=0)** - [Instructor] MPLS or Multiprotocol Label Switching is a protocol agnostic technique for high performance telecommunications networks.
>
> **[0:09](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=9)** It directs data from one network node to the next based on labels rather than network addresses.
>
> **[0:17](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=17)** Let's learn about MPLS control and data plane with an example.
>
> **[0:23](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=23)** We have a network that includes four routers, R1, R2, R3 and R4.
>
> **[0:30](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=30)** In this course, the IP addressing scheme follows the pattern 10.x.y.0/24 where x and y represent the numbers of routers connected to each other.
>
> **[0:44](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=44)** R1 is connected to R2 using the 10.1.2.0/24 network.
>
> **[0:51](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=51)** R2 is connected to R3 using the 10.2.3.0/24 network.
>
> **[0:58](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=58)** And R3 is connected to R4 using the 10.3.4.0/24 network.
>
> **[1:06](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=66)** Additionally, R4 has a loop back interface with the IP address quad 4 /32.
>
> **[1:14](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=74)** In this scenario, when a routing protocol like OSPF is configured, both the Routing Information Base, or RIB, and the Forwarding Information Base, or FIB, will be fully populated.
>
> **[1:28](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=88)** Let's focus on the network quad 4/32 but the logic applies similarly to all networks.
>
> **[1:36](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=96)** We can use the show ip route command to verify the Routing Information Base, or RIB, on all routers.
>
> **[1:44](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=104)** We can also use the show ip cef command to verify the Forwarding Information Base, or FIB, on all routers.
>
> **[1:52](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=112)** Before enabling MPLS, you can see the outputs of the show ip route command and the show ip cef command for quad 4/32 in all routers.
>
> **[2:03](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=123)** The Routing Information Base, or RIB, is in the control plane, and the Forwarding Information Base, or FIB, is in the data plane of the router.
>
> **[2:13](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=133)** Assume MPLS is enabled on all routers.
>
> **[2:18](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=138)** In the future, I will explain how to enable MPLS, and focus on its core functions.
>
> **[2:23](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=143)** Now, let's concentrate on one network such as quad 4/32 but the principles apply similarly to other networks as well.
>
> **[2:34](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=154)** Each router assigns a label to each network in its routing table.
>
> **[2:40](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=160)** These labels are integers, and I will explain this in more detail later.
>
> **[2:46](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=166)** Assuming for the network quad 4/32, router 1 chooses label 100, router 2 chooses label 200, router 3 chooses label 300, and router 4 chooses label 400.
>
> **[3:02](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=182)** These labels will be stored in the Label Information Base, or LIB, which resides in the control plane of each router.
>
> **[3:11](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=191)** The LIB associates each label with its corresponding network prefix like quad 4/32.
>
> **[3:21](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=201)** The next step involves each router advertising its label to its neighbors using the label distribution protocol, or LDP.
>
> **[3:31](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=211)** Router 4 advertises its locally generated label 400 for the network quad 4/32 to router 3 using the LDP.
>
> **[3:42](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=222)** R3 adds this entry into its Label Information Base, or LIB, as a remote binding LSR quad 4:0 label: 400.
>
> **[3:56](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=236)** This means R3 has received a label 400 from the remote Label Switch Router, or LSR, with the LDP identifier, quad 4:0 for the network quad 4/32.
>
> **[4:12](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=252)** I will explain more about the LDP identifier later.
>
> **[4:16](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=256)** Router 3 advertises its locally generated label 300 for the network quad 4/32 to router 2 and router 4 using the LDP.
>
> **[4:28](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=268)** R2 and R4 add this entry into their LIB as a remote binding LSR 10.3.4.3:0 label: 300.
>
> **[4:43](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=283)** Router 2 advertises its locally generated label 200 for the network quad 4/32 to router 1 and router 3 using the LDP.
>
> **[4:54](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=294)** R1 and R3 add this entry into their LIB as a remote binding LSR 10.2.3.2:0 label: 200.
>
> **[5:09](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=309)** Router 1 advertises its locally generated label 100 for the network quad 4/32 to router 2.
>
> **[5:18](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=318)** R2 adds this entry into its Label Information Base, or LIB, as a remote binding.
>
> **[5:26](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=326)** Next, router adds the next hop label to the FIB.
>
> **[5:31](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=331)** After enabling MPLS, the label learned from the next hop router is included in the FIB.
>
> **[5:38](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=338)** For example, R2 learns labels for quad 4/32 from R1 and R3.
>
> **[5:45](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=345)** Since R3 is the next hop, R2 will use the label learned from R3 in its FIB.
>
> **[5:54](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=354)** Until now, we have learned about the Label Information Base, or LIB, in the control plane, which serves as the repository for label mapping.
>
> **[6:05](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=365)** Now, it's time to learn about the new table in the data plane when we enable MPLS.
>
> **[6:12](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=372)** This table is called the Label Forwarding Information Base, or LFIB.
>
> **[6:18](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=378)** We use the LFIB to forward labeled packets.
>
> **[6:21](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=381)** It contains fields like the local label, outgoing label, prefix, wide label switch, outgoing interface, and next hop.
>
> **[6:32](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=392)** Let's zoom in on some of them now.
>
> **[6:36](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=396)** In the LFIB, the local label field holds the label generated locally by the router.
>
> **[6:43](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=403)** While the outgoing label field stores the label learned from the next hop towards a specific prefix downloaded from LIB to LFIB.
>
> **[6:54](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=414)** For example, in R1, the local label field contains 100, and the outgoing label field contains 200, which R1 learned from R2 as the next hop for quad 4/32.
>
> **[7:08](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=428)** In R2, the local label field contains 200, and the outgoing label field contains 300, which are to learn from R3 as the next hop for quad 4/32.
>
> **[7:22](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=442)** In R3, the local label field contains 300, and the outgoing label field contains 400, which R3 learned from R4 as the next hop for quad 4/32.
>
> **[7:36](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=456)** In R4, the local label field contains 400, and the outgoing label field is empty, because R4 is directly connected to quad 4/32.
>
> **[7:47](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=467)** After enabling MPLS, each router has four tables instead of two, RIB, or Routing Information Base, FIB, or Forwarding Information Base, LIB, or Label Information Base, and LFIB, Label Forwarding Information Base.
>
> **[8:07](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-control-plane-and-data-plane?u=76281980&t=487)** Join me in the next video as we uncover the seamless magic of packet forwarding in an MPLS network.

> [!info]- Semantic Content
>
> **Env Vars:** mpls (9), lib (9), fib (7), ldp (6), lfib (5)
> **Code Keywords:** let (4), interface (2), switch (2)
> **Versions:** 10.2.3 (2), 10.3.4 (2), 10.1.2 (1)
> **Analogies:** for example (2), such as (1)
> **Definitions:** is a  (1), is called (1)
> **CLI Commands:** node (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Packet forwarding in an MPLS network
> [LinkedIn Learning](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/packet-forwarding-in-an-mpls-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/packet-forwarding-in-an-mpls-network?u=76281980&t=0)** - [Instructor] In this video, I take you on an exciting journey of a packet traveling through an MPLS network, uncovering how it swiftly forwarded using MPLS labels.
>
> **[0:13](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/packet-forwarding-in-an-mpls-network?u=76281980&t=13)** Picture this, R1 receives a packet destined for quad 4 and adventure through the MPLS network begins.
>
> **[0:23](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/packet-forwarding-in-an-mpls-network?u=76281980&t=23)** When a router forwards a packet, it uses the data plane, but with both FIB and NFI being play, which table does it turn to?
>
> **[0:33](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/packet-forwarding-in-an-mpls-network?u=76281980&t=33)** Let's find out.
>
> **[0:35](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/packet-forwarding-in-an-mpls-network?u=76281980&t=35)** Here's the rule.
>
> **[0:37](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/packet-forwarding-in-an-mpls-network?u=76281980&t=37)** If the packet has no label, it's forwarded using the FIB.
>
> **[0:42](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/packet-forwarding-in-an-mpls-network?u=76281980&t=42)** But if it comes with a label, it's forwarded using the LFIB.
>
> **[0:47](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/packet-forwarding-in-an-mpls-network?u=76281980&t=47)** According to this rule, since our packet doesn't have a label, R1 will forward it using the FIB.
>
> **[0:56](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/packet-forwarding-in-an-mpls-network?u=76281980&t=56)** As a result, the packet is sent from gigabit ethernet 0/0 to the next top 10.1.2.2.
>
> **[1:04](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/packet-forwarding-in-an-mpls-network?u=76281980&t=64)** And along the way, it's tagged with label 200 for its journey.
>
> **[1:11](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/packet-forwarding-in-an-mpls-network?u=76281980&t=71)** Or to catch the label packet and following the rule, it dives into the LFIB to decide the next leg of the journey.
>
> **[1:20](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/packet-forwarding-in-an-mpls-network?u=76281980&t=80)** According to LFIB, when R2 receives a labeled packet with label 200, it swaps it to label 300, and forwards it through gigabit ethernet 0/1 towards the next stop at 10.2.3.3.
>
> **[1:40](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/packet-forwarding-in-an-mpls-network?u=76281980&t=100)** As R3 receives the label packet, it swiftly continues its journey using LFIB because this packet is all about the labels.
>
> **[1:51](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/packet-forwarding-in-an-mpls-network?u=76281980&t=111)** According to LFIB, when R3 receives a labeled packet with label 300, it swaps it to label 400, and forwards it through gigabit ethernet 0/0 towards the next top at 10.3.4.4.
>
> **[2:10](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/packet-forwarding-in-an-mpls-network?u=76281980&t=130)** Finally, when R4 receives the labeled packet, it checks LFIB, and for packets with label 400, removes the label before forwarding them onward.
>
> **[2:23](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/packet-forwarding-in-an-mpls-network?u=76281980&t=143)** After removing the label, R4 has an unlabeled packet, so it forwards it according to FIB.
>
> **[2:32](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/packet-forwarding-in-an-mpls-network?u=76281980&t=152)** According to R4's FIB, quad 4/32 is connected via loopback 0, so the packet will be sent there.
>
> **[2:41](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/packet-forwarding-in-an-mpls-network?u=76281980&t=161)** In this packet's journey, R1 utilized FIB.
>
> **[2:45](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/packet-forwarding-in-an-mpls-network?u=76281980&t=165)** R2 and R3 employed LFIB for labeled packets.
>
> **[2:50](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/packet-forwarding-in-an-mpls-network?u=76281980&t=170)** And R4 utilized both FIB and LFIB.
>
> **[2:55](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/packet-forwarding-in-an-mpls-network?u=76281980&t=175)** This showcases how R1 forwards IP packets, R2 and R3 switch labeled packets, and R4 managed both types seamlessly.
>
> **[3:07](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/packet-forwarding-in-an-mpls-network?u=76281980&t=187)** With our newfound understanding of MPLS packet forwarding, let's leap into the next video and uncover the strategies to turbocharge our network efficiency.

> [!info]- Semantic Content
>
> **Env Vars:** lfib (8), fib (7), mpls (4), nfi (1)
> **Code Keywords:** let (2), this, (1), finally, (1), switch (1)
> **Versions:** 10.1.2 (1), 10.2.3 (1), 10.3.4 (1)
> **CLI Commands:** find (1)
> **Cross-References:** next video (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### Penultimate hop popping (PHP)
> [LinkedIn Learning](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=0)** - [Presenter] In this video, I reveal the magic of PHP or penultimate hop popping a default feature in Cisco iOS that turbocharges MPLS forwarding.
>
> **[0:11](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=11)** Discover how PHP simplifies packet travel and supercharge network efficiency.
>
> **[0:19](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=19)** As you learn in the previous video, R4 checks packets against both LFIB and FIB, which isn't the most efficient process.
>
> **[0:30](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=30)** It's clear that the last router, like R4, always has to first verify the packet against the LFIB, strip the label, and then check it with the FIB to forward it correctly.
>
> **[0:44](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=44)** This repetitive process not only consumes valuable router resources, but also slows down the packet forwarding speed.
>
> **[0:55](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=55)** We can solve this efficiency issue with a feature called PHP or penultimate hop popping.
>
> **[1:02](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=62)** This technique streamlines the process by removing the MPLS label one hop before the final rotor, allowing the last rotor to forward the packet directly using its FIB.
>
> **[1:15](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=75)** Thus conserving resources and enhancing for wording speed.
>
> **[1:21](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=81)** Alright, let's revisit our previous example to see how penultimate hop popping, or PHP, makes MPLS for wording more efficient.
>
> **[1:33](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=93)** In MPLS networks, each router assigns a label to each network entry in its routing table.
>
> **[1:40](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=100)** R4 As the final router selects a label value of null indicating pop label and communicates these to R3.
>
> **[1:50](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=110)** R3 Zen records null in its LIB, FIB and LFIB received from R4.
>
> **[1:58](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=118)** R4 subsequently removes the LFIB entry for Quad 4/32, since it doesn't assign any label as the last router in the past.
>
> **[2:10](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=130)** So R3 being the penultimate router before the final destination, Quad 4/32 should pop the label from the labeled packet received with label 300.
>
> **[2:24](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=144)** Let's delve into packet four, wording with PHP enabled.
>
> **[2:29](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=149)** R1 receives the packet that's seen for Quad 4 for it we labeled with 200 to R2.
>
> **[2:36](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=156)** R2 receives the labeled packet labeled 200, slaps it to label 300 and forwards it to R3.
>
> **[2:45](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=165)** This is where PHP kicks in.
>
> **[2:47](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=167)** Instead of R3 forwarding the packet with label 400 to R4, R3 removes or pops the labels 300 and sends the packet to R4 without any MPLS label.
>
> **[3:02](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=182)** R4 now receives an unlabeled packet directly.
>
> **[3:06](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=186)** Since there is no label to process, R4 immediately forwards the packet using its FIB to the destination quad four without the extra step of label stripping.
>
> **[3:20](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=200)** By popping the label at R3, PHP eliminates the need for R4 to deal with the MPLS label, allowing it to handle the packet more efficiently.
>
> **[3:32](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=212)** This reduces processing overhead on the final rotor, or R4, and it speeds up packet forwarding.
>
> **[3:40](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=220)** In this packet's journey, R1 utilized FIB.
>
> **[3:44](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=224)** 2R and R3 employed LFIB for labeled packets.
>
> **[3:49](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=229)** And R4 utilized one table list relying on FIB.
>
> **[3:55](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=235)** So in essence, PHP simplifies the last hub in the MPLS network, making the whole process faster and more resource efficient.
>
> **[4:05](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/penultimate-hop-popping-php?u=76281980&t=245)** The good news is that in Cisco iOS, this feature is enabled by default, so there is no need for manual activation.

> [!info]- Semantic Content
>
> **Env Vars:** php (8), mpls (7), fib (7), lfib (5), lib (1)
> **CLI Commands:** php (8)
> **Code Keywords:** let (2), default, (1)
> **Code Identifiers:** ios (2)
> **Cross-References:** previous video (1)
> **Speakers:** - [presenter] (1)

#### MPLS label
> [LinkedIn Learning](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label?u=76281980&t=0)** - [Instructor] Now that we have unlocked the mysteries of MPLS control and data planes and explored packet forwarding, it's time for the next three link chapter, MPLS Label.
>
> **[0:12](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label?u=76281980&t=12)** MPLS Labels are critical components in the MPLS framework, enabling efficient packet forwarding.
>
> **[0:20](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label?u=76281980&t=20)** Each MPLS label is 32 bits or four bytes in lengths and contains four main fields.
>
> **[0:29](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label?u=76281980&t=29)** Label value or actual label, 20 bits.
>
> **[0:33](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label?u=76281980&t=33)** Experimental bits, or EXP bit, three bits.
>
> **[0:38](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label?u=76281980&t=38)** Bottom of a stack, or BoS, one bit.
>
> **[0:42](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label?u=76281980&t=42)** Time to leave, or TTL, eight bits.
>
> **[0:46](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label?u=76281980&t=46)** Let's dive deeper into the details of each field within an MPLS label to understand their roles.
>
> **[0:53](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label?u=76281980&t=53)** Label value.
>
> **[0:55](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label?u=76281980&t=55)** The label value is the crucial component within the MPLS label that we have touched on in previous videos.
>
> **[1:03](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label?u=76281980&t=63)** It represents the label number assigned by a router and is used to determine the forwarding path of the packet through the network.
>
> **[1:13](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label?u=76281980&t=73)** Experimental or EXP bits.
>
> **[1:16](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label?u=76281980&t=76)** These speeds are used for quality of service or QoS to prioritize packets or to apply different levels of service.
>
> **[1:27](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label?u=76281980&t=87)** They can influence decisions like packet drop precedents or queuing in network devices.
>
> **[1:34](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label?u=76281980&t=94)** Bottom of stack or BoS bit.
>
> **[1:37](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label?u=76281980&t=97)** In some MPLS applications, multiple labels can exist in a stack.
>
> **[1:42](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label?u=76281980&t=102)** The bottom of a stack, or BoS, bit is set to one in the last label of this stack to indicate that it is the final label in the sequence.
>
> **[1:53](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label?u=76281980&t=113)** These marking helps routers correctly interpret the label stack and determine how to process the packet as it moves through the network.
>
> **[2:04](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label?u=76281980&t=124)** Time to leave or TTL.
>
> **[2:06](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label?u=76281980&t=126)** The TTL field works similarly to the TTL field in an IP header.
>
> **[2:13](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label?u=76281980&t=133)** It represents the lifespan of the packet in the network and is decremented by one at each hop.
>
> **[2:21](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label?u=76281980&t=141)** If the TTL reach zero, the packet is discarded.
>
> **[2:25](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label?u=76281980&t=145)** These mechanisms helps prevent packets from looping indefinitely within the network.
>
> **[2:32](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label?u=76281980&t=152)** In networking terminologies, MPLS is considered to be an intermediate layer between traditional layer two and layer three protocols.
>
> **[2:42](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label?u=76281980&t=162)** Hence the designation layer 2.5 in the OSI model context.
>
> **[2:48](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label?u=76281980&t=168)** Now that we have deepened our understanding of MPLS, let's dive into the fascinating world of MPLS terminology in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** mpls (11), ttl (5), exp (2), osi (1)
> **Code Keywords:** let (2)
> **Cross-References:** in the last (1), in the next (1)
> **Versions:** 2.5 (1)
> **Speakers:** - [instructor] (1)


### 2. MPLS Terminology

#### Label switch router (LSR)
> [LinkedIn Learning](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switch-router-lsr?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switch-router-lsr?u=76281980&t=0)** - [Instructor] In this video, we'll explore what label switch routers, or LSRs, are and the different types they come in.
>
> **[0:09](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switch-router-lsr?u=76281980&t=9)** A label switch router, or LSR, is a router that supports MPLS.
>
> **[0:16](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switch-router-lsr?u=76281980&t=16)** It is capable of understanding MPLS labels and of receiving and transmitting a label packet on a data link.
>
> **[0:25](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switch-router-lsr?u=76281980&t=25)** Three kinds of LSRs exist in an MPLS network, ingress LSRs, egress LSRs, and intermediate LSRs.
>
> **[0:36](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switch-router-lsr?u=76281980&t=36)** Ingress LSR is the entry point into the MPLS network.
>
> **[0:41](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switch-router-lsr?u=76281980&t=41)** It assigns the initial label to incoming packets.
>
> **[0:46](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switch-router-lsr?u=76281980&t=46)** Egress LSRs receive labeled packets, remove the labels, and send them on a data link.
>
> **[0:53](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switch-router-lsr?u=76281980&t=53)** Ingress and egress LSRs are edge LSRs.
>
> **[0:58](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switch-router-lsr?u=76281980&t=58)** Intermediate LSRs receive an incoming label packet, perform an operation on it, switch the packet, and send the packet on the correct data link.
>
> **[1:09](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switch-router-lsr?u=76281980&t=69)** In MPLS, the operations push, swap, and pop are fundamental actions that LSRs perform on packet labels.
>
> **[1:19](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switch-router-lsr?u=76281980&t=79)** In our previous scenario, without PHP R1 pushes a label onto the packet.
>
> **[1:25](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switch-router-lsr?u=76281980&t=85)** R2 and R2 then swap the label.
>
> **[1:29](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switch-router-lsr?u=76281980&t=89)** And finally, R4 pops the label off the packet.
>
> **[1:34](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switch-router-lsr?u=76281980&t=94)** At the entry point into the MPLS network, ingress LSR examines the destination address and push a label onto the packet.
>
> **[1:45](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switch-router-lsr?u=76281980&t=105)** As the packet travels through the MPLS network, each transit LSR swaps the current label with a new one according to its forwarding table, directing the packet towards its destination efficiently.
>
> **[2:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switch-router-lsr?u=76281980&t=120)** When the packet reach the final router egress LSR near the client, the router pops the label off the packet, reverting it to a regular IP packet, and forwards it to the client.
>
> **[2:15](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switch-router-lsr?u=76281980&t=135)** An LSR that push labels onto a packet that was not labeled yet is called an imposing LSR, because it is the first LSR to impose labels onto the packet.
>
> **[2:29](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switch-router-lsr?u=76281980&t=149)** An LSR that removes all labels from the labeled packet before switching out the packet is a disposing LSR.
>
> **[2:38](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switch-router-lsr?u=76281980&t=158)** Now that we have covered essential MPLS terminology, let's expand our knowledge further in the next video.
>
> **[2:46](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switch-router-lsr?u=76281980&t=166)** We will explore additional key terms to deepen our understanding of MPLS technology and its applications.

> [!info]- Semantic Content
>
> **Env Vars:** lsr (10), mpls (9), php (1)
> **Code Keywords:** switch (3), finally, (1), let (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** php (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Label switched path (LSP)
> [LinkedIn Learning](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switched-path-lsp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switched-path-lsp?u=76281980&t=0)** - [Instructor] A label switched path, or LSP, is a sequence of LSRs that switch a labeled packet through an MPLS network or part of an MPLS network.
>
> **[0:11](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switched-path-lsp?u=76281980&t=11)** The first LSR of an LSP is the ingress LSR for that LSP, whereas the last LSR of the LSP is the egress LSR.
>
> **[0:21](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switched-path-lsp?u=76281980&t=21)** All the LSRs in between the ingress and egress LSRs are the intermediate LSRs.
>
> **[0:28](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switched-path-lsp?u=76281980&t=28)** In this figure, the arrow at the top indicates the direction because an LSP is unidirectional.
>
> **[0:36](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switched-path-lsp?u=76281980&t=36)** The flow of labeled packets in the other direction, right to left, between the same edge LSRs would be another LSP.
>
> **[0:45](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switched-path-lsp?u=76281980&t=45)** The ingress LSR of an LSP is not necessarily the first router to label the packet.
>
> **[0:52](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switched-path-lsp?u=76281980&t=52)** The packet might have already been labeled by a preceding LSR.
>
> **[0:57](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switched-path-lsp?u=76281980&t=57)** Such a case would be a nested LSP.
>
> **[1:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switched-path-lsp?u=76281980&t=60)** That is an LSP inside another LSP.
>
> **[1:04](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switched-path-lsp?u=76281980&t=64)** In this figure, you can see an LSP spanning the whole reach of the MPLS network.
>
> **[1:10](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switched-path-lsp?u=76281980&t=70)** Another LSP starts at the third LSR and ends on the next to last LSR.
>
> **[1:17](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switched-path-lsp?u=76281980&t=77)** Therefore, when the packet enters the second LSP on its ingress LSR, this means the third LSR, it's already labeled.
>
> **[1:27](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switched-path-lsp?u=76281980&t=87)** This ingress LSR of the nested LSP then push a second label onto the packet.
>
> **[1:35](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switched-path-lsp?u=76281980&t=95)** The label stack of the packet on the second LSP has two labels now.
>
> **[1:41](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switched-path-lsp?u=76281980&t=101)** The top label belongs to the nested LSP and the bottom label belongs to the LSP that spans the entire MPLS network.
>
> **[1:50](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switched-path-lsp?u=76281980&t=110)** We can utilize nested LSPs in MPLS applications such as MPLS Traffic Engineering, or TE.
>
> **[1:58](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switched-path-lsp?u=76281980&t=118)** In summary, LSPs streamline packet forwarding across MPLS networks, enhancing efficiency and network performance.
>
> **[2:08](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switched-path-lsp?u=76281980&t=128)** And LSP typically involves ingress and egress LSRs at its endpoints with intermediate LSRs in between that forward packets based on MPLS labels.
>
> **[2:22](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switched-path-lsp?u=76281980&t=142)** With another MPLS concept under our belt, it's time to dive into the next set of exciting terminologies.
>
> **[2:31](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-switched-path-lsp?u=76281980&t=151)** Let's keep building our knowledge in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** lsp (18), lsr (11), mpls (9)
> **Code Keywords:** switch (1), let (1)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Forwarding equivalence class (FEC)
> [LinkedIn Learning](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=0)** - [Instructor] A forwarding equivalence class, or FEC, is a fundamental concept in MPLS that groups packets together based on common characteristics for efficient forwarding.
>
> **[0:13](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=13)** In MPLS, an FEC is a set of packets that are forwarded along the same path through an MPLS network and receive identical treatment.
>
> **[0:24](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=24)** This grouping is based on shared attributes such as destination IP addresses, traffic types, or QoS requirements.
>
> **[0:33](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=33)** All packets belonging to the same FEC have the same label.
>
> **[0:39](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=39)** The primary goal of an FEC is to simplify the forwarding process.
>
> **[0:46](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=46)** By classifying packets into FECs at the ingress LSR, MPLS networks can streamline packet processing and routing decisions.
>
> **[0:57](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=57)** Instead of handling each packet individually, the network only needs to process the FEC label.
>
> **[1:05](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=65)** At the ingress LSR, packets are examined and assigned to an FEC based on their destination or other criteria.
>
> **[1:14](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=74)** Each FEC is mapped to a specific label.
>
> **[1:18](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=78)** Packets are then forwarded through the MPLS network based on their assigned label, not the original IP header information.
>
> **[1:28](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=88)** FECs are crucial for optimizing the performance and scalability of MPLS networks.
>
> **[1:34](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=94)** They enable efficient handling of large volumes of traffic by reducing the need for repeated routing lookups and allow for advanced traffic management techniques like MPLS Traffic Engineering or TE and QoS.
>
> **[1:51](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=111)** Remember our previous example with four routers: R1, R2, R3, and R4.
>
> **[1:58](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=118)** Let's use it to understand the concept of a forwarding equivalence class, or FEC.
>
> **[2:04](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=124)** In this scenario, R4 has two loopback interfaces: Loopback0 with IP address 4.4.4.4/32 and Loopback1 with IP address 5.5.5.5/32.
>
> **[2:17](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=137)** Each router in the network assigns labels to packets destined for these IPs to streamline the forwarding process.
>
> **[2:26](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=146)** R4 assigns a null label since it is directly connected to these addresses.
>
> **[2:32](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=152)** R3 assigns labels 300 and 301, respectively.
>
> **[2:39](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=159)** R2 chooses labels 200 and 201, respectively.
>
> **[2:45](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=165)** R1 assigns labels 100 and 101, respectively.
>
> **[2:51](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=171)** When R1 receives packets destined for these addresses, it classifies them into different FECs and labels them accordingly.
>
> **[3:01](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=181)** For packets heading to 4.4.4.4/32 means FEC1, R1 assigns label 200.
>
> **[3:09](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=189)** For packets heading to 5.5.5.5/32, FEC2, R1 assigns label 201.
>
> **[3:17](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=197)** R2 will swap these labels to 300 for 4.4.4.4 and 301 for 5.5.5.5.
>
> **[3:25](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=205)** R3 will pop the labels and deliver the packets to R4.
>
> **[3:31](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=211)** R4 forwards the packets to the appropriate loopback interfaces.
>
> **[3:36](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=216)** As packets enter the MPLS network at R1, they are inspected and grouped into FECs based on their destination or other criteria.
>
> **[3:47](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=227)** In this way, FECs enable MPLS to streamline the packet forwarding process, improving efficiency and reducing the complexity of routing decisions.
>
> **[3:59](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=239)** Another MPLS terminology, the forwarding equivalence class or FEC, is now understood.
>
> **[4:06](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=246)** Ready to dive into the next concept?
>
> **[4:08](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/forwarding-equivalence-class-fec?u=76281980&t=248)** Let's go.

> [!info]- Semantic Content
>
> **Env Vars:** mpls (10), fec (9), lsr (2), fec1 (1), fec2 (1)
> **Versions:** 4.4.4 (3), 5.5.5 (3)
> **Code Keywords:** class, (2), let (2)
> **Definitions:** is a  (2)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Frame mode MPLS vs. cell mode MPLS
> [LinkedIn Learning](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/frame-mode-mpls-vs-cell-mode-mpls?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/frame-mode-mpls-vs-cell-mode-mpls?u=76281980&t=0)** - [Instructor] In this video, we will learn about two modes of MPLS implementation, Frame Mode MPLS and Cell Mode MPLS.
>
> **[0:08](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/frame-mode-mpls-vs-cell-mode-mpls?u=76281980&t=8)** First, let's start with Frame Mode MPLS.
>
> **[0:11](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/frame-mode-mpls-vs-cell-mode-mpls?u=76281980&t=11)** This is the method we have learned about up to this point in the course.
>
> **[0:16](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/frame-mode-mpls-vs-cell-mode-mpls?u=76281980&t=16)** The figure shows an edge router that receives a normal IP packet.
>
> **[0:22](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/frame-mode-mpls-vs-cell-mode-mpls?u=76281980&t=22)** The router then does the following tasks, the router performs routing lookup to determine the outgoing interface, the router assigns and inserts a label between the Layer 2 frame header and the Layer 3 packet header.
>
> **[0:39](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/frame-mode-mpls-vs-cell-mode-mpls?u=76281980&t=39)** If the outgoing interface is enabled for MPLS, and if a next top label for the destination exists, the router then changed the layer to enter type value to indicate that this is a labeled packet.
>
> **[0:53](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/frame-mode-mpls-vs-cell-mode-mpls?u=76281980&t=53)** The router sends the label packet.
>
> **[0:56](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/frame-mode-mpls-vs-cell-mode-mpls?u=76281980&t=56)** Other routers in the core simply forward packets based on the label.
>
> **[1:01](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/frame-mode-mpls-vs-cell-mode-mpls?u=76281980&t=61)** Frame Mode MPLS is the most widely used method and is compatible with most network types.
>
> **[1:09](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/frame-mode-mpls-vs-cell-mode-mpls?u=76281980&t=69)** It is the mode we commonly implement in our current networks.
>
> **[1:13](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/frame-mode-mpls-vs-cell-mode-mpls?u=76281980&t=73)** However, in ATM, Asynchronous Transfer Mode networks using Frame Mode MPLS is not feasible because the fixed lengths ATM cells are always 53 bytes, and there is no room to add the extra four bytes.
>
> **[1:30](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/frame-mode-mpls-vs-cell-mode-mpls?u=76281980&t=90)** for the MPLS label.
>
> **[1:32](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/frame-mode-mpls-vs-cell-mode-mpls?u=76281980&t=92)** This is where Cell Mode MPLS comes into play.
>
> **[1:36](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/frame-mode-mpls-vs-cell-mode-mpls?u=76281980&t=96)** In an ATM, Asynchronous Transfer Mode network, each ATM cell is divided into two parts.
>
> **[1:44](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/frame-mode-mpls-vs-cell-mode-mpls?u=76281980&t=104)** One, payload, 48 bytes of data.
>
> **[1:47](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/frame-mode-mpls-vs-cell-mode-mpls?u=76281980&t=107)** Two, header, five bytes.
>
> **[1:51](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/frame-mode-mpls-vs-cell-mode-mpls?u=76281980&t=111)** The five byte header includes fields such as VPI, VCI, virtual pass identifier, virtual channel identifier, which are crucial for cell forwarding in standard ATM operations.
>
> **[2:06](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/frame-mode-mpls-vs-cell-mode-mpls?u=76281980&t=126)** These fields direct the cell through the ATM network, ensuring it reach the correct destination.
>
> **[2:13](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/frame-mode-mpls-vs-cell-mode-mpls?u=76281980&t=133)** To adapt MPLS to ATM networks, the existing VPI, VCI fields are repurposed.
>
> **[2:22](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/frame-mode-mpls-vs-cell-mode-mpls?u=76281980&t=142)** MPLS labels are mapped onto the VPI, VCI field, effectively using these fields to perform MPLS, like forwarding without modifying the fixed 53 byte cell structure.
>
> **[2:35](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/frame-mode-mpls-vs-cell-mode-mpls?u=76281980&t=155)** As a summary, Cell Mode MPLS finds its primary utility in ATM networks, leveraging the fixed 53 byte cell structure with MPLS labels applied to the VPI, VCI fields.
>
> **[2:50](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/frame-mode-mpls-vs-cell-mode-mpls?u=76281980&t=170)** Conversely, Frame Mode MPLS is widely employed in other network types, accommodating MPLS label insertion into IP packets, which supports diverse applications.
>
> **[3:03](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/frame-mode-mpls-vs-cell-mode-mpls?u=76281980&t=183)** Given that ATM networks are considered legacy systems today, Frame Mode MPLS dominates contemporary networking practices, as emphasized throughout this course.

> [!info]- Semantic Content
>
> **Env Vars:** mpls (17), atm (9), vpi (4), vci (4)
> **Code Keywords:** interface (2), let (1), pass (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 3. Label Distribution Protocol (LDP)

#### Label distribution protocols
> [LinkedIn Learning](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-protocols?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-protocols?u=76281980&t=0)** - [Instructor] As you have learned in previous sections of this course, after allocating labels for networks in the routing table, each router needs to advertise these labels to their neighboring routers using a protocol for distributing labels across routers in an MPLS network.
>
> **[0:21](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-protocols?u=76281980&t=21)** According to MPLS applications, various protocols work for label distribution, such as TDP, LDP, BGP, and RSVP.
>
> **[0:33](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-protocols?u=76281980&t=33)** In this course, we focus on LDP, or Label Distribution Protocol, for applications like IPV4 or MPLS, as it plays a central role in distributing labels for efficient packet forwarding within MPLS networks.
>
> **[0:51](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-protocols?u=76281980&t=51)** Before diving deep into LDP, let me introduce TDP, or Tag Distribution Protocol.
>
> **[0:59](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-protocols?u=76281980&t=59)** TDP, which predates LDP, was the first protocol for label distribution, developed and implemented by Cisco.
>
> **[1:08](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-protocols?u=76281980&t=68)** However, TDP's proprietary to Cisco.
>
> **[1:12](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-protocols?u=76281980&t=72)** The IETF later formalized LDP.
>
> **[1:16](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-protocols?u=76281980&t=76)** LDP and TDP are similar in the way they operate, but LDP has more functionality than TDP.
>
> **[1:25](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-protocols?u=76281980&t=85)** With the widespread availability of LDP in general deployment Cisco IOS releases, TDP was quickly replaced by LDP.
>
> **[1:36](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-protocols?u=76281980&t=96)** The result is that TDP is becoming obsolete.
>
> **[1:40](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-protocols?u=76281980&t=100)** Each label switching router, or LSR, assigns a label to every IP prefix in its IP routing table, establishing a local binding where each IPV4 prefix is associated with a specific MPLS label.
>
> **[1:58](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-protocols?u=76281980&t=118)** The LSR then shares this binding with all its LDP neighbors, who receive and store these bindings as a remote mapping.
>
> **[2:09](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-protocols?u=76281980&t=129)** LDP distributes labels between routers to establish forwarding paths based on IP reachability information in the routing tables.
>
> **[2:19](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-protocols?u=76281980&t=139)** LDP operates at the control plane level.
>
> **[2:22](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-protocols?u=76281980&t=142)** There, router exchange label mapping information to create mapping between IP prefixes and MPS labels.
>
> **[2:31](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-protocols?u=76281980&t=151)** Routers using LDP-established neighbor relationships with adjacent routers to exchange label-binding information.
>
> **[2:41](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-protocols?u=76281980&t=161)** Once a router receive label mappings from its neighbors, it retains this information in its Label Information Base, or LIB.
>
> **[2:51](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-protocols?u=76281980&t=171)** The LIB stores mapping of both locally-generated labels and labels learned from neighboring routers.
>
> **[2:59](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-protocols?u=76281980&t=179)** Now that we understand MPLS and LDP, we are ready to enable MPLS and configure LDP.
>
> **[3:07](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-protocols?u=76281980&t=187)** Let's dive into the configuration details in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** ldp (15), tdp (8), mpls (7), ipv4 (2), lsr (2)
> **Code Keywords:** let (2)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### MPLS LDP configuration in Cisco IOS
> [LinkedIn Learning](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=0)** - [Instructor] For enabling MPLS LDP on Cisco iOS, first ensure that CEF, or Cisco Express Forwarding, is enabled.
>
> **[0:09](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=9)** This feature is typically enabled by default, but can be explicitly enabled with the IP CEF command.
>
> **[0:16](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=16)** Then, ensure that MPLS is enabled, which is typically enabled by default in Cisco iOS.
>
> **[0:23](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=23)** You can activate it using the command MPLS IP in Global Configuration mode.
>
> **[0:30](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=30)** Now, we have two methods for configuring MPLS.
>
> **[0:33](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=33)** The first method is to use the MPLS IP command on all router interfaces.
>
> **[0:40](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=40)** This is known as the Interface Specific method.
>
> **[0:44](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=44)** The second method is the IGP Configuration method.
>
> **[0:48](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=48)** If you are using OSPF or IS-IS as your IGP, you can enable MPLS LDP on all interfaces that are enabled with the IGP, by using the MPLS LDP Autoconfig command under the routing protocol process.
>
> **[1:05](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=65)** In our scenario, I will enable MPLS on R1 and R2, using the Interface Configuration method, and on R3 and R4, using the IGP Configuration method with OSPF or IS-IS.
>
> **[1:21](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=81)** If you want routers to choose MPLS labels within a specific range, you can use the command MPLS Label Range minimum/maximum.
>
> **[1:31](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=91)** This is particularly useful for troubleshooting and gaining a better understanding of MPLS label allocation and utilization.
>
> **[1:42](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=102)** R1 configuration: ip cef, mpls ip, mpls label range 100-199, interface gi0/0, mpls ip.
>
> **[1:57](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=117)** R2 configuration: ip cef, mpls ip, mpls label range 200-299, interface gi0/0, mpls ip, interface gi0/1, mpls ip.
>
> **[2:15](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=135)** R3 configuration: ip cef, mpls ip, mpls label range 300-399, router ospf 1, mpls ldp autoconfig.
>
> **[2:28](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=148)** R4 configuration: ip cef, mpls ip, mpls label range 400-499, router ospf 1, mpls ldp autoconfig.
>
> **[2:42](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=162)** You can verify which interfaces have MPLS enabled, using the Show MPLS Interfaces command.
>
> **[2:50](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=170)** Also, running the command Show MPLS Interfaces Detail provides comprehensive information including details about the MPLS Configuration method employed on each interface.
>
> **[3:04](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=184)** You can verify the label information base, or LIB, using the command Show MPLS LDP Bindings.
>
> **[3:12](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=192)** This command displays the MPLS label bindings learned by LDP from neighboring routers.
>
> **[3:19](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=199)** For verifying a specific entry in the Label Information Base, or LIB, you can use the command Show MPLS LDP Bindings Network Mask.
>
> **[3:30](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=210)** Replace network with the network address, and mask with the subnet mask of the specific entry you want to examine.
>
> **[3:39](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=219)** This command displays detailed MPLS label bindings for the specified network prefix.
>
> **[3:46](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=226)** To view the Label Forwarding Information Base, or LFIB, you can use the command Show MPLS Forwarding Table on Cisco iOS devices.
>
> **[3:57](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=237)** This command displays the MPLS forwarding entries that map incoming labels to outgoing interfaces and next hop addresses.
>
> **[4:06](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=246)** R1 sends an ICMP echo request to quad 4.
>
> **[4:11](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=251)** In the LFIB, the bytes switched number increases on R2 and R3 because they are actively involved in MPLS label switching.
>
> **[4:22](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-configuration-in-cisco-ios?u=76281980&t=262)** R1 and R4, however, do not contribute to the LFI because they forward packets using the regular IP forwarding table, or FIB, without MPLS labels.

> [!info]- Semantic Content
>
> **Env Vars:** mpls (23), ldp (6), igp (4), cef (2), ospf (2)
> **Code Keywords:** interface (6), default, (1)
> **Code Identifiers:** ios (3)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### MPLS  LDP  neighborship
> [LinkedIn Learning](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980&t=0)** - [Instructor] After mastering basic MPLS LDP configuration, let's delve into understanding LDP neighborship.
>
> **[0:09](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980&t=9)** When we enable MPLS LDP on an interface, it activates the multicast address 224.0.0.2 on that interface.
>
> **[0:20](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980&t=20)** An LDP-Hello message starts being sent out.
>
> **[0:24](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980&t=24)** LDP is an application that operates using both UDP and TCP on port 646.
>
> **[0:33](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980&t=33)** LDP uses UDP for session discovery and establishment, sending Hello message to discover neighbors.
>
> **[0:41](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980&t=41)** By default, each router sends out an LDP-Hello message every five seconds.
>
> **[0:48](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980&t=48)** Once neighbors are discovered, it switch to TCP on port 646 for reliable label distribution and session management.
>
> **[0:59](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980&t=59)** Let's break down the process of LDP neighborship establishment and label distribution using a simple example where R1 is connected to R2 with a single link, and the mpls ip command is configured on both interfaces.
>
> **[1:16](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980&t=76)** The multicast address 224.0.0.2 is activated on the interface.
>
> **[1:24](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980&t=84)** Both R1 and R2 start sending LDP-Hello message over UDP to the multicast address 224.0.0.2.
>
> **[1:35](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980&t=95)** These Hello message are used to discover potential LDP neighbors on the directly connected link.
>
> **[1:43](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980&t=103)** When R1 and R2 start sending LDP-Hello message to the multicast address 224.0.0.2, each Hello message contain crucial information, including a Transport-IP address.
>
> **[1:59](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980&t=119)** The Transport-IP is one of the router's IP addresses that will be used for the TCP-Session to exchange label information.
>
> **[2:08](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980&t=128)** The Transport-IP address serves as the endpoint for the TCP connection used in the label distribution process.
>
> **[2:17](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980&t=137)** If the TCP connection is set up, both LSRs negotiate LDP session parameters by exchanging LDP Initializations message.
>
> **[2:27](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980&t=147)** These parameters include such things as the following: timer values, label distribution method, et cetera.
>
> **[2:37](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980&t=157)** If the LDP peers agree on the session parameters, they keep the TCP connection between them.
>
> **[2:44](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980&t=164)** After the LDP session has been set up, it is maintained by either the receipt of LDP packets or a periodic Keep Alive message.
>
> **[2:54](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980&t=174)** Each time the LDP peer receives an LDP packet or a Keep Alive message, the keep alive timer is reset for that peer.
>
> **[3:04](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980&t=184)** Keep Alive message ensures the ongoing health and connectivity of an established LDP session between two routers.
>
> **[3:13](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980&t=193)** This message confirm that the LDP session is still active and that both routers are capable of communicating over the session.
>
> **[3:22](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980&t=202)** By default, each router sends an LDP Keep Alive message every 60 seconds.
>
> **[3:29](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980&t=209)** This interval can be adjusted based on network requirements, but the default setting balances between timely session validation and network traffic overhead.
>
> **[3:41](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980&t=221)** Let's review.
>
> **[3:42](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980&t=222)** LDP-Hello message facilitate multicast-based neighbor discovery and session establishment, while Keep Alive message are unicast and maintain ongoing communication between established LDP neighbors over TCP connections.
>
> **[3:58](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-neighborship?u=76281980&t=238)** Now that we understand the LDP neighborship process, let's dive into the configuration and verification commands related to LDP in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** ldp (25), tcp (7), udp (3), mpls (2)
> **Code Keywords:** let (4), interface (3), default, (2), switch (1)
> **Versions:** 224.0.0 (4)
> **Ports:** port 646 (2)
> **Prerequisites:** set up (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** switch to (1)
> **Definitions:** is an  (1)

#### LDP neighborship verification
> [LinkedIn Learning](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-neighborship-verification?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-neighborship-verification?u=76281980&t=0)** - [Instructor] In this video, we will focus on a simple scenario featuring two routers, R1 and R2 directly connected with MPLS configured on their interfaces.
>
> **[0:12](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-neighborship-verification?u=76281980&t=12)** Use the show MPLS neighbors command to verify the neighborship between them.
>
> **[0:18](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-neighborship-verification?u=76281980&t=18)** LDP Identifier refers to a unique identifier used by each LSR to identify itself within the MPLS network.
>
> **[0:27](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-neighborship-verification?u=76281980&t=27)** This LDP ID is a six byte feed that consists of four bytes identifying the LSR uniquely, and two bytes identifying the label space that the LSR is using.
>
> **[0:41](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-neighborship-verification?u=76281980&t=41)** The LDP Router-ID is chosen based on the following methods, one, manual configuration, two, highest IP address of enabled loopback interfaces, three, highest IP address of enabled non-loopback interfaces.
>
> **[1:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-neighborship-verification?u=76281980&t=60)** R1's LDP Router-ID is QUAD-1, which is the highest IP address among its loopback interfaces.
>
> **[1:09](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-neighborship-verification?u=76281980&t=69)** R2's LDP Router-ID is QUAD-2, which is the highest IP address among its loopback interfaces.
>
> **[1:17](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-neighborship-verification?u=76281980&t=77)** The second part of the LDP Router-ID is typically referred to as the label space, which by default is set to zero in many configurations.
>
> **[1:27](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-neighborship-verification?u=76281980&t=87)** However, I will cover the concept of label space in more detail in future videos.
>
> **[1:34](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-neighborship-verification?u=76281980&t=94)** So the LDP Router-ID of R1 is QUAD-1 column zero, and the LDP Router-ID of R2 is QUAD-2 column zero.
>
> **[1:44](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-neighborship-verification?u=76281980&t=104)** In LDP, the TCP session is initiated from the router with the highest LDP Router-ID to the router with the lower LDP Router-ID.
>
> **[1:55](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-neighborship-verification?u=76281980&t=115)** The State of the LDP neighborship, which is displayed as operational or op, the number of LDP message sent and received between the neighbors, which helps in monitoring the health and activity of the LDP session.
>
> **[2:11](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-neighborship-verification?u=76281980&t=131)** Up time typically refers to the duration for which a neighborship session has been active.
>
> **[2:18](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-neighborship-verification?u=76281980&t=138)** LDP Discovery Source refers to the interface through which LDP Hello message are sent, while source IP address represent the IP address assigned to the interface from which LDP Hello message originate.
>
> **[2:34](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-neighborship-verification?u=76281980&t=154)** This information pertains to the peers or neighboring routers in an LDP session.
>
> **[2:41](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-neighborship-verification?u=76281980&t=161)** The last line displays all the IP addresses that exist in the LDP neighbor.
>
> **[2:47](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-neighborship-verification?u=76281980&t=167)** You can also use the command show MPLS LDP neighbor details to obtain more detailed information about the LDP neighbors.
>
> **[2:56](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-neighborship-verification?u=76281980&t=176)** Now we can see the LDP Hello time and LDP hold time.
>
> **[3:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-neighborship-verification?u=76281980&t=180)** The hello time is 5,000 millisecond or five seconds, and the hold time is 15,000 millisecond or 15 seconds.
>
> **[3:11](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-neighborship-verification?u=76281980&t=191)** This means that if an LDP Hello message is not received after three intervals, the neighborship will be torn down.
>
> **[3:20](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-neighborship-verification?u=76281980&t=200)** Also we can see the LDP KA or Keep Alive interval and Keep Alive whole time.
>
> **[3:27](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-neighborship-verification?u=76281980&t=207)** The Keep Alive interval is 60,000 millisecond or 60 seconds, and the whole time is 180,000 millisecond or 180 seconds.
>
> **[3:41](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-neighborship-verification?u=76281980&t=221)** This means that if an LDP KA message is not received after three intervals, the TC position will be torn down.
>
> **[3:50](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-neighborship-verification?u=76281980&t=230)** After learning about LDP neighborship, let's explore the configuration of various LDP parameters in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** ldp (28), mpls (4), quad (4), lsr (3), tcp (1)
> **Definitions:** refers to (3), means that (2), is a  (1)
> **Code Keywords:** interface (2), let (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### LDP parameters configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=0)** - [Instructor] In this video, I will guide you through the configuration of LDP, or label distribution protocol parameters.
>
> **[0:08](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=8)** In Cisco iOS, the LDP router ID is essential for establishing and maintaining LDP sessions.
>
> **[0:15](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=15)** By default, it's derived from the highest IP address of the router's enabled interfaces, but you can manually set it for better control.
>
> **[0:25](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=25)** To verify the LDP router ID and associated setting, use the show MPLS LDP discovery command.
>
> **[0:34](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=34)** To explicitly configure the LDP router ID, use the following command.
>
> **[0:38](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=38)** MPLS LDP router ID loop back zero force.
>
> **[0:44](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=44)** This command sets the LDP router ID to the IP address of the specified interface, in this case, loop back zero.
>
> **[0:51](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=51)** The force option ensures that the new router ID is applied immediately, even if it disrupts the existing LDP sessions.
>
> **[1:02](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=62)** To change the interval between sending "hello" message, MPLS LDP discovery hello interval seconds.
>
> **[1:09](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=69)** And to change the LDP hold time, you can use MPLS LDP discovery hello hold time seconds.
>
> **[1:18](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=78)** If the two LDP peers have different LDP hold times configured, the smaller of two values is used as the hold time for that LDP discovery source.
>
> **[1:30](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=90)** It will choose a smaller LDP hello interval than configured, so that it can send at least three LDP hellos before the hold time expires.
>
> **[1:41](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=101)** In our scenario, the LDP hello hold time is configured on R one and R two as 10 seconds and eight seconds respectively, because the protocol uses the smaller of the two values, the eight second hold time is chosen.
>
> **[1:57](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=117)** Additionally, in our scenario, the LDP hello interval is set to three seconds on R one, and four seconds on R two.
>
> **[2:06](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=126)** Since both of these intervals are greater than one third of the chosen hold time, which is eight seconds, resulting in 2.67 seconds, the protocol defaults to using the calculated one third of the hold time, approximately 2.67 seconds, as the hello interval for both R one and R two.
>
> **[2:29](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=149)** After the LDP session has been set up, it's maintained by either the receipt of LDP packets, or a PDR keep alive message.
>
> **[2:38](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=158)** Each time, the LDPPR receives an LDP packet, or a keep alive message, the keep alive timer is reset for that peer.
>
> **[2:48](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=168)** The keep alive and hold times for an LDP session can also be adjusted as needed.
>
> **[2:54](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=174)** To modify the LDP session hold time, you can use the command, MPLS LDP hold time seconds.
>
> **[3:01](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=181)** When two routers in an LDP session have different keep alive, or KA hold times value configured, the session will use the lower of the two values.
>
> **[3:12](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=192)** Correspondingly, the keep alive interval will be set to one third of this lower KA hold time value.
>
> **[3:21](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=201)** When configuring the keep alive hold time for LDP, it is important to understand that this timer is negotiated during the initial establishment of the LDP session.
>
> **[3:32](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=212)** If you change the KA hold time, the new value won't take effect until the LDP neighborship is reset.
>
> **[3:40](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=220)** This ensures that both routers agree on the new timing parameters.
>
> **[3:45](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=225)** To apply the new (indistinct) hold time, you need to restart the LDP neighborship.
>
> **[3:50](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=230)** You can do this using the command, (indistinct) MPLS LDP neighbor star.
>
> **[3:55](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=235)** This command will clear all LDP neighbors, and force the routers to renegotiate decision with the updated KA hold time values.
>
> **[4:06](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=246)** We configured the keep alive hold time on R one and R two as 150 seconds, and 120 seconds respectively.
>
> **[4:15](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=255)** As a result, the KA hold time is chosen as the lower value: 120 seconds.
>
> **[4:23](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-parameters-configuration?u=76281980&t=263)** Consequently, the KA interval is set to one third of this value, which is 40 seconds.

> [!info]- Semantic Content
>
> **Env Vars:** ldp (32), mpls (6), pdr (1), ldppr (1)
> **Code Keywords:** default, (1), interface (1), case, (1), new ( (1)
> **Versions:** 2.67 (2)
> **Prerequisites:** configure (1), set up (1)
> **Code Identifiers:** ios (1)
> **Speakers:** - [instructor] (1)


### 4. Advanced LDP Configuration

#### LDP authentication
> [LinkedIn Learning](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=0)** - [Instructor] LDP sessions are TCP sessions vulnerable to spoof TCP segment attacks.
>
> **[0:06](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=6)** To safeguard LDP from such risks, message-digest five or MD5 authentication can be implemented.
>
> **[0:15](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=15)** MD5 adds a signature known as the MD5 digest to TCP segment.
>
> **[0:23](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=23)** This digest is computed using a configured password on both ends of the connection for each specific TCP segment.
>
> **[0:32](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=32)** The configured MD5 password is never transmitted.
>
> **[0:37](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=37)** LDP authentication is not mandatory.
>
> **[0:40](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=40)** You can use the show mpls ldp discovery detail command to check the authentication status.
>
> **[0:47](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=47)** We can enforce authentication for neighbors using the mpls ldp password required command.
>
> **[0:55](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=55)** It's recommended to configure this command on both sides of the neighborship for security.
>
> **[1:01](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=61)** After configuring the mpls ldp password required command, it becomes mandatory to configure a password on both sides of the neighborship.
>
> **[1:11](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=71)** The neighborship will not establish or will be torn down if it was previously established.
>
> **[1:18](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=78)** Let's explore LDP authentication starting with the first method, per-neighbor authentication.
>
> **[1:26](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=86)** You can use mpls ldp neighbor IP address password password string command for per-neighbor authentication.
>
> **[1:34](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=94)** Replace IP address with the actual IP address of the LDP neighbor you want to authenticate and password a string with the password you want to set for authentication between these neighbors.
>
> **[1:49](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=109)** In the output of the show mpls ldp discovery detail command, the presence of neighbor in the password line indicates that the mpls ldp neighbor IP address password password stream command was used to configure authentication for that specific neighbor.
>
> **[2:08](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=128)** The second method is LDP global authentication.
>
> **[2:12](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=132)** This method applies a single password across all LDP neighbors.
>
> **[2:18](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=138)** We need to configure a standard ACL to specify which LDP neighbors or neighbor router IDs we want to enable authentication for.
>
> **[2:28](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=148)** Then we can use the mpls ldp password option number for ACL password command.
>
> **[2:36](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=156)** In the output of the show mpls ldp discovery detail command, the presence of option in the password line indicate that the mpls ldp password option command was used to configure authentication.
>
> **[2:52](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=172)** In mpls ldp authentication, the option method allows for more granular control over which neighbors require authentication.
>
> **[3:02](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=182)** By using different options with a specific access control list or ACLs, you can apply varying passwords for different sets of neighbors.
>
> **[3:13](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=193)** To illustrate, let's say we want to authenticate neighbors with different passwords based on their router IDs.
>
> **[3:21](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=201)** Mpls ldp password option 1 for 1 ACL1 cisco1.
>
> **[3:29](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=209)** Mpls ldp password option 2 for 2 ACL2 cisco2.
>
> **[3:34](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=214)** In this example, option one is assigned to neighbors matching ACL1 with the password, cisco1.
>
> **[3:41](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=221)** Option two is assigned to neighbors matching ACL2 with the password, cisco2.
>
> **[3:48](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=228)** The option number determines the priority.
>
> **[3:52](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=232)** A lower option number, option one, has higher priority over a higher number, option two.
>
> **[3:59](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=239)** The third method of LDP authentication is the fallback method.
>
> **[4:04](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=244)** This method provides a backup mechanism to ensure that neighbors can still establish authenticated sessions even if the primary methods fail or are not applicable.
>
> **[4:18](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=258)** To set up the fallback method, use the mpls ldp password fallback command.
>
> **[4:23](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=263)** This command specifies a global password that applies to any LDP neighbor that does not match any other configured authentication method.
>
> **[4:34](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=274)** In the output of the show mpls ldp discovery detail command, the presence of fallback in the password line indicates that the mpls ldp password fallback command was used to configure authentication.
>
> **[4:49](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=289)** If multiple methods are configured, the priority is one, neighbor command, two, option command, three, fallback method.
>
> **[5:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=300)** You can mix and match these methods on different routers in your network as long as the same password is used on both sides of the LDP session.
>
> **[5:10](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=310)** This flexibility allows for granular control of authentication policies based on your network's requirement.
>
> **[5:19](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=319)** In the next video, we will dive into LDP label advertisement control.
>
> **[5:24](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=324)** You will learn how to manage and control the distribution of LDP labels, ensuring optimized and secure label propagation across your network.
>
> **[5:35](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ldp-authentication?u=76281980&t=335)** Stay tuned for more insights on enhancing your MPLS network configuration.

> [!info]- Semantic Content
>
> **Env Vars:** ldp (13), tcp (4), md5 (4), acl (2), acl1 (2)
> **Prerequisites:** configure (6), set up (1)
> **Code Keywords:** let (2), for. (1), require (1)
> **Cross-References:** in the next (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Controlling the advertisement of labels via LDP
> [LinkedIn Learning](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=0)** - [Instructor] LDP provides the capability to selectively advertise or suppress labels to designated LDP peers, offering fine-grained control over label distribution.
>
> **[0:13](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=13)** This feature is particularly useful in certain MPLS applications where not all labels need to be distributed across the label-switch routers or LSRs.
>
> **[0:26](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=26)** This network includes four routers, with OSPF configured as the IGP and MPLS LDP configured on all interfaces.
>
> **[0:36](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=36)** Each router allocates a label for all networks in its routing table and advertises these labels to its LDP neighbors.
>
> **[0:46](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=46)** Let's check the label information base or LIB of R1 with the command show mpls ldp binding.
>
> **[0:55](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=55)** Let's check the RIB of R2 with the command show mpls ldp binding.
>
> **[1:01](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=61)** Assume we only need to have labels for the loopback zero interfaces of the routers, not for the IP addresses of the links between them.
>
> **[1:12](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=72)** We can use the command mpls ldp advertise-labels for ACL1 [to ACL2].
>
> **[1:19](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=79)** The ACL1 is a standard numbered access list that lets you specify which prefixes should have a label advertised.
>
> **[1:29](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=89)** The ACL2 is a standard numbered access list that lets you specify which LDP peers should receive the label advertisement.
>
> **[1:39](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=99)** First, we should configure no mpls ldp advertise-label on all routers.
>
> **[1:46](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=106)** Then we need to configure an ACL to permit the IP addresses of the loopback interfaces of all routers.
>
> **[1:54](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=114)** Finally, we can use mpls ldp advertise-labels for 1 on all routers.
>
> **[2:01](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=121)** Let's check the label information base or LIB of R1 with the command show mpls ldp binding.
>
> **[2:10](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=130)** Let's check the label information base or LIB of R2 with the command show mpls ldp binding.
>
> **[2:16](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=136)** R1 and R3 advertise labels only for the 192.168.254.x/32 networks
>
> **[2:29](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=149)** and not for other networks.
>
> **[2:33](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=153)** Let's verify the LFIB of R1 and R2.
>
> **[2:36](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=156)** In the LFIB of R1, the three prefixes 192.168.254.2/32,
>
> **[2:47](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=167)** 192.168.254.3/32,
>
> **[2:55](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=175)** and 192.168.254.4/32 have a valid outgoing label, whereas the other prefixes have no label associated with them as outgoing labels.
>
> **[3:13](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=193)** Also, in the LFIB of R2, the three prefix, 192.168.254.1/32,
>
> **[3:25](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=205)** 192.168.254.3/32, and 192.168.254.4/32 have a valid outgoing label, whereas the other prefixes have no label associated with them as outgoing label.
>
> **[3:48](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=228)** Let's use both ACL1 and ACL2.
>
> **[3:51](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=231)** In R3, I want to advertise the label for 192.168.254.1/32
>
> **[4:01](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=241)** and 192.168.254.2/32 to R2,
>
> **[4:10](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=250)** and 192.168.254.3/32 and 192.168.254.4/32 to R4.
>
> **[4:26](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=266)** First, we need to configure two ACLs for ACL2, one to select the router ID of R2 and one for R4: Ip access-list standard R2, Permit 192.168.254.2, Ip access-list standard R4, Permit 192.168.254.4.
>
> **[4:56](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=296)** Then we need to configure two ACLs for the two series of IP addresses: Ip access-list standard FOR_R2, Permit 192.168.254.1, Permit 192.168.254.2, Ip access-list standard FOR_R4, Permit 192.168.254.3, Permit 192.168.254.4.
>
> **[5:37](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=337)** Finally, we need to configure the mpls ldp advertise command twice: No mpls ldp advertise-labels, Mpls ldp advertise-labels for FOR_R2 to R2, Mpls ldp advertise-labels for FOR_R4 to R4.
>
> **[5:59](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=359)** Now, let's check the LIB of R2 and R4.
>
> **[6:02](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=362)** In R2, we have labels for 192.168.254.1/32
>
> **[6:10](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=370)** and 192.168.254.2/32, learned from R3, as expected.
>
> **[6:21](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=381)** In R4, we have labels for 192.168.254.3/32 and 192.168.254.4/32, learned from R3, as expected.
>
> **[6:39](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/controlling-the-advertisement-of-labels-via-ldp?u=76281980&t=399)** In the next video, we will learn about MPLS LDP inbound label binding filtering.

> [!info]- Semantic Content
>
> **Env Vars:** ldp (6), lib (4), acl2 (4), mpls (3), acl1 (3)
> **Versions:** 192.168.254 (21)
> **Code Keywords:** let (7), finally, (2), switch (1)
> **Prerequisites:** configure (5)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [instructor] (1)

#### MPLS LDP inbound label binding filtering
> [LinkedIn Learning](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-inbound-label-binding-filtering?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-inbound-label-binding-filtering?u=76281980&t=0)** - [Instructor] In this video, I'm going to explain how you can filter incoming label binding from an ldp neighbor.
>
> **[0:07](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-inbound-label-binding-filtering?u=76281980&t=7)** This feature operates in contrast to preventing the advertising of label binding.
>
> **[0:14](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-inbound-label-binding-filtering?u=76281980&t=14)** You can use the inbound label binding filtering on the receiving LDPPR if you can not apply the outbound filtering of label binding.
>
> **[0:24](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-inbound-label-binding-filtering?u=76281980&t=24)** For instance, you can filter out all received label binding from LDPPRs except for the label binding of the loop back interfaces of routers.
>
> **[0:35](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-inbound-label-binding-filtering?u=76281980&t=35)** In our example on R1, we can verify the label information base or lib using the command show mpls ldb binding.
>
> **[0:45](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-inbound-label-binding-filtering?u=76281980&t=45)** We need labels only for 192.168.254.4/32
>
> **[0:55](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-inbound-label-binding-filtering?u=76281980&t=55)** We can use the command mpls ldp neighbor NBR_ADDRESS labels accept ACL for inbound label binding filtering.
>
> **[1:06](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-inbound-label-binding-filtering?u=76281980&t=66)** First we should configure a standard ACL to match 192.168.254.4/32
>
> **[1:18](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-inbound-label-binding-filtering?u=76281980&t=78)** Then we use the command mpls ldp neighbor 192.168.254.2 labels accept LP.
>
> **[1:29](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-inbound-label-binding-filtering?u=76281980&t=89)** It only accepts labels for networks permitted by ACL LP from router two.
>
> **[1:36](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-inbound-label-binding-filtering?u=76281980&t=96)** Now let's verify the lib of R1 again.
>
> **[1:40](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-inbound-label-binding-filtering?u=76281980&t=100)** R1 only accepts labels for the 192.168.254.4/32 net 4 and not for others.
>
> **[1:52](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-ldp-inbound-label-binding-filtering?u=76281980&t=112)** After learning about how we can control label advertisement or label receiving for ldp, let's delve into ttl behavior in mpls in the next video.

> [!info]- Semantic Content
>
> **Env Vars:** acl (3), ldppr (1), nbr_address (1)
> **Versions:** 192.168.254 (4)
> **Code Keywords:** let (2)
> **Cross-References:** in the next (1)
> **Analogies:** for instance (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### TTL behavior of labeled packets
> [LinkedIn Learning](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ttl-behavior-of-labeled-packets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ttl-behavior-of-labeled-packets?u=76281980&t=0)** - [Instructor] In this video, I want to explain the TTL or time to live field in MPLS labels and how it functions.
>
> **[0:09](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ttl-behavior-of-labeled-packets?u=76281980&t=9)** When an IP packet enters the MPLS cloud, such as at the ingress LSR, the IP-TTL value is copied after being decremented by one to the MPLS TTL values of the pushed labels.
>
> **[0:24](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ttl-behavior-of-labeled-packets?u=76281980&t=24)** If the operation performed on the labeled packet is a swap, the TTL of the incoming label minus one is copied to the swap label.
>
> **[0:36](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ttl-behavior-of-labeled-packets?u=76281980&t=36)** At the egress LSR, the label is removed, and the IP header is exposed again.
>
> **[0:42](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ttl-behavior-of-labeled-packets?u=76281980&t=42)** The IP-TTL value is copied from the MPLS TTL value in the received top label after decremented it by one.
>
> **[0:52](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ttl-behavior-of-labeled-packets?u=76281980&t=52)** Assume that we have a loop inside the MPLS network.
>
> **[0:56](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ttl-behavior-of-labeled-packets?u=76281980&t=56)** R2 sends the labeled packet to R3.
>
> **[1:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ttl-behavior-of-labeled-packets?u=76281980&t=60)** R3 sends it back to R2, and R2 sends it to R3 again and so on.
>
> **[1:08](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ttl-behavior-of-labeled-packets?u=76281980&t=68)** After multiple transmissions, the MPLS TTL will finally reach one.
>
> **[1:14](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ttl-behavior-of-labeled-packets?u=76281980&t=74)** After that, the LSR will not forward it, and the packet will be dropped.
>
> **[1:19](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ttl-behavior-of-labeled-packets?u=76281980&t=79)** This means that the MPLS TTL prevents the packets from remaining in the loop forever.
>
> **[1:26](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ttl-behavior-of-labeled-packets?u=76281980&t=86)** This MPLS TTL behavior is similar to IP-TTL behavior, but let's learn about the difference between IP-TTL and MPLS TTL.
>
> **[1:38](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ttl-behavior-of-labeled-packets?u=76281980&t=98)** When a labeled packet is received with a TTL of one, the receiving LSR drops the packet and sends an ICMP message, time exceeded, to the originator of the IP packet.
>
> **[1:51](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ttl-behavior-of-labeled-packets?u=76281980&t=111)** This is the same behavior that a router would exhibit with an IP packet that had an expiring TTL.
>
> **[2:01](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ttl-behavior-of-labeled-packets?u=76281980&t=121)** However, the ICMP message is not immediately sent back to the originator of the packet because an interim LSR might not have an IP pass to work the source of the packet.
>
> **[2:14](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ttl-behavior-of-labeled-packets?u=76281980&t=134)** The ICMP message is forwarded along the LSP the original packet was following.
>
> **[2:21](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ttl-behavior-of-labeled-packets?u=76281980&t=141)** The reason for this forwarding of the ICMP message along the LSP that the original packet with the expiring TTL was following is that in some cases, the LSR that is generating the ICMP message has no knowledge of how to reach the originator of the original packet.
>
> **[2:42](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ttl-behavior-of-labeled-packets?u=76281980&t=162)** One such case is a network with MPLS Layer 3 VPN.
>
> **[2:48](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ttl-behavior-of-labeled-packets?u=76281980&t=168)** In this scenario, the P router does not have the knowledge to send back the ICMP message to the originator of the VPN packet because the P router does not have a road to directly return the ICMP message.
>
> **[3:03](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ttl-behavior-of-labeled-packets?u=76281980&t=183)** Don't be concerned about MPLS Layer 3 VPN.
>
> **[3:07](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ttl-behavior-of-labeled-packets?u=76281980&t=187)** It's beyond the scope of this course.
>
> **[3:10](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/ttl-behavior-of-labeled-packets?u=76281980&t=190)** In the next video, I will explain past discovery based on the information we learned in this video.

> [!info]- Semantic Content
>
> **Env Vars:** ttl (15), mpls (11), icmp (7), lsr (6), vpn (3)
> **Definitions:** is a  (2), means that (1)
> **Code Keywords:** let (1), pass (1)
> **Analogies:** such as (1), similar to (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Tracerouting in MPLS networks
> [LinkedIn Learning](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/tracerouting-in-mpls-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/tracerouting-in-mpls-networks?u=76281980&t=0)** - [Instructor] Tracerouting in an MPLS network is a bit different compared to tracerouting in an IP network.
>
> **[0:07](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/tracerouting-in-mpls-networks?u=76281980&t=7)** Look at this figure, which shows an MPLS network that will be used to show how tracerouting works in an MPLS network.
>
> **[0:17](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/tracerouting-in-mpls-networks?u=76281980&t=17)** The trace route is done on the R5 router toward the R6 router.
>
> **[0:23](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/tracerouting-in-mpls-networks?u=76281980&t=23)** The first prop has IP-TTL set to 1 and is received on the R1 router.
>
> **[0:30](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/tracerouting-in-mpls-networks?u=76281980&t=30)** The TTL of the packet expires on the R1, and it sends an ICMP message TTL exceeded back to the R5.
>
> **[0:39](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/tracerouting-in-mpls-networks?u=76281980&t=39)** The R5 sends the second prop.
>
> **[0:42](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/tracerouting-in-mpls-networks?u=76281980&t=42)** The R1 receives it, lowers the TTL R by one and adds a label.
>
> **[0:48](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/tracerouting-in-mpls-networks?u=76281980&t=48)** The TTL of the label is set to one, then R1 forwards the packet to the R2 router.
>
> **[0:55](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/tracerouting-in-mpls-networks?u=76281980&t=55)** This R2 router sees the TTL in the top label expiring.
>
> **[1:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/tracerouting-in-mpls-networks?u=76281980&t=60)** It creates an ICMP message TTL expired.
>
> **[1:04](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/tracerouting-in-mpls-networks?u=76281980&t=64)** Because this is a new packet, the IP-TTL and the TTL in the labels are set to a value of 255.
>
> **[1:13](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/tracerouting-in-mpls-networks?u=76281980&t=73)** The source IP address is the IP address on the incoming interface of the R2 router.
>
> **[1:20](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/tracerouting-in-mpls-networks?u=76281980&t=80)** A label is put onto the ICMP message and forwarded along the original LSP.
>
> **[1:26](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/tracerouting-in-mpls-networks?u=76281980&t=86)** On the R3 router, the label is stripped off and the IP packet is forwarded.
>
> **[1:33](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/tracerouting-in-mpls-networks?u=76281980&t=93)** The unlabeled IP packet is directly forwarded toward the R6 router.
>
> **[1:38](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/tracerouting-in-mpls-networks?u=76281980&t=98)** That R6 router has the destination IPS of the ICMP message in its routing table and returns the ICMP message.
>
> **[1:49](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/tracerouting-in-mpls-networks?u=76281980&t=109)** Eventually, the R5 router on the left receives the ICMP message.
>
> **[1:54](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/tracerouting-in-mpls-networks?u=76281980&t=114)** This behavior is the same for all props.
>
> **[1:58](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/tracerouting-in-mpls-networks?u=76281980&t=118)** All ICMP message are forwarded along the original LSP and are not sent back directly to the originator.

> [!info]- Semantic Content
>
> **Env Vars:** ttl (9), icmp (7), mpls (3), lsp (2), ips (1)
> **Definitions:** is a  (2)
> **Code Keywords:** interface (1)
> **Speakers:** - [instructor] (1)


### 5.Different MPLS Modes

#### MPLS label spaces
> [LinkedIn Learning](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label-spaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label-spaces?u=76281980&t=0)** - [Instructor] In this video, we will learn about MPLS label spaces, including per-platform and per-interface configurations.
>
> **[0:09](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label-spaces?u=76281980&t=9)** First, let's explore the per-platform label space used in frame mode MPLS, a concept covered in this course.
>
> **[0:18](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label-spaces?u=76281980&t=18)** In this figure, LSRA distributes FEC1 with label L1 to LSRs B and C.
>
> **[0:27](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label-spaces?u=76281980&t=27)** When LSRA distributes a label for FEC2, this label must be a different label than label L1.
>
> **[0:37](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label-spaces?u=76281980&t=37)** If per-platform label space is used, the packet is forwarded solely based on the label independently from the incoming interface.
>
> **[0:48](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label-spaces?u=76281980&t=48)** In per-platform label space, there is only one label space available, which is the zero label space.
>
> **[0:56](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label-spaces?u=76281980&t=56)** We can observe label space zero in LDP with the identifier LDP Router-id:Label Space.
>
> **[1:06](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label-spaces?u=76281980&t=66)** You can use show mpls ldp discovery to view the LDP ID and associated information.
>
> **[1:14](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label-spaces?u=76281980&t=74)** Now let's delve into the per-interface label space used in cell mode NPLS.
>
> **[1:21](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label-spaces?u=76281980&t=81)** Per-interface label space in MPLS refers to a method where each interface on a router maintains its own set of MPLS labels.
>
> **[1:30](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label-spaces?u=76281980&t=90)** This means that labels assigned to FECs are a unique per interface.
>
> **[1:36](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label-spaces?u=76281980&t=96)** For example, LSRA may assign label L1 for FEC1 and send it out on interface GI0/0 to LSRB while assigning label L2 for the same FEC1 and sending it out on interface GI0/1 to LSRC.
>
> **[1:58](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label-spaces?u=76281980&t=118)** So per-platform label allocation result in a smaller LIB and LFIB tables and a faster exchange of labels.
>
> **[2:07](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label-spaces?u=76281980&t=127)** Per-interface label space mode is often considered more secure than per platform mode because it ensures that MPLS labels are unique and separate for each interface on the router.
>
> **[2:21](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label-spaces?u=76281980&t=141)** This separation prevents potential label spoofing or misdirection that could occur if a single label space or per-platform were shared across all interfaces.
>
> **[2:34](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label-spaces?u=76281980&t=154)** In this figure, for example, router C has tried to send a labeled packet with a label that was advertised only to router B.
>
> **[2:43](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/mpls-label-spaces?u=76281980&t=163)** The router A has failed to forward the packet because the packet came in through the wrong interface.

> [!info]- Semantic Content
>
> **Env Vars:** mpls (5), lsra (3), fec1 (3), ldp (3), gi0 (2)
> **Code Keywords:** interface (11), let (2)
> **Analogies:** for example (2)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Label distribution mode
> [LinkedIn Learning](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-mode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-mode?u=76281980&t=0)** - [Instructor] MPLS distributes labels using one of these methods, Unsolicited Downstream or UD label distribution mode, Downstream-on-Demand or DoD label distribution mode.
>
> **[0:14](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-mode?u=76281980&t=14)** In this video, we will learn about both of them.
>
> **[0:18](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-mode?u=76281980&t=18)** Let's start with Unsolicited Downstream, which we use in Frame mode MPLS and have learned and experienced in this course.
>
> **[0:27](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-mode?u=76281980&t=27)** Unsolicited Downstream distribution of labels is a method where each router independently assigns a label to each destination IP prefix in its routing table.
>
> **[0:40](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-mode?u=76281980&t=40)** This mapping is stored in the LIB table, which sends it to all LDP peers.
>
> **[0:47](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-mode?u=76281980&t=47)** There is no control mechanism to govern the propagation of labels in an ordered fashion.
>
> **[0:54](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-mode?u=76281980&t=54)** This diagram shows router B generating a local label 200 and transmitting it to all neighboring routers.
>
> **[1:04](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-mode?u=76281980&t=64)** Other routers perform the same process once network X is included in the main routing table by the IGP.
>
> **[1:14](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-mode?u=76281980&t=74)** Each neighbor then chooses from these options regarding the label, utilize the label if router B is the nearest next hop for network X, retain the label in the LIB table, ignore the label.
>
> **[1:30](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-mode?u=76281980&t=90)** Frame mode MPLS uses Unsolicited Downstream for label distribution.
>
> **[1:36](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-mode?u=76281980&t=96)** The downstream keyword in the show MPLS LDP neighbors command indicates that Unsolicited Downstream mode is being used for label distribution.
>
> **[1:47](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-mode?u=76281980&t=107)** Let's learn about Downstream-on-Demand.
>
> **[1:50](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-mode?u=76281980&t=110)** Downstream-on-Demand distribution of labels requires each LSR to specifically request a label from its downstream neighbor.
>
> **[2:01](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-mode?u=76281980&t=121)** This figure shows how router A request a next top label from its downstream LDP peer.
>
> **[2:10](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-mode?u=76281980&t=130)** Unlike Unsolicited Downstream, their labels are pushed proactively to all downstream neighbors, Downstream-on-Demand conserves network resources by distributing labels only when required, typically in response to traffic flow or a specific network conditions.
>
> **[2:30](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-mode?u=76281980&t=150)** This mode helps optimize label distribution and scalability in MPLS networks, especially in large-scale deployment, where efficient resource utilization is crucial.
>
> **[2:43](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-distribution-mode?u=76281980&t=163)** The usual situation is that Cell mode MPLS uses Downstream-on-Demand label propagation.

> [!info]- Semantic Content
>
> **Env Vars:** mpls (6), ldp (3), lib (2), igp (1), lsr (1)
> **Code Keywords:** let (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Label retention modes
> [LinkedIn Learning](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-retention-modes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-retention-modes?u=76281980&t=0)** - [Instructor] This video describes the two ways in which labels are retained: Liberal Label Retention or LLR mode.
>
> **[0:09](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-retention-modes?u=76281980&t=9)** Conservative Label Retention or CLR mode.
>
> **[0:13](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-retention-modes?u=76281980&t=13)** Liberal Label Retention mode dictates that each LSR keeps all labels received from LDP peers, even if they are not the downstream peers for network X.
>
> **[0:26](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-retention-modes?u=76281980&t=26)** This figure shows how router C receives and keeps the label received from router B for network X, even though router D is a downstream peer.
>
> **[0:38](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-retention-modes?u=76281980&t=38)** Conservative Label Retention mode keeps only labels that can immediately be used for normally routed traffic paths.
>
> **[0:47](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-retention-modes?u=76281980&t=47)** The figure illustrates how router C does not consider router B to be the next top for network X, and therefore, drops the labels received from router B.
>
> **[1:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-retention-modes?u=76281980&t=60)** Frame mode MPLS uses the Liberal Label Retention mode, which enables routers to store all received labels, even if the labels are not being used.
>
> **[1:11](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-retention-modes?u=76281980&t=71)** These labels can be used after the network convergence to enable immediate establishment of an alternative LSP tunnel.
>
> **[1:21](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/label-retention-modes?u=76281980&t=81)** In short, the LLR mode gives you quicker adaptation to routing chains, whereas CLR mode gives you fewer labels to store and a better usage of the available memory on the router.

> [!info]- Semantic Content
>
> **Env Vars:** llr (2), clr (2), lsr (1), ldp (1), mpls (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### LSP control modes
> [LinkedIn Learning](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/lsp-control-modes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/lsp-control-modes?u=76281980&t=0)** - [Instructor] LSRs can establish a local binding for A FEC using one of two methods.
>
> **[0:06](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/lsp-control-modes?u=76281980&t=6)** Independent LSP control mode, ordered LSP control mode.
>
> **[0:12](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/lsp-control-modes?u=76281980&t=12)** In independent LSP control mode, an LSR can independently create a local binding for A FEC without coordinating with other LSRs.
>
> **[0:23](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/lsp-control-modes?u=76281980&t=23)** In this mode, each LSR generates a local binding for a specific FEC as soon as it identifies the FEC, which generally means that the prefix for the FEC is included in its routing table.
>
> **[0:40](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/lsp-control-modes?u=76281980&t=40)** In frame mode MPLS, we use per-platform label space, unsolicited downstream distribution, liberal label retention, and independent control mode.
>
> **[0:51](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/lsp-control-modes?u=76281980&t=51)** The disadvantage of independent LSP control is that some LSRs begin to label switch packets before the complete LSP is set up end to end.
>
> **[1:03](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/lsp-control-modes?u=76281980&t=63)** Therefore, the packet is not forwarded in the manner.
>
> **[1:08](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/lsp-control-modes?u=76281980&t=68)** It should be, if the LSP is not completely set up, the packet might not receive the correct forwarding treatment everywhere, or it might even be dropped.
>
> **[1:20](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/lsp-control-modes?u=76281980&t=80)** Ordered control mode is usually combined with downstream on demand propagation of labels, where a local label can be assigned and propagated only if a next stop label is available.
>
> **[1:34](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/lsp-control-modes?u=76281980&t=94)** This requirement results in an ordered sequence of downstream requests until an LSR is found that already has a next stop label, or an LSR is reached that uses independent control mode.
>
> **[1:50](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/lsp-control-modes?u=76281980&t=110)** The figure illustrates how both R two and R three forward requests until an edge is reached.
>
> **[1:58](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/lsp-control-modes?u=76281980&t=118)** The figure illustrates how both R two and R three forward requests until an edge is reached.
>
> **[2:06](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/lsp-control-modes?u=76281980&t=126)** The R four uses independent control mode, and can respond to the request.
>
> **[2:12](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/lsp-control-modes?u=76281980&t=132)** An LSR can assign a label only if it has already received a label from the next top LSR.
>
> **[2:19](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/lsp-control-modes?u=76281980&t=139)** Otherwise, the LSR must request a label from the next top LSR.
>
> **[2:25](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/lsp-control-modes?u=76281980&t=145)** This requirement results in an ordered sequence of downstream requests until an LSR is found that already has a next stop label, or an LSR is reached that uses independent control mode.
>
> **[2:39](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/lsp-control-modes?u=76281980&t=159)** Although ordered control mode could be used with frame mode MPLS, its usage is on cell mode MPLS.

> [!info]- Semantic Content
>
> **Env Vars:** lsr (10), lsp (6), fec (5), mpls (3)
> **Prerequisites:** set up (2)
> **Code Keywords:** switch (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/next-steps?u=76281980&t=0)** - [Instructor] Congratulations, you have made it through the MPLS Foundations Getting Started With MPLS course.
>
> **[0:08](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/next-steps?u=76281980&t=8)** I'm so proud of all the progress you have made and the knowledge you have gained.
>
> **[0:13](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/next-steps?u=76281980&t=13)** Throughout this course, we have covered the essentials of MPLS, from understanding its core principles to implementing and managing MPLS networks.
>
> **[0:25](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/next-steps?u=76281980&t=25)** You have learned how labels are distributed, how packets are forwarded, and why MPLS is a game-changer in the networking world.
>
> **[0:36](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/next-steps?u=76281980&t=36)** Now that you have a solid foundation, you are ready to dive deeper into the exciting applications of MPLS.
>
> **[0:45](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/next-steps?u=76281980&t=45)** You can explore advanced topics like MPLS traffic engineering, which optimizes the flow of network traffic, or delve into MPLS layer three VPN, and layer two VPN for secure and scalable virtual private networks.
>
> **[1:02](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/next-steps?u=76281980&t=62)** These advanced topics will further enhance your skills and open up new possibilities in your networking career.
>
> **[1:10](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/next-steps?u=76281980&t=70)** Whether you are aiming to optimize network performance, build secure VPNs, or explore other MPLS applications, the knowledge you have gained here will be your stepping stone.
>
> **[1:25](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/next-steps?u=76281980&t=85)** Thank you for joining me on this journey through MPLS Foundations.
>
> **[1:30](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/next-steps?u=76281980&t=90)** Keep exploring, keep learning, and never stop pushing the boundaries of what's possible in networking.
>
> **[1:38](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/next-steps?u=76281980&t=98)** I look forward to seeing you in future courses.
>
> **[1:41](https://www.linkedin.com/learning/mpls-foundations-getting-started-with-mpls/next-steps?u=76281980&t=101)** Until then, happy networking. Thank you.

> [!info]- Semantic Content
>
> **Env Vars:** mpls (10), vpn (2)
> **Code Keywords:** private (1)
> **Definitions:** is a  (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Mastering Multiprotocol Label Switching (MPLS)]]
**1 of 4** | [[MPLS L3VPN Foundation and Implementation]] →

## Appears In

- [[Mastering Multiprotocol Label Switching (MPLS)]]

## Related Courses

_Courses sharing skills:_

- [[MPLS- Traffic Engineering]] — Multiprotocol Label Switching (MPLS), Computer Network Operations
- [[MPLS Segment Routing]] — Computer Networking
- [[MPLS L3VPN Foundation and Implementation]] — Multiprotocol Label Switching (MPLS)
- [[Networking Foundations- Local Area Networks (LANs)]] — Computer Networking
- [[Cloud Computing- Understanding Networking]] — Computer Networking

---

[↑ Back to top](#)