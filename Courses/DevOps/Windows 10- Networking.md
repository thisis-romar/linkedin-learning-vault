---
type: course
cssclasses:
  - lle-course
slug: windows-10-networking-22602895
url: "https://www.linkedin.com/learning/windows-10-networking-22602895"
duration_minutes: 74
duration: 1h 14m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQG_rHbE8mg1-A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1687392262501?e=2147483647&amp;v=beta&amp;t=OT3G-Lelt6QAGcvzRwovRqebCT_u0MRSFLLGoWikm2Q"
linkedin_topic: DevOps
learning_paths:
  - '[[Explore a Career in IT Support]]'
prev_courses:
  - '[[Windows 10- Security]]'
next_courses:
  - '[[Troubleshooting Common PC Issues for Users]]'
path_nav: '[{"path":"Explore a Career in IT Support","position":7,"total":11,"prev":"Windows 10- Security","next":"Troubleshooting Common PC Issues for Users"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/it-help-desk
  - topic/network-and-system-administration
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Windows%2010-%20Networking.md)

![Windows 10: Networking](https://media.licdn.com/dms/image/v2/D560DAQG_rHbE8mg1-A/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1687392262501?e=2147483647&amp;v=beta&amp;t=OT3G-Lelt6QAGcvzRwovRqebCT_u0MRSFLLGoWikm2Q)

# Windows 10: Networking

> Learn networking with Windows 10. This step-by-step course demonstrates how to connect a Windows 10 machine to an existing network and manage a variety of network settings: configuring IP settings and network connectivity, configuring wireless networking settings, and configuring and maintaining network security and preferences. Instructor Joli Ballew shows you how to get connected to the internet

> [LinkedIn Learning](https://www.linkedin.com/learning/windows-10-networking-22602895) | 1h 14m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Understanding Windows 10 networking](#understanding-windows-10-networking)
- [**1. Configure IP Settings and Network Connectivity**](#1-configure-ip-settings-and-network-connectivity) (8 videos)
  - [Connect to the internet](#connect-to-the-internet)
  - [Network profiles](#network-profiles)
  - [Configure advanced profile sharing options](#configure-advanced-profile-sharing-options)
  - [Network connectivity: TCP/IP](#network-connectivity-tcpip)
  - [Network connectivity: DHCP and DNS](#network-connectivity-dhcp-and-dns)
  - [Configure network adapters](#configure-network-adapters)
  - [Manage default printers](#manage-default-printers)
  - [Create a VPN](#create-a-vpn)
- [**2. Configure Wireless Networking Settings**](#2-configure-wireless-networking-settings) (3 videos)
  - [Connect to a wireless network](#connect-to-a-wireless-network)
  - [Manage wireless networks](#manage-wireless-networks)
  - [Troubleshoot wireless network connectivity](#troubleshoot-wireless-network-connectivity)
- [**3. Configure and Maintain**](#3-configure-and-maintain) (4 videos)
  - [Configure Windows Defender Firewall](#configure-windows-defender-firewall)
  - [Manage Windows Defender Firewall with advanced security](#manage-windows-defender-firewall-with-advanced-security)
  - [Explore Windows Security](#explore-windows-security)
  - [Create a connection security rule](#create-a-connection-security-rule)
- [**4. Networking and Troubleshooting Basics**](#4-networking-and-troubleshooting-basics) (4 videos)
  - [Use ping to troubleshoot network connectivity](#use-ping-to-troubleshoot-network-connectivity)
  - [Use ipconfig to troubleshoot network connectivity](#use-ipconfig-to-troubleshoot-network-connectivity)
  - [Use tracert to troubleshoot network connectivity](#use-tracert-to-troubleshoot-network-connectivity)
  - [Use PathPing to troubleshoot network connectivity](#use-pathping-to-troubleshoot-network-connectivity)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding Windows 10 networking](https://www.linkedin.com/learning/windows-10-networking-22602895/understanding-windows-10-networking?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/understanding-windows-10-networking?u=76281980&t=0)** - [Joli] Have you ever wanted to know how to connect to various kinds of networks? Understand what happens after you connect to a network and how a computer functions on that network? And more specifically, how does your computer know how to communicate with others? You'll learn that and a lot more in my course. Hi, I'm Joli Ballew, and I've written almost 60 books on computer technologies. With my course, you'll learn multiple ways to access, secure, and manage the networks you connect to. You'll learn how to configure network adapters and troubleshoot common and not so common problems. You'll become familiar with the networking terms you need to know, like [[DHCP]], TCPIP, DNS, and others. So what are you waiting for? Let's get started!

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (1)
> **Env Vars:** dhcp (1), tcpip (1), dns (1)
> **Warnings:** troubleshoot (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [joli] (1)


### 1. Configure IP Settings and Network Connectivity

[↑ Back to Table of Contents](#table-of-contents)

#### [Connect to the internet](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=0)** - [Instructor] It doesn't matter whether you've just purchased your first [[Windows 10]] computer or if you're an experienced user. The first thing you need to do is get connected to a network so that you can access the internet. Networks are used to send, receive, and request data between computers. This connection can be wired or wireless. A wired connection uses an ethernet cable, and a wireless connection uses wireless [[Hardware]] including network cards and access points. By far, the easiest way to connect is with ethernet. You use an ethernet cable to connect your computer to a router, an ethernet extender, or an ethernet wall port. If you have a newer laptop, it might not have an ethernet port though, and in this case, you'll need to use a converter. If you're going to use a wireless network, you won't have a physical connection. In order to access this kind of network, you'll need to select that wireless network from the network list. Follow along on your own computer if you can. Click the network icon on the task bar and click the network to connect to. Place a check and connect automatically if you wish, and then click connect. Now type the security key. That's the password. Now press next. If this is the first time you've connected to this network, you should be prompted to choose whether or not you want to let your computer be visible on it. If you see this prompt, click yes
>
> **[1:34](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=94)** if it's a network you trust, like one in your home, or no if you're in a public place, like a coffee shop. There are several popular web browsers including [[Microsoft]] Edge, which comes with Windows 10. You can locate that from the search icon if it's not on the task bar already. While Edge is the default browser, you could also choose Chrome, Firefox, or others. If you prefer another browser over Edge, follow along to set it as the default in settings. Click the start icon, click settings, click apps, and then default apps.
>
> **[2:19](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=139)** Locate web browser and click it. Choose the browser you'd like to set as the default. Now you can close the window. Now let's talk about public versus private networks. Earlier, if you connected to a [[Local Area Network (LAN)|local area network]] and told [[Windows]], you trusted it, Windows marked this network as private. To see what you've selected, click start, settings, and network and internet.
>
> **[2:54](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=174)** When the network is private as it is here, you can access the resources on it. To see the resources, you can open File Explorer and click network. You can see my network is private, so let's do that quickly. File Explorer is often located on the task bar. Here, I can see additional computers and resources on my private local network. If you decide you don't want to access these resources or have your computer visible on the network, you can change the type from private to public. Let's return to the window where we were in settings under network and internet. Underneath your network, click properties. Here is where you change the network profile from private to public. If yours is set to public and you'd like it to private, you can make that change here as well. You can also change the network you're connected to. You can see all available networks by clicking the network icon on the task bar. I have several networks available to me, but only a couple are mine. The others belong to my neighbors. You can see most of them have a lock icon on them. This means they'll require a password to connect. I'll choose NotYourWifi. This is a network I offer to guests
>
> **[4:27](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-the-internet?u=76281980&t=267)** and it's a 2.4 gigahertz network that my older [[Wi-Fi|wifi]] devices can also use to connect to the internet. Not all older devices can see or use a five gigahertz network. I'll remove connect automatically and click connect, and here I'll enter the security key and I'll click next. Here's the prompt I talked about earlier. Here's where we answer the question, do you want to allow your PC to be discoverable by other PCs and devices on the network? Notice it says, we recommend allowing this on your home and work networks, but not on public ones. I'll click yes. Now, you can connect to a network in Windows 10. You can select a default web browser for surfing the internet, and you can change the setting to private or public or back, and you can also change networks when necessary. Go ahead and explore the networks you have available, and when you're ready, move on to the next movie.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows 10]] (3), [[Windows]] (2), [[Hardware]] (1), [[Microsoft]] (1), [[Local Area Network (LAN)|Local area network]] (1)
> **Prerequisites:** you'll need (2)
> **CLI Commands:** make (1)
> **Versions:** 2.4 (1)
> **Tools:** firefox (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Network profiles](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=0)** - [Instructor] Networks come in all shapes and sizes. A network for a home user often consists of a router purchased from a big box store or one leased from an ISP. A home network might also have three or four computers or laptops, a shared printer, maybe even a hand handful of tablets or smartphones. Think about the network you have set up in your home or small [[Microsoft Office|office]]. Does it look similar to this? A network for a small business might include a single network server, a dozen workstations, and a few shared devices. A network for a larger corporation or enterprise could consist of hundreds of computers spread over several sub networks complete with all kinds of connected [[Hardware]]. Thus, business networks are generally more robust than home networks. If you work for or own a small to medium-sized business, this might look familiar. When you join a network, no matter what kind of network it is, a network profile is applied. We talked about this in a previous movie. There are two profiles available, public and private. There is another type of network profile, though and that's the domain profile. A domain is used to authenticate users, manage users' access to resources, and store and manage user and company data, and it keeps the network and its resources secure. Network profiles are preset configurations that offer the default security and sharing settings to any network you connect to automatically. Private network profiles are configured for homes and small businesses.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=95)** Your computer is visible on this network. You can access shared resources like printers and shared backup devices, and network discovery is turned on which is what makes a computer discoverable on this kind of network. The public network profile is configured for hotels, coffee shops, libraries, and more. Your computer won't be visible to others here and you shouldn't be able to see anyone else's. There are generally no shared printers or other resources and network discovery is turned off automatically. Domain networks are configured for large businesses, like enterprises. Resources are available, but users need the proper permissions to access them. [[Windows]] decides what network profile to apply by how you answer the question regarding discoverability when you join it. We talked about that prompt and saw it in the last movie. For public and private networks, if you say it's okay to make your device discoverable on a network, the setting is configured as private. Otherwise, it's set to public. In any instance where Windows doesn't know what profile to apply, it applies the public profile. You don't have to worry too much about the domain profile. You know when you're connecting to a domain because the connection and credentials will have already been set up by a network administrator. To see the type of network profile you're connected to, right-click the Network icon on the Task bar and click Open Network & Internet settings. Notice the network here is private. This means I'm able to access network resources
>
> **[3:10](https://www.linkedin.com/learning/windows-10-networking-22602895/network-profiles?u=76281980&t=190)** that are shared. You'll have problems accessing local resources if the network type is set to public when it should be set to private. If you've noticed, say that you can't print to a local printer or access shared files or sync passwords with other computers, this could be the problem. To sum up, there are three profile types, private, public, and domain. The profile that's applied depends on many factors, but mainly what you tell Windows about the network the first time you connect. You can change a profile from private to public or public to private, but domain profiles are managed by and secured by network administrators and can't be changed by general users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (3), [[Microsoft Office|Office]] (1), [[Hardware]] (1)
> **Cross-References:** we talked about (2), in the last (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** make (1)
> **Env Vars:** isp (1)
> **UI Navigation:** right-click (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Configure advanced profile sharing options](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=0)** - [Instructor] Every time you connect to a network, [[Windows]] applies a network profile. In the last movie, you learned that there are three: private, public, and domain. Each profile has its own default configuration settings, and these are available to view and change in the Network and Sharing Center. Let's open that. Right-click the network icon on the task bar, and select Open Network and Internet Settings. Click [[Wi-Fi|Wifi]], and then click Change Advanced Sharing Settings.
>
> **[0:37](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=37)** To see the settings associated with a private network profile, expand Private if it isn't already. Here you can see that both network discovery and file and print sharing are enabled. These are the default settings, but you can make changes if you like. You may want to leave your computer discoverable so that you can see other computers on the network, but would like to disable access to local printers, shared files, and other resources, for the users on that network. Now expand Guest or Public. You can see here that discovery and file and print sharing are turned off by default. There might be instances where you want to make a change to these settings. For example, perhaps you want to share a local printer with users on a public network that you've created. In a case like this, simply tick the desired box, and then save the changes to the profile. Back in Advance Sharing Options, expand All Networks. Again, you can make changes to the default settings. Perhaps you've always wanted to allow users to access your public folders. If so, you can enable the setting Turn on Sharing, so anyone with network access can read and write in the public folders. Public folders are public, after all, so this might be a setting you'd like to change, especially if you share data with others regularly over this network. You can also enable media streaming. Doing so lets you share the media that's stored on your computer with others on the network. To get started, click Choose Media Streaming Options,
>
> **[2:11](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-advanced-profile-sharing-options?u=76281980&t=131)** and click Turn on Media Streaming. What you see here will depend on your network setup, and it will offer the option to choose which computers on your network will have access to the media you decide to share. This is worth configuring if you store a lot of media on a single computer, and want to be able to access that from other places. I'll click Cancel. If you're connected to a domain, you'll see a domain option in the Advanced Sharing Settings as well. Because network administrators generally configure these settings, though, what you'll see will depend on how your administrator has configured the domain. One thing to remember, though, before you move on to the next movie, is that Windows default settings are configured a certain way for a reason, and that reason is to keep your data and your computer as safe and secure as possible. So, be careful when you make changes here. That said, I'll go ahead and click Cancel. You can click Cancel too, if you're following along.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Wi-Fi|Wifi]] (1)
> **CLI Commands:** make (4)
> **Prerequisites:** setup (1), configure (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** right-click (1)
> **Analogies:** for example (1)
> **Warnings:** be careful (1)
> **Speakers:** - [instructor] (1)

#### [Network connectivity: TCP/IP](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=0)** - [Instructor] If you've been watching this course from the beginning, you've connected to a network and are ready to send data over it. There are lots of processes that help this happen, including protocols for how the data gets split up into packets and transferred using bits and bytes and ones and zeros. We don't need to understand that right now though. What we do need to understand is how the data you send knows which computer to go to, and how does a receiving computer know the data that's intended for it? Well, for starters, each computer must be uniquely defined on the network and that identification starts with an IP address. An IP address is much like the address assigned to your home. An IP address defines the computer and its location on the network in the same way your house address defines your home's location, street, city, and zip code. In technical terms, the two main functions are to define the host computer, as well as that computer's location on the network. Most of the time, a computer obtains its IP address from a [[DHCP]] server, which we'll talk about in the next movie. The IP address, along with other addressing technologies, are only part of the networking picture though. Let's take a look at the local area connection dialogue box to see our IP address. Follow along with me if you can. Right click the network icon on the task bar and click open network in internet settings. Notice what kind of connection you have, wired or wireless. I'm connected with a wireless connection
>
> **[1:34](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=94)** and it's a private network. Scroll down. Click view [[Hardware]] and connection properties. You'll see a lot of terms here you may not be familiar with. You can scroll through them. I'm going to scroll down to [[Wi-Fi|wifi]] and I'm going to look at my IPv4 address. We talked about these addresses earlier, and here it is. It's unique on the network and represents your computer. There's also an IPv6 address. IPv6 is a newer IP technology that greatly increases the number of IP addresses available to the general public. You can see other information here too. For instance, you can see how long the computer has had this particular IP address. IP addresses are not granted forever, if they're granted by DHCP server, which you'll learn about later. When the lease expires, a new lease is granted. This helps keep the pool of IP addresses valid and up to date. Also, notice the default gateway. This is the IP address of the router that allows traffic to move into and out of the network. I've highlighted an IPv6 address, but you may see an IPv4 address. Although you don't see anything here that specifically mentions TCP/IP, I'd still like to talk a little about that. TCP/IP is the default wide area network protocol that provides communications across a variety of network types and infrastructures. In order for data to travel across networks,
>
> **[3:07](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-tcp-ip?u=76281980&t=187)** such as those separated by a router, TCP/IP must be used. TCP/IP plays a big part in [[IP Addressing]]. Now, let's locate the physical address called a MAC address, or media access control address. Like an IP address, this is also unique, but this one never changes. This address is a physical address generally supplied by the manufacturer of your computer. If you're heading right into the next movie, you can leave these [[Windows]] open if you like. If you're going to take a break, feel free to close all dialogue boxes and windows.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (2), [[Windows]] (2), [[Hardware]] (1), [[Wi-Fi|Wifi]] (1), [[IP Addressing]] (1)
> **Env Vars:** tcp (4), dhcp (2), mac (1)
> **UI Navigation:** scroll down (2), go to (1)
> **Analogies:** picture (1), for instance (1), such as (1)
> **Cross-References:** in the next (1), we talked about (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Network connectivity: DHCP and DNS](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=0)** - [Instructor] When working with TCP/IP addresses, you can choose to assign the addresses manually or let [[Windows]] assign them automatically. [[DHCP]], or [[DHCP|Dynamic Host Configuration Protocol]], is used to assign IP addresses automatically. It's likely that DHCP is enabled for your network connection. Let's find out. As in previous movies, let's open the Network and Sharing Center. Click Status and scroll down. Click View [[Hardware]] and connection properties. Locate DHCP enabled and see what's listed. You can see mine says, "Yes." You can also see that it has an IPv4 address, and it has a lease. It is possible to manually input a static IP address. You might want to do this for a computer that you would like users to connect to and whose IP address should never change. This could be a data server, a print server, a gaming machine, and so on. To set a static IP address, return to the Status tab. Click Change adapter settings. Right-click the active network and choose Properties. From there, click Internet Protocol Version 4 TCP/IPv4, and click Properties one more time. Here's where you type your own IP address. If you decide to configure a static address, there's a lot to consider.
>
> **[1:33](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=93)** Remember the analogy of the addressing system for neighborhoods. Imagine if two or more houses had the same address. The mail, pizza delivery, and even emergency services would not know which house to go to. You have to make sure that no other note on the network has that address and that any DHCP server or router won't try to give that address to any computer it manages. Once you know what IP address to use, click OK. I'll click Cancel. Note that if a computer can't get an IP address from a DHCP server, a no-static IP address is set and addresses automatically assigned to it by Windows. This is called Automatic [[IP Addressing]]. APIPA uses a reserved range of 169.254.0.0 to 169.254.255.254 It's a Windows-based feature that enables communications when no other options are available. DNS, or Domain Name Service, is another term you'll run across when studying networks. DNS is the system that enables users to type a website's name into a web browser instead of its IP address. DNS is responsible for name resolution. Name resolution is important because without it, users would have to know the IP address of each web website they want to go to, and they'd have to type that address in manually instead of typing its common name. To see the current DNS server assigned to your computer, return to the View Hardware
>
> **[3:07](https://www.linkedin.com/learning/windows-10-networking-22602895/network-connectivity-dhcp-and-dns?u=76281980&t=187)** and Connection Properties window. Here's one DNS server entry, and you'll see that there are likely additional ones. So let's sum up the terms I've introduced here. IP stands for Internet Protocol. TCP/IP stands for Transmission Controlled Protocol/Internet Protocol, and a physical address is also called a MAC address and is usually assigned by the manufacturer of the network card installed in your computer. DHCP is Dynamic Host Configuration Protocol, APIPA is Automatic Private IP Addressing, and DNS is Domain Name Service. Before moving on, take one last look at the Hardware and Connection Properties page and make sure you have some understanding of the terms you see there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (6), [[Windows]] (3), [[Hardware]] (3), [[DHCP|Dynamic host configuration protocol]] (2), [[IP Addressing]] (2)
> **Env Vars:** dhcp (6), dns (6), tcp (3), apipa (2), mac (1)
> **UI Navigation:** go to (2), open the (1), scroll down (1), right-click (1)
> **CLI Commands:** make (2), find (1)
> **Versions:** version 4 (1), 169.254.0 (1), 169.254.255 (1)
> **Definitions:** is called (1), stands for (1)
> **Prerequisites:** configure (1), make sure you have (1)
> **Analogies:** imagine (1)

#### [Configure network adapters](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=0)** - [Instructor] A network adapter is generally located inside a computer. It enables the computer to connect to a network. The adapters can be wired or wireless. There are external network adapters too, and these connect to USB ports to provide connectivity when no other adapter is available. To see the network adapters installed on your computer, follow these steps. First, open Control Panel. Then, under Network and Internet, choose View network status and tasks. Then click Change adapter settings. If you've been watching this course from the beginning, you know there are other ways to get here. You can see here that I have three types of adapters. One is a [[Wi-Fi|wifi]] adapter, and it's connected to my network called Rockstars. The other is a Bluetooth adapter, and it's not connected to anything. There's also an ethernet option. If you're following along, leave this window open for now and minimize it. You can also see all of the adapters installed on your computer from Device Manager. Let's open that. Device Manager lets you troubleshoot devices, update drivers, and perform other tasks. Let's expand Network adapters. You can see here that I have more options than just my wireless adapter and my Bluetooth adapter and ethernet. There are also various WAN miniports. These kinds of adapters are virtual adapters
>
> **[1:35](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=95)** that allow [[Windows]] to split a network in two. For instance, you can connect to a laptop using ethernet, and at the same time, use that laptop to create a wireless hotspot for other devices. Whatever you see, let's double click the adapter that's currently active and connected. For me, that's my wifi adapter. You can perform several tasks here. To see if there's an updated driver available, click the Driver tab and click Update Driver. Tell Windows to search for a driver, and if one becomes available, consider installing it. You can see that the driver for this adapter is up to date. If you're having problems with an adapter, this may resolve the problem if a newer driver is available. If it doesn't, you can always uninstall the driver and reboot the computer. Here's the option to uninstall. Uninstalling removes the device, but when you reboot the computer, it's reinstalled automatically, so likely any existing issues will be resolved. Let's click the Events tab. You can see that I've recently tried to update the driver, and if I scroll back a little, I can see when the original driver was installed. Let's click Resources. The resources are usually configured optimally during installation, so there's likely not much you can do here. And although there are other tabs to explore, for the general network technician, there's often no need to. I'll close Device Manager now and show you a few more configuration options. Let's return to the window we had open earlier
>
> **[3:09](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-network-adapters?u=76281980&t=189)** that showed the available adapters that we use often. Decide which adapter you'd like to configure and right click it. I'll choose my wifi adapter again. When I right click, you'll see that Disable is the first option. This will cause the adapter to become inoperable, at least until I opt to reenable it. Another option is to connect or disconnect, but this is only available for wifi networks. Ethernet stays connected all the time, and Bluetooth is generally on demand. Another option is Status. If you click Status, you'll see all kinds of information. Let's do that. Here, you can view the connection type, IP connectivity information, the name of the network, and more. This information can prove helpful if you're having problems with a specific adapter. I can see here that the adapter is both sending and receiving data. When troubleshooting, you might sometimes see that an adapter is doing one but not the other. This can happen if your TCPIP settings aren't configured to obtain an IP address automatically, but there are other reasons it can happen as well. If you find there's a problem like this, you can click Diagnose to see if Windows can fix it for you. For now, let's just make a note of what's here. There are other options you can explore if you'd like, and feel free to do that. For now, I'm happy to have covered these basic options to get you more comfortable with the networking tasks that you might need to accomplish as you start diving a little deeper into networking technologies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi|Wifi]] (4), [[Windows]] (3)
> **Env Vars:** usb (1), wan (1), tcpip (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (2)
> **Analogies:** for instance (1)
> **Warnings:** troubleshoot (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Manage default printers](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=0)** - [Narrator] Have you noticed, especially if you switch among wireless networks often, that each time you try to print something, [[Windows]] default to the last printer you used? This is supposed to happen, and most home and small business users appreciate the convenience. However, if you're mobile like me and switch among wireless networks often, you might not like this setting. You can change this behavior and take control of your printer preferences instead of letting Windows choose. To do this, click start, and then settings, double click devices. And from there, click printers and scanners. These are the printers I have access to for my laptop. In reality, there's only one though. The others are apps. However, the process is the important thing here. So scroll down to the bottom and look for the option, let Windows manage my default printer. As you can see here, it's selected. If you want to manage your own printers, deselect it. With that done, click the printer you use most often and click manage. Now click printer properties. What you see here depends on the printer and any related software you've installed, so you'll have to look around. I'll click preferences from the general tab to get started. As we explore, click the tabs that you see. I'll click paper quality. Notice the paper source is automatic and the media is plain paper. The quality settings are set to better,
>
> **[1:32](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-default-printers?u=76281980&t=92)** but I could change them to draft or best or even only print in black and white. I'll click cancel. Now click sharing. This is where you can share your printer, and if you see advanced, you can click that as well. You may see options that allow you to open the print queue, print a test page, run a troubleshooter, set printer properties and printing preferences, and see [[Hardware]] properties. When you're finished exploring, click cancel. You should see most of the options that I see here. You can open the print queue to see what's in line to print. You can set the printer as the default. You can print a test page, run a troubleshooter, view the properties, the preferences, and even see what's happening with the hardware. Go ahead and explore as you'd like, and then click the back button. From here, if you see a printer you don't need and you want to remove it, just click it and then click remove device. I'll choose [[OneNote]] Desktop. Honestly, I don't even know where this came from, so I'll click remove device. And finally, you'll only have access to the printers on your local network or those configured as internet printers. If you don't see a printer you expect to see, it may be that it's not shared for you. Before moving forward, take a minute to explore the properties and preferences for the printers you have access to and make any changes you desire. When you're finished, close all open windows.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (4), [[Hardware]] (2), [[OneNote]] (1)
> **UI Navigation:** open the (2), scroll down (1)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### [Create a VPN](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-vpn?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-vpn?u=76281980&t=0)** - [Instructor] A VPN or [[Virtual Private Network (VPN)|virtual private network]], is a type of network connection that enables users to securely connect to a remote computer or a network server using the internet as a connection medium. VPNs have built in security and encryption technologies that enable data to be transmitted securely even when the actual network is out of the administrator's control. VPNs enable offsite and remote employees to access corporate resources from anywhere, including hotels and hotspots without worrying about security. The connection acts and feels like the users on the enterprises internet too. And users don't have to do anything special to connect in most cases. You can create a VPN from the network and sharing center or from settings. Before you start though, you'll need to obtain the required server information and credentials from your company's network administrator or you'll need to sign up for a third party VPN service. Once you have this information you're ready to create. To do that, click start, click settings and double click network and internet. Now click VPN. Now you can choose to add a VPN connection, let's click that. For the VPN provider I'll choose [[Windows]]. I'll go ahead and fill this out with the information I have. Yours will be different and personal to you. For the VPN provider, I'll choose Windows, and for the connection name I'll type Landon Hotel. I can also type the server name or address
>
> **[1:38](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-vpn?u=76281980&t=98)** and I'll type the address. I'll leave the VPN type set to automatic and I'll use a username or password to connect. Now, I'll click save. Once the VPN is available, you can connect to it from here by clicking it and clicking connect. You can also choose it from the network list on the task bar. Here's Landon Hotel. You can also choose it from the network list on the task bar and here's Landon Hotel. Once you're connected to the VPN you can access the same resources that you're able to access while sitting at your desk on company property provided the network administrator allows it. The same network servers are available as are the printers and other shared resources. VPNs have become a valuable resource for enterprises and remote employees and enable users to work securely even when they're away from the [[Microsoft Office|office]]. If you have the information you need, then put it here and give it a try.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Virtual Private Network (VPN)|Virtual private network]] (1), [[Microsoft Office|Office]] (1)
> **Env Vars:** vpn (10)
> **Prerequisites:** you'll need (2)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 2. Configure Wireless Networking Settings

[↑ Back to Table of Contents](#table-of-contents)

#### [Connect to a wireless network](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=0)** - I'm sure you've connected to a wireless network before, perhaps from a laptop computer, a phone, or a tablet. The process is often the same no matter the device. A prompt generally appears informing you of the available networks and you click one to join. Most people also opt to connect to a network automatically during this process. You can also choose from a list of networks. On a [[Windows 10]] machine, just click the Network icon on the task bar. You can tell [[Windows]] to remember the networks you connect to so that you can connect quickly and without prompting the next time you're in range of them. I'll show you. Here's the option to connect automatically. However, if you change your mind about remembering a network perhaps because you'll never use it again, you'll want to forget the network. You might also want to let Windows know not to look for that network when it's scanning. This takes resources your computer doesn't need to be using. Whatever the reason, to forget a network, click "Start", "Settings", and "Network and Internet". Because you can only forget [[Wi-Fi]] networks, click "Wi-Fi" in the left pane. Now you can click "Manage Known Networks" to see a list. I have a long list. To forget a network, simply click it and then click "Forget".
>
> **[1:37](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=97)** You can also connect to a network from Settings. Let's look at a few more options and if you're following along, click the back button. Here, I'll make sure Wi-Fi is selected and I'll click "Show Available Networks". And here's that list again. But what do you do when the wireless network you want to connect to doesn't appear? In these cases, you'll need to join a wireless network manually. You do this in the Network and Sharing Center. You can get to the Network and Sharing Center from the link on the Wi-Fi Settings page. Now, click "Set Up a New Connection or Network" and click "Manually Connect to the Wireless Network". And click "Next". Here's where you'll type the network name, choose an encryption type, and enter the security key. That's the password. All of which you can obtain from the local network administrator. Once you've entered this information, you can start the connection immediately and connect to the network even if it isn't broadcasting. You'll click "Next" to complete the wizard, but I'll just click "Cancel". If the network you have connected to is metered, meaning you have to pay for the data you use, you'll want to configure it as a metered connection. Doing so will disable Windows updates and application downloads for some applications. To set a network as metered, return to Settings. Again, open Network and Internet.
>
> **[3:14](https://www.linkedin.com/learning/windows-10-networking-22602895/connect-to-a-wireless-network?u=76281980&t=194)** Make sure the Wi-Fi tab is selected in the left pane and click the connection in the right. Scroll down and move the slider from off to on under "Set as Metered Connection". When you turn on a metered connection, only priority Windows updates will be downloaded. App downloads may be paused. Start screen tiles may not update. And offline files may not sync. To sum up, you can connect to a wireless network in several ways. You can connect from the Task Bar and from the Settings window and you can connect to a hidden wireless network from the Network and Sharing Center. You can also mark a connection as metered when you're concerned about data usage. Spend some time to look at any other settings available to you. And when you're ready, close all open Windows.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (5), [[Wi-Fi]] (5), [[Windows 10]] (1)
> **Prerequisites:** you'll need (1), set up (1), configure (1)
> **CLI Commands:** make (2)
> **UI Navigation:** scroll down (1)
> **Speakers:** - i (1)

#### [Manage wireless networks](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-wireless-networks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-wireless-networks?u=76281980&t=0)** - [Instructor] There's more to [[Wireless Networking]] than simply connecting to networks. There are a lot of configuration options to explore. Click the Network icon on the task bar to get started. From here, you can quickly enable or disable [[Wi-Fi]]. You might want to disable Wi-Fi if your battery power is low to keep [[Windows]] from looking for wireless networks when you don't need one. You also have access to Airplane Mode. You'll enable airplane mode when you're told to by an airline pilot or in any instance when you need to disable all wireless network activity including Wi-Fi, bluetooth, GPS, and cellular. You might also see the option to create and share a mobile hotspot. If you're interested in that, it's best to configure it from settings. Let me show you where that is. Click Start, Settings, Network and Internet, and Mobile Hotspot. Here's where you turn on your mobile hotspot. Once enabled, the options to edit the default name and password given to it are available here. Edit. It's possible to change the name and to set a new network password. You can also choose the network band. I'll click Cancel and turn this off for now. There's another setting that's unique to wireless networks and the computers that support them, and that's data usage. From the Network and Internet option and settings,
>
> **[1:33](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-wireless-networks?u=76281980&t=93)** click Status to get there and then click Data Usage. From here, you can see the information related to the networks you use. Click Cancel and go ahead and click back and take a look at the other options you see. There's a lot to explore here. Make sure to look at the Status tab options, as well as the Wi-Fi tab options. If you see an Ethernet tab, explore that as well. When you're finished, close the Settings window.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi]] (4), [[Wireless Networking]] (1), [[Windows]] (1)
> **Best Practices:** it's best to (1), make sure to (1)
> **CLI Commands:** make (1)
> **Env Vars:** gps (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Troubleshoot wireless network connectivity](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=0)** - [Instructor] Wireless connectivity problems occur infrequently. But when they do, you should always try the most common solutions first. Much of the time, especially for laptop users, it's disabled [[Wi-Fi]]. It's easy to check to see if Wi-Fi is disabled on the laptop. All you have to do is click the network icon on the taskbar and look at the Wi-Fi symbol in the bottom left corner. If you find the icon is gray instead of blue, like it is here, you've likely found the problem. Just click to enable. If you set a connection to connect automatically, you'll be automatically connected, as we are here. If this doesn't resolve your network problem, the next step is to see if a network adapter is installed, or if the wireless adapter has been disabled. Let's locate that setting. Right-click the network icon on the taskbar and click open network in Internet settings. From the status page, you can see we have a problem. Let's click Change adapter options. As you can see here, the Wi-Fi adapter has become disabled. To enable this adapter and resolve the problem, you can right-click and choose Enable. If you give the adapter a minute, it will find the latest network or the most available one and connect to it automatically. I'm going to leave this window open, so we can come back to it later. Let's consider a different problem.
>
> **[1:33](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=93)** In this scenario, you have a wireless connection enabled and seemingly working perhaps because you can access the Internet, but you can't access local resources on the network. In this case, it could be because the network is configured as Public instead of Private. Here's how to see if this is the problem and correct it if it is. Click Start, Settings, and return to Network & Internet. From the Status tab, have a look. You can see this is set to Public. To change it, click Properties, and click Private. And that should resolve this problem. If these solutions don't fix your connection problems, you can try the Network Troubleshooter. It comes with [[Windows 10]] and can often locate the problem and resolve it. Back at the taskbar, right-click the Network icon and click Troubleshoot problems. If you're prompted to choose a network adapter, you can, or you can leave Choose all network adapters if that's an option. I'll leave All network adapters selected and click Next. [[Windows]] has a solution here to plug an ethernet cable into the computer. I don't connect with an ethernet cable, so I'm going to skip this step and see what happens. And here we go. It looks like Windows found the problem, and it says, "The Wi-Fi adapter is disabled". I'll click Try these repairs as an administrator
>
> **[3:07](https://www.linkedin.com/learning/windows-10-networking-22602895/troubleshoot-wireless-network-connectivity?u=76281980&t=187)** and see what happens. It looks like the problem has been fixed. It says the Wi-Fi adapter is disabled. That's fixed, so we'll close the troubleshooter. And if you look back at the list of networks you can see I'm connected to my local one. Finally, you might have a connectivity issue if your computer has a static IP address assigned to it when you should have an IP address automatically applied by ADHCP server. To check to see if this is the problem, let's locate Change Adapter Settings again and go from there. If you've been watching from the beginning, you know where to find this. Here we'll right-click the adapter and select Properties. Now we'll click Internet Protocol Version 4, and we'll click Properties again. And as you can see here, we've got a static IP address applied. If we change it to Obtain an IP address automatically and click Okay and close, it will probably solve our problems. As you can see, there are a lot of ways to resolve networking problems. You can look for the obvious first, such as a disabled Wi-Fi adapter or having airplane mode enabled. You can move on to other options after that, including checking the network adapter status, running troubleshooters, and resolving [[DHCP]] issues manually. For the most part, these techniques will resolve your wireless problems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Wi-Fi]] (7), [[Windows]] (2), [[Windows 10]] (1), [[DHCP]] (1)
> **UI Navigation:** right-click (4)
> **CLI Commands:** find (3)
> **Env Vars:** adhcp (1), dhcp (1)
> **Versions:** version 4 (1)
> **Analogies:** such as (1)
> **Best Practices:** you should always (1)
> **Warnings:** troubleshoot (1)


### 3. Configure and Maintain

[↑ Back to Table of Contents](#table-of-contents)

#### [Configure Windows Defender Firewall](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=0)** - [Instructor] If you use a laptop and move around a lot, you connect to a lot of networks. Most of those are private, like a network at home or work, while some are public, like those in hotels and coffee shops. If you work in a corporate environment, you probably join a domain based network, as well. Here are some of the networks I've connected to recently. To see yours, go to Settings, [[Wi-Fi]], and Manage known networks. Have you ever wondered what keeps your computer safe in all of these different environments and how that safety is achieved? Most of the time, at least when connected to a private or public network, it's your basic [[Windows]] [[Microsoft Defender|Defender]] Firewall. Go ahead and open Windows Defender Firewall on your own PC. One way to do that is to search for firewall from the Taskbar. Make sure to select Windows Defender Firewall. When you open the firewall, you can immediately see which network profile has been applied to the connection you're using, and you can see the status. Here, I'm connected to a private network. My firewall is on and active, and it's green, so I know it's healthy. If you're in charge of managing your own firewall and see that the firewall is turned off, you should look into why. It may have been turned off because you installed a third party firewall, but it could be because malware has infiltrated the system. Click turn Windows Defender Firewall on or off to see the next window. You can see my firewall is configured properly,
>
> **[1:34](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=94)** so I won't make any changes here. However, if your firewall is turned off, and you're sure it should be turned on, go ahead and do that, and click Okay. There are other places in Windows to check firewall status. Search again for firewall and choose Firewall & network protection from the options. Here we go. You can see it's in Settings. Again, you can see information about your firewall as well as options to manage virus and threat protection, account protection, device security, and more. Having an active firewall is very important, because a firewall, by design, blocks undesirable and risky connections. For example, Remote Desktop isn't set up to pass through a firewall by default. Remote Desktop lets you access another computer remotely. It's disabled because this opens the system up to allow remote users in. If you want to use Remote Desktop, perhaps to access your work computer from home, you'll have to create an exception for it. I'll show you how. Let's return to Windows Defender Firewall, and notice the option on the left side, Allow an app or feature through Windows Defender Firewall, and click it. If necessary, click Change settings so that you can see the options, and scroll down. Look for the feature you want to allow. For us, that's Remote Desktop. I'll put a click here, and I'll decide that's okay over private networks
>
> **[3:06](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=186)** as well as public, and I'll click Okay. You can use the same technique to enable or disable other items in Windows Firewall. Finally, if you're feeling exceptionally vulnerable, you can block all incoming connections. Doing so won't cause you to lose access to the internet or cause you to be unable to send or receive email, but Windows will reject all uninvited incoming traffic. You can do that again in Windows Defender Firewall. From here, click Turn Windows Defender Firewall on or off, and then choose the block options for private and/or public, and when you're ready, click okay. If and when you make changes to the firewall and want to return to the defaults, you can do that here. Just click Restore defaults in the left pane. Click Restore defaults again, click Yes, and there we go. Go ahead and spend a few more minutes exploring the other options if you have time. Note that you can click Troubleshoot my network, and you can click Advanced settings to see even more options for working with the firewall. After that, return to the Settings window. Click any options that interest you. You might try Firewall notification settings, Advanced settings, which we'll explore in the next video, Device performance & health,
>
> **[4:40](https://www.linkedin.com/learning/windows-10-networking-22602895/configure-windows-defender-firewall?u=76281980&t=280)** Virus & threat protection, and more. When you're ready, continue to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (11), [[Microsoft Defender|Defender]] (8), [[Wi-Fi]] (1)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (1), open the (1), scroll down (1)
> **Cross-References:** in the next (1), next video (1)
> **Warnings:** note that (1), troubleshoot (1)
> **Analogies:** for example (1)
> **Best Practices:** make sure to (1)
> **Prerequisites:** set up (1)

#### [Manage Windows Defender Firewall with advanced security](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=0)** - [Instructor] [[Windows]] [[Microsoft Defender|Defender]] Firewall, shown here, is often the first line of defense to protect a computer from outside attacks. It does this by providing a two-way vigilant inspection of all of the packets that carry data into and out of a network. Rules define what type of data can move in or out. Here, in Windows Defender Firewall, you have access to those rules. Click Advanced settings to see them. This opens Windows Defender Firewall with Advanced Security. By clicking Monitoring, you can monitor the firewall. You can see the state of the firewall, as well as other information. If you'd like, you can pause this video and see what's offered there. However, the power of Windows Firewall with Advanced Security doesn't reside here. The real power lies in the inbound, outbound, and connection security rules containers in the left pane. Click Inbound Rules to see the rules already in place, and now scroll down to something you recognize. I'll scroll down to the remote desktop entries. We talked about this feature in the last movie. I'll double-click one of these, Remote Desktop-User Mode TCP-In. If you're following along, double-click. This is what the properties dialogue box looks like. And here's the General tab.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=94)** Notice you can allow the connection, allow the connection if it's secure, or block the connection. Let's look at the Advanced tab. You can see this particular remote desktop rule is configured for all of the available profiles. If the feature allows for it, you can change profile access here. To categorize the inbound rules, you can filter them. Let's click Profile at the top of the list. These rules are associated with domain profiles, and these private, and if you expand this, you can see that some are private and public. Of course, some are only public. You can also filter by state. You can do this on the right side of the window. I'll click Filter by State and choose Filter by Enabled. These are all of the inbound rules that are enabled at the present time. Likewise, you can explore rules in the outbound rules area. Again, you have options when you double-click an entry.
>
> **[2:47](https://www.linkedin.com/learning/windows-10-networking-22602895/manage-windows-defender-firewall-with-advanced-security?u=76281980&t=167)** Finally, click the Connection Security Rules container. You'll see there's nothing in there by default. You can create your own rules here. We'll create a connection security rule later in this course. For now, go ahead and explore as desired, and when you're finished, close Windows Firewall with Advanced Security.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (5), [[Microsoft Defender|Defender]] (3)
> **UI Navigation:** double-click (3), scroll down (2)
> **Cross-References:** we talked about (1), in the last (1), later in (1)
> **Env Vars:** tcp (1)
> **Speakers:** - [instructor] (1)

#### [Explore Windows Security](https://www.linkedin.com/learning/windows-10-networking-22602895/explore-windows-security?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/explore-windows-security?u=76281980&t=0)** - [Instructor] You learned about [[Windows]] [[Microsoft Defender|Defender]] Firewall in a previous movie, as well as the advanced options. Now let's look at the newest options in [[Windows 10]], Windows Security. Let's search for Windows Security from the task bar and open it.
>
> **[0:21](https://www.linkedin.com/learning/windows-10-networking-22602895/explore-windows-security?u=76281980&t=21)** Click Home. Notice if anything has a yellow exclamation point on it or if anything is red. If you see something like this, click the items to see how to resolve it. All of mine are green, so I'm in good shape here. Now, click Virus & threat protection. Verify that there are no current threats and that updates are configured properly. There are none here, and I have No action needed listed below. Continue to work through the tabs, and when you get to Firewall & network protection, note that you can manage your firewall from here as you could with other areas of Windows as we discussed earlier. Here's Account protection, and here are the options for the firewall. You can also see options we already explored, like Allow an app through the firewall, Advanced settings, and Restore firewalls to defaults. There's also a Network and Internet troubleshooter, which can come in handy if you run into problems. Continue to browse through the tabs and resolve any issues you find. Make sure to look at Device security and Device performance & health before you move on to the next movie.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (4), [[Microsoft Defender|Defender]] (1), [[Windows 10]] (1)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** we discussed (1)
> **Best Practices:** make sure to (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Create a connection security rule](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=0)** - [Instructor] In this video, we'll discuss connection security rules. [[Windows]] Firewall with advanced security, which is open here, has a lot of rules already configured in the inbound and outbound rules areas. These rules apply to connections such as those created by applications like Remote Desktop and HyperV. As we did in a previous movie, click each area to see the rules already in place, and note that you can create your own. Just right-click, click new rule, and go from there. You can define rules by programs, ports, use predefined rules, or create a custom rule. The connection security rules area doesn't have anything in it though, and that's because you create these rules yourself. These rules define how authentication occurs and under what circumstances, and can enhance the security of transmissions between computers. You create a rule by right-clicking inside the empty pane and clicking new rule. There are lots of types of rules you can create. Let's talk a little bit about each one. Isolation rules restrict connections based on credentials such as domain membership or the health of the computer. Authentication exemption rules allow a single computer or a group of computers to connect without restrictions. You base these rules on computer's IP addresses, their subnets, or other numerical characteristics.
>
> **[1:35](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=95)** Server to server rules prevent certain computers from interacting with each other and like exemption rules can be based on their IP addresses. Tunnel rules are used to protect communications that are transmitted through an untrusted network. And finally, you can create a custom rule when none of the other rules meet your needs. Let's create one. Let's choose an exemption rule. I'll select authentication exemption and click next. I'll create an exemption for a range of computers based on their IP addresses. I'll click add and type in the IP address range. Here are some examples. I'll put my own IP address range in, and now go from 10.10.1.5 to 10.10.1.30, and then I'll click okay.
>
> **[2:37](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=157)** I can see it listed here, and so now I'll click next. I'm configuring this rule for my private network, so I'll deselect the others and click next again. And now I'll name it and I'll click finish.
>
> **[2:57](https://www.linkedin.com/learning/windows-10-networking-22602895/create-a-connection-security-rule?u=76281980&t=177)** You can see that the rule is now available in the connection security rules list. If you followed along and you want to undo the changes you've made, you can do that. Simply right-click and choose delete or disable rule. Click yes to confirm. Remember that connection security rules specify how and when authentication occurs and are enforced by the firewall once you set them in place. We set these rules to secure communications between computers by protecting the IP packets that are transmitted among them. Take some time to create your own connection rule and test it out. When you're ready, you can move on to the next video.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (1)
> **Versions:** 10.10.1 (2)
> **UI Navigation:** right-click (2)
> **Analogies:** such as (2)
> **Cross-References:** next video (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### 4. Networking and Troubleshooting Basics

[↑ Back to Table of Contents](#table-of-contents)

#### [Use ping to troubleshoot network connectivity](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=0)** - [Instructor] Finding the problem when network issues arise is sometimes easy, like when an Ethernet cable has become disconnected, when [[Wi-Fi]] is disabled, or airplane mode is on. You can often resolve these from the taskbar. Sometimes networking problems are more difficult to diagnose. Problems that occur when you can't reach a single host on the network fall into this category. These kinds of problems can be quite frustrating, especially when networking troubleshooters and other attempts to resolve the problem haven't worked. One tool for resolving problems like this is the command-line tool ping. Ping tests a connection from one computer to another to see if they can connect, and if they can't, it offers up information that might help you discover why. You can run the ping command from a Command Prompt. Let's open one. Search for cmd from the taskbar.
>
> **[1:02](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=62)** Before you test a connection to another computer, first make sure your own computer's TCP/IP stack is working properly. To do this type ping space 127.0.0.1. This is called the loopback address. The loopback address validates that your computer's network adapter is configured properly. When you press Enter, you'll get the results. You can see that I sent four packets out and I received four reply packets back, and this is good. This is what we want to see. You can also run this command from [[Powershell]]. If you aren't familiar with this tool, it's mostly used by IT professionals and enables them to perform all kinds of tasks using cmdlets. Let's open PowerShell. From the taskbar, I'll simply type the [[Microsoft Word|word]], and let's run that same command. Again, we get the same results. If you don't see results like this and you get an error instead, perhaps your network card isn't working or it isn't configured correctly or another service is interfering with IP. Whatever the case, you'll need to resolve that problem before moving forward. Sometimes restarting the computer helps, and if not, you can try uninstalling and reinstalling your network adapter, as we covered in a previous movie. Doing this will reset the adapter settings to their defaults.
>
> **[2:38](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=158)** You can also use the PowerShell cmdlet test-connection space 127.0.0.1 to perform the same task and receive a bit more information back. Let's do that. Here you can see the source, the destination, and the IPV4 address as well as the IPV6 address and how many bytes were sent and how many received. Once you know your computer isn't the problem, you can try to ping the problematic remote host. First, use a Command Prompt or PowerShell on the remote computer to find its IP address. You'll use this address with the ping command to see if your computer can reach it. I'll do it on this computer to show you. Just type ipconfig and press Enter. Here's the address of my laptop, 192.168.1.245. I tested this on another computer on my network and found that its address was 192.168.1.82. Now from my local PC, I'll type ping followed by an IP address that I know isn't around. You can see here that the request timed out. When you receive this error, it means that no reply messages were received from the host within the default time of 1 second or 1000 milliseconds.
>
> **[4:15](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=255)** Sometimes this is caused because the network is simply too busy to push the request through, but it could be more complicated and involve [[Routing]] errors or problems with packet filtering. If you think it's caused by an overworked network infrastructure, increase the amount of time ping uses. To do this, add the w option. W stands for wait. You can see what I've typed here, ping, a space, followed by the IP address, a space, a dash and a small w, a space, and 5000. Let's see if that helps. If the results still show that the message times out, it may not be a network connection issue. A another error you might receive is destination host unreachable. There are lots of reasons why this could happen, but the gist is there's no route available to it. I'll get the IP address of a computer on the network first, and then I'll remove it from the network, and then I'll ping the host. So I'll type ping, a space, and the address of the remote computer, 192.168 .1.82, and I'll press Enter. You can see two different errors here. The first two timed out. The second two packets found the destination host unreachable. The unreachable error could mean that there's a problem with the routing table, the default gateway, or something similar, but it could also mean
>
> **[5:47](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ping-to-troubleshoot-network-connectivity?u=76281980&t=347)** that the host is turned off or not connected to the network. I'm going to bring that destination host back onto the network, and let's try ping again. You can see that I've reached the host now. To see more options you can use with ping, type ping, a space, a forward slash and a question mark and press Enter. You can see there's quite a few. You don't have to use all of these or even remember them, but I do want you to know that more options are available. Continue to explore here as desired, and when you're finished, close the Command Prompt and PowerShell [[Windows]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (5), [[Routing]] (2), [[Wi-Fi]] (1), [[Microsoft Word|Word]] (1), [[Windows]] (1)
> **Tools:** powershell (5), command prompt (3)
> **Versions:** 127.0.0 (2), 192.168.1 (2), 192.168 (1), 1.82 (1)
> **Env Vars:** tcp (1), ipv4 (1), ipv6 (1)
> **Definitions:** is called (1), means that (1), stands for (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** we covered (1)
> **Prerequisites:** you'll need (1)

#### [Use ipconfig to troubleshoot network connectivity](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=0)** - [Demonstrator] If you've ever received an error that has to do with an IP address, especially if there's an IP conflict on the network, you might not have known how to resolve it. Your best bet is to use the ipconfig command. Ipconfig can be used to troubleshoot and fix problems for [[DHCP]], DNS, TCP/IP and others. You can use this command at a command prompt or using [[Windows]] [[Powershell]]. I'll use PowerShell here. If you're following along, open it with me from the task bar. Go ahead and type ipconfig and press Enter to get some basic information about your own IP addresses. If you have a look at this list, you'll see that I have an ethernet adapter that's disconnected, a LAN adapter that's disconnected, another one disconnected, and I have no IP addresses. That must mean I'm not connected to any network. Let's have a look at the most simple reason for that. I'll click the network icon on the task bar and see what's going on. You can see [[Wi-Fi|WiFi]] is not enabled, so I'll click it. Let's try that command again. Here we go. I have an ethernet adapter that's not connected. I've got a [[Wi-Fi|wireless LAN]] adapter that's not connected. I've got another one not connected, but here we are with the wireless LAN adapter for WiFi. You can see this particular adapter does have an IP address.
>
> **[1:34](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=94)** It's 192168.1.245.
>
> **[1:43](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=103)** Because each host on a network needs a unique IP address, something we talked about in an earlier movie, the first thing you'll want to do if you're having IP problems is to release your address and renew it, providing you're using DHCP. To do this, we'll type ipconfig, a space, a forward slash, and the [[Microsoft Word|word]] release. This will release our current IP address. Here's my wireless LAN adapter, and here's what we're looking at now. Let's get a new address. Ipconfig, space, forward slash, renew. Notice, we can't renew an IP address, for media that's disconnected. But as we saw before for our wireless LAN adapter WiFi, we do. It happened to give us the same IP address, which is fine. So we're ready to continue. Now, I'm going to stop for a minute here and configure my WiFi adapter with a static IP address because I want you to see what it looks like in the ipconfig results if you try to release and renew under these circumstances. So hold on, and I'll be right back. So I've done this and given my computer a static IP. Now watch what happens when I perform the same command (keyboard clicking) and try to release the IP address. Nothing happens. Likewise, I can't renew. (keyboard clicking) That said, if you see this,
>
> **[3:16](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=196)** when you try to release and renew an IP address, you'll need to go to adapter settings and see what's going on. (mouse clicking) This is the window that shows all my network adapters. We've gotten here before in previous movies. I'm going to right-click here and choose properties. I'll choose the Internet Protocol Version 4 option and click properties. And here we go, this is my problem. I need to change this to Obtain an IP address automatically. I need to do the same for DNS. And now I'll click Okay and close. Back at PowerShell. If I were to do the release and renew commands again, it would work. Beyond ipconfig, you can type ipconfig, space, forward slash, all. Let's do that. (keyboard clicking) This will give even more information. Let's scroll up and look for that WiFi entry again. And let's look for DHCP. Here's my active adapter. And here we can see a lot of information about this. Here's our IPv4 Address. We've seen that before, 192.168.1.245. We also have things like Subnet Mask and Default Gateway. And here we have a DHCP Server. Since there's an address here, we know this computer. And this adapter is using DHCP to get its IP address. Before you continue on,
>
> **[4:52](https://www.linkedin.com/learning/windows-10-networking-22602895/use-ipconfig-to-troubleshoot-network-connectivity?u=76281980&t=292)** make sure to look at all of the entries listed under your active adapter. DHCP is enabled here. Yes, autoconfiguration is enabled. We have an IPv6 Address, and we have even more information below here. What you see here can be quite useful when troubleshooting IP addresses, especially when there are conflicts on the network. When you're ready, close all windows and move on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DHCP]] (6), [[Wi-Fi|Wifi]] (5), [[Wi-Fi|Wireless lan]] (4), [[Powershell]] (3), [[Windows]] (2)
> **Env Vars:** dhcp (6), lan (5), dns (2), tcp (1)
> **Tools:** powershell (3), command prompt (1)
> **Non-Speech:** (keyboard clicking) (3), (mouse clicking) (1)
> **Versions:** 192168.1.245 (1), version 4 (1), 192.168.1 (1)
> **UI Navigation:** go to (1), right-click (1), scroll up (1)
> **Cross-References:** we talked about (1), as we saw (1)
> **Prerequisites:** configure (1), you'll need (1)

#### [Use tracert to troubleshoot network connectivity](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980&t=0)** - [Instructor] If you're having trouble reaching a destination host and that host is a few routers away, meaning it isn't on the local network, you can use the tracert command to see where in the process the data packets get lost. This command works by tracing the data as it passes from router to router, and each one it passes through is referred to as a hop. By evaluating the hops, you can pinpoint at the very least where a problem occurs. As you'll see in a minute, the tracert command creates a list of intermediate routers with corresponding time-to-live measurements to reach the destination host. Let's open a [[Powershell]] window and test it out. I'll type powershell here on the task bar and click [[Windows]] PowerShell in the results. Let's type tracert www.[linkedin.com](https://linkedin.com). It might take a while, but you'll see that the connection is successful, because the result ends at the [[LinkedIn]] destination. If you see asterisks, a response wasn't given from the router in the expected interval, but if you wait, you may see that eventually, data is returned from another source, provided the host can be reached in the end as you can see here. Note that it's possible that not all [[Hardware]] along the path is set to reply to tracert commands. You might see that a trace fails to complete, but the website or other resources is still available using traditional means like a web browser. That said though, if it takes a long time
>
> **[1:32](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980&t=92)** for data to get from one router to an another, it may mean that there is excessive latency over specific web links, and if the trace can be completed, the destination host might actually be unavailable. Now, let's type a different tracert command. I'll type tracert www.[lynda.com](https://lynda.com), but I'll misspell it, and let's see what happens. You can see that tracert can't resolve the name, that's because the destination doesn't exist. If I were to open a web browser and type the same link, you'll see that's true. Let me show you. And notice the site can't be reached, it's because there's actually not a website called [lllynda.com](https://lllynda.com) with that many Ls. Let's go back to PowerShell and run that tracert again to LinkedIn. Again, you'll see the little symbols that show a router couldn't be reached. If you're using routers on your own corporate network, you could probably figure out which router is having problems. However, keep in mind that while you can use tracert to trace a path to a remote host, you can't use tracert to resolve problems with routers that are out of your control like those on the internet. However, you can use the command to see if there's a problem getting out to your gateway or to your ISP
>
> **[3:05](https://www.linkedin.com/learning/windows-10-networking-22602895/use-tracert-to-troubleshoot-network-connectivity?u=76281980&t=185)** or if there are problems in an internet network that has multiple routers and gateways. Before we end this video, let's bring up the tracert help menu by typing tracert, a space, a forward slash, and a question mark. And here are some of the options that you can add with this command. Explore as you wish, and when you're finished here, close the PowerShell window.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (5), [[LinkedIn]] (3), [[Windows]] (1), [[Hardware]] (1)
> **Tools:** powershell (5)
> **URLs:** [linkedin.com](https://linkedin.com) (1), [lynda.com](https://lynda.com) (1), [lllynda.com](https://lllynda.com) (1)
> **Warnings:** note that (1), keep in mind (1)
> **CLI Commands:** ls (1)
> **Env Vars:** isp (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)

#### [Use PathPing to troubleshoot network connectivity](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980&t=0)** - [Instructor] If you've tried the ping and tracert commands to troubleshoot a network connectivity problem and didn't get the resolution you desired from either, you can use the two together with the command pathping. Pathping provides you with the route to any remote host and pings it. The results include information about the routers along the way and the round trip time value, as well as link loss information. Let's open a [[Powershell]] window and try it out. I'll type pathping www.[linkedin.com](https://linkedin.com) and press Enter. This could take a little while, perhaps three or four minutes to complete on your end. As with tracert, you'll see the hops the data takes to get to the destination address. As with ping, you'll get information about how much time each hop took and how many packets were sent or lost during the transmission. If you get a destination host unreachable message, it could be because the local system or remote router has no way to get to the destination. If you get an unknown host message, the host name you're trying to get to can't be resolved to its IP address. If this is the case, first check to see that you spelled the host name correctly. Then check again to see if the available DNS servers can resolve it. If this doesn't fix the problem, you'll have to do a little more troubleshooting on the DNS side. I'll type pathping
>
> **[1:33](https://www.linkedin.com/learning/windows-10-networking-22602895/use-pathping-to-troubleshoot-network-connectivity?u=76281980&t=93)** and I'll type www.[lllynda.com](https://lllynda.com) like we did in the last movie, purposefully misspelling the [[Microsoft Word|word]] Linda and let's see what happens. Like before, the connection can't be made because no such host exists. You can verify this in a web browser if you like. You can use pathping [[Statistics]] to see where in a wide area network packets slowed down or dropped. If you're working in an environment where packets must pass through three or four routers to reach their destination host, you can easily tell where excessive latency occurs. You can also use this tool to see if data is taking an alternate link to a host because of a bottleneck somewhere else. You can use pathping with an IP address too. And as with other TCP/IP tools, there are options you can add to further define how to use it. Let's type pathping, a space, a forward slash, and a question mark to see those options. For example, the -w switch lets you increase the default interval for responses. If increasing the interval still causes errors, it's likely because the packets are being forwarded in a [[Routing]] loop. You can use tracer to find the source of the problem. Continue to explore pathping, incorporating options that are applicable to your network and troubleshooting situation. When you're finished, type exit, or close the PowerShell window.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Powershell]] (2), [[LinkedIn]] (1), [[Microsoft Word|Word]] (1), [[Statistics]] (1), [[Routing]] (1)
> **Env Vars:** dns (2), tcp (1)
> **URLs:** [linkedin.com](https://linkedin.com) (1), [lllynda.com](https://lllynda.com) (1)
> **Tools:** powershell (2)
> **CLI Commands:** find (1)
> **Cross-References:** in the last (1)
> **Analogies:** for example (1)
> **Warnings:** troubleshoot (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/windows-10-networking-22602895/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/windows-10-networking-22602895/next-steps?u=76281980&t=0)** - [Joli] Thank you for watching [[Windows 10]]: Networking. In this course, you learned how to set up, configure, connect, secure, troubleshoot, and manage network connections. Next, practice what you've learned. Take notice of the networks you connect to and how you configure them from the start. Create your own VPN and secure it. Optimize the connections you configure and resolve problems when they occur at both the Command Line and [[Powershell]]. If you'd like to learn more about networking, search for additional courses on [[LinkedIn]] learning. Make sure to search for terms like [[DHCP]], APIPA, DNS, and TCP/IP. As always, I want to hear from you. Feel free to contact me anytime via LinkedIn.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (2), [[Windows 10]] (1), [[Powershell]] (1), [[DHCP]] (1)
> **Env Vars:** vpn (1), dhcp (1), apipa (1), dns (1), tcp (1)
> **Prerequisites:** configure (3), set up (1)
> **Tools:** command line (1), powershell (1)
> **CLI Commands:** make (1)
> **Best Practices:** make sure to (1)
> **Warnings:** troubleshoot (1)
> **Speakers:** - [joli] (1)


## Instructor

- [[Joli Ballew]]

## Path Context

### In [[Explore a Career in IT Support]]
← [[Windows 10- Security]] | **7 of 11** | [[Troubleshooting Common PC Issues for Users]] →

## Appears In

- [[Explore a Career in IT Support]]

---

[↑ Back to top](#)