---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: windows-server-2019-dhcp-and-dns
url: "https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns"
duration_minutes: 156
duration: 2h 36m
level: Beginner
updated: 4/29/2024
learners: 36897
skills:
  - Dynamic Host Configuration Protocol (DHCP)
  - DNS Management
  - Windows Server
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQElyj0o84kAWg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568070675233?e=2147483647&amp;v=beta&amp;t=sZ7QOPEILNwpfyhbG8bSLU44yMN6md0I7MemhWiA0ek"
linkedin_topic: Network and System Administration
learning_paths:
  - '[[Getting Started with Windows Server 2019]]'
prev_courses:
  - '[[Windows Server 2019- Install and Configure Active Directory]]'
path_nav: '[{"path":"Getting Started with Windows Server 2019","position":4,"total":4,"prev":"Windows Server 2019- Install and Configure Active Directory","next":null}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - skill/dynamic-host-configuration-protocol-dhcp
  - skill/dns-management
  - skill/windows-server
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/Windows%20Server%202019-%20DHCP%20and%20DNS.md)

![Windows Server 2019: DHCP and DNS](https://media.licdn.com/dms/image/v2/C4E0DAQElyj0o84kAWg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568070675233?e=2147483647&amp;v=beta&amp;t=sZ7QOPEILNwpfyhbG8bSLU44yMN6md0I7MemhWiA0ek)

# Windows Server 2019: DHCP and DNS

> Dynamic Host Configuration Protocol (DHCP) is the system that automatically assigns IP addresses to hosts, and Domain Name System (DNS) resolves fully qualified domain names to IP addresses. If you're a network administrator charged with managing a Microsoft network environment, then it's essential that you have a solid understanding of both of these networking services. In this course, Ed Liberma

> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns) | 2h 36m | Beginner | 37K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [DHCP and DNS in WIndows Server 2019](#dhcp-and-dns-in-windows-server-2019)
  - [Course organization](#course-organization)
- [**1. Dynamic Host Configuration Protocol (DHCP) Overview**](#1-dynamic-host-configuration-protocol-dhcp-overview) (3 videos)
  - [What is DHCP?](#what-is-dhcp)
  - [Lease generation](#lease-generation)
  - [Lease renewal](#lease-renewal)
- [**2. Setting Up DHCP**](#2-setting-up-dhcp) (7 videos)
  - [Install the DHCP server role](#install-the-dhcp-server-role)
  - [Authorize a DHCP server](#authorize-a-dhcp-server)
  - [Create DHCP scopes](#create-dhcp-scopes)
  - [Configure DHCP options](#configure-dhcp-options)
  - [Activate a scope](#activate-a-scope)
  - [Configure DHCP clients](#configure-dhcp-clients)
  - [Configure DHCP reservations](#configure-dhcp-reservations)
- [**3. Managing DHCP**](#3-managing-dhcp) (5 videos)
  - [Components of a DHCP database](#components-of-a-dhcp-database)
  - [Reconcile DHCP scopes](#reconcile-dhcp-scopes)
  - [Database statistics](#database-statistics)
  - [Secure DHCP](#secure-dhcp)
  - [Troubleshoot DHCP](#troubleshoot-dhcp)
- [**4. DHCP Advanced Features**](#4-dhcp-advanced-features) (5 videos)
  - [Configure DHCP failover](#configure-dhcp-failover)
  - [Manage DHCP failover](#manage-dhcp-failover)
  - [DHCP in a routed environment](#dhcp-in-a-routed-environment)
  - [Configure a DHCP relay agent](#configure-a-dhcp-relay-agent)
  - [Test relay agent](#test-relay-agent)
- [**5. Deploying DNS (Domain Name System)**](#5-deploying-dns-domain-name-system) (3 videos)
  - [Install DNS with Active Directory](#install-dns-with-active-directory)
  - [Install the DNS role independently](#install-the-dns-role-independently)
  - [DNS client configuration](#dns-client-configuration)
- [**6. DNS Zones**](#6-dns-zones) (6 videos)
  - [Create primary forward lookup zones](#create-primary-forward-lookup-zones)
  - [Configure zone transfers](#configure-zone-transfers)
  - [Create secondary forward lookup zones](#create-secondary-forward-lookup-zones)
  - [Create stub zones](#create-stub-zones)
  - [Active Directory–integrated zones](#active-directoryintegrated-zones)
  - [Create reverse lookup zones](#create-reverse-lookup-zones)
- [**7. DNS Resource Record Types**](#7-dns-resource-record-types) (4 videos)
  - [Host and pointer (PTR) records](#host-and-pointer-ptr-records)
  - [Alias (CNAME) record](#alias-cname-record)
  - [Mail exchanger (MX) record](#mail-exchanger-mx-record)
  - [Additional resource record types](#additional-resource-record-types)
- [**8. Name Resoution**](#8-name-resoution) (6 videos)
  - [DNS queries](#dns-queries)
  - [Testing queries](#testing-queries)
  - [DNS cache](#dns-cache)
  - [Forwarding](#forwarding)
  - [Conditional forwarding](#conditional-forwarding)
  - [Caching only DNS servers](#caching-only-dns-servers)
- [**9. DNS Security**](#9-dns-security) (3 videos)
  - [DNS cache locking](#dns-cache-locking)
  - [DNS socket pool](#dns-socket-pool)
  - [DNS security extensions](#dns-security-extensions)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [DHCP and DNS in WIndows Server 2019](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dhcp-and-dns-in-windows-server-2019?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dhcp-and-dns-in-windows-server-2019?u=76281980&t=0)** - [Ed Liberman] DHCP and DNS are the two main networking components for any functioning [[Windows Server]] network.
>
> **[0:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dhcp-and-dns-in-windows-server-2019?u=76281980&t=7)** In fact, without them, you essentially don't even have a network.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dhcp-and-dns-in-windows-server-2019?u=76281980&t=12)** To be a successful administrator who manages a [[Microsoft]] network environment, it is crucial to have a solid understanding of Enterprise networking.
>
> **[0:20](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dhcp-and-dns-in-windows-server-2019?u=76281980&t=20)** In this course, we'll be taking a look at these two primary networking services, DHCP and DNS.
>
> **[0:27](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dhcp-and-dns-in-windows-server-2019?u=76281980&t=27)** First, we're going to take a look at DHCP, where we'll learn all about how to install, configure, and manage a DHCP server.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dhcp-and-dns-in-windows-server-2019?u=76281980&t=35)** Then, we're going to jump into DNS, so we can see how name resolution works in the Enterprise network.
>
> **[0:42](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dhcp-and-dns-in-windows-server-2019?u=76281980&t=42)** So please join me, Ed Liberman, in my [[LinkedIn]] Learning course on DHCP and DNS services in Windows Server 2019.
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dhcp-and-dns-in-windows-server-2019?u=76281980&t=51)** Let's get started!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows Server]] (2), [[Microsoft]] (1), [[LinkedIn]] (1)
> **Env Vars:** dhcp (5), dns (4)
> **Prerequisites:** install (1), configure (1)
> **Speakers:** - [ed (1)

#### [Course organization](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/course-organization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/course-organization?u=76281980&t=0)** - [Instructor] In this course I'm expecting that you should hopefully have at least some basic knowledge of [[Windows Server]] environments.
>
> **[0:08](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/course-organization?u=76281980&t=8)** Now it's not mandatory, you could come into this course without any prior knowledge, but it would certainly be helpful if you had at least some general basic knowledge of Windows Server operating systems, whether it's Windows Server 2019, or even something prior.
>
> **[0:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/course-organization?u=76281980&t=23)** Now, as far as the demonstration is going, you'll notice on my system here that I have seven [[Virtual Machines]] setup.
>
> **[0:30](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/course-organization?u=76281980&t=30)** Okay, I can tell you that I have DC1, 2, and 3, and they are just what you think they would be.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/course-organization?u=76281980&t=37)** They are domain controllers.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/course-organization?u=76281980&t=38)** I can tell you that primarily DC1 and 2 are in place so that we can have some level of redundancy, okay, but the reality is is you could get away with just DC1.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/course-organization?u=76281980&t=50)** And DC3 is a domain controller that we will create within the course.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/course-organization?u=76281980&t=56)** Okay, so technically you could have just one domain controller and another machine ready to become a domain controller.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/course-organization?u=76281980&t=61)** We also have a couple of member servers.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/course-organization?u=76281980&t=64)** Again, I do everything so I have multiples, but primarily everything can be done on a single member server.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/course-organization?u=76281980&t=69)** And then I have a couple clients, Client1 and Client2.
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/course-organization?u=76281980&t=72)** I do use both of them.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/course-organization?u=76281980&t=74)** I use Client2 actually for one specific lab, but otherwise you probably could get away with a single client as well, if you want to follow along.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/course-organization?u=76281980&t=84)** So, in quick summary I have seven machines, three domain controllers, two member servers, and two clients.
>
> **[1:31](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/course-organization?u=76281980&t=91)** I would say the bare minimum you can get away with would be one domain controller, one machine ready to become a domain controller, one member server and one client.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows Server]] (3), [[Virtual Machines]] (1)
> **Env Vars:** dc1 (3), dc3 (1)
> **Definitions:** is a  (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)


### 1. Dynamic Host Configuration Protocol (DHCP) Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [What is DHCP?](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/what-is-dhcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/what-is-dhcp?u=76281980&t=0)** - [Instructor] Before you deploy any networking service role out on to your network, it's important that you have an understanding of what that networking service is going to provide and what kind of an effect it's going to have in your network environment.
>
> **[0:14](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/what-is-dhcp?u=76281980&t=14)** So here, I'd like to talk to you about the DHCP networking service, and really, you should know that DHCP is a server role in [[Windows Server]] 2019.
>
> **[0:26](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/what-is-dhcp?u=76281980&t=26)** And additionally, you'll see that it is a protocol, meaning it's not a [[Microsoft]] thing, it's a networking protocol in any environment.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/what-is-dhcp?u=76281980&t=36)** So the letters DHCP actually stand for the Dynamic Host Configuration Protocol, and this is a protocol that's used to simplify the configuration of IP clients out on your network and reducing the complexity and amount of administrative work by using automatic IP configuration.
>
> **[0:58](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/what-is-dhcp?u=76281980&t=58)** So the real simplified definition is that it's a way of dynamically or automatically configuring IP addresses out on your clients.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/what-is-dhcp?u=76281980&t=67)** So what are some of the benefits of using DHCP versus not using it?
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/what-is-dhcp?u=76281980&t=71)** Well one real obvious benefit is when using DHCP, all your clients are going to get their IP addresses automatically, whereas without DHCP, you're going to have to go around to every single client and type in the information one by one.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/what-is-dhcp?u=76281980&t=87)** And that's a lot of work.
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/what-is-dhcp?u=76281980&t=89)** And you have to know that beside the workload that's involved, the other advantage to having everything done dynamically is that you will get a consistent configuration every time.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/what-is-dhcp?u=76281980&t=101)** And if there are any changes to the configuration, the clients will get that update automatically.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/what-is-dhcp?u=76281980&t=107)** Whereas again, if you're doing things without DHCP and you're typing everything in manually, you may have a typo at any given machine with just a simple slip of the keyboard.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/what-is-dhcp?u=76281980&t=118)** And then also, if there's a change to the configuration, there's always the possibility that a client won't get that change and then you'll have communication issues.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/what-is-dhcp?u=76281980&t=127)** So as you can see, the benefit of using DHCP is quite great.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows Server]] (1), [[Microsoft]] (1)
> **Env Vars:** dhcp (8)
> **Definitions:** is a  (3)
> **Speakers:** - [instructor] (1)

#### [Lease generation](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=0)** - [Instructor] So let's talk about the actual DHCP Lease Generation process.
>
> **[0:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=7)** It is a four-step process, commonly known as DORA.
>
> **[0:13](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=13)** So if you've ever heard anybody just generally talking about a DORA process, they're talking about DHCP Lease Generation.
>
> **[0:20](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=20)** So what do we mean by DORA?
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=22)** Well, first of all, the letters are D, O, R, A, and each letter represents one of the four steps in the process.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=33)** So let's talk about step one.
>
> **[0:34](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=34)** Step one is D, and that stands for discover.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=39)** What happens is that a client who needs an IP address, and it's been configured to get it automatically from a DHCP server, it needs to discover the presence of any DHCP servers on the network.
>
> **[0:54](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=54)** So it will do a broadcast, the net broadcast package, by the way, is actually called a DHCP Discover.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=61)** If you ever sniff your packets out on the network, and you see DHCP Discover, that's where this comes from.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=68)** But what the client is basically doing is, it's just broadcasting out, hey, I'm a client, and I need an IP address.
>
> **[1:15](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=75)** Is there any DHCP server out there that can help me?
>
> **[1:19](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=79)** So that's the discover process.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=82)** Then from there, we go in to step two, which is, any DHCP servers on the network which hear that broadcast, they will go ahead and make an offer back to the client.
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=98)** So that's the O in step two, it's for offer.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=101)** And any and all DHCP servers that hear that original discover, are kind of yelling back to the client saying, yes, I am here, I'm a DHCP server.
>
> **[1:52](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=112)** And I have an IP address for you.
>
> **[1:55](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=115)** Here it is if you want it.
>
> **[1:57](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=117)** So it makes an offer.
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=119)** Then the client, in step three, will make a request.
>
> **[2:04](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=124)** And that's what the R stands for.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=126)** So the client will request back to the DHCP server and say, yes, I would indeed like that IP address.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=135)** That is the one I'm going to take.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=138)** And it'll do that to whatever is the first DHCP server it hears back from if there happens to be more than one.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=143)** It'll send that request back to the DHCP server and then the final step is A for acknowledge.
>
> **[2:31](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=151)** Some people say acknowledgement, and the reality is that the actual packet on the network is called a DHCP ACK.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=159)** So just A-C-K.
>
> **[2:42](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=162)** And that is the DHCP server responding back to the client with an acknowledgment saying, okay, it's yours, it's been logged in my database, and you have it for x amount of time, whatever the least duration is.
>
> **[2:57](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=177)** So just as a quick review, the four-step process is, a client first discovers the presence by saying, hey, I'm looking for a DHCP server.
>
> **[3:05](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=185)** Then DHCP server responds back with an offer saying, I'm here, here's an IP address.
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=190)** Then from there, the client says, thank you, I would like that IP address, that's my request.
>
> **[3:15](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=195)** And step four is the server responding back with an acknowledgment saying, okay, you got it, it's been logged, and here's how long you can have it.
>
> **[3:24](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=204)** That is the DHCP Lease Generation process.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (18), dora (3), ack (1)
> **Definitions:** is a  (2), stands for (2), known as (1), is called (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### [Lease renewal](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=0)** - [Instructor] When a client gets his IP address from a DHCP server, we called it a DHCP lease.
>
> **[0:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=7)** And if you think of the term lease, it's almost kind of like you're renting it.
>
> **[0:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=10)** You only get to use it for a specified amount of time.
>
> **[0:13](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=13)** It's for that reason, we actually have something called the DHCP lease renewal process.
>
> **[0:20](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=20)** Now the renewal process is actually quite simple, and the reason why is because the client already knows about the DHCP server, so there's no reason to go through a DORA process.
>
> **[0:31](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=31)** All it's going to do is go right back to the DHCP server with a request.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=37)** So we're going to jump right to the R part to DORA and it's going to say hey DHCP server, I'd like to request to renew the lease on this IP address.
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=47)** And then the second part, it's just a two step process, is the server responding back with an acknowledgement to say yup, you got it.
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=55)** I'm going to renew your lease.
>
> **[0:59](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=59)** You can now have it for, again, some X amount of time.
>
> **[1:05](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=65)** And that really is how simple the lease renewal process is.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=68)** What is probably more important to understand, is not the obvious two step process of saying hey can I renew, yes you can.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=78)** But when does it happen?
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=80)** Well a client will attempt to renew its lease after 50% of the lease duration has expired.
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=89)** Okay so it doesn't just wait unit the full lease has been used up, because in that case, what if the DHCP server was down right in that moment?
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=98)** So we actually do this at 50%.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=100)** So let me give you a scenario.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=102)** The default DHCP lease time is eight days.
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=106)** So if we were to give an eight day lease out to a client, then after four days, it's going to reach back out to the DHCP server and say hey, I'd like to refresh or renew this lease for a fresh eight days.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=120)** All right, and if the DHCP server responds, great, we got a fresh eight days.
>
> **[2:04](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=124)** And then four days in again it will try, but if the DHCP server is not available when it attempts to renew, well the client's only used up 50% of its lease, so it just continues to use that IP address.
>
> **[2:19](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=139)** All right, and it uses it until another 50% of the remaining time has passed.
>
> **[2:24](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=144)** All right, so again, going back to the eight day scenario.
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=147)** We try to renew at four days, and if we're not able to do that, we have four days left.
>
> **[2:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=152)** Which means half of that, we're going to try again in two days.
>
> **[2:36](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=156)** And if we can't do that again, we'll try again in half of the remaining two days, which is one day.
>
> **[2:42](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=162)** And it will keep doing this every half life, so to speak, until it gets to 87.5% of the lease being expired.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=172)** At this point, it will attempt to do the full DHCP lease generation process.
>
> **[2:57](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=177)** Okay it'll go back out and say, it's thinking to itself, wow I'm down to only 12 and a half percent of my lease time left, and I don't want to lose this IP address.
>
> **[3:06](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=186)** So it just kind of yells out with a discover all over again to say is there any DHCP server who's available to help me out here?
>
> **[3:14](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=194)** And hopefully it finds a DHCP server and if it does, everything's great, but if it doesn't, then at that point, it will basically just hold on till it gets to 100%.
>
> **[3:25](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=205)** At which point it loses the IP address, and it just starts all over again with the full lease generation process hoping to get a new IP address.
>
> **[3:35](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=215)** And that's how DHCP lease renewal work.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (15), dora (2)
> **Versions:** 87.5 (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)


### 2. Setting Up DHCP

[↑ Back to Table of Contents](#table-of-contents)

#### [Install the DHCP server role](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=0)** - [Instructor] The first step when it comes to deploying DHCP out in your network would be to install the DHCP server role onto one of your servers.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=9)** To demonstrate this, I'm going to connect to a server I have here called DC-1.
>
> **[0:14](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=14)** Here in the server manager, if we want to install a role, we have to click where it says add roles and features.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=22)** We start off with the before you begin screen, which just kind of says, hey you're about to do something significant, so make sure all your security and IP configuration is in place.
>
> **[0:31](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=31)** We know it is, so I'm going to go ahead and click next.
>
> **[0:34](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=34)** This is going to be a role-based installation, so I can leave the default and click next again.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=39)** The server where you want to install this role on is DC-1, which is already selected, so I will click next.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=45)** And now I get to choose the actual role.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=48)** If you look on the list, you'll see that we do have an option for DHCP server.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=52)** If I check the box, you'll see I get a little pop out that says there's other features that are required as part of this installation.
>
> **[0:58](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=58)** And so I'll say okay, go ahead and add those features.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=61)** And then I can click next.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=64)** Here I get the list of all the other features, in case there was anything else I wanted to install, but I don't need anything else, so I will click next.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=70)** I get an overview of what DHCP is, I will click next.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=74)** And finally I get a confirmation of what we're about to do.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=78)** On this screen, what I typically like to do, even though it's not needed as much anymore, is I like to check this box at the top that says that if a reboot is needed as part of this process, go ahead and do it automatically.
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=89)** Now when I check this box, I'll get a little warning saying, hey, you know, this is a server, somebody else might be connected to it, or maybe we're even doing this remote and somebody's on the machine and you're going to kick them off.
>
> **[1:39](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=99)** I know that we're okay here, so I'll click yes to the warning and install.
>
> **[1:45](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=105)** And at this point, it begins the installation of the DHCP server role and the features that go along with it.
>
> **[1:51](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=111)** Okay, so we can see that the installation has completed, but you'll notice that it says configuration required, and a little further down, there's a little link here to complete the DHCP configuration.
>
> **[2:05](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=125)** So I'm going to click on that link, and you'll see here that there's a couple of things that are going to happen.
>
> **[2:11](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=131)** One is that two security groups are going to be created in our [[Active Directory]] environment, specifically for DHCP server administration.
>
> **[2:22](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=142)** And I say in active directory because we are in an active directory environment.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=145)** If you're in a stand-alone work group, it would just be on the server.
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=149)** So we have DHCP administrators and users, which are two different groups that you can use to delegate various permissions on managing the DHCP server out to other users in your environment.
>
> **[2:41](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=161)** The other thing that's going to happen is it's going to authorize the DHCP server on this computer.
>
> **[2:48](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=168)** And you'll see here it says, only if it's domain joined, because authorizing is something that only relates to an active directory environment.
>
> **[2:54](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=174)** And basically this is what makes it that you don't end up with any rogue DHCP servers out on your network.
>
> **[3:02](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=182)** You have to be somebody of an enterprise administrator level to go ahead and authorize this DHCP server, so you don't end up with any DHCP servers that aren't supposed to be there, because they can cause all kinds of IP conflicts and can also be a [[Security Risk]] to letting people on your network.
>
> **[3:17](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=197)** So I'm going to go ahead and click on next, and now I need to give the credentials, and it defaults to who I'm logged in as, which is the Landon Hotel administrator, which is the domain administrator and also the enterprise administrator for the Landon Hotel dot local forest.
>
> **[3:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=212)** So I will accept those credentials and click commit.
>
> **[3:36](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=216)** And at this point, you'll see here that we have created the security groups, says done, and we have authorized the DHCP server.
>
> **[3:44](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=224)** Done.
>
> **[3:45](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=225)** So I will click close, and I can close this window, and we have installed the DHCP server role.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (4), [[Security Risk]] (1)
> **Env Vars:** dhcp (15)
> **Prerequisites:** install (5), before you begin (1)
> **UI Navigation:** click on (2)
> **Warnings:** warning (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Authorize a DHCP server](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/authorize-a-dhcp-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/authorize-a-dhcp-server?u=76281980&t=0)** - [Instructor] Before you can perform any real management of DHCP, you need to make certain that the DHCP server has been authorized in [[Active Directory]] to be able to serve clients in your environment.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/authorize-a-dhcp-server?u=76281980&t=17)** So here in the Server Manager, we're going to go up to the Tools menu and you'll see there is a selection for DHCP because we have installed the role.
>
> **[0:26](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/authorize-a-dhcp-server?u=76281980&t=26)** When I click on it it takes us into the DHCP Manager.
>
> **[0:30](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/authorize-a-dhcp-server?u=76281980&t=30)** Now here in the DHCP Manager, you'll see that we have the server DC one dot landonhotel dot local that's the actual machine we installed DHCP on and if I expand that you see we have a couple of management options.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/authorize-a-dhcp-server?u=76281980&t=43)** We have IP version four and IP version six.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/authorize-a-dhcp-server?u=76281980&t=46)** I will tell you that there's not much in the way of DHCP management on IP version six so most of what we'll be dealing with will be with IP version four.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/authorize-a-dhcp-server?u=76281980&t=56)** But for right now what I want you to focus on is on both IP v four and six, both of the little servers here, it's very tiny, but [[Microsoft]] does put a little green circle with a check mark on it and that represents that the server is authorized and that IP version four or six, depending on which one you're working with, is ready to go ahead and service clients.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/authorize-a-dhcp-server?u=76281980&t=87)** And the reason that we see that is because we went ahead and told the server to go ahead and get authorized as part of the role installation but I want to show you what you would do in case you come across a server that is not authorized.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/authorize-a-dhcp-server?u=76281980&t=100)** If I click on DC one up at the top and then I right+click on it, you'll notice that there's an option here, it's the second one on the list, to Unauthorize and this is a toggle selection so I'm going to click on it and it's going to give me a warning saying that if you remove authorization it means the DHCP server cannot respond to any client requests.
>
> **[2:04](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/authorize-a-dhcp-server?u=76281980&t=124)** Okay, well we know what we're doing here so I'm going to click Yes and watch what happens.
>
> **[2:09](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/authorize-a-dhcp-server?u=76281980&t=129)** Nothing.
>
> **[2:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/authorize-a-dhcp-server?u=76281980&t=130)** The reason nothing happens is it's a little bit awkward.
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/authorize-a-dhcp-server?u=76281980&t=132)** The DHCP manager, it doesn't refresh itself, okay, so something has happened, you just don't see it.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/authorize-a-dhcp-server?u=76281980&t=138)** So I'm going to go ahead and click on the Refresh button and now you can see that the green circles with the check mark in it have now become white circles with a red down arrow.
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/authorize-a-dhcp-server?u=76281980&t=150)** That is what you will see if you have an unauthorized server.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/authorize-a-dhcp-server?u=76281980&t=155)** If I right+click on DC one again, you'll notice that this time the selection, I mentioned it was a toggle, is actually to Authorize.
>
> **[2:45](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/authorize-a-dhcp-server?u=76281980&t=165)** All right, so if you come across a server that is not currently authorized, all you have to do is right+click on it in the DHCP manager and select Authorize and when I do, again, notice nothing happens.
>
> **[2:59](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/authorize-a-dhcp-server?u=76281980&t=179)** Something did happen, it just doesn't show up on the screen, it doesn't refresh on its own so I'm going to click the Refresh button and just like that, you'll see that we go back to our green circles with the check mark in it.
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/authorize-a-dhcp-server?u=76281980&t=190)** The only thing that I am going to emphasize is that you need to remember that in order to be able to authorize a DHCP server to be able to service clients in your network you have to have enterprise administrator credentials, okay, because this is to prevent some lower-level rogue administrator from creating a DHCP server you don't want in your enterprise.
>
> **[3:38](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/authorize-a-dhcp-server?u=76281980&t=218)** So that is how we authorize a DHCP server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (1), [[Microsoft]] (1)
> **Env Vars:** dhcp (13)
> **UI Navigation:** click on (7), toggle (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Analogies:** just like (1)
> **Warnings:** warning (1)

#### [Create DHCP scopes](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=0)** - [Instructor] Once you have installed the DHCP Server Role and you have confirmed that the server is authorized and ready to serve clients, the next thing you need to do is create a scope.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=11)** So here we're in the DHCP Manager on dc-1, where we've installed the DHCP Server Role, and you'll notice that we have IP version four and six, and we're going to be dealing with IP version four here.
>
> **[0:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=23)** So let me expand that.
>
> **[0:25](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=25)** When I do, you'll see we have a few different management options, but not much, and the reason is 'cause there's really nothing there to manage yet 'cause we need to create a scope.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=35)** So to create a scope, I'm going to click on IP version four to highlight it, and you'll see here on the right, it says you need to add a scope.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=43)** So to do that, I'm going to right-click on IP version four and select New Scope.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=50)** When I do this, it opens up the New Scope Wizard.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=53)** First, we have a Welcome screen.
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=55)** I will just click Next through that.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=57)** We have to give it a name, so I'll call it LandonHotelClients.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=63)** I could add a description if necessary, but I'll leave that blank for now and I'll click Next.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=69)** And here is where I get to select the IP range of addresses that I'm going to hand out.
>
> **[1:15](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=75)** So here on my network, I am working within a certain range, and I'm going to select a subset of that range to hand out to my clients.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=85)** And that range is going to be 10.35.4.101, okay, so that's going to be the first IP address.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=93)** And then I'm going to go to the End IP address and I'll put in 10.35.4.120.
>
> **[1:39](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=99)** All right, so that's a range of 20 IP addresses that I can hand out to up to 20 clients.
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=106)** Down below is where we set the Subnet mask that's going to go with the IP address.
>
> **[1:51](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=111)** Now it's defaulting to eight because any IP address that starts with 10 is assumed to be a class A address, which means it'll have a Subnet mask of 255.0.0.0, but that is not the Subnet mask I'm using in my network here.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=127)** I'm actually using a slash 26, so I'm going to put a 26 in the length, and that then you'll see changes it to a Subnet mask of 255.255.255.192.
>
> **[2:19](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=139)** And that is the Subnet mask that we are using for the Subnet that I have here in my environment.
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=149)** At this point, I can click on Next, and I get to decide are there any exclusions in the range?
>
> **[2:34](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=154)** Where we would use an exclusion is if I have a range of IP addresses, but maybe there are some in the middle of that range that are already being used for something else or I just don't want to hand them out to clients.
>
> **[2:47](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=167)** So for an example, I'm going to put in 10.35.4.111, and for an End range, I'll put in 10.35.4.113, right.
>
> **[2:58](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=178)** So I'm going to say that those three IP addresses in the middle of that block of 20, I don't want to hand those out.
>
> **[3:04](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=184)** This is a mistake a lot of people make.
>
> **[3:06](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=186)** A lot of people will add that range and then they will click on Next.
>
> **[3:11](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=191)** The problem is that range has not actually officially been added yet, you have to click the Add button, and when you do, you now see it appear in the box where it says Excluded address range.
>
> **[3:22](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=202)** Now I can go ahead and click on Next, and this takes me to the Lease Duration page.
>
> **[3:28](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=208)** And you'll see that the default, it's a little hard to see 'cause it highlights the Days, let me click over on Minutes, so you can see that the Days is eight days, so eight days, zero hours, and zero minutes.
>
> **[3:38](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=218)** That's the default setting for the lease duration, and for many networks, that's perfectly acceptable, so just go ahead and keep the eight-day lease duration time.
>
> **[3:49](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=229)** The only time you would really ever change it is if you had an environment that was either extremely static, or maybe you want to lower the DHCP traffic and let the leases last longer than eight days, or if you have an extremely volatile environment where you have constant people coming and going on a regular basis, maybe they come in, they have a laptop, they're only there for a few hours and then they leave, well, you don't want to have an IP address held up for eight days 'cause you might run out of IP addresses, so you may lower the lease at that point.
>
> **[4:24](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=264)** In this case, I'm going to keep the default and go ahead and click on Next.
>
> **[4:28](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=268)** Now I have the choice to configure some additional DHCP options, things that you would also typically configure with an IP address like a default Gateway, DNS servers, things like that.
>
> **[4:39](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=279)** Now the default is Yes, so go ahead and configure these options now 'cause it is something you typically would do.
>
> **[4:45](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=285)** In this case, I'm going to click No, and the reason why is 'cause I want to show you how you can configure these options manually later.
>
> **[4:54](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=294)** I will click Next and Finish.
>
> **[4:57](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=297)** And at this point, you can see that I now have a Scope called LandonHotelClients.
>
> **[5:05](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=305)** And that is how you create a scope.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (5), right-click (1), select the (1), go to (1)
> **Env Vars:** dhcp (5), dns (1)
> **Versions:** 10.35.4 (4), 255.0.0 (1), 255.255.255 (1)
> **Prerequisites:** configure (4)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Configure DHCP options](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=0)** - [Instructor] DHCP options give us the ability to make it that we're not just configuring our clients with an IP address but with a complete IP configuration.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=9)** So we can include things like a default gateway and a DNS server, stuff like that.
>
> **[0:13](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=13)** So there's a few different ways we can go about assigning these DHCP options.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=18)** Now, we saw one when we created the scope, we had a choice to go ahead and add the DHCP options there.
>
> **[0:26](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=26)** But additionally, we have the ability to server options.
>
> **[0:30](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=30)** Here in the DHCP administrator, we have server options, and this is where I could add options for all clients that this server is going to be servicing.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=43)** If I expand my scope that I created, the Landon Hotel Clients scope, you'll see that there's an option there for scope options.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=52)** All right, so that's how we can do it just for this individual scope, and I will tell you there is one other place you can do it.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=60)** We're going to get into this later, but it's with reservations.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=64)** When you create a reservation, you can also put some additional options there.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=69)** Now, why is this significant that you have the different options of where to do it?
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=72)** Well, in the event that there is a conflict, like we set up some options for the server, but then we also have some different options for the scope, the client will always get the options that are closest to the client itself, okay?
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=85)** Meaning the server is furthest away, scope is the next closer, and a reservation would be the absolute closest.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=92)** But let me show you how to do it at the scope level.
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=95)** All right, here we have our scope options.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=97)** So I'm going to click on it, and then I'm going to right-click and select to configure options.
>
> **[1:43](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=103)** Here, I get a list of all the various options that we could configure, and there are quite a few.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=109)** But there's only a small subset that are very common.
>
> **[1:53](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=113)** One would be the router.
>
> **[1:54](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=114)** Right here we have 003 Router.
>
> **[1:56](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=116)** I'm going to check the box, and then here is where I can put in the IP address of the default gateway that we want to assign to the client.
>
> **[2:05](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=125)** So I'm going to put in 10.35.4.65.
>
> **[2:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=130)** That is the default gateway on my network, and then I'm going to click Add.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=135)** And you'll see it's been added there.
>
> **[2:17](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=137)** If I scroll down just a little bit, here's 006 DNS Servers, and I'm going to click on that.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=145)** And I need to put in the IP address of the DNS servers that I want to point to, and in this case it's going to be 10.35.4.81, and I'm going to click Add.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=157)** And, in fact, we want to do more than one DNS server, so I'm going to put in 10.35.4.82, okay?
>
> **[2:46](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=166)** I have two of them I want to add.
>
> **[2:47](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=167)** And you'll notice, by the way, when I click Add, it does a quick validation to make sure that the DNS server service is running on the machine that we just pointed to, which is helpful in case you accidentally type the wrong IP address, it'll go ahead and flag you and say that's not a valid DNS server.
>
> **[3:02](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=182)** If I scroll down just a little bit more, we have DNS Domain Name.
>
> **[3:08](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=188)** So if I check that box, I can go ahead and I can put in landonhotel.local, which just means that it will be assigned with that default DNS suffix.
>
> **[3:19](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=199)** At this point, I'm going to go ahead and click OK, and you'll see here that three options have been created as scope options to be handed out with the IP address information in this scope.

