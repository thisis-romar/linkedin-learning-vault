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
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dhcp-and-dns-in-windows-server-2019?u=76281980&t=0)** - [Ed Liberman] [[DHCP]] and DNS are the two main networking components for any functioning [[Windows Server]] network. In fact, without them, you essentially don't even have a network. To be a successful administrator who manages a [[Microsoft]] network environment, it is crucial to have a solid understanding of Enterprise networking. In this course, we'll be taking a look at these two primary networking services, DHCP and DNS. First, we're going to take a look at DHCP, where we'll learn all about how to install, configure, and manage a DHCP server. Then, we're going to jump into DNS, so we can see how name resolution works in the Enterprise network. So please join me, Ed Liberman, in my [[LinkedIn]] Learning course on DHCP and DNS services in Windows Server 2019. Let's get started!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (5), [[Windows Server]] (2), [[Microsoft]] (1), [[LinkedIn]] (1)
> **Env Vars:** dhcp (5), dns (4)
> **Prerequisites:** install (1), configure (1)
> **Speakers:** - [ed (1)

#### [Course organization](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/course-organization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/course-organization?u=76281980&t=0)** - [Instructor] In this course I'm expecting that you should hopefully have at least some basic knowledge of [[Windows Server]] environments. Now it's not mandatory, you could come into this course without any prior knowledge, but it would certainly be helpful if you had at least some general basic knowledge of Windows Server operating systems, whether it's Windows Server 2019, or even something prior. Now, as far as the demonstration is going, you'll notice on my system here that I have seven [[Virtual Machines]] setup. Okay, I can tell you that I have DC1, 2, and 3, and they are just what you think they would be. They are domain controllers. I can tell you that primarily DC1 and 2 are in place so that we can have some level of redundancy, okay, but the reality is is you could get away with just DC1. And DC3 is a domain controller that we will create within the course. Okay, so technically you could have just one domain controller and another machine ready to become a domain controller. We also have a couple of member servers. Again, I do everything so I have multiples, but primarily everything can be done on a single member server. And then I have a couple clients, Client1 and Client2. I do use both of them. I use Client2 actually for one specific lab, but otherwise you probably could get away with a single client as well, if you want to follow along. So, in quick summary I have seven machines, three domain controllers, two member servers, and two clients. I would say the bare minimum you can get away
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/course-organization?u=76281980&t=92)** with would be one domain controller, one machine ready to become a domain controller, one member server and one client.

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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/what-is-dhcp?u=76281980&t=0)** - [Instructor] Before you deploy any networking service role out on to your network, it's important that you have an understanding of what that networking service is going to provide and what kind of an effect it's going to have in your network environment. So here, I'd like to talk to you about the [[DHCP]] networking service, and really, you should know that DHCP is a server role in [[Windows Server]] 2019. And additionally, you'll see that it is a protocol, meaning it's not a [[Microsoft]] thing, it's a networking protocol in any environment. So the letters DHCP actually stand for the [[DHCP|Dynamic Host Configuration Protocol]], and this is a protocol that's used to simplify the configuration of IP clients out on your network and reducing the complexity and amount of administrative work by using automatic IP configuration. So the real simplified definition is that it's a way of dynamically or automatically configuring IP addresses out on your clients. So what are some of the benefits of using DHCP versus not using it? Well one real obvious benefit is when using DHCP, all your clients are going to get their IP addresses automatically, whereas without DHCP, you're going to have to go around to every single client and type in the information one by one. And that's a lot of work. And you have to know that beside the workload that's involved,
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/what-is-dhcp?u=76281980&t=94)** the other advantage to having everything done dynamically is that you will get a consistent configuration every time. And if there are any changes to the configuration, the clients will get that update automatically. Whereas again, if you're doing things without DHCP and you're typing everything in manually, you may have a typo at any given machine with just a simple slip of the keyboard. And then also, if there's a change to the configuration, there's always the possibility that a client won't get that change and then you'll have communication issues. So as you can see, the benefit of using DHCP is quite great.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (8), [[Windows Server]] (1), [[Microsoft]] (1), [[DHCP|Dynamic host configuration protocol]] (1)
> **Env Vars:** dhcp (8)
> **Definitions:** is a  (3)
> **Speakers:** - [instructor] (1)

#### [Lease generation](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=0)** - [Instructor] So let's talk about the actual [[DHCP]] Lease Generation process. It is a four-step process, commonly known as DORA. So if you've ever heard anybody just generally talking about a DORA process, they're talking about DHCP Lease Generation. So what do we mean by DORA? Well, first of all, the letters are D, O, R, A, and each letter represents one of the four steps in the process. So let's talk about step one. Step one is D, and that stands for discover. What happens is that a client who needs an IP address, and it's been configured to get it automatically from a DHCP server, it needs to discover the presence of any DHCP servers on the network. So it will do a broadcast, the net broadcast package, by the way, is actually called a DHCP Discover. If you ever sniff your packets out on the network, and you see DHCP Discover, that's where this comes from. But what the client is basically doing is, it's just broadcasting out, hey, I'm a client, and I need an IP address. Is there any DHCP server out there that can help me? So that's the discover process. Then from there, we go in to step two, which is, any DHCP servers on the network which hear that broadcast, they will go ahead and make an offer
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=96)** back to the client. So that's the O in step two, it's for offer. And any and all DHCP servers that hear that original discover, are kind of yelling back to the client saying, yes, I am here, I'm a DHCP server. And I have an IP address for you. Here it is if you want it. So it makes an offer. Then the client, in step three, will make a request. And that's what the R stands for. So the client will request back to the DHCP server and say, yes, I would indeed like that IP address. That is the one I'm going to take. And it'll do that to whatever is the first DHCP server it hears back from if there happens to be more than one. It'll send that request back to the DHCP server and then the final step is A for acknowledge. Some people say acknowledgement, and the reality is that the actual packet on the network is called a DHCP ACK. So just A-C-K. And that is the DHCP server responding back to the client with an acknowledgment saying, okay, it's yours, it's been logged in my database, and you have it for x amount of time, whatever the least duration is. So just as a quick review, the four-step process is, a client first discovers the presence by saying, hey, I'm looking for a DHCP server. Then DHCP server responds back with an offer saying, I'm here, here's an IP address.
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-generation?u=76281980&t=190)** Then from there, the client says, thank you, I would like that IP address, that's my request. And step four is the server responding back with an acknowledgment saying, okay, you got it, it's been logged, and here's how long you can have it. That is the DHCP Lease Generation process.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (18)
> **Env Vars:** dhcp (18), dora (3), ack (1)
> **Definitions:** is a  (2), stands for (2), known as (1), is called (1)
> **CLI Commands:** make (2)
> **Speakers:** - [instructor] (1)

#### [Lease renewal](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=0)** - [Instructor] When a client gets his IP address from a [[DHCP]] server, we called it a DHCP lease. And if you think of the term lease, it's almost kind of like you're renting it. You only get to use it for a specified amount of time. It's for that reason, we actually have something called the DHCP lease renewal process. Now the renewal process is actually quite simple, and the reason why is because the client already knows about the DHCP server, so there's no reason to go through a DORA process. All it's going to do is go right back to the DHCP server with a request. So we're going to jump right to the R part to DORA and it's going to say hey DHCP server, I'd like to request to renew the lease on this IP address. And then the second part, it's just a two step process, is the server responding back with an acknowledgement to say yup, you got it. I'm going to renew your lease. You can now have it for, again, some X amount of time. And that really is how simple the lease renewal process is. What is probably more important to understand, is not the obvious two step process of saying hey can I renew, yes you can. But when does it happen? Well a client will attempt to renew its lease after 50% of the lease duration has expired. Okay so it doesn't just wait unit the full lease has been used up,
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=94)** because in that case, what if the DHCP server was down right in that moment? So we actually do this at 50%. So let me give you a scenario. The default DHCP lease time is eight days. So if we were to give an eight day lease out to a client, then after four days, it's going to reach back out to the DHCP server and say hey, I'd like to refresh or renew this lease for a fresh eight days. All right, and if the DHCP server responds, great, we got a fresh eight days. And then four days in again it will try, but if the DHCP server is not available when it attempts to renew, well the client's only used up 50% of its lease, so it just continues to use that IP address. All right, and it uses it until another 50% of the remaining time has passed. All right, so again, going back to the eight day scenario. We try to renew at four days, and if we're not able to do that, we have four days left. Which means half of that, we're going to try again in two days. And if we can't do that again, we'll try again in half of the remaining two days, which is one day. And it will keep doing this every half life, so to speak, until it gets to 87.5% of the lease being expired. At this point, it will attempt to do the full DHCP lease generation process. Okay it'll go back out and say, it's thinking to itself, wow I'm down to only 12 and a half percent of my lease time left, and I don't want to lose this IP address.
>
> **[3:06](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/lease-renewal?u=76281980&t=186)** So it just kind of yells out with a discover all over again to say is there any DHCP server who's available to help me out here? And hopefully it finds a DHCP server and if it does, everything's great, but if it doesn't, then at that point, it will basically just hold on till it gets to 100%. At which point it loses the IP address, and it just starts all over again with the full lease generation process hoping to get a new IP address. And that's how DHCP lease renewal work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (15)
> **Env Vars:** dhcp (15), dora (2)
> **Versions:** 87.5 (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)


### 2. Setting Up DHCP

