---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: windows-10-configure-and-support-core-services-14431120
url: "https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120"
level: Intermediate
updated: 10/8/2025
learners: 27989
skills:
  - Windows System Administration
  - Windows 10
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQFWeE9toDLZ-A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1638901954967?e=2147483647&amp;v=beta&amp;t=5DDsMvf2LBMeBnjcyg4TgzgS4LXAOFl0LQGjA0orAO8"
linkedin_topic: IT Help Desk
learning_paths:
  - '[[Advance Your Skills as an IT Help Desk Specialist]]'
next_courses:
  - '[[Windows 10- Manage and Maintain Windows 10]]'
path_nav: '[{"path":"Advance Your Skills as an IT Help Desk Specialist","position":1,"total":11,"prev":null,"next":"Windows 10- Manage and Maintain Windows 10"}]'
path_count: 1
tags:
  - course
  - topic/it-help-desk
  - skill/windows-system-administration
  - skill/windows-10
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/IT%20Help%20Desk/Windows%2010%20Configure%20And%20Support%20Core%20Services.md)

![Windows 10 Configure And Support Core Services](https://media.licdn.com/dms/image/v2/C560DAQFWeE9toDLZ-A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1638901954967?e=2147483647&amp;v=beta&amp;t=5DDsMvf2LBMeBnjcyg4TgzgS4LXAOFl0LQGjA0orAO8)

# Windows 10 Configure And Support Core Services

> Network discovery, name resolution, and other key aspects of Windows 10 installations aren't always intuitive. This course illuminates the installation process, exploring various ways to configure many of the services included in a Windows 10 default installation. Follow Joli Ballew as she covers networking, storage, data access and usage, and Remote Management. Plus, Joli shares how to implement 

> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120) | Intermediate | 28K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [The power of Windows 10 configuration](#the-power-of-windows-10-configuration)
- [**1. Configure Networking**](#1-configure-networking) (10 videos)
  - [IP addressing, subnets, and DHCP](#ip-addressing-subnets-and-dhcp)
  - [Configure name resolution](#configure-name-resolution)
  - [Connect to a network](#connect-to-a-network)
  - [Use Windows Firewall](#use-windows-firewall)
  - [Windows Firewall advanced security](#windows-firewall-advanced-security)
  - [Configure mobile networking](#configure-mobile-networking)
  - [Manage Wi-Fi settings](#manage-wi-fi-settings)
  - [Add mobile devices to a network](#add-mobile-devices-to-a-network)
  - [Configure a VPN](#configure-a-vpn)
  - [Troubleshoot network problems](#troubleshoot-network-problems)
- [**2. Configure Storage**](#2-configure-storage) (7 videos)
  - [Manage partitions with Disk Management](#manage-partitions-with-disk-management)
  - [Manage storage with PowerShell](#manage-storage-with-powershell)
  - [Create a VHD](#create-a-vhd)
  - [Configure a VHD](#configure-a-vhd)
  - [Configure removable devices](#configure-removable-devices)
  - [Create and configure storage spaces](#create-and-configure-storage-spaces)
  - [Troubleshoot storage and devices](#troubleshoot-storage-and-devices)
- [**3. Configure Data Access and Usage**](#3-configure-data-access-and-usage) (4 videos)
  - [Create and configure folder shares](#create-and-configure-folder-shares)
  - [Configure and use OneDrive](#configure-and-use-onedrive)
  - [Create and manage permissions](#create-and-manage-permissions)
  - [Troubleshoot data access](#troubleshoot-data-access)
- [**4. Implement Apps**](#4-implement-apps) (5 videos)
  - [Configure desktop apps](#configure-desktop-apps)
  - [Configure startup options](#configure-startup-options)
  - [Add and remove features](#add-and-remove-features)
  - [Create and deploy provisioning packages](#create-and-deploy-provisioning-packages)
  - [Windows Assessment and Deployment Kit](#windows-assessment-and-deployment-kit)
- [**5. Configure Remote Management**](#5-configure-remote-management) (9 videos)
  - [Use remote management tools](#use-remote-management-tools)
  - [Remote management settings](#remote-management-settings)
  - [Remote management with PowerShell](#remote-management-with-powershell)
  - [Configure and use Remote Assistance](#configure-and-use-remote-assistance)
  - [Configure and use Remote Desktop](#configure-and-use-remote-desktop)
  - [Configure and use Remote Assist](#configure-and-use-remote-assist)
  - [Configure and use Quick Assist](#configure-and-use-quick-assist)
  - [Configure Windows Remote Management](#configure-windows-remote-management)
  - [Configure Windows Admin Center](#configure-windows-admin-center)
- [**Conclusion**](#conclusion) (1 videos)
  - [Where to go next](#where-to-go-next)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### The power of Windows 10 configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/the-power-of-windows-10-configuration-20240202?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/the-power-of-windows-10-configuration-20240202?u=76281980&t=0)** - Hello, and welcome to Windows 10 Configure and Support Core Services.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/the-power-of-windows-10-configuration-20240202?u=76281980&t=5)** Here you'll discover how to configure and manage various types of networks, including VPNs.
>
> **[0:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/the-power-of-windows-10-configuration-20240202?u=76281980&t=11)** You'll learn how to create and organize diverse types of storage to incorporate technologies, including virtual discs and removable devices.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/the-power-of-windows-10-configuration-20240202?u=76281980&t=19)** I'll teach you how to manage data access and usage, and how to configure and secure built-in apps as well.
>
> **[0:25](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/the-power-of-windows-10-configuration-20240202?u=76281980&t=25)** Finally, you'll explore remote access technologies.
>
> **[0:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/the-power-of-windows-10-configuration-20240202?u=76281980&t=29)** Hi, I'm Joli Ballew, a full-time CIT professor at Dallas College, and a longtime author here at LinkedIn Learning.
>
> **[0:37](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/the-power-of-windows-10-configuration-20240202?u=76281980&t=37)** I've also written over 50 books on all kinds of computer-related topics.
>
> **[0:41](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/the-power-of-windows-10-configuration-20240202?u=76281980&t=41)** Join me in this LinkedIn Learning course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2), [[Windows 10]] (1), data (1)
> **Prerequisites:** configure (3)
> **Env Vars:** cit (1)
> **Speakers:** - hello (1)


### 1. Configure Networking

[↑ Back to Table of Contents](#table-of-contents)

#### IP addressing, subnets, and DHCP
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=0)** - [Instructor] To get the most out of Windows 10 in either a home or business setting, you must be able to connect to a network.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=6)** That network can be the internet, an internal company intranet, or something less complex like a work group, or it could be a combination of these.
>
> **[0:16](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=16)** You can find the available networks by clicking the Network icon on the task bar.
>
> **[0:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=22)** You'll click to any network you see there to connect to it, noting that you may have to input credentials.
>
> **[0:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=29)** You can see here I'm connected to the linkedin.biz network.
>
> **[0:34](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=34)** All computers on a network have one thing in common and that's a unique address.
>
> **[0:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=39)** This address defines the computer on the network in the same way an address on a house identifies it on a street.
>
> **[0:46](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=46)** Here's an example of addresses that belong to houses.
>
> **[0:50](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=50)** You can see they are all similar but different.
>
> **[0:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=54)** 1400 defines the block and the numbers after it define the house.
>
> **[0:58](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=58)** In the same way, computers have unique addresses too.
>
> **[1:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=62)** Here's an example of that.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=64)** You can see these addresses are similar but unique as well.
>
> **[1:07](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=67)** They all start with 10.10.1.
>
> **[1:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=71)** This part defines the network.
>
> **[1:13](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=73)** The other numbers define the computers.
>
> **[1:16](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=76)** Having an address on the network makes it possible for data to know where to go once it's sent.
>
> **[1:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=82)** Without addresses, a network wouldn't function.
>
> **[1:25](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=85)** Addresses assigned to computers are called internet protocol addresses or IP addresses.
>
> **[1:32](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=92)** You'll learn more about that shortly.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=95)** The most popular way to assign a computer an IP address is to use Dynamic Host Configuration Protocol or DHCP which is a technology that automatically assigns each node on a network a unique address.
>
> **[1:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=111)** A computer is assigned an address when it joins if DHCP is enabled.
>
> **[1:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=116)** For now, IPv4 is the networking protocol that is most widely used for networking computers.
>
> **[2:03](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=123)** An IPv4 address consists of 32 bits of zeros or ones and are offered in groups of eight.
>
> **[2:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=130)** An IP address might look like this.
>
> **[2:13](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=133)** When you convert these four sections called octets to our base 10 numbering system, they convert to 192.16.17.4.
>
> **[2:26](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=146)** You can learn how to do this conversion manually or type it into any base two to base 10 conversion calculator available on the internet.
>
> **[2:33](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=153)** Let's find your IP address.
>
> **[2:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=155)** Open a command prompt by typing CMD in the search bar on the task bar and clicking it in the results.
>
> **[2:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=164)** At the command prompt, type ipconfig and press enter.
>
> **[2:50](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=170)** Make a note of what your IPv4 address is and you might also see that DHCP is enabled.
>
> **[2:57](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=177)** There are a few other terms you'll see here and it's important to understand them too.
>
> **[3:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=182)** One is a subnet mask.
>
> **[3:04](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=184)** A subnet mask is also a 32-bit number and it defines the part of the network where the client resides called the subnet.
>
> **[3:12](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=192)** To return to our home address analogy, this can be compared to the city or zip code associated with the home.
>
> **[3:19](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=199)** The default gateway address lets network segments communicate with each other.
>
> **[3:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=204)** You'll need a default gateway address to access the internet or another network.
>
> **[3:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=209)** Now we'll type ipconfig, a space, a forward slash, and all to see more terms.
>
> **[3:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=219)** And I'll press enter.
>
> **[3:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=222)** A domain name system DNS server address let's the client computer resolve computer or device names into IPv4 or IPv6 addresses.
>
> **[3:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=234)** This means that if you want to communicate with another node on the network, you can type its name and not its IP address.
>
> **[4:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=242)** This is the service that allows you to type something like www.[linkedin.com](https://linkedin.com) instead of its associated IP address when using the internet.
>
> **[4:12](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=252)** There's also IPv6.
>
> **[4:14](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=254)** This is a newer addressing scheme that offers many more IP addresses when compare to the older IPv4.
>
> **[4:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=261)** The IPv4 addresses are all used up, so a new system is required and is being phased in.
>
> **[4:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=267)** IPv6 addresses are much more complex and are base 16 numbers.
>
> **[4:33](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=273)** Like IPv4, these addresses can be automatically applied via DHCP.
>
> **[4:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=279)** Take a look at your IPv6 address if you have one.
>
> **[4:43](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=283)** Since all computers need to have their own unique address, the Internet Assigned Numbers Authority, IANA, has defined the address ranges that can be used for private use behind a router and on a local network.
>
> **[4:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=296)** This means that your computers don't need a completely unique IP address.
>
> **[5:01](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=301)** You may see what's shown here for class C matches what also represents your local IPv4 address.
>
> **[5:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=309)** Before we end, let's take a look at the local area connection dialog box and learn how to make changes to IP addresses in DHCP should you ever want to and we can see if DHCP is enabled or not.
>
> **[5:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=322)** Right click the Network icon on the task bar and click Open Network and Internet Settings.
>
> **[5:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=329)** Here we'll click Change adapter options.
>
> **[5:33](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=333)** Right click your network connection and click Properties.
>
> **[5:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=338)** Click Internet Protocol Version four and click Properties again, and let's have a look here.
>
> **[5:45](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=345)** We can see that DHCP is enabled because we are set to obtain an IP address automatically or you can click Use the following IP address if you'd like to type your own.
>
> **[5:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=356)** Sometimes network administrators assign static IP addresses to nodes like printers that never change their physical location or that need to be accessed by their IP address alone, or to computers that play a significant role in a network like a specific server.
>
> **[6:12](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=372)** As far as clients go though, DHCP is by far the most popular addressing system.
>
> **[6:18](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=378)** There are many more networking terms to explore.
>
> **[6:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=381)** Return to the command prompt if you're interested in learning more.
>
> **[6:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=384)** You can easily look up what any terms mean that you aren't familiar with or that we didn't cover here.
>
> **[6:30](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/ip-addressing-subnets-and-dhcp?u=76281980&t=390)** When you're ready, close the command prompt window.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** prompt (4), [[LinkedIn]] (2), node (2), [[Windows 10]] (1), business (1)
> **Env Vars:** dhcp (8), cmd (1), dns (1), iana (1)
> **CLI Commands:** find (2), node (2), make (2)
> **Definitions:** is a  (3), means that (2)
> **Tools:** command prompt (4)
> **Versions:** 10.10.1 (1), 192.16.17 (1)
> **URLs:** [linkedin.com](https://linkedin.com) (1)
> **Prerequisites:** you'll need (1)

#### Configure name resolution
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=0)** - [Instructor] When you want to communicate with a remote computer, such as one that allows access to a website on the internet, or one that is on your home or business network, you'd generally navigate there using its computer name.
>
> **[0:13](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=13)** This is also referred to as the host name.
>
> **[0:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=17)** You don't very often type in its IP address because to do so would be cumbersome and error prone.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=23)** Let's open File Explorer and find the host names of the computers I have access to on my network.
>
> **[0:30](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=30)** And I'll click network.
>
> **[0:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=31)** To access any of these hosts, I would simply double-click the icon for it.
>
> **[0:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=36)** And if necessary, type the required credentials to gain access.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=40)** But how are these host names transformed to their IP addresses?
>
> **[0:45](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=45)** Well, Windows 10 includes a service known as the Client Resolver.
>
> **[0:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=49)** And this service is responsible for resolving host names into their IPv4 or IPv6 addresses anytime you require it.
>
> **[0:58](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=58)** This means you don't have to do anything specific to use a host name instead of an IP address, it's built in.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=64)** Additionally, Windows stores these names and addresses so that you can access them faster the next time you need them.
>
> **[1:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=70)** And this is called the Resolver cache.
>
> **[1:14](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=74)** Let's take a minute to explore the Resolver cache on my computer.
>
> **[1:19](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=79)** I'll open the command prompt.
>
> **[1:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=80)** Here I'll type the command, ipconfig /displaydns.
>
> **[1:30](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=90)** That's a large cache of records.
>
> **[1:33](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=93)** And if you haven't heard the term DNS yet, DNS stands for the domain name system, which is a complete name resolver system.
>
> **[1:41](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=101)** A cache that you see here is where information that is accumulated is stored.
>
> **[1:47](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=107)** Let's find the address of the DNS server your computer uses.
>
> **[1:52](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=112)** You can type ipcongif /all and then look around until you find it.
>
> **[2:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=122)** The IPv4 DNS servers listed here start with 10.35 and then there are additional items under here.
>
> **[2:13](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=133)** These are the top two though.
>
> **[2:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=135)** Notice the two numbers.
>
> **[2:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=137)** Now go ahead and look at your default gateway and your DHCP server.
>
> **[2:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=142)** You should see the same numbers there.
>
> **[2:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=144)** You can work with DNS settings from the advanced TCP IP settings dialog box.
>
> **[2:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=151)** Let's navigate there.
>
> **[2:32](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=152)** I'll right click the network icon on the task bar and I'll click open network in internet settings.
>
> **[2:41](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=161)** I'll click change adapter options.
>
> **[2:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=164)** I'll right click my current connected network and click properties.
>
> **[2:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=169)** I'll choose IPv4, click properties and I'll click advanced in the resulting dialog box.
>
> **[2:59](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=179)** Here's our DNS tab.
>
> **[3:01](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=181)** You have several options here.
>
> **[3:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=182)** First, you can configure additional DNS servers.
>
> **[3:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=186)** Just click add and type in the required information.
>
> **[3:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=190)** You might want to add a DNS server if your current ISP server is slow or to add security features or for better reliability, or even to bypass web censorship.
>
> **[3:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=202)** Here's the add button and here's where you add your new DNS server.
>
> **[3:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=207)** Google has two DNS servers you can use.
>
> **[3:30](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=210)** One is 8.8.8.8 and the other is 8.8.4.4.
>
> **[3:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=219)** If you want to do this, type it in like this and click add.
>
> **[3:43](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=223)** I'll go ahead and click cancel.
>
> **[3:45](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=225)** If you add multiple DNS servers, though, you'll see them listed here in this dialog box.
>
> **[3:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=231)** They will be queried in the order in which they appear.
>
> **[3:55](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=235)** the option below this regarding primary and connection-specific suffixes is enabled by default and controls how the client appends DNS suffixes during queries.
>
> **[4:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=246)** The process is one you're likely familiar with.
>
> **[4:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=249)** If you type [microsoft.com](https://microsoft.com) in the address bar of a web browser, it's automatically changed to www.[microsoft.com](https://microsoft.com) and makes it easier to use.
>
> **[4:19](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=259)** This also applies if you type www.microsoft.
>
> **[4:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=263)** The .com is added automatically.
>
> **[4:26](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=266)** You can also choose append DNS suffixes in order to list the suffixes to search through when resolving host names.
>
> **[4:34](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=274)** A DNS suffix is the DNS name without the host name.
>
> **[4:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=279)** Network admin sometimes add a DNS suffix here that matches their domain name for better performance and ease of use.
>
> **[4:47](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=287)** Another option, DNS suffix for this connection, provides a space for you to specify a DNS suffix for this specific connection and a network card.
>
> **[4:57](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=297)** If DHCP server is used for this connection, a DNS suffix is assigned to it by the server.
>
> **[5:03](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=303)** If you specify a DNS suffix, the suffix assigned by the DHCP server is ignored.
>
> **[5:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=310)** You can use this option if you have a specific DNS server you want to use for the selected connection.
>
> **[5:16](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=316)** Register this connection addresses in DNS specifies that the computer dynamically register the IP address with the full computer name when applicable.
>
> **[5:26](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=326)** Use this connection's DNS suffix in DNS registration, specifies whether DNS will dynamically update and register the IP address and the connection specific domain name of this connection.
>
> **[5:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=338)** Understand that all of these settings can be controlled via group policy and options might be grayed out and unavailable if your computer is managed by a network administrator.
>
> **[5:48](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=348)** I'll click cancel and close all these boxes.
>
> **[5:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=351)** Remember you're in control of DNS settings unless they are restricted by your organization.
>
> **[5:57](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=357)** While the associated group policies are beyond the scope of this movie, you can find and review them on your own if you'd like.
>
> **[6:04](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=364)** Let's go back to the search bar on the task bar.
>
> **[6:07](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=367)** I'll type gpedit.msc and select it in the results to show you how.
>
> **[6:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=375)** This is the local group policy editor.
>
> **[6:18](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=378)** I'll navigate here to computer configuration, administrative templates, network, and then DNS client.
>
> **[6:26](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=386)** Here they are.
>
> **[6:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=387)** Regarding DNS, what you need to remember is that it's used to resolve host names to IP addresses so that users don't have to type in those long addresses to access websites and local computers.
>
> **[6:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=399)** Ultimately, this is what makes networking possible.
>
> **[6:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-name-resolution?u=76281980&t=402)** Imagine what life would be like without it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** dns (28), [[Microsoft]] (3), web (2), [[Search]] (2), business (1)
> **Env Vars:** dns (28), dhcp (3), tcp (1), isp (1)
> **CLI Commands:** find (4)
> **Versions:** 10.35 (1), 8.8.8 (1), 8.8.4 (1)
> **Definitions:** is called (1), stands for (1), is a  (1)
> **URLs:** [microsoft.com](https://microsoft.com) (2)
> **UI Navigation:** double-click (1), open the (1)
> **Analogies:** such as (1), imagine (1)

#### Connect to a network
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=0)** - [Instructor] Windows 10 is compatible and supports many types of networks and network configurations.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=6)** It can physically connect to networks via ethernet, and employee various forms of wireless, such as Bluetooth, near-field communications, and Wi-Fi.
>
> **[0:14](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=14)** There are a range of network configurations, including those that are created manually by sharing folders, by using more formal work groups, and by connecting to enterprise domains.
>
> **[0:26](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=26)** Windows 10 can even incorporate virtual private networks and direct access when working in an enterprise.
>
> **[0:32](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=32)** There are several ways to connect to a network.
>
> **[0:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=35)** You can access the network list from the task bar, from settings, manually from the Network and Sharing Center, or from an adapter's contextual menu.
>
> **[0:46](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=46)** Let's look at each of these.
>
> **[0:48](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=48)** To connect to a network from the task bar, click the network icon.
>
> **[0:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=53)** Click the network to connect to, and choose connect.
>
> **[0:58](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=58)** You may be prompted to input credentials.
>
> **[1:01](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=61)** You can also disconnect from networks here.
>
> **[1:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=68)** Settings offers more networking options than what you'll see from the list available from the task bar.
>
> **[1:14](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=74)** To see these options, click start, click settings, and click Network and Internet.
>
> **[1:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=81)** From status, let's click show available networks to see the list we were just looking at.
>
> **[1:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=89)** Look at all these other options though.
>
> **[1:32](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=92)** You can view the network properties.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=95)** This shows the description, physical address, status, and much more for each of your available connections.
>
> **[1:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=104)** Let's click back.
>
> **[1:45](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=105)** You can also manage the networks you've connected to in the past and remove ones you won't use again.
>
> **[1:50](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=110)** You can do that from Wi-Fi and manage known networks.
>
> **[1:55](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=115)** Here's the network we just connected to.
>
> **[1:58](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=118)** It's easy enough to click here and click forget.
>
> **[2:01](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=121)** I'll click the back arrow.
>
> **[2:04](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=124)** Over in the right side, there are lots of other options, including Network and Sharing Center.
>
> **[2:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=130)** This is the Network and Sharing Center.
>
> **[2:12](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=132)** This is where you'll need to go if the network you want to connect to isn't in the default list because it's hidden or otherwise unavailable.
>
> **[2:19](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=139)** You can opt to set up a new network or connection here.
>
> **[2:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=143)** Let's run through the process.
>
> **[2:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=144)** I'll click set up a new connection or network, and I'll choose manually connect to a wireless network.
>
> **[2:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=151)** I'll choose next, and I'll type the network name.
>
> **[2:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=155)** I'll choose a security type.
>
> **[2:37](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=157)** For this example, I'll just choose personal.
>
> **[2:41](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=161)** And I will type a network key.
>
> **[2:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=164)** I won't start this connection automatically right now, so I'll deselect that and click next.
>
> **[2:50](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=170)** Now I'm ready to close.
>
> **[2:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=173)** If you have the proper credentials, you'll be able to see the new network in the network list.
>
> **[2:57](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=177)** Here at the Network and Sharing Center, there are some other options.
>
> **[3:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=180)** One is change adapter settings.
>
> **[3:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=185)** You can also access this from the settings window, but there it's called change adapter options.
>
> **[3:12](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=192)** However you get here though, let's right-click an active adapter.
>
> **[3:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=195)** I'll right-click Wi-Fi.
>
> **[3:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=197)** It's not connected, but note I have the option to connect or disconnect here.
>
> **[3:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=203)** You can easily disable all network capabilities from the task bar.
>
> **[3:28](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=208)** I'll click the network icon and show you the options.
>
> **[3:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=211)** This is Wi-Fi and airplane mode.
>
> **[3:34](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=214)** This is mobile hotspot.
>
> **[3:37](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=217)** These are toggles.
>
> **[3:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=218)** Wi-Fi is currently enabled.
>
> **[3:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=220)** If I wanted to turn it off, I could click it and it would turn gray.
>
> **[3:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=224)** Airplane mode is gray and it's a toggle as well.
>
> **[3:48](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=228)** If I clicked here, it would turn blue and airplane mode would be on.
>
> **[3:52](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=232)** Let's go back to settings before we leave, and let's have a look at everything on the left.
>
> **[3:57](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=237)** Take some time to explore these options when you get a chance.
>
> **[4:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/connect-to-a-network?u=76281980&t=240)** And remember, the options are constantly changing, so check back often for new and improved features.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (2), next (2), [[Forms]] (1), [[Security]] (1)
> **UI Navigation:** right-click (2), toggle (1)
> **Prerequisites:** set up (2), you'll need (1)
> **Cross-References:** go back to (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Use Windows Firewall
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=0)** - [Instructor] If you use a laptop and work in multiple locations, or if you travel a lot with that laptop, you likely connect to a lot of networks.
>
> **[0:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=8)** Some of those networks are private, like a network at home or work, while some are public, like those in hotels and coffee shops.
>
> **[0:16](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=16)** You can open Windows Firewall to see what type of network you're connected to right now.
>
> **[0:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=21)** One way is to type Firewall here at the task bar.
>
> **[0:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=27)** Make sure to select Windows Defender Firewall in the results.
>
> **[0:32](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=32)** See if your network is private or public.
>
> **[0:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=35)** The network or networks that are active are listed as such, and you can most likely control the firewall settings.
>
> **[0:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=42)** You might also see that you're connected to a domain network though.
>
> **[0:46](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=46)** Domain networks are available in larger corporations and enterprises, and are managed by network administrators.
>
> **[0:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=53)** You won't be able to change the firewall settings here if you're on this kind of network.
>
> **[0:57](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=57)** I'm connected to a private network.
>
> **[0:59](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=59)** You can see that my firewall is on, it's active, and it has a green check mark beside it so I know it's healthy.
>
> **[1:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=66)** This is the way yours should look too.
>
> **[1:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=68)** If you're in charge of managing your own firewall and see that the firewall is turned off, you should look into why.
>
> **[1:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=75)** It may have been turned off because you installed a third party firewall, but it could be because malware has infiltrated the system.
>
> **[1:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=82)** If your firewall is turned off, click Turn Windows Defender Firewall on or off in the left side of the window.
>
> **[1:30](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=90)** Because my firewall is configured and working properly, I'm not going to make any changes here.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=95)** However, if your firewall is turned off and you're sure it should be on, go ahead and turn it back on here.
>
> **[1:41](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=101)** Remember though, only change the firewall status if you know it should be on and it isn't.
>
> **[1:46](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=106)** If you're part of a domain, your firewall will be managed by network administrator, and it's likely you couldn't turn it on even if you tried.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=114)** Also, if your system is infiltrated with malware, you might try to turn it on, but won't be able to.
>
> **[2:01](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=121)** In this case, you'll need to get rid of the malware first and return here later.
>
> **[2:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=125)** As a side note, it's not a good practice to run multiple firewalls, even if you feel it would better protect your computer.
>
> **[2:12](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=132)** In fact, multiple firewalls could be the reason that Windows Firewall has been disabled.
>
> **[2:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=140)** A firewall, by default, blocks risky connections.
>
> **[2:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=144)** Let's take a look now at what's blocked by default for both the private and public connection profiles.
>
> **[2:32](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=152)** To get there, I'll click Allow an app or feature through Windows Defender Firewall.
>
> **[2:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=158)** Let me give you an example of how this works.
>
> **[2:41](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=161)** By default, remote desktop isn't set up to pass through the firewall.
>
> **[2:46](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=166)** It's disabled because this opens the system up to allow remote users.
>
> **[2:50](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=170)** If you want to use remote desktop, perhaps to access your work computer from home, you'll have to create an exception in the firewall to allow it.
>
> **[2:59](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=179)** Just scroll down and locate the desired connection or feature.
>
> **[3:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=182)** I'll scroll down to remote desktop.
>
> **[3:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=186)** Here it is.
>
> **[3:07](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=187)** You can see it's not enabled for the private profile or the public one.
>
> **[3:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=191)** To enable it, I'll click here, and if I wanted it to be enabled for public, I'd click here as well.
>
> **[3:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=197)** But I think private is good enough.
>
> **[3:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=200)** Now, I'll click Okay.
>
> **[3:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=203)** Note that you can repeat these steps to disable the connection.
>
> **[3:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=207)** Take a minute to see what else is on this list and what's enabled and disabled by default.
>
> **[3:34](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=214)** There are additional options if you're feeling exceptionally vulnerable or susceptible to outside attacks.
>
> **[3:41](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=221)** One is to block all incoming connections.
>
> **[3:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=224)** You do that back where we were before in the turn Windows Defender Firewall on or off area.
>
> **[3:50](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=230)** I'll click there to show you.
>
> **[3:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=233)** Here, for the private network, I can choose to block all incoming connections, including those in the list of allowed apps.
>
> **[4:01](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=241)** And I can do the same for public.
>
> **[4:03](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=243)** You might want to do this if you're using an unsecured wifi connection at an airport or hotel.
>
> **[4:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=249)** I've covered just about all you need to know about Windows Firewall, and this movie is almost to its end.
>
> **[4:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=255)** If you've made changes here while following along with me, it might be best to restore the defaults before continuing.
>
> **[4:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-windows-firewall?u=76281980&t=261)** To do this, click Restore Defaults right here in the left pane of the Windows Firewall Settings window.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (8), [[Microsoft Defender|Defender]] (4), feature (2)
> **CLI Commands:** make (2)
> **UI Navigation:** scroll down (2)
> **Best Practices:** make sure to (1), good practice (1)
> **Prerequisites:** you'll need (1), set up (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Windows Firewall advanced security
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=0)** - [Instructor] Windows Firewall is often the first line of defense put into place to protect a computer from outside attacks.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=6)** Windows Firewall provides a shield that prevents the entry and exit of unwelcome traffic, while allowing traffic that is approved to have access.
>
> **[0:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=15)** Windows Firewall does this by carefully inspecting data packets that try to move into and out of the network.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=23)** If those data packets match approved rules, they're allowed to pass.
>
> **[0:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=27)** And if not, they're rejected.
>
> **[0:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=29)** You can see the most basic settings in the Windows Defender Firewall window.
>
> **[0:34](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=34)** To open this simply search for firewall from the task bar and select it in the results.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=40)** This window shows the status of the Windows Firewall and lets you view the network profile that's in use.
>
> **[0:46](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=46)** You can also turn on or off the firewall.
>
> **[0:52](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=52)** As noted in a previous movie, there's also the option to allow an app or feature through the firewall and to restore defaults if you make a lot of changes and you want to put things right again.
>
> **[1:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=62)** If you need to do more than this though, perhaps to configure your own rules for the firewall specific to your business or network, you'll need to access Windows Defender Firewall with advanced security.
>
> **[1:14](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=74)** One way to get there is to click advanced settings.
>
> **[1:18](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=78)** You can monitor the firewall here just as you can in the other window by clicking monitoring.
>
> **[1:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=84)** However, the power of Windows Firewall with advanced security doesn't reside here.
>
> **[1:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=89)** The real power lies in the inbound, outbound, and connection rules containers located in the left pane.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=96)** Click inbound rules to see some rules already in place.
>
> **[1:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=100)** Locate something you recognize like iTunes.
>
> **[1:45](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=105)** You might see Spotify or Skype, or any other manner of applications.
>
> **[1:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=109)** For applications like this one, you're in control of whether or not data can pass through the firewall through the application.
>
> **[1:57](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=117)** You could, if you wanted, block passage.
>
> **[2:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=120)** I'll double click iTunes here and show you the option.
>
> **[2:07](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=127)** Block the connection.
>
> **[2:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=130)** Take a longer look at the entries and see if you can locate other things you recognize, perhaps email and calendar.
>
> **[2:16](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=136)** Some of these might have entries for both public and private network profiles, and you can see some listed for domains too.
>
> **[2:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=143)** You can click profile at the top of the window to sort them.
>
> **[2:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=149)** Here's all.
>
> **[2:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=151)** And if I click again, it'll sort the opposite direction to public.
>
> **[2:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=155)** I'll expand the window so you can see the other options here.
>
> **[2:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=159)** There are other ways to view and sort the firewall rules.
>
> **[2:43](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=163)** You can filter by profile on the right side by domain, private, or public.
>
> **[2:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=169)** You can filter by state: enabled or disabled.
>
> **[2:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=173)** And you can even filter by group.
>
> **[2:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=176)** Of course, you can do most of that up here too.
>
> **[2:59](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=179)** Here's enabled, here's actions, and again groups, and even names.
>
> **[3:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=186)** Before you move forward, notice the help option on the right side of this window.
>
> **[3:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=190)** Notice the options to create a new rule, to copy and delete rules, and more.
>
> **[3:16](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=196)** Go ahead and explore if you wish.
>
> **[3:18](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=198)** However, be careful about creating or applying new rules, disabling rules, or changing the default settings.
>
> **[3:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=204)** Windows Firewall is set up for the best protection possible for most end users.
>
> **[3:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-firewall-advanced-security?u=76281980&t=209)** When you're done, exit Windows Firewall with advanced security and close the Windows Firewall window.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (10), data (3), [[Security]] (3), traffic (2), [[Microsoft Defender|Defender]] (2)
> **Prerequisites:** configure (1), you'll need (1), set up (1)
> **Code Identifiers:** itunes (2)
> **CLI Commands:** make (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### Configure mobile networking
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=0)** - [Narrator] Windows 10 offers features and settings unique to mobile devices.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=5)** There are settings in the task bar, for instance, that allow users to quickly turn on or off airplane mode, connect and disconnect from networks and enable hotspots.
>
> **[0:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=15)** You can access these from the bottom right corner by clicking the network icon.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=20)** This turns on or off WiFi.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=23)** This turns on or off airplane mode.
>
> **[0:25](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=25)** This turns on or off the mobile hotspot.
>
> **[0:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=29)** There are a few features that aren't so easily accessible though, like Windows Mobility Center.
>
> **[0:34](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=34)** And there are settings related to mobile hotspots, metered connections and data usage too.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=40)** Let's look at the Mobility Center first.
>
> **[0:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=42)** Just type mobility at the task bar, and select Windows Mobility Center in the results.
>
> **[0:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=51)** You can see there are several sections here.
>
> **[0:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=54)** What you see can differ depending on the manufacturer of your computer though.
>
> **[0:58](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=58)** You can use the slider to change the display brightness.
>
> **[1:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=62)** If you want to get the most light possible from a single battery charge, a lower brightness level can help.
>
> **[1:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=69)** You can also mute all sounds or change the volume using the slider available.
>
> **[1:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=75)** You can view your battery status and you can change power plans.
>
> **[1:19](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=79)** You can connect and disconnect from external displays, and sometimes, you can even rotate the screen.
>
> **[1:25](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=85)** There's also the option to sync partnerships.
>
> **[1:28](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=88)** Synced partnerships allow you to sync information between your PC and your offline files.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=94)** Offline files are those that have been saved previously in the folders of the network servers you've used.
>
> **[1:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=100)** When you set up partnerships for these files, you can access them even when your server or your PC is not linked with a network and are thus, offline.
>
> **[1:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=109)** Finally, there's the option to turn on presentation settings.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=114)** When enabled, Windows won't turn off your screen or put it to sleep, and it won't show system notifications.
>
> **[2:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=120)** It won't show email or social media updates either.
>
> **[2:03](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=123)** If you've ever been presenting and had your screen go to sleep, you know how useful this can be.
>
> **[2:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=129)** Let's explore a few more settings.
>
> **[2:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=131)** There are times when a wireless network is metered, meaning you have to pay for the data you use.
>
> **[2:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=137)** If this is the case, you'll want to configure it as a metered network in settings.
>
> **[2:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=142)** First, make sure you connect it to the network you want to mark as metered.
>
> **[2:26](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=146)** You can do that by clicking the network icon on the task bar and choosing the desired network.
>
> **[2:32](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=152)** Then, go over to start and settings and click network and internet.
>
> **[2:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=162)** Make sure you're on the status tab and click properties.
>
> **[2:48](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=168)** Scroll down a little and look for metered connection.
>
> **[2:52](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=172)** If you want to set it as a metered connection, move the slider from off to on.
>
> **[2:57](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=177)** You can also set a data limit to help control the data usage on the network.
>
> **[3:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=182)** When you click this option, you'll return to the status screen where you can click data usage and make changes as desired.
>
> **[3:12](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=192)** I'll click the back button.
>
> **[3:14](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=194)** You can also create your own mobile hotspot from the mobile hotspot tab.
>
> **[3:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=201)** Again, just move the slider from off to on then configure the settings.
>
> **[3:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=207)** Once enabled, click edit to change the network name, the network password, or the network band.
>
> **[3:34](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=214)** There are a few other options to explore, but we've covered what most mobile users need to know.
>
> **[3:41](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=221)** If you have a minute, explore what else you see on the left side of this page.
>
> **[3:46](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=226)** You might see WiFi or you might see ethernet.
>
> **[3:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=231)** You can check out airplane mode and even VPN, if you're curious.
>
> **[3:57](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-mobile-networking?u=76281980&t=237)** When you're ready, close the settings window.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (5), [[Windows]] (3), [[Windows 10]] (1), power (1), vpn (1)
> **CLI Commands:** make (3)
> **Prerequisites:** configure (2), set up (1)
> **UI Navigation:** go to (1), scroll down (1)
> **Env Vars:** vpn (1)
> **Analogies:** for instance (1)
> **Speakers:** - [narrator] (1)

#### Manage Wi-Fi settings
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-wi-fi-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-wi-fi-settings?u=76281980&t=0)** - [Narrator] There are a few more wireless features to look at before we move on.
>
> **[0:04](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-wi-fi-settings?u=76281980&t=4)** We've already talked about what's available from the task bar, where you can toggle on and off Wi-Fi, airplane mode, and mobile hotspots, and where you can connect to different networks, and even disconnect from them.
>
> **[0:18](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-wi-fi-settings?u=76281980&t=18)** You've explored settings in network and internet.
>
> **[0:25](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-wi-fi-settings?u=76281980&t=25)** You've looked at changing connection properties, looking at available networks.
>
> **[0:30](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-wi-fi-settings?u=76281980&t=30)** You've looked at the network and sharing center, and more.
>
> **[0:33](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-wi-fi-settings?u=76281980&t=33)** One of the things we haven't talked about though is from the Wi-Fi tab and it's hotspot 2.0 networks.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-wi-fi-settings?u=76281980&t=40)** This setting connects you to suggested Wi-Fi hotspots automatically.
>
> **[0:45](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-wi-fi-settings?u=76281980&t=45)** It's on by default, but you can turn it off if you don't want to be connected.
>
> **[0:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-wi-fi-settings?u=76281980&t=49)** If you continually get connected to public hotspots that are slow or unreliable, and you found that you have to disconnect anyway to get service, this is a good option to disable.
>
> **[0:59](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-wi-fi-settings?u=76281980&t=59)** Let's take a look at status again.
>
> **[1:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-wi-fi-settings?u=76281980&t=62)** The network status here shows how you're connected.
>
> **[1:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-wi-fi-settings?u=76281980&t=65)** This is an icon for the worldwide web.
>
> **[1:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-wi-fi-settings?u=76281980&t=68)** This is a quick way to know if you have access or not.
>
> **[1:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-wi-fi-settings?u=76281980&t=71)** Before we move away from the Wi-Fi technologies, take one more look at what's available in Wi-Fi, airplane mode, mobile hotspots, and data usage.
>
> **[1:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-wi-fi-settings?u=76281980&t=82)** In our next movie, we'll start to troubleshoot networking problems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** web (1), data (1), next (1)
> **Definitions:** is a  (2), is an  (1)
> **Versions:** 2.0 (1)
> **UI Navigation:** toggle (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [narrator] (1)

#### Add mobile devices to a network
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-mobile-devices-to-a-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-mobile-devices-to-a-network?u=76281980&t=0)** - [Instructor] When an enterprise or educational institution allows users to bring their own devices, they often set them up as managed devices.
>
> **[0:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-mobile-devices-to-a-network?u=76281980&t=8)** This means that once added, administrators can control and secure the device just as they would with all the others that have access to the organization's network.
>
> **[0:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-mobile-devices-to-a-network?u=76281980&t=17)** Many businesses use virtual private networks for these connections.
>
> **[0:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-mobile-devices-to-a-network?u=76281980&t=21)** Always-on VPNs are quite popular, as well.
>
> **[0:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-mobile-devices-to-a-network?u=76281980&t=24)** However, there are other options that are built into Windows 10.
>
> **[0:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-mobile-devices-to-a-network?u=76281980&t=27)** Click Start, Settings, Accounts, and then click Access work or school.
>
> **[0:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-mobile-devices-to-a-network?u=76281980&t=35)** Notice on the far right side the various options.
>
> **[0:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-mobile-devices-to-a-network?u=76281980&t=38)** You can set up an account for taking tests, enroll in device management, and get help with remote desktops and VPNs.
>
> **[0:46](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-mobile-devices-to-a-network?u=76281980&t=46)** One way to secure users' personal devices is to have users enroll through the DirectAccess option.
>
> **[0:52](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-mobile-devices-to-a-network?u=76281980&t=52)** Clients must run an Enterprise edition of Windows 10, Windows 8.1, Windows 8, or Windows 7, and must be domain joined to make use of DirectAccess.
>
> **[1:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-mobile-devices-to-a-network?u=76281980&t=62)** To see if a client is running Enterprise, open File Explorer first, then go to This PC.
>
> **[1:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-mobile-devices-to-a-network?u=76281980&t=69)** Right click This PC and choose Properties.
>
> **[1:13](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-mobile-devices-to-a-network?u=76281980&t=73)** Here we see Windows 10 Enterprise, but we are not domain joined.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-mobile-devices-to-a-network?u=76281980&t=77)** But that's okay for now.
>
> **[1:19](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-mobile-devices-to-a-network?u=76281980&t=79)** You can't set up or configure DirectAccess on a client computer alone.
>
> **[1:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-mobile-devices-to-a-network?u=76281980&t=83)** To configure DirectAccess, you must configure a DirectAccess server on a Windows Server 2012 computer or higher and it has to be in a domain.
>
> **[1:32](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-mobile-devices-to-a-network?u=76281980&t=92)** You'll also need a network location server, public key infrastructure, and a DNS server, among other things.
>
> **[1:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-mobile-devices-to-a-network?u=76281980&t=99)** Group policies come into play, too, and are used to administer and deploy DirectAccess settings, as well.
>
> **[1:47](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-mobile-devices-to-a-network?u=76281980&t=107)** That said, I'm not going to be able to show you how to actually make the connection, but if the infrastructure exists, the initial connection is easy to do on the client side.
>
> **[1:55](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-mobile-devices-to-a-network?u=76281980&t=115)** The client will opt to enroll, type their corporate email, and work through the processes.
>
> **[2:01](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-mobile-devices-to-a-network?u=76281980&t=121)** Back to Settings and Accounts, all the user has to do is click Connect.
>
> **[2:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-mobile-devices-to-a-network?u=76281980&t=128)** If you would like to learn more about DirectAccess and similar remote access technologies, you can search for these topics on LinkedIn learning.
>
> **[2:16](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-mobile-devices-to-a-network?u=76281980&t=136)** We have entire courses that cover these specific things.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (3), [[Windows]] (3), management (1), [[Windows Server]] (1), dns (1)
> **Prerequisites:** configure (3), set up (2)
> **CLI Commands:** make (2)
> **Env Vars:** dns (1)
> **Versions:** 8.1 (1)
> **UI Navigation:** go to (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Configure a VPN
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=0)** - [Instructor] Workers often need to access corporate resources while traveling and they need to do that over unsecured networks available to them in hotels, coffee shops, and other public areas.
>
> **[0:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=11)** But how do enterprises guarantee those connections are secure for both the employee and the organization?
>
> **[0:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=17)** They create virtual private networks.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=20)** I'll show you how to create a VPN from the Network and Sharing Center.
>
> **[0:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=24)** And as we go through the steps, I'll explain a little about protocols and profiles and how to know what to choose when prompted.
>
> **[0:30](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=30)** You could also set up a VPN from settings, but I prefer the old school Network and Sharing Center.
>
> **[0:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=36)** The wizard seems to offer more choices and gives me more control.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=40)** There are lots of ways to get to the Network and Sharing Center.
>
> **[0:43](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=43)** One is from Start, then Settings, Network and Internet, then here, Network and Sharing Center.
>
> **[0:52](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=52)** To get started, click Set up a new connection or network.
>
> **[0:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=56)** There are four choices but we want to connect to a workplace, so I'll click that option and I'll click Next.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=64)** If there's already a VPN set up on the computer you're working with, you'll need to tell Windows you want to create a new connection.
>
> **[1:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=70)** Then at this screen, you can decide whether your user will dial directly into the network or not.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=77)** Most of the time, Use my internet connection is best and so I'll click this entry.
>
> **[1:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=82)** Here's where you'll type the internet address.
>
> **[1:25](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=85)** This is the name or IP address of the computer you want to connect to and it's generally something like remote.[landonhotel.com](https://landonhotel.com) which is a fully qualified domain name.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=96)** You'll need to know this to continue and thus you might have to talk to your network administrator first if you're following along.
>
> **[1:43](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=103)** Now you'll type the destination name.
>
> **[1:45](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=105)** I'll call mine Remote Landon.
>
> **[1:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=109)** Read the additional choices and leave the default set as they are unless you have a smart card or want to let other people use the connection.
>
> **[1:57](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=117)** You can always change these later if you change your mind.
>
> **[2:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=120)** When you're ready, click Create.
>
> **[2:03](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=123)** Now I want you to click Change adapter settings.
>
> **[2:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=126)** There are some additional options you can configure.
>
> **[2:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=130)** Right click the new connection and click Properties.
>
> **[2:14](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=134)** You'll need to make sure that the settings you configure here are those that have been automatically configured.
>
> **[2:19](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=139)** Match what is required of your enterprise's infrastructure and policies.
>
> **[2:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=144)** Read what's shown under the General tab, now click Options.
>
> **[2:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=149)** Notice that Remember my credentials is selected.
>
> **[2:32](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=152)** If desired, click the amount of idle time that should pass before the connection is disconnected.
>
> **[2:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=160)** Now click Security.
>
> **[2:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=162)** For the most part, Automatic is the best choice that's listed under type of VPN.
>
> **[2:47](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=167)** But if your organization requires you use a specific type of VPN, select it here.
>
> **[2:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=174)** Although I won't go into how each of these protocols work to provide security for the connection, I will say that they are listed from least secure to most.
>
> **[3:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=182)** And if you choose one, you'll likely also need to input a few additional items such as which data encryption and authentication protocols to use.
>
> **[3:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=191)** You can also opt to allow specific protocols if that's required by your organization.
>
> **[3:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=195)** The Networking tab offers access to additional protocol settings.
>
> **[3:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=200)** And finally, the Sharing tab.
>
> **[3:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=202)** Here you can share the connection.
>
> **[3:25](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=205)** I'm going to click Cancel to get back to the main screen here.
>
> **[3:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=209)** Although you can create VPN connections like this on an individual basis, if you have a lot of computers to manage this will likely become quite cumbersome.
>
> **[3:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=218)** In these instances, you'll probably opt to use a tool like Microsoft Intune or System Center Configuration Manager to create VPM profiles.
>
> **[3:47](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=227)** You can then distribute the profiles to clients.
>
> **[3:50](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=230)** There are several types of profiles to choose from.
>
> **[3:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=233)** Always on profiles initiate when the user signs in or when the user changes networks.
>
> **[3:59](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=239)** This is a great feature for clients that use their profile regularly and it takes the work out of getting connected.
>
> **[4:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=245)** The connection is always on.
>
> **[4:07](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=247)** App-triggered VPNs start when an app requires it.
>
> **[4:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=250)** This causes the connection to be made when it's needed and it's a good choice when the connection isn't required often or if the connection is metered or otherwise an expense.
>
> **[4:19](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=259)** Traffic filters initiate connections when pre-configured rules are met, perhaps those based on certain protocols or addresses.
>
> **[4:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=267)** Finally, LockDown VPNs are used to make sure that all clients use the VPN to access your network and that no other network type can be used.
>
> **[4:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=275)** This is a force VPN and is a good choice when you don't want users ever connecting, using any other method.
>
> **[4:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=282)** Before we close out, let's take a look at the VPN we just created.
>
> **[4:46](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=286)** One way is to click the Network icon on the task bar.
>
> **[4:50](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=290)** The VPN is listed near the top.
>
> **[4:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vpn-18068589?u=76281980&t=293)** You can also access the VPN from Start, Settings, Network and Internet, and here from the VPN tab, here's Remote Landon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** vpn (12), [[Security]] (2), next (1), [[Windows]] (1), data (1)
> **Env Vars:** vpn (12), vpm (1)
> **Prerequisites:** set up (3), you'll need (3), configure (2)
> **Definitions:** is a  (4)
> **CLI Commands:** make (2)
> **URLs:** [landonhotel.com](https://landonhotel.com) (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Troubleshoot network problems
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=0)** - [Instructor] Finding the problem when network issues arise is sometimes easy, like reconnecting a disconnected ethernet cable.
>
> **[0:07](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=7)** With a laptop, perhaps is something simple as well, like re-enabling WiFi or turning off airplane mode.
>
> **[0:14](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=14)** These options are available from the task bar and the network icon.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=19)** You can see WiFi, here, is turned on because it's blue, but if it's turned off, go ahead and click it, enable it again.
>
> **[0:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=27)** The same for airplane mode.
>
> **[0:28](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=28)** It should be gray if you're trying to connect to a network.
>
> **[0:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=31)** If it isn't, click it to toggle it off.
>
> **[0:34](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=34)** If you checked this, but still can't connect, make sure the local router is plugged in and turned on, and that you're in range of a network and connected to it.
>
> **[0:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=42)** Check any ethernet cables too, to make sure they aren't crimped or damaged.
>
> **[0:47](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=47)** If you find, though, after clicking the network icon on the task bar, that you actually are connected to a wireless network, like I am here, note that it's possible to have a wireless connection enabled and seemingly working, but still be unable to connect to parts of the network you feel you should be able to get to.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=64)** In these cases, it could be that the network is set to public when it needs to be set to private.
>
> **[1:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=69)** To see if this is the case, click Start, click Settings, and click Network and Internet.
>
> **[1:19](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=79)** Click either WiFi or ethernet.
>
> **[1:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=82)** I'll click WiFi.
>
> **[1:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=84)** Click the network name, it doesn't look like it's a link to anything, but it is.
>
> **[1:30](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=90)** If the network is set to public and it should be private, go ahead and change it.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=95)** Mine is already set to private, so I'm okay here.
>
> **[1:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=98)** Since mine is at private and I'm still having problems, I'm going to need to look at another setting, Network Discovery.
>
> **[1:45](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=105)** Network Discovery needs to be enabled for the computer to be able to view and connect to resources on the network.
>
> **[1:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=111)** The option for Network Discovery is available from the Advanced Sharing settings in the Network and Sharing Center.
>
> **[1:58](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=118)** There are lots of ways to get there, but I'll go right here to the Status tab and click Network and Sharing Center.
>
> **[2:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=125)** From here, I'll choose Change advanced sharing settings.
>
> **[2:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=130)** You can see here from my private connection, which is my current profile, that Network discovery is turned off.
>
> **[2:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=137)** This is most likely the source of my particular problem, so I'll choose to turn it on, and I'll click Save changes.
>
> **[2:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=144)** From the Network and Sharing Center, you can also access the troubleshooting wizards.
>
> **[2:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=149)** The wizards let you select the type of problem you're having and helps you resolve it, let me show you.
>
> **[2:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=156)** I'll click Troubleshoot problems.
>
> **[2:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=160)** Since we're talking about networks, I'll go ahead and scroll down, and I'll pretend I'm having a problem with the network adapter, which I may well be.
>
> **[2:48](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=168)** I'll double-click that to get started.
>
> **[2:52](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=172)** Let's let that run, see what it finds.
>
> **[2:55](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=175)** So it gives me the option to Select the network adapter to diagnose.
>
> **[2:59](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=179)** I'm going to tell you now that previously I disabled my ethernet adapter just so we'd have something to look at.
>
> **[3:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=185)** So I'm going to click Ethernet here, and I'll show you.
>
> **[3:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=189)** Watch what Windows does.
>
> **[3:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=191)** It says, "Look, hey, your ethernet adapters disabled.
>
> **[3:14](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=194)** Do I want to try these repairs as an administrator?"
>
> **[3:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=197)** All I have to do is click there, and then it'll fix the problem.
>
> **[3:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=201)** I'm not going to do that right now because I'd like to show you one other thing, and I'd like to leave this disabled.
>
> **[3:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=209)** I need to look at my list of adapters and see if any have problems.
>
> **[3:34](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=214)** And, although, there are several ways to get there, I'll go back to the Network and Sharing Center's main screen, and I'll go to the Change adapter options.
>
> **[3:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=224)** I'll click Network and Internet from settings, here I'll click Network and Sharing Center, I'll maximize this window, and I'll click Change adapter settings.
>
> **[3:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=236)** You can see here that my ethernet adapter is disabled.
>
> **[4:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=240)** I can right-click and enable it, and I can also view Properties.
>
> **[4:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=245)** I'm going to go ahead and click Properties now and show you one last little thing.
>
> **[4:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=250)** Here, on Internet Protocol Version 4, sometimes we run into problems with network adapters, even if they're enabled, if DHCP has been somehow turned off.
>
> **[4:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=261)** I'm going to click Properties here.
>
> **[4:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=263)** I want you to look right here that I have an option selected to use the following IP address.
>
> **[4:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=269)** That IP address may not be something that's going to work on my network.
>
> **[4:34](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=274)** If you find this is the problem go ahead and write down the address, and then select Obtain an IP address automatically.
>
> **[4:41](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=281)** If nothing else has solved your problem, this probably will.
>
> **[4:45](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=285)** There's one other thing I'd like to show you before I close out this movie, and that's the network reset option.
>
> **[4:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=291)** I'm going to go back to the Settings window, I'm going to go back to Network and Internet, and back to Status.
>
> **[5:01](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=301)** And, here, at the very bottom, is Network reset.
>
> **[5:04](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=304)** Read this before you make your move because this will remove and then re-install all of your network adapters, and it's going to set all of your networking components back to their original settings.
>
> **[5:14](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=314)** That's quite a commitment, make sure you've tried everything else before you choose Reset now.
>
> **[5:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=321)** As with the other movies, continue to explore before you move on.
>
> **[5:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=324)** There are other options in the Settings window, like airplane mode and WiFi status.
>
> **[5:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-network-problems-18071401?u=76281980&t=329)** And when you're finished, close all opened windows.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Troubleshooting]] (1)
> **UI Navigation:** select the (2), toggle (1), scroll down (1), double-click (1), go to (1)
> **CLI Commands:** make (4), find (2)
> **Cross-References:** go back to (3)
> **Warnings:** note that (1), troubleshoot (1)
> **Env Vars:** dhcp (1)
> **Versions:** version 4 (1)
> **Prerequisites:** install (1)


### 2. Configure Storage

[↑ Back to Table of Contents](#table-of-contents)

#### Manage partitions with Disk Management
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=0)** - [Narrator] A computer's hard disk is where the operating system, program files, personal data and other information are stored.
>
> **[0:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=8)** Most personal and work computers only have a single hard disk installed.
>
> **[0:13](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=13)** The most common place to view a hard disk configuration is from File Explorer.
>
> **[0:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=17)** Click This PC to see how your computer's configured.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=20)** Here, mine has a simple, hard drive and one DVD drive.
>
> **[0:25](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=25)** You might also see a backup drive or a USB drive.
>
> **[0:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=29)** If you see what looks like a physical drive, but you don't think it is, it might be a partition.
>
> **[0:34](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=34)** A partition is an area on a basic disk, like the disks you see in most computers used by consumers and employees that is allocated to hold data, operating system files, virtual machines and so on, but is not a real physical disk.
>
> **[0:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=49)** While File Explorer can show you the computer's basic makeup, to see how your computer is configured with regard to partitions and physical drives, you'll need to open Disk Management.
>
> **[0:59](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=59)** You can do that by right clicking start and choosing disk management.
>
> **[1:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=65)** On this computer, there are several partitions on a single hard drive.
>
> **[1:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=69)** There's a recovery partition that holds recovery files.
>
> **[1:13](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=73)** There's a primary partition that holds the operating system, boot and page files, and so on.
>
> **[1:18](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=78)** There's also this 99 megabyte healthy system partition.
>
> **[1:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=82)** All of this is on disk zero.
>
> **[1:25](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=85)** You can shrink a primary partition and create additional partitions if you like to personalize how your hard drive is configured.
>
> **[1:32](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=92)** Sometimes I do this to set aside a specific place for the virtual machines I create and I sometimes give that partition a drive letter, a V for virtual machines.
>
> **[1:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=102)** You can create a partition for data too, or create a place to install another operating system, Whatever the use for it, to create a partition, first right click the partition you want to shrink.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=114)** Generally, this is the primary partition.
>
> **[1:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=116)** You shouldn't choose a recovery partition or any partition that contains a system image.
>
> **[2:01](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=121)** I'll right click C and choose shrink volume.
>
> **[2:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=126)** Notice I use the word volume here instead of partition.
>
> **[2:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=129)** And that's what is offered in the contextual menu.
>
> **[2:12](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=132)** There's a fine line between a partition and a volume.
>
> **[2:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=135)** Briefly, a partition is an unallocated area of the hard drive, and that partition becomes a volume after it's been formatted with a file system.
>
> **[2:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=143)** When prompted, enter the amount of space to shrink in megabytes or accept the default.
>
> **[2:28](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=148)** Read what's offered here as well.
>
> **[2:30](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=150)** It says you can't shrink a volume beyond the point where any unremovable files are located.
>
> **[2:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=155)** When you're ready, click shrink.
>
> **[2:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=158)** Remember that a partition is just an area of the disk that's been set aside for later use.
>
> **[2:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=164)** As you can see here in disk management, it says our new space is unallocated.
>
> **[2:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=169)** That partition isn't that much use until it's formatted.
>
> **[2:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=173)** If you look back up at File Explorer, you'll see it isn't even listed there.
>
> **[2:57](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=177)** However, if you right click this new partition and opt to create a new simple volume and work through that wizard, it will appear in File Explorer and it will be ready to use.
>
> **[3:07](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=187)** So let's do that.
>
> **[3:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=189)** I'll right click the unallocated area and I'll choose new simple volume.
>
> **[3:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=195)** I'll click next to get started.
>
> **[3:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=197)** This is where I define the simple volume size.
>
> **[3:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=201)** I'm going to just accept this default and click next.
>
> **[3:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=204)** Now I assign a drive letter.
>
> **[3:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=207)** I'll assign N for new volume and I'll click next.
>
> **[3:32](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=212)** I'm going to want it to have the NTFS file system and I'll go ahead and let it perform a quick format and click next again.
>
> **[3:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=220)** And I'll click finish.
>
> **[3:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=222)** Here's our new volume.
>
> **[3:43](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=223)** It has the drive letter N and I accepted the default name of new volume, which is very creative, and you can see here.
>
> **[3:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=231)** Now let's take a look at File Explorer and see what's offered.
>
> **[3:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=236)** Here's our new volume.
>
> **[3:57](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=237)** You can see it's empty and there's nothing on it.
>
> **[4:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=240)** Remember that a simple volume is formatted with a file system, which means it can hold an operating system, virtual disks, data, and so on.
>
> **[4:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=249)** This type of partition doesn't offer any fault tolerance, though.
>
> **[4:12](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=252)** If you want to protect what's on the disk, you'll need a backup strategy, such as an external hard disk or system image.
>
> **[4:19](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=259)** There's another type of volume though.
>
> **[4:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=260)** And that's dynamic volume.
>
> **[4:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=262)** If your computer is configured with dynamic disks, you can create dynamic volumes.
>
> **[4:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=267)** It's likely you've never worked with these before though, unless you've worked in an IT department or with complicated servers.
>
> **[4:34](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=274)** Dynamic volumes can be configured to be fault tolerant.
>
> **[4:37](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=277)** And there are three kinds, mirrored, spanned and striped.
>
> **[4:41](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=281)** Mirrored volumes use two disks and the data on each is an exact copy.
>
> **[4:46](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=286)** This provides fault tolerance.
>
> **[4:48](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=288)** If one disk fails, the other is there for backup.
>
> **[4:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=291)** Mirrored volumes are called RAID 1.
>
> **[4:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=294)** RAID stands for redundant array of independent disks.
>
> **[4:58](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=298)** Spanned Volumes can use unallocated space on two to 32 disks, and looks like a single logical disk to the operating system.
>
> **[5:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=306)** You use this when you want to create disk space using multiple disks.
>
> **[5:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=310)** Spanned volumes do not provide fault tolerance.
>
> **[5:13](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=313)** If any of the disk fails, the data will need to be recovered from backups.
>
> **[5:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=317)** Striped volumes improve write performance by writing data to multiple disks in stripes across a disk you configure.
>
> **[5:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=324)** It's called RAID 0, and this does not protect data from loss if a disk fails.
>
> **[5:30](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=330)** It does offer pretty fast write times though.
>
> **[5:32](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=332)** If you want to use a multiple volumes to stripe data, while at the same time, creating parity to recover from a disk failure in the disk array, you need to implement RAID 5.
>
> **[5:43](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=343)** However, if this is the case, consider using storage spaces, which I'll discuss in a later movie.
>
> **[5:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=349)** Let's take one more look at disk management before we finish up.
>
> **[5:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=353)** Right-click disk zero in the left pane.
>
> **[5:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=356)** You could, if you wanted, convert this to a dynamic disk.
>
> **[6:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=360)** I'm going to advise against this though, at least on any machine you use regularly.
>
> **[6:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=365)** That's because when you convert a dynamic disk with volumes to a basic disk, you'll lose all your data.
>
> **[6:12](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=372)** Not only that, it could render the computer unbootable.
>
> **[6:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=375)** You should only convert to dynamic disks after you've spent some time learning about how and why to do it and with what systems they're compatible.
>
> **[6:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=383)** Finally, before we end here, I want to show you how to delete the volume and undo what you just created.
>
> **[6:28](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=388)** I'll right click the new volume and choose delete volume and click Yes.
>
> **[6:33](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=393)** Now I've got my C drive and some unallocated space.
>
> **[6:37](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=397)** So I'll right click the C drive.
>
> **[6:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=399)** I'll choose extend and I'll add that back in.
>
> **[6:45](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-partitions-with-disk-management?u=76281980&t=405)** There, just like it was when we started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (10), management (4), next (4), [[Virtual Machines]] (3), [[Microsoft Word|Word]] (1)
> **Env Vars:** raid (4), dvd (1), usb (1), ntfs (1)
> **Definitions:** is an  (3), stands for (1)
> **Prerequisites:** you'll need (2), install (1), configure (1)
> **Analogies:** such as (1), just like (1)
> **UI Navigation:** right-click (1)
> **Speakers:** - [narrator] (1)

#### Manage storage with PowerShell
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=0)** - [Instructor] Windows PowerShell is a command line shell that lets users, generally network administrators, automate and configure management tasks.
>
> **[0:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=9)** One of those tasks is managing disk and disk storage.
>
> **[0:13](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=13)** You can use PowerShell to perform operations on disks in ways that aren't available from tools like disk management and commands like disk part.
>
> **[0:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=22)** If you want to follow along here, insert at least two removable USB disks.
>
> **[0:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=27)** You'll need to open PowerShell then with administrative privileges once you're ready.
>
> **[0:33](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=33)** I'll search for it from the task bar.
>
> **[0:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=35)** Right click it in the results and choose run as administrator.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=40)** If you want to work with disks in a PowerShell session, you first need to know the numbers associated with the disks on your computer.
>
> **[0:47](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=47)** One way to do that is to type the command Get-Disk in a PowerShell session and press enter.
>
> **[0:55](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=55)** You can see here that I have several disks installed on my computer.
>
> **[1:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=60)** Zero and one are system and primary partitions.
>
> **[1:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=62)** Disks four, three and two are all external removable drives.
>
> **[1:07](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=67)** I'll write down the numbers for these drives because I'll need them in a minute.
>
> **[1:12](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=72)** If you're following along, take some time to do that now as well.
>
> **[1:16](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=76)** There are a few commands you should become familiar with as you begin to learn how to manage disks using PowerShell.
>
> **[1:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=81)** So let's take a look at some of those now.
>
> **[1:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=84)** I'll run some of the most common ones on a USB disk of mine to help you become familiar with what's available.
>
> **[1:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=91)** First I'll call on the disk I want to work with.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=94)** In this case, it's disk three.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=96)** So I'll type Get-Disk, a space and three.
>
> **[1:43](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=103)** I see that disk three is my Kingston DataTraveler.
>
> **[1:47](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=107)** To work with this, I'm going to need to clear the disk and remove the data.
>
> **[1:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=111)** So I'm going to type Get-Disk again and I'm going to add a pipeline.
>
> **[1:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=116)** I'll add the pipeline character now and use the command Clear-Disk, a space and a -RemoveData to ready it and I'll press enter.
>
> **[2:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=129)** I need to press the Y key to verify it's what I want to do and press enter again.
>
> **[2:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=135)** Now the disk is ready to be used.
>
> **[2:18](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=138)** With the disk cleared, I can initialize the disk by typing this command initialize-disk space three and press enter.
>
> **[2:28](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=148)** You may see that the disk has already been initialized, but it's a good step to take anyway, just in case.
>
> **[2:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=155)** Now, I'll show you how to create a new partition on the disk and assign it a drive letter.
>
> **[2:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=160)** This is a longer command new-partition space
>
> **[2:46](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=166)** - disknumber three, there's a space after disk number, space usemaximumsize space another dash and assigndriveletter and press enter.
>
> **[3:04](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=184)** You can see the new partition here and a drive letter of F.
>
> **[3:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=188)** Of course, for any new disk, you have to format it.
>
> **[3:12](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=192)** So let's format this new partition.
>
> **[3:14](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=194)** This is another long command, so follow along here, I'll type get partition.
>
> **[3:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=200)** This is get-partition, a space
>
> **[3:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=204)** - disknumber three, disknumber and a space three, the pipeline character again, format -volume, a space
>
> **[3:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=219)** - filesystem space NTFS, and I'll press enter.
>
> **[3:47](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=227)** You can see at the top that the file system is being applied and the partition formatted.
>
> **[3:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=234)** Once this is complete, you'll be able to see the new disk in file explorer.
>
> **[4:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=240)** You'll probably be prompted here to format the disk, but as you know, we've already done that.
>
> **[4:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=245)** So I'll click cancel.
>
> **[4:07](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=247)** When I return to this PC in file explorer, my disk is ready to use.
>
> **[4:12](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=252)** These are just a few of the commandlets you can use in PowerShell.
>
> **[4:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=255)** A few more that relate to disk management are shown on the next slide.
>
> **[4:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=260)** You can use the command set-disk to update a disks partition style, or add attributes like read only.
>
> **[4:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=267)** You can use the set-volume command to set or change the file system label for a volume and you can remove and resize partitions.
>
> **[4:37](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=277)** So that's an overview of how to get started with PowerShell and disk management.
>
> **[4:41](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/manage-storage-with-powershell?u=76281980&t=281)** If you're interested in reading more about how you can work with these commandlets and others, visit technet and type PowerShell storage commandlets in the search window.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (9), management (4), [[Search]] (2), [[Windows]] (1), data (1)
> **Tools:** powershell (9), command line (1)
> **Speakers:** - disknumber (2), - [instructor] (1), - filesystem (1)
> **Env Vars:** usb (2), ntfs (1)
> **Definitions:** is a  (2)
> **Prerequisites:** configure (1), you'll need (1)

#### Create a VHD
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=0)** - [Narrator] You might have already heard the terms Virtual Hard Disk and Virtual Machine either at work or in your studies.
>
> **[0:07](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=7)** Let's explore the differences.
>
> **[0:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=9)** A virtual hard disk is an area on the physical disk that looks and acts like a physical disk, but isn't.
>
> **[0:16](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=16)** It's a virtual storage area.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=19)** It's a file, actually, and has a file format, either VHD or VHDX.
>
> **[0:25](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=25)** You can create a virtual hard disk using the Microsoft Hyper-V Manager, Disc Management and PowerShell.
>
> **[0:33](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=33)** Once you've created the virtual disk, you can install an operating system on it if you want to.
>
> **[0:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=38)** At that point, most people start to refer to the entire unit as a single virtual machine.
>
> **[0:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=44)** But, a virtual hard disk is separate from a virtual machine.
>
> **[0:48](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=48)** The hard disc provides a place for the machine to reside.
>
> **[0:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=51)** A virtual machine has an operating system and emulates a traditional computer system.
>
> **[0:57](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=57)** Before you begin working with virtual disks, you should install the Hyper-V tools on a computer that meets the requirements for doing so.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=64)** You can see if your computer is compatible very quickly by performing these steps.
>
> **[1:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=70)** On a Windows 10 Enterprise Computer, in the search box type turn windows features on or off.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=77)** Click it in the results.
>
> **[1:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=80)** Wait for it to load and scroll down to Hyper-V.
>
> **[1:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=83)** Make sure you can select these options and click okay.
>
> **[1:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=89)** I've already done this.
>
> **[1:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=91)** If you haven't, you'll have to click okay and restart your computer.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=95)** Now, open disc management.
>
> **[1:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=98)** Right click the start button to choose it from the list.
>
> **[1:45](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=105)** Click action and click create VHD.
>
> **[1:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=109)** A dialog box appears which walks you through the process.
>
> **[1:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=113)** Read the information as I go through it.
>
> **[1:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=116)** First click browse to locate where to save the new virtual disk and to name it.
>
> **[2:01](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=121)** I'm going to choose my local disk C and I'm going to open users and then public, and I'll save it right here.
>
> **[2:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=131)** You can save yours wherever you like.
>
> **[2:14](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=134)** With that done, you need to choose a file format.
>
> **[2:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=137)** VHDX is often the best option.
>
> **[2:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=140)** This file format supports virtual disks up to 64 terabytes and is resilient when effected by a power failure.
>
> **[2:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=147)** However, it only supports operating systems that are Windows 8 or Windows Server 2012 or higher, so if you need to run Windows 7 or a similar OS, you'll want to choose VHD.
>
> **[2:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=158)** Now, we'll need to decide what type of disc I want to create.
>
> **[2:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=162)** You'll need to read each option to see what meets your needs.
>
> **[2:46](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=166)** Briefly, a fixed size disk is best for servers that run applications and have high levels of disk activity.
>
> **[2:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=173)** The size of the disk doesn't expand or shrink when data is added or deleted.
>
> **[2:57](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=177)** A dynamically expanding disk provides better storage space and is best for servers that don't run applications that are disk intensive.
>
> **[3:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=185)** The disk starts out small, but grows as needed.
>
> **[3:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=188)** I'll leave mine fixed size and I'll leave it VHD.
>
> **[3:12](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=192)** Now, we need to select the virtual hard disk size.
>
> **[3:16](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=196)** The default is set to megabytes, I'll set mine to gigabytes and I'll make it 50.
>
> **[3:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=202)** That'll be big enough to put an operating system on it.
>
> **[3:25](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=205)** I'll click okay.
>
> **[3:26](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=206)** Once the disc is created, you'll need to initialize it.
>
> **[3:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=209)** Right click the area here on the left that says disk one not initialized and click initialize disk.
>
> **[3:37](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=217)** Select master boot record, unless you're creating a very large disk, and then choose GPT.
>
> **[3:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=224)** I'll keep mine simple and I'll click MBR.
>
> **[3:47](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=227)** And now I'll click okay.
>
> **[3:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=229)** Once this is done, you can begin to configure the disc.
>
> **[3:52](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=232)** I will explore configuring of the HD in an upcoming movie.
>
> **[3:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=236)** If you're going to watch the next movie, leave this window open.
>
> **[3:59](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-a-vhd?u=76281980&t=239)** Otherwise, close disk management.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** management (3), [[Windows]] (3), [[Microsoft]] (1), [[Powershell]] (1), [[Windows 10]] (1)
> **Env Vars:** vhd (4), vhdx (2), gpt (1), mbr (1)
> **Prerequisites:** install (2), you'll need (2), before you begin (1), configure (1)
> **CLI Commands:** make (2)
> **UI Navigation:** scroll down (1), select the (1)
> **Tools:** powershell (1)
> **Definitions:** is an  (1)
> **Speakers:** - [narrator] (1)

#### Configure a VHD
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=0)** - [Tutor] If you've created a virtual hard disk and want to make changes to it, you can do so in Disk Management, Hyper-V Manager, and using PowerShell.
>
> **[0:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=9)** Here, I'll show you the options in Disk Management because it's more user-friendly and it's also where I explained how to create a VHD in a previous movie.
>
> **[0:18](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=18)** To open Disk Management, right-click the Start menu and choose Disk Management.
>
> **[0:26](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=26)** I already have it open here.
>
> **[0:28](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=28)** Explore the disks and locate your new VHD.
>
> **[0:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=31)** It may look like what's shown here.
>
> **[0:34](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=34)** This is a separate disk whose disk space is still unallocated.
>
> **[0:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=38)** If on the left side it shows the disk is unknown, right-click the disk and click Initialize.
>
> **[0:46](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=46)** This isn't an option here because I've already initialized this disk in the previous movie.
>
> **[0:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=51)** If you don't see the disk you created, which will likely be the case if you created it in Hyper-V Manager or if you used PowerShell and did not initialize the disk, click Action, and Attach VHD, and browse to it.
>
> **[1:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=68)** Once the disk is here, you can install an operating system on it if you like or use the disk to store data.
>
> **[1:13](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=73)** You can also work with the disk using Hyper-V Manager.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=77)** You can open Hyper-V Manager by searching for it.
>
> **[1:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=81)** I've already done that.
>
> **[1:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=82)** And here it is.
>
> **[1:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=84)** I've selected my computer over here.
>
> **[1:26](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=86)** And on the right side, I'm going to click Edit Disk.
>
> **[1:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=89)** I'd just like to show you these options.
>
> **[1:32](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=92)** Whatever you see will be dependent on what kind of disk you created, fixed or expanding.
>
> **[1:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=98)** I'll click Next.
>
> **[1:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=100)** And I'll browse to my disk to show you how to get started should you want to.
>
> **[1:45](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=105)** I stored mine in C, Users, and Public.
>
> **[1:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=109)** And here's my disk right here.
>
> **[1:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=111)** I called it Test from the last movie.
>
> **[1:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=113)** And I'll click Open.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=114)** If I need to perform actions on this disk, this is where I do it.
>
> **[1:58](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=118)** For now, I'll click Cancel because what you see will depend on the type of disk you created and what you need to do.
>
> **[2:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=125)** I'll close Hyper-V Manager for now.
>
> **[2:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=128)** And let's go back to Disk Management.
>
> **[2:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=130)** Let's look at a few more options.
>
> **[2:13](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=133)** Right-click the disk in the left pane.
>
> **[2:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=135)** If you created the disk using master boot record, you can convert it to a GPT disk.
>
> **[2:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=141)** You simply need to click the option.
>
> **[2:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=143)** To change it back, repeat the steps.
>
> **[2:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=147)** You can also detach the disk.
>
> **[2:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=149)** This removes the disk.
>
> **[2:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=151)** Don't do this right now.
>
> **[2:32](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=152)** If you do, you won't be able to use the disk.
>
> **[2:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=156)** If that happens, you'll have to go back to Action, click Attach VHD, browse to, and bring the disk back online.
>
> **[2:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=164)** Finally, right-click the disk in the left pane.
>
> **[2:47](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=167)** And this time, choose Properties.
>
> **[2:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=169)** There are a couple of things I'd like to show you.
>
> **[2:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=171)** One is from the Policies tab.
>
> **[2:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=173)** You could choose Quick Removal for your preferred removal policy.
>
> **[2:58](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=178)** When you choose this, you disable write caching on the device and in Windows, but you can disconnect the device safely without using the remove hardware icon on the taskbar.
>
> **[3:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=188)** The default, Better Performance, enables write caching, but requires you to disconnect the device safely when you're finished using it.
>
> **[3:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=195)** There are other tabs to explore.
>
> **[3:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=197)** For instance, the Events tab tells you when the disk was created.
>
> **[3:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=201)** Here's the Driver tab.
>
> **[3:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=202)** And here we are back at General.
>
> **[3:25](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=205)** I'll click Cancel.
>
> **[3:26](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=206)** Note that if you want to use the VHD to store data or install an operating system, you'll need to right-click the disk itself and choose Create a New Simple Volume.
>
> **[3:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=216)** Let's do that quickly.
>
> **[3:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=218)** I'll right-click here, I'll click New Simple Volume, and I'll just go through accepting the defaults.
>
> **[3:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=224)** I'll keep this volume size.
>
> **[3:46](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=226)** And let me choose a drive letter.
>
> **[3:47](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=227)** This is a virtual disk.
>
> **[3:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=229)** So I'm going to go ahead and click V.
>
> **[3:50](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=230)** I kind of like to do that.
>
> **[3:52](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=232)** Next, I'll format the disk with NTFS.
>
> **[3:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=236)** Let me give it a label.
>
> **[3:57](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=237)** We called it Test before, I think I'll stick with that.
>
> **[4:01](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=241)** Let it perform a quick format.
>
> **[4:03](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=243)** I don't need compression, and I'll click Next.
>
> **[4:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=245)** Look this over, looks good, and I'll click Finish.
>
> **[4:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=249)** It won't take long for a disk this size to format.
>
> **[4:12](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=252)** And you can see now that we have a healthy, primary partition.
>
> **[4:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-a-vhd?u=76281980&t=257)** If we were to go to File Explorer and look at this PC, we'd be able to see it right here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** management (5), next (3), [[Powershell]] (2), data (2), [[Windows]] (1)
> **Env Vars:** vhd (5), gpt (1), ntfs (1)
> **UI Navigation:** right-click (6), go to (1)
> **Analogies:** just like (1), for instance (1), kind of like (1)
> **Prerequisites:** install (2), you'll need (1)
> **Cross-References:** go back to (2)
> **Tools:** powershell (2)
> **Definitions:** is a  (2)

#### Configure removable devices
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=0)** - [Instructor] Removable devices are extremely handy for making data accessible when you're on the go.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=5)** I have a small USB drive attached to my key chain, which I protect with a passcode and several in my desks for quickly backing up data or sharing with others.
>
> **[0:14](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=14)** I also have an external drive I use with file history to back up the data on my PC.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=20)** There are several attached to the PC I'm working with.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=23)** I'll open File Explorer to show you.
>
> **[0:26](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=26)** While these drives are convenient in home environment, they can be detrimental in an enterprise.
>
> **[0:33](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=33)** Without group policies in place to prevent it users can bring their own drives, copy company data, and take that data with them.
>
> **[0:41](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=41)** This can introduce a whole host of problems, including data breaches.
>
> **[0:45](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=45)** Without restrictions users can also insert their own drives, which can be infected with malware, which can wreak havoc on their workstations and possibly even network computers.
>
> **[0:55](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=55)** To prevent problems with removable drives in the workplace administrators use group policies to create limitations on how they can be used.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=64)** Let's navigate to those policies now.
>
> **[1:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=68)** Type gpedit.msc at the task bar and click it in the results.
>
> **[1:16](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=76)** I have it open here.
>
> **[1:19](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=79)** Now let's navigate to Computer Configuration, Administrative Templates, System and scroll down to Removable Storage Access.
>
> **[1:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=91)** If we had the time I could go through each one of these separately, but it's not really necessary.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=95)** You can read the name of each setting here to see if it's something you want to explore and possibly enable or disable.
>
> **[1:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=102)** Two you might want to consider are Removable Disks Deny read access and Removable Disks Deny write access.
>
> **[1:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=111)** To enable either, double-click it.
>
> **[1:55](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=115)** If you click enable, you'll see that the policy setting will restrict access.
>
> **[2:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=122)** Another more secure option is to deny all access to removable drives.
>
> **[2:07](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=127)** Click All Removable Storage classes: Deny all access and let's take a look at the description.
>
> **[2:16](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=136)** As you can see here, if you enable the policy, no access is granted to removable storage classes.
>
> **[2:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=143)** Make sure to take a few minutes to look at the other settings.
>
> **[2:26](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=146)** You might want to choose to deny access to WPD devices.
>
> **[2:30](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=150)** Sometimes these can be music players, additional displays or even phones.
>
> **[2:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=156)** There are a couple of other settings I'd like to show you.
>
> **[2:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=158)** In the left pane in the same area, click Device Installation.
>
> **[2:43](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=163)** Now double-click Device Installation Restrictions.
>
> **[2:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=169)** Here, you can prevent the installation of removable devices altogether.
>
> **[2:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=174)** You can also choose to prevent the installation of devices that match specific device IDs.
>
> **[2:59](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=179)** Malware often comes through installations and denying installation stops that kind of malware in its tracks.
>
> **[3:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=186)** When you're finished looking at these, go ahead and clean up local group policy editor, but let's leave it open.
>
> **[3:12](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=192)** We'll come back to it in a minute.
>
> **[3:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=195)** If you do allow removable drives in your organization, you should require they be protected by BitLocker.
>
> **[3:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=201)** You can enable BitLocker on any removable drive in File Explorer.
>
> **[3:26](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=206)** BitLocker can protect the drive with a passcode or smart card, protecting its contents from others who should not have access.
>
> **[3:33](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=213)** I'll show you how to do that.
>
> **[3:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=215)** To apply BitLocker, right-click any connected USB drive and clicked Turn on BitLocker.
>
> **[3:43](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=223)** Choose to use a password or use a smart card.
>
> **[3:47](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=227)** I'll enter a password and I'll click next.
>
> **[3:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=233)** You'll have to back up your recovery key.
>
> **[3:55](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=235)** You can save it to your Microsoft account, save it to a file or print it.
>
> **[3:59](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=239)** I'll choose save to a file for now.
>
> **[4:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=242)** I'll save it here and click Next.
>
> **[4:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=245)** And then we have to choose how we will encrypt the disc space.
>
> **[4:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=249)** I'm not going to encrypt this drive or apply BitLocker right now because I'm going to use this drive in the next movie.
>
> **[4:14](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=254)** So I'll click Cancel, but you can make choices that are right for you and click Next to complete the process.
>
> **[4:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=262)** Finally, let's take one last look at group policies for removable drives with regard to BitLocker.
>
> **[4:28](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=268)** Back at group policy, let's navigate again through Computer Configuration, Administrative Templates, Windows Components, and BitLocker Drive Encryption.
>
> **[4:41](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=281)** Now let's look at Removable Data Drives.
>
> **[4:45](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=285)** There are three I'd like you to be familiar with.
>
> **[4:48](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=288)** One is Deny write access to removable drives not protected by BitLocker.
>
> **[4:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=294)** When enabled, users can't write to the drive, unless it's protected.
>
> **[4:58](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=298)** Another is Control use of BitLocker on removable drives.
>
> **[5:03](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=303)** I'll double-click that and I'll show you these options.
>
> **[5:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=306)** If you click enable you get to select the property settings that control how users can configure BitLocker.
>
> **[5:13](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=313)** You can allow them to apply their own BitLocker on their own removable data drives and also to suspend and decrypt.
>
> **[5:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=321)** You can make the choices that are right for you.
>
> **[5:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=324)** For now, I'll click Cancel.
>
> **[5:26](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=326)** And finally you can enforce drive encryption type on removable data drives.
>
> **[5:32](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=332)** Again, if you enable this, you have some choices.
>
> **[5:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=336)** Full encryption or used space only encryption.
>
> **[5:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=340)** The information here will describe that if you're unfamiliar with types of encryption.
>
> **[5:46](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=346)** Again, I'll click Cancel.
>
> **[5:48](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=348)** Before moving on, read the other options here.
>
> **[5:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=351)** You can, for instance, configure the use of passwords, choose how drives can be recovered and more.
>
> **[5:57](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-removable-devices?u=76281980&t=357)** When you're finished, close the local group policy window.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** data (9), next (4), [[Microsoft]] (1), [[Windows]] (1)
> **UI Navigation:** double-click (3), navigate to (2), scroll down (1), right-click (1), select the (1)
> **CLI Commands:** make (3)
> **Env Vars:** usb (2), wpd (1)
> **Prerequisites:** configure (2)
> **Cross-References:** in the next (1)
> **Analogies:** for instance (1)
> **Best Practices:** make sure to (1)

#### Create and configure storage spaces
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980&t=0)** - [Instructor] If you have a few unused or unwanted USB disks available, you can make use of those with a technology called Storage Spaces.
>
> **[0:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980&t=9)** Storage Spaces is fairly new, initially offered in Windows 8 and Server 2012, that lets users combine disk space from multiple hard disks to provide storage redundancy.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980&t=20)** These can be USB drives or larger external drives.
>
> **[0:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980&t=24)** With Storage Spaces, data is saved across multiple drives using virtual disk arrays.
>
> **[0:30](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980&t=30)** This is similar to the older RAID systems, and can provide fault-tolerance through parody as well as mirroring through data duplication.
>
> **[0:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980&t=38)** You'll need one or more physical disks to get started, and while they can be USB drives, they can also be Serial ATA drives or Serially attached SCSI drives.
>
> **[0:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980&t=49)** These disks are used to create a storage pool, which is stored in a storage space.
>
> **[0:55](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980&t=55)** That space is given a single drive letter and treated by the operating system as a logical disk.
>
> **[1:01](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980&t=61)** I'll show you how to create a pool now and talk you through some of the more technical aspects as I do.
>
> **[1:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980&t=66)** I've already connected my two external drives, and they are Storage Spaces ready.
>
> **[1:12](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980&t=72)** To open Storage Spaces type it at the task bar, and click Manage Storage Spaces in the results.
>
> **[1:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980&t=80)** Now I'll open Storage Spaces, and click Create a new pool and storage space to get started, and then we'll select the drives we want to use.
>
> **[1:30](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980&t=90)** I have two drives available here, both external and connected via USB.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980&t=96)** At the bottom, I'll click Create pool.
>
> **[1:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980&t=99)** What happens next might be that the wizard continues, or you might see an error that the drives can't be used, or you might see that the storage pool has been created with the option to create a storage space.
>
> **[1:50](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980&t=110)** I see the latter here.
>
> **[1:52](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980&t=112)** Let's take a look at what's shown.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980&t=114)** I'll leave Storage space as the name.
>
> **[1:57](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980&t=117)** I could choose the drive letter or change it, and I'll leave the file system, NTFS.
>
> **[2:03](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980&t=123)** Notice Two-way mirror is already selected, and that's because I have two drives available.
>
> **[2:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980&t=128)** There are other options, but this one is the only one that's going to work for me.
>
> **[2:13](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980&t=133)** Here's some information about the pool capacity, and it all looks good, so I'll click Create storage space, and here's my storage space.
>
> **[2:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980&t=144)** There are additional options, here, to add drives, to rename the pool, and optimize drive usage.
>
> **[2:30](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980&t=150)** You can explore these if you like.
>
> **[2:32](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980&t=152)** You can also make changes to the storage space or even delete it.
>
> **[2:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980&t=156)** One thing to note here, if a disk in the storage space fails you'll need to remove it, connect a new disk with the same or larger capacity, and then restart the computer.
>
> **[2:46](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980&t=166)** When you open Storage Spaces again, you can add the new disk to the pool.
>
> **[2:50](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980&t=170)** Once it's added, you can remove the failed disk from the disk list.
>
> **[2:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980&t=174)** And that's it for Storage Spaces.
>
> **[2:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-storage-spaces?u=76281980&t=176)** When you're finished, close all open windows, and, if you like, you can delete the storage space from control panel if you don't want to use it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), data (2), next (1)
> **Env Vars:** usb (4), raid (1), ata (1), scsi (1), ntfs (1)
> **CLI Commands:** make (2)
> **Prerequisites:** you'll need (2)
> **UI Navigation:** select the (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### Troubleshoot storage and devices
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=0)** - [Instructor] All kinds of problems can occur with physical hard drives.
>
> **[0:04](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=4)** The files on them can become fragmented, the drive can become full or slow, and a drive can simply get old and fail.
>
> **[0:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=11)** Disk can have physical errors that make it impossible to write to specific sectors on the disk as well.
>
> **[0:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=17)** Tools exist that help you to locate and resolve these issues.
>
> **[0:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=21)** You can view the disks on your computer from File Explorer.
>
> **[0:25](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=25)** Let's explore a few of the traditional tools for working with disks.
>
> **[0:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=29)** Here, there is a hard disk, a couple of USB drives, and a virtual disk.
>
> **[0:37](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=37)** If a problem arises because a disk becomes full, you can delete files from it to free up some space.
>
> **[0:43](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=43)** That's as easy as deleting data you no longer want, removing it off the drive.
>
> **[0:48](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=48)** Videos typically take up a lot of hard drive space.
>
> **[0:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=51)** Let's see if we have any videos here.
>
> **[0:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=56)** Here's my Downloads folder, and you can see I have quite a few things in here.
>
> **[1:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=60)** This is a video, and it's easy enough to delete.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=64)** I'll just right-click, and choose Delete.
>
> **[1:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=68)** I can do the same for any of these other items too.
>
> **[1:14](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=74)** After you've deleted unwanted data like videos, and perhaps music, documents, or photos, you can use Disk Cleanup to delete unnecessary files that you might not otherwise have easy access to, like temporary files and application setup files.
>
> **[1:30](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=90)** I'll run Disk Cleanup to show you the options.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=94)** I'll type "Disk Cleanup" here in the search window.
>
> **[1:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=98)** And I'll choose it at the top.
>
> **[1:41](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=101)** It asks you to select the drive you want to clean up.
>
> **[1:45](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=105)** I'll choose C, and click OK.
>
> **[1:48](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=108)** Notice, you can delete downloaded program files, temporary internet files, downloads, recycle bin, temporary files, and more.
>
> **[2:01](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=121)** Make your selection, and when you're ready, click Clean up system files.
>
> **[2:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=126)** Since this will take a while, I'm going to click Cancel here.
>
> **[2:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=129)** To maintain a cleaner system when multiple users have access to a computer, consider applying disk quotas next.
>
> **[2:16](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=136)** In doing so, you can limit how much disk space users are allowed.
>
> **[2:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=141)** This is available from File Explorer by right-clicking an overused drive, and clicking Properties.
>
> **[2:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=147)** You can place limitations from the Quota tab.
>
> **[2:32](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=152)** I'll right-click C, click Properties, and choose Quota.
>
> **[2:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=159)** I can show the Quota Settings, enable quota management, and configure my options.
>
> **[2:46](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=166)** Maybe I want to limit disk space to a certain number of gigabytes.
>
> **[2:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=173)** And perhaps I could set a warning level as well.
>
> **[2:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=176)** You can log an event when a user exceeds their limit, and when a user exceeds their warning level.
>
> **[3:03](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=183)** You can also opt to deny disk space to users that exceed their quota limit.
>
> **[3:07](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=187)** I'll click Cancel, and Cancel again.
>
> **[3:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=191)** Disk Defragmenter is another tool you can use, but it runs on its own and on a schedule by default, so there's often no need to run it manually.
>
> **[3:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=200)** However, if a computer is running slowly, it's good to check to make sure that it's set to run on its own.
>
> **[3:26](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=206)** I'll open Disk Defragmenter and have a look.
>
> **[3:30](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=210)** I'll choose Defragment and Optimize Drives.
>
> **[3:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=215)** Here, I can see that C has disk defragmentation turned on, and the drives are being optimized automatically.
>
> **[3:43](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=223)** The frequency is weekly, which is fine.
>
> **[3:46](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=226)** You can check your other drives here too.
>
> **[3:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=229)** I'll click Close.
>
> **[3:50](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=230)** Another option when a hard drive is running poorly, or if you're getting errors, is to run the error checking tool.
>
> **[3:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=236)** You can get to this tool with a right-click as well.
>
> **[4:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=240)** We'll go back to File Explorer, right-click the C drive, and choose Properties.
>
> **[4:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=245)** Let's click the Tools tab.
>
> **[4:07](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=247)** Here's error checking.
>
> **[4:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=249)** It says, "This option will check the drive for file system errors."
>
> **[4:13](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=253)** And look, here's another way to get to Disk Defragmenter.
>
> **[4:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=257)** If you think your disk has physical errors, click Check.
>
> **[4:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=261)** For now, I'll click Cancel.
>
> **[4:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=264)** These are all traditional tools you are likely familiar with, but none of these are any help if a drive fails and you need to replace it.
>
> **[4:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=271)** You have to use Disk Management when this happens.
>
> **[4:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=275)** I'll right-click the Start menu and open Disk Management to show you.
>
> **[4:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=279)** Although I haven't installed a new raw hard drive here in Disk Management, if you do, you'll likely see it.
>
> **[4:46](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=286)** I do have a drive that's formatted as a simple volume, and it's not empty, and I can format that if I'd like.
>
> **[4:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=293)** I also have a couple of USB drives.
>
> **[4:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=296)** If you decide you want to format any drive, just right-click it.
>
> **[5:01](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=301)** Here's USB1.
>
> **[5:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=302)** I could right-click, and choose Format.
>
> **[5:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=306)** On a similar note, I could change the drive letter, shrink the volume, and delete the volume to return it to its natural state, and I can look at its properties.
>
> **[5:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=315)** In previous movies, we talked about Disk Management at length.
>
> **[5:19](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=319)** So we won't go over that again now.
>
> **[5:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=322)** Before you move forward, if there are any things you would like to run, like Disk Cleanup or the error checking tool, go ahead and do that.
>
> **[5:30](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-storage-and-devices?u=76281980&t=330)** When you're finished, close all open windows.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** management (5), data (2), application (1), [[Search]] (1), next (1)
> **UI Navigation:** right-click (7), select the (1)
> **CLI Commands:** make (3)
> **Env Vars:** usb (2), usb1 (1)
> **Cross-References:** go back to (1), we talked about (1)
> **Definitions:** is a  (2)
> **Warnings:** warning (2)
> **Prerequisites:** setup (1), configure (1)


### 3. Configure Data Access and Usage

[↑ Back to Table of Contents](#table-of-contents)

#### Create and configure folder shares
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=0)** - [Instructor] If you want to share data with others who use your computer or need access via a local network, you'll need to create shares.
>
> **[0:07](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=7)** Shares let you control who can access what, called authentication, and what they can do with it once they had that access, called authorization.
>
> **[0:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=17)** There are several ways to go about this in Windows 10.
>
> **[0:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=21)** You can use File Explorer.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=23)** You might have some experience with this already.
>
> **[0:25](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=25)** You can create and manage shares from a command line or a PowerShell session too.
>
> **[0:30](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=30)** And you can use the Shared Folders snap-in available in a Microsoft management console to view and manage shares.
>
> **[0:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=38)** I'd like to talk a little about each of these.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=40)** Let's start with File Explorer.
>
> **[0:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=42)** Open File Explorer by clicking the folder icon on the task bar.
>
> **[0:47](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=47)** For the sake of simplicity, click this PC and double click the C Drive.
>
> **[0:52](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=52)** From the home tab, click new folder and name the folder whatever you'd like.
>
> **[1:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=60)** I'll call mine stuff to share and press enter.
>
> **[1:03](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=63)** With the folder selected, click the share tab to see a few basic share options.
>
> **[1:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=69)** If you click a user, say John, you'll have the option to share the selected items with him.
>
> **[1:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=75)** I'll go ahead and share the item.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=77)** Now John has access to stuff to share along with everyone which you'll learn about later.
>
> **[1:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=82)** If you right click the folder, there are similar options.
>
> **[1:26](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=86)** Here is give access to and here's John, or you can choose specific people.
>
> **[1:32](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=92)** I can also click John here and change his permission from read to read write or even remove John.
>
> **[1:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=99)** However, you'll almost always need more options than this.
>
> **[1:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=102)** Let's exit out of this and right click to select properties instead.
>
> **[1:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=109)** Click the sharing tab.
>
> **[1:50](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=110)** If you click share, you'll see those simpler options available from the traditional menu options.
>
> **[1:59](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=119)** However, if you click advanced sharing, you'll see a lot more things.
>
> **[2:04](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=124)** Make sure share this folder is selected.
>
> **[2:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=126)** Let me show you the permissions for a second.
>
> **[2:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=129)** Here, everyone has full control as do administrators.
>
> **[2:14](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=134)** I'll go over the permissions and how to configure those in an upcoming movie.
>
> **[2:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=137)** For now I only want to talk about how to create shares in various ways.
>
> **[2:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=141)** So I'm going to go ahead, click cancel, click cancel, and close this dialog box.
>
> **[2:28](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=148)** Beyond File Explorer, you can create shares at a command prompt and in PowerShell too.
>
> **[2:34](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=154)** Let's practice a few of these commands to get familiar with them.
>
> **[2:37](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=157)** Open a command prompt by typing CMD in the search window of the task bar.
>
> **[2:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=162)** Right click command prompt and click run as administrator.
>
> **[2:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=169)** Let's create a new share.
>
> **[2:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=171)** One way is to type net share.
>
> **[2:55](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=175)** Make sure to put a space in between.
>
> **[2:58](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=178)** Put another and let's name the share NewShare1.
>
> **[3:03](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=183)** We'll put an equal sign and we'll type C colon backslash users.
>
> **[3:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=190)** Net share lets you create a name, a new share for the users on the network.
>
> **[3:16](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=196)** You could also add a remark if you wanted.
>
> **[3:18](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=198)** A remark is just that.
>
> **[3:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=200)** It has no bearing on the share itself.
>
> **[3:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=202)** I'll put a space, a forward slash and remark colon, I'll add a parentheses and type users area share and another end parentheses.
>
> **[3:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=215)** Now I'll press enter.
>
> **[3:37](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=217)** The new share was successfully created.
>
> **[3:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=220)** Now in file Explorer, click network in the left pane and expand the computer name to see the new share.
>
> **[3:47](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=227)** Here's network.
>
> **[3:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=229)** Here's my computer.
>
> **[3:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=231)** And here's the new share.
>
> **[3:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=233)** There are some related net share command line options, including a forward slash grant user permissions and delete.
>
> **[4:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=242)** I'd like to show you these in PowerShell though, just to give us another option.
>
> **[4:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=246)** So let's close this command prompt window and open PowerShell.
>
> **[4:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=251)** I'll type it here on the task bar and like command prompt, I'll right click and choose to run as an administrator.
>
> **[4:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=260)** Let's open a PowerShell window using administrator credentials and take a look at a few of the command lines available there.
>
> **[4:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=267)** First let's type get dash SMB share to see all the shares.
>
> **[4:32](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=272)** Get dash SMB share and I'll click enter.
>
> **[4:37](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=277)** These are the shares on my computer.
>
> **[4:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=279)** Here's stuff to share.
>
> **[4:41](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=281)** Here's NewShare1.
>
> **[4:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=282)** Now we can try to get access to any of those shares with this command, get dash SMB share access a space, a dash, and the word name and a space.
>
> **[4:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=296)** And we'll put quotes here, NewShare1 and press enter.
>
> **[5:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=302)** Here you can see that for this share, everyone can read what's in the folder.
>
> **[5:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=306)** And that's the default setting when you create a share.
>
> **[5:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=308)** Now let's type a command to create a new share.
>
> **[5:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=311)** I'll type new dash SMBshare space and I want to name it space NewShare2.
>
> **[5:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=322)** And here I'll press enter.
>
> **[5:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=324)** Since I didn't specify a path, now I have to write one.
>
> **[5:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=327)** So I'll choose C colon backslash users, and I'll press enter again.
>
> **[5:34](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=334)** The new share has been created.
>
> **[5:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=336)** And just for practice, let's go ahead and delete that.
>
> **[5:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=339)** So here I'll type remove dash SMBshare space, got to give it the name, dash name, another space, and then we'll type NewShare2 and press enter.
>
> **[5:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=354)** It's asking me if I'm sure I want to do that.
>
> **[5:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=356)** So I'll click yes and press enter again.
>
> **[5:59](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=359)** Finally type net share help to see additional parameters.
>
> **[6:04](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=364)** Net space share space forward slash help.
>
> **[6:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=369)** You might recognize some of these.
>
> **[6:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=371)** Here's grant, here's delete and here's remark.
>
> **[6:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=377)** So that's a brief intro into some of the ways you can manage shares with commands.
>
> **[6:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=381)** That's not for everyone though.
>
> **[6:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=383)** So lastly, let's look at the Shared Folders snap-in.
>
> **[6:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=387)** Although there are several ways to do it, I prefer to simply open computer management.
>
> **[6:33](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=393)** I'll rick click the start area here and I'll click computer management.
>
> **[6:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=399)** I'll expand shared folders and I'll click shares.
>
> **[6:43](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=403)** Again, look at our shares and the folder path.
>
> **[6:48](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=408)** Here's my NewShare1 and stuff to share.
>
> **[6:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=411)** The NewShare2 is gone because I created and then deleted it.
>
> **[6:55](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=415)** You can double click any share to access its properties.
>
> **[6:58](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=418)** There are three tabs, general, share permissions and security.
>
> **[7:03](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=423)** You can change how many users can access the share at once.
>
> **[7:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=426)** The default is set to maximum, but you can allow specific number.
>
> **[7:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=430)** Let's say five.
>
> **[7:14](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=434)** From the share permissions tab, you can change the permissions that are applied to everyone.
>
> **[7:19](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=439)** One way to lock this down is to remove the everyone group and then only add groups of people that you want to have access to.
>
> **[7:28](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=448)** Although we don't normally add simple users, I could add John here if I wanted to.
>
> **[7:33](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=453)** And the security tab offers additional options around permissions.
>
> **[7:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=458)** Let's click cancel and move out of all of that.
>
> **[7:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=462)** Close any open windows.
>
> **[7:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=464)** And remember, shares can only be accessed by network users if the computer that is hosting them is turned on and accessible.
>
> **[7:52](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-configure-folder-shares?u=76281980&t=472)** Corporations often use file servers for this, but if you're in a small home or office environment, it's something to keep in mind if you keep your shares on a work group computer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (5), prompt (5), management (3), [[Security]] (2), data (1)
> **Tools:** powershell (5), command prompt (5), command line (2)
> **CLI Commands:** snap (2), make (2)
> **Env Vars:** smb (3), cmd (1)
> **Prerequisites:** you'll need (1), configure (1)
> **Best Practices:** make sure to (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)

#### Configure and use OneDrive
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=0)** - [Instructor] There are plenty of places to store personal data, including a computer's hard disk, attached external drives, and local network drives.
>
> **[0:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=9)** Large companies use something much more robust, because they need to manage corporate data.
>
> **[0:14](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=14)** They might have an onsite data storage room, or they might keep their data in the cloud managed by a third party.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=20)** Single users and small business owners might also opt to store their data online.
>
> **[0:26](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=26)** There are lots of options, including Dropbox, Google Drive, OneDrive and even iCloud.
>
> **[0:34](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=34)** I'd like to talk about OneDrive here.
>
> **[0:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=36)** If you don't see a OneDrive folder, it's because you haven't logged into the computer with a Microsoft account.
>
> **[0:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=42)** You'll need to do that if you want to follow along.
>
> **[0:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=44)** To see what you're logged in with, click Start, Settings, and go to Accounts.
>
> **[0:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=51)** I'm logged in with my Microsoft account.
>
> **[0:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=54)** I could opt to sign it with a local account, but I wouldn't have access to the folders.
>
> **[0:58](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=58)** If this is what you see, you're good to go.
>
> **[1:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=60)** Otherwise, click sign in with a Microsoft account instead.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=64)** Once it's available, you can save data to OneDrive using any technique you're already familiar with.
>
> **[1:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=70)** You can navigate to OneDrive from any Save As dialogue box.
>
> **[1:14](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=74)** I'll open WordPad to show you.
>
> **[1:16](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=76)** I'll type Test1, and I'll show you from File, Save As, the OneDrive folder.
>
> **[1:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=84)** It's right here.
>
> **[1:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=87)** I'll go ahead and save this as Test1 to show you.
>
> **[1:33](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=93)** And back in File Explorer, you can see the file I just created.
>
> **[1:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=98)** Because OneDrive is cloud-based, you can access the files you save to OneDrive from any web browser.
>
> **[1:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=104)** The same holds true for folders as well.
>
> **[1:46](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=106)** To access this online, go to a web browser and type OneDrive.[live.com](https://live.com), and login.
>
> **[1:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=113)** I've done that.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=114)** And you can see, my test file is already here.
>
> **[1:58](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=118)** I can work from it inside the web browser as well.
>
> **[2:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=122)** While you're here, and while we're on the subject of OneDrive, click New.
>
> **[2:07](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=127)** Look at everything you can create.
>
> **[2:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=129)** There's options to create Word documents, workbooks, presentations, and more.
>
> **[2:16](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=136)** You can also upload files and even upload folders.
>
> **[2:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=141)** Once you select a file or a folder, you'll have more options.
>
> **[2:28](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=148)** I'll click Documents.
>
> **[2:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=151)** And take a look at the options here.
>
> **[2:33](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=153)** I can share, download, move, copy, rename, and so on.
>
> **[2:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=159)** I'll click the back button.
>
> **[2:41](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=161)** I'd like to show you one more thing about OneDrive.
>
> **[2:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=164)** In the notification area of the task bar, you'll see a cloud icon.
>
> **[2:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=169)** Click it.
>
> **[2:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=171)** You'll have access to the latest documents, you'll have the option to open the folder, and Help & Settings.
>
> **[2:59](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=179)** Click Help & Settings, and click Settings to look at the options for configuring Microsoft OneDrive.
>
> **[3:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=186)** You can configure OneDrive to start when you sign into Windows, and that's enabled by default.
>
> **[3:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=191)** You can also use OneDrive to fetch files stored on this PC, which is deselected by default.
>
> **[3:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=197)** When you enable this feature, you can access all your files on this PC from another computer by going to the OneDrive website.
>
> **[3:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=204)** On the Account tab, you could get more storage and add accounts or unlink accounts associated with OneDrive.
>
> **[3:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=211)** You can also choose which folders to make available on OneDrive.
>
> **[3:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=215)** I'll click Choose Folders to show you.
>
> **[3:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=218)** If you look closely, you can see I don't have all of these selected.
>
> **[3:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=222)** The files you select will be available on demand, and unselected folders will be hidden in File Explorer.
>
> **[3:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=231)** From the Backup tab, you can tell Windows you want documents and pictures to be saved to OneDrive automatically instead of your local PC.
>
> **[3:59](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=239)** If you'd like to do that, click Manage Backup.
>
> **[4:03](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=243)** The Network tab lets you configure the upload and download rate.
>
> **[4:07](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=247)** And finally, the Office tab offers collaboration options.
>
> **[4:12](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=252)** If you use Office 2016 and OneDrive for collaboration, click More Info to learn more.
>
> **[4:18](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=258)** If you made any changes here, open File Explorer again, and check out what's there.
>
> **[4:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=264)** Beyond that, you might want to take a minute to copy some of your data there and back it up.
>
> **[4:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=269)** You might want to move data there to make it available in the cloud from any PC.
>
> **[4:33](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=273)** Whatever you do, it's up to you.
>
> **[4:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-onedrive?u=76281980&t=275)** Take some time to personalize this area, and when you're finished, close File Explorer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft OneDrive|Onedrive]] (18), data (8), cloud (4), [[Microsoft]] (3), web (3)
> **UI Navigation:** go to (2), navigate to (1), open the (1)
> **Prerequisites:** configure (2), you'll need (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** icloud (1)
> **URLs:** [live.com](https://live.com) (1)
> **Speakers:** - [instructor] (1)

#### Create and manage permissions
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=0)** - [Instructor] We've talked about creating shares.
>
> **[0:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=2)** And in this movie, we're going to explore more about the available permissions for them.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=6)** I'll address the differences among share and NTFS, explicit permissions, NTFS permission inheritance, and more.
>
> **[0:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=15)** Before we start though, open File Explorer and create a few folders you'd like to share.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=20)** I'll create two, Share 1 and Share 2, and for simplicity sake, I'll save them to the Root drive.
>
> **[0:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=27)** I'll click New Folder, name this one Share 1, click New Folder and name this one Share 2.
>
> **[0:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=35)** You can see I've navigated to This PC and the Local Disk.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=40)** The reason I'm creating folders here is because the C drive isn't shared by default.
>
> **[0:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=44)** So no preset permissions will trickle down to these new folders.
>
> **[0:48](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=48)** If I were to create folders and set a parent folder with sharing was already enabled, those permissions would be inherited, and I don't want that.
>
> **[0:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=56)** I want to show you how to configure permissions from scratch.
>
> **[0:59](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=59)** There are two types of permissions that we'll be concerned with, share permissions and NTFS.
>
> **[1:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=65)** There are also registry and active directory permissions.
>
> **[1:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=68)** Share permissions apply only to users who access resources over a network and do not apply to users who access the machine locally.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=77)** This is the only permission available on FAT drives.
>
> **[1:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=80)** When you share a folder this way, by default, everyone can read what's in that folder.
>
> **[1:26](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=86)** You should get into the habit of removing the everyone group and adding only specific groups when you start configuring permissions for your environment, and I'll show you how to do that in a minute.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=95)** Let's stop though and locate the share permissions for our folder.
>
> **[1:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=100)** Right click any folder and click Properties.
>
> **[1:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=104)** Click the Sharing tab and click Advanced Sharing.
>
> **[1:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=109)** If you haven't yet shared the folder, go ahead and place a check mark here.
>
> **[1:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=113)** And let me click Permissions to show you the shares.
>
> **[1:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=116)** There are three: read, change, and full control.
>
> **[2:01](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=121)** Read means users can see what's in the folder and read it.
>
> **[2:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=125)** Change gives them the permission to edit it.
>
> **[2:07](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=127)** And full control lets them have full access to the folder and its contents.
>
> **[2:12](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=132)** As I stated earlier, the everyone group has access to the folder when you share it.
>
> **[2:16](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=136)** And as you can see here, everyone can read.
>
> **[2:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=140)** It's a good habit to lock shares down a little tighter though so let's remove the everyone group and let's add just users.
>
> **[2:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=147)** Here I'll click, I'll type Users, and I'll click Okay.
>
> **[2:33](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=153)** Now I have only the users group and they have read.
>
> **[2:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=156)** If I wanted to, I could give them change or full control, and I think I'll do that now.
>
> **[2:41](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=161)** I'll click Change, and I'll click Okay.
>
> **[2:45](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=165)** NTFS permissions apply to users over a network or those that access the resource locally.
>
> **[2:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=171)** They are available only on NTFS and ReFS volumes.
>
> **[2:55](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=175)** There are six basic permissions: full control, modify, read and execute, read and write, all of which give more granular control in the share permissions, read, change, and full control.
>
> **[3:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=189)** There are special permissions too, but it's best to avoid those for now because using them can complicate sharing configurations and make them difficult to troubleshoot when problems arise.
>
> **[3:19](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=199)** Click the Security tab again, you can see the permissions here.
>
> **[3:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=203)** If you don't see a Security tab, the drive isn't formatted with NTFS, so you won't have access to NTFS permissions.
>
> **[3:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=211)** To make changes to any group here, click it and click Edit.
>
> **[3:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=215)** I don't want to change permissions for administrators, that's not a good idea.
>
> **[3:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=219)** So I'll click the users group, and I'll click Edit.
>
> **[3:43](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=223)** With users selected, I think I'll change users to full control, and I'll click Okay.
>
> **[3:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=231)** If both share and NTFS permissions are applied to a resource like we've done here, the most restrictive permission is the effective permission, or in simpler terms, the permission that is applied.
>
> **[4:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=242)** So if a user has the share permission to read and change a resource in the NTFS permission of full control, read and change is applied.
>
> **[4:12](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=252)** If you ever get confused about effective permissions, you can use the Effective Access tab to sort it out.
>
> **[4:19](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=259)** You can find this under the Security tab in Advanced.
>
> **[4:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=263)** Here's the effective access option.
>
> **[4:26](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=266)** And here you select a user or group, and once that's done, click View Effective Access.
>
> **[4:33](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=273)** It's important to understand that users sometimes have multiple share and multiple NTFS permissions.
>
> **[4:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=280)** This can get quite complicated.
>
> **[4:43](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=283)** Here's an example, say that Bob is a member of the accounting group and he has share permission full control to the taxes folder.
>
> **[4:50](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=290)** But Bob is also a member of the inventory group, and that group has the share permission read to that same resource.
>
> **[4:57](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=297)** Because they are both share permissions they are cumulative.
>
> **[5:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=300)** So Bob has the share permission full control and read.
>
> **[5:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=305)** So his effective share permission is full control.
>
> **[5:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=308)** The same is true of NTFS permissions.
>
> **[5:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=311)** They too are cumulative.
>
> **[5:14](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=314)** If there are multiple share permissions and multiple NTFS permissions, to find the effective permission, you must calculate the cumulative access for each and then compare them.
>
> **[5:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=324)** When comparing the final share in NTFS results though, the most restrictive is applied.
>
> **[5:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=331)** I mentioned in the beginning of this movie, that permissions can be inherited from their parent folder.
>
> **[5:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=336)** There's a hierarchy that runs from top to bottom.
>
> **[5:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=339)** Without this type of system in place, assigning permissions and keeping track of them would be extremely difficult.
>
> **[5:45](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=345)** You can disable inheritance though, should you need to configure a folder independently of its containing folder.
>
> **[5:50](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=350)** Back at the dialog box and back at the Security tab, let's click Advanced again to see it.
>
> **[5:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=356)** Here's the option under Permissions to disable inheritance.
>
> **[6:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=360)** Although it might seem like a simple thing to do, you should apply this option as little as possible.
>
> **[6:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=366)** It's always best to try to stick with the inherent hierarchy.
>
> **[6:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=370)** So for now, I'll click cancel.
>
> **[6:12](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=372)** Finally, every now and then you'll run across a very specific issue, perhaps where you need to apply an explicit permission.
>
> **[6:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=381)** These explicit permissions override any permissions already configured or inherited.
>
> **[6:26](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=386)** For instance, if you deny a single user access to a resource, but that user is also a member of a group that does have access, the deny permission will override the group permission.
>
> **[6:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=398)** Let me show you how to do that.
>
> **[6:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=399)** Back here at the Security tab, I'll click Edit, then I'll click Add, and I'll type a specific user, in this case, John, and I'll click Okay.
>
> **[6:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=411)** With John selected, I can now opt to deny John access and it won't matter what other groups he's a member of, and I'll click Okay.
>
> **[7:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=420)** Make sure to read the entry anytime you apply deny permission.
>
> **[7:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=425)** This says that deny entries take precedence over allow.
>
> **[7:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=428)** And if the user could access the resource before and you click yes here, they're not going to be able to access it again.
>
> **[7:14](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=434)** I'll click Yes.
>
> **[7:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=437)** And I'll click Close.
>
> **[7:19](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=439)** There's a lot more to learn about permissions, including what happens to those permissions when you move or copy them to another area on the same disc or to another disc or network drive.
>
> **[7:30](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=450)** There are also special permissions and strategies for creating hierarchies, including user and group memberships, inheritance, and permission structures.
>
> **[7:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=458)** For now, though, you have a good start.
>
> **[7:41](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-manage-permissions?u=76281980&t=461)** Continue to explore this topic as time allows, and remember, try to stick to the built-in hierarchy rules and basic NTFS permissions for best results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Security]] (5), [[Active Directory]] (1)
> **Env Vars:** ntfs (14), fat (1)
> **CLI Commands:** make (3), find (2)
> **Prerequisites:** configure (2), before we start (1)
> **Best Practices:** it's best to (1), make sure to (1)
> **Definitions:** is a  (1)
> **Analogies:** for instance (1)
> **Warnings:** troubleshoot (1)