> [!info]- Semantic Content
>
> **Env Vars:** dns (8), dhcp (4)
> **UI Navigation:** click on (2), scroll down (2), right-click (1)
> **Versions:** 10.35.4 (3)
> **Prerequisites:** configure (2), set up (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1), means that (1)
> **Speakers:** - [instructor] (1)

#### [Activate a scope](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=0)** - [Instructor] Once we have created a scope and made sure that it has been completely configured the way it should be configured.
>
> **[0:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=7)** The next thing we need to do is activate the scope so that it can begin handing out IP configuration to the clients.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=15)** So here, in the DHCP Administrator, you'll notice that over on the left, let's kind of look at everything here.
>
> **[0:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=23)** First of all, IP version 4, you'll notice that it no longer has a green circle with a check mark but it actually has a blue circle with an exclamation point.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=33)** Which means something isn't quite done being configured, that's what that represents.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=38)** Furthermore, if you look at the scope, Landon Hotel Clients, you'll notice it has a circle with a red down arrow.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=46)** You'll also notice over in the center section here if you look at the scope that still has the red down arrow to the right of it it actually says it's 'inactive'.
>
> **[0:58](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=58)** Alright. So it's telling you this is not an active scope that can hand out IP addresses yet.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=64)** So, what do we want to do to make sure that we're good to go?
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=67)** Well, the first thing is let's click on the Address Pool for the scope.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=70)** And we see here that we have a pool of 10.35.4.101 to 120, so we have a range of 20 IP addresses that we're going to hand out.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=80)** We want to confirm that's what we want, and it is.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=83)** From that range of 20 IP addresses, we also notice that there is three of them, which is 111 to 113, which have been excluded from being able to be distributed and that is, again, something that we do want.
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=95)** If I click on address leases you won't see anything cause we are not active yet to be handing out.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=100)** That's something we would see later after a lease has been handed out.
>
> **[1:44](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=104)** The reservations, that's something we will cover in another video.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=108)** And then, if we move down to scope options, you'll see here that we've set up our options to hand out a default gateway, DNS Servers, and domain name.
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=119)** So, looks like everything is ready to go.
>
> **[2:02](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=122)** So, how do we activate the scope?
>
> **[2:04](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=124)** Well, all you have to do is click on the scope.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=126)** And then, right click on it and you'll see, right about in the middle, there is an option to activate.
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=132)** And when I click on it, you'll see that the red down arrow goes away.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=138)** And you'll notice on IP version 4 we now go back to the green circle with the check mark.
>
> **[2:22](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=142)** And in fact, if I click on IP version 4, you'll see over on in the center pane here where it says the scope Landon Hotel Clients.
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=150)** That particular scope is now under a status of 'active', to show that it has been activated.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=155)** Now if we ever want to deactivate, or make it inactive again all we have to do is click on the scope and then right click.
>
> **[2:45](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=165)** And you'll see here that where it used to say activate it now says deactivate.
>
> **[2:49](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=169)** Okay, so it's a toggle.
>
> **[2:51](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=171)** Very similar to what we saw earlier in another video on being able to authorize or unauthorize.
>
> **[2:57](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=177)** Alright, so now that we have activated the scope, we are truly ready to begin handing out IP addresses to our clients.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (7), toggle (1)
> **Versions:** version 4 (3), 10.35.4 (1)
> **CLI Commands:** make (2)
> **Env Vars:** dhcp (1), dns (1)
> **Cross-References:** go back to (1), earlier in (1)
> **Definitions:** is an  (1)
> **Analogies:** similar to (1)
> **Prerequisites:** set up (1)

#### [Configure DHCP clients](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=0)** - [Instructor] Once you've installed the DHCP server role, created a scope, and activated it, it's time to go ahead and set up your clients to be able to start retrieving their IP configuration from a DHCP server.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=12)** So to demonstrate that, I have a couple of client machines that I have running here, and I'm going to connect to Client-1, which is simply a [[Windows 10]] client computer running in our domain.
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=24)** Now, in order to configure this system to get its IP address from a DHCP server, we have to get to our network connections.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=32)** Now, there's a few different ways to do it depending on the specifics of your client machine, but I'm going to show you one that's pretty consistent across the board, and that is to click on Start, and then to just start typing the [[Microsoft Word|word]] control, which will give you the ability to jump into the control panel.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=50)** Here in the control panel, I'm going to click on Network and Internet, then I'm going to click on Network and Sharing Center, and inside there, you'll see there is an option for Change Adapter Settings.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=61)** And when I click on that, it opens up my network connections window, where I can see my ethernet connection.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=67)** At this point, I right-click on the ethernet connection and go to its properties, and the properties that I want to adjust are going to be the internet protocol version four property, so I want to click on that.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=78)** Now, be careful, don't click on the checkbox, that'll make the check go away.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=81)** You want to click on the words to highlight it, and then click Properties.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=85)** Now you'll see here in this window that right now, I have a static IP configuration that has been put in place.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=93)** I did that so that this system would communicate with the network until I had DHCP in place.
>
> **[1:39](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=99)** Now, if I wanted to change this to being a DHCP client, I just simply click the button that says obtain an IP address automatically.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=107)** And when I do that, a couple things are going to happen.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=109)** One, you're going to see that the IP configuration will blank out, and two, I want you to notice up here next to the General tab how it's blank right now, but it won't be when I click this button.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=118)** So I'm going to click the button, everything blanks out, and we get an alternate configuration option.
>
> **[2:04](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=124)** Now, we'll look at that in just a second, but first I want to show you the bottom half here where again, from a DNS server perspective, we can do that statically, or if we configure the DHCP options on our DHCP server, which I did, I can also choose to get that automatically as well.
>
> **[2:20](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=140)** So what about this alternate configuration tab?
>
> **[2:22](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=142)** This is how you determine what this client's going to do in the event that it can't find a DHCP server.
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=150)** All right, so I'm going to click on that, and you'll notice the default is to go to something called APIPA, A-P-I-P-A, which is automatic private [[IP Addressing]].
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=159)** And that's where it will dynamically give itself an IP address in the 169.254 range, and it can talk to other computers that have that same IP range, but it can't get out of your network, it can't be routed.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=172)** So if you need a good backup, then you can click on User Configured and give it a static backup address.
>
> **[3:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=180)** Okay, we're not going to worry about any of that right now.
>
> **[3:02](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=182)** So I'm going to leave it at automatic private IP addressing.
>
> **[3:04](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=184)** Go back to the General tab, and one real quick comment I want to mention here is that even though I had to come into this window and configure from static to dynamic, the default is exactly the way you see it right now.
>
> **[3:20](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=200)** When you first install any [[Microsoft]] client operating system, the default is for the IP address to be obtained automatically.
>
> **[3:29](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=209)** So you wouldn't have to come and really do anything for this to happen.
>
> **[3:34](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=214)** So let me click OK, and then close this window, and I'm actually going to close out of all of my [[Windows]].
>
> **[3:41](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=221)** And let's see what has happened.
>
> **[3:44](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=224)** I'm going to click on Start, and this time I'm going to type in CMD, which takes me to a command prompt option here.
>
> **[3:51](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=231)** Here in the command prompt window, I'm going to type in IP Config, and I'm going to put a space and then a forward slash all.
>
> **[3:59](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=239)** And when I hit Enter, you'll notice that I have an IP address, right here it says IPv4 Address of 10.35.4.101, with a subnet mask of triple 255.192.
>
> **[4:12](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=252)** You'll see that because the options were configured, I have a default gateway of 10.35.4.65.
>
> **[4:18](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=258)** The DHCP server it got this information from happens to be 10.35.4.81, which is the IP address of DC1, our DHCP server.
>
> **[4:28](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=268)** And it has pointed to DNS servers of 81 and 82, which was also an option that we set up.
>
> **[4:34](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=274)** So indeed, everything is working.
>
> **[4:36](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=276)** Now, a couple other quick IP config commands you should be familiar with on your clients, and they would be IP config forward slash release, which is where we go ahead and release the IP address from the DHCP server, so I'll hit Enter.
>
> **[4:53](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=293)** And you'll notice now I have no IP configuration.
>
> **[4:56](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=296)** And the other command would then be IP config forward slash renew, and that's where it's going to go through and it's going to take just a moment while it reaches out and does the DORA process that we learned about in another video to communicate with the DHCP server, and you'll see that once again it has received an IP address.
>
> **[5:13](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=313)** All right, so that is how you configure your client.
>
> **[5:17](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=317)** The one last thing I think we should take a look at is back on the server, what it looks like when a client has received an IP address.
>
> **[5:25](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=325)** So back here on DC1, let me go up to my Tools and select DHCP to get into the DCHP administrator.
>
> **[5:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=332)** And when I take a look and expand down to our scope, when I expand that scope and I click on Address Leases, you'll see that I now have one lease that has been generated and that IP address happens to match, right?
>
> **[5:49](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=349)** It's 101, and it was handed out to CLIENT1.
>
> **[5:53](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=353)** Okay, so that's what it looks like on the server once a client has received an IP address, and that's how you configure your client.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[IP Addressing]] (2), [[Windows 10]] (1), [[Microsoft Word|Word]] (1), [[Microsoft]] (1), [[Windows]] (1)
> **Env Vars:** dhcp (13), dns (2), dc1 (2), apipa (1), cmd (1)
> **UI Navigation:** click on (11), go to (2), right-click (1), checkbox (1)
> **Prerequisites:** configure (5), set up (2), install (1)
> **Versions:** 10.35.4 (3), 169.254 (1), 255.192 (1)
> **CLI Commands:** make (1), find (1)
> **Tools:** command prompt (2)
> **Cross-References:** go back to (1)

