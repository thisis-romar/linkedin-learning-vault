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
  - '[Mastering Multiprotocol Label Switching (MPLS)](../../Paths/Network%20and%20System%20Administration/Learning%20Paths/Mastering%20Multiprotocol%20Label%20Switching%20(MPLS).md)'
prev_courses:
  - '[Mpls Foundations Getting Started With Mpls](Mpls%20Foundations%20Getting%20Started%20With%20Mpls.md)'
next_courses:
  - '[MPLS- Traffic Engineering](MPLS-%20Traffic%20Engineering.md)'
path_nav: '[{"path":"Mastering Multiprotocol Label Switching (MPLS)","position":2,"total":4,"prev":"Mpls Foundations Getting Started With Mpls","next":"MPLS- Traffic Engineering"}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - skill/virtual-private-network-vpn
  - skill/multiprotocol-label-switching-mpls
status: not-started
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-foundation-and-implementation?u=76281980&t=0)** - [Instructor] What if you could unlock the secret to building networks that power the world's biggest enterprises? Well, get ready, because that's exactly what we will cover in this course. This will be your launch into the heart of [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) Layer 3 VPNs that take that revolutionizing connectivity for businesses and providers alike. In this course, you will learn why MPLS and Layer 3 VPNs are the backbone of modern networks. You will master VRFs, build MPBGP like a pro and stitch together VPNs across providers. Hi, I am Arash Deljoo, your instructor and I have spent 20 years in the trenches of networking, building MPLS solutions, solving real world puzzles and teaching engineers how to own this take. So if you are ready to turbocharge your carrier, let's dive in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (3)
> **Env Vars:** mpls (3), mpbgp (1)
> **Speakers:** - [instructor] (1)


### 1. Introduction to MPLS and L3VPN