#### Troubleshoot data access
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=0)** - [Instructor] You can use both Share and NTFS permissions to protect resources.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=5)** Those resources are often folders that contain data, such as documents, presentations, and photos, but they can also be printers, backup drives, and hardware.
>
> **[0:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=15)** There are options for sharing resources in File Explorer.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=19)** I created and shared these folders previously, and they are ready for use.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=23)** You can see the names here, they are "Share1" and "Share2."
>
> **[0:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=27)** When all goes well, users can access shared resources without any problems.
>
> **[0:32](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=32)** But on occasion, users get access denied messages.
>
> **[0:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=36)** Here's an example of a Deny message.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=40)** These errors are sometimes due to a resource not being physically available, such as when a file server is down, or a printer is turned off, or because a network link is broken.
>
> **[0:50](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=50)** You should always check physical issues when troubleshooting a resource, especially if a user has been able to access it previously, but can't now.
>
> **[0:59](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=59)** When it's not due to a hardware issue, though, the likely culprit is often conflicting and contradictory permissions, often assigned to the groups the user is a member of.
>
> **[1:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=69)** It's important to understand what happens when multiple permissions exist.
>
> **[1:14](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=74)** When you configure multiple Allow permissions for a user, those permissions are cumulative.
>
> **[1:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=80)** This means if you assign a user named Jennifer to the engineering group, and give her group read and change Share permissions for a folder called "Blueprints," and also add her to the supervisor's group, and give that group full control, her effective Share permissions are read, change, and full control.
>
> **[1:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=99)** They add up.
>
> **[1:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=100)** The same is true of any NTFS permissions you assign.
>
> **[1:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=104)** This cumulative asset applies to folder inheritance as well.
>
> **[1:48](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=108)** If permissions are inherited from a parent folder, those permissions are added to the mix too.
>
> **[1:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=113)** However, if you assign Jennifer an explicit Deny permission for a resource, she won't be able to access it, no matter how many other permissions are configured.
>
> **[2:03](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=123)** In this instance, Deny is an explicit permission and takes precedence.
>
> **[2:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=128)** Additionally, explicit permissions take precedence over inherited ones.
>
> **[2:13](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=133)** As an example, if Jennifer inherited a Deny permission, but you give her an explicit Allow permission to the same resource, she can access it, because explicit overrides inherited.
>
> **[2:25](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=145)** Finally, if both Share and NTFS permissions exist, the most restrictive of those wins.
>
> **[2:32](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=152)** If you get so mired down in permission problems that you feel your best option is to simply start over, and you've already looked at the Effective Permissions tab I discussed in other movies that didn't help, you can.
>
> **[2:45](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=165)** There's a command that you can use to reset all of the file and folder permissions configured on the computer.
>
> **[2:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=171)** You'll need to be logged in as an administrator, and you'll need to open a PowerShell session as an administrator as well.
>
> **[2:58](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=178)** I'll do that.
>
> **[2:59](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=179)** Here's Windows PowerShell.
>
> **[3:01](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=181)** I'll right-click and choose Run as Administrator.
>
> **[3:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=185)** The command you'll want to type is shown here.
>
> **[3:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=188)** There are spaces in between each of these items.
>
> **[3:12](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=192)** icacls, space.
>
> **[3:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=195)** You have the asterisk, space.
>
> **[3:18](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=198)** You have the /reset, the /T, the /C, and the /Q commands.
>
> **[3:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=201)** With this command, /reset replaces permissions with operating system defaults.
>
> **[3:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=207)** The /T performs the operation on all the specified files in the current directory and its sub-directories.
>
> **[3:34](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=214)** The /C continues the operation despite any file errors, although messages will still be displayed.
>
> **[3:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=222)** The /Q suppresses success messages.
>
> **[3:45](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=225)** Before you press Enter, understand that this command is not an all-or-nothing solution.
>
> **[3:50](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=230)** There are other parameters you can use with it.
>
> **[3:52](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=232)** I'll show you those in a minute.
>
> **[3:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=234)** For now, though, I'll press Enter, and show you the result when we do a system-wide reset.
>
> **[4:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=240)** Once that's done, you can start again, and perhaps create a better system for applying permissions than the last time.
>
> **[4:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=248)** I'll close the PowerShell window, and let's go back to our Shares.
>
> **[4:13](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=253)** As mentioned earlier, this command has options beyond resetting the entire computer's permissions configuration.
>
> **[4:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=260)** You can use &lt;FileName&gt; to select a specific file.
>
> **[4:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=264)** You can use /Grant to configure permissions to replace previously granted explicit permissions.
>
> **[4:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=269)** And you can choose /Deny to deny access.
>
> **[4:33](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=273)** There are other resources available to help troubleshoot or try to resolve permission problems.
>
> **[4:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=279)** You can access the Effective Access tab from the Advanced Security tab in File Explorer, and I mentioned that earlier.
>
> **[4:46](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=286)** To get there, right-click any Share, click Properties, go to the Security tab, and click Advanced.
>
> **[4:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=294)** This tab can help you sort things out.
>
> **[4:58](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=298)** From the Permissions tab, you can take ownership of an orphaned resource, provided you're an administrator.
>
> **[5:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=305)** Select, and click Edit.
>
> **[5:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=308)** This might be necessary if a user leaves your organization and you need access to items he or she created.
>
> **[5:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=315)** You can also enable or disable inheritance.
>
> **[5:19](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=319)** Of course, the best offense is a good defense.
>
> **[5:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=322)** Start with a solid plan for assigning permissions, which includes creating groups and adding users to those groups, and then assign the groups permissions.
>
> **[5:32](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=332)** As I've done here and in previous movies, try to stay away from advanced NTFS permissions, and let the standard permissions sustain your organization if you can.
>
> **[5:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=342)** When using Share permissions, just configure the defaults.
>
> **[5:45](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/troubleshoot-data-access?u=76281980&t=345)** And when problems do arise, and they will, figure out where you went wrong so you won't make the same mistakes again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (3), [[Hardware]] (2), [[Security]] (2), data (1), [[Troubleshooting]] (1)
> **Prerequisites:** configure (3), you'll need (2)
> **Env Vars:** ntfs (4)
> **Tools:** powershell (3)
> **UI Navigation:** right-click (2), go to (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** such as (2)
> **CLI Commands:** make (1)


### 4. Implement Apps

[↑ Back to Table of Contents](#table-of-contents)

#### Configure desktop apps
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=0)** - [Instructor] There are two kinds of apps, desktop apps, such as Windows Media Player, and web-based apps such as maps, mail, and calendar.
>
> **[0:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=9)** Some developers offer options for both.
>
> **[0:12](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=12)** For example, there's OneNote 2016, which is a desktop app, and OneNote which is his app counterpart.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=20)** I want to talk about configuring desktop apps here.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=23)** You can access some of the options from start and settings from the apps link.
>
> **[0:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=31)** From default apps, you can choose which app to use by default when multiple options exist.
>
> **[0:37](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=37)** Here's an example.
>
> **[0:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=38)** Here are the options on my computer for a web browser.
>
> **[0:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=42)** I have Microsoft Edge, Firefox, Google Chrome, and Internet Explorer.
>
> **[0:48](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=48)** I can choose the one I want to open by default when I need a web browser.
>
> **[0:52](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=52)** I'll choose Google Chrome.
>
> **[0:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=54)** From now on, each time I click a web link in an email, a document, a presentation or something else, this is the app that will open.
>
> **[1:03](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=63)** You shouldn't be prompted to choose a different app in the future.
>
> **[1:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=66)** If you ever change your mind about what set as the default though, just return here and choose another.
>
> **[1:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=71)** Click back and this time, click system.
>
> **[1:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=75)** Let's look at some other options.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=77)** Click notifications and actions.
>
> **[1:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=80)** Here's where you can configure the notification options for some of the apps on your computer.
>
> **[1:25](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=85)** Notifications are generally popups you see in the bottom right corner of your screen.
>
> **[1:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=89)** Let's scroll down.
>
> **[1:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=91)** I can turn off display settings, Microsoft Store and more.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=95)** I'll go ahead and turn off Microsoft Store.
>
> **[1:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=98)** Just to give you an example.
>
> **[1:41](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=101)** I'll close this window.
>
> **[1:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=102)** Let's look at some more options for personalizing your apps.
>
> **[1:46](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=106)** Let's open control panel.
>
> **[1:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=109)** As you may already know, here at the bottom is where you uninstalled a desktop app.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=114)** All you have to do is select the app and click uninstall.
>
> **[1:59](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=119)** You should uninstall programs you don't use and don't want.
>
> **[2:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=122)** We'll click the back arrow and let's look at some more.
>
> **[2:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=126)** Let's configure what you'd like to happen when you insert a DVD or CD.
>
> **[2:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=131)** Type auto-play in the search window like so.
>
> **[2:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=137)** And in the results, select start or stop using auto-play for all media and devices.
>
> **[2:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=144)** Let's look at the options for DVD movie.
>
> **[2:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=147)** I can on this computer, play a DVD movie using a third party media player I've installed.
>
> **[2:34](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=154)** I can find a DVD app in the store.
>
> **[2:37](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=157)** I can take no action.
>
> **[2:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=159)** I can open the folder to view the files or I can ask to be prompted.
>
> **[2:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=164)** I'm going to choose open folder to view files.
>
> **[2:48](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=168)** Here's another option.
>
> **[2:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=169)** Let's look at audio CD.
>
> **[2:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=171)** Again, I have my third party media player.
>
> **[2:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=174)** I've got an option to choose Windows Media Player, take no action, open folder and ask me every time.
>
> **[3:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=180)** I'll choose Windows Media Player.
>
> **[3:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=182)** Take some time to configure what you'd like to see happen and then click save, click the back button two times to return to control panel.
>
> **[3:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=190)** And this time, I want you to click here in the search menu, and I want you to type find and fix problems.
>
> **[3:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=197)** If you click the option to find and fix problems, you'll be taken to the settings window.
>
> **[3:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=204)** This used to be an option in control panel.
>
> **[3:26](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=206)** Like a lot of things, Windows is moving options from the control panel to the settings window.
>
> **[3:33](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=213)** I'll click to show you.
>
> **[3:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=216)** Settings opens and here's all the troubleshooting options.
>
> **[3:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=220)** If you have a problem, you only need to work through the applicable wizard.
>
> **[3:45](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=225)** If a wizard doesn't solve your problem though, it could be because the app you're trying to use has not been updated by the manufacturer to run on Windows 10 or you haven't upgraded and have an older version of the program.
>
> **[3:57](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=237)** In these cases, you need to run the program compatibility troubleshooter.
>
> **[4:01](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=241)** This used to be a lot easier to find than it is now.
>
> **[4:04](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=244)** Now we need to search for it.
>
> **[4:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=246)** Right here in the search window and find a setting, let's type run programs and here you see the option to run programs may for previous versions of Windows.
>
> **[4:16](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=256)** Let's click that.
>
> **[4:18](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=258)** Here's the program compatibility troubleshooter.
>
> **[4:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=261)** I'll click next.
>
> **[4:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=263)** Sometimes this application will find the problem you're having.
>
> **[4:28](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=268)** However, most of the time it asks you to select an option.
>
> **[4:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=271)** Although Publisher is working well for me, I'm going to select it just to walk you through the process.
>
> **[4:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=276)** I'll click next.
>
> **[4:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=278)** In most cases, you try the recommended settings, but in this case, I'm going to show you all the options by clicking troubleshoot program.
>
> **[4:46](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=286)** Here's where I need to make a choice.
>
> **[4:47](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=287)** The first choice is the program worked in early versions of Windows, but won't install a run now.
>
> **[4:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=293)** The second option is that the program opens, but doesn't display correctly.
>
> **[4:57](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=297)** Maybe the program requires additional permissions, or maybe you don't see your problem.
>
> **[5:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=302)** I'm going to go ahead and click the first one, because most of the time, this is the issue and I'll click next.
>
> **[5:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=308)** I need to choose the option for when the program worked best.
>
> **[5:12](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=312)** In this case, maybe I have an old version of Publisher and it worked best on Windows 7.
>
> **[5:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=317)** So I'll click that and I'll choose next.
>
> **[5:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=320)** Here's where I can test the program, I can choose next, or I can cancel.
>
> **[5:26](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=326)** You'll click test the program and you'll make sure the program works correctly.
>
> **[5:30](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=330)** I'll go ahead and click cancel.
>
> **[5:32](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=332)** The next time you run this program on your Windows 10 computer, it will run in the mode for which it was designed and it should run properly.
>
> **[5:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=339)** Finally, each desktop app has its own configuration options built in.
>
> **[5:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=344)** You can usually access these options from a file, edit or tools menu, but occasionally you'll find the options elsewhere.
>
> **[5:52](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=352)** I'll open Internet Explorer to show you.
>
> **[5:55](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=355)** I'm going to opt to show you the bar so that I can show you the options that appear when you enable things like this.
>
> **[6:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=362)** I'll right click and I'll put a check by menu bar.
>
> **[6:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=366)** You only have some more options in the old familiar tools menu.
>
> **[6:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=371)** I'm going to click tools and I'll click internet options.
>
> **[6:14](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=374)** In here I have a lot of choices.
>
> **[6:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=377)** From the general tab, I can choose my homepages.
>
> **[6:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=380)** From the security tab, I can set security levels and more.
>
> **[6:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=384)** You'll find similar options in most programs.
>
> **[6:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=387)** Let me show you one more so you'll know where to look for options in various programs you use.
>
> **[6:33](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=393)** Here. I have Microsoft Word already open.
>
> **[6:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=396)** And here I can choose file and options.
>
> **[6:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=400)** Like other programs, I have a whole lot of things to choose from.
>
> **[6:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=404)** Here, I can hover over any of these little blue circles and see what each of these means.
>
> **[6:50](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=410)** I can choose a different theme and I can look at all of the other tabs.
>
> **[6:55](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=415)** There are a ton of options.
>
> **[6:57](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=417)** Think about what other applications you use on a daily basis and open them to see what options are available for you to configure.
>
> **[7:04](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-desktop-apps?u=76281980&t=424)** Setting your applications to behave exactly as you need them to can help you be more productive and have a better computing experience.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (7), next (6), web (4), [[Search]] (4), [[Microsoft]] (3)
> **CLI Commands:** find (8), cd (2), make (2)
> **Prerequisites:** configure (4), install (1)
> **Env Vars:** dvd (4)
> **UI Navigation:** scroll down (1), select the (1), open the (1)
> **Analogies:** such as (2), for example (1)
> **Tools:** firefox (1)
> **Definitions:** is a  (1)

