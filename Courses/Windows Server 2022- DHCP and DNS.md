---
type: course
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
tags:
  - course
  - topic/it-help-desk
  - topic/network-and-system-administration
  - skill/domain-name-system-dns
  - skill/dynamic-host-configuration-protocol-dhcp
  - skill/windows-server
status: not-started
created: 2026-04-17
---

# Windows Server 2022: DHCP and DNS

> DHCP is an important concept to understand for any network or system administrator, as it allows you to automatically assign IP address information to all your endpoints. DNS, meanwhile, is essential to resolve names to IP addresses to make Active Directory and name resolution work correctly. In this course, instructor Robert McMillen explains how DHCP and DNS work in the context of a Windows Serv

> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768) | 2h 14m | Beginner | 29K learners

## Instructor

- [[Robert McMillen]]

## Skills Covered

- Domain Name System (DNS)
- Dynamic Host Configuration Protocol (DHCP)
- Windows Server

## Table of Contents

### Introduction

#### Install and configure Windows Server 2022 DHCP and DNS
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-and-configure-windows-server-2022-dhcp-and-dns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-and-configure-windows-server-2022-dhcp-and-dns?u=76281980&t=0)** - [Robert] If you're looking to upgrade to Windows Server 2022 and you have an Active Directory domain in forest, you'll need to know all about Dynamic Host Configuration Protocol and Domain Name Services.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-and-configure-windows-server-2022-dhcp-and-dns?u=76281980&t=12)** DHCP is essential for managing a modern network.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-and-configure-windows-server-2022-dhcp-and-dns?u=76281980&t=15)** In this course, Windows Server 2022 DHCP and DNS, I'll show you how to install, manage, troubleshoot, and create all the DHCP settings needed for your network, even if utilized remote networks.
>
> **[0:29](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-and-configure-windows-server-2022-dhcp-and-dns?u=76281980&t=29)** We then switch over to DNS.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-and-configure-windows-server-2022-dhcp-and-dns?u=76281980&t=32)** You'll learn all about installing, configuring, and troubleshooting both Active Directory DNS and standard DNS zones.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-and-configure-windows-server-2022-dhcp-and-dns?u=76281980&t=39)** I then give you demonstrations in how to manage both DNS and DHCP using management consoles, PowerShell, IPAM, and Windows Admin Center.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-and-configure-windows-server-2022-dhcp-and-dns?u=76281980&t=49)** My name is Robert McMillen.
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-and-configure-windows-server-2022-dhcp-and-dns?u=76281980&t=51)** I'm a Microsoft-certified trainer and Solutions expert.
>
> **[0:54](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-and-configure-windows-server-2022-dhcp-and-dns?u=76281980&t=54)** I invite you to join me to learn all these skills and more in my Microsoft Windows Server 2022 course.

> [!info]- Semantic Content
>
> **Env Vars:** dns (5), dhcp (4), ipam (1)
> **Prerequisites:** you'll need (1), install (1)
> **Code Keywords:** switch (1)
> **Tools:** powershell (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [robert] (1)


### 1. DHCP Overview

#### What is DHCP?
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=0)** - [Instructor] Dynamic Host Configuration Protocol, also known as DHCP, is a protocol that's communicated between a client and a server to automatically provide computer or other endpoints with their IP address and other related configurations, such as the subnet mask and default gateway.
>
> **[0:20](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=20)** DHCP is based on the RFC as a request for comments numbers 2131 and 32, and they define DHCP as an internet engineering taskforce standard that's based on the Bootstrap Protocol.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=35)** BOOTP, as it's also known, was the original way computers received IP info, and DHCP is its successor.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=45)** All Windows servers include DHCP.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=48)** This is an optional network server role that you can add to your network to lease IP addresses and other information to DHCP clients.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=57)** All Windows-based client operating systems include the DHCP client as part of IP addressing.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=64)** And the DHCP client is enabled by default.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=67)** Here's one of the main reasons to use DHCP.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=70)** Every device on an IP-based network must have a unique Unicast IP address to access the network and its resources.
>
> **[1:19](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=79)** Without DHCP, IP addresses for new computers or computers that are moved from one subnet to another must be configured manually with what's also known as a static IP address.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=93)** There are many options that we can add into a Windows DHCP server, such as routing, relaying to other DHCP servers, special options for other devices like IP phones, and dozens more.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=108)** You can even create your own special options for certain vendors as needed.
>
> **[1:53](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=113)** There's multiple options for redundancy in case your DHCP server fails for any reason.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=120)** You can fail over to another DHCP server that is syncing your same scope and options.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=126)** You can have two separate non-overlapping scopes that can share the load and add redundancy.
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=132)** And you can use a failover cluster with many nodes all running synced DHCP databases that can be ready to take over DHCP duties when needed.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=143)** Let's take a look at how DHCP works between a client and a server.
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=147)** The client sends a DHCP Discover packet.
>
> **[2:32](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=152)** The DHCP section identifies the packet as the Discover packet and identifies the client using the physical address of the network card.
>
> **[2:41](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=161)** The DHCP server responds by sending a DHCP offer packet.
>
> **[2:46](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=166)** The DHCP server identifies the packet as that offer.
>
> **[2:49](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=169)** The client then responds to the offer by sending a DHCP request.
>
> **[2:54](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=174)** This lets any other DHCP servers know that they can release their offered addresses and return them to their available DHCP pools.
>
> **[3:04](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=184)** The DHCP server then identifies the packet as a request and verifies the offered address using DHCP.
>
> **[3:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=192)** Finally, the DHCP server responds to the request with a DHCP AP or Acknowledgement packet.
>
> **[3:20](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=200)** And that completes the initialization cycle.
>
> **[3:23](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=203)** The source address is the DHCP server IP address.
>
> **[3:28](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=208)** The client will either receive a new IP address or the same IP received during the last request.
>
> **[3:36](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=216)** The client will also have a lease time on that IP address, which by default is eight days.
>
> **[3:42](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/what-is-dhcp?u=76281980&t=222)** DHCP can make life much easier for the administrator by managing the IP addresses for multiple clients in a simple-to-use database.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (31), rfc (1), bootp (1)
> **Code Keywords:** default. (1), static (1), let (1), finally, (1)
> **Definitions:** known as (2), is a  (1), is an  (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)
> **Documentation:** rfc (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)

#### DHCP on various devices
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-on-various-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-on-various-devices?u=76281980&t=0)** - [Speaker] Windows DHCP services are included with every Windows server.
>
> **[0:04](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-on-various-devices?u=76281980&t=4)** And at no additional charge, you can also have redundancy and a wide array of DHCP options, exclusions, and reservations.
>
> **[0:13](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-on-various-devices?u=76281980&t=13)** If you plan to use Windows DHCP server on the same subnet as another DHCP server, then be sure to turn the Windows DHCP server off or it can cause a conflict between them.
>
> **[0:26](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-on-various-devices?u=76281980&t=26)** When the Windows DHCP server sees another DHCP server on the network that isn't authorized, the Windows DHCP server turns itself off.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-on-various-devices?u=76281980&t=36)** Internet service providers provide modems that are also routers as well as firewalls.
>
> **[0:42](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-on-various-devices?u=76281980&t=42)** They come with a DHCP service that is already turned on and will start feeding automatic IP addresses to any non-statically set device.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-on-various-devices?u=76281980&t=52)** Most other DHCP servers don't have the many feature options or redundancy you get on a Windows DHCP server such as reservations, exclusions, and other options.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-on-various-devices?u=76281980&t=63)** The DHCP server is a simple design that comes from the internet provider and not appropriate for the enterprise.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-on-various-devices?u=76281980&t=70)** DHCP can also show up on many other devices, such as this Cisco firewall as you see here.
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-on-various-devices?u=76281980&t=76)** It can also be configured on a switch and a router.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-on-various-devices?u=76281980&t=80)** Once again, these mostly do not have the many DHCP options compared to Windows DHCP, but if no other Windows DHCP server is available, these options will work in most scenarios.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-on-various-devices?u=76281980&t=94)** You may see DHCP servers also show up on wireless routers and access points and many other types of devices.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-on-various-devices?u=76281980&t=101)** Be sure to only have one type of DHCP server on any subnet to avoid any future conflicts.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (18)
> **Analogies:** such as (2)
> **Code Keywords:** switch (1)
> **Definitions:** is a  (1)
> **Speakers:** - [speaker] (1)

#### The importance of DHCP in the enterprise
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/the-importance-of-dhcp-in-the-enterprise?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/the-importance-of-dhcp-in-the-enterprise?u=76281980&t=0)** - [Instructor] Enterprise DHCP is for any organization that extensively uses DHCP and many of the DHCP options that you can find on a Windows or other type of server.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/the-importance-of-dhcp-in-the-enterprise?u=76281980&t=11)** Since Windows Servers have more options than options for redundancy available, I'll choose this type of server for this discussion.
>
> **[0:19](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/the-importance-of-dhcp-in-the-enterprise?u=76281980&t=19)** In many organizations, you'll find you need to have the same IP for a device every time it reboots.
>
> **[0:26](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/the-importance-of-dhcp-in-the-enterprise?u=76281980&t=26)** You could set up the device to be statically set, but that means you have to edit it manually every time you get a new DNS server or a new gateway among other options.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/the-importance-of-dhcp-in-the-enterprise?u=76281980&t=36)** Reservations are easy to set up and can be changed from the server instead of the device.
>
> **[0:42](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/the-importance-of-dhcp-in-the-enterprise?u=76281980&t=42)** You'll need the Media Access Control or MAC address, which is the physical address burned into the network card.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/the-importance-of-dhcp-in-the-enterprise?u=76281980&t=50)** And you use this information when creating the reservation.
>
> **[0:54](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/the-importance-of-dhcp-in-the-enterprise?u=76281980&t=54)** DHCP exclusions are basically just an exclusion for the DHCP server handing out an IP from the DHCP server pool due to a device having a statically set IP address.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/the-importance-of-dhcp-in-the-enterprise?u=76281980&t=67)** The exclusion has to be part of the DHCP scope itself or it will throw an error when applying.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/the-importance-of-dhcp-in-the-enterprise?u=76281980&t=74)** You only need the IP to exclude and the name you'd like to apply to set this up.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/the-importance-of-dhcp-in-the-enterprise?u=76281980&t=80)** DHCP has many options as you can see here.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/the-importance-of-dhcp-in-the-enterprise?u=76281980&t=84)** In the enterprise, this can be very important when setting more than just Windows Servers and clients.
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/the-importance-of-dhcp-in-the-enterprise?u=76281980&t=89)** If you want to route to a different network, there's an option for that.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/the-importance-of-dhcp-in-the-enterprise?u=76281980&t=93)** There are also options for setting up Nortel IP phones and scientific devices.
>
> **[1:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/the-importance-of-dhcp-in-the-enterprise?u=76281980&t=99)** Not all options will be popular or even in use still today as the list hasn't been updated in a long time.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/the-importance-of-dhcp-in-the-enterprise?u=76281980&t=107)** If you want to migrate DHCP databases to another server because of server retirement, you can do this quickly and easily with a backup and restore to a file on the new server.
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/the-importance-of-dhcp-in-the-enterprise?u=76281980&t=119)** In older versions, you had to copy the items and recreate reservations.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/the-importance-of-dhcp-in-the-enterprise?u=76281980&t=123)** So this has been a great feature add in recent years.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/the-importance-of-dhcp-in-the-enterprise?u=76281980&t=127)** I've used DHCP relay in many enterprise setups.
>
> **[2:11](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/the-importance-of-dhcp-in-the-enterprise?u=76281980&t=131)** This usually occurs when the IT administrator would like to keep just a single Windows DHCP solution, but has many subnets, VLANs, and possibly remote offices connected by VPN, MPLS, or SD-WAN connections.
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/the-importance-of-dhcp-in-the-enterprise?u=76281980&t=147)** You set up routing and remote access using the DHCP relay agent on a remote Windows Server at each location, or you could set up a DHCP helper on each router or firewall that points back to the Windows Server and a DHCP scope for each location.
>
> **[2:44](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/the-importance-of-dhcp-in-the-enterprise?u=76281980&t=164)** A DHCP helper is a command that you would type on many different types of routers and switches such as those on Cisco.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/the-importance-of-dhcp-in-the-enterprise?u=76281980&t=172)** Your clients in every other subnet will automatically look to the Windows DHCP Server for the automatic IP when starting up.
>
> **[3:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/the-importance-of-dhcp-in-the-enterprise?u=76281980&t=180)** DHCP in the enterprise can definitely help you manage thousands of IP addresses automatically when applied correctly.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (17), dns (1), mac (1), vpn (1), mpls (1)
> **Prerequisites:** set up (4), you need to have (1), you'll need (1)
> **CLI Commands:** find (2)
> **Code Keywords:** throw (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 2. Setting Up DHCP

#### Installing the DHCP server role
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=0)** - [Instructor] The DHCP server role is not added by default in Windows Server 2022 so I'm going to go ahead and add it in my Server Manager by clicking on the Add roles and features option.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=12)** The wizard shows up and now I'll click Next. Next again.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=18)** And I'll make sure that the server that I want has been selected and it has.
>
> **[0:23](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=23)** And I'll go over to the server role that says DHCP server.
>
> **[0:27](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=27)** And I'll add the add features as well. Click Next.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=32)** I don't need any additional features so I'll just continue on and choose Install.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=37)** After installation is done, I'll go in and configure DHCP by adding in the scope, adding in reservations and other scope options that we can add in to a DHCP server.
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=51)** But before I do that, I'm going to show how to install DHCP as a server role inside PowerShell.
>
> **[0:59](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=59)** The server role has completely installed.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=61)** I can choose to complete the DHCP configuration by clicking on the link.
>
> **[1:05](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=65)** But in case you missed that and you clicked Close, you can also go there by clicking on the triangle and choosing the complete DHCP configuration.
>
> **[1:15](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=75)** And this portion has to do with authorizing the DHCP server to be able to hand out IP addresses.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=82)** So if I click Next, we can see that I can use the administrator credentials or I can choose alternate credentials.
>
> **[1:31](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=91)** And I'm just going to go ahead and choose the administrator and click Commit.
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=96)** And now that's done. I'll click Close.
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=98)** Now, if I go to Tools and DHCP, that's a new option that just appeared after the installation, the DHCP management console has opened up.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=109)** And as of now really nothing has been configured.
>
> **[1:52](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=112)** But I'm going to configure an IPv4 scope.
>
> **[1:56](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=116)** I will not configure an IPv6 scope at this time.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=120)** And that's because most internal networks aren't using IPv6.
>
> **[2:05](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=125)** There are also policies that can be created, as well as filters.
>
> **[2:09](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=129)** I'm going to switch over to another computer running PowerShell, where I'm going to install DHCP from there.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=136)** I'm in my other domain controller.
>
> **[2:17](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=137)** I'm going to right-click on the Start Menu and go into the PowerShell as the admin.
>
> **[2:24](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=144)** And here I'll type a command.
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=147)** And that's going to be install-windowsfeature, followed by the feature name, DHCP.
>
> **[2:32](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=152)** I also want to include the management tools.
>
> **[2:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=154)** If I don't include the management tools then I won't be able to see the DHCP console.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=159)** The role will be installed but I'll have to manage it from another device such as another server or Windows Admin Center.
>
> **[2:47](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=167)** Even though this is a server role, there is no commandlet in PowerShell to install a server role.
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=173)** So every server role and feature are all installed as a Windows feature, as you see in this command.
>
> **[3:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=180)** Go ahead and hit Enter.
>
> **[3:02](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=182)** Now we can see that the role is being installed.
>
> **[3:06](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=186)** And the DHCP server role has been successfully installed.
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=190)** I should be able to go back to Server Manager, go to Tools.
>
> **[3:13](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=193)** And there's my DHCP manager once again.
>
> **[3:17](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=197)** And now I see DHCP installed on my second server.
>
> **[3:21](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/installing-the-dhcp-server-role?u=76281980&t=201)** The DHCP server role is the first step to adding automatic IP addressing in Windows Server 2022.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (17)
> **Prerequisites:** install (5), configure (3)
> **Tools:** powershell (4)
> **UI Navigation:** go to (2), right-click (1)
> **Code Keywords:** continue (1), switch (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)