#### [Configure DHCP reservations](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=0)** - [Instructor] Sometimes when working with DHCP clients, we still want them to be configured dynamically, but we want to make sure that we get a consistent IP address every single time.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=12)** One example of this might be a printer out on your network.
>
> **[0:16](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=16)** This is a resource that you want clients to always be able to know that it's in the same place.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=21)** Well, rather than going around to every printer and assigning a static IP address, there is a way to make it that they get the equivalent of a static IP address from the DHCP server, and this is by using reservations.
>
> **[0:34](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=34)** So here, we're looking at the DHCP administrator on DC-1.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=39)** And inside of our LandonHotelClients scope, you'll see here that we have an option for Reservations.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=49)** And if I click on it, you'll see that it's blank.
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=51)** Right, we haven't set any up yet.
>
> **[0:54](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=54)** So in order to create a new reservation, you right-click and select New Reservation.
>
> **[0:59](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=59)** Now the first thing we're going to do is give the reservation a name.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=62)** Now I don't have any printers on my network.
>
> **[1:05](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=65)** Okay, so I can't use that to demonstrate this, but I do have some clients.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=69)** So we're just going to say that we want Client-1 to get the same IP address every single time.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=77)** All right, and then the IP address that we want to assign to Client-1 is 115.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=83)** Now it has to be an IP address from within the scope, right?
>
> **[1:26](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=86)** We have 101 to 120.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=87)** So I'm going to just pick 115, it's kind of random here.
>
> **[1:31](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=91)** The next item is the MAC address.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=94)** Now where do I get that from?
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=96)** Well, I have to actually go out to the client and look at the physical address of the network card in order to populate that information.
>
> **[1:45](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=105)** So let's jump over to Client-1.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=109)** One easy way to find the MAC address once you're on the client is to click on Start and type in cmd, which allows you to open up a command prompt.
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=119)** And inside the command prompt, just simply type ipconfig /all.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=126)** And you'll notice that right in about the middle of the screen here, there is a line that says Physical Address.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=136)** And the physical address, I'll highlight it here, says 00-15-5D-10-A5-04.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=145)** So you're going to want to go ahead and jot that down.
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=147)** And to be clear, you don't want to jot down my physical address.
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=150)** If you're following along, jot down your own physical address, which should be different than this one.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=157)** And now I'm going to jump back over to the server so that we can populate that in our reservation.
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=163)** So back here on the server, in the MAC address, I'm going to type in 00-15-5D, and, yes, it is possible to have letters because this is hexadecimal,
>
> **[2:56](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=176)** - 10-A5-04 And then click Add, and close the window.
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=187)** You'll see that I now have a reservation, and it says 10.35.4.115 belongs to Client-1.
>
> **[3:15](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=195)** If I click on the Address Leases tab, you'll see something very interesting right now, which is you'll notice that Client-1 has the IP address of 101 because that's what it already got previously.
>
> **[3:31](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=211)** And it's going to hold on to that lease until we give it a, you know, either the time cycle passes or we force it to refresh.
>
> **[3:39](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=219)** But we also see the reservation that has been set up.
>
> **[3:41](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=221)** And the reservation says inactive, and that's because the client is not actually using it right now.
>
> **[3:47](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=227)** So let's make that happen.
>
> **[3:48](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=228)** Let's jump back over to the client.
>
> **[3:51](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=231)** So back here on Client-1, in the Command Prompt window, I'm going to go ahead and I'm going to type ipconfig /release to release its current IP address back to the DHCP server.
>
> **[4:06](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=246)** And then I'm going to type ipconfig /renew to say, hey, I want to go ahead and get an IP address.
>
> **[4:14](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=254)** And when I do, this time when it goes through the DORA process, the server is going to recognize the MAC address that is making the request, and it's going to say ah-ha, I have a special IP address just for you, and that's 10.35.4.115.
>
> **[4:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=272)** And sure enough, you'll see here that it has now populated with that IP address.
>
> **[4:37](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=277)** Okay, so that IP address will never be given to anyone else, and it will be given every time to this client.
>
> **[4:43](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=283)** For one final confirmation, let's jump back to the server.
>
> **[4:47](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=287)** I am going to hit the Refresh button.
>
> **[4:50](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=290)** And you'll notice that now the lease for 10.35.4.101 went away, and the only lease that I have out there is the 115, which happens to be a reservation.
>
> **[5:02](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=302)** You'll see that under Lease Expiration.
>
> **[5:04](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=304)** And it now says active, meaning I know not only do I have that reservation, but the client is currently active and using it.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (4), mac (4), dora (1)
> **CLI Commands:** make (3), find (1)
> **UI Navigation:** click on (3), right-click (1)
> **Versions:** 10.35.4 (3)
> **Tools:** command prompt (3)
> **Definitions:** is a  (3)
> **Speakers:** - [instructor] (1), - 10 (1)
> **Prerequisites:** set up (1)


### 3. Managing DHCP

[↑ Back to Table of Contents](#table-of-contents)

#### [Components of a DHCP database](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=0)** - [Instructor] The DHCP database is a dynamic database and a very resilient database containing data that relates to scopes, address leases and reservations.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=11)** The database also contains a data file that stores both the DHCP configuration information along with the least data for clients who have list their IP address from that the DHCP server.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=21)** So let's take a quick look at the database.
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=24)** And there's just a couple quick things we can do with it.
>
> **[0:27](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=27)** Here I'm in dc-1, my DHCP server and the server manager we're going to up to the Tools menu and select the DHCP.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=35)** This will take us into the DHCP administrator.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=38)** In the DHCP administrator, I'm going to go ahead and right click on dc-1 and go to its properties.
>
> **[0:44](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=44)** 'Cause I want to show you that we have a couple things here.
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=47)** We have a database path which points to where the database is located by default, and a backup path, which you'll notice is the exact same path except for there's a backup directory inside of that path.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=61)** Now in both cases, we could click on Browse and move the database or its backup to a different location.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=69)** But for right now let's actually go to this path and let's take a look and see what we find.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=74)** So I'm just going to go into Explorer, go into my C drive, [[Windows]], and then we have System 32.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=83)** And inside there is dhcp.
>
> **[1:26](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=86)** So this is the directory that we were pointing to in the DHCP administrator.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=92)** And there's a lot of files here.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=93)** And if you've ever worked with any standard database, you know that these shouldn't look that unusual.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=100)** And that still holds true as far as the functionality, it works like a standard database engine.
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=106)** So what are some of the significant files here?
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=108)** Well, we have dhcp.mdb, which is the actual database file.
>
> **[1:53](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=113)** We have tmp.edb down here near the bottom and that's a temporary file that is used as a swap file during routine database index maintenance operations, okay.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=126)** Again, remember I said this was a resilient database.
>
> **[2:08](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=128)** There's a lot of things that it doesn't take care of itself.
>
> **[2:11](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=131)** We have a whole bunch of j50 log files.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=135)** We have j50 itself and then we've got two, three, four, five, six, seven, eight, nine and then we even have j50res one and two.
>
> **[2:24](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=144)** Well these are your log files and the j50 res files are your reserved log files.
>
> **[2:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=153)** And that has to do with making sure that if your hard drive were to fail that you would go ahead and have some space left to make the last few changes to the database before you shut the database down.
>
> **[2:46](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=166)** And then we also have a checkpoint file right?
>
> **[2:48](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=168)** We have j50.chk.
>
> **[2:50](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=170)** These are all standard files when it comes to [[Databases]].
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=173)** And I'm not going to go to details on the functionality you can learn about that if you aren't familiar with how it works.
>
> **[2:58](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=178)** This is the database and this is where we find everything.
>
> **[3:01](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=181)** Now we also mentioned that inside this directory, we have a backup directory.
>
> **[3:06](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=186)** And one thing that's important to know is that DHCP automatically backs up to that directory once an hour without you doing anything.
>
> **[3:17](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=197)** Alright so again, very resilient.
>
> **[3:19](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=199)** Let's jump back over to the DHCP administrator 'cause I want to show you that besides the automatic backups, if I right click on dc-1, you have the ability to do a manual backup.
>
> **[3:31](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=211)** Okay, I could select to backup and then of course it defaults to that backup directory but you could choose to put it anywhere you want.
>
> **[3:39](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=219)** And if you know that you have a corruption to your database and you want to recover it, you could right click on dc-1 and restore.
>
> **[3:45](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=225)** And it defaults to restoring from the backup directory but again, if you know you backed it up somewhere else you could restore from there.
>
> **[3:53](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=233)** Now the only thing I want to tell you when it comes to the backing up the DHCP database is it keep in mind that the backup directory by default is in the same location as the database.
>
> **[4:03](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=243)** So if something happens that corrupt that location, it's all going to be corrupted.
>
> **[4:08](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=248)** So you may want to consider moving the backup somewhere else, or at least having some kind of routine maintenance that you do manually where you do like a manual backup.
>
> **[4:17](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=257)** You come in here and do it manually and send it to somewhere else.
>
> **[4:21](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=261)** And even beyond that, please make sure that when you're doing your server backup maintenance, that you make sure to backup whatever directory it is that has the backup of your DHCP database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1), [[Databases]] (1)
> **Env Vars:** dhcp (12)
> **UI Navigation:** click on (4), go to (3), select the (1)
> **CLI Commands:** make (3), find (2)
> **Definitions:** is a  (1)
> **Best Practices:** make sure to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Reconcile DHCP scopes](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/reconcile-dhcp-scopes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/reconcile-dhcp-scopes?u=76281980&t=0)** - [Instructor] Sometimes when managing the DHCP database, you will find yourself in a situation where there is an inconsistency.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/reconcile-dhcp-scopes?u=76281980&t=9)** One example might be that you have a client who no longer exists on your network, but yet your database is showing that there's still a lease out there for that system.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/reconcile-dhcp-scopes?u=76281980&t=18)** This is actually really common when you get alerted to it because you've run out of IP addresses and you're thinking, that's not possible, but yet, you realize that that's why it had happened.
>
> **[0:27](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/reconcile-dhcp-scopes?u=76281980&t=27)** Well, fortunately, there is something we can do to deal with that pretty easily and its called DHCP reconcile.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/reconcile-dhcp-scopes?u=76281980&t=35)** So here we're in the DHCP administrator on DC1, our DHCP server and you'll see here under DC1, we have our IP version four.
>
> **[0:44](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/reconcile-dhcp-scopes?u=76281980&t=44)** I'm going to expand that.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/reconcile-dhcp-scopes?u=76281980&t=45)** I'm actually going to click on IP version four.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/reconcile-dhcp-scopes?u=76281980&t=48)** And then right-click 'cause I want to show you that there's an option here that says reconcile all scopes.
>
> **[0:54](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/reconcile-dhcp-scopes?u=76281980&t=54)** Okay, so this is the situation and I'm going to click away from it so you can see if this was an enterprise DHCP server where we had multiple scopes.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/reconcile-dhcp-scopes?u=76281980&t=63)** You could actually reconcile them all at once as part of, you know, lets say, maybe a routine maintenance item.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/reconcile-dhcp-scopes?u=76281980&t=70)** But if you know that there is a specific scope that has a problem, well then, you click on the scope itself, right, so I have my one scope here, Landon hotel clients, and then right-click on it and choose to reconcile from there.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/reconcile-dhcp-scopes?u=76281980&t=82)** Now this is a fairly simple process.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/reconcile-dhcp-scopes?u=76281980&t=84)** When I click on it, I get a window that says that this procedure will compare the scope information in the database along with what it sees in the registry and all I really have to do is click on a button that says verify.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/reconcile-dhcp-scopes?u=76281980&t=97)** And when I do, in my environment here, we're going to see something very simple.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/reconcile-dhcp-scopes?u=76281980&t=101)** I'm going to click on it and you'll see it says, hey, everything's consistent, and that's what's great, right, you want to see that.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/reconcile-dhcp-scopes?u=76281980&t=108)** If this was routine maintenance, right, then you just click OK and everything's good and you don't have to worry about it.
>
> **[1:54](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/reconcile-dhcp-scopes?u=76281980&t=114)** But, if you actually had an inconsistency, this is where you would see it pop up and you would have the ability to go through.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/reconcile-dhcp-scopes?u=76281980&t=123)** You'd see it listed in the window here and you'd be able to go through each one and validate whether its legit or not.
>
> **[2:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/reconcile-dhcp-scopes?u=76281980&t=130)** So you could either say no no, that's a real thing, make it consistent or you could say, nope, you're right, that's a mistake, delete it.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/reconcile-dhcp-scopes?u=76281980&t=138)** Alright, so there's not a whole lot to it when it comes to reconciling DHCP, but you'd be amazed at what a huge timesaver it can be in the event that you have a situation of inconsistent information in your database.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (6), dc1 (2)
> **UI Navigation:** click on (4), right-click (2)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (1), make (1)
> **Speakers:** - [instructor] (1)

#### [Database statistics](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=0)** - [Instructor] When it comes to managing a DHCP server, we've already seen that there's not a lot that you have to do.
>
> **[0:05](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=5)** You kind of set it up and it does it's thing and it's very resilient.
>
> **[0:08](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=8)** But you still may want to just kind of, keep track of what's happening.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=12)** And so, there are some options in the DHCP administrator to where you can display what they call, statistical information.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=21)** So I'd like to show that to you here.
>
> **[0:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=23)** So we're in the DHCP administrator on DC1, our DHCP server, and here in the server under IP version four, we have our scope and I want to show you, that if you click on the scope and right click, right at the top it says, Display [[Statistics]].
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=41)** Now in this window, there's not a whole lot of information.
>
> **[0:44](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=44)** It's real basic.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=46)** It tells me I have a total of 17 addresses.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=49)** Now where did that number come from?
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=51)** Well, if you remember when we created the scope, we said that the range of IP addresses was going to be from 101 to 120 within our range, which was 20 addresses, but we did an exclusion of three of them.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=63)** And that's how we end up with 17 total.
>
> **[1:06](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=66)** Now from there, we can see that one is in use, because we only set up client one to get an IP address dynamically.
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=72)** Which means that I have 16 available.
>
> **[1:15](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=75)** This is something that might come in handy just to see if you might be running low on IP addresses.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=83)** Now if you want to see a little bit more detailed information, let's click on IP Version 4 and then right click and Display Statistics there.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=93)** So in this window we have a little bit more information and some of the specific information... Let me actually scroll down to the bottom.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=101)** First of all, at the bottom you'll see total addresses, in use and available, and you'll see the same numbers, but that's only because we have just a single scope.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=108)** If we had multiple scopes, then you would see all of the addresses for all scopes put in here, along with the in use and available.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=118)** But we also see some other information and I'm going to scroll up a little bit here.
>
> **[2:02](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=122)** Okay, you'll notice some words that we learned in another video where we learned about the actual leasing process or the DORA process, D-O-R-A.
>
> **[2:13](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=133)** So we have our discovers, which is the D.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=135)** You'll see that there's 77 of them that have happened.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=138)** Of those 77 discovers, we've had 10 times that we've done the O or offers.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=143)** The R is request.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=145)** You'll see that seven of those came back as requests and then we likewise had seven acts or acknowledgements.
>
> **[2:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=152)** Okay, that's the A in DORA.
>
> **[2:34](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=154)** Additionally, we can see things like Nacks, which is a negative acknowledgement, which kind of says, no we're not good, we're not all setup, there's been a problem.
>
> **[2:44](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=164)** Okay, we can also see declines.
>
> **[2:45](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=165)** You see things like releases, how many times a client has released a lease back to us.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=172)** Okay, so again, it's just kind of general statistical information about how things are going with your server.
>
> **[2:58](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=178)** If you start to see a problem, it's maybe a good starting point that you might go to.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=183)** Especially if you get a lot of clients that aren't getting an IP address.
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=187)** You jump to the statistics, you see if you're out of IP addresses or you might see that you're getting a bunch of Nacks, which is the negative acknowledgement, which means something is going on in your network that the DHCP server is refusing to actually acknowledge that IP address.
>
> **[3:21](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=201)** So that's why you might want to look at statistics when managing a DHCP server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (4)
> **Env Vars:** dhcp (6), dora (2), dc1 (1)
> **UI Navigation:** click on (2), scroll down (1), scroll up (1), go to (1)
> **Definitions:** means that (1), is a  (1)
> **Prerequisites:** set up (1), setup (1)
> **Versions:** version 4 (1)
> **Speakers:** - [instructor] (1)

#### [Secure DHCP](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=0)** - [Instructor] Because DHCP is an unauthenticated protocol, it's a pretty good idea to go ahead and take some form of precaution to ensure that only valid clients that are supposed to be on your network are actually getting network information from your DHCP server.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=17)** Now, there's a couple things that you can do as far as settings within the server, so let's go take a look at those.
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=24)** Here we're looking at the DHCP Manager on dc1, which is our DHCP server.
>
> **[0:29](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=29)** And in here, under dc1, we have IP version 4, and if I right-click on IP version 4 and go to the Properties, right on the General tab, you'll see that there's a box checked for Enable DHCP Audit Logging, and what this does is that it writes server activity to a file daily to help you monitor system performance, troubleshoot service issues, et cetera.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=53)** Now this is different than what you would find in your event logs, right, in the Event Viewer, 'cause that's where we're taught to go and look for problems.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=61)** This is just kind of a daily activity log.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=64)** And if I go to the Advanced tab, you'll see here that there is an audit log file path, and the path happens to be the exact same location as where the database was located, and we talked about that in another video.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=77)** So why don't we jump over to that path and take a look?
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=83)** So here in Explorer, I'm just going to go to my C:\ drive, [[Windows]] directory, and then we need to go to system32, and DHCP.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=92)** Right, so here is where we see all of our database files, and we talked about a number of these in the other video, but there's a couple files we didn't mention at all, and one of 'em is right here, DhcpSrvLog-Tue, and then there's one right below it, Dhcp Version 6, it's basically the same name, but you can tell that this is basically a log, one for IPv4, one for IPv6.
>
> **[1:57](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=117)** Now the one thing I want to point out is that you'll notice that the end of the log file name is Tue, which is a three-letter code representing Tuesday, a day of the week.
>
> **[2:08](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=128)** Well the reason why, is because I happen to have created this DHCP server and did all my activity on it today.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=136)** This DHCP server has only existed for one day, and today happens to be Tuesday, so that's what that represents.
>
> **[2:22](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=142)** If we were to come back and look at this tomorrow, we would see another pair of log files, and they would be labeled Wednesday.
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=149)** And basically what'll happen is you'll end up with a total of, you'll have seven files, or really what's 14 files, 'cause there's one for v4 and one for v6, and when we get back to next Tuesday, it would overwrite this Tuesday's log file with next Tuesday's log file.
>
> **[2:48](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=168)** Alright, so this is one way that you can help keep your DHCP server a little bit more safe and secure.
>
> **[2:57](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=177)** Another thing we can do is if I, back here in the DHCP Manager, we're still looking at the IP version 4 Properties, I'm going to go to the DNS tab.
>
> **[3:05](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=185)** And what this tab is primarily used for is it has to do with configuring how DHCP is going to work in conjunction with DNS, and if you are having your DHCP server automatically on the client's behalf register with the DNS server, then you might want to consider something that we have down here at the bottom.
>
> **[3:25](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=205)** At the bottom it says Name Protection, DHCP name protection, it says it's disabled at the server level.
>
> **[3:31](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=211)** So if I want to configure it, I just click the Configure button, and here it explains what it's going to do.
>
> **[3:38](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=218)** Says that Name Protection provides the following capability: it will register the A and PTR, which is the host record and the pointer, or the reverse lookup record, on behalf of the client, however, if there's a different client already registered with the name, then the DHCP update will fail.
>
> **[3:56](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=236)** Okay, so this will help protect you against name spoofing, and having somebody end up having registration mismatch on your DNS server all because of DHCP, okay?
>
> **[4:11](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=251)** You want to protect against that.
>
> **[4:13](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=253)** I will also mention here, it says Secure Dynamic Updates must be enabled for this to work.
>
> **[4:18](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=258)** Okay, so actually doing this is simple, it's a matter of just checking a box and clicking OK, and now, that's it, it's been enabled, but the importance of it, it's pretty critical, because DNS is a service that really needs to be protected, and if you're going to have your DHCP server communicating with DNS, you want to make sure that unauthorized DHCP server is not a vulnerability point, okay?
>
> **[4:49](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=289)** Now beyond that, I will tell you, there's really only one other thing to keep in mind when it comes to keeping DHCP secure, and that is, maybe if you were to have some form of regular routine to where you literally just come and examine your Scope, right, you expand your Scope, you go down to Leases, you look at the list, and you look for things that don't belong.
>
> **[5:12](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=312)** Now this is very manual and very tedious, but sometimes that's just what it takes.
>
> **[5:18](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=318)** So the bottom line is this, DHCP as a whole, other than configuring it, managing it is pretty simplistic, there's not a whole lot of sophistication to it, but along with that lack of sophistication comes with a lack of sophisticated security mechanisms, and that's why sometimes you just have to manually take a look to see if there's something wrong.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1)
> **Env Vars:** dhcp (19), dns (6), ptr (1)
> **UI Navigation:** go to (5), right-click (1)
> **Versions:** version 4 (3), version 6 (1)
> **Definitions:** is an  (2), is a  (2)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** we talked about (2)
> **Warnings:** troubleshoot (1), keep in mind (1)