[↑ Back to Table of Contents](#table-of-contents)

#### [What is MPLS? Understanding the basics](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=0)** - [Arash] Welcome to the first video of our course, [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) layer three VPN foundation and implementation. I am Arash Deljoo, and today we are answering a key question. What is MPLS? By the end of this video, you will grasp the core concept of multi-protocol label switching and see how it boosts network efficiency. Let's dive in. Picture a traditional IP network. A packet hits the router and it digs into the [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) table to find the destination IP, like checking a map at every stop. This happens hop by hop, slowing things down in busy networks. That's where MPLS multi-protocol label switching steps in to streamline the process. Here is the core idea. MPLS attach a small label to packets as they enter the network. Instead of analyzing the full IP header, routers forward based on this label. Think of it as a VIP pass that speeds packets through. This label switching method is the heart of MPLS efficiency. Let's see it in action. With IP routing, every router does a lookup, time-consuming and resource-heavy. With MPLS, the entry router or label edge router LER assigns a label. Core routers called label switch routers LSR swap or remove labels without touching the IP header. The payoff, faster forwarding, less strain on routers.
>
> **[1:40](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=100)** Why multi-protocol? MPLS isn't picky. It works with IPv4, IPv6, ethernet, and more. This versatility lets it handle all kinds of traffic in one system. A big plus for today's diverse networks. Efficiency isn't just about the speed, it's about a smarter traffic flow. MPLS creates label-switched paths or LSPs, predefined routes that act like express lanes. These paths avoid congestion and ensure consistent performance, making MPLS perfect for solutions like layer three VPNs, which we will explore next. How does MPLS enhance efficiency? It cuts latency with quick label lookups, boosts throughput by easing router workload, and optimizes resources with [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) via LSPs. This combo makes MPLS a go-to for scalable, reliable networks, especially for layer three VPNs. To recap, MPLS uses labels to speed up packet forwarding, supports multiple protocols, and controls traffic with LSPs. It's the foundation for advanced networking, like layer three VPNs. In our next video, we will cover introduction to layer three VPNs L3VPN and their use cases, building on what we have learned here.
>
> **[3:16](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-is-mpls-understanding-the-basics?u=76281980&t=196)** If you are ready to keep going, I will see you in the next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (12), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (2), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (1)
> **Env Vars:** mpls (12), vpn (1), vip (1), ler (1), lsr (1)
> **Cross-References:** next video (1), in the next (1)
> **Analogies:** picture (1), think of it as (1)
> **CLI Commands:** find (1)
> **Speakers:** - [arash] (1)

#### [Introduction to Layer 3 VPNs (L3VPN) and their use cases](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=0)** - [Instructor] Welcome back to [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md), Layer 3 VPN Foundation and Implementation. In this second video, we are exploring introduction to Layer 3 VPNs, L3VPNs, and their use cases. By the end, you will know what L3VPNs are, why they matter, and where they shine in the real world. Let's jump in. So what's the purpose of a Layer 3 VPN? At its core, an L3VPN uses MPLS, [Multiprotocol Label Switching](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md), to create a [virtual private network](../../Skills/Network%20and%20System%20Administration/Virtual%20Private%20Network%20(VPN).md) at Layer 3, the IP layer. It allows multiple separate networks like branch offices or customer sites to connect securely over a shared infrastructure while keeping their IP traffic isolated. Think of it as private tunnels running through a public highway. Here is how it fits with MPLS. In our last video, we learned MPLS uses labels to forward packets efficiently. L3VPNs build on that by assigning unique labels to each customer's traffic. This way a service provider's network can carry data for multiple clients, say Company A and Company B, without their packets ever mixing, even if they use overlapping IP addresses. The magic happens with two key players, provider edge routers, or PEs,
>
> **[1:33](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=93)** and customer edge routers, or CEs. This CE sits at the customer site, like an [office](../../Skills/Web%20Development/Microsoft%20Office.md), connecting to the PE in the provider's MPLS network. The PE labels the traffic, routes it through the network, and ensures it treats the right destination CE. Its secure, scalable, and doesn't need dedicated lines. Now let's look at real world use cases. First up, connecting branch offices. Imagine a company with headquarters in New York and branches in London and Tokyo. An L3VPN links these sites over a provider's MPLS network, letting employees share resources, like a central database, securely and seamlessly, as if they are on one private LAN without the cost of lease lines. Second scenario, service providers supporting multiple customers. A telecom company can use L3VPNs to offer isolated networks to different clients, say a bank and a retail chain, over the same infrastructure. Each gets its own virtual IP network with no crosstalk, even if both use the same private IP range, like 10.0.0.0/24. Third use case, extranets for collaboration. Picture a manufacturer and its suppliers needing to share order data. An L3VPN can connect their network securely
>
> **[3:09](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-layer-3-vpns-l3vpn-and-their-use-cases?u=76281980&t=189)** over the internet or a provider backbone, allowing controlled access while keeping other traffic private. It's flexible and efficient for partnerships. To wrap up, L3VPN uses MPLS to deliver secure isolated Layer 3 VPN connectivity over a shared network, perfect for linking branches, serving multiple customers, or enabling collaboration. In our next video, we will dive into benefits of MPLS Layer 3 VPN for enterprises and service providers, why it's a win for both sides. If you are enjoying this journey, let's keep exploring together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (8), [Multiprotocol label switching](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (1), [Virtual private network](../../Skills/Network%20and%20System%20Administration/Virtual%20Private%20Network%20(VPN).md) (1), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1)
> **Env Vars:** mpls (8), vpn (4), l3vpn (4), lan (1)
> **Analogies:** think of it as (1), imagine (1), picture (1)
> **Versions:** 10.0.0 (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### [Benefits of MPLS L3VPN for enterprises and service providers](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=0)** - [Instructor] Welcome to the third video in the [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) Layer 3 VPN Foundation and Implementation course. Today's topic is benefits of MPLS Layer 3 VPN for enterprises and service providers. By the end, you will understand how MPLS Layer 3 VPN's daily standout advantages in a [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) and security for both sides. Let's dive into why this technology is a game changer. First, let's recap. MPLS Layer 3 VPNs use multi vertical label switching to create secure isolated IP networks over a shade infrastructure. We have seen what they are and where they are used. Now let's explore how they benefit enterprises running their operations and service providers managing customer networks. Starting with the scalability and area of MPS Layer 3 VPNs shine for enterprises. Imagine a business expanding from five offices to 50. With traditional VPNs like IPSec over the internet, each new site means more complex config and tunnels. MPLS Layer 3 VPNs simplify this. Enterprises connect new sites via customer age routers to the provider's MPLS network and the provider age routers handle the heavy lifting. Adding a site is as easy as linking to the existing label switched pots. No redesign needed.
>
> **[1:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=95)** For service providers, scalability is just as powerful. One MPS network can support thousands of customers each with their own Layer 3 VPN. Labels keep traffic separated so providers can onboard new clients, say a bank or a retailer without reconfiguring the core or worrying about IP overlaps. It's a scalable backbone that grows with demand, efficiently using resources. Now, security, a critical advantage for both. For enterprises, MPLS Layer 3 VPNs offer private networking without the public internet risks. Traffic stays within the provider's controlled MPLS domain isolated by labels. Unlike internet-based VPNs, there is no exposure to external threats like DDoS attacks. It's like having a dedicated line, but at a fraction of the cost and complexity. Service providers benefit too. L3VPNs ensure customer data stays separate. Company A's packet never mixed with company B's, even with identical IP range. This isolation is built into the MPLS architecture backed by robust [Routing Protocols](../../Skills/Network%20and%20System%20Administration/Routing%20Protocols.md) like BGP. Providers can guarantee security without managing encryption for each client, simplifying operations while
>
> **[3:09](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/benefits-of-mpls-l3vpn-for-enterprises-and-service-providers?u=76281980&t=189)** meeting a strict compliance needs. Put it together and MPS Layer 3 VPNs deliver a win-win. Enterprises get a scalable, secure network to grow without limits, perfect for global operations or remote workforces. Service providers gain a flexible, secure platform to serve more customers efficiently boosting revenue without overhauling infrastructure. It's scalability and security seamlessly integrated. To sum up MPLS Layer 3 VPNs offer enterprises a scalability to expand effortlessly and security to operate confidently. While service providers get a scalable, secure way to support countless clients. Next up, we will shift gears with overview of course objectives and target audience to map out what's ahead in this course. Stay tuned.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (10), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (5), [Routing Protocols](../../Skills/Network%20and%20System%20Administration/Routing%20Protocols.md) (1)
> **Env Vars:** mpls (10), vpn (4), mps (3), bgp (1)
> **Analogies:** imagine (1), it's like (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Overview of course objectives and target audience](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=0)** - [Lecturer] Welcome to this video in the [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) L3VPN Foundation and Implementation course. Today's topic is Overview of Course Objectives and Target Audience. By the end, you will recognize the goals of this course spanning MPLS and L3VPN from basics to advanced topics and assess if it meets your learning needs. Let's dive in. This course is built around five key areas, each designed to give you practical hands-on skills. Here's what we are aiming for, a clear path from understanding MPLS and L3VPN essentials to designing and implementing solutions all the way to mastering advanced concepts. First up, MPLS fundamentals. You will learn how [Multiprotocol Label Switching](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) works, labels, switching, and efficiency, laying the groundwork for everything else. Next, L3VPN core concepts. This covers what L3VPNs are, their purpose, and real-world use cases like connecting sites or isolating customers. Third, designing MPLS L3VPN. Here you will explore how to plan an L3VPN. Think topology, [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md), and [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) for enterprise or provider needs. Fourth, implementing MPLS L3VPN.
>
> **[1:34](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=94)** This is the hands-on part, configuring routers, setting up tunnels, and making it work. Finally, advanced topics and wrap up. You will dive into inter-AS L3VPN for connecting multiple providers, MPS L3VPN in modern networks with SD-WAN integration, common pitfalls and how to avoid them, and the future of MPLS L3VPN with trends and evolution, all tied together with practical insights. Who is this for? The target audience includes enterprise IT folks, like network engineers wanting to link offices or scale securely, and service provider technicians designing customer VPNs over MPLS. It's also great for certification candidates like those eyeing CCNA or CCMP or anyone keen on actionable networking skills. If you are after theory only, this isn't it. This course is scenario-driving and practical. Does this fit your needs? Consider this. Do you want to master MPLS basics and L3VPN design? Are you looking to implement and troubleshoot real solutions? If you are aiming to apply these skills in enterprise networks, provider environments, or certification prep, this course aligns perfectly. It's about building knowledge you can use step by step. The journey starts with fundamentals
>
> **[3:11](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/overview-of-course-objectives-and-target-audience?u=76281980&t=191)** and ends with advanced mastery. We are laying a strong base now, and the next step builds on that foundation. To wrap up, these course targets, MPLS fundamentals, L3VPN core concepts, designing and implementing L3VPNs and advanced topics. ideal for enterprise engineers, provider techs, and certification seekers. If that's your part, you are set. Next, we will explore the overview of MPLS architecture and components to dig into the technical core. See you there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (11), [Multiprotocol label switching](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (1), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1)
> **Env Vars:** l3vpn (12), mpls (11), mps (1), wan (1), ccna (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [lecturer] (1)


### 2. MPLS Fundamentals

[↑ Back to Table of Contents](#table-of-contents)

#### [MPLS architecture and components](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=0)** - [Lecturer] Welcome to the [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) fundamental section of the MPLS L3VPN Foundation and Implementation course. This is the first video, MPLS Architecture and Components. By the end, you will understand the structure of an MPLS network and how labels drive packets forwarding. Let's dive into the foundation of MPLS. MPLS, [Multiprotocol Label Switching](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md), revolves around peculiar architecture. It's split into two zones, the edge and the core. At the edge, we have routers that bring traffic in and out of the MPLS network. These are the entry and exit points. In the core, we have routers that handle traffic inside the network. Together they form a system designed for fast, efficient forwarding. Here is the breakdown. Edge routers, known as Label Edge Routers or LERs, sit at the network boundaries. They are the gatekeepers where traffic enters or leaves. Core routers, called Label Switch Routers or LSRs, sit inside connecting the edge. These components work together to create pods, called Label Switch Pods or LSPs, that guide traffic from one side to the other. The architecture hinges on these roles, LERs at the start and end, LSRs in between. Now, how do labels drive packet forwarding?
>
> **[1:37](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-architecture-and-components?u=76281980&t=97)** When a packet hits an LER at the network edge, it gets a label, a short tag that defines its path. This isn't about deep [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) decision, it's a simple instruction. The packet then travels through the core where LSRs read the label and forward it along the LSR. At each hub, the label keeps things moving fast. No complex lookups, just a quick check and send. At the final LER, the label job is done and the packet exits. The beauty of this setup is control and speed. LER decide the path upfront by adding labels and LSRs follow that plan, switching traffic along LSPs. The architecture, edge, and core, LERs and LSRs, makes this possible, turning a network into a streamlined highway. Labels are the drivers, steering packets exactly where they need to go without delay. To wrap up, MPLS architecture is built on LERs at the edge and LSRs in the core, forming LSPs. Labels drive forwarding by giving packets a fast, predefined route through the network. In the next video, Label Distribution Protocols, LDP and RSVP, explained. We will see how those labels get assigned. Stick around as we build on this foundation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (8), [Multiprotocol label switching](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (1), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** mpls (8), ler (3), l3vpn (1), lsr (1), ldp (1)
> **Cross-References:** in the next (1)
> **Definitions:** known as (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [lecturer] (1)

#### [Label distribution protocol (LDP) and resource reservation protocol (RSVP) explained](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=0)** - [Instructor] Welcome back to the [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) fundamentals section of the MPLS layer three VPN Foundation and Implementation course. This is the second video, Label Distribution Protocols: LDP and RSVP Explained. By the end, you will understand how LDP and RSVP defer and day roles in assigning labels in MPLS networks. Let's explore these protocols. In MPLS, labels steer packets, but how do routers know which labels to use? That's the job of label distribution protocols. Two key ones stand out. LDP, Label Distribution Protocol, and RSVP, Resource Reservation Protocol. They both assign labels, but they are built for different purposes. And in this course, we will focus on LDP for MPS layer three VPNs. First, LDP. It's simple and ties directly to IP [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md). NDP shares labels with neighboring routers based on the routing table. When a route is learned, a label is assigned and passed along. It's automatic and efficient, making it the go-to for applications like MPLS L3VPNs, which we are diving into in this course. LDP keeps label assignment straightforward for these setups. Next, RSVP. It's more complex originally for reserving bandwidth, and in MPLS it's tailored for [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md).
>
> **[1:38](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=98)** RSVP assigns labels for specific paths, not just IP routes. A router requests a path, say for low latency, and RSVP signals downstream to reserve resources and set labels. These control suites applications like MPLS traffic engineering, where precise routing matters. Here's the difference. LDP's purpose is simplicity. Label assignment follows IP hop by hop, perfect for MPS Layer three VPNs. RSVP's purpose is precision. Label assignment builds engineered paths end-to-end, ideal for MPLS traffic engineering. LDP's about connectivity, like linking VPN sites, while RSVP handles optimization, like ensuring QS4 video. In this course, LDP takes center stage and V build L3VPNs. Their roles? LDP automates label distribution for seamless network-wide use, powering L3VPNs with ease. RSVP crafts label assignment for tailored routes, driving traffic engineering with resource guarantees. Both get labels to routers, but LDP's efficiency fits our L3VPN focus, while RSVP's flexibility serves other MPLS needs. To wrap up, LDP and RSVP handle label assignment in MPLS.
>
> **[3:15](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/label-distribution-protocols-ldp-and-rsvp-explained?u=76281980&t=195)** LDP keeps its simple for layer three VPNs, which we will use here, while RSVP engineers paths for traffic engineering. Next, we will dive into MPLS packet flow and label switching to see those labels in action. Stay tuned as we move forward.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (11), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (5), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (3)
> **Env Vars:** ldp (13), rsvp (12), mpls (11), vpn (2), mps (2)
> **Speakers:** - [instructor] (1)

#### [MPLS packet flow and label switching](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=0)** - [Instructor] Welcome back to the [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) fundamental section of the MPLS Layer 3 VPN Foundation and Implementation course. This is the third video, "MPLS Packet Flow and Label Switching." By the end, you will be able to trace a packet's journey through an MPLS network and see how labels make it happen. Let's follow the pot. In an MPLS network, a packet's journey is all about labels. Let's trace it a step by step. Imagine a packet, say an IP packet, arriving at the network's edge. This is where it starts, and its trip through MPLS is a smooth label-driving right from entry to exit. Step one, the packet enters at an edge router. Here a label is pushed onto it. Think of it like attaching a shipping tag. This label isn't random. It's tied to a specific part the packet will follow. The edge router looks at the packet's destination, assigns the right label, and sends it into the network. This "push" marks the packet as MPLS ready. Step two, the packet hits a core router. Now label switching kicks in. The core router reads the label, not the IP header, and swaps it with a new one. This swap updates the tag to match the next leg of the journey. No deep analyzers, just a quick label check, a swap, and off it goes.
>
> **[1:36](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-packet-flow-and-label-switching?u=76281980&t=96)** This happens at each core router along the pass. Step three, the packet arrives at the exit edge router. Here the label is popped off, removed completely. The packet's journey through the MPLS network is done, and it's handed off as a regular IP packet again. The pop strips away the MPLS tag, letting the packet continue to its final destination outside the network. Let's see the whole flow. The packet enters, gets the label pushed at the edge, travels through the core with label swapped at each hop, and exits with the label popped off. This push, swap, pop sequence is the heartbeat of MPLS. It's fast because routers only handle labels, not IP lookups, keeping traffic moving smoothly along a set pass. To wrap up, a packet's journey through an MPLS network starts with a label push, flows through swaps in the core, and ends with the pop at exit. That's how label switching drives it from edge to edge. Next, we will dive into understanding MPLS terminology, PE, CE, P routers, to name the players in this process. And stay tuned as we keep building.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (12)
> **Env Vars:** mpls (12), vpn (1)
> **Analogies:** imagine (1), think of it like (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Understanding MPLS terminology (PE, CE, P routers)](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=0)** - [Instructor] Welcome back to the [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) Fundamentals section of the MPLS L3VPN Foundation and Implementation course. This is the fourth video, Understanding MPLS Terminology: PE, CE, P routers. By the end, you will know the key roles PE, CE, and P routers play in an MPLS network. Let's define these terms and see where they fit. MPLS networks involve two worlds, the customer's network, and the provider's network. Three router roles, CE, PE, and P make it all work. Each has a specific job, and understanding them is key to grasping how MPLS operates, especially for Layer 3 VPNs. First, the CE router, Customer Edge. This sits at the customer site, like an [office](../../Skills/Web%20Development/Microsoft%20Office.md) or branch. It's the customer's gateway to the MPLS network, connecting their local network to the provider's infrastructure. The CE doesn't deal with MPLS labels. It's all about sending and receiving regular packets, typically IP, to and from the provider. Next, the PE router, Provider Edge. This slaves on the provider site, right at the boundary with the customer. The PE is the MPLS' brains. It's where labels come into play. It connects to CE routers, assign labels to incoming packets and removes them for outgoing ones.
>
> **[1:34](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/understanding-mpls-terminology-pe-ce-p-routers?u=76281980&t=94)** For Layer 3 VPNs, the PE also manages customer [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) info, keeping each customer's traffic separate. Finally, the P router, Provider router. These are the core workhorses inside the provider's network. P routers don't touch customer aids. They link peer routers together. Their job is pure label switching. They read labels on packets, swap them as needed, and forward them along the pod. They don't care about customer data, just efficient movement. Put them together. CE routers sit at customer sites, passing packets to PE routers. PE sit at the provider's edge, handling labels and customer separation. P routers form the provider's core, switching labeled packets between Ps. These roles, CE, PE, P, define who does what in an MPLS network, setting the stage for services like Layer 3 VPNs. To sum up CE routers are the customer's entry point. PE routers are the provider's label managers at the edge, and P routers are the core label structures. That's the MPLS team. Next, we will explore introduction to MPLS L3VPN concepts to see how these setup stacks up. Stay tuned as we keep going.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (12), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** mpls (12), l3vpn (2)
> **CLI Commands:** make (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Introduction to MPLS L3VPN concepts](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=1)** - [Instructor] Welcome back to the [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) Fundamental Section of the MPLS Layer 3VPN Foundation and Implementation Course. This is the final video introduction to MPLS L3VPN concepts. By the end, you will understand how MPLS enables Layer 3 VPNs, focusing on customer isolation and how labels keep VPNs separate. Let's tie it all together. MPLS is powerful, but its real magic shines in services like Layer 3 VPNs, or L3VPNs. These let multiple customers share a provider's network while keeping their traffic private, as if each has their own network. How does MPLS make this happen? It's all about leveraging labels and smart [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md). Let start with customer isolation. Imagine two companies, Customer A and Customer B, both using the same private type range, like 10.0.0.0/24. In a regular network, that's a problem. Traffic with mix. MPLS solves this by isolating each customer's data. At the provider's edge, each customer's traffic gets its own [virtual private network](../../Skills/Network%20and%20System%20Administration/Virtual%20Private%20Network%20(VPN).md) or VPN, so there is no overlap, no confusion. Labels are the key. When a customer's packet enters the MPLS networks, it's tagged with the label. Not just for the path, but for the VPN it belongs to. This VPN label identifies which customer the packet is for. As it moves through the network, routers use these labels
>
> **[1:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/introduction-to-mpls-l3vpn-concepts?u=76281980&t=95)** to keep Customer A's traffic separate from Customer B's, even on the same infrastructure. It's like private links on a shared highway. Here is the trick. MPLS L3VPN often uses label stacking. One label directs the packet along the network path, while another, the VPN label marks it for a specific customer. This dual label system ensures isolation end to end. The provider's core switch based on the path label. And the edge uses the VPN label to delivery to the right customer. No mixing, no leaks. To sum up, MPLS enables L3VPNs by isolating customer traffic with labels. VPN labels separate each customer's data, letting them share the network securely. Next, we will dive into the MPLS L3VPN core concept section to explore the details. Stay tuned as we level up.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (11), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1), [Virtual private network](../../Skills/Network%20and%20System%20Administration/Virtual%20Private%20Network%20(VPN).md) (1)
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
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=0)** - [Instructor] Welcome to the [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) L3VPN core concept section of the MPLS L3VPN Foundation and Implementation course. This is the first video. What makes L3VPN unique? VRF and route distinguishers? By the end, you will understand how VFS and RDs-enable isolated [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) in L3VPNs. Let's kick things off. L3VPNs layer three virtual private networks are special because they let multiple customers share an MPLS network while keeping their routing completely separate. Imagine two companies using the same IP addresses, like 10.0.0.0/24 without any mix up. That's the power of isolated routing, and it's made possible by two key players, VRFs and route distinguishers. First up, VRFs, virtual routing and forwarding instances. These live on the provider's age routers. Think of a VRF as a private routing table one for each customer. Instead of one big table mixing everyone's routes, each VRF keeps a customer's routing info isolated customer A's routes go in one VRF, customer B's in another. This separation ensures no overlap even with identical IPs. Why does this matter?
>
> **[1:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=95)** Without VRFs, a router seeing 10.0.0.1 from two customers wouldn't know where to send it. Chaos. With VRFs, each customer's traffic stays in its own sandbox. The provider edge router uses these tables to forward packets only to the right customer, keeping everything clean and private. Now, route distinguishers, RDs. VRFs isolate locally, but across the network, routes need to be unique. And RD is a prefix added to each customer's IP route. Like a tag. For example, customer A's 10.0.0 might become 1:100:10.0.0.0, while customer bees become 1:200:10.0.0.0. This makes them distinct even if the IPs match, so they can travel the MPLS network without clashing. Here is how they team up. VRFs on each age router manage local isolation, separating customer routes. All these make these routes globally unique so they can be shared across the providers network. Together they let MPLS handle multiple private networks on one backbone, delivering the isolated routing that defines L3VPNs. To wrap up, VRFs create separate routing tables
>
> **[3:10](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/what-makes-l3vpn-unique-vrfs-and-route-distinguishers?u=76281980&t=190)** for each customer, and RDs tag routes to keep them unique network wide. Each VRF is defined with a unique RD, ensuring total isolation. That's how MPLS enables isolated routing in L3VPNs. Next, we will dive into the role of MP-BGP in L3VPN to see how these routes get shared. Stay tuned as we dig deeper.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (9), [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (6)
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
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=0)** - [Instructor] Welcome back to the [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) L3VPN core concept section of the MPLS L3VPN Foundation and Implementation course. This is the second video, the role of MP-BGP in L3VPN. By the end, you will understand how MP-BGP distributes VPN routes across networks. Let's get into it. In L3VPNs, customer routes need to travel across the provider's MPLS network securely and separately. That's where MP-BGP comes in. Multi-protocol BGP isn't just regular BGP. It's the glue that ties the whole L3VPN together, making sure every router knows where to send each customer's traffic. So what does MP-BGP do? It distributes VPN routes between provider edge routers, PEs across the network. Each PE holds customer routes in its own virtual [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) tables. MP-BGP takes those routes, package them with special attributes and shares them with other PEs. This way, every PE learns how to reach every customer site no matter where it is. How does it work? MP-BGP uses a format called VPNv4, or VPN IPv4 routes. These aren't plain IP routes. They combine a customer's IP prefix with a unique tag from the last video making them VPN specific. For example, 10.0.0.0 becomes 1:100.10.0.0.0.
>
> **[1:41](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/the-role-of-mp-bgp-in-l3vpn?u=76281980&t=101)** This VPNv4 address tells the network which customer it belongs to, keeping route distinct as they are shared. Here is the process. A PE learns a route from a customer site, say via a local connection. MP-BGP grabs that route, adds the VPNv4 tag and an MPLS label, then sends it to other PEs over a BGP session. Those PEs receive it and store it in their own tables and use the label to forward traffic later. It's like a postal service. MP-BGP delivers the address book across the network. Why MP-BGP? Regular BGP can't handle multiple customers with overlapping IPs. It's built for one internet. MP-BGP's multiprotocol power supports these VPMv4 routes, scaling across the MPLS backbone. It ensures every PE has the full map of VPN routes, enabling isolated end-to-end connectivity for every customer. To sum up, MP-BGP distributes VPN routes by sharing VPNv4 addresses and labels between PEs, connecting customer sites across the network. It's the backbone of L3VPN routing. Next, we will explore road targets, importing and exporting routes to see how PEs decide which routes to use. Stay tuned as we build on this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (5), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (2)
> **Env Vars:** bgp (15), vpn (6), mpls (5), l3vpn (5)
> **Versions:** 10.0.0 (1), 100.10.0 (1), 0.0 (1)
> **Analogies:** for example (1), it's like (1)
> **Ports:** :100 (1)
> **Speakers:** - [instructor] (1)

#### [Route targets: Importing and exporting routes](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=0)** - [Instructor] Welcome back to the [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) L3VPN Core Concept section of the MPLS L3VPN Foundation and Implementation course. In L3VPNs, customer routes don't just spread everywhere. Route targets or RTs decide who gets what. These tags are set on each virtual [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) table or each VRF on provider edge routers. Every VRF has both an export RT and an import RT, and they work together to control how routes are shared across the network. First, export route target. This is a tech assigned to a VRF, like 1:100, that gets attached to every route that VRF sends out. When a PE learns a customer route, say 10.0.0.0, it tags it with the export RT before MP-BGP shares it. The export RT's role is to label the route saying, "This belongs to VPN A," so other routers know its group. Next, the import route target. This is a tag on a VRF, like 1:100, that tells it which routes to accept. When MP-BGP delivers a route tag with RT 1:100, the PE checks its import RT. If they match, the route joins that VRF stable. The import RT's role is to filter. It grabs only the routes meant for each VPN, ignoring the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md).
>
> **[1:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=95)** Here's how it plays out. Each VRF has its own export and import RTs. VPN A's VRF might use RT 1:100 for both, exporting routes with RT 1:100 and importing only RT 1:100 routes. VPN B's VRF uses RT 1:200, keeping its route separate. A route from VPN A tagged RT 1:100 won't enter VPN B's VRF. It's filtered out by the import RT mismatch. This gives you control. A VRF can export with multiple RTs, like RT 1:100 and RT 1:300, to reach different VPNs or import several RTs to pull in routes from multiple sources. The export RT tags outgoing routes. They import RT decide what comes in. Together, they shape VPN connectivity. To wrap up, route targets control route sharing in L3VPNs. Each VRF has an export RT to tag its routes and an import RT to filter incoming ones, deciding who connects to whom. Now are RDs versus RTs? RDs make route unique across the network, like an ID, while RTs decide where those routes go, like a delivery rule. Next, we will explore control plane versus data plane
>
> **[3:09](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/route-targets-importing-and-exporting-routes?u=76281980&t=189)** in L3VPN to see how this fits into the bigger picture. And stay tuned as we keep rolling.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (2), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
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
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=0)** - [Instructor] Welcome back to the [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) L3VPN core concept section of the MPLS L3VPN Foundation and Implementation course. This is the fourth video, Control Plane vs. Data Plane in L3VPN. By the end, you will be able to distinguish between control and data plane operations in L3VPNs. Let's break it down. In L3VPNs, everything a router does it splits into two worlds, the control plane and the data plane. The control plane is the brains. It figures out how traffic should flow. The data plane is the muscle. It moves the packets. Together, they make L3VPNs work, but their job are distinct. First, the control plane. This is where [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) information gets built and shared. On provider edge routers, the control plane uses MP-BGP to exchange VPN routes. Those tagged addresses we have talked about. It's all about learning, figuring out where customer sites are and storing that info in virtual routing tables. The control plane sets the map. Now the data plane. This is where the action happens. Actual packets forwarding. When a customer packet hits the PE, the data plane looks at its label, not the full roadmap. It pushes, swaps, or pops labels to send the packet along the MPLS pass
>
> **[1:33](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/control-plane-vs-data-plane-in-l3vpn?u=76281980&t=93)** from ingress to egress. The data plane follows the control planes plan, moving traffic fast. Here is how they defer. The control plane operates before traffic flows. It's the setup phase. It uses protocols like MP-BGP to share roads and build forwarding tables. The data plane kicks in during traffic flow. It's the execution phase using those tables to switch labeled packets across the network. One plans, the other delivers. Picture this. A PE learns the customer route via the control plane and shares it. That's the brain network. Later a packet arrives. The data plane grabs the label, switch it through the core and sends it out. That's the muscle in Layer 3 VPNs, this split keeps routing smart and forwarding fast. To wrap up the control plane builds the routing plan with MP-BGP and tables, while the data plane executes it by switching labeled packets. That's the split that powers L3VPNs. Next, we will explore common L3VPN topologies, hub-and-spoke, full [Mesh](../../Skills/Software%20Development/Mesh.md) to see how this plays out in real designs. Stay tuned as we keep going.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (4), [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (3), [Mesh](../../Skills/Software%20Development/Mesh.md) (1)
> **Env Vars:** l3vpn (4), mpls (3), bgp (3), vpn (1)
> **CLI Commands:** make (1)
> **Analogies:** picture (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Common L3VPN topologies (hub-and-spoke, full mesh)](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=0)** - [Instructor] 0305 Common L3VPN Topologies: Hub-and-Spoke Full [Mesh](../../Skills/Software%20Development/Mesh.md). Welcome back to the [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) L3VPN core concept section of the MPLS-L3VPN Foundation and Implementation course. This is the final video of Common L3VPN Topologies: Hub-and-Spoke Full Mesh. By the end, you will be able to identify and compare hub-and-spoke and full mesh L3VPN designs. Let's wrap up this section. L3VPNs connect customer sites across an MPLS network. But how do sites link up depend on the topology. Two common designs, stand out, hub-and-spoke and full mesh. Each has its own layout, strengths and use cases. Let's see what makes them tick. First, hub-and-spoke picture reveal one central site, the hub, connects to all other sites, the spokes. In L3VPNs, the hub is a provider edge router linking to a spoke piece each tied to a customer site. Traffic flows through the hub. Spokes talk to the hub, and the hub relates to other spokes. It's centralized, simple to manage, but reliant on that hub. Now full mesh. Imagine every site connected to every other site directly. No middleman. In L3VPNs, each provider age router appears with all others. Forming a web of direct links. Traffic flows straight from one site to another.
>
> **[1:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-l3vpn-topologies-hub-and-spoke-full-mesh?u=76281980&t=95)** No detours. It's fully connected. Great for direct communication, but trickier to scale. Let's compare them connectivity. Hub-and-spoke has one to hub links. Spokes don't talk directly. Full mesh has all to all links, every site's connected. Complexity, hub-and-spoke is simpler with fewer roads to manage. Full mesh is complex, needing more [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) configure size grow. The use case. Hub-and-spoke fit centralized setups like head [office](../../Skills/Web%20Development/Microsoft%20Office.md) with branches. Full mesh treats peer-to-peer needs, like equal size sharing data. Here's the difference in action. In hub-and-spoke a branch sends data to the hub, which forwards it to another branch, controlled but hub-dependent. In full mesh, sites sends directly to each other. Fast, but resource-heavy. Both use L3VPN tools like raw targets to shape these designs. But the topology sets the flow, To wrap up, hub-and-spoke centralizes traffic through a hub. Simple but limited. Full mesh connects everyone directly. Flexible but complex. That's how L3VPN topologies differ. Next, we will start designing MPLS L3VPN section to put this into practice and stay tuned as we move forward.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mesh](../../Skills/Software%20Development/Mesh.md) (10), [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (4), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1)
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
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=0)** - [Presenter] Welcome to the designing [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) L3VPN section of the MPLS L3VPN Foundation and Implementation course. This is the first video, planning an MPLS L3VPN deployment. By the end, you will be able to outline the steps to plan an effective L3VPN deployment. Let's get it started. Deploying an L3VPN isn't just about tech, it's about planning smartly. A solid plan ensures customer size connect securely and efficiently over an MPLS network. There are key steps to make this happen, from understanding needs to testing the setup. Step one, assess requirements. Start by gathering what the customer needs, how many sites, what kind of traffic and connectivity goals. Are they looking for centralized access or site to site links. This shapes the topology and sit scope, giving you a clear target to aim for. Step two, design the network layout. Map out the provider age routers, PEs, and core routers PEs that will carry the VPN. Decide where PEs sit to connect customer sites and how the core links them. This is about placing pieces on the board. Topology comes later, but the backbone starts here. Step three, plan VRF and road target structure. Each customer gets virtual [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) tables, VRFs and PEs. Outline how many RFS you will need
>
> **[1:34](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/planning-an-mpls-l3vpn-deployment?u=76281980&t=94)** and sketch initial road targets to control road sharing. This keeps traffic isolated and connected as intended. Details like address and income next. Step four, define implementation and testing. Break it into phases, configure the PEs and core, then test connectivity between sites. Check that routes propagate and traffic flows as planned. This step ensures the plan turns into a working deployment without surprises. Put it together. Assess needs to set goals. Design the layout for coverage, plan VRFs and road targets for isolation, and schedule config and testing for success. These steps build the roadmap, specifics like addressing or scaling come later, but this is the foundation. To wrap up. Planning an L3VPN deployment means assessing requirements, designing the network layout, structuring VRFs and road targets, and defining implementation steps. That's your blueprint. Next, we will dive into addressing our routing consideration to flesh this out. And stay tuned as we keep building.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (4), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (2)
> **Env Vars:** l3vpn (6), mpls (4), vpn (1), vrf (1), rfs (1)
> **Prerequisites:** setup (1), configure (1)
> **CLI Commands:** make (1)
> **Speakers:** - [presenter] (1)

#### [Addressing and routing considerations](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=0)** - [Instructor] Welcome back to the designing [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) L3VPN section of the MPLS L3VPN Foundation and Implementation course. This is the second video, "Addressing and [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) Considerations." By the end, you will understand how to tackle IP overlap and routing challenges in L3VPN design. Let's jump in. L3VPNs connect customer size over a shared MPLS network, but here's the catch. Customers often use the same private IP addresses, like 10.0.0.0/24. That's IP overlap. Add routing into the mix, and you have got challenges to solve. Let's break down how to handle both. First, IP overlap. Imagine two customers, VPN A and VPN B, both using 10.0.0.1 for their sites. In a regular network, that's a conflate. Traffic will collide. L3 VPNs fix this with virtual routing tables on provider edge routers. Each customer gets its own VRF, so 10.0.0.1 in VPN A stays separate from 10.0.0.1 in VPN B, no overlap, no problem. But overlap isn't just local, it's network-wide. Inter route distinguishers. An RD tags each customer's route, like 1:100 for VPN A and 1:200 for VPN B, turning 10.0.0.0 into a unique VPN B4 addresses.
>
> **[1:38](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/addressing-and-routing-considerations?u=76281980&t=98)** This lets MP-BGP share them across the network without confusion, keeping addressing clean between PEs. Now routing challenges. Each customer site connects to a PE via a customer edge router, a CE. You need a routing protocol, like BGP, OSPF, or static routes to exchange routes between the CE and PE. The challenge? Picking the right one. BGP scales well but needs config. OSPF is simpler but less flexible. Match it to the customer setup. Another routing hurdle, redistribution. Customer routes enter the PE's VRF, then get sent network-wide via MP-BGP. If a customer uses overlapping subnets like 10.0.0.0/24 in two sites, you must ensure routes stay distinct with RD, and don't look back. Careful planning keeps traffic flowing right, avoiding routing chaos. To wrap up, IP overlap is managed with VRFs locally and RDs network wide, while routing challenges hinges on choosing protocols and handling redistribution. That's how you design addressing and routing in L3 VPNs. Next, we will explore scaling L3VPN, best practices and limitations to take this further. And stay tuned as we keep going.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (10), [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (3)
> **Env Vars:** vpn (7), l3vpn (4), bgp (4), mpls (3), vrf (2)
> **Versions:** 10.0.0 (6)
> **Ports:** :100 (1), :200 (1)
> **Analogies:** imagine (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Scaling L3VPN: Best practices and limitations](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=0)** - [Instructor] Welcome back to the designing [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) L3VPN section of the MPLS L3VPN Foundation and Implementation course. This is the third video, scaling L3VPN best practices and limitations. By the end, you will know how to apply best practices to scale L3VPNs and recognize their limits. Let's scale it up. L3VPNs start small, but as customers add size or providers grow, scalings becomes key. Scaling means handling more VPNs, routes and traffic without breaking a sweat. Best practices keep it smooth, but limits are real. Let's explore both. Best practice one, summarize routes. On provider age routers, group customer routes into bigger blocks, like turning 10.10.0.X.0/24s into one 10.0.0.0/16. This cuts the number of routes MPBGP shares across the network, easing the load on PEs and core routers. A smaller tables foster performance. Best practice two, use route reflectors. Instead of every PE talking to every other PE, a route reflector handles VPN route distribution. This reduces the number of MPBGP stations required. Instead of many direct links,
>
> **[1:33](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=93)** you only need a few via the route reflector. It acts as a hub for control plane traffic, keeping PEs provider age routers lean and as scalable as VPNs grow. Now their limits. One big constraint is PE capacity. Each PE managed VRFs and routes. Add too many and memory CPU maxes out. A single PE might handle 1,000 VRFs or 100,000 routes before slowing down. [Hardware](../../Topics/Hardware.md) matters, and you can't push past it without upgrades. Another limit, core [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md). As VPNs multiply, so do labels and traffic in the MPLS core. P routers can hit a ceiling, say millions of labels, before forwarding lags. Plus, full [Mesh](../../Skills/Software%20Development/Mesh.md) designs exploding complexity with more sites. Scaling up means watching the core, not just the edge. Put it together. Summarize routes to shrink tables. Use reflectors to cut sessions. These scale L3VPNs efficiently, but limits like P capacity and core load cap how far you go. Balance the practices with the constraints, and you have got a scalable design. To wrap up, scale L3VPNs with road summarization and route reflectors for efficiency, but recognize limit like PE capacity and core scalability. That's your scaling toolkit.
>
> **[3:08](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/scaling-l3vpn-best-practices-and-limitations?u=76281980&t=188)** Next, we will dive into security features in MPLS L3VPN to lock it down. Stay tuned as we keep rolling.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (4), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (2), [Hardware](../../Topics/Hardware.md) (1), [Mesh](../../Skills/Software%20Development/Mesh.md) (1)
> **Env Vars:** mpls (4), l3vpn (4), mpbgp (2), vpn (1), cpu (1)
> **Versions:** 10.10.0 (1), 10.0.0 (1)
> **Best Practices:** best practice (2)
> **Speakers:** - [instructor] (1)

#### [Security features in MPLS L3VPN](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=0)** - [Instructor] Welcome back to the Designing [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) L3VPN section of the MPLS L3VPN Foundation and Implementation course. This is the fourth video, Security Features in MPLS L3VPN. By the end, you will explore how MPLS L3VPN ensure secure data transmission. Let's lock it down. L3 VPNs carry sensitive customer data over a shared MPLS network, so security is critical. The good news? MPLS L3VPN has built-in features to keep data private and safe without needing extra encryption. Let's see how it works. First up, traffic isolation. Each customer's data stays in its own virtual [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) table, a VRF, and provider edge routers. VPN A's traffic can't leak into VPN B's, even if they share the same network. This separation is hardwired into the design. Labels and VRFs act like walls, keeping data apart. Next, label-based forwarding. In the MPLS core, packets travel with labels, not IP headers exposed. Core routers only see the outer label and switch sheet, never picking at the customer's IP data. This obscurity adds a layer of protection. Outsiders can't sniff or target specific IPs from the core. Another feature, limited exposure.
>
> **[1:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/security-features-in-mpls-l3vpn?u=76281980&t=95)** Customer sites connect only to their P router, not the provider's core. The core doesn't run customer [Routing Protocols](../../Skills/Network%20and%20System%20Administration/Routing%20Protocols.md) or hold customer routes. It's just a transit path. This means no direct access points for attackers to exploit across the network. Then there is control plane security. MPGBP shares VPN routes between PEs, but it's locked down with VPN v4 addresses and route targets. Only authorized PEs get the routes they need. Random routers can't join in or see the data. It's a closed system, keeping route info safe. Put it together. VRFs isolate traffic. Labels height payloads. Limited exposure shields the core, and MPBGP secures route sharing. Together, these features ensure customer data stays private and untouchable as it crosses the MPLS network. No leaks, no intrusions. To wrap up, MPLS L3VPN ensure secure data transmission with isolation via VRF's label obsurity, limited access, and the locked-down control plane. That's your security foundation. Next, we will explore QoS in MPLS L3VPN, ensuring performance to keep it running smoothly. Stay tuned as we wrap this section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (10), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1), [Routing Protocols](../../Skills/Network%20and%20System%20Administration/Routing%20Protocols.md) (1)
> **Env Vars:** mpls (10), l3vpn (7), vpn (4), vrf (2), mpgbp (1)
> **Speakers:** - [instructor] (1)