#### DHCP authorization
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-authorization?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-authorization?u=76281980&t=0)** - [Instructor] Authorizing servers in DHCP Manager is fairly easy.
>
> **[0:04](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-authorization?u=76281980&t=4)** All you have to do is right click on the server in the DHCP Manager and choose authorize.
>
> **[0:10](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-authorization?u=76281980&t=10)** Now, if it already shows unauthorized, that means it was authorized during the installation.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-authorization?u=76281980&t=15)** On domain controllers you're going to see that many times the DHCP server's going to be authorized simply by installing it.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-authorization?u=76281980&t=22)** Whereas if you installed it onto member servers, then you will have to right click and choose to authorize.
>
> **[0:29](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-authorization?u=76281980&t=29)** Another way to check to make sure that you have authorized servers is you can open up PowerShell.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-authorization?u=76281980&t=36)** You can type in get-dhcpserverindc.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-authorization?u=76281980&t=45)** And we can see my two different servers which are now authorized.
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-authorization?u=76281980&t=51)** Now what I'm going to do is go back into my server.
>
> **[0:54](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-authorization?u=76281980&t=54)** I'm going to unauthorize it.
>
> **[0:58](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-authorization?u=76281980&t=58)** So what that means is that this server, even if it has a scope created and turned on, it will not be able to hand out IP addresses to any particular computers.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-authorization?u=76281980&t=70)** So if I type in the get-dhcpserverindc once again, it only shows my single domain controller.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-authorization?u=76281980&t=77)** Now I'm going to go back, right click and choose to authorize.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-authorization?u=76281980&t=80)** And now my authorization should allow me to set up DHCP on both servers once again.
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-authorization?u=76281980&t=88)** There is no DHCP without authorization in a Windows server.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-authorization?u=76281980&t=93)** This keeps rogue DHCP servers from handing out IP addresses which could be a potential security issue.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (6)
> **CLI Commands:** make (1)
> **Tools:** powershell (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Creating scopes
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=0)** - [Instructor] I'm in my DHCP server, and I'm going to create a scope.
>
> **[0:03](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=3)** A scope allows a certain range of IP addresses to be handed out to client computers.
>
> **[0:10](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=10)** So I'll right-click on IPv4 and choose New Scope.
>
> **[0:13](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=13)** You also have the option for IPv6.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=15)** However, most organizations still use IPv4 for internal use.
>
> **[0:19](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=19)** I'm going to call this Scope 1, but you can give it any name that works for you and a description, if you'd like, and now I'm going to put in the starting IP address.
>
> **[0:28](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=28)** We need to make sure we're using a range of IP addresses that are not currently in use.
>
> **[0:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=34)** Now, if there happens to be an IP address somewhere in the middle of our range, we can go ahead and set up an exclusion, but for now let's try to use a range that's not currently used.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=45)** So I'll put in 21.200 as my starting address and .210 for my ending address.
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=55)** Now, you can see the length is the 24, /24, which is the subnet mask of 255, 255, 255.0 that you see directly beneath it.
>
> **[1:06](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=66)** So these are using what's called octets.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=68)** So that means that it's two to the eighth power for each one of these four octets that you see in the subnet mask.
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=76)** So eight plus eight plus eight is 24, which is how we get the length of 24.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=81)** This also means that our computer host addresses are going to start at a .1 and end at a .254.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=90)** So our range between starting and ending can't be outside of one through 254.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=97)** So I'm going to click on Next.
>
> **[1:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=99)** Now, if I want to add in exclusions, I can do that.
>
> **[1:43](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=103)** I can set up a least duration.
>
> **[1:45](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=105)** I prefer to do one day instead of eight, and that's just because you could run out of IP addresses if people hang onto their IP addresses for too long, and they don't come back into the office.
>
> **[1:55](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=115)** I'm going to click Next.
>
> **[1:56](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=116)** Do I want to set up DHCP options?
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=119)** So what I'm going to do is choose to do this later, and I'm going to click Next because I'm just creating the scope at this time and click Finish, and there's my scope.
>
> **[2:09](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=129)** So if I double-click on it, I can click on my address pool, and we can see there it is.
>
> **[2:13](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=133)** It starts at 200 and goes to 210.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=135)** Now, I've not configured any other options for my scope, and you can see that there is a circle with a red arrow pointing down, which means that I'm not actually activating the scope as of yet.
>
> **[2:28](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=148)** So it's not going to hand out any IP addresses until I activate it.
>
> **[2:32](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=152)** You may decide you don't want to activate a scope yet until you get a chance to deactivate another scope, so you don't have overlapping IP addresses.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=159)** Now I'm going to go into PowerShell, and I'm going to type a PowerShell commandlet that will allow me to do the same thing, but instead of doing it through the graphical user interface, I'm going to do it through PowerShell.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=172)** At this time, I'm going to add another scope called Scope 2, and you can see this scope starts at 220 and ends at .230.
>
> **[3:01](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=181)** It has the same subnet mask of three 255s, .0, and this time it's going to make the scope active, instead of non-active.
>
> **[3:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=192)** Now, before I can enter this scope, I've got to delete my existing scope.
>
> **[3:16](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=196)** Otherwise, even though it's not using the same address range, it is using the same subnet, and that's not allowed.
>
> **[3:22](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=202)** So I'll right-click and choose to delete my current scope, and then I'll go back to PowerShell, and now I can press Enter, and now my scope is active.
>
> **[3:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=215)** It's turned on, and I'll just hit F5 to refresh, and there's my new scope called Scope 2.
>
> **[3:42](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=222)** If I click on the address pool range, we see the new starting and ending IP addresses.
>
> **[3:49](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/creating-scopes?u=76281980&t=229)** DHCP scope supply the range of IP addresses for our client computers and other devices.

> [!info]- Semantic Content
>
> **UI Navigation:** right-click (2), click on (2), double-click (1)
> **Code Keywords:** delete (2), let (1), interface (1)
> **Tools:** powershell (4)
> **Env Vars:** dhcp (3)
> **Definitions:** means that (2), is a  (1)
> **Prerequisites:** set up (3)
> **CLI Commands:** make (2)
> **Versions:** 21.200 (1), 255.0 (1)

#### Configuring DHCP options
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/configuring-dhcp-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/configuring-dhcp-options?u=76281980&t=0)** - [Instructor] I've previously added a scope and an address pool.
>
> **[0:03](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/configuring-dhcp-options?u=76281980&t=3)** However, now I should add some scope options.
>
> **[0:06](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/configuring-dhcp-options?u=76281980&t=6)** Scope options gives me some additional capabilities such as specifying the DNS servers, the gateway, and many other things.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/configuring-dhcp-options?u=76281980&t=15)** I want to right click on scope options and choose configure options.
>
> **[0:19](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/configuring-dhcp-options?u=76281980&t=19)** Now, we can see a lot of different scope options available.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/configuring-dhcp-options?u=76281980&t=22)** I'm going to start with the router.
>
> **[0:25](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/configuring-dhcp-options?u=76281980&t=25)** The router is the way we get out to the internet.
>
> **[0:27](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/configuring-dhcp-options?u=76281980&t=27)** So, I'm going to put in 192.168.21.1, which is my particular subnet.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/configuring-dhcp-options?u=76281980&t=33)** So, I'll click add and apply.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/configuring-dhcp-options?u=76281980&t=37)** Now, we can see the router.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/configuring-dhcp-options?u=76281980&t=39)** So, when the client gets the IP address, it will not only get an IP address, a subnet mask, it'll also get this router which is my gateway out to the internet.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/configuring-dhcp-options?u=76281980&t=49)** I'm going to go back into configure options.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/configuring-dhcp-options?u=76281980&t=52)** I can choose many different things.
>
> **[0:54](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/configuring-dhcp-options?u=76281980&t=54)** One of 'em is going to be the DNS server.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/configuring-dhcp-options?u=76281980&t=56)** So, I'm going to put in my two domain controllers, 192 and 6821.195 is one of them.
>
> **[1:05](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/configuring-dhcp-options?u=76281980&t=65)** And it did do a confirmation that it was correct.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/configuring-dhcp-options?u=76281980&t=68)** Now, I'll put in the second one and click add.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/configuring-dhcp-options?u=76281980&t=74)** I can also put in the server name and just have it resolve it, as well.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/configuring-dhcp-options?u=76281980&t=78)** And once again, I'll click apply and there we can see our DNS servers.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/configuring-dhcp-options?u=76281980&t=83)** I'm going to scroll down a little bit until I get to number 15, which is the DNS domain name.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/configuring-dhcp-options?u=76281980&t=90)** So, I'm going to put that in as my domain name for active directory.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/configuring-dhcp-options?u=76281980&t=97)** And after applying that, you can see that appear.
>
> **[1:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/configuring-dhcp-options?u=76281980&t=99)** So, you see there's a lot of other options.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/configuring-dhcp-options?u=76281980&t=101)** Now, most of these are no longer in use or rarely used but at some time they were, and in some cases you'll need to actually go in and add your own available options if needed.
>
> **[1:52](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/configuring-dhcp-options?u=76281980&t=112)** And there is a procedure for that, as well.
>
> **[1:56](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/configuring-dhcp-options?u=76281980&t=116)** DHCP scope options make DHCP more usable by adding capabilities to DHCP clients.

> [!info]- Semantic Content
>
> **Env Vars:** dns (4), dhcp (3)
> **Prerequisites:** configure (2), you'll need (1)
> **Versions:** 192.168.21 (1), 6821.195 (1)
> **UI Navigation:** click on (1), scroll down (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Scope activation
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/scope-activation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/scope-activation?u=76281980&t=0)** - [Instructor] In the DHCP Manager, if you notice that your computers are not getting IP address leases, as you see here there are no leases that have been handed out, it could be that your scope has been deactivated.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/scope-activation?u=76281980&t=11)** So take a look at the scope.
>
> **[0:13](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/scope-activation?u=76281980&t=13)** You'll see this circle with the red arrow pointing down.
>
> **[0:16](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/scope-activation?u=76281980&t=16)** You might also see under IPv4 right above it a blue circle with an exclamation point letting you know there's something wrong.
>
> **[0:23](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/scope-activation?u=76281980&t=23)** So to fix that, it's pretty easy.
>
> **[0:25](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/scope-activation?u=76281980&t=25)** You just right click on it and choose to Activate.
>
> **[0:28](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/scope-activation?u=76281980&t=28)** And once that happens, we see that the circle goes away, and the IPv4 blue circle turns into a green circle with a check mark.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/scope-activation?u=76281980&t=36)** Activating a scope is required before a scope will start sending out IP addresses to clients.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### Client configuration for DHCP
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-configuration-for-dhcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-configuration-for-dhcp?u=76281980&t=0)** - [Instructor] In order to set up a client for DHCP, we need to make sure the IP address is not being statically set.
>
> **[0:07](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-configuration-for-dhcp?u=76281980&t=7)** So I'm going to go to the search box, type in cmd for command and open the command prompt and I'm going to type ipconfig/all as my command.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-configuration-for-dhcp?u=76281980&t=21)** And what I'm looking for is to see if DHCP is currently handing out an IP address and it says here DHCP enabled and the answer is no.
>
> **[0:31](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-configuration-for-dhcp?u=76281980&t=31)** So I know my IP address is being statically set.
>
> **[0:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-configuration-for-dhcp?u=76281980&t=34)** So now I can go into my network and sharing center or I can go into system settings and then I can go to make the change so it goes from static to dynamic.
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-configuration-for-dhcp?u=76281980&t=47)** So I'll click on settings and I'll choose network and internet.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-configuration-for-dhcp?u=76281980&t=53)** Next, I'll click on Ethernet and under IP assignment, we can see that it's set to manual.
>
> **[0:58](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-configuration-for-dhcp?u=76281980&t=58)** That's another way of saying it's statically set so it's always going to be the same IP address every time, but it's being done on the computer itself.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-configuration-for-dhcp?u=76281980&t=67)** So I want to change this from being manually set to being dynamically or automatic.
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-configuration-for-dhcp?u=76281980&t=72)** So I'll click automatic, click save, and now it's switching over to DHCP.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-configuration-for-dhcp?u=76281980&t=80)** You can see my IP address has changed to .224 whereas before it was set to .103.
>
> **[1:26](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-configuration-for-dhcp?u=76281980&t=86)** So if I go back to my command prompt and I do the ipconfig/all once again, we can see there's my IP address set to .224.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-configuration-for-dhcp?u=76281980&t=97)** Also take a look at the DHCP enabled at the very top.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-configuration-for-dhcp?u=76281980&t=101)** It says yes.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-configuration-for-dhcp?u=76281980&t=102)** And under DHCP server, we see it's 192.168.21.129 which is one of my DHCP servers.
>
> **[1:52](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-configuration-for-dhcp?u=76281980&t=112)** Changing from static to dynamic IP address allows the DHCP server to hand out the IP information to the client.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (8)
> **UI Navigation:** go to (2), click on (2), open the (1)
> **CLI Commands:** make (2)
> **Code Keywords:** static (2)
> **Tools:** command prompt (2)
> **Versions:** 192.168.21 (1)
> **Cross-References:** go back to (1)
> **Prerequisites:** set up (1)


### 3. Managing DHCP

#### Setting up reservations
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=0)** - [Instructor] A DHCP reservation allows us to have a client or device that would get the same IP upon every time it restarts.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=9)** And the reason that's useful is because sometimes you need to have devices, like printers need to always have the same IP address, so they're always reachable at the same place.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=18)** And if you set up a static IP in a printer instead, and you have say a lot of printers in your office, and they all need to have the IP addresses changed, that would require a lot of effort.
>
> **[0:28](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=28)** However, with the reservation, you can change that fairly easily right from the DHCP management console.
>
> **[0:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=34)** So I'm going to give this particular reservation a name of Client2.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=39)** And I'm going to give it the IP address of 192 dot 168 dot 21 dot 231.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=46)** Now I need the MAC address.
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=47)** So I'm going to go down to my Command Prompt, and I'm going to type arp space minus a.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=53)** So if I've communicated with the device that I'd like to set up to have the same IP every time, then it will show up here under physical addresses.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=60)** This is another way of looking at Media Access Control or MAC addresses.
>
> **[1:05](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=65)** And we can just pick out whichever one it is that is currently having an IP address, say, for dot 90, and then copy it.
>
> **[1:15](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=75)** And then I'm just going to go ahead and right-click and paste that in.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=78)** If you don't see it in the list, just go ahead and ping it first and then type arp space minus a, and it will show up.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=85)** We also want to leave both supported types, DHCP and bootP.
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=89)** BootP is more of a legacy type of technology, but there are some devices that still support it.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=94)** Under the Description, you can type in anything you want.
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=96)** I'll just also type in Client2 and click Add.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=100)** I'm going to click Close.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=102)** And we can see Client2 is showing up as dot 231.
>
> **[1:45](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=105)** And we know that's within our address pool of dot 220 through dot 235.
>
> **[1:52](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=112)** Now let's take a look at the same way of doing this, but through PowerShell.
>
> **[1:56](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=116)** So I'm going to right-click and choose PowerShell, open that up.
>
> **[2:01](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=121)** And I've typed in a command called Add dash DhcpServerv4Reservation.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=127)** So we know this is for an IPv4 reservation.
>
> **[2:10](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=130)** And the ScopeID is not the scope name.
>
> **[2:13](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=133)** It's simply the subnet you're using, which in this case is the 192 168 dot 21 network.
>
> **[2:19](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=139)** After that, it's going to be the reservation IP address which is at 230.
>
> **[2:24](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=144)** And we know that falls within our scope.
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=147)** Next, we have the client ID.
>
> **[2:28](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=148)** This is the physical address or MAC address of the network card that's burned in to every single card.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=155)** After that, we have the description followed by the name, client1.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=159)** Hit Enter.
>
> **[2:40](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=160)** And it's complete.
>
> **[2:42](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=162)** Now go down and hit F5 for refresh.
>
> **[2:46](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=166)** And there is Client1.
>
> **[2:48](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=168)** So if I double-click on it, we can see it's also going to supply the router IP and DNS servers, just as it would with Client2.
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=175)** And that's because it's also under the scope options that you see here.
>
> **[3:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-reservations?u=76281980&t=180)** DHCP reservations can save a lot of time managing devices that aren't statically set, but need the same IP address upon every reboot.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (4), mac (3), dns (1)
> **Code Keywords:** static (1), require (1), let (1), this, (1)
> **Tools:** powershell (2), command prompt (1)
> **UI Navigation:** right-click (2), double-click (1)
> **Prerequisites:** set up (2), you need to have (1)
> **Code Identifiers:** bootp (1)
> **Speakers:** - [instructor] (1)