[↑ Back to Table of Contents](#table-of-contents)

#### [Install the DHCP server role](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=0)** - [Instructor] The first step when it comes to deploying [[DHCP]] out in your network would be to install the DHCP server role onto one of your servers. To demonstrate this, I'm going to connect to a server I have here called DC-1. Here in the server manager, if we want to install a role, we have to click where it says add roles and features. We start off with the before you begin screen, which just kind of says, hey you're about to do something significant, so make sure all your security and IP configuration is in place. We know it is, so I'm going to go ahead and click next. This is going to be a role-based installation, so I can leave the default and click next again. The server where you want to install this role on is DC-1, which is already selected, so I will click next. And now I get to choose the actual role. If you look on the list, you'll see that we do have an option for DHCP server. If I check the box, you'll see I get a little pop out that says there's other features that are required as part of this installation. And so I'll say okay, go ahead and add those features. And then I can click next. Here I get the list of all the other features, in case there was anything else I wanted to install, but I don't need anything else, so I will click next. I get an overview of what DHCP is, I will click next. And finally I get a confirmation of what we're about to do. On this screen, what I typically like to do, even though it's not needed as much anymore, is I like to check this box at the top that says that if a reboot is needed as part of this process, go ahead and do it automatically. Now when I check this box, I'll get a little warning saying, hey, you know, this is a server,
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=93)** somebody else might be connected to it, or maybe we're even doing this remote and somebody's on the machine and you're going to kick them off. I know that we're okay here, so I'll click yes to the warning and install. And at this point, it begins the installation of the DHCP server role and the features that go along with it. Okay, so we can see that the installation has completed, but you'll notice that it says configuration required, and a little further down, there's a little link here to complete the DHCP configuration. So I'm going to click on that link, and you'll see here that there's a couple of things that are going to happen. One is that two security groups are going to be created in our [[Active Directory]] environment, specifically for DHCP server administration. And I say in active directory because we are in an active directory environment. If you're in a stand-alone work group, it would just be on the server. So we have DHCP administrators and users, which are two different groups that you can use to delegate various permissions on managing the DHCP server out to other users in your environment. The other thing that's going to happen is it's going to authorize the DHCP server on this computer. And you'll see here it says, only if it's domain joined, because authorizing is something that only relates to an active directory environment. And basically this is what makes it that you don't end up with any rogue DHCP servers out on your network. You have to be somebody of an enterprise administrator level to go ahead and authorize this DHCP server,
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dhcp-server-role?u=76281980&t=187)** so you don't end up with any DHCP servers that aren't supposed to be there, because they can cause all kinds of IP conflicts and can also be a [[Security Risk]] to letting people on your network. So I'm going to go ahead and click on next, and now I need to give the credentials, and it defaults to who I'm logged in as, which is the Landon Hotel administrator, which is the domain administrator and also the enterprise administrator for the Landon Hotel dot local forest. So I will accept those credentials and click commit. And at this point, you'll see here that we have created the security groups, says done, and we have authorized the DHCP server. Done. So I will click close, and I can close this window, and we have installed the DHCP server role.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (15), [[Active Directory]] (4), [[Security Risk]] (1)
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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/authorize-a-dhcp-server?u=76281980&t=0)** - [Instructor] Before you can perform any real management of [[DHCP]], you need to make certain that the DHCP server has been authorized in [[Active Directory]] to be able to serve clients in your environment. So here in the Server Manager, we're going to go up to the Tools menu and you'll see there is a selection for DHCP because we have installed the role. When I click on it it takes us into the DHCP Manager. Now here in the DHCP Manager, you'll see that we have the server DC one dot landonhotel dot local that's the actual machine we installed DHCP on and if I expand that you see we have a couple of management options. We have IP version four and IP version six. I will tell you that there's not much in the way of DHCP management on IP version six so most of what we'll be dealing with will be with IP version four. But for right now what I want you to focus on is on both IP v four and six, both of the little servers here, it's very tiny, but [[Microsoft]] does put a little green circle with a check mark on it and that represents that the server is authorized and that IP version four or six, depending on which one you're working with, is ready to go ahead and service clients. And the reason that we see that is because we went ahead and told the server to go ahead and get authorized as part of the role installation
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/authorize-a-dhcp-server?u=76281980&t=96)** but I want to show you what you would do in case you come across a server that is not authorized. If I click on DC one up at the top and then I right+click on it, you'll notice that there's an option here, it's the second one on the list, to Unauthorize and this is a toggle selection so I'm going to click on it and it's going to give me a warning saying that if you remove authorization it means the DHCP server cannot respond to any client requests. Okay, well we know what we're doing here so I'm going to click Yes and watch what happens. Nothing. The reason nothing happens is it's a little bit awkward. The DHCP manager, it doesn't refresh itself, okay, so something has happened, you just don't see it. So I'm going to go ahead and click on the Refresh button and now you can see that the green circles with the check mark in it have now become white circles with a red down arrow. That is what you will see if you have an unauthorized server. If I right+click on DC one again, you'll notice that this time the selection, I mentioned it was a toggle, is actually to Authorize. All right, so if you come across a server that is not currently authorized, all you have to do is right+click on it in the DHCP manager and select Authorize and when I do, again, notice nothing happens. Something did happen, it just doesn't show up on the screen, it doesn't refresh on its own so I'm going to click the Refresh button and just like that, you'll see that we go back to our green circles
>
> **[3:09](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/authorize-a-dhcp-server?u=76281980&t=189)** with the check mark in it. The only thing that I am going to emphasize is that you need to remember that in order to be able to authorize a DHCP server to be able to service clients in your network you have to have enterprise administrator credentials, okay, because this is to prevent some lower-level rogue administrator from creating a DHCP server you don't want in your enterprise. So that is how we authorize a DHCP server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (13), [[Active Directory]] (1), [[Microsoft]] (1)
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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=0)** - [Instructor] Once you have installed the [[DHCP]] Server Role and you have confirmed that the server is authorized and ready to serve clients, the next thing you need to do is create a scope. So here we're in the DHCP Manager on dc-1, where we've installed the DHCP Server Role, and you'll notice that we have IP version four and six, and we're going to be dealing with IP version four here. So let me expand that. When I do, you'll see we have a few different management options, but not much, and the reason is 'cause there's really nothing there to manage yet 'cause we need to create a scope. So to create a scope, I'm going to click on IP version four to highlight it, and you'll see here on the right, it says you need to add a scope. So to do that, I'm going to right-click on IP version four and select New Scope. When I do this, it opens up the New Scope Wizard. First, we have a Welcome screen. I will just click Next through that. We have to give it a name, so I'll call it LandonHotelClients. I could add a description if necessary, but I'll leave that blank for now and I'll click Next. And here is where I get to select the IP range of addresses that I'm going to hand out. So here on my network, I am working within a certain range, and I'm going to select a subset of that range to hand out to my clients. And that range is going to be 10.35.4.101, okay, so that's going to be the first IP address.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=93)** And then I'm going to go to the End IP address and I'll put in 10.35.4.120. All right, so that's a range of 20 IP addresses that I can hand out to up to 20 clients. Down below is where we set the Subnet mask that's going to go with the IP address. Now it's defaulting to eight because any IP address that starts with 10 is assumed to be a class A address, which means it'll have a Subnet mask of 255.0.0.0, but that is not the Subnet mask I'm using in my network here. I'm actually using a slash 26, so I'm going to put a 26 in the length, and that then you'll see changes it to a Subnet mask of 255.255.255.192. And that is the Subnet mask that we are using for the Subnet that I have here in my environment. At this point, I can click on Next, and I get to decide are there any exclusions in the range? Where we would use an exclusion is if I have a range of IP addresses, but maybe there are some in the middle of that range that are already being used for something else or I just don't want to hand them out to clients. So for an example, I'm going to put in 10.35.4.111, and for an End range, I'll put in 10.35.4.113, right. So I'm going to say that those three IP addresses in the middle of that block of 20, I don't want to hand those out. This is a mistake a lot of people make.
>
> **[3:06](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=186)** A lot of people will add that range and then they will click on Next. The problem is that range has not actually officially been added yet, you have to click the Add button, and when you do, you now see it appear in the box where it says Excluded address range. Now I can go ahead and click on Next, and this takes me to the Lease Duration page. And you'll see that the default, it's a little hard to see 'cause it highlights the Days, let me click over on Minutes, so you can see that the Days is eight days, so eight days, zero hours, and zero minutes. That's the default setting for the lease duration, and for many networks, that's perfectly acceptable, so just go ahead and keep the eight-day lease duration time. The only time you would really ever change it is if you had an environment that was either extremely static, or maybe you want to lower the DHCP traffic and let the leases last longer than eight days, or if you have an extremely volatile environment where you have constant people coming and going on a regular basis, maybe they come in, they have a laptop, they're only there for a few hours and then they leave, well, you don't want to have an IP address held up for eight days 'cause you might run out of IP addresses, so you may lower the lease at that point. In this case, I'm going to keep the default and go ahead and click on Next. Now I have the choice to configure some additional DHCP options, things that you would also typically configure with an IP address like a default Gateway, DNS servers, things like that.
>
> **[4:39](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-dhcp-scopes?u=76281980&t=279)** Now the default is Yes, so go ahead and configure these options now 'cause it is something you typically would do. In this case, I'm going to click No, and the reason why is 'cause I want to show you how you can configure these options manually later. I will click Next and Finish. And at this point, you can see that I now have a Scope called LandonHotelClients. And that is how you create a scope.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (5)
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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=0)** - [Instructor] [[DHCP]] options give us the ability to make it that we're not just configuring our clients with an IP address but with a complete IP configuration. So we can include things like a default gateway and a DNS server, stuff like that. So there's a few different ways we can go about assigning these DHCP options. Now, we saw one when we created the scope, we had a choice to go ahead and add the DHCP options there. But additionally, we have the ability to server options. Here in the DHCP administrator, we have server options, and this is where I could add options for all clients that this server is going to be servicing. If I expand my scope that I created, the Landon Hotel Clients scope, you'll see that there's an option there for scope options. All right, so that's how we can do it just for this individual scope, and I will tell you there is one other place you can do it. We're going to get into this later, but it's with reservations. When you create a reservation, you can also put some additional options there. Now, why is this significant that you have the different options of where to do it? Well, in the event that there is a conflict, like we set up some options for the server, but then we also have some different options for the scope, the client will always get the options that are closest to the client itself, okay? Meaning the server is furthest away, scope is the next closer, and a reservation would be the absolute closest. But let me show you how to do it at the scope level.
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=95)** All right, here we have our scope options. So I'm going to click on it, and then I'm going to right-click and select to configure options. Here, I get a list of all the various options that we could configure, and there are quite a few. But there's only a small subset that are very common. One would be the router. Right here we have 003 Router. I'm going to check the box, and then here is where I can put in the IP address of the default gateway that we want to assign to the client. So I'm going to put in 10.35.4.65. That is the default gateway on my network, and then I'm going to click Add. And you'll see it's been added there. If I scroll down just a little bit, here's 006 DNS Servers, and I'm going to click on that. And I need to put in the IP address of the DNS servers that I want to point to, and in this case it's going to be 10.35.4.81, and I'm going to click Add. And, in fact, we want to do more than one DNS server, so I'm going to put in 10.35.4.82, okay? I have two of them I want to add. And you'll notice, by the way, when I click Add, it does a quick validation to make sure that the DNS server service is running on the machine that we just pointed to, which is helpful in case you accidentally type the wrong IP address, it'll go ahead and flag you and say that's not a valid DNS server. If I scroll down just a little bit more, we have DNS Domain Name. So if I check that box, I can go ahead and I can put in
>
> **[3:12](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-options?u=76281980&t=192)** landonhotel.local, which just means that it will be assigned with that default DNS suffix. At this point, I'm going to go ahead and click OK, and you'll see here that three options have been created as scope options to be handed out with the IP address information in this scope.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (4)
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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=0)** - [Instructor] Once we have created a scope and made sure that it has been completely configured the way it should be configured. The next thing we need to do is activate the scope so that it can begin handing out IP configuration to the clients. So here, in the [[DHCP]] Administrator, you'll notice that over on the left, let's kind of look at everything here. First of all, IP version 4, you'll notice that it no longer has a green circle with a check mark but it actually has a blue circle with an exclamation point. Which means something isn't quite done being configured, that's what that represents. Furthermore, if you look at the scope, Landon Hotel Clients, you'll notice it has a circle with a red down arrow. You'll also notice over in the center section here if you look at the scope that still has the red down arrow to the right of it it actually says it's 'inactive'. Alright. So it's telling you this is not an active scope that can hand out IP addresses yet. So, what do we want to do to make sure that we're good to go? Well, the first thing is let's click on the Address Pool for the scope. And we see here that we have a pool of 10.35.4.101 to 120, so we have a range of 20 IP addresses that we're going to hand out. We want to confirm that's what we want, and it is. From that range of 20 IP addresses, we also notice that there is three of them, which is 111 to 113, which have been excluded from being able to be distributed and that is, again, something
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/activate-a-scope?u=76281980&t=93)** that we do want. If I click on address leases you won't see anything cause we are not active yet to be handing out. That's something we would see later after a lease has been handed out. The reservations, that's something we will cover in another video. And then, if we move down to scope options, you'll see here that we've set up our options to hand out a default gateway, DNS Servers, and domain name. So, looks like everything is ready to go. So, how do we activate the scope? Well, all you have to do is click on the scope. And then, right click on it and you'll see, right about in the middle, there is an option to activate. And when I click on it, you'll see that the red down arrow goes away. And you'll notice on IP version 4 we now go back to the green circle with the check mark. And in fact, if I click on IP version 4, you'll see over on in the center pane here where it says the scope Landon Hotel Clients. That particular scope is now under a status of 'active', to show that it has been activated. Now if we ever want to deactivate, or make it inactive again all we have to do is click on the scope and then right click. And you'll see here that where it used to say activate it now says deactivate. Okay, so it's a toggle. Very similar to what we saw earlier in another video on being able to authorize or unauthorize. Alright, so now that we have activated the scope, we are truly ready to begin handing out IP addresses to our clients.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (1)
> **UI Navigation:** click on (7), toggle (1)
> **Versions:** version 4 (3), 10.35.4 (1)
> **CLI Commands:** make (2)
> **Env Vars:** dhcp (1), dns (1)
> **Cross-References:** go back to (1), earlier in (1)
> **Definitions:** is an  (1)
> **Analogies:** similar to (1)

#### [Configure DHCP clients](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=0)** - [Instructor] Once you've installed the [[DHCP]] server role, created a scope, and activated it, it's time to go ahead and set up your clients to be able to start retrieving their IP configuration from a DHCP server. So to demonstrate that, I have a couple of client machines that I have running here, and I'm going to connect to Client-1, which is simply a [[Windows 10]] client computer running in our domain. Now, in order to configure this system to get its IP address from a DHCP server, we have to get to our network connections. Now, there's a few different ways to do it depending on the specifics of your client machine, but I'm going to show you one that's pretty consistent across the board, and that is to click on Start, and then to just start typing the [[Microsoft Word|word]] control, which will give you the ability to jump into the control panel. Here in the control panel, I'm going to click on Network and Internet, then I'm going to click on Network and Sharing Center, and inside there, you'll see there is an option for Change Adapter Settings. And when I click on that, it opens up my network connections window, where I can see my ethernet connection. At this point, I right-click on the ethernet connection and go to its properties, and the properties that I want to adjust are going to be the internet protocol version four property, so I want to click on that. Now, be careful, don't click on the checkbox, that'll make the check go away. You want to click on the words to highlight it, and then click Properties. Now you'll see here in this window that right now, I have a static IP configuration that has been put in place.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=93)** I did that so that this system would communicate with the network until I had DHCP in place. Now, if I wanted to change this to being a DHCP client, I just simply click the button that says obtain an IP address automatically. And when I do that, a couple things are going to happen. One, you're going to see that the IP configuration will blank out, and two, I want you to notice up here next to the General tab how it's blank right now, but it won't be when I click this button. So I'm going to click the button, everything blanks out, and we get an alternate configuration option. Now, we'll look at that in just a second, but first I want to show you the bottom half here where again, from a DNS server perspective, we can do that statically, or if we configure the DHCP options on our DHCP server, which I did, I can also choose to get that automatically as well. So what about this alternate configuration tab? This is how you determine what this client's going to do in the event that it can't find a DHCP server. All right, so I'm going to click on that, and you'll notice the default is to go to something called APIPA, A-P-I-P-A, which is automatic private [[IP Addressing]]. And that's where it will dynamically give itself an IP address in the 169.254 range, and it can talk to other computers that have that same IP range, but it can't get out of your network, it can't be routed. So if you need a good backup, then you can click on User Configured and give it a static backup address. Okay, we're not going to worry about any of that right now. So I'm going to leave it at automatic private IP addressing. Go back to the General tab, and one real quick comment
>
> **[3:08](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=188)** I want to mention here is that even though I had to come into this window and configure from static to dynamic, the default is exactly the way you see it right now. When you first install any [[Microsoft]] client operating system, the default is for the IP address to be obtained automatically. So you wouldn't have to come and really do anything for this to happen. So let me click OK, and then close this window, and I'm actually going to close out of all of my [[Windows]]. And let's see what has happened. I'm going to click on Start, and this time I'm going to type in CMD, which takes me to a command prompt option here. Here in the command prompt window, I'm going to type in IP Config, and I'm going to put a space and then a forward slash all. And when I hit Enter, you'll notice that I have an IP address, right here it says IPv4 Address of 10.35.4.101, with a subnet mask of triple 255.192. You'll see that because the options were configured, I have a default gateway of 10.35.4.65. The DHCP server it got this information from happens to be 10.35.4.81, which is the IP address of DC1, our DHCP server. And it has pointed to DNS servers of 81 and 82, which was also an option that we set up. So indeed, everything is working. Now, a couple other quick IP config commands you should be familiar with on your clients,
>
> **[4:42](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-clients?u=76281980&t=282)** and they would be IP config forward slash release, which is where we go ahead and release the IP address from the DHCP server, so I'll hit Enter. And you'll notice now I have no IP configuration. And the other command would then be IP config forward slash renew, and that's where it's going to go through and it's going to take just a moment while it reaches out and does the DORA process that we learned about in another video to communicate with the DHCP server, and you'll see that once again it has received an IP address. All right, so that is how you configure your client. The one last thing I think we should take a look at is back on the server, what it looks like when a client has received an IP address. So back here on DC1, let me go up to my Tools and select DHCP to get into the DCHP administrator. And when I take a look and expand down to our scope, when I expand that scope and I click on Address Leases, you'll see that I now have one lease that has been generated and that IP address happens to match, right? It's 101, and it was handed out to CLIENT1. Okay, so that's what it looks like on the server once a client has received an IP address, and that's how you configure your client.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (13), [[IP Addressing]] (2), [[Windows 10]] (1), [[Microsoft Word|Word]] (1), [[Microsoft]] (1)
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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=0)** - [Instructor] Sometimes when working with [[DHCP]] clients, we still want them to be configured dynamically, but we want to make sure that we get a consistent IP address every single time. One example of this might be a printer out on your network. This is a resource that you want clients to always be able to know that it's in the same place. Well, rather than going around to every printer and assigning a static IP address, there is a way to make it that they get the equivalent of a static IP address from the DHCP server, and this is by using reservations. So here, we're looking at the DHCP administrator on DC-1. And inside of our LandonHotelClients scope, you'll see here that we have an option for Reservations. And if I click on it, you'll see that it's blank. Right, we haven't set any up yet. So in order to create a new reservation, you right-click and select New Reservation. Now the first thing we're going to do is give the reservation a name. Now I don't have any printers on my network. Okay, so I can't use that to demonstrate this, but I do have some clients. So we're just going to say that we want Client-1 to get the same IP address every single time. All right, and then the IP address that we want to assign to Client-1 is 115. Now it has to be an IP address from within the scope, right? We have 101 to 120. So I'm going to just pick 115, it's kind of random here. The next item is the MAC address.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=94)** Now where do I get that from? Well, I have to actually go out to the client and look at the physical address of the network card in order to populate that information. So let's jump over to Client-1. One easy way to find the MAC address once you're on the client is to click on Start and type in cmd, which allows you to open up a command prompt. And inside the command prompt, just simply type ipconfig /all. And you'll notice that right in about the middle of the screen here, there is a line that says Physical Address. And the physical address, I'll highlight it here, says 00-15-5D-10-A5-04. So you're going to want to go ahead and jot that down. And to be clear, you don't want to jot down my physical address. If you're following along, jot down your own physical address, which should be different than this one. And now I'm going to jump back over to the server so that we can populate that in our reservation. So back here on the server, in the MAC address, I'm going to type in 00-15-5D, and, yes, it is possible to have letters because this is hexadecimal,
>
> **[2:56](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=176)** - 10-A5-04 And then click Add, and close the window. You'll see that I now have a reservation, and it says 10.35.4.115 belongs to Client-1. If I click on the Address Leases tab, you'll see something very interesting right now, which is you'll notice that Client-1 has the IP address of 101 because that's what it already got previously. And it's going to hold on to that lease until we give it a, you know, either the time cycle passes or we force it to refresh. But we also see the reservation that has been set up. And the reservation says inactive, and that's because the client is not actually using it right now. So let's make that happen. Let's jump back over to the client. So back here on Client-1, in the Command Prompt window, I'm going to go ahead and I'm going to type ipconfig /release to release its current IP address back to the DHCP server. And then I'm going to type ipconfig /renew to say, hey, I want to go ahead and get an IP address. And when I do, this time when it goes through the DORA process, the server is going to recognize the MAC address that is making the request, and it's going to say ah-ha, I have a special IP address just for you, and that's 10.35.4.115.
>
> **[4:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-reservations?u=76281980&t=272)** And sure enough, you'll see here that it has now populated with that IP address. Okay, so that IP address will never be given to anyone else, and it will be given every time to this client. For one final confirmation, let's jump back to the server. I am going to hit the Refresh button. And you'll notice that now the lease for 10.35.4.101 went away, and the only lease that I have out there is the 115, which happens to be a reservation. You'll see that under Lease Expiration. And it now says active, meaning I know not only do I have that reservation, but the client is currently active and using it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (4)
> **Env Vars:** dhcp (4), mac (4), dora (1)
> **CLI Commands:** make (3), find (1)
> **UI Navigation:** click on (3), right-click (1)
> **Versions:** 10.35.4 (3)
> **Tools:** command prompt (3)
> **Definitions:** is a  (3)
> **Speakers:** - [instructor] (1), - 10 (1)


