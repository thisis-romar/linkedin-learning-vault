---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: windows-server-2022-dhcp-and-dns-15012768
url: "https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768"
duration_minutes: 134
duration: 2h 14m
level: Beginner
updated: 12/6/2024
learners: 29296
skills:
  - Domain Name System (DNS)
  - Dynamic Host Configuration Protocol (DHCP)
  - Windows Server
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFVEwRUQ-idOQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1660581463282?e=2147483647&amp;v=beta&amp;t=at1jmnwdiA5ZMRZy8RiLpZ4JRe8e5Er6V860PUD5sKY"
linkedin_topic: IT Help Desk
learning_paths:
  - '[Getting Started with Windows Server 2022](../../Paths/IT%20Help%20Desk/Learning%20Paths/Getting%20Started%20with%20Windows%20Server%202022.md)'
prev_courses:
  - '[Windows Server 2022- Install and Configure Active Directory](Windows%20Server%202022-%20Install%20and%20Configure%20Active%20Directory.md)'
path_nav: '[{"path":"Getting Started with Windows Server 2022","position":4,"total":4,"prev":"Windows Server 2022- Install and Configure Active Directory","next":null}]'
path_count: 1
tags:
  - course
  - topic/it-help-desk
  - topic/network-and-system-administration
  - skill/domain-name-system-dns
  - skill/dynamic-host-configuration-protocol-dhcp
  - skill/windows-server
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/IT%20Help%20Desk/Windows%20Server%202022-%20DHCP%20and%20DNS.md)