#### Setting up exclusions
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-exclusions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-exclusions?u=76281980&t=0)** - [Instructor] An exclusion is different from a reservation because an exclusion has a device that has a statically set IP address already.
>
> **[0:08](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-exclusions?u=76281980&t=8)** Reservations allow us to set an IP address that a device will always use every time it reboots.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-exclusions?u=76281980&t=15)** If I go into my address pool, I can see there's already a range of IP addresses that are going to be excluded from distribution.
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-exclusions?u=76281980&t=24)** So that means that .225 through .227 will not be assigned to any client device because they're already statically set and it falls within that pool.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-exclusions?u=76281980&t=36)** So for instance, if I set up an exclusion outside of the .220 through the .235, it will just give me an error saying that's not within the range of the pool.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-exclusions?u=76281980&t=46)** So what I'm going to do is choose to create a new exclusion range, which has other IP addresses in it.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-exclusions?u=76281980&t=52)** So I'll put in 192.168.21.228 through 192.168.21.229.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-exclusions?u=76281980&t=63)** In a large scope, you might see multiple different little ranges or individual IP addresses that are going to be excluded from the pool because of those devices that are statically set.
>
> **[1:15](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-exclusions?u=76281980&t=75)** So I'm going to click add and close.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-exclusions?u=76281980&t=78)** If I'd like to delete a previously set up exclusion, I can just right-click on it and choose delete.
>
> **[1:26](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-exclusions?u=76281980&t=86)** I'm going to click over on the address leases and see if any of the IP addresses that have already been handed out are in that 228 or 229 range.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-exclusions?u=76281980&t=94)** And we see that they are not.
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-exclusions?u=76281980&t=96)** If we did see any here, all we'd have to do is just right-click on any of those leases.
>
> **[1:43](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-exclusions?u=76281980&t=103)** And I'll do that to this desktop lease that you see here and choose delete.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-exclusions?u=76281980&t=109)** And then when that device gets an IP address after this, it will get it outside of that exclusion zone.
>
> **[1:56](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/setting-up-exclusions?u=76281980&t=116)** DHCP exclusions solve the problem of what to do when you have statically set an IP address and it cannot be changed for a specific reason, but you also don't want to create a duplicate IP address with another device.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (3), this, (1)
> **Versions:** 192.168.21 (2)
> **UI Navigation:** right-click (2)
> **Prerequisites:** set up (2)
> **Env Vars:** dhcp (1)
> **Definitions:** means that (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Import and export databases
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/import-and-export-databases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/import-and-export-databases?u=76281980&t=0)** - [Instructor] Sometimes we need to retire an older DHCP server and replace it with a new one, but we don't want to have to go in and recreate all the different DHCP configurations that we've already done.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/import-and-export-databases?u=76281980&t=12)** So we can back up and restore to a new server.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/import-and-export-databases?u=76281980&t=15)** Let's start by adding the new server.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/import-and-export-databases?u=76281980&t=17)** I'll right-click on DHCP in my management console and click to add server.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/import-and-export-databases?u=76281980&t=22)** Now I'm going to choose the authorized DHCP server called DC2 and click OK And I can see there's nothing yet configured on here, there's no DHCP address pool, or server options, or anything else.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/import-and-export-databases?u=76281980&t=37)** So I want to import that information from DC01 one into DC2.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/import-and-export-databases?u=76281980&t=43)** So I'm going to right click on DC01 one and choose to backup.
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/import-and-export-databases?u=76281980&t=47)** And you want to choose the default location, which is the system 32, DHCP and then backup folder.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/import-and-export-databases?u=76281980&t=53)** And the reason for that is because it has all the correct permissions needed for a backup and restore.
>
> **[0:59](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/import-and-export-databases?u=76281980&t=59)** If you try to use any other location you may end up getting an error.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/import-and-export-databases?u=76281980&t=62)** So I'll click OK, and there is no confirmation that it has been backed up, but it usually only takes a few seconds.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/import-and-export-databases?u=76281980&t=68)** Now I'm going to go to DC2 and I'm going to right-click and I'm going to choose restore.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/import-and-export-databases?u=76281980&t=74)** And once again, I'm going to choose the default location and click yes, and it says the database was restored successfully.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/import-and-export-databases?u=76281980&t=85)** So I'll expand my IPv4 and take a look at my scope, and there it is.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/import-and-export-databases?u=76281980&t=92)** I want to make sure I deactivate the existing scope, so that way we don't have any duplicate IP addresses, click Yes, and we can also see our scope options have imported as well.
>
> **[1:44](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/import-and-export-databases?u=76281980&t=104)** Backup and restore serves two purposes, one is to back up the database in case of a disaster, and the other is to use the database to populate a new DHCP server with all the configuration options of the existing one.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (7), dc2 (3), dc01 (2)
> **UI Navigation:** right-click (2), click on (1), go to (1)
> **Code Keywords:** let (1), else. (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Scope reconciliation
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/scope-reconciliation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/scope-reconciliation?u=76281980&t=0)** - [Instructor] As time passes, you may experience what's called DHCP drift.
>
> **[0:04](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/scope-reconciliation?u=76281980&t=4)** And that means the contents of the DHCP database no longer reflects what's actually happening on your network.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/scope-reconciliation?u=76281980&t=11)** There's not a lot of documentation on this, but we can use the DHCP management console to reconcile our database fairly easily.
>
> **[0:20](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/scope-reconciliation?u=76281980&t=20)** So we'll open up the DHCP console, and I'll expand the server, and I'm going to go to the scope and right-click on the scope, and choose Reconcile.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/scope-reconciliation?u=76281980&t=35)** Now we don't see anything in there.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/scope-reconciliation?u=76281980&t=36)** So I'm just going to click on Verify to confirm.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/scope-reconciliation?u=76281980&t=39)** And it says the database is consistent.
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/scope-reconciliation?u=76281980&t=41)** If you were to get a message that said the database was not consistent, you would have the opportunity to fix that.
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/scope-reconciliation?u=76281980&t=47)** And then that would make it so all the databases matched up properly to the computers to which they're assigned.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/scope-reconciliation?u=76281980&t=53)** Reconciling a scope is a quick process to make sure your database is consistent.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (4)
> **UI Navigation:** go to (1), right-click (1), click on (1)
> **CLI Commands:** make (2)
> **Code Keywords:** this, (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### DHCP troubleshooting
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=0)** - [Instructor] Sometimes our DHCP server doesn't work the way we expect it to, or isn't working at all.
>
> **[0:04](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=4)** So, I'm going to show you several different ways you can check to make sure your DHCP server is working as it should.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=12)** If the server is not running, then you're definitely going to have a problem, and you can certainly go in and go to all tasks after right clicking on your server and make sure that it has started.
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=24)** You can also choose to restart, which does clear up some issues when you have problems getting IP addresses out to clients, and the service is restarted.
>
> **[0:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=34)** Another thing you want to check for is to make sure that your server is authorized.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=38)** If you right click on your server, make sure it says unauthorized.
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=41)** That means it's already been authorized.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=43)** If it doesn't say that, then go ahead and choose to authorize it.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=48)** A lot of times we just run out of IP addresses on our scope.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=50)** So, if I go to the scope and I go to leases, we can see I have leases from 220 to 231.
>
> **[0:58](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=58)** And if I go to the address pool, my pool is 220 through 235, and there's a couple of addresses that are excluded from distribution.
>
> **[1:06](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=66)** So, in my case, I just have a few IP addresses left.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=69)** So, it would probably be a good idea to expand my scope, and I can do that by going to the properties of the scope, and then typing an IP address that is further down the line.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=87)** You should also take a look at the least duration.
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=89)** Having it there for eight days is too long, and that's because a user may come in with their mobile device or with their laptop, they'll get an IP address, they'll leave, and then that IP address is stuck for the next eight days.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=102)** If you change it to one day, you'll likely have less chances that you'll run out of IP addresses.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=107)** Another thing I've seen is if we go to the address leases and you see something called a bad address, so that does happen sometimes.
>
> **[1:55](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=115)** Sometimes I see dozens of them and you can just go to those addresses, select them, right click, and then just choose delete, and that will clear them out of there and release those IP addresses back.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=126)** Bad addresses can happen sometimes when devices that are not Windows devices, such as Android, Macintosh, iOS devices, things like that.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=135)** Sometimes they don't register properly and they show up as bad devices and they just get stuck there.
>
> **[2:20](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=140)** If you have a lot of static IP addresses in your network, make sure that you have a static list of excluded IP addresses.
>
> **[2:28](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=148)** Otherwise, you may end up with IP addresses that are duplicated on the network and that can cause a lot of problems as well.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=155)** If your staff are getting IP addresses, but they can't get out to the internet it could be when you go to scope options that they're pointing to DNS servers that are no longer valid, maybe they've been retired.
>
> **[2:46](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=166)** It could also be that your router is either set to the wrong IP address, or there's no router set.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=172)** Now, you need to have the router set in order to get out to the internet.
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=175)** That's your hop out to the outside.
>
> **[2:58](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=178)** And if this is set properly and you still can't get out, check to make sure that the firewall and the gateway router are functioning properly.
>
> **[3:06](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=186)** You want to make sure that your firewall is also listening on the proper ports, so I'm going to go to control panel, and I'm going to go to the Windows defender firewall.
>
> **[3:17](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=197)** You could also just go to the search box and type in firewall as well.
>
> **[3:20](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=200)** I'm going to go to the advanced settings, and then go to inbound rules and I've scrolled down to DHCP.
>
> **[3:30](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=210)** So, take a look at all these DHCP Firewall rules.
>
> **[3:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=213)** You want to make sure that the version four, or the version six, depending on which one you're using, have the firewall rules enabled, and if you double click on those you can actually see which ports they're listening on.
>
> **[3:46](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=226)** You see here 67, and this is for UDP, and the other port should be listening on 68.
>
> **[3:55](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=235)** So, if I go to protocols and ports, that one is UDP 68.
>
> **[3:59](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=239)** So, this one is listening properly.
>
> **[4:02](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=242)** If your users are getting IP addresses outside their normal scope, such as a 172 address, when you're using a 192 address, then the likely issue is that you have a rogue DHCP server in your network, and that it may be running Linux or some other operating system.
>
> **[4:17](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-troubleshooting?u=76281980&t=257)** There are many different reasons for DHCP to not work as expected, but if you go through this list of potential issues, you'll likely find the reason for the outage.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (12), click on (2)
> **CLI Commands:** make (8), find (1)
> **Env Vars:** dhcp (6), udp (2), dns (1)
> **Code Keywords:** static (2), case, (1), delete (1)
> **Analogies:** such as (2)
> **Code Identifiers:** ios (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)

#### DHCP filters
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=0)** - [Instructor] In IPv4 scopes we see the option to set up an allow or deny filter.
>
> **[0:06](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=6)** And what this does is it makes it so we can say that certain computers are not allowed or only certain computers are allowed to receive an IP address from our DHCP server.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=17)** So I'm going to start with the allow.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=18)** I'm going to go to more actions on the right hand side and choose a new filter.
>
> **[0:23](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=23)** And here we see the MAC address and a description if you'd like to do it.
>
> **[0:28](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=28)** So we need to get a MAC address before we can go ahead and apply this filter.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=33)** So I'm going to go to, say, command prompt.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=35)** You could also go to PowerShell.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=37)** And I'm going to get a list of various different MAC addresses in my network.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=43)** So there's all my different IP addresses.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=45)** Let's say I would like to take one of these IP addresses and say, you cannot get an IP address from my DHCP server.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=53)** So I'm going to select this physical address, which is also known as the media access control or MAC address that's burned into every network card on a computing device.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=63)** And I'll copy it and I'll paste it in.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=69)** And I'll say, this is called computer Z.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=74)** Now this particular filter is an allow filter.
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=76)** So that means that if the DHCP server sees this MAC address then it's going to allow it to have a DHCP IP address.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=85)** The problem is, is that if I only put in this one computer it means that all other computers are going to be denied.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=92)** So I don't necessarily want to click out on here.
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=95)** I will just for example purposes.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=97)** Because it's going to make it so only the computer that's in this list are going to be able to receive an automatic IP address from this DHCP server.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=108)** So I'm going to right click on that and choose delete.
>
> **[1:51](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=111)** Now I'm going to do the same thing, but I'm going to do it in the deny section.
>
> **[1:55](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=115)** So I'm going to go to more actions, click new filter, this time I'll paste in that same MAC address and I'll give it the same name and I'll click add.
>
> **[2:05](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=125)** Now this does the opposite.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=126)** What this does is this says all computers are going to be allowed to receive an IP address from this DHCP server with the exception of any computer that's in the deny list.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=138)** And in this case, I just have the one computer.
>
> **[2:21](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=141)** So this computer will not receive an IP address from DHCP.
>
> **[2:26](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=146)** I also need to go over to more actions and choose to enable if I want to have that start.
>
> **[2:31](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=151)** Otherwise the list will be there but it won't actually start working until you enable it.
>
> **[2:36](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=156)** And if you change your mind, you can just go back in and disable it.
>
> **[2:40](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=160)** Or you can right click and you can delete those filters.
>
> **[2:45](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-filters?u=76281980&t=165)** MAC address filters in a computer network can keep unknown or unwanted devices from being added into DHCP, which can increase your network security.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (8), mac (7)
> **UI Navigation:** go to (4), click on (1)
> **Definitions:** means that (2), known as (1), is called (1), is an  (1)
> **Code Keywords:** delete (2), let (1), case, (1)
> **Tools:** command prompt (1), powershell (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)


### 4. Advanced DHCP

#### DHCP failover and high availability
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-and-high-availability?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-and-high-availability?u=76281980&t=0)** - [Instructor] DHCP failover allows us to fail over from one server to another by having two DHCP servers and right clicking on one server and creating a failover on another.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-and-high-availability?u=76281980&t=12)** This will give us failover from one to the other as needed.
>
> **[0:16](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-and-high-availability?u=76281980&t=16)** High availability is a bit different than failover.
>
> **[0:19](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-and-high-availability?u=76281980&t=19)** Having a failover server does create high availability because the service is available in case of a single server failure, but we can create high availability without failover as well.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-and-high-availability?u=76281980&t=32)** And we do this by creating a scope on two or more servers that don't overlap each other.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-and-high-availability?u=76281980&t=39)** If one server fails, then the other server continues to serve IP addresses but does so in a scope that doesn't overlap the first.
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-and-high-availability?u=76281980&t=47)** Windows is unique from many other DHCP servers in that it offers multiple ways to create high availability and redundancy in a DHCP configuration.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (4)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### DHCP failover setup
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=0)** - [Instructor] A great way to add high availability and redundancy in your DHCP server is to add failover.
>
> **[0:06](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=6)** I'm in DC01 and I'm going to create a failover with DC2.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=11)** So I'm going to right click on the scope for DC1.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=15)** And I'm going to click on configure failover and a wizard comes up and it finds the available scopes.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=22)** If I had multiple scopes, then I can choose which ones I want by unselecting the select all option.
>
> **[0:28](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=28)** But since I just have the one, we'll go ahead and choose that and click next.
>
> **[0:31](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=31)** Now I need to find my partner server.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=33)** So I know my partner server is called DC2.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=35)** So I'll click on add server and I'll choose DC2 from the list and click next.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=43)** Now I have the options for the mode.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=45)** I can choose load balancing or hot standby.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=48)** Load balancing means that both servers will be active.
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=51)** Hot standby is one server's in active mode and the other one is in standby mode.
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=55)** So it won't actually hand out in the IP addresses until it discovers that the first server is down for some reason, such as a reboot or a crash, things like that.
>
> **[1:05](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=65)** Then you have the maximum client lead time which is how long it's going to wait before it determines that there's some sort of an issue.
>
> **[1:13](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=73)** After that, we have the load balancing percentage and we can see by default, it's set to 50/50.
>
> **[1:19](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=79)** So if you decide you want to have more load on a server that can take more load, then you can change that to 80 and have the other server 20 or whatever percentage you would like.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=90)** Then you have the state switchover interval.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=92)** The first option at the top is the lead time.
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=95)** That just has a determination of when there's an issue discovered.
>
> **[1:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=99)** The other is when it will actually switch over.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=102)** If I uncheck this, it will switch over as soon as it discovers there's a problem.
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=106)** If I check the box and I can determine how many minutes before it actually switches to the other server.
>
> **[1:51](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=111)** I'm going to put in a shared secret.
>
> **[1:56](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=116)** And that will be shared between the two servers.
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=119)** And it shows me the summary page, I'll click finish and it says everything was successful.
>
> **[2:05](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=125)** So now it's good.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=127)** When I go back to my IPv4 on my DC2 server and hit refresh, we can see it's gone ahead and copied my scope one over to the other server.
>
> **[2:19](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=139)** And now you can see it's going to be in active active mode load balancing so that way it will go back and forth between the two servers based on the percentage that I set up.
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=149)** Another option is to use something called server clustering and add the DHCP role to the cluster.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=155)** This does roughly the same thing as failover but it allows for many more redundant servers.
>
> **[2:40](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-failover-setup?u=76281980&t=160)** Failover is a quick way to add redundancy and failover to your DHCP configuration.

> [!info]- Semantic Content
>
> **Env Vars:** dc2 (4), dhcp (3), dc01 (1), dc1 (1)
> **Code Keywords:** switch (2), default, (1), this, (1)
> **UI Navigation:** click on (3)
> **Definitions:** is called (1), means that (1), is a  (1)
> **Prerequisites:** configure (1), set up (1)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Analogies:** such as (1)

#### DHCP relay using switches and routers
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=0)** - [Instructor] DHCP Relay on a Windows server allows the Windows DHCP server to connect to client computers in other VLANs and subnets and give them IP addresses when requested.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=11)** So first we start out with the Windows DHCP server and we have the layer 3 switch in routing mode or an actual router.
>
> **[0:20](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=20)** And we add in the DHCP helper command to forward any request to that Windows DHCP server.
>
> **[0:26](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=26)** After that we have the clients, so when the DHCP clients start up they're going to want an IP address so they can communicate with the local area network as well as the internet and other subnets.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=39)** So they make a request, they send out this request asking any device that can take the request to assign them an IP address.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=48)** The switch or router will then pick up on that request and because of the DHCP helper command that's in the configuration, it will forward that on to the DHCP server that's in the other subnet or VLAN.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=62)** The Windows DHCP server will then send the IP configuration off through the layer 3 switch or router to the DHCP clients and it will assign them an IP address as well as the gateway DNS and any other scope options.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=77)** I'm in a Cisco router and here I can show you the command for ip helper-address followed by the IP address of the Windows DHCP server.
>
> **[1:31](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=91)** And when entering that command, it will then forward on any request from its subnet to the Windows DHCP subnet.
>
> **[1:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=99)** Back in the DHCP manager, we see that there's only the one scope for my local area network.
>
> **[1:43](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=103)** So I need to add a scope for the other network and I'll right click in my IPv4 and choose to create a new scope and the new scope wizard once again begins, and I'll call this one RemoteScope for the other local area network and click next, and I'll put in my starting and ending IP addresses and then of course the length and the subnet mask are going to stay the same, click next.
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=132)** And I'll go ahead and change that to one day and I will configure the router and I'll leave the DNS servers the same way that they are.
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=147)** There are no WINS servers and I will activate the scope.
>
> **[2:32](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=152)** And there's the second scope, which is now referred to as the remote scope for the other LAN.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=159)** There's still another step we need to take and that is to go into server manager and go into add roles and features.
>
> **[2:48](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=168)** And we'll go in and add the remote access role, so I'll click next, choose my server, continue, and then choose remote access.
>
> **[2:58](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=178)** This going to add routing and remote access into our tools menu and server manager.
>
> **[3:06](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=186)** The main thing we need here is going to be routing.
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=190)** It also will add in the direct access and VPN, but that's okay.
>
> **[3:14](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=194)** And now we'll click install.
>
> **[3:16](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=196)** This server role is going to be required in order to set up the DHCP relay that we need to send DHCP IP addresses from this server into the other network.
>
> **[3:28](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=208)** And the installation's complete, so I'll go to tools, routing and remote access and the new management console will show up and we're going to set up some LAN routing configurations.
>
> **[3:41](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=221)** So I need to start by choosing to configure and enable routing remote access.
>
> **[3:48](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=228)** And another wizard appears, I'll choose custom configuration and then LAN routing and click finish.
>
> **[3:58](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=238)** And now it's going to prompt me to start the service, and once it started, we'll see all these new options.
>
> **[4:07](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=247)** The service has started, you can see that it's turned green and now what I would like to do is expand IPv4 and then go to general, next I'll right click on general and choose a new routing protocol and I'll choose the DHCP relay agent which is already selected and click OK.
>
> **[4:27](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=267)** Next I'll click on DHCP relay agent, right click and choose a new interface.
>
> **[4:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=273)** Now, I've got two different interfaces, if you just have the one, you'll only see the one option.
>
> **[4:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=277)** And I know that I want to choose the internal because this is going to be internally routed to that other location, I'll click OK, now we have the hop count threshold and the boot threshold, the hop count threshold basically says how many hops it will go before it drops the DHCP relay request.
>
> **[4:55](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=295)** So at this point, it's set to four.
>
> **[4:57](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=297)** You may want to increase that if there's more than four hops that will go to that to particular location.
>
> **[5:03](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=303)** And you may also decide you want to increase the boot threshold as well, so that way it gives extra time in order to communicate before that will be dropped and then I'll click OK.
>
> **[5:13](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=313)** Now the interface is enabled.
>
> **[5:16](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=316)** Now what's going to happen is the client is going to request an IP address, it's going to go to that Cisco switch or router and it's going to request an IP address from wherever IP helper is pointed.
>
> **[5:30](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-relay-using-switches-and-routers?u=76281980&t=330)** That will point to this particular DHCP server and using the routing and remote access DHCP relay agent, it will relay that IP request back to the client.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (20), lan (3), dns (2), vlan (1), wins (1)
> **Code Keywords:** switch (4), interface (2), continue (1)
> **UI Navigation:** go to (4), click on (2)
> **Prerequisites:** configure (2), set up (2), install (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### Routing using DHCP
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/routing-using-dhcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/routing-using-dhcp?u=76281980&t=0)** - [Instructor] There are some scenarios where you're going to want to set up a static route that allows a client to go from one subnet to another using DHCP to set that up.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/routing-using-dhcp?u=76281980&t=12)** Here we have a layer three switch or router that's connecting two different subnets.
>
> **[0:16](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/routing-using-dhcp?u=76281980&t=16)** I have a wired client and this wired client is going to need an IP address and some static routing information.
>
> **[0:25](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/routing-using-dhcp?u=76281980&t=25)** So it looks to the layer three switch to find the DHCP server, which it does.
>
> **[0:31](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/routing-using-dhcp?u=76281980&t=31)** The DHCP server then hands not only the client an IP address, subnet mask and gateway, but also a classless static route to our other network where our client can then access the file server in the other subnet or VLAN.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/routing-using-dhcp?u=76281980&t=48)** And we can do that right from our DHCP server.
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/routing-using-dhcp?u=76281980&t=51)** I'm in DHCP manager in my scope options.
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/routing-using-dhcp?u=76281980&t=55)** And what I'm going to do is right click and choose configure options.
>
> **[0:58](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/routing-using-dhcp?u=76281980&t=58)** And then I'm going to scroll all the way down to the classless static routes and check that box.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/routing-using-dhcp?u=76281980&t=64)** And then I'm going to click on the add route option.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/routing-using-dhcp?u=76281980&t=68)** Now, what this is going to do is it's going to give me the route to this other network.
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/routing-using-dhcp?u=76281980&t=72)** And that network is going to be 192.168.22.0 with a subnet mask or network mask 'cause it's also known of 255 three times and zero.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/routing-using-dhcp?u=76281980&t=85)** Now we need to know what router is going to get us to that 22 network because we're on the 21 network.
>
> **[1:31](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/routing-using-dhcp?u=76281980&t=91)** And my router is at 21.1.
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/routing-using-dhcp?u=76281980&t=95)** So if I need to get to a server that stays on 192.168.22.100, it's going to go through the 21.1 gateway off to the 22 network and then on to that 22.100 server.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/routing-using-dhcp?u=76281980&t=109)** Now why is it called classless?
>
> **[1:51](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/routing-using-dhcp?u=76281980&t=111)** It's called classless because we don't have to stick with the typical class that a specific IP address has.
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/routing-using-dhcp?u=76281980&t=119)** So for instance a 192.168 network is typically a class C network.
>
> **[2:04](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/routing-using-dhcp?u=76281980&t=124)** It doesn't have to be.
>
> **[2:05](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/routing-using-dhcp?u=76281980&t=125)** I could change the subnet mask to 255.255.0.0 which would typically be a class B network.
>
> **[2:13](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/routing-using-dhcp?u=76281980&t=133)** But because it's classless, it's not going to be labeled as A, B or C.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/routing-using-dhcp?u=76281980&t=138)** It's going to use that subnet mask or network mask to go ahead and decide how many usable hosts it's going to have in that network.
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/routing-using-dhcp?u=76281980&t=147)** And in this particular case, it's hosts one through 254 or 254 addresses.
>
> **[2:32](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/routing-using-dhcp?u=76281980&t=152)** I'll go ahead and click OK and OK again.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/routing-using-dhcp?u=76281980&t=155)** And there's my classless static route.
>
> **[2:38](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/routing-using-dhcp?u=76281980&t=158)** Classless static routing using DHCP is sometimes easier to use instead of setting up routing on multiple devices.