#### [Quality of service (QoS) in MPLS L3VPN: Ensuring performance](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=0)** - [Lecturer] Welcome back to the Designing [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) L3VPN section of the MPLS L3VPN Foundation and Implementation course. This is the final video, QoS in MPLS L3VPN: Ensuring Performance. By the end, you will know how to implement QoS to prioritize traffic in an MPLS L3VPN. Let's wrap this section up. In an L3VPN, customer traffic, voice, video, data, shares the same MPLS network. Without control, critical traffic could lack. Quality of Service, QoS, steps in to prioritize what matters, ensuring performance across the VPN. Let's see how to make it happen. Step one, classify and mark traffic. At the provider edge, PE routers identify traffic types from customer sites like voice or buck data, mark them with QoS labels like the MPLS EXP bits, set voice to higher priority, say EXP five, and data to lower like EXP one. These tests packets for special treatment. Step two, queue and prioritize. Across the MPLS network, PEs and co-routers set up queues based on those markings. High-priority queues, like for voice, gets served first, ensuring low delay. Low-priority queues, like for data, wait if needed.
>
> **[1:34](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=94)** It's like a fast lane for critical traffic. Step three, shape and police. To avoid congestion, limit how much traffic enters each queue, shaped by smoothing bursts. Say, cap data at 10 megabit per second, or police by dropping excess packets. This keeps the network stable so prioritized traffic gets through without choking the pipes. Here's how it ties together. Mark traffic at the PE to flag priorities. Queue it across the network to favor critical flows. And shape or police to manage bandwidth. The NPLS labels carry these QoS sitting end-to-end, so voice stays crisp and data doesn't clog the VPN. In action, a voice call gets marked high priority, zips through fast queues, and shape to fit bandwidth crystal clear. A file transfer marked lower takes a slow lane but still completes. QoS balances the load, ensuring performance for all VPN traffic types. To wrap up, implement QoS in MPLS L3VPN by classifying and marking traffic, prioritizing the queues, and shaping or policing bandwidth. That's how you ensure performance. Next, we will start implementing MPLS L3VPN section to bring it all to life.
>
> **[3:06](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/qos-in-mpls-l3vpn-ensuring-performance?u=76281980&t=186)** Stay tuned as we move ahead.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (9)
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
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=0)** - [Instructor] Welcome to the implementing [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) L3VPN section of the "MPLS L3VPN Foundation and Implementation" course. This is the first video, "Case Study: Step-by-Step L3VPN Deployment." By the end, you will understand our case study scenario and see the basic set up inside the provider network. Let's lay the groundwork. This case study walks through deploying an L3VPN step-by-step. Our provider network has four routers, PE1, P1, P2, and PE2. We have got two customers, Customer Red and Customer Blue, each with two sites. PE1 connects to Site A of Red and Blue. PE2 connects to Site B of Red and Blue. The goal. Connects Red's Site A to Site B and Blue's Site A to Site B with traffic separated. Here is the setup. Red Site A has a PC, Red Site B has a server. Same for Blue, a PC at Site A and a server at Site B. We will build an L3VPN so Red's PC pings its server, Blue's PC pings its server, and their traffic stays apart. This video sets the provider's foundation, [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md), and IGP before we dive into L3VPN configs. First, IP addressing in the provider core.
>
> **[1:33](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=93)** On PE1, the link to P1 uses gigabit ethernet 0/0. Set IP address 10.0.12.1 255.255.255.252. On P1 site, gigabit 0/0 gets 10.0.12.2/30. This point-to-point links kicks off our backbone. We will use 10.0.X.X for all core links. Next links, P1 to P2. Use gigabit ethernet 0/1 on P1 be 10.0.23.1/30 and gigabit ethernet 0/0 on P2 be 10.0.23.2/30. Then, P2 to PE2, gigabit ethernet 0/1 on P2 gets 10.0.34.1/30, and gigabit ethernet 0/0 on PE2 gets 10.0.34.2/30. Loopbacks for router IDs. PE1 at 10.0.1.1/32, P1 at 10.0.2.2/32, P2 at 10.0.3.3/32, PE2 at 10.0.4.4/32. Now, the IGP. Let's use OSPF. On each router, enable OSPF via router ospf 1. Add all interfaces with network 10.0.0.0 0.0.255.255 area zero.
>
> **[3:10](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/case-study-step-by-step-l3vpn-deployment?u=76281980&t=190)** Add loopbacks like network 10.0.1.1 0.0.0.0 area 0 on PE1. This gets the core talking, PE1 to PE2 via P1 and P2, ready for MPLS later. Here's where we are at. The provider called PE1, P1, P2, PE2 has IPs and OSPF of running. PE1 to P1 is 10.0.12.0/30. P1 to P2 is 10.0.23.0/30. P2 to PE2 is 10.0.34.0/30. Customer sites are wired, Red A and Blue A to PE1, Red B and Blue B to PE2, but not configured yet. That's next. To wrap up, our case study has PE1 to PE2 via P1 and P2, with IPs and OSPF set for the core. Red and Blue Sites are in place, ready for L3VPN to connect A to B securely. Next, we will dive into configuring VRFs on PE routers to start the VPN build. Stay tuned as we roll it out.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (3), [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) (2)
> **Env Vars:** pe1 (10), pe2 (10), l3vpn (7), ospf (4), mpls (3)
> **Versions:** 10.0.12 (3), 10.0.23 (3), 10.0.34 (3), 10.0.1 (2), 255.255.255 (1)
> **Prerequisites:** set up (1), setup (1)
> **Speakers:** - [instructor] (1)