#### Configure startup options
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=0)** - [Instructor] If you've noticed that it takes longer than it used to for your computer to get through the boot process, you can make some configuration changes to help speed it up.
>
> **[0:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=8)** There are three ways I'd like to discuss here.
>
> **[0:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=11)** You can configure fast startup, a feature of Windows 10, if it's supported by your device hardware.
>
> **[0:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=17)** You can disable unnecessary services or delay their start, and you can stop specific applications from loading when Windows does.
>
> **[0:25](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=25)** Let's begin with fast startup.
>
> **[0:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=27)** Click the task bar and in the search window type control panel, and click it in the results.
>
> **[0:34](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=34)** You used to be able to click power options right here in control panel, but you can't anymore, so let's search for the option we need.
>
> **[0:41](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=41)** Up here in the search window, type power options.
>
> **[0:45](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=45)** In the results, click change what the power buttons do, and that'll take us to this screen.
>
> **[0:52](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=52)** Click change settings that are currently unavailable.
>
> **[0:55](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=55)** And if turn on fast startup is not selected, put a check mark there and click save changes.
>
> **[1:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=62)** Fast startup mode should start a computer in less time than is typically required for a traditional cold start, and it should be enabled by default.
>
> **[1:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=71)** Fast startup is a hybrid combination of a cold startup and awake from hibernation startup.
>
> **[1:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=77)** To make this possible, when Windows shuts down, it prepares the system state as it would for hibernation.
>
> **[1:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=83)** Then Windows saves the kernel memory image, including the loaded kernel mode drivers as it shuts down the computer.
>
> **[1:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=91)** This causes the system to boot faster the next time you turn it on because this information is readily available.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=97)** If you don't see a fast startup option or it's grayed out, restart your PC and enter the firmware settings.
>
> **[1:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=104)** Navigate to the option to enable fast startup, if you can find it and if it exists.
>
> **[1:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=109)** If you don't see it as an option, it isn't available for your hardware.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=114)** I'll click save changes, and I'll close control panel.
>
> **[1:59](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=119)** Now let's open the Services window.
>
> **[2:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=122)** You can search for it from the task bar.
>
> **[2:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=128)** From there, sort the services by those that are running all the time by clicking the status button once or twice.
>
> **[2:14](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=134)** It's at the top of the screen.
>
> **[2:18](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=138)** Everything you see here runs all the time in the background.
>
> **[2:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=143)** If you see something that's running automatically, that you know you don't need, you can disable it.
>
> **[2:28](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=148)** Let's have a look.
>
> **[2:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=149)** Here's themes.
>
> **[2:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=151)** I don't use themes, and I don't need to have that running all the time, so I'm going to change its status from running to something else.
>
> **[2:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=158)** To do that, I'll double click.
>
> **[2:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=160)** Here, the start-up type is automatic, but I can change it to delayed start so that it comes on later after the boot process, manual If I actually click a link to apply a theme, or disabled.
>
> **[2:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=173)** I could very easily choose delayed start.
>
> **[2:57](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=177)** While you probably won't find much here you can disable, it doesn't hurt to check.
>
> **[3:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=182)** And note though, don't disable anything you don't recognize or your computer might not function as you'd expect.
>
> **[3:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=188)** Also, don't turn off things like Windows Update or Windows Defender.
>
> **[3:13](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=193)** I'll close the services window now.
>
> **[3:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=195)** Finally, let's take a look at task manager.
>
> **[3:18](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=198)** You can open this by right-clicking the start menu.
>
> **[3:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=204)** If you see the option to look at more details, click it.
>
> **[3:28](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=208)** We need to be able to see the start-up tab.
>
> **[3:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=211)** Anything listed here with enabled beside it starts every time your computer boots.
>
> **[3:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=216)** If you see a program you don't use every day, disable it.
>
> **[3:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=220)** When you do this, you help the computer boot more quickly because this program doesn't also have to start.
>
> **[3:46](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=226)** Here's Spotify.
>
> **[3:47](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=227)** You can see it's enabled, but I don't use it very often.
>
> **[3:52](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=232)** So I'm going to select it here.
>
> **[3:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=233)** In the bottom right corner, I'm going to click disabled.
>
> **[3:57](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=237)** If and when I decide to use the Spotify app, it will open then, but it won't run in the background all the time.
>
> **[4:04](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=244)** There are other ways to hasten the start-up process, such as disabling Windows features you don't need.
>
> **[4:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=250)** But I believe the improvement will be minimal.
>
> **[4:13](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-startup-options?u=76281980&t=253)** Your best bet is to not let programs and services start that you don't need and make sure that fast startup is enabled on all the computers you use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (6), [[Search]] (4), power (3), [[Hardware]] (2), feature (1)
> **CLI Commands:** make (3), find (2)
> **UI Navigation:** navigate to (1), open the (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Add and remove features
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=0)** - [Instructor] Not all of the features available in Windows 10 are available when Windows is installed.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=6)** Some features, like Hyper-V, must be installed manually.
>
> **[0:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=10)** You can enable features using the Programs and Features options.
>
> **[0:14](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=14)** And you can also disable features you don't use, want or need while you're there.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=20)** To see what's available to configure, type turn Windows features on or off in the Search area of the taskbar.
>
> **[0:28](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=28)** I'll select it.
>
> **[0:30](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=30)** Take a look around here and see what's installed by default and what isn't.
>
> **[0:34](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=34)** You can select or de-select the Windows features as desired.
>
> **[0:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=40)** Here, Work Folders client is enabled.
>
> **[0:43](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=43)** But I don't use it, so I'll disable it.
>
> **[0:48](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=48)** I also don't use Internet Explorer 11.
>
> **[0:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=54)** So I'll disable that.
>
> **[0:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=56)** I'm going to double check that all of my Hyper-V features are enabled because I use that a lot, and they are.
>
> **[1:01](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=61)** So I'm ready to move on.
>
> **[1:03](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=63)** Once you've finished with your changes, click OK.
>
> **[1:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=66)** Depending on the types of changes you make here, you might be prompted to restart the computer.
>
> **[1:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=71)** So do so when it's convenient.
>
> **[1:13](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=73)** On reboot, your new features will be ready to use.
>
> **[1:16](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=76)** I don't want to be prompted to restart, and I don't want to have to.
>
> **[1:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=80)** So I'm going to click cancel.
>
> **[1:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=82)** Now let's open Settings to see what else is available for configuration.
>
> **[1:26](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=86)** Start, Settings, and let's look at Apps.
>
> **[1:33](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=93)** I'll click Apps and Features, and let's take a look at what's here.
>
> **[1:37](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=97)** From Apps and Features, you can remove items that you don't use.
>
> **[1:41](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=101)** Provided they aren't part of Windows 10, like Calculator, Maps, Messaging, and so on.
>
> **[1:47](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=107)** Watch what happens when I click something that Microsoft has installed.
>
> **[1:52](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=112)** I cannot uninstall it.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=114)** Now I'll click a third-party entry.
>
> **[1:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=116)** I'll scroll down to iTunes.
>
> **[1:59](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=119)** The option to uninstall is available.
>
> **[2:01](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=121)** And if I've decided I don't want iTunes anymore, I would uninstall it.
>
> **[2:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=125)** You may see a modify option.
>
> **[2:07](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=127)** And you can sometimes add or remove features that are unique to an application.
>
> **[2:12](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=132)** I'll show you an example of that.
>
> **[2:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=135)** Here's the option to modify.
>
> **[2:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=137)** If you click Modify, to make a change, just work through the wizard that appears.
>
> **[2:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=142)** Feel free to take a minute now to remove any third-party apps you no longer use.
>
> **[2:28](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=148)** There are other options and settings that you can configure to make your PC work better for you, that don't have to do with adding or removing features.
>
> **[2:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=156)** Some include setting the default apps.
>
> **[2:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=159)** You can also limit how apps send notifications.
>
> **[2:43](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=163)** I'll click back, System, Notifications and Actions, to get there.
>
> **[2:50](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=170)** If you have time, look through these options and others to make changes as desired.
>
> **[2:55](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=175)** Finally, regarding adding and removing features.
>
> **[2:57](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=177)** Let's open Control Panel, And look again at Uninstall a Program.
>
> **[3:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=185)** It's right here.
>
> **[3:07](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=187)** Feel free to uninstall programs you recognize but don't use.
>
> **[3:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=191)** Doing so will keep those programs from trying to update or set themselves as a default app when you open a file.
>
> **[3:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=197)** Make sure not to remove anything you aren't sure of though.
>
> **[3:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=201)** You don't want to uninstall device drivers, for instance.
>
> **[3:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=203)** Or anything you don't recognize, as these items are necessary for your computer to function properly.
>
> **[3:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=209)** Remember it's best to keep your computers as streamlined as possible to get the best performance from them.
>
> **[3:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=215)** So only install features you need and use often.
>
> **[3:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/add-and-remove-features?u=76281980&t=219)** Come back to the Control Panel every few months and take inventory, and uninstall or disable anything you don't use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), [[Windows 10]] (2), [[Search]] (1), [[Microsoft]] (1), application (1)
> **CLI Commands:** make (5)
> **Prerequisites:** configure (2), install (1)
> **Code Identifiers:** itunes (2)
> **UI Navigation:** select the (1), scroll down (1)
> **Analogies:** for instance (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### Create and deploy provisioning packages
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=0)** - [Female Instructor] Large businesses often need to set up new devices; join devices to an active directory domain or Azure; install and set up software; or reset lost devices, and they need a standard way to do it.
>
> **[0:12](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=12)** Businesses can achieve this by creating provisioning packages to be used when needed.
>
> **[0:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=17)** One way to create such a package is to use the Windows assessment and deployment kit available from Microsoft.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=23)** The Windows ADK doesn't come pre-installed on PCs though, so I'll install the application using the defaults shown here.
>
> **[0:30](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=30)** If you want to follow along, you'll need to do the same.
>
> **[0:34](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=34)** Although many of the default tools are required, the tool we're going to work within this video is the Windows Imaging and Configuration Designer tool.
>
> **[0:43](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=43)** If you install the Windows ADK, make sure you install the tools you see here.
>
> **[0:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=49)** You used provisioning packages to deploy Windows apps or line of business apps for a single Windows edition or for multiple additions.
>
> **[0:58](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=58)** A package can also be used to enroll devices using Windows Intune.
>
> **[1:03](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=63)** You can allocate the required certificates and device policies too, if they're required, along with anything else relevant to deploying apps.
>
> **[1:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=71)** What I'd like to show you how to do here is create and build a provisioning package.
>
> **[1:16](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=76)** I'll also show you export options.
>
> **[1:19](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=79)** To get started, you'll need to open the Windows Imaging and Configuration Designer.
>
> **[1:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=83)** I'll search for it from the task bar.
>
> **[1:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=87)** (instructor types) Here it is.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=94)** Mine will probably look a little different from yours because I have a lot of recent projects.
>
> **[1:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=99)** If you don't see that, that's okay.
>
> **[1:41](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=101)** To get started, click file and new project.
>
> **[1:48](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=108)** Type a name for your project and accept the default save location, and then click next.
>
> **[1:55](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=115)** We do want to create a provisioning package, so we'll leave the selected and click next.
>
> **[2:01](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=121)** You might see other options.
>
> **[2:03](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=123)** Choose what additions of Windows the package should be compatible with and click next.
>
> **[2:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=128)** I'll leave all Windows editions selected.
>
> **[2:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=131)** If you have a provisioning package already, here is where you'll import it.
>
> **[2:16](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=136)** I don't have one, so I'll click finish.
>
> **[2:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=140)** Now, you can customize the package.
>
> **[2:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=143)** Click the arrow beside runtime settings.
>
> **[2:28](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=148)** Explore each option as time allows.
>
> **[2:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=151)** From connections, you can set policies for cellular, general, and more.
>
> **[2:37](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=157)** You can set options for public documents in various policies for things like camera and security.
>
> **[2:48](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=168)** Here are some of the policies options: camera, security, system, and wifi.
>
> **[3:01](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=181)** Feel free to look through all of these options as time allows.
>
> **[3:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=186)** And when you're finished, let's move forward.
>
> **[3:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=189)** Now we'll choose export, provisioning package, and we'll look over what it shows here.
>
> **[3:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=197)** I've named mine "Sample Project" and I'll click next.
>
> **[3:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=204)** I don't need to encrypt or sign the package at the moment, so I'll click next again.
>
> **[3:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=211)** This is a good place to save the package and I'll go ahead and continue forward.
>
> **[3:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=216)** Take a look at what you see here, and when you're ready, click build.
>
> **[3:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=220)** Now click finish.
>
> **[3:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=222)** Now you're ready to deploy the package.
>
> **[3:45](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=225)** You can apply this package to any Windows image that you're creating.
>
> **[3:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=229)** You can distribute the package to devices already running Windows 10 as well.
>
> **[3:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=233)** There are several ways to do this, including making the package available on a shared drive and sending the link in an email.
>
> **[4:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=240)** If other options for making packages haven't worked for you, The Windows Imaging and Configuration Designer tool just might do the trick.
>
> **[4:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/create-and-deploy-provisioning-packages?u=76281980&t=249)** If you think it will, spend some more time creating different kinds of packages and deploying them to get a feel for everything it offers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (12), next (5), [[Security]] (2), [[Active Directory]] (1), [[Microsoft Azure|Azure]] (1)
> **Prerequisites:** install (4), set up (2), you'll need (2)
> **Env Vars:** adk (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [female (1)

#### Windows Assessment and Deployment Kit
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=0)** - [Instructor] Administrators incorporate all kinds of tools to manage their network infrastructure.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=6)** One of those is the Windows Assessment and Deployment Kit.
>
> **[0:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=10)** I've installed it using the defaults shown here.
>
> **[0:13](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=13)** Most of the tools in the Windows ADK have to do with deploying Windows 10 in an enterprise.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=20)** To deploy Windows 10 on a large scale, administrators often create Windows images for their organizations, and then create answer files to automate those installations to limit what the end user has to do during any update.
>
> **[0:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=35)** The ADK can assist in performing associated tasks, including moving user profiles, assessing performance, and sequencing applications.
>
> **[0:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=44)** There are other features as well, of course.
>
> **[0:47](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=47)** However, teaching you how to use the ADK to manage and deploy Windows images would take an entire course, and that's not what we're after here.
>
> **[0:55](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=55)** Right now, I only want to introduce you to a few of the tools in the ADK so that you are familiar with their names and functions.
>
> **[1:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=62)** Let's look at the entries.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=64)** Click start, and from the programs list, scroll all the way down to Windows kits.
>
> **[1:13](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=73)** And expand it.
>
> **[1:16](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=76)** There are a lot of entries here.
>
> **[1:18](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=78)** Windows System Image Manager is one of them.
>
> **[1:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=81)** I'll show you that in a minute, but first, I'll right-click, choose more, and choose open file location so that we have access to the tools more easily.
>
> **[1:33](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=93)** Let's open Windows System Image Manager.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=96)** You'll see a blank screen if you haven't used it before.
>
> **[1:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=99)** The first thing you'll do with this tool is to add a Windows image.
>
> **[1:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=104)** You can choose an image from the source files available from Microsoft on an installation disc, or you can choose one you've already created.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=114)** I'll click file, select Windows image, and I go over to my downloads folder, where I happen to have a wim file.
>
> **[2:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=126)** I'll open it, I'll choose the setup, and click OK.
>
> **[2:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=130)** If you don't have a Windows image, that's okay.
>
> **[2:13](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=133)** I'm just showing you around.
>
> **[2:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=135)** With that done, you'll begin working on customizing your image, which will include creating an answer file.
>
> **[2:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=142)** An answer file contains the answers to the questions asked during a Windows installation, such as the language, background color, and so on.
>
> **[2:33](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=153)** You start with file, new answer file.
>
> **[2:41](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=161)** I'll close this window and we'll move forward.
>
> **[2:46](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=166)** Now select the deployment in imaging tools environment and watch what happens.
>
> **[2:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=173)** This opens a command prompt.
>
> **[2:59](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=179)** Let me make the font a little bigger so it's easier to see.
>
> **[3:04](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=184)** This tool is referred to as DISM, and it is used for capturing, servicing, and deploying boot images and operating system images.
>
> **[3:14](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=194)** You can use the dism.exe command to service both online and offline images.
>
> **[3:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=200)** If you try to work with DISM here, though, you'd get an error.
>
> **[3:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=204)** You have to work with it with administrative privileges.
>
> **[3:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=207)** I'll close this and we'll try again.
>
> **[3:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=211)** I'll type cmd here in the command line.
>
> **[3:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=215)** I'll right-click and choose run as administrator Now I'll type dism, a space, a forward slash, and a question mark, and I'll show you the switches.
>
> **[3:50](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=230)** Look at the description.
>
> **[3:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=233)** DISM enumerates, installs, uninstalls, configures, and updates features and packages in Windows images.
>
> **[4:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=242)** The commands that are available depend on the image being serviced and whether it's offline or running.
>
> **[4:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=249)** If you're studying for a certification exam or planning a Windows deployment, you'll want to familiarize yourself with all of these, specifically the ones having to do with images.
>
> **[4:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=262)** Apply image applies the image.
>
> **[4:25](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=265)** We have the option to mount, unmount, and remount, as well as all of these other commands.
>
> **[4:37](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=277)** You could spend a good month here, learning how to use this tool.
>
> **[4:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=282)** I'd like to introduce one more item, and that's the User State Migration Tool.
>
> **[4:47](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=287)** Like DISM, you'll use this tool at a command line.
>
> **[4:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=291)** The three items you'll need to be familiar with are shown here.
>
> **[4:55](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=295)** The USMT allows you to migrate user data and settings from one installation to another, and as part of the operating system deployment process.
>
> **[5:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=305)** The command you use to backup and restore the data includes ScanState and LoadState, as well as additional utilities to further personalize your installation.
>
> **[5:14](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=314)** There are also XML templates to help you configure which data is migrated.
>
> **[5:19](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=319)** These include migration templates, which are the default templates in USMT, and there are custom templates that you can create yourself.
>
> **[5:26](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=326)** And there's an optional config template, which you can use to exclude or include components in a migration without modifying the other templates you've elected to use.
>
> **[5:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=336)** There are other tools in the kit to explore, so if you're interested in learning how to deploy Windows 10 in a large environment, start working with the ADK as soon as you can.
>
> **[5:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=344)** It has the tools you need to customize Windows images, to test the quality and performance of your workstations, and to prepare for deployment and user migration.
>
> **[5:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=353)** Finally, before you go, return to the installation screen for the Windows ADK and click each item.
>
> **[6:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/windows-assessment-and-deployment-kit?u=76281980&t=360)** Read its description to see what each offers and then close the window.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (15), [[Windows 10]] (3), data (3), [[Microsoft]] (1), prompt (1)
> **Env Vars:** adk (6), dism (4), usmt (2), xml (1)
> **Tools:** command line (2), command prompt (1)
> **UI Navigation:** right-click (2), select the (1)
> **Prerequisites:** setup (1), you'll need (1), configure (1)
> **CLI Commands:** make (1)
> **Exercise Files:** template (1)
> **Analogies:** such as (1)