#### [Troubleshoot DHCP](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=0)** - [Instructor] When it comes to troubleshooting a DHCP server itself, you got a whole lot you have to do because just like with any of the [[Representational State Transfer (REST)|rest]] of the maintenance we've talked about, DHCP is designed to be kind of a self-maintaining and resilient service.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=17)** But there is still a certain aspect of the process of DHCP that you may need to have to troubleshoot when certain things aren't working.
>
> **[0:26](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=26)** So one thing I really want you to know before we get into any of the specifics of DHCP is that when it comes to troubleshooting anything at all, it doesn't matter what technology it is, what it really comes down to, it's the idea of really understanding the process or the technology itself and knowing how it's supposed to work, and then being able to go through that process and evaluate where there is a breakdown.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=52)** And that's really how you troubleshoot problems, but as far as DHCP itself.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=57)** So let's talk about some of the common DHCP issues that still exist on our networks.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=64)** First of all, IP address conflicts.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=67)** Even though DHCP helps avoid these IP address conflicts, they still can happen even in an environment where you're running DHCP.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=78)** Okay, there's a number of different things that could possibly make that happen.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=82)** We have issues with failure to obtain an IP address at all, right, where client just doesn't get an IP address.
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=88)** He says, well, I'm supposed to get one, but I don't.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=90)** Or maybe, a client does get an IP address but it's the wrong one, and it came maybe from the wrong server or the wrong scope.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=97)** Even though the server is data-based, it is designed to be self-maintaining resilient, we can still have data corruption or loss, there are issues that can cause that.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=107)** Or how about our IP address pool just being depleted?
>
> **[1:50](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=110)** You know, hopefully we have good planning, and that doesn't happen, but it is something we still deal with.
>
> **[1:55](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=115)** So those are some of the common issues that you should be prepared to deal with.
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=119)** Now as far as some of the causes for those issues, well, first of all, how about just a good, old-fashioned network communication issue?
>
> **[2:08](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=128)** I mean DHCP is a networking service.
>
> **[2:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=130)** So if you're having networking problems, DHCP may not function right, sometimes with problem with client configuration.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=138)** If you've seen how to configure a DHCP client, you know that it's simple and it's actually the default setting in most cases.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=145)** But, you know, sometimes somebody gets somewhere they're not supposed to be and makes a change that messes up that configuration.
>
> **[2:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=152)** Or another real simple and basic one, maybe the DHCP server is down, right?
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=157)** Sometimes we want to look for the complicated, it might be real simple.
>
> **[2:40](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=160)** Might be as simple as DHCP server just not running at this point.
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=163)** Or how about if we're using a relay agent?
>
> **[2:46](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=166)** Maybe the relay agent itself is down or misconfigured, or having an issue.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=172)** Another problem that we run into a DHCP in, we used to see this a lot in the old days before we had something called authorization, and that is where you have a rogue administrator and therefore possibly a rogue DHCP server that's been put on your network, which is getting in the way.
>
> **[3:11](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=191)** We now have authorization, so that only enterprise administrators have the authority to allow for a DHCP server to come onto the network, so hopefully it's not as big an issue as it used to be.
>
> **[3:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=203)** Or you may have multiple conflicting scopes.
>
> **[3:27](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=207)** So whether it be on different servers or even the same server, you got to be really careful if you're going to have multiple scopes that they don't conflict with one another 'cause they can cause many of the problems that we experience.
>
> **[3:40](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=220)** So as you can see, most of the problems they have with DHCP are pretty basic and they all kind of surround the similar issues.
>
> **[3:48](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=228)** But you should be aware of how it all works and know how to get in there and find the problem when it happens.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** dhcp (17)
> **Warnings:** troubleshoot (2), be aware (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (2)
> **Analogies:** just like (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)


### 4. DHCP Advanced Features

[↑ Back to Table of Contents](#table-of-contents)

#### [Configure DHCP failover](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=0)** - [Instructor] In [[Windows Server]] 2019, we have a high availability feature called DHCP Failover.
>
> **[0:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=7)** Now in order to implement DHCP Failover, we need two DHCP servers.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=12)** Now we've seen the installation of one DHCP server on DC-1, but I want you to know I have also installed DHCP on DC-2.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=21)** Now let's take a quick look at DC-2.
>
> **[0:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=23)** Here in the Server Manager I'm going to go to Tools and DHCP, and the main reason I want to go here is 'cause I want to show you that it's just been installed.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=32)** Everything's been authorized, but I have no scopes.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=35)** Alright, nothing there.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=37)** Let's jump back over to DC-1.
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=41)** So again here in the Server Manager, we'll go to Tools and DHCP.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=46)** And here in the DCHP manager we'll go ahead and click on IP version four and then when I right click, I want to show you there's an option to configure failover.
>
> **[0:58](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=58)** And this'll take me into the configure failover wizard.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=61)** First thing is it'll ask me which scopes I want to do a failover on.
>
> **[1:05](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=65)** I only have one and the box is checked for select all.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=68)** So that's fine, we'll take that by default and click Next.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=71)** Now I need to know who my partner server is.
>
> **[1:15](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=75)** So I'm going to type in dc-2 'cause that is the name of the other DHCP server.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=80)** Click Next, it quickly flashes.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=83)** I mean it literally is like a fraction of a second.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=84)** It says that it verifies that that is a DHCP server, and it is, so we get to the next screen.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=90)** It gives the default relationship name that you can change if you like something better.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=94)** But you'll see here it's a good name, dc-1.landonhotel.local-dc-2.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=100)** Now we have a maximum client lead time of one hour.
>
> **[1:43](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=103)** That's the default, and this is how long that the system will wait.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=107)** When it notices that there's some kind of interruption in communication between the DHCP servers, how long should I wait before I try to take over?
>
> **[1:54](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=114)** Now what mode do we want to use?
>
> **[1:56](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=116)** It defaults to load balance, which happens to be the one I like, but let me show you hot standby real quick.
>
> **[2:02](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=122)** Hot standby means that one server is really not going to be acting as a DHCP server, it's just going to be sitting and waiting to take over in the event that the main one goes down.
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=132)** So we can choose which one is the active and which is the standby by choosing here where it says Role of Partner Server.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=138)** Okay, so the other server, or DC-2, is going to be the standby, or I can make it that DC-2 is the active one and DC-1 is the standby.
>
> **[2:26](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=146)** Okay, either one is fine.
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=147)** So we'll say that DC-2 is the standby.
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=149)** And then you determine how many addresses are going to be held just for that emergency situation.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=155)** And it defaults to 5%.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=157)** It says 5% of your addresses, going to hold them aside, and that's what the standby server will use in the event that your main server goes down.
>
> **[2:45](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=165)** Now let's go back and switch the mode back to load balance.
>
> **[2:47](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=167)** This is the one I like.
>
> **[2:48](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=168)** You'll notice is, it says look, 50-50 on the local server versus the partner server.
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=173)** You can adjust that if you want.
>
> **[2:54](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=174)** If I increase one, you'll notice the other is going down.
>
> **[2:57](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=177)** And mainly you want to leave it at 50-50 unless you know that one server has maybe more resources or is closer to more clients, something to where there's a reason to make one have a bigger percentage than the other.
>
> **[3:11](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=191)** Now, the next item is here where it says State Switchover Interval.
>
> **[3:14](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=194)** And I'm going to check the box.
>
> **[3:15](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=195)** It defaults to 60 minutes.
>
> **[3:16](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=196)** And what this has to do with, is this is where you really get your auto state switchover.
>
> **[3:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=203)** And so when there's a breakdown in communication, it goes into something called communication interrupted state.
>
> **[3:30](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=210)** Now because the server doesn't know why there's an interruption, if you don't check this box, it'll just stay in that state until an administrator actually takes an action to turn it into partner down.
>
> **[3:42](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=222)** Checking this box means that after an hour of sitting in that communication interrupted mode, it will then automatically switch to partner down and everything will switch and take over.
>
> **[3:53](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=233)** Now we could also choose to enable message authentication, so we have a little bit of security between the two servers.
>
> **[3:58](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=238)** It's a good idea.
>
> **[3:59](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=239)** And if you're going to check that box, then you're going to want to put in a shared secret.
>
> **[4:02](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=242)** Now you won't see my typing in anything, you just see a bunch of stars.
>
> **[4:06](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=246)** But the password that I just typed in is shared between the two servers and they will always use that password to communicate with one another to make sure somebody else isn't trying to spoof and hack in.
>
> **[4:16](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=256)** At this point I can click Next and you'll see a summary of what we're about to do.
>
> **[4:21](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=261)** And Finish.
>
> **[4:22](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=262)** It goes through and it adds everything, you see everything is successful.
>
> **[4:25](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=265)** I'll click Close.
>
> **[4:27](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=267)** And the only thing that really is different here is, well, I'll have to show you what it is 'cause by default you don't see anything change here.
>
> **[4:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=273)** If we jumped over to DC-2, you would see that we now have a scope on DC-2.
>
> **[4:37](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=277)** But mainly let's stay right here and let's click on the scope and then right click and go to Display [[Statistics]].
>
> **[4:44](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=284)** Now there's another video where I talk about these statistics, and by default you only see the top three lines where you see 17 addresses, one in use, 16 available.
>
> **[4:53](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=293)** But now we have four additional lines, which has to do with the addresses that are available and granted based upon this server and the partner server.
>
> **[5:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=300)** And that kind of shows you that the load balancing is in place and how addresses are being handed out between the servers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (2), [[Windows Server]] (1)
> **Env Vars:** dhcp (11), dchp (1)
> **UI Navigation:** go to (3), click on (2), switch to (1)
> **CLI Commands:** make (3)
> **Definitions:** means that (2), is a  (1)
> **Prerequisites:** configure (2)
> **Speakers:** - [instructor] (1)

#### [Manage DHCP failover](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=0)** - [Instructor] Once you have implemented DHCP failover, there's just a couple of quick management tasks that you should be aware of.
>
> **[0:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=7)** So here I'm on DC1 and we're looking at the DHCP Manager.
>
> **[0:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=10)** This is where I just implemented DHCP failover between this server and another server I have called DC2.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=18)** Let's take a quick look at DC2 to make sure that failover has indeed shown up on that server as well.
>
> **[0:25](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=25)** Here in the Server Manager on DC2 I'm going to go to Tools, and DHCP.
>
> **[0:30](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=30)** And here in the DHCP Manager, you'll notice that when I expand all the way down, I now have a matching scope for the Landon Hotel clients.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=39)** And if I were to click on it and then right click and select Display [[Statistics]], you'll see here that I have statistics that are showing that I am in a DHCP failover partner relationship in the sense that not only do I have the three default lines, Total Addresses, In Use, and Available, but I also am seeing the Available and the Granted Addresses on this server as well as the other partner.
>
> **[1:05](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=65)** So we know that failover has worked and it is set up on both servers.
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=72)** So let's jump back over the DC1.
>
> **[1:15](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=75)** Back here on DC1, I want to go ahead and right click on IPV4 and go to Properties.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=82)** And I'll show you that there happens to be a Failover tab.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=84)** And if I click on that Failover tab, there's a couple of things I want you to look at.
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=88)** Number one, down at the bottom half we have the state of the server sitting in Normal state.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=94)** That means that we have good communication between the two servers.
>
> **[1:39](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=99)** I have a name of the other partner server, so in case I'm wondering who I'm doing failover with I now know, and I know what mode I'm using, Load Balance as opposed to Hot Standby.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=108)** Up at the top I can see the actual name that we have for the failover relationship, and if there's ever a change that I need to make to it, I can make it here, instead of having to like eliminate it and then go back and recreate it, I can simply click edit.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=123)** And you'll notice in this window we have a lot of information that was pretty much exactly the same as what we had when we created the DHCP failover.
>
> **[2:13](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=133)** OK, as far as all the settings pretty much from where it says Enable Message Authentication all the way down to the bottom.
>
> **[2:19](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=139)** These are all the things we already saw.
>
> **[2:21](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=141)** What I do want to point out on this screen, however, is up near the top, where it says state of this server, currently sitting at Normal, but there's a button here and it might be hard to see 'cause it's grayed out, but it says Change to Partner Down.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=155)** If the state of the server was sitting in Communication Interrupted, OK, instead of Normal, then this button would become active.
>
> **[2:44](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=164)** If you don't enable State Switchover Interval, then it will stay in that Communication Interrupted state until you come into this window right here and click the button for Change to Partner Down.
>
> **[2:56](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=176)** Because we have State Switchover Interval enabled, we can see that down here, we shouldn't have to click the button.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=183)** It will happen automatically after another hour, but if you want to make it faster, that's why you would come in and click the button.
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=190)** So the one other thing we can do from this window is if we decide that we don't want the failover relationship any more, then we can simply delete it, and I'm going to do that now.
>
> **[3:19](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=199)** I'm going to go ahead and click the Delete button, and it's just going to confirm hey, are you sure you want to do this?
>
> **[3:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=203)** Here is the information you're about to delete.
>
> **[3:25](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=205)** I'm going to say yep, I know what I'm doing, I click OK, It says that everything has been removed successfully.
>
> **[3:30](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=210)** I will close it, click OK, and this time if I go to the scope, I click on the scope and then right click and choose to Display Statistics, you'll see that I now have Basic Statistics which tell me that I just have the Total Addresses, In Use, and Available for this server, because the partnership is gone.
>
> **[3:50](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=230)** And I won't bore you with it, but if we were to jump back over to DC2 and take a look, and then do a refresh, you would see that the scope is gone from that server 'cause we've just deleted it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Statistics]] (4)
> **Env Vars:** dhcp (7), dc2 (4), dc1 (3), ipv4 (1)
> **UI Navigation:** click on (4), go to (3)
> **CLI Commands:** make (4)
> **Definitions:** means that (1)
> **Warnings:** be aware (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [DHCP in a routed environment](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dhcp-in-a-routed-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dhcp-in-a-routed-environment?u=76281980&t=0)** - [Instructor] Since DHCP uses broadcast communication for the least generation process, things can get quite complicated when working in a routed environment.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dhcp-in-a-routed-environment?u=76281980&t=12)** If you have clients who are on one subnet, and then there's a router separating that client from a DHCP server that's on a different subnet, by default they're not going to be able to communicate.
>
> **[0:25](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dhcp-in-a-routed-environment?u=76281980&t=25)** And the reason why is because the client is going to go through the discover process and say, "hey, I'm looking for a DHCP server!"
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dhcp-in-a-routed-environment?u=76281980&t=32)** But that's a broadcast and by definition, routers kill broadcast communication.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dhcp-in-a-routed-environment?u=76281980&t=37)** So how do we solve this?
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dhcp-in-a-routed-environment?u=76281980&t=39)** Well, when we're working with DHCP in a routed network, we have three options.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dhcp-in-a-routed-environment?u=76281980&t=46)** The first of these options would be to just simply put a DHCP server out on every subnet and that way the clients on that subnet will be serviced by that DHCP server.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dhcp-in-a-routed-environment?u=76281980&t=57)** The problem is that that's not very practical to have, that's a lot of DHCP servers that you have to have out there.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dhcp-in-a-routed-environment?u=76281980&t=64)** A second option is you can use what's called RFC 1542 compliant routers.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dhcp-in-a-routed-environment?u=76281980&t=70)** These are routers that have been specifically designed to be able to enable DHCP broadcast traffic to be allowed to pass through and not get killed at the router.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dhcp-in-a-routed-environment?u=76281980&t=84)** And if you don't have an RFC 1542 compliant routers, then the third option is to use something called a DHCP relay agent.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dhcp-in-a-routed-environment?u=76281980&t=93)** So this is a special type of device or service that will essentially exist on the subnet where the clients are and it will listen for these broadcasts and then that particular agent will be pre-configured with the IP address of a DHCP server directly via unicast communicate with the DHCP server and then get a response back from the DHCP server and relay it back out to the client.
>
> **[2:05](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dhcp-in-a-routed-environment?u=76281980&t=125)** And I will say that in most routed environments I typically see options two or three, it's very rare that you see DHCP servers put out on every subnet.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dhcp-in-a-routed-environment?u=76281980&t=136)** You either go out there and you make sure your routers are specifically RFC 1542 compliant and anywhere that they can't be, you implement a relay agent.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (13), rfc (3)
> **Documentation:** rfc (3)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Configure a DHCP relay agent](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=0)** - [Instructor] One option for allowing a client to receive IP configuration from a DHCP server on a routed network is to use a DHCP relay agent.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=9)** Now in order to demonstrate this, I have to create a routed network.
>
> **[0:14](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=14)** So I want to let you know I've made a lot of changes to my environment in order to demonstrate this and I know I normally am very detailed in showing you how to do it, but there's a whole different course on how to set up [[Routing]], so I'm just going to quickly show you what I've done.
>
> **[0:27](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=27)** And I will also mention that when we're done going through learning about the relay agent, I'm going to actually put everything back to how we were before this video for the [[Representational State Transfer (REST)|rest]] of the course.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=39)** First of all if I look at the Settings for Member 1 I want you to see there are now two network adapters, one is called Internet and one is called Private.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=50)** Don't worry about the names, the point is just showing you that there are now two network adapters on this particular server, because this server is acting as a router.
>
> **[0:59](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=59)** If I look at the Settings for DC 1, you'll notice that it only is connected to the Internet network 'cause that's our DHCP server, but Client 2 which is going to be the client we're going to use here it is only connected to the Private network.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=74)** So just want to show you that that has been set up.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=77)** Additionally if I go into Client 2, I want to show you that it has been set up to get its' IP address dynamically, but that it's not able to do so.
>
> **[1:26](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=86)** So I'm going to click on start and type in CMD and go to a Command Prompt.
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=89)** And I'll type ipconfig and I just want you to see we have a 169.254 address which is representative of apipa, meaning I'm set up to automatically get an IP address but I'm not finding a DHCP server.
>
> **[1:43](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=103)** The next thing I'd like to show you is something I've done on DC 1.
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=106)** Here in the DHCP manager on DC 1, you'll notice that besides our original scope for Landing Hotel Clients, I've created a second scope for 192.168.1 and just called it OtherNetwork and that's because that is the network, that's the IP range that Client 2 is actually on.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=126)** It's on that network.
>
> **[2:08](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=128)** Now the last thing that I'd like to show you is if we jump over to Member 1, which is the machine acting as our router, I have actually implemented the roll service so it can be a router.
>
> **[2:17](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=137)** So if I go to the Tools menu, and then select Routing and Remote access, in here I can look at the Properties of the server of Member 1 and you will see that there's a check box for it being an IPv4Router for [[Local Area Network (LAN)|Local area network]] routing only.
>
> **[2:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=153)** And that's the high-level everything that we've kind of set up.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=157)** Now if I expand IPv4 and then take a look at General, and then right-click on General, I'm going to choose to implement a New Routing Protocol 'cause this is how you actually implement the relay agent.
>
> **[2:50](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=170)** You want to put it on the router itself.
>
> **[2:54](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=174)** And you'll see here that I have a choice of a routing protocol called DHCP Relay Agent so I will click OK.
>
> **[3:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=180)** So pretty simple to just add the relay agent, but now we have to configure it.
>
> **[3:05](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=185)** So let me go ahead and right-click on DHCP Relay Agent and tell it that I need a New Interface, and the interface that I want to select is the one that points towards the network where the clients are going to be.
>
> **[3:19](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=199)** The relay agent has to be where the clients are and that happens to be Ethernet 2.
>
> **[3:25](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=205)** If I took the time to go ahead and show you the specific IP configuration, Ethernet has been set up on the 10.35 network and Ethernet 2 has been set up on the 192.168.1 network.
>
> **[3:38](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=218)** So we're going to use Ethernet 2 and click OK.
>
> **[3:40](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=220)** And we have to make sure the box is checked to relay DHCP packets.
>
> **[3:46](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=226)** And click OK again.
>
> **[3:48](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=228)** So now if I go to the Properties of the Relay Agent, I need to assign the IP address of a DHCP server where I'm going to go ahead and send any messages that I get on behalf of the clients.
>
> **[4:02](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=242)** So 10.35.4.81 that happens to be the IP address of DC 1 or the DHCP server.
>
> **[4:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=250)** So I will click Add and OK.
>
> **[4:14](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=254)** And at this point I have now successfully configured the DHCP Relay Agent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (5), [[Representational State Transfer (REST)|Rest]] (1), [[Local Area Network (LAN)|Local area network]] (1)
> **Env Vars:** dhcp (11), cmd (1)
> **Prerequisites:** set up (7), configure (1)
> **UI Navigation:** go to (3), right-click (2), click on (1)
> **Versions:** 192.168.1 (2), 169.254 (1), 10.35 (1), 10.35.4 (1)
> **Definitions:** is called (2)
> **CLI Commands:** make (1)
> **Tools:** command prompt (1)