### 3. Managing DHCP

[↑ Back to Table of Contents](#table-of-contents)

#### [Components of a DHCP database](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=0)** - [Instructor] The [[DHCP]] database is a dynamic database and a very resilient database containing data that relates to scopes, address leases and reservations. The database also contains a data file that stores both the DHCP configuration information along with the least data for clients who have list their IP address from that the DHCP server. So let's take a quick look at the database. And there's just a couple quick things we can do with it. Here I'm in dc-1, my DHCP server and the server manager we're going to up to the Tools menu and select the DHCP. This will take us into the DHCP administrator. In the DHCP administrator, I'm going to go ahead and right click on dc-1 and go to its properties. 'Cause I want to show you that we have a couple things here. We have a database path which points to where the database is located by default, and a backup path, which you'll notice is the exact same path except for there's a backup directory inside of that path. Now in both cases, we could click on Browse and move the database or its backup to a different location. But for right now let's actually go to this path and let's take a look and see what we find. So I'm just going to go into Explorer, go into my C drive, [[Windows]], and then we have System 32. And inside there is dhcp. So this is the directory that we were pointing to in the DHCP administrator. And there's a lot of files here.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=93)** And if you've ever worked with any standard database, you know that these shouldn't look that unusual. And that still holds true as far as the functionality, it works like a standard database engine. So what are some of the significant files here? Well, we have dhcp.mdb, which is the actual database file. We have tmp.edb down here near the bottom and that's a temporary file that is used as a swap file during routine database index maintenance operations, okay. Again, remember I said this was a resilient database. There's a lot of things that it doesn't take care of itself. We have a whole bunch of j50 log files. We have j50 itself and then we've got two, three, four, five, six, seven, eight, nine and then we even have j50res one and two. Well these are your log files and the j50 res files are your reserved log files. And that has to do with making sure that if your hard drive were to fail that you would go ahead and have some space left to make the last few changes to the database before you shut the database down. And then we also have a checkpoint file right? We have j50.chk. These are all standard files when it comes to [[Databases]]. And I'm not going to go to details on the functionality you can learn about that if you aren't familiar with how it works. This is the database and this is where we find everything. Now we also mentioned that inside this directory, we have a backup directory. And one thing that's important to know is that DHCP
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/components-of-a-dhcp-database?u=76281980&t=190)** automatically backs up to that directory once an hour without you doing anything. Alright so again, very resilient. Let's jump back over to the DHCP administrator 'cause I want to show you that besides the automatic backups, if I right click on dc-1, you have the ability to do a manual backup. Okay, I could select to backup and then of course it defaults to that backup directory but you could choose to put it anywhere you want. And if you know that you have a corruption to your database and you want to recover it, you could right click on dc-1 and restore. And it defaults to restoring from the backup directory but again, if you know you backed it up somewhere else you could restore from there. Now the only thing I want to tell you when it comes to the backing up the DHCP database is it keep in mind that the backup directory by default is in the same location as the database. So if something happens that corrupt that location, it's all going to be corrupted. So you may want to consider moving the backup somewhere else, or at least having some kind of routine maintenance that you do manually where you do like a manual backup. You come in here and do it manually and send it to somewhere else. And even beyond that, please make sure that when you're doing your server backup maintenance, that you make sure to backup whatever directory it is that has the backup of your DHCP database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (14), [[Windows]] (1), [[Databases]] (1)
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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/reconcile-dhcp-scopes?u=76281980&t=0)** - [Instructor] Sometimes when managing the [[DHCP]] database, you will find yourself in a situation where there is an inconsistency. One example might be that you have a client who no longer exists on your network, but yet your database is showing that there's still a lease out there for that system. This is actually really common when you get alerted to it because you've run out of IP addresses and you're thinking, that's not possible, but yet, you realize that that's why it had happened. Well, fortunately, there is something we can do to deal with that pretty easily and its called DHCP reconcile. So here we're in the DHCP administrator on DC1, our DHCP server and you'll see here under DC1, we have our IP version four. I'm going to expand that. I'm actually going to click on IP version four. And then right-click 'cause I want to show you that there's an option here that says reconcile all scopes. Okay, so this is the situation and I'm going to click away from it so you can see if this was an enterprise DHCP server where we had multiple scopes. You could actually reconcile them all at once as part of, you know, lets say, maybe a routine maintenance item. But if you know that there is a specific scope that has a problem, well then, you click on the scope itself, right, so I have my one scope here, Landon hotel clients, and then right-click on it and choose to reconcile from there. Now this is a fairly simple process. When I click on it, I get a window that says that this procedure will compare the scope information in the database along with what it sees in the registry
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/reconcile-dhcp-scopes?u=76281980&t=93)** and all I really have to do is click on a button that says verify. And when I do, in my environment here, we're going to see something very simple. I'm going to click on it and you'll see it says, hey, everything's consistent, and that's what's great, right, you want to see that. If this was routine maintenance, right, then you just click OK and everything's good and you don't have to worry about it. But, if you actually had an inconsistency, this is where you would see it pop up and you would have the ability to go through. You'd see it listed in the window here and you'd be able to go through each one and validate whether its legit or not. So you could either say no no, that's a real thing, make it consistent or you could say, nope, you're right, that's a mistake, delete it. Alright, so there's not a whole lot to it when it comes to reconciling DHCP, but you'd be amazed at what a huge timesaver it can be in the event that you have a situation of inconsistent information in your database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (6)
> **Env Vars:** dhcp (6), dc1 (2)
> **UI Navigation:** click on (4), right-click (2)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** find (1), make (1)
> **Speakers:** - [instructor] (1)

#### [Database statistics](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=0)** - [Instructor] When it comes to managing a [[DHCP]] server, we've already seen that there's not a lot that you have to do. You kind of set it up and it does it's thing and it's very resilient. But you still may want to just kind of, keep track of what's happening. And so, there are some options in the DHCP administrator to where you can display what they call, statistical information. So I'd like to show that to you here. So we're in the DHCP administrator on DC1, our DHCP server, and here in the server under IP version four, we have our scope and I want to show you, that if you click on the scope and right click, right at the top it says, Display [[Statistics]]. Now in this window, there's not a whole lot of information. It's real basic. It tells me I have a total of 17 addresses. Now where did that number come from? Well, if you remember when we created the scope, we said that the range of IP addresses was going to be from 101 to 120 within our range, which was 20 addresses, but we did an exclusion of three of them. And that's how we end up with 17 total. Now from there, we can see that one is in use, because we only set up client one to get an IP address dynamically. Which means that I have 16 available. This is something that might come in handy just to see if you might be running low on IP addresses. Now if you want to see a little bit more detailed information, let's click on IP Version 4 and then right click and Display Statistics there. So in this window we have a little bit more information
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=97)** and some of the specific information... Let me actually scroll down to the bottom. First of all, at the bottom you'll see total addresses, in use and available, and you'll see the same numbers, but that's only because we have just a single scope. If we had multiple scopes, then you would see all of the addresses for all scopes put in here, along with the in use and available. But we also see some other information and I'm going to scroll up a little bit here. Okay, you'll notice some words that we learned in another video where we learned about the actual leasing process or the DORA process, D-O-R-A. So we have our discovers, which is the D. You'll see that there's 77 of them that have happened. Of those 77 discovers, we've had 10 times that we've done the O or offers. The R is request. You'll see that seven of those came back as requests and then we likewise had seven acts or acknowledgements. Okay, that's the A in DORA. Additionally, we can see things like Nacks, which is a negative acknowledgement, which kind of says, no we're not good, we're not all setup, there's been a problem. Okay, we can also see declines. You see things like releases, how many times a client has released a lease back to us. Okay, so again, it's just kind of general statistical information about how things are going with your server. If you start to see a problem, it's maybe a good starting point that you might go to. Especially if you get a lot of clients that aren't getting an IP address. You jump to the statistics, you see if you're out of IP addresses
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/database-statistics?u=76281980&t=190)** or you might see that you're getting a bunch of Nacks, which is the negative acknowledgement, which means something is going on in your network that the DHCP server is refusing to actually acknowledge that IP address. So that's why you might want to look at statistics when managing a DHCP server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (6), [[Statistics]] (4)
> **Env Vars:** dhcp (6), dora (2), dc1 (1)
> **UI Navigation:** click on (2), scroll down (1), scroll up (1), go to (1)
> **Definitions:** means that (1), is a  (1)
> **Prerequisites:** set up (1), setup (1)
> **Versions:** version 4 (1)
> **Speakers:** - [instructor] (1)