#### [Configuring VRFs on PE routers](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=0)** - [Instructor] Welcome back to the implementing [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) L3VPN section of the MPLS L3VPN Foundation and Implementation course. This is the second video, Configuring VRFs on PE Routers. By the end, you will know how to configure VRFs on PE routers to isolate customer traffic, including route targets and [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) for our case study devices. Let's get started. We are building on our case study PE1, P1, P2, and PE2 from the provider core. For customer Red, it's PC to CE to PE1, through P1 and P2, then PE2 to CE to server. Customer Blue follows the same, PC to CE to PE1 to P2 to CE to server. We will configure VRFs with route targets and IPs on PE1 and PE2 to isolate Red and Blue traffic, PC to server for each. Step one, create VRFs with route targets on PE1. For customer Red, type ip vrf RED, set rd 1:1. for the route distinguisher, and add route-target both 1:1. These exports and imports RT 1:1 to share Red's routes. For customer Blue, use ip vrf BLUE,
>
> **[1:34](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=94)** rd 2:2, and route-target both 2:2. These VRFs isolate traffic and prepare for route exchange. Step two, configure PE1-to-CE interfaces. For Red, on GigabitEthernet0/1, enter ip vrf forwarding RED, then ip address 172.16.1.1. 255.255.255.0.
>
> **[2:08](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=128)** Red CE GigabitEthernet0/0 to PE1 is 172.16.1.2/24.
>
> **[2:17](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=137)** GigabitEthernet0/1 to the PC is 192.168.1.1/24.
>
> **[2:25](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=145)** PC at 192.168.1.10/24. For Blue, PE1 GigabitEthernet0/2 gets ip vrf forwarding BLUE, ip address 172.16.2.1 255.255.255.0.
>
> **[2:48](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=168)** Blue CE is GigabitEthernet0/0 is 172.16.2.2/24. GigabitEthernet0/1 is 192.168.2.1/24. PC at 192.168.2.10/24. On PE2, repeat for site B, create ip vrf RED, rd 1:1, route-target both 1:1, and GigabitEthernet0/1 use ip vrf forwarding RED, ip address 172.16.3.1 255.255.255.0.
>
> **[3:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=215)** Red CE GigabitEthernet0/0 to P2 is 172.16.3.2/24,
>
> **[3:44](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=224)** GigabitEthernet0/1 to the server is 192.168.3.1/24,
>
> **[3:52](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=232)** server at 192.168.3.10/24. For Blue, ip vrf BLUE, rd 2:2, route-target both 2:2, GigabitEthernet0/2 with ip vrf forwarding BLUE, ip address 172.16.4.1 255.255.255.0.
>
> **[4:20](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=260)** Blue CE GigabitEthernet0/0 is 172.16.4.2/24, GigabitEthernet0/1 is 192.168.4.1/24, server at 192.168.4.10/24. IP breakdown. Red PC at 192.168.1.10. CE GigabitEthernet0/1 at .1. CE GigabitEthernet0/0 at 172.16.1.2. P1 at .1. P2 at 172.16.3.1. CE GigabitEthernet0/0 at .2. CE GigabitEthernet0/1 at 192.168.3.1. Server at .10. Blue, PC at 192.168.2.10. CE GigabitEthernet0/1 at .1. CE GigabitEthernet0/0 at 172.16.2.2. PE1 at .1. PE2 at 172.16.4.1. CE GigabitEthernet0/0 at .2. CE GigabitEthernet0/1 at 192.168.4.1. Server at .10.
>
> **[5:53](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=353)** VRFs with RTs set the stage. With VRFs, RTs, and IPs configured, Red's PC at 192.168.1.10 and server at 192.168.3.10 are in VRF Red with RT 1:1. Blue's PC at 192.168.2.10 and server at 192.168.4.10 are in VRF Blue with RT 2:2. Traffic is isolated locally, next, we will connect them. To wrap up: Configure VRFs and P1 and P2 with RDs, route targets, and PE-to-CE plus device IPs to isolate Red and Blue traffic, PCs to servers. PE1 configuration. ip vrf RED, rd 1:1, route-target both 1:1, ip vrf BLUE, rd 2:2, route-target both to 2:2, interface GigabitEthernet0/1, ip vrf forwarding RED, ip address 192.16.1.1 255.255.255.0,
>
> **[7:11](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=431)** interface GigabitEthernet0/2, ip vrf forwarding BLUE, ip address is 172.16.2.1 255.255..255.0.
>
> **[7:26](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=446)** PE2. ip vrf RED, rd 1:1, route-target both 1:1, ip vrf BLUE, rd 2:2, route-target both 2:2, interface GigabitEthernet0/1, ip vrf forwarding RED, ip address 172.16.3.1 255.255.255.0,
>
> **[7:51](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=471)** interface GigabitEthernet0/2, ip vrf forwarding BLUE, ip address is 172.16.4.1 255.255.255.0.
>
> **[8:05](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=485)** Red A CE. interface GigabitEthernet0/0, ip address 172..16.1.2 255.255.255.0,
>
> **[8:17](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=497)** interface GigabitEthernet0/1, ip address 192.168.1.1 255.255.255.0.
>
> **[8:30](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=510)** PC, 192.168.1.10/24, gateway 192.168.1.1. Red B CE. interface GigabitEthernet0/0, ip address 172.16.3.2 255.255.255.0,
>
> **[8:53](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=533)** interface GigabitEthernet0/1, ip address 192.168.3.1 255.255.255.0.
>
> **[9:07](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=547)** Server, 192.168.3.10/24, gateway 192.168.3.1. Blue A CE. interface GigabitEthernet0/0, ip address 172.16.2.2 255.255.255.0,
>
> **[9:32](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=572)** interface GigabitEthernet0/1, ip address 192.168.2.1 255.255.255.0.
>
> **[9:44](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=584)** PC, 192.168.2.10/24, gateway 192.168.2.1. Blue B CE. interface GigabitEthernet0/0, ip address 172.16.4.2 255.255.255.0,
>
> **[10:07](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=607)** interface GigabitEthernet0/1, ip address 192.168.4.1 255.255.255.0.
>
> **[10:20](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/configuring-vrfs-on-pe-routers?u=76281980&t=620)** Server, 192.168.4.10/24, gateway 192.168.4.1. Next, we will explore setting up MP-BGP for Layer 3 VPN to link these sites network-wide. And stay tuned as we keep building.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (2), [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) (1)
> **Versions:** 255.255.255 (15), 192.168.1 (7), 192.168.2 (7), 192.168.3 (7), 192.168.4 (7)
> **Env Vars:** pe1 (10), red (8), blue (8), pe2 (6), mpls (2)
> **Prerequisites:** configure (4)
> **Speakers:** - [instructor] (1)