> [!info]- Semantic Content
>
> **Code Keywords:** static (6), switch (2), case, (1)
> **Env Vars:** dhcp (6), vlan (1)
> **Versions:** 192.168.22 (2), 21.1 (2), 22.100 (1), 192.168 (1), 255.255.0 (1)
> **UI Navigation:** switch to (1), click on (1)
> **Prerequisites:** set up (1), configure (1)
> **CLI Commands:** find (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### DHCP policies
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=0)** - [Instructor] By setting up DHCP policies, we can provide granular control over scopes that will allow us to assign different IP addresses or scope options based on a new device type or its role.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=12)** Policies are applicable for a specific scope with a defined processing order.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=18)** Inside my scope, I'm going to go to where it says IPv4 and right click and choose to define vendor classes.
>
> **[0:28](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=28)** It already has some pre-defined policies for things like Windows 2000, Windows 98, things like that.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=33)** I'm going to click on add to create a new one.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=37)** And I'm going to use this for my Nortel phones.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=40)** This may be one of the times where you need to create a new class because no existing class is going to assist you in setting this up.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=50)** Under the description I'll put in desk phones.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=53)** And in the ask E section, I'm going to put in what Nortel tells us to add in.
>
> **[0:58](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=58)** This is one of the things that you'll need to do as assist admin if you are managing DHCP.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=64)** You'll need to look to the vendor when you see a new type of class because they're going to tell you what you need to type in.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=71)** So I'll put in Nortel-I2004-A and click OK.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=80)** Now I can see my Nortel phones.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=82)** I can go ahead and click close.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=84)** Now it's time to go over to policies and create a new policy by right clicking and choosing new policy.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=90)** And we get a wizard that shows up.
>
> **[1:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=93)** I'll call this policy one and click next.
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=95)** Now I'm going to click add under the configure conditions for the policy.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=100)** So for the criteria, this is going to be a vendor class.
>
> **[1:44](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=104)** And once again, you'll get this information from the vendor themselves on what criteria they need inside this new configuration wizard.
>
> **[1:52](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=112)** And I'll leave the operator as equal.
>
> **[1:54](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=114)** So if you hit the dropdown, you also have the option for not equals.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=118)** Then for the value, I'm going to hit the dropdown again and choose Nortel phones, which I just created.
>
> **[2:04](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=124)** Once that's done, I'll click add.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=126)** And as far as the prefix or the append wild card, you'll need to follow the directions once again from the vendor.
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=132)** So I'll click OK.
>
> **[2:14](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=134)** I'm going to click next.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=136)** And now we see a lot of different options here.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=138)** These are the same options that you would see if you right clicked on your scope options and just went ahead and clicked on configure options.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=145)** So if the vendor does require any of these options for the Nortel phones in this particular example, then you would check the boxes and then you would type in whatever it is that they said needs to be typed in.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=157)** So I'll click next and everything looks the way I expect.
>
> **[2:41](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=161)** So I'll click finish and there's my policy.
>
> **[2:45](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=165)** There are dozens of policies that can be created on a Windows DHCP server.
>
> **[2:49](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dhcp-policies?u=76281980&t=169)** You may find you need to add a new option when you purchase devices from a new vendor that requires DHCP policies.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (4), i2004 (1)
> **Prerequisites:** you'll need (3), configure (2)
> **UI Navigation:** dropdown (2), go to (1), click on (1)
> **Code Keywords:** class. (1), require (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Split scope
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=0)** - [Instructor] Failover allows us to replicate a scope from one DHCP server to another, but we can also do a different type which adds redundancy in case one of the servers goes down.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=11)** And that is called a split scope.
>
> **[0:13](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=13)** I'm going to do a manual split scope here.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=15)** We can see here's our Scope1 already set up with an address pool of 192.168.21.220 through 240.
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=24)** Let's say that I don't want to necessarily have one server handle all those.
>
> **[0:30](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=30)** So I'm going to change this to only go to 230 instead.
>
> **[0:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=34)** Now, I'm going to create another scope, but this time, it's going to be on dc2.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=39)** So I'll create the new scope.
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=41)** And I'll call this one Scope2, click Next.
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=47)** And I'll put in my IP addresses, 231 to 240.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=57)** So this covers the other IP addresses from that original scope that I had removed.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=62)** I'll click Next.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=64)** And I'll just go ahead and go through this portion but without any type of special configuration, just to show how the scope works.
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=72)** So now we can see on my dc2 that my scope is set to 231 through 240.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=78)** And my scope from the dc01 is from 220 to 230.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=83)** I'll need to activate my scope.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=85)** I right clicking on it.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=87)** And now I have a split scope.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=90)** So what's going to happen is, it's going to assign the IP addresses using whichever server is going to respond first.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=97)** So if dc01 is the first one to respond, it'll hand out one of its IP addresses.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=102)** If dc2 does, it'll hand out one of its IP addresses.
>
> **[1:45](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=105)** And then if for some reason dc01 goes down, then dc2 will be the only server that hands out IP addresses.
>
> **[1:53](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=113)** And the advantage of the split scope is, these scopes don't overlap in any way.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=118)** They are in the same subnet, but they don't overlap each other so you cannot accidentally give out the same IP address twice.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=126)** You can also more easily edit one server or the other compared to a failover type of high availability.
>
> **[2:13](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=133)** And that's because when you edit one in a failover, it goes ahead and edits the other as well.
>
> **[2:19](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=139)** This way, I could go in and I could change my scope by right clicking and then going to Properties, and then I could say this one's going to go now to 245.
>
> **[2:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=153)** And it doesn't affect the original one at all.
>
> **[2:36](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/split-scope?u=76281980&t=156)** Splitting the scope into two servers does require a bit more management as you now need to monitor two servers instead of one for any type of failure.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), require (1)
> **Env Vars:** dhcp (1)
> **Versions:** 192.168.21 (1)
> **UI Navigation:** go to (1)
> **Definitions:** is called (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 5. DNS Overview

#### DNS importance with Active Directory
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-importance-with-active-directory?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-importance-with-active-directory?u=76281980&t=0)** - [Instructor] Active directory, domain services uses domain name system, name, resolution services to connect clients to domain controllers and for the domain controllers that host the directory services to communicate with each other.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-importance-with-active-directory?u=76281980&t=15)** It has features such as active directory integrated DNS zones, and it makes it easier for us to deploy DNS by eliminating the need to set up secondary zones and then configure zone transfers and replication.
>
> **[0:30](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-importance-with-active-directory?u=76281980&t=30)** DNS makes it possible to translate names to IP addresses.
>
> **[0:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-importance-with-active-directory?u=76281980&t=34)** These names are called records and they are located in zones on a DNS server.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-importance-with-active-directory?u=76281980&t=40)** They can be managed through the DNS manager on a Windows server.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-importance-with-active-directory?u=76281980&t=43)** Prior to active directory, DNS wasn't that important to managing users back in the NT 4.0 days.
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-importance-with-active-directory?u=76281980&t=51)** Once active directory was invented DNS became an integral part of active directory to the point where active directory can't run without DNS.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-importance-with-active-directory?u=76281980&t=62)** Active directory will always be dependent on DNS and understanding how those two services work together can make a potential Sys admin highly employable.

> [!info]- Semantic Content
>
> **Env Vars:** dns (9)
> **Prerequisites:** set up (1), configure (1)
> **CLI Commands:** make (1)
> **Versions:** 4.0 (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### DNS manager overview
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=0)** - [Instructor] When we have a domain controller and a Windows active directory domain and forest, it automatically adds in the DNS server.
>
> **[0:08](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=8)** This particular server is a domain controller.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=11)** If I open up active directory users and computers, I go to domain controllers, and you can see my two domain controllers.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=18)** Minimize, and now I'll go to tools, and I'll go to DNS.
>
> **[0:23](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=23)** This opens up the DNS management console, and here I can see my active directory forest and domain DNS zones.
>
> **[0:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=34)** This is the actual DNS zone for the domain.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=37)** However, this MSDCS domain, and that domain replicates automatically with every other domain controller in the domain and forest.
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=47)** So you don't want to delete or make any changes to this particular zone that you see here.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=52)** This zone, you can make changes to.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=56)** You can right click and create some new records, you can go to reload the zone, you can refresh, you can do all different kinds of things, you can even go into properties and make changes on any one of these six tabs.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=70)** I've gone ahead and added the other domain controller as well.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=74)** It also has DNS on it because it is a domain controller.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=77)** And it has replicated all the other records from the first domain controller to the second domain controller.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=82)** So we can see the same two zones, and the same records as well.
>
> **[1:26](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=86)** If we had any other zones such as reverse lookup or any other configuration, then it would replicate there as well as long as we created the zone as an active directory integrated zone.
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=98)** This is one of the options that you have if you decide to create any new zones.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=102)** So you can see here under the type it is active directory integrated.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=107)** That means it's going to be replicated to all other DNS servers in the domain.
>
> **[1:52](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=112)** The forward lookup zones will resolve names to IP addresses.
>
> **[1:57](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=117)** So for instance, you can see a host record has a name of file server.
>
> **[2:01](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=121)** File server is the name that you want to reach and it will automatically translate that to the IP address so it can open that up by IP address although you don't have to memorize that, you only have to know the name of the server.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=135)** The reverse lookups which we don't have any yet do the opposite, they go from IP address to name.
>
> **[2:22](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=142)** And there are certain applications, certain utilities, things like that, that like to use reverse lookup zones.
>
> **[2:28](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=148)** You don't have to have them, but if you do have them, sometimes it makes DNS resolution much faster.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=155)** Then there are things called trust points and conditional forwarders.
>
> **[2:40](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=160)** A trust point is also called a trust anchor and this is going to be a public cryptographic key for a signed zone.
>
> **[2:48](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=168)** So if we sign our zone, that basically is going to encrypt that zone traffic then it's going to keep the key in this trust point area.
>
> **[2:56](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=176)** Now, if we click on the conditional forwarders, what this does is it allows us to forward any traffic to a specific zone.
>
> **[3:04](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=184)** Whereas if we do a forwarder in the server itself by going to properties and forwarders, what this does is it sends off traffic for anything that's not found internally off to a public resource.
>
> **[3:15](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=195)** But with a conditional forwarder, you can send off just specific zones rather than all zones that aren't local.
>
> **[3:23](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=203)** There are a lot of great things to learn in Windows DNS.
>
> **[3:26](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-manager-overview?u=76281980&t=206)** Knowing DNS well can make you highly employable in the IT field.

> [!info]- Semantic Content
>
> **Env Vars:** dns (10), msdcs (1)
> **UI Navigation:** go to (4), click on (1)
> **CLI Commands:** make (4)
> **Code Keywords:** public (2), delete (1)
> **Definitions:** is a  (2)
> **Analogies:** such as (1), for instance (1)
> **Speakers:** - [instructor] (1)

#### Important Active Directory DNS records
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=0)** - [Instructor] I want to demonstrate what are the most important records in a DNS zone when it's created.
>
> **[0:06](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=6)** Now, in this particular DNS zone, it's on an active directory domain controller.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=11)** So, we have these particular zones, the LIL.int, as well as the msdcs.LIL.int.
>
> **[0:19](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=19)** And these particular zones on a domain controller mean that these records can be changed by whoever is logged in with administrative rights.
>
> **[0:30](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=30)** And you're going to see two different records here that are really important.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=35)** The first one is the start of authority.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=37)** This means that if you have this record in the zone, on your server, you can make changes to this particular zone.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=45)** So, for instance, I can go in and I can create a new record or I could take a record that already exists and I can go in and just delete it.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=53)** And you cannot do that if this is what's called a secondary zone.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=57)** A secondary zone has a read only copy of the zone.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=62)** Another type of zone which is read only is called a stub zone.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=67)** Neither of these zones are going to have the start of authority within their particular zone.
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=72)** Instead, they're going to be pointing back to this particular server or to DC2, which also has that same start of authority record.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=82)** Let's take a look at another important record and this is going to be the name "Server Record."
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=88)** The name "Server Record" basically tells anybody who's asking who has the zone for this particular record that it is located in this particular server.
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=98)** So if, for instance, if I want to know where file server is and what its IP address is, then I'm going to put out a request for a name server.
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=106)** Where's the name server for fileserver.LIL.int?
>
> **[1:51](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=111)** Where is that IP address?
>
> **[1:52](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=112)** And then when you put out that request, you can see either one of these two servers DC01 or DC2 are going to respond and say, "We have those records."
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=123)** And then supply it to your computer so you can get to file server to look up your files.
>
> **[2:09](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=129)** Let's take a look at some of these different folders.
>
> **[2:13](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=133)** When you double click and drill down, you're going to see some other important records.
>
> **[2:17](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=137)** And one of those is going to be the GC.
>
> **[2:19](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=139)** The GC is going to point to wherever the global catalog is.
>
> **[2:24](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=144)** The global catalog has a copy of all of the different objects and passwords in active directory on a domain controller.
>
> **[2:31](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=151)** And once again, we can see there's a GC record or global catalog record for DC01, as well as for DC02.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=159)** If there's any other servers that are added in the future, those will be added here, as well.
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=163)** And then we also see something else called "Kerberos."
>
> **[2:47](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=167)** Kerberos is used for authentication.
>
> **[2:50](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=170)** So, when you type in your username and your password, even if you have multifactor authentication, it's going to find out where the Kerberos servers are.
>
> **[2:59](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=179)** And again, it's going to look for the domain controllers DC01 and DC2, and then they're going to then communicate with active directory and authenticate your username and password so you can log in.
>
> **[3:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=192)** So, you can see how important having a Kerberos record is.
>
> **[3:16](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=196)** And then, the last one is going to be the LDAP record.
>
> **[3:19](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=199)** This stands for Lightweight Directory Application Protocol.
>
> **[3:22](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=202)** And what this is, is a lookup record.
>
> **[3:25](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=205)** When once again, you go to log in, it's going to need to know what server has all this information on it.
>
> **[3:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=213)** So, it uses LDAP to look that up.
>
> **[3:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=215)** Now, I've used LDAP in other operating systems besides Windows, for instance, I've used a Linux spam filter, and when an email comes in for a user, it uses LDAP to find out if that user exists in active directory.
>
> **[3:52](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=232)** And if they do it will forward on that email to their particular mailbox as long as it's not marked as spam.
>
> **[3:59](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=239)** And it needs that LDAP record to find out where the LDAP servers are.
>
> **[4:05](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=245)** All domain controllers are going to be all three.
>
> **[4:06](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=246)** They're going to be by default, a global catalog, a Kerberos, and an LDAP server.
>
> **[4:11](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=251)** It doesn't mean you have to have those.
>
> **[4:13](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=253)** It just shows up there by default, and you need to have at least one that the users devices will be able to reach.
>
> **[4:20](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=260)** Otherwise, these services won't work.
>
> **[4:23](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/important-active-directory-dns-records?u=76281980&t=263)** Important DNS records shouldn't normally be changed, deleted or edited unless corruption or accidental deletion has already taken place.

> [!info]- Semantic Content
>
> **Env Vars:** ldap (7), dns (3), lil (3), dc2 (3), dc01 (3)
> **Code Keywords:** let (2), default, (2), delete (1), if, (1)
> **CLI Commands:** find (3), make (1)
> **Definitions:** means that (1), is called (1), stands for (1), is a  (1)
> **Analogies:** for instance (3)
> **UI Navigation:** go to (1)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)


### 6. Deploying DNS