#### [Test relay agent](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=0)** - [Instructor] Once you've implemented the DHCP relay agent, the first thing you really, probably should do is check to make sure that a remote client is able to go ahead and receive an IP address from a DHCP server on a different network.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=15)** So here, I'm on member one which is my router and you can see I have indeed implemented the DHCP relay agent.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=22)** So let's jump over to another machine called client two and see if we can now get an IP address from the DHCP server.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=32)** So here on client two, you can see that I still have the command prompt window open from actually the previous video where I demonstrated that this machine is set up for obtaining its IP address automatically and it got a 169.254 address which is an APIPA address, meaning it couldn't reach a DHCP server.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=50)** What I want to do now is go ahead and type in IP config and that's all I'm going to do. Just IP config because the machine is going to go ahead and periodically try again to get an IP address from a DHCP server and it may have done it automatically without me having to force it.
>
> **[1:05](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=65)** If it doesn't work, then I'll show you how to force it.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=68)** Let's hit enter and see what happens.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=70)** Okay, as you can see, it already had communicated with the DHCP server through the relay agent and it got its IP address.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=77)** If we had to force it, all we would have done is we would have typed IP config/renew.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=82)** Alright?
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=83)** So, if you take a look here you'll notice it has an IP address of 192.168.1.101, alright?
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=89)** Which was in the range that I had set up and I'd like to actually show you that, right?
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=94)** So lets go ahead and jump over to DC one which is our DHCP server and see how this all looks.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=101)** So here in the DHCP manager on DC one what I want to do is take a look at this 192.168.1 scope.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=109)** Let me go ahead and expand it.
>
> **[1:50](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=110)** And the first thing is, if I click on address pool, you will see here that, this is something I didn't show you before, but there is a pool from 101 to 110, alright?
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=119)** I set up these 10 addresses and we saw the first one that was handed out was 101.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=123)** Where I can also see this, if I click on address leases.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=127)** When I click on address leases you can see that 192.168.1.101 was given to client two.
>
> **[2:14](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=134)** Okay, so it indeed did work.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=138)** Now something else I'd like to take a quick look at is let's jump back over to our DHCP relay agent which is member one.
>
> **[2:26](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=146)** Here, you'll notice for, with DHCP relay agent highlighted, and the interface that I had set up, everything is zeros as far as requests and replies and all that stuff.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=157)** But let me hit refresh.
>
> **[2:40](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=160)** You'll notice when I refresh, I now get numbers that are populated and these numbers might seem extreme relative to what we've done in the sense that it's received 40 requests.
>
> **[2:51](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=171)** It got six replies back, 20 requests were discarded.
>
> **[2:56](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=176)** There's a lot of activity that takes place even with just a simple IP config renewal or just a simple DORA process and you have to understand there's all sorts of traffic that's going on on the network, but the main thing I wanted to show you is that there is statistical information that you can look at on the relay agent and sometimes that can come in handy when troubleshooting in the case that a client is not, suddenly not able to get an IP address through the relay agent.
>
> **[3:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=203)** You might be able to, you know, force a renewal and then notice that the numbers aren't changing or maybe they're changing to an extreme level.
>
> **[3:30](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=210)** Alright, so we have successfully tested our relay agent and we are all set up on a routed network.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (11), apipa (1), dora (1)
> **Prerequisites:** set up (5)
> **Versions:** 192.168.1 (3), 169.254 (1)
> **UI Navigation:** click on (3)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)
> **Tools:** command prompt (1)


### 5. Deploying DNS (Domain Name System)

[↑ Back to Table of Contents](#table-of-contents)

#### [Install DNS with Active Directory](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=0)** - When it comes to installing the DNS server role, we actually have two options available to us.
>
> **[0:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=7)** The first, which I want to show you here, is the preferred method, which is to install DNS as a part of a domain controller installation.
>
> **[0:16](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=16)** To demonstrate this, I'm going to connect to a computer I have here called DC3.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=21)** Here in the server manager, I want to let you know I have already installed the [[Active Directory]] domaine services role.
>
> **[0:31](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=31)** Okay, and we know this because we have our little warning indicator up here by the notification flag.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=37)** And if I click on it, you'll see here that it says we need a post-deployment configuration for active directory domaine services where we need to promote it to a domaine controller.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=46)** And this is the process where we will also become a DNS server.
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=51)** So let's click on that now.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=53)** This takes us to the active directory domaine services configuration wizard.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=57)** And because we already have our domaine environment set up, this is just an extra domaine controller.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=62)** We are going to select to add a domaine controller to an existing domaine.
>
> **[1:05](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=65)** That domaine is landonhotel.local, and the credentials necessary to do this are already in place, which is the Landon Hotel administrator account which is who I'm logged in as.
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=76)** If I click next, this is where we actually get to choose if we would like to also become a DNS server.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=84)** Okay, right up near the top there's a box that is checked saying yes, indeed, we want to be a DNS server.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=90)** Now, the [[Representational State Transfer (REST)|rest]] of this is pretty much the same as any other domaine controller, so I'm going to go ahead and put in my directory services restore mode password, and click next.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=102)** I get a warning, and I should mention this warning in particular 'cause it talks about a delegation for DNS.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=107)** Since we are talking about DNS here, it's basically because landonhotel.local it's basically saying well, I'm not able to make a delegation for just .local, alright?
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=119)** Whereas like if this was on the internet you could actually go to a .com server.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=123)** Well, there is no .local server, and we know that this is okay, so we're just going to ignore this message and click next.
>
> **[2:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=130)** Choose where we're going to install it from we'll say from any domaine controller, next.
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=132)** Take the defaults for our database and log files.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=136)** And here's our review, click next.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=138)** It'll go through and check all prerequisites.
>
> **[2:22](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=142)** It'll tell us that everything is fine other than warnings that we are familiar with, and install.
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=147)** And at this point it's going to go through and install not only the domaine controller, but it's also going to go through it and install the DNS server role.
>
> **[2:36](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=156)** Now, this can take a few minutes and also involves a reboot, so I'm going to go ahead and through the magic of video editing I'll speed it up.
>
> **[2:44](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=164)** And I'll be back with you just as soon as the reboot has completed.
>
> **[2:50](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=170)** Alright, so the reboot has completed.
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=173)** And we're back in the server manager.
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=175)** At this point I'm going to go up to the tools menu and show you that there's now a selection for DNS.
>
> **[3:02](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=182)** And if I click on it, it will take us into the DNS manager where I can see that DC3 is listed as a DNS server.
>
> **[3:09](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=189)** And if I click on it and expand it, I want you to see this is why it's the preferred method.
>
> **[3:15](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=195)** We already have DNS configuration in place.
>
> **[3:19](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=199)** Not just the role itself, but the landonhotel.local zone has actually been created, including you know, a variety of records and everything else.
>
> **[3:31](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=211)** The one other thing I will tell you as to why this is the preferred method is because not only have we installed it, configured it all in one shot, but it also has been configured with the most secure settings available by default.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** dns (12), dc3 (2)
> **Prerequisites:** install (5), set up (1)
> **UI Navigation:** click on (4), go to (1)
> **Warnings:** warning (3)
> **CLI Commands:** make (1)
> **Speakers:** - when (1)

#### [Install the DNS role independently](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=0)** - [Instructor] Another way we can install the DNS server role is just through the regular Add Roles and Features Wizard, just like any other role.
>
> **[0:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=10)** But let's go through and let me demonstrate it and show you what the difference is.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=15)** To do this I'm going to jump onto a server I have here called Member-1.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=21)** Here in the server manager, we're simply going to select Add roles and features, and in the wizard we get the typical Before you begin, saying hey, your going to do something significant, make sure you have everything in place, from a security and IP perspective.
>
> **[0:34](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=34)** We do so I'm going to click Next.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=36)** It is a role based installation.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=38)** Again I click Next.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=39)** I am going to install on Member-1, so click Next.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=43)** And here I get to pick the actual role.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=45)** So you'll see on the list, DNS Server, so when I check the box, I get a little pop out saying that there are additional features required and I'll say that's fine.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=53)** Click on to add the features.
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=55)** Then I click Next.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=57)** I can pick additional features if there's something else I want to be doing here, but there's not, so I will click Next again.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=62)** Here's an overview of what DNS is.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=64)** Click Next.
>
> **[1:06](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=66)** And I finally get to my summary screen where I always like to check the box to reboot if necessary, and when I do I get a warning saying, hey, someone else could be on the server or connected to it, you're going to kick them off.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=77)** I am aware so I'll click Yes and Install.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=81)** And at this point it's going to go through the process of adding the DNS server role and this might take a few moments so I'm going to go ahead and speed things up and I'll be right back with you as soon as it's completed.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=97)** Alright so the installation has succeeded on my system.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=101)** The bar has gone across the screen that says installation succeeded, so I will click Close.
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=106)** Close that window.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=107)** We know it has succeeded because we see a row at the bottom here for DNS, over on the left we see DNS, and most importantly up at the tools menu, we now see an option for DNS.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=118)** So let me go ahead and click on that and that will take us into the DNS Manager.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=123)** Now, the process of installing the DNS server role through the Add Roles and Features Wizard, its just like installing any other role.
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=132)** It's very, very straight forward.
>
> **[2:14](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=134)** The main thing that I wanted to show you here is the difference between installing the role manually this way versus what I did in the previous video, installing it along with [[Active Directory]] Domain Controller Promotion.
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=150)** In that scenario, we had an actual configuration of DNS, whereas in this scenario, when I click on Member-1 and then expand it, and then expand my forward lookup zones, there's nothing to expand.
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=163)** It's blank.
>
> **[2:44](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=164)** Nothing has been configured on this server.
>
> **[2:48](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=168)** We have only installed the role, which means we now have to manually go through and do the [[Representational State Transfer (REST)|rest]] of the configuration.
>
> **[2:56](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=176)** So the last thing I'm going to tell you about this is, just so you know, right here, right now, the way this server stands, believe it or not, even without any configuration, it is prepared to be able to service clients and there is something I will talk to you about later in the course about a caching only server, and that's basically the state that this DNS server's in right now but for any other type of DNS server, we would need to manually go through and start configuring.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** dns (12)
> **Prerequisites:** install (3), before you begin (1), make sure you have (1)
> **UI Navigation:** click on (3)
> **Cross-References:** previous video (1), later in (1)
> **Analogies:** just like (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)

#### [DNS client configuration](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-client-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-client-configuration?u=76281980&t=0)** - [Instructor] Having proper DNS client configuration is crucial to a successful network environment.
>
> **[0:08](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-client-configuration?u=76281980&t=8)** One of the most common problems we run into is name resolution, and more often than not, it comes down to improper client configuration.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-client-configuration?u=76281980&t=17)** So, to demonstrate how to configure a [[Microsoft]] client, I'm going to connect to a machine I have here called Client 1, which is simply a [[Windows 10]] client on my network.
>
> **[0:29](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-client-configuration?u=76281980&t=29)** So, in order to configure this client, I need to get to network connections.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-client-configuration?u=76281980&t=32)** There's a number of different ways to do this, but one way I find is consistent on pretty much all Microsoft systems is if I click on Start, and then I start to type the [[Microsoft Word|word]] control, it gives me the option to jump into my Control Panel, and then I can click on Network and Internet, Network and Sharing Center, and then when I click on Change adapter settings, it takes me into my network connections.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-client-configuration?u=76281980&t=53)** Now, I'm going to right-click on the Ethernet connection and go to its Properties.
>
> **[0:58](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-client-configuration?u=76281980&t=58)** In this window, I'm going to click on Internet Protocol Version 4, not the check box, that'll make it go away, just the words, and then go to its Properties.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-client-configuration?u=76281980&t=67)** And you'll notice that right now, I am configured to obtain both my IP address and then down below my DNS server information automatically.
>
> **[1:15](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-client-configuration?u=76281980&t=75)** That means I'm getting the information from a DHCP server, and that is probably the recommended way to go ahead and get your DNS information is to get it from a DHCP server, and I go over how to push that information down in the Configure DHCP Options video in this course.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-client-configuration?u=76281980&t=94)** But let me show you how to do it if you're not going to pull from a DHCP server.
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-client-configuration?u=76281980&t=98)** If I choose to do everything manually, let me go ahead and put in an IP address for my network here, along with the Subnet mask, and Default gateway.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-client-configuration?u=76281980&t=109)** So this is just all information that's appropriate for my network, but down here below, we're going to use the following DNS server addresses.
>
> **[1:56](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-client-configuration?u=76281980&t=116)** The preferred DNS server, which is the first DNS server I will look to, is going to be 10.35.4.81, which in my network setup here, points to DC1, which is a DNS server on my network.
>
> **[2:09](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-client-configuration?u=76281980&t=129)** I also have the ability to point to an alternate DNS server, and this is to provide some level of fault tolerance and redundancy in case DC1 is not available, so I'm going to put in 10.35.4.82, which points to DC2.
>
> **[2:24](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-client-configuration?u=76281980&t=144)** Now, you do have the ability to point to more than two DNS servers, and you do this by clicking on the Advanced button.
>
> **[2:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-client-configuration?u=76281980&t=152)** In the Advanced Settings window, there is a DNS tab, and when I click on that tab, you'll see the list, and if I wanted to add an additional one, I'd just simply click Add, and in this case I'm going to put in 10.35.4.83, and that points to DC3, which has also been configured as a DNS server, and click on Add, and now I have three on the list.
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-client-configuration?u=76281980&t=175)** We have some additional settings about DNS suffixes, which basically has to do with when you're doing name look-ups, you know the fact that this machine is called client1.landonhotel.local, it says to go ahead and search for any computer name I'm looking for and add on .landonhotel.local, but more importantly, down here at the bottom.
>
> **[3:16](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-client-configuration?u=76281980&t=196)** I really want to talk about this one check box here where it says Register this connection's addresses in DNS.
>
> **[3:24](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-client-configuration?u=76281980&t=204)** This box is crucial to have checked, because this is the one that makes it that the client will actually communicate with the DNS server, not just point to it for name resolution, but it will register itself to say, hey, DNS server, my name is Client 1, and my IP address is, and then the DNS server will register that information in case anyone's looking for this machine.
>
> **[3:44](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-client-configuration?u=76281980&t=224)** So, let me go ahead and click on OK, and OK once again, and close back out to our Network Connections window.
>
> **[3:51](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-client-configuration?u=76281980&t=231)** And that is how you configure a Windows 10 client with DNS configuration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (2), [[Windows 10]] (2), [[Microsoft Word|Word]] (1)
> **Env Vars:** dns (17), dhcp (4), dc1 (2), dc2 (1), dc3 (1)
> **UI Navigation:** click on (6), go to (2), right-click (1)
> **Prerequisites:** configure (4), setup (1)
> **Versions:** 10.35.4 (3), version 4 (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** find (1), make (1)
> **Best Practices:** recommended (1)


### 6. DNS Zones

[↑ Back to Table of Contents](#table-of-contents)

#### [Create primary forward lookup zones](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-primary-forward-lookup-zones?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-primary-forward-lookup-zones?u=76281980&t=0)** - [Instructor] One of the most important components to a DNS server is the presence of a DNS zone.
>
> **[0:05](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-primary-forward-lookup-zones?u=76281980&t=5)** Now what is a DNS zone?
>
> **[0:06](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-primary-forward-lookup-zones?u=76281980&t=6)** Well, essentially it's a database of DNS records and it's these records that allow us to do the actual name resolution and when a DNS server hosts a DNS zone, that makes it what's called authoritative over the name space that that zone has records for.
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-primary-forward-lookup-zones?u=76281980&t=24)** So there's a number of different zones that we can create and what I want to do here is show you how to create a Primary Forward Lookup Zone and to do this we're going to jump onto Member one which is a member server in my domain where we've installed the DNS server role.
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-primary-forward-lookup-zones?u=76281980&t=41)** Here in the server manager, we're just going to go up to the Tools menu and select DNS and this will take us into the DNS Manager.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-primary-forward-lookup-zones?u=76281980&t=49)** Now you'll notice when we're highlighted on Forward Lookup Zones, it's just blank, it just says we need to add a new zone so to do this I'm going to right+click on Forward Lookup Zones and select New Zone.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-primary-forward-lookup-zones?u=76281980&t=61)** This takes us into the New Zone Wizard.
>
> **[1:05](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-primary-forward-lookup-zones?u=76281980&t=65)** Here's the Welcome screen, I will click Next.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-primary-forward-lookup-zones?u=76281980&t=67)** I need to determine what type of zone.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-primary-forward-lookup-zones?u=76281980&t=69)** Actually there's different zones, Primary, Secondary's or Stub.
>
> **[1:13](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-primary-forward-lookup-zones?u=76281980&t=73)** In this case I want to create a Primary which means it is essentially a master copy where updates can be made directly on this server.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-primary-forward-lookup-zones?u=76281980&t=81)** I'll click Next.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-primary-forward-lookup-zones?u=76281980&t=83)** We need to give it a name.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-primary-forward-lookup-zones?u=76281980&t=84)** The name I'm going to choose here is going to be child dot landonhotel dot local so we're essentially going to pretend, right, we already have our landonhotel dot local, we're going to pretend that we have a child domain that we've created and we called it child dot landonhotel dot local.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-primary-forward-lookup-zones?u=76281980&t=100)** Now we'll click Next.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-primary-forward-lookup-zones?u=76281980&t=101)** Now I need to either use an existing database file if one exists, very rare that you would do that, more typically you will create a new file and it gives you a default name which completely makes sense, it's the name of the zone dot DNS so we're going to leave that alone and just click Next.
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-primary-forward-lookup-zones?u=76281980&t=119)** Now you need to determine how updates can be made to this particular server.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-primary-forward-lookup-zones?u=76281980&t=126)** We can either, the default here is to not allow dynamic updates which means you'd have to manually come in and update the records or we can do dynamic updates which is it says here allow both non-secure and secure which is a little bit dangerous because with non-secure it means people can get in and hack into this database.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-primary-forward-lookup-zones?u=76281980&t=145)** There is another option.
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-primary-forward-lookup-zones?u=76281980&t=147)** It's up at the top, it's grayed out, which is for secure dynamic updates only but you have to be a certain type of zone which we will talk about later.
>
> **[2:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-primary-forward-lookup-zones?u=76281980&t=153)** It's called [[Active Directory]] Integrated Zones.
>
> **[2:36](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-primary-forward-lookup-zones?u=76281980&t=156)** So for now I'm going to say Allow Updates even though it's not secure.
>
> **[2:40](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-primary-forward-lookup-zones?u=76281980&t=160)** Now click Next and Finish and just like that you can now see that inside Forward Lookup Zones we have a zone, okay.
>
> **[2:49](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-primary-forward-lookup-zones?u=76281980&t=169)** And if I expand it there, I can click on it, you see we get a couple of records that show up.
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-primary-forward-lookup-zones?u=76281980&t=173)** We'll talk about records later but that's how you create a Primary Forward Lookup Zone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (1)
> **Env Vars:** dns (10)
> **Definitions:** is a  (3)
> **UI Navigation:** click on (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Configure zone transfers](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=0)** - [Instructor] Since the data contained in our zones is such a crucial component of DNS functionality, it's important that this information is available on more than one DNS server in a network to provide availability and fault tolerance when it comes to resolving name queries.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=18)** Now, there are different ways that replication or the transfer of information could take place between these servers and will vary based upon the type of zone that we're dealing with.
>
> **[0:30](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=30)** What I want to look at here is how we would manually set up zone transfers when we've created just a standard primary forward lookup zone.
>
> **[0:42](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=42)** So here we're in the DNS manager on member one where we've just created one of these zones called child.lannonhotel.local.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=50)** If I right click on that zone and go to its properties, you'll notice that there is a tab called zone transfers.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=60)** So I'm going to click on that tab.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=61)** This is how we can define if we're allowing this data to be transferred to any other DNS server and if so, which ones.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=69)** So first of all, there is a check box for allowing zone transfers.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=74)** If you don't want data to ever be replicated from this server, simply clear that box and the data in this zone will remain on this server and this server only.
>
> **[1:26](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=86)** If we do want to allow the replication of this data to another server, make sure the box is checked and then we have three choices.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=93)** The first choice says to any server and you'll notice that that was not the default setting and that honestly never should be the setting unless you have some rare circumstance that you need it.
>
> **[1:44](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=104)** And the reason why is because this is very dangerous.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=109)** It creates a huge security vulnerability because pretty much anybody can create a DNS server and then send a query to this DNS server to say, hey I need a copy of your database and this server will say, fine, no problem.
>
> **[2:02](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=122)** Here you go, you have it and now you have somebody who has ahold of all your DNS information.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=126)** Not a good idea.
>
> **[2:08](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=128)** The default setting is that it would go to only servers listed on the name server tab and this is the typical choice.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=135)** Because you'll notice there is another tab in this property window called name servers.
>
> **[2:20](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=140)** And when I click on it, it will show the name servers of the various DNS servers in our network which are authoritative for this name space.
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=150)** Okay, right now, member one is the only server that is authoritative for this name space.
>
> **[2:36](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=156)** If we had another server and we wanted to go ahead and have it replicated over to there, we can add it here.
>
> **[2:44](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=164)** So I will show you but it won't really work.
>
> **[2:46](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=166)** I'm going to click on add and let's say I put in member two.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=172)** And when I say resolve, it's going to say here, basically attempting to validate.
>
> **[2:56](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=176)** It resolved the IP address of that server but it's not going to be able to validate it as being a DNS server because that DNS server doesn't exist.
>
> **[3:04](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=184)** Now, along those sames lines, you'll notice it said it timed out.
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=187)** I could also say DC1.
>
> **[3:09](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=189)** Now DC1 is a DNS server but it's not authoritative for the child.lannonhotel.local domain.
>
> **[3:17](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=197)** Okay, in other words, we have not added that zone.
>
> **[3:20](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=200)** So when I go to resolve this time, it resolves quickly but this time it says that basically this server and I have to kind of put my cursor on it is not authoritative for this zone.
>
> **[3:31](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=211)** So I'm going to cancel out of there but once you get rolling and you start adding the zones and different servers, they will show up on the name servers tab.
>
> **[3:39](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=219)** If we go back to zone transfers, you'll see there is a third option and the third option is where you can manually add in here a list of servers that you're willing to replicate to.
>
> **[3:49](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=229)** If you want to have just, let's say, a subset of the servers that are getting replication from this server.
>
> **[3:54](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=234)** So that's how you can control zone transfers from a primary zone server.
>
> **[4:03](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=243)** Now there's one last thing I want to show you before we wrap this up and that is at the very bottom here, it says, to specify to secondary servers to be notified of an update, click notify.
>
> **[4:13](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=253)** So if I click on notify, I can go ahead and automatically notify to the servers listed on the name servers tab or again I can make a list.
>
> **[4:21](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=261)** And what this basically does is it makes it that when a change is made to the database, it will proactively go out to the secondaries, the replicas we could say and those replicas will be notified, hey there's some changes, would you like those changes.
>
> **[4:38](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=278)** And then the secondaries will go ahead and initiate if they do indeed want them.

