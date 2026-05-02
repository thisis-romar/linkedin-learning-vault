---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: mpls-l3vpn-foundation-and-implementation
url: "https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation"
duration_minutes: 123
duration: 2h 3m
level: Intermediate
updated: 6/20/2025
learners: 3579
skills:
  - Virtual Private Network (VPN)
  - Multiprotocol Label Switching (MPLS)
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQHXBVAufa-tTg/learning-public-crop_675_1200/B4EZd_.uUnH0AY-/0/1750198838835?e=2147483647&amp;v=beta&amp;t=lQeXEhNioJJr0rWHbVzr8i4SjqSSj4nUlZiX9kDhOxk"
linkedin_topic: Network and System Administration
learning_paths:
  - '[[Mastering Multiprotocol Label Switching (MPLS)]]'
prev_courses:
  - '[[Mpls Foundations Getting Started With Mpls]]'
next_courses:
  - '[[MPLS- Traffic Engineering]]'
path_nav: '[{"path":"Mastering Multiprotocol Label Switching (MPLS)","position":2,"total":4,"prev":"Mpls Foundations Getting Started With Mpls","next":"MPLS- Traffic Engineering"}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - skill/virtual-private-network-vpn
  - skill/multiprotocol-label-switching-mpls
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/MPLS%20L3VPN%20Foundation%20and%20Implementation.md)