#### Install DNS on a member server
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-dns-on-a-member-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-dns-on-a-member-server?u=76281980&t=0)** - [Instructor] Although DNS gets installed automatically on a domain controller.
>
> **[0:04](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-dns-on-a-member-server?u=76281980&t=4)** That's not the case for a member server.
>
> **[0:06](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-dns-on-a-member-server?u=76281980&t=6)** I'm on a member server called File Server and I'm going to go ahead and add the DNS role by going to server manager and, add roles and features and keep clicking next until I get to the DNS option.
>
> **[0:20](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-dns-on-a-member-server?u=76281980&t=20)** So I'll go ahead and check the box for DNS server and then click add features., click next.
>
> **[0:28](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-dns-on-a-member-server?u=76281980&t=28)** We can skip the additional features and click install.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-dns-on-a-member-server?u=76281980&t=32)** Having a DNS server on a non domain controller allows us to create zones or even replicate zone traffic from one domain server to this particular file server.
>
> **[0:44](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-dns-on-a-member-server?u=76281980&t=44)** This gives us additional redundancy for DNS services in case we need it.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-dns-on-a-member-server?u=76281980&t=50)** After DNS is installed on this member server you're going to find there are no zones when we open up DNS manager on this particular server.
>
> **[0:58](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-dns-on-a-member-server?u=76281980&t=58)** So we'll need to add zones or we can replicate zones from the domain controller.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-dns-on-a-member-server?u=76281980&t=64)** I'll click close, go to tools and then go to DNS.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-dns-on-a-member-server?u=76281980&t=70)** And now we see file server with zero zone, zero configuration on it.
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-dns-on-a-member-server?u=76281980&t=76)** I can also right click on the DNS server and choose to connect to another DNS server just as I did on the DCLone server.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-dns-on-a-member-server?u=76281980&t=87)** And there's my other server.
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-dns-on-a-member-server?u=76281980&t=88)** I could also add DCtwo as well.
>
> **[1:31](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-dns-on-a-member-server?u=76281980&t=91)** This makes it a little bit easier if I decide I want to create secondary zones that replicate with the file server because I can set it all up from one location.
>
> **[1:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/install-dns-on-a-member-server?u=76281980&t=99)** Adding DNS to a member server can add redundancy and load balancing to DNS zones in a Windows domain and forest.

> [!info]- Semantic Content
>
> **Env Vars:** dns (13)
> **UI Navigation:** go to (2), click on (1)
> **CLI Commands:** find (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Client DNS configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=0)** - [Instructor] A DNS forwarder is an IP address that we can add into our DNS server properties to let us know when there's a request for something outside of our local area network, that they can go out and find out the resolution from this forwarding address.
>
> **[0:16](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=16)** So I'm going to right click on my file server, go to properties, and then I'll go to the forwarders tab and I'll click edit and put in the Google public DNS server.
>
> **[0:29](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=29)** Now, how do you know which one to use?
>
> **[0:31](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=31)** Well, you can get a list from your internet service provider, the DNS servers that they have, or you could just use a public one from Google or some other source.
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=41)** One way you can tell which one is faster is by doing a traceroute.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=46)** So we do a traceroute -d just so it doesn't resolve all the names.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=50)** It goes a little faster that way.
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=51)** And we put in the 8.8.8.8.
>
> **[0:54](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=54)** And when it gets to the end we'll know how many hops as well as how fast it is to get to that particular location.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=62)** And here I see that it was 10 hops and it was a pretty quick response with four to 18 milliseconds.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=70)** I'm going to do the same thing, but this time I'm going to use my internet service provider's DNS server and see how many hops that is and what the speed is.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=83)** Anytime you see those stars, it typically means that there was no response for that request.
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=89)** And sometimes you're not going to see the response at all.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=92)** It's just going to go right onto the next hop.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=94)** And that just may be because it's the way it's set up.
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=96)** And here we see that my internet service provider was only seven hops away and it was an even faster response.
>
> **[1:43](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=103)** So in this case, it would make more sense to replace the 8.8.8.8 with this 71 address that you see here.
>
> **[1:51](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=111)** Now, you can also add that as an additional one as well.
>
> **[1:54](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=114)** So I can just go ahead and copy that address and then go into my DNS forwarders and I can change the order in which it looks as well.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=126)** So I'll click on edit and then I'll paste it in.
>
> **[2:11](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=131)** And then I'm going move this one up to the top.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=135)** And don't worry if it doesn't say it resolves.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=138)** It's just sometimes going to be a little bit of a delay.
>
> **[2:21](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=141)** But there we go, it went ahead and found it.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=143)** I click apply and now it's done.
>
> **[2:26](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=146)** So if I am a client looking to get into a particular server, so for instance, I do ping li-dc01.
>
> **[2:36](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=156)** It's going to use the internal DNS server for that.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=159)** But if I want to go to, say, Google, that's not internal, that's external.
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=163)** So it's going to use my DNS servers to go find out where Google is out on the internet rather than using the internal one.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/client-dns-configuration?u=76281980&t=172)** And it does that because of forwarders.

> [!info]- Semantic Content
>
> **Env Vars:** dns (8)
> **UI Navigation:** go to (3), click on (2)
> **Code Keywords:** public (2), let (1), case, (1)
> **CLI Commands:** find (2), make (1)
> **Versions:** 8.8.8 (2)
> **Definitions:** is an  (1)
> **Analogies:** for instance (1)
> **Prerequisites:** set up (1)

#### DNS forwarders
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=0)** - [Instructor] DNS server logging can be seen if you go to Tools and then go to the Event Viewer.
>
> **[0:08](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=8)** And then we can see a special log just for the DNS server.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=12)** It will give us a good idea of what's happening.
>
> **[0:14](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=14)** We see some informational type of logs, error logs.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=18)** You might see some warnings as you see here.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=21)** And you might even see some critical logs as well.
>
> **[0:25](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=25)** If I go into the error log, we can see that there were some issues with records expiring.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=32)** And we can go and resolve that if we'd like.
>
> **[0:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=34)** We can look up the errors on a web search.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=37)** And we can then resolve them.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=40)** However, it doesn't tell us the whole story.
>
> **[0:42](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=42)** We can also take a look at another type of logging.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=46)** And if we go into the DNS management console, and I'm going to right-click on File Server for instance and go to Properties.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=53)** There's a debug logging.
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=55)** So if you're really having trouble with your DNS services, then you can check the box for log packets for debug and then you can go ahead and check which boxes you'd like to add in for that debug logging.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=68)** Debug logging is different than standard logging because it logs everything.
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=72)** Anything that happens, you're going to see it logged and it's going to log it typically in a text file.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=77)** And you can type the path to that text file here.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=81)** So for instance, we can see packets going, outcoming or incoming.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=85)** We can see TCP or UDP.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=87)** We can see the packet contents as well.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=90)** And we can check some other boxes that you might see here, such as filtering packets by IP address.
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=95)** So if we just want to see debug packets for a specific IP address, you can filter those particular IP addresses out.
>
> **[1:42](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=102)** I've gone ahead and enabled debug logging on DCO1.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=107)** Let's take a look at what that log file looks like.
>
> **[1:50](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=110)** This has only been enabled for about 20 minutes.
>
> **[1:54](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=114)** And there's not a lot of traffic going on but we can see, despite that, there are a lot of log files here.
>
> **[2:02](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=122)** It may take a little bit of time to learn how to understand what it is that you're seeing here.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=127)** But in general, we can see the date, we can see the time, we can see the IP address that's being affected.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=135)** There's the type of record such as the SOA record, which is the start of authority, and the zone.
>
> **[2:22](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=142)** In this case, it's the MSDCS zone, which is one of the two domain zones that you get when you install Active Directory on a server, which would make that a domain controller.
>
> **[2:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=153)** Also take a look that it says no error on most of these.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=157)** So basically it's just going to record any type of traffic that goes back and forth, whether it's an error or not.
>
> **[2:44](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=164)** And if there is an error, then you'll see it here.
>
> **[2:47](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=167)** And then you can look that error up.
>
> **[2:49](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=169)** You shouldn't leave debug logging on when you don't need it because it could fill up your hard drive and slow down your server if left on too long.
>
> **[2:57](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-forwarders?u=76281980&t=177)** Debug logging can be very useful when troubleshooting a problem that may be difficult to fix by looking at the standard logs alone.

> [!info]- Semantic Content
>
> **Env Vars:** dns (4), tcp (1), udp (1), dco1 (1), soa (1)
> **UI Navigation:** go to (3), right-click (1)
> **Analogies:** for instance (2), such as (2)
> **Code Keywords:** let (1), case, (1)
> **CLI Commands:** make (1)
> **Definitions:** is an  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 7. DNS Zones

#### Forward DNS zones and AD integration
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=0)** - [Instructor] When we ping a name of a server, such as fileserver, we're using what's called a foreword lookup zone.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=9)** It's looking up the name to the IP address.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=12)** And that uses what's called an A record inside that zone.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=17)** So if I expand one of my domain controller's DNS zones, we can see fileserver is here and it shows what I just pinged.
>
> **[0:26](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=26)** I pinged the fileserver and it shows me the IP address.
>
> **[0:29](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=29)** It worked exactly as it should.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=32)** But you can also add additional zones.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=33)** Let's say you're also hosting say a website and it's not using the same domain name as your domain controller.
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=41)** So what I can do is I can right click on my server and choose a new zone.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=46)** And we get the New Zone Wizard that pops up.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=49)** Click Next.
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=51)** Now, we have the option for creating a primary zone, secondary zone, stub zone, and we can also choose whether or not to store it in Active Directory.
>
> **[0:59](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=59)** If we leave it stored in Active Directory, it will replicate with every other domain controller.
>
> **[1:05](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=65)** If we don't, then it will only stay on the one server.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=68)** I'm just going to choose to have this on the one server.
>
> **[1:11](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=71)** And I'm going to make it the primary zone because this is a brand new zone.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=74)** So I can't create a secondary or a stub zone because I don't have the primary zone created yet first.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=81)** So I'll click Next.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=82)** And this is going to be a forward lookup zone.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=85)** And now I'm going to give it the zone name.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=87)** I'll just call it test.local.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=90)** Click Next and we can see it's going to create a file with the file name test.local.dns.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=97)** I could also choose to use an existing file if I have one.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=100)** Under the allow dynamic updates, we have the option for allow only secure, allow both non-secure and secure or do not allow dynamic updates.
>
> **[1:51](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=111)** Dynamic updates are when a computer joins a domain, just as an example, and then when it does so, it registers its name with the DNS forward lookup zone for the Active Directory zone.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=123)** So for instance, fileserver, when I joined that to the domain, it went to fileserver.lil.int and it registered its IP address at .90, just as you saw earlier.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=135)** When you're using a computer that's not joined to the domain, you don't need to worry about having dynamic updates because there's nothing to dynamically update.
>
> **[2:22](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=142)** So I'll just go ahead and leave that turned off and click Finish.
>
> **[2:26](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=146)** So what's going to happen is any time I need to add a record, it's going to be done manually.
>
> **[2:32](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=152)** I won't have it done automatically, like I would in the DNS zone for Active Directory.
>
> **[2:38](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=158)** And that is perfectly okay with me.
>
> **[2:41](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=161)** Now, we see that when I create a brand new zone, it also creates those same two records that were created when an Active Directory zone was created and that is the name server record, so everybody knows where that name server is, and the start of authority so everybody knows who can actually make changes to this zone.
>
> **[3:04](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-dns-zones-and-ad-integration?u=76281980&t=184)** Forward lookup zones are created first, followed by additional zone records and possibly replicated to secondary and stub zones later on.

> [!info]- Semantic Content
>
> **Env Vars:** dns (3)
> **CLI Commands:** make (2)
> **Analogies:** such as (1), for instance (1)
> **Code Keywords:** let (1)
> **Cross-References:** as you saw (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Reverse DNS zones and AD integration
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=0)** - [Instructor] I've created a forward lookup zone called test.local, and I also have a couple of other forward lookup zones that have the active directory domain zones listed in them as well.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=11)** But now, I want to create a reverse lookup zone.
>
> **[0:14](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=14)** A reverse lookup zone does the opposite of a forward lookup zone.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=18)** A forward lookup zone does a resolution from names to IP addresses, whereas a reverse will do IP addresses to names.
>
> **[0:26](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=26)** Do we need to have a reverse lookup zone?
>
> **[0:29](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=29)** The answer is no.
>
> **[0:30](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=30)** As a matter of fact, it doesn't even create one when you install DNS services in an active directory domain controller by default.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=38)** However, if you have multiple domain controllers and you have multiple zones spread out over them, then it's much faster to resolve things when you have a reverse lookup zone because the reverse lookup zone's in charge of looking for the name server records.
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=55)** Now, if you have only one domain controller and you only have a few zones, then you're really not going to see any advantage.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=61)** But in a larger enterprise, you're definitely going to see things speed up if you add a reverse lookup zone.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=67)** So I'm going to right-click and choose to create a new zone.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=70)** And just like with the forward lookup zone, you're going to see this wizard appear.
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=76)** So I'll click Next.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=77)** Now, we need to have a primary zone to start with.
>
> **[1:19](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=79)** The primary zone is a zone that has the ability to write and make changes.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=84)** So you can't create secondary and stub zones, which are read only, until you create your first primary zone that has that writeable capability.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=92)** Now, beneath that we see the store the zone in active directory.
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=96)** I'm going to leave that box checked, and the reason for that is because I want that to replicate to my other domain controller, so if any client device, like a computer, wants to know the name server record for a particular zone, it will look to either one of my domain controllers.
>
> **[1:53](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=113)** Now, this will not replicate to the file server, and that's because file server, although it's a DNS server, is not a domain controller, so it cannot replicate to that by default.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=123)** However, I can go in and set up a secondary zone to have it replicate there in a read-only type of manner.
>
> **[2:10](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=130)** So I'll click Next.
>
> **[2:11](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=131)** I'm going to go with the default to all DNS servers running on domain controllers.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=135)** That means it's going to automatically go to my DC2 when I'm done here.
>
> **[2:19](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=139)** And this is an IPv4 reverse lookup zone, although I can create a IPv6 one, if I'd like.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=145)** Now, I'm going to put in the network ID.
>
> **[2:28](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=148)** We get the network ID from the first three octets of our subnet.
>
> **[2:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=154)** So I'll do IP config.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=155)** So the first three octets here are 192.168.21.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=159)** So I'll go ahead and put that in.
>
> **[2:44](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=164)** And click Next.
>
> **[2:46](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=166)** And since this is going to be integrated with active directory, I'm going to leave the box checked for allow only secure dynamic updates.
>
> **[2:54](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=174)** And I'll click finish.
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=175)** And there is my reverse lookup zone.
>
> **[2:58](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=178)** And just as in a forward lookup zone, you're going to see both the name server and the start of authority records automatically created.
>
> **[3:06](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=186)** Now, let's take a look and see how that name server zone works.
>
> **[3:11](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=191)** I'll clear my screen.
>
> **[3:14](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=194)** And I'm going to type "NS lookup."
>
> **[3:17](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=197)** And I'll put in my active directory domain zone.
>
> **[3:21](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=201)** And it's going to use that reverse lookup to look up my name server record for my domain controllers that you see here.
>
> **[3:29](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=209)** I can also use a ping minus-a command.
>
> **[3:31](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=211)** So if I do ping minus-a, instead of putting in the name of the server, I can put in the IP address.
>
> **[3:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=217)** So this time, I'll put in the IP address for my file server, and we'll see if it resolves, and it does.
>
> **[3:43](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=223)** So reverse lookup zones do tend to have some good advantages if you choose to create them.
>
> **[3:51](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/reverse-dns-zones-and-ad-integration?u=76281980&t=231)** Creating a reverse zone is similar to creating a forward zone and can definitely help with resolution in the enterprise.

> [!info]- Semantic Content
>
> **Env Vars:** dns (3), dc2 (1)
> **Code Keywords:** default. (2), let (1)
> **UI Navigation:** right-click (1), go to (1)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** just like (1), similar to (1)
> **Prerequisites:** install (1), set up (1)
> **CLI Commands:** make (1)
> **Versions:** 192.168.21 (1)