#### [Setting up MP-BGP for L3VPN](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=0)** - [Instructor] Welcome back to the Implementing [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) L3VPN section of the MPLS L3VPN Foundation and Implementation course. This is the third video, Setting Up MP-BGP for L3VPN. By the end, you will know how to set up MP-BGP to enable VPN route exchange between P routers connecting our customer sites. Let's dive in. We are moving forward with our case study. P1, P1, P 2 and P2 form the provider core. Customer Red has a PC Site A on P1, and the server at Site B on P2. Customer Blue has a PC Site A on P1 and a server at Site B on P2. The core runs OSPF, and VRFs with route targets are set. Now MP-BGP will exchange routes to link Red Site A to B and Blue Site A to B, keeping traffic separate. Step 1, Enable BGP on PE routers On PE1, type router BGP 65000, our AS number. Add P2 as a enable with neighbor 10.0.4.4 remote--as 65000. PE2's loopback, and neighbor 10.0.4.4 update--source loopback0. On PE2, use router bgp 65000 neighbor 10.0.1.1 remote-as 65000. PE1's loopback,
>
> **[1:33](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=93)** and neighbor 10.0.1.1 update--source loopback 0. This sets up IBGP between PEs Step 2: Activate VPNv4 address family. On PE1 under bgp, enter address-family vpnv4. Use neighbor 10.0.4.4 activate and neighbor 10.0.4.4 send-community extended. This sends route targets for VPN routes. On PE2, do the same, address-family vpnv4 neighbor 10.0.1.1 activate neighbor 10.0.1.1 send-community extended. VPNv4 enables L3VPN route exchange. Step 3: Integrate VRF with MP-BGP. On PE1 for VRF Red, use address-family ipv4 vrf RED and redistribute connected. This shares Red Site a subnet, 172.16.1.0/24, with RT 1:1. For VRF Blue, address-family ipv4 vrf BLUE redistribute connected sharing 172.16.2.0/24 with RT 2:2 On PE2, VRF Red shares 172.16.3.0/24. VRF Blue shares 172.16.4.0/24 using the artist from the last video.
>
> **[3:09](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=189)** Here is the IP setup. Red Site A PC at 192.168.1.10, CE gigabit ethernet 0/1 at .1, CE gigabit ethernet 0/0 to PE1 at 172.16.1.2, P at .1. Red Site B PE2 at 172.16.3.1, CE gigabit ethernet 0/0 at .2, CE gigabit ethernet 0/1 at 192.168.3.1, server at .10. Blue Site A PC at 192.168.2.10, CE gigabit ethernet 0/1 at .1, CE gigabit ethernet 0/0 to PE1 at 172.16.2.2, P at .1. Blue Site B PE2 at 172.16.4.1, CE gigabit ethernet 0/0 at .2, CE gigabit 0/1 at 192.168.4.1, server at .10. With MP-BGP configured, PE sends Reds 172., rephrase. With MP-BGP configured, PE sends Reds 172.16.1.0/24 and Blues 172.16.2.0/24 to PE2 via VPNv4 tagged with RTs.
>
> **[4:47](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=287)** PE2 sends 172.16.3.0/24 and 172.16.4.0/24 back. VRF Red connects Red's PC2 server VRF Blue connects Blue's PC2 server. Traffic stays isolated. MP-BGP links to sites. To wrap up, set up MP-BGP with iBGP neighbors, VPNv4, and VRF integration to exchange VPN routes between PE1 and P2 for Red and Blue. That connects our sites across the core. PE1 configuration: router bgp 65000. neighbor 10.0.4.4 remote-as 65000 neighbor 10.0.4.4 update-source Loopback0 address-family vpnv4 neighbor 10.0.4.4 activate neighbor 10.0.4.4 send-community extended address family ipv4 vrf RED redistribute connected address family ipv4 vrf BLUE redistribute connected PE2: router bgp 65000. neighbor 10.0.1.1 remote-as 65000 neighbor 10.0.1.1 update-source Loopback0 address family vpnv4 neighbor 10.0.1.1 activate neighbor 10.0.1.1 send-community extended address family ipv4 vrf RED
>
> **[6:23](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/setting-up-mp-bgp-for-l3vpn?u=76281980&t=383)** redistribute connected address family ipv4 vrf BLUE redistribute connected. That connects our sites across the core. Next, we will explore connecting CE to PE, static and dynamic [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) options to get traffic flowing, and stay tuned as we keep building.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (2), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** bgp (10), pe2 (9), pe1 (8), vrf (8), l3vpn (4)
> **Versions:** 10.0.4 (8), 10.0.1 (8), 172.16.1 (3), 172.16.2 (3), 172.16.3 (3)
> **Prerequisites:** set up (2), setup (1)
> **Code Identifiers:** ibgp (1)
> **Speakers:** - [instructor] (1)