#### [Secure DHCP](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=0)** - [Instructor] Because [[DHCP]] is an unauthenticated protocol, it's a pretty good idea to go ahead and take some form of precaution to ensure that only valid clients that are supposed to be on your network are actually getting network information from your DHCP server. Now, there's a couple things that you can do as far as settings within the server, so let's go take a look at those. Here we're looking at the DHCP Manager on dc1, which is our DHCP server. And in here, under dc1, we have IP version 4, and if I right-click on IP version 4 and go to the Properties, right on the General tab, you'll see that there's a box checked for Enable DHCP Audit Logging, and what this does is that it writes server activity to a file daily to help you monitor system performance, troubleshoot service issues, et cetera. Now this is different than what you would find in your event logs, right, in the Event Viewer, 'cause that's where we're taught to go and look for problems. This is just kind of a daily activity log. And if I go to the Advanced tab, you'll see here that there is an audit log file path, and the path happens to be the exact same location as where the database was located, and we talked about that in another video. So why don't we jump over to that path and take a look? So here in Explorer, I'm just going to go to my C:\ drive, [[Windows]] directory, and then we need to go to system32, and DHCP. Right, so here is where we see all of our database files,
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=96)** and we talked about a number of these in the other video, but there's a couple files we didn't mention at all, and one of 'em is right here, DhcpSrvLog-Tue, and then there's one right below it, Dhcp Version 6, it's basically the same name, but you can tell that this is basically a log, one for IPv4, one for IPv6. Now the one thing I want to point out is that you'll notice that the end of the log file name is Tue, which is a three-letter code representing Tuesday, a day of the week. Well the reason why, is because I happen to have created this DHCP server and did all my activity on it today. This DHCP server has only existed for one day, and today happens to be Tuesday, so that's what that represents. If we were to come back and look at this tomorrow, we would see another pair of log files, and they would be labeled Wednesday. And basically what'll happen is you'll end up with a total of, you'll have seven files, or really what's 14 files, 'cause there's one for v4 and one for v6, and when we get back to next Tuesday, it would overwrite this Tuesday's log file with next Tuesday's log file. Alright, so this is one way that you can help keep your DHCP server a little bit more safe and secure. Another thing we can do is if I, back here in the DHCP Manager, we're still looking at the IP version 4 Properties, I'm going to go to the DNS tab. And what this tab is primarily used for is it has to do with configuring how DHCP is going to work
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=190)** in conjunction with DNS, and if you are having your DHCP server automatically on the client's behalf register with the DNS server, then you might want to consider something that we have down here at the bottom. At the bottom it says Name Protection, DHCP name protection, it says it's disabled at the server level. So if I want to configure it, I just click the Configure button, and here it explains what it's going to do. Says that Name Protection provides the following capability: it will register the A and PTR, which is the host record and the pointer, or the reverse lookup record, on behalf of the client, however, if there's a different client already registered with the name, then the DHCP update will fail. Okay, so this will help protect you against name spoofing, and having somebody end up having registration mismatch on your DNS server all because of DHCP, okay? You want to protect against that. I will also mention here, it says Secure Dynamic Updates must be enabled for this to work. Okay, so actually doing this is simple, it's a matter of just checking a box and clicking OK, and now, that's it, it's been enabled, but the importance of it, it's pretty critical, because DNS is a service that really needs to be protected, and if you're going to have your DHCP server communicating with DNS,
>
> **[4:42](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/secure-dhcp?u=76281980&t=282)** you want to make sure that unauthorized DHCP server is not a vulnerability point, okay? Now beyond that, I will tell you, there's really only one other thing to keep in mind when it comes to keeping DHCP secure, and that is, maybe if you were to have some form of regular routine to where you literally just come and examine your Scope, right, you expand your Scope, you go down to Leases, you look at the list, and you look for things that don't belong. Now this is very manual and very tedious, but sometimes that's just what it takes. So the bottom line is this, DHCP as a whole, other than configuring it, managing it is pretty simplistic, there's not a whole lot of sophistication to it, but along with that lack of sophistication comes with a lack of sophisticated security mechanisms, and that's why sometimes you just have to manually take a look to see if there's something wrong.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (20), [[Windows]] (1)
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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=0)** - [Instructor] When it comes to troubleshooting a [[DHCP]] server itself, you got a whole lot you have to do because just like with any of the [[Representational State Transfer (REST)|rest]] of the maintenance we've talked about, DHCP is designed to be kind of a self-maintaining and resilient service. But there is still a certain aspect of the process of DHCP that you may need to have to troubleshoot when certain things aren't working. So one thing I really want you to know before we get into any of the specifics of DHCP is that when it comes to troubleshooting anything at all, it doesn't matter what technology it is, what it really comes down to, it's the idea of really understanding the process or the technology itself and knowing how it's supposed to work, and then being able to go through that process and evaluate where there is a breakdown. And that's really how you troubleshoot problems, but as far as DHCP itself. So let's talk about some of the common DHCP issues that still exist on our networks. First of all, IP address conflicts. Even though DHCP helps avoid these IP address conflicts, they still can happen even in an environment where you're running DHCP. Okay, there's a number of different things that could possibly make that happen. We have issues with failure to obtain an IP address at all, right, where client just doesn't get an IP address. He says, well, I'm supposed to get one, but I don't. Or maybe, a client does get an IP address
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=92)** but it's the wrong one, and it came maybe from the wrong server or the wrong scope. Even though the server is data-based, it is designed to be self-maintaining resilient, we can still have data corruption or loss, there are issues that can cause that. Or how about our IP address pool just being depleted? You know, hopefully we have good planning, and that doesn't happen, but it is something we still deal with. So those are some of the common issues that you should be prepared to deal with. Now as far as some of the causes for those issues, well, first of all, how about just a good, old-fashioned network communication issue? I mean DHCP is a networking service. So if you're having networking problems, DHCP may not function right, sometimes with problem with client configuration. If you've seen how to configure a DHCP client, you know that it's simple and it's actually the default setting in most cases. But, you know, sometimes somebody gets somewhere they're not supposed to be and makes a change that messes up that configuration. Or another real simple and basic one, maybe the DHCP server is down, right? Sometimes we want to look for the complicated, it might be real simple. Might be as simple as DHCP server just not running at this point. Or how about if we're using a relay agent? Maybe the relay agent itself is down or misconfigured, or having an issue. Another problem that we run into a DHCP in, we used to see this a lot in the old days before we had something called authorization, and that is where you have a rogue administrator and therefore possibly a rogue DHCP server
>
> **[3:06](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/troubleshoot-dhcp?u=76281980&t=186)** that's been put on your network, which is getting in the way. We now have authorization, so that only enterprise administrators have the authority to allow for a DHCP server to come onto the network, so hopefully it's not as big an issue as it used to be. Or you may have multiple conflicting scopes. So whether it be on different servers or even the same server, you got to be really careful if you're going to have multiple scopes that they don't conflict with one another 'cause they can cause many of the problems that we experience. So as you can see, most of the problems they have with DHCP are pretty basic and they all kind of surround the similar issues. But you should be aware of how it all works and know how to get in there and find the problem when it happens.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (17), [[Representational State Transfer (REST)|Rest]] (1)
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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=0)** - [Instructor] In [[Windows Server]] 2019, we have a high availability feature called [[DHCP]] Failover. Now in order to implement DHCP Failover, we need two DHCP servers. Now we've seen the installation of one DHCP server on DC-1, but I want you to know I have also installed DHCP on DC-2. Now let's take a quick look at DC-2. Here in the Server Manager I'm going to go to Tools and DHCP, and the main reason I want to go here is 'cause I want to show you that it's just been installed. Everything's been authorized, but I have no scopes. Alright, nothing there. Let's jump back over to DC-1. So again here in the Server Manager, we'll go to Tools and DHCP. And here in the DCHP manager we'll go ahead and click on IP version four and then when I right click, I want to show you there's an option to configure failover. And this'll take me into the configure failover wizard. First thing is it'll ask me which scopes I want to do a failover on. I only have one and the box is checked for select all. So that's fine, we'll take that by default and click Next. Now I need to know who my partner server is. So I'm going to type in dc-2 'cause that is the name of the other DHCP server. Click Next, it quickly flashes. I mean it literally is like a fraction of a second. It says that it verifies that that is a DHCP server, and it is, so we get to the next screen. It gives the default relationship name that you can change if you like something better.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=94)** But you'll see here it's a good name, dc-1.landonhotel.local-dc-2. Now we have a maximum client lead time of one hour. That's the default, and this is how long that the system will wait. When it notices that there's some kind of interruption in communication between the DHCP servers, how long should I wait before I try to take over? Now what mode do we want to use? It defaults to load balance, which happens to be the one I like, but let me show you hot standby real quick. Hot standby means that one server is really not going to be acting as a DHCP server, it's just going to be sitting and waiting to take over in the event that the main one goes down. So we can choose which one is the active and which is the standby by choosing here where it says Role of Partner Server. Okay, so the other server, or DC-2, is going to be the standby, or I can make it that DC-2 is the active one and DC-1 is the standby. Okay, either one is fine. So we'll say that DC-2 is the standby. And then you determine how many addresses are going to be held just for that emergency situation. And it defaults to 5%. It says 5% of your addresses, going to hold them aside, and that's what the standby server will use in the event that your main server goes down. Now let's go back and switch the mode back to load balance. This is the one I like. You'll notice is, it says look, 50-50 on the local server versus the partner server. You can adjust that if you want. If I increase one, you'll notice the other is going down. And mainly you want to leave it at 50-50 unless you know that one server has maybe more resources or is closer to more clients, something to where there's a reason
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=187)** to make one have a bigger percentage than the other. Now, the next item is here where it says State Switchover Interval. And I'm going to check the box. It defaults to 60 minutes. And what this has to do with, is this is where you really get your auto state switchover. And so when there's a breakdown in communication, it goes into something called communication interrupted state. Now because the server doesn't know why there's an interruption, if you don't check this box, it'll just stay in that state until an administrator actually takes an action to turn it into partner down. Checking this box means that after an hour of sitting in that communication interrupted mode, it will then automatically switch to partner down and everything will switch and take over. Now we could also choose to enable message authentication, so we have a little bit of security between the two servers. It's a good idea. And if you're going to check that box, then you're going to want to put in a shared secret. Now you won't see my typing in anything, you just see a bunch of stars. But the password that I just typed in is shared between the two servers and they will always use that password to communicate with one another to make sure somebody else isn't trying to spoof and hack in. At this point I can click Next and you'll see a summary of what we're about to do. And Finish. It goes through and it adds everything, you see everything is successful. I'll click Close. And the only thing that really is different here is, well, I'll have to show you what it is 'cause by default you don't see anything change here. If we jumped over to DC-2, you would see that we now have a scope on DC-2. But mainly let's stay right here
>
> **[4:39](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-dhcp-failover?u=76281980&t=279)** and let's click on the scope and then right click and go to Display [[Statistics]]. Now there's another video where I talk about these statistics, and by default you only see the top three lines where you see 17 addresses, one in use, 16 available. But now we have four additional lines, which has to do with the addresses that are available and granted based upon this server and the partner server. And that kind of shows you that the load balancing is in place and how addresses are being handed out between the servers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (11), [[Statistics]] (2), [[Windows Server]] (1)
> **Env Vars:** dhcp (11), dchp (1)
> **UI Navigation:** go to (3), click on (2), switch to (1)
> **CLI Commands:** make (3)
> **Definitions:** means that (2), is a  (1)
> **Prerequisites:** configure (2)
> **Speakers:** - [instructor] (1)

#### [Manage DHCP failover](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=0)** - [Instructor] Once you have implemented [[DHCP]] failover, there's just a couple of quick management tasks that you should be aware of. So here I'm on DC1 and we're looking at the DHCP Manager. This is where I just implemented DHCP failover between this server and another server I have called DC2. Let's take a quick look at DC2 to make sure that failover has indeed shown up on that server as well. Here in the Server Manager on DC2 I'm going to go to Tools, and DHCP. And here in the DHCP Manager, you'll notice that when I expand all the way down, I now have a matching scope for the Landon Hotel clients. And if I were to click on it and then right click and select Display [[Statistics]], you'll see here that I have statistics that are showing that I am in a DHCP failover partner relationship in the sense that not only do I have the three default lines, Total Addresses, In Use, and Available, but I also am seeing the Available and the Granted Addresses on this server as well as the other partner. So we know that failover has worked and it is set up on both servers. So let's jump back over the DC1. Back here on DC1, I want to go ahead and right click on IPV4 and go to Properties. And I'll show you that there happens to be a Failover tab. And if I click on that Failover tab, there's a couple of things I want you to look at. Number one, down at the bottom half we have the state of the server sitting in Normal state.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=94)** That means that we have good communication between the two servers. I have a name of the other partner server, so in case I'm wondering who I'm doing failover with I now know, and I know what mode I'm using, Load Balance as opposed to Hot Standby. Up at the top I can see the actual name that we have for the failover relationship, and if there's ever a change that I need to make to it, I can make it here, instead of having to like eliminate it and then go back and recreate it, I can simply click edit. And you'll notice in this window we have a lot of information that was pretty much exactly the same as what we had when we created the DHCP failover. OK, as far as all the settings pretty much from where it says Enable Message Authentication all the way down to the bottom. These are all the things we already saw. What I do want to point out on this screen, however, is up near the top, where it says state of this server, currently sitting at Normal, but there's a button here and it might be hard to see 'cause it's grayed out, but it says Change to Partner Down. If the state of the server was sitting in Communication Interrupted, OK, instead of Normal, then this button would become active. If you don't enable State Switchover Interval, then it will stay in that Communication Interrupted state until you come into this window right here and click the button for Change to Partner Down. Because we have State Switchover Interval enabled, we can see that down here, we shouldn't have to click the button. It will happen automatically after another hour, but if you want to make it faster,
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/manage-dhcp-failover?u=76281980&t=187)** that's why you would come in and click the button. So the one other thing we can do from this window is if we decide that we don't want the failover relationship any more, then we can simply delete it, and I'm going to do that now. I'm going to go ahead and click the Delete button, and it's just going to confirm hey, are you sure you want to do this? Here is the information you're about to delete. I'm going to say yep, I know what I'm doing, I click OK, It says that everything has been removed successfully. I will close it, click OK, and this time if I go to the scope, I click on the scope and then right click and choose to Display Statistics, you'll see that I now have Basic Statistics which tell me that I just have the Total Addresses, In Use, and Available for this server, because the partnership is gone. And I won't bore you with it, but if we were to jump back over to DC2 and take a look, and then do a refresh, you would see that the scope is gone from that server 'cause we've just deleted it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (7), [[Statistics]] (4)
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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dhcp-in-a-routed-environment?u=76281980&t=0)** - [Instructor] Since [[DHCP]] uses broadcast communication for the least generation process, things can get quite complicated when working in a routed environment. If you have clients who are on one subnet, and then there's a router separating that client from a DHCP server that's on a different subnet, by default they're not going to be able to communicate. And the reason why is because the client is going to go through the discover process and say, "hey, I'm looking for a DHCP server!" But that's a broadcast and by definition, routers kill broadcast communication. So how do we solve this? Well, when we're working with DHCP in a routed network, we have three options. The first of these options would be to just simply put a DHCP server out on every subnet and that way the clients on that subnet will be serviced by that DHCP server. The problem is that that's not very practical to have, that's a lot of DHCP servers that you have to have out there. A second option is you can use what's called RFC 1542 compliant routers. These are routers that have been specifically designed to be able to enable DHCP broadcast traffic to be allowed to pass through and not get killed at the router. And if you don't have an RFC 1542 compliant routers, then the third option is to use something called a DHCP relay agent. So this is a special type of device or service that will
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dhcp-in-a-routed-environment?u=76281980&t=98)** essentially exist on the subnet where the clients are and it will listen for these broadcasts and then that particular agent will be pre-configured with the IP address of a DHCP server directly via unicast communicate with the DHCP server and then get a response back from the DHCP server and relay it back out to the client. And I will say that in most routed environments I typically see options two or three, it's very rare that you see DHCP servers put out on every subnet. You either go out there and you make sure your routers are specifically RFC 1542 compliant and anywhere that they can't be, you implement a relay agent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (13)
> **Env Vars:** dhcp (13), rfc (3)
> **Documentation:** rfc (3)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Configure a DHCP relay agent](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=0)** - [Instructor] One option for allowing a client to receive IP configuration from a [[DHCP]] server on a routed network is to use a DHCP relay agent. Now in order to demonstrate this, I have to create a routed network. So I want to let you know I've made a lot of changes to my environment in order to demonstrate this and I know I normally am very detailed in showing you how to do it, but there's a whole different course on how to set up [[Routing]], so I'm just going to quickly show you what I've done. And I will also mention that when we're done going through learning about the relay agent, I'm going to actually put everything back to how we were before this video for the [[Representational State Transfer (REST)|rest]] of the course. First of all if I look at the Settings for Member 1 I want you to see there are now two network adapters, one is called Internet and one is called Private. Don't worry about the names, the point is just showing you that there are now two network adapters on this particular server, because this server is acting as a router. If I look at the Settings for DC 1, you'll notice that it only is connected to the Internet network 'cause that's our DHCP server, but Client 2 which is going to be the client we're going to use here it is only connected to the Private network. So just want to show you that that has been set up. Additionally if I go into Client 2, I want to show you that it has been set up to get its' IP address dynamically, but that it's not able to do so. So I'm going to click on start and type in CMD and go to a Command Prompt. And I'll type ipconfig and I just want you to see we have a 169.254 address
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=96)** which is representative of apipa, meaning I'm set up to automatically get an IP address but I'm not finding a DHCP server. The next thing I'd like to show you is something I've done on DC 1. Here in the DHCP manager on DC 1, you'll notice that besides our original scope for Landing Hotel Clients, I've created a second scope for 192.168.1 and just called it OtherNetwork and that's because that is the network, that's the IP range that Client 2 is actually on. It's on that network. Now the last thing that I'd like to show you is if we jump over to Member 1, which is the machine acting as our router, I have actually implemented the roll service so it can be a router. So if I go to the Tools menu, and then select Routing and Remote access, in here I can look at the Properties of the server of Member 1 and you will see that there's a check box for it being an IPv4Router for [[Local Area Network (LAN)|Local area network]] routing only. And that's the high-level everything that we've kind of set up. Now if I expand IPv4 and then take a look at General, and then right-click on General, I'm going to choose to implement a New Routing Protocol 'cause this is how you actually implement the relay agent. You want to put it on the router itself. And you'll see here that I have a choice of a routing protocol called DHCP Relay Agent so I will click OK. So pretty simple to just add the relay agent, but now we have to configure it. So let me go ahead and right-click on DHCP Relay Agent and tell it that I need a New Interface,
>
> **[3:12](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-a-dhcp-relay-agent?u=76281980&t=192)** and the interface that I want to select is the one that points towards the network where the clients are going to be. The relay agent has to be where the clients are and that happens to be Ethernet 2. If I took the time to go ahead and show you the specific IP configuration, Ethernet has been set up on the 10.35 network and Ethernet 2 has been set up on the 192.168.1 network. So we're going to use Ethernet 2 and click OK. And we have to make sure the box is checked to relay DHCP packets. And click OK again. So now if I go to the Properties of the Relay Agent, I need to assign the IP address of a DHCP server where I'm going to go ahead and send any messages that I get on behalf of the clients. So 10.35.4.81 that happens to be the IP address of DC 1 or the DHCP server. So I will click Add and OK. And at this point I have now successfully configured the DHCP Relay Agent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (11), [[Routing]] (5), [[Representational State Transfer (REST)|Rest]] (1), [[Local Area Network (LAN)|Local area network]] (1)
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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=0)** - [Instructor] Once you've implemented the [[DHCP]] relay agent, the first thing you really, probably should do is check to make sure that a remote client is able to go ahead and receive an IP address from a DHCP server on a different network. So here, I'm on member one which is my router and you can see I have indeed implemented the DHCP relay agent. So let's jump over to another machine called client two and see if we can now get an IP address from the DHCP server. So here on client two, you can see that I still have the command prompt window open from actually the previous video where I demonstrated that this machine is set up for obtaining its IP address automatically and it got a 169.254 address which is an APIPA address, meaning it couldn't reach a DHCP server. What I want to do now is go ahead and type in IP config and that's all I'm going to do. Just IP config because the machine is going to go ahead and periodically try again to get an IP address from a DHCP server and it may have done it automatically without me having to force it. If it doesn't work, then I'll show you how to force it. Let's hit enter and see what happens. Okay, as you can see, it already had communicated with the DHCP server through the relay agent and it got its IP address. If we had to force it, all we would have done is we would have typed IP config/renew. Alright? So, if you take a look here you'll notice it has an IP address of 192.168.1.101, alright? Which was in the range that I had set up and I'd like to actually show you that, right?
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=94)** So lets go ahead and jump over to DC one which is our DHCP server and see how this all looks. So here in the DHCP manager on DC one what I want to do is take a look at this 192.168.1 scope. Let me go ahead and expand it. And the first thing is, if I click on address pool, you will see here that, this is something I didn't show you before, but there is a pool from 101 to 110, alright? I set up these 10 addresses and we saw the first one that was handed out was 101. Where I can also see this, if I click on address leases. When I click on address leases you can see that 192.168.1.101 was given to client two. Okay, so it indeed did work. Now something else I'd like to take a quick look at is let's jump back over to our DHCP relay agent which is member one. Here, you'll notice for, with DHCP relay agent highlighted, and the interface that I had set up, everything is zeros as far as requests and replies and all that stuff. But let me hit refresh. You'll notice when I refresh, I now get numbers that are populated and these numbers might seem extreme relative to what we've done in the sense that it's received 40 requests. It got six replies back, 20 requests were discarded. There's a lot of activity that takes place even with just a simple IP config renewal or just a simple DORA process and you have to understand there's all sorts of traffic
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/test-relay-agent?u=76281980&t=187)** that's going on on the network, but the main thing I wanted to show you is that there is statistical information that you can look at on the relay agent and sometimes that can come in handy when troubleshooting in the case that a client is not, suddenly not able to get an IP address through the relay agent. You might be able to, you know, force a renewal and then notice that the numbers aren't changing or maybe they're changing to an extreme level. Alright, so we have successfully tested our relay agent and we are all set up on a routed network.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (11)
> **Env Vars:** dhcp (11), apipa (1), dora (1)
> **Prerequisites:** set up (5)
> **Versions:** 192.168.1 (3), 169.254 (1)
> **UI Navigation:** click on (3)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Cross-References:** previous video (1)