#### Secondary zone creation
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=0)** - A secondary zone is similar to a primary zone except for it's a read-only copy.
>
> **[0:05](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=5)** So it's going to have a copy of all the different records that are in your primary zone replicated to your secondary zone.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=12)** So what I'm going to do is I'm going to replicate the test dot local zone to file server from dc01.
>
> **[0:19](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=19)** So we can see the start of authority is dc01.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=22)** This is the only server right now that can make any changes to this zone.
>
> **[0:27](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=27)** So I can add records, delete records, et cetera.
>
> **[0:30](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=30)** First I'm going to right-click on test dot local and go to properties, and then I'm going to go to zone transfers.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=36)** And I have a few options.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=38)** I can either choose to any server, but that's not always the most secure way of doing things.
>
> **[0:42](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=42)** Or I can choose only to servers listed on the name server tab.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=46)** Here's the name server tab.
>
> **[0:47](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=47)** And right now, only dc01 is showing up in the name server tab.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=52)** So if I added in file server, then that would be one way I could make this work.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=57)** The other option is to go to only to the following servers.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=60)** This is really the most secure way of doing things because you can specify them, and you can go ahead and add or delete them as needed.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=69)** So I'm going to put in the IP address for file server.
>
> **[1:13](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=73)** Now it says it didn't resolve it, but that's okay.
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=76)** It actually will.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=77)** And there you can see it did resolve it after a few seconds.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=81)** Now I'm going to click okay.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=83)** And that's done.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=84)** Now I need to go up to my forward lookup zones and file server, and add in the zone.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=90)** So I'm going to go to click next, and instead of a primary zone, I'm going to go and say this is a secondary zone.
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=98)** I could have multiple primary zones if I'd like, and then I would also be able to make changes in file server just as I would in dc01, but we're going to create a secondary one instead.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=108)** So I'm going to click browse, and browse to that zone.
>
> **[1:52](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=112)** I could also just type it in if I know the name as well, and I'll click next.
>
> **[1:57](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=117)** Now I'm going to put in the IP address or the name of the server where I'm going to be receiving these records from.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=123)** So I'll put in LI-dc01, and we can see it resolved it to those IP addresses that you see there.
>
> **[2:11](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=131)** So click next and click finish.
>
> **[2:14](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=134)** Here is my test dot local.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=136)** If it's a large zone, it may take a few minutes to replicate.
>
> **[2:19](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=139)** A small one, as you see here, replicated right away.
>
> **[2:22](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=142)** So we can see the secondary zone test dot local.
>
> **[2:26](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=146)** The records are pointing not to file server.
>
> **[2:28](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=148)** The records are pointing back to dc01, saying that this is where this start of authority is, back in dc01.
>
> **[2:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=155)** So if you want to make any changes, you got to go to dc01.
>
> **[2:38](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=158)** You can't make them here.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=159)** So I'll just go ahead and test this out.
>
> **[2:41](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=161)** If I right-click, and I choose all tasks, you can see there's just no option here to create any new records.
>
> **[2:49](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=169)** Now, if for some reason the records did not replicate, then I could choose reload.
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=175)** That just basically refreshes like F5, or I could do transfer from master.
>
> **[3:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=180)** Now that one will actually go out to dc01, look for those records and pull them over.
>
> **[3:05](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=185)** Or I could do transfer new copy of zone from master.
>
> **[3:08](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=188)** This is needed sometimes in case the records get corrupt.
>
> **[3:11](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=191)** And what it'll do is it'll erase any records that are in there now, and then it'll put in a new copy of the records after that.
>
> **[3:18](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/secondary-zone-creation?u=76281980&t=198)** Creating secondary zones is useful for remote offices, where you want a copy of DNS names to IP addresses for a zone, but don't want to give the rights to make changes to the zone to that other server.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (5), right-click (2)
> **CLI Commands:** make (6)
> **Code Keywords:** delete (2), from. (1)
> **Env Vars:** dns (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - a (1)

#### Stub zone creation
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=0)** - [Instructor] A stub zone is very similar to a secondary zone but there's one key difference.
>
> **[0:06](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=6)** I'm going to start out by deleting the secondary zone that I created earlier called "test.local," which is a read only copy of the zone from LI-DC01.
>
> **[0:16](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=16)** Now, what I'm going to do is I'm going to create a stub zone based on that same "test.local."
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=22)** So, if I right click and go to properties and go to zone transfers, I just want to confirm that my file server is in the list and it is, if not I could go ahead and add it right there.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=32)** Now, I'm going to go to forward look of zones.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=35)** Right click and choose to create a new zone.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=38)** And the wizard shows up, I'll click next.
>
> **[0:41](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=41)** Now, I'm going to choose to create a stub zone.
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=43)** So, a stub zone is different from a secondary zone in that it doesn't replicate all the records over from the primary in this case, the DC01 server, because you don't need it.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=56)** And so, if you have a remote office and you have a slow connection, then you may want to choose a secondary zone because the secondary zone will replicate all the records over.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=69)** And then you have that copy on that particular location.
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=72)** However, a stub zone is if you have a faster connection and in the main office DNS records are being updated all the time.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=80)** So, the secondary zone might be behind in a very large zone where you have a slow connection.
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=88)** And so, when users are trying to resolve names to IP addresses, then it will be outdated information.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=94)** A stub zone always has the most latest up to date information because it doesn't store it locally.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=100)** What it does is it just goes back to the original zone holder, in this case, DC01, and it says, "Hey, what's the most up to date information about these records?"
>
> **[1:51](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=111)** So, let's go ahead and finish creating this and I'll show you how that appears.
>
> **[1:56](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=116)** So, I'm going to go to DC01.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=118)** I'm going to go to "test.local" and click next. Next.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=123)** And I'll put in the DC01 name because that's what it's looking for, is where the primary lives.
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=132)** Next, and finish. Now, go to "test.local".
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=136)** And so, all this is going to create is just a copy of where those records are.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=143)** So for instance, if I go to "test.local," and I create a new host record and I'll call this record "Server 1," which doesn't exist, but that's okay.
>
> **[2:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=153)** And I'll put in a fake IP address and I'm going to uncheck the pointer record, which is the reverse record just because I don't need it here.
>
> **[2:42](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=162)** And click add the host. Click okay, click done.
>
> **[2:45](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=165)** Now, go back to "test.local" and I refresh or reload, which is fine.
>
> **[2:51](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=171)** They're both the same thing.
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=173)** Look at that. It does not replicate the record I just created in the "test.local" zone in DC01.
>
> **[3:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=180)** What it does do is it says, "Hey, if you're looking for the record for Server 1, go over to DC01 and it'll hand it to you."
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=190)** I personally find that stub zones have become outdated due to faster network connections between locations.
>
> **[3:17](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/stub-zone-creation?u=76281980&t=197)** Stub zones create pointers to the name servers and start of authority in a read only zone.

> [!info]- Semantic Content
>
> **Env Vars:** dc01 (7), dns (1)
> **UI Navigation:** go to (7)
> **Code Keywords:** case, (2), let (1), for, (1)
> **CLI Commands:** find (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)


### 8. DNS Resource Records

#### Forward and reverse zone records
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=0)** - [Instructor] If we take a look at the Active Directory domain zone that we see with lil.int, you can see some host A records.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=9)** You can either call a forward lookup zone record a host record or an A record.
>
> **[0:14](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=14)** Either one.
>
> **[0:15](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=15)** Now, the records that were created here were all created automatically.
>
> **[0:20](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=20)** So for instance, dc01 and dc02 were created dynamically, also known as automatically when the domain controllers were installed and added into the domain.
>
> **[0:31](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=31)** The other two records that you see here, fileserver and lil-client01, these records were added dynamically when they were joined into the domain.
>
> **[0:42](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=42)** Now, you don't have to just have them happen dynamically or automatically, you can also add them manually.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=48)** So for instance, I'm in the test.local zone now.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=52)** And I'm going to right click and choose to create a new host record.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=56)** I'm going to call this one Server 1.
>
> **[0:58](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=58)** And I'm going to give it the fake IP address of 21.200.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=63)** Now, if I'd like to create an associated PTR record, I can leave this box checked and click Add Host, and then it'll show up in my reverse lookup zone if it exists, and it does, of course.
>
> **[1:15](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=75)** So I'll click Add Host.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=78)** And it says that the record was created successfully.
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=81)** I'll click Done.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=82)** And I'm going to go to the reverse lookup zone and there's my reverse record.
>
> **[1:27](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=87)** So if I go down to a command prompt and I ping server1.test.local, we can see that it resolves to the 21.200.
>
> **[1:38](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=98)** So that record creation actually worked.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=101)** Now, it's okay that it's unreachable because it's a fake name with a fake IP address.
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=106)** I just wanted to show that the resolution worked.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=109)** Now, the next thing I want to do is I want to hit the up arrow and then go back and choose -a.
>
> **[1:55](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=115)** What -a does is it will do a reverse lookup.
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=119)** So I'm going to change the name to an IP address.
>
> **[2:05](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=125)** And now it should do the reverse.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=127)** It will look up the IP address and give me the name.
>
> **[2:10](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=130)** And that's exactly what it did.
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=132)** So now you see forward lookup and you see reverse lookup.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=136)** The other thing I can do is I can create an IPv6 record.
>
> **[2:19](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=139)** An IPv6 record we sometimes refer to as a quad A record.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=143)** So you can see an A record or four As.
>
> **[2:26](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=146)** So four As is always going to be for IPv6.
>
> **[2:28](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=148)** And now I'm going to type in Server 2 and give this one an address for IPv6.
>
> **[2:36](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=156)** So to get that address, I'll just go down and put in ipconfig.
>
> **[2:41](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=161)** And I'll just choose the IPv6 address that you see here.
>
> **[2:45](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=165)** And I'll copy it.
>
> **[2:48](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=168)** And I'll paste it in.
>
> **[2:49](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=169)** Now, you can, of course create your own IPv6 address if you'd like and I'll just click Add Host.
>
> **[2:57](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=177)** And the reason why I'm getting the error on the reverse record is because I did not create a reverse lookup zone for IPv6, I only created it for IPv4 but I can certainly do that if I'd like and then it will show up there as well.
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=190)** Forward and reverse host records are the most used types of records in DNS.
>
> **[3:16](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/forward-and-reverse-zone-records?u=76281980&t=196)** They give basic forward or reverse lookup from named IP or IP to name.

> [!info]- Semantic Content
>
> **Env Vars:** ptr (1), dns (1)
> **Versions:** 21.200 (2)
> **Analogies:** for instance (2)
> **Tools:** command prompt (1)
> **UI Navigation:** go to (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Alias (CNAME) records
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=0)** - [Instructor] Alias records allows us to start out with one name and have it translated to another.
>
> **[0:06](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=6)** It's also known as a CNAME which stands for a canonical name.
>
> **[0:10](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=10)** Let's take a look and see how this works.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=12)** So I've created a couple of new zones, companya and companyb dot local.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=17)** In your case, it might be dot com, dot net, dot info.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=21)** But just for demonstration purposes, I'm going to be using the dot local name.
>
> **[0:25](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=25)** First, I need to create a host record in company A.
>
> **[0:30](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=30)** So I'm going to call this one web and give it an IP address of 192 dot 168 dot 21 dot 205.
>
> **[0:38](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=38)** And I'll click to add the host.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=40)** I don't need the reverse record for this demonstration.
>
> **[0:44](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=44)** And I'll click Done.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=46)** Now I'm going to do the same thing with company B.
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=50)** So I'll create a new host record.
>
> **[0:52](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=52)** I'll call it web.
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=55)** And I'll give it a 206 address and then add that host and click Done.
>
> **[1:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=60)** Now I'm going to go down to my Command Prompt.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=63)** And this also works in PowerShell if you need it.
>
> **[1:05](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=65)** I'm going to click ping web dot companya dot local.
>
> **[1:13](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=73)** And it resolves to dot 205.
>
> **[1:15](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=75)** Of course, don't worry about the fact that it's not replying, because these are fake names and IP addresses.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=80)** We're just looking for resolution.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=82)** Now I'm going to do the same thing with company B.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=85)** And I should get the dot 206 address.
>
> **[1:29](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=89)** And I do.
>
> **[1:31](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=91)** Now I'm going to set up an alias and show you how that works.
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=95)** I'm going to go back and delete my web record.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=100)** And now I'm going to create a new record called an alias, also known as a CNAME.
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=106)** And I'm going to be putting in the name web once again.
>
> **[1:49](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=109)** And now this time, I need to put in the fully qualified name that it's going to translate to.
>
> **[1:55](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=115)** And that's going to be web dot companyb dot local.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=120)** So why do we need a canonical CNAME, alias type of record?
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=126)** I've used this many times in my career when I've gone through a merger with the company.
>
> **[2:11](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=131)** So company A buys company B, for instance, or B buys A.
>
> **[2:15](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=135)** And what'll happen is that the one company no longer wants the company that they've purchased to be resolved when somebody goes to that website.
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=147)** So for instance, they'll want company B who swallowed up company A to be the website that users go to when they type in companya dot com.
>
> **[2:40](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=160)** So basically they're trying to get rid of company A, but if people still only know it is company A, then they'll need to be translated, using the CNAME, to company B.
>
> **[2:50](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=170)** And that's exactly what we're doing here.
>
> **[2:52](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=172)** So I'll click OK.
>
> **[2:54](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=174)** So now we have, anytime anybody tries to go to company A, they got to automatically get company B.
>
> **[3:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=180)** Let's see if it works.
>
> **[3:01](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=181)** Go back down to the Command Prompt.
>
> **[3:04](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=184)** I'm going to clear the screen.
>
> **[3:05](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=185)** Now I'm going to flush out the cashed information.
>
> **[3:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=192)** So we do a flushdns command.
>
> **[3:14](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=194)** And now that's done.
>
> **[3:16](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=196)** Now, when I ping web dot companya dot local, this should automatically translate to web dot companyb dot local.
>
> **[3:27](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=207)** And there it is.
>
> **[3:28](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=208)** It's now translated to company B.
>
> **[3:31](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=211)** So if anybody goes to a website, and they put in companya dot local, they'll automatically get the website for company B.
>
> **[3:41](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/alias-cname-records?u=76281980&t=221)** It sounded a little complicated at first, but I hope that by showing you an example of how this works, it simplifies the concept as to why we use alias records, also known as CNAMEs.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (1), delete (1)
> **Env Vars:** cname (4)
> **Definitions:** known as (3), stands for (1)
> **Tools:** command prompt (2), powershell (1)
> **UI Navigation:** go to (2)
> **Analogies:** for instance (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Mail (MX) records
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=0)** - [Instructor] Mail records allows us to direct mail to a specific server within an organization.
>
> **[0:06](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=6)** Typically you don't use mail records in most internal organizations because most mail stores are out in the public such as at Microsoft Azure using Microsoft 365 or Google for Gmail and others.
>
> **[0:20](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=20)** But in some cases you may want to redirect email to a local mail server if it's necessary because you have multiple mail servers in your organization.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=33)** So we're going to use test.local as the example.
>
> **[0:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=35)** I'm going to write click.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=37)** And the first thing I need to do is to create a host record.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=39)** So I'm going to call this host record mail and you can see it automatically appends the test.local to it.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=45)** So if I want to send an email to Tom@mail.test.local then I'll need to know where that mail server is.
>
> **[0:54](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=54)** And I'll put in the fake IP address of 21.207 and I don't need a reverse record so I don't need to check the point of records.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=63)** I'll just click on add host and click okay. And done.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=67)** Now I need to create an MX record.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=69)** An MX record is a mail record that says where this particular server is that's going to receive the mail.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=77)** Right now it's just a host record.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=78)** Host record doesn't necessarily mean that it knows where to deliver the mail.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=83)** So I'm going to right click again.
>
> **[1:25](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=85)** And this time choose to create a new mail exchanger or MX record.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=90)** So I'm going to put the host as mail and then we see once again it appends to the fully qualified domain name.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=97)** If my domain was just test.local then I would just leave this blank and not put in mail.
>
> **[1:44](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=104)** But if I have it called mail then I'm just going to go ahead and leave it there.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=108)** Now I need the fully qualified name of the mail server and it's going to be mail.test.local.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=118)** Now here's the priority.
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=119)** And you see here that it's set to 10.
>
> **[2:02](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=122)** The way priorities work is whatever the lowest number is, that's going to be the first place that the server looks to deliver that mail.
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=132)** So I could have it set to zero if I'd like, and then the next one sent to one, two, three, or 10, 20, 30 whatever it is I want to do.
>
> **[2:20](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=140)** The lowest one is going to win first.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=143)** And if it can't be delivered to the lowest number, it goes to the next highest number.
>
> **[2:27](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=147)** So I'll click okay on that.
>
> **[2:29](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=149)** And there's my MX record.
>
> **[2:32](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=152)** Let's see what that looks like out on the internet.
>
> **[2:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=154)** I have a website here that I own, and what I'm going to do is do a DNS lookup for mail records.
>
> **[2:42](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=162)** So I'm going to put in the name of a domain in this case I'll do [linkedin.com](https://linkedin.com).
>
> **[2:48](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=168)** Instead of choosing the a or host record, I'm going to choose the MX record to see where email gets delivered whenever I want to send an email to someone@[linkedin.com](https://linkedin.com) And here's the MX preferences followed by the host names.
>
> **[3:03](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=183)** So we see that there's two different MX preferences set to 10.
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=187)** One is male C and the other is male D.
>
> **[3:10](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=190)** So it's going to load balance between those two.
>
> **[3:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=192)** The first email's going to go to the first one.
>
> **[3:14](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=194)** And the second email is going to go to the second one or whichever mail server responds first.
>
> **[3:19](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=199)** Then we see another record sent to 20 and then a third record once again, sent to 10.
>
> **[3:25](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=205)** Now, I don't know exactly the way these email servers are set up, whether it's going to load balance between the three or because it's listed fourth, it's going to be going to this particular one in a different order.
>
> **[3:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=217)** However, you can see the ACD and then just the plain old mail.[linkedin.com](https://linkedin.com).
>
> **[3:43](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=223)** These are all the different locations where email can be sent.
>
> **[3:47](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=227)** So they have some redundancy and some failover built in in case any particular mail server goes down.
>
> **[3:53](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/mail-mx-records?u=76281980&t=233)** MX records are typically used externally and not entered into a Windows server, but there are some circumstances where multiple email servers are internal to a domain using different email domains where a Windows MX record may be created.

> [!info]- Semantic Content
>
> **URLs:** [linkedin.com](https://linkedin.com) (3)
> **UI Navigation:** go to (2), click on (1)
> **Code Keywords:** public (1), let (1)
> **Env Vars:** dns (1), acd (1)
> **Versions:** 21.207 (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** set up (1)

#### Other record types
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/other-record-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/other-record-types?u=76281980&t=0)** - [Instructor] Here is a mail record, a host record, an IPv6 record, and there are other types of records as well.
>
> **[0:08](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/other-record-types?u=76281980&t=8)** So how do we create these other types of records that I haven't already taken a look at?
>
> **[0:13](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/other-record-types?u=76281980&t=13)** So if I right click anywhere in the zone you can see the most popular records and that's going to be the host, the alias, and the mail record.
>
> **[0:21](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/other-record-types?u=76281980&t=21)** However, if I choose Other New Records, I get this box that pops up and it shows me a list of all the different records that I can create inside my DNS zone.
>
> **[0:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/other-record-types?u=76281980&t=34)** Now, most of these records you'll never create but there is going to be a time where you're going to need to create specific records based on certain vendors that require it in order for them to work.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/other-record-types?u=76281980&t=48)** For instance, I can create a TXT or text record.
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/other-record-types?u=76281980&t=51)** Click Create Record, and here I can see the record name, use parent name if left blank just like any other type of record like a host record or an MX record.
>
> **[1:01](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/other-record-types?u=76281980&t=61)** And I'll go ahead and put in server three for the record name.
>
> **[1:06](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/other-record-types?u=76281980&t=66)** Now here I can put in some text that's going to be required for that particular vendor and I'll just click Okay.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/other-record-types?u=76281980&t=74)** Now you may not find a use for a TXT record in an internal Windows server, but that's just an example of the different types of records you can create.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/other-record-types?u=76281980&t=82)** So here we have a next domain record, NXT record, and here you can see the description of what an NXT record is.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/other-record-types?u=76281980&t=92)** And in this particular case it's just going to list the owner names of that zone.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/other-record-types?u=76281980&t=97)** So I'll click on create record, and you can put in the next domain name followed by the record types.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/other-record-types?u=76281980&t=108)** In most cases, you'll never have a reason to create other record types that you see here unless you find a vendor that requires it, but this is the location you would use to find other records in a Windows DNS server.

> [!info]- Semantic Content
>
> **Env Vars:** dns (2), txt (2), nxt (2)
> **CLI Commands:** find (3)
> **Analogies:** for instance (1), just like (1)
> **Code Keywords:** require (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 9. Advanced DNS

#### DNS queries
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-queries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-queries?u=76281980&t=0)** - [Instructor] If you'd like to test your DNS servers just to make sure that they are performing as they should as far as DNS resolution goes, then you can do that with a simple utility that's built in to the DNS console.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-queries?u=76281980&t=12)** So I'll right click on one of my servers and go to Properties and I'm going to click on Monitoring and you can see other monitoring tests I've done recently.
>
> **[0:22](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-queries?u=76281980&t=22)** I'm going to click on the Simple query against the DNS server and click Test Now.
>
> **[0:27](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-queries?u=76281980&t=27)** And the latest test shows up at the top and it's passed.
>
> **[0:30](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-queries?u=76281980&t=30)** This is a forward lookup type of check.
>
> **[0:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-queries?u=76281980&t=34)** I'm also going to do a reverse one which is the recursive query and click Test Now.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-queries?u=76281980&t=39)** Now, if you don't have a reverse lookup zone then you may find that this one fails, but in my case I do so it went ahead and passed.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-queries?u=76281980&t=49)** So I know now that they're working okay, but you can also set it up so either or both tests are done on a regular basis.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-queries?u=76281980&t=56)** So you can check the box to perform these tests at the following intervals and then you can choose seconds, minutes, or hours.
>
> **[1:05](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-queries?u=76281980&t=65)** DNS queries are a quick way to test your DNS servers.