> [!info]- Semantic Content
>
> **Env Vars:** dns (11), dc1 (2)
> **UI Navigation:** click on (5), go to (3)
> **Definitions:** is a  (4), in other words (1)
> **CLI Commands:** make (2)
> **Cross-References:** go back to (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Create secondary forward lookup zones](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=0)** - [Instructor] Another type of forward lookup zone that we could create is one called a secondary zone, which is essentially a read-only copy of the zone information that it will get a copy of from a primary.
>
> **[0:13](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=13)** So here we are in the DNS manager on member one.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=17)** And we've already created a primary zone for child.landonhotel.local but now let's create a secondary.
>
> **[0:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=23)** So I'm going to click on forward lookup zones, right-click, and select new zone.
>
> **[0:28](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=28)** This takes us into the new zone wizard.
>
> **[0:30](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=30)** Here is the welcome screen.
>
> **[0:31](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=31)** I will click next.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=33)** This time I'm going to choose secondary zone, which it says creates a copy of a zone that exists on another server.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=40)** I'll click next.
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=41)** What is the name of the zone?
>
> **[0:42](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=42)** Well I have a zone that already exists in my environment called Landonhotel.local cause that's the name of my domain in my forest.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=52)** And I will click next.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=53)** And now I'm going to put in the IP address of DC one.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=57)** So I'm going to put in ten.35.four.81.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=60)** I could have also typed in the name but I just want to to show you that if I type in the IP address and then click away it will actually resolve it to DC one.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=68)** And it will validate and say yup, this is actually a DNS server that is authoritative and hosting a primary zone for Landonhotel.local.
>
> **[1:19](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=79)** I will click next and finish.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=81)** And just like that I've created a secondary zone.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=85)** Now you'll notice when I click on the zone it says that the zone is not loaded by the DNS server.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=90)** And if I right click on it I have an option here to transfer from the master.
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=95)** Master being DC one.
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=96)** Now I'm going to tell you that this won't work, okay.
>
> **[1:39](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=99)** So I'm going to click on it and nothing changes even if I refresh and do anything it's not going to change and the reason why is because I happen to know that DC one is not allowing zone transfers.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=109)** Cause by default that was an [[Active Directory]] integrated zone, and it's always set up to be as secure as possible which means no zone transfers.
>
> **[1:56](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=116)** So let's fix that.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=118)** So let's jump over to DC one.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=120)** Here in the server manager on DC one I'm going to go up to tools, select DNS to take us back into the DNS manager.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=127)** And if I expand down to my Landonhotel.local zone I can right click and go to its properties.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=135)** And if I go to the zone transfers tab like I said, we're not allowing zone transfers.
>
> **[2:20](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=140)** So I'm going to click the button to say I do want to allow zone transfers.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=143)** And for now I'm going to leave it at any server.
>
> **[2:26](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=146)** And the reason why is because there's an interesting phenomenon to where you can't put member one on the name servers tab until after it's received the zone information once.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=157)** So it's kind of interesting quirk.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=159)** So I'm going to say to any server and click okay.
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=163)** And now let's jump back over to member one and get it to transfer over.
>
> **[2:49](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=169)** Back here on member one, again it's a little quirky.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=172)** What I'm going to do is I'm going to actually click all the way up on DNS and hit refresh.
>
> **[2:57](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=177)** And then expand back down until I get to my Landonhotel.local.
>
> **[3:01](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=181)** And then right click and say I would like to transfer from the master and hit refresh.
>
> **[3:08](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=188)** And you'll see that now I have all the zone information that has been transferred over from DC one.
>
> **[3:16](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=196)** Now the next thing I should do is I should go back and fix the zone transfer configuration to go along with this to make sure it's set up securely the way it should be.
>
> **[3:25](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=205)** So let's jump back to DC one.
>
> **[3:31](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=211)** So back here on DC one I'm going to go into the Landonhotel.local properties go to the zone transfers tab.
>
> **[3:37](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=217)** And now I'm going to go to the name servers tab and add, and I'm just going to type in member dash one and ask it to resolve.
>
> **[3:47](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=227)** And you'll see here that it resolves the IP address and says okay, so I will click okay once again.
>
> **[3:52](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=232)** Technically I should have typed in the fully qualified domain name but it already resolved it so we're okay.
>
> **[3:58](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=238)** I'm going to go to the zone transfers tab and say only servers listed on the named servers tab and okay.
>
> **[4:05](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=245)** And now we have successfully set up a secondary zone over on member one which will get a copy of everything from DC one over here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (1)
> **UI Navigation:** go to (5), click on (4), right-click (1)
> **Env Vars:** dns (6)
> **Prerequisites:** set up (3)
> **CLI Commands:** make (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Create stub zones](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=0)** - [Instructor] Another type of zone that we can create is a special type of zone, called a Stub zone.
>
> **[0:06](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=6)** Now I will tell you that Stub zones are typically the most confusing to most people when you're first learning about this.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=12)** And so for simplicity, I like to just say that a Stub zone provides something called Dynamic Delegation.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=21)** So I'd like to show you what that means, Dynamic Delegation, and then how to create the Stub zone.
>
> **[0:26](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=26)** So here I am in the DNS manager on DC one, and I am authoritative for the landonhotel.local domain, but over on member one, we have created a new zone called child.landonhotel.local, okay?
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=45)** In preparation for a sub-domain that would be created.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=48)** Now one thing that can be done, and it's kind of the old fashioned way of doing it, is we could create a delegation.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=53)** So if I click on landonhotel.local, I can right click and I can select to create a New Delegation.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=61)** It takes me into the New Delegation Wizard.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=63)** There's a welcome screen, I'll click Next.
>
> **[1:05](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=65)** Delegated domain, I just type in the [[Microsoft Word|word]] child.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=67)** It assumes it's going to be a sub-domain, so the Fully qualified domain name here populates as child.landonhotel.local.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=74)** Click next.
>
> **[1:15](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=75)** And then we're going to go ahead and add who is the server that is authoritative.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=81)** So I'm just going to type in member one.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=84)** Resolve, okay?
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=85)** And I get the IP address as 10.35.4.91.
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=88)** It's okay.
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=89)** Click OK.
>
> **[1:31](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=91)** It populates here.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=92)** I'll click Next and Finish, and you see here that I now have this delegation that's been created inside of landonhotel.local, with a Name Server Record for member one, meaning if anybody comes to this DNS server looking for a host inside of child.landonhotel.local, it'll just refer them over to member one.
>
> **[1:52](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=112)** But here's the problem.
>
> **[1:53](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=113)** If I create more DNS servers that are authoritative for that name space, this server will never know about it and will rely exclusively on member one.
>
> **[2:04](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=124)** And if member one goes away, even though there are still name servers out there, this server won't know about it.
>
> **[2:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=130)** All right, so I'm going to delete this delegation.
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=132)** I'm going to show you a better way of doing this.
>
> **[2:14](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=134)** And that would be, if I click up here on Forward Lookup Zones, to right click and select New Zone.
>
> **[2:20](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=140)** And here in the New Zone Wizard, I'm going to select a Stub zone, and I'm going to go ahead and I'm going to clear out.
>
> **[2:26](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=146)** We're not going to make it [[Active Directory]] integrated, because we're going to worry about that later.
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=150)** Right now I want to focus on the Stub zone aspect of things.
>
> **[2:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=152)** So I'm going to click on Next, and I'm going to give it name.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=155)** So again it's going to be child.landonhotel.local.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=159)** Click Next.
>
> **[2:40](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=160)** It creates a file because it's not active directory integrated.
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=163)** So this is the database file, it's going to create no problem there.
>
> **[2:46](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=166)** Click Next.
>
> **[2:47](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=167)** And now I need to add the IP address, or name of the server.
>
> **[2:51](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=171)** So 10.35.4.91 was the IP address of member one.
>
> **[2:56](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=176)** If I click away, you'll see it resolves that.
>
> **[2:58](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=178)** Says it's OK.
>
> **[2:59](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=179)** I click on Next and Finish.
>
> **[3:02](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=182)** And now I have a Stub zone that's been created for child.landonhotel.local, and if I click on it, you'll notice the only records that I'm going to get are the Start of Authority and the Name Server records.
>
> **[3:14](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=194)** And the important thing here is the Name Server records.
>
> **[3:17](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=197)** What's going to happen here is as we add additional records into child.landohotel.local, they're not going to get replicated over here, unless that record happens to be one that is representing a new Name Server that's authoritative.
>
> **[3:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=213)** And when that Name Server record gets created, it will get replicated over here, which means dynamically, we are now learning about new Name Servers, or what we could call New Delegations, because if somebody comes to this server now looking for a host in child.landonhotel.local, we're going to look into this Stub zone to say, Ah ha, I know about the Name Servers.
>
> **[3:54](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=234)** I can refer them on to get their answers.
>
> **[3:57](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=237)** That's how Stub zone works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (2), [[Microsoft Word|Word]] (1)
> **UI Navigation:** click on (4)
> **Env Vars:** dns (3)
> **Versions:** 10.35.4 (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Active Directory–integrated zones](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=0)** - [Instructor] When working with DNS zones, it's always recommended that whenever possible that you use something called an [[Active Directory]]-integrated zone, and the reason why is because it's the most efficient and most secure form of DNS zone that we have.
>
> **[0:14](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=14)** So to take a look at an Active Directory-integrated zone, I am here in the DNS Manager on DC-1.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=21)** Now one thing that's significant that you need to know is that DC-1 is not just a DNS server, but it's also a domain controller in our domain.
>
> **[0:29](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=29)** Okay, we'll see why that's significant in just a moment.
>
> **[0:31](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=31)** Now to create an Active Directory-integrated zone, you do it just like any other zone that you create.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=37)** You right-click on Forward Lookup Zone, you select New Zone, and in the New Zone Wizard, when you create the zone, you make sure to check a box down here that says Store the zone in Active Directory.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=48)** But notice it says you can only do this if the DNS server is a writeable domain controller.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=53)** So you have to make sure that your DNS server is also a domain controller if you want to be Active Directory-integrated.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=60)** Now I'm going to go ahead and hit Cancel 'cause there's nothing else different there about creating the zone other than it will be in Active Directory.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=67)** So let's take a look at one though.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=69)** Here I have landonhotel.local, and it is Active Directory-integrated.
>
> **[1:13](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=73)** And I know this because if I right-click and go to its Properties, it will tell me.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=78)** Says what type is it?
>
> **[1:19](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=79)** It's Active Directory-integrated.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=81)** And there are some specific details that I'd like to show you about this Active Directory-integrated zone.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=87)** First of all, if I come down to the bottom half of the window here, you'll notice for dynamic updates, it says secure only.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=94)** All right, if I pull that down, I could do no dynamic updates, which means every record would have to be done manually.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=101)** I could do nonsecure and secure.
>
> **[1:43](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=103)** But just as the name says, it's allowing nonsecure updates, which means somebody might be able to go ahead and communicate with this DNS server and put a fake record in.
>
> **[1:52](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=112)** And then we have, was the default setting, which is secure only.
>
> **[1:56](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=116)** And the easy way to explain what secure only means is that the only clients that are going to be able to dynamically update themselves with the DNS server, okay, so the only ones that can say, hi DNS server, I'm here, this is my name, this is my IP address, are clients that are members of the domain.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=135)** Okay, so let me move this box over a little bit, and you'll notice there's a number of records here for like CLIENT-1, CLIENT-2, DC one, two, and three, MEMBER-1, MEMBER-2.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=143)** These are all members of the landonhotel.local domain, so they are allowed to dynamically communicate with this DNS server if their IP address information were to change.
>
> **[2:36](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=156)** Now a second thing that I want to point out is how replication works.
>
> **[2:40](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=160)** Unlike a non-Active Directory-integrated zone, where we have a file on the hard drive that we then send out transfers out to other secondary servers, this is nothing more than a partition within Active Directory and is replicated as part of Active Directory replication.
>
> **[2:58](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=178)** Now, as far as controlling that, here you will see it says replication right now is to all DNS servers in the domain.
>
> **[3:04](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=184)** And if I click on Change, I have some choices here.
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=187)** I could say to all DNS servers running on domain controllers in the forest.
>
> **[3:12](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=192)** There is the default, which we are at right now, which is all DNS servers that are running on domain controllers in the domain.
>
> **[3:17](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=197)** Or I could even say to all domain controllers in the domain, okay, which means even if they're not a DNS server, they will still have the partition and have the data on them.
>
> **[3:28](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=208)** Okay, so you could do that.
>
> **[3:29](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=209)** It creates extra replication, and it's extra space in the database.
>
> **[3:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=213)** But it does allow for replication to more servers.
>
> **[3:37](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=217)** All right, there is a fourth choice, it is grayed out here, which is to all domain controllers in the scope of the directory of this partition.
>
> **[3:44](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=224)** It has to do more with creating a separate application partition, which is something we would cover in more detail in another course.
>
> **[3:51](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=231)** But basically, you have a little bit of control over replication, but not much, because it's just going to replicate as part of Active Directory replication.
>
> **[3:59](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=239)** Now the only other thing that I want to mention, because we did see this when we created a secondary zone, is I want you to understand that just because you are Active Directory-integrated and replication is done by default as part of Active Directory replication, if you want to create a secondary zone on a server that is not a domain controller, the Active Directory-integrated zone can act as a primary and push a copy down to a zone file on a secondary server.
>
> **[4:30](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=270)** So overall, you can see why this is the choice and the way we should go whenever possible because there's not a whole lot to do, everything just kind of happens.
>
> **[4:40](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=280)** And it's efficient as far as replication, and it's secure as far as dynamic updates.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (16)
> **Env Vars:** dns (14), client (2), member (2)
> **UI Navigation:** right-click (2), go to (1), click on (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Best Practices:** recommended (1), make sure to (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Create reverse lookup zones](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=0)** - When we think about DNS, we typically think about name resolution.
>
> **[0:04](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=4)** And when we think about name resolution, we typically are thinking about how as humans we think about that we know the name of a computer but we don't know the IP address to be able to communicate on the network, right?
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=17)** So we say to a DNS server, hey what is the IP address of a computer with this name and then we get that resolved and we can communicate on the network.
>
> **[0:27](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=27)** Well this is all done through the forward lookup zones there is however an occasional scenario where we know the IP address and we need to know the name of the computer that goes with that IP address.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=39)** And this is handled through reverse look up zones.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=43)** So I'd like to show you how to create a reverse look up zone.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=46)** To do this, I am in the DNS manager on member one.
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=51)** And this is a DNS server where we've created a few forward look up zones.
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=55)** So if I expand it, you can see here.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=57)** I have a primary that I've created called child dot Landon hotel dot local and I have a secondary zone for Landon hotel dot local.
>
> **[1:05](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=65)** But here we have reverse look up zones and you'll see when I click on it, there are no zones there.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=70)** I can add one if I want.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=71)** So I'm going to right click and select new zone and this is very similar to how we create a forward look up zone.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=78)** So here I have the welcome screen where I'll click next, I need to chose is this going to be a primary, secondary, or sub zone.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=85)** I'm just going to say it's going to be a primary zone.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=87)** And I'll click next.
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=89)** And I'm going to make it an IP four reverse look up zone.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=92)** You could do IPV six as well.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=94)** For this demonstration I'm going to do IP version four.
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=96)** I'll click next.
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=98)** And I now need to give the network ID.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=100)** And so I'm going to put in 10 dot 35 dot four, okay?
>
> **[1:45](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=105)** Because that's the network that we have been working on.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=109)** And then I will click next.
>
> **[1:51](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=111)** It creates a file, okay?
>
> **[1:53](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=113)** And this is the default name that it creates.
>
> **[1:56](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=116)** It actually kind of reverses it.
>
> **[1:57](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=117)** It puts four dot 35 dot 10 and then it puts in addr arpa DNS.
>
> **[2:01](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=121)** You can name it something else if you want but typically you just leave the name alone with the default and I will click next.
>
> **[2:08](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=128)** Just like with a forward look up zone, we have to decide if we're going to allow dynamic updates.
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=132)** I do want to have dynamic updates, I don't want to do things statically, okay?
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=136)** And because I'm not [[Active Directory]] integrated, my only option is non secure and secure so we'll click next.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=143)** And finish.
>
> **[2:24](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=144)** And I now have a reverse look up zone where records could be placed to be able to go ahead and if a system needs to know the name of a computer that goes along with an IP address, it could look here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (1)
> **Env Vars:** dns (5), ipv (1)
> **Analogies:** similar to (1), just like (1)
> **CLI Commands:** make (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - when (1)


### 7. DNS Resource Record Types

[↑ Back to Table of Contents](#table-of-contents)

#### [Host and pointer (PTR) records](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=0)** - [Instructor] Inside of our DNS Zone [[Databases]], we have what's called resource records.
>
> **[0:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=7)** And these resource records, are what allow us the ability to perform name resolution and actually even some other services, as we get deeper into the different record types.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=18)** We'll see how that works.
>
> **[0:20](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=20)** Speaking of record types, there's many different record types available, but what I want to talk to you about here is just a very simple name lookup record, or what's known as a host record and also the associated pointer record, which is a reverse lookup record.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=40)** To demonstrate this, I will tell you I am on the DNS manager here on member one.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=45)** And if I expand forward lookup zones, you will see that I have a zone that I created as a primary zone on this server called "child.landonhotel.local".
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=55)** Now over on the right you can see there's a couple of records that have already been created and I'm going to address these later.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=60)** Those are some special records, we'll come back to those.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=63)** But I want to show you how I could create a lookup record or a host record here in this zone.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=71)** I do this by right clicking in the blank space here and choosing new host.
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=76)** Now in parentheses is says "a" or "a-a-a-a" or what some people call quad a.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=81)** A host record is known as an 'a record' when dealing with IP version four and it's known as a 'quad a' record when working with IP version six.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=92)** But this is the type of record that we want to create for just a standard lookup.
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=96)** So I click on that.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=97)** I get the new host window.
>
> **[1:39](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=99)** Where I'm going to give it a name and the name I'm going to give it is demo.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=102)** You'll see here it populates a fully qualified domain name of "demo.child.landonhotel.local" and that's because I'm in the "child.landonhotel.local" zone.
>
> **[1:51](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=111)** And now I have to assign an IP address.
>
> **[1:54](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=114)** And so I'm going to do 10.35.4.125.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=118)** There's one more option I have here and that is a checkbox at the bottom as to whether or not I want to create an associated pointer record.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=126)** The pointer record means, I'm creating a new lookup that says if somebody is looking for demo, point them to the IP address 10.35.4.125.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=136)** Well likewise, I want to make a matching record that says if somebody wants to know the name of IP address 10.35.4.125, point them back to the name demo.
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=147)** So I will click on add host.
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=149)** It tells me that this record was created.
>
> **[2:31](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=151)** I'll click OK.
>
> **[2:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=152)** I don't need to create anymore, so I will click done.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=155)** You can see that a record was created for demo.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=159)** It is a host or an a record and the data is that if somebody is looking for demo it's going to send them to 10.35.4.125.
>
> **[2:48](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=168)** Now because I told it to make the matching pointer record, let me expand reverse lookup zones and click on my 4.35.10 reverse lookup zone.
>
> **[2:59](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=179)** Sometimes it appears right away and sometimes you have to hit refresh.
>
> **[3:01](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=181)** I'm going to hit refresh, there we go.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=183)** And you'll see that I now have a record there that says, if somebody knows about the IP address 10.35.4.125, the data that you're going to point them to is "demo.child.landonhotel.local".
>
> **[3:15](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=195)** Alright.
>
> **[3:16](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=196)** So both records were indeed created.
>
> **[3:20](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=200)** Now if I come back here to "child.landonhotel.local" and here I see my demo record.
>
> **[3:24](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=204)** Let's test this.
>
> **[3:26](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=206)** Let's test this and see if it works.
>
> **[3:28](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=208)** I'm going to do this by just simply going to a command prompt.
>
> **[3:31](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=211)** So I'm going to click on start.
>
> **[3:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=212)** I'm going to type in "c-m-d" on the keyboard and then open up a command prompt window.
>
> **[3:36](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=216)** I'm even going to move the window down so I can still see the record up above, behind it.
>
> **[3:42](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=222)** I'm going to type in the command "ping", "p-i-n-g".
>
> **[3:44](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=224)** And them I'm going to type in "demo.child.landonhotel.local".
>
> **[3:51](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=231)** Now before I hit enter, I need to emphasize something, this particular host doesn't exist.
>
> **[3:57](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=237)** Okay, this is fake.
>
> **[3:58](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=238)** So all that's going to happen is I'm going to show you that we are resolving the IP address but it won't actually return any results.
>
> **[4:06](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=246)** I'll hit enter and you'll see here it says "pinging demo.child.landonhotel.local" and it resolved to 10.35.4.125.
>
> **[4:14](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=254)** Just like we wanted it to.
>
> **[4:16](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=256)** You'll notice it says "destination host is unreachable" and that's because that actual IP address, that actual host doesn't exist.
>
> **[4:24](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=264)** Alright, but it's the idea here that how these records help resolve a name to an IP address.
>
> **[4:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=273)** So that's how you create host and pointer resource records.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1)
> **Versions:** 10.35.4 (6), 4.35.10 (1)
> **Definitions:** known as (3), is a  (3)
> **UI Navigation:** click on (4), checkbox (1)
> **CLI Commands:** make (2)
> **Env Vars:** dns (2)
> **Tools:** command prompt (2)
> **Analogies:** just like (1)