![Windows Server 2022: DHCP and DNS](https://media.licdn.com/dms/image/v2/C4E0DAQFVEwRUQ-idOQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1660581463282?e=2147483647&amp;v=beta&amp;t=at1jmnwdiA5ZMRZy8RiLpZ4JRe8e5Er6V860PUD5sKY)

# Windows Server 2022: DHCP and DNS

> DHCP is an important concept to understand for any network or system administrator, as it allows you to automatically assign IP address information to all your endpoints. DNS, meanwhile, is essential to resolve names to IP addresses to make Active Directory and name resolution work correctly. In this course, instructor Robert McMillen explains how DHCP and DNS work in the context of a Windows Serv

> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768) | 2h 14m | Beginner | 29K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Install and configure Windows Server 2022 DHCP and DNS](#install-and-configure-windows-server-2022-dhcp-and-dns)
- [**1. DHCP Overview**](#1-dhcp-overview) (3 videos)
  - [What is DHCP?](#what-is-dhcp)
  - [DHCP on various devices](#dhcp-on-various-devices)
  - [The importance of DHCP in the enterprise](#the-importance-of-dhcp-in-the-enterprise)
- [**2. Setting Up DHCP**](#2-setting-up-dhcp) (6 videos)
  - [Installing the DHCP server role](#installing-the-dhcp-server-role)
  - [DHCP authorization](#dhcp-authorization)
  - [Creating scopes](#creating-scopes)
  - [Configuring DHCP options](#configuring-dhcp-options)
  - [Scope activation](#scope-activation)
  - [Client configuration for DHCP](#client-configuration-for-dhcp)
- [**3. Managing DHCP**](#3-managing-dhcp) (6 videos)
  - [Setting up reservations](#setting-up-reservations)
  - [Setting up exclusions](#setting-up-exclusions)
  - [Import and export databases](#import-and-export-databases)
  - [Scope reconciliation](#scope-reconciliation)
  - [DHCP troubleshooting](#dhcp-troubleshooting)
  - [DHCP filters](#dhcp-filters)
- [**4. Advanced DHCP**](#4-advanced-dhcp) (6 videos)
  - [DHCP failover and high availability](#dhcp-failover-and-high-availability)
  - [DHCP failover setup](#dhcp-failover-setup)
  - [DHCP relay using switches and routers](#dhcp-relay-using-switches-and-routers)
  - [Routing using DHCP](#routing-using-dhcp)
  - [DHCP policies](#dhcp-policies)
  - [Split scope](#split-scope)
- [**5. DNS Overview**](#5-dns-overview) (3 videos)
  - [DNS importance with Active Directory](#dns-importance-with-active-directory)
  - [DNS manager overview](#dns-manager-overview)
  - [Important Active Directory DNS records](#important-active-directory-dns-records)
- [**6. Deploying DNS**](#6-deploying-dns) (3 videos)
  - [Install DNS on a member server](#install-dns-on-a-member-server)
  - [Client DNS configuration](#client-dns-configuration)
  - [DNS forwarders](#dns-forwarders)
- [**7. DNS Zones**](#7-dns-zones) (4 videos)
  - [Forward DNS zones and AD integration](#forward-dns-zones-and-ad-integration)
  - [Reverse DNS zones and AD integration](#reverse-dns-zones-and-ad-integration)
  - [Secondary zone creation](#secondary-zone-creation)
  - [Stub zone creation](#stub-zone-creation)
- [**8. DNS Resource Records**](#8-dns-resource-records) (4 videos)
  - [Forward and reverse zone records](#forward-and-reverse-zone-records)
  - [Alias (CNAME) records](#alias-cname-records)
  - [Mail (MX) records](#mail-mx-records)
  - [Other record types](#other-record-types)
- [**9. Advanced DNS**](#9-advanced-dns) (3 videos)
  - [DNS queries](#dns-queries)
  - [DNS cache](#dns-cache)
  - [Conditional forwarders](#conditional-forwarders)
- [**10. DNS Security**](#10-dns-security) (4 videos)
  - [DNS cache locking](#dns-cache-locking)
  - [DNS socket pool](#dns-socket-pool)
  - [DNS zone signing](#dns-zone-signing)
  - [DNS security extensions](#dns-security-extensions)
- [**11. DHCP and DNS Management**](#11-dhcp-and-dns-management) (2 videos)
  - [Managing DNS and DHCP using Admin Center](#managing-dns-and-dhcp-using-admin-center)
  - [Managing DNS and DHCP using IPAM](#managing-dns-and-dhcp-using-ipam)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Install and configure Windows Server 2022 DHCP and DNS](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-and-configure-windows-server-2022-dhcp-and-dns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-and-configure-windows-server-2022-dhcp-and-dns?u=76281980&t=0)** - [Robert] If you're looking to upgrade to [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) 2022 and you have an [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) domain in forest, you'll need to know all about [Dynamic Host Configuration Protocol](../../Glossary/Standard/DHCP.md) and Domain Name Services. [DHCP](../../Glossary/Standard/DHCP.md) is essential for managing a modern network. In this course, Windows Server 2022 DHCP and DNS, I'll show you how to install, manage, troubleshoot, and create all the DHCP settings needed for your network, even if utilized remote networks. We then switch over to DNS. You'll learn all about installing, configuring, and troubleshooting both Active Directory DNS and standard DNS zones. I then give you demonstrations in how to manage both DNS and DHCP using management consoles, [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md), IPAM, and [Windows](../../Glossary/Service/Windows.md) Admin Center. My name is Robert McMillen. I'm a [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md)-certified trainer and Solutions expert. I invite you to join me to learn all these skills and more in my Microsoft Windows Server 2022 course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (4), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (3), [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (2), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (2), [Dynamic host configuration protocol](../../Glossary/Standard/DHCP.md) (1)
> **Env Vars:** dns (5), dhcp (4), ipam (1)
> **Prerequisites:** you'll need (1), install (1)
> **Tools:** powershell (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [robert] (1)


### 1. DHCP Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [What is DHCP?](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=0)** - [Instructor] [Dynamic Host Configuration Protocol](../../Glossary/Standard/DHCP.md), also known as [DHCP](../../Glossary/Standard/DHCP.md), is a protocol that's communicated between a client and a server to automatically provide computer or other endpoints with their IP address and other related configurations, such as the subnet mask and default gateway. DHCP is based on the RFC as a request for comments numbers 2131 and 32, and they define DHCP as an internet engineering taskforce standard that's based on the Bootstrap Protocol. BOOTP, as it's also known, was the original way computers received IP info, and DHCP is its successor. All [Windows](../../Glossary/Service/Windows.md) servers include DHCP. This is an optional network server role that you can add to your network to lease IP addresses and other information to DHCP clients. All Windows-based client operating systems include the DHCP client as part of [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md). And the DHCP client is enabled by default. Here's one of the main reasons to use DHCP. Every device on an IP-based network must have a unique Unicast IP address to access the network and its resources. Without DHCP, IP addresses for new computers or computers that are moved from one subnet to another must be configured manually with what's also known as a static IP address. There are many options that we can add
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=95)** into a Windows DHCP server, such as [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md), relaying to other DHCP servers, special options for other devices like IP phones, and dozens more. You can even create your own special options for certain vendors as needed. There's multiple options for redundancy in case your DHCP server fails for any reason. You can fail over to another DHCP server that is syncing your same scope and options. You can have two separate non-overlapping scopes that can share the load and add redundancy. And you can use a failover cluster with many nodes all running synced DHCP [Databases](../../Skills/Software%20Development/Databases.md) that can be ready to take over DHCP duties when needed. Let's take a look at how DHCP works between a client and a server. The client sends a DHCP Discover packet. The DHCP section identifies the packet as the Discover packet and identifies the client using the physical address of the network card. The DHCP server responds by sending a DHCP offer packet. The DHCP server identifies the packet as that offer. The client then responds to the offer by sending a DHCP request. This lets any other DHCP servers know that they can release their offered addresses and return them to their available DHCP pools. The DHCP server then identifies the packet as a request and verifies the offered address using DHCP.
>
> **[3:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=192)** Finally, the DHCP server responds to the request with a DHCP AP or Acknowledgement packet. And that completes the initialization cycle. The source address is the DHCP server IP address. The client will either receive a new IP address or the same IP received during the last request. The client will also have a lease time on that IP address, which by default is eight days. DHCP can make life much easier for the administrator by managing the IP addresses for multiple clients in a simple-to-use database.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (31), [Windows](../../Glossary/Service/Windows.md) (3), [Dynamic host configuration protocol](../../Glossary/Standard/DHCP.md) (1), [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) (1), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** dhcp (31), rfc (1), bootp (1)
> **Definitions:** known as (2), is a  (1), is an  (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Documentation:** rfc (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### [DHCP on various devices](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-on-various-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-on-various-devices?u=76281980&t=0)** - [Speaker] [Windows](../../Glossary/Service/Windows.md) [DHCP](../../Glossary/Standard/DHCP.md) services are included with every [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md). And at no additional charge, you can also have redundancy and a wide array of DHCP options, exclusions, and reservations. If you plan to use Windows DHCP server on the same subnet as another DHCP server, then be sure to turn the Windows DHCP server off or it can cause a conflict between them. When the Windows DHCP server sees another DHCP server on the network that isn't authorized, the Windows DHCP server turns itself off. Internet service providers provide modems that are also routers as well as firewalls. They come with a DHCP service that is already turned on and will start feeding automatic IP addresses to any non-statically set device. Most other DHCP servers don't have the many feature options or redundancy you get on a Windows DHCP server such as reservations, exclusions, and other options. The DHCP server is a simple design that comes from the internet provider and not appropriate for the enterprise. DHCP can also show up on many other devices, such as this Cisco firewall as you see here. It can also be configured on a switch and a router. Once again, these mostly do not have the many DHCP options compared to Windows DHCP, but if no other Windows DHCP server is available, these options will work in most scenarios.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-on-various-devices?u=76281980&t=94)** You may see DHCP servers also show up on wireless routers and access points and many other types of devices. Be sure to only have one type of DHCP server on any subnet to avoid any future conflicts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (18), [Windows](../../Glossary/Service/Windows.md) (8), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (1)
> **Env Vars:** dhcp (18)
> **Analogies:** such as (2)
> **Definitions:** is a  (1)
> **Speakers:** - [speaker] (1)

#### [The importance of DHCP in the enterprise](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/the-importance-of-dhcp-in-the-enterprise?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/the-importance-of-dhcp-in-the-enterprise?u=76281980&t=0)** - [Instructor] Enterprise [DHCP](../../Glossary/Standard/DHCP.md) is for any organization that extensively uses DHCP and many of the DHCP options that you can find on a [Windows](../../Glossary/Service/Windows.md) or other type of server. Since Windows Servers have more options than options for redundancy available, I'll choose this type of server for this discussion. In many organizations, you'll find you need to have the same IP for a device every time it reboots. You could set up the device to be statically set, but that means you have to edit it manually every time you get a new DNS server or a new gateway among other options. Reservations are easy to set up and can be changed from the server instead of the device. You'll need the Media Access Control or MAC address, which is the physical address burned into the network card. And you use this information when creating the reservation. DHCP exclusions are basically just an exclusion for the DHCP server handing out an IP from the DHCP server pool due to a device having a statically set IP address. The exclusion has to be part of the DHCP scope itself or it will throw an error when applying. You only need the IP to exclude and the name you'd like to apply to set this up. DHCP has many options as you can see here. In the enterprise, this can be very important when setting more than just Windows Servers and clients. If you want to route to a different network, there's an option for that.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/the-importance-of-dhcp-in-the-enterprise?u=76281980&t=93)** There are also options for setting up Nortel IP phones and scientific devices. Not all options will be popular or even in use still today as the list hasn't been updated in a long time. If you want to migrate DHCP [Databases](../../Skills/Software%20Development/Databases.md) to another server because of server retirement, you can do this quickly and easily with a backup and restore to a file on the new server. In older versions, you had to copy the items and recreate reservations. So this has been a great feature add in recent years. I've used DHCP relay in many enterprise setups. This usually occurs when the IT administrator would like to keep just a single Windows DHCP solution, but has many subnets, VLANs, and possibly remote offices connected by VPN, [MPLS](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md), or SD-WAN connections. You set up [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) and remote access using the DHCP relay agent on a remote [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) at each location, or you could set up a DHCP helper on each router or firewall that points back to the Windows Server and a DHCP scope for each location. A DHCP helper is a command that you would type on many different types of routers and switches such as those on Cisco. Your clients in every other subnet will automatically look to the Windows DHCP Server for the automatic IP when starting up. DHCP in the enterprise can definitely help you manage thousands of IP addresses automatically when applied correctly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (17), [Windows](../../Glossary/Service/Windows.md) (5), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (2), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Mpls](../../Skills/Network%20and%20System%20Administration/Multiprotocol%20Label%20Switching%20(MPLS).md) (1)
> **Env Vars:** dhcp (17), dns (1), mac (1), vpn (1), mpls (1)
> **Prerequisites:** set up (4), you need to have (1), you'll need (1)
> **CLI Commands:** find (2)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. Setting Up DHCP

[↑ Back to Table of Contents](#table-of-contents)

#### [Installing the DHCP server role](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=0)** - [Instructor] The [DHCP](../../Glossary/Standard/DHCP.md) server role is not added by default in [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) 2022 so I'm going to go ahead and add it in my Server Manager by clicking on the Add roles and features option. The wizard shows up and now I'll click Next. Next again. And I'll make sure that the server that I want has been selected and it has. And I'll go over to the server role that says DHCP server. And I'll add the add features as well. Click Next. I don't need any additional features so I'll just continue on and choose Install. After installation is done, I'll go in and configure DHCP by adding in the scope, adding in reservations and other scope options that we can add in to a DHCP server. But before I do that, I'm going to show how to install DHCP as a server role inside [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md). The server role has completely installed. I can choose to complete the DHCP configuration by clicking on the link. But in case you missed that and you clicked Close, you can also go there by clicking on the triangle and choosing the complete DHCP configuration. And this portion has to do with authorizing the DHCP server to be able to hand out IP addresses. So if I click Next, we can see that I can use the administrator credentials or I can choose alternate credentials. And I'm just going to go ahead and choose
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=92)** the administrator and click Commit. And now that's done. I'll click Close. Now, if I go to Tools and DHCP, that's a new option that just appeared after the installation, the DHCP management console has opened up. And as of now really nothing has been configured. But I'm going to configure an IPv4 scope. I will not configure an IPv6 scope at this time. And that's because most internal networks aren't using IPv6. There are also policies that can be created, as well as filters. I'm going to switch over to another computer running PowerShell, where I'm going to install DHCP from there. I'm in my other domain controller. I'm going to right-click on the Start Menu and go into the PowerShell as the admin. And here I'll type a command. And that's going to be install-windowsfeature, followed by the feature name, DHCP. I also want to include the management tools. If I don't include the management tools then I won't be able to see the DHCP console. The role will be installed but I'll have to manage it from another device such as another server or [Windows](../../Glossary/Service/Windows.md) Admin Center. Even though this is a server role, there is no commandlet in PowerShell to install a server role. So every server role and feature are all installed as a Windows feature, as you see in this command. Go ahead and hit Enter. Now we can see that the role is being installed.
>
> **[3:06](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=186)** And the DHCP server role has been successfully installed. I should be able to go back to Server Manager, go to Tools. And there's my DHCP manager once again. And now I see DHCP installed on my second server. The DHCP server role is the first step to adding automatic [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) in Windows Server 2022.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (17), [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (4), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (2), [Windows](../../Glossary/Service/Windows.md) (2), [IP Addressing](../../Skills/Network%20and%20System%20Administration/IP%20Addressing.md) (1)
> **Env Vars:** dhcp (17)
> **Prerequisites:** install (5), configure (3)
> **Tools:** powershell (4)
> **UI Navigation:** go to (2), right-click (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)

#### [DHCP authorization](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-authorization?u=76281980&t=0)** - [Instructor] Authorizing servers in [DHCP](../../Glossary/Standard/DHCP.md) Manager is fairly easy. All you have to do is right click on the server in the DHCP Manager and choose authorize. Now, if it already shows unauthorized, that means it was authorized during the installation. On domain controllers you're going to see that many times the DHCP server's going to be authorized simply by installing it. Whereas if you installed it onto member servers, then you will have to right click and choose to authorize. Another way to check to make sure that you have authorized servers is you can open up [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md). You can type in get-dhcpserverindc.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-authorization?u=76281980&t=45)** And we can see my two different servers which are now authorized. Now what I'm going to do is go back into my server. I'm going to unauthorize it. So what that means is that this server, even if it has a scope created and turned on, it will not be able to hand out IP addresses to any particular computers. So if I type in the get-dhcpserverindc once again, it only shows my single domain controller. Now I'm going to go back, right click and choose to authorize. And now my authorization should allow me to set up DHCP on both servers once again. There is no DHCP without authorization in a [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md). This keeps rogue DHCP servers from handing out IP addresses which could be a potential security issue.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (6), [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (1), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (1)
> **Env Vars:** dhcp (6)
> **CLI Commands:** make (1)
> **Tools:** powershell (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Creating scopes](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=0)** - [Instructor] I'm in my [DHCP](../../Glossary/Standard/DHCP.md) server, and I'm going to create a scope. A scope allows a certain range of IP addresses to be handed out to client computers. So I'll right-click on IPv4 and choose New Scope. You also have the option for IPv6. However, most organizations still use IPv4 for internal use. I'm going to call this Scope 1, but you can give it any name that works for you and a description, if you'd like, and now I'm going to put in the starting IP address. We need to make sure we're using a range of IP addresses that are not currently in use. Now, if there happens to be an IP address somewhere in the middle of our range, we can go ahead and set up an exclusion, but for now let's try to use a range that's not currently used. So I'll put in 21.200 as my starting address and .210 for my ending address. Now, you can see the length is the 24, /24, which is the subnet mask of 255, 255, 255.0 that you see directly beneath it. So these are using what's called octets. So that means that it's two to the eighth power for each one of these four octets that you see in the subnet mask. So eight plus eight plus eight is 24, which is how we get the length of 24. This also means that our computer host addresses are going to start at a .1 and end at a .254. So our range between starting and ending can't be outside of one through 254.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=97)** So I'm going to click on Next. Now, if I want to add in exclusions, I can do that. I can set up a least duration. I prefer to do one day instead of eight, and that's just because you could run out of IP addresses if people hang onto their IP addresses for too long, and they don't come back into the [office](../../Skills/Web%20Development/Microsoft%20Office.md). I'm going to click Next. Do I want to set up DHCP options? So what I'm going to do is choose to do this later, and I'm going to click Next because I'm just creating the scope at this time and click Finish, and there's my scope. So if I double-click on it, I can click on my address pool, and we can see there it is. It starts at 200 and goes to 210. Now, I've not configured any other options for my scope, and you can see that there is a circle with a red arrow pointing down, which means that I'm not actually activating the scope as of yet. So it's not going to hand out any IP addresses until I activate it. You may decide you don't want to activate a scope yet until you get a chance to deactivate another scope, so you don't have overlapping IP addresses. Now I'm going to go into [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md), and I'm going to type a PowerShell commandlet that will allow me to do the same thing, but instead of doing it through the graphical user interface, I'm going to do it through PowerShell. At this time, I'm going to add another scope called Scope 2, and you can see this scope starts at 220 and ends at .230. It has the same subnet mask of three 255s, .0, and this time it's going to make the scope active, instead of non-active.
>
> **[3:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=192)** Now, before I can enter this scope, I've got to delete my existing scope. Otherwise, even though it's not using the same address range, it is using the same subnet, and that's not allowed. So I'll right-click and choose to delete my current scope, and then I'll go back to PowerShell, and now I can press Enter, and now my scope is active. It's turned on, and I'll just hit F5 to refresh, and there's my new scope called Scope 2. If I click on the address pool range, we see the new starting and ending IP addresses. DHCP scope supply the range of IP addresses for our client computers and other devices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (4), [DHCP](../../Glossary/Standard/DHCP.md) (3), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1)
> **UI Navigation:** right-click (2), click on (2), double-click (1)
> **Tools:** powershell (4)
> **Env Vars:** dhcp (3)
> **Definitions:** means that (2), is a  (1)
> **Prerequisites:** set up (3)
> **CLI Commands:** make (2)
> **Versions:** 21.200 (1), 255.0 (1)

#### [Configuring DHCP options](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/configuring-dhcp-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/configuring-dhcp-options?u=76281980&t=0)** - [Instructor] I've previously added a scope and an address pool. However, now I should add some scope options. Scope options gives me some additional capabilities such as specifying the DNS servers, the gateway, and many other things. I want to right click on scope options and choose configure options. Now, we can see a lot of different scope options available. I'm going to start with the router. The router is the way we get out to the internet. So, I'm going to put in 192.168.21.1, which is my particular subnet. So, I'll click add and apply. Now, we can see the router. So, when the client gets the IP address, it will not only get an IP address, a subnet mask, it'll also get this router which is my gateway out to the internet. I'm going to go back into configure options. I can choose many different things. One of 'em is going to be the DNS server. So, I'm going to put in my two domain controllers, 192 and 6821.195 is one of them. And it did do a confirmation that it was correct. Now, I'll put in the second one and click add. I can also put in the server name and just have it resolve it, as well. And once again, I'll click apply and there we can see our DNS servers. I'm going to scroll down a little bit until I get to number 15, which is the DNS domain name. So, I'm going to put that in
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/configuring-dhcp-options?u=76281980&t=93)** as my domain name for [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md). And after applying that, you can see that appear. So, you see there's a lot of other options. Now, most of these are no longer in use or rarely used but at some time they were, and in some cases you'll need to actually go in and add your own available options if needed. And there is a procedure for that, as well. [DHCP](../../Glossary/Standard/DHCP.md) scope options make DHCP more usable by adding capabilities to DHCP clients.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (3), [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (1)
> **Env Vars:** dns (4), dhcp (3)
> **Prerequisites:** configure (2), you'll need (1)
> **Versions:** 192.168.21 (1), 6821.195 (1)
> **UI Navigation:** click on (1), scroll down (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)

#### [Scope activation](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/scope-activation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/scope-activation?u=76281980&t=0)** - [Instructor] In the [DHCP](../../Glossary/Standard/DHCP.md) Manager, if you notice that your computers are not getting IP address leases, as you see here there are no leases that have been handed out, it could be that your scope has been deactivated. So take a look at the scope. You'll see this circle with the red arrow pointing down. You might also see under IPv4 right above it a blue circle with an exclamation point letting you know there's something wrong. So to fix that, it's pretty easy. You just right click on it and choose to Activate. And once that happens, we see that the circle goes away, and the IPv4 blue circle turns into a green circle with a check mark. Activating a scope is required before a scope will start sending out IP addresses to clients.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (1)
> **Env Vars:** dhcp (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### [Client configuration for DHCP](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-configuration-for-dhcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-configuration-for-dhcp?u=76281980&t=0)** - [Instructor] In order to set up a client for [DHCP](../../Glossary/Standard/DHCP.md), we need to make sure the IP address is not being statically set. So I'm going to go to the search box, type in cmd for command and open the command prompt and I'm going to type ipconfig/all as my command. And what I'm looking for is to see if DHCP is currently handing out an IP address and it says here DHCP enabled and the answer is no. So I know my IP address is being statically set. So now I can go into my network and sharing center or I can go into system settings and then I can go to make the change so it goes from static to dynamic. So I'll click on settings and I'll choose network and internet. Next, I'll click on Ethernet and under IP assignment, we can see that it's set to manual. That's another way of saying it's statically set so it's always going to be the same IP address every time, but it's being done on the computer itself. So I want to change this from being manually set to being dynamically or automatic. So I'll click automatic, click save, and now it's switching over to DHCP. You can see my IP address has changed to .224 whereas before it was set to .103. So if I go back to my command prompt and I do the ipconfig/all once again,
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-configuration-for-dhcp?u=76281980&t=93)** we can see there's my IP address set to .224. Also take a look at the DHCP enabled at the very top. It says yes. And under DHCP server, we see it's 192.168.21.129 which is one of my DHCP servers. Changing from static to dynamic IP address allows the DHCP server to hand out the IP information to the client.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (8)
> **Env Vars:** dhcp (8)
> **UI Navigation:** go to (2), click on (2), open the (1)
> **CLI Commands:** make (2)
> **Tools:** command prompt (2)
> **Versions:** 192.168.21 (1)
> **Cross-References:** go back to (1)
> **Prerequisites:** set up (1)


### 3. Managing DHCP

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting up reservations](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=0)** - [Instructor] A [DHCP](../../Glossary/Standard/DHCP.md) reservation allows us to have a client or device that would get the same IP upon every time it restarts. And the reason that's useful is because sometimes you need to have devices, like printers need to always have the same IP address, so they're always reachable at the same place. And if you set up a static IP in a printer instead, and you have say a lot of printers in your [office](../../Skills/Web%20Development/Microsoft%20Office.md), and they all need to have the IP addresses changed, that would require a lot of effort. However, with the reservation, you can change that fairly easily right from the DHCP management console. So I'm going to give this particular reservation a name of Client2. And I'm going to give it the IP address of 192 dot 168 dot 21 dot 231. Now I need the MAC address. So I'm going to go down to my Command Prompt, and I'm going to type arp space minus a. So if I've communicated with the device that I'd like to set up to have the same IP every time, then it will show up here under physical addresses. This is another way of looking at Media Access Control or MAC addresses. And we can just pick out whichever one it is that is currently having an IP address, say, for dot 90, and then copy it. And then I'm just going to go ahead and right-click and paste that in. If you don't see it in the list, just go ahead and ping it first and then type arp space minus a, and it will show up. We also want to leave both supported types, DHCP and bootP. BootP is more of a legacy type of technology, but there are some devices that still support it.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=94)** Under the Description, you can type in anything you want. I'll just also type in Client2 and click Add. I'm going to click Close. And we can see Client2 is showing up as dot 231. And we know that's within our address pool of dot 220 through dot 235. Now let's take a look at the same way of doing this, but through [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md). So I'm going to right-click and choose PowerShell, open that up. And I've typed in a command called Add dash DhcpServerv4Reservation. So we know this is for an IPv4 reservation. And the ScopeID is not the scope name. It's simply the subnet you're using, which in this case is the 192 168 dot 21 network. After that, it's going to be the reservation IP address which is at 230. And we know that falls within our scope. Next, we have the client ID. This is the physical address or MAC address of the network card that's burned in to every single card. After that, we have the description followed by the name, client1. Hit Enter. And it's complete. Now go down and hit F5 for refresh. And there is Client1. So if I double-click on it, we can see it's also going to supply the router IP and DNS servers, just as it would with Client2. And that's because it's also under the scope options that you see here. DHCP reservations can save a lot of time managing devices that aren't statically set, but need the same IP address upon every reboot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (4), [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (2), [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (1)
> **Env Vars:** dhcp (4), mac (3), dns (1)
> **Tools:** powershell (2), command prompt (1)
> **UI Navigation:** right-click (2), double-click (1)
> **Prerequisites:** set up (2), you need to have (1)
> **Code Identifiers:** bootp (1)
> **Speakers:** - [instructor] (1)

#### [Setting up exclusions](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-exclusions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-exclusions?u=76281980&t=0)** - [Instructor] An exclusion is different from a reservation because an exclusion has a device that has a statically set IP address already. Reservations allow us to set an IP address that a device will always use every time it reboots. If I go into my address pool, I can see there's already a range of IP addresses that are going to be excluded from distribution. So that means that .225 through .227 will not be assigned to any client device because they're already statically set and it falls within that pool. So for instance, if I set up an exclusion outside of the .220 through the .235, it will just give me an error saying that's not within the range of the pool. So what I'm going to do is choose to create a new exclusion range, which has other IP addresses in it. So I'll put in 192.168.21.228 through 192.168.21.229. In a large scope, you might see multiple different little ranges or individual IP addresses that are going to be excluded from the pool because of those devices that are statically set. So I'm going to click add and close. If I'd like to delete a previously set up exclusion, I can just right-click on it and choose delete. I'm going to click over on the address leases and see if any of the IP addresses that have already been handed out are in that 228
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-exclusions?u=76281980&t=93)** or 229 range. And we see that they are not. If we did see any here, all we'd have to do is just right-click on any of those leases. And I'll do that to this desktop lease that you see here and choose delete. And then when that device gets an IP address after this, it will get it outside of that exclusion zone. [DHCP](../../Glossary/Standard/DHCP.md) exclusions solve the problem of what to do when you have statically set an IP address and it cannot be changed for a specific reason, but you also don't want to create a duplicate IP address with another device.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (1)
> **Versions:** 192.168.21 (2)
> **UI Navigation:** right-click (2)
> **Prerequisites:** set up (2)
> **Env Vars:** dhcp (1)
> **Definitions:** means that (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Import and export databases](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/import-and-export-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/import-and-export-databases?u=76281980&t=0)** - [Instructor] Sometimes we need to retire an older [DHCP](../../Glossary/Standard/DHCP.md) server and replace it with a new one, but we don't want to have to go in and recreate all the different DHCP configurations that we've already done. So we can back up and restore to a new server. Let's start by adding the new server. I'll right-click on DHCP in my management console and click to add server. Now I'm going to choose the authorized DHCP server called DC2 and click OK And I can see there's nothing yet configured on here, there's no DHCP address pool, or server options, or anything else. So I want to import that information from DC01 one into DC2. So I'm going to right click on DC01 one and choose to backup. And you want to choose the default location, which is the system 32, DHCP and then backup folder. And the reason for that is because it has all the correct permissions needed for a backup and restore. If you try to use any other location you may end up getting an error. So I'll click OK, and there is no confirmation that it has been backed up, but it usually only takes a few seconds. Now I'm going to go to DC2 and I'm going to right-click and I'm going to choose restore. And once again, I'm going to choose the default location and click yes, and it says the database was restored successfully. So I'll expand my IPv4 and take a look at my scope, and there it is. I want to make sure I deactivate the existing scope,
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/import-and-export-databases?u=76281980&t=95)** so that way we don't have any duplicate IP addresses, click Yes, and we can also see our scope options have imported as well. Backup and restore serves two purposes, one is to back up the database in case of a disaster, and the other is to use the database to populate a new DHCP server with all the configuration options of the existing one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (7)
> **Env Vars:** dhcp (7), dc2 (3), dc01 (2)
> **UI Navigation:** right-click (2), click on (1), go to (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Scope reconciliation](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/scope-reconciliation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/scope-reconciliation?u=76281980&t=0)** - [Instructor] As time passes, you may experience what's called [DHCP](../../Glossary/Standard/DHCP.md) drift. And that means the contents of the DHCP database no longer reflects what's actually happening on your network. There's not a lot of documentation on this, but we can use the DHCP management console to reconcile our database fairly easily. So we'll open up the DHCP console, and I'll expand the server, and I'm going to go to the scope and right-click on the scope, and choose Reconcile. Now we don't see anything in there. So I'm just going to click on Verify to confirm. And it says the database is consistent. If you were to get a message that said the database was not consistent, you would have the opportunity to fix that. And then that would make it so all the [Databases](../../Skills/Software%20Development/Databases.md) matched up properly to the computers to which they're assigned. Reconciling a scope is a quick process to make sure your database is consistent.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (4), [Databases](../../Skills/Software%20Development/Databases.md) (1)
> **Env Vars:** dhcp (4)
> **UI Navigation:** go to (1), right-click (1), click on (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [DHCP troubleshooting](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=0)** - [Instructor] Sometimes our [DHCP](../../Glossary/Standard/DHCP.md) server doesn't work the way we expect it to, or isn't working at all. So, I'm going to show you several different ways you can check to make sure your DHCP server is working as it should. If the server is not running, then you're definitely going to have a problem, and you can certainly go in and go to all tasks after right clicking on your server and make sure that it has started. You can also choose to restart, which does clear up some issues when you have problems getting IP addresses out to clients, and the service is restarted. Another thing you want to check for is to make sure that your server is authorized. If you right click on your server, make sure it says unauthorized. That means it's already been authorized. If it doesn't say that, then go ahead and choose to authorize it. A lot of times we just run out of IP addresses on our scope. So, if I go to the scope and I go to leases, we can see I have leases from 220 to 231. And if I go to the address pool, my pool is 220 through 235, and there's a couple of addresses that are excluded from distribution. So, in my case, I just have a few IP addresses left. So, it would probably be a good idea to expand my scope, and I can do that by going to the properties of the scope, and then typing an IP address that is further down the line. You should also take a look at the least duration. Having it there for eight days is too long, and that's because a user may come in
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=93)** with their mobile device or with their laptop, they'll get an IP address, they'll leave, and then that IP address is stuck for the next eight days. If you change it to one day, you'll likely have less chances that you'll run out of IP addresses. Another thing I've seen is if we go to the address leases and you see something called a bad address, so that does happen sometimes. Sometimes I see dozens of them and you can just go to those addresses, select them, right click, and then just choose delete, and that will clear them out of there and release those IP addresses back. Bad addresses can happen sometimes when devices that are not [Windows](../../Glossary/Service/Windows.md) devices, such as [Android](../../Glossary/Sdk/Android.md), Macintosh, iOS devices, things like that. Sometimes they don't register properly and they show up as bad devices and they just get stuck there. If you have a lot of static IP addresses in your network, make sure that you have a static list of excluded IP addresses. Otherwise, you may end up with IP addresses that are duplicated on the network and that can cause a lot of problems as well. If your staff are getting IP addresses, but they can't get out to the internet it could be when you go to scope options that they're pointing to DNS servers that are no longer valid, maybe they've been retired. It could also be that your router is either set to the wrong IP address, or there's no router set. Now, you need to have the router set in order to get out to the internet. That's your hop out to the outside. And if this is set properly and you still can't get out, check to make sure that the firewall and the gateway router are functioning properly. You want to make sure that your firewall is also listening
>
> **[3:09](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=189)** on the proper ports, so I'm going to go to control panel, and I'm going to go to the Windows [defender](../../Skills/Network%20and%20System%20Administration/Microsoft%20Defender.md) firewall. You could also just go to the search box and type in firewall as well. I'm going to go to the advanced settings, and then go to inbound rules and I've scrolled down to DHCP. So, take a look at all these DHCP Firewall rules. You want to make sure that the version four, or the version six, depending on which one you're using, have the firewall rules enabled, and if you double click on those you can actually see which ports they're listening on. You see here 67, and this is for UDP, and the other port should be listening on 68. So, if I go to protocols and ports, that one is UDP 68. So, this one is listening properly. If your users are getting IP addresses outside their normal scope, such as a 172 address, when you're using a 192 address, then the likely issue is that you have a rogue DHCP server in your network, and that it may be running [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) or some other operating system. There are many different reasons for DHCP to not work as expected, but if you go through this list of potential issues, you'll likely find the reason for the outage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (6), [Windows](../../Glossary/Service/Windows.md) (2), [Android](../../Glossary/Sdk/Android.md) (1), [Defender](../../Skills/Network%20and%20System%20Administration/Microsoft%20Defender.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **UI Navigation:** go to (12), click on (2)
> **CLI Commands:** make (8), find (1)
> **Env Vars:** dhcp (6), udp (2), dns (1)
> **Analogies:** such as (2)
> **Code Identifiers:** ios (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### [DHCP filters](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=0)** - [Instructor] In IPv4 scopes we see the option to set up an allow or deny filter. And what this does is it makes it so we can say that certain computers are not allowed or only certain computers are allowed to receive an IP address from our [DHCP](../../Glossary/Standard/DHCP.md) server. So I'm going to start with the allow. I'm going to go to more actions on the right hand side and choose a new filter. And here we see the MAC address and a description if you'd like to do it. So we need to get a MAC address before we can go ahead and apply this filter. So I'm going to go to, say, command prompt. You could also go to [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md). And I'm going to get a list of various different MAC addresses in my network. So there's all my different IP addresses. Let's say I would like to take one of these IP addresses and say, you cannot get an IP address from my DHCP server. So I'm going to select this physical address, which is also known as the media access control or MAC address that's burned into every network card on a computing device. And I'll copy it and I'll paste it in. And I'll say, this is called computer Z. Now this particular filter is an allow filter. So that means that if the DHCP server sees this MAC address then it's going to allow it to have a DHCP IP address. The problem is, is that if I only put in this one computer it means that all other computers are going to be denied. So I don't necessarily want to click out on here.
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=95)** I will just for example purposes. Because it's going to make it so only the computer that's in this list are going to be able to receive an automatic IP address from this DHCP server. So I'm going to right click on that and choose delete. Now I'm going to do the same thing, but I'm going to do it in the deny section. So I'm going to go to more actions, click new filter, this time I'll paste in that same MAC address and I'll give it the same name and I'll click add. Now this does the opposite. What this does is this says all computers are going to be allowed to receive an IP address from this DHCP server with the exception of any computer that's in the deny list. And in this case, I just have the one computer. So this computer will not receive an IP address from DHCP. I also need to go over to more actions and choose to enable if I want to have that start. Otherwise the list will be there but it won't actually start working until you enable it. And if you change your mind, you can just go back in and disable it. Or you can right click and you can delete those filters. MAC address filters in a computer network can keep unknown or unwanted devices from being added into DHCP, which can increase your [Network Security](../../Skills/Cybersecurity/Network%20Security.md).

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (8), [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (1), [Network Security](../../Skills/Cybersecurity/Network%20Security.md) (1)
> **Env Vars:** dhcp (8), mac (7)
> **UI Navigation:** go to (4), click on (1)
> **Definitions:** means that (2), known as (1), is called (1), is an  (1)
> **Tools:** command prompt (1), powershell (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)


### 4. Advanced DHCP

[↑ Back to Table of Contents](#table-of-contents)

#### [DHCP failover and high availability](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-and-high-availability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-and-high-availability?u=76281980&t=0)** - [Instructor] [DHCP](../../Glossary/Standard/DHCP.md) failover allows us to fail over from one server to another by having two DHCP servers and right clicking on one server and creating a failover on another. This will give us failover from one to the other as needed. High availability is a bit different than failover. Having a failover server does create high availability because the service is available in case of a single server failure, but we can create high availability without failover as well. And we do this by creating a scope on two or more servers that don't overlap each other. If one server fails, then the other server continues to serve IP addresses but does so in a scope that doesn't overlap the first. [Windows](../../Glossary/Service/Windows.md) is unique from many other DHCP servers in that it offers multiple ways to create high availability and redundancy in a DHCP configuration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (4), [Windows](../../Glossary/Service/Windows.md) (1)
> **Env Vars:** dhcp (4)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [DHCP failover setup](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=0)** - [Instructor] A great way to add high availability and redundancy in your [DHCP](../../Glossary/Standard/DHCP.md) server is to add failover. I'm in DC01 and I'm going to create a failover with DC2. So I'm going to right click on the scope for DC1. And I'm going to click on configure failover and a wizard comes up and it finds the available scopes. If I had multiple scopes, then I can choose which ones I want by unselecting the select all option. But since I just have the one, we'll go ahead and choose that and click next. Now I need to find my partner server. So I know my partner server is called DC2. So I'll click on add server and I'll choose DC2 from the list and click next. Now I have the options for the mode. I can choose load balancing or hot standby. Load balancing means that both servers will be active. Hot standby is one server's in active mode and the other one is in standby mode. So it won't actually hand out in the IP addresses until it discovers that the first server is down for some reason, such as a reboot or a crash, things like that. Then you have the maximum client lead time which is how long it's going to wait before it determines that there's some sort of an issue. After that, we have the load balancing percentage and we can see by default, it's set to 50/50. So if you decide you want to have more load on a server that can take more load, then you can change that to 80 and have the other server 20 or whatever percentage you would like. Then you have the state switchover interval. The first option at the top is the lead time.
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=95)** That just has a determination of when there's an issue discovered. The other is when it will actually switch over. If I uncheck this, it will switch over as soon as it discovers there's a problem. If I check the box and I can determine how many minutes before it actually switches to the other server. I'm going to put in a shared secret. And that will be shared between the two servers. And it shows me the summary page, I'll click finish and it says everything was successful. So now it's good. When I go back to my IPv4 on my DC2 server and hit refresh, we can see it's gone ahead and copied my scope one over to the other server. And now you can see it's going to be in active active mode load balancing so that way it will go back and forth between the two servers based on the percentage that I set up. Another option is to use something called server clustering and add the DHCP role to the cluster. This does roughly the same thing as failover but it allows for many more redundant servers. Failover is a quick way to add redundancy and failover to your DHCP configuration.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (3)
> **Env Vars:** dc2 (4), dhcp (3), dc01 (1), dc1 (1)
> **UI Navigation:** click on (3)
> **Definitions:** is called (1), means that (1), is a  (1)
> **Prerequisites:** configure (1), set up (1)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Analogies:** such as (1)

#### [DHCP relay using switches and routers](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=0)** - [Instructor] [DHCP](../../Glossary/Standard/DHCP.md) Relay on a [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) allows the [Windows](../../Glossary/Service/Windows.md) DHCP server to connect to client computers in other VLANs and subnets and give them IP addresses when requested. So first we start out with the Windows DHCP server and we have the layer 3 switch in [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) mode or an actual router. And we add in the DHCP helper command to forward any request to that Windows DHCP server. After that we have the clients, so when the DHCP clients start up they're going to want an IP address so they can communicate with the [local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md) as well as the internet and other subnets. So they make a request, they send out this request asking any device that can take the request to assign them an IP address. The switch or router will then pick up on that request and because of the DHCP helper command that's in the configuration, it will forward that on to the DHCP server that's in the other subnet or VLAN. The Windows DHCP server will then send the IP configuration off through the layer 3 switch or router to the DHCP clients and it will assign them an IP address as well as the gateway DNS and any other scope options. I'm in a Cisco router and here I can show you the command for ip helper-address followed by the IP address of the Windows DHCP server. And when entering that command, it will then forward
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=94)** on any request from its subnet to the Windows DHCP subnet. Back in the DHCP manager, we see that there's only the one scope for my local area network. So I need to add a scope for the other network and I'll right click in my IPv4 and choose to create a new scope and the new scope wizard once again begins, and I'll call this one RemoteScope for the other local area network and click next, and I'll put in my starting and ending IP addresses and then of course the length and the subnet mask are going to stay the same, click next. And I'll go ahead and change that to one day and I will configure the router and I'll leave the DNS servers the same way that they are. There are no WINS servers and I will activate the scope. And there's the second scope, which is now referred to as the remote scope for the other LAN. There's still another step we need to take and that is to go into server manager and go into add roles and features. And we'll go in and add the remote access role, so I'll click next, choose my server, continue, and then choose remote access. This going to add routing and remote access into our tools menu and server manager. The main thing we need here is going to be routing.
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=190)** It also will add in the direct access and VPN, but that's okay. And now we'll click install. This server role is going to be required in order to set up the DHCP relay that we need to send DHCP IP addresses from this server into the other network. And the installation's complete, so I'll go to tools, routing and remote access and the new management console will show up and we're going to set up some LAN routing configurations. So I need to start by choosing to configure and enable routing remote access. And another wizard appears, I'll choose custom configuration and then LAN routing and click finish. And now it's going to prompt me to start the service, and once it started, we'll see all these new options. The service has started, you can see that it's turned green and now what I would like to do is expand IPv4 and then go to general, next I'll right click on general and choose a new routing protocol and I'll choose the DHCP relay agent which is already selected and click OK. Next I'll click on DHCP relay agent, right click and choose a new interface. Now, I've got two different interfaces, if you just have the one, you'll only see the one option. And I know that I want to choose the internal because this is going to be internally routed to that other location, I'll click OK,
>
> **[4:44](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=284)** now we have the hop count threshold and the boot threshold, the hop count threshold basically says how many hops it will go before it drops the DHCP relay request. So at this point, it's set to four. You may want to increase that if there's more than four hops that will go to that to particular location. And you may also decide you want to increase the boot threshold as well, so that way it gives extra time in order to communicate before that will be dropped and then I'll click OK. Now the interface is enabled. Now what's going to happen is the client is going to request an IP address, it's going to go to that Cisco switch or router and it's going to request an IP address from wherever IP helper is pointed. That will point to this particular DHCP server and using the routing and remote access DHCP relay agent, it will relay that IP request back to the client.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (20), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (9), [Windows](../../Glossary/Service/Windows.md) (6), [Local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md) (3), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (1)
> **Env Vars:** dhcp (20), lan (3), dns (2), vlan (1), wins (1)
> **UI Navigation:** go to (4), click on (2)
> **Prerequisites:** configure (2), set up (2), install (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Routing using DHCP](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/routing-using-dhcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/routing-using-dhcp?u=76281980&t=0)** - [Instructor] There are some scenarios where you're going to want to set up a static route that allows a client to go from one subnet to another using [DHCP](../../Glossary/Standard/DHCP.md) to set that up. Here we have a layer three switch or router that's connecting two different subnets. I have a wired client and this wired client is going to need an IP address and some static [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) information. So it looks to the layer three switch to find the DHCP server, which it does. The DHCP server then hands not only the client an IP address, subnet mask and gateway, but also a classless static route to our other network where our client can then access the file server in the other subnet or VLAN. And we can do that right from our DHCP server. I'm in DHCP manager in my scope options. And what I'm going to do is right click and choose configure options. And then I'm going to scroll all the way down to the classless static routes and check that box. And then I'm going to click on the add route option. Now, what this is going to do is it's going to give me the route to this other network. And that network is going to be 192.168.22.0 with a subnet mask or network mask 'cause it's also known of 255 three times and zero. Now we need to know what router is going to get us to that 22 network because we're on the 21 network. And my router is at 21.1.
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/routing-using-dhcp?u=76281980&t=95)** So if I need to get to a server that stays on 192.168.22.100, it's going to go through the 21.1 gateway off to the 22 network and then on to that 22.100 server. Now why is it called classless? It's called classless because we don't have to stick with the typical class that a specific IP address has. So for instance a 192.168 network is typically a class C network. It doesn't have to be. I could change the subnet mask to 255.255.0.0 which would typically be a class B network. But because it's classless, it's not going to be labeled as A, B or C. It's going to use that subnet mask or network mask to go ahead and decide how many usable hosts it's going to have in that network. And in this particular case, it's hosts one through 254 or 254 addresses. I'll go ahead and click OK and OK again. And there's my classless static route. Classless static routing using DHCP is sometimes easier to use instead of setting up routing on multiple devices.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (6), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (3)
> **Env Vars:** dhcp (6), vlan (1)
> **Versions:** 192.168.22 (2), 21.1 (2), 22.100 (1), 192.168 (1), 255.255.0 (1)
> **UI Navigation:** switch to (1), click on (1)
> **Prerequisites:** set up (1), configure (1)
> **CLI Commands:** find (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [DHCP policies](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=0)** - [Instructor] By setting up [DHCP](../../Glossary/Standard/DHCP.md) policies, we can provide granular control over scopes that will allow us to assign different IP addresses or scope options based on a new device type or its role. Policies are applicable for a specific scope with a defined processing order. Inside my scope, I'm going to go to where it says IPv4 and right click and choose to define vendor classes. It already has some pre-defined policies for things like [Windows](../../Glossary/Service/Windows.md) 2000, Windows 98, things like that. I'm going to click on add to create a new one. And I'm going to use this for my Nortel phones. This may be one of the times where you need to create a new class because no existing class is going to assist you in setting this up. Under the description I'll put in desk phones. And in the ask E section, I'm going to put in what Nortel tells us to add in. This is one of the things that you'll need to do as assist admin if you are managing DHCP. You'll need to look to the vendor when you see a new type of class because they're going to tell you what you need to type in. So I'll put in Nortel-I2004-A and click OK.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=80)** Now I can see my Nortel phones. I can go ahead and click close. Now it's time to go over to policies and create a new policy by right clicking and choosing new policy. And we get a wizard that shows up. I'll call this policy one and click next. Now I'm going to click add under the configure conditions for the policy. So for the criteria, this is going to be a vendor class. And once again, you'll get this information from the vendor themselves on what criteria they need inside this new configuration wizard. And I'll leave the operator as equal. So if you hit the dropdown, you also have the option for not equals. Then for the value, I'm going to hit the dropdown again and choose Nortel phones, which I just created. Once that's done, I'll click add. And as far as the prefix or the append wild card, you'll need to follow the directions once again from the vendor. So I'll click OK. I'm going to click next. And now we see a lot of different options here. These are the same options that you would see if you right clicked on your scope options and just went ahead and clicked on configure options. So if the vendor does require any of these options for the Nortel phones in this particular example, then you would check the boxes and then you would type in whatever it is that they said needs to be typed in. So I'll click next and everything looks the way I expect. So I'll click finish and there's my policy. There are dozens of policies that can be created on a Windows DHCP server. You may find you need to add a new option when you purchase devices
>
> **[2:54](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=174)** from a new vendor that requires DHCP policies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (4), [Windows](../../Glossary/Service/Windows.md) (3)
> **Env Vars:** dhcp (4), i2004 (1)
> **Prerequisites:** you'll need (3), configure (2)
> **UI Navigation:** dropdown (2), go to (1), click on (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### [Split scope](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=0)** - [Instructor] Failover allows us to replicate a scope from one [DHCP](../../Glossary/Standard/DHCP.md) server to another, but we can also do a different type which adds redundancy in case one of the servers goes down. And that is called a split scope. I'm going to do a manual split scope here. We can see here's our Scope1 already set up with an address pool of 192.168.21.220 through 240. Let's say that I don't want to necessarily have one server handle all those. So I'm going to change this to only go to 230 instead. Now, I'm going to create another scope, but this time, it's going to be on dc2. So I'll create the new scope. And I'll call this one Scope2, click Next. And I'll put in my IP addresses, 231 to 240.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=57)** So this covers the other IP addresses from that original scope that I had removed. I'll click Next. And I'll just go ahead and go through this portion but without any type of special configuration, just to show how the scope works. So now we can see on my dc2 that my scope is set to 231 through 240. And my scope from the dc01 is from 220 to 230. I'll need to activate my scope. I right clicking on it. And now I have a split scope. So what's going to happen is, it's going to assign the IP addresses using whichever server is going to respond first. So if dc01 is the first one to respond, it'll hand out one of its IP addresses. If dc2 does, it'll hand out one of its IP addresses. And then if for some reason dc01 goes down, then dc2 will be the only server that hands out IP addresses. And the advantage of the split scope is, these scopes don't overlap in any way. They are in the same subnet, but they don't overlap each other so you cannot accidentally give out the same IP address twice. You can also more easily edit one server or the other compared to a failover type of high availability. And that's because when you edit one in a failover, it goes ahead and edits the other as well. This way, I could go in and I could change my scope by right clicking and then going to Properties, and then I could say this one's going to go now to 245.
>
> **[2:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=153)** And it doesn't affect the original one at all. Splitting the scope into two servers does require a bit more management as you now need to monitor two servers instead of one for any type of failure.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (1)
> **Env Vars:** dhcp (1)
> **Versions:** 192.168.21 (1)
> **UI Navigation:** go to (1)
> **Definitions:** is called (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 5. DNS Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [DNS importance with Active Directory](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-importance-with-active-directory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-importance-with-active-directory?u=76281980&t=0)** - [Instructor] [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md), domain services uses [domain name system](../../Skills/Network%20and%20System%20Administration/Domain%20Name%20System%20(DNS).md), name, resolution services to connect clients to domain controllers and for the domain controllers that host the directory services to communicate with each other. It has features such as active directory integrated DNS zones, and it makes it easier for us to deploy DNS by eliminating the need to set up secondary zones and then configure zone transfers and replication. DNS makes it possible to translate names to IP addresses. These names are called records and they are located in zones on a DNS server. They can be managed through the DNS manager on a [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md). Prior to active directory, DNS wasn't that important to managing users back in the NT 4.0 days. Once active directory was invented DNS became an integral part of active directory to the point where active directory can't run without DNS. Active directory will always be dependent on DNS and understanding how those two services work together can make a potential Sys admin highly employable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (7), [Domain name system](../../Skills/Network%20and%20System%20Administration/Domain%20Name%20System%20(DNS).md) (1), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (1)
> **Env Vars:** dns (9)
> **Prerequisites:** set up (1), configure (1)
> **CLI Commands:** make (1)
> **Versions:** 4.0 (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### [DNS manager overview](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=0)** - [Instructor] When we have a domain controller and a [Windows](../../Glossary/Service/Windows.md) [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) domain and forest, it automatically adds in the DNS server. This particular server is a domain controller. If I open up active directory users and computers, I go to domain controllers, and you can see my two domain controllers. Minimize, and now I'll go to tools, and I'll go to DNS. This opens up the [DNS Management](../../Skills/Network%20and%20System%20Administration/DNS%20Management.md) console, and here I can see my active directory forest and domain DNS zones. This is the actual DNS zone for the domain. However, this MSDCS domain, and that domain replicates automatically with every other domain controller in the domain and forest. So you don't want to delete or make any changes to this particular zone that you see here. This zone, you can make changes to. You can right click and create some new records, you can go to reload the zone, you can refresh, you can do all different kinds of things, you can even go into properties and make changes on any one of these six tabs. I've gone ahead and added the other domain controller as well. It also has DNS on it because it is a domain controller. And it has replicated all the other records from the first domain controller to the second domain controller. So we can see the same two zones, and the same records as well. If we had any other zones such as reverse lookup or any other configuration, then it would replicate there as well
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=93)** as long as we created the zone as an active directory integrated zone. This is one of the options that you have if you decide to create any new zones. So you can see here under the type it is active directory integrated. That means it's going to be replicated to all other DNS servers in the domain. The forward lookup zones will resolve names to IP addresses. So for instance, you can see a host record has a name of file server. File server is the name that you want to reach and it will automatically translate that to the IP address so it can open that up by IP address although you don't have to memorize that, you only have to know the name of the server. The reverse lookups which we don't have any yet do the opposite, they go from IP address to name. And there are certain applications, certain utilities, things like that, that like to use reverse lookup zones. You don't have to have them, but if you do have them, sometimes it makes DNS resolution much faster. Then there are things called trust points and conditional forwarders. A trust point is also called a trust anchor and this is going to be a public cryptographic key for a signed zone. So if we sign our zone, that basically is going to encrypt that zone traffic then it's going to keep the key in this trust point area. Now, if we click on the conditional forwarders, what this does is it allows us to forward any traffic to a specific zone. Whereas if we do a forwarder in the server itself
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=187)** by going to properties and forwarders, what this does is it sends off traffic for anything that's not found internally off to a public resource. But with a conditional forwarder, you can send off just specific zones rather than all zones that aren't local. There are a lot of great things to learn in Windows DNS. Knowing DNS well can make you highly employable in the IT field.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (5), [Windows](../../Glossary/Service/Windows.md) (2), [DNS Management](../../Skills/Network%20and%20System%20Administration/DNS%20Management.md) (1)
> **Env Vars:** dns (10), msdcs (1)
> **UI Navigation:** go to (4), click on (1)
> **CLI Commands:** make (4)
> **Definitions:** is a  (2)
> **Analogies:** such as (1), for instance (1)
> **Speakers:** - [instructor] (1)

#### [Important Active Directory DNS records](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=0)** - [Instructor] I want to demonstrate what are the most important records in a DNS zone when it's created. Now, in this particular DNS zone, it's on an [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) domain controller. So, we have these particular zones, the LIL.int, as well as the msdcs.LIL.int. And these particular zones on a domain controller mean that these records can be changed by whoever is logged in with administrative rights. And you're going to see two different records here that are really important. The first one is the start of authority. This means that if you have this record in the zone, on your server, you can make changes to this particular zone. So, for instance, I can go in and I can create a new record or I could take a record that already exists and I can go in and just delete it. And you cannot do that if this is what's called a secondary zone. A secondary zone has a read only copy of the zone. Another type of zone which is read only is called a stub zone. Neither of these zones are going to have the start of authority within their particular zone. Instead, they're going to be pointing back to this particular server or to DC2, which also has that same start of authority record. Let's take a look at another important record and this is going to be the name "Server Record." The name "Server Record" basically tells anybody who's asking who has the zone for this particular record
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=96)** that it is located in this particular server. So if, for instance, if I want to know where file server is and what its IP address is, then I'm going to put out a request for a name server. Where's the name server for fileserver.LIL.int? Where is that IP address? And then when you put out that request, you can see either one of these two servers DC01 or DC2 are going to respond and say, "We have those records." And then supply it to your computer so you can get to file server to look up your files. Let's take a look at some of these different folders. When you double click and drill down, you're going to see some other important records. And one of those is going to be the GC. The GC is going to point to wherever the global catalog is. The global catalog has a copy of all of the different objects and passwords in active directory on a domain controller. And once again, we can see there's a GC record or global catalog record for DC01, as well as for DC02. If there's any other servers that are added in the future, those will be added here, as well. And then we also see something else called "Kerberos." Kerberos is used for authentication. So, when you type in your username and your password, even if you have multifactor authentication, it's going to find out where the Kerberos servers are. And again, it's going to look for the domain controllers DC01 and DC2, and then they're going to then communicate with active directory and authenticate
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=190)** your username and password so you can log in. So, you can see how important having a Kerberos record is. And then, the last one is going to be the LDAP record. This stands for Lightweight Directory Application Protocol. And what this is, is a lookup record. When once again, you go to log in, it's going to need to know what server has all this information on it. So, it uses LDAP to look that up. Now, I've used LDAP in other operating systems besides [Windows](../../Glossary/Service/Windows.md), for instance, I've used a [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) spam filter, and when an email comes in for a user, it uses LDAP to find out if that user exists in active directory. And if they do it will forward on that email to their particular mailbox as long as it's not marked as spam. And it needs that LDAP record to find out where the LDAP servers are. All domain controllers are going to be all three. They're going to be by default, a global catalog, a Kerberos, and an LDAP server. It doesn't mean you have to have those. It just shows up there by default, and you need to have at least one that the users devices will be able to reach. Otherwise, these services won't work. Important DNS records shouldn't normally be changed, deleted or edited unless corruption or accidental deletion has already taken place.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (4), [Windows](../../Glossary/Service/Windows.md) (1), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (1)
> **Env Vars:** ldap (7), dns (3), lil (3), dc2 (3), dc01 (3)
> **CLI Commands:** find (3), make (1)
> **Definitions:** means that (1), is called (1), stands for (1), is a  (1)
> **Analogies:** for instance (3)
> **UI Navigation:** go to (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)


### 6. Deploying DNS

[↑ Back to Table of Contents](#table-of-contents)

#### [Install DNS on a member server](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-dns-on-a-member-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-dns-on-a-member-server?u=76281980&t=0)** - [Instructor] Although DNS gets installed automatically on a domain controller. That's not the case for a member server. I'm on a member server called File Server and I'm going to go ahead and add the DNS role by going to server manager and, add roles and features and keep clicking next until I get to the DNS option. So I'll go ahead and check the box for DNS server and then click add features., click next. We can skip the additional features and click install. Having a DNS server on a non domain controller allows us to create zones or even replicate zone traffic from one domain server to this particular file server. This gives us additional redundancy for DNS services in case we need it. After DNS is installed on this member server you're going to find there are no zones when we open up DNS manager on this particular server. So we'll need to add zones or we can replicate zones from the domain controller. I'll click close, go to tools and then go to DNS. And now we see file server with zero zone, zero configuration on it. I can also right click on the DNS server and choose to connect to another DNS server just as I did on the DCLone server. And there's my other server. I could also add DCtwo as well. This makes it a little bit easier if I decide
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-dns-on-a-member-server?u=76281980&t=93)** I want to create secondary zones that replicate with the file server because I can set it all up from one location. Adding DNS to a member server can add redundancy and load balancing to DNS zones in a [Windows](../../Glossary/Service/Windows.md) domain and forest.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (1)
> **Env Vars:** dns (13)
> **UI Navigation:** go to (2), click on (1)
> **CLI Commands:** find (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Client DNS configuration](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=0)** - [Instructor] A DNS forwarder is an IP address that we can add into our DNS server properties to let us know when there's a request for something outside of our [local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md), that they can go out and find out the resolution from this forwarding address. So I'm going to right click on my file server, go to properties, and then I'll go to the forwarders tab and I'll click edit and put in the [Google](../../Glossary/Service/Google.md) public DNS server. Now, how do you know which one to use? Well, you can get a list from your internet service provider, the DNS servers that they have, or you could just use a public one from Google or some other source. One way you can tell which one is faster is by doing a traceroute. So we do a traceroute -d just so it doesn't resolve all the names. It goes a little faster that way. And we put in the 8.8.8.8. And when it gets to the end we'll know how many hops as well as how fast it is to get to that particular location. And here I see that it was 10 hops and it was a pretty quick response with four to 18 milliseconds. I'm going to do the same thing, but this time I'm going to use my internet service provider's DNS server and see how many hops that is and what the speed is. Anytime you see those stars, it typically means that there was no response for that request. And sometimes you're not going to see the response at all. It's just going to go right onto the next hop.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=94)** And that just may be because it's the way it's set up. And here we see that my internet service provider was only seven hops away and it was an even faster response. So in this case, it would make more sense to replace the 8.8.8.8 with this 71 address that you see here. Now, you can also add that as an additional one as well. So I can just go ahead and copy that address and then go into my DNS forwarders and I can change the order in which it looks as well. So I'll click on edit and then I'll paste it in. And then I'm going move this one up to the top. And don't worry if it doesn't say it resolves. It's just sometimes going to be a little bit of a delay. But there we go, it went ahead and found it. I click apply and now it's done. So if I am a client looking to get into a particular server, so for instance, I do ping li-dc01. It's going to use the internal DNS server for that. But if I want to go to, say, Google, that's not internal, that's external. So it's going to use my DNS servers to go find out where Google is out on the internet rather than using the internal one. And it does that because of forwarders.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (4), [Local area network](../../Skills/Network%20and%20System%20Administration/Local%20Area%20Network%20(LAN).md) (1)
> **Env Vars:** dns (8)
> **UI Navigation:** go to (3), click on (2)
> **CLI Commands:** find (2), make (1)
> **Versions:** 8.8.8 (2)
> **Definitions:** is an  (1)
> **Analogies:** for instance (1)
> **Prerequisites:** set up (1)

#### [DNS forwarders](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=0)** - [Instructor] DNS server logging can be seen if you go to Tools and then go to the Event Viewer. And then we can see a special log just for the DNS server. It will give us a good idea of what's happening. We see some informational type of logs, error logs. You might see some warnings as you see here. And you might even see some critical logs as well. If I go into the error log, we can see that there were some issues with records expiring. And we can go and resolve that if we'd like. We can look up the errors on a web search. And we can then resolve them. However, it doesn't tell us the whole story. We can also take a look at another type of logging. And if we go into the [DNS Management](../../Skills/Network%20and%20System%20Administration/DNS%20Management.md) console, and I'm going to right-click on File Server for instance and go to Properties. There's a debug logging. So if you're really having trouble with your DNS services, then you can check the box for log packets for debug and then you can go ahead and check which boxes you'd like to add in for that debug logging. Debug logging is different than standard logging because it logs everything. Anything that happens, you're going to see it logged and it's going to log it typically in a text file. And you can type the path to that text file here. So for instance, we can see packets going, outcoming or incoming. We can see TCP or UDP. We can see the packet contents as well. And we can check some other boxes that you might see here, such as filtering packets by IP address.
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=95)** So if we just want to see debug packets for a specific IP address, you can filter those particular IP addresses out. I've gone ahead and enabled debug logging on DCO1. Let's take a look at what that log file looks like. This has only been enabled for about 20 minutes. And there's not a lot of traffic going on but we can see, despite that, there are a lot of log files here. It may take a little bit of time to learn how to understand what it is that you're seeing here. But in general, we can see the date, we can see the time, we can see the IP address that's being affected. There's the type of record such as the SOA record, which is the start of authority, and the zone. In this case, it's the MSDCS zone, which is one of the two domain zones that you get when you install [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) on a server, which would make that a domain controller. Also take a look that it says no error on most of these. So basically it's just going to record any type of traffic that goes back and forth, whether it's an error or not. And if there is an error, then you'll see it here. And then you can look that error up. You shouldn't leave debug logging on when you don't need it because it could fill up your hard drive and slow down your server if left on too long. Debug logging can be very useful when troubleshooting a problem that may be difficult to fix by looking at the standard logs alone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DNS Management](../../Skills/Network%20and%20System%20Administration/DNS%20Management.md) (1), [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (1)
> **Env Vars:** dns (4), tcp (1), udp (1), dco1 (1), soa (1)
> **UI Navigation:** go to (3), right-click (1)
> **Analogies:** for instance (2), such as (2)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 7. DNS Zones

[↑ Back to Table of Contents](#table-of-contents)

#### [Forward DNS zones and AD integration](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=0)** - [Instructor] When we ping a name of a server, such as fileserver, we're using what's called a foreword lookup zone. It's looking up the name to the IP address. And that uses what's called an A record inside that zone. So if I expand one of my domain controller's DNS zones, we can see fileserver is here and it shows what I just pinged. I pinged the fileserver and it shows me the IP address. It worked exactly as it should. But you can also add additional zones. Let's say you're also hosting say a website and it's not using the same domain name as your domain controller. So what I can do is I can right click on my server and choose a new zone. And we get the New Zone Wizard that pops up. Click Next. Now, we have the option for creating a primary zone, secondary zone, stub zone, and we can also choose whether or not to store it in [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md). If we leave it stored in Active Directory, it will replicate with every other domain controller. If we don't, then it will only stay on the one server. I'm just going to choose to have this on the one server. And I'm going to make it the primary zone because this is a brand new zone. So I can't create a secondary or a stub zone because I don't have the primary zone created yet first. So I'll click Next. And this is going to be a forward lookup zone. And now I'm going to give it the zone name. I'll just call it test.local. Click Next and we can see it's going to create a file
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=94)** with the file name test.local.dns. I could also choose to use an existing file if I have one. Under the allow dynamic updates, we have the option for allow only secure, allow both non-secure and secure or do not allow dynamic updates. Dynamic updates are when a computer joins a domain, just as an example, and then when it does so, it registers its name with the DNS forward lookup zone for the Active Directory zone. So for instance, fileserver, when I joined that to the domain, it went to fileserver.lil.int and it registered its IP address at .90, just as you saw earlier. When you're using a computer that's not joined to the domain, you don't need to worry about having dynamic updates because there's nothing to dynamically update. So I'll just go ahead and leave that turned off and click Finish. So what's going to happen is any time I need to add a record, it's going to be done manually. I won't have it done automatically, like I would in the DNS zone for Active Directory. And that is perfectly okay with me. Now, we see that when I create a brand new zone, it also creates those same two records that were created when an Active Directory zone was created and that is the name server record, so everybody knows where that name server is, and the start of authority so everybody knows who can actually make changes to this zone. Forward lookup zones are created first,
>
> **[3:06](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=186)** followed by additional zone records and possibly replicated to secondary and stub zones later on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (5)
> **Env Vars:** dns (3)
> **CLI Commands:** make (2)
> **Analogies:** such as (1), for instance (1)
> **Cross-References:** as you saw (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Reverse DNS zones and AD integration](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=0)** - [Instructor] I've created a forward lookup zone called test.local, and I also have a couple of other forward lookup zones that have the [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) domain zones listed in them as well. But now, I want to create a reverse lookup zone. A reverse lookup zone does the opposite of a forward lookup zone. A forward lookup zone does a resolution from names to IP addresses, whereas a reverse will do IP addresses to names. Do we need to have a reverse lookup zone? The answer is no. As a matter of fact, it doesn't even create one when you install DNS services in an active directory domain controller by default. However, if you have multiple domain controllers and you have multiple zones spread out over them, then it's much faster to resolve things when you have a reverse lookup zone because the reverse lookup zone's in charge of looking for the name server records. Now, if you have only one domain controller and you only have a few zones, then you're really not going to see any advantage. But in a larger enterprise, you're definitely going to see things speed up if you add a reverse lookup zone. So I'm going to right-click and choose to create a new zone. And just like with the forward lookup zone, you're going to see this wizard appear. So I'll click Next. Now, we need to have a primary zone to start with. The primary zone is a zone that has the ability to write and make changes. So you can't create secondary and stub zones, which are read only, until you create your first primary zone that has that writeable capability.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=92)** Now, beneath that we see the store the zone in active directory. I'm going to leave that box checked, and the reason for that is because I want that to replicate to my other domain controller, so if any client device, like a computer, wants to know the name server record for a particular zone, it will look to either one of my domain controllers. Now, this will not replicate to the file server, and that's because file server, although it's a DNS server, is not a domain controller, so it cannot replicate to that by default. However, I can go in and set up a secondary zone to have it replicate there in a read-only type of manner. So I'll click Next. I'm going to go with the default to all DNS servers running on domain controllers. That means it's going to automatically go to my DC2 when I'm done here. And this is an IPv4 reverse lookup zone, although I can create a IPv6 one, if I'd like. Now, I'm going to put in the network ID. We get the network ID from the first three octets of our subnet. So I'll do IP config. So the first three octets here are 192.168.21. So I'll go ahead and put that in. And click Next. And since this is going to be integrated with active directory, I'm going to leave the box checked for allow only secure dynamic updates. And I'll click finish. And there is my reverse lookup zone. And just as in a forward lookup zone, you're going to see both the name server and the start of authority records automatically created.
>
> **[3:06](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=186)** Now, let's take a look and see how that name server zone works. I'll clear my screen. And I'm going to type "NS lookup." And I'll put in my active directory domain zone. And it's going to use that reverse lookup to look up my name server record for my domain controllers that you see here. I can also use a ping minus-a command. So if I do ping minus-a, instead of putting in the name of the server, I can put in the IP address. So this time, I'll put in the IP address for my file server, and we'll see if it resolves, and it does. So reverse lookup zones do tend to have some good advantages if you choose to create them. Creating a reverse zone is similar to creating a forward zone and can definitely help with resolution in the enterprise.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (5)
> **Env Vars:** dns (3), dc2 (1)
> **UI Navigation:** right-click (1), go to (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** just like (1), similar to (1)
> **Prerequisites:** install (1), set up (1)
> **CLI Commands:** make (1)
> **Versions:** 192.168.21 (1)

#### [Secondary zone creation](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=0)** - A secondary zone is similar to a primary zone except for it's a read-only copy. So it's going to have a copy of all the different records that are in your primary zone replicated to your secondary zone. So what I'm going to do is I'm going to replicate the test dot local zone to file server from dc01. So we can see the start of authority is dc01. This is the only server right now that can make any changes to this zone. So I can add records, delete records, et cetera. First I'm going to right-click on test dot local and go to properties, and then I'm going to go to zone transfers. And I have a few options. I can either choose to any server, but that's not always the most secure way of doing things. Or I can choose only to servers listed on the name server tab. Here's the name server tab. And right now, only dc01 is showing up in the name server tab. So if I added in file server, then that would be one way I could make this work. The other option is to go to only to the following servers. This is really the most secure way of doing things because you can specify them, and you can go ahead and add or delete them as needed. So I'm going to put in the IP address for file server. Now it says it didn't resolve it, but that's okay. It actually will. And there you can see it did resolve it after a few seconds. Now I'm going to click okay. And that's done. Now I need to go up to my forward lookup zones and file server, and add in the zone. So I'm going to go to click next,
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=93)** and instead of a primary zone, I'm going to go and say this is a secondary zone. I could have multiple primary zones if I'd like, and then I would also be able to make changes in file server just as I would in dc01, but we're going to create a secondary one instead. So I'm going to click browse, and browse to that zone. I could also just type it in if I know the name as well, and I'll click next. Now I'm going to put in the IP address or the name of the server where I'm going to be receiving these records from. So I'll put in LI-dc01, and we can see it resolved it to those IP addresses that you see there. So click next and click finish. Here is my test dot local. If it's a large zone, it may take a few minutes to replicate. A small one, as you see here, replicated right away. So we can see the secondary zone test dot local. The records are pointing not to file server. The records are pointing back to dc01, saying that this is where this start of authority is, back in dc01. So if you want to make any changes, you got to go to dc01. You can't make them here. So I'll just go ahead and test this out. If I right-click, and I choose all tasks, you can see there's just no option here to create any new records. Now, if for some reason the records did not replicate, then I could choose reload. That just basically refreshes like F5, or I could do transfer from master. Now that one will actually go out to dc01, look for those records and pull them over. Or I could do transfer new copy of zone from master.
>
> **[3:08](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=188)** This is needed sometimes in case the records get corrupt. And what it'll do is it'll erase any records that are in there now, and then it'll put in a new copy of the records after that. Creating secondary zones is useful for remote offices, where you want a copy of DNS names to IP addresses for a zone, but don't want to give the rights to make changes to the zone to that other server.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (5), right-click (2)
> **CLI Commands:** make (6)
> **Env Vars:** dns (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - a (1)

#### [Stub zone creation](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=0)** - [Instructor] A stub zone is very similar to a secondary zone but there's one key difference. I'm going to start out by deleting the secondary zone that I created earlier called "test.local," which is a read only copy of the zone from LI-DC01. Now, what I'm going to do is I'm going to create a stub zone based on that same "test.local." So, if I right click and go to properties and go to zone transfers, I just want to confirm that my file server is in the list and it is, if not I could go ahead and add it right there. Now, I'm going to go to forward look of zones. Right click and choose to create a new zone. And the wizard shows up, I'll click next. Now, I'm going to choose to create a stub zone. So, a stub zone is different from a secondary zone in that it doesn't replicate all the records over from the primary in this case, the DC01 server, because you don't need it. And so, if you have a remote [office](../../Skills/Web%20Development/Microsoft%20Office.md) and you have a slow connection, then you may want to choose a secondary zone because the secondary zone will replicate all the records over. And then you have that copy on that particular location. However, a stub zone is if you have a faster connection and in the main office DNS records are being updated all the time. So, the secondary zone might be behind in a very large zone where you have a slow connection. And so, when users are trying to resolve names to IP addresses, then it will be outdated information.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=94)** A stub zone always has the most latest up to date information because it doesn't store it locally. What it does is it just goes back to the original zone holder, in this case, DC01, and it says, "Hey, what's the most up to date information about these records?" So, let's go ahead and finish creating this and I'll show you how that appears. So, I'm going to go to DC01. I'm going to go to "test.local" and click next. Next. And I'll put in the DC01 name because that's what it's looking for, is where the primary lives. Next, and finish. Now, go to "test.local". And so, all this is going to create is just a copy of where those records are. So for instance, if I go to "test.local," and I create a new host record and I'll call this record "Server 1," which doesn't exist, but that's okay. And I'll put in a fake IP address and I'm going to uncheck the pointer record, which is the reverse record just because I don't need it here. And click add the host. Click okay, click done. Now, go back to "test.local" and I refresh or reload, which is fine. They're both the same thing. Look at that. It does not replicate the record I just created in the "test.local" zone in DC01. What it does do is it says, "Hey, if you're looking for the record for Server 1, go over to DC01 and it'll hand it to you."
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=190)** I personally find that stub zones have become outdated due to faster network connections between locations. Stub zones create pointers to the name servers and start of authority in a read only zone.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Office](../../Skills/Web%20Development/Microsoft%20Office.md) (2)
> **Env Vars:** dc01 (7), dns (1)
> **UI Navigation:** go to (7)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### 8. DNS Resource Records

[↑ Back to Table of Contents](#table-of-contents)

#### [Forward and reverse zone records](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=0)** - [Instructor] If we take a look at the [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) domain zone that we see with lil.int, you can see some host A records. You can either call a forward lookup zone record a host record or an A record. Either one. Now, the records that were created here were all created automatically. So for instance, dc01 and dc02 were created dynamically, also known as automatically when the domain controllers were installed and added into the domain. The other two records that you see here, fileserver and lil-client01, these records were added dynamically when they were joined into the domain. Now, you don't have to just have them happen dynamically or automatically, you can also add them manually. So for instance, I'm in the test.local zone now. And I'm going to right click and choose to create a new host record. I'm going to call this one Server 1. And I'm going to give it the fake IP address of 21.200. Now, if I'd like to create an associated PTR record, I can leave this box checked and click Add Host, and then it'll show up in my reverse lookup zone if it exists, and it does, of course. So I'll click Add Host. And it says that the record was created successfully. I'll click Done. And I'm going to go to the reverse lookup zone and there's my reverse record. So if I go down to a command prompt and I ping server1.test.local, we can see that it resolves to the 21.200.
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=98)** So that record creation actually worked. Now, it's okay that it's unreachable because it's a fake name with a fake IP address. I just wanted to show that the resolution worked. Now, the next thing I want to do is I want to hit the up arrow and then go back and choose -a. What -a does is it will do a reverse lookup. So I'm going to change the name to an IP address. And now it should do the reverse. It will look up the IP address and give me the name. And that's exactly what it did. So now you see forward lookup and you see reverse lookup. The other thing I can do is I can create an IPv6 record. An IPv6 record we sometimes refer to as a quad A record. So you can see an A record or four As. So four As is always going to be for IPv6. And now I'm going to type in Server 2 and give this one an address for IPv6. So to get that address, I'll just go down and put in ipconfig. And I'll just choose the IPv6 address that you see here. And I'll copy it. And I'll paste it in. Now, you can, of course create your own IPv6 address if you'd like and I'll just click Add Host. And the reason why I'm getting the error on the reverse record is because I did not create a reverse lookup zone for IPv6, I only created it for IPv4 but I can certainly do that if I'd like and then it will show up there as well. Forward and reverse host records are the most used types
>
> **[3:14](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=194)** of records in DNS. They give basic forward or reverse lookup from named IP or IP to name.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (1)
> **Env Vars:** ptr (1), dns (1)
> **Versions:** 21.200 (2)
> **Analogies:** for instance (2)
> **Tools:** command prompt (1)
> **UI Navigation:** go to (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### [Alias (CNAME) records](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=0)** - [Instructor] Alias records allows us to start out with one name and have it translated to another. It's also known as a CNAME which stands for a canonical name. Let's take a look and see how this works. So I've created a couple of new zones, companya and companyb dot local. In your case, it might be dot com, dot net, dot info. But just for demonstration purposes, I'm going to be using the dot local name. First, I need to create a host record in company A. So I'm going to call this one web and give it an IP address of 192 dot 168 dot 21 dot 205. And I'll click to add the host. I don't need the reverse record for this demonstration. And I'll click Done. Now I'm going to do the same thing with company B. So I'll create a new host record. I'll call it web. And I'll give it a 206 address and then add that host and click Done. Now I'm going to go down to my Command Prompt. And this also works in [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) if you need it. I'm going to click ping web dot companya dot local.
>
> **[1:13](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=73)** And it resolves to dot 205. Of course, don't worry about the fact that it's not replying, because these are fake names and IP addresses. We're just looking for resolution. Now I'm going to do the same thing with company B. And I should get the dot 206 address. And I do. Now I'm going to set up an alias and show you how that works. I'm going to go back and delete my web record. And now I'm going to create a new record called an alias, also known as a CNAME. And I'm going to be putting in the name web once again. And now this time, I need to put in the fully qualified name that it's going to translate to. And that's going to be web dot companyb dot local. So why do we need a canonical CNAME, alias type of record? I've used this many times in my career when I've gone through a merger with the company. So company A buys company B, for instance, or B buys A. And what'll happen is that the one company no longer wants the company that they've purchased to be resolved when somebody goes to that website. So for instance, they'll want company B who swallowed up company A to be the website that users go to when they type in companya dot com. So basically they're trying to get rid of company A, but if people still only know it is company A, then they'll need to be translated,
>
> **[2:48](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=168)** using the CNAME, to company B. And that's exactly what we're doing here. So I'll click OK. So now we have, anytime anybody tries to go to company A, they got to automatically get company B. Let's see if it works. Go back down to the Command Prompt. I'm going to clear the screen. Now I'm going to flush out the cashed information. So we do a flushdns command. And now that's done. Now, when I ping web dot companya dot local, this should automatically translate to web dot companyb dot local. And there it is. It's now translated to company B. So if anybody goes to a website, and they put in companya dot local, they'll automatically get the website for company B. It sounded a little complicated at first, but I hope that by showing you an example of how this works, it simplifies the concept as to why we use alias records, also known as CNAMEs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (1)
> **Env Vars:** cname (4)
> **Definitions:** known as (3), stands for (1)
> **Tools:** command prompt (2), powershell (1)
> **UI Navigation:** go to (2)
> **Analogies:** for instance (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Mail (MX) records](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=0)** - [Instructor] Mail records allows us to direct mail to a specific server within an organization. Typically you don't use mail records in most internal organizations because most mail stores are out in the public such as at [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) using [Microsoft 365](../../Skills/Cloud%20Computing/Microsoft%20365.md) or [Google](../../Glossary/Service/Google.md) for Gmail and others. But in some cases you may want to redirect email to a local mail server if it's necessary because you have multiple mail servers in your organization. So we're going to use test.local as the example. I'm going to write click. And the first thing I need to do is to create a host record. So I'm going to call this host record mail and you can see it automatically appends the test.local to it. So if I want to send an email to Tom@mail.test.local then I'll need to know where that mail server is. And I'll put in the fake IP address of 21.207 and I don't need a reverse record so I don't need to check the point of records. I'll just click on add host and click okay. And done. Now I need to create an MX record. An MX record is a mail record that says where this particular server is that's going to receive the mail. Right now it's just a host record. Host record doesn't necessarily mean that it knows where to deliver the mail. So I'm going to right click again. And this time choose to create a new mail exchanger or MX record. So I'm going to put the host as mail
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=93)** and then we see once again it appends to the fully qualified domain name. If my domain was just test.local then I would just leave this blank and not put in mail. But if I have it called mail then I'm just going to go ahead and leave it there. Now I need the fully qualified name of the mail server and it's going to be mail.test.local. Now here's the priority. And you see here that it's set to 10. The way priorities work is whatever the lowest number is, that's going to be the first place that the server looks to deliver that mail. So I could have it set to zero if I'd like, and then the next one sent to one, two, three, or 10, 20, 30 whatever it is I want to do. The lowest one is going to win first. And if it can't be delivered to the lowest number, it goes to the next highest number. So I'll click okay on that. And there's my MX record. Let's see what that looks like out on the internet. I have a website here that I own, and what I'm going to do is do a DNS lookup for mail records. So I'm going to put in the name of a domain in this case I'll do [linkedin.com](https://linkedin.com). Instead of choosing the a or host record, I'm going to choose the MX record to see where email gets delivered whenever I want to send an email to someone@[linkedin.com](https://linkedin.com) And here's the MX preferences followed by the host names. So we see that there's two different MX preferences set to 10.
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=187)** One is male C and the other is male D. So it's going to load balance between those two. The first email's going to go to the first one. And the second email is going to go to the second one or whichever mail server responds first. Then we see another record sent to 20 and then a third record once again, sent to 10. Now, I don't know exactly the way these email servers are set up, whether it's going to load balance between the three or because it's listed fourth, it's going to be going to this particular one in a different order. However, you can see the ACD and then just the plain old mail.[linkedin.com](https://linkedin.com). These are all the different locations where email can be sent. So they have some redundancy and some failover built in in case any particular mail server goes down. MX records are typically used externally and not entered into a [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md), but there are some circumstances where multiple email servers are internal to a domain using different email domains where a [Windows](../../Glossary/Service/Windows.md) MX record may be created.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (3), [Microsoft Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Microsoft 365](../../Skills/Cloud%20Computing/Microsoft%20365.md) (1), [Google](../../Glossary/Service/Google.md) (1), [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (1)
> **URLs:** [linkedin.com](https://linkedin.com) (3)
> **UI Navigation:** go to (2), click on (1)
> **Env Vars:** dns (1), acd (1)
> **Versions:** 21.207 (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)

#### [Other record types](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/other-record-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/other-record-types?u=76281980&t=0)** - [Instructor] Here is a mail record, a host record, an IPv6 record, and there are other types of records as well. So how do we create these other types of records that I haven't already taken a look at? So if I right click anywhere in the zone you can see the most popular records and that's going to be the host, the alias, and the mail record. However, if I choose Other New Records, I get this box that pops up and it shows me a list of all the different records that I can create inside my DNS zone. Now, most of these records you'll never create but there is going to be a time where you're going to need to create specific records based on certain vendors that require it in order for them to work. For instance, I can create a TXT or text record. Click Create Record, and here I can see the record name, use parent name if left blank just like any other type of record like a host record or an MX record. And I'll go ahead and put in server three for the record name. Now here I can put in some text that's going to be required for that particular vendor and I'll just click Okay. Now you may not find a use for a TXT record in an internal [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md), but that's just an example of the different types of records you can create. So here we have a next domain record, NXT record, and here you can see the description of what an NXT record is. And in this particular case
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/other-record-types?u=76281980&t=93)** it's just going to list the owner names of that zone. So I'll click on create record, and you can put in the next domain name followed by the record types. In most cases, you'll never have a reason to create other record types that you see here unless you find a vendor that requires it, but this is the location you would use to find other records in a [Windows](../../Glossary/Service/Windows.md) DNS server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (1), [Windows](../../Glossary/Service/Windows.md) (1)
> **Env Vars:** dns (2), txt (2), nxt (2)
> **CLI Commands:** find (3)
> **Analogies:** for instance (1), just like (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 9. Advanced DNS

[↑ Back to Table of Contents](#table-of-contents)

#### [DNS queries](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-queries?u=76281980&t=0)** - [Instructor] If you'd like to test your DNS servers just to make sure that they are performing as they should as far as DNS resolution goes, then you can do that with a simple utility that's built in to the DNS console. So I'll right click on one of my servers and go to Properties and I'm going to click on Monitoring and you can see other monitoring tests I've done recently. I'm going to click on the Simple query against the DNS server and click Test Now. And the latest test shows up at the top and it's passed. This is a forward lookup type of check. I'm also going to do a reverse one which is the recursive query and click Test Now. Now, if you don't have a reverse lookup zone then you may find that this one fails, but in my case I do so it went ahead and passed. So I know now that they're working okay, but you can also set it up so either or both tests are done on a regular basis. So you can check the box to perform these tests at the following intervals and then you can choose seconds, minutes, or hours. DNS queries are a quick way to test your DNS servers.

> [!info]- Semantic Content
>
> **Env Vars:** dns (6)
> **UI Navigation:** click on (3), go to (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [DNS cache](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache?u=76281980&t=0)** - [Instructor] [Windows](../../Glossary/Service/Windows.md) DNS servers that have forwarders turned on are not just for resolving types of records internally, but also for caching records that were done externally. So for instance, if I go up to View and click Advanced, it's going to show some additional things it didn't show before and one of those is cached lookups. And the advantage to cached lookups is if I go to say [google.com](https://google.com), it's going to go out the first time to my internet service provider or whatever DNS forwarder I put in and it's going to look for that IP address and then it's going to give me that resolution and then I can go out to [google.com](https://google.com). However, the next time I go, I don't want to have to wait for it to go to do that. It's got to go out at about 10 or 11 hops and then come back in and give me the record before I can go ahead and browse to that website. So what it does is it caches this information and you'll see it right here under the cashed lookups. So if I go to com for instance, I can see all the different websites I went to. Now, there might be some websites that are in here that you didn't go to and it's just because some of these various different ads went ahead and added themselves into the webpage that you were browsing and therefore that's why you see those there. So if I go to [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md), we can see some various different records there as well. I'm going to go back to com and I'm going to go to my command prompt
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache?u=76281980&t=93)** and I'm going to ping [google.com](https://google.com) since it didn't show up in the list there and you see I get a resolution. Now I'm going to minimize and go back to com and now I'm going to refresh and there's my [Google](../../Glossary/Service/Google.md) host record. Now, the next time I want to go to Google, it will be already there and ready for me to use. Now, it does rotate these different records so they don't get stale. So every seven days or so, it'll go out and it'll update to whatever the latest record is because Google does move around a lot, although a lot of other websites do not. If you feel that your cache is built up too much and maybe it's slowing things down, you can certainly go ahead and flush that out, so you can right-click and choose Clear Cache and now it's all gone. So you're going to see right away, there's going to be just the root servers that show up. The root servers are basically the servers that control the internet. So if I go into properties and I go to root hints, these are all the main servers that are out there online running the internet. So when you have DNS or your internet provider has DNS that synchronizes with these root hint servers, these are the servers that feed out to the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the world. Cached lookups from your ISP's DNS server or from the root hint servers can make browsing to the same websites go much more quickly the next time you visit them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (6), [Windows](../../Glossary/Service/Windows.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **UI Navigation:** go to (8), right-click (1)
> **Env Vars:** dns (5), isp (1)
> **URLs:** [google.com](https://google.com) (3)
> **Cross-References:** go back to (2)
> **Analogies:** for instance (2)
> **CLI Commands:** make (1)
> **Tools:** command prompt (1)

#### [Conditional forwarders](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/conditional-forwarders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/conditional-forwarders?u=76281980&t=0)** - [Instructor] Conditional forwarders allows us to forward any requests for specific domains to other DNS servers. If you look at a general forwarder in the properties of your server, what this does is it forwards any requests that are not local to your DNS or your [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) domain off to, say, a public DNS server, as you see here, which is [Google](../../Glossary/Service/Google.md). However, if you have an individual domain that you would like to forward to a specific DNS server, then you can use conditional forwarders. So they have a condition to their forwarding. So if I right-click and choose new conditional forwarder, I'll put in the name, I'll just put in [kentoso.com](https://kentoso.com), which is one of [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md)'s favorite test domains. And I'm going to enter an IP address for what I believe is the DNS server for [kentoso.com](https://kentoso.com). So I'll put in 192.168.21.220. Now it's not going to be able to resolve this. That's okay. It's just a fake IP address. And if I'd like, I can also replicate this to all other active directory servers as well. And now I'm going to click okay. So if I need to go off to a [kentoso.com](https://kentoso.com) host record, then I don't have to know all the different host records here. I can just put in where the DNS server is for [kentoso.com](https://kentoso.com). And anytime I make a request for a host in that domain, it will forward it onto the DNS server that I entered into the conditional forwarder. Conditional forwarders are great for forwarding requests
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/conditional-forwarders?u=76281980&t=94)** to specific domains in your DNS servers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (2), [Google](../../Glossary/Service/Google.md) (1), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1)
> **Env Vars:** dns (8)
> **URLs:** [kentoso.com](https://kentoso.com) (4)
> **CLI Commands:** make (1)
> **Versions:** 192.168.21 (1)
> **UI Navigation:** right-click (1)
> **Speakers:** - [instructor] (1)


### 10. DNS Security

[↑ Back to Table of Contents](#table-of-contents)

#### [DNS cache locking](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache-locking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache-locking?u=76281980&t=0)** - [Instructor] Domain name systems security extensions, or DNSSEC, is a suite of extensions that add security to DNS by enabling DNS responses so they can be validated. DNS security provides [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md) and authenticated denial of existence. DNS spoofing is a type of attack that involves impersonation of DNS servers, and it does that so it can introduce false information to redirect a user. In a spoofing attack, a malicious user is going to try to attempt to guess that a DNS client or server has sent a query and is waiting for that response. The DNS security extensions then keeps spoofing from being successful. DNSSEC uses digital signatures as well and cryptographic keys to validate the DNS responses to make sure they're authentic. Signatures that are generated using DNSSEC are contained within the zone itself in the new resource records. These new records are called RRSIG for resource record signature. When a resolver issues a query for that name, the RRSIG record is returned in the response. A public cryptographic key, called a DNSKEY, is needed to verify the signature, and then the DNSKEY is going to be retrieved by a DNS server during that validation process. For zone signing, when you sign a zone using DNS security, you are individually signing all records contained in the zone. This makes it possible to add, modify
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache-locking?u=76281980&t=93)** or delete those records without having to re-sign the entire zone, it's only necessary to re-sign the updated records. DNS security also uses something called a trust anchor, and this is a pre-configured public key that's associated with a specific zone. A validating DNS server must then be configured with one or more of the trust anchors in order to perform the validation. On DNS servers, trust anchors are stored in a file, and that file is called trustanchor.dns. A DNS server running [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) 2012 or newer, is also going to display the configured trust anchors in the DNS manager console tree in the trust points container. And you can use the [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) commandlets, or dnscmd.exe to view trust anchors. DNS key management strategy, is going to include planning for key generation, key storage, key expiration and key replacement. When you put them all together, key expiration and replacement in DNS security is called key rollover. In Windows Server key management is made easier with flexible key generation, [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) storage and replication and automated key rollover. When the DNS client issues a query, it can indicate to the DNS server that it understands DNS security. The DNS client relies on the local DNS server to indicate that validation was successful or not.
>
> **[3:08](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache-locking?u=76281980&t=188)** If the server fails to perform that validation, or reports the validation was not successful, then the DNS client service can be configured to return no results to the user's request. If it was successful the users will see the results that are needed. The DNS security suite is not configured by default, so you'll need to spend some time configuring the security portion of DNS to protect your organization.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows Server](../../Skills/Network%20and%20System%20Administration/Windows%20Server.md) (2), [Data Integrity](../../Skills/Cybersecurity/Data%20Integrity.md) (1), [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (1), [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) (1)
> **Env Vars:** dns (25), dnssec (3), rrsig (2), dnskey (2)
> **Definitions:** is a  (3), is called (2)
> **CLI Commands:** make (1)
> **Tools:** powershell (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [DNS socket pool](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-socket-pool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-socket-pool?u=76281980&t=0)** - [Instructor] DNS cache locking can keep DNS data from being overwritten. This can be especially helpful in protection from hackers trying to redirect traffic. What I can do is I can go into any one of my zones, and to lock my cache I can right click and go to properties. And I can go to start of authority which is the start of authority tab inside my properties. Now you have to do this on each zone you have, otherwise it's going to default to the one hour. But take a look, you see the minimum default time to live is one hour. And that means that until that hour is up no one can make any changes to that particular record, with the exception of the administrator for this particular server. So I can go in and make a change, but no one else can. So we cannot go in and, say, have a dynamic update change or any other kind of change from any other user unless they have those administrator privileges. Besides doing this on the zone you can also do it right in one of the records. You can see the start of authority here and you can go ahead and change it. And once again, you have hours, minutes, seconds, days. And then you also have the time to live for this particular record. So I can say that this one's going to be three hours if I'd like, or again, I can go days, minutes, or seconds. This feature can prevent the DNS cache poisoning attacks that may come against your servers from hackers. We can also do cache locking by command prompt as well.
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-socket-pool?u=76281980&t=95)** I'm going to go open up a command prompt and you can do this in [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) if you'd like. I'll clear the screen. I've typed in a command, dnscmd /config /cachelockingpercent, 50%. So that means you can actually go in at half the amount of time. So if it's set to one hour you could go into 30 minutes and make a change if you'd like, and we can see that that was done. Now, let's say you change your mind and say, you know what? I want to go for the full 100%. So I'm going to go back in and change that to 100%. And now you have to wait for the full amount of time before any changes can be made. Cache locking is another good security measure built into your DNS server.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (1)
> **Env Vars:** dns (4)
> **CLI Commands:** make (3)
> **Tools:** command prompt (2), powershell (1)
> **UI Navigation:** go to (2)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [DNS zone signing](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-zone-signing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-zone-signing?u=76281980&t=0)** - [Instructor] A DNS socket pool enables a DNS server to use source port randomization when issuing DNS queries. And this provides enhanced security against cache poisoning attacks by hackers. They won't know which port you're going to be doing the query on because it's randomized. So what I'm going to do is go down to my [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) and type in get-dnsserver. However, if I hit Enter, it's going to give me pages and pages of information. So I'm going to pipe that off to a text file. So I'm going to put in the forward caret and then type in dns.txt. Now take a look at the folder I'm in. It's in the users administrator folder. That's where it's going to pipe that particular file too. So if I wanted to go someplace else, I'll just type in c:\ so that way it goes someplace a little bit easier to find. And you can ignore the warning that you see here. The text file is still going to be created. So now I'm going to go into File Explorer and there's my DNS text. So I'll go ahead and open that up. And what I want to look for is the socket pool size, which is right here. And by default, it's set to 2500. If you make a lot of DNS queries, you might find out that 2500 is not enough. So you're going to go back into PowerShell. And this particular command is going to be a regular command line command, so you could do it either in PowerShell or in a regular command prompt. So I'm going to change my randomized pool to 3000 from 2500. And it's the command dnscmd followed by /config
>
> **[1:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-zone-signing?u=76281980&t=99)** and then the socketpoolsize. So I'll hit Enter and now that's done. Now let's just double check that that worked okay, so I'll put in dns2.txt and now we'll go back into here and choose my dns2.txt and it should now say 3000, which it does. By adding source port randomization, you end up using ports that no hacker can anticipate.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (3)
> **Env Vars:** dns (5)
> **Tools:** powershell (3), command line (1), command prompt (1)
> **File Paths:** dns2.txt (2), dns.txt (1)
> **CLI Commands:** find (2), make (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [DNS security extensions](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=0)** - [Instructor] DNSSEC is short for DNS security. And it enables a DNS zone and all the records in the zone to be signed cryptographically so that client computers can validate a DNS response. DNS is often subject to various attacks, such as spoofing or redirections. DNSSEC helps protect against these threats and provides a more secure DNS environment. I'm in my DNS console. And if we want to run DNSSEC on a zone, we have to actually run it on each zone individually. So it can't be done at the root level, which would cover all other zones. You'll have to do it on each one. I'm going to run it on my test.local zone. So I'm going to right-click on it, choose DNSSEC, and choose to sign the zone. Now, we get a wizard that pops up. One of the main benefits of DNS security extensions and signing the zone is that anytime a client makes a request to say, "Where's server one," for instance, when the zone responds, the client can be assured that it's coming from a valid DNS server. I'm going to click Next to get started. I'll choose the default customized zone signing parameters. And one of the first things we need to do is to set up the key signing key or KSK. And what this key does is it signs other keys that we create later on. So I'll click Next and I'll click Add. All of these defaults are fine. So I'm going to go ahead and click Okay. And it will create that KSK.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=94)** And I'll click Next. Now, I'm going to choose the zone signing key. So click Next and click Add. And this is the key that's going to sign the zone. So I'll click Okay. So the first key is going to sign the next one. And this particular one is going to sign the zone itself, which in this case is test.local. And the NSEC or next secure option is going to be a response when a record has no data. So there's nothing to provide to the client. And this needs to be recorded so that way the client knows that the host that they're requesting does not exist. If the client thought it did exist when in fact it doesn't, this could be something that a hacker injects into the zone. I'll click Next. Now, I want to go ahead and choose the enable, the distribution of trust anchors for this zone. And this is an authoritative entity. And it's represented by a public key. So we've already worked with the private key. Now, we're working with the public key. The trust anchors zone stores preconfigured public keys that are associated with a specific zone. I'll click Next. And these are all about the values for what we just selected earlier. It has the time to live and the polling period in hours. I'm going to go ahead and just choose the defaults, but you can make changes to those if you'd like and click Next, Next again.
>
> **[3:08](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=188)** And now, it's signing the zone and Finish. I'm going to go over to the trust points, which was blank before. And now, we see that this particular zone, which is the test.local zone is listed under the trust points. The client can now be assured that the zone is only providing them with records that can be trusted.

> [!info]- Semantic Content
>
> **Env Vars:** dns (8), dnssec (4), ksk (2), nsec (1)
> **Definitions:** short for (1), is an  (1)
> **Analogies:** such as (1), for instance (1)
> **CLI Commands:** make (1)
> **UI Navigation:** right-click (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 11. DHCP and DNS Management

[↑ Back to Table of Contents](#table-of-contents)

#### [Managing DNS and DHCP using Admin Center](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=0)** - [Instructor] We can manage DNS and [DHCP](../../Glossary/Standard/DHCP.md) using another utility besides just the DHCP and DNS console. And that is using [Windows](../../Glossary/Service/Windows.md) Admin Center. Windows Admin Center is a web-based administrative tool that we can download for free from [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md). So I'm just going to do a search for downloading Windows Admin Center, and I'll click the website, and make sure that you're choosing a [microsoft.com](https://microsoft.com) website, you can always click on the lock at the top and just make sure it says that the connection is secure, and then download Windows Admin Center. And here it is downloading, and I'll choose to show that in the folder, and when it's ready, go ahead and run it. You have to make sure that Internet Information Services is not already installed on your server. So you can go to tools, and as long as you don't see Internet Information Services, then you can go ahead and install it. And the reason for that is because it might conflict using the same ports as Windows Admin Center. After you accept the terms, click Next, choose the type of diagnostic data you'd like to send to Microsoft, and when you'd like to run updates. Now, you don't have to install this on a server, you can install this on a Windows client as well. Choose the defaults that you see here, click Next. Here's a self-sign certificate that's going to be automatically generated, it's only going to be good for 60 days, so you may want to get a public certificate instead. You could choose to do port 80 instead if you'd like, but it's not as secure, of course, as 443, which uses SSL,
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=98)** especially if you're getting to it from the outside. Installation has begun, and it's going to install its own web server, that's another reason why you can't have Internet Information Services already installed. Installation is complete, and before I click Finish, I'm going to click the link, which will automatically open up the website in my browser. Now, if it's going to open up in Internet Explorer, you're probably going to want to close that, and open it with a supported web browser. And I'll go ahead and log in, and Windows Admin Center is launching for the first time. You can read what's new with Windows Admin Center. I'm going to close it. And by default, it shows up with the server that I installed it on. So if you installed it on a client computer, you'll see that one as well. I can add additional computers though, so I can click on Add, and here I have lots of different options. I can put in servers, PCs, clusters, or even [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md). I'm going to add a server, and I'm going to add the server name here. And typically, the Windows account credentials don't work properly for this, So I'm just going to go ahead and enter in the domain information and add with those credentials. It found the server, and I'll click Add. Next, I'm going to go ahead and launch my DC01 server, and it's going to remote into that server.
>
> **[3:15](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=195)** And within Windows Admin Center, you can see a lot of different tools that you can use, such as users and groups, networks, monitoring, power shell, things like that. However, we don't see DNS and we don't see DHCP. So what you want to do is go and click on the gear in the upper right, and choose Settings. Then you're going to go over to where it says Extensions, and you get a list of different extensions you can add in to your Windows Admin Center. Now, these are being added all the time, so you might want to go back and check on a regular basis. First one I'm going to choose is DHCP. It says it's in preview, but that's okay. I'll go ahead and choose Install. And it's installing that right now, and refreshing. Next, I'm going to go to DNS and do the same thing. Once those two are installed, I can go back to my server, and then I can manage DHCP and DNS. I'm logging back into my server, and it's adding in all the different extensions, and here I can see my DHCP extension. I see my scope, which I can select, I could also choose to create a new scope. And here, it's showing the overview, my exclusions, reservations, all the different things that you would've seen in the DHCP manager. I'm going to choose to edit.
>
> **[4:51](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=291)** And over here, we can see my scope starting and ending IP address, I'm going to go ahead and change that to 235. And I'm going to keep the one-day lease duration, and click Submit. And now it says it was updated successfully. And sometimes you have to refresh in order to see the changes. And now we see the ending IP address as .235. We can do the same thing over in DNS. It's loading up all the different zones, and here they are. We have company A and B, Contoso, and then of course the [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) zones and the test.local. I'm going to click on company A, and here I can create a new DNS record. So I'll call this record My Record and I'll put it in IP address. I can create an associated PTR record for reverse zone lookup, and I can also change the time to live if I'd like, and then when I'm done, just click Create. And there's my new record called My Record. You may not see all of the same options that you could do in the DNS or DHCP consoles, but you should have enough where you can do many of your daily tasks.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Windows](../../Glossary/Service/Windows.md) (11), [DHCP](../../Glossary/Standard/DHCP.md) (8), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (3), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1), [Virtual Machines](../../Skills/Cloud%20Computing/Virtual%20Machines.md) (1)
> **Env Vars:** dns (8), dhcp (8), ssl (1), dc01 (1), ptr (1)
> **UI Navigation:** click on (4), go to (2)
> **Prerequisites:** install (5)
> **CLI Commands:** make (3)
> **URLs:** [microsoft.com](https://microsoft.com) (1)
> **Ports:** port 80 (1)
> **Definitions:** is a  (1)

#### [Managing DNS and DHCP using IPAM](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=0)** - [Instructor] Another utility besides [Windows](../../Glossary/Service/Windows.md) Admin Center and the DNS and [DHCP](../../Glossary/Standard/DHCP.md) consoles that we can use to manage those two services is IPAM or IP Address Management. And IP Address Management does have a lot of steps involved in order to get it installed. But once it's installed, it's a very useful tool where you can manage all the different DHCP and DNS servers from one location. I'm going to click on the Add roles and features, and I'm doing this in a member server. You cannot do this on a domain controller. [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) does not allow it. So I'll click Next until we get to Features. This is a feature, not a server role. That's because it's used for management rather than for client use. And I'm going to go to where it says IP Address Management or IPAM Server and choose to add the features, and click Next, and now click Install. Once it's installed, we'll need to run some commands, go through some configuration, and it usually takes about an hour, although this will be sped up here, in order to get IPAM to be fully configured and to begin working. The IPAM feature has been installed. I'll click Close. Now I need to open up [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) as the admin, and I'm going to run the command. Now we're going to invoke the IpamGpoProvisioning, and it's going to do this on our domain, the lil.int, and we're installing it on the fileserver because the fileserver is not a domain controller. This is going to create three group policy objects
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=95)** on our domain controllers. Hit Enter, press Y to say yes, go ahead and perform the action, and now it's creating our group policy objects. And it's prompting again. Press Yes, Yes again, and you just keep pressing Y until it's done, and now we see it's done. I've gone over to Group Policy Management on a domain controller. You can see the three group policies that were added in. So one for Network Policy Server, that's the NPS, and another for DHCP, and the last for DNS, and these are the three different services we can manage within IPAM. I'm back in fileserver, and I'm going to go over in Server Manager on the left-hand side of the screen and choose IPAM. I can see the Connect IPAM server, step number one, is already done. So next, I need to provision the IPAM server, so I'll click on that, and we get a new wizard that comes up, click Next. IPAM is going to require a database to store all the records. So you can either use the free Windows Internal Database that comes with this, which is very similar to [SQL](../../Skills/Data%20Science/SQL.md) Express, or you could just choose the [Microsoft SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md), and you could purchase that and choose the server name and database information here. I don't have a [SQL Server](../../Skills/Software%20Development/Microsoft%20SQL%20Server.md), so I'm just going to choose the Windows Internal Database. Now it's asking me for a provisioning method. I would definitely like to do this in an automatic manner, so I'm going to go ahead and choose
>
> **[3:09](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=189)** the GPO name prefix of IPAM1 which is the same name I gave it for group policies and click Next. And we see the IPAM Server is now going to use those group policy objects, and they'll apply. Provisioning is in progress, and this can take a few minutes. When it's all done, we'll go ahead and open up IPAM. And that was successful, so I'll go ahead and click Close. So step number two is done. I'm going to choose Configure server discovery, and I'll expand my box and choose Get forests, and we can see that a background task has been started. So sometimes this takes a little bit of time. Once it has that information, it will go ahead and populate the forest, and then we can do the same with the domain. After a few minutes, it went ahead and pre-populated the forest, and then it went ahead and populated the domain as well. And by clicking on Add, we see the option for Domain controller, DHCP, and DNS, and I'll click OK. So now we see step number three is all done. Now I'm going to choose the Start server discovery. And when I click on that, this yellow bar pops up, and I'll click on More, and it will give us more details of what's happening. So it started the ServerDiscovery Task, and this can also take several minutes to complete. And this is now completed after several minutes. I'll go ahead and click Close. Now I can click to Select or add servers to manage.
>
> **[4:44](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=284)** And it's chosen my two domain controllers. I see DC2 at the top and DC01 underneath that, and it shows that it's Unblocked. Now you might see it set up as Blocked. And if that happens, you may need to open up some firewall ports or just wait a little bit longer until it shows Unblocked. Most of the time, you don't need to do anything but just wait. I'm going to right-click and choose to edit the server, and I'm going to choose which services I would like to add in. I definitely want DHCP, DNS. I don't need the Network Policy Server at this time, but I'll just go ahead and select the three because the third one is the domain controller which, of course, is exactly what this particular server is. Now I'm going to choose Edit Server here as well, check DHCP, and click OK. Next, I'm going to go down to where it says DHCP Scopes. And it may take some time to retrieve the data. Once it does, though, it should be there the next time you go in without having to wait. So go up to Tasks and choose to retrieve the server data. And, once again, we see that yellow bar at the top which is retrieving all the data for the DHCP scopes. After a refresh on the server inventory, we can see that it's unblocked and ready to be managed. So what I'm going to do is go down to where it says DHCP Scopes. And if you don't see anything here, you can just go to Tasks and Retrieve Server Data, and refresh, and you'll see it here. Here is my scope, the 21.0. So I'm going to right-click and choose to edit the DHCP scope. And we see a new box pops up.
>
> **[6:20](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=380)** Here's the starting and ending IP address that was expected. I'm going to change that to 234 just as an example to show you can change it and click OK. I can also do other things such as creating a DHCP reservation, a superscope which combines multiple smaller scopes into one larger one. I can also set a DHCP failover and policies. I want to go down to DNS Zones, and here are all the different zones that are in my DNS Manager showing up in IPAM. You can see that it's showing the same zone for company A, for instance, that you saw on the DNS Manager. So I'm going to right-click, and you can see here I can edit the DNS zone just like I could edit the DHCP properties. So I can go to Advanced. I can change this from storing in [Active Directory](../../Skills/Network%20and%20System%20Administration/Active%20Directory.md) to just being local. I can change how long the zone aging and scavenging properties are. And what this does is it goes out and looks for any new information, so that way, the records don't end up getting stale and maybe outdated. If I go to Name Servers, we can see the two name servers that the zone is on, and you can see the start of authority is the DC01 server. And we can do zone transfers by checking the box and choosing any of these options. And I'll click Cancel on that. The advantage of IPAM is seeing all the servers in one location, so DNS, DHCP,
>
> **[7:56](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=476)** and Network Policies can be edited without having to log in to each server individually.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [DHCP](../../Glossary/Standard/DHCP.md) (14), [Windows](../../Glossary/Service/Windows.md) (3), [Microsoft](../../Instructors/Artificial%20Intelligence%20(AI)/Microsoft.md) (1), [Powershell](../../Skills/Network%20and%20System%20Administration/Powershell.md) (1), [SQL](../../Skills/Data%20Science/SQL.md) (1)
> **Env Vars:** dhcp (14), ipam (13), dns (10), sql (3), dc01 (2)
> **UI Navigation:** click on (4), go to (4), right-click (3), select the (1)
> **Analogies:** similar to (1), such as (1), for instance (1), just like (1)
> **Prerequisites:** install (1), configure (1), set up (1)
> **Versions:** 21.0 (1)
> **Tools:** powershell (1)
> **Definitions:** is a  (1)


## Instructor

- [Robert McMillen](../../Instructors/Network%20and%20System%20Administration/Robert%20McMillen.md)

## Skills Covered

- Domain Name System (DNS)
- Dynamic Host Configuration Protocol (DHCP)
- Windows Server

## Path Context

### In [Getting Started with Windows Server 2022](../../Paths/IT%20Help%20Desk/Learning%20Paths/Getting%20Started%20with%20Windows%20Server%202022.md)
← [Windows Server 2022- Install and Configure Active Directory](Windows%20Server%202022-%20Install%20and%20Configure%20Active%20Directory.md) | **4 of 4**

## Appears In

- [Getting Started with Windows Server 2022](../../Paths/IT%20Help%20Desk/Learning%20Paths/Getting%20Started%20with%20Windows%20Server%202022.md)

## Related Courses

_Courses sharing skills:_

- [Windows Server 2019- DHCP and DNS](../Network%20and%20System%20Administration/Windows%20Server%202019-%20DHCP%20and%20DNS.md) — Windows Server, Dynamic Host Configuration Protocol (DHCP)
- [Windows Server 2022- Install and Configure Active Directory](Windows%20Server%202022-%20Install%20and%20Configure%20Active%20Directory.md) — Windows Server
- [Windows Server 2022- Installation and Configuration](Windows%20Server%202022-%20Installation%20and%20Configuration.md) — Windows Server
- [Windows Server 2019- Install and Configure Active Directory](../Network%20and%20System%20Administration/Windows%20Server%202019-%20Install%20and%20Configure%20Active%20Directory.md) — Windows Server
- [Windows Server 2019- Installation and Configuration](../Network%20and%20System%20Administration/Windows%20Server%202019-%20Installation%20and%20Configuration.md) — Windows Server

---

[↑ Back to top](#)