#### [Connecting CE to PE: Static and dynamic routing options](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=0)** - [Instructor] Welcome back to the implementing [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) 3VPN section of the MPLS 3VPN Foundation and Implementation course. This is the fourth video connecting CE to PE static and dynamic [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) options. By the end you will know how to connect CE and PE routers using a static and dynamic routing plus redistribute routes into MP-BGP. Let's connect those sites. We are advancing our case study. PE1, P1, PE2 and P2 form the provider core. Customer red has a PC at site A on P1 and a server at site B on P2. Customer blue has a PC at site A on P1 and a server at site beyond P2. VRFs and MPBGPR set. Now we will connect CE2P with a static routing for red and BGP for blue redistributing into MPBGP. You can also use RIP, OSPF, EIGRP, IS-IS or BGP for PE-CE. Step one, a static routing for customer red. On P1 for VRF red at IP route VRF red 192.168.1.0
>
> **[1:20](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=80)** 255.255.255.0 172.16.1.2 to red A CE.
>
> **[1:32](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=92)** On PE2, use IP route VRF red 192.168.1.0 255.255.255.0
>
> **[1:45](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=105)** 172.16.3.2 to red B CE. On red A CE at IP route 192.168.3.0 255.255.255.0 172.16.1.1
>
> **[2:07](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=127)** On red B CE, IP route 192.168.1.0 255.255.255.0 172.16.3.1.
>
> **[2:23](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=143)** A static routes are simple but need manual updates. Step two, BGP for customer blue. Blue CEs share as 65,001 so BGP's loop prevention reject route unless we override the AS. On P1 under router BGP 65,000 in address family IPv4 VRF blue at neighbor 172.16.2.2 remote as 65,001 blue A CE
>
> **[2:56](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=176)** and neighbor 172.16.2.2 as override to replace 65,001 with 65,000. On blue A CE, use router BGP 65,001 neighbor 172.16.2.1 remote as 65,000 network 192.168.2.0 mask 255.255.255.0.
>
> **[3:27](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=207)** On PE2 neighbor 172.16.4.2 remote as 65,001 neighbor 172.16.4.2 as override. On blue B CE, neighbor 172.16.4.1 remote as 65,000 network 192.168.4.0 mask 255.255.255.0.
>
> **[3:58](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=238)** AS override keeps the same issue, RIP or OSPF avoidance. Step three, redistribute into MP-BGP. On P1 under router BGP 65,000 in address family IPv4 VRF RED at redistribute static sharing red's routes. On P2, repeat redistribute static for VRF red. This sends CE routes across the core via MP-BGP. IP recap, red site A, PC at 192.168.1.10 CE gigabit ethernet 0/1 at .1, CE gigabit ethernet 0/0 at 172.68.1.2 PE1 at .1.
>
> **[4:49](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=289)** Red site BP. PE2 at 172.16.3.1 CE gigabit ethernet 0/0 at .2, CE gigabit ethernet 0/1 at 192.168.3.1 server at .10.
>
> **[5:07](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=307)** Blue site A, PC at 192.168.2.10, CE gigabit ethernet 0/1 at .1, CE gigabit ethernet 0/0 at 172.16.2.2 PE1 at .1. Blue site B, PE2 at 172.16.4.1, CE gigabit ethernet 0/0 at .2, CE gigabit ethernet 0/1 at 192.168.4.1, server at .10.
>
> **[5:41](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=341)** Red's static route. 192.168.1.0/24 and 192.168.3.0/24.
>
> **[5:52](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=352)** Interview all of red. Blues BGP routes, 192.168.2.0/24 and 192.168.4.0/24. Use as override and inter VRF blue. MP-BGP shares them between P1 and P2 keeping red and blue separate with RPs one column one and two column two. To wrap up, connect CE to PE with a static routing for red and BGP with AS override for blue redistributing into MP-BGP. Static is simple. BGP needs as override for same AS sites. Other protocols like OSPF skipped this. PE1 IP root VRF red 192.168.1.0 255.255.255.0 172.16.1.2.
>
> **[6:51](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=411)** Router BGP 65,000 at this family IPv4 VRF red redistribute static at this family IPv4 VRF blue neighbor 172.16.2.2 remove as 65,001 neighbor 172.16.2.2 as override. PE2, IP route VRF red 192.168.3.0 255.255.225.0 1721.16.3.2,
>
> **[7:26](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/connecting-ce-to-pe-static-and-dynamic-routing-options?u=76281980&t=446)** router BGP 65,000 at this family IPv4 VRF red redistribute static at this family IPv4 VRF blue neighbor 172.16.4.2 remote as 65,001 neighbor 172.16.4.2 as override. Red-A CE, IP route 192.168.3.0 255.255.255.0 172.16.1.1
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
> **Frameworks & Libraries:** [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (5), [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (4)
> **Env Vars:** bgp (19), vrf (13), pe2 (6), mpls (4), pe1 (4)
> **Versions:** 255.255.255 (11), 192.168.1 (7), 172.16.2 (7), 172.16.4 (7), 192.168.3 (5)
> **Speakers:** - [instructor] (1)

#### [Enabling MPLS in the service provider network](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=0)** - [Instructor] Welcome back everyone. So far, we have configured VRF on our provider HP routers, set up MP-BGP to exchange VPN routes, and connected our customer edge CE routers to the P routers using aesthetic or dynamic [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md). But there is a critical piece of the puzzle we haven't addressed yet. Enabling [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) within the service provider network itself. That's what this lecture is all about, why we need MPLS in the core and how to configure it. First, let's talk about why we need MPLS in the service provider network. In an L3 VPN setup, the P routers are responsible for isolating customer traffic using virtual routing and forwarding tables or VRF and exchanging those VPN route via MP-BGP. But here is the thing, MP-BGP runs between the P routers and in real world service provider network, these P routers are typically separated by multiple core routers known as provider P routers. Without MPLS, these P routers would need to maintain full routing table for every customer VPN, which defeats the purpose of a scalable VPN solution. MPLS solved this by introducing label switching. Instead of routing packets based on IP headers hope by hope, MPLS assign labels to packets at the ingress P router. The P routers in the code then switch these packets
>
> **[1:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=95)** based on those labels without ever needing to look at the IP information. This makes the network faster, more efficient, and most importantly, scalable. Key benefits of MPLS in L3VPN. [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md), P routers don't need to know customer routes. Traffic isolation, labels ensure VPN traffic stays separate. Flexibility, supports advanced features like [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md). Let's configure MPLS across our topology. Step one, enable MPLS on all core-facing interfaces. Step two, set up LDP to distribute labels. Here's how it looks. PE1 interface gigabit ethernet zero is just zero MPLS IP. PE2 interface gigabit ethernet zero is just zero MPLS IP. P1 interface gigabit ethernet zero is less zero MPLS IP. Interface gigabit ethernet zero slash one MPLS IP. P2 interface gigabit ethernet zero slash zero MPLS IP. Interface gigabit ethernet zero slash one MPLS IP. The MPLS IP command enables MPLS and activate LDP by default. So labels are automatically assigned and distributed across PE1, P1, P2, and PE2. Now here's the layer three VPM magic PE1 pushes two labels.
>
> **[3:14](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/enabling-mpls-in-the-service-provider-network?u=76281980&t=194)** The outer label say 100 guides the packet through the core to P2. P1 and P2 swap this transport label. The inner label say 300 tells PE2 which VPN the packet belongs to. And P2, the outer label is pop due to penultimate hop popping and P2 uses the inner label to forward the packet to the right CE. That's how we enable MPLS for our L3VPN V2 label stacking. Next we will verify connectivity and test the VPN. Stay tuned as we keep building your MPLS L3 VPN skills.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (19), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (4), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (1)
> **Env Vars:** mpls (19), vpn (9), bgp (3), pe1 (3), pe2 (3)
> **Prerequisites:** set up (2), configure (2), setup (1)
> **Definitions:** is a  (1), known as (1)
> **Speakers:** - [instructor] (1)

#### [Verifying connectivity and testing the VPN](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=0)** - [Instructor] Welcome back. By now, we have built our [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) L3 VPN from the ground up. VRFs are configured, MPBGP is exchanging routes. CE routers are connected, and MPLS is enabled across the provider network. Today, we are verifying that it all works and testing end-to-end connectivity. Our scenario has customer Red and customer Blue, each with site 1 and PE1 and site 2 and PE2. Across the backbone, PE1, P1, P2, and PE2. Let's get started. We are focusing on two things, confirming the L3 VPNs functioning on the PE routers and testing connectivity between customer sites. We will use show commands and pings to make sure everything's on track. First, let's check the PE routers to ensure the VRFs have the right routes. On PE1, we will look at customer Red and customer Blue's VRFs. For customer Red, run show ip route vrf RED, you will see Red site one's network, say, 192.168.1.0/24. From the local C and Red site two, 192.168.3.0/24 via MPBGP from PE2. Now, for customer blue, show ip route vrf BLUE. Here's Blue site one's 192.168.2.0/24
>
> **[1:37](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=97)** and Blue site two's 192.168.4.0/24. These routes show P1 knows both sides for each customer. On PE2, do the same. Show ip route vrf RED, show IP route vrf BLUE. You will see site two's local routes and site one's BGP Learn routes. If these match up, our VPN [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) is solid. Next, let's confirm MPLS is moving packets across the core. On PE1, check the MPLS forwarding table, show mpls forwarding table. Look for PE2s look back, say, 10.0.4.4. You will see an outgoing label like 18. to reach PE2 via P1. That's the transport label in action on P1, run show mpls forwarding table. It swaps that label, say 18 to 18 for P2. On P2, it might pop the label before PE2. Thanks to penultimate hop popping. This shows the core is switching labels correctly. Now, let's test connectivity between sites. From Red site one CE, ping Red site two ping, 192.168.3.1, source 192.168.1.1.
>
> **[3:04](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=184)** If it works, traffic flows from site one through PE1 across the MPLS core to PE2 and into site two, all within the Red VPN. For Blue, ping 192.168.4.1, source 192.168.2.1.
>
> **[3:24](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=204)** Success here means both VPNs are up and running. Here is what happens. PE1 pushes two labels: the outer transport label to reach PE2 and the inner VPN label for Red's vrf. P1 and P2 swap the transport label. P2 pops it, and PE2 uses the VPN label to deliver the packet. Same for blue. Perfect isolation. Last, let's check cef, which handles forwarding. On PE1, show IP cef vrf RED 192.168.3.0 detail.
>
> **[4:02](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/verifying-connectivity-and-testing-the-vpn?u=76281980&t=242)** This shows the label stack and next stop, P1, for Red site two. If pings fail, check cef routing tables or MPLS labels for mismatch. And there you have it. We have verified our L3 VPN and tested connectivity for customer Red and Blue across PE1, P1, P2 and PE2. The VPN is fully operational. Next time, we will dive into advanced topics to level up your MPLS L3 VPN skills. See you then.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (9), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (2)
> **Env Vars:** pe2 (10), vpn (8), pe1 (8), mpls (7), red (3)
> **Versions:** 192.168.3 (3), 192.168.1 (2), 192.168.2 (2), 192.168.4 (2), 10.0.4 (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 6. Advanced Topics and Wrap-Up

[↑ Back to Table of Contents](#table-of-contents)

#### [Inter-AS L3VPN: Connecting multiple providers](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=0)** - [Instructor] Welcome back to our [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md)-L3VPN journey. We have mastered building an L3VPN within a single provider network. But what if a customer site span multiple service providers? That's where Inter-AS L3VPN comes into play. Today, we will explore how this feature connects autonomous systems to extend the VPN using customer read with site one in AS 100 and site two in AS 200 as our example. Let's break it down. Inter-ASL3VPN allows multiple service providers to collaborate linking their networks to provide a seamless layer 3 VPN for a customer. Imagine a global company like Customer Red. Site one is with one provider in AS 100, and site two is with another in AS 200. Here is the setup. In AS 100, Customer Red site 1 connects to P1 which links to an autonomous system border router, ASBR1. In AS 200, Site 2 connects to P2 linked to ASBR 2. The ASBRs are the handshake point between these providers. Inside each ASMP LSN MPPGP handle the VPN, but the magic happens at the boundary. How does this work? The core idea is to extend the VPN across AS boundaries while keeping customer traffic isolated. Each provider maintains its own MPLS backbone,
>
> **[1:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=95)** P1 to ASBR 1 in AS 100 and ABR2 to P2 in AS 200. At the ASBRs, the providers exchange [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) information and forward traffic ensuring reds packet flow from Site 1 to Site 2 securely no matter who is in the middle. There are three main ways to do this called Inter-AS options, A, B, and C. Option A is the simplest. The ASBRs act like C routers treating the link between them as a basic IP connection. Each ASBR uses VRFs to separate customer traffic and swaps routes with the other ASBR using a protocol, like EBGP. No MPLS labels crossed the boundary. Inside, each AS MPLS does its usual label switching job. Let's follow a packet with option A. From Red Site 1, PE1 push two labels, the transport label to reach ASBR1 and the VPN label for Red's VRF. ASBR1s strips the labels, sends the packet as plain IP to ASBR2 which then pushes new labels to get it to PE2. PE2 pops the VPN label and delivers it to Site 2. It's straightforward and keeps each provider independent. Option B takes it up a notch. The ASBRs exchange VPN routes and labels directly via MPBGP. So MPLS labels cross the boundary. Option C goes further.
>
> **[3:12](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/inter-as-l3vpn-connecting-multiple-providers?u=76281980&t=192)** P is in different AS talk MPBGP directly, and ASBRs just for what labeled packets. These options trade simplicity for efficiency depending on provider trust and scale. Why does this matter? Inter-AS L3VPN makes global VPNs possible. Customer Red doesn't care that Site 1 and Site 2 are with different providers. They just need connectivity. This feature ensures a [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) letting providers stitch their networks together without sharing full internal details, all while keeping VPN isolation intact. That's the essence of Inter-AS L3VPN connecting multiple providers to extend the customer's VPN across AS boundaries. We have explored how it bridges AS 100 and AS 200 for customer red using options like A, B, and C. Next time, we will see how MPLS L3VPN fits into modern networks. See you then.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (6), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1), [Scalability](../../Skills/Artificial%20Intelligence%20(AI)/Scalability.md) (1)
> **Env Vars:** vpn (9), mpls (6), l3vpn (6), asbr (4), asbr1 (2)
> **Analogies:** imagine (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [MPLS L3VPN in modern networks (SD-WAN integration)](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=0)** - [Instructor] Welcome back to our [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) L3VPN exploration. We have covered building L3VPNs within a single provider and even across multiple providers. But today, we are stepping into the mother networking board to see how MPLS L3VPN integrates with SD-WAN solutions. As enterprises adopt hybrid networks, this combination is becoming a powerful way to blend reliability with flexibility. Let's dive into how these technologies work together. First, why bother integrating them? MPLS L3VPN is the gold standard for secure, reliable QS driving connectivity. Think branch offices tied to a provider's backbone. SD-WAN, on the other hand, brings agility using internet links or LT to create an overlay that's cost effective and quick to deploy. Together, they offer the best of both worlds, MPLS for critical apps and SD-WAN for everything else. Picture this, Customer Red has Site 1 and Site 2 connected via an MPLS L3VPN through PE1 and PE2. The provider ensures low latency and isolation with VRFs and labels. Now, at SD-WAN, an overlay runs over internet links between those sites managed by SD-WAN H devices. The two system coexist serving different needs.
>
> **[1:37](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=97)** How do they integrate? It's all about coexistence and orchestration. The MPLS L3VPN operates as the underlay. PE routers handle VPN traffic with MPB GPN label switching, just as we have seen. SD-WAN sits on top as an overlay using tunnels of an IPSec over public or private links. The SD-WAN controller decides which traffic uses MPLS versus cheaper internet pass based on policies like app priority or bandwidth needs. For example, Customer Red's voice traffic might take the MPLS L3VPN pass, guaranteed QoS from PE1 to PE2. Meanwhile, bug file transfers go over SD-WAN's internet tunnel saving costs. The SD-WAN H as Site 1 sees both options and steers traffic dynamically, while the MPS provider keeps its VPN intact. Let's break down the integration points. One, traffic steering. SD-WAN uses [Real-Time](../../Skills/Database%20Management/Real-Time.md) analytics to choose MPLS for latency sensitive apps, uploading others to the overlay. Two, visibility. SD-WAN [Dashboards](../../Skills/Data%20Science/Dashboards.md) often monitor both MPLS and internet performance, giving a unified view. Three, hybrid back hole. Some setups use MPLS as a backbone
>
> **[3:10](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/mpls-l3vpn-in-modern-networks-sd-wan-integration?u=76281980&t=190)** for SD-WAN hops connecting remote sites to a central MPLS VPN. What's the payoff? Flexibility. Add SD-WAN to a scale size without waiting for MPLS provisioning. Cost saving. Shift non-critical traffic of expensive MPLS circuits. And reliability. MPLS ensures uptime for key apps, while SD-WAN adopts to failures or congestion. It's a hybrid model that keeps MPLS relevant in a cloud-first world. It's not all seamless. MPLS and SD-WAN use different control planes and PBGP versus SD-WAN centralized brain, so alignment takes planning. Plus QOS needs coordination. SD-WAN must respect MPLS priorities. These aren't deal breakers. Just factors to keep in mind. That's how MPLS L3VPN integrates with SD-WAN. Combining the strengths of a provider-managed VPN with the agility of an overlay, we have explored how they coexist, steer traffic, and deliver hybrid benefits, for networks like customer reds. Next time, we will tackle common pitfalls on how to avoid them. See you then.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (19), [Real-Time](../../Skills/Database%20Management/Real-Time.md) (1), [Dashboards](../../Skills/Data%20Science/Dashboards.md) (1)
> **Env Vars:** mpls (19), wan (18), l3vpn (7), vpn (4), pe1 (2)
> **Analogies:** picture (1), for example (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Common pitfalls and how to avoid them](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=0)** - [Instructor] Welcome back to our [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) L3VPN journey. We have built L3VPNs, connected them across providers, and explored modern integrations, but even the best setups can hit snags. Today, we are diving into common pitfalls that trip up L3VPN deployments and how to avoid them. Our goal is spot frequent errors, and arm you with preventive measures to keep your VPNs running smoothly. Let's get started. First up, route target misconfiguration, imagine Customer Red with sites on P1 and P2. Each P has a VRF for Red, but if P1 exports with RT 100 column one, and P2 imports with RT 100 column two, the routes don't match up. Red site can't communicate. How to avoid it, ensure RT's are consistent across P's for each VPN. Use the same export and import values like 100 column one everywhere for Red. Check with show VRF or show IPVRF detail to confirm RT alignment. A quick policy check prevents this headache. Next, MPLS label-switching issues, say P1 pushes labels to reach P2 through P1 and P2, but P1's interface lack MPLS IP. Labels stop flowing and traffic drops, or worse, penultimate hop popping fails
>
> **[1:35](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=95)** because P2 isn't popping the transport label, confusing P2. Prevention, verify MPLS is enabled on every core interface. You'll show MPLS interface to confirm. Also check show MPLS for [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) table, and P routers to ensure labels are assigned and swapped correctly. Consistency across the path is key. Third pitfall, routing protocol problems between CE and PE. If Customer Red CE uses OSPF, but PE1 expects BGP, routes don't exchange, or aesthetic routes point the wrong way, Red site one can't reach site two. How to dodge this, align protocols before connecting. Agree on BGP, OSPF, or aesthetics with the customer. Test with the show IP route VRF Red on the PE to confirm CE routes are there. Clear expectation prevents silent failures. Finally, MP-BGP session issues, P1 and P2 needs to swap VPN routes, but if the loopbacks like 1.1.1.1, and 2.2.2.2 aren't reachable, the decision dies. Maybe an IGP like OSPF isn't advertising those loopbacks, or a firewall blocks port 179. Avoid it by ensuring loopbacks are in your IGP. Check with show IP OSPF database. You'll show IP BGP VPNB for all summary
>
> **[3:10](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/common-pitfalls-and-how-to-avoid-them?u=76281980&t=190)** to verify the session's up. Add a quick ping between loopbacks to catch reachability issues early. A few universal tips, document your VRF's, labels, and protocols, mistakes hiding complexity. Test incrementally, verify each step like VRF routes or label paths before moving on, and use tools like traceroute VRF to pinpoint where things break. That's a rundown of common L3VPN pitfalls, RT mismatch, label issues, routing missteps, and BGP hiccups and how to steer clear of them. With these preventive measures, your VPNs will stay robust and reliable. Next time, we will look ahead to the future of MPLS L3VPN. See you then.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (7), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (3)
> **Env Vars:** mpls (7), vrf (6), bgp (5), l3vpn (4), ospf (4)
> **Versions:** 1.1.1 (1), 2.2.2 (1)
> **Ports:** port 179 (1)
> **Analogies:** imagine (1)
> **Warnings:** pitfall (1)
> **Speakers:** - [instructor] (1)

#### [The future of MPLS L3VPN: Trends and evolution](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=0)** - [Instructor] Welcome back to our [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) L3VPN exploration. We have built L3VPNs, connected them across providers, integrated them with modern tech, and tackled common pitfalls. Now, let's look ahead. Today we are assessing the emerging trends, shaping the future of MPLS L3VPN, and how these technologies evolving in a fast changing networking world. Well, let's dive into what's next. First trend: Cloud and multi-cloud integration. Enterprises are moving workloads to AWS [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) and [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md), often across multiple providers. MPLS L3VPN is evolving to connect these cloud directly. Think P routers peering with cloud gateways. This keeps VPN isolation and QOS intact, extending the trusted MPLS backbone to virtual [Private Clouds](../../Skills/Cloud%20Computing/Private%20Clouds.md). Picture Customer Red sites on P1 and P2, now linked to a cloud VPC through the same layer 3VPN. Providers are offering cloud connect services, blending MPLS reliability with cloud scale, a big shift from traditional site-to-site focus. Next up, segment [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) and automation. Segment routing or SR, is simplifying MPLS by replacing LDP with source base pass. In an L3VPN, this means P routers can steer traffic with explicit label stacks, cutting complexity in the core.
>
> **[1:38](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=98)** Paired that with automation tools like [SDN](../../Glossary/Concept/SDN.md) controllers are programming these pass dynamically. Why does it matter? It's faster to deploy, easier to manage, and supports [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) without manual tweaks. MPLS L3VPN is getting smarter and more [agile](../../Skills/DevOps/Agile%20Development.md). Third trend: Coexistence with [5G](../../Skills/Software%20Development/5G.md) and edge computing. As 5G rolls out, it's bringing ultra low latency and massive bandwidth. MPLS L3VPN is adapting to back haul 5G traffic from H sites like [IoT](../../Glossary/Concept/IoT.md) hubs or retail locations to core data centers, keeping VPN security in play. Edge computing pushes processing closer to users and MPLS ties it back to the enterprise VPN. Providers are testing hybrid models where 5G supplements MPLS, not replace it, for a seamless edge-to-core experience. Finally, the shift to intent-based networking, or IBN. IBN lets you define what you want, like low-latency VPN for voice and the network figures out how. MPLS L3VPN fits here as the underlay, with orchestration layers translating intents into VRFs, Labels and QOS policies. This evolution makes MPLS less about manual config and more about business outcomes.
>
> **[3:10](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/future-of-mpls-l3vpn-trends-and-evolution?u=76281980&t=190)** It's still the backbone, but with the brain on top, streamlining operations for complex VPNs. So what's the big picture? MPLS L3VPN isn't going away. It's adapting. Cloud integration extends its reach, segment routing simplifies it, 5G enhances its role, and IBN makes it smarter. It's staying relevant by evolving with hybrid, automated, and edge driver networks. That's the future of MPLS L3VPN, trends like cloud, SR, 5G and IBN are shaping its evolution. We have assessed how it's staying ahead in a dynamic landscape. Next time, we will wrap up with a course summary and your next steps. See you then!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (14), [5G](../../Skills/Software%20Development/5G.md) (6), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (3), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1)
> **Env Vars:** mpls (14), l3vpn (9), vpn (4), ibn (4), qos (2)
> **Analogies:** picture (2)
> **CLI Commands:** aws (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Course summary and next steps for learners](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=0)** - [Instructor] Welcome back to the final stop in our [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) L3VPN foundation and implementation journey. We have covered a lot, from the basics of MPLS to advanced integrations and future trends. Today, we are wrapping up with the core summary, recapping what we have learned, and mapping out your next steps as a networking pro. Let's take a look back, and then look ahead. We started with the foundations. You got a handle on what MPLS is, label switching at its core and why Layer 3 VPNs matter for enterprises and providers. We explored the benefits: Secure, scalable connectivity with QoS, perfect for linking customer sites. Then, we dug into the architecture. You learned about PE, CE, and P routers, label distribution protocols like LTP, and how packets flow with labels. We introduced L3VPN concepts, VRFs, route distinguishers, and MP-BGP plus route targets for controlling route sharing. Control plane versus data plane and common topologies like hub and spoke rounded out the basics. Next, we moved to planning and deployment. You saw how to address networks, scale VPNs, and secure them, plus ensure QoS for performance. Then, came the hands-on part, a case study walking through VRF setup, MP-BGB configuration, CE to P [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) options,
>
> **[1:36](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=96)** enabling MPLS in the provider core, and verifying it all with tests. We finished strong in advanced topics. You explored connecting L3VPNs across multiple providers, integrating with SD-WAN for hybrid networks, avoiding common pitfalls like route target mismatch, and assessing trends like cloud and segment routing, shaping the future. So what have you gained? You can now design, implement, and troubleshoot an MPLS L3VPN from scratch, whether it's a single-provider setup or a complex multi-AS deployment. You are ready to blend it with modern tech and anticipate where it's headed. That's a solid toolkit for any network engineer. Now, where do you go from here? First, practice what we have covered. Set up a lab with P and C routers, tweak VRFs, and test connectivity. Real-world experience cements these skills. Then, take it further with related topics. Here are some recommendations to level up. Consider diving into MPLS L2VPN AToM any transport over MPLS for Layer 2 services like ethernet over MPLS. Next, explore VPLS, virtual private LAN service to extend LANs across providers. MPLS [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) is another great pick. Learn to optimize paths with RSVP for performance. And don't miss [MPLS Segment Routing](MPLS%20Segment%20Routing.md).
>
> **[3:11](https://www.linkedin.com/learning/mpls-l3vpn-foundation-and-implementation/course-summary-and-next-steps-for-learners?u=76281980&t=191)** It's the future of simplified source drive and MPLS control. These build on what you have mastered here, opening doors to broader MPLS expertise. Whether you are aiming for service provider roles or enterprise network design, these skills keep you ahead. Mix theory with hands-on labs, and you will be unstoppable. That's our wrap-up. We have journeyed from MPLS basics to L3VPN implementation and beyond. You have got the foundation and the vision. Now, it's time to apply it and grow. Thanks for joining this course. Go out there and shape the future of networking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (13), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (3), [Traffic Engineering](../../Skills/Network%20and%20System%20Administration/Traffic%20Engineering.md) (1)
> **Env Vars:** mpls (13), l3vpn (4), ltp (1), bgp (1), vrf (1)
> **Prerequisites:** setup (2), set up (1)
> **Tools:** atom (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [Arash Deljoo](../../Instructors/Network%20and%20System%20Administration/Arash%20Deljoo.md)

## Resources

- Exercise files available

## Skills Covered

- Virtual Private Network (VPN)
- Multiprotocol Label Switching (MPLS)

## Path Context

### In [Mastering Multiprotocol Label Switching (MPLS)](../../Paths/Network%20and%20System%20Administration/Learning%20Paths/Mastering%20Multiprotocol%20Label%20Switching%20(MPLS).md)
← [Mpls Foundations Getting Started With Mpls](Mpls%20Foundations%20Getting%20Started%20With%20Mpls.md) | **2 of 4** | [MPLS- Traffic Engineering](MPLS-%20Traffic%20Engineering.md) →

## Appears In

- [Mastering Multiprotocol Label Switching (MPLS)](../../Paths/Network%20and%20System%20Administration/Learning%20Paths/Mastering%20Multiprotocol%20Label%20Switching%20(MPLS).md)

## Related Courses

_Courses sharing skills:_

- [MPLS- Traffic Engineering](MPLS-%20Traffic%20Engineering.md) — Multiprotocol Label Switching (MPLS)
- [Mpls Foundations Getting Started With Mpls](Mpls%20Foundations%20Getting%20Started%20With%20Mpls.md) — Multiprotocol Label Switching (MPLS)

---

[↑ Back to top](#)