### 5. Configure Remote Management

[↑ Back to Table of Contents](#table-of-contents)

#### Use remote management tools
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=0)** - If you work in a large organization, especially one where users are positioned across multiple physical locations, you'll likely be called on to manage those computers remotely.
>
> **[0:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=11)** Even if all the computers you manage, are in a single location, like an office building, you can't always be on-site to resolve problems in person.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=19)** There are several tools available in windows 10 for managing computers remotely.
>
> **[0:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=24)** There's Remote Assistance, Remote Desktop, Windows PowerShell, and Microsoft Management Console.
>
> **[0:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=31)** Remote Assistance is a good option when you only need to provide a little bit of help to an end-user such as showing them how to open a file, access a user program, print to a printer, or resolve a problem with the Task Bar or Desktop.
>
> **[0:46](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=46)** The name describes its functionality.
>
> **[0:48](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=48)** You can give assistance to a user remotely.
>
> **[0:52](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=52)** Remote Desktop is the appropriate option to choose if an employee needs to access their workstation from another location.
>
> **[0:59](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=59)** People often remote into their computers when they work from home.
>
> **[1:03](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=63)** Network Admins might also remote into a workstation, but other options exist that are used more often.
>
> **[1:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=70)** Windows PowerShell is a good option when you want to access a remote computer using PowerShell.
>
> **[1:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=75)** To perform tasks such as running Command lids or scripts on the remote machine, this is called a Remote PowerShell Session and require some setup before it can be used.
>
> **[1:26](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=86)** And lastly, a Microsoft Management Console is the best option if you want to perform management tasks on a remote computer, such as accessing and monitoring event logs, managing disks, or attached storage devices, or even accessing Device Manager to work with drivers and resolve driver problems.
>
> **[1:46](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=106)** I'll cover all of these options in this course, but in this specific movie, I'd like to cover the ladder using a Microsoft Management Console.
>
> **[1:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=116)** To get started, right-click the Start Menu and select Computer Management.
>
> **[2:03](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=123)** Maximize the window.
>
> **[2:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=126)** And I'll pull this out a little to give us a little room.
>
> **[2:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=129)** Here, I have the option to manage my local computer.
>
> **[2:13](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=133)** But we're talking about managing remote computers.
>
> **[2:16](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=136)** So, let's click Action and Connect to another computer.
>
> **[2:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=142)** I'll browse to the computer, and the computer I want to connect to is named this.
>
> **[2:32](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=152)** I'll click Okay, and I'll type the credentials.
>
> **[2:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=158)** Finally, I'll click Okay to make the connection.
>
> **[2:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=164)** Here, you can see in Computer Management it's been changed from Local to the Remote PC.
>
> **[2:50](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=170)** Now click System Tools in the left pane.
>
> **[2:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=174)** Then click the tool you'd like to use.
>
> **[2:57](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=177)** For instance, you might try Shared Folders or Performance Monitor.
>
> **[3:04](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=184)** If you try to access a tool and get an error, you'll need to remedy it.
>
> **[3:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=188)** What you see depends on how your network is set up and whether or not the computer is configured to accept Remote Connections.
>
> **[3:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=195)** I'll try Device Manager.
>
> **[3:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=197)** This is an error that states we can't access Device Manager because the remote computer doesn't have the proper remote administration enabled.
>
> **[3:26](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=206)** If we wanted to work with Device Manager from here, we would have to fix those errors.
>
> **[3:32](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=212)** You might also see errors related to group policy.
>
> **[3:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=215)** You might not be able to access, say, Device Manager, but you will be able to access Event Viewer and Performance Logs.
>
> **[3:41](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=221)** You'll need to address the issues as they arise, as the possibilities are too many to address here.
>
> **[3:47](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=227)** Again, there are other tools available, including Remote Assistance and PowerShell I'd like to talk about.
>
> **[3:52](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=232)** I'll address those in future movies, including what you need to enable to make remote connections work.
>
> **[3:58](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=238)** So if you're experiencing errors here, consider watching those.
>
> **[4:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=242)** You'll learn how to allow an application through a firewall and enable specific remote management features, which might resolve the problems you're having here.
>
> **[4:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/use-remote-management-tools?u=76281980&t=251)** When you're finished, close the Computer Management window.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** management (8), [[Powershell]] (5), [[Microsoft]] (3), [[Windows]] (2), [[Microsoft Office|Office]] (1)
> **Tools:** powershell (5)
> **Definitions:** is a  (2), is called (1), is an  (1)
> **Analogies:** such as (3), for instance (1)
> **Prerequisites:** you'll need (2), setup (1), set up (1)
> **CLI Commands:** make (2)
> **UI Navigation:** right-click (1)
> **Speakers:** - if (1)