![MPLS L3VPN Foundation and Implementation](https://media.licdn.com/dms/image/v2/D4E0DAQHXBVAufa-tTg/learning-public-crop_675_1200/B4EZd_.uUnH0AY-/0/1750198838835?e=2147483647&amp;v=beta&amp;t=lQeXEhNioJJr0rWHbVzr8i4SjqSSj4nUlZiX9kDhOxk)

# MPLS L3VPN Foundation and Implementation

> Dive into the world of MPLS Layer 3 VPNs in this course with expert instructor Arash Deljoo. Join Arash as he equips you with the skills you need to successfully design, configure, and troubleshoot MPLS L3VPNs for enterprise and service provider networks. Explore core concepts like VRFs, MP-BGP, and label switching, then apply them through practical labs covering common topologies and routing setu

> [LinkedIn Learning](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation) | 2h 3m | Intermediate | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Foundation and implementation](#foundation-and-implementation)
- [**1. Introduction to MPLS and L3VPN**](#1-introduction-to-mpls-and-l3vpn) (4 videos)
  - [What is MPLS? Understanding the basics](#what-is-mpls-understanding-the-basics)
  - [Introduction to Layer 3 VPNs (L3VPN) and their use cases](#introduction-to-layer-3-vpns-l3vpn-and-their-use-cases)
  - [Benefits of MPLS L3VPN for enterprises and service providers](#benefits-of-mpls-l3vpn-for-enterprises-and-service-providers)
  - [Overview of course objectives and target audience](#overview-of-course-objectives-and-target-audience)
- [**2. MPLS Fundamentals**](#2-mpls-fundamentals) (5 videos)
  - [MPLS architecture and components](#mpls-architecture-and-components)
  - [Label distribution protocol (LDP) and resource reservation protocol (RSVP) explained](#label-distribution-protocol-ldp-and-resource-reservation-protocol-rsvp-explained)
  - [MPLS packet flow and label switching](#mpls-packet-flow-and-label-switching)
  - [Understanding MPLS terminology (PE, CE, P routers)](#understanding-mpls-terminology-pe-ce-p-routers)
  - [Introduction to MPLS L3VPN concepts](#introduction-to-mpls-l3vpn-concepts)
- [**3. L3VPN Core Concepts**](#3-l3vpn-core-concepts) (5 videos)
  - [What makes L3VPN unique? VRFs and route distinguishers](#what-makes-l3vpn-unique-vrfs-and-route-distinguishers)
  - [The role of MP-BGP in L3VPN](#the-role-of-mp-bgp-in-l3vpn)
  - [Route targets: Importing and exporting routes](#route-targets-importing-and-exporting-routes)
  - [Control plane vs. data plane in L3VPN](#control-plane-vs-data-plane-in-l3vpn)
  - [Common L3VPN topologies (hub-and-spoke, full mesh)](#common-l3vpn-topologies-hub-and-spoke-full-mesh)
- [**4. Designing MPLS L3VPN**](#4-designing-mpls-l3vpn) (5 videos)
  - [Planning an MPLS L3VPN deployment](#planning-an-mpls-l3vpn-deployment)
  - [Addressing and routing considerations](#addressing-and-routing-considerations)
  - [Scaling L3VPN: Best practices and limitations](#scaling-l3vpn-best-practices-and-limitations)
  - [Security features in MPLS L3VPN](#security-features-in-mpls-l3vpn)
  - [Quality of service (QoS) in MPLS L3VPN: Ensuring performance](#quality-of-service-qos-in-mpls-l3vpn-ensuring-performance)
- [**5. Implementing MPLS L3VPN**](#5-implementing-mpls-l3vpn) (6 videos)
  - [Case study: Step-by-step L3VPN deployment](#case-study-step-by-step-l3vpn-deployment)
  - [Configuring VRFs on PE routers](#configuring-vrfs-on-pe-routers)
  - [Setting up MP-BGP for L3VPN](#setting-up-mp-bgp-for-l3vpn)
  - [Connecting CE to PE: Static and dynamic routing options](#connecting-ce-to-pe-static-and-dynamic-routing-options)
  - [Enabling MPLS in the service provider network](#enabling-mpls-in-the-service-provider-network)
  - [Verifying connectivity and testing the VPN](#verifying-connectivity-and-testing-the-vpn)
- [**6. Advanced Topics and Wrap-Up**](#6-advanced-topics-and-wrap-up) (4 videos)
  - [Inter-AS L3VPN: Connecting multiple providers](#inter-as-l3vpn-connecting-multiple-providers)
  - [MPLS L3VPN in modern networks (SD-WAN integration)](#mpls-l3vpn-in-modern-networks-sd-wan-integration)
  - [Common pitfalls and how to avoid them](#common-pitfalls-and-how-to-avoid-them)
  - [The future of MPLS L3VPN: Trends and evolution](#the-future-of-mpls-l3vpn-trends-and-evolution)
- [**Conclusion**](#conclusion) (1 videos)
  - [Course summary and next steps for learners](#course-summary-and-next-steps-for-learners)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Foundation and implementation](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-foundation-and-implementation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-foundation-and-implementation?u=76281980&t=0)** - [Instructor] What if you could unlock the secret to building networks that power the world's biggest enterprises?
>
> **[0:08](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-foundation-and-implementation?u=76281980&t=8)** Well, get ready, because that's exactly what we will cover in this course.
>
> **[0:12](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-foundation-and-implementation?u=76281980&t=12)** This will be your launch into the heart of [[Multiprotocol Label Switching (MPLS)|MPLS]] Layer 3 VPNs that take that revolutionizing connectivity for businesses and providers alike.
>
> **[0:22](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-foundation-and-implementation?u=76281980&t=22)** In this course, you will learn why MPLS and Layer 3 VPNs are the backbone of modern networks.
>
> **[0:28](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-foundation-and-implementation?u=76281980&t=28)** You will master VRFs, build MPBGP like a pro and stitch together VPNs across providers.
>
> **[0:36](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-foundation-and-implementation?u=76281980&t=36)** Hi, I am Arash Deljoo, your instructor and I have spent 20 years in the trenches of networking, building MPLS solutions, solving real world puzzles and teaching engineers how to own this take.
>
> **[0:49](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-foundation-and-implementation?u=76281980&t=49)** So if you are ready to turbocharge your carrier, let's dive in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (3)
> **Env Vars:** mpls (3), mpbgp (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to MPLS and L3VPN

[↑ Back to Table of Contents](#table-of-contents)

#### [What is MPLS? Understanding the basics](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=0)** - [Arash] Welcome to the first video of our course, [[Multiprotocol Label Switching (MPLS)|MPLS]] layer three VPN foundation and implementation.
>
> **[0:07](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=7)** I am Arash Deljoo, and today we are answering a key question.
>
> **[0:11](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=11)** What is MPLS?
>
> **[0:13](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=13)** By the end of this video, you will grasp the core concept of multi-protocol label switching and see how it boosts network efficiency.
>
> **[0:23](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=23)** Let's dive in.
>
> **[0:25](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=25)** Picture a traditional IP network.
>
> **[0:27](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=27)** A packet hits the router and it digs into the [[Routing]] table to find the destination IP, like checking a map at every stop.
>
> **[0:36](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=36)** This happens hop by hop, slowing things down in busy networks.
>
> **[0:41](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=41)** That's where MPLS multi-protocol label switching steps in to streamline the process.
>
> **[0:48](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=48)** Here is the core idea.
>
> **[0:51](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=51)** MPLS attach a small label to packets as they enter the network.
>
> **[0:56](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=56)** Instead of analyzing the full IP header, routers forward based on this label.
>
> **[1:01](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=61)** Think of it as a VIP pass that speeds packets through.
>
> **[1:06](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=66)** This label switching method is the heart of MPLS efficiency.
>
> **[1:11](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=71)** Let's see it in action.
>
> **[1:13](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=73)** With IP routing, every router does a lookup, time-consuming and resource-heavy.
>
> **[1:20](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=80)** With MPLS, the entry router or label edge router LER assigns a label.
>
> **[1:26](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=86)** Core routers called label switch routers LSR swap or remove labels without touching the IP header.
>
> **[1:34](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=94)** The payoff, faster forwarding, less strain on routers.
>
> **[1:40](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=100)** Why multi-protocol? MPLS isn't picky.
>
> **[1:44](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=104)** It works with IPv4, IPv6, ethernet, and more.
>
> **[1:49](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=109)** This versatility lets it handle all kinds of traffic in one system.
>
> **[1:55](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=115)** A big plus for today's diverse networks.
>
> **[1:59](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=119)** Efficiency isn't just about the speed, it's about a smarter traffic flow.
>
> **[2:04](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=124)** MPLS creates label-switched paths or LSPs, predefined routes that act like express lanes.
>
> **[2:13](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=133)** These paths avoid congestion and ensure consistent performance, making MPLS perfect for solutions like layer three VPNs, which we will explore next.
>
> **[2:24](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=144)** How does MPLS enhance efficiency?
>
> **[2:28](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=148)** It cuts latency with quick label lookups, boosts throughput by easing router workload, and optimizes resources with [[Traffic Engineering]] via LSPs.
>
> **[2:41](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=161)** This combo makes MPLS a go-to for scalable, reliable networks, especially for layer three VPNs.
>
> **[2:49](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=169)** To recap, MPLS uses labels to speed up packet forwarding, supports multiple protocols, and controls traffic with LSPs.
>
> **[2:59](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=179)** It's the foundation for advanced networking, like layer three VPNs.
>
> **[3:05](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=185)** In our next video, we will cover introduction to layer three VPNs L3VPN and their use cases, building on what we have learned here.
>
> **[3:16](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=196)** If you are ready to keep going, I will see you in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (12), [[Routing]] (2), [[Traffic Engineering]] (1)
> **Env Vars:** mpls (12), vpn (1), vip (1), ler (1), lsr (1)
> **Cross-References:** next video (1), in the next (1)
> **Analogies:** picture (1), think of it as (1)
> **CLI Commands:** find (1)
> **Speakers:** - [arash] (1)

#### [Introduction to Layer 3 VPNs (L3VPN) and their use cases](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=0)** - [Instructor] Welcome back to [[Multiprotocol Label Switching (MPLS)|MPLS]], Layer 3 VPN Foundation and Implementation.
>
> **[0:05](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=5)** In this second video, we are exploring introduction to Layer 3 VPNs, L3VPNs, and their use cases.
>
> **[0:13](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=13)** By the end, you will know what L3VPNs are, why they matter, and where they shine in the real world.
>
> **[0:21](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=21)** Let's jump in.
>
> **[0:23](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=23)** So what's the purpose of a Layer 3 VPN?
>
> **[0:27](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=27)** At its core, an L3VPN uses MPLS, [[Multiprotocol Label Switching (MPLS)|Multiprotocol Label Switching]], to create a [[Virtual Private Network (VPN)|virtual private network]] at Layer 3, the IP layer.
>
> **[0:38](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=38)** It allows multiple separate networks like branch offices or customer sites to connect securely over a shared infrastructure while keeping their IP traffic isolated.
>
> **[0:52](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=52)** Think of it as private tunnels running through a public highway.
>
> **[0:57](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=57)** Here is how it fits with MPLS.
>
> **[0:59](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=59)** In our last video, we learned MPLS uses labels to forward packets efficiently.
>
> **[1:06](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=66)** L3VPNs build on that by assigning unique labels to each customer's traffic.
>
> **[1:13](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=73)** This way a service provider's network can carry data for multiple clients, say Company A and Company B, without their packets ever mixing, even if they use overlapping IP addresses.
>
> **[1:27](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=87)** The magic happens with two key players, provider edge routers, or PEs, and customer edge routers, or CEs.
>
> **[1:36](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=96)** This CE sits at the customer site, like an [[Microsoft Office|office]], connecting to the PE in the provider's MPLS network.
>
> **[1:44](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=104)** The PE labels the traffic, routes it through the network, and ensures it treats the right destination CE.
>
> **[1:53](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=113)** Its secure, scalable, and doesn't need dedicated lines.
>
> **[1:58](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=118)** Now let's look at real world use cases.
>
> **[2:01](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=121)** First up, connecting branch offices.
>
> **[2:04](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=124)** Imagine a company with headquarters in New York and branches in London and Tokyo.
>
> **[2:10](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=130)** An L3VPN links these sites over a provider's MPLS network, letting employees share resources, like a central database, securely and seamlessly, as if they are on one private LAN without the cost of lease lines.
>
> **[2:28](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=148)** Second scenario, service providers supporting multiple customers.
>
> **[2:33](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=153)** A telecom company can use L3VPNs to offer isolated networks to different clients, say a bank and a retail chain, over the same infrastructure.
>
> **[2:45](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=165)** Each gets its own virtual IP network with no crosstalk, even if both use the same private IP range, like 10.0.0.0/24.
>
> **[2:57](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=177)** Third use case, extranets for collaboration.
>
> **[3:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=180)** Picture a manufacturer and its suppliers needing to share order data.
>
> **[3:06](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=186)** An L3VPN can connect their network securely over the internet or a provider backbone, allowing controlled access while keeping other traffic private.
>
> **[3:17](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=197)** It's flexible and efficient for partnerships.
>
> **[3:21](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=201)** To wrap up, L3VPN uses MPLS to deliver secure isolated Layer 3 VPN connectivity over a shared network, perfect for linking branches, serving multiple customers, or enabling collaboration.
>
> **[3:36](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=216)** In our next video, we will dive into benefits of MPLS Layer 3 VPN for enterprises and service providers, why it's a win for both sides.
>
> **[3:46](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=226)** If you are enjoying this journey, let's keep exploring together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (8), [[Multiprotocol Label Switching (MPLS)|Multiprotocol label switching]] (1), [[Virtual Private Network (VPN)|Virtual private network]] (1), [[Microsoft Office|Office]] (1)
> **Env Vars:** mpls (8), vpn (4), l3vpn (4), lan (1)
> **Analogies:** think of it as (1), imagine (1), picture (1)
> **Versions:** 10.0.0 (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### [Benefits of MPLS L3VPN for enterprises and service providers](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=0)** - [Instructor] Welcome to the third video in the [[Multiprotocol Label Switching (MPLS)|MPLS]] Layer 3 VPN Foundation and Implementation course.
>
> **[0:06](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=6)** Today's topic is benefits of MPLS Layer 3 VPN for enterprises and service providers.
>
> **[0:13](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=13)** By the end, you will understand how MPLS Layer 3 VPN's daily standout advantages in a [[Scalability]] and security for both sides.
>
> **[0:23](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=23)** Let's dive into why this technology is a game changer.
>
> **[0:28](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=28)** First, let's recap.
>
> **[0:30](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=30)** MPLS Layer 3 VPNs use multi vertical label switching to create secure isolated IP networks over a shade infrastructure.
>
> **[0:40](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=40)** We have seen what they are and where they are used.
>
> **[0:44](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=44)** Now let's explore how they benefit enterprises running their operations and service providers managing customer networks.
>
> **[0:53](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=53)** Starting with the scalability and area of MPS Layer 3 VPNs shine for enterprises.
>
> **[1:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=60)** Imagine a business expanding from five offices to 50.
>
> **[1:05](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=65)** With traditional VPNs like IPSec over the internet, each new site means more complex config and tunnels.
>
> **[1:13](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=73)** MPLS Layer 3 VPNs simplify this.
>
> **[1:16](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=76)** Enterprises connect new sites via customer age routers to the provider's MPLS network and the provider age routers handle the heavy lifting.
>
> **[1:27](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=87)** Adding a site is as easy as linking to the existing label switched pots.
>
> **[1:32](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=92)** No redesign needed.
>
> **[1:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=95)** For service providers, scalability is just as powerful.
>
> **[1:40](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=100)** One MPS network can support thousands of customers each with their own Layer 3 VPN.
>
> **[1:47](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=107)** Labels keep traffic separated so providers can onboard new clients, say a bank or a retailer without reconfiguring the core or worrying about IP overlaps.
>
> **[2:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=120)** It's a scalable backbone that grows with demand, efficiently using resources.
>
> **[2:07](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=127)** Now, security, a critical advantage for both.
>
> **[2:10](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=130)** For enterprises, MPLS Layer 3 VPNs offer private networking without the public internet risks.
>
> **[2:19](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=139)** Traffic stays within the provider's controlled MPLS domain isolated by labels.
>
> **[2:26](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=146)** Unlike internet-based VPNs, there is no exposure to external threats like DDoS attacks.
>
> **[2:34](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=154)** It's like having a dedicated line, but at a fraction of the cost and complexity.
>
> **[2:40](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=160)** Service providers benefit too.
>
> **[2:43](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=163)** L3VPNs ensure customer data stays separate.
>
> **[2:46](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=166)** Company A's packet never mixed with company B's, even with identical IP range.
>
> **[2:53](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=173)** This isolation is built into the MPLS architecture backed by robust [[Routing Protocols]] like BGP.
>
> **[3:01](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=181)** Providers can guarantee security without managing encryption for each client, simplifying operations while meeting a strict compliance needs.
>
> **[3:12](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=192)** Put it together and MPS Layer 3 VPNs deliver a win-win.
>
> **[3:18](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=198)** Enterprises get a scalable, secure network to grow without limits, perfect for global operations or remote workforces.
>
> **[3:28](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=208)** Service providers gain a flexible, secure platform to serve more customers efficiently boosting revenue without overhauling infrastructure.
>
> **[3:38](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=218)** It's scalability and security seamlessly integrated.
>
> **[3:43](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=223)** To sum up MPLS Layer 3 VPNs offer enterprises a scalability to expand effortlessly and security to operate confidently.
>
> **[3:53](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=233)** While service providers get a scalable, secure way to support countless clients.
>
> **[3:59](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=239)** Next up, we will shift gears with overview of course objectives and target audience to map out what's ahead in this course.
>
> **[4:08](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=248)** Stay tuned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (10), [[Scalability]] (5), [[Routing Protocols]] (1)
> **Env Vars:** mpls (10), vpn (4), mps (3), bgp (1)
> **Analogies:** imagine (1), it's like (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Overview of course objectives and target audience](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=0)** - [Lecturer] Welcome to this video in the [[Multiprotocol Label Switching (MPLS)|MPLS]] L3VPN Foundation and Implementation course.
>
> **[0:06](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=6)** Today's topic is Overview of Course Objectives and Target Audience.
>
> **[0:12](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=12)** By the end, you will recognize the goals of this course spanning MPLS and L3VPN from basics to advanced topics and assess if it meets your learning needs.
>
> **[0:24](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=24)** Let's dive in.
>
> **[0:26](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=26)** This course is built around five key areas, each designed to give you practical hands-on skills.
>
> **[0:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=35)** Here's what we are aiming for, a clear path from understanding MPLS and L3VPN essentials to designing and implementing solutions all the way to mastering advanced concepts.
>
> **[0:50](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=50)** First up, MPLS fundamentals.
>
> **[0:53](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=53)** You will learn how [[Multiprotocol Label Switching (MPLS)|Multiprotocol Label Switching]] works, labels, switching, and efficiency, laying the groundwork for everything else.
>
> **[1:03](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=63)** Next, L3VPN core concepts.
>
> **[1:06](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=66)** This covers what L3VPNs are, their purpose, and real-world use cases like connecting sites or isolating customers.
>
> **[1:17](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=77)** Third, designing MPLS L3VPN.
>
> **[1:20](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=80)** Here you will explore how to plan an L3VPN.
>
> **[1:24](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=84)** Think topology, [[Routing]], and [[Scalability]] for enterprise or provider needs.
>
> **[1:30](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=90)** Fourth, implementing MPLS L3VPN.
>
> **[1:34](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=94)** This is the hands-on part, configuring routers, setting up tunnels, and making it work.
>
> **[1:42](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=102)** Finally, advanced topics and wrap up.
>
> **[1:45](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=105)** You will dive into inter-AS L3VPN for connecting multiple providers, MPS L3VPN in modern networks with SD-WAN integration, common pitfalls and how to avoid them, and the future of MPLS L3VPN with trends and evolution, all tied together with practical insights.
>
> **[2:08](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=128)** Who is this for?
>
> **[2:09](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=129)** The target audience includes enterprise IT folks, like network engineers wanting to link offices or scale securely, and service provider technicians designing customer VPNs over MPLS.
>
> **[2:24](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=144)** It's also great for certification candidates like those eyeing CCNA or CCMP or anyone keen on actionable networking skills.
>
> **[2:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=155)** If you are after theory only, this isn't it.
>
> **[2:38](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=158)** This course is scenario-driving and practical.
>
> **[2:42](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=162)** Does this fit your needs?
>
> **[2:44](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=164)** Consider this.
>
> **[2:45](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=165)** Do you want to master MPLS basics and L3VPN design?
>
> **[2:50](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=170)** Are you looking to implement and troubleshoot real solutions?
>
> **[2:54](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=174)** If you are aiming to apply these skills in enterprise networks, provider environments, or certification prep, this course aligns perfectly.
>
> **[3:04](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=184)** It's about building knowledge you can use step by step.
>
> **[3:09](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=189)** The journey starts with fundamentals and ends with advanced mastery.
>
> **[3:13](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=193)** We are laying a strong base now, and the next step builds on that foundation.
>
> **[3:20](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=200)** To wrap up, these course targets, MPLS fundamentals, L3VPN core concepts, designing and implementing L3VPNs and advanced topics.
>
> **[3:30](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=210)** ideal for enterprise engineers, provider techs, and certification seekers.
>
> **[3:36](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=216)** If that's your part, you are set.
>
> **[3:40](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=220)** Next, we will explore the overview of MPLS architecture and components to dig into the technical core.
>
> **[3:46](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=226)** See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (11), [[Multiprotocol Label Switching (MPLS)|Multiprotocol label switching]] (1), [[Routing]] (1), [[Scalability]] (1)
> **Env Vars:** l3vpn (12), mpls (11), mps (1), wan (1), ccna (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [lecturer] (1)


### 2. MPLS Fundamentals

[↑ Back to Table of Contents](#table-of-contents)

#### [MPLS architecture and components](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=0)** - [Lecturer] Welcome to the [[Multiprotocol Label Switching (MPLS)|MPLS]] fundamental section of the MPLS L3VPN Foundation and Implementation course.
>
> **[0:08](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=8)** This is the first video, MPLS Architecture and Components.
>
> **[0:12](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=12)** By the end, you will understand the structure of an MPLS network and how labels drive packets forwarding.
>
> **[0:19](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=19)** Let's dive into the foundation of MPLS.
>
> **[0:23](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=23)** MPLS, [[Multiprotocol Label Switching (MPLS)|Multiprotocol Label Switching]], revolves around peculiar architecture.
>
> **[0:29](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=29)** It's split into two zones, the edge and the core.
>
> **[0:34](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=34)** At the edge, we have routers that bring traffic in and out of the MPLS network.
>
> **[0:39](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=39)** These are the entry and exit points.
>
> **[0:43](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=43)** In the core, we have routers that handle traffic inside the network.
>
> **[0:47](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=47)** Together they form a system designed for fast, efficient forwarding.
>
> **[0:54](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=54)** Here is the breakdown.
>
> **[0:55](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=55)** Edge routers, known as Label Edge Routers or LERs, sit at the network boundaries.
>
> **[1:02](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=62)** They are the gatekeepers where traffic enters or leaves.
>
> **[1:07](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=67)** Core routers, called Label Switch Routers or LSRs, sit inside connecting the edge.
>
> **[1:14](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=74)** These components work together to create pods, called Label Switch Pods or LSPs, that guide traffic from one side to the other.
>
> **[1:24](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=84)** The architecture hinges on these roles, LERs at the start and end, LSRs in between.
>
> **[1:33](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=93)** Now, how do labels drive packet forwarding?
>
> **[1:37](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=97)** When a packet hits an LER at the network edge, it gets a label, a short tag that defines its path.
>
> **[1:45](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=105)** This isn't about deep [[Routing]] decision, it's a simple instruction.
>
> **[1:51](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=111)** The packet then travels through the core where LSRs read the label and forward it along the LSR.
>
> **[1:58](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=118)** At each hub, the label keeps things moving fast.
>
> **[2:01](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=121)** No complex lookups, just a quick check and send.
>
> **[2:06](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=126)** At the final LER, the label job is done and the packet exits.
>
> **[2:12](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=132)** The beauty of this setup is control and speed.
>
> **[2:16](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=136)** LER decide the path upfront by adding labels and LSRs follow that plan, switching traffic along LSPs.
>
> **[2:25](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=145)** The architecture, edge, and core, LERs and LSRs, makes this possible, turning a network into a streamlined highway.
>
> **[2:36](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=156)** Labels are the drivers, steering packets exactly where they need to go without delay.
>
> **[2:43](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=163)** To wrap up, MPLS architecture is built on LERs at the edge and LSRs in the core, forming LSPs.
>
> **[2:52](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=172)** Labels drive forwarding by giving packets a fast, predefined route through the network.
>
> **[2:59](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=179)** In the next video, Label Distribution Protocols, LDP and RSVP, explained.
>
> **[3:04](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=184)** We will see how those labels get assigned.
>
> **[3:08](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=188)** Stick around as we build on this foundation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (8), [[Multiprotocol Label Switching (MPLS)|Multiprotocol label switching]] (1), [[Routing]] (1)
> **Env Vars:** mpls (8), ler (3), l3vpn (1), lsr (1), ldp (1)
> **Cross-References:** in the next (1)
> **Definitions:** known as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [lecturer] (1)

#### [Label distribution protocol (LDP) and resource reservation protocol (RSVP) explained](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=0)** - [Instructor] Welcome back to the [[Multiprotocol Label Switching (MPLS)|MPLS]] fundamentals section of the MPLS layer three VPN Foundation and Implementation course.
>
> **[0:07](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=7)** This is the second video, Label Distribution Protocols: LDP and RSVP Explained.
>
> **[0:14](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=14)** By the end, you will understand how LDP and RSVP defer and day roles in assigning labels in MPLS networks.
>
> **[0:23](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=23)** Let's explore these protocols.
>
> **[0:26](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=26)** In MPLS, labels steer packets, but how do routers know which labels to use?
>
> **[0:33](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=33)** That's the job of label distribution protocols.
>
> **[0:37](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=37)** Two key ones stand out.
>
> **[0:39](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=39)** LDP, Label Distribution Protocol, and RSVP, Resource Reservation Protocol.
>
> **[0:46](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=46)** They both assign labels, but they are built for different purposes.
>
> **[0:51](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=51)** And in this course, we will focus on LDP for MPS layer three VPNs.
>
> **[0:57](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=57)** First, LDP.
>
> **[0:59](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=59)** It's simple and ties directly to IP [[Routing]].
>
> **[1:02](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=62)** NDP shares labels with neighboring routers based on the routing table.
>
> **[1:07](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=67)** When a route is learned, a label is assigned and passed along.
>
> **[1:12](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=72)** It's automatic and efficient, making it the go-to for applications like MPLS L3VPNs, which we are diving into in this course.
>
> **[1:22](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=82)** LDP keeps label assignment straightforward for these setups.
>
> **[1:27](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=87)** Next, RSVP.
>
> **[1:29](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=89)** It's more complex originally for reserving bandwidth, and in MPLS it's tailored for [[Traffic Engineering]].
>
> **[1:38](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=98)** RSVP assigns labels for specific paths, not just IP routes.
>
> **[1:44](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=104)** A router requests a path, say for low latency, and RSVP signals downstream to reserve resources and set labels.
>
> **[1:55](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=115)** These control suites applications like MPLS traffic engineering, where precise routing matters.
>
> **[2:02](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=122)** Here's the difference.
>
> **[2:04](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=124)** LDP's purpose is simplicity.
>
> **[2:06](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=126)** Label assignment follows IP hop by hop, perfect for MPS Layer three VPNs.
>
> **[2:13](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=133)** RSVP's purpose is precision.
>
> **[2:16](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=136)** Label assignment builds engineered paths end-to-end, ideal for MPLS traffic engineering.
>
> **[2:24](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=144)** LDP's about connectivity, like linking VPN sites, while RSVP handles optimization, like ensuring QS4 video.
>
> **[2:34](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=154)** In this course, LDP takes center stage and V build L3VPNs.
>
> **[2:40](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=160)** Their roles?
>
> **[2:41](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=161)** LDP automates label distribution for seamless network-wide use, powering L3VPNs with ease.
>
> **[2:49](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=169)** RSVP crafts label assignment for tailored routes, driving traffic engineering with resource guarantees.
>
> **[2:58](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=178)** Both get labels to routers, but LDP's efficiency fits our L3VPN focus, while RSVP's flexibility serves other MPLS needs.
>
> **[3:10](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=190)** To wrap up, LDP and RSVP handle label assignment in MPLS.
>
> **[3:15](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=195)** LDP keeps its simple for layer three VPNs, which we will use here, while RSVP engineers paths for traffic engineering.
>
> **[3:24](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=204)** Next, we will dive into MPLS packet flow and label switching to see those labels in action.
>
> **[3:31](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=211)** Stay tuned as we move forward.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (11), [[Traffic Engineering]] (5), [[Routing]] (3)
> **Env Vars:** ldp (13), rsvp (12), mpls (11), vpn (2), mps (2)
> **Speakers:** - [instructor] (1)

#### [MPLS packet flow and label switching](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=0)** - [Instructor] Welcome back to the [[Multiprotocol Label Switching (MPLS)|MPLS]] fundamental section of the MPLS Layer 3 VPN Foundation and Implementation course.
>
> **[0:07](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=7)** This is the third video, "MPLS Packet Flow and Label Switching."
>
> **[0:12](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=12)** By the end, you will be able to trace a packet's journey through an MPLS network and see how labels make it happen.
>
> **[0:20](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=20)** Let's follow the pot.
>
> **[0:23](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=23)** In an MPLS network, a packet's journey is all about labels.
>
> **[0:27](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=27)** Let's trace it a step by step.
>
> **[0:30](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=30)** Imagine a packet, say an IP packet, arriving at the network's edge.
>
> **[0:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=35)** This is where it starts, and its trip through MPLS is a smooth label-driving right from entry to exit.
>
> **[0:44](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=44)** Step one, the packet enters at an edge router.
>
> **[0:49](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=49)** Here a label is pushed onto it.
>
> **[0:51](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=51)** Think of it like attaching a shipping tag.
>
> **[0:55](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=55)** This label isn't random.
>
> **[0:57](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=57)** It's tied to a specific part the packet will follow.
>
> **[1:01](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=61)** The edge router looks at the packet's destination, assigns the right label, and sends it into the network.
>
> **[1:09](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=69)** This "push" marks the packet as MPLS ready.
>
> **[1:13](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=73)** Step two, the packet hits a core router.
>
> **[1:16](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=76)** Now label switching kicks in.
>
> **[1:19](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=79)** The core router reads the label, not the IP header, and swaps it with a new one.
>
> **[1:25](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=85)** This swap updates the tag to match the next leg of the journey.
>
> **[1:30](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=90)** No deep analyzers, just a quick label check, a swap, and off it goes.
>
> **[1:36](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=96)** This happens at each core router along the pass.
>
> **[1:41](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=101)** Step three, the packet arrives at the exit edge router.
>
> **[1:46](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=106)** Here the label is popped off, removed completely.
>
> **[1:50](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=110)** The packet's journey through the MPLS network is done, and it's handed off as a regular IP packet again.
>
> **[1:58](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=118)** The pop strips away the MPLS tag, letting the packet continue to its final destination outside the network.
>
> **[2:06](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=126)** Let's see the whole flow.
>
> **[2:08](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=128)** The packet enters, gets the label pushed at the edge, travels through the core with label swapped at each hop, and exits with the label popped off.
>
> **[2:20](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=140)** This push, swap, pop sequence is the heartbeat of MPLS.
>
> **[2:24](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=144)** It's fast because routers only handle labels, not IP lookups, keeping traffic moving smoothly along a set pass.
>
> **[2:34](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=154)** To wrap up, a packet's journey through an MPLS network starts with a label push, flows through swaps in the core, and ends with the pop at exit.
>
> **[2:45](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=165)** That's how label switching drives it from edge to edge.
>
> **[2:50](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=170)** Next, we will dive into understanding MPLS terminology, PE, CE, P routers, to name the players in this process.
>
> **[2:58](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=178)** And stay tuned as we keep building.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (12)
> **Env Vars:** mpls (12), vpn (1)
> **Analogies:** imagine (1), think of it like (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Understanding MPLS terminology (PE, CE, P routers)](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=0)** - [Instructor] Welcome back to the [[Multiprotocol Label Switching (MPLS)|MPLS]] Fundamentals section of the MPLS L3VPN Foundation and Implementation course.
>
> **[0:07](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=7)** This is the fourth video, Understanding MPLS Terminology: PE, CE, P routers.
>
> **[0:15](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=15)** By the end, you will know the key roles PE, CE, and P routers play in an MPLS network.
>
> **[0:22](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=22)** Let's define these terms and see where they fit.
>
> **[0:26](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=26)** MPLS networks involve two worlds, the customer's network, and the provider's network.
>
> **[0:33](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=33)** Three router roles, CE, PE, and P make it all work.
>
> **[0:39](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=39)** Each has a specific job, and understanding them is key to grasping how MPLS operates, especially for Layer 3 VPNs.
>
> **[0:48](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=48)** First, the CE router, Customer Edge.
>
> **[0:51](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=51)** This sits at the customer site, like an [[Microsoft Office|office]] or branch.
>
> **[0:56](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=56)** It's the customer's gateway to the MPLS network, connecting their local network to the provider's infrastructure.
>
> **[1:03](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=63)** The CE doesn't deal with MPLS labels.
>
> **[1:06](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=66)** It's all about sending and receiving regular packets, typically IP, to and from the provider.
>
> **[1:14](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=74)** Next, the PE router, Provider Edge.
>
> **[1:17](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=77)** This slaves on the provider site, right at the boundary with the customer.
>
> **[1:22](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=82)** The PE is the MPLS' brains.
>
> **[1:24](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=84)** It's where labels come into play.
>
> **[1:27](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=87)** It connects to CE routers, assign labels to incoming packets and removes them for outgoing ones.
>
> **[1:34](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=94)** For Layer 3 VPNs, the PE also manages customer [[Routing]] info, keeping each customer's traffic separate.
>
> **[1:43](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=103)** Finally, the P router, Provider router.
>
> **[1:46](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=106)** These are the core workhorses inside the provider's network.
>
> **[1:52](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=112)** P routers don't touch customer aids.
>
> **[1:54](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=114)** They link peer routers together.
>
> **[1:57](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=117)** Their job is pure label switching.
>
> **[1:59](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=119)** They read labels on packets, swap them as needed, and forward them along the pod.
>
> **[2:05](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=125)** They don't care about customer data, just efficient movement.
>
> **[2:10](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=130)** Put them together.
>
> **[2:11](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=131)** CE routers sit at customer sites, passing packets to PE routers.
>
> **[2:17](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=137)** PE sit at the provider's edge, handling labels and customer separation.
>
> **[2:23](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=143)** P routers form the provider's core, switching labeled packets between Ps.
>
> **[2:29](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=149)** These roles, CE, PE, P, define who does what in an MPLS network, setting the stage for services like Layer 3 VPNs.
>
> **[2:39](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=159)** To sum up CE routers are the customer's entry point.
>
> **[2:43](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=163)** PE routers are the provider's label managers at the edge, and P routers are the core label structures.
>
> **[2:50](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=170)** That's the MPLS team.
>
> **[2:53](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=173)** Next, we will explore introduction to MPLS L3VPN concepts to see how these setup stacks up.
>
> **[3:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=180)** Stay tuned as we keep going.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (12), [[Microsoft Office|Office]] (1), [[Routing]] (1)
> **Env Vars:** mpls (12), l3vpn (2)
> **CLI Commands:** make (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Introduction to MPLS L3VPN concepts](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=1)** - [Instructor] Welcome back to the [[Multiprotocol Label Switching (MPLS)|MPLS]] Fundamental Section of the MPLS Layer 3VPN Foundation and Implementation Course.
>
> **[0:07](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=7)** This is the final video introduction to MPLS L3VPN concepts.
>
> **[0:12](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=12)** By the end, you will understand how MPLS enables Layer 3 VPNs, focusing on customer isolation and how labels keep VPNs separate.
>
> **[0:22](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=22)** Let's tie it all together.
>
> **[0:25](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=25)** MPLS is powerful, but its real magic shines in services like Layer 3 VPNs, or L3VPNs.
>
> **[0:33](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=33)** These let multiple customers share a provider's network while keeping their traffic private, as if each has their own network.
>
> **[0:42](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=42)** How does MPLS make this happen?
>
> **[0:45](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=45)** It's all about leveraging labels and smart [[Routing]].
>
> **[0:49](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=49)** Let start with customer isolation.
>
> **[0:51](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=51)** Imagine two companies, Customer A and Customer B, both using the same private type range, like 10.0.0.0/24.
>
> **[1:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=60)** In a regular network, that's a problem.
>
> **[1:03](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=63)** Traffic with mix.
>
> **[1:04](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=64)** MPLS solves this by isolating each customer's data.
>
> **[1:08](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=68)** At the provider's edge, each customer's traffic gets its own [[Virtual Private Network (VPN)|virtual private network]] or VPN, so there is no overlap, no confusion.
>
> **[1:18](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=78)** Labels are the key.
>
> **[1:19](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=79)** When a customer's packet enters the MPLS networks, it's tagged with the label.
>
> **[1:24](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=84)** Not just for the path, but for the VPN it belongs to.
>
> **[1:28](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=88)** This VPN label identifies which customer the packet is for.
>
> **[1:32](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=92)** As it moves through the network, routers use these labels to keep Customer A's traffic separate from Customer B's, even on the same infrastructure.
>
> **[1:42](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=102)** It's like private links on a shared highway.
>
> **[1:46](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=106)** Here is the trick.
>
> **[1:48](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=108)** MPLS L3VPN often uses label stacking.
>
> **[1:51](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=111)** One label directs the packet along the network path, while another, the VPN label marks it for a specific customer.
>
> **[1:59](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=119)** This dual label system ensures isolation end to end.
>
> **[2:03](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=123)** The provider's core switch based on the path label.
>
> **[2:07](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=127)** And the edge uses the VPN label to delivery to the right customer.
>
> **[2:11](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=131)** No mixing, no leaks.
>
> **[2:14](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=134)** To sum up, MPLS enables L3VPNs by isolating customer traffic with labels.
>
> **[2:22](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=142)** VPN labels separate each customer's data, letting them share the network securely.
>
> **[2:28](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=148)** Next, we will dive into the MPLS L3VPN core concept section to explore the details.
>
> **[2:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=155)** Stay tuned as we level up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (11), [[Routing]] (1), [[Virtual Private Network (VPN)|Virtual private network]] (1)
> **Env Vars:** mpls (11), vpn (6), l3vpn (3)
> **Analogies:** imagine (1), it's like (1)
> **CLI Commands:** make (1)
> **Versions:** 10.0.0 (1)
> **Speakers:** - [instructor] (1)


### 3. L3VPN Core Concepts

[↑ Back to Table of Contents](#table-of-contents)

#### [What makes L3VPN unique? VRFs and route distinguishers](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=0)** - [Instructor] Welcome to the [[Multiprotocol Label Switching (MPLS)|MPLS]] L3VPN core concept section of the MPLS L3VPN Foundation and Implementation course.
>
> **[0:10](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=10)** This is the first video.
>
> **[0:12](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=12)** What makes L3VPN unique?
>
> **[0:14](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=14)** VRF and route distinguishers?
>
> **[0:17](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=17)** By the end, you will understand how VFS and RDs-enable isolated [[Routing]] in L3VPNs.
>
> **[0:25](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=25)** Let's kick things off.
>
> **[0:28](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=28)** L3VPNs layer three virtual private networks are special because they let multiple customers share an MPLS network while keeping their routing completely separate.
>
> **[0:41](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=41)** Imagine two companies using the same IP addresses, like 10.0.0.0/24 without any mix up.
>
> **[0:51](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=51)** That's the power of isolated routing, and it's made possible by two key players, VRFs and route distinguishers.
>
> **[1:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=60)** First up, VRFs, virtual routing and forwarding instances.
>
> **[1:06](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=66)** These live on the provider's age routers.
>
> **[1:09](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=69)** Think of a VRF as a private routing table one for each customer.
>
> **[1:15](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=75)** Instead of one big table mixing everyone's routes, each VRF keeps a customer's routing info isolated customer A's routes go in one VRF, customer B's in another.
>
> **[1:27](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=87)** This separation ensures no overlap even with identical IPs.
>
> **[1:33](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=93)** Why does this matter?
>
> **[1:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=95)** Without VRFs, a router seeing 10.0.0.1 from two customers wouldn't know where to send it.
>
> **[1:42](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=102)** Chaos.
>
> **[1:44](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=104)** With VRFs, each customer's traffic stays in its own sandbox.
>
> **[1:49](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=109)** The provider edge router uses these tables to forward packets only to the right customer, keeping everything clean and private.
>
> **[1:59](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=119)** Now, route distinguishers, RDs.
>
> **[2:03](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=123)** VRFs isolate locally, but across the network, routes need to be unique.
>
> **[2:09](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=129)** And RD is a prefix added to each customer's IP route.
>
> **[2:13](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=133)** Like a tag.
>
> **[2:15](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=135)** For example, customer A's 10.0.0 might become 1:100:10.0.0.0, while customer bees become 1:200:10.0.0.0.
>
> **[2:32](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=152)** This makes them distinct even if the IPs match, so they can travel the MPLS network without clashing.
>
> **[2:41](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=161)** Here is how they team up.
>
> **[2:43](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=163)** VRFs on each age router manage local isolation, separating customer routes.
>
> **[2:49](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=169)** All these make these routes globally unique so they can be shared across the providers network.
>
> **[2:57](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=177)** Together they let MPLS handle multiple private networks on one backbone, delivering the isolated routing that defines L3VPNs.
>
> **[3:07](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=187)** To wrap up, VRFs create separate routing tables for each customer, and RDs tag routes to keep them unique network wide.
>
> **[3:16](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=196)** Each VRF is defined with a unique RD, ensuring total isolation.
>
> **[3:21](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=201)** That's how MPLS enables isolated routing in L3VPNs.
>
> **[3:26](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=206)** Next, we will dive into the role of MP-BGP in L3VPN to see how these routes get shared.
>
> **[3:34](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=214)** Stay tuned as we dig deeper.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (9), [[Multiprotocol Label Switching (MPLS)|Mpls]] (6)
> **Env Vars:** mpls (6), vrf (5), l3vpn (4), vfs (1), bgp (1)
> **Versions:** 10.0.0 (5)
> **Ports:** :10 (2), :100 (1), :200 (1)
> **Analogies:** imagine (1), for example (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [The role of MP-BGP in L3VPN](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=0)** - [Instructor] Welcome back to the [[Multiprotocol Label Switching (MPLS)|MPLS]] L3VPN core concept section of the MPLS L3VPN Foundation and Implementation course.
>
> **[0:09](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=9)** This is the second video, the role of MP-BGP in L3VPN.
>
> **[0:14](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=14)** By the end, you will understand how MP-BGP distributes VPN routes across networks.
>
> **[0:20](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=20)** Let's get into it.
>
> **[0:22](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=22)** In L3VPNs, customer routes need to travel across the provider's MPLS network securely and separately.
>
> **[0:30](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=30)** That's where MP-BGP comes in.
>
> **[0:32](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=32)** Multi-protocol BGP isn't just regular BGP.
>
> **[0:36](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=36)** It's the glue that ties the whole L3VPN together, making sure every router knows where to send each customer's traffic.
>
> **[0:46](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=46)** So what does MP-BGP do?
>
> **[0:48](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=48)** It distributes VPN routes between provider edge routers, PEs across the network.
>
> **[0:55](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=55)** Each PE holds customer routes in its own virtual [[Routing]] tables.
>
> **[1:01](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=61)** MP-BGP takes those routes, package them with special attributes and shares them with other PEs.
>
> **[1:08](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=68)** This way, every PE learns how to reach every customer site no matter where it is.
>
> **[1:15](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=75)** How does it work?
>
> **[1:16](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=76)** MP-BGP uses a format called VPNv4, or VPN IPv4 routes.
>
> **[1:23](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=83)** These aren't plain IP routes.
>
> **[1:25](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=85)** They combine a customer's IP prefix with a unique tag from the last video making them VPN specific.
>
> **[1:33](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=93)** For example, 10.0.0.0 becomes 1:100.10.0.0.0.
>
> **[1:41](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=101)** This VPNv4 address tells the network which customer it belongs to, keeping route distinct as they are shared.
>
> **[1:50](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=110)** Here is the process.
>
> **[1:51](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=111)** A PE learns a route from a customer site, say via a local connection.
>
> **[1:56](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=116)** MP-BGP grabs that route, adds the VPNv4 tag and an MPLS label, then sends it to other PEs over a BGP session.
>
> **[2:06](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=126)** Those PEs receive it and store it in their own tables and use the label to forward traffic later.
>
> **[2:14](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=134)** It's like a postal service.
>
> **[2:16](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=136)** MP-BGP delivers the address book across the network.
>
> **[2:20](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=140)** Why MP-BGP?
>
> **[2:22](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=142)** Regular BGP can't handle multiple customers with overlapping IPs.
>
> **[2:27](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=147)** It's built for one internet.
>
> **[2:29](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=149)** MP-BGP's multiprotocol power supports these VPMv4 routes, scaling across the MPLS backbone.
>
> **[2:38](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=158)** It ensures every PE has the full map of VPN routes, enabling isolated end-to-end connectivity for every customer.
>
> **[2:47](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=167)** To sum up, MP-BGP distributes VPN routes by sharing VPNv4 addresses and labels between PEs, connecting customer sites across the network.
>
> **[2:57](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=177)** It's the backbone of L3VPN routing.
>
> **[3:01](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=181)** Next, we will explore road targets, importing and exporting routes to see how PEs decide which routes to use.
>
> **[3:08](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=188)** Stay tuned as we build on this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (5), [[Routing]] (2)
> **Env Vars:** bgp (15), vpn (6), mpls (5), l3vpn (5)
> **Versions:** 10.0.0 (1), 100.10.0 (1), 0.0 (1)
> **Analogies:** for example (1), it's like (1)
> **Ports:** :100 (1)
> **Speakers:** - [instructor] (1)

#### [Route targets: Importing and exporting routes](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=0)** - [Instructor] Welcome back to the [[Multiprotocol Label Switching (MPLS)|MPLS]] L3VPN Core Concept section of the MPLS L3VPN Foundation and Implementation course.
>
> **[0:09](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=9)** In L3VPNs, customer routes don't just spread everywhere.
>
> **[0:13](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=13)** Route targets or RTs decide who gets what.
>
> **[0:17](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=17)** These tags are set on each virtual [[Routing]] table or each VRF on provider edge routers.
>
> **[0:25](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=25)** Every VRF has both an export RT and an import RT, and they work together to control how routes are shared across the network.
>
> **[0:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=35)** First, export route target.
>
> **[0:37](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=37)** This is a tech assigned to a VRF, like 1:100, that gets attached to every route that VRF sends out.
>
> **[0:46](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=46)** When a PE learns a customer route, say 10.0.0.0, it tags it with the export RT before MP-BGP shares it.
>
> **[0:57](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=57)** The export RT's role is to label the route saying, "This belongs to VPN A," so other routers know its group.
>
> **[1:06](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=66)** Next, the import route target.
>
> **[1:08](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=68)** This is a tag on a VRF, like 1:100, that tells it which routes to accept.
>
> **[1:15](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=75)** When MP-BGP delivers a route tag with RT 1:100, the PE checks its import RT.
>
> **[1:23](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=83)** If they match, the route joins that VRF stable.
>
> **[1:27](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=87)** The import RT's role is to filter.
>
> **[1:30](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=90)** It grabs only the routes meant for each VPN, ignoring the [[Representational State Transfer (REST)|rest]].
>
> **[1:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=95)** Here's how it plays out.
>
> **[1:37](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=97)** Each VRF has its own export and import RTs.
>
> **[1:41](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=101)** VPN A's VRF might use RT 1:100 for both, exporting routes with RT 1:100 and importing only RT 1:100 routes.
>
> **[1:54](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=114)** VPN B's VRF uses RT 1:200, keeping its route separate.
>
> **[2:01](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=121)** A route from VPN A tagged RT 1:100 won't enter VPN B's VRF.
>
> **[2:08](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=128)** It's filtered out by the import RT mismatch.
>
> **[2:11](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=131)** This gives you control.
>
> **[2:13](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=133)** A VRF can export with multiple RTs, like RT 1:100 and RT 1:300, to reach different VPNs or import several RTs to pull in routes from multiple sources.
>
> **[2:28](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=148)** The export RT tags outgoing routes.
>
> **[2:31](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=151)** They import RT decide what comes in.
>
> **[2:34](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=154)** Together, they shape VPN connectivity.
>
> **[2:38](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=158)** To wrap up, route targets control route sharing in L3VPNs.
>
> **[2:42](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=162)** Each VRF has an export RT to tag its routes and an import RT to filter incoming ones, deciding who connects to whom.
>
> **[2:53](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=173)** Now are RDs versus RTs?
>
> **[2:56](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=176)** RDs make route unique across the network, like an ID, while RTs decide where those routes go, like a delivery rule.
>
> **[3:06](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=186)** Next, we will explore control plane versus data plane in L3VPN to see how this fits into the bigger picture.
>
> **[3:14](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=194)** And stay tuned as we keep rolling.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (2), [[Routing]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** vrf (12), vpn (7), l3vpn (3), mpls (2), bgp (2)
> **Ports:** :100 (8), :200 (1), :300 (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Versions:** 10.0.0 (1)
> **Analogies:** picture (1)
> **Speakers:** - [instructor] (1)

#### [Control plane vs. data plane in L3VPN](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=0)** - [Instructor] Welcome back to the [[Multiprotocol Label Switching (MPLS)|MPLS]] L3VPN core concept section of the MPLS L3VPN Foundation and Implementation course.
>
> **[0:10](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=10)** This is the fourth video, Control Plane vs. Data Plane in L3VPN.
>
> **[0:15](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=15)** By the end, you will be able to distinguish between control and data plane operations in L3VPNs.
>
> **[0:23](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=23)** Let's break it down.
>
> **[0:25](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=25)** In L3VPNs, everything a router does it splits into two worlds, the control plane and the data plane.
>
> **[0:33](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=33)** The control plane is the brains.
>
> **[0:36](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=36)** It figures out how traffic should flow.
>
> **[0:39](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=39)** The data plane is the muscle.
>
> **[0:41](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=41)** It moves the packets.
>
> **[0:42](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=42)** Together, they make L3VPNs work, but their job are distinct.
>
> **[0:48](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=48)** First, the control plane.
>
> **[0:49](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=49)** This is where [[Routing]] information gets built and shared.
>
> **[0:53](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=53)** On provider edge routers, the control plane uses MP-BGP to exchange VPN routes.
>
> **[0:59](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=59)** Those tagged addresses we have talked about.
>
> **[1:03](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=63)** It's all about learning, figuring out where customer sites are and storing that info in virtual routing tables.
>
> **[1:11](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=71)** The control plane sets the map.
>
> **[1:14](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=74)** Now the data plane.
>
> **[1:16](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=76)** This is where the action happens.
>
> **[1:18](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=78)** Actual packets forwarding.
>
> **[1:20](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=80)** When a customer packet hits the PE, the data plane looks at its label, not the full roadmap.
>
> **[1:27](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=87)** It pushes, swaps, or pops labels to send the packet along the MPLS pass from ingress to egress.
>
> **[1:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=95)** The data plane follows the control planes plan, moving traffic fast.
>
> **[1:41](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=101)** Here is how they defer.
>
> **[1:42](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=102)** The control plane operates before traffic flows.
>
> **[1:46](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=106)** It's the setup phase.
>
> **[1:47](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=107)** It uses protocols like MP-BGP to share roads and build forwarding tables.
>
> **[1:54](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=114)** The data plane kicks in during traffic flow.
>
> **[1:57](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=117)** It's the execution phase using those tables to switch labeled packets across the network.
>
> **[2:03](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=123)** One plans, the other delivers.
>
> **[2:06](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=126)** Picture this.
>
> **[2:08](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=128)** A PE learns the customer route via the control plane and shares it.
>
> **[2:12](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=132)** That's the brain network.
>
> **[2:15](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=135)** Later a packet arrives.
>
> **[2:17](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=137)** The data plane grabs the label, switch it through the core and sends it out.
>
> **[2:22](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=142)** That's the muscle in Layer 3 VPNs, this split keeps routing smart and forwarding fast.
>
> **[2:31](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=151)** To wrap up the control plane builds the routing plan with MP-BGP and tables, while the data plane executes it by switching labeled packets.
>
> **[2:41](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=161)** That's the split that powers L3VPNs.
>
> **[2:45](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=165)** Next, we will explore common L3VPN topologies, hub-and-spoke, full [[Mesh]] to see how this plays out in real designs.
>
> **[2:54](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=174)** Stay tuned as we keep going.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (4), [[Multiprotocol Label Switching (MPLS)|Mpls]] (3), [[Mesh]] (1)
> **Env Vars:** l3vpn (4), mpls (3), bgp (3), vpn (1)
> **CLI Commands:** make (1)
> **Analogies:** picture (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Common L3VPN topologies (hub-and-spoke, full mesh)](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=0)** - [Instructor] 0305 Common L3VPN Topologies: Hub-and-Spoke Full [[Mesh]].
>
> **[0:07](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=7)** Welcome back to the [[Multiprotocol Label Switching (MPLS)|MPLS]] L3VPN core concept section of the MPLS-L3VPN Foundation and Implementation course.
>
> **[0:15](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=15)** This is the final video of Common L3VPN Topologies: Hub-and-Spoke Full Mesh.
>
> **[0:21](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=21)** By the end, you will be able to identify and compare hub-and-spoke and full mesh L3VPN designs.
>
> **[0:28](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=28)** Let's wrap up this section.
>
> **[0:30](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=30)** L3VPNs connect customer sites across an MPLS network.
>
> **[0:34](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=34)** But how do sites link up depend on the topology.
>
> **[0:39](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=39)** Two common designs, stand out, hub-and-spoke and full mesh.
>
> **[0:43](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=43)** Each has its own layout, strengths and use cases.
>
> **[0:47](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=47)** Let's see what makes them tick.
>
> **[0:50](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=50)** First, hub-and-spoke picture reveal one central site, the hub, connects to all other sites, the spokes.
>
> **[0:58](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=58)** In L3VPNs, the hub is a provider edge router linking to a spoke piece each tied to a customer site.
>
> **[1:07](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=67)** Traffic flows through the hub.
>
> **[1:09](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=69)** Spokes talk to the hub, and the hub relates to other spokes.
>
> **[1:13](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=73)** It's centralized, simple to manage, but reliant on that hub.
>
> **[1:18](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=78)** Now full mesh.
>
> **[1:19](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=79)** Imagine every site connected to every other site directly.
>
> **[1:23](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=83)** No middleman.
>
> **[1:25](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=85)** In L3VPNs, each provider age router appears with all others.
>
> **[1:30](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=90)** Forming a web of direct links.
>
> **[1:32](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=92)** Traffic flows straight from one site to another.
>
> **[1:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=95)** No detours.
>
> **[1:37](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=97)** It's fully connected.
>
> **[1:38](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=98)** Great for direct communication, but trickier to scale.
>
> **[1:43](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=103)** Let's compare them connectivity.
>
> **[1:45](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=105)** Hub-and-spoke has one to hub links.
>
> **[1:48](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=108)** Spokes don't talk directly.
>
> **[1:50](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=110)** Full mesh has all to all links, every site's connected.
>
> **[1:55](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=115)** Complexity, hub-and-spoke is simpler with fewer roads to manage.
>
> **[2:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=120)** Full mesh is complex, needing more [[Routing]] configure size grow.
>
> **[2:06](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=126)** The use case.
>
> **[2:07](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=127)** Hub-and-spoke fit centralized setups like head [[Microsoft Office|office]] with branches.
>
> **[2:11](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=131)** Full mesh treats peer-to-peer needs, like equal size sharing data.
>
> **[2:17](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=137)** Here's the difference in action.
>
> **[2:19](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=139)** In hub-and-spoke a branch sends data to the hub, which forwards it to another branch, controlled but hub-dependent.
>
> **[2:27](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=147)** In full mesh, sites sends directly to each other.
>
> **[2:29](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=149)** Fast, but resource-heavy.
>
> **[2:32](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=152)** Both use L3VPN tools like raw targets to shape these designs.
>
> **[2:37](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=157)** But the topology sets the flow, To wrap up, hub-and-spoke centralizes traffic through a hub.
>
> **[2:43](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=163)** Simple but limited.
>
> **[2:45](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=165)** Full mesh connects everyone directly.
>
> **[2:48](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=168)** Flexible but complex.
>
> **[2:50](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=170)** That's how L3VPN topologies differ.
>
> **[2:53](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=173)** Next, we will start designing MPLS L3VPN section to put this into practice and stay tuned as we move forward.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Mesh]] (10), [[Multiprotocol Label Switching (MPLS)|Mpls]] (4), [[Routing]] (1), [[Microsoft Office|Office]] (1)
> **Env Vars:** l3vpn (8), mpls (4)
> **Analogies:** picture (1), imagine (1)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### 4. Designing MPLS L3VPN

[↑ Back to Table of Contents](#table-of-contents)

#### [Planning an MPLS L3VPN deployment](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=0)** - [Presenter] Welcome to the designing [[Multiprotocol Label Switching (MPLS)|MPLS]] L3VPN section of the MPLS L3VPN Foundation and Implementation course.
>
> **[0:09](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=9)** This is the first video, planning an MPLS L3VPN deployment.
>
> **[0:13](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=13)** By the end, you will be able to outline the steps to plan an effective L3VPN deployment.
>
> **[0:19](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=19)** Let's get it started.
>
> **[0:21](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=21)** Deploying an L3VPN isn't just about tech, it's about planning smartly.
>
> **[0:28](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=28)** A solid plan ensures customer size connect securely and efficiently over an MPLS network.
>
> **[0:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=35)** There are key steps to make this happen, from understanding needs to testing the setup.
>
> **[0:40](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=40)** Step one, assess requirements.
>
> **[0:43](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=43)** Start by gathering what the customer needs, how many sites, what kind of traffic and connectivity goals.
>
> **[0:51](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=51)** Are they looking for centralized access or site to site links.
>
> **[0:55](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=55)** This shapes the topology and sit scope, giving you a clear target to aim for.
>
> **[1:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=60)** Step two, design the network layout.
>
> **[1:03](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=63)** Map out the provider age routers, PEs, and core routers PEs that will carry the VPN.
>
> **[1:09](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=69)** Decide where PEs sit to connect customer sites and how the core links them.
>
> **[1:16](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=76)** This is about placing pieces on the board.
>
> **[1:18](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=78)** Topology comes later, but the backbone starts here.
>
> **[1:23](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=83)** Step three, plan VRF and road target structure.
>
> **[1:27](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=87)** Each customer gets virtual [[Routing]] tables, VRFs and PEs.
>
> **[1:32](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=92)** Outline how many RFS you will need and sketch initial road targets to control road sharing.
>
> **[1:39](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=99)** This keeps traffic isolated and connected as intended.
>
> **[1:43](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=103)** Details like address and income next.
>
> **[1:46](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=106)** Step four, define implementation and testing.
>
> **[1:50](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=110)** Break it into phases, configure the PEs and core, then test connectivity between sites.
>
> **[1:56](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=116)** Check that routes propagate and traffic flows as planned.
>
> **[2:01](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=121)** This step ensures the plan turns into a working deployment without surprises.
>
> **[2:07](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=127)** Put it together. Assess needs to set goals.
>
> **[2:10](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=130)** Design the layout for coverage, plan VRFs and road targets for isolation, and schedule config and testing for success.
>
> **[2:20](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=140)** These steps build the roadmap, specifics like addressing or scaling come later, but this is the foundation.
>
> **[2:27](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=147)** To wrap up.
>
> **[2:28](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=148)** Planning an L3VPN deployment means assessing requirements, designing the network layout, structuring VRFs and road targets, and defining implementation steps.
>
> **[2:39](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=159)** That's your blueprint.
>
> **[2:42](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=162)** Next, we will dive into addressing our routing consideration to flesh this out.
>
> **[2:47](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=167)** And stay tuned as we keep building.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (4), [[Routing]] (2)
> **Env Vars:** l3vpn (6), mpls (4), vpn (1), vrf (1), rfs (1)
> **Prerequisites:** setup (1), configure (1)
> **CLI Commands:** make (1)
> **Speakers:** - [presenter] (1)

#### [Addressing and routing considerations](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=0)** - [Instructor] Welcome back to the designing [[Multiprotocol Label Switching (MPLS)|MPLS]] L3VPN section of the MPLS L3VPN Foundation and Implementation course.
>
> **[0:09](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=9)** This is the second video, "Addressing and [[Routing]] Considerations."
>
> **[0:12](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=12)** By the end, you will understand how to tackle IP overlap and routing challenges in L3VPN design.
>
> **[0:19](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=19)** Let's jump in.
>
> **[0:22](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=22)** L3VPNs connect customer size over a shared MPLS network, but here's the catch.
>
> **[0:27](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=27)** Customers often use the same private IP addresses, like 10.0.0.0/24.
>
> **[0:36](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=36)** That's IP overlap.
>
> **[0:37](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=37)** Add routing into the mix, and you have got challenges to solve.
>
> **[0:41](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=41)** Let's break down how to handle both.
>
> **[0:44](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=44)** First, IP overlap.
>
> **[0:46](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=46)** Imagine two customers, VPN A and VPN B, both using 10.0.0.1 for their sites.
>
> **[0:54](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=54)** In a regular network, that's a conflate.
>
> **[0:56](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=56)** Traffic will collide.
>
> **[0:58](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=58)** L3 VPNs fix this with virtual routing tables on provider edge routers.
>
> **[1:04](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=64)** Each customer gets its own VRF, so 10.0.0.1 in VPN A stays separate from 10.0.0.1 in VPN B, no overlap, no problem.
>
> **[1:16](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=76)** But overlap isn't just local, it's network-wide.
>
> **[1:21](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=81)** Inter route distinguishers.
>
> **[1:23](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=83)** An RD tags each customer's route, like 1:100 for VPN A and 1:200 for VPN B, turning 10.0.0.0 into a unique VPN B4 addresses.
>
> **[1:38](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=98)** This lets MP-BGP share them across the network without confusion, keeping addressing clean between PEs.
>
> **[1:46](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=106)** Now routing challenges.
>
> **[1:48](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=108)** Each customer site connects to a PE via a customer edge router, a CE.
>
> **[1:54](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=114)** You need a routing protocol, like BGP, OSPF, or static routes to exchange routes between the CE and PE.
>
> **[2:02](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=122)** The challenge? Picking the right one.
>
> **[2:05](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=125)** BGP scales well but needs config.
>
> **[2:08](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=128)** OSPF is simpler but less flexible.
>
> **[2:11](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=131)** Match it to the customer setup.
>
> **[2:14](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=134)** Another routing hurdle, redistribution.
>
> **[2:18](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=138)** Customer routes enter the PE's VRF, then get sent network-wide via MP-BGP.
>
> **[2:24](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=144)** If a customer uses overlapping subnets like 10.0.0.0/24 in two sites, you must ensure routes stay distinct with RD, and don't look back.
>
> **[2:36](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=156)** Careful planning keeps traffic flowing right, avoiding routing chaos.
>
> **[2:42](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=162)** To wrap up, IP overlap is managed with VRFs locally and RDs network wide, while routing challenges hinges on choosing protocols and handling redistribution.
>
> **[2:54](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=174)** That's how you design addressing and routing in L3 VPNs.
>
> **[2:59](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=179)** Next, we will explore scaling L3VPN, best practices and limitations to take this further.
>
> **[3:05](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=185)** And stay tuned as we keep going.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (10), [[Multiprotocol Label Switching (MPLS)|Mpls]] (3)
> **Env Vars:** vpn (7), l3vpn (4), bgp (4), mpls (3), vrf (2)
> **Versions:** 10.0.0 (6)
> **Ports:** :100 (1), :200 (1)
> **Analogies:** imagine (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Scaling L3VPN: Best practices and limitations](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=0)** - [Instructor] Welcome back to the designing [[Multiprotocol Label Switching (MPLS)|MPLS]] L3VPN section of the MPLS L3VPN Foundation and Implementation course.
>
> **[0:09](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=9)** This is the third video, scaling L3VPN best practices and limitations.
>
> **[0:15](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=15)** By the end, you will know how to apply best practices to scale L3VPNs and recognize their limits.
>
> **[0:22](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=22)** Let's scale it up.
>
> **[0:25](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=25)** L3VPNs start small, but as customers add size or providers grow, scalings becomes key.
>
> **[0:33](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=33)** Scaling means handling more VPNs, routes and traffic without breaking a sweat.
>
> **[0:39](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=39)** Best practices keep it smooth, but limits are real.
>
> **[0:43](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=43)** Let's explore both.
>
> **[0:46](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=46)** Best practice one, summarize routes.
>
> **[0:50](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=50)** On provider age routers, group customer routes into bigger blocks, like turning 10.10.0.X.0/24s into one 10.0.0.0/16.
>
> **[1:03](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=63)** This cuts the number of routes MPBGP shares across the network, easing the load on PEs and core routers.
>
> **[1:11](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=71)** A smaller tables foster performance.
>
> **[1:15](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=75)** Best practice two, use route reflectors.
>
> **[1:19](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=79)** Instead of every PE talking to every other PE, a route reflector handles VPN route distribution.
>
> **[1:27](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=87)** This reduces the number of MPBGP stations required.
>
> **[1:31](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=91)** Instead of many direct links, you only need a few via the route reflector.
>
> **[1:37](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=97)** It acts as a hub for control plane traffic, keeping PEs provider age routers lean and as scalable as VPNs grow.
>
> **[1:46](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=106)** Now their limits.
>
> **[1:48](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=108)** One big constraint is PE capacity.
>
> **[1:51](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=111)** Each PE managed VRFs and routes.
>
> **[1:53](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=113)** Add too many and memory CPU maxes out.
>
> **[1:58](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=118)** A single PE might handle 1,000 VRFs or 100,000 routes before slowing down.
>
> **[2:04](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=124)** [[Hardware]] matters, and you can't push past it without upgrades.
>
> **[2:09](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=129)** Another limit, core [[Scalability]].
>
> **[2:13](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=133)** As VPNs multiply, so do labels and traffic in the MPLS core.
>
> **[2:18](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=138)** P routers can hit a ceiling, say millions of labels, before forwarding lags.
>
> **[2:24](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=144)** Plus, full [[Mesh]] designs exploding complexity with more sites.
>
> **[2:29](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=149)** Scaling up means watching the core, not just the edge.
>
> **[2:33](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=153)** Put it together.
>
> **[2:34](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=154)** Summarize routes to shrink tables.
>
> **[2:36](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=156)** Use reflectors to cut sessions.
>
> **[2:38](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=158)** These scale L3VPNs efficiently, but limits like P capacity and core load cap how far you go.
>
> **[2:48](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=168)** Balance the practices with the constraints, and you have got a scalable design.
>
> **[2:55](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=175)** To wrap up, scale L3VPNs with road summarization and route reflectors for efficiency, but recognize limit like PE capacity and core scalability.
>
> **[3:06](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=186)** That's your scaling toolkit.
>
> **[3:08](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=188)** Next, we will dive into security features in MPLS L3VPN to lock it down.
>
> **[3:14](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=194)** Stay tuned as we keep rolling.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (4), [[Scalability]] (2), [[Hardware]] (1), [[Mesh]] (1)
> **Env Vars:** mpls (4), l3vpn (4), mpbgp (2), vpn (1), cpu (1)
> **Versions:** 10.10.0 (1), 10.0.0 (1)
> **Best Practices:** best practice (2)
> **Speakers:** - [instructor] (1)

#### [Security features in MPLS L3VPN](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=0)** - [Instructor] Welcome back to the Designing [[Multiprotocol Label Switching (MPLS)|MPLS]] L3VPN section of the MPLS L3VPN Foundation and Implementation course.
>
> **[0:09](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=9)** This is the fourth video, Security Features in MPLS L3VPN.
>
> **[0:14](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=14)** By the end, you will explore how MPLS L3VPN ensure secure data transmission.
>
> **[0:19](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=19)** Let's lock it down.
>
> **[0:22](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=22)** L3 VPNs carry sensitive customer data over a shared MPLS network, so security is critical.
>
> **[0:29](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=29)** The good news?
>
> **[0:30](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=30)** MPLS L3VPN has built-in features to keep data private and safe without needing extra encryption.
>
> **[0:38](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=38)** Let's see how it works.
>
> **[0:40](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=40)** First up, traffic isolation.
>
> **[0:44](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=44)** Each customer's data stays in its own virtual [[Routing]] table, a VRF, and provider edge routers.
>
> **[0:52](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=52)** VPN A's traffic can't leak into VPN B's, even if they share the same network.
>
> **[0:58](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=58)** This separation is hardwired into the design.
>
> **[1:01](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=61)** Labels and VRFs act like walls, keeping data apart.
>
> **[1:07](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=67)** Next, label-based forwarding.
>
> **[1:10](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=70)** In the MPLS core, packets travel with labels, not IP headers exposed.
>
> **[1:16](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=76)** Core routers only see the outer label and switch sheet, never picking at the customer's IP data.
>
> **[1:22](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=82)** This obscurity adds a layer of protection.
>
> **[1:25](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=85)** Outsiders can't sniff or target specific IPs from the core.
>
> **[1:31](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=91)** Another feature, limited exposure.
>
> **[1:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=95)** Customer sites connect only to their P router, not the provider's core.
>
> **[1:40](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=100)** The core doesn't run customer [[Routing Protocols]] or hold customer routes.
>
> **[1:45](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=105)** It's just a transit path.
>
> **[1:47](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=107)** This means no direct access points for attackers to exploit across the network.
>
> **[1:53](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=113)** Then there is control plane security.
>
> **[1:56](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=116)** MPGBP shares VPN routes between PEs, but it's locked down with VPN v4 addresses and route targets.
>
> **[2:05](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=125)** Only authorized PEs get the routes they need.
>
> **[2:08](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=128)** Random routers can't join in or see the data.
>
> **[2:12](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=132)** It's a closed system, keeping route info safe.
>
> **[2:16](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=136)** Put it together.
>
> **[2:18](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=138)** VRFs isolate traffic.
>
> **[2:20](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=140)** Labels height payloads.
>
> **[2:22](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=142)** Limited exposure shields the core, and MPBGP secures route sharing.
>
> **[2:28](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=148)** Together, these features ensure customer data stays private and untouchable as it crosses the MPLS network.
>
> **[2:36](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=156)** No leaks, no intrusions.
>
> **[2:39](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=159)** To wrap up, MPLS L3VPN ensure secure data transmission with isolation via VRF's label obsurity, limited access, and the locked-down control plane.
>
> **[2:52](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=172)** That's your security foundation.
>
> **[2:55](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=175)** Next, we will explore QoS in MPLS L3VPN, ensuring performance to keep it running smoothly.
>
> **[3:02](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=182)** Stay tuned as we wrap this section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (10), [[Routing]] (1), [[Routing Protocols]] (1)
> **Env Vars:** mpls (10), l3vpn (7), vpn (4), vrf (2), mpgbp (1)
> **Speakers:** - [instructor] (1)

#### [Quality of service (QoS) in MPLS L3VPN: Ensuring performance](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=0)** - [Lecturer] Welcome back to the Designing [[Multiprotocol Label Switching (MPLS)|MPLS]] L3VPN section of the MPLS L3VPN Foundation and Implementation course.
>
> **[0:08](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=8)** This is the final video, QoS in MPLS L3VPN: Ensuring Performance.
>
> **[0:14](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=14)** By the end, you will know how to implement QoS to prioritize traffic in an MPLS L3VPN.
>
> **[0:21](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=21)** Let's wrap this section up.
>
> **[0:24](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=24)** In an L3VPN, customer traffic, voice, video, data, shares the same MPLS network.
>
> **[0:31](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=31)** Without control, critical traffic could lack.
>
> **[0:34](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=34)** Quality of Service, QoS, steps in to prioritize what matters, ensuring performance across the VPN.
>
> **[0:42](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=42)** Let's see how to make it happen.
>
> **[0:46](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=46)** Step one, classify and mark traffic.
>
> **[0:51](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=51)** At the provider edge, PE routers identify traffic types from customer sites like voice or buck data, mark them with QoS labels like the MPLS EXP bits, set voice to higher priority, say EXP five, and data to lower like EXP one.
>
> **[1:10](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=70)** These tests packets for special treatment.
>
> **[1:14](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=74)** Step two, queue and prioritize.
>
> **[1:18](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=78)** Across the MPLS network, PEs and co-routers set up queues based on those markings.
>
> **[1:24](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=84)** High-priority queues, like for voice, gets served first, ensuring low delay.
>
> **[1:29](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=89)** Low-priority queues, like for data, wait if needed.
>
> **[1:34](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=94)** It's like a fast lane for critical traffic.
>
> **[1:38](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=98)** Step three, shape and police.
>
> **[1:41](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=101)** To avoid congestion, limit how much traffic enters each queue, shaped by smoothing bursts.
>
> **[1:48](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=108)** Say, cap data at 10 megabit per second, or police by dropping excess packets.
>
> **[1:55](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=115)** This keeps the network stable so prioritized traffic gets through without choking the pipes.
>
> **[2:02](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=122)** Here's how it ties together.
>
> **[2:04](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=124)** Mark traffic at the PE to flag priorities.
>
> **[2:08](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=128)** Queue it across the network to favor critical flows.
>
> **[2:11](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=131)** And shape or police to manage bandwidth.
>
> **[2:15](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=135)** The NPLS labels carry these QoS sitting end-to-end, so voice stays crisp and data doesn't clog the VPN.
>
> **[2:24](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=144)** In action, a voice call gets marked high priority, zips through fast queues, and shape to fit bandwidth crystal clear.
>
> **[2:34](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=154)** A file transfer marked lower takes a slow lane but still completes.
>
> **[2:40](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=160)** QoS balances the load, ensuring performance for all VPN traffic types.
>
> **[2:45](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=165)** To wrap up, implement QoS in MPLS L3VPN by classifying and marking traffic, prioritizing the queues, and shaping or policing bandwidth.
>
> **[2:56](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=176)** That's how you ensure performance.
>
> **[3:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=180)** Next, we will start implementing MPLS L3VPN section to bring it all to life.
>
> **[3:06](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=186)** Stay tuned as we move ahead.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (9)
> **Env Vars:** mpls (9), l3vpn (7), vpn (3), exp (3), npls (1)
> **CLI Commands:** make (1)
> **Analogies:** it's like (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [lecturer] (1)


### 5. Implementing MPLS L3VPN

[↑ Back to Table of Contents](#table-of-contents)

#### [Case study: Step-by-step L3VPN deployment](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=0)** - [Instructor] Welcome to the implementing [[Multiprotocol Label Switching (MPLS)|MPLS]] L3VPN section of the "MPLS L3VPN Foundation and Implementation" course.
>
> **[0:09](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=9)** This is the first video, "Case Study: Step-by-Step L3VPN Deployment."
>
> **[0:15](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=15)** By the end, you will understand our case study scenario and see the basic set up inside the provider network.
>
> **[0:22](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=22)** Let's lay the groundwork.
>
> **[0:25](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=25)** This case study walks through deploying an L3VPN step-by-step.
>
> **[0:30](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=30)** Our provider network has four routers, PE1, P1, P2, and PE2.
>
> **[0:37](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=37)** We have got two customers, Customer Red and Customer Blue, each with two sites.
>
> **[0:44](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=44)** PE1 connects to Site A of Red and Blue.
>
> **[0:47](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=47)** PE2 connects to Site B of Red and Blue.
>
> **[0:51](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=51)** The goal.
>
> **[0:52](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=52)** Connects Red's Site A to Site B and Blue's Site A to Site B with traffic separated.
>
> **[1:01](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=61)** Here is the setup.
>
> **[1:02](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=62)** Red Site A has a PC, Red Site B has a server.
>
> **[1:06](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=66)** Same for Blue, a PC at Site A and a server at Site B.
>
> **[1:11](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=71)** We will build an L3VPN so Red's PC pings its server, Blue's PC pings its server, and their traffic stays apart.
>
> **[1:22](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=82)** This video sets the provider's foundation, [[IP Addressing]], and IGP before we dive into L3VPN configs.
>
> **[1:30](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=90)** First, IP addressing in the provider core.
>
> **[1:33](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=93)** On PE1, the link to P1 uses gigabit ethernet 0/0.
>
> **[1:39](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=99)** Set IP address 10.0.12.1 255.255.255.252.
>
> **[1:49](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=109)** On P1 site, gigabit 0/0 gets 10.0.12.2/30.
>
> **[1:56](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=116)** This point-to-point links kicks off our backbone.
>
> **[2:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=120)** We will use 10.0.X.X for all core links.
>
> **[2:05](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=125)** Next links, P1 to P2.
>
> **[2:07](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=127)** Use gigabit ethernet 0/1 on P1 be 10.0.23.1/30 and gigabit ethernet 0/0 on P2 be 10.0.23.2/30.
>
> **[2:20](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=140)** Then, P2 to PE2, gigabit ethernet 0/1 on P2 gets 10.0.34.1/30, and gigabit ethernet 0/0 on PE2 gets 10.0.34.2/30.
>
> **[2:36](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=156)** Loopbacks for router IDs.
>
> **[2:38](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=158)** PE1 at 10.0.1.1/32, P1 at 10.0.2.2/32, P2 at 10.0.3.3/32, PE2 at 10.0.4.4/32.
>
> **[2:54](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=174)** Now, the IGP. Let's use OSPF.
>
> **[2:57](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=177)** On each router, enable OSPF via router ospf 1.
>
> **[3:01](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=181)** Add all interfaces with network 10.0.0.0 0.0.255.255 area zero.
>
> **[3:10](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=190)** Add loopbacks like network 10.0.1.1 0.0.0.0 area 0 on PE1.
>
> **[3:19](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=199)** This gets the core talking, PE1 to PE2 via P1 and P2, ready for MPLS later.
>
> **[3:26](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=206)** Here's where we are at.
>
> **[3:28](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=208)** The provider called PE1, P1, P2, PE2 has IPs and OSPF of running.
>
> **[3:33](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=213)** PE1 to P1 is 10.0.12.0/30.
>
> **[3:39](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=219)** P1 to P2 is 10.0.23.0/30.
>
> **[3:43](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=223)** P2 to PE2 is 10.0.34.0/30.
>
> **[3:49](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=229)** Customer sites are wired, Red A and Blue A to PE1, Red B and Blue B to PE2, but not configured yet.
>
> **[3:58](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=238)** That's next.
>
> **[4:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=240)** To wrap up, our case study has PE1 to PE2 via P1 and P2, with IPs and OSPF set for the core.
>
> **[4:08](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=248)** Red and Blue Sites are in place, ready for L3VPN to connect A to B securely.
>
> **[4:15](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=255)** Next, we will dive into configuring VRFs on PE routers to start the VPN build.
>
> **[4:21](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=261)** Stay tuned as we roll it out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (3), [[IP Addressing]] (2)
> **Env Vars:** pe1 (10), pe2 (10), l3vpn (7), ospf (4), mpls (3)
> **Versions:** 10.0.12 (3), 10.0.23 (3), 10.0.34 (3), 10.0.1 (2), 255.255.255 (1)
> **Prerequisites:** set up (1), setup (1)
> **Speakers:** - [instructor] (1)

#### [Configuring VRFs on PE routers](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=0)** - [Instructor] Welcome back to the implementing [[Multiprotocol Label Switching (MPLS)|MPLS]] L3VPN section of the MPLS L3VPN Foundation and Implementation course.
>
> **[0:11](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=11)** This is the second video, Configuring VRFs on PE Routers.
>
> **[0:15](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=15)** By the end, you will know how to configure VRFs on PE routers to isolate customer traffic, including route targets and [[IP Addressing]] for our case study devices.
>
> **[0:27](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=27)** Let's get started.
>
> **[0:30](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=30)** We are building on our case study PE1, P1, P2, and PE2 from the provider core.
>
> **[0:38](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=38)** For customer Red, it's PC to CE to PE1, through P1 and P2, then PE2 to CE to server.
>
> **[0:48](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=48)** Customer Blue follows the same, PC to CE to PE1 to P2 to CE to server.
>
> **[0:56](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=56)** We will configure VRFs with route targets and IPs on PE1 and PE2 to isolate Red and Blue traffic, PC to server for each.
>
> **[1:08](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=68)** Step one, create VRFs with route targets on PE1.
>
> **[1:13](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=73)** For customer Red, type ip vrf RED, set rd 1:1. for the route distinguisher, and add route-target both 1:1.
>
> **[1:25](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=85)** These exports and imports RT 1:1 to share Red's routes.
>
> **[1:31](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=91)** For customer Blue, use ip vrf BLUE, rd 2:2, and route-target both 2:2.
>
> **[1:39](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=99)** These VRFs isolate traffic and prepare for route exchange.
>
> **[1:45](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=105)** Step two, configure PE1-to-CE interfaces.
>
> **[1:50](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=110)** For Red, on GigabitEthernet0/1, enter ip vrf forwarding RED, then ip address 172.16.1.1. 255.255.255.0.
>
> **[2:08](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=128)** Red CE GigabitEthernet0/0 to PE1 is 172.16.1.2/24.
>
> **[2:17](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=137)** GigabitEthernet0/1 to the PC is 192.168.1.1/24.
>
> **[2:25](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=145)** PC at 192.168.1.10/24.
>
> **[2:32](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=152)** For Blue, PE1 GigabitEthernet0/2 gets ip vrf forwarding BLUE, ip address 172.16.2.1 255.255.255.0.
>
> **[2:48](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=168)** Blue CE is GigabitEthernet0/0 is 172.16.2.2/24.
>
> **[2:56](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=176)** GigabitEthernet0/1 is 192.168.2.1/24.
>
> **[3:03](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=183)** PC at 192.168.2.10/24.
>
> **[3:10](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=190)** On PE2, repeat for site B, create ip vrf RED, rd 1:1, route-target both 1:1, and GigabitEthernet0/1 use ip vrf forwarding RED, ip address 172.16.3.1 255.255.255.0.
>
> **[3:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=215)** Red CE GigabitEthernet0/0 to P2 is 172.16.3.2/24,
>
> **[3:44](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=224)** GigabitEthernet0/1 to the server is 192.168.3.1/24,
>
> **[3:52](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=232)** server at 192.168.3.10/24.
>
> **[3:59](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=239)** For Blue, ip vrf BLUE, rd 2:2, route-target both 2:2, GigabitEthernet0/2 with ip vrf forwarding BLUE, ip address 172.16.4.1 255.255.255.0.
>
> **[4:20](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=260)** Blue CE GigabitEthernet0/0 is 172.16.4.2/24, GigabitEthernet0/1 is 192.168.4.1/24, server at 192.168.4.10/24.
>
> **[4:41](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=281)** IP breakdown.
>
> **[4:42](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=282)** Red PC at 192.168.1.10.
>
> **[4:47](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=287)** CE GigabitEthernet0/1 at .1.
>
> **[4:52](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=292)** CE GigabitEthernet0/0 at 172.16.1.2.
>
> **[4:59](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=299)** P1 at .1.
>
> **[5:01](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=301)** P2 at 172.16.3.1.
>
> **[5:06](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=306)** CE GigabitEthernet0/0 at .2.
>
> **[5:10](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=310)** CE GigabitEthernet0/1 at 192.168.3.1.
>
> **[5:17](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=317)** Server at .10.
>
> **[5:19](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=319)** Blue, PC at 192.168.2.10.
>
> **[5:25](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=325)** CE GigabitEthernet0/1 at .1.
>
> **[5:29](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=329)** CE GigabitEthernet0/0 at 172.16.2.2.
>
> **[5:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=335)** PE1 at .1.
>
> **[5:37](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=337)** PE2 at 172.16.4.1.
>
> **[5:41](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=341)** CE GigabitEthernet0/0 at .2.
>
> **[5:44](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=344)** CE GigabitEthernet0/1 at 192.168.4.1.
>
> **[5:51](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=351)** Server at .10.
>
> **[5:53](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=353)** VRFs with RTs set the stage.
>
> **[5:56](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=356)** With VRFs, RTs, and IPs configured, Red's PC at 192.168.1.10 and server at 192.168.3.10 are in VRF Red with RT 1:1.
>
> **[6:14](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=374)** Blue's PC at 192.168.2.10 and server at 192.168.4.10 are in VRF Blue with RT 2:2.
>
> **[6:27](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=387)** Traffic is isolated locally, next, we will connect them.
>
> **[6:31](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=391)** To wrap up: Configure VRFs and P1 and P2 with RDs, route targets, and PE-to-CE plus device IPs to isolate Red and Blue traffic, PCs to servers.
>
> **[6:45](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=405)** PE1 configuration.
>
> **[6:46](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=406)** ip vrf RED, rd 1:1, route-target both 1:1, ip vrf BLUE, rd 2:2, route-target both to 2:2, interface GigabitEthernet0/1, ip vrf forwarding RED, ip address 192.16.1.1 255.255.255.0,
>
> **[7:11](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=431)** interface GigabitEthernet0/2, ip vrf forwarding BLUE, ip address is 172.16.2.1 255.255..255.0.
>
> **[7:26](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=446)** PE2.
>
> **[7:26](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=446)** ip vrf RED, rd 1:1, route-target both 1:1, ip vrf BLUE, rd 2:2, route-target both 2:2, interface GigabitEthernet0/1, ip vrf forwarding RED, ip address 172.16.3.1 255.255.255.0,
>
> **[7:51](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=471)** interface GigabitEthernet0/2, ip vrf forwarding BLUE, ip address is 172.16.4.1 255.255.255.0.
>
> **[8:05](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=485)** Red A CE.
>
> **[8:06](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=486)** interface GigabitEthernet0/0, ip address 172..16.1.2 255.255.255.0,
>
> **[8:17](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=497)** interface GigabitEthernet0/1, ip address 192.168.1.1 255.255.255.0.
>
> **[8:30](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=510)** PC, 192.168.1.10/24, gateway 192.168.1.1.
>
> **[8:40](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=520)** Red B CE.
>
> **[8:42](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=522)** interface GigabitEthernet0/0, ip address 172.16.3.2 255.255.255.0,
>
> **[8:53](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=533)** interface GigabitEthernet0/1, ip address 192.168.3.1 255.255.255.0.
>
> **[9:07](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=547)** Server, 192.168.3.10/24, gateway 192.168.3.1.
>
> **[9:19](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=559)** Blue A CE.
>
> **[9:21](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=561)** interface GigabitEthernet0/0, ip address 172.16.2.2 255.255.255.0,
>
> **[9:32](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=572)** interface GigabitEthernet0/1, ip address 192.168.2.1 255.255.255.0.
>
> **[9:44](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=584)** PC, 192.168.2.10/24, gateway 192.168.2.1.
>
> **[9:54](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=594)** Blue B CE.
>
> **[9:56](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=596)** interface GigabitEthernet0/0, ip address 172.16.4.2 255.255.255.0,
>
> **[10:07](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=607)** interface GigabitEthernet0/1, ip address 192.168.4.1 255.255.255.0.
>
> **[10:20](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=620)** Server, 192.168.4.10/24, gateway 192.168.4.1.
>
> **[10:30](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=630)** Next, we will explore setting up MP-BGP for Layer 3 VPN to link these sites network-wide.
>
> **[10:37](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=637)** And stay tuned as we keep building.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (2), [[IP Addressing]] (1)
> **Versions:** 255.255.255 (15), 192.168.1 (7), 192.168.2 (7), 192.168.3 (7), 192.168.4 (7)
> **Env Vars:** pe1 (10), red (8), blue (8), pe2 (6), mpls (2)
> **Prerequisites:** configure (4)
> **Speakers:** - [instructor] (1)

#### [Setting up MP-BGP for L3VPN](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=0)** - [Instructor] Welcome back to the Implementing [[Multiprotocol Label Switching (MPLS)|MPLS]] L3VPN section of the MPLS L3VPN Foundation and Implementation course.
>
> **[0:09](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=9)** This is the third video, Setting Up MP-BGP for L3VPN.
>
> **[0:14](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=14)** By the end, you will know how to set up MP-BGP to enable VPN route exchange between P routers connecting our customer sites.
>
> **[0:23](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=23)** Let's dive in.
>
> **[0:24](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=24)** We are moving forward with our case study.
>
> **[0:27](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=27)** P1, P1, P 2 and P2 form the provider core.
>
> **[0:32](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=32)** Customer Red has a PC Site A on P1, and the server at Site B on P2.
>
> **[0:38](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=38)** Customer Blue has a PC Site A on P1 and a server at Site B on P2.
>
> **[0:45](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=45)** The core runs OSPF, and VRFs with route targets are set.
>
> **[0:51](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=51)** Now MP-BGP will exchange routes to link Red Site A to B and Blue Site A to B, keeping traffic separate.
>
> **[1:01](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=61)** Step 1, Enable BGP on PE routers On PE1, type router BGP 65000, our AS number.
>
> **[1:10](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=70)** Add P2 as a enable with neighbor 10.0.4.4 remote--as 65000.
>
> **[1:17](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=77)** PE2's loopback, and neighbor 10.0.4.4 update--source loopback0.
>
> **[1:24](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=84)** On PE2, use router bgp 65000 neighbor 10.0.1.1 remote-as 65000.
>
> **[1:32](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=92)** PE1's loopback, and neighbor 10.0.1.1 update--source loopback 0.
>
> **[1:37](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=97)** This sets up IBGP between PEs Step 2: Activate VPNv4 address family.
>
> **[1:46](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=106)** On PE1 under bgp, enter address-family vpnv4.
>
> **[1:51](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=111)** Use neighbor 10.0.4.4 activate and neighbor 10.0.4.4 send-community extended.
>
> **[1:59](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=119)** This sends route targets for VPN routes.
>
> **[2:04](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=124)** On PE2, do the same, address-family vpnv4 neighbor 10.0.1.1 activate neighbor 10.0.1.1 send-community extended.
>
> **[2:15](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=135)** VPNv4 enables L3VPN route exchange.
>
> **[2:21](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=141)** Step 3: Integrate VRF with MP-BGP.
>
> **[2:25](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=145)** On PE1 for VRF Red, use address-family ipv4 vrf RED and redistribute connected.
>
> **[2:32](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=152)** This shares Red Site a subnet, 172.16.1.0/24, with RT 1:1.
>
> **[2:42](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=162)** For VRF Blue, address-family ipv4 vrf BLUE redistribute connected sharing 172.16.2.0/24 with RT 2:2 On PE2, VRF Red shares 172.16.3.0/24.
>
> **[3:01](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=181)** VRF Blue shares 172.16.4.0/24 using the artist from the last video.
>
> **[3:09](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=189)** Here is the IP setup.
>
> **[3:11](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=191)** Red Site A PC at 192.168.1.10, CE gigabit ethernet 0/1 at .1, CE gigabit ethernet 0/0 to PE1 at 172.16.1.2, P at .1.
>
> **[3:29](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=209)** Red Site B PE2 at 172.16.3.1, CE gigabit ethernet 0/0 at .2, CE gigabit ethernet 0/1 at 192.168.3.1, server at .10.
>
> **[3:47](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=227)** Blue Site A PC at 192.168.2.10, CE gigabit ethernet 0/1 at .1, CE gigabit ethernet 0/0 to PE1 at 172.16.2.2, P at .1.
>
> **[4:06](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=246)** Blue Site B PE2 at 172.16.4.1, CE gigabit ethernet 0/0 at .2, CE gigabit 0/1 at 192.168.4.1, server at .10.
>
> **[4:23](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=263)** With MP-BGP configured, PE sends Reds 172., rephrase.
>
> **[4:30](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=270)** With MP-BGP configured, PE sends Reds 172.16.1.0/24 and Blues 172.16.2.0/24 to PE2 via VPNv4 tagged with RTs.
>
> **[4:47](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=287)** PE2 sends 172.16.3.0/24 and 172.16.4.0/24 back.
>
> **[4:58](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=298)** VRF Red connects Red's PC2 server VRF Blue connects Blue's PC2 server.
>
> **[5:05](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=305)** Traffic stays isolated.
>
> **[5:07](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=307)** MP-BGP links to sites.
>
> **[5:10](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=310)** To wrap up, set up MP-BGP with iBGP neighbors, VPNv4, and VRF integration to exchange VPN routes between PE1 and P2 for Red and Blue.
>
> **[5:22](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=322)** That connects our sites across the core.
>
> **[5:26](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=326)** PE1 configuration: router bgp 65000.
>
> **[5:30](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=330)** neighbor 10.0.4.4 remote-as 65000 neighbor 10.0.4.4 update-source Loopback0 address-family vpnv4 neighbor 10.0.4.4 activate neighbor 10.0.4.4 send-community extended address family ipv4 vrf RED redistribute connected address family ipv4 vrf BLUE redistribute connected PE2: router bgp 65000.
>
> **[6:02](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=362)** neighbor 10.0.1.1 remote-as 65000 neighbor 10.0.1.1 update-source Loopback0 address family vpnv4 neighbor 10.0.1.1 activate neighbor 10.0.1.1 send-community extended address family ipv4 vrf RED redistribute connected address family ipv4 vrf BLUE redistribute connected.
>
> **[6:30](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=390)** That connects our sites across the core.
>
> **[6:32](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=392)** Next, we will explore connecting CE to PE, static and dynamic [[Routing]] options to get traffic flowing, and stay tuned as we keep building.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (2), [[Routing]] (1)
> **Env Vars:** bgp (10), pe2 (9), pe1 (8), vrf (8), l3vpn (4)
> **Versions:** 10.0.4 (8), 10.0.1 (8), 172.16.1 (3), 172.16.2 (3), 172.16.3 (3)
> **Prerequisites:** set up (2), setup (1)
> **Code Identifiers:** ibgp (1)
> **Speakers:** - [instructor] (1)

#### [Connecting CE to PE: Static and dynamic routing options](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=0)** - [Instructor] Welcome back to the implementing [[Multiprotocol Label Switching (MPLS)|MPLS]] 3VPN section of the MPLS 3VPN Foundation and Implementation course.
>
> **[0:09](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=9)** This is the fourth video connecting CE to PE static and dynamic [[Routing]] options.
>
> **[0:15](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=15)** By the end you will know how to connect CE and PE routers using a static and dynamic routing plus redistribute routes into MP-BGP.
>
> **[0:24](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=24)** Let's connect those sites.
>
> **[0:27](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=27)** We are advancing our case study.
>
> **[0:29](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=29)** PE1, P1, PE2 and P2 form the provider core.
>
> **[0:34](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=34)** Customer red has a PC at site A on P1 and a server at site B on P2.
>
> **[0:41](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=41)** Customer blue has a PC at site A on P1 and a server at site beyond P2.
>
> **[0:48](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=48)** VRFs and MPBGPR set.
>
> **[0:50](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=50)** Now we will connect CE2P with a static routing for red and BGP for blue redistributing into MPBGP.
>
> **[0:59](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=59)** You can also use RIP, OSPF, EIGRP, IS-IS or BGP for PE-CE.
>
> **[1:07](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=67)** Step one, a static routing for customer red.
>
> **[1:11](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=71)** On P1 for VRF red at IP route VRF red 192.168.1.0
>
> **[1:20](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=80)** 255.255.255.0 172.16.1.2 to red A CE.
>
> **[1:32](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=92)** On PE2, use IP route VRF red 192.168.1.0 255.255.255.0
>
> **[1:45](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=105)** 172.16.3.2 to red B CE.
>
> **[1:51](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=111)** On red A CE at IP route 192.168.3.0 255.255.255.0 172.16.1.1
>
> **[2:07](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=127)** On red B CE, IP route 192.168.1.0 255.255.255.0 172.16.3.1.
>
> **[2:23](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=143)** A static routes are simple but need manual updates.
>
> **[2:28](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=148)** Step two, BGP for customer blue.
>
> **[2:31](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=151)** Blue CEs share as 65,001 so BGP's loop prevention reject route unless we override the AS.
>
> **[2:40](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=160)** On P1 under router BGP 65,000 in address family IPv4 VRF blue at neighbor 172.16.2.2 remote as 65,001 blue A CE
>
> **[2:56](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=176)** and neighbor 172.16.2.2 as override to replace 65,001 with 65,000.
>
> **[3:06](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=186)** On blue A CE, use router BGP 65,001 neighbor 172.16.2.1 remote as 65,000 network 192.168.2.0 mask 255.255.255.0.
>
> **[3:27](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=207)** On PE2 neighbor 172.16.4.2 remote as 65,001 neighbor 172.16.4.2 as override.
>
> **[3:40](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=220)** On blue B CE, neighbor 172.16.4.1 remote as 65,000 network 192.168.4.0 mask 255.255.255.0.
>
> **[3:58](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=238)** AS override keeps the same issue, RIP or OSPF avoidance.
>
> **[4:05](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=245)** Step three, redistribute into MP-BGP.
>
> **[4:09](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=249)** On P1 under router BGP 65,000 in address family IPv4 VRF RED at redistribute static sharing red's routes.
>
> **[4:20](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=260)** On P2, repeat redistribute static for VRF red.
>
> **[4:25](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=265)** This sends CE routes across the core via MP-BGP.
>
> **[4:30](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=270)** IP recap, red site A, PC at 192.168.1.10 CE gigabit ethernet 0/1 at .1, CE gigabit ethernet 0/0 at 172.68.1.2 PE1 at .1.
>
> **[4:49](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=289)** Red site BP.
>
> **[4:51](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=291)** PE2 at 172.16.3.1 CE gigabit ethernet 0/0 at .2, CE gigabit ethernet 0/1 at 192.168.3.1 server at .10.
>
> **[5:07](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=307)** Blue site A, PC at 192.168.2.10, CE gigabit ethernet 0/1 at .1, CE gigabit ethernet 0/0 at 172.16.2.2 PE1 at .1.
>
> **[5:24](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=324)** Blue site B, PE2 at 172.16.4.1, CE gigabit ethernet 0/0 at .2, CE gigabit ethernet 0/1 at 192.168.4.1, server at .10.
>
> **[5:41](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=341)** Red's static route.
>
> **[5:42](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=342)** 192.168.1.0/24 and 192.168.3.0/24.
>
> **[5:52](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=352)** Interview all of red.
>
> **[5:54](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=354)** Blues BGP routes, 192.168.2.0/24 and 192.168.4.0/24.
>
> **[6:05](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=365)** Use as override and inter VRF blue.
>
> **[6:08](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=368)** MP-BGP shares them between P1 and P2 keeping red and blue separate with RPs one column one and two column two.
>
> **[6:18](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=378)** To wrap up, connect CE to PE with a static routing for red and BGP with AS override for blue redistributing into MP-BGP.
>
> **[6:28](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=388)** Static is simple.
>
> **[6:29](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=389)** BGP needs as override for same AS sites.
>
> **[6:33](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=393)** Other protocols like OSPF skipped this.
>
> **[6:36](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=396)** PE1 IP root VRF red 192.168.1.0 255.255.255.0 172.16.1.2.
>
> **[6:51](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=411)** Router BGP 65,000 at this family IPv4 VRF red redistribute static at this family IPv4 VRF blue neighbor 172.16.2.2 remove as 65,001 neighbor 172.16.2.2 as override.
>
> **[7:12](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=432)** PE2, IP route VRF red 192.168.3.0 255.255.225.0 1721.16.3.2,
>
> **[7:26](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=446)** router BGP 65,000 at this family IPv4 VRF red redistribute static at this family IPv4 VRF blue neighbor 172.16.4.2 remote as 65,001 neighbor 172.16.4.2 as override.
>
> **[7:47](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=467)** Red-A CE, IP route 192.168.3.0 255.255.255.0 172.16.1.1
>
> **[8:01](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=481)** Red-B CE, IP route 192.168.1.0 255.255.255.0 172.16.3.1
>
> **[8:17](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=497)** Blue-A CE, router BGP 65,001 neighbor 172.16.2.1 remote as 65,000 network 192.168.2.0 mask 255.255.255.0.
>
> **[8:37](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=517)** Blue-B CE, router BGP 65,001 neighbor 172.16.4.1 remote as 65,000 network 192.168.4.0 mask 255.255.255.0.
>
> **[8:56](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=536)** Next, we will dive into enabling MPLS in the service provider network and stay tuned as we continue to build your MPLS 3VPN skills.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (5), [[Multiprotocol Label Switching (MPLS)|Mpls]] (4)
> **Env Vars:** bgp (19), vrf (13), pe2 (6), mpls (4), pe1 (4)
> **Versions:** 255.255.255 (11), 192.168.1 (7), 172.16.2 (7), 172.16.4 (7), 192.168.3 (5)
> **Speakers:** - [instructor] (1)

#### [Enabling MPLS in the service provider network](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=0)** - [Instructor] Welcome back everyone.
>
> **[0:01](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=1)** So far, we have configured VRF on our provider HP routers, set up MP-BGP to exchange VPN routes, and connected our customer edge CE routers to the P routers using aesthetic or dynamic [[Routing]].
>
> **[0:16](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=16)** But there is a critical piece of the puzzle we haven't addressed yet.
>
> **[0:20](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=20)** Enabling [[Multiprotocol Label Switching (MPLS)|MPLS]] within the service provider network itself.
>
> **[0:24](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=24)** That's what this lecture is all about, why we need MPLS in the core and how to configure it.
>
> **[0:32](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=32)** First, let's talk about why we need MPLS in the service provider network.
>
> **[0:38](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=38)** In an L3 VPN setup, the P routers are responsible for isolating customer traffic using virtual routing and forwarding tables or VRF and exchanging those VPN route via MP-BGP.
>
> **[0:52](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=52)** But here is the thing, MP-BGP runs between the P routers and in real world service provider network, these P routers are typically separated by multiple core routers known as provider P routers.
>
> **[1:07](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=67)** Without MPLS, these P routers would need to maintain full routing table for every customer VPN, which defeats the purpose of a scalable VPN solution.
>
> **[1:19](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=79)** MPLS solved this by introducing label switching.
>
> **[1:23](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=83)** Instead of routing packets based on IP headers hope by hope, MPLS assign labels to packets at the ingress P router.
>
> **[1:32](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=92)** The P routers in the code then switch these packets based on those labels without ever needing to look at the IP information.
>
> **[1:41](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=101)** This makes the network faster, more efficient, and most importantly, scalable.
>
> **[1:47](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=107)** Key benefits of MPLS in L3VPN.
>
> **[1:51](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=111)** [[Scalability]], P routers don't need to know customer routes.
>
> **[1:57](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=117)** Traffic isolation, labels ensure VPN traffic stays separate.
>
> **[2:03](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=123)** Flexibility, supports advanced features like [[Traffic Engineering]].
>
> **[2:09](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=129)** Let's configure MPLS across our topology.
>
> **[2:12](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=132)** Step one, enable MPLS on all core-facing interfaces.
>
> **[2:18](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=138)** Step two, set up LDP to distribute labels.
>
> **[2:21](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=141)** Here's how it looks.
>
> **[2:24](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=144)** PE1 interface gigabit ethernet zero is just zero MPLS IP.
>
> **[2:30](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=150)** PE2 interface gigabit ethernet zero is just zero MPLS IP.
>
> **[2:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=155)** P1 interface gigabit ethernet zero is less zero MPLS IP.
>
> **[2:40](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=160)** Interface gigabit ethernet zero slash one MPLS IP.
>
> **[2:45](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=165)** P2 interface gigabit ethernet zero slash zero MPLS IP.
>
> **[2:50](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=170)** Interface gigabit ethernet zero slash one MPLS IP.
>
> **[2:56](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=176)** The MPLS IP command enables MPLS and activate LDP by default.
>
> **[3:01](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=181)** So labels are automatically assigned and distributed across PE1, P1, P2, and PE2.
>
> **[3:08](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=188)** Now here's the layer three VPM magic PE1 pushes two labels.
>
> **[3:14](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=194)** The outer label say 100 guides the packet through the core to P2.
>
> **[3:19](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=199)** P1 and P2 swap this transport label.
>
> **[3:23](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=203)** The inner label say 300 tells PE2 which VPN the packet belongs to.
>
> **[3:29](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=209)** And P2, the outer label is pop due to penultimate hop popping and P2 uses the inner label to forward the packet to the right CE.
>
> **[3:39](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=219)** That's how we enable MPLS for our L3VPN V2 label stacking.
>
> **[3:44](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=224)** Next we will verify connectivity and test the VPN.
>
> **[3:48](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=228)** Stay tuned as we keep building your MPLS L3 VPN skills.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (19), [[Routing]] (4), [[Scalability]] (1), [[Traffic Engineering]] (1)
> **Env Vars:** mpls (19), vpn (9), bgp (3), pe1 (3), pe2 (3)
> **Prerequisites:** set up (2), configure (2), setup (1)
> **Definitions:** is a  (1), known as (1)
> **Speakers:** - [instructor] (1)

#### [Verifying connectivity and testing the VPN](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=0)** - [Instructor] Welcome back.
>
> **[0:01](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=1)** By now, we have built our [[Multiprotocol Label Switching (MPLS)|MPLS]] L3 VPN from the ground up.
>
> **[0:06](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=6)** VRFs are configured, MPBGP is exchanging routes.
>
> **[0:09](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=9)** CE routers are connected, and MPLS is enabled across the provider network.
>
> **[0:15](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=15)** Today, we are verifying that it all works and testing end-to-end connectivity.
>
> **[0:21](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=21)** Our scenario has customer Red and customer Blue, each with site 1 and PE1 and site 2 and PE2.
>
> **[0:28](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=28)** Across the backbone, PE1, P1, P2, and PE2.
>
> **[0:32](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=32)** Let's get started.
>
> **[0:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=35)** We are focusing on two things, confirming the L3 VPNs functioning on the PE routers and testing connectivity between customer sites.
>
> **[0:44](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=44)** We will use show commands and pings to make sure everything's on track.
>
> **[0:50](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=50)** First, let's check the PE routers to ensure the VRFs have the right routes.
>
> **[0:55](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=55)** On PE1, we will look at customer Red and customer Blue's VRFs.
>
> **[1:02](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=62)** For customer Red, run show ip route vrf RED, you will see Red site one's network, say, 192.168.1.0/24.
>
> **[1:15](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=75)** From the local C and Red site two, 192.168.3.0/24 via MPBGP from PE2.
>
> **[1:26](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=86)** Now, for customer blue, show ip route vrf BLUE.
>
> **[1:31](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=91)** Here's Blue site one's 192.168.2.0/24 and Blue site two's 192.168.4.0/24.
>
> **[1:44](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=104)** These routes show P1 knows both sides for each customer.
>
> **[1:49](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=109)** On PE2, do the same.
>
> **[1:50](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=110)** Show ip route vrf RED, show IP route vrf BLUE.
>
> **[1:56](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=116)** You will see site two's local routes and site one's BGP Learn routes.
>
> **[2:01](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=121)** If these match up, our VPN [[Routing]] is solid.
>
> **[2:05](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=125)** Next, let's confirm MPLS is moving packets across the core.
>
> **[2:10](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=130)** On PE1, check the MPLS forwarding table, show mpls forwarding table.
>
> **[2:17](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=137)** Look for PE2s look back, say, 10.0.4.4.
>
> **[2:21](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=141)** You will see an outgoing label like 18.
>
> **[2:24](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=144)** to reach PE2 via P1.
>
> **[2:26](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=146)** That's the transport label in action on P1, run show mpls forwarding table.
>
> **[2:34](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=154)** It swaps that label, say 18 to 18 for P2.
>
> **[2:39](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=159)** On P2, it might pop the label before PE2.
>
> **[2:42](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=162)** Thanks to penultimate hop popping.
>
> **[2:45](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=165)** This shows the core is switching labels correctly.
>
> **[2:49](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=169)** Now, let's test connectivity between sites.
>
> **[2:52](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=172)** From Red site one CE, ping Red site two ping, 192.168.3.1, source 192.168.1.1.
>
> **[3:04](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=184)** If it works, traffic flows from site one through PE1 across the MPLS core to PE2 and into site two, all within the Red VPN.
>
> **[3:15](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=195)** For Blue, ping 192.168.4.1, source 192.168.2.1.
>
> **[3:24](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=204)** Success here means both VPNs are up and running.
>
> **[3:28](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=208)** Here is what happens.
>
> **[3:29](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=209)** PE1 pushes two labels: the outer transport label to reach PE2 and the inner VPN label for Red's vrf.
>
> **[3:37](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=217)** P1 and P2 swap the transport label.
>
> **[3:40](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=220)** P2 pops it, and PE2 uses the VPN label to deliver the packet.
>
> **[3:45](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=225)** Same for blue. Perfect isolation.
>
> **[3:49](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=229)** Last, let's check cef, which handles forwarding.
>
> **[3:53](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=233)** On PE1, show IP cef vrf RED 192.168.3.0 detail.
>
> **[4:02](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=242)** This shows the label stack and next stop, P1, for Red site two.
>
> **[4:06](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=246)** If pings fail, check cef routing tables or MPLS labels for mismatch.
>
> **[4:13](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=253)** And there you have it.
>
> **[4:14](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=254)** We have verified our L3 VPN and tested connectivity for customer Red and Blue across PE1, P1, P2 and PE2.
>
> **[4:23](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=263)** The VPN is fully operational.
>
> **[4:26](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=266)** Next time, we will dive into advanced topics to level up your MPLS L3 VPN skills. See you then.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (9), [[Routing]] (2)
> **Env Vars:** pe2 (10), vpn (8), pe1 (8), mpls (7), red (3)
> **Versions:** 192.168.3 (3), 192.168.1 (2), 192.168.2 (2), 192.168.4 (2), 10.0.4 (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 6. Advanced Topics and Wrap-Up

[↑ Back to Table of Contents](#table-of-contents)

#### [Inter-AS L3VPN: Connecting multiple providers](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=0)** - [Instructor] Welcome back to our [[Multiprotocol Label Switching (MPLS)|MPLS]]-L3VPN journey.
>
> **[0:04](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=4)** We have mastered building an L3VPN within a single provider network.
>
> **[0:08](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=8)** But what if a customer site span multiple service providers?
>
> **[0:14](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=14)** That's where Inter-AS L3VPN comes into play.
>
> **[0:18](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=18)** Today, we will explore how this feature connects autonomous systems to extend the VPN using customer read with site one in AS 100 and site two in AS 200 as our example.
>
> **[0:30](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=30)** Let's break it down.
>
> **[0:33](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=33)** Inter-ASL3VPN allows multiple service providers to collaborate linking their networks to provide a seamless layer 3 VPN for a customer.
>
> **[0:43](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=43)** Imagine a global company like Customer Red.
>
> **[0:46](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=46)** Site one is with one provider in AS 100, and site two is with another in AS 200.
>
> **[0:55](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=55)** Here is the setup.
>
> **[0:56](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=56)** In AS 100, Customer Red site 1 connects to P1 which links to an autonomous system border router, ASBR1.
>
> **[1:06](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=66)** In AS 200, Site 2 connects to P2 linked to ASBR 2.
>
> **[1:11](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=71)** The ASBRs are the handshake point between these providers.
>
> **[1:16](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=76)** Inside each ASMP LSN MPPGP handle the VPN, but the magic happens at the boundary.
>
> **[1:23](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=83)** How does this work?
>
> **[1:25](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=85)** The core idea is to extend the VPN across AS boundaries while keeping customer traffic isolated.
>
> **[1:32](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=92)** Each provider maintains its own MPLS backbone, P1 to ASBR 1 in AS 100 and ABR2 to P2 in AS 200.
>
> **[1:42](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=102)** At the ASBRs, the providers exchange [[Routing]] information and forward traffic ensuring reds packet flow from Site 1 to Site 2 securely no matter who is in the middle.
>
> **[1:54](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=114)** There are three main ways to do this called Inter-AS options, A, B, and C.
>
> **[2:01](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=121)** Option A is the simplest.
>
> **[2:03](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=123)** The ASBRs act like C routers treating the link between them as a basic IP connection.
>
> **[2:10](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=130)** Each ASBR uses VRFs to separate customer traffic and swaps routes with the other ASBR using a protocol, like EBGP.
>
> **[2:19](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=139)** No MPLS labels crossed the boundary.
>
> **[2:22](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=142)** Inside, each AS MPLS does its usual label switching job.
>
> **[2:27](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=147)** Let's follow a packet with option A.
>
> **[2:30](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=150)** From Red Site 1, PE1 push two labels, the transport label to reach ASBR1 and the VPN label for Red's VRF.
>
> **[2:39](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=159)** ASBR1s strips the labels, sends the packet as plain IP to ASBR2 which then pushes new labels to get it to PE2.
>
> **[2:49](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=169)** PE2 pops the VPN label and delivers it to Site 2.
>
> **[2:53](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=173)** It's straightforward and keeps each provider independent.
>
> **[2:59](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=179)** Option B takes it up a notch.
>
> **[3:01](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=181)** The ASBRs exchange VPN routes and labels directly via MPBGP.
>
> **[3:06](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=186)** So MPLS labels cross the boundary. Option C goes further.
>
> **[3:12](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=192)** P is in different AS talk MPBGP directly, and ASBRs just for what labeled packets.
>
> **[3:19](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=199)** These options trade simplicity for efficiency depending on provider trust and scale.
>
> **[3:26](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=206)** Why does this matter?
>
> **[3:28](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=208)** Inter-AS L3VPN makes global VPNs possible.
>
> **[3:32](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=212)** Customer Red doesn't care that Site 1 and Site 2 are with different providers.
>
> **[3:37](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=217)** They just need connectivity.
>
> **[3:40](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=220)** This feature ensures a [[Scalability]] letting providers stitch their networks together without sharing full internal details, all while keeping VPN isolation intact.
>
> **[3:52](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=232)** That's the essence of Inter-AS L3VPN connecting multiple providers to extend the customer's VPN across AS boundaries.
>
> **[4:01](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=241)** We have explored how it bridges AS 100 and AS 200 for customer red using options like A, B, and C.
>
> **[4:11](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=251)** Next time, we will see how MPLS L3VPN fits into modern networks.
>
> **[4:16](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=256)** See you then.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (6), [[Routing]] (1), [[Scalability]] (1)
> **Env Vars:** vpn (9), mpls (6), l3vpn (6), asbr (4), asbr1 (2)
> **Analogies:** imagine (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [MPLS L3VPN in modern networks (SD-WAN integration)](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=0)** - [Instructor] Welcome back to our [[Multiprotocol Label Switching (MPLS)|MPLS]] L3VPN exploration.
>
> **[0:04](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=4)** We have covered building L3VPNs within a single provider and even across multiple providers.
>
> **[0:11](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=11)** But today, we are stepping into the mother networking board to see how MPLS L3VPN integrates with SD-WAN solutions.
>
> **[0:21](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=21)** As enterprises adopt hybrid networks, this combination is becoming a powerful way to blend reliability with flexibility.
>
> **[0:29](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=29)** Let's dive into how these technologies work together.
>
> **[0:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=35)** First, why bother integrating them?
>
> **[0:38](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=38)** MPLS L3VPN is the gold standard for secure, reliable QS driving connectivity.
>
> **[0:44](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=44)** Think branch offices tied to a provider's backbone.
>
> **[0:49](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=49)** SD-WAN, on the other hand, brings agility using internet links or LT to create an overlay that's cost effective and quick to deploy.
>
> **[1:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=60)** Together, they offer the best of both worlds, MPLS for critical apps and SD-WAN for everything else.
>
> **[1:09](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=69)** Picture this, Customer Red has Site 1 and Site 2 connected via an MPLS L3VPN through PE1 and PE2.
>
> **[1:18](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=78)** The provider ensures low latency and isolation with VRFs and labels.
>
> **[1:24](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=84)** Now, at SD-WAN, an overlay runs over internet links between those sites managed by SD-WAN H devices.
>
> **[1:32](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=92)** The two system coexist serving different needs.
>
> **[1:37](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=97)** How do they integrate?
>
> **[1:39](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=99)** It's all about coexistence and orchestration.
>
> **[1:42](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=102)** The MPLS L3VPN operates as the underlay.
>
> **[1:45](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=105)** PE routers handle VPN traffic with MPB GPN label switching, just as we have seen.
>
> **[1:53](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=113)** SD-WAN sits on top as an overlay using tunnels of an IPSec over public or private links.
>
> **[2:01](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=121)** The SD-WAN controller decides which traffic uses MPLS versus cheaper internet pass based on policies like app priority or bandwidth needs.
>
> **[2:13](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=133)** For example, Customer Red's voice traffic might take the MPLS L3VPN pass, guaranteed QoS from PE1 to PE2.
>
> **[2:23](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=143)** Meanwhile, bug file transfers go over SD-WAN's internet tunnel saving costs.
>
> **[2:30](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=150)** The SD-WAN H as Site 1 sees both options and steers traffic dynamically, while the MPS provider keeps its VPN intact.
>
> **[2:42](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=162)** Let's break down the integration points.
>
> **[2:44](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=164)** One, traffic steering.
>
> **[2:47](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=167)** SD-WAN uses [[Real-Time]] analytics to choose MPLS for latency sensitive apps, uploading others to the overlay.
>
> **[2:56](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=176)** Two, visibility.
>
> **[2:58](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=178)** SD-WAN [[Dashboards]] often monitor both MPLS and internet performance, giving a unified view.
>
> **[3:05](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=185)** Three, hybrid back hole.
>
> **[3:07](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=187)** Some setups use MPLS as a backbone for SD-WAN hops connecting remote sites to a central MPLS VPN.
>
> **[3:16](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=196)** What's the payoff? Flexibility.
>
> **[3:19](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=199)** Add SD-WAN to a scale size without waiting for MPLS provisioning.
>
> **[3:24](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=204)** Cost saving.
>
> **[3:26](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=206)** Shift non-critical traffic of expensive MPLS circuits.
>
> **[3:31](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=211)** And reliability.
>
> **[3:33](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=213)** MPLS ensures uptime for key apps, while SD-WAN adopts to failures or congestion.
>
> **[3:41](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=221)** It's a hybrid model that keeps MPLS relevant in a cloud-first world.
>
> **[3:47](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=227)** It's not all seamless.
>
> **[3:48](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=228)** MPLS and SD-WAN use different control planes and PBGP versus SD-WAN centralized brain, so alignment takes planning.
>
> **[3:59](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=239)** Plus QOS needs coordination.
>
> **[4:01](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=241)** SD-WAN must respect MPLS priorities.
>
> **[4:04](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=244)** These aren't deal breakers. Just factors to keep in mind.
>
> **[4:09](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=249)** That's how MPLS L3VPN integrates with SD-WAN.
>
> **[4:13](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=253)** Combining the strengths of a provider-managed VPN with the agility of an overlay, we have explored how they coexist, steer traffic, and deliver hybrid benefits, for networks like customer reds.
>
> **[4:28](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=268)** Next time, we will tackle common pitfalls on how to avoid them.
>
> **[4:33](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=273)** See you then.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (19), [[Real-Time]] (1), [[Dashboards]] (1)
> **Env Vars:** mpls (19), wan (18), l3vpn (7), vpn (4), pe1 (2)
> **Analogies:** picture (1), for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Common pitfalls and how to avoid them](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=0)** - [Instructor] Welcome back to our [[Multiprotocol Label Switching (MPLS)|MPLS]] L3VPN journey.
>
> **[0:03](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=3)** We have built L3VPNs, connected them across providers, and explored modern integrations, but even the best setups can hit snags.
>
> **[0:14](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=14)** Today, we are diving into common pitfalls that trip up L3VPN deployments and how to avoid them.
>
> **[0:21](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=21)** Our goal is spot frequent errors, and arm you with preventive measures to keep your VPNs running smoothly.
>
> **[0:28](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=28)** Let's get started.
>
> **[0:31](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=31)** First up, route target misconfiguration, imagine Customer Red with sites on P1 and P2.
>
> **[0:39](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=39)** Each P has a VRF for Red, but if P1 exports with RT 100 column one, and P2 imports with RT 100 column two, the routes don't match up.
>
> **[0:51](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=51)** Red site can't communicate.
>
> **[0:54](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=54)** How to avoid it, ensure RT's are consistent across P's for each VPN.
>
> **[1:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=60)** Use the same export and import values like 100 column one everywhere for Red.
>
> **[1:06](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=66)** Check with show VRF or show IPVRF detail to confirm RT alignment.
>
> **[1:12](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=72)** A quick policy check prevents this headache.
>
> **[1:16](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=76)** Next, MPLS label-switching issues, say P1 pushes labels to reach P2 through P1 and P2, but P1's interface lack MPLS IP.
>
> **[1:28](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=88)** Labels stop flowing and traffic drops, or worse, penultimate hop popping fails because P2 isn't popping the transport label, confusing P2.
>
> **[1:41](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=101)** Prevention, verify MPLS is enabled on every core interface.
>
> **[1:46](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=106)** You'll show MPLS interface to confirm.
>
> **[1:48](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=108)** Also check show MPLS for [[Routing]] table, and P routers to ensure labels are assigned and swapped correctly.
>
> **[1:55](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=115)** Consistency across the path is key.
>
> **[1:59](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=119)** Third pitfall, routing protocol problems between CE and PE.
>
> **[2:04](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=124)** If Customer Red CE uses OSPF, but PE1 expects BGP, routes don't exchange, or aesthetic routes point the wrong way, Red site one can't reach site two.
>
> **[2:17](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=137)** How to dodge this, align protocols before connecting.
>
> **[2:21](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=141)** Agree on BGP, OSPF, or aesthetics with the customer.
>
> **[2:25](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=145)** Test with the show IP route VRF Red on the PE to confirm CE routes are there.
>
> **[2:31](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=151)** Clear expectation prevents silent failures.
>
> **[2:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=155)** Finally, MP-BGP session issues, P1 and P2 needs to swap VPN routes, but if the loopbacks like 1.1.1.1, and 2.2.2.2 aren't reachable, the decision dies.
>
> **[2:51](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=171)** Maybe an IGP like OSPF isn't advertising those loopbacks, or a firewall blocks port 179.
>
> **[3:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=180)** Avoid it by ensuring loopbacks are in your IGP.
>
> **[3:04](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=184)** Check with show IP OSPF database.
>
> **[3:07](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=187)** You'll show IP BGP VPNB for all summary to verify the session's up.
>
> **[3:12](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=192)** Add a quick ping between loopbacks to catch reachability issues early.
>
> **[3:18](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=198)** A few universal tips, document your VRF's, labels, and protocols, mistakes hiding complexity.
>
> **[3:27](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=207)** Test incrementally, verify each step like VRF routes or label paths before moving on, and use tools like traceroute VRF to pinpoint where things break.
>
> **[3:38](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=218)** That's a rundown of common L3VPN pitfalls, RT mismatch, label issues, routing missteps, and BGP hiccups and how to steer clear of them.
>
> **[3:51](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=231)** With these preventive measures, your VPNs will stay robust and reliable.
>
> **[3:56](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=236)** Next time, we will look ahead to the future of MPLS L3VPN.
>
> **[4:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=240)** See you then.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (7), [[Routing]] (3)
> **Env Vars:** mpls (7), vrf (6), bgp (5), l3vpn (4), ospf (4)
> **Versions:** 1.1.1 (1), 2.2.2 (1)
> **Ports:** port 179 (1)
> **Analogies:** imagine (1)
> **Warnings:** pitfall (1)
> **Speakers:** - [instructor] (1)

#### [The future of MPLS L3VPN: Trends and evolution](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=0)** - [Instructor] Welcome back to our [[Multiprotocol Label Switching (MPLS)|MPLS]] L3VPN exploration.
>
> **[0:04](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=4)** We have built L3VPNs, connected them across providers, integrated them with modern tech, and tackled common pitfalls.
>
> **[0:12](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=12)** Now, let's look ahead.
>
> **[0:15](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=15)** Today we are assessing the emerging trends, shaping the future of MPLS L3VPN, and how these technologies evolving in a fast changing networking world.
>
> **[0:26](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=26)** Well, let's dive into what's next.
>
> **[0:29](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=29)** First trend: Cloud and multi-cloud integration.
>
> **[0:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=35)** Enterprises are moving workloads to AWS [[Microsoft Azure|Azure]] and [[Google Cloud Platform (GCP)|Google Cloud]], often across multiple providers.
>
> **[0:42](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=42)** MPLS L3VPN is evolving to connect these cloud directly.
>
> **[0:48](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=48)** Think P routers peering with cloud gateways.
>
> **[0:51](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=51)** This keeps VPN isolation and QOS intact, extending the trusted MPLS backbone to virtual [[Private Clouds]].
>
> **[1:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=60)** Picture Customer Red sites on P1 and P2, now linked to a cloud VPC through the same layer 3VPN.
>
> **[1:08](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=68)** Providers are offering cloud connect services, blending MPLS reliability with cloud scale, a big shift from traditional site-to-site focus.
>
> **[1:19](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=79)** Next up, segment [[Routing]] and automation.
>
> **[1:22](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=82)** Segment routing or SR, is simplifying MPLS by replacing LDP with source base pass.
>
> **[1:29](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=89)** In an L3VPN, this means P routers can steer traffic with explicit label stacks, cutting complexity in the core.
>
> **[1:38](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=98)** Paired that with automation tools like SDN controllers are programming these pass dynamically.
>
> **[1:45](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=105)** Why does it matter?
>
> **[1:46](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=106)** It's faster to deploy, easier to manage, and supports [[Traffic Engineering]] without manual tweaks.
>
> **[1:53](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=113)** MPLS L3VPN is getting smarter and more [[Agile Development|agile]].
>
> **[1:58](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=118)** Third trend: Coexistence with [[5G]] and edge computing.
>
> **[2:03](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=123)** As 5G rolls out, it's bringing ultra low latency and massive bandwidth.
>
> **[2:09](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=129)** MPLS L3VPN is adapting to back haul 5G traffic from H sites like [[IoT]] hubs or retail locations to core data centers, keeping VPN security in play.
>
> **[2:22](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=142)** Edge computing pushes processing closer to users and MPLS ties it back to the enterprise VPN.
>
> **[2:30](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=150)** Providers are testing hybrid models where 5G supplements MPLS, not replace it, for a seamless edge-to-core experience.
>
> **[2:40](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=160)** Finally, the shift to intent-based networking, or IBN.
>
> **[2:45](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=165)** IBN lets you define what you want, like low-latency VPN for voice and the network figures out how.
>
> **[2:53](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=173)** MPLS L3VPN fits here as the underlay, with orchestration layers translating intents into VRFs, Labels and QOS policies.
>
> **[3:04](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=184)** This evolution makes MPLS less about manual config and more about business outcomes.
>
> **[3:10](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=190)** It's still the backbone, but with the brain on top, streamlining operations for complex VPNs.
>
> **[3:18](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=198)** So what's the big picture?
>
> **[3:20](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=200)** MPLS L3VPN isn't going away.
>
> **[3:23](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=203)** It's adapting.
>
> **[3:25](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=205)** Cloud integration extends its reach, segment routing simplifies it, 5G enhances its role, and IBN makes it smarter.
>
> **[3:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=215)** It's staying relevant by evolving with hybrid, automated, and edge driver networks.
>
> **[3:42](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=222)** That's the future of MPLS L3VPN, trends like cloud, SR, 5G and IBN are shaping its evolution.
>
> **[3:50](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=230)** We have assessed how it's staying ahead in a dynamic landscape.
>
> **[3:56](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=236)** Next time, we will wrap up with a course summary and your next steps.
>
> **[3:59](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=239)** See you then!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (14), [[5G]] (6), [[Routing]] (3), [[Microsoft Azure|Azure]] (1), [[Google Cloud Platform (GCP)|Google cloud]] (1)
> **Env Vars:** mpls (14), l3vpn (9), vpn (4), ibn (4), qos (2)
> **Analogies:** picture (2)
> **CLI Commands:** aws (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Course summary and next steps for learners](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=0)** - [Instructor] Welcome back to the final stop in our [[Multiprotocol Label Switching (MPLS)|MPLS]] L3VPN foundation and implementation journey.
>
> **[0:07](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=7)** We have covered a lot, from the basics of MPLS to advanced integrations and future trends.
>
> **[0:14](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=14)** Today, we are wrapping up with the core summary, recapping what we have learned, and mapping out your next steps as a networking pro.
>
> **[0:22](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=22)** Let's take a look back, and then look ahead.
>
> **[0:26](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=26)** We started with the foundations.
>
> **[0:28](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=28)** You got a handle on what MPLS is, label switching at its core and why Layer 3 VPNs matter for enterprises and providers.
>
> **[0:39](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=39)** We explored the benefits: Secure, scalable connectivity with QoS, perfect for linking customer sites.
>
> **[0:47](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=47)** Then, we dug into the architecture.
>
> **[0:49](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=49)** You learned about PE, CE, and P routers, label distribution protocols like LTP, and how packets flow with labels.
>
> **[0:59](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=59)** We introduced L3VPN concepts, VRFs, route distinguishers, and MP-BGP plus route targets for controlling route sharing.
>
> **[1:09](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=69)** Control plane versus data plane and common topologies like hub and spoke rounded out the basics.
>
> **[1:16](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=76)** Next, we moved to planning and deployment.
>
> **[1:18](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=78)** You saw how to address networks, scale VPNs, and secure them, plus ensure QoS for performance.
>
> **[1:26](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=86)** Then, came the hands-on part, a case study walking through VRF setup, MP-BGB configuration, CE to P [[Routing]] options, enabling MPLS in the provider core, and verifying it all with tests.
>
> **[1:41](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=101)** We finished strong in advanced topics.
>
> **[1:44](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=104)** You explored connecting L3VPNs across multiple providers, integrating with SD-WAN for hybrid networks, avoiding common pitfalls like route target mismatch, and assessing trends like cloud and segment routing, shaping the future.
>
> **[2:02](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=122)** So what have you gained?
>
> **[2:04](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=124)** You can now design, implement, and troubleshoot an MPLS L3VPN from scratch, whether it's a single-provider setup or a complex multi-AS deployment.
>
> **[2:15](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=135)** You are ready to blend it with modern tech and anticipate where it's headed.
>
> **[2:20](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=140)** That's a solid toolkit for any network engineer.
>
> **[2:24](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=144)** Now, where do you go from here?
>
> **[2:27](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=147)** First, practice what we have covered.
>
> **[2:29](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=149)** Set up a lab with P and C routers, tweak VRFs, and test connectivity.
>
> **[2:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=155)** Real-world experience cements these skills.
>
> **[2:38](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=158)** Then, take it further with related topics.
>
> **[2:41](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=161)** Here are some recommendations to level up.
>
> **[2:44](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=164)** Consider diving into MPLS L2VPN AToM any transport over MPLS for Layer 2 services like ethernet over MPLS.
>
> **[2:53](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=173)** Next, explore VPLS, virtual private LAN service to extend LANs across providers.
>
> **[3:01](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=181)** MPLS [[Traffic Engineering]] is another great pick.
>
> **[3:04](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=184)** Learn to optimize paths with RSVP for performance.
>
> **[3:08](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=188)** And don't miss [[MPLS Segment Routing]].
>
> **[3:11](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=191)** It's the future of simplified source drive and MPLS control.
>
> **[3:16](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=196)** These build on what you have mastered here, opening doors to broader MPLS expertise.
>
> **[3:23](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=203)** Whether you are aiming for service provider roles or enterprise network design, these skills keep you ahead.
>
> **[3:30](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=210)** Mix theory with hands-on labs, and you will be unstoppable.
>
> **[3:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=215)** That's our wrap-up.
>
> **[3:36](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=216)** We have journeyed from MPLS basics to L3VPN implementation and beyond.
>
> **[3:42](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=222)** You have got the foundation and the vision.
>
> **[3:44](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=224)** Now, it's time to apply it and grow.
>
> **[3:48](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=228)** Thanks for joining this course.
>
> **[3:50](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=230)** Go out there and shape the future of networking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Multiprotocol Label Switching (MPLS)|Mpls]] (13), [[Routing]] (3), [[Traffic Engineering]] (1)
> **Env Vars:** mpls (13), l3vpn (4), ltp (1), bgp (1), vrf (1)
> **Prerequisites:** setup (2), set up (1)
> **Tools:** atom (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Arash Deljoo]]

## Resources

- Exercise files available

## Skills Covered

- Virtual Private Network (VPN)
- Multiprotocol Label Switching (MPLS)

## Path Context

### In [[Mastering Multiprotocol Label Switching (MPLS)]]
← [[Mpls Foundations Getting Started With Mpls]] | **2 of 4** | [[MPLS- Traffic Engineering]] →

## Appears In

- [[Mastering Multiprotocol Label Switching (MPLS)]]

## Related Courses

_Courses sharing skills:_

- [[MPLS- Traffic Engineering]] — Multiprotocol Label Switching (MPLS)
- [[Mpls Foundations Getting Started With Mpls]] — Multiprotocol Label Switching (MPLS)

---

[↑ Back to top](#)