> [!info]- Semantic Content
>
> **Env Vars:** dns (6)
> **UI Navigation:** click on (3), go to (1)
> **CLI Commands:** make (1), find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### DNS cache
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache?u=76281980&t=0)** - [Instructor] Windows DNS servers that have forwarders turned on are not just for resolving types of records internally, but also for caching records that were done externally.
>
> **[0:14](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache?u=76281980&t=14)** So for instance, if I go up to View and click Advanced, it's going to show some additional things it didn't show before and one of those is cached lookups.
>
> **[0:25](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache?u=76281980&t=25)** And the advantage to cached lookups is if I go to say [google.com](https://google.com), it's going to go out the first time to my internet service provider or whatever DNS forwarder I put in and it's going to look for that IP address and then it's going to give me that resolution and then I can go out to [google.com](https://google.com).
>
> **[0:43](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache?u=76281980&t=43)** However, the next time I go, I don't want to have to wait for it to go to do that.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache?u=76281980&t=48)** It's got to go out at about 10 or 11 hops and then come back in and give me the record before I can go ahead and browse to that website.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache?u=76281980&t=56)** So what it does is it caches this information and you'll see it right here under the cashed lookups.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache?u=76281980&t=63)** So if I go to com for instance, I can see all the different websites I went to.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache?u=76281980&t=68)** Now, there might be some websites that are in here that you didn't go to and it's just because some of these various different ads went ahead and added themselves into the webpage that you were browsing and therefore that's why you see those there.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache?u=76281980&t=82)** So if I go to Microsoft, we can see some various different records there as well.
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache?u=76281980&t=88)** I'm going to go back to com and I'm going to go to my command prompt and I'm going to ping [google.com](https://google.com) since it didn't show up in the list there and you see I get a resolution.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache?u=76281980&t=100)** Now I'm going to minimize and go back to com and now I'm going to refresh and there's my Google host record.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache?u=76281980&t=108)** Now, the next time I want to go to Google, it will be already there and ready for me to use.
>
> **[1:53](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache?u=76281980&t=113)** Now, it does rotate these different records so they don't get stale.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache?u=76281980&t=118)** So every seven days or so, it'll go out and it'll update to whatever the latest record is because Google does move around a lot, although a lot of other websites do not.
>
> **[2:08](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache?u=76281980&t=128)** If you feel that your cache is built up too much and maybe it's slowing things down, you can certainly go ahead and flush that out, so you can right-click and choose Clear Cache and now it's all gone.
>
> **[2:20](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache?u=76281980&t=140)** So you're going to see right away, there's going to be just the root servers that show up.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache?u=76281980&t=145)** The root servers are basically the servers that control the internet.
>
> **[2:30](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache?u=76281980&t=150)** So if I go into properties and I go to root hints, these are all the main servers that are out there online running the internet.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache?u=76281980&t=159)** So when you have DNS or your internet provider has DNS that synchronizes with these root hint servers, these are the servers that feed out to the rest of the world.
>
> **[2:50](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache?u=76281980&t=170)** Cached lookups from your ISP's DNS server or from the root hint servers can make browsing to the same websites go much more quickly the next time you visit them.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (8), right-click (1)
> **Env Vars:** dns (5), isp (1)
> **URLs:** [google.com](https://google.com) (3)
> **Cross-References:** go back to (2)
> **Analogies:** for instance (2)
> **CLI Commands:** make (1)
> **Tools:** command prompt (1)
> **Speakers:** - [instructor] (1)

#### Conditional forwarders
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/conditional-forwarders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/conditional-forwarders?u=76281980&t=0)** - [Instructor] Conditional forwarders allows us to forward any requests for specific domains to other DNS servers.
>
> **[0:08](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/conditional-forwarders?u=76281980&t=8)** If you look at a general forwarder in the properties of your server, what this does is it forwards any requests that are not local to your DNS or your active directory domain off to, say, a public DNS server, as you see here, which is Google.
>
> **[0:24](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/conditional-forwarders?u=76281980&t=24)** However, if you have an individual domain that you would like to forward to a specific DNS server, then you can use conditional forwarders.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/conditional-forwarders?u=76281980&t=33)** So they have a condition to their forwarding.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/conditional-forwarders?u=76281980&t=36)** So if I right-click and choose new conditional forwarder, I'll put in the name, I'll just put in [kentoso.com](https://kentoso.com), which is one of Microsoft's favorite test domains.
>
> **[0:44](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/conditional-forwarders?u=76281980&t=44)** And I'm going to enter an IP address for what I believe is the DNS server for [kentoso.com](https://kentoso.com).
>
> **[0:50](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/conditional-forwarders?u=76281980&t=50)** So I'll put in 192.168.21.220.
>
> **[0:55](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/conditional-forwarders?u=76281980&t=55)** Now it's not going to be able to resolve this.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/conditional-forwarders?u=76281980&t=57)** That's okay.
>
> **[0:58](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/conditional-forwarders?u=76281980&t=58)** It's just a fake IP address.
>
> **[0:59](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/conditional-forwarders?u=76281980&t=59)** And if I'd like, I can also replicate this to all other active directory servers as well.
>
> **[1:05](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/conditional-forwarders?u=76281980&t=65)** And now I'm going to click okay.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/conditional-forwarders?u=76281980&t=68)** So if I need to go off to a [kentoso.com](https://kentoso.com) host record, then I don't have to know all the different host records here.
>
> **[1:17](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/conditional-forwarders?u=76281980&t=77)** I can just put in where the DNS server is for [kentoso.com](https://kentoso.com).
>
> **[1:21](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/conditional-forwarders?u=76281980&t=81)** And anytime I make a request for a host in that domain, it will forward it onto the DNS server that I entered into the conditional forwarder.
>
> **[1:31](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/conditional-forwarders?u=76281980&t=91)** Conditional forwarders are great for forwarding requests to specific domains in your DNS servers.

> [!info]- Semantic Content
>
> **Env Vars:** dns (8)
> **URLs:** [kentoso.com](https://kentoso.com) (4)
> **Code Keywords:** public (1), this. (1)
> **CLI Commands:** make (1)
> **Versions:** 192.168.21 (1)
> **UI Navigation:** right-click (1)
> **Speakers:** - [instructor] (1)


### 10. DNS Security

#### DNS cache locking
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache-locking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache-locking?u=76281980&t=0)** - [Instructor] Domain name systems security extensions, or DNSSEC, is a suite of extensions that add security to DNS by enabling DNS responses so they can be validated.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache-locking?u=76281980&t=11)** DNS security provides data integrity and authenticated denial of existence.
>
> **[0:16](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache-locking?u=76281980&t=16)** DNS spoofing is a type of attack that involves impersonation of DNS servers, and it does that so it can introduce false information to redirect a user.
>
> **[0:26](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache-locking?u=76281980&t=26)** In a spoofing attack, a malicious user is going to try to attempt to guess that a DNS client or server has sent a query and is waiting for that response.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache-locking?u=76281980&t=36)** The DNS security extensions then keeps spoofing from being successful.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache-locking?u=76281980&t=40)** DNSSEC uses digital signatures as well and cryptographic keys to validate the DNS responses to make sure they're authentic.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache-locking?u=76281980&t=49)** Signatures that are generated using DNSSEC are contained within the zone itself in the new resource records.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache-locking?u=76281980&t=56)** These new records are called RRSIG for resource record signature.
>
> **[1:02](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache-locking?u=76281980&t=62)** When a resolver issues a query for that name, the RRSIG record is returned in the response.
>
> **[1:09](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache-locking?u=76281980&t=69)** A public cryptographic key, called a DNSKEY, is needed to verify the signature, and then the DNSKEY is going to be retrieved by a DNS server during that validation process.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache-locking?u=76281980&t=82)** For zone signing, when you sign a zone using DNS security, you are individually signing all records contained in the zone.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache-locking?u=76281980&t=90)** This makes it possible to add, modify or delete those records without having to re-sign the entire zone, it's only necessary to re-sign the updated records.
>
> **[1:43](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache-locking?u=76281980&t=103)** DNS security also uses something called a trust anchor, and this is a pre-configured public key that's associated with a specific zone.
>
> **[1:52](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache-locking?u=76281980&t=112)** A validating DNS server must then be configured with one or more of the trust anchors in order to perform the validation.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache-locking?u=76281980&t=120)** On DNS servers, trust anchors are stored in a file, and that file is called trustanchor.dns.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache-locking?u=76281980&t=127)** A DNS server running Windows Server 2012 or newer, is also going to display the configured trust anchors in the DNS manager console tree in the trust points container.
>
> **[2:18](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache-locking?u=76281980&t=138)** And you can use the PowerShell commandlets, or dnscmd.exe to view trust anchors.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache-locking?u=76281980&t=145)** DNS key management strategy, is going to include planning for key generation, key storage, key expiration and key replacement.
>
> **[2:36](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache-locking?u=76281980&t=156)** When you put them all together, key expiration and replacement in DNS security is called key rollover.
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache-locking?u=76281980&t=163)** In Windows Server key management is made easier with flexible key generation, active directory storage and replication and automated key rollover.
>
> **[2:53](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache-locking?u=76281980&t=173)** When the DNS client issues a query, it can indicate to the DNS server that it understands DNS security.
>
> **[3:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache-locking?u=76281980&t=180)** The DNS client relies on the local DNS server to indicate that validation was successful or not.
>
> **[3:08](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache-locking?u=76281980&t=188)** If the server fails to perform that validation, or reports the validation was not successful, then the DNS client service can be configured to return no results to the user's request.
>
> **[3:19](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache-locking?u=76281980&t=199)** If it was successful the users will see the results that are needed.
>
> **[3:23](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-cache-locking?u=76281980&t=203)** The DNS security suite is not configured by default, so you'll need to spend some time configuring the security portion of DNS to protect your organization.

> [!info]- Semantic Content
>
> **Env Vars:** dns (25), dnssec (3), rrsig (2), dnskey (2)
> **Definitions:** is a  (3), is called (2)
> **Code Keywords:** public (2), delete (1), default, (1)
> **CLI Commands:** make (1)
> **Tools:** powershell (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### DNS socket pool
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-socket-pool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-socket-pool?u=76281980&t=0)** - [Instructor] DNS cache locking can keep DNS data from being overwritten.
>
> **[0:04](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-socket-pool?u=76281980&t=4)** This can be especially helpful in protection from hackers trying to redirect traffic.
>
> **[0:09](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-socket-pool?u=76281980&t=9)** What I can do is I can go into any one of my zones, and to lock my cache I can right click and go to properties.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-socket-pool?u=76281980&t=18)** And I can go to start of authority which is the start of authority tab inside my properties.
>
> **[0:25](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-socket-pool?u=76281980&t=25)** Now you have to do this on each zone you have, otherwise it's going to default to the one hour.
>
> **[0:30](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-socket-pool?u=76281980&t=30)** But take a look, you see the minimum default time to live is one hour.
>
> **[0:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-socket-pool?u=76281980&t=34)** And that means that until that hour is up no one can make any changes to that particular record, with the exception of the administrator for this particular server.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-socket-pool?u=76281980&t=45)** So I can go in and make a change, but no one else can.
>
> **[0:48](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-socket-pool?u=76281980&t=48)** So we cannot go in and, say, have a dynamic update change or any other kind of change from any other user unless they have those administrator privileges.
>
> **[0:59](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-socket-pool?u=76281980&t=59)** Besides doing this on the zone you can also do it right in one of the records.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-socket-pool?u=76281980&t=64)** You can see the start of authority here and you can go ahead and change it.
>
> **[1:08](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-socket-pool?u=76281980&t=68)** And once again, you have hours, minutes, seconds, days.
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-socket-pool?u=76281980&t=72)** And then you also have the time to live for this particular record.
>
> **[1:16](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-socket-pool?u=76281980&t=76)** So I can say that this one's going to be three hours if I'd like, or again, I can go days, minutes, or seconds.
>
> **[1:23](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-socket-pool?u=76281980&t=83)** This feature can prevent the DNS cache poisoning attacks that may come against your servers from hackers.
>
> **[1:31](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-socket-pool?u=76281980&t=91)** We can also do cache locking by command prompt as well.
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-socket-pool?u=76281980&t=95)** I'm going to go open up a command prompt and you can do this in PowerShell if you'd like.
>
> **[1:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-socket-pool?u=76281980&t=99)** I'll clear the screen.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-socket-pool?u=76281980&t=101)** I've typed in a command, dnscmd /config /cachelockingpercent, 50%.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-socket-pool?u=76281980&t=108)** So that means you can actually go in at half the amount of time.
>
> **[1:51](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-socket-pool?u=76281980&t=111)** So if it's set to one hour you could go into 30 minutes and make a change if you'd like, and we can see that that was done.
>
> **[1:58](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-socket-pool?u=76281980&t=118)** Now, let's say you change your mind and say, you know what?
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-socket-pool?u=76281980&t=120)** I want to go for the full 100%.
>
> **[2:03](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-socket-pool?u=76281980&t=123)** So I'm going to go back in and change that to 100%.
>
> **[2:06](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-socket-pool?u=76281980&t=126)** And now you have to wait for the full amount of time before any changes can be made.
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-socket-pool?u=76281980&t=132)** Cache locking is another good security measure built into your DNS server.

> [!info]- Semantic Content
>
> **Env Vars:** dns (4)
> **CLI Commands:** make (3)
> **Tools:** command prompt (2), powershell (1)
> **UI Navigation:** go to (2)
> **Code Keywords:** let (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### DNS zone signing
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-zone-signing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-zone-signing?u=76281980&t=0)** - [Instructor] A DNS socket pool enables a DNS server to use source port randomization when issuing DNS queries.
>
> **[0:07](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-zone-signing?u=76281980&t=7)** And this provides enhanced security against cache poisoning attacks by hackers.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-zone-signing?u=76281980&t=12)** They won't know which port you're going to be doing the query on because it's randomized.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-zone-signing?u=76281980&t=17)** So what I'm going to do is go down to my PowerShell and type in get-dnsserver.
>
> **[0:25](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-zone-signing?u=76281980&t=25)** However, if I hit Enter, it's going to give me pages and pages of information.
>
> **[0:29](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-zone-signing?u=76281980&t=29)** So I'm going to pipe that off to a text file.
>
> **[0:31](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-zone-signing?u=76281980&t=31)** So I'm going to put in the forward caret and then type in dns.txt.
>
> **[0:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-zone-signing?u=76281980&t=39)** Now take a look at the folder I'm in.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-zone-signing?u=76281980&t=40)** It's in the users administrator folder.
>
> **[0:42](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-zone-signing?u=76281980&t=42)** That's where it's going to pipe that particular file too.
>
> **[0:45](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-zone-signing?u=76281980&t=45)** So if I wanted to go someplace else, I'll just type in c:\ so that way it goes someplace a little bit easier to find.
>
> **[0:53](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-zone-signing?u=76281980&t=53)** And you can ignore the warning that you see here.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-zone-signing?u=76281980&t=56)** The text file is still going to be created.
>
> **[0:59](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-zone-signing?u=76281980&t=59)** So now I'm going to go into File Explorer and there's my DNS text.
>
> **[1:04](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-zone-signing?u=76281980&t=64)** So I'll go ahead and open that up.
>
> **[1:06](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-zone-signing?u=76281980&t=66)** And what I want to look for is the socket pool size, which is right here.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-zone-signing?u=76281980&t=70)** And by default, it's set to 2500.
>
> **[1:13](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-zone-signing?u=76281980&t=73)** If you make a lot of DNS queries, you might find out that 2500 is not enough.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-zone-signing?u=76281980&t=78)** So you're going to go back into PowerShell.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-zone-signing?u=76281980&t=82)** And this particular command is going to be a regular command line command, so you could do it either in PowerShell or in a regular command prompt.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-zone-signing?u=76281980&t=90)** So I'm going to change my randomized pool to 3000 from 2500.
>
> **[1:35](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-zone-signing?u=76281980&t=95)** And it's the command dnscmd followed by /config and then the socketpoolsize.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-zone-signing?u=76281980&t=101)** So I'll hit Enter and now that's done.
>
> **[1:44](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-zone-signing?u=76281980&t=104)** Now let's just double check that that worked okay, so I'll put in dns2.txt and now we'll go back into here and choose my dns2.txt and it should now say 3000, which it does.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-zone-signing?u=76281980&t=120)** By adding source port randomization, you end up using ports that no hacker can anticipate.