#### Remote management settings
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=0)** - [Instructor] Managing computers remotely let's administrators resolve problems with computers without having to be physically in front of them.
>
> **[0:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=8)** This is known as remote management.
>
> **[0:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=10)** There are several remote management tools, which I introduced in the last movie, including using a Microsoft management console.
>
> **[0:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=17)** In order to remote into a computer, that computer must be configured to allow such connections.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=23)** Two of the easiest to enable are Remote Assistance and Remote Desktop.
>
> **[0:28](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=28)** One place you can do that is from this system dialog box.
>
> **[0:32](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=32)** To get there, type enable remote in the search window on the task bar, and select allow remote access to your computer.
>
> **[0:43](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=43)** Remote Assistance is enabled by default and should already be selected, but you'll need to select allow remote connections to this computer if you want to use Remote Desktop.
>
> **[0:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=53)** With that done, click OK to close the system properties dialogue box.
>
> **[0:58](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=58)** You can also enable remote features in the Windows features window if you want to manage Windows servers from this computer.
>
> **[1:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=66)** To get there, type turn Windows features on or off in a search window.
>
> **[1:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=71)** Select it in the results.
>
> **[1:14](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=74)** You will need to have downloaded the Remote Server Administration Tools for Windows 10 or the RAS Connection Manager Administration Kit.
>
> **[1:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=84)** The later lets you customize the remote connection experience by creating predefined connections to remote servers.
>
> **[1:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=91)** And this is where you enable the features.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=94)** I'll scroll down and show you the CMAK.
>
> **[1:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=100)** There are other remote options here too.
>
> **[1:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=102)** Telnet, for instance, is an older technology that lets you connect to other computers remotely, and you might see other entries if you've installed additional remoting software.
>
> **[1:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=113)** I'll cancel out of this window without making changes.
>
> **[1:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=116)** You can also enable or disable remoting technologies in Windows Firewall.
>
> **[2:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=122)** I'll open it.
>
> **[2:03](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=123)** In order to allow an app or feature through the firewall, you'll need to configure it by clicking this link.
>
> **[2:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=130)** If necessary, click change settings, and then scroll down to the item to enable.
>
> **[2:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=137)** You can see here that there are a lot of remote technologies that you can work with.
>
> **[2:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=143)** Select the ones you want and click OK at the bottom of the page.
>
> **[2:28](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=148)** You might too at some point be prompted to enable an inbound or outbound rule using Windows Firewall with advanced security.
>
> **[2:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=156)** If you are, from here, click advanced settings, and click inbound or outbound as applicable.
>
> **[2:46](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=166)** I'll sort these by name so we can find our remote technologies easily, and I'll scroll down to the Rs.
>
> **[2:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=174)** Again, here are the rules and you can double click to enable or disable any of them.
>
> **[3:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=182)** Only enable these if prompted though, via an error message, or while trying to access a resource remotely.
>
> **[3:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=189)** There are options in the group policy editor that let you manage settings for remote desktop, remote assistance, general network connections and more as well.
>
> **[3:18](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=198)** But this is beyond the scope of the movie.
>
> **[3:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=200)** I would like to show you at least one example though, so I'll open the local group policy editor on my Windows 10 Enterprise computer.
>
> **[3:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=207)** To do that I'll type gpedit.msc, open it in the results.
>
> **[3:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=216)** I'd like to show you something familiar, so I'll navigate to administrative templates, system, and I'll scroll down to find Remote Assistance.
>
> **[3:47](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=227)** You can see the types of options you'll find when you configure items like this.
>
> **[3:52](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=232)** You can, for instance, enable session logging for Remote Assistance sessions.
>
> **[3:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=236)** You can configure warning messages.
>
> **[3:59](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=239)** And even configure the option to offer Remote Assistance.
>
> **[4:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=242)** I'll double-click this last entry to show you that if you enable this option, you can also select who can help the user by entering their names.
>
> **[4:12](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=252)** This will help you lock down Remote Assistance while at the same time continuing to make it available to users.
>
> **[4:19](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=259)** I'll click cancel and we'll continue.
>
> **[4:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=261)** The point I'd like to make here is that there are several areas in the local group policy editor where you can configure exactly how you'd like remote sessions to be handled, and that you're in charge of all aspects of the types of connections you'll allow.
>
> **[4:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=275)** That about covers all the places you can enable the options necessary to work with computers remotely, short of a few PowerShell commands I'll introduce in a later movie.
>
> **[4:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-settings?u=76281980&t=284)** For now though, this is a good start and should help you start to resolve any problems you've had thus far when working with remote connections.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (5), management (3), [[Search]] (2), [[Windows 10]] (2), [[Microsoft]] (1)
> **UI Navigation:** scroll down (4), select the (1), open the (1), navigate to (1), double-click (1)
> **Prerequisites:** configure (5), you'll need (2)
> **CLI Commands:** find (3), make (2)
> **Definitions:** known as (1), is an  (1), is a  (1)
> **Env Vars:** ras (1), cmak (1)
> **Analogies:** for instance (2)
> **Cross-References:** in the last (1)