#### [Alias (CNAME) record](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/alias-cname-record?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/alias-cname-record?u=76281980&t=0)** - [Instructor] Another type of resource record we have available to us is something called a CNAME or Alias record.
>
> **[0:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/alias-cname-record?u=76281980&t=7)** Now the idea here is if we want somebody to look for a host by a certain name and that name is not actually the name of the host.
>
> **[0:19](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/alias-cname-record?u=76281980&t=19)** We may do this to shorten the name or simplify the name or, in some cases, just to disguise the name.
>
> **[0:25](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/alias-cname-record?u=76281980&t=25)** The best example I can give you of this is when you go onto the internet and you type in www dot whatever your favorite dot com website is.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/alias-cname-record?u=76281980&t=36)** The reality is that there aren't a whole bunch of servers out there on the internet named www.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/alias-cname-record?u=76281980&t=43)** What happens is www signifies that you're looking for the web server and so it'll be an alias that will then redirect to that server.
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/alias-cname-record?u=76281980&t=51)** So let me show you how to create one of these alias records.
>
> **[0:54](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/alias-cname-record?u=76281980&t=54)** Here I am in the DNS manager on Member one and I'm on the child dot landonhotel dot local zone and so I'm going to just go ahead and right+click in the blank space here and I'm going to say I want to create a New Alias or CNAME record.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/alias-cname-record?u=76281980&t=68)** And here it wants to know the alias name so let's use that same example I just gave you.
>
> **[1:13](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/alias-cname-record?u=76281980&t=73)** I'm going to put in www and so that means if somebody puts in www dot child dot landonhotel dot local what I'm going to actually do is I'm going to point them to demo dot child dot landonhotel dot local, okay.
>
> **[1:31](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/alias-cname-record?u=76281980&t=91)** And then I will click OK and you'll see here I now have an Alias record here for www.
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/alias-cname-record?u=76281980&t=98)** To test and see if this works, let's open up a command prompt.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/alias-cname-record?u=76281980&t=102)** I'm going to click on Start, type in cmd, opens up a Command Prompt window.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/alias-cname-record?u=76281980&t=108)** I want to move it so that we can still see the records behind it and I'm going to use the ping command, p-i-n-g, and I'll put in www dot child dot landonhotel dot local and when I hit Enter you'll notice that it says that it's Pinging demo dot child dot landonhotel dot local and so what it does at this point is www redirected them to demo dot child dot landonhotel dot local.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/alias-cname-record?u=76281980&t=136)** From there there has to be a matching host record which we already have above where it says the demo within child dot landonhotel dot local is 10 dot 35 dot four dot 125 which you can see down here in the Command Prompt window it has resolved to that same IP address, 10 dot 35 dot four dot 125.
>
> **[2:36](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/alias-cname-record?u=76281980&t=156)** Now I don't want you to be concerned that the replies were Destination Host unreachable because I have no such host.
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/alias-cname-record?u=76281980&t=163)** This is a fake host.
>
> **[2:44](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/alias-cname-record?u=76281980&t=164)** It doesn't actually exist on my network and so the point here is that somebody who is looking for www was redirected to demo and then we were able to resolve the IP address and that is how CNAME or Alias records work.

> [!info]- Semantic Content
>
> **Env Vars:** cname (3), dns (1)
> **Tools:** command prompt (3)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Mail exchanger (MX) record](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=0)** - [Instructor] Another type of resource record that we have available to us is something called an MX record, which stands for Mail Exchanger record.
>
> **[0:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=10)** And these records are explicitly used for the purposes of locating an email server.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=17)** So to demonstrate this, I am on MEMBER-1 in the DNS manager, and I'm highlighted on the child.landonhotel.local zone.
>
> **[0:27](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=27)** And if I want to go ahead and create one of these MX records, I just go ahead and right-click over here in the blank space and you'll see right here, there's an option for New Mail Exchanger, or MX record.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=38)** So here, the first thing it's asking me is for the Host or child domain.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=45)** And this might seem confusing, I know it does to most, but if you read the message below that window, it'll become a lot more clear.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=52)** It says, by default, DNS uses the parent domain name when creating this record.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=57)** You can specify a specific host or child name, but in most deployments, the above field is left blank.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=64)** In other words, if we're just talking about where's an email server for child.landonhotel.local, we leave it blank.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=71)** There's only some special circumstances where you would fill in that first field.
>
> **[1:15](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=75)** So the fully-qualified domain name is going to stay child.landonhotel.local.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=80)** Now, it wants the fully-qualified domain name of the actual mail server.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=85)** So I'm going to go here and say that we have a server here called mailserver1.child.landonhotel.local.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=94)** And then we have a Mail server priority.
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=98)** And this is just a number which will be relative to the priority number of any other MX records that we create.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=107)** Very typically, you will use 10, which is why it defaults to that, and if you create another record, it would be 20, and another one would be 30.
>
> **[1:57](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=117)** That is just standard.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=118)** But it's not required.
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=119)** You could do priority of one, two, and three.
>
> **[2:01](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=121)** The problem with doing that is if you ever want to put a priority in between, you're not able to do it.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=126)** So you'd have to reconfigure everything.
>
> **[2:08](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=128)** So I'm going to leave a Mail server priority of 10 and click OK.
>
> **[2:11](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=131)** And you'll see here that I now have a Mail Exchanger record.
>
> **[2:14](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=134)** Over on the left, it says Same as parent folder, that just means the parent folder being child.landonhotel.local.
>
> **[2:20](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=140)** And the name of the server is mailserver1.child.landonhotel.local.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=145)** Now, there's nothing I can do to demonstrate to prove that this record is working, and the truth of the matter is, I don't even have a server here called mailserver1.
>
> **[2:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=152)** This is the record you would create if you had an email server called mailserver1 servicing the child.landonhotel.local domain.
>
> **[2:41](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=161)** And in fact, you typically, when it comes to email servers, you have more than one.
>
> **[2:45](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=165)** You usually have some form of redundancy.
>
> **[2:47](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=167)** So I really should come in here and create a second one, which is going to be almost the identical thing, other than, I'm going to type in mailserver2.child.landonhotel.local.
>
> **[3:01](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=181)** And this time I give it a priority of 20 and click OK.
>
> **[3:05](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=185)** And now I have two of these Mail Exchanger records.
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=187)** And what's the difference?
>
> **[3:08](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=188)** Well, when somebody comes to this DNS server and says, hey, I have some email, where do I send it?
>
> **[3:14](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=194)** It's going to look for the lowest priority first.
>
> **[3:16](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=196)** So it's going to say, you should go to mailserver1.
>
> **[3:18](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=198)** And only if mailserver1 is unavailable, will you then try for mailserver2.
>
> **[3:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=203)** And that is how Mail Exchanger or MX records work.

> [!info]- Semantic Content
>
> **Env Vars:** dns (3), member (1)
> **UI Navigation:** right-click (1), go to (1)
> **Definitions:** stands for (1), in other words (1)
> **Speakers:** - [instructor] (1)

#### [Additional resource record types](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=0)** - In the past few videos, I have shown you how you can manually create a few different types of resource records.
>
> **[0:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=7)** But you may have noticed that there are some other records that were already created before we started doing anything, and I can tell you these are record types that you wouldn't typically be manually creating.
>
> **[0:20](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=20)** You usually let the system create these records for you.
>
> **[0:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=23)** So let's take a look at them.
>
> **[0:25](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=25)** Here I am on MEMBER-1 in the DNS Manager, and we're looking at the child.landonhotel.local zone.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=33)** And up at the top, there's two records that were created automatically, just with the creation of the zone.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=38)** The first right at the top is the Start of Authority, or the SOA record, and it is just what it sounds like.
>
> **[0:44](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=44)** It's the start of authority, meaning it's the record that identifies the primary name server for the DNS zone.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=53)** Which in this case is MEMBER-1, cause that's where I created the zone.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=57)** The next record is a Name Server record, or an NS record.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=62)** And again it's pretty much what it sounds like.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=64)** It will show who is a name server for this particular zone.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=70)** And because I only have the one server that I made authoritative for child.landonhotel.local, that's all we see is just the member 1, that's it.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=80)** But I'll tell you what, let me go ahead and click on landonhotel.local.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=83)** Now here, you'll notice that I have three name server records for dc-1, 2 and 3.
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=88)** And that's because all three of those servers are also DNS servers for the landonhotel.local zone.
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=96)** Now, additionally here in landonhotel.local, because we are servicing [[Active Directory]] services, I'm going to go ahead and expand this, and point out that there's a number of these underscore records.
>
> **[1:50](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=110)** And I'll click on tcp, just so you can see something here.
>
> **[1:53](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=113)** And I want you to notice that all these underscore records, they are what's called SRV resource records, and the SRV stands for Service Location.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=123)** And it means just that.
>
> **[2:04](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=124)** Where is the location of the service we're looking for?
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=127)** One of the best examples that I can give is when you sit down at a computer, and you want to log in to a domain, what that computer's going to do when you enter in your username and password, is it's going to go to the DNS server and say: "Hey DNS, I have a user that needs to be authenticated."
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=143)** And DNS will come to a record here, kerberos, for instance, and you'll see that there's three kerberos records, and they point to DC-1, 2 and 3.
>
> **[2:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=152)** The three domain controllers for this domain.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=155)** Then from there, it jumps back to landonhotel.local, and it says, okay, DC-1, 2 and 3 are ip addresses, 10.35.4.81, 82 and 83.
>
> **[2:49](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=169)** And it sends that back to the client.
>
> **[2:51](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=171)** It says: "these are the ip addresses of the servers who can possibly authenticate that user for you."
>
> **[2:57](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=177)** And so that's what SRV resource records are used for, is any time that we need to locate the presence of a specific service on our network, most typically domain services.
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=190)** So those are some of the additional resource record types that we also find on our DNS servers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Active Directory]] (1)
> **Env Vars:** dns (7), srv (3), member (2), soa (1)
> **Definitions:** is a  (2), stands for (1)
> **UI Navigation:** click on (2)
> **CLI Commands:** find (1)
> **Versions:** 10.35.4 (1)
> **Analogies:** for instance (1)
> **Speakers:** - in (1)


### 8. Name Resoution

[↑ Back to Table of Contents](#table-of-contents)

#### [DNS queries](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=0)** - [Instructor] One of the keys to understanding how name resolution works in DNS is understanding the concept of querying.
>
> **[0:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=7)** Querying can be thought of as very simple in the sense that it's just the idea of a client saying to a DNS server, hey, I have a name.
>
> **[0:13](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=13)** Can you tell me an IP address?
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=15)** But it gets a little bit more sophisticated that than and so to show you a little bit and talk to you about it, let's connect to Member 1 which is a DNS server on my network.
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=24)** Here in the server manager, I'll just go to tools and select DNS.
>
> **[0:28](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=28)** Takes me into the DNS manager.
>
> **[0:30](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=30)** If I were to go to Member 1 and right-click and go to properties, the first thing I want to show you is on the monitoring tab, there are a couple of tests you can do and I'm here not so much to talk to you about the tests, but to just show you that there is a test for what's called a simple query and a recursive query.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=46)** A simple query is just that.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=48)** It is a simple or what's sometimes called an iterative query where the client says, hey, do you know the IP address for this name?
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=56)** The DNS server will either know it or it won't, but that's it meaning it's just going to give its best answer it can give.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=62)** Either yes I do, no I don't, or no I don't, but here's somebody else you can go ask, so go ask them.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=67)** A recursive query, however, is where the DNS server goes out on behalf of the client and does not give a response back to the client until it does all its research and gives either an answer or an authoritative no, I do not have an answer.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=84)** Now, the best way to explain how this works would be to talk to you about what happens when you browse the internet.
>
> **[1:31](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=91)** Now, before we do browse the internet, I want to click on another tab here that says Root Hints, because we're going to talk about these root servers.
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=98)** Okay, this is just a list of 13 root servers.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=102)** Let me open up my internet browser and here we're connected to www.[[[LinkedIn]].com](https://linkedin.com).
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=106)** Here's what happens.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=107)** When a client says, I'm looking for www.[linkedin.com](https://linkedin.com).
>
> **[1:51](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=111)** We go to the DNS server and say, do you know who that is?
>
> **[1:54](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=114)** It's a recursive query meaning the DNS server is going to do everything in its power to find the answer for who www.[linkedin.com](https://linkedin.com) is.
>
> **[2:01](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=121)** The first thing you need to know is that technically it's www.[linkedin.com](https://linkedin.com). and what that dot at the end is is it stands for root.
>
> **[2:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=130)** What happens is is that the DNS server will go to the root DNS servers, that's what I was just showing you in Root Hints.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=136)** That's where it gets the IP addresses for those servers from and it does a simple query and says, hey, root DNS servers, do you know who www.[linkedin.com](https://linkedin.com) is?
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=147)** Those servers will say, no, we don't know who that is, but we do know about a DNS server called .com.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=155)** We know the .com DNS server.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=157)** Then, the local DNS server says, thank you, and does another simple query to the .com DNS servers and says, hey, .com DNS servers, do you know who www.[linkedin.com](https://linkedin.com) is?
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=173)** Keep in mind that when you register a .com, that's exactly what you're doing.
>
> **[2:57](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=177)** You are registering your DNS servers with the .com servers.
>
> **[3:01](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=181)** The .com server's going to actually, believe it or not, respond back and say, you know what?
>
> **[3:05](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=185)** I don't know who www.[linkedin.com](https://linkedin.com) is, but I do have an entry here for a DNS server that's authoritative for [linkedin.com](https://linkedin.com) and so it responds back with that.
>
> **[3:18](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=198)** The local DNS server says, great.
>
> **[3:20](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=200)** It goes to the IP address for [linkedin.com](https://linkedin.com) or to be specific, the DNS server for [linkedin.com](https://linkedin.com), and says do you know who www.[linkedin.com](https://linkedin.com) is?
>
> **[3:29](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=209)** The [linked.com](https://linked.com) DNS server will say, you know what?
>
> **[3:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=212)** I do, I actually know who that server is.
>
> **[3:35](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=215)** Here is the IP address and it sends that IP address back to the local DNS server here that this client is using and then at that point that server is able to send the response back to the client and the webpage displays in the browser.
>
> **[3:52](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=232)** That is how recursive querying works.
>
> **[3:56](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=236)** All right, so simple query is just, hey, do you know who it is?
>
> **[3:59](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=239)** It's yes or no, maybe a referral to somebody else.
>
> **[4:03](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=243)** Recursive query is I'm going to go out on behalf of the client and research and find the answer for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (11)
> **Env Vars:** dns (23)
> **URLs:** [linkedin.com](https://linkedin.com) (11), [linked.com](https://linked.com) (1)
> **UI Navigation:** go to (4), right-click (1), click on (1)
> **Definitions:** is a  (3), stands for (1)
> **CLI Commands:** find (2)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### [Testing queries](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/testing-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/testing-queries?u=76281980&t=0)** - [Instructor] Since responding to client queries is a major function of a DNS server, you may want to have a way of being able to test a DNS server's querying ability to help you troubleshoot problems if people are complaining about name resolution issues.
>
> **[0:19](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/testing-queries?u=76281980&t=19)** So to demonstrate this, I am going to connect to DC-1, which is a functional DNS server in my network.
>
> **[0:28](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/testing-queries?u=76281980&t=28)** Here in the Server Manager we'll go up to tools and select DNS.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/testing-queries?u=76281980&t=33)** Here in the DNS manager, if we go to the properties of DC-1, so right-click and select Properties, in the properties you'll see that there is a monitoring tab where we have the ability to go ahead and perform a test on simple querying and/or recursive querying.
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/testing-queries?u=76281980&t=51)** And if I want to do the test right now, all I have to do is click the button that says Test Now.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/testing-queries?u=76281980&t=57)** And you'll see here that I very quickly got a response that said both passed, which means, hey, everything is great and we're able to go ahead and perform queries for our clients.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/testing-queries?u=76281980&t=70)** We also have the ability, instead of performing on-demand tests, you could check a box that says to perform automatic testing in certain intervals.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/testing-queries?u=76281980&t=81)** And you'll see here it says one minute.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/testing-queries?u=76281980&t=83)** And you might be thinking to yourself, oh my goodness, why would I do a test every one minute?
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/testing-queries?u=76281980&t=87)** Well first of all, you'll see here I could do seconds, minutes, or hours, but the idea here is not necessarily for the sake of having a permanent schedule of this test.
>
> **[1:39](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/testing-queries?u=76281980&t=99)** The idea is more along the lines of saying hey, we're having a problem and so if you come in here and you do a manual test and then you have a failure, now you want to start troubleshooting why it's failing.
>
> **[1:51](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/testing-queries?u=76281980&t=111)** And while you're troubleshooting, you may want it to go ahead and just keep doing a regular test every minute, so that you can just easily pop back into this screen and check to see.
>
> **[2:02](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/testing-queries?u=76281980&t=122)** So this is how you can go ahead and test to make sure that your DNS server is capable of doing DNS queries for its clients.