### 5. Deploying DNS (Domain Name System)

[↑ Back to Table of Contents](#table-of-contents)

#### [Install DNS with Active Directory](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=0)** - When it comes to installing the DNS server role, we actually have two options available to us. The first, which I want to show you here, is the preferred method, which is to install DNS as a part of a domain controller installation. To demonstrate this, I'm going to connect to a computer I have here called DC3. Here in the server manager, I want to let you know I have already installed the [[Active Directory]] domaine services role. Okay, and we know this because we have our little warning indicator up here by the notification flag. And if I click on it, you'll see here that it says we need a post-deployment configuration for active directory domaine services where we need to promote it to a domaine controller. And this is the process where we will also become a DNS server. So let's click on that now. This takes us to the active directory domaine services configuration wizard. And because we already have our domaine environment set up, this is just an extra domaine controller. We are going to select to add a domaine controller to an existing domaine. That domaine is landonhotel.local, and the credentials necessary to do this are already in place, which is the Landon Hotel administrator account which is who I'm logged in as. If I click next, this is where we actually get to choose if we would like to also become a DNS server. Okay, right up near the top there's a box that is checked saying yes, indeed, we want to be a DNS server. Now, the [[Representational State Transfer (REST)|rest]] of this is pretty much
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=92)** the same as any other domaine controller, so I'm going to go ahead and put in my directory services restore mode password, and click next. I get a warning, and I should mention this warning in particular 'cause it talks about a delegation for DNS. Since we are talking about DNS here, it's basically because landonhotel.local it's basically saying well, I'm not able to make a delegation for just .local, alright? Whereas like if this was on the internet you could actually go to a .com server. Well, there is no .local server, and we know that this is okay, so we're just going to ignore this message and click next. Choose where we're going to install it from we'll say from any domaine controller, next. Take the defaults for our database and log files. And here's our review, click next. It'll go through and check all prerequisites. It'll tell us that everything is fine other than warnings that we are familiar with, and install. And at this point it's going to go through and install not only the domaine controller, but it's also going to go through it and install the DNS server role. Now, this can take a few minutes and also involves a reboot, so I'm going to go ahead and through the magic of video editing I'll speed it up. And I'll be back with you just as soon as the reboot has completed. Alright, so the reboot has completed. And we're back in the server manager. At this point I'm going to go up to the tools menu and show you that there's now a selection for DNS. And if I click on it, it will take us into
>
> **[3:04](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-dns-with-active-directory?u=76281980&t=184)** the DNS manager where I can see that DC3 is listed as a DNS server. And if I click on it and expand it, I want you to see this is why it's the preferred method. We already have DNS configuration in place. Not just the role itself, but the landonhotel.local zone has actually been created, including you know, a variety of records and everything else. The one other thing I will tell you as to why this is the preferred method is because not only have we installed it, configured it all in one shot, but it also has been configured with the most secure settings available by default.

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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=0)** - [Instructor] Another way we can install the DNS server role is just through the regular Add Roles and Features Wizard, just like any other role. But let's go through and let me demonstrate it and show you what the difference is. To do this I'm going to jump onto a server I have here called Member-1. Here in the server manager, we're simply going to select Add roles and features, and in the wizard we get the typical Before you begin, saying hey, your going to do something significant, make sure you have everything in place, from a security and IP perspective. We do so I'm going to click Next. It is a role based installation. Again I click Next. I am going to install on Member-1, so click Next. And here I get to pick the actual role. So you'll see on the list, DNS Server, so when I check the box, I get a little pop out saying that there are additional features required and I'll say that's fine. Click on to add the features. Then I click Next. I can pick additional features if there's something else I want to be doing here, but there's not, so I will click Next again. Here's an overview of what DNS is. Click Next. And I finally get to my summary screen where I always like to check the box to reboot if necessary, and when I do I get a warning saying, hey, someone else could be on the server or connected to it, you're going to kick them off. I am aware so I'll click Yes and Install. And at this point it's going to go through the process of adding the DNS server role and this might take a few moments so I'm going to go ahead and speed things up
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=93)** and I'll be right back with you as soon as it's completed. Alright so the installation has succeeded on my system. The bar has gone across the screen that says installation succeeded, so I will click Close. Close that window. We know it has succeeded because we see a row at the bottom here for DNS, over on the left we see DNS, and most importantly up at the tools menu, we now see an option for DNS. So let me go ahead and click on that and that will take us into the DNS Manager. Now, the process of installing the DNS server role through the Add Roles and Features Wizard, its just like installing any other role. It's very, very straight forward. The main thing that I wanted to show you here is the difference between installing the role manually this way versus what I did in the previous video, installing it along with [[Active Directory]] Domain Controller Promotion. In that scenario, we had an actual configuration of DNS, whereas in this scenario, when I click on Member-1 and then expand it, and then expand my forward lookup zones, there's nothing to expand. It's blank. Nothing has been configured on this server. We have only installed the role, which means we now have to manually go through and do the [[Representational State Transfer (REST)|rest]] of the configuration. So the last thing I'm going to tell you about this is, just so you know, right here, right now, the way this server stands, believe it or not, even without any configuration, it is prepared to be able
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/install-the-dns-role-independently?u=76281980&t=187)** to service clients and there is something I will talk to you about later in the course about a caching only server, and that's basically the state that this DNS server's in right now but for any other type of DNS server, we would need to manually go through and start configuring.

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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-client-configuration?u=76281980&t=0)** - [Instructor] Having proper DNS client configuration is crucial to a successful network environment. One of the most common problems we run into is name resolution, and more often than not, it comes down to improper client configuration. So, to demonstrate how to configure a [[Microsoft]] client, I'm going to connect to a machine I have here called Client 1, which is simply a [[Windows 10]] client on my network. So, in order to configure this client, I need to get to network connections. There's a number of different ways to do this, but one way I find is consistent on pretty much all Microsoft systems is if I click on Start, and then I start to type the [[Microsoft Word|word]] control, it gives me the option to jump into my Control Panel, and then I can click on Network and Internet, Network and Sharing Center, and then when I click on Change adapter settings, it takes me into my network connections. Now, I'm going to right-click on the Ethernet connection and go to its Properties. In this window, I'm going to click on Internet Protocol Version 4, not the check box, that'll make it go away, just the words, and then go to its Properties. And you'll notice that right now, I am configured to obtain both my IP address and then down below my DNS server information automatically. That means I'm getting the information from a [[DHCP]] server, and that is probably the recommended way to go ahead and get your DNS information is to get it from a DHCP server, and I go over how to push that information down in the Configure DHCP Options video in this course. But let me show you how to do it
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-client-configuration?u=76281980&t=95)** if you're not going to pull from a DHCP server. If I choose to do everything manually, let me go ahead and put in an IP address for my network here, along with the Subnet mask, and Default gateway. So this is just all information that's appropriate for my network, but down here below, we're going to use the following DNS server addresses. The preferred DNS server, which is the first DNS server I will look to, is going to be 10.35.4.81, which in my network setup here, points to DC1, which is a DNS server on my network. I also have the ability to point to an alternate DNS server, and this is to provide some level of fault tolerance and redundancy in case DC1 is not available, so I'm going to put in 10.35.4.82, which points to DC2. Now, you do have the ability to point to more than two DNS servers, and you do this by clicking on the Advanced button. In the Advanced Settings window, there is a DNS tab, and when I click on that tab, you'll see the list, and if I wanted to add an additional one, I'd just simply click Add, and in this case I'm going to put in 10.35.4.83, and that points to DC3, which has also been configured as a DNS server, and click on Add, and now I have three on the list. We have some additional settings about DNS suffixes, which basically has to do with when you're doing name look-ups, you know the fact that this machine is called client1.landonhotel.local, it says to go ahead and search for any computer name
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-client-configuration?u=76281980&t=190)** I'm looking for and add on .landonhotel.local, but more importantly, down here at the bottom. I really want to talk about this one check box here where it says Register this connection's addresses in DNS. This box is crucial to have checked, because this is the one that makes it that the client will actually communicate with the DNS server, not just point to it for name resolution, but it will register itself to say, hey, DNS server, my name is Client 1, and my IP address is, and then the DNS server will register that information in case anyone's looking for this machine. So, let me go ahead and click on OK, and OK once again, and close back out to our Network Connections window. And that is how you configure a Windows 10 client with DNS configuration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (4), [[Microsoft]] (2), [[Windows 10]] (2), [[Microsoft Word|Word]] (1)
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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-primary-forward-lookup-zones?u=76281980&t=0)** - [Instructor] One of the most important components to a DNS server is the presence of a DNS zone. Now what is a DNS zone? Well, essentially it's a database of DNS records and it's these records that allow us to do the actual name resolution and when a DNS server hosts a DNS zone, that makes it what's called authoritative over the name space that that zone has records for. So there's a number of different zones that we can create and what I want to do here is show you how to create a Primary Forward Lookup Zone and to do this we're going to jump onto Member one which is a member server in my domain where we've installed the DNS server role. Here in the server manager, we're just going to go up to the Tools menu and select DNS and this will take us into the DNS Manager. Now you'll notice when we're highlighted on Forward Lookup Zones, it's just blank, it just says we need to add a new zone so to do this I'm going to right+click on Forward Lookup Zones and select New Zone. This takes us into the New Zone Wizard. Here's the Welcome screen, I will click Next. I need to determine what type of zone. Actually there's different zones, Primary, Secondary's or Stub. In this case I want to create a Primary which means it is essentially a master copy where updates can be made directly on this server. I'll click Next. We need to give it a name. The name I'm going to choose here is going to be child dot landonhotel dot local so we're essentially going to pretend,
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-primary-forward-lookup-zones?u=76281980&t=92)** right, we already have our landonhotel dot local, we're going to pretend that we have a child domain that we've created and we called it child dot landonhotel dot local. Now we'll click Next. Now I need to either use an existing database file if one exists, very rare that you would do that, more typically you will create a new file and it gives you a default name which completely makes sense, it's the name of the zone dot DNS so we're going to leave that alone and just click Next. Now you need to determine how updates can be made to this particular server. We can either, the default here is to not allow dynamic updates which means you'd have to manually come in and update the records or we can do dynamic updates which is it says here allow both non-secure and secure which is a little bit dangerous because with non-secure it means people can get in and hack into this database. There is another option. It's up at the top, it's grayed out, which is for secure dynamic updates only but you have to be a certain type of zone which we will talk about later. It's called [[Active Directory]] Integrated Zones. So for now I'm going to say Allow Updates even though it's not secure. Now click Next and Finish and just like that you can now see that inside Forward Lookup Zones we have a zone, okay. And if I expand it there, I can click on it, you see we get a couple of records that show up. We'll talk about records later but that's how you create a Primary Forward Lookup Zone.

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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=0)** - [Instructor] Since the data contained in our zones is such a crucial component of DNS functionality, it's important that this information is available on more than one DNS server in a network to provide availability and fault tolerance when it comes to resolving name queries. Now, there are different ways that replication or the transfer of information could take place between these servers and will vary based upon the type of zone that we're dealing with. What I want to look at here is how we would manually set up zone transfers when we've created just a standard primary forward lookup zone. So here we're in the DNS manager on member one where we've just created one of these zones called child.lannonhotel.local. If I right click on that zone and go to its properties, you'll notice that there is a tab called zone transfers. So I'm going to click on that tab. This is how we can define if we're allowing this data to be transferred to any other DNS server and if so, which ones. So first of all, there is a check box for allowing zone transfers. If you don't want data to ever be replicated from this server, simply clear that box and the data in this zone will remain on this server and this server only. If we do want to allow the replication of this data to another server, make sure the box is checked and then we have three choices. The first choice says to any server
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=96)** and you'll notice that that was not the default setting and that honestly never should be the setting unless you have some rare circumstance that you need it. And the reason why is because this is very dangerous. It creates a huge security vulnerability because pretty much anybody can create a DNS server and then send a query to this DNS server to say, hey I need a copy of your database and this server will say, fine, no problem. Here you go, you have it and now you have somebody who has ahold of all your DNS information. Not a good idea. The default setting is that it would go to only servers listed on the name server tab and this is the typical choice. Because you'll notice there is another tab in this property window called name servers. And when I click on it, it will show the name servers of the various DNS servers in our network which are authoritative for this name space. Okay, right now, member one is the only server that is authoritative for this name space. If we had another server and we wanted to go ahead and have it replicated over to there, we can add it here. So I will show you but it won't really work. I'm going to click on add and let's say I put in member two. And when I say resolve, it's going to say here, basically attempting to validate. It resolved the IP address of that server but it's not going to be able to validate it as being a DNS server because that DNS server doesn't exist. Now, along those sames lines, you'll notice it said it timed out. I could also say DC1.
>
> **[3:09](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/configure-zone-transfers?u=76281980&t=189)** Now DC1 is a DNS server but it's not authoritative for the child.lannonhotel.local domain. Okay, in other words, we have not added that zone. So when I go to resolve this time, it resolves quickly but this time it says that basically this server and I have to kind of put my cursor on it is not authoritative for this zone. So I'm going to cancel out of there but once you get rolling and you start adding the zones and different servers, they will show up on the name servers tab. If we go back to zone transfers, you'll see there is a third option and the third option is where you can manually add in here a list of servers that you're willing to replicate to. If you want to have just, let's say, a subset of the servers that are getting replication from this server. So that's how you can control zone transfers from a primary zone server. Now there's one last thing I want to show you before we wrap this up and that is at the very bottom here, it says, to specify to secondary servers to be notified of an update, click notify. So if I click on notify, I can go ahead and automatically notify to the servers listed on the name servers tab or again I can make a list. And what this basically does is it makes it that when a change is made to the database, it will proactively go out to the secondaries, the replicas we could say and those replicas will be notified, hey there's some changes, would you like those changes. And then the secondaries will go ahead and initiate if they do indeed want them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** cursor (1)
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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=0)** - [Instructor] Another type of forward lookup zone that we could create is one called a secondary zone, which is essentially a read-only copy of the zone information that it will get a copy of from a primary. So here we are in the DNS manager on member one. And we've already created a primary zone for child.landonhotel.local but now let's create a secondary. So I'm going to click on forward lookup zones, right-click, and select new zone. This takes us into the new zone wizard. Here is the welcome screen. I will click next. This time I'm going to choose secondary zone, which it says creates a copy of a zone that exists on another server. I'll click next. What is the name of the zone? Well I have a zone that already exists in my environment called Landonhotel.local cause that's the name of my domain in my forest. And I will click next. And now I'm going to put in the IP address of DC one. So I'm going to put in ten.35.four.81. I could have also typed in the name but I just want to to show you that if I type in the IP address and then click away it will actually resolve it to DC one. And it will validate and say yup, this is actually a DNS server that is authoritative and hosting a primary zone for Landonhotel.local. I will click next and finish. And just like that I've created a secondary zone. Now you'll notice when I click on the zone it says that the zone is not loaded by the DNS server. And if I right click on it I have an option here
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=93)** to transfer from the master. Master being DC one. Now I'm going to tell you that this won't work, okay. So I'm going to click on it and nothing changes even if I refresh and do anything it's not going to change and the reason why is because I happen to know that DC one is not allowing zone transfers. Cause by default that was an [[Active Directory]] integrated zone, and it's always set up to be as secure as possible which means no zone transfers. So let's fix that. So let's jump over to DC one. Here in the server manager on DC one I'm going to go up to tools, select DNS to take us back into the DNS manager. And if I expand down to my Landonhotel.local zone I can right click and go to its properties. And if I go to the zone transfers tab like I said, we're not allowing zone transfers. So I'm going to click the button to say I do want to allow zone transfers. And for now I'm going to leave it at any server. And the reason why is because there's an interesting phenomenon to where you can't put member one on the name servers tab until after it's received the zone information once. So it's kind of interesting quirk. So I'm going to say to any server and click okay. And now let's jump back over to member one and get it to transfer over. Back here on member one, again it's a little quirky. What I'm going to do is I'm going to actually click all the way up on DNS and hit refresh. And then expand back down until I get to my Landonhotel.local. And then right click and say I would like to transfer from the master and hit refresh.
>
> **[3:08](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-secondary-forward-lookup-zones?u=76281980&t=188)** And you'll see that now I have all the zone information that has been transferred over from DC one. Now the next thing I should do is I should go back and fix the zone transfer configuration to go along with this to make sure it's set up securely the way it should be. So let's jump back to DC one. So back here on DC one I'm going to go into the Landonhotel.local properties go to the zone transfers tab. And now I'm going to go to the name servers tab and add, and I'm just going to type in member dash one and ask it to resolve. And you'll see here that it resolves the IP address and says okay, so I will click okay once again. Technically I should have typed in the fully qualified domain name but it already resolved it so we're okay. I'm going to go to the zone transfers tab and say only servers listed on the named servers tab and okay. And now we have successfully set up a secondary zone over on member one which will get a copy of everything from DC one over here.

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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=0)** - [Instructor] Another type of zone that we can create is a special type of zone, called a Stub zone. Now I will tell you that Stub zones are typically the most confusing to most people when you're first learning about this. And so for simplicity, I like to just say that a Stub zone provides something called Dynamic Delegation. So I'd like to show you what that means, Dynamic Delegation, and then how to create the Stub zone. So here I am in the DNS manager on DC one, and I am authoritative for the landonhotel.local domain, but over on member one, we have created a new zone called child.landonhotel.local, okay? In preparation for a sub-domain that would be created. Now one thing that can be done, and it's kind of the old fashioned way of doing it, is we could create a delegation. So if I click on landonhotel.local, I can right click and I can select to create a New Delegation. It takes me into the New Delegation Wizard. There's a welcome screen, I'll click Next. Delegated domain, I just type in the [[Microsoft Word|word]] child. It assumes it's going to be a sub-domain, so the Fully qualified domain name here populates as child.landonhotel.local. Click next. And then we're going to go ahead and add who is the server that is authoritative. So I'm just going to type in member one. Resolve, okay? And I get the IP address as 10.35.4.91. It's okay. Click OK. It populates here.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=92)** I'll click Next and Finish, and you see here that I now have this delegation that's been created inside of landonhotel.local, with a Name Server Record for member one, meaning if anybody comes to this DNS server looking for a host inside of child.landonhotel.local, it'll just refer them over to member one. But here's the problem. If I create more DNS servers that are authoritative for that name space, this server will never know about it and will rely exclusively on member one. And if member one goes away, even though there are still name servers out there, this server won't know about it. All right, so I'm going to delete this delegation. I'm going to show you a better way of doing this. And that would be, if I click up here on Forward Lookup Zones, to right click and select New Zone. And here in the New Zone Wizard, I'm going to select a Stub zone, and I'm going to go ahead and I'm going to clear out. We're not going to make it [[Active Directory]] integrated, because we're going to worry about that later. Right now I want to focus on the Stub zone aspect of things. So I'm going to click on Next, and I'm going to give it name. So again it's going to be child.landonhotel.local. Click Next. It creates a file because it's not active directory integrated. So this is the database file, it's going to create no problem there. Click Next. And now I need to add the IP address, or name of the server. So 10.35.4.91 was the IP address of member one. If I click away, you'll see it resolves that. Says it's OK. I click on Next and Finish. And now I have a Stub zone that's been created
>
> **[3:05](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-stub-zones?u=76281980&t=185)** for child.landonhotel.local, and if I click on it, you'll notice the only records that I'm going to get are the Start of Authority and the Name Server records. And the important thing here is the Name Server records. What's going to happen here is as we add additional records into child.landohotel.local, they're not going to get replicated over here, unless that record happens to be one that is representing a new Name Server that's authoritative. And when that Name Server record gets created, it will get replicated over here, which means dynamically, we are now learning about new Name Servers, or what we could call New Delegations, because if somebody comes to this server now looking for a host in child.landonhotel.local, we're going to look into this Stub zone to say, Ah ha, I know about the Name Servers. I can refer them on to get their answers. That's how Stub zone works.

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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=0)** - [Instructor] When working with DNS zones, it's always recommended that whenever possible that you use something called an [[Active Directory]]-integrated zone, and the reason why is because it's the most efficient and most secure form of DNS zone that we have. So to take a look at an Active Directory-integrated zone, I am here in the DNS Manager on DC-1. Now one thing that's significant that you need to know is that DC-1 is not just a DNS server, but it's also a domain controller in our domain. Okay, we'll see why that's significant in just a moment. Now to create an Active Directory-integrated zone, you do it just like any other zone that you create. You right-click on Forward Lookup Zone, you select New Zone, and in the New Zone Wizard, when you create the zone, you make sure to check a box down here that says Store the zone in Active Directory. But notice it says you can only do this if the DNS server is a writeable domain controller. So you have to make sure that your DNS server is also a domain controller if you want to be Active Directory-integrated. Now I'm going to go ahead and hit Cancel 'cause there's nothing else different there about creating the zone other than it will be in Active Directory. So let's take a look at one though. Here I have landonhotel.local, and it is Active Directory-integrated. And I know this because if I right-click and go to its Properties, it will tell me. Says what type is it? It's Active Directory-integrated. And there are some specific details that I'd like to show you about this Active Directory-integrated zone. First of all, if I come down to the bottom half of the window here, you'll notice for dynamic updates, it says secure only. All right, if I pull that down,
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=95)** I could do no dynamic updates, which means every record would have to be done manually. I could do nonsecure and secure. But just as the name says, it's allowing nonsecure updates, which means somebody might be able to go ahead and communicate with this DNS server and put a fake record in. And then we have, was the default setting, which is secure only. And the easy way to explain what secure only means is that the only clients that are going to be able to dynamically update themselves with the DNS server, okay, so the only ones that can say, hi DNS server, I'm here, this is my name, this is my IP address, are clients that are members of the domain. Okay, so let me move this box over a little bit, and you'll notice there's a number of records here for like CLIENT-1, CLIENT-2, DC one, two, and three, MEMBER-1, MEMBER-2. These are all members of the landonhotel.local domain, so they are allowed to dynamically communicate with this DNS server if their IP address information were to change. Now a second thing that I want to point out is how replication works. Unlike a non-Active Directory-integrated zone, where we have a file on the hard drive that we then send out transfers out to other secondary servers, this is nothing more than a partition within Active Directory and is replicated as part of Active Directory replication. Now, as far as controlling that, here you will see it says replication right now is to all DNS servers in the domain. And if I click on Change, I have some choices here. I could say to all DNS servers running
>
> **[3:09](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=189)** on domain controllers in the forest. There is the default, which we are at right now, which is all DNS servers that are running on domain controllers in the domain. Or I could even say to all domain controllers in the domain, okay, which means even if they're not a DNS server, they will still have the partition and have the data on them. Okay, so you could do that. It creates extra replication, and it's extra space in the database. But it does allow for replication to more servers. All right, there is a fourth choice, it is grayed out here, which is to all domain controllers in the scope of the directory of this partition. It has to do more with creating a separate application partition, which is something we would cover in more detail in another course. But basically, you have a little bit of control over replication, but not much, because it's just going to replicate as part of Active Directory replication. Now the only other thing that I want to mention, because we did see this when we created a secondary zone, is I want you to understand that just because you are Active Directory-integrated and replication is done by default as part of Active Directory replication, if you want to create a secondary zone on a server that is not a domain controller, the Active Directory-integrated zone can act as a primary and push a copy down to a zone file on a secondary server. So overall, you can see why this is the choice and the way we should go whenever possible because there's not a whole lot to do, everything just kind of happens. And it's efficient as far as replication,
>
> **[4:42](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/active-directory-integrated-zones?u=76281980&t=282)** and it's secure as far as dynamic updates.

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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=0)** - When we think about DNS, we typically think about name resolution. And when we think about name resolution, we typically are thinking about how as humans we think about that we know the name of a computer but we don't know the IP address to be able to communicate on the network, right? So we say to a DNS server, hey what is the IP address of a computer with this name and then we get that resolved and we can communicate on the network. Well this is all done through the forward lookup zones there is however an occasional scenario where we know the IP address and we need to know the name of the computer that goes with that IP address. And this is handled through reverse look up zones. So I'd like to show you how to create a reverse look up zone. To do this, I am in the DNS manager on member one. And this is a DNS server where we've created a few forward look up zones. So if I expand it, you can see here. I have a primary that I've created called child dot Landon hotel dot local and I have a secondary zone for Landon hotel dot local. But here we have reverse look up zones and you'll see when I click on it, there are no zones there. I can add one if I want. So I'm going to right click and select new zone and this is very similar to how we create a forward look up zone. So here I have the welcome screen where I'll click next, I need to chose is this going to be a primary, secondary, or sub zone. I'm just going to say it's going to be a primary zone. And I'll click next. And I'm going to make it an IP four reverse look up zone. You could do IPV six as well.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/create-reverse-lookup-zones?u=76281980&t=94)** For this demonstration I'm going to do IP version four. I'll click next. And I now need to give the network ID. And so I'm going to put in 10 dot 35 dot four, okay? Because that's the network that we have been working on. And then I will click next. It creates a file, okay? And this is the default name that it creates. It actually kind of reverses it. It puts four dot 35 dot 10 and then it puts in addr arpa DNS. You can name it something else if you want but typically you just leave the name alone with the default and I will click next. Just like with a forward look up zone, we have to decide if we're going to allow dynamic updates. I do want to have dynamic updates, I don't want to do things statically, okay? And because I'm not [[Active Directory]] integrated, my only option is non secure and secure so we'll click next. And finish. And I now have a reverse look up zone where records could be placed to be able to go ahead and if a system needs to know the name of a computer that goes along with an IP address, it could look here.

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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=0)** - [Instructor] Inside of our DNS Zone [[Databases]], we have what's called resource records. And these resource records, are what allow us the ability to perform name resolution and actually even some other services, as we get deeper into the different record types. We'll see how that works. Speaking of record types, there's many different record types available, but what I want to talk to you about here is just a very simple name lookup record, or what's known as a host record and also the associated pointer record, which is a reverse lookup record. To demonstrate this, I will tell you I am on the DNS manager here on member one. And if I expand forward lookup zones, you will see that I have a zone that I created as a primary zone on this server called "child.landonhotel.local". Now over on the right you can see there's a couple of records that have already been created and I'm going to address these later. Those are some special records, we'll come back to those. But I want to show you how I could create a lookup record or a host record here in this zone. I do this by right clicking in the blank space here and choosing new host. Now in parentheses is says "a" or "a-a-a-a" or what some people call quad a. A host record is known as an 'a record' when dealing with IP version four and it's known as a 'quad a' record when working with IP version six. But this is the type of record that we want to create
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=94)** for just a standard lookup. So I click on that. I get the new host window. Where I'm going to give it a name and the name I'm going to give it is demo. You'll see here it populates a fully qualified domain name of "demo.child.landonhotel.local" and that's because I'm in the "child.landonhotel.local" zone. And now I have to assign an IP address. And so I'm going to do 10.35.4.125. There's one more option I have here and that is a checkbox at the bottom as to whether or not I want to create an associated pointer record. The pointer record means, I'm creating a new lookup that says if somebody is looking for demo, point them to the IP address 10.35.4.125. Well likewise, I want to make a matching record that says if somebody wants to know the name of IP address 10.35.4.125, point them back to the name demo. So I will click on add host. It tells me that this record was created. I'll click OK. I don't need to create anymore, so I will click done. You can see that a record was created for demo. It is a host or an a record and the data is that if somebody is looking for demo it's going to send them to 10.35.4.125. Now because I told it to make the matching pointer record, let me expand reverse lookup zones and click on my 4.35.10 reverse lookup zone. Sometimes it appears right away and sometimes you have to hit refresh. I'm going to hit refresh, there we go. And you'll see that I now have a record there that says, if somebody knows about the IP address
>
> **[3:08](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/host-and-pointer-ptr-records?u=76281980&t=188)** 10.35.4.125, the data that you're going to point them to is "demo.child.landonhotel.local". Alright. So both records were indeed created. Now if I come back here to "child.landonhotel.local" and here I see my demo record. Let's test this. Let's test this and see if it works. I'm going to do this by just simply going to a command prompt. So I'm going to click on start. I'm going to type in "c-m-d" on the keyboard and then open up a command prompt window. I'm even going to move the window down so I can still see the record up above, behind it. I'm going to type in the command "ping", "p-i-n-g". And them I'm going to type in "demo.child.landonhotel.local". Now before I hit enter, I need to emphasize something, this particular host doesn't exist. Okay, this is fake. So all that's going to happen is I'm going to show you that we are resolving the IP address but it won't actually return any results. I'll hit enter and you'll see here it says "pinging demo.child.landonhotel.local" and it resolved to 10.35.4.125. Just like we wanted it to. You'll notice it says "destination host is unreachable" and that's because that actual IP address, that actual host doesn't exist. Alright, but it's the idea here that how these records help resolve a name to an IP address. So that's how you create host and pointer resource records.

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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/alias-cname-record?u=76281980&t=0)** - [Instructor] Another type of resource record we have available to us is something called a CNAME or Alias record. Now the idea here is if we want somebody to look for a host by a certain name and that name is not actually the name of the host. We may do this to shorten the name or simplify the name or, in some cases, just to disguise the name. The best example I can give you of this is when you go onto the internet and you type in www dot whatever your favorite dot com website is. The reality is that there aren't a whole bunch of servers out there on the internet named www. What happens is www signifies that you're looking for the web server and so it'll be an alias that will then redirect to that server. So let me show you how to create one of these alias records. Here I am in the DNS manager on Member one and I'm on the child dot landonhotel dot local zone and so I'm going to just go ahead and right+click in the blank space here and I'm going to say I want to create a New Alias or CNAME record. And here it wants to know the alias name so let's use that same example I just gave you. I'm going to put in www and so that means if somebody puts in www dot child dot landonhotel dot local what I'm going to actually do is I'm going to point them to demo dot child dot landonhotel dot local, okay. And then I will click OK and you'll see here
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/alias-cname-record?u=76281980&t=94)** I now have an Alias record here for www. To test and see if this works, let's open up a command prompt. I'm going to click on Start, type in cmd, opens up a Command Prompt window. I want to move it so that we can still see the records behind it and I'm going to use the ping command, p-i-n-g, and I'll put in www dot child dot landonhotel dot local and when I hit Enter you'll notice that it says that it's Pinging demo dot child dot landonhotel dot local and so what it does at this point is www redirected them to demo dot child dot landonhotel dot local. From there there has to be a matching host record which we already have above where it says the demo within child dot landonhotel dot local is 10 dot 35 dot four dot 125 which you can see down here in the Command Prompt window it has resolved to that same IP address, 10 dot 35 dot four dot 125. Now I don't want you to be concerned that the replies were Destination Host unreachable because I have no such host. This is a fake host. It doesn't actually exist on my network and so the point here is that somebody who is looking for www was redirected to demo and then we were able to resolve the IP address and that is how CNAME or Alias records work.

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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=0)** - [Instructor] Another type of resource record that we have available to us is something called an MX record, which stands for Mail Exchanger record. And these records are explicitly used for the purposes of locating an email server. So to demonstrate this, I am on MEMBER-1 in the DNS manager, and I'm highlighted on the child.landonhotel.local zone. And if I want to go ahead and create one of these MX records, I just go ahead and right-click over here in the blank space and you'll see right here, there's an option for New Mail Exchanger, or MX record. So here, the first thing it's asking me is for the Host or child domain. And this might seem confusing, I know it does to most, but if you read the message below that window, it'll become a lot more clear. It says, by default, DNS uses the parent domain name when creating this record. You can specify a specific host or child name, but in most deployments, the above field is left blank. In other words, if we're just talking about where's an email server for child.landonhotel.local, we leave it blank. There's only some special circumstances where you would fill in that first field. So the fully-qualified domain name is going to stay child.landonhotel.local. Now, it wants the fully-qualified domain name of the actual mail server. So I'm going to go here and say that we have a server here called mailserver1.child.landonhotel.local. And then we have a Mail server priority.
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=98)** And this is just a number which will be relative to the priority number of any other MX records that we create. Very typically, you will use 10, which is why it defaults to that, and if you create another record, it would be 20, and another one would be 30. That is just standard. But it's not required. You could do priority of one, two, and three. The problem with doing that is if you ever want to put a priority in between, you're not able to do it. So you'd have to reconfigure everything. So I'm going to leave a Mail server priority of 10 and click OK. And you'll see here that I now have a Mail Exchanger record. Over on the left, it says Same as parent folder, that just means the parent folder being child.landonhotel.local. And the name of the server is mailserver1.child.landonhotel.local. Now, there's nothing I can do to demonstrate to prove that this record is working, and the truth of the matter is, I don't even have a server here called mailserver1. This is the record you would create if you had an email server called mailserver1 servicing the child.landonhotel.local domain. And in fact, you typically, when it comes to email servers, you have more than one. You usually have some form of redundancy. So I really should come in here and create a second one, which is going to be almost the identical thing, other than, I'm going to type in mailserver2.child.landonhotel.local. And this time I give it a priority of 20 and click OK. And now I have two of these Mail Exchanger records. And what's the difference? Well, when somebody comes to this DNS server
>
> **[3:11](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/mail-exchanger-mx-record?u=76281980&t=191)** and says, hey, I have some email, where do I send it? It's going to look for the lowest priority first. So it's going to say, you should go to mailserver1. And only if mailserver1 is unavailable, will you then try for mailserver2. And that is how Mail Exchanger or MX records work.