#### Remote management with PowerShell
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-with-powershell?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-with-powershell?u=76281980&t=0)** - You can use Windows PowerShell to perform remote management and remote connection tasks using commandlets and scripts.
>
> **[0:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-with-powershell?u=76281980&t=8)** This is often a faster way to manage computers, if you have quite a few to configure.
>
> **[0:13](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-with-powershell?u=76281980&t=13)** Managing computers remotely in a PowerShell session is called windows PowerShell Remoting.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-with-powershell?u=76281980&t=20)** This is a PowerShell window.
>
> **[0:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-with-powershell?u=76281980&t=22)** Before you can use the remote management tools we'll talk about here.
>
> **[0:25](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-with-powershell?u=76281980&t=25)** You must enable the windows remote management service.
>
> **[0:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-with-powershell?u=76281980&t=29)** You do this by typing wimrm quickconfig and an elevated command prompt, I'll type CMD on the task bar.
>
> **[0:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-with-powershell?u=76281980&t=39)** Right click, command prompt, and opt to run as an administrator and I'll type the command and press enter.
>
> **[0:52](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-with-powershell?u=76281980&t=52)** Notice it says that we're starting the WinRM service, would I like to make the changes?
>
> **[0:57](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-with-powershell?u=76281980&t=57)** And I'll type Y and press enter.
>
> **[1:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-with-powershell?u=76281980&t=60)** Now it tells us that WinRM has been updated to receive request, the services changed successfully and then in order to allow remote access to this machine for management, I'm going to need to type Y one more time.
>
> **[1:13](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/remote-management-with-powershell?u=76281980&t=73)** I'll do that, now WinRM has been updated for remote management and I can close this window.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** management (5), [[Powershell]] (4), [[Windows]] (3), prompt (2)
> **Tools:** powershell (4), command prompt (2)
> **Definitions:** is called (1), is a  (1)
> **CLI Commands:** make (1)
> **Env Vars:** cmd (1)
> **Prerequisites:** configure (1)
> **Speakers:** - you (1)