> [!info]- Semantic Content
>
> **Env Vars:** dns (7)
> **UI Navigation:** go to (1), right-click (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [instructor] (1)

#### [DNS cache](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=0)** - One important component to DNS name resolution is the DNS cache.
>
> **[0:06](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=6)** Now this is an area of short-term local memory where a DNS client and or the DNS server will store the results of any recent name resolution queries.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=18)** So in order to take a look at this I want to go ahead and jump onto one of my DNS servers member one.
>
> **[0:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=23)** Now a couple of videos ago I talked about recursive querying when you go to look up a website out on the internet.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=32)** Alright and I went ahead and pulled up a browser and I'll actually do that here.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=35)** Pull up the browser and it goes to www.[[[LinkedIn]].com](https://LinkedIn.com) And I went through the whole process of how it got that answer and then displays this up on the screen.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=43)** Let me go ahead and close this.
>
> **[0:44](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=44)** Because I want to explain that there was one piece that I didn't talk about in that other video.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=50)** And that is before the answer is given to the client to put the website up on the screen the first thing the server does is puts the information in its local cache.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=62)** So that if another client comes in with the same request it doesn't have to utilize the resources to do the full recursive query process.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=69)** It just goes to its cache and it has the answer.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=71)** Now to see this cache I need to go to a command prompt.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=74)** So I'm going to click on Start and I'm going to type C M D and I'm going to type in a command called IP Config forward slash display DNS and hit enter.
>
> **[1:26](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=86)** And you'll see there's a lot of information, okay.
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=88)** Apparently I've looked at [[Google]] recently and a number of other things and if I scroll through you'll see I do have some [LinkedIn.com](https://LinkedIn.com) results and it's a big long list and if I were to go deep enough into the list, I would actually find www.[LinkedIn.com](https://LinkedIn.com) Let's actually do something.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=107)** If you ever feel that the cache maybe has some incorrect information you can type in another command IP Config forward slash flush DNS and you'll see here it says it successfully flushed the cache.
>
> **[2:01](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=121)** And now if I were to do IP Config Display DNS I basically get nothing, right.
>
> **[2:08](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=128)** It says "Could not display the cache".
>
> **[2:09](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=129)** It's not an error it's just there's nothing in the cache.
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=132)** So now that I've done that and I've figured out all the extra information let me open up my browser again, which forces it to go out and look for [LinkedIn.com](https://LinkedIn.com).
>
> **[2:21](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=141)** Close that and let's again do IP Config Display DNS.
>
> **[2:28](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=148)** And hit enter.
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=149)** And you'll notice again it kind of scrolled there is a lot of information.
>
> **[2:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=153)** The reason is because you end up learning about all sorts of different stuff while you're doing recursive querying, but you'll notice I do have the information for www.[LinkedIn.com](https://LinkedIn.com).
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=163)** So that's how you can manage the cache from the command prompt.
>
> **[2:48](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=168)** Now if I were to go into the DNS manager, so I'll go up to Tools and select DNS.
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=173)** I will show you that from the graphical interface if you right click on the server you do also have an option here for Clear Cache.
>
> **[3:02](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=182)** Alright, there's nothing here for displaying the cache but you can clear the cache and that's the equivalent of doing IP Config slash Flush DNS.
>
> **[3:12](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=192)** So that is pretty much how the DNS cache works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (5), [[Google]] (1)
> **Env Vars:** dns (13)
> **URLs:** [linkedin.com](https://linkedin.com) (5)
> **UI Navigation:** go to (2), click on (2)
> **Tools:** command prompt (2)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** find (1)
> **Speakers:** - one (1)

#### [Forwarding](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/forwarding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/forwarding?u=76281980&t=0)** - [Instructor] When a DNS client sends a query to a DNS server, and then that DNS server looks at the name that the client is looking for and it thinks to itself, "You know that's not in any of the zones "that I'm authoritative for, what am I supposed to do?"
>
> **[0:13](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/forwarding?u=76281980&t=13)** Well this is where DNS forwarding comes into play.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/forwarding?u=76281980&t=17)** Forwarding provides a way for name spaces or research records that are not contained in these zones that a DNS server is authoritative for that they can be passed along to another DNS server for name resolution to take place.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/forwarding?u=76281980&t=32)** Now, there's a couple different versions of how forwarding works.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/forwarding?u=76281980&t=35)** What I want to look at here is just simple DNS forwarding, and to do this I'm going to connect to one of my DNS servers called DC1.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/forwarding?u=76281980&t=45)** Here in the server manager I'm going to go to the tools menu and select DNS.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/forwarding?u=76281980&t=50)** This takes me to the DNS manager and if I expand DC1 and then expand my forward look up zones you'll see here that I am authoritative or I have information on a few different zones here, but what happens if I get a request that's not in one of these zones?
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/forwarding?u=76281980&t=68)** Well, let's take a look at where we would go.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/forwarding?u=76281980&t=71)** If I go to the properties of DC1 so right-click, select properties, you'll see that there is a forwarders tab.
>
> **[1:19](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/forwarding?u=76281980&t=79)** When I click on that tab, this is where you have an opportunity to point to other DNS servers that may know about who can give you assistance in resolving this query.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/forwarding?u=76281980&t=92)** Now, on my screen I actually happen to have a couple of DNS servers listed, and the reason why is it has to with my environment here at my corporate [[Microsoft Office|office]].
>
> **[1:44](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/forwarding?u=76281980&t=104)** I'm on a network where, specifically, I point to some DNS servers in the company who point out to the internet.
>
> **[1:53](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/forwarding?u=76281980&t=113)** So I have a couple of IP addresses here so that if a request comes to me, and I don't know the answer or it outside of landonhotel.local or whatever then I'm going to go out to these DNS servers.
>
> **[2:04](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/forwarding?u=76281980&t=124)** And you'll also notice that there is a check box down below that says, "Use root hints "if no forwarders are available."
>
> **[2:11](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/forwarding?u=76281980&t=131)** Okay so it's basically saying if you don't have any forwarders, if these weren't here, then we would jump over to the root hints tab and we would jump into one of these internet root hint servers to try to resolve the query for our client So, that is how DNS forwarding works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (1)
> **Env Vars:** dns (15), dc1 (3)
> **UI Navigation:** go to (2), right-click (1), click on (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Conditional forwarding](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/conditional-forwarding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/conditional-forwarding?u=76281980&t=0)** - [Instructor] Another type of forwarding that we have in DNS is something called conditional forwarding.
>
> **[0:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/conditional-forwarding?u=76281980&t=7)** And you'll see here I'm still on DC-1, and I'm in the DNS Manager.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/conditional-forwarding?u=76281980&t=12)** You'll notice on the list here we actually have something called conditional forwarders.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/conditional-forwarding?u=76281980&t=17)** And if I click on it, you'll notice it's blank.
>
> **[0:20](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/conditional-forwarding?u=76281980&t=20)** Right, there's nothing there.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/conditional-forwarding?u=76281980&t=21)** But let's go ahead and create a conditional forwarder.
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/conditional-forwarding?u=76281980&t=24)** I'm going to right click, and select to create a new conditional forwarder, and now I get to put in the name space that I want to conditionally forward for.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/conditional-forwarding?u=76281980&t=33)** All right, so I'm going to put in demodomain.local, and then I have to say, hey if somebody's looking for a name that is in the demodomain.local name space, where should I send them to?
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/conditional-forwarding?u=76281980&t=48)** All right, so maybe I specifically know in my network, in my enterprise, I know of a DNS server that is authoritative for demodomain.local.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/conditional-forwarding?u=76281980&t=57)** So I'm just going to put in 10.35.4.50, and here's the thing, I don't really have demodomain.local, and there's not a DNS server that's authoritative for it, this is all hypothetical, which means as soon as I click away, you'll see here it's going to say it's attempting to resolve, it's not going to be able to resolve, and it will not validate it as a DNS server, okay, so, in a real world scenario, you would point to a real DNS server that is authoritative for that zone, and then you would instead of getting this red circle with an X in it, you would get a green circle with a check mark saying that it is verified, all right?
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/conditional-forwarding?u=76281980&t=93)** But even with it not being verified, if I click okay, I still have the conditional forwarder created for demodomain.local.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/conditional-forwarding?u=76281980&t=100)** And what this means is if a request comes into me, if a query comes into this DNS server here, looking for some name.demodomain.local, it's going to explicitly send it to 10.35.4.50, to that DNS server looking for the answer.
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/conditional-forwarding?u=76281980&t=119)** The thing that's nice about conditional forwarding, as opposed to just standard forwarding, is you can create more than one, okay?
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/conditional-forwarding?u=76281980&t=126)** So if I right click new conditional forwarder, and we'll just put anotherdemo.local, just to pick another domain, and then type in another IP address, we'll say 10.35.4.51, just use the next IP address, and again, it's going to go through, attempt to resolve, it will not validate.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/conditional-forwarding?u=76281980&t=145)** I won't even wait for the error, I'm just going to click okay.
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/conditional-forwarding?u=76281980&t=147)** Now you can see here that I have two conditional forwarders and the reason it's called conditional is because if the request comes in specifically for that name space, that I'm not authoritative for, I know where to go.
>
> **[2:41](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/conditional-forwarding?u=76281980&t=161)** And in fact, there is another type of conditional forwarder that we already talked about in another video, and that was the video where we talked about creating a stub zone.
>
> **[2:51](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/conditional-forwarding?u=76281980&t=171)** And when we created the stub zone, so for instance here I made a stub zone for child.landonhotel.local, right, if I click on forward zones you'll see child.landonhotel.local is a stub zone.
>
> **[3:02](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/conditional-forwarding?u=76281980&t=182)** It's a form of forwarding, because the only thing that that zone has is name server information, so that if anybody's looking for child.landonhotel.local, I'm going to send them over to that server, to member-1 to get it resolved.
>
> **[3:16](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/conditional-forwarding?u=76281980&t=196)** So that's another type of conditional forwarder.
>
> **[3:20](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/conditional-forwarding?u=76281980&t=200)** All right, so conditional forwarding can help save a lot of confusion and traffic over just standard forwarding.

> [!info]- Semantic Content
>
> **Env Vars:** dns (8)
> **Versions:** 10.35.4 (3)
> **UI Navigation:** click on (2)
> **Cross-References:** we talked about (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Caching only DNS servers](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=0)** - [Instructor] In the last few videos I talked a little bit about a concept called the DNS cache.
>
> **[0:05](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=5)** We also talked about DNS forwarding.
>
> **[0:08](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=8)** And the reason I mention this, is if you put those two technologies together, you can create what's called a DNS caching only server.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=18)** And so to demonstrate this, I am going to connect to a DNS server that I have here called Member one.
>
> **[0:26](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=26)** Here in the server manager, I'm going to go up to the tools menu and select DNS.
>
> **[0:31](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=31)** Now, if you've been following along through this entire course, you may remember member one was a server that we manually installed DNS and originally when we clicked on our zones we didn't have anything.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=45)** Everything was blank.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=46)** And I mentioned way back then that technically this server was able to respond to queries.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=53)** So what I want to do is, let's make it blank once again.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=56)** Alright so I'm going to take this Landon Hotel dot locals zone and delete it.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=62)** And it says are you sure you want to do it?
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=63)** Yes.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=64)** I'm going to take the child zone and I'm going to delete it.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=70)** And yes.
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=72)** In fact, I believe I have a re-verse zone.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=74)** I do.
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=76)** So I'm going to delete that zone.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=77)** Yes.
>
> **[1:19](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=79)** Alright, so this means there are no forward zones, there are no re-verse lookup zones.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=83)** Doesn't exist.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=84)** Well what I can do, even without any zone, I could go to the properties of member one and I could go to the forwarders tab and I could add a forwarder.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=97)** So I'm going to edit this list and I'm going to put in 10.35.4.81 and click OK.
>
> **[1:45](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=105)** Well actually before I click OK I will click in the blank space just the verify it's DC one and now I'll click OK.
>
> **[1:50](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=110)** And in fact it might be a good idea to add a second one.
>
> **[1:53](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=113)** Right, so let's put in 10.35.4.82 which is DC two.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=118)** Now we have two of them on the list.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=120)** And I'm going to click OK out of the properties sheet.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=123)** What I've just done, is I've made it to any client that comes to this server and says hey I have some machine name that I'm trying to look up.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=136)** This server has no zones that it's authorized for so it's going to go ahead and it's going to jump over to those other DNS server and a forwarder and ask them to resolve the query.
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=149)** And the reason we're calling it caching only is because is what this server will do is when it goes out and gets the answer from the other DNS servers, it will put that answer into it's cache.
>
> **[2:42](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=162)** And then that way, when another client makes the same request, this server already has the answer without having to go out to anywhere else to look it up.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=172)** And this is a fairly common thing you'll do.
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=175)** Maybe out in like remote [[Microsoft Office|office]].
>
> **[2:57](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=177)** Where you'll have all the local clients in that remote office pointing at that DNS server.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=183)** But you don't have much in the way of security so you don't want any zone information stored.
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=187)** So all you'd have is the local DNS cache and that's it.
>
> **[3:11](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=191)** But that would help reduce the amount of queries that are going across the WAN link, 'cause only the DNS server would be going across and asking when it doesn't already know the answer.
>
> **[3:22](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=202)** So that's how caching only DNS server works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Office|Office]] (2)
> **Env Vars:** dns (12), wan (1)
> **Versions:** 10.35.4 (2)
> **UI Navigation:** go to (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 9. DNS Security

[↑ Back to Table of Contents](#table-of-contents)

#### [DNS cache locking](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache-locking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache-locking?u=76281980&t=0)** - [Instructor] Since DNS is such a critical network service, it's important that you try to protect it as much as possible.
>
> **[0:06](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache-locking?u=76281980&t=6)** Now one way that we can help protect DNS is through the use of something called DNS cache locking.
>
> **[0:14](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache-locking?u=76281980&t=14)** DNS cache locking is a security feature that you can use to control when information in the DNS cache can be overwritten.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache-locking?u=76281980&t=21)** So we've already learned that when a recursive DNS server responds to a query, that server will cache the results so that it can respond quickly if it happens to get another query looking for the same information.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache-locking?u=76281980&t=33)** The amount of time that the DNS server will hold on to that information in the cache is determine by something called the TTL or the time to live value.
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache-locking?u=76281980&t=41)** So here's the deal, the way it's been set up is that it's possible for that information in the cache to be updated if there's more recent information than when it was first put into the cache, but like with many other features, we end up having malicious users who ruin it for the [[Representational State Transfer (REST)|rest]] of us.
>
> **[0:59](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache-locking?u=76281980&t=59)** So what the malicious users will do is they will go ahead and send information to a server to say, oh you know what that record you have in your cache, well I've got some updated information for you.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache-locking?u=76281980&t=68)** So why don't you update that and then of course, the information that it's pointing to is not real, it's going to a malicious site and so we don't want that to happen.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache-locking?u=76281980&t=77)** So what we do is we configure cache locking as a percentage value, which by default is on and set to 100%, which means that until the time to live has reached 100% expired, that cache can longer be overwritten.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache-locking?u=76281980&t=92)** Now we can change this if we want.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache-locking?u=76281980&t=94)** There's a command line tool, which I have listed here.
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache-locking?u=76281980&t=98)** It's called DNS Command or DNSCMD, and if you then put /Confid/CacheLockingPercent and then enter your percentage, you could change it from 100% to anything all the way down to 0, if you want to re enable that ability to modify what's in the cache.
>
> **[1:57](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache-locking?u=76281980&t=117)** There's also a [[Powershell]] command which is called Set-DnsServerCache which can be used the same way.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache-locking?u=76281980&t=126)** Where you do -LockingPercent and put in the percentage value.
>
> **[2:11](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache-locking?u=76281980&t=131)** So again it's set to 100% by default and that's the most secure setting you can have, which means once it's in the cache, it will stay there and cannot be modified at all until it has expired and I recommend that unless you are finding a reason to change it, that you should stay with that default value.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Powershell]] (1)
> **Env Vars:** dns (8), ttl (1), dnscmd (1)
> **Definitions:** is a  (1), means that (1), is called (1)
> **Tools:** command line (1), powershell (1)
> **Prerequisites:** set up (1), configure (1)
> **Speakers:** - [instructor] (1)

#### [DNS socket pool](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-socket-pool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-socket-pool?u=76281980&t=0)** - [Narrator] Another feature we can use to help secure DNS is something called the DNS socket pool.
>
> **[0:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-socket-pool?u=76281980&t=7)** Now, the DNS socket pool enables a DNS server to use source port randomization when issuing DNS queries.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-socket-pool?u=76281980&t=15)** When the DNS service starts, the server chooses a source port form a pool of sockets that are available for issuing queries.
>
> **[0:23](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-socket-pool?u=76281980&t=23)** Instead of using a predictable source port, the DNS server uses a random port number that it selects from the DNS socket pool.
>
> **[0:31](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-socket-pool?u=76281980&t=31)** Now, this is what makes cash tampering attacks much more difficult, because a malicious user must correctly guess both the source port of the DNS query and a random transaction ID to successfully run the attack.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-socket-pool?u=76281980&t=43)** Now, this pool is enabled by default in [[Windows Server]] 2019 and it's actually set to a pool size of 2500, but it is modifiable.
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-socket-pool?u=76281980&t=55)** There is a command that you can use from the command line.
>
> **[0:58](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-socket-pool?u=76281980&t=58)** Okay, so it's dnscmd/Config/SocketPoolSize and then you can enter a value anywhere from zero to 10,000.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-socket-pool?u=76281980&t=69)** So again, 2500 is the default, but keep in mind the larger the value, the greater the protection you'll have against DNS spoofing attacks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows Server]] (1)
> **Env Vars:** dns (10)
> **Tools:** command line (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)

#### [DNS security extensions](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-security-extensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-security-extensions?u=76281980&t=0)** - [Instructor] Another feature you can use to help secure DNS has been around for quite a while at this point, but it's something called DNSSEC.
>
> **[0:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-security-extensions?u=76281980&t=10)** So DNSSEC, which actually stands for The [[Domain Name System (DNS)|Domain Name System]] Security Extensions, is pretty much just what it sounds like.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-security-extensions?u=76281980&t=18)** Security extensions on DNS.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-security-extensions?u=76281980&t=21)** This enables DNS zones and all records in the zone to be signed cryptographically so that client computers can validate the DNS response.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-security-extensions?u=76281980&t=32)** DNS is often subject to various attacks, such as spoofing, cash tampering, and things like that, and DNSSEC can help protect against these types of threats and provide a more secure DNS infrastructure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Domain Name System (DNS)|Domain name system]] (1)
> **Env Vars:** dns (6), dnssec (3)
> **Definitions:** stands for (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/next-steps?u=76281980&t=0)** - [Ed] I hope you've enjoyed learning about implementing DHCP and DNS in [[Windows Server]] 2019 as much as I've enjoyed showing it to you.
>
> **[0:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/next-steps?u=76281980&t=10)** If you want to learn more about networking with Windows Server 2019, please explore our library as we have a number of courses out there to help you.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/next-steps?u=76281980&t=17)** See you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows Server]] (2)
> **Env Vars:** dhcp (1), dns (1)
> **Speakers:** - [ed] (1)


## Instructor

- [[Ed Liberman]]

## Skills Covered

- Dynamic Host Configuration Protocol (DHCP)
- DNS Management
- Windows Server

## Path Context

### In [[Getting Started with Windows Server 2019]]
← [[Windows Server 2019- Install and Configure Active Directory]] | **4 of 4**

## Appears In

- [[Getting Started with Windows Server 2019]]

## Related Courses

_Courses sharing skills:_

- [[Windows Server 2022- DHCP and DNS]] — Windows Server, Dynamic Host Configuration Protocol (DHCP)
- [[Windows Server 2022- Install and Configure Active Directory]] — Windows Server
- [[Windows Server 2022- Installation and Configuration]] — Windows Server
- [[Windows Server 2019- Install and Configure Active Directory]] — Windows Server
- [[Windows Server 2019- Installation and Configuration]] — Windows Server

---

[↑ Back to top](#)