> [!info]- Semantic Content
>
> **Env Vars:** dns (5)
> **Tools:** powershell (3), command line (1), command prompt (1)
> **File Paths:** dns2.txt (2), dns.txt (1)
> **CLI Commands:** find (2), make (1)
> **Code Keywords:** else, (1), default, (1), let (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### DNS security extensions
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=0)** - [Instructor] DNSSEC is short for DNS security.
>
> **[0:03](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=3)** And it enables a DNS zone and all the records in the zone to be signed cryptographically so that client computers can validate a DNS response.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=12)** DNS is often subject to various attacks, such as spoofing or redirections.
>
> **[0:18](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=18)** DNSSEC helps protect against these threats and provides a more secure DNS environment.
>
> **[0:23](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=23)** I'm in my DNS console.
>
> **[0:26](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=26)** And if we want to run DNSSEC on a zone, we have to actually run it on each zone individually.
>
> **[0:32](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=32)** So it can't be done at the root level, which would cover all other zones.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=36)** You'll have to do it on each one.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=37)** I'm going to run it on my test.local zone.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=40)** So I'm going to right-click on it, choose DNSSEC, and choose to sign the zone.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=46)** Now, we get a wizard that pops up.
>
> **[0:49](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=49)** One of the main benefits of DNS security extensions and signing the zone is that anytime a client makes a request to say, "Where's server one," for instance, when the zone responds, the client can be assured that it's coming from a valid DNS server.
>
> **[1:07](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=67)** I'm going to click Next to get started.
>
> **[1:10](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=70)** I'll choose the default customized zone signing parameters.
>
> **[1:14](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=74)** And one of the first things we need to do is to set up the key signing key or KSK.
>
> **[1:19](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=79)** And what this key does is it signs other keys that we create later on.
>
> **[1:24](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=84)** So I'll click Next and I'll click Add.
>
> **[1:28](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=88)** All of these defaults are fine.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=90)** So I'm going to go ahead and click Okay.
>
> **[1:31](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=91)** And it will create that KSK.
>
> **[1:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=94)** And I'll click Next.
>
> **[1:36](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=96)** Now, I'm going to choose the zone signing key.
>
> **[1:40](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=100)** So click Next and click Add.
>
> **[1:43](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=103)** And this is the key that's going to sign the zone.
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=106)** So I'll click Okay.
>
> **[1:47](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=107)** So the first key is going to sign the next one.
>
> **[1:51](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=111)** And this particular one is going to sign the zone itself, which in this case is test.local.
>
> **[1:59](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=119)** And the NSEC or next secure option is going to be a response when a record has no data.
>
> **[2:07](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=127)** So there's nothing to provide to the client.
>
> **[2:09](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=129)** And this needs to be recorded so that way the client knows that the host that they're requesting does not exist.
>
> **[2:17](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=137)** If the client thought it did exist when in fact it doesn't, this could be something that a hacker injects into the zone.
>
> **[2:25](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=145)** I'll click Next.
>
> **[2:26](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=146)** Now, I want to go ahead and choose the enable, the distribution of trust anchors for this zone.
>
> **[2:32](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=152)** And this is an authoritative entity.
>
> **[2:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=154)** And it's represented by a public key.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=157)** So we've already worked with the private key.
>
> **[2:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=159)** Now, we're working with the public key.
>
> **[2:41](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=161)** The trust anchors zone stores preconfigured public keys that are associated with a specific zone.
>
> **[2:49](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=169)** I'll click Next.
>
> **[2:50](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=170)** And these are all about the values for what we just selected earlier.
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=175)** It has the time to live and the polling period in hours.
>
> **[3:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=180)** I'm going to go ahead and just choose the defaults, but you can make changes to those if you'd like and click Next, Next again.
>
> **[3:08](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=188)** And now, it's signing the zone and Finish.
>
> **[3:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=192)** I'm going to go over to the trust points, which was blank before.
>
> **[3:15](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=195)** And now, we see that this particular zone, which is the test.local zone is listed under the trust points.
>
> **[3:24](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/dns-security-extensions?u=76281980&t=204)** The client can now be assured that the zone is only providing them with records that can be trusted.

> [!info]- Semantic Content
>
> **Env Vars:** dns (8), dnssec (4), ksk (2), nsec (1)
> **Code Keywords:** public (3), private (1)
> **Definitions:** short for (1), is an  (1)
> **Analogies:** such as (1), for instance (1)
> **CLI Commands:** make (1)
> **UI Navigation:** right-click (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 11. DHCP and DNS Management

#### Managing DNS and DHCP using Admin Center
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=0)** - [Instructor] We can manage DNS and DHCP using another utility besides just the DHCP and DNS console.
>
> **[0:08](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=8)** And that is using Windows Admin Center.
>
> **[0:11](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=11)** Windows Admin Center is a web-based administrative tool that we can download for free from Microsoft.
>
> **[0:17](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=17)** So I'm just going to do a search for downloading Windows Admin Center, and I'll click the website, and make sure that you're choosing a [microsoft.com](https://microsoft.com) website, you can always click on the lock at the top and just make sure it says that the connection is secure, and then download Windows Admin Center.
>
> **[0:36](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=36)** And here it is downloading, and I'll choose to show that in the folder, and when it's ready, go ahead and run it.
>
> **[0:46](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=46)** You have to make sure that Internet Information Services is not already installed on your server.
>
> **[0:51](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=51)** So you can go to tools, and as long as you don't see Internet Information Services, then you can go ahead and install it.
>
> **[0:57](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=57)** And the reason for that is because it might conflict using the same ports as Windows Admin Center.
>
> **[1:03](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=63)** After you accept the terms, click Next, choose the type of diagnostic data you'd like to send to Microsoft, and when you'd like to run updates.
>
> **[1:13](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=73)** Now, you don't have to install this on a server, you can install this on a Windows client as well.
>
> **[1:18](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=78)** Choose the defaults that you see here, click Next.
>
> **[1:22](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=82)** Here's a self-sign certificate that's going to be automatically generated, it's only going to be good for 60 days, so you may want to get a public certificate instead.
>
> **[1:30](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=90)** You could choose to do port 80 instead if you'd like, but it's not as secure, of course, as 443, which uses SSL, especially if you're getting to it from the outside.
>
> **[1:41](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=101)** Installation has begun, and it's going to install its own web server, that's another reason why you can't have Internet Information Services already installed.
>
> **[1:51](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=111)** Installation is complete, and before I click Finish, I'm going to click the link, which will automatically open up the website in my browser.
>
> **[2:01](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=121)** Now, if it's going to open up in Internet Explorer, you're probably going to want to close that, and open it with a supported web browser.
>
> **[2:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=132)** And I'll go ahead and log in, and Windows Admin Center is launching for the first time.
>
> **[2:20](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=140)** You can read what's new with Windows Admin Center.
>
> **[2:23](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=143)** I'm going to close it.
>
> **[2:24](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=144)** And by default, it shows up with the server that I installed it on.
>
> **[2:28](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=148)** So if you installed it on a client computer, you'll see that one as well.
>
> **[2:32](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=152)** I can add additional computers though, so I can click on Add, and here I have lots of different options.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=157)** I can put in servers, PCs, clusters, or even Azure virtual machines.
>
> **[2:43](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=163)** I'm going to add a server, and I'm going to add the server name here.
>
> **[2:51](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=171)** And typically, the Windows account credentials don't work properly for this, So I'm just going to go ahead and enter in the domain information and add with those credentials.
>
> **[3:04](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=184)** It found the server, and I'll click Add.
>
> **[3:07](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=187)** Next, I'm going to go ahead and launch my DC01 server, and it's going to remote into that server.
>
> **[3:15](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=195)** And within Windows Admin Center, you can see a lot of different tools that you can use, such as users and groups, networks, monitoring, power shell, things like that.
>
> **[3:28](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=208)** However, we don't see DNS and we don't see DHCP.
>
> **[3:32](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=212)** So what you want to do is go and click on the gear in the upper right, and choose Settings.
>
> **[3:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=219)** Then you're going to go over to where it says Extensions, and you get a list of different extensions you can add in to your Windows Admin Center.
>
> **[3:47](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=227)** Now, these are being added all the time, so you might want to go back and check on a regular basis.
>
> **[3:53](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=233)** First one I'm going to choose is DHCP.
>
> **[3:56](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=236)** It says it's in preview, but that's okay.
>
> **[4:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=240)** I'll go ahead and choose Install.
>
> **[4:03](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=243)** And it's installing that right now, and refreshing.
>
> **[4:08](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=248)** Next, I'm going to go to DNS and do the same thing.
>
> **[4:14](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=254)** Once those two are installed, I can go back to my server, and then I can manage DHCP and DNS.
>
> **[4:22](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=262)** I'm logging back into my server, and it's adding in all the different extensions, and here I can see my DHCP extension.
>
> **[4:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=273)** I see my scope, which I can select, I could also choose to create a new scope.
>
> **[4:38](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=278)** And here, it's showing the overview, my exclusions, reservations, all the different things that you would've seen in the DHCP manager.
>
> **[4:48](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=288)** I'm going to choose to edit.
>
> **[4:51](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=291)** And over here, we can see my scope starting and ending IP address, I'm going to go ahead and change that to 235.
>
> **[4:59](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=299)** And I'm going to keep the one-day lease duration, and click Submit.
>
> **[5:05](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=305)** And now it says it was updated successfully.
>
> **[5:09](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=309)** And sometimes you have to refresh in order to see the changes.
>
> **[5:14](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=314)** And now we see the ending IP address as .235.
>
> **[5:18](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=318)** We can do the same thing over in DNS.
>
> **[5:21](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=321)** It's loading up all the different zones, and here they are.
>
> **[5:25](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=325)** We have company A and B, Contoso, and then of course the active directory zones and the test.local.
>
> **[5:31](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=331)** I'm going to click on company A, and here I can create a new DNS record.
>
> **[5:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=337)** So I'll call this record My Record and I'll put it in IP address.
>
> **[5:46](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=346)** I can create an associated PTR record for reverse zone lookup, and I can also change the time to live if I'd like, and then when I'm done, just click Create.
>
> **[5:56](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=356)** And there's my new record called My Record.
>
> **[6:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-admin-center?u=76281980&t=360)** You may not see all of the same options that you could do in the DNS or DHCP consoles, but you should have enough where you can do many of your daily tasks.

> [!info]- Semantic Content
>
> **Env Vars:** dns (8), dhcp (8), ssl (1), dc01 (1), ptr (1)
> **UI Navigation:** click on (4), go to (2)
> **Prerequisites:** install (5)
> **Code Keywords:** self (1), public (1), default, (1), this, (1)
> **CLI Commands:** make (3)
> **URLs:** [microsoft.com](https://microsoft.com) (1)
> **Ports:** port 80 (1)
> **Definitions:** is a  (1)

#### Managing DNS and DHCP using IPAM
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=0)** - [Instructor] Another utility besides Windows Admin Center and the DNS and DHCP consoles that we can use to manage those two services is IPAM or IP Address Management.
>
> **[0:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=12)** And IP Address Management does have a lot of steps involved in order to get it installed.
>
> **[0:16](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=16)** But once it's installed, it's a very useful tool where you can manage all the different DHCP and DNS servers from one location.
>
> **[0:25](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=25)** I'm going to click on the Add roles and features, and I'm doing this in a member server.
>
> **[0:29](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=29)** You cannot do this on a domain controller.
>
> **[0:31](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=31)** Microsoft does not allow it.
>
> **[0:33](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=33)** So I'll click Next until we get to Features.
>
> **[0:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=37)** This is a feature, not a server role.
>
> **[0:40](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=40)** That's because it's used for management rather than for client use.
>
> **[0:44](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=44)** And I'm going to go to where it says IP Address Management or IPAM Server and choose to add the features, and click Next, and now click Install.
>
> **[0:56](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=56)** Once it's installed, we'll need to run some commands, go through some configuration, and it usually takes about an hour, although this will be sped up here, in order to get IPAM to be fully configured and to begin working.
>
> **[1:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=72)** The IPAM feature has been installed. I'll click Close.
>
> **[1:15](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=75)** Now I need to open up PowerShell as the admin, and I'm going to run the command.
>
> **[1:20](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=80)** Now we're going to invoke the IpamGpoProvisioning, and it's going to do this on our domain, the lil.int, and we're installing it on the fileserver because the fileserver is not a domain controller.
>
> **[1:32](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=92)** This is going to create three group policy objects on our domain controllers.
>
> **[1:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=97)** Hit Enter, press Y to say yes, go ahead and perform the action, and now it's creating our group policy objects.
>
> **[1:46](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=106)** And it's prompting again.
>
> **[1:48](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=108)** Press Yes, Yes again, and you just keep pressing Y until it's done, and now we see it's done.
>
> **[1:57](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=117)** I've gone over to Group Policy Management on a domain controller.
>
> **[2:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=120)** You can see the three group policies that were added in.
>
> **[2:05](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=125)** So one for Network Policy Server, that's the NPS, and another for DHCP, and the last for DNS, and these are the three different services we can manage within IPAM.
>
> **[2:16](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=136)** I'm back in fileserver, and I'm going to go over in Server Manager on the left-hand side of the screen and choose IPAM.
>
> **[2:24](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=144)** I can see the Connect IPAM server, step number one, is already done.
>
> **[2:28](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=148)** So next, I need to provision the IPAM server, so I'll click on that, and we get a new wizard that comes up, click Next.
>
> **[2:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=157)** IPAM is going to require a database to store all the records.
>
> **[2:40](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=160)** So you can either use the free Windows Internal Database that comes with this, which is very similar to SQL Express, or you could just choose the Microsoft SQL Server, and you could purchase that and choose the server name and database information here.
>
> **[2:55](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=175)** I don't have a SQL Server, so I'm just going to choose the Windows Internal Database.
>
> **[3:00](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=180)** Now it's asking me for a provisioning method.
>
> **[3:02](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=182)** I would definitely like to do this in an automatic manner, so I'm going to go ahead and choose the GPO name prefix of IPAM1 which is the same name I gave it for group policies and click Next.
>
> **[3:18](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=198)** And we see the IPAM Server is now going to use those group policy objects, and they'll apply.
>
> **[3:23](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=203)** Provisioning is in progress, and this can take a few minutes.
>
> **[3:27](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=207)** When it's all done, we'll go ahead and open up IPAM.
>
> **[3:31](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=211)** And that was successful, so I'll go ahead and click Close.
>
> **[3:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=214)** So step number two is done.
>
> **[3:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=217)** I'm going to choose Configure server discovery, and I'll expand my box and choose Get forests, and we can see that a background task has been started.
>
> **[3:48](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=228)** So sometimes this takes a little bit of time.
>
> **[3:50](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=230)** Once it has that information, it will go ahead and populate the forest, and then we can do the same with the domain.
>
> **[3:57](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=237)** After a few minutes, it went ahead and pre-populated the forest, and then it went ahead and populated the domain as well.
>
> **[4:05](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=245)** And by clicking on Add, we see the option for Domain controller, DHCP, and DNS, and I'll click OK.
>
> **[4:13](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=253)** So now we see step number three is all done.
>
> **[4:16](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=256)** Now I'm going to choose the Start server discovery.
>
> **[4:19](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=259)** And when I click on that, this yellow bar pops up, and I'll click on More, and it will give us more details of what's happening.
>
> **[4:27](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=267)** So it started the ServerDiscovery Task, and this can also take several minutes to complete.
>
> **[4:34](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=274)** And this is now completed after several minutes.
>
> **[4:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=277)** I'll go ahead and click Close.
>
> **[4:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=279)** Now I can click to Select or add servers to manage.
>
> **[4:44](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=284)** And it's chosen my two domain controllers.
>
> **[4:46](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=286)** I see DC2 at the top and DC01 underneath that, and it shows that it's Unblocked.
>
> **[4:51](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=291)** Now you might see it set up as Blocked.
>
> **[4:54](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=294)** And if that happens, you may need to open up some firewall ports or just wait a little bit longer until it shows Unblocked.
>
> **[5:01](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=301)** Most of the time, you don't need to do anything but just wait.
>
> **[5:04](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=304)** I'm going to right-click and choose to edit the server, and I'm going to choose which services I would like to add in.
>
> **[5:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=312)** I definitely want DHCP, DNS.
>
> **[5:15](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=315)** I don't need the Network Policy Server at this time, but I'll just go ahead and select the three because the third one is the domain controller which, of course, is exactly what this particular server is.
>
> **[5:26](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=326)** Now I'm going to choose Edit Server here as well, check DHCP, and click OK.
>
> **[5:32](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=332)** Next, I'm going to go down to where it says DHCP Scopes.
>
> **[5:37](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=337)** And it may take some time to retrieve the data.
>
> **[5:39](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=339)** Once it does, though, it should be there the next time you go in without having to wait.
>
> **[5:44](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=344)** So go up to Tasks and choose to retrieve the server data.
>
> **[5:48](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=348)** And, once again, we see that yellow bar at the top which is retrieving all the data for the DHCP scopes.
>
> **[5:54](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=354)** After a refresh on the server inventory, we can see that it's unblocked and ready to be managed.
>
> **[5:59](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=359)** So what I'm going to do is go down to where it says DHCP Scopes.
>
> **[6:03](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=363)** And if you don't see anything here, you can just go to Tasks and Retrieve Server Data, and refresh, and you'll see it here.
>
> **[6:10](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=370)** Here is my scope, the 21.0.
>
> **[6:13](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=373)** So I'm going to right-click and choose to edit the DHCP scope.
>
> **[6:17](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=377)** And we see a new box pops up.
>
> **[6:20](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=380)** Here's the starting and ending IP address that was expected.
>
> **[6:23](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=383)** I'm going to change that to 234 just as an example to show you can change it and click OK.
>
> **[6:31](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=391)** I can also do other things such as creating a DHCP reservation, a superscope which combines multiple smaller scopes into one larger one.
>
> **[6:40](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=400)** I can also set a DHCP failover and policies.
>
> **[6:44](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=404)** I want to go down to DNS Zones, and here are all the different zones that are in my DNS Manager showing up in IPAM.
>
> **[6:54](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=414)** You can see that it's showing the same zone for company A, for instance, that you saw on the DNS Manager.
>
> **[7:02](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=422)** So I'm going to right-click, and you can see here I can edit the DNS zone just like I could edit the DHCP properties.
>
> **[7:10](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=430)** So I can go to Advanced.
>
> **[7:12](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=432)** I can change this from storing in Active Directory to just being local.
>
> **[7:17](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=437)** I can change how long the zone aging and scavenging properties are.
>
> **[7:22](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=442)** And what this does is it goes out and looks for any new information, so that way, the records don't end up getting stale and maybe outdated.
>
> **[7:31](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=451)** If I go to Name Servers, we can see the two name servers that the zone is on, and you can see the start of authority is the DC01 server.
>
> **[7:41](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=461)** And we can do zone transfers by checking the box and choosing any of these options.
>
> **[7:48](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=468)** And I'll click Cancel on that.
>
> **[7:50](https://www.linkedin.com/learning/windows-server-2022-dhcp-and-dns-15012768/managing-dns-and-dhcp-using-ipam?u=76281980&t=470)** The advantage of IPAM is seeing all the servers in one location, so DNS, DHCP, and Network Policies can be edited without having to log in to each server individually.

> [!info]- Semantic Content
>
> **Env Vars:** dhcp (14), ipam (13), dns (10), sql (3), dc01 (2)
> **UI Navigation:** click on (4), go to (4), right-click (3), select the (1)
> **Analogies:** similar to (1), such as (1), for instance (1), just like (1)
> **Prerequisites:** install (1), configure (1), set up (1)
> **Code Keywords:** require (1), this, (1)
> **Versions:** 21.0 (1)
> **Tools:** powershell (1)
> **Definitions:** is a  (1)


## Path Context

### In [[Getting Started with Windows Server 2022]]
← [[Windows Server 2022- Install and Configure Active Directory]] | **4 of 4**

## Appears In

- [[Getting Started with Windows Server 2022]]

## Related Courses

_Courses sharing skills:_

- [[Windows Server 2019- DHCP and DNS]] — Windows Server, Dynamic Host Configuration Protocol (DHCP)
- [[Windows Server 2022- Install and Configure Active Directory]] — Windows Server
- [[Windows Server 2022- Installation and Configuration]] — Windows Server
- [[Windows Server 2019- Install and Configure Active Directory]] — Windows Server
- [[Windows Server 2019- Installation and Configuration]] — Windows Server