> [!info]- Semantic Content
>
> **Env Vars:** dns (3), member (1)
> **UI Navigation:** right-click (1), go to (1)
> **Definitions:** stands for (1), in other words (1)
> **Speakers:** - [instructor] (1)

#### [Additional resource record types](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=0)** - In the past few videos, I have shown you how you can manually create a few different types of resource records. But you may have noticed that there are some other records that were already created before we started doing anything, and I can tell you these are record types that you wouldn't typically be manually creating. You usually let the system create these records for you. So let's take a look at them. Here I am on MEMBER-1 in the DNS Manager, and we're looking at the child.landonhotel.local zone. And up at the top, there's two records that were created automatically, just with the creation of the zone. The first right at the top is the Start of Authority, or the SOA record, and it is just what it sounds like. It's the start of authority, meaning it's the record that identifies the primary name server for the DNS zone. Which in this case is MEMBER-1, cause that's where I created the zone. The next record is a Name Server record, or an NS record. And again it's pretty much what it sounds like. It will show who is a name server for this particular zone. And because I only have the one server that I made authoritative for child.landonhotel.local, that's all we see is just the member 1, that's it. But I'll tell you what, let me go ahead and click on landonhotel.local. Now here, you'll notice that I have three name server records for dc-1, 2 and 3. And that's because all three of those servers are also DNS servers for the landonhotel.local zone.
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/additional-resource-record-types?u=76281980&t=96)** Now, additionally here in landonhotel.local, because we are servicing [[Active Directory]] services, I'm going to go ahead and expand this, and point out that there's a number of these underscore records. And I'll click on tcp, just so you can see something here. And I want you to notice that all these underscore records, they are what's called SRV resource records, and the SRV stands for Service Location. And it means just that. Where is the location of the service we're looking for? One of the best examples that I can give is when you sit down at a computer, and you want to log in to a domain, what that computer's going to do when you enter in your username and password, is it's going to go to the DNS server and say: "Hey DNS, I have a user that needs to be authenticated." And DNS will come to a record here, kerberos, for instance, and you'll see that there's three kerberos records, and they point to DC-1, 2 and 3. The three domain controllers for this domain. Then from there, it jumps back to landonhotel.local, and it says, okay, DC-1, 2 and 3 are ip addresses, 10.35.4.81, 82 and 83. And it sends that back to the client. It says: "these are the ip addresses of the servers who can possibly authenticate that user for you." And so that's what SRV resource records are used for, is any time that we need to locate the presence of a specific service on our network, most typically domain services.
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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=0)** - [Instructor] One of the keys to understanding how name resolution works in DNS is understanding the concept of querying. Querying can be thought of as very simple in the sense that it's just the idea of a client saying to a DNS server, hey, I have a name. Can you tell me an IP address? But it gets a little bit more sophisticated that than and so to show you a little bit and talk to you about it, let's connect to Member 1 which is a DNS server on my network. Here in the server manager, I'll just go to tools and select DNS. Takes me into the DNS manager. If I were to go to Member 1 and right-click and go to properties, the first thing I want to show you is on the monitoring tab, there are a couple of tests you can do and I'm here not so much to talk to you about the tests, but to just show you that there is a test for what's called a simple query and a recursive query. A simple query is just that. It is a simple or what's sometimes called an iterative query where the client says, hey, do you know the IP address for this name? The DNS server will either know it or it won't, but that's it meaning it's just going to give its best answer it can give. Either yes I do, no I don't, or no I don't, but here's somebody else you can go ask, so go ask them. A recursive query, however, is where the DNS server goes out on behalf of the client and does not give a response back to the client until it does all its research and gives either an answer or an authoritative no, I do not have an answer. Now, the best way to explain how this works would be to talk to you about what happens when you browse the internet. Now, before we do browse the internet,
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=93)** I want to click on another tab here that says Root Hints, because we're going to talk about these root servers. Okay, this is just a list of 13 root servers. Let me open up my internet browser and here we're connected to www.[linkedin.com](https://linkedin.com). Here's what happens. When a client says, I'm looking for www.[linkedin.com](https://linkedin.com). We go to the DNS server and say, do you know who that is? It's a recursive query meaning the DNS server is going to do everything in its power to find the answer for who www.[linkedin.com](https://linkedin.com) is. The first thing you need to know is that technically it's www.[linkedin.com](https://linkedin.com). and what that dot at the end is is it stands for root. What happens is is that the DNS server will go to the root DNS servers, that's what I was just showing you in Root Hints. That's where it gets the IP addresses for those servers from and it does a simple query and says, hey, root DNS servers, do you know who www.[linkedin.com](https://linkedin.com) is? Those servers will say, no, we don't know who that is, but we do know about a DNS server called .com. We know the .com DNS server. Then, the local DNS server says, thank you, and does another simple query to the .com DNS servers and says, hey, .com DNS servers, do you know who www.[linkedin.com](https://linkedin.com) is? Keep in mind that when you register a .com, that's exactly what you're doing. You are registering your DNS servers with the .com servers. The .com server's going to actually, believe it or not, respond back and say, you know what?
>
> **[3:05](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-queries?u=76281980&t=185)** I don't know who www.[linkedin.com](https://linkedin.com) is, but I do have an entry here for a DNS server that's authoritative for [linkedin.com](https://linkedin.com) and so it responds back with that. The local DNS server says, great. It goes to the IP address for [linkedin.com](https://linkedin.com) or to be specific, the DNS server for [linkedin.com](https://linkedin.com), and says do you know who www.[linkedin.com](https://linkedin.com) is? The [linked.com](https://linked.com) DNS server will say, you know what? I do, I actually know who that server is. Here is the IP address and it sends that IP address back to the local DNS server here that this client is using and then at that point that server is able to send the response back to the client and the webpage displays in the browser. That is how recursive querying works. All right, so simple query is just, hey, do you know who it is? It's yes or no, maybe a referral to somebody else. Recursive query is I'm going to go out on behalf of the client and research and find the answer for you.

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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/testing-queries?u=76281980&t=0)** - [Instructor] Since responding to client queries is a major function of a DNS server, you may want to have a way of being able to test a DNS server's querying ability to help you troubleshoot problems if people are complaining about name resolution issues. So to demonstrate this, I am going to connect to DC-1, which is a functional DNS server in my network. Here in the Server Manager we'll go up to tools and select DNS. Here in the DNS manager, if we go to the properties of DC-1, so right-click and select Properties, in the properties you'll see that there is a monitoring tab where we have the ability to go ahead and perform a test on simple querying and/or recursive querying. And if I want to do the test right now, all I have to do is click the button that says Test Now. And you'll see here that I very quickly got a response that said both passed, which means, hey, everything is great and we're able to go ahead and perform queries for our clients. We also have the ability, instead of performing on-demand tests, you could check a box that says to perform automatic testing in certain intervals. And you'll see here it says one minute. And you might be thinking to yourself, oh my goodness, why would I do a test every one minute? Well first of all, you'll see here I could do seconds, minutes, or hours, but the idea here is not necessarily for the sake of having
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/testing-queries?u=76281980&t=95)** a permanent schedule of this test. The idea is more along the lines of saying hey, we're having a problem and so if you come in here and you do a manual test and then you have a failure, now you want to start troubleshooting why it's failing. And while you're troubleshooting, you may want it to go ahead and just keep doing a regular test every minute, so that you can just easily pop back into this screen and check to see. So this is how you can go ahead and test to make sure that your DNS server is capable of doing DNS queries for its clients.

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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=0)** - One important component to DNS name resolution is the DNS cache. Now this is an area of short-term local memory where a DNS client and or the DNS server will store the results of any recent name resolution queries. So in order to take a look at this I want to go ahead and jump onto one of my DNS servers member one. Now a couple of videos ago I talked about recursive querying when you go to look up a website out on the internet. Alright and I went ahead and pulled up a browser and I'll actually do that here. Pull up the browser and it goes to www.[LinkedIn.com](https://LinkedIn.com) And I went through the whole process of how it got that answer and then displays this up on the screen. Let me go ahead and close this. Because I want to explain that there was one piece that I didn't talk about in that other video. And that is before the answer is given to the client to put the website up on the screen the first thing the server does is puts the information in its local cache. So that if another client comes in with the same request it doesn't have to utilize the resources to do the full recursive query process. It just goes to its cache and it has the answer. Now to see this cache I need to go to a command prompt. So I'm going to click on Start and I'm going to type C M D and I'm going to type in a command called IP Config forward slash display DNS and hit enter. And you'll see there's a lot of information, okay. Apparently I've looked at [[Google]] recently and a number of other things and if I scroll through
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=94)** you'll see I do have some [LinkedIn.com](https://LinkedIn.com) results and it's a big long list and if I were to go deep enough into the list, I would actually find www.[LinkedIn.com](https://LinkedIn.com) Let's actually do something. If you ever feel that the cache maybe has some incorrect information you can type in another command IP Config forward slash flush DNS and you'll see here it says it successfully flushed the cache. And now if I were to do IP Config Display DNS I basically get nothing, right. It says "Could not display the cache". It's not an error it's just there's nothing in the cache. So now that I've done that and I've figured out all the extra information let me open up my browser again, which forces it to go out and look for [LinkedIn.com](https://LinkedIn.com). Close that and let's again do IP Config Display DNS. And hit enter. And you'll notice again it kind of scrolled there is a lot of information. The reason is because you end up learning about all sorts of different stuff while you're doing recursive querying, but you'll notice I do have the information for www.[LinkedIn.com](https://LinkedIn.com). So that's how you can manage the cache from the command prompt. Now if I were to go into the DNS manager, so I'll go up to Tools and select DNS. I will show you that from the graphical interface if you right click on the server you do also have an option here for Clear Cache. Alright, there's nothing here for displaying the cache but you can clear the cache and that's the equivalent
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache?u=76281980&t=187)** of doing IP Config slash Flush DNS. So that is pretty much how the DNS cache works.

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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/forwarding?u=76281980&t=0)** - [Instructor] When a DNS client sends a query to a DNS server, and then that DNS server looks at the name that the client is looking for and it thinks to itself, "You know that's not in any of the zones "that I'm authoritative for, what am I supposed to do?" Well this is where DNS forwarding comes into play. Forwarding provides a way for name spaces or research records that are not contained in these zones that a DNS server is authoritative for that they can be passed along to another DNS server for name resolution to take place. Now, there's a couple different versions of how forwarding works. What I want to look at here is just simple DNS forwarding, and to do this I'm going to connect to one of my DNS servers called DC1. Here in the server manager I'm going to go to the tools menu and select DNS. This takes me to the DNS manager and if I expand DC1 and then expand my forward look up zones you'll see here that I am authoritative or I have information on a few different zones here, but what happens if I get a request that's not in one of these zones? Well, let's take a look at where we would go. If I go to the properties of DC1 so right-click, select properties, you'll see that there is a forwarders tab. When I click on that tab, this is where you have an opportunity to point to other DNS servers that may know about who can give you assistance in resolving this query. Now, on my screen I actually happen to have a couple
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/forwarding?u=76281980&t=96)** of DNS servers listed, and the reason why is it has to with my environment here at my corporate [[Microsoft Office|office]]. I'm on a network where, specifically, I point to some DNS servers in the company who point out to the internet. So I have a couple of IP addresses here so that if a request comes to me, and I don't know the answer or it outside of landonhotel.local or whatever then I'm going to go out to these DNS servers. And you'll also notice that there is a check box down below that says, "Use root hints "if no forwarders are available." Okay so it's basically saying if you don't have any forwarders, if these weren't here, then we would jump over to the root hints tab and we would jump into one of these internet root hint servers to try to resolve the query for our client So, that is how DNS forwarding works.

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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/conditional-forwarding?u=76281980&t=0)** - [Instructor] Another type of forwarding that we have in DNS is something called conditional forwarding. And you'll see here I'm still on DC-1, and I'm in the DNS Manager. You'll notice on the list here we actually have something called conditional forwarders. And if I click on it, you'll notice it's blank. Right, there's nothing there. But let's go ahead and create a conditional forwarder. I'm going to right click, and select to create a new conditional forwarder, and now I get to put in the name space that I want to conditionally forward for. All right, so I'm going to put in demodomain.local, and then I have to say, hey if somebody's looking for a name that is in the demodomain.local name space, where should I send them to? All right, so maybe I specifically know in my network, in my enterprise, I know of a DNS server that is authoritative for demodomain.local. So I'm just going to put in 10.35.4.50, and here's the thing, I don't really have demodomain.local, and there's not a DNS server that's authoritative for it, this is all hypothetical, which means as soon as I click away, you'll see here it's going to say it's attempting to resolve, it's not going to be able to resolve, and it will not validate it as a DNS server, okay, so, in a real world scenario, you would point to a real DNS server that is authoritative for that zone, and then you would instead of getting this red circle with an X in it, you would get a green circle with a check mark saying that it is verified, all right?
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/conditional-forwarding?u=76281980&t=93)** But even with it not being verified, if I click okay, I still have the conditional forwarder created for demodomain.local. And what this means is if a request comes into me, if a query comes into this DNS server here, looking for some name.demodomain.local, it's going to explicitly send it to 10.35.4.50, to that DNS server looking for the answer. The thing that's nice about conditional forwarding, as opposed to just standard forwarding, is you can create more than one, okay? So if I right click new conditional forwarder, and we'll just put anotherdemo.local, just to pick another domain, and then type in another IP address, we'll say 10.35.4.51, just use the next IP address, and again, it's going to go through, attempt to resolve, it will not validate. I won't even wait for the error, I'm just going to click okay. Now you can see here that I have two conditional forwarders and the reason it's called conditional is because if the request comes in specifically for that name space, that I'm not authoritative for, I know where to go. And in fact, there is another type of conditional forwarder that we already talked about in another video, and that was the video where we talked about creating a stub zone. And when we created the stub zone, so for instance here I made a stub zone for child.landonhotel.local, right, if I click on forward zones you'll see child.landonhotel.local is a stub zone. It's a form of forwarding, because the only thing that that zone has
>
> **[3:06](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/conditional-forwarding?u=76281980&t=186)** is name server information, so that if anybody's looking for child.landonhotel.local, I'm going to send them over to that server, to member-1 to get it resolved. So that's another type of conditional forwarder. All right, so conditional forwarding can help save a lot of confusion and traffic over just standard forwarding.

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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=0)** - [Instructor] In the last few videos I talked a little bit about a concept called the DNS cache. We also talked about DNS forwarding. And the reason I mention this, is if you put those two technologies together, you can create what's called a DNS caching only server. And so to demonstrate this, I am going to connect to a DNS server that I have here called Member one. Here in the server manager, I'm going to go up to the tools menu and select DNS. Now, if you've been following along through this entire course, you may remember member one was a server that we manually installed DNS and originally when we clicked on our zones we didn't have anything. Everything was blank. And I mentioned way back then that technically this server was able to respond to queries. So what I want to do is, let's make it blank once again. Alright so I'm going to take this Landon Hotel dot locals zone and delete it. And it says are you sure you want to do it? Yes. I'm going to take the child zone and I'm going to delete it. And yes. In fact, I believe I have a re-verse zone. I do. So I'm going to delete that zone. Yes. Alright, so this means there are no forward zones, there are no re-verse lookup zones. Doesn't exist. Well what I can do, even without any zone, I could go to the properties of member one and I could go to the forwarders tab and I could add a forwarder.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=97)** So I'm going to edit this list and I'm going to put in 10.35.4.81 and click OK. Well actually before I click OK I will click in the blank space just the verify it's DC one and now I'll click OK. And in fact it might be a good idea to add a second one. Right, so let's put in 10.35.4.82 which is DC two. Now we have two of them on the list. And I'm going to click OK out of the properties sheet. What I've just done, is I've made it to any client that comes to this server and says hey I have some machine name that I'm trying to look up. This server has no zones that it's authorized for so it's going to go ahead and it's going to jump over to those other DNS server and a forwarder and ask them to resolve the query. And the reason we're calling it caching only is because is what this server will do is when it goes out and gets the answer from the other DNS servers, it will put that answer into it's cache. And then that way, when another client makes the same request, this server already has the answer without having to go out to anywhere else to look it up. And this is a fairly common thing you'll do. Maybe out in like remote [[Microsoft Office|office]]. Where you'll have all the local clients in that remote office pointing at that DNS server. But you don't have much in the way of security so you don't want any zone information stored. So all you'd have is the local DNS cache and that's it.
>
> **[3:11](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/caching-only-dns-servers?u=76281980&t=191)** But that would help reduce the amount of queries that are going across the WAN link, 'cause only the DNS server would be going across and asking when it doesn't already know the answer. So that's how caching only DNS server works.

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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache-locking?u=76281980&t=0)** - [Instructor] Since DNS is such a critical network service, it's important that you try to protect it as much as possible. Now one way that we can help protect DNS is through the use of something called DNS cache locking. DNS cache locking is a security feature that you can use to control when information in the DNS cache can be overwritten. So we've already learned that when a recursive DNS server responds to a query, that server will cache the results so that it can respond quickly if it happens to get another query looking for the same information. The amount of time that the DNS server will hold on to that information in the cache is determine by something called the TTL or the time to live value. So here's the deal, the way it's been set up is that it's possible for that information in the cache to be updated if there's more recent information than when it was first put into the cache, but like with many other features, we end up having malicious users who ruin it for the [[Representational State Transfer (REST)|rest]] of us. So what the malicious users will do is they will go ahead and send information to a server to say, oh you know what that record you have in your cache, well I've got some updated information for you. So why don't you update that and then of course, the information that it's pointing to is not real, it's going to a malicious site and so we don't want that to happen. So what we do is we configure cache locking as a percentage value, which by default is on and set to 100%, which means that until the time to live has reached 100% expired, that cache can longer be overwritten. Now we can change this if we want.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-cache-locking?u=76281980&t=94)** There's a command line tool, which I have listed here. It's called DNS Command or DNSCMD, and if you then put /Confid/CacheLockingPercent and then enter your percentage, you could change it from 100% to anything all the way down to 0, if you want to re enable that ability to modify what's in the cache. There's also a [[Powershell]] command which is called Set-DnsServerCache which can be used the same way. Where you do -LockingPercent and put in the percentage value. So again it's set to 100% by default and that's the most secure setting you can have, which means once it's in the cache, it will stay there and cannot be modified at all until it has expired and I recommend that unless you are finding a reason to change it, that you should stay with that default value.

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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-socket-pool?u=76281980&t=0)** - [Narrator] Another feature we can use to help secure DNS is something called the DNS socket pool. Now, the DNS socket pool enables a DNS server to use source port randomization when issuing DNS queries. When the DNS service starts, the server chooses a source port form a pool of sockets that are available for issuing queries. Instead of using a predictable source port, the DNS server uses a random port number that it selects from the DNS socket pool. Now, this is what makes cash tampering attacks much more difficult, because a malicious user must correctly guess both the source port of the DNS query and a random transaction ID to successfully run the attack. Now, this pool is enabled by default in [[Windows Server]] 2019 and it's actually set to a pool size of 2500, but it is modifiable. There is a command that you can use from the command line. Okay, so it's dnscmd/Config/SocketPoolSize and then you can enter a value anywhere from zero to 10,000. So again, 2500 is the default, but keep in mind the larger the value, the greater the protection you'll have against DNS spoofing attacks.

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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/dns-security-extensions?u=76281980&t=0)** - [Instructor] Another feature you can use to help secure DNS has been around for quite a while at this point, but it's something called DNSSEC. So DNSSEC, which actually stands for The [[Domain Name System (DNS)|Domain Name System]] Security Extensions, is pretty much just what it sounds like. Security extensions on DNS. This enables DNS zones and all records in the zone to be signed cryptographically so that client computers can validate the DNS response. DNS is often subject to various attacks, such as spoofing, cash tampering, and things like that, and DNSSEC can help protect against these types of threats and provide a more secure DNS infrastructure.

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
> **[0:00](https://www.linkedin.com/learning/windows-server-2019-dhcp-and-dns/next-steps?u=76281980&t=0)** - [Ed] I hope you've enjoyed learning about implementing [[DHCP]] and DNS in [[Windows Server]] 2019 as much as I've enjoyed showing it to you. If you want to learn more about networking with Windows Server 2019, please explore our library as we have a number of courses out there to help you. See you next time.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows Server]] (2), [[DHCP]] (1)
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