#### Configure and use Remote Assistance
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=0)** - [Narrator] IT personnel are often asked to perform quick fixes for users in their organization, such as unhiding a task bar, helping a worker connect to a printer or assisting in resolving a problem with an application.
>
> **[0:14](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=14)** When these requests come in, a technician has several options.
>
> **[0:18](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=18)** They can call the user on the phone and walk them through the process, physically go to the workstation, or they can offer to help them remotely.
>
> **[0:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=27)** One remote option is remote assistance.
>
> **[0:30](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=30)** I have the system window up here and you can see that the computer is configured to allow these types of remote assistance sessions.
>
> **[0:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=38)** This is the default setting, but if you'd like to verify that it's configured or access advanced properties, type remote assistance in the search window on the task bar and locate the option.
>
> **[0:50](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=50)** Here's your choice.
>
> **[0:52](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=52)** Allow remote assistance invitations to be sent from this computer.
>
> **[0:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=56)** Make sure you have a check mark under remote assistance and click advanced.
>
> **[1:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=62)** You can remove the option to allow the computer to be controlled remotely while leaving remote assistance enabled.
>
> **[1:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=68)** And you can limit the maximum time and invitation to offer or to get help can remain valid.
>
> **[1:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=75)** The last option lets you configure it so that invitations are only valid for computers running Windows Vista or later.
>
> **[1:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=82)** Once you know that remote assistance is enabled, you can ask for or offer remote assistance to a user.
>
> **[1:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=89)** Because I think that you might be asked to offer remote assistance more often than you propose to give it, let's look at this scenario.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=96)** I'll show you how to ask for assistance from this computer so you'll understand the process.
>
> **[1:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=102)** I'll type, ask for remote assistance, in the search window and click the top result to invite someone to help.
>
> **[1:50](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=110)** Now, you have two choices.
>
> **[1:52](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=112)** You can invite someone you trust to help you, or you can help someone who has invited you.
>
> **[1:58](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=118)** If you need to ask for help, click here.
>
> **[2:01](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=121)** Now, you need to save the invitation and somehow get it to your helper, or you need to use Easy Connect.
>
> **[2:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=128)** Easy Connect works only in specific circumstances, though, so we'll save the invitation as a file.
>
> **[2:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=135)** You'll click this option to do that.
>
> **[2:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=137)** You'll save the invitation at this point and then email it to your helper.
>
> **[2:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=143)** I'll click cancel now, to continue.
>
> **[2:26](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=146)** Once your helper gets an invitation, the helper opens it.
>
> **[2:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=151)** I've received an invitation and I've stored it in documents.
>
> **[2:37](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=157)** I'll double click the invitation to show you what you see.
>
> **[2:41](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=161)** Notice it says I need to enter the password to connect to the remote computer.
>
> **[2:45](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=165)** I need to get this password from the person requesting assistance.
>
> **[2:50](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=170)** So, I've gotten the password from the person needing assistance and I'll type it in and click okay.
>
> **[2:57](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=177)** Back at the other PC, the user receives a prompt that asks them to allow the connection.
>
> **[3:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=182)** When they click yes, the connection begins.
>
> **[3:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=186)** Now, I'm ready to help.
>
> **[3:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=188)** I'll click chat to show the chat window and I'll type how can I help you?
>
> **[3:14](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=194)** Then I'll send it.
>
> **[3:16](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=196)** The person asking for assistance will type back what the problem is.
>
> **[3:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=200)** You can see from the top here too, that I can request control of their computer.
>
> **[3:25](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=205)** If I ask for control and they give it, then I can resolve problems myself using my own mouse and keyboard.
>
> **[3:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=211)** I'll click that to show you.
>
> **[3:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=216)** Now, I can move my mouse and I can click on their screen.
>
> **[3:41](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=221)** It's all quite ingenious.
>
> **[3:43](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=223)** Once the problem is resolved, it's easy to end the session.
>
> **[3:47](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=227)** All either of us has to do is close the window.
>
> **[3:50](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=230)** Remote assistance can be a valuable way to resolve simple problems with users without having to physically access their computer.
>
> **[3:57](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assistance?u=76281980&t=237)** It allows technicians to resolve problems offsite too, or even from their own homes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Search]] (2), application (1), [[Windows]] (1), prompt (1)
> **UI Navigation:** go to (1), click on (1)
> **Prerequisites:** make sure you have (1), configure (1)
> **CLI Commands:** make (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### Configure and use Remote Desktop
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=0)** - [Instructor] Enterprises offer various ways for remote users to access company resources, including through VPNs and virtual machines, but sometimes a remote user needs to access their personal workstation directly, even though they are physically away from it.
>
> **[0:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=15)** Administrators have their own reasons to access a user's workstation in this manner, too.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=20)** Sometimes to perform updates or to resolve problems, although this is not common practice, One way to access our workstation remotely, while mimicking sitting at it locally, is through remote desktop.
>
> **[0:32](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=32)** Remote desktop has to be enabled in the system window before you can configure a connection.
>
> **[0:37](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=37)** I talked about that in a previous movie.
>
> **[0:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=39)** If you missed it, navigate to this system window and enable it.
>
> **[0:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=44)** You can do that by searching for enable remote desktop on the Task Bar.
>
> **[0:50](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=50)** Here's where you allow remote access to your computer.
>
> **[0:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=53)** I'll click OK now to continue.
>
> **[0:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=56)** Now you can configure the connection.
>
> **[0:59](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=59)** Type remote desktop on the Task Bar, and click Remote Desktop Connection in the results.
>
> **[1:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=66)** Click Show Options, and let's have a look at what's here.
>
> **[1:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=70)** The first thing you have to input is either the computer name or IP address.
>
> **[1:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=75)** I know the IP address and I've written it here.
>
> **[1:18](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=78)** I've also previously logged in, and the remote desktop connection remembers my username.
>
> **[1:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=83)** I can also opt to always ask for credentials or not.
>
> **[1:28](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=88)** I like to leave this unchecked.
>
> **[1:30](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=90)** There are a few other tabs with some different things you can configure.
>
> **[1:33](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=93)** Let's just take a brief look.
>
> **[1:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=96)** From the Display tab, you can choose the size of your remote desktop, as well as the color depth.
>
> **[1:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=104)** From local resources, you can configure remote audio settings, apply key combinations, and choose what devices and resources you want to use while you're in a remote session.
>
> **[1:55](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=115)** The Experience tab lets you choose your connection speed.
>
> **[1:59](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=119)** Detect connection quality automatically is selected, but there are other choices.
>
> **[2:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=125)** And finally, the Advanced tab.
>
> **[2:07](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=127)** The Advanced tab offers options for what happens when server authentication fails and settings for connecting from anywhere.
>
> **[2:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=135)** At any point when you're ready to connect, simply click the Connect button.
>
> **[2:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=140)** And here I am connected to my remote desktop.
>
> **[2:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=143)** If I maximize the window, it looks like I'm sitting right at it.
>
> **[2:28](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=148)** I'll restore this down, and I'll click X to close out of the session.
>
> **[2:34](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=154)** There are a few group policy settings I'd like to show you before I finish up here.
>
> **[2:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=158)** I'll type gpedit.msc to get there, and I'll click it in the results.
>
> **[2:46](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=166)** Let's navigate to Computer Configuration, Administrative Templates, Windows Components, and let's scroll down to Remote.
>
> **[2:57](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=177)** Here is Remote Desktop Services.
>
> **[3:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=180)** I'll expand Remote Desktop Session Host and click Connections.
>
> **[3:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=185)** There are options here where you can configure to allow or disallow automatic connections, to control whether or not users can use remote desktop connections at all, and more.
>
> **[3:17](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=197)** Look over these when you have a chance so that you can become familiar with them.
>
> **[3:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=201)** I'll click the option to select RDP protocols.
>
> **[3:25](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=205)** RDP stands for remote desktop protocol and is the protocol that makes these connections possible.
>
> **[3:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=211)** By default, RDP uses either TCP or UDP to connect.
>
> **[3:37](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=217)** TCP is transmission control protocol and UDP is user datagram protocol.
>
> **[3:43](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=223)** UDP is used primarily for establishing low latency and loss tolerating connections between applications over the internet.
>
> **[3:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=231)** TCP is one of the main protocols on the internet suite.
>
> **[3:55](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=235)** If you know you should connect using only one of these, you can enable that and select it here.
>
> **[4:03](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=243)** I'll click Cancel.
>
> **[4:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=245)** I'll leave it up to you now to explore the other settings, there are quite a few of them.
>
> **[4:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=249)** For instance, take a look at Session Time Limits, it's in the left pane under Remote Desktop Session Host.
>
> **[4:18](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=258)** This lets you configure how long these sessions can be held when they're active and idle.
>
> **[4:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=264)** Like I said, spend some time here to review what's available when you have the time.
>
> **[4:28](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=268)** Connecting via remote desktop, while still a technology in use by some organizations, isn't as popular as it used to be.
>
> **[4:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=275)** Other options like VPNs and virtual machines are used more often.
>
> **[4:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=280)** However, it's still worth going over.
>
> **[4:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=282)** You might find that some of the users you support still employ this technique for connecting to their desktop PCs.
>
> **[4:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-desktop?u=76281980&t=289)** It's also a good way to connect to say your upstairs computer from a laptop downstairs, on the patio, and so on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Virtual Machines]] (2), [[Windows]] (1)
> **Env Vars:** rdp (3), tcp (3), udp (3)
> **Prerequisites:** configure (6)
> **UI Navigation:** navigate to (2), scroll down (1)
> **CLI Commands:** find (1)
> **Definitions:** stands for (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Configure and use Remote Assist
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assist?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assist?u=76281980&t=0)** - [Instructor] Remote Assist is a feature available in Dynamics 365.
>
> **[0:04](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assist?u=76281980&t=4)** It is a subscription service.
>
> **[0:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assist?u=76281980&t=6)** This is not Remote Assistance, a feature in windows 10.
>
> **[0:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assist?u=76281980&t=9)** It's something completely new and different.
>
> **[0:12](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assist?u=76281980&t=12)** Remote Assist is a collaborative application with an interactive and extensive dashboard that can help people work together, no matter where they are.
>
> **[0:21](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assist?u=76281980&t=21)** The primary focus of Remote Assist is to make it possible for remote users in the field to contact experts in real time when problems arise.
>
> **[0:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assist?u=76281980&t=29)** The experts are available in and-call and can easily participate in whatever the field worker is doing.
>
> **[0:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assist?u=76281980&t=35)** Field workers can use Dynamic 365 Remote Assist mobile.
>
> **[0:39](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assist?u=76281980&t=39)** The mobile app works on iOS and Android.
>
> **[0:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assist?u=76281980&t=42)** Field workers can share video, screenshots, and even annotate what they are working on.
>
> **[0:47](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assist?u=76281980&t=47)** When combined with Microsoft's HoloLens 2 technology, users can work hands-on while still being able to see the expert.
>
> **[0:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assist?u=76281980&t=54)** HoloLens devices look like large work goggles right now but are likely to get smaller in the future.
>
> **[1:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-remote-assist?u=76281980&t=60)** The combination of Remote Assist and HoloLens along with other enterprise options available from Microsoft helps businesses create a collaborative work area for its users, reduces travel costs, delays, and even lets users perform sensitive and secure tasks with the people they work with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** feature (2), [[Microsoft]] (2), [[Windows 10]] (1), application (1), [[Android]] (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Code Identifiers:** ios (1)
> **Speakers:** - [instructor] (1)

#### Configure and use Quick Assist
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-quick-assist?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-quick-assist?u=76281980&t=0)** - [Instructor] Quick Assist is an app available in windows 10 that allows users to get assistance from another user.
>
> **[0:07](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-quick-assist?u=76281980&t=7)** It's a substitute for the old remote assistance program and is more streamlined and user-friendly.
>
> **[0:12](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-quick-assist?u=76281980&t=12)** To open Quick Assist, simply type it at the search bar and click it in the results, and pull this to the middle.
>
> **[0:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-quick-assist?u=76281980&t=22)** Notice it says that Microsoft Quick Assist enables two people to a share computer over a remote connection so that one person can help another solve problems.
>
> **[0:32](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-quick-assist?u=76281980&t=32)** When you're ready to give assistance, simply click assist another person, you'll sign in with your Microsoft account first, Once you've done that you'll get a code.
>
> **[0:43](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-quick-assist?u=76281980&t=43)** Notice the code expires in less than 10 minutes.
>
> **[0:46](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-quick-assist?u=76281980&t=46)** The person you want to help is going to need this code.
>
> **[0:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-quick-assist?u=76281980&t=49)** To get the code to them you can copy it to the clipboard and you can decide how you're going to send the code.
>
> **[0:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-quick-assist?u=76281980&t=54)** Once the code is copied, you can send it in an email or even an instant message.
>
> **[1:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-quick-assist?u=76281980&t=60)** You might also want to call the person and give them the code orally.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-quick-assist?u=76281980&t=64)** The link here allows you to provide instructions, it spells out what your user will need to do.
>
> **[1:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-quick-assist?u=76281980&t=69)** They'll need to open Quick Assist and enter the code, once that's done, it's easy, the two devices connect once the session is active, you can now help the user solve a problem much more easily than with the old remote assistance application.
>
> **[1:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-and-use-quick-assist?u=76281980&t=84)** This makes it possible for one person to help another person very easily, provided both have Microsoft accounts and are online.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft]] (3), [[Windows 10]] (1), [[Search]] (1), application (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Configure Windows Remote Management
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=0)** - [Narrator] Windows Remote Management, referred to as WinRM, is part of Windows Hardware Management technology.
>
> **[0:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=8)** WinRM allows administrators to manage server hardware, both locally and remotely from a command line.
>
> **[0:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=15)** WinRM has several components.
>
> **[0:18](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=18)** The scripting API is used to obtain data from remote computers using scripts.
>
> **[0:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=23)** winrm.cmd is a command line tool that uses Visual Basic scripts to perform tasks.
>
> **[0:30](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=30)** winrs.exe is a command line tool that remotely executes the commands.
>
> **[0:36](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=36)** The Intelligent Platform Management Interface driver and WMI provider are used to control and diagnose remote hardware.
>
> **[0:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=44)** WMI is a service that provides control using a WMI plugin.
>
> **[0:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=49)** WS-Management protocol is a firewall-friendly protocol that allows systems to communicate effectively, even if they use different vendors.
>
> **[0:58](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=58)** WinRM is installed, and the WinRM service will start automatically on Windows Server 2008 and beyond.
>
> **[1:04](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=64)** By default, though, no WinRM listeners are configured.
>
> **[1:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=68)** So even if the WinRM service is running, sent messages and commands won't be delivered if no one is listening.
>
> **[1:16](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=76)** To use WinRM then, once a server is set up, you must configure computers to be listeners.
>
> **[1:22](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=82)** To install and configure WinRM with default settings and create an HTTP listener from a client machine like Windows 10, open an elevated command prompt, then type winrm quickconfig at a command prompt.
>
> **[1:43](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=103)** And press Enter.
>
> **[1:45](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=105)** Because I've been playing around with this while making this video, it says the service already running on the machine, but it's not set up to allow remote access for management.
>
> **[1:54](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=114)** It says I have to make some changes.
>
> **[1:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=116)** So here, I'll click Y.
>
> **[1:58](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=118)** You will also click Y if you're following along.
>
> **[2:01](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=121)** If this is your first time, you may need to accept some other requirements such as enabling the WinRM firewall by typing Y again.
>
> **[2:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=131)** Now you can see what's been configured.
>
> **[2:13](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=133)** This time let's type something else.
>
> **[2:16](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=136)** Type winrm e winrm/config/listener.
>
> **[2:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=147)** Here's some information about the listener.
>
> **[2:30](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=150)** Our transport is HTTP, and the port is 5985.
>
> **[2:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=155)** It's also enabled.
>
> **[2:37](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=157)** Note that doing this on a single machine only works with the current user.
>
> **[2:41](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=161)** You'll have to run WinRM QuickConfig again if you want to enable the firewall exception for any other administrator profile or an any other machines you want to manage.
>
> **[2:52](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=172)** If you type winrm help config, you'll be able to learn a lot more about configuring a listener.
>
> **[3:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=180)** As it shows here, listeners are defined by their IP address and transport type.
>
> **[3:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=185)** This also lists the parameters available, including adding a host name to the command.
>
> **[3:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=190)** There are other WinRM help options.
>
> **[3:12](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=192)** For instance, you could type winrm help remoting, and here's some information on how to work with remoting commands.
>
> **[3:27](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=207)** After you've finished exploring the client side of WinRM, you can disable the listener by typing the following: winrm delete winrm/config/Listener?Address=*+Transport=HTTP.
>
> **[3:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=231)** To sum up, Windows Remote management was created to help administrators improve remote computer management in a variety of operating systems; however, there's a lot to set up on the server side.
>
> **[4:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=242)** In addition, the administrator must be skilled in creating the required scripts.
>
> **[4:07](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=247)** You can learn more about WinRM here at LinkedIn Learning.
>
> **[4:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-remote-management?u=76281980&t=250)** Just search for WinRM.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** management (7), [[Windows]] (3), [[Hardware]] (3), prompt (2), [[Scripting]] (1)
> **Env Vars:** wmi (3), http (3), api (1)
> **Prerequisites:** set up (3), configure (2), install (1)
> **Tools:** command line (3), command prompt (2)
> **Definitions:** is a  (4)
> **Analogies:** such as (1), for instance (1)
> **CLI Commands:** make (1)
> **Warnings:** note that (1)

#### Configure Windows Admin Center
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=0)** - [Instructor] The Windows Admin Center allows administrators to manage a network and its infrastructure from a single console from almost anywhere.
>
> **[0:09](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=9)** For now, it's a free download from Microsoft.
>
> **[0:13](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=13)** You can install the center on server machines, as well as clients, I've downloaded it onto my Windows 10 computer.
>
> **[0:20](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=20)** If you'd like to try it locate the Microsoft Evaluation Center, and then scroll down to Windows Admin Center.
>
> **[0:30](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=30)** Once you have it downloaded, in the search window, type Windows Admin Center, and you'll see it in the results.
>
> **[0:37](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=37)** When you click it, it'll open in your default web browser.
>
> **[0:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=42)** It's best to open it in Edge because it just seems to work better, that's what I've done here.
>
> **[0:48](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=48)** This is what my console looks like.
>
> **[0:50](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=50)** I've recently added a couple of devices.
>
> **[0:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=53)** You can add devices as well, just click Add, scroll down to the type of device to add, and then fill out the information.
>
> **[1:02](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=62)** If you don't have devices to add, or if you have trouble adding them, you can click your own local device to see the console options.
>
> **[1:10](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=70)** This is my local device, and when I click it, it connects.
>
> **[1:18](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=78)** If you try to access any computer in the list and you get an error, it will probably have to do with Windows remote management.
>
> **[1:26](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=86)** If you get an error and you can't get to the screen, open an elevated command prompt, and type winrm space quickconfig.
>
> **[1:38](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=98)** Notice it's already running on this machine.
>
> **[1:40](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=100)** That's why Windows Admin Center works for me.
>
> **[1:43](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=103)** If it doesn't work for you, you'll need to type winrm space quickconfig on any machine you'd like to use in the admin center.
>
> **[1:51](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=111)** As you can see here, the console works and runs in a web browser.
>
> **[1:55](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=115)** It supports Windows Server 2008 R2, and up as well as Windows clients.
>
> **[2:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=120)** In essence, it's the evolution of the old Microsoft Management Console, if you're familiar with that.
>
> **[2:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=126)** Let's run through the items on the left side.
>
> **[2:08](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=128)** The first is the Overview tab.
>
> **[2:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=131)** Here, you can see quite a bit about this machine, including its name, IP address, manufacturer model, and more.
>
> **[2:18](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=138)** Note the options to restart and shut down the computer, as well as edit the computer ID.
>
> **[2:23](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=143)** The next one down is Apps & features.
>
> **[2:26](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=146)** It's going to take a long time to load, but that's okay, we'll wait for it.
>
> **[2:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=149)** Once you get a list of apps, take a look.
>
> **[2:32](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=152)** What's notable here is the option to remove apps.
>
> **[2:35](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=155)** For instance, I could remove the camera, iTunes, or even the Microsoft Store if I wanted to.
>
> **[2:42](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=162)** Here, I've selected iTunes.
>
> **[2:44](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=164)** I can easily opt to remove that app from this computer.
>
> **[2:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=169)** The next item down is Azure Monitor.
>
> **[2:52](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=172)** If you use Azure and you would like to set up monitoring and alerts, this is where you'll do it.
>
> **[2:58](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=178)** Here's the Security Center, again, having to do with Azure and certificates having to do with security.
>
> **[3:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=185)** Let's look at devices, remember, you're looking at devices associated with this computer not the network.
>
> **[3:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=191)** So, you'll see things like disk drives and imaging devices.
>
> **[3:15](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=195)** From the Events tab, you can look at the Windows logs for this device.
>
> **[3:19](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=199)** If you've ever done that, you know you had to go to Event Viewer to access this information.
>
> **[3:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=204)** That's the magic of this console, it lets you do almost anything you'd need to do from one place.
>
> **[3:29](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=209)** You can continue to work down.
>
> **[3:31](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=211)** Take a look at performance monitor, for instance, here's Processes, and below that more options regarding the registry.
>
> **[3:41](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=221)** If you'd like to see how powerful this is and how convenient all you have to do is try to open up all of these things on your laptop.
>
> **[3:49](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=229)** I'll close this for a minute and let's just pretend.
>
> **[3:53](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=233)** I'll open up Device Manager.
>
> **[3:56](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=236)** Now, I'll open up Event Viewer.
>
> **[4:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=240)** I'll open up the firewall.
>
> **[4:06](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=246)** What about Performance Monitor?
>
> **[4:11](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=251)** What about scheduled tasks?
>
> **[4:13](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=253)** And I haven't even begun to get started.
>
> **[4:18](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=258)** I could also open File Explorer, processes and services, and I could even open the registry.
>
> **[4:24](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=264)** Take some time now to return to the Windows Admin Center and explore further.
>
> **[4:28](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=268)** Then, take a look at Settings and discover all the ways you can personalize it.
>
> **[4:33](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/configure-windows-admin-center?u=76281980&t=273)** That will all, certainly, give you a feel for its usefulness

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (8), [[Microsoft]] (4), [[Microsoft Azure|Azure]] (3), web (2), management (2)
> **UI Navigation:** scroll down (2), go to (1), open the (1)
> **Prerequisites:** install (1), you'll need (1), set up (1)
> **Code Identifiers:** itunes (2)
> **Analogies:** for instance (2)
> **Tools:** command prompt (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Where to go next
> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/where-to-go-next-20233542?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/where-to-go-next-20233542?u=76281980&t=0)** - I hope you enjoyed this course on configuring and supporting core services for Windows 10.
>
> **[0:05](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/where-to-go-next-20233542?u=76281980&t=5)** It's been a pleasure having you here.
>
> **[0:07](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/where-to-go-next-20233542?u=76281980&t=7)** Now you understand options for configuring and maintaining many of the services included with Windows 10, including networks, remote access clients, storage, and data access.
>
> **[0:19](https://www.linkedin.com/learning/windows-10-configure-and-support-core-services-14431120/where-to-go-next-20233542?u=76281980&t=19)** If you're wondering what course to take next, consider one of these remaining in the series: Windows 10: Manage Remote Access, or Windows 10: Implementation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (4), data (1), next (1)
> **Speakers:** - i (1)


## Skills Covered

- Windows System Administration
- Windows 10

## Path Context

### In [[Advance Your Skills as an IT Help Desk Specialist]]
**1 of 11** | [[Windows 10- Manage and Maintain Windows 10]] →

## Appears In

- [[Advance Your Skills as an IT Help Desk Specialist]]

## Related Courses

_Courses sharing skills:_

- [[Windows Server 2022- Installation and Configuration]] — Windows System Administration
- [[Windows 10 for IT Support- Advanced Troubleshooting]] — Windows 10
- [[Windows 10- Manage and Maintain Windows 10]] — Windows 10
- [[Windows 10 for IT Support- Troubleshooting Basics]] — Windows 10
- [[Windows 10- Security]] — Windows 10

---

[↑ Back